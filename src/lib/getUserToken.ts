import { decode } from "next-auth/jwt";
import { cookies } from "next/headers";

export async function getUserToken() {
  const token = await (await cookies()).get("next-auth.session-token")?.value;
if (!token) {
    console.log("No token found");
    return null;
  }
  const userToken = await decode({
    token: token as string,
    secret: process.env.AUTH_SECRET! as string,
  });
 return userToken;
}
