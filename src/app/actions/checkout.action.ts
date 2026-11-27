"use server";

import { getUserToken } from "@/lib/getUserToken";
import { ShippingAddressValues } from "@/lib/schemas/checkout.schema";

export async function onlinePayment(
  cartId: string,
  formdata: ShippingAddressValues,
) {
  const token = await getUserToken();

  if (!token?.token) {
    return {
      status: "fail",
      message: "Please login first",
    };
  }
  const response = await fetch(
    `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:3000`,
    {
      method: "POST",
      headers: {
        token: token.token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ formdata }),
    },
  );
  const data = await response.json();
  return data;
}

export async function cashPayment(
  cartId: string,
  formdata: ShippingAddressValues,
) {
  const token = await getUserToken();

  if (!token?.token) {
    return {
      status: "fail",
      message: "Please login first",
    };
  }
  const response = await fetch(
    `https://ecommerce.routemisr.com/api/v2/orders/${cartId}`,
    {
      method: "POST",
      headers: {
        token: token.token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ formdata }),
    },
  );
  const data = await response.json();
  return data;
}
