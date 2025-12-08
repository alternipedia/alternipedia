import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const userAgent = req.headers["user-agent"] || "";
  const isMobile = /Mobi|Android|iPhone|iPad/i.test(userAgent);

  const { path = [] } = req.query;

  const slug = path[2].split('/')[0];
  const lang = req.headers["accept-language"] || 'en';
  const decodedSlug = decodeURIComponent(slug).split('/wikipedia')[0];
  const encodedSlug = encodeURIComponent(decodedSlug);

  const targetUrl = isMobile
    ? `https://${lang}.m.wikipedia.org/api/rest_v1/page/summary/${encodedSlug}`
    : `https://${lang}.wikipedia.org/api/rest_v1/page/summary/${encodedSlug}`;

  try {
    const response = await fetch(targetUrl, {
      headers: {
        "User-Agent": userAgent,
        "Accept": req.headers["accept"] || "*/*",
      },
    });

    const data = await response.json();

    res.status(response.status);
    res.setHeader("Content-Type", response.headers.get("content-type") || "text/plain");
    res.json(data);
  } catch (err: any) {
    console.error("Wiki proxy error:", err);
    res.status(500).json({ error: "Proxy failed" });
  }
}