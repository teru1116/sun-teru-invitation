<script context="module" lang="ts">
  export type RadioButtonGroupOption = {
    label: string
    value: string
  }
</script>

<script lang="ts">
  import { createEventDispatcher } from "svelte"

  export let name: string
  export let options: RadioButtonGroupOption[]

  const dispatch = createEventDispatcher()

  function handleChange(event: Event) {
    const value = (event.target as HTMLInputElement).value
    dispatch('change', value)
  }
</script>

<style>
  input[type="radio"]:checked + .custom-checkbox {
    background-color: #579BB1;
    border: 1px solid #579BB1;
  }

  input[type="radio"]:checked + .custom-checkbox > span::after {
    display: block;
    width: 12px;
    height: 12px;
    content: '';
    background-color: #FFF;
    border-radius: 50px;
  }
</style>

{#each options as { label, value }}
  <div class="mt-6">
    <label class="flex items-center cursor-pointer">
      <input type="radio" name={name} value={value} class="hidden" on:change={handleChange}>
      <div class="custom-checkbox shrink-0 w-6 h-6 bg-white border border-solid border-[#579BB1] rounded-full flex items-center justify-center">
        <span class="relative m-0"></span>
      </div>
      <p class="text-base font-normal pl-4 cursor-pointer">{label}</p>
    </label>
  </div>
{/each}