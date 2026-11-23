"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useForm, Controller } from "react-hook-form";
import { Eye, EyeOff, Loader2, UserPlus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Field,
  FieldLabel,
  FieldDescription,
  FieldError,
} from "@/components/ui/field";
import { SignUpSchema, SignUpSchemaType } from "@/lib/schemas/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import PasswordStrength from "./PasswordStrength";
import { registerUser } from "@/services/auth/auth.services";
import { sileo } from "sileo";
import { useRouter } from "next/navigation";

// export interface RegisterFormValues {
//   name: string;
//   email: string;
//   password: string;
//   confirmPassword: string;
//   phoneNumber: string;
//   terms: boolean;
// }

export function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();
  const {
    handleSubmit,
    watch,
    control,
    formState: { isLoading, isSubmitting },
  } = useForm<SignUpSchemaType>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
    mode: "onTouched",
    resolver: zodResolver(SignUpSchema),
  });

  const password = watch("password") || "";

  async function submitForm(data: SignUpSchemaType) {
    try {
      const response = await registerUser(data);
   
      if (response?.message === "success") {
        sileo.success({
          title: response?.message,
          fill: "black",
          styles: {
            title: "text-white!",
            description: "text-white/75!",
          },
          description: `Your account has been created successfully , Please login to continue.`,
        });
        setTimeout(() => {
          router.push("/login");
        }, 500);
        
      } else {
        sileo.error({
          title: "Registration failed",
          fill: "black",
          styles: {
            title: "text-white!",
            description: "text-white/75!",
          },
          description: response?.message || "Please try again.",
        });
      }
    } catch (error: any) {
      sileo.error({ title: error?.message });
    }
  }

  return (
    <div className="space-y-4">
      <form onSubmit={handleSubmit(submitForm)} className="space-y-4">
        {/* Name Field */}
        <Controller
          name="name"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>
                Name<span className="text-destructive">*</span>
              </FieldLabel>
              <Input
                {...field}
                id={field.name}
                aria-invalid={fieldState.invalid}
                placeholder="Ali"
                autoComplete="name"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        {/* Email Field */}
        <Controller
          name="email"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>
                Email<span className="text-destructive">*</span>
              </FieldLabel>
              <Input
                {...field}
                id={field.name}
                type="email"
                aria-invalid={fieldState.invalid}
                placeholder="ali@example.com"
                autoComplete="email"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        {/* Password Field */}
        <Controller
          name="password"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>
                Password<span className="text-destructive">*</span>
              </FieldLabel>
              <div className="relative">
                <Input
                  {...field}
                  id={field.name}
                  type={showPassword ? "text" : "password"}
                  aria-invalid={fieldState.invalid}
                  placeholder="create a strong password"
                  autoComplete="new-password"
                  className="pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                  tabIndex={-1}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeOff className="size-4" />
                  ) : (
                    <Eye className="size-4" />
                  )}
                </button>
              </div>

              {/* Password strength meter */}
              <PasswordStrength password={password} />
              <FieldDescription>
                Must be at least 8 characters with numbers and symbols
              </FieldDescription>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        {/* Confirm Password Field */}
        <Controller
          name="rePassword"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>
                Confirm Password<span className="text-destructive">*</span>
              </FieldLabel>
              <div className="relative">
                <Input
                  {...field}
                  id={field.name}
                  type={showConfirmPassword ? "text" : "password"}
                  aria-invalid={fieldState.invalid}
                  placeholder="confirm your password"
                  autoComplete="new-password"
                  className="pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                  tabIndex={-1}
                  aria-label={
                    showConfirmPassword ? "Hide password" : "Show password"
                  }
                >
                  {showConfirmPassword ? (
                    <EyeOff className="size-4" />
                  ) : (
                    <Eye className="size-4" />
                  )}
                </button>
              </div>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        {/* Phone Number Field */}
        <Controller
          name="phone"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>
                Phone Number<span className="text-destructive">*</span>
              </FieldLabel>
              <Input
                {...field}
                id={field.name}
                type="tel"
                aria-invalid={fieldState.invalid}
                placeholder="+1 234 567 8900"
                autoComplete="tel"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        {/* Terms and Conditions Checkbox */}
        {/* <Controller
          // name="terms"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <div className="flex items-start gap-2.5 pt-1">
                <Checkbox
                  id={field.name}
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  aria-invalid={fieldState.invalid}
                  className="mt-0.5 cursor-pointer"
                />
                <label
                  htmlFor={field.name}
                  className="text-xs text-muted-foreground leading-snug cursor-pointer select-none"
                >
                  I agree to the{" "}
                  <Link
                    href="/terms"
                    className="text-primary hover:underline font-medium"
                  >
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/privacy"
                    className="text-primary hover:underline font-medium"
                  >
                    Privacy Policy
                  </Link>{" "}
                  <span className="text-destructive">*</span>
                </label>
              </div>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        /> */}

        {/* Submit Button */}
        <Button
          disabled={isSubmitting}
          type="submit"
          className="w-full h-11 bg-primary text-primary-foreground hover:bg-primary/90 font-medium text-sm rounded-lg flex items-center justify-center gap-2 mt-2 shadow-xs cursor-pointer"
        >
          {isSubmitting ? (
            <>
              {" "}
              <Loader2 className="size-4 animate-spin" /> loading ....
            </>
          ) : (
            <>
              {" "}
              <UserPlus className="size-4" />
              Create My Account
            </>
          )}
        </Button>
      </form>

      {/* Already have an account link */}
      <p className="text-center text-sm text-muted-foreground pt-2">
        Already have an account?{" "}
        <Link
          href="/login"
          className="text-primary font-semibold hover:underline"
        >
          Sign In
        </Link>
      </p>
    </div>
  );
}
