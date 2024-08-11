import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
      // 出力ディレクトリを指定
      pages: 'dist',
      assets: 'dist',
      fallback: 'index.html', // SPA 用のフォールバック設定
    }),
    prerender: {
      entries: [] // プリレンダリングを無効化
    }
	}
};

export default config;
