import React from "react";

export default function BiasPolicy() {
  return (
    <article>
      <h2 className="text-2xl font-bold mb-2">Bias Profile & Restrictions</h2>

      <p className="mb-2">
        Your bias profile represents the perspective you choose for editing
        articles. It helps the system group similar edits and prevent targeted
        reverts or coordinated vandalism.
      </p>

      <h3 className="text-lg font-semibold mt-4">Lock Period</h3>
      <p className="mb-2">
        You may change your bias profile at most once every 30 days. Attempting
        to change sooner will be blocked by the system and you will be shown the
        number of days remaining until the next allowed change.
      </p>

      <h3 className="text-lg font-semibold mt-4">Moderator Actions</h3>
      <p className="mb-2">
        Moderators can ban a user from participating in a discussion if the user
        is found to be abusing the category (for example, to conduct
        coordinated attacks across multiple articles). Such bans are recorded
        and may be temporary or permanent.
      </p>
    </article>
  );
}
