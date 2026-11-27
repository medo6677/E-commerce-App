import * as z from "zod";

export const shippingAddressSchema = z.object({
  city: z
    .string()
    .trim()
    .min(2, "City must be at least 2 characters")
    .max(50, "City is too long"),

  details: z
    .string()
    .trim()
    .min(5, "Please enter a detailed street address")
    .max(200, "Address details are too long"),

  phone: z
    .string()
    .trim()
    .regex(
      /^01[0125][0-9]{8}$/,
      "Please enter a valid Egyptian phone number (01xxxxxxxxx)",
    ),
});

export type ShippingAddressValues = z.infer<typeof shippingAddressSchema>;
