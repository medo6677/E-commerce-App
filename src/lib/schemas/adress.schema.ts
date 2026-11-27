import * as z from "zod";

export const addressSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Address label is required")
    .min(2, "Label must be at least 2 characters")
    .max(30, "Label is too long"),

  details: z
    .string()
    .trim()
    .min(1, "Street address is required")
    .min(5, "Please enter a detailed street address")
    .max(200, "Address details are too long"),

  phone: z
    .string()
    .trim()
    .min(1, "Phone number is required")
    .regex(
      /^01[0125][0-9]{8}$/,
      "Please enter a valid Egyptian phone number (01xxxxxxxxx)",
    ),

  city: z
    .string()
    .trim()
    .min(1, "City is required")
    .min(2, "City must be at least 2 characters")
    .max(50, "City is too long"),
});

export type AddressValuesT = z.infer<typeof addressSchema>;
