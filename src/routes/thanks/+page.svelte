<script lang="ts">
  import { onMount } from "svelte";
  import { STORAGE_KEY_PREFIX } from "../../const";
  import FooterDefault from "../../components/footer-default.svelte";
  import AfterAnswerContent from "../../components/after-answer-content.svelte";

  onMount(() => {
    const formRedirected = document.referrer && document.referrer.startsWith(import.meta.env.VITE_FORM_REDIRECT_FROM)
    if (formRedirected && !localStorage.getItem(`${STORAGE_KEY_PREFIX}completedAt`)) {
      localStorage.setItem(`${STORAGE_KEY_PREFIX}completedAt`, String(new Date().getTime()))
    }
  })
</script>

<div class="bg-bgGray min-h-screen">
  <AfterAnswerContent>
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
  </AfterAnswerContent>
</div>
<FooterDefault />