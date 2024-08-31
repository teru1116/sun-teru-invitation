<script lang="ts">
  import AccessList from "./access-list.svelte";
  import InformationList from "./information-list.svelte";
  import GoogleMapSection from "./googlemap.svelte";
  import GuestProfile from "./guest-profile.svelte";
</script>

<div class="px-4 sm:max-w-[800px] sm:mx-auto pt-6 pb-10">
  <slot />
  <section class="mb-10">
    <GuestProfile />
  </section>
  <section class="mb-10">
    <InformationList />
  </section>
  <section>
    <AccessList />
  </section>
</div>
<div class="sm:hidden">
  <GoogleMapSection />
</div>