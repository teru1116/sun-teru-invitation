<script lang="ts">
import AfterAnswerContent from "../components/after-answer-content.svelte";
import BeforeAnswerContent from "../components/before-answer-content.svelte";
import FirstView from "../components/first-view.svelte";
import FooterDefault from "../components/footer-default.svelte";
import { completed } from "../stores";
</script>

<div class="bg-bgGray">
  <FirstView />
  {#if !$completed}
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