<script lang="ts">
import ky from "ky";
import { onDestroy, onMount } from "svelte";
import AfterAnswerContent from "../../components/after-answer-content.svelte";
import FooterDefault from "../../components/footer-default.svelte";
import { STORAGE_KEY_PREFIX } from "../../const";
import { type Guest, familyName, givenName, guestId } from "../../stores";

let id: string | null = null;
let willAttend = "";
let phoneNumber = "";
let email = "";
let birthday = "";
let postalCode = "";
let prefecture = "";
let address = "";
let willUseShuttleBus = "";

onMount(async () => {
	// src/routes/+layout.svelte で保存していたURLクエリのゲストIDを取得
	const guestIdResult = sessionStorage.getItem(`${STORAGE_KEY_PREFIX}guestId`);
	guestId.set(guestIdResult);

	restoreFormData();

	const [guest] = await Promise.all([
		// ゲスト情報表示コンポーネントで使用する氏名を取得
		ky
			.get<Guest>(
				`https://sun-teru-wedding.com/api/get-my-dear-guest?id=${guestIdResult}`,
			)
			.json(),
		// 回答情報をDynamoDBに保存
		ky
			.post("https://sun-teru-wedding.com/api/answer", {
				json: {
					guestId: id,
					willAttend,
					phoneNumber,
					email,
					birthday,
					postalCode,
					prefecture,
					address,
					willUseShuttleBus,
				},
			})
			.json(),
	]);

	familyName.set(guest.familyName);
	givenName.set(guest.givenName);
});

const unsubscribe = guestId.subscribe((value) => {
	id = value;
});

onDestroy(() => {
	unsubscribe();
});

function restoreFormData() {
	willAttend = localStorage.getItem(`${STORAGE_KEY_PREFIX}willAttend`) ?? "";
	phoneNumber = localStorage.getItem(`${STORAGE_KEY_PREFIX}phoneNumber`) ?? "";
	email = localStorage.getItem(`${STORAGE_KEY_PREFIX}email`) ?? "";
	birthday = localStorage.getItem(`${STORAGE_KEY_PREFIX}birthday`) ?? "";
	postalCode = localStorage.getItem(`${STORAGE_KEY_PREFIX}postalCode`) ?? "";
	prefecture = localStorage.getItem(`${STORAGE_KEY_PREFIX}prefecture`) ?? "";
	address = localStorage.getItem(`${STORAGE_KEY_PREFIX}address`) ?? "";
	willUseShuttleBus =
		localStorage.getItem(`${STORAGE_KEY_PREFIX}willUseShuttleBus`) ?? "";
}
</script>

<div class="bg-bgGray min-h-screen">
  <AfterAnswerContent>
    <section class="mb-10">
      <h2 class="text-center">
        回答しました
      </h2>
      <p class="text-center">
        ご出席ありがとうございます<br>
        お会いできるのを楽しみにしています<br>
        <br>
        楠本輝也<br>
        新川綾菜
      </p>
    </section>
  </AfterAnswerContent>
</div>
<FooterDefault />