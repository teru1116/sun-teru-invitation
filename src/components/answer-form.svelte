<script lang="ts">
  import PostalCodeInput, { type PostalCodeInputChangeEvent } from "./postal-code-input.svelte";
  import PrefectureSelect from "./prefecture-select.svelte";
  import RadioButtonGroup from "./radio-button-group.svelte";

  let postalCode = ''
  let prefecture = ''
  let address = ''

  function onPostalCodeChange(event: CustomEvent<PostalCodeInputChangeEvent>) {
    prefecture = event.detail.prefecture
    address = event.detail.city
  }

  function onPrefectureSelect(event: CustomEvent<string>) {
    prefecture = event.detail
  }
</script>
<form>
  <fieldset class="required">
    <legend>ご出欠</legend>
    <RadioButtonGroup
      name="ご出欠"
      options={['ご出席', 'ご欠席'].map(value => ({ label: value, value }))}
    />
  </fieldset>

  <fieldset class="required">
    <legend>電話番号</legend>
    <input type="tel" name="電話番号" placeholder="09012345678" required>
  </fieldset>

  <fieldset class="required">
    <legend>メールアドレス</legend>
    <input type="email" name="email" placeholder="example@gmail.com" autocomplete="email" required>
  </fieldset>

  <fieldset class="required">
    <legend>郵便番号</legend>
    <PostalCodeInput postalCode={postalCode} on:change={onPostalCodeChange} />
  </fieldset>

  <fieldset class="required">
    <legend class="mb-2">都道府県</legend>
    <!-- 郵便番号のオートコンプリートにより、市区町村までの住所が補完されるため、都道府県と市区町村のinputはautocompleteを設定していない -->
    <input type="text" name="都道府県" class="hidden" value={prefecture}>
    <PrefectureSelect prefecture={prefecture} on:change={onPrefectureSelect} />
  </fieldset>

  <fieldset class="required">
    <legend>住所</legend>
    <input type="text" name="住所" placeholder="千代田区千代田1-1" required bind:value={address}>
  </fieldset>

  <fieldset class="required">
    <legend>送迎バス</legend>
    <RadioButtonGroup
      name="送迎バス"
      options={['希望する', '希望しない'].map(value => ({ label: value, value }))}
    />
  </fieldset>

  <fieldset class="">
    <legend>アレルギーについて</legend>
    <div class="mt-4">
      <small class="text-sm leading-6 text-textGray block mb-2">
        お手数ですが 下記のページからご入力ください<br>
        会場に直接送信されます
      </small>
      <a href="https://www.tg-wn.com/guest/allergy-entry/SSY0000564090-$2y$10$kCMQzEbbtzcVNiwxvOc5deaKlgRqkvz0QRpxud6Uj6U6gMHO1o3i" target="_blank" class="underline text-action tracking-wide">
        食事制限の事前登録
      </a>
    </div>
  </fieldset>

  <div class="">
    <button
      type="submit"
      class="w-full sm:w-[412px] sm:mx-auto sm:block mt-8 bg-action disabled:bg-[#6e7881] hover:opacity-80 text-white py-4 px-6 rounded font-bold tracking-wide"
    >
      招待状に回答する
    </button>
  </div>
</form>