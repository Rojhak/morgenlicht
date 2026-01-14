const puppeteer = require('puppeteer');

const pages = [
  { path: '/', name: 'home' },
  { path: '/leistungen', name: 'leistungen' },
  { path: '/kontakt', name: 'kontakt' },
  { path: '/ueber-uns', name: 'ueber-uns' },
  { path: '/blog', name: 'blog' },
];

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });

  // Desktop screenshots
  console.log('📸 Taking desktop screenshots...\n');
  const desktop = await browser.newPage();
  await desktop.setViewport({ width: 1440, height: 900 });

  for (const { path, name } of pages) {
    await desktop.goto(`http://localhost:3000${path}`, { waitUntil: 'networkidle0' });
    await desktop.screenshot({ path: `/tmp/final_${name}_desktop.png`, fullPage: true });
    console.log(`✅ ${name} (desktop)`);
  }

  // Mobile screenshots
  console.log('\n📱 Taking mobile screenshots...\n');
  const mobile = await browser.newPage();
  await mobile.setViewport({ width: 390, height: 844, isMobile: true });

  for (const { path, name } of pages) {
    await mobile.goto(`http://localhost:3000${path}`, { waitUntil: 'networkidle0' });
    await mobile.screenshot({ path: `/tmp/final_${name}_mobile.png`, fullPage: true });
    console.log(`✅ ${name} (mobile)`);
  }

  await browser.close();
  console.log('\n🎉 All screenshots saved to /tmp/final_*.png');
})();
