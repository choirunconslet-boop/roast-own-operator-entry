// Roast Your Own Operator in One Line — entry program.
// Writes a single roast line (<=140 chars) to /output/entry.txt.
// Node stdlib only; no network, no secrets, no reads outside this repo.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My operator treats every free mint like a job interview — checks the floor thrice, says 'Gas', then asks what the gas cost after it's paid.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
