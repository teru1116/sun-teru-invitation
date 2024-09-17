<script lang="ts">
import ky from "ky";
import { onDestroy, onMount } from "svelte";
import AfterAnswerContent from "../../components/after-answer-content.svelte";
import FooterDefault from "../../components/footer-default.svelte";
import { STORAGE_KEY_PREFIX } from "../../const";
import {
	type Guest,
	address,
	birthday,
	email,
	familyName,
	givenName,
	guestId,
	phoneNumber,
	postalCode,
	prefecture,
	willAttend,
	willUseShuttleBus,
} from "../../stores";

let id: string | null = null;
let willAttendValue = "";
let phoneNumberValue = "";
let emailValue = "";
let birthdayValue = "";
let postalCodeValue = "";
let prefectureValue = "";
let addressValue = "";
let willUseShuttleBusValue = "";

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
					willAttend: willAttendValue,
					phoneNumber: phoneNumberValue,
					email: emailValue,
					birthday: birthdayValue,
					postalCode: postalCodeValue,
					prefecture: prefectureValue,
					address: addressValue,
					willUseShuttleBus: willUseShuttleBusValue,
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
	// フォーム入力時にローカルストレージにセットしていた値を復元
	willAttendValue =
		localStorage.getItem(`${STORAGE_KEY_PREFIX}willAttend`) ?? "";
	phoneNumberValue =
		localStorage.getItem(`${STORAGE_KEY_PREFIX}phoneNumber`) ?? "";
	emailValue = localStorage.getItem(`${STORAGE_KEY_PREFIX}email`) ?? "";
	birthdayValue = localStorage.getItem(`${STORAGE_KEY_PREFIX}birthday`) ?? "";
	postalCodeValue =
		localStorage.getItem(`${STORAGE_KEY_PREFIX}postalCode`) ?? "";
	prefectureValue =
		localStorage.getItem(`${STORAGE_KEY_PREFIX}prefecture`) ?? "";
	addressValue = localStorage.getItem(`${STORAGE_KEY_PREFIX}address`) ?? "";
	willUseShuttleBusValue =
		localStorage.getItem(`${STORAGE_KEY_PREFIX}willUseShuttleBus`) ?? "";

	// ゲスト情報を表示できるようストアにセット
	willAttend.set(willAttendValue);
	phoneNumber.set(phoneNumberValue);
	email.set(emailValue);
	birthday.set(birthdayValue);
	postalCode.set(postalCodeValue);
	prefecture.set(prefectureValue);
	address.set(addressValue);
	willUseShuttleBus.set(willUseShuttleBusValue);
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