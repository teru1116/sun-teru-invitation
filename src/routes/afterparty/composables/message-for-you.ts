const messageForYou = [
  ["サム", "真面目に入力してもらっていいかな？"],
  ["SAM", "真面目に入力してもらっていいかな？"],
  ["中原", "真面目に入力してもらっていいかな？"],
  ["楠本", "俺の名前で試すな"],
  [
    "雄樹",
    "友人代表スピーチ引き受けてくれてありがとうね！お堅い式ではないから気楽にやってね！",
  ],
  ["米林", "よね！当日はぜひ楽しんでね！"],
  ["堀田", "司会引き受けてくれてありがとう！当日はよろしくね！"],
  ["横溝", "司会引き受けてくれてありがとう！当日はよろしくね！"],
  ["みのり", "ゲーム引き受けてくれてほんとにありがとうね！！"],
  ["増田", "DJの件引き受けてくれてほんとにありがとうね！！"],
  ["千早希", "DJの件引き受けてくれてほんとにありがとうね！！"],
  ["高橋", "ゲーム引き受けてくれてほんとにありがとうね！！"],
  ["落合", "京都からありがとうねー！！🥺byすん"],
  ["内藤", "大阪からありがとう〜っっ🥺byすん"],
  ["怜那", "パースからありがとう〜っっ🥺byすん"],
  ["古屋敷", "当日はおしっこかけないでください！笑"],
  ["日吉", "福岡から来ていただきありがとうございます😭"],
  ["樋口", "三茶集合だな！"],
  ["溝口", "ぞぐ！はよテニスしよ！"],
  ["阿南", "転職おめでとう！引き続きファイト！！"],
  ["秩父", "お子さん産まれるんだってね！おめでとう！！"],
  ["竹澤", "まことさんも改めて結婚おめでとうございました！！"],
  ["早川", "たけちゃん、また遊んでね！byてる"],
  ["久保", "くーーーーぼーーーー👻"],
  ["持田", "またうちに遊びにおいでね！byてる"],
  ["赤沼", "あかぬーさんも改めて結婚おめでとうございました！！"],
  ["韓", "スンジ！当日楽しみにしてるね！"],
  ["スンジ", "スンジ！当日楽しみにしてるね！"],
  ["本間", "メッシュ！久しぶりに会えるな！"],
  ["菊地", "れーこ、なんだかんだで会うのはめっちゃ久しぶりやね！"],
  ["芙", "さんぴーーーん！"],
  ["小川純子", "純ちゃん出席表明ありがとうねー！"],
  ["菅原", "二次会の件動いてくださってほんと感謝です！！"],
  ["西村健人", "けんとさん久しぶりですね！当日は近況聞かせてください！"],
  ["啓介", "たしゅ！まさか中原に来るとは！笑"],
  ["哲志", "てっちゃん、またテニスとかワーケーションとかしよ！！"],
  ["めぐみ", "めぐさん会えるの楽しみにしてます！！"],
  ["絹", "まあきぬちゃんは100%来てくれると思ってた！"],
];

export function getMessageForYou(fullname: string): string | undefined {
  const index = messageForYou.findIndex((e) =>
    fullname.replace(/\s+/g, "").includes(e[0])
  );
  if (index !== -1) {
    return messageForYou[index][1];
  }

  return undefined;
}
