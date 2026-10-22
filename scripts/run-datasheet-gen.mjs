import fs from 'node:fs';
import { execSync } from 'node:child_process';
import ts from 'typescript';

const tsCode = fs.readFileSync('D:/GitHub/longguard/src/data/products.ts', 'utf8');
const jsResult = ts.transpileModule(tsCode, {
  compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 },
});

const tempMjs = 'D:/GitHub/longguard/scripts/_temp_products.mjs';
fs.writeFileSync(tempMjs, jsResult.outputText, 'utf8');

const mod = await import('file:///' + tempMjs);
fs.writeFileSync(
  'D:/GitHub/longguard/scripts/_products_dump.json',
  JSON.stringify(
    {
      PRODUCTS: mod.PRODUCTS,
      BRAND_CREDENTIALS: mod.BRAND_CREDENTIALS,
      HERO_COMPOSITE_ASSET: mod.HERO_COMPOSITE_ASSET,
    },
    null,
    2
  ),
  'utf8'
);
fs.unlinkSync(tempMjs);

console.log('Exported _products_dump.json. Running Python PDF datasheet generator...');
execSync('python D:/GitHub/longguard/scripts/generate-datasheets.py', { stdio: 'inherit' });
fs.unlinkSync('D:/GitHub/longguard/scripts/_products_dump.json');
