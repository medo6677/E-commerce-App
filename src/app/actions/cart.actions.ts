"use server";

import { getUserToken } from "@/lib/getUserToken";

export async function addProductToCart(productId: string) {
  const token = await getUserToken();

  if (!token?.token) {
    return {
      status: "fail",
      message: "Please login first",
    };
  }
  const response = await fetch("https://ecommerce.routemisr.com/api/v2/cart", {
    method: "POST",
    headers: {
      token: token.token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ productId }),
  });
  const data = await response.json();
  return data;
}
export async function getLoggedUserCart() {
  const token = await getUserToken();

  if (!token?.token) {
    return {
      status: "fail",
      message: "Please login first",
    };
  }
  const response = await fetch("https://ecommerce.routemisr.com/api/v2/cart", {
    method: "GET",
    headers: {
      token: token.token,
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
}

export async function updateCartProductQuantity(
  productId: string,
  count: number,
) {
  const token = await getUserToken();

  if (!token?.token) {
    return {
      status: "fail",
      message: "Please login first",
    };
  }
  const response = await fetch(
    `https://ecommerce.routemisr.com/api/v2/cart/${productId}`,
    {
      method: "PUT",
      headers: {
        token: token.token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ count }),
    },
  );
  const data = await response.json();
  return data;
}

export async function removeProductFromCart(productId: string) {
  const token = await getUserToken();

  if (!token?.token) {
    return {
      status: "fail",
      message: "Please login first",
    };
  }
  const response = await fetch(
    `https://ecommerce.routemisr.com/api/v2/cart/${productId}`,
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

export async function clearUserCart() {
  const token = await getUserToken();

  if (!token?.token) {
    return {
      status: "fail",
      message: "Please login first",
    };
  }
  const response = await fetch(`https://ecommerce.routemisr.com/api/v2/cart`, {
    method: "DELETE",
    headers: {
      token: token.token,
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
}



