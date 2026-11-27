import type { Metadata } from "next"
import { ProfileHero } from "@/components/profile/profile-hero"
import { ProfilePageContent } from "@/components/profile/profile-page-content"

export const metadata: Metadata = {
    title: "My Account | FreshCart",
    description: "Manage your saved delivery addresses and account settings.",
}

export default function ProfilePage() {
    return (
        <div className="min-h-[calc(100vh-200px)] w-full bg-background">
            <ProfileHero />
            <div className="mx-auto max-w-[1440px] px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
                <ProfilePageContent />
            </div>
        </div>
    )
}
