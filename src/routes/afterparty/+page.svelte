<script lang="ts">
import FirstView from "../../components/first-view.svelte";
import FooterDefault from "../../components/footer-default.svelte";
import AccessList from "./components/access-list.svelte";
import GoogleMapSection from "./components/googlemap.svelte";
import InformationList from "./components/information-list.svelte";
</script>

<div class="bg-bgGray">
  <FirstView />
  <div class="pb-10">
    <div class="px-4 sm:max-w-[800px] sm:mx-auto">
      <section class="mb-10 -mt-10">
        <p class="text-center text-textBlack">
          このたび 私たちは結婚式を<br>
          挙げることになりました<br>
          <br>
          文面考えてもらえないだろうか<br>
          文面考えてもらえないだろうか<br>
          文面考えてもらえないだろうか<br>
          <br>
          楠本輝也<br>
          新川綾菜
        </p>
      </section>
      <section class="mb-10">
        <InformationList />
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