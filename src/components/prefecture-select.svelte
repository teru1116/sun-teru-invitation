<script lang="ts">
import { createEventDispatcher, onMount } from "svelte";
import ArrowBackSvg from "./icons/arrow-back.svg.svelte";
import ArrowForwardSvg from "./icons/arrow-forward.svg.svelte";
import CloseSvg from "./icons/close.svg.svelte";

export let prefecture = "";
let details: HTMLDetailsElement;

const dispatch = createEventDispatcher<{
	change: string;
}>();

const options: [string, string[]][] = [
	[
		"北海道・東北地方",
		["北海道", "青森県", "岩手県", "秋田県", "宮城県", "山形県", "福島県"],
	],
	[
		"関東地方",
		["茨城県", "栃木県", "群馬県", "埼玉県", "千葉県", "神奈川県", "東京都"],
	],
	[
		"中部・近畿地方",
		[
			"新潟県",
			"富山県",
			"石川県",
			"福井県",
			"山梨県",
			"長野県",
			"岐阜県",
			"静岡県",
			"愛知県",
			"三重県",
			"滋賀県",
			"京都府",
			"大阪府",
			"兵庫県",
			"奈良県",
			"和歌山県",
		],
	],
	[
		"四国・中国地方",
		[
			"鳥取県",
			"島根県",
			"岡山県",
			"広島県",
			"山口県",
			"徳島県",
			"香川県",
			"愛媛県",
			"高知県",
		],
	],
	[
		"九州・沖縄地方",
		[
			"福岡県",
			"佐賀県",
			"長崎県",
			"熊本県",
			"大分県",
			"宮崎県",
			"鹿児島県",
			"沖縄県",
		],
	],
];

let selectedArea: string | undefined = undefined;
$: prefectureOptions = selectedArea
	? options.find(([area]) => area === selectedArea) ?? []
	: [];

function closeDetails() {
	selectedArea = undefined;
	details.open = false;
}

function selectArea(area: string) {
	selectedArea = area;
}

function clearSelectedArea() {
	selectedArea = undefined;
}

function onPrefectureSelect(prefecture: string) {
	dispatch("change", prefecture);
	closeDetails();
}

let isOpen = false;

function toggleModalBackgroundScrollable(event: Event) {
	isOpen = (event.target as HTMLDetailsElement).open;

	// モーダルが開いている時は、背後のスクロールを無効にする
	if (isOpen) {
		document.body.style.overflow = "hidden";
	} else {
		document.body.style.overflow = "";
	}
}

onMount(() => {
	setupDetailsToggleListener();
	window.addEventListener("resize", setupDetailsToggleListener);
});

function setupDetailsToggleListener() {
	if (window.innerWidth <= 640) {
		details.addEventListener("toggle", toggleModalBackgroundScrollable);
	} else {
		details.removeEventListener("toggle", toggleModalBackgroundScrollable);
	}
}

function onSummeryClick(event: MouseEvent) {
	selectedArea = undefined;

	// <summery>タグのクリックイベントをdocumentにまで伝播させない
	// `document.addEventListener('click', closeDetails)`によって、<summery>タグをクリックしても<details>が閉じなくなってしまう現象への対策
	event.stopPropagation();
}
</script>

<style>
  @media screen and (max-width: 639px) {
    details .details-content {
      top: 100vh;
      transition: top 0.3s ease-in-out;
    }

    details[open] .details-content {
      top: 0;
    }
  }
</style>

<details bind:this={details} class="sm:relative">
  <summary class="flex items-center justify-between py-2 px-4 bg-white rounded fill-primary border border-solid border-borderGray cursor-pointer" on:click={onSummeryClick}>
    {prefecture || '都道府県を選択'}
    <ArrowForwardSvg size={20} />
  </summary>
  <div class="details-content fixed left-0 w-screen h-screen bg-bgGray z-50 sm:absolute sm:top-12 sm:w-full sm:h-auto sm:rounded-lg sm:shadow-lg sm:overflow-hidden">
    <div class="overflow-y-scroll w-full h-full pointer-events-auto">
      {#if !selectedArea}
        <div class="flex items-center h-16 px-6 bg-white sm:hidden">
          <button type="button" on:click={closeDetails}>
            <ArrowBackSvg size={24} />
          </button>
        </div>
        <div>
          <p class="text-sm text-textGray mt-6 mb-2 px-6">地方を選ぶ</p>
          <ul>
            {#each options as [area], index}
              <li
                data-last={index === options.length - 1}
                class="leading-[1.8] bg-white data-[last=false]:border-b border-solid border-bgGray fill-primary sm:hover:bg-bgGray"
              >
                <button type="button" on:click={() => selectArea(area)} class="flex items-center justify-between py-2 px-6 w-full h-full hover:text-primary">
                  {area}
                  <ArrowForwardSvg size={20} />
                </button>
              </li>
            {/each}
          </ul>
        </div>
      {:else}
        <div class="flex items-center h-16 px-6 bg-white sm:hidden">
          <button type="button" on:click={closeDetails} class="fill-primary">
            <CloseSvg size={24} color="#4352F5" />
          </button>
        </div>
        <div>
          <div class="px-6 py-2 sm:hidden">
            <button type="button" on:click={clearSelectedArea} class="flex items-center fill-primary">
              <ArrowBackSvg size={24} />
              <p class="ml-2">戻る</p>
            </button>
          </div>
          <ul>
            {#each prefectureOptions[1] as prefecture, index}
              <li
                data-last={index === options.length - 1}
                class="leading-[1.8] bg-white data-[last=false]:border-b border-solid border-bgGray fill-primary"
              >
                <button type="button" on:click={() => onPrefectureSelect(prefecture)} class="flex items-center justify-between py-2 px-6 w-full h-full hover:text-primary">
                  {prefecture}
                  <ArrowForwardSvg size={20} />
                </button>
              </li>
            {/each}
          </ul>
        </div>
      {/if}
    </div>
  </div>
</details>