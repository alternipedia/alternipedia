import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { prisma } from "@/lib/prisma";
import { withRetry } from "@/lib/retry";
import UnAuthorised from "@/app/[lang]/settings/401";
import SettingsPageClient from "./settings-page-client";

export default async function SettingsPage() {
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

  return (
    <SettingsPageClient
      user={userSettings}
      biases={biases}
    />
  );
}
