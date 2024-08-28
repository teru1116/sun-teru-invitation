<script lang="ts">
  import "../app.css";
  import { onMount } from "svelte"

  let g: string | null = null

  onMount(() => {
    const url = new URL(location.href)
    const queryParams = new URLSearchParams(url.search)
    g = queryParams.get('g')
  })

  function init() {
    // URLクエリパラメータに付与されたゲストIDから氏名を取得する

    // URLからクエリパラメータを取り除く
  }

  init()
</script>

<slot />