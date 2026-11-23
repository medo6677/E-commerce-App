import NextAuth, { DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt";
interface UserData {
  name: string;
  email: string;
  role: string;
}
declare module "next-auth" {
  interface User {
    user: UserData;
    token: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    user: UserData;
    token: string;
  }
}
