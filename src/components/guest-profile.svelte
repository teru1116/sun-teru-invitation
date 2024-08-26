<script lang="ts">
  import { onMount } from "svelte";
  import { STORAGE_KEY_PREFIX } from "../const";

  onMount(() => {
    restoreFormData()
  })

  let guestId: string | null

  let willAttend = ''
  let phoneNumber = ''
  let email = ''
  let birthday = ''
  let postalCode = ''
  let prefecture = ''
  let address = ''
  let willUseShuttleBus = ''

  function restoreFormData() {
    willAttend = localStorage.getItem(`${STORAGE_KEY_PREFIX}willAttend`) ?? ''
    phoneNumber = localStorage.getItem(`${STORAGE_KEY_PREFIX}phoneNumber`) ?? ''
    email = localStorage.getItem(`${STORAGE_KEY_PREFIX}email`) ?? ''
    birthday = localStorage.getItem(`${STORAGE_KEY_PREFIX}birthday`) ?? ''
    postalCode = localStorage.getItem(`${STORAGE_KEY_PREFIX}postalCode`) ?? ''
    prefecture = localStorage.getItem(`${STORAGE_KEY_PREFIX}prefecture`) ?? ''
    address = localStorage.getItem(`${STORAGE_KEY_PREFIX}address`) ?? ''
    willUseShuttleBus = localStorage.getItem(`${STORAGE_KEY_PREFIX}willUseShuttleBus`) ?? ''
  }

  $: items = [
    { name: '電話番号', value: phoneNumber, svg: '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#222222"><path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"/></svg>' },
    { name: 'メール', value: email, svg: '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#222222"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/></svg>' },
    { name: '誕生日', value: birthday, svg: '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#222222"><path d="m80-80 200-560 360 360L80-80Zm132-132 282-100-182-182-100 282Zm370-246-42-42 224-224q32-32 77-32t77 32l24 24-42 42-24-24q-14-14-35-14t-35 14L582-458ZM422-618l-42-42 24-24q14-14 14-34t-14-34l-26-26 42-42 26 26q32 32 32 76t-32 76l-24 24Zm80 80-42-42 144-144q14-14 14-35t-14-35l-64-64 42-42 64 64q32 32 32 77t-32 77L502-538Zm160 160-42-42 64-64q32-32 77-32t77 32l64 64-42 42-64-64q-14-14-35-14t-35 14l-64 64ZM212-212Z"/></svg>' },
    { name: '住所', value: `${postalCode}\n${prefecture}${address}`, svg: '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#222222"><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/></svg>' },
    { name: '送迎バス', value: willUseShuttleBus === 'YES' ? '希望する' : willUseShuttleBus === 'NO' ? '希望しない' : '未回答', svg: '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#222222"><path d="M240-120q-17 0-28.5-11.5T200-160v-82q-18-20-29-44.5T160-340v-380q0-83 77-121.5T480-880q172 0 246 37t74 123v380q0 29-11 53.5T760-242v82q0 17-11.5 28.5T720-120h-40q-17 0-28.5-11.5T640-160v-40H320v40q0 17-11.5 28.5T280-120h-40Zm242-640h224-448 224Zm158 280H240h480-80Zm-400-80h480v-120H240v120Zm100 240q25 0 42.5-17.5T400-380q0-25-17.5-42.5T340-440q-25 0-42.5 17.5T280-380q0 25 17.5 42.5T340-320Zm280 0q25 0 42.5-17.5T680-380q0-25-17.5-42.5T620-440q-25 0-42.5 17.5T560-380q0 25 17.5 42.5T620-320ZM258-760h448q-15-17-64.5-28.5T482-800q-107 0-156.5 12.5T258-760Zm62 480h320q33 0 56.5-23.5T720-360v-120H240v120q0 33 23.5 56.5T320-280Z"/></svg>' },
  ]
</script>

<div>
  <div class="flex justify-center">
    <img src="/sample-portrait-01.png" class="w-40 h-40" alt="似顔絵">
  </div>
  <h2 class="text-center mt-4">
    新川靖文様
  </h2>
  <ul>
    {#each items as { name, value, svg }}
      <li class="flex items-center mb-4">
        <div class="flex items-center w-[120px] shrink-0">
          {@html svg}
          <p class="ml-2">
            {name}
          </p>
        </div>
        <p class="w-[calc(100%_-_120px)] whitespace-pre-wrap break-words">
          {value}
        </p>
      </li>
    {/each}
  </ul>
</div>