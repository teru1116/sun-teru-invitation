# すんてる結婚式ウェブ招待状
2024年11月17日（日）に行う結婚式のウェブ招待状のフロントエンドのソースコードです。  
Svelte、Vite、TypeScript、Tailwind CSSで構築しています。

## 前提
- Node.js 20.16.0
- yarn 1.22.19

## 開発する

1. リポジトリをクローンします

```bash
git clone git@github.com:teru1116/sun-teru-invitation.git
```

2. 依存ファイルをインストールします

```bash
yarn
```

3. ローカル開発環境を起動します

```bash
yarn dev
```
http://localhost:5173/ で確認できるようになります。


## ゲストの皆様に配布する
下記のように、クエリパラメータに id={ゲストID} を付与したURLをゲストに伝えます。
```
https://sun-teru-wedding.com?id=1qazxsw2
```

クエリパラメータが付与されていない場合や、存在しないゲストIDが指定されている場合、エラー画面が表示されます。