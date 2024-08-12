<script>
  import FirstView from "../components/FirstView.svelte";
  import MessageSection from "../components/MessageSection.svelte";
  import InformationSection from "../components/InformationSection.svelte";
  import GoogleMapSection from "../components/GoogleMapSection.svelte";
  import Access from "../components/Access.svelte";
</script>

<div>
  <FirstView />
  <div class="px-4 mt-10">
    <section class="mb-10">
      <MessageSection />
    </section>
    <section class="mb-10">
      <InformationSection />
    </section>
    <section class="mb-10">
      <Access />
    </section>
  </div>
  <GoogleMapSection />
</div>