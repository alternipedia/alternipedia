import { CircleX, Trash2, Flag, Flame, HandFist, Landmark, CircleAlertIcon } from "lucide-react"
import { use, useId } from "react";
import { RadioGroup, RadioGroupItem } from "@/app/(components)/ui/radio-group";
import { Label } from "@/app/(components)/ui/label";
import { Button } from "@/app/(components)/ui/button";
import { Switch } from "@/app/(components)/ui/switch";
import Form from 'next/form';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/(components)/ui/dialog";
import { Input } from "@/app/(components)/ui/input";
import FormSubmitButton from "@/app/[lang]/settings/(client-renders)/form-submit-button";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { maskEmail } from '@/lib/email-mask';
import { prisma } from "@/lib/prisma";
import { withRetry } from "@/lib/retry";
import UnAuthorised from "@/app/[lang]/settings/401";
import { redirect } from "next/navigation";

async function deleteAccount(formData: FormData) {
  "use server";

  const session = await getServerSession(authOptions);

  if (typeof session !== "object" || !session?.user) {
    throw new Error("Unauthorized");
  }

  const emailInput = formData.get("email-confirmation");

  if (emailInput !== session?.user.email) {
    redirect('/settings/error');
  }
  
  console.log('successfully confirmed email for account deletion:', emailInput);

  await withRetry(() => prisma.user.delete({
    where: {
      email: session?.user.email,
    },
    include: {
      watching: true,
      savedArticles: true,
      moderatedBias: true,
      notes: true
    }
  }));

  // todo: cancel any active subscriptions via payment processor API
  redirect(`/goodbye`);
}

async function action(formData: FormData) {
  "use server";

  const session = await getServerSession(authOptions);

  if (typeof session !== "object" || !session?.user) {
    throw new Error("Unauthorized");
  }

  const userSettings = await withRetry(() => prisma.user.findUnique({
    where: {
      email: session?.user.email,
    },
    include: {
      biasBans: {
        select: {
          biasId: true,
          expiresAt: true,
          createdAt: true,
          bias: true,
        },
      }
    }
  }));

  if (userSettings?.currentEditableBiasChangedAt && userSettings.currentEditableBiasChangedAt > new Date()) {
    formData.delete("focus-settings");
  }

  const emailNotifications = formData.get("email-notifications") === "on";
  const pushNotifications = formData.get("push-notifications") === "on";
  const focusSetting = formData.get("focus-settings");

  await withRetry(() => prisma.user.update({
    where: {
      email: session?.user.email,
    },
    data: {
      emailNotifications,
      pushNotifications,
      currentEditableBiasId: focusSetting ? Number(focusSetting) : undefined,
      currentEditableBiasChangedAt: focusSetting ? new Date() : undefined,
    },
  }));

  redirect(`/settings`);
}

