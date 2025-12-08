import React from "react";

export default function MediaLimits() {
  return (
    <article>
      <h2 className="text-2xl font-bold mb-2">Media Upload Limits</h2>

      <p className="mb-2">
        Images, audio and video uploads are allowed with size restrictions to
        keep costs and abuse under control.
      </p>

      <h3 className="text-lg font-semibold mt-4">Free Tier Limits</h3>
      <p className="mb-2">
        On the free tier, each uploaded file (image, audio or video) must be
        1MB or smaller. Files exceeding this limit will be rejected at upload
        time. Consider compressing or using lower-resolution media if needed.
      </p>

      <h3 className="text-lg font-semibold mt-4">Paid Tiers</h3>
      <p className="mb-2">
        Paid tiers may allow larger uploads; consult your plan details for the
        permitted maximums. The platform will always enforce file
        size checks.
      </p>
    </article>
  );
}
