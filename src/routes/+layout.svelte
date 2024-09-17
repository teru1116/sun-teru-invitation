<script lang="ts">
import "../app.css";
import ky from "ky";
import { onMount } from "svelte";
import { STORAGE_KEY_PREFIX } from "../const";
import {
	type Guest,
	address,
	birthday,
	completed,
	email,
	familyName,
	givenName,
	guestId,
	loading,
	phoneNumber,
	postalCode,
	prefecture,
	willAttend,
	willUseShuttleBus,
} from "../stores";

onMount(async () => {
	loading.set(true);

	// URLクエリからゲストIDを取得
	// テストを容易にするため、ローカルストレージ等からのゲスト情報の復元は行わず、あくまでURLクエリをゲスト情報の信頼できる情報源とする
	const guestIdResult = getGuestIdFromUrl();
	if (!guestIdResult) {
		loading.set(false);
		return console.error("ゲストが指定されていません");
	}

	try {
		const json = await ky
			.get<Guest>(
				`https://sun-teru-wedding.com/api/get-my-dear-guest?id=${guestIdResult}`,
			)
			.json();
		updateGuestData(json);
	} catch (e) {
		// ゲストの特定に関するエラーはユーザー側で復帰できないため、エラーの種類で処理を分けることはしない
		// ゲストの特定に失敗した場合、ユーザー自身で氏名を入力してもらう選択肢もあるが、本来招待状は意図した人にだけ送信するものであり、意図しない人がURLを知って入力してしまうと出席者の集計が困難になるため
		// ゲストの特定失敗は招待状自体利用できないようにし、開発者が対応するものとする
		// Sentryへエラーを送信
		console.error(e);
	} finally {
		loading.set(false);
	}
});

function updateGuestData(guest: Guest) {
	guestId.set(guest.id);
	familyName.set(guest.familyName);
	givenName.set(guest.givenName);
	completed.set(guest.completed);
	phoneNumber.set(guest.phoneNumber);
	email.set(guest.email);
	birthday.set(guest.birthday);
	postalCode.set(guest.postalCode);
	prefecture.set(guest.prefecture);
	address.set(guest.address);
	willAttend.set(guest.willAttend);
	willUseShuttleBus.set(guest.willUseShuttleBus);

	// フォーム送信後にリダイレクトされる完了ページでゲスト情報を表示できるよう、ゲストIDをブラウザに保存
	// 再度アクセスした場合はまたURLクエリをゲストIDの情報源とするため、ゲストIDは永続化しないようSessionStorageを使う
	sessionStorage.setItem(`${STORAGE_KEY_PREFIX}guestId`, guest.id);
}

/** URLクエリからゲストIDを取得 */
function getGuestIdFromUrl(): string | null {
	const url = new URL(location.href);
	const queryParams = new URLSearchParams(url.search);
	return queryParams.get("g");
}
</script>

<slot />