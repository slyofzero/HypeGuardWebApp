declare global {
  namespace NodeJS {
    interface ProcessEnv {
      FIREBASE_KEY: string | undefined;
      NEXT_PUBLIC_ENCRYPTION_KEY: string | undefined;
    }
  }
}

export {};
