import { mkdir, copyFile, cp } from 'node:fs/promises';
await mkdir('dist/assets', { recursive: true });
for (const file of ['index.html', 'styles.css', 'script.js', 'robots.txt', 'sitemap.xml']) await copyFile(file, `dist/${file}`);
await cp('assets', 'dist/assets', { recursive: true, filter: source => !source.endsWith('afreen-original.png') });
console.log('Production website built in dist/.');
