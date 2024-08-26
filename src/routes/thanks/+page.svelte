<script lang="ts">
  import { onMount } from "svelte";
  import { STORAGE_KEY_PREFIX } from "../../const";
  import AccessList from "../../components/access-list.svelte";
  import InformationList from "../../components/information-list.svelte";
  import GoogleMapSection from "../../components/googlemap.svelte";
  import FooterDefault from "../../components/footer-default.svelte";
  import GuestProfile from "../../components/guest-profile.svelte";

  onMount(() => {
    // デバッグ用 後で消す
    console.log(document.referrer)
    console.log(import.meta.env.VITE_FORM_REDIRECT_FROM)

    const formRedirected = document.referrer && document.referrer.startsWith(import.meta.env.VITE_FORM_REDIRECT_FROM)
    if (formRedirected) {
      localStorage.setItem(`${STORAGE_KEY_PREFIX}completedAt`, String(new Date().getTime()))
    }
  })
</script>

<div class="bg-bgGray min-h-screen">
  <div class="px-4 pt-6">
    <section class="mb-10">
      <h2 class="text-center">
        回答しました
      </h2>
      <p class="text-center">
        ご出席ありがとうございます<br>
        お会いできるのを楽しみにしています<br>
        <br>
        楠本輝也<br>
        新川綾菜
      </p>
    </section>
    <section class="mb-10">
      <GuestProfile />
    </section>
    <section class="mb-10">
      <InformationList />
    </section>
    <section class="mb-10">
      <AccessList />
    </section>
  </div>
  <GoogleMapSection />
</div>
<FooterDefault />