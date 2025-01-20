/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_AZURE_COMMUNICATION_ENDPOINT: string
  readonly VITE_AZURE_COMMUNICATION_KEY: string
  readonly VITE_AZURE_COMMUNICATION_CONNECTION_STRING: string
  
  readonly VITE_AZURE_OPENAI_TARGET_URL: string
  readonly VITE_AZURE_OPENAI_KEY: string
  readonly VITE_AZURE_OPENAI_MODEL_VERSION: string
  readonly VITE_AZURE_OPENAI_MODEL_NAME: string
  readonly VITE_AZURE_OPENAI_DEPLOYMENT_NAME: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
