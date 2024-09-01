<script lang="ts">
function onCloseButtonClick(event: MouseEvent) {
	const button = event.target as HTMLButtonElement;
	const details = button.closest("details");
	if (details) {
		details.removeAttribute("open");
	}
}

const items = [
	{
		title: "すでに回答したのにフォームが表示されてしまう",
		content:
			"回答した時と違うアプリやデバイスでこのページを開くと 回答済みであってもフォームが表示されてしまいます\n回答した時にメールが届いていれば ご出欠は問題なく送信されておりますのでご安心ください",
	},
	{
		title: "自分ではない他の誰かの名前が表示されている",
		content:
			"大変申し訳ございません\nお送りすべきURLをこちらが間違えてしまったようです\n恐れ入りますが個別にご連絡いただけますと助かります",
	},
	{
		title: "「招待状に回答する」をクリックしても 画面が切り替わらない",
		content:
			"全ての項目を入力あるいは選択したことをご確認ください\nまたインターネットに接続されていることのご確認もお願い致します（モバイルデータ通信がOFFでないこと Wi-Fiに接続されていること 速度制限がかかっていないこと Wi-Fiが低速でないこと等）",
	},
];
</script>

<div>
  {#each items as { title, content }, index}
    <details data-last={index === items.length - 1} class="data-[last=false]:border-b border-solid border-borderGray">
      <summary class="py-6 cursor-pointer" style="list-style: none;">
        <div class="flex items-center justify-between">
          <h3 class="text-base font-bold my-0 mr-6 hover:underline">
            {title}
          </h3>
          <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" width="16" height="16" aria-hidden="true" style="flex-shrink: 0;">
            <path d="M13 6.33337L8 11.3334L3 6.33337" stroke="#4352F5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </div>
      </summary>
      <div class="pb-8">
        <article class="content">
          {@html content}
        </article>
        <button on:click={onCloseButtonClick} class="w-full flex items-center justify-center">
          <div class="text-action underline">
            閉じる
          </div>
          <div class="ml-2" style="transform: rotate(180deg);">
            <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" width="16" height="16" aria-hidden="true" style="flex-shrink: 0;">
              <path d="M13 6.33337L8 11.3334L3 6.33337" stroke="#4352F5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </div>
        </button>
      </div>
    </details>
  {/each}
</div>