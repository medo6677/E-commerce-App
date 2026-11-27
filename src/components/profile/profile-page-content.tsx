"use client"

import { useEffect, useState } from "react"
import { ChevronRight, MapPin, Plus, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { ProfileAddressCard } from "./profile-address-card"
import { ProfileAddressFormDialog } from "./profile-address-form-dialog"
import { getLoggedUserAddresses } from "@/app/actions/profile.actions"
import { UserAdressI } from "@/types/profile/userAdress.type"

export function ProfilePageContent() {
  const [dialogOpen, setDialogOpen] = useState(false)
  const [userAdress, setuserAdress] = useState<UserAdressI | null>(null)
  async function getUserAdress() {
    const response = await getLoggedUserAddresses()
    console.log(response);
    setuserAdress(response)

  }
  useEffect(() => { getUserAdress() }, [])
  return (
    <>
      <Tabs defaultValue="addresses" orientation="vertical">
        <div className="grid items-start gap-5 md:grid-cols-[240px_minmax(0,1fr)] lg:gap-6">
          <Card className="gap-3 rounded-xl border-slate-200 bg-white p-3 shadow-none">
            <h2 className="px-2 pt-1 text-xs font-semibold text-slate-800">
              My Account
            </h2>
            <TabsList className="h-auto w-full flex-col items-stretch gap-1 border-0 bg-transparent p-0">
              <TabsTrigger
                value="addresses"
                className="w-full justify-start rounded-lg border-0 px-2.5 py-2.5 text-xs data-[state=active]:bg-emerald-50 data-[state=active]:text-emerald-700 data-[state=active]:shadow-none"
              >
                <span className="flex size-7 items-center justify-center rounded-md bg-emerald-500 text-white">
                  <MapPin className="size-3.5" />
                </span>
                My Addresses
                <ChevronRight className="ml-auto size-3.5" />
              </TabsTrigger>
              <TabsTrigger
                value="settings"
                disabled
                className="w-full justify-start rounded-lg border-0 px-2.5 py-2.5 text-xs data-[state=active]:shadow-none"
              >
                <span className="flex size-7 items-center justify-center rounded-md bg-slate-100 text-slate-500">
                  <Settings className="size-3.5" />
                </span>
                Settings
                <ChevronRight className="ml-auto size-3.5" />
              </TabsTrigger>
            </TabsList>
          </Card>

          <TabsContent value="addresses" className="pt-0">
            <section aria-labelledby="addresses-heading">
              <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h2
                    id="addresses-heading"
                    className="text-base font-semibold text-slate-800"
                  >
                    My Addresses
                  </h2>
                  <p className="mt-1 text-xs text-slate-500">
                    Manage your saved delivery addresses
                  </p>
                </div>
                <Button
                  type="button"
                  size="sm"
                  onClick={() => setDialogOpen(true)}
                  className="h-8 gap-1.5 rounded-md bg-primary px-3 text-xs font-semibold text-primary-foreground hover:bg-primary/90"
                >
                  <Plus className="size-3.5" />
                  Add Address
                </Button>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {(userAdress?.data ?? []).map((item) => (
                  <ProfileAddressCard
                    key={item._id}
                    addressName={item.name}
                    fullAddress={item.details}
                    phone={item.phone}
                    city={item.city}
                  />
                ))}
              </div>
            </section>
          </TabsContent>
        </div>
      </Tabs>

      <ProfileAddressFormDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      />
    </>
  )
}
