  
import type { NextApiRequest, NextApiResponse } from 'next'
import chrome from 'chrome-aws-lambda';
import playwright from 'playwright';
import { createHash } from 'crypto';
import fs from 'fs';
// path, baseUrl = 'https://richardhaines-og-image.vercel.app/'

const BASE_URL = 'https://richardhaines-og-image.vercel.app'

export default async function getOgImage(res: NextApiResponse, req: NextApiRequest) {
  const { body: { path }} = req
  console.log({ path })

  // if (process.env.NODE_ENV === 'development') {
  //   return 'og image will be generated in production';
  // }

  try {

  const browser = await playwright.chromium.launch({ 
    // args: chrome.args,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
    // executablePath: await chrome.executablePath || "C:\\Users\\richa\\AppData\\Local\\ms-playwright\\chromium-907428\\chrome-win\\chrome.exe",
    // executablePath: await chrome.executablePath || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    headless: chrome.headless,
  });

  const url = `${BASE_URL}${path}`;
  const hash = createHash('md5').update(url).digest('hex');
  const ogImageDir = `./public/og-images`;
  const imagePath = `${ogImageDir}/${hash}.png`;
  const publicPath = `${process.env.BASE_URL}/og-images/${hash}.png`;

  console.log({publicPath})
  
  const page = await browser.newPage({
    viewport: {
      width: 1200,
      height: 630
    }
  });
  await page.goto(url, {
    timeout: 15 * 1000
  })
  const buffer = await page.screenshot({ type: 'png' }) as Buffer;
  await browser.close();

  fs.mkdirSync(ogImageDir, { recursive: true });
  fs.writeFileSync(imagePath, buffer);

 res.send(publicPath);
 } catch(e) {
  res.send(`There was an error: ${e.message}`)
 }
}

