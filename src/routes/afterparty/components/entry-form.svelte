<script lang="ts">
import ky, { HTTPError } from "ky";
import { onMount } from "svelte";
import { STORAGE_KEY_PREFIX } from "../../../const";

onMount(() => {
	restoreFormData();
});

let email = "";
let fullname = "";
let sending = false;
let hasSent = false;
let error: string | null = null;

function saveFormDataToLocal() {
	localStorage.setItem(`${STORAGE_KEY_PREFIX}email`, email);
	localStorage.setItem(`${STORAGE_KEY_PREFIX}fullname`, fullname);

	if (fullname.includes("米川") && !email) {
		email = "khaki.crea@gmail.com";
	}
}

function restoreFormData() {
	email = localStorage.getItem(`${STORAGE_KEY_PREFIX}email`) ?? "";
	fullname =
		localStorage.getItem(`${STORAGE_KEY_PREFIX}fullname`) ??
		`${localStorage.getItem(`${STORAGE_KEY_PREFIX}familyname`) ?? ""}${localStorage.getItem(`${STORAGE_KEY_PREFIX}givenName`) ?? ""}`;
}

$: youAreJoker = fullname.includes("サム");

async function handleSubmit() {
	sending = true;

	try {
		await ky
			.post("https://sun-teru-wedding.com/api/afterparty", {
				json: {
					fullname,
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
      <input type="text" name="氏名" placeholder="中原サム太郎" autocomplete="name" required bind:value={fullname} on:blur={saveFormDataToLocal}>
      {#if youAreJoker}
        <p class="text-errorRed mt-2">真面目に入力してもらっていいかな？</p>
      {/if}
      {#if fullname.includes('米川')}
        <p class="text-primary mt-2">よねちゃん！！パースからはるばる来てくれるのまじで嬉しすぎる😭</p>
      {/if}
    </fieldset>
    <fieldset class="required">
      <legend>メールアドレス</legend>
      <input type="email" name="email" placeholder="example@gmail.com" autocomplete="email" required bind:value={email} on:blur={saveFormDataToLocal}>
      {#if fullname.includes('米川') && email === 'khaki.crea@gmail.com'}
        <p class="text-primary mt-2">メアドこれだよね？違ったら編集してもらえればと！</p>
      {/if}
      <div class="mt-4 bg-bgGray p-4">
        <p class="text-sm leading-6 text-textGray">
          事前のご連絡や 写真・動画のアップロード先のご案内のため メールアドレスの入力をお願いしております
        </p>
      </div>
    </fieldset>
    <button
      disabled={!fullname || !email || sending}
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
  </form>
</div>