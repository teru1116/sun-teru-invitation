<script context="module" lang="ts">
  export interface Guest {
    id: string
    familyName: string
    givenName: string
  }
</script>

<script lang="ts">
  import "../app.css";
  import { onMount } from "svelte"
  import ky from 'ky'
  import { STORAGE_KEY_PREFIX } from "../const";

  let guestId: string | null = null

  onMount(async () => {
    // URLクエリパラメータで指定されたゲストIDを取得
    const url = new URL(location.href)
    const queryParams = new URLSearchParams(url.search)
    guestId = queryParams.get('g') ?? localStorage.getItem(`${STORAGE_KEY_PREFIX}guestId`)

    if (guestId) {
      // ゲストIDから氏名を取得
      const json = await ky.get<Guest>(`https://sun-teru-wedding.com/api/get-my-dear-guest?id=${guestId}`).json()

      localStorage.setItem(`${STORAGE_KEY_PREFIX}guestId`, json.id)
      localStorage.setItem(`${STORAGE_KEY_PREFIX}familyName`, json.familyName)
      localStorage.setItem(`${STORAGE_KEY_PREFIX}givenName`, json.givenName)

      // URLからクエリパラメータを取り除く
      url.search = ''
      window.history.replaceState({}, document.title, url.toString())
    }
  })
</script>

<slot />