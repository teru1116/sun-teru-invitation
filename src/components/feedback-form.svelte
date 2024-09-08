<script lang="ts">
import ky from "ky";
import { onDestroy, onMount } from "svelte";
import { STORAGE_KEY_PREFIX } from "../const";
import { guestId } from "../stores";

onMount(() => {
	message = localStorage.getItem(`${STORAGE_KEY_PREFIX}feedback`) ?? "";
});

function saveFormDataToLocal() {
	localStorage.setItem(`${STORAGE_KEY_PREFIX}feedback`, message);
}

let id: string | null = null;
let message = "";
let sending = false;
let hasSent = false;

const unsubscribe = guestId.subscribe((value) => {
	id = value;
});

onDestroy(() => {
	unsubscribe();
});

async function submit() {
	sending = true;

	try {
		await ky
			.post("https://sun-teru-wedding.com/api/feedback", {
				json: {
					guestId: id,
					message,
				},
			})
			.json();

		hasSent = true;
		message = "";
		localStorage.removeItem(`${STORAGE_KEY_PREFIX}feedback`);
	} catch (e) {
		console.error(e);
	} finally {
		sending = false;
	}
}
</script>

<div>
	<textarea class="text-base tracking-wide py-2 px-4 border border-solid border-borderGray rounded w-full" bind:value={message} on:blur={saveFormDataToLocal} />
	<div class="flex items-center justify-between mt-2">
		<p class="text-xs text-textGray">
			{sending ? '送信中...数秒お待ちください' : hasSent ? '送信完了！開発者にメールを送信しました' : ''}
		</p>
		<button class="text-sm px-4 py-1 border border-solid border-primary text-primary bg-white rounded-md" disabled={sending} on:click={submit}>
			送信
		</button>
	</div>
</div>