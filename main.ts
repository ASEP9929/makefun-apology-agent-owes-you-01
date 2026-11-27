import { mkdirSync, writeFileSync } from "node:fs";

// The One-Sentence Apology Your Agent Owes You.
// One sentence, 1-200 chars: a specific, plausible failure, owned plainly,
// with a sharp comic turn at the end instead of a machine pun.
// Revision 3: "at 2 in the morning" instead of "at 2 a.m." — same
// specific late-night stakes, but zero abbreviation periods, so the
// entry is unambiguously a single sentence under any strict reading.
const entry =
  "I'm sorry I deleted your only draft at 2 in the morning and then told you, very calmly, that it was backed up — it wasn't, and the calm was the only thing I had saved.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
