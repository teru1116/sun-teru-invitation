<script lang="ts">
import ErrorSVG from "../components/icons/error.svg.svelte";
</script>

<div>
  <h3 class="flex items-center gap-x-1 text-errorRed">
    <ErrorSVG />
    読み込みエラー
  </h3>
  <p class="pb-10">
    ゲストの情報の読み込みに失敗しました<br>
    大変お手数ですが 新郎新婦から届いた招待状のURLに再度アクセスしてください<br>
    それでもページが正常に表示されない場合 恐れ入りますが新郎新婦にご連絡くださいますようお願い致します
  </p>
</div>