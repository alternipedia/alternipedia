import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma";
import { withRetry } from "@/lib/retry";
import crypto from "crypto";

type Body = {
  uri?: string;
  referrer?: string | null;
  lang?: string | null;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    const body = req.body as Body;
    if (!body || !body.uri || typeof body.uri !== "string") {
      return res.status(400).json({ error: "Missing or invalid `uri` in body" });
    }

    // get client IP (respect proxy header if present)
    const forwarded = (req.headers["x-forwarded-for"] as string) || null;
    const ip = forwarded ? forwarded.split(",")[0].trim() : (req.socket?.remoteAddress ?? null);

    // hash IP for privacy before storing
    const ipHash = ip ? crypto.createHash("sha256").update(String(ip)).digest("hex") : null;

    const userAgent = (req.headers["user-agent"] as string) || null;

    // Truncate long values to match DB column sizes
    const uri = String(body.uri).slice(0, 2000);
    const ua = userAgent ? String(userAgent).slice(0, 2000) : null;

    await withRetry(() =>
      // cast to any to avoid strict generated client typing differences across environments
      prisma.pageView.create({
        data: {
          uri,
          userAgent: ua,
          ipAddress: ipHash,
          // viewer, article, language linking can be added later when available
        } as any,
      })
    );

    return res.status(200).json({ ok: true });
  } catch (err: any) {
    console.error("/api/page-view error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
}
