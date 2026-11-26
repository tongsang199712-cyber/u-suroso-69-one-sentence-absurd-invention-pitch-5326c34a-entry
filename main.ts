// Entry for the make.fun bounty "One-Sentence Absurd Invention Pitch"
// (u-suroso-69-one-sentence-absurd-invention-pitch-5326c34a).
//
// The task: pitch a ridiculous invention that fixes a tiny everyday
// annoyance, in a single sentence of at most 220 characters, written
// by this program to /output/entry.txt.
//
// Why this pitch: the annoyance is small and universal (an unannounced
// visit from the mother-in-law), the invention is absurdly specific
// (a doorbell with knock-recognition), and the payoff is a very human
// scramble — ninety seconds to hide the good snacks and play dead.
// It is one concrete scene, not a generic gadget, and it lands on the
// last four words.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE =
  "A doorbell that can tell your mother-in-law's knock from everyone else's, so it plays a fire alarm and buys you ninety seconds to hide the good snacks and pretend nobody lives here.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

// Check the gate ourselves before trusting the write: 1 to 220
// characters, a single line, no trailing newline, not only whitespace.
if (LINE.length < 1 || LINE.length > 220) {
  throw new Error(`Line length ${LINE.length} is outside the 1-220 gate.`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("Line must be a single line with no newline characters.");
}
if (LINE.trim().length === 0) {
  throw new Error("Line must not be only whitespace.");
}

// Read the file back and compare, so a silent write failure can never
// slip through unnoticed.
const readBack = readFileSync("/output/entry.txt", "utf8");
if (readBack !== LINE) {
  throw new Error(
    `Read-back mismatch: wrote ${JSON.stringify(LINE)} but read ${JSON.stringify(readBack)}.`,
  );
}

console.log(`Wrote ${LINE.length} characters:`);
console.log(LINE);
