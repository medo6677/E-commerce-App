import { z } from "zod";
//   schema for signup form
export const SignUpSchema = z
  .object({
    name: z.string().min(3, "Name must be at least 3 characters long"),

    email: z
      .string()
      .nonempty("Email is required")
      .email("Invalid email address"),

    password: z.string().min(6, "Password must be at least 6 characters long"),

    rePassword: z.string().nonempty("Please confirm your password"),

    phone: z
      .string()
      .regex(
        /^(010|011|012|015)[0-9]{8}$/,
        "Please enter a valid Egyptian phone number",
      ),
  })
  .refine((data) => data.password === data.rePassword, {
    message: "Passwords do not match",
    path: ["rePassword"],
  });

//   schema type for signup form
export type SignUpSchemaType = z.infer<typeof SignUpSchema>;
// schema for login form
export const LoginSchema = z.object({
  email: z
    .string()
    .nonempty("Email is required")
    .email("Invalid email address"),

  password: z.string().min(6, "Password must be at least 6 characters long"),
});
// schema type for login form
export type LoginSchemaType = z.infer<typeof LoginSchema>;
