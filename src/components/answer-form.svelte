<script lang="ts">
  import { onMount } from "svelte";
  import { STORAGE_KEY_PREFIX } from "../const";
  import PostalCodeInput, { type PostalCodeInputChangeEvent } from "./postal-code-input.svelte";
  import PrefectureSelect from "./prefecture-select.svelte";
  import RadioButtonGroup from "./radio-button-group.svelte";
  import ArrowForwardSvg from "./icons/arrow-forward.svg.svelte";
  
  onMount(() => {
    restoreFormData()
  })

  let willAttend = ''
  let phoneNumber = ''
  let email = ''
  let birthday = ''
  let postalCode = ''
  let prefecture = ''
  let address = ''
  let willUseShuttleBus = ''

  $: disabled = willAttend === null || !phoneNumber || !email || !birthday || !postalCode || !prefecture || !address || willUseShuttleBus === null

  function onWillAttendChange(event: CustomEvent<string>) {
    willAttend = event.detail
    localStorage.setItem(`${STORAGE_KEY_PREFIX}willAttend`, willAttend)
  }

  function onPostalCodeChange(event: CustomEvent<PostalCodeInputChangeEvent>) {
    postalCode = event.detail.postalCode
    prefecture = event.detail.prefecture
    address = event.detail.city
  }

  function onPrefectureSelect(event: CustomEvent<string>) {
    prefecture = event.detail
  }

  function onWillUseShuttleBus(event: CustomEvent<string>) {
    willUseShuttleBus = event.detail
    localStorage.setItem(`${STORAGE_KEY_PREFIX}willUseShuttleBus`, willUseShuttleBus)
  }

  function saveFormDataToLocal() {    
    localStorage.setItem(`${STORAGE_KEY_PREFIX}willAttend`, willAttend)
    localStorage.setItem(`${STORAGE_KEY_PREFIX}phoneNumber`, phoneNumber)
    localStorage.setItem(`${STORAGE_KEY_PREFIX}email`, email)
    localStorage.setItem(`${STORAGE_KEY_PREFIX}birthday`, birthday)
    localStorage.setItem(`${STORAGE_KEY_PREFIX}postalCode`, postalCode)
    localStorage.setItem(`${STORAGE_KEY_PREFIX}prefecture`, prefecture)
    localStorage.setItem(`${STORAGE_KEY_PREFIX}address`, address)
    localStorage.setItem(`${STORAGE_KEY_PREFIX}willUseShuttleBus`, willUseShuttleBus)
  }

  function restoreFormData() {
    willAttend = localStorage.getItem(`${STORAGE_KEY_PREFIX}willAttend`) ?? ''
    phoneNumber = localStorage.getItem(`${STORAGE_KEY_PREFIX}phoneNumber`) ?? ''
    email = localStorage.getItem(`${STORAGE_KEY_PREFIX}email`) ?? ''
    birthday = localStorage.getItem(`${STORAGE_KEY_PREFIX}birthday`) ?? ''
    postalCode = localStorage.getItem(`${STORAGE_KEY_PREFIX}postalCode`) ?? ''
    prefecture = localStorage.getItem(`${STORAGE_KEY_PREFIX}prefecture`) ?? ''
    address = localStorage.getItem(`${STORAGE_KEY_PREFIX}address`) ?? ''
    willUseShuttleBus = localStorage.getItem(`${STORAGE_KEY_PREFIX}willUseShuttleBus`) ?? ''
  }
</script>

<form method="post" action="https://hyperform.jp/api/UULN7qix">
  <fieldset class="required">
    <legend>ご出欠</legend>
    <RadioButtonGroup
      name="ご出欠"
      options={[{ label: 'ご出席', value: 'YES' }, { label: 'ご欠席', value: 'NO' }]}
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
      options={[{ label: '希望する', value: 'YES' }, { label: '希望しない', value: 'NO' }]}
      on:change={onWillUseShuttleBus}
    />
    <div class="mt-4 p-2 bg-bgGray rounded">
      <p class="text-sm leading-6 text-textGray">
        各便の人数のバランスを図るため<br>
        ご回答をお願いしております
      </p>
    </div>
  </fieldset>

  <fieldset>
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