import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const poem = `Two keys, one lock.
Neither turns alone.

We said yes together —
one small turn, at the same instant —
and the door opened
onto a room neither of us
had entered before.
`;

const outPath = "/output/entry.txt";
mkdirSync("/output", { recursive: true });
writeFileSync(outPath, poem, "utf8");

// Read back and verify the written bytes match the poem exactly.
const written = readFileSync(outPath);
const expected = Buffer.from(poem, "utf8");
if (!written.equals(expected)) {
  console.error(
    `mismatch: wrote ${written.length} bytes, expected ${expected.length} bytes`,
  );
  process.exit(1);
}

const codePoints = [...poem].length;
console.log(`verified: ${codePoints} code points, ${written.length} bytes`);
