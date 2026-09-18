import { copyFileSync, existsSync, mkdirSync } from 'node:fs';

const source = 'dist/index.html';

if (!existsSync(source)) {
  throw new Error('dist/index.html پیدا نشد.');
}

// کپی برای 404
copyFileSync(source, 'dist/404.html');

// مسیر secure-terminal
mkdirSync('dist/secure-terminal', {
  recursive: true,
});
copyFileSync(source, 'dist/secure-terminal/index.html');

// 👈 اضافه کردن ساخت پوشه و کپی فایل برای room
mkdirSync('dist/room', {
  recursive: true,
});
copyFileSync(source, 'dist/room/index.html');

console.log('✅ index.html + 404.html + secure-terminal + room ساخته شد.');
