<script lang="ts">
import { replaceState } from "$app/navigation";
import { onMount } from "svelte";
import AfterAnswerContent from "../../components/after-answer-content.svelte";
import FooterDefault from "../../components/footer-default.svelte";
import { STORAGE_KEY_PREFIX } from "../../const";

onMount(() => {
	// src/components/answer-form.svelte でフォーム送信時にセットしている
	const formSubmitted =
		localStorage.getItem(`${STORAGE_KEY_PREFIX}formSubmitted`) === "true";
	// 過去に同じブラウザでフォーム送信が実行されていない場合、完了ページは閲覧させず、トップページに戻す
	if (!formSubmitted) {
		return replaceState(location.origin, {});
	}
});
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