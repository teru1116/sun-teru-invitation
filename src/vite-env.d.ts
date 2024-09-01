/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_FORM_ENDPOINT: string;
	readonly VITE_FEEDBACK_FORM_ENDPOINT: string;
	readonly VITE_POSTCODE_API_KEY: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
