import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one dad joke, told out loud at the barbecue.
// The pun turns on "steaks" / "stakes" and lands in the last word.
const JOKE = [
  "I brought a ladder to the barbecue",
  "because I heard the steaks were high.",
].join(" ");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

const target = join(outDir, "entry.txt");
writeFileSync(target, JOKE, "utf8");

// Byte-level verification: read the file back as raw bytes and refuse to
// finish unless every byte matches the joke exactly.
const roundTrip = readFileSync(target);
if (!Buffer.from(JOKE, "utf8").equals(roundTrip)) {
  throw new Error(
    "entry.txt verification failed: written bytes do not match the joke",
  );
}

console.log(`wrote ${target} (${JOKE.length} characters)`);
