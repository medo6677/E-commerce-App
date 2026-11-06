import { loginUser } from "@/services/auth/auth.services";
import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
    providers: [
        Credentials({
            name: 'Credentials',
            credentials: {
                email: { label: "email", type: "email", placeholder: "jsmith@example.com" },
                password: { label: "Password", type: "password" }
            },
            authorize: async (credentials) => {
                if (!credentials?.email || !credentials?.password) {
                    return null
                }
                const response = await loginUser(
                    {
                        email: credentials?.email,
                        password: credentials?.password
                    }
                )
                if (response) {
                    console.log(response);

                }
                return null
            }
        }
        )

    ]
}