<script lang="ts">
import GoogleMapSection from "../components/googlemap.svelte";
import ArrowForwardSvg from "./icons/arrow-forward.svg.svelte";
import Modal from "./modal.svelte";

let showModal = false;
</script>

<div>
  <h2>
    会場への行き方
  </h2>
  <ul>
    <li class="mb-6">
      <div class="flex items-center mb-2">
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#222222"><path d="M160-340v-380q0-53 27.5-84.5t72.5-48q45-16.5 102.5-22T480-880q66 0 124.5 5.5t102 22q43.5 16.5 68.5 48t25 84.5v380q0 59-40.5 99.5T660-200l60 60v20h-80l-80-80H400l-80 80h-80v-20l60-60q-59 0-99.5-40.5T160-340Zm320-460q-106 0-155 12.5T258-760h448q-15-17-64.5-28.5T480-800ZM240-560h200v-120H240v120Zm420 80H240h480-60Zm-140-80h200v-120H520v120ZM340-320q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm280 0q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm-320 40h360q26 0 43-17t17-43v-140H240v140q0 26 17 43t43 17Zm180-480h226-448 222Z"/></svg>
        <p class="ml-2">
          公共交通機関の場合
        </p>
      </div>
      <div>
        <p>
          横浜駅から無料送迎バスがございます<br>
          9:00 9:30 10:00の3便<br>
          <button class="underline flex items-center gap-x-1 hover:text-primary hover:fill-primary" on:click={() => (showModal = true)}>
            <p>
              横浜駅西口南10番出口
            </p>
            <ArrowForwardSvg size={16} />
          </button>
          <Modal bind:showModal>
            <img src="/busstop.png" alt="横浜駅西口南10番出口の地図">
          </Modal>
        </p>
        <small class="text-sm text-textGray">
          送迎バスをご利用の場合 各便の人数のバランスを図るため お乗りいただきたい便を後日ご連絡いたします
        </small>
      </div>
    </li>
    <li>
      <div class="flex items-center mb-2">
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#222222"><path d="M240-200v40q0 17-11.5 28.5T200-120h-40q-17 0-28.5-11.5T120-160v-320l84-240q6-18 21.5-29t34.5-11h440q19 0 34.5 11t21.5 29l84 240v320q0 17-11.5 28.5T800-120h-40q-17 0-28.5-11.5T720-160v-40H240Zm-8-360h496l-42-120H274l-42 120Zm-32 80v200-200Zm100 160q25 0 42.5-17.5T360-380q0-25-17.5-42.5T300-440q-25 0-42.5 17.5T240-380q0 25 17.5 42.5T300-320Zm360 0q25 0 42.5-17.5T720-380q0-25-17.5-42.5T660-440q-25 0-42.5 17.5T600-380q0 25 17.5 42.5T660-320Zm-460 40h560v-200H200v200Z"/></svg>
        <p class="ml-2">
          お車の場合
        </p>
      </div>
      <div>
        <p>
          無料の駐車場をご利用いただけます
        </p>
      </div>
    </li>
  </ul>
  <div class="hidden sm:block mt-8">
    <GoogleMapSection />
  </div>
</div>