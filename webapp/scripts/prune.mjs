// Keep the recommended TeX Live bundle (which includes the basic collection)
// and discard the optional extra/full bundles for the free public beta.
// This reduces deployment size and static bandwidth exposure.
import { readdirSync, unlinkSync, existsSync, statSync } from 'node:fs';
import { join } from 'node:path';

const root = 'public/core/busytex';
if (!existsSync(root)) throw new Error('TeX runtime assets missing: run npm run assets first');
let removed = 0;
for (const filename of readdirSync(root)) {
  if (/^texlive-(extra|full)\./.test(filename)) {
    const path = join(root, filename);
    if (statSync(path).isFile()) {
      removed += statSync(path).size;
      unlinkSync(path);
    }
  }
}
console.log('Removed unused TeX bundles:', (removed / 1024 / 1024).toFixed(1), 'MiB');
