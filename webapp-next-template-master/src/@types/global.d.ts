declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: "development" | "production" | "test"
    readonly PROJECT_REGION: string
    readonly IDENTITY_POOL_ID: string
    readonly USER_POOLS_ID: string
    readonly USER_WEB_CLIENT_ID: string
  }
}
