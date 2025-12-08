import { NextApiRequest, NextApiResponse } from "next";
import { put } from '@vercel/blob';
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { handleUpload, HandleUploadBody } from "@vercel/blob/client";
import { Prisma } from '@prisma/client';
import { prisma } from '@/lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  if (req.method === 'POST') {
    const session = await getServerSession(req, res, authOptions);
    if (!session) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
    // narrow and validate the session values we need so their types are
    // concrete inside the upload completion closure. We intentionally use
    // the user's email (not session user id) because the session id does
    // not match your DB user id in this app.
    const biasId = session.user.currentEditableBiasId;
    const userEmail = session.user.email;

    if (!userEmail) {
      return res.status(400).json({ error: 'Missing user email in session' });
    }
    if (!biasId) {
      return res.status(400).json({ error: 'No bias selected' });
    }

    const body = req.body as HandleUploadBody;

    try {
      const jsonResponse = await handleUpload({
        body,
        request: req,
        onBeforeGenerateToken: async (
          pathname,
          /* clientPayload */
        ) => {
          // Generate a client token for the browser to upload the file
          // Make sure to authenticate and authorize users before generating the token.
          // Otherwise, you're allowing anonymous uploads.

          return {
            allowedContentTypes: ['image/*', 'audio/*', 'video/*'],
            addRandomSuffix: true,
            maximumSizeInBytes: session.user.subscription?.tier === "PRO" ? 5 * 1024 * 1024 : 1 * 1024 * 1024,
            // callbackUrl: 'https://example.com/api/avatar/upload',
            // optional, `callbackUrl` is automatically computed when hosted on Vercel
            tokenPayload: JSON.stringify({
              sessionId: session.user.id,
              userEmail: session.user.email,
            }),
          };
        },
        onUploadCompleted: async ({ blob, tokenPayload }) => {
          // Called by Vercel API on client upload completion
          // Use tools like ngrok if you want this to work locally

          try {
            const biasIdNum = Number(biasId);
            
            await prisma.blob.create({
              data: {
                bias: { connect: { id: biasIdNum } },
                url: blob.url,
                uploadedBy: { connect: { email: userEmail } },
                tier: session.user.subscription?.tier || 'FREE',
              }
            });
          } catch (error: any) {
            throw new Error(`Could not update uploaded images: ${String(error)}`);
          }
        },
      });

      return res.status(200).json(jsonResponse);
    } catch (error) {
      // The webhook will retry 5 times waiting for a 200
      return res.status(400).json({ error: (error as Error).message });
    }
  }
}