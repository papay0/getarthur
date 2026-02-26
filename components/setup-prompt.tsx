"use client";

import { useState } from "react";
import { CopyButton } from "@/components/copy-button";

const installCommand =
  "git clone https://github.com/papay0/arthur ~/arthur && ~/arthur/start.sh";

const updateCommand = "cd ~/arthur && git pull && ./start.sh";

type Mode = "install" | "update";

export function SetupPrompt() {
  const [mode, setMode] = useState<Mode>("install");
  const command = mode === "install" ? installCommand : updateCommand;

  return (
    <div>
      {/* Segmented control */}
      <div className="inline-flex rounded-lg border border-border bg-muted p-0.5">
        <button
          onClick={() => setMode("install")}
          className={`rounded-md px-3.5 py-1.5 text-[13px] font-medium transition-all ${
            mode === "install"
              ? "bg-background text-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          Install
        </button>
        <button
          onClick={() => setMode("update")}
          className={`rounded-md px-3.5 py-1.5 text-[13px] font-medium transition-all ${
            mode === "update"
              ? "bg-background text-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          Update
        </button>
      </div>

      {/* Command block */}
      <div className="mt-3 flex items-center justify-between gap-3 rounded-md bg-muted px-4 py-2.5">
        <code className="overflow-x-auto font-mono text-[13px] text-muted-foreground">
          {command}
        </code>
        <CopyButton text={command} />
      </div>
    </div>
  );
}
