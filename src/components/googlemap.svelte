<script lang="ts">
import { onMount } from "svelte";

let googleMap: HTMLIFrameElement;

onMount(() => {
	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					googleMap.src =
						"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6499.907816599894!2d139.6060176894818!3d35.45593550216894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60185c750a99437b%3A0xbf302586ee13fa5d!2zVEhFIFNFQVNPTidT77yI44K244O744K344O844K644Oz44K677yJ!5e0!3m2!1sja!2sjp!4v1723429874331!5m2!1sja!2sjp";
					observer.unobserve(googleMap);
				}
			});
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