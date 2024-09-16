<script lang="ts">
import AfterAnswerContent from "../components/after-answer-content.svelte";
import BeforeAnswerContent from "../components/before-answer-content.svelte";
import FirstView from "../components/first-view.svelte";
import FooterDefault from "../components/footer-default.svelte";
import GuestNotFoundError from "../components/guest-not-found-error.svelte";
import LoadingText from "../components/loading-text.svelte";
import { completed, guestId, loading } from "../stores";
</script>

<div class="bg-bgGray">
  <FirstView />
  {#if !$guestId}
    <div class="min-h-[calc(100vh_-_770px)] px-6 sm:w-[800px] sm:mx-auto sm:px-0 pt-6">
      {#if $loading}
        <LoadingText />
      {:else}
        <GuestNotFoundError />
      {/if}
    </div>
  {:else}
    {#if !$completed}
    <div class="pb-10">
      <BeforeAnswerContent />
    </div>
  {:else}
    <div class="-mt-16">
      <AfterAnswerContent />
    </div>
  {/if}
  {/if}
</div>
<FooterDefault />