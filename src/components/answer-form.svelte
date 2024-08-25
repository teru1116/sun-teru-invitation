<script lang="ts">
  import { onMount } from "svelte";
  import PostalCodeInput, { type PostalCodeInputChangeEvent } from "./postal-code-input.svelte";
  import PrefectureSelect from "./prefecture-select.svelte";
  import RadioButtonGroup from "./radio-button-group.svelte";
  import ArrowForwardSvg from "./icons/arrow-forward-svg.svelte";
  
  onMount(() => restoreFormData())

  let willAttend: boolean | null = null
  let phoneNumber = ''
  let email = ''
  let birthday = ''
  let postalCode = ''
  let prefecture = ''
  let address = ''
  let willUseShuttleBus: boolean | null = null

  $: disabled = willAttend === null || !phoneNumber || !email || !birthday || !postalCode || !prefecture || !address || willUseShuttleBus === null

  function onWillAttendChange(event: CustomEvent<boolean>) {
    willAttend = event.detail
  }

  function onPostalCodeChange(event: CustomEvent<PostalCodeInputChangeEvent>) {
    postalCode = event.detail.postalCode
    prefecture = event.detail.prefecture
    address = event.detail.city
  }

  function onPrefectureSelect(event: CustomEvent<string>) {
    prefecture = event.detail
  }

  function onWillUseShuttleBus(event: CustomEvent<boolean>) {
    willUseShuttleBus = event.detail
  }

  function saveFormDataToLocal() {
    const prefix = 'SunTeruWeddingInvitation.FormData.'
    localStorage.setItem(`${prefix}phoneNumber`, phoneNumber)
    localStorage.setItem(`${prefix}email`, email)
    localStorage.setItem(`${prefix}birthday`, birthday)
    localStorage.setItem(`${prefix}postalCode`, postalCode)
    localStorage.setItem(`${prefix}prefecture`, prefecture)
    localStorage.setItem(`${prefix}address`, address)
  }

  function restoreFormData() {
    const prefix = 'SunTeruWeddingInvitation.FormData.'
    phoneNumber = localStorage.getItem(`${prefix}phoneNumber`) ?? ''
    email = localStorage.getItem(`${prefix}email`) ?? ''
    birthday = localStorage.getItem(`${prefix}birthday`) ?? ''
    postalCode = localStorage.getItem(`${prefix}postalCode`) ?? ''
    prefecture = localStorage.getItem(`${prefix}prefecture`) ?? ''
    address = localStorage.getItem(`${prefix}address`) ?? ''
  }
</script>

<form>
  <fieldset class="required">
    <legend>ご出欠</legend>
    <RadioButtonGroup
      name="ご出欠"
      options={['ご出席', 'ご欠席'].map(value => ({ label: value, value }))}
      on:change={onWillAttendChange}
    />
  </fieldset>

  <fieldset class="required">
    <legend>電話番号</legend>
    <input type="tel" name="電話番号" placeholder="09012345678" required bind:value={phoneNumber} on:blur={saveFormDataToLocal}>
  </fieldset>

  <fieldset class="required">
    <legend>メールアドレス</legend>
    <input type="email" name="email" placeholder="example@gmail.com" autocomplete="email" required bind:value={email} on:blur={saveFormDataToLocal}>
  </fieldset>

  <fieldset class="required">
    <legend>誕生日</legend>
    <input type="email" name="email" placeholder="11/16" autocomplete="email" required bind:value={birthday} on:blur={saveFormDataToLocal}>
  </fieldset>

  <fieldset class="required">
    <legend>郵便番号</legend>
    <PostalCodeInput postalCode={postalCode} on:change={onPostalCodeChange} on:blur={saveFormDataToLocal} />
  </fieldset>

  <fieldset class="required">
    <legend class="mb-2">都道府県</legend>
    <!-- 郵便番号のオートコンプリートにより、市区町村までの住所が補完されるため、都道府県と市区町村のinputはautocompleteを設定していない -->
    <input type="text" name="都道府県" class="hidden" value={prefecture}>
    <PrefectureSelect prefecture={prefecture} on:change={onPrefectureSelect} on:blur={saveFormDataToLocal} />
  </fieldset>

  <fieldset class="required">
    <legend>住所</legend>
    <input type="text" name="住所" placeholder="千代田区千代田1-1" required bind:value={address} on:blur={saveFormDataToLocal}>
  </fieldset>

  <fieldset class="required">
    <legend>送迎バス</legend>
    <RadioButtonGroup
      name="送迎バス"
      options={['希望する', '希望しない'].map(value => ({ label: value, value }))}
      on:change={onWillUseShuttleBus}
    />
  </fieldset>

  <fieldset class="">
    <legend>アレルギーについて</legend>
    <div class="mt-4">
      <small class="text-sm leading-6 text-textGray block mb-2">
        下記のページからご入力ください<br>
        会場に直接送信されます
      </small>
      <a href="https://www.tg-wn.com/guest/allergy-entry/SSY0000564090-$2y$10$kCMQzEbbtzcVNiwxvOc5deaKlgRqkvz0QRpxud6Uj6U6gMHO1o3i" target="_blank" class="underline text-primary fill-primary tracking-wide flex items-center gap-x-1">
        <span>食事制限の事前登録</span>
        <ArrowForwardSvg size={16} />
      </a>
    </div>
  </fieldset>

  <div class="relative pt-6">
    {#if disabled}
      <p class="absolute text-errorRed text-sm">必須項目をすべて入力してください</p>
    {/if}
    <button
      type="submit"
      disabled={disabled}
      class="w-full sm:w-[412px] sm:mx-auto sm:block mt-8 bg-primary disabled:bg-[#6e7881] hover:opacity-80 text-white py-4 px-6 rounded font-bold tracking-wide"
    >
      招待状に回答する
    </button>
  </div>
</form>