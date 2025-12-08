import React from "react";

export default function Reporting() {
  return (
    <article>
      <h2 className="text-2xl font-bold mb-2">Reporting & Moderation</h2>

      <p className="mb-2">
        If you encounter bad or abusive articles, use the report function to
        flag content for moderator review. Reports are triaged by severity and
        may trigger temporary holds on editing or a formal investigation.
      </p>

      <h3 className="text-lg font-semibold mt-4">Moderator Powers</h3>
      <p className="mb-2">
        Moderators can:
      </p>
      <ul className="list-disc ml-6 mb-2">
        <li>Temporarily lock or protect articles under review</li>
        <li>Revert harmful edits and restore prior versions</li>
        <li>Ban users from editing, or specifically from changing articles of a certain bias</li>
      </ul>

      <h3 className="text-lg font-semibold mt-4">Appeals</h3>
      <p className="mb-2">
        Users who are moderated against can file an appeal. Appeals are handled
        by a separate moderation panel and include a full audit trail of edits
        and reports.
      </p>
    </article>
  );
}
