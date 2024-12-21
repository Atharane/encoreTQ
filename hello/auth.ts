import { authHandler } from "encore.dev/auth";
import { type Header, Gateway } from "encore.dev/api";

// the request information our auth handler is interested in is the `Authorization` header.
interface AuthParams {
  authorization: Header<"Authorization">;
}

// our auth handler will make the `userID` available to endpoints.
interface AuthData {
  userID: string;
}

export const auth = authHandler<AuthParams, AuthData>(async (params) => {
  // todo: look up information about the user based on the authorization header.
  return { userID: "my-user-id" };
});

export const gateway = new Gateway({
  authHandler: auth,
});
