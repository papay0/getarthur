import { SetupPrompt } from "@/components/setup-prompt";
import { ThemeToggle } from "@/components/theme-toggle";

const capabilities = [
  ["Apple Notes", "search, read, create, and edit your notes"],
  ["Reminders", "add, complete, and manage \u2014 syncs to iPhone"],
  ["iMessage", "read conversations and send texts"],
  ["Google Calendar", "view, create, and manage your events"],
  ["Gmail", "search, read, and send emails"],
  ["Chrome", "browses the web with your logins and sessions"],
  ["Memory", "structured notes that persist across conversations"],
  ["Scheduling", "automated tasks like morning briefings via crontab"],
];

const examples = [
  "Give me my morning briefing",
  "What\u2019s on my calendar this week?",
  "Clear my inbox and summarize what\u2019s important",
  "What did Mom say in her last message?",
  "Remind me to call the dentist tomorrow at 2pm",
  "Remember that Mom\u2019s birthday is March 15",
  "Find me a USB-C hub under $30 on Amazon",
  "Schedule my morning briefing for 8am every day",
];

export default function Home() {
  return (
    <main className="mx-auto max-w-[620px] px-6 pb-24">
      {/* ── Nav ── */}
      <nav className="flex items-center justify-between pt-10 pb-6">
        <span className="font-serif text-[17px] italic tracking-tight">
          Arthur
        </span>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <a
            href="https://github.com/papay0/arthur"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] text-muted-foreground transition-colors hover:text-foreground"
          >
            GitHub
          </a>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="pt-20 pb-28 sm:pt-28 sm:pb-36">
        <h1 className="font-serif text-[clamp(3rem,10vw,6rem)] leading-[0.95] tracking-tight text-[#d4a574]">
          Arthur
        </h1>
        <p className="mt-4 text-[15px] font-medium uppercase tracking-wide text-muted-foreground">
          Personal AI Assistant
        </p>
        <p className="mt-8 max-w-[480px] text-[clamp(1.25rem,3vw,1.75rem)] leading-snug tracking-tight text-foreground">
          A personal assistant built entirely
          <br />
          on{" "}
          <a
            href="https://docs.anthropic.com/en/docs/claude-code"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground underline decoration-[#d4a574]/40 underline-offset-[3px] transition-colors hover:decoration-[#d4a574]"
          >
            Claude Code
          </a>
          .
        </p>
        <p className="mt-6 max-w-[420px] text-[15px] leading-[1.7] text-muted-foreground">
          Install with one prompt. Talk to it from the{" "}
          <a
            href="https://apps.apple.com/app/claude-by-anthropic/id6473753684"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground underline decoration-[#d4a574]/40 underline-offset-[3px] transition-colors hover:decoration-[#d4a574]"
          >
            Claude app
          </a>{" "}
          or{" "}
          <a
            href="https://claude.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground underline decoration-[#d4a574]/40 underline-offset-[3px] transition-colors hover:decoration-[#d4a574]"
          >
            claude.ai
          </a>
          . No API keys, no external tools, no config.
        </p>
        <a
          href="#setup"
          className="mt-10 inline-block rounded-lg bg-[#d4a574] px-5 py-2.5 text-[14px] font-medium text-white transition-opacity hover:opacity-85"
        >
          Get started
        </a>
      </section>

      {/* ── Divider ── */}
      <div className="h-px w-10 bg-[#d4a574]/30" />

      {/* ── Connected to ── */}
      <section className="py-20 sm:py-24">
        <h2 className="font-serif text-[28px] italic tracking-tight">
          Connected to
        </h2>
        <p className="mt-3 max-w-[420px] text-[15px] leading-[1.7] text-muted-foreground">
          Arthur plugs into the apps you already use.
        </p>

        <ul className="mt-10 space-y-3.5">
          {capabilities.map(([name, desc]) => (
            <li key={name} className="flex gap-3 text-[15px]">
              <span className="mt-[9px] h-[5px] w-[5px] shrink-0 rounded-full bg-[#d4a574]" />
              <span>
                <span className="font-medium text-foreground">{name}</span>
                <span className="text-muted-foreground"> &mdash; {desc}</span>
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* ── Divider ── */}
      <div className="h-px w-10 bg-[#d4a574]/30" />

      {/* ── Make it yours ── */}
      <section className="py-20 sm:py-24">
        <h2 className="font-serif text-[28px] italic tracking-tight">
          Make it yours
        </h2>
        <div className="mt-6 max-w-[480px] space-y-4 text-[15px] leading-[1.7] text-muted-foreground">
          <p>
            Run{" "}
            <code className="rounded-md bg-muted px-1.5 py-0.5 font-mono text-[13px] text-muted-foreground">
              /onboarding
            </code>{" "}
            anytime to change Arthur&rsquo;s personality or reconnect tools.
            Add new capabilities in{" "}
            <code className="rounded-md bg-muted px-1.5 py-0.5 font-mono text-[13px] text-muted-foreground">
              .claude/skills/
            </code>
            . It&rsquo;s open source&mdash;fork it, extend it, make it yours.
          </p>
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="h-px w-10 bg-[#d4a574]/30" />

      {/* ── Setup ── */}
      <section id="setup" className="py-20 sm:py-24">
        <h2 className="font-serif text-[28px] italic tracking-tight">
          Get started
        </h2>
        <p className="mt-3 text-[15px] text-muted-foreground">
          Three steps, two minutes.
        </p>

        <div className="mt-10 space-y-8">
          {/* Step 1 */}
          <div>
            <p className="text-[15px] font-medium text-foreground">
              <span className="mr-2 text-[#d4a574]">1.</span>
              Install Claude Code
            </p>
            <code className="mt-3 block w-fit rounded-md bg-muted px-4 py-2.5 font-mono text-[13px] text-muted-foreground">
              npm i -g @anthropic-ai/claude-code
            </code>
          </div>

          {/* Step 2 */}
          <div>
            <p className="text-[15px] font-medium text-foreground">
              <span className="mr-2 text-[#d4a574]">2.</span>
              Run this in your terminal
            </p>
            <div className="mt-3">
              <SetupPrompt />
            </div>
          </div>

          {/* Step 3 */}
          <div>
            <p className="text-[15px] font-medium text-foreground">
              <span className="mr-2 text-[#d4a574]">3.</span>
              On first launch, inside Claude
            </p>
            <div className="mt-3 space-y-2.5">
              {[
                {
                  cmd: "y",
                  label: "trust the ~/arthur folder when prompted",
                },
                {
                  cmd: "/onboarding",
                  label: "pick Arthur\u2019s personality and connect your tools",
                },
                {
                  cmd: "/remote-control",
                  label: "get a link to control Arthur from the Claude app",
                },
              ].map(({ cmd, label }) => (
                <div key={cmd} className="flex items-baseline gap-3">
                  <code className="shrink-0 rounded-md bg-muted px-3 py-1.5 font-mono text-[13px] text-muted-foreground">
                    {cmd}
                  </code>
                  <span className="text-[14px] text-muted-foreground">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="h-px w-10 bg-[#d4a574]/30" />

      {/* ── Examples ── */}
      <section className="py-20 sm:py-24">
        <h2 className="font-serif text-[28px] italic tracking-tight">
          Things you can ask
        </h2>
        <p className="mt-3 mb-10 text-[15px] text-muted-foreground">
          No special commands. Just say what you need.
        </p>

        <div className="flex flex-col items-start gap-2.5">
          {examples.map((ex) => (
            <div
              key={ex}
              className="w-fit rounded-2xl rounded-bl-sm bg-muted px-4 py-2.5 text-[14px] text-foreground"
            >
              {ex}
            </div>
          ))}
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-border pt-10 pb-6 text-[13px] text-muted-foreground">
        Open source. Built with{" "}
        <a
          href="https://docs.anthropic.com/en/docs/claude-code"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground hover:underline"
        >
          Claude Code
        </a>
        .
      </footer>
    </main>
  );
}