export default async function SettingsPage() {
  const id = useId();
  const session = await getServerSession(authOptions);

  if (typeof session !== "object" || !session?.user) {
    return <UnAuthorised></UnAuthorised>;
  }

  const userSettings = await withRetry(() => prisma.user.findUnique({
    where: {
      email: session?.user.email,
    },
    include: {
      biasBans: {
        select: {
          biasId: true,
          expiresAt: true,
          createdAt: true,
          bias: true,
        },
      }
    }
  }));

  const biases = await withRetry(() => prisma.bias.findMany());
  const filteredBiases = [];

  for (const bias of biases) {
    if (bias.name === 'socialist') {
      (bias as any).label = 'Socialist';
      (bias as any).icon = HandFist;
      (bias as any).isBanned = userSettings?.biasBans.some(ban => ban.biasId === bias.id && (!ban.expiresAt || ban.expiresAt > new Date()));
      filteredBiases.push(bias);
    } else if (bias.name === 'liberal') {
      (bias as any).label = 'Liberal';
      (bias as any).icon = Flame;
      (bias as any).isBanned = userSettings?.biasBans.some(ban => ban.biasId === bias.id && (!ban.expiresAt || ban.expiresAt > new Date()));
      filteredBiases.push(bias);
    } else if (bias.name === 'conservative') {
      (bias as any).label = 'Conservative';
      (bias as any).icon = Landmark;
      (bias as any).isBanned = userSettings?.biasBans.some(ban => ban.biasId === bias.id && (!ban.expiresAt || ban.expiresAt > new Date()));
      filteredBiases.push(bias);
    } else if (bias.name === 'nationalist') {
      (bias as any).label = 'Nationalist';
      (bias as any).icon = Flag;
      (bias as any).isBanned = userSettings?.biasBans.some(ban => ban.biasId === bias.id && (!ban.expiresAt || ban.expiresAt > new Date()));
      filteredBiases.push(bias);
    }
  }

  return (
    <Form
      className="w-full flex flex-col md:w-[500px] lg:w-[600px] mx-auto justify-center max-w-11/12 md:max-w-full mt-2"
      action={action}
    >
      <div className="text-xl font-semibold mx-4 my-3">Notification settings</div>
      <hr className="mb-2 mx-2" />
      <div className="text-md text-gray-600 dark:text-neutral-400 mb-2 mx-3">Select how you would like to be notified:</div>
      <div className="px-4 py-3 flex items-center justify-between">
        <span className="text-sm text-foreground pointer-events-none">Email notifications</span>
        <div className="flex items-center">
          <Switch
            defaultChecked={userSettings?.emailNotifications}
            defaultValue={userSettings?.emailNotifications ? "on" : "off"}
            id={`${id}-email`}
            className="h-5 w-8 cursor-pointer [&_span]:size-4 data-[state=checked]:[&_span]:translate-x-3 data-[state=checked]:[&_span]:rtl:-translate-x-3"
            aria-label="Enable notifications"
            name="email-notifications"
          />
          <Label htmlFor={`${id}-email`} className="sr-only">
            Enable email notifications
          </Label>
        </div>
      </div>
      <div className="px-4 py-3 flex items-center justify-between">
        <span className="text-sm text-foreground pointer-events-none">Push notifications</span>
        <div className="flex items-center">
          <Switch
            id={`${id}-push`}
            defaultChecked={userSettings?.pushNotifications}
            defaultValue={userSettings?.pushNotifications ? "on" : "off"}
            className="h-5 w-8 cursor-pointer [&_span]:size-4 data-[state=checked]:[&_span]:translate-x-3 data-[state=checked]:[&_span]:rtl:-translate-x-3"
            aria-label="Enable notifications"
            name="push-notifications"
          />
          <Label htmlFor={`${id}-push`} className="sr-only">
            Enable push notifications
          </Label>
        </div>
      </div>
      <div className="text-xl font-semibold mx-4 my-3">Focus settings</div>
      <hr className="mb-2 mx-2" />
      <div className="text-md text-gray-600 dark:text-neutral-400 mb-2 mx-3">Choose your preferred option for editing:</div>
      <RadioGroup
        className="grid-cols-2 mx-4 my-1"
        name="focus-settings"
        defaultValue={userSettings?.currentEditableBiasId ? String(userSettings.currentEditableBiasId) : undefined}
      >
        {filteredBiases.map((item: any) => {
          // ensure we have a stable value for keys/ids (fallback to id or name)
          const value = item.value ?? item.id ?? item.name;
          const Icon = (item as any).icon;

          return (
            <div
              key={`${id}-${value}`}
              className={`relative flex flex-col gap-4 rounded-md border ${item.isBanned ? 'border-red-500 cursor-not-allowed hover:bg-red-50' : 'border-input hover:bg-gray-50 dark:hover:bg-gray-700/50'} p-4 shadow-xs outline-none has-data-[state=checked]:border-primary/50`}
            >
              <div className="flex justify-between gap-2">
                <RadioGroupItem
                  id={`${id}-${value}`}
                  value={String(item.id)}
                  className={`order-1 after:absolute after:inset-0 cursor-pointer ${item.isBanned ? 'border-red-500 cursor-not-allowed' : ''}`}
                  disabled={Boolean(userSettings?.currentEditableBiasChangedAt && new Date(userSettings.currentEditableBiasChangedAt.getTime() + 30 * 24 * 60 * 60 * 1000) > new Date()) || item.isBanned}
                />
                {Icon ? <Icon className="opacity-60" size={16} aria-hidden="true" /> : null}
              </div>
              <Label htmlFor={`${id}-${value}`}>{item.label}</Label>
            </div>
          );
        })}
      </RadioGroup>
      {userSettings && userSettings.currentEditableBiasChangedAt && new Date(userSettings.currentEditableBiasChangedAt.getTime() + 30 * 24 * 60 * 60 * 1000) > new Date() && (<div className="w-full text-gray-500 dark:text-neutral-400 text-center italic text-sm">You can only change your focus setting once per month.</div>)}
      {filteredBiases.some((item: any) => item.isBanned) && (<div className="w-full text-red-500 text-center italic text-sm">You have been banned from one or more biases. Please contact support for more information.</div>)}

      {/* CANCEL SUBSCRIPTION */}
      <div className="text-xl font-semibold mx-4 my-3">Manage subscription</div>
      <hr className="mb-2 mx-2" />
      <div className="mx-4">
        {userSettings?.subscriptionTier === "PRO" && (
          <div className="px-4 py-2">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="text-sm text-gray-600 dark:text-neutral-400  mt-1">You're currently subscribed to Pro. Cancelling will revert your account to the free tier.</div>

                <div className="list-disc pl-5 mt-3 text-sm text-gray-700 space-y-1 pr-5">
                  <p><CircleX className="inline" size={16} />&nbsp;Loss of acccess to your notes and watched articles</p>
                  <p><CircleX className="inline" size={16} />&nbsp;No custom themes</p>
                  <p><CircleX className="inline" size={16} />&nbsp;Lose AI assisted translations</p>
                  <p><CircleX className="inline" size={16} />&nbsp;Advanced content analysis will be removed</p>
                  <p><CircleX className="inline" size={16} />&nbsp;Ads may be shown and some features may be limited</p>
                </div>
              </div>

            </div>
            <div className="mt-3 flex flex-col items-center justify-between gap-4">
              <div className="text-sm text-gray-500">If you cancel, your subscription will remain active until the end of the current billing period.</div>
              <Button type="button" className="bg-yellow-200 opacity-80 hover:opacity-100 hover:scale-101 w-10/12 hover:bg-yellow-400 text-gray-700 hover:text-black border-transparent px-3 py-2 cursor-pointer rounded-md">Cancel PRO</Button>
            </div>
          </div>
        )}
        {userSettings?.subscriptionTier !== "PRO" && (
          <div className="px-4 py-2">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="text-sm text-gray-600 dark:text-neutral-400 mt-1">You are currently on the free tier. Upgrade to PRO to unlock additional features and support the development of the platform.</div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* DELETE ACCOUNT */}
      <div className="text-xl font-semibold mx-4 my-3 flex items-center gap-2">Remove data</div>
      <hr className="mb-2 mx-2" />

      <div className="mx-4">
        <div className="px-4 py-2">
          <div className="flex flex-col md:flex-row items-start justify-between gap-4">
            <div className="flex-1">
              <div className="text-sm text-gray-600 dark:text-neutral-400 mt-1">Deleting your account is permanent and cannot be undone. All your data will be removed.</div>
            </div>

            <Dialog>
              <DialogTrigger asChild>
                <div className="mt-3 flex flex-col items-center mx-auto md:m-0 md:justify-between sm:justify-center gap-4">
                  <Button type="button" className="bg-red-300 opacity-80 hover:opacity-100 hover:scale-101 w-10/12 hover:bg-red-600 text-white border-transparent px-10 flex-items-center py-2 cursor-pointer rounded-md gap-2">
                    <Trash2 size={16} />
                    Delete account
                  </Button>
                </div>
              </DialogTrigger>
              <DialogContent allowAutoFocus={false} className="dark:bg-neutral-900">
                <div className="flex flex-col items-center gap-2">
                  <div
                    className="flex size-9 shrink-0 items-center justify-center rounded-full border"
                    aria-hidden="true"
                  >
                    <CircleAlertIcon className="opacity-80" size={16} />
                  </div>
                  <DialogHeader>
                    <DialogTitle className="sm:text-center text-red-500">
                      Final confirmation
                    </DialogTitle>
                    <DialogDescription className="sm:text-center">
                      Deleting your account cannot be undone. To confirm, please enter your email address&nbsp;
                      <span className="text-foreground">{maskEmail(session?.user.email || '')}</span>.
                    </DialogDescription>
                  </DialogHeader>
                </div>

                <Form className="space-y-5" action={deleteAccount}>
                  <div className="*:not-first:mt-2">
                    <Label htmlFor={id}>Confirm identity</Label>
                    <Input
                      id={id}
                      type="text"
                      placeholder="Type your email to delete account"
                      className="text-base"
                    />
                  </div>
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button type="button" variant="outline" className="flex-1 cursor-pointer md:w-10/12">
                        Cancel
                      </Button>
                    </DialogClose>
                    <FormSubmitButton busyLabel="Deleting..." type="submit" className="bg-red-300 opacity-80 hover:opacity-100 hover:scale-103 hover:bg-red-600 text-white border-transparent flex-items-center py-2 cursor-pointer rounded-md gap-2">Delete</FormSubmitButton>
                  </DialogFooter>
                </Form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>

      <FormSubmitButton type="submit" className="mx-auto w-full justify-center flex my-4 cursor-pointer hover:bg-gray-700 dark:hover:bg-neutral-400">Save</FormSubmitButton>
    </Form>
  )
}
