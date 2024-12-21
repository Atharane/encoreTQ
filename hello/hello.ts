import { api } from "encore.dev/api";
import log from "encore.dev/log";
import { getAuthData } from "~encore/internal/auth/auth";
interface Response {
  message: string;
}

export const get = api(
  { method: "GET", path: "/index", expose: true },
  async (): Promise<Response> => {
    return { message: "Hello" };
  }
);

export const admin = api(
  {
    auth: true, // require the user to be authenticated
    expose: true,
    method: "GET",
    path: "/admin",
  },
  async (): Promise<Response> => {
    const userID = getAuthData()?.userID;
    log.info("Data requested by user", { userID });

    return { message: "Secret message for admins" };
  }
);
