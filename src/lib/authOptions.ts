import { loginUser } from "@/services/auth/auth.services";
import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: {
          label: "email",
          type: "email",
          placeholder: "jsmith@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }
        const response = await loginUser({
          email: credentials?.email,
          password: credentials?.password,
        });

        if (response.message === "success") {
         

          return response;
        } else {
          throw new Error(
            response?.message || "Login failed. Please try again.",
          );
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    jwt: ({ token, user }) => {
      if (user) {
        ((token.user = user.user), (token.token = user.token));
      }
      return token;
    },
    session: ({ session, token }) => {
      if (token) {
        session.user = token.user;
      }
      return session;
    },
  },
};
