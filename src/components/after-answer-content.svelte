<script lang="ts">
  import AccessList from "./access-list.svelte";
  import InformationList from "./information-list.svelte";
  import GoogleMapSection from "./googlemap.svelte";
  import GuestProfile from "./guest-profile.svelte";
</script>

<div class="px-4 pt-6">
  <slot />
  <section class="mb-10">
    <GuestProfile />
  </section>
  <section class="mb-10">
    <InformationList />
  </section>
  <section class="mb-10">
    <AccessList />
  </section>
</div>
<GoogleMapSection />