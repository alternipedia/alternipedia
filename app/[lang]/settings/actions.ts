"use server";

import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { prisma } from "@/lib/prisma";
import { withRetry } from "@/lib/retry";
import { redirect } from "next/navigation";

export async function deleteAccount(formData: FormData) {
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

export async function updateSettings(formData: FormData) {
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

  const formType = formData.get("type");
  const data: any = {};

  if (formType === 'notifications') {
    data.emailNotifications = formData.get("email-notifications") === "on";
    data.pushNotifications = formData.get("push-notifications") === "on";
  }

  if (formType === 'focus' || formData.has('focus-settings')) {
    if (userSettings?.currentEditableBiasChangedAt && userSettings.currentEditableBiasChangedAt > new Date()) {
      // cannot change
    } else {
      const focusSetting = formData.get("focus-settings");
      if (focusSetting) {
        data.currentEditableBiasId = Number(focusSetting);
        data.currentEditableBiasChangedAt = new Date();
      }
    }
  }

  if (Object.keys(data).length > 0) {
    await withRetry(() => prisma.user.update({
      where: {
        email: session?.user.email,
      },
      data,
    }));
  }

  redirect(`/settings`);
}
