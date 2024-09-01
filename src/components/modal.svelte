<script lang="ts">
// https://svelte.dev/examples/modal

import CloseSvg from "./icons/close.svg.svelte";

export let showModal = false;

let dialog: HTMLDialogElement;

$: if (dialog && showModal) dialog.showModal();
</script>

<style>
  dialog::backdrop {
		background: rgba(0, 0, 0, 0.3);
	}
  dialog[open] {
		animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}
	@keyframes zoom {
		from {
			transform: scale(0.95);
		}
		to {
			transform: scale(1);
		}
	}
	dialog[open]::backdrop {
		animation: fade 0.2s ease-out;
	}
	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog
	bind:this={dialog}
	on:close={() => (showModal = false)}
	on:click|self={() => dialog.close()}
  class="max-w-[90vw] rounded-md overflow-visible"
>
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div
    on:click|stopPropagation
    class="relative"
  >
    <slot />
  </div>
	<!-- svelte-ignore a11y-autofocus -->
	<button
		autofocus
		on:click={() => dialog.close()}
		class="absolute right-0 -top-7 w-6 h-6 flex items-center justify-center focus:outline-none"
	>
		<CloseSvg color="#FFF" />
	</button>
</dialog>