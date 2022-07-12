import "typescript";

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT?: string;
      DB_NAME: string;
      MONGODB_URI: string;
    }
  }
}
