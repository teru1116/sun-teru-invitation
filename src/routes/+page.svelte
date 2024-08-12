<script lang="ts">
  import FirstView from "../components/first-view.svelte";
  import WelcomeMessage from "../components/welcome-message.svelte";
  import InformationList from "../components/information-list.svelte";
  import GoogleMapSection from "../components/googlemap.svelte";
  import AccessList from "../components/access-list.svelte";
  import AnswerForm from "../components/answer-form.svelte";
</script>

<div>
  <FirstView />
  <div class="px-4 mt-10">
    <section class="mb-10">
      <WelcomeMessage />
    </section>
    <section class="mb-10">
      <InformationList />
    </section>
    <section class="mb-10">
      <AccessList />
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