import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12 flex justify-center items-center min-h-[calc(100vh-160px)]">
      {children}
    </div>
  );
}
