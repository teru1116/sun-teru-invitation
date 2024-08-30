<script lang="ts">
  import { onMount } from "svelte";
  import { STORAGE_KEY_PREFIX } from "../const";
  import FirstView from "../components/first-view.svelte";
  import FooterDefault from "../components/footer-default.svelte";
  import BeforeAnswerContent from "../components/before-answer-content.svelte";
  import AfterAnswerContent from "../components/after-answer-content.svelte";

  let completed = false

  onMount(() => {
    // src/components/answer-form.svelte でフォーム送信時にセットしている
    completed = localStorage.getItem(`${STORAGE_KEY_PREFIX}formSubmitted`) === 'true'

    // 隠しコマンド
    if (localStorage.getItem(`${STORAGE_KEY_PREFIX}feedback`) === 'アドリブで') {
      completed = false
    }
  })
</script>

<div class="bg-bgGray">
  <FirstView />
  {#if !completed}
    <div class="pb-10">
      <BeforeAnswerContent />
    </div>
  {:else}
    <div class="-mt-16">
      <AfterAnswerContent />
    </div>
  {/if}
</div>
<FooterDefault />