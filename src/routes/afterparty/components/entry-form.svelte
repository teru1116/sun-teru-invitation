<script lang="ts">
import ky from "ky";
import { onMount } from "svelte";
import { writable } from "svelte/store";
import { STORAGE_KEY_PREFIX } from "../../../const";
import { getMessageForYou } from "../composables/message-for-you";

onMount(() => {
	restoreFormData();
});

const fullname = writable("");
$: messageForYou = getMessageForYou($fullname);

let email = "";
let sending = false;
let hasSent = false;

function saveFormDataToLocal() {
	localStorage.setItem(`${STORAGE_KEY_PREFIX}email`, email);
	localStorage.setItem(`${STORAGE_KEY_PREFIX}fullname`, $fullname);
}

function restoreFormData() {
	email = localStorage.getItem(`${STORAGE_KEY_PREFIX}email`) ?? "";

	fullname.set(
		localStorage.getItem(`${STORAGE_KEY_PREFIX}fullname`) ??
			`${localStorage.getItem(`${STORAGE_KEY_PREFIX}familyname`) ?? ""}${localStorage.getItem(`${STORAGE_KEY_PREFIX}givenName`) ?? ""}`,
	);
}

async function handleSubmit() {
	sending = true;

	try {
		await ky
			.post("https://sun-teru-wedding.com/api/afterparty", {
				json: {
					fullname: $fullname,
					email,
				},
			})
			.json();

		hasSent = true;
	} catch (e) {
		console.error(JSON.stringify(e));
	} finally {
		sending = false;
	}
}
</script>

<div>
  <h2>
    入力フォーム
  </h2>
  <form on:submit|preventDefault={handleSubmit}>
    <fieldset class="required">
      <legend>氏名</legend>
      <input type="text" name="氏名" placeholder="中原サム太郎" autocomplete="name" required bind:value={$fullname} on:blur={saveFormDataToLocal}>
      {#if messageForYou}
        <p class="text-primary mt-2">{messageForYou}</p>
      {/if}
      <div class="mt-4 bg-bgGray p-4">
        <p class="text-sm leading-6 text-textGray">
          漢字のフルネームでお願いします
          {#if $fullname.includes('韓')}
            ※ごめん！スンジは片仮名でもよかったね！
          {/if}
        </p>
      </div>
    </fieldset>
    <fieldset class="required">
      <legend>メールアドレス</legend>
      <input type="email" name="email" placeholder="example@gmail.com" autocomplete="email" required bind:value={email} on:blur={saveFormDataToLocal}>
      <div class="mt-4 bg-bgGray p-4">
        <p class="text-sm leading-6 text-textGray">
          事前のご連絡や 写真・動画のアップロード先のご案内のため メールアドレスの入力をお願いしております
        </p>
      </div>
    </fieldset>
    <button
      disabled={!$fullname || !email || sending}
      class="flex items-center gap-x-w w-full sm:w-[412px] sm:mx-auto sm:block bg-primary disabled:bg-[#6e7881] hover:opacity-80 text-white py-4 px-6 rounded font-bold tracking-wide"
    >
      {#if !sending && !hasSent}
        <div class="w-full text-center">登録する</div>
      {:else if sending}
        <div class="w-full flex items-center justify-center">
          <div style="background-image: url('/loading-white.gif');" class="w-6 h-6 bg-cover bg-center bg-no-repeat" />
          <div class="w-14 text-center">送信中</div>
        </div>
      {:else if hasSent}
        <div class="w-full flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24" height="24" fill="#FFFFFF">
            <path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
          </svg>
          <div class="w-14 text-center">完了</div>
        </div>
      {:else}
        <div class="w-full text-center">登録する</div>
      {/if}
    </button>
    {#if hasSent}
      <p class="mt-4 text-sm leading-6 text-textGray">
        数秒以内に確認メールが届きます<br>
        メールが届かない場合 上記のメールアドレスを確認して再度ボタンを押してください<br>
        それでも届かない場合は お手数ですがこのページの一番下のフォームから新郎にお問い合わせください
      </p>
    {/if}
  </form>
</div>