  
import type { NextApiRequest, NextApiResponse } from 'next'
import chrome from 'chrome-aws-lambda';
import playwright from 'playwright-core';
import { createHash } from 'crypto';
import fs from 'fs';
// path, baseUrl = 'https://richardhaines-og-image.vercel.app/'

const BASE_URL = 'https://richardhaines-og-image.vercel.app'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { body: { path } } = req;

  console.log({ path })

  // if (process.env.NODE_ENV === 'development') {
  //   return 'og image will be generated in production';
  // }

  try {

  const browser = await playwright.chromium.launch({ 
    args: chrome.args,
    executablePath: await chrome.executablePath || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    headless: chrome.headless,
  });

  const url = `${BASE_URL}${path}`;
  const hash = createHash('md5').update(url).digest('hex');
  const ogImageDir = `./public/og-images`;
  const imagePath = `${ogImageDir}/${hash}.png`;
  const publicPath = `${process.env.BASE_URL}/og-images/${hash}.png`;

  // if (fs.existsSync(imagePath)) {
  //   res.send({
  //     status: 200,
  //     publicPath
  //   });
  // }

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

  res.send({
    status: 200,
    publicPath
  });
 } catch(e) {
  res.send({
    status: 500,
    message: `There was an error: ${e.message}`,
  })
 }
}

