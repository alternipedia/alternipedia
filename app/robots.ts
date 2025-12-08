// app/robots.ts
import { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXTAUTH_URL || 'http://localhost:3000';

  return {
    rules: {
      userAgent: '*',
      disallow: [
        '/*/wiki/*/wikipedia',
        "/api/",
      ],
      allow: ['/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}