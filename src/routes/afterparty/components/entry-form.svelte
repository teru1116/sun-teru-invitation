<script lang="ts">
import { onMount } from "svelte";
import { STORAGE_KEY_PREFIX } from "../../../const";

onMount(() => {
	restoreFormData();
});

let email = "";
let fullname = "";

function saveFormDataToLocal() {
	localStorage.setItem(`${STORAGE_KEY_PREFIX}email`, email);
	localStorage.setItem(`${STORAGE_KEY_PREFIX}fullname`, fullname);

	if (fullname.includes("米川") && !email) {
		email = "khaki.crea@gmail.com";
	}
}

function restoreFormData() {
	email = localStorage.getItem(`${STORAGE_KEY_PREFIX}email`) ?? "";
	fullname = localStorage.getItem(`${STORAGE_KEY_PREFIX}fullname`) ?? "";
}

$: youAreJoker = fullname.includes("サム");

async function handleSubmit() {
	if (youAreJoker) {
		return window.alert("嘘つけ！😠");
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
          事前のご連絡や、写真・動画のアップロード先のご案内のため入力をお願いしております。
        </p>
      </div>
    </fieldset>
    <button
      disabled={!fullname || !email}
      class="w-full sm:w-[412px] sm:mx-auto sm:block bg-primary disabled:bg-[#6e7881] hover:opacity-80 text-white py-4 px-6 rounded font-bold tracking-wide"
    >
      登録する
    </button>
  </form>
</div>