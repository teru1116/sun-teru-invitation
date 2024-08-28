<script lang="ts">
  import { onMount } from "svelte";
  import { STORAGE_KEY_PREFIX } from "../const";

  let loading = true
  let familyName: string | null = null
  let givenName: string | null = null  

  onMount(() => {
    familyName = localStorage.getItem(`${STORAGE_KEY_PREFIX}familyName`)
    givenName = localStorage.getItem(`${STORAGE_KEY_PREFIX}givenName`)
    loading = false
  })
</script>

<p class="text-center text-textBlack">
  <span class="h-7">
    {loading ? '' : `${familyName ?? '皆'}${givenName ?? ''}様`}
  </span>
  <br>
  <br>
  いかがお過ごしでしょうか<br>
  このたび 私たちは結婚式を<br>
  挙げることになりました<br>
  <br>
  つきましては 日ごろお世話になっている<br>
  皆様にお集まりいただき<br>
  ささやかな披露宴を催したく存じます<br>
  <br>
  ご多用中 誠に恐縮ではございますが<br>
  ぜひご出席いただきたく<br>
  ご案内申し上げます<br>
  <br>
  2024年9月吉日<br>
  <br>
  楠本輝也<br>
  新川綾菜
</p>