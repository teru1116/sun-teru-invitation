<script lang="ts">
  import { onMount } from "svelte";

  onMount(() => {
    document.addEventListener('DOMContentLoaded', () => {
      const video = document.getElementById('fv-video') as HTMLVideoElement
      video.play()
    })
  })
</script>

<div class="h-[400px] relative">
  <video id="fv-video" class="absolute top-0 left-0 w-full h-[400px] object-cover" autoplay loop muted playsinline>
    <source src="/firstview.mp4" type="video/mp4">
  </video>
  <div
    class="absolute top-0 left-0 w-full h-full"
    style="background-color: rgba(0, 0, 0, 0.4);"
  />
  <div class="absolute top-0 left-0 w-full h-full text-white flex flex-col justify-between pt-12 pb-6">
    <h1 class="text-center text-4xl mb-8">
      INVITATION
    </h1>
    <div>
      <h2 class="text-center text-2xl mb-4">
        TERUYA & AYANA
      </h2>
      <h3 class="text-center text-xl">
        2024.11.17.Sun
      </h3>
    </div>
  </div>
</div>