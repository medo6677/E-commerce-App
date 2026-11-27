import CheckoutPageContent from '@/components/checkout/checkout-page-content';
import React from 'react'


export const metadata = {
    title: "checkout | FreshCart",
    description: "View and manage items in your FreshCart shopping cart.",
};

export default async function CheckoutPage() {


    return (
        <div className="w-full bg-background min-h-[calc(100vh-200px)]">
            <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
                <CheckoutPageContent />
            </div>
        </div>
    );
}
