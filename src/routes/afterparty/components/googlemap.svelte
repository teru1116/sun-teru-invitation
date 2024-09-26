<script lang="ts">
import { onMount } from "svelte";

let googleMap: HTMLIFrameElement;

onMount(() => {
	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					googleMap.src =
						"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3249.4597452141707!2d139.62440977644067!3d35.468167272656736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60185c1445b68a15%3A0x52df5ad7b72a80c9!2zR2luZ2VyJ3MgQmVhY2ggLSDjgrjjg7Pjgrjjg6Pjg7zjgrrjg5Pjg7zjg4HmqKrmtZw!5e0!3m2!1sja!2sjp!4v1727369180491!5m2!1sja!2sjp";
					observer.unobserve(googleMap);
				}
			}
		},
		{
			root: null,
			threshold: 0.1,
		},
	);

	observer.observe(googleMap);
});
</script>

<div>
  <iframe
    bind:this={googleMap}
    title="ザ・シーズンズ" src="" width="100%" height="300" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
  />
</div>