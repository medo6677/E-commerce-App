"use server";

import { getUserToken } from "@/lib/getUserToken";

export async function addAdress(formdata: any) {
  const token = await getUserToken();

  if (!token?.token) {
    return {
      status: "fail",
      message: "Please login first",
    };
  }
  const response = await fetch(
    `https://ecommerce.routemisr.com/api/v1/addresses`,
    {
      method: "POST",
      headers: {
        token: token.token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formdata),
    },
  );
  const data = await response.json();
  return data;
}
export async function getLoggedUserAddresses() {
  const token = await getUserToken();

  if (!token?.token) {
    return {
      status: "fail",
      message: "Please login first",
    };
  }
  const response = await fetch(
    `https://ecommerce.routemisr.com/api/v1/addresses`,
    {
      method: "GET",
      headers: {
        token: token.token,
        "Content-Type": "application/json",
      },
    },
  );
  const data = await response.json();
  return data;
}
export async function removeAdress(adressId: string) {
  const token = await getUserToken();

  if (!token?.token) {
    return {
      status: "fail",
      message: "Please login first",
    };
  }
  const response = await fetch(
    `https://ecommerce.routemisr.com/api/v1/addresses/${adressId}`,
    {
      method: "DELETE",
      headers: {
        token: token.token,
        "Content-Type": "application/json",
      },
    },
  );
  const data = await response.json();
  return data;
}
