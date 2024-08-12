<script context="module" lang="ts">
  export type PostalCodeInputChangeEvent = {
    prefecture: string
    city: string
  }
</script>

<script lang="ts">
  import { createEventDispatcher } from "svelte"

  export let postalCode = ''

  const dispatch = createEventDispatcher<{
    change: PostalCodeInputChangeEvent
  }>()

  async function onChange(event: Event) {
    const postalCode = (event.target as HTMLInputElement).value

    if (!postalCode) return

    const withoutHyphen = postalCode.replace('-', '')
    if (withoutHyphen.length !== 7) return

    const response = await fetch(`https://apis.postcode-jp.com/api/v5/postcodes/${withoutHyphen}`, {
      headers: {
        apiKey: 'SkY0TGK1aEDZN7ppcthkzF7jmAkl5GHPimhKgfq',
      },
    })

    if (!response.ok) {
      return console.error(JSON.stringify(response))
    }

    const data = await response.json()

    dispatch('change', {
      prefecture: data[0].pref,
      city: `${data[0].city}${data[0].town}`
    })
  }
</script>

<input type="tel" name="郵便番号" placeholder="100-0001" autocomplete="postal-code" required bind:value={postalCode} on:blur={onChange}>