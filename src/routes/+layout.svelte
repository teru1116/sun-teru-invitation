<script lang="ts">
  import "../app.css"
  import { onMount } from "svelte";
  import { guestId, familyName, givenName, loading, type Guest } from "../stores"
  import { STORAGE_KEY_PREFIX } from "../const"
  import ky from 'ky'

  onMount(async () => {
    loading.set(true)

    const url = new URL(location.href)
    const queryParams = new URLSearchParams(url.search)
    const result = queryParams.get('g') ?? localStorage.getItem(`${STORAGE_KEY_PREFIX}guestId`)
    if (!result) return

    guestId.set(result)
    localStorage.setItem(`${STORAGE_KEY_PREFIX}guestId`, result)

    // URLからクエリパラメータを取り除く
    url.search = ''
    window.history.replaceState({}, document.title, url.toString())

    const json = await ky.get<Guest>(`https://sun-teru-wedding.com/api/get-my-dear-guest?id=${result}`).json()
  
    familyName.set(json.familyName)
    givenName.set(json.givenName)
    
    localStorage.setItem(`${STORAGE_KEY_PREFIX}familyName`, json.familyName)
    localStorage.setItem(`${STORAGE_KEY_PREFIX}givenName`, json.givenName)

    loading.set(false)
  })
</script>

<slot />