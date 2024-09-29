<script lang="ts">
import FirstView from "../../components/first-view.svelte";
import FooterDefault from "../../components/footer-default.svelte";
import AccessList from "./components/access-list.svelte";
import GoogleMapSection from "./components/googlemap.svelte";
import InformationList from "./components/information-list.svelte";
import PaymentInformation from "./components/payment-information.svelte";
</script>

<div class="bg-bgGray">
  <FirstView />
  <div class="pb-10">
    <div class="px-4 sm:max-w-[800px] sm:mx-auto">
      <section class="mb-10 -mt-10">
        <p class="text-center text-textBlack">
          このたび 私たちは結婚式を<br class="sm:hidden">挙げることになりました<br>
          <br>
          つきましては 日頃仲良くしていただいている<br class="sm:hidden">皆さまに感謝の気持ちを表すため<br>
          ささやかながら結婚式二次会の<br class="sm:hidden">パーティーを開催いたします<br>
          <br>
          皆さまと楽しいひとときを<br class="sm:hidden">過ごせればと思っておりますので<br>
          ぜひご出席いただきたく存じます<br>
          <br>
          楠本輝也<br>
          新川綾菜
        </p>
      </section>
      <section class="mb-10">
        <InformationList />
      </section>
      <section class="mb-10">
        <PaymentInformation />
      </section>
    </div>
    <div class="sm:hidden">
      <GoogleMapSection />
    </div>
    <div class="hidden sm:block sm:px-4 sm:max-w-[800px] sm:mx-auto">
      <section class="mb-10">
        <AccessList />
      </section>
    </div>
  </div>
</div>
<FooterDefault />