import { copyFileSync, existsSync } from 'node:fs';

const source = 'dist/index.html';
const target = 'dist/404.html';

if (!existsSync(source)) {
  throw new Error('dist/index.html پیدا نشد.');
}

copyFileSync(source, target);

console.log('✅ dist/404.html ساخته شد.');
