export const revalidate = 60;

import { MetadataRoute } from "next"
import { prisma } from "@/lib/prisma"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXTAUTH_URL || 'http://localhost:3000'

  const articles = await prisma.article.findMany({
    select: {
      slug: true,
      language: true,
      revisions: {
        orderBy: { createdAt: 'desc' },
        distinct: ["biasId"],
        select: {
          createdAt: true,
          bias: {
            select: { name: true },
          }
        },
      },
    },
  });

  const urls: MetadataRoute.Sitemap = articles.flatMap((article) => article.revisions.map((revision) => ({
    url: `${baseUrl}/${article.language.toLowerCase()}/wiki/${article.slug}/${revision.bias.name.toLowerCase()}`,
    lastModified: revision.createdAt.toISOString(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  })));

  return urls;
}