"use server";

import { getUserToken } from "@/lib/getUserToken";

export async function addProductToWishlist(productId: string) {
  const token = await getUserToken();

  if (!token?.token) {
    return {
      status: "fail",
      message: "Please login first",
    };
  }
  const response = await fetch(
    "https://ecommerce.routemisr.com/api/v1/wishlist",
    {
      method: "POST",
      headers: {
        token: token.token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ productId }),
    },
  );
  const data = await response.json();
  return data;
}

export async function removeProductFromWishlist(productId: string) {
  const token = await getUserToken();

  if (!token?.token) {
    return {
      status: "fail",
      message: "Please login first",
    };
  }
  const response = await fetch(
    `https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`,
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

export async function GetLoggedUserWishlist() {
  const token = await getUserToken();

  if (!token?.token) {
    return {
      status: "fail",
      message: "Please login first",
    };
  }
  const response = await fetch(
    "https://ecommerce.routemisr.com/api/v1/wishlist",
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
