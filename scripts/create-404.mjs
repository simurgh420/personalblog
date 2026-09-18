import { copyFileSync, existsSync, mkdirSync } from 'node:fs';

const source = 'dist/index.html';

if (!existsSync(source)) {
  throw new Error('dist/index.html پیدا نشد.');
}

copyFileSync(source, 'dist/404.html');

mkdirSync('dist/secure-terminal', {
  recursive: true,
});

copyFileSync(source, 'dist/secure-terminal/index.html');

console.log('✅ index.html + 404.html + secure-terminal ساخته شد.');
