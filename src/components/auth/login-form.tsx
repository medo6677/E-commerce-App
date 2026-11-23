"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, Loader2Icon, LockKeyhole, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { SocialAuthButtons } from "@/components/auth/social-auth-buttons";
import { Controller, useForm } from "react-hook-form";
import { Field, FieldDescription, FieldError, FieldLabel } from "../ui/field";
import PasswordStrength from "./PasswordStrength";
import { LoginSchema, LoginSchemaType } from "@/lib/schemas/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginUser } from "@/services/auth/auth.services";
import { sileo } from "sileo";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
export function LoginForm() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const {
    control,
    handleSubmit,
    watch,
    formState: { isSubmitting },
  } = useForm<LoginSchemaType>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(LoginSchema),
    mode: "onChange",
  });
  const password = watch("password") || "";

  async function submitLoginData(data: LoginSchemaType) {
    // try {
    //   const response = await loginUser(data);
    //   console.log(response);
    //   if (response?.message === "success") {
    //     sileo.success({
    //       title: response?.message,
    //       fill: "black",
    //       styles: {
    //         title: "text-white!",
    //         description: "text-white/75!",
    //       },
    //       description: `Welcome back ${response?.user.name}! You have successfully logged in.`,
    //     });
    //     setTimeout(() => {
    //       router.push("/");
    //     }, 500);
    //   } else {
    //     sileo.error({
    //       title: "Login failed",
    //       fill: "black",
    //       styles: {
    //         title: "text-white!",
    //         description: "text-white/75!",
    //       },
    //       description: response?.message || "Please try again.",
    //     });
    //   }
    // } catch (error) {}

    const response = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });
    if (response?.ok) {
      
      sileo.success({
        title: "Login successful",
        fill: "black",
        styles: {
          title: "text-white!",
          description: "text-white/75!",
        },
        description: `Welcome back! You have successfully logged in.`,
      });
      setTimeout(() => {
        router.push("/");
      }, 500);
    } else {
      

      sileo.error({
        title: "Failed",
        fill: "black",
        styles: {
          title: "text-white!",
          description: "text-white/75!",
        },
        description: response?.error || "Please try again.",
      });
    }
  } 
  return (
    <div>
      <SocialAuthButtons actionLabels />

      <div className="relative my-5 flex items-center justify-center">
        <div className="w-full border-t border-slate-200" />
        <span className="absolute bg-white px-3 text-[10px] font-medium uppercase tracking-wide text-slate-400">
          Or continue with email
        </span>
      </div>

      <form className="space-y-4" onSubmit={handleSubmit(submitLoginData)}>
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

        <Controller
          name="password"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              {" "}
              <div className="flex items-center justify-between">
                <FieldLabel htmlFor={field.name}>
                  Password<span className="text-destructive">*</span>
                </FieldLabel>
                <Link
                  href="/forget-password"
                  className="text-xs font-medium text-[#16853a] hover:underline"
                >
                  Forgot Password?
                </Link>
              </div>
              <div className="relative">
                <Input
                  {...field}
                  id={field.name}
                  type={showPassword ? "text" : "password"}
                  aria-invalid={fieldState.invalid}
                  placeholder="Enter your password"
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

        <div className="flex items-center gap-2 pt-0.5">
          <Checkbox
            id="keep-signed-in"
            defaultChecked
            className="size-3.5 rounded-[3px] data-[state=checked]:border-[#0AAD0A] data-[state=checked]:bg-[#0AAD0A]"
          />
          <label
            htmlFor="keep-signed-in"
            className="cursor-pointer text-xs text-slate-600"
          >
            Keep me signed in
          </label>
        </div>

        <Button
          disabled={isSubmitting}
          type="submit"
          className="h-11 w-full rounded-lg bg-[#0AAD0A] text-sm font-semibold text-white shadow-sm hover:bg-[#099509]"
        >
          {isSubmitting ? (
            <>
              Logging in... <Loader2Icon className="animate-spin" />
            </>
          ) : (
            "Login"
          )}
        </Button>
      </form>

      <p className="mt-5 text-center text-xs text-slate-500">
        New to FreshCart?{" "}
        <Link
          href="/register"
          className="font-semibold text-[#16853a] hover:underline"
        >
          Create an account
        </Link>
      </p>
      <div className="mt-5 flex items-center justify-center gap-4 border-t border-slate-100 pt-4 text-[10px] font-medium text-slate-400">
        <span className="inline-flex items-center gap-1">
          <LockKeyhole aria-hidden="true" className="size-3" />
          SSL Secured
        </span>
        <span>50k+ Users</span>
        <span>4.9 Rating</span>
      </div>
    </div>
  );
}
