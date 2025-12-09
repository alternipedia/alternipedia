"use client";

import { useId } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/(components)/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/(components)/ui/card";
import { Label } from "@/app/(components)/ui/label";
import { Input } from "@/app/(components)/ui/input";
import { Button } from "@/app/(components)/ui/button";
import { Switch } from "@/app/(components)/ui/switch";
import { RadioGroup, RadioGroupItem } from "@/app/(components)/ui/radio-group";
import { Separator } from "@/app/(components)/ui/separator";
import {
  CircleX, Trash2, Flag, Flame, HandFist, Landmark, CircleAlertIcon,
  User as UserIcon, Lock, Bell
} from "lucide-react";
import { maskEmail } from '@/lib/email-mask';
import FormSubmitButton from "@/app/[lang]/settings/(client-renders)/form-submit-button";
import { updateSettings, deleteAccount } from "./actions";
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

// Icon mapping function
const getBiasIcon = (name: string) => {
  switch (name) {
    case 'socialist': return HandFist;
    case 'liberal': return Flame;
    case 'conservative': return Landmark;
    case 'nationalist': return Flag;
    default: return null;
  }
};

const getBiasLabel = (name: string) => {
  return name.charAt(0).toUpperCase() + name.slice(1);
};

export default function SettingsPageClient({ user, biases }: { user: any, biases: any[] }) {
  const id = useId();

  // Process biases for display
  const processedBiases = biases
    .filter(b => ['socialist', 'liberal', 'conservative', 'nationalist'].includes(b.name))
    .map(bias => ({
      ...bias,
      label: getBiasLabel(bias.name),
      Icon: getBiasIcon(bias.name),
      isBanned: user?.biasBans?.some((ban: any) => ban.biasId === bias.id && (!ban.expiresAt || new Date(ban.expiresAt) > new Date()))
    }));

  return (
    <div className="container max-w-4xl mx-auto py-8 px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Account Settings</h1>
        <p className="text-muted-foreground mt-2">
          Manage your account settings and preferences
        </p>
      </div>

      <Tabs defaultValue="profile" className="flex flex-col md:flex-row gap-8">
        <aside className="md:w-64 shrink-0">
          <TabsList className="flex flex-col h-auto w-full bg-transparent p-0 justify-start space-y-1">
            <TabsTrigger
              value="profile"
              className="w-full justify-start gap-2 px-3 py-2 text-base font-medium data-[state=active]:bg-secondary/50 data-[state=active]:text-foreground rounded-md hover:bg-secondary/30 transition-colors"
            >
              <UserIcon size={18} />
              Profile
            </TabsTrigger>
            <TabsTrigger
              value="security"
              className="w-full justify-start gap-2 px-3 py-2 text-base font-medium data-[state=active]:bg-secondary/50 data-[state=active]:text-foreground rounded-md hover:bg-secondary/30 transition-colors"
            >
              <Lock size={18} />
              Security
            </TabsTrigger>
            <TabsTrigger
              value="notifications"
              className="w-full justify-start gap-2 px-3 py-2 text-base font-medium data-[state=active]:bg-secondary/50 data-[state=active]:text-foreground rounded-md hover:bg-secondary/30 transition-colors"
            >
              <Bell size={18} />
              Notifications
            </TabsTrigger>
          </TabsList>
        </aside>

        <div className="flex-1 space-y-6">
          {/* PROFILE TAB */}
          <TabsContent value="profile" className="space-y-6 mt-0">
            {/* Profile Details (Read Only) */}
            <Card>
              <CardHeader>
                <CardTitle>Profile Details</CardTitle>
                <CardDescription>Your personal information.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Display name</Label>
                    <Input value={user.name || ''} readOnly className="bg-muted/50" />
                  </div>
                  <div className="space-y-2">
                    <Label>Email</Label>
                    <Input value={user.email || ''} readOnly className="bg-muted/50" />
                  </div>
                  {user.role && user.role !== 'USER' && (
                    <div className="space-y-2">
                      <Label>Role</Label>
                      <Input value={user.role} readOnly className="bg-muted/50" />
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Focus Settings */}
            <form action={updateSettings}>
              <input type="hidden" name="type" value="focus" />
              <Card>
                <CardHeader>
                  <CardTitle>Focus Settings</CardTitle>
                  <CardDescription>Choose your preferred option for editing.</CardDescription>
                </CardHeader>
                <CardContent>
                  <RadioGroup
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                    name="focus-settings"
                    defaultValue={user?.currentEditableBiasId ? String(user.currentEditableBiasId) : undefined}
                  >
                    {processedBiases.map((item: any) => (
                      <div
                        key={`${id}-${item.id}`}
                        className={`relative flex flex-col gap-4 rounded-xl border-2 p-4 transition-all hover:bg-accent/50 has-[[data-state=checked]]:border-primary has-[[data-state=checked]]:bg-accent
                            ${item.isBanned ? 'border-destructive/50 opacity-70 cursor-not-allowed' : 'border-muted'}`}
                      >
                        <div className="flex justify-between items-center gap-2">
                          <Label htmlFor={`${id}-${item.id}`} className="font-semibold cursor-pointer flex-1">
                            {item.label}
                          </Label>
                          {item.Icon && <item.Icon className="h-5 w-5 text-muted-foreground" />}
                        </div>
                        <RadioGroupItem
                          id={`${id}-${item.id}`}
                          value={String(item.id)}
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                          disabled={
                            (user?.currentEditableBiasChangedAt &&
                              new Date(new Date(user.currentEditableBiasChangedAt).getTime() + 30 * 24 * 60 * 60 * 1000) > new Date()) ||
                            item.isBanned
                          }
                        />
                      </div>
                    ))}
                  </RadioGroup>

                  {user?.currentEditableBiasChangedAt &&
                    new Date(new Date(user.currentEditableBiasChangedAt).getTime() + 30 * 24 * 60 * 60 * 1000) > new Date() && (
                      <p className="mt-4 text-sm text-muted-foreground italic">
                        You can only change your focus setting once per month.
                      </p>
                    )}

                  {processedBiases.some((item: any) => item.isBanned) && (
                    <p className="mt-4 text-sm text-destructive italic">
                      You have been banned from one or more biases.
                    </p>
                  )}
                </CardContent>
                <div className="p-6 pt-0 flex justify-end">
                  <FormSubmitButton type="submit">Save Changes</FormSubmitButton>
                </div>
              </Card>
            </form>

            {/* Subscription */}
            <Card>
              <CardHeader>
                <CardTitle>Subscription</CardTitle>
                <CardDescription>Manage your subscription plan.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {user.subscriptionTier === "PRO" ? (
                  <div className="bg-secondary/20 rounded-lg p-4 border border-border">
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-1">
                        <h4 className="font-semibold flex items-center gap-2">
                          <span className="bg-primary/10 text-primary px-2 py-0.5 rounded text-xs">PRO</span>
                          Active Plan
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          You are currently subscribed to Pro. Cancelling will revert your account to the free tier.
                        </p>
                        <ul className="grid grid-cols-1 gap-1 mt-3 text-sm text-muted-foreground">
                          <li className="flex items-center gap-2"><CircleX size={14} /> Loss of access to notes & watched articles</li>
                          <li className="flex items-center gap-2"><CircleX size={14} /> No custom themes</li>
                          <li className="flex items-center gap-2"><CircleX size={14} /> Lose AI assisted translations</li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-6 flex flex-col gap-3">
                      <Button variant="secondary" className="w-full sm:w-auto self-start text-destructive hover:text-destructive hover:bg-destructive/10">
                        Cancel Subscription
                      </Button>
                      <p className="text-xs text-muted-foreground">
                        If you cancel, your subscription will remain active until the end of the current billing period.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="bg-secondary/20 rounded-lg p-4 border border-border">
                    <div className="space-y-2">
                      <h4 className="font-semibold">Free Plan</h4>
                      <p className="text-sm text-muted-foreground">
                        You are currently on the free tier. Upgrade to PRO to unlock additional features and support the platform.
                      </p>
                      <Button className="mt-2 w-full sm:w-auto">Upgrade to PRO</Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* SECURITY TAB */}
          <TabsContent value="security" className="space-y-6 mt-0">
            <Card className="border-destructive/20">
              <CardHeader>
                <CardTitle className="text-destructive">Delete Account</CardTitle>
                <CardDescription>
                  Permanently remove your account and all of its contents from the platform. This action is not reversible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="destructive">
                      <Trash2 className="mr-2 h-4 w-4" />
                      Delete Account
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <div className="mx-auto bg-destructive/10 p-3 rounded-full mb-2">
                        <CircleAlertIcon className="h-6 w-6 text-destructive" />
                      </div>
                      <DialogTitle className="text-center text-destructive">Final Confirmation</DialogTitle>
                      <DialogDescription className="text-center">
                        Deleting your account cannot be undone. To confirm, please enter your email address&nbsp;
                        <span className="font-medium text-foreground">{maskEmail(user.email || '')}</span>.
                      </DialogDescription>
                    </DialogHeader>

                    <form action={deleteAccount} className="space-y-4 py-4">
                      <div className="space-y-2">
                        <Label htmlFor="email-confirm">Confirm identity</Label>
                        <Input
                          id="email-confirm"
                          name="email-confirmation"
                          type="text"
                          placeholder="Type your email to confirm"
                          required
                        />
                      </div>
                      <DialogFooter className="sm:justify-between gap-2">
                        <DialogClose asChild>
                          <Button type="button" variant="outline" className="flex-1">Cancel</Button>
                        </DialogClose>
                        <FormSubmitButton
                          type="submit"
                          className="bg-destructive text-destructive-foreground hover:bg-destructive/90 flex-1"
                          busyLabel="Deleting..."
                        >
                          Delete
                        </FormSubmitButton>
                      </DialogFooter>
                    </form>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          </TabsContent>

          {/* NOTIFICATIONS TAB */}
          <TabsContent value="notifications" className="space-y-6 mt-0">
            <form action={updateSettings}>
              <input type="hidden" name="type" value="notifications" />
              <Card>
                <CardHeader>
                  <CardTitle>Notification Preferences</CardTitle>
                  <CardDescription>Choose how you want to be notified.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-0 divide-y">
                  <div className="flex items-center justify-between py-4">
                    <div className="space-y-0.5">
                      <Label htmlFor="email-notifications" className="text-base">Email Notifications</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive emails about your account activity and updates.
                      </p>
                    </div>
                    <Switch
                      id="email-notifications"
                      name="email-notifications"
                      defaultChecked={user.emailNotifications}
                    />
                  </div>
                  <div className="flex items-center justify-between py-4">
                    <div className="space-y-0.5">
                      <Label htmlFor="push-notifications" className="text-base">Push Notifications</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive push notifications on your devices.
                      </p>
                    </div>
                    <Switch
                      id="push-notifications"
                      name="push-notifications"
                      defaultChecked={user.pushNotifications}
                    />
                  </div>
                </CardContent>
                <div className="p-6 pt-0 flex justify-end">
                  <FormSubmitButton type="submit">Save Changes</FormSubmitButton>
                </div>
              </Card>
            </form>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
