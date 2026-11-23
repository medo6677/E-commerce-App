import { LoginForm } from "@/components/auth/login-form";
import { LoginShowcase } from "@/components/auth/login-showcase";

export default function LoginPage() {
  return (
    <div className="my-6 grid w-full max-w-6xl overflow-hidden rounded-2xl  bg-white  lg:grid-cols-2">
      <LoginShowcase />
      <section className="flex items-center justify-center px-6 py-10 sm:px-10 lg:px-12">
        <div className="w-full max-w-sm">
          <div className="mb-7 text-center">
            <p className="text-xl font-bold tracking-tight text-[#0AAD0A]">
              FreshCart
            </p>
            <h1 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
              Welcome Back!
            </h1>
            <p className="mt-1 text-sm text-slate-500">
              Sign in to continue your fresh shopping experience.
            </p>
          </div>
          <LoginForm />
        </div>
      </section>
    </div>
  );
}
