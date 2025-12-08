import React from "react";

export default function EditingPolicy() {
  return (
    <article>
      <h2 className="text-2xl font-bold mb-2">Editing Policy</h2>
      <p className="mb-2">
        Every registered user may propose edits to any article in the language
        they select. Edits are subject to review by the community and moderators.
      </p>

      <h3 className="text-lg font-semibold mt-4">Bias Lock</h3>
      <p className="mb-2">
        When you register, you must choose a preferred political affiliation ("bias"). Your bias affects how
        your edits are applied and attributed. To reduce vandalism and
        edit-wars, your chosen bias can only be changed once every 30 days.
      </p>

      <h3 className="text-lg font-semibold mt-4">Attribution & Auditing</h3>
      <p className="mb-2">
        All edits are recorded with your account and bias state. Moderators and
        audit tools can review change history to detect abuse. Repeated harmful
        edits may lead to temporary or permanent restrictions.
      </p>
    </article>
  );
}
