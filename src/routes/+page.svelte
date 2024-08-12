<script lang="ts">
  import MessageSection from "../components/message-section.svelte";
  import InformationSection from "../components/information-list.svelte";
  import GoogleMapSection from "../components/googlemap.svelte";
  import Access from "../components/access.svelte";
  import AnswerForm from "../components/answer-form.svelte";
</script>

<div>
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
  <div class="px-4 mt-10">
    <section class="mb-10">
      <h2>
        ご回答
      </h2>
      <small class="text-sm leading-6 text-textGray block mb-6 -mt-4">
        お手数ではございますが、ご都合の程を<br>
        10月17日迄にご一報賜りますようお願い申し上げます
      </small>
      <AnswerForm />
    </section>
  </div>
</div>