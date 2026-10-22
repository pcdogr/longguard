import fs from 'fs';
import path from 'path';

const DIST_DIR = path.resolve('dist');
const INDEX_HTML = path.join(DIST_DIR, 'index.html');

const PRODUCT_SLUGS = [
  'power-ua',
  'flex-w',
  'gloves-01',
  'frost-pcm-a',
  'frost-pcm-g',
  'frost-tec-w',
  'frost-tec-d',
  'frost-acc-w',
];

if (fs.existsSync(INDEX_HTML)) {
  const htmlContent = fs.readFileSync(INDEX_HTML, 'utf-8');
  for (const slug of PRODUCT_SLUGS) {
    const routeDir = path.join(DIST_DIR, 'products', slug);
    fs.mkdirSync(routeDir, { recursive: true });
    fs.writeFileSync(path.join(routeDir, 'index.html'), htmlContent, 'utf-8');
  }
  console.log(`Generated static route HTML entrypoints for all ${PRODUCT_SLUGS.length} product pages.`);
}
