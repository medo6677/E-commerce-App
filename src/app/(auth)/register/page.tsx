import React from "react";
import { AuthFeatures } from "@/components/auth/auth-features";
import { SocialAuthButtons } from "@/components/auth/social-auth-buttons";
import { RegisterForm } from "@/components/auth/register-form";
import { Separator } from "@/components/ui/separator";

export default function RegisterPage() {
  return (
    <div className="w-full max-w-6xl rounded-2xl  bg-card  overflow-hidden grid grid-cols-1 lg:grid-cols-12 my-6">
      {/* Left Column: Brand Showcase & Testimonials */}
      <AuthFeatures />

      {/* Right Column: Registration Form */}
      <div className="lg:col-span-7 p-8 lg:p-10 flex flex-col justify-center">
        <div className="w-full max-w-md mx-auto space-y-6">
          {/* Header */}
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              Create Your Account
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              Start your fresh journey with us today
            </p>
          </div>

          {/* Social Sign-in */}
          <SocialAuthButtons />

          {/* Divider */}
          <div className="relative flex items-center justify-center my-4">
            <Separator className="w-full" />
            <span className="absolute bg-card px-2 text-xs uppercase text-muted-foreground">
              or
            </span>
          </div>

          {/* Form */}
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}
