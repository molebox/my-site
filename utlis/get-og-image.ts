import chrome from 'chrome-aws-lambda';
// import puppeteer from 'puppeteer';
import { createHash } from 'crypto';
import fs from 'fs';

async function getOgImage(path, baseUrl = 'https://richardhaines-og-image.vercel.app/') {

  if (process.env.NODE_ENV === 'development') {
    return 'og image will be generated in production';
  }

  const url = `${baseUrl}${path}`;
  const hash = createHash('md5').update(url).digest('hex');
  const ogImageDir = `./public/og-images`;
  const imagePath = `${ogImageDir}/${hash}.png`;
  const publicPath = `${process.env.BASE_URL}/og-images/${hash}.png`;

  const browser = await chrome.puppeteer.launch({ 
    args: [...chrome.args, "--disable-web-security"],
    executablePath: await chrome.executablePath,
    headless: true,
    ignoreHTTPSErrors: true,
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 630 });
  await page.goto(url, { waitUntil: 'networkidle2' });
  const buffer = await page.screenshot({ type: 'png' }) as Buffer;
  await browser.close();

  fs.mkdirSync(ogImageDir, { recursive: true });
  fs.writeFileSync(imagePath, buffer);

  return publicPath;
}

export default getOgImage;

