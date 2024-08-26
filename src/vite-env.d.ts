/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_FORM_ENDPOINT: string
  readonly VITE_FORM_REDIRECT_FROM: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}