
export default function CodeOfConductPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="space-y-4 mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Code of Conduct</h1>
        <p className="text-xl text-muted-foreground">
          Our commitment to free speech and community safety.
        </p>
      </div>

      <div className="space-y-12">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold border-b pb-2">
            1. Free Speech Commitment
          </h2>
          <div className="prose dark:prose-invert max-w-none text-muted-foreground">
            <p>
              Alternipedia is dedicated to the principle of free speech. We believe that open dialogue and the free exchange of ideas are essential for a thriving society.
            </p>
            <p className="font-medium text-foreground mt-4">
              Users are permitted to express themselves freely to the maximum extent permitted by applicable law.
            </p>
            <p>
              We do not censor opinions, political views, or controversial topics solely because they may be offensive or unpopular.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold border-b pb-2">
            2. Zero Tolerance for Harm
          </h2>
          <div className="prose dark:prose-invert max-w-none text-muted-foreground">
            <p>
              While we uphold free speech, we draw a strict line at content that threatens physical danger or incites violence.
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>
                <span className="font-medium text-foreground">Direct Threats:</span> You may not publish content that threatens death or serious physical harm to any individual or group.
              </li>
              <li>
                <span className="font-medium text-foreground">Celebration of Harm:</span> You may not celebrate, glorify, or praise acts of violence, death, or physical harm committed against others.
              </li>
              <li>
                <span className="font-medium text-foreground">Illegal Content:</span> Any content that violates applicable laws (such as incitement to violence, child sexual abuse material, etc.) is strictly prohibited.
              </li>
            </ul>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold border-b pb-2">
            3. Enforcement
          </h2>
          <div className="prose dark:prose-invert max-w-none text-muted-foreground">
            <p>
              We reserve the right to remove any content that violates this Code of Conduct. Accounts found to be in violation of these specific rules regarding threats and harm may be suspended or permanently banned.
            </p>
            <p>
              Our moderation team reviews reports to ensure these standards are upheld while respecting the principles of free expression.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}