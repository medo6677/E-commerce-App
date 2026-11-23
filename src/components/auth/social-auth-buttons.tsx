import React from "react";
import { Button } from "@/components/ui/button";

export function SocialAuthButtons({
  actionLabels = false,
}: {
  actionLabels?: boolean;
}) {
  return (
    <div
      className={`grid ${actionLabels ? "grid-cols-1" : "grid-cols-2"} gap-3`}
    >
      <Button
        type="button"
        variant="outline"
        className="w-full h-10 font-normal hover:bg-muted/50 cursor-pointer"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.1562 8.92266C17.1562 13.8973 13.7496 17.4375 8.71875 17.4375C3.89531 17.4375 0 13.5422 0 8.71875C0 3.89531 3.89531 0 8.71875 0C11.0672 0 13.043 0.861328 14.5652 2.28164L12.1922 4.56328C9.08789 1.56797 3.31523 3.81797 3.31523 8.71875C3.31523 11.7598 5.74453 14.2242 8.71875 14.2242C12.1711 14.2242 13.4648 11.7492 13.6687 10.466H8.71875V7.46719H17.0191C17.1 7.91367 17.1562 8.34258 17.1562 8.92266Z"
            fill="#FB2C36"
          />
        </svg>

        {actionLabels ? "Continue with Google" : "Google"}
      </Button>

      <Button
        type="button"
        variant="outline"
        className="w-full h-10 font-normal hover:bg-muted/50 cursor-pointer"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 9C18 4.02891 13.9711 0 9 0C4.02891 0 0 4.02891 0 9C0 13.2188 2.90742 16.7625 6.82734 17.7363V11.7492H4.97109V9H6.82734V7.81523C6.82734 4.75313 8.2125 3.33281 11.2219 3.33281C11.7914 3.33281 12.7758 3.44531 13.1801 3.55781V6.04688C12.9691 6.02578 12.6 6.01172 12.1395 6.01172C10.6629 6.01172 10.0934 6.5707 10.0934 8.02266V9H13.0324L12.5262 11.7492H10.0898V17.9332C14.5477 17.3953 18 13.602 18 9Z"
            fill="#155DFC"
          />
        </svg>

        {actionLabels ? "Continue with Facebook" : "Facebook"}
      </Button>
    </div>
  );
}
