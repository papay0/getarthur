import { CopyButton } from "@/components/copy-button";

const capabilities = [
  ["Apple Notes", "search, read, and create"],
  ["Reminders", "syncs to iPhone and iPad"],
  ["iMessage", "read conversations, send texts"],
  ["Chrome", "browses with your logins and sessions"],
  ["Memory", "remembers across conversations"],
];

const examples = [
  "What\u2019s in my latest note?",
  "Remind me to call the dentist tomorrow at 2pm",
  "Read my recent messages from Mom",
  "Find USB-C hubs on Amazon under $30",
  "Give me my morning briefing",
];

const prompt = `Set up Arthur, my personal AI assistant.

1. Clone the repo and start:
   git clone https://github.com/papay0/arthur ~/arthur
   cd ~/arthur && ./start.sh

2. Test that Apple Notes works:
   osascript -e 'tell application "Notes" to get name of notes 1 thru 3'

3. Test that Apple Reminders works:
   remindctl show today

4. Test that iMessage works:
   imsg chats --limit 3

5. Show me the results of all tests.

If any step fails, fix it and try again.`;

export default function Home() {
  return (
    <main className="mx-auto max-w-[620px] px-6 pb-24">
      {/* ── Nav ── */}
      <nav className="flex items-center justify-between pt-10 pb-6">
        <span className="font-serif text-[17px] italic tracking-tight">
          Arthur
        </span>
        <a
          href="https://github.com/papay0/arthur"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[13px] text-[#9b9586] transition-colors hover:text-[#2c2418]"
        >
          GitHub
        </a>
      </nav>

      {/* ── Hero ── */}
      <section className="pt-20 pb-28 sm:pt-28 sm:pb-36">
        <h1 className="font-serif text-[clamp(3rem,10vw,6rem)] leading-[0.95] tracking-tight text-[#d4a574]">
          Arthur
        </h1>
        <p className="mt-8 max-w-[480px] text-[clamp(1.25rem,3vw,1.75rem)] leading-snug tracking-tight text-[#2c2418]">
          Open Claude on your phone.
          <br />
          Talk to your Mac.
        </p>
        <p className="mt-6 max-w-[400px] text-[15px] leading-[1.7] text-[#9b9586]">
          Arthur connects Claude to your Mac&rsquo;s apps&mdash;notes,
          reminders, messages, the web. Since it&rsquo;s 100% Claude, you just
          open the app and go. No extra tools. No API keys.
        </p>
        <a
          href="#setup"
          className="mt-10 inline-block rounded-lg bg-[#d4a574] px-5 py-2.5 text-[14px] font-medium text-[#fdfcf9] transition-opacity hover:opacity-85"
        >
          Get started
        </a>
      </section>

      {/* ── Divider ── */}
      <div className="h-px w-10 bg-[#d4a574]/30" />

      {/* ── How it works ── */}
      <section className="py-20 sm:py-24">
        <h2 className="font-serif text-[28px] italic tracking-tight">
          How it works
        </h2>
        <div className="mt-6 max-w-[480px] space-y-4 text-[15px] leading-[1.7] text-[#9b9586]">
          <p>
            Arthur is a{" "}
            <a
              href="https://docs.anthropic.com/en/docs/claude-code"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2c2418] underline decoration-[#d4a574]/40 underline-offset-[3px] transition-colors hover:decoration-[#d4a574]"
            >
              Claude Code
            </a>{" "}
            project that runs on your Mac. It gives Claude native access to your
            Apple apps and your browser.
          </p>
          <p>
            No middleware, no external APIs. You talk to it from the Claude
            mobile app or claude.ai&mdash;your Mac becomes an assistant you can
            reach from anywhere.
          </p>
        </div>

        <ul className="mt-12 space-y-3.5">
          {capabilities.map(([name, desc]) => (
            <li key={name} className="flex gap-3 text-[15px]">
              <span className="mt-[9px] h-[5px] w-[5px] shrink-0 rounded-full bg-[#d4a574]" />
              <span>
                <span className="font-medium text-[#2c2418]">{name}</span>
                <span className="text-[#9b9586]"> &mdash; {desc}</span>
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* ── Divider ── */}
      <div className="h-px w-10 bg-[#d4a574]/30" />

      {/* ── Setup ── */}
      <section id="setup" className="py-20 sm:py-24">
        <h2 className="font-serif text-[28px] italic tracking-tight">
          Get started
        </h2>
        <p className="mt-3 text-[15px] text-[#9b9586]">
          Two steps, two minutes.
        </p>

        <div className="mt-10 space-y-8">
          {/* Step 1 */}
          <div>
            <p className="text-[15px] font-medium text-[#2c2418]">
              <span className="mr-2 text-[#d4a574]">1.</span>
              Install Claude Code
            </p>
            <code className="mt-3 block w-fit rounded-md bg-[#f4f1eb] px-4 py-2.5 font-mono text-[13px] text-[#6b6459]">
              npm i -g @anthropic-ai/claude-code
            </code>
          </div>

          {/* Step 2 */}
          <div>
            <p className="text-[15px] font-medium text-[#2c2418]">
              <span className="mr-2 text-[#d4a574]">2.</span>
              Paste this into Claude Code
            </p>
            <div className="mt-3 overflow-hidden rounded-lg border border-[#e8e4dc] bg-[#f4f1eb]">
              <div className="flex items-center justify-between border-b border-[#e8e4dc] px-4 py-2">
                <span className="font-mono text-[11px] text-[#9b9586]">
                  prompt
                </span>
                <CopyButton text={prompt} />
              </div>
              <pre className="overflow-x-auto p-4 font-mono text-[12px] leading-[1.7] text-[#9b9586]">
                {prompt}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="h-px w-10 bg-[#d4a574]/30" />

      {/* ── Examples ── */}
      <section className="py-20 sm:py-24">
        <h2 className="font-serif text-[28px] italic tracking-tight">
          Try saying
        </h2>
        <p className="mt-3 mb-10 text-[15px] text-[#9b9586]">
          No special commands. Just talk.
        </p>

        <div className="flex flex-col items-start gap-2.5">
          {examples.map((ex) => (
            <div
              key={ex}
              className="w-fit rounded-2xl rounded-bl-sm bg-[#f4f1eb] px-4 py-2.5 text-[14px] text-[#2c2418]"
            >
              {ex}
            </div>
          ))}
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-[#e8e4dc] pt-10 pb-6 text-[13px] text-[#9b9586]">
        Open source. Built with{" "}
        <a
          href="https://docs.anthropic.com/en/docs/claude-code"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#2c2418] hover:underline"
        >
          Claude Code
        </a>
        .
      </footer>
    </main>
  );
}
