import * as fs from 'node:fs';

const files = fs.readdirSync('images')
fs.writeFileSync("types/images.ts", `export type images = ${files.map(f => `'${f}'`).join(" | ")}`);
