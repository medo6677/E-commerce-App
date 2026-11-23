import { LoginSchemaType, SignUpSchemaType } from "@/lib/schemas/auth.schema";

export async function loginUser(userData: LoginSchemaType) {
  const response = await fetch(
    "https://ecommerce.routemisr.com/api/v1/auth/signin",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    },
  );
  const data = await response.json();
  return data;
}

export async function registerUser(userData: SignUpSchemaType) {
  const response = await fetch(
    "https://ecommerce.routemisr.com/api/v1/auth/signup",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    },
  );
  const data = await response.json();
  return data;
}
