declare module NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: "development" | "production" | "test";
    readonly GOOGLE_ID: string;
    readonly GOOGLE_SECRET: string;
    readonly NEXTAUTH_URL: string;
    readonly NEXTAUTH_SECRET: string;
  }
}
