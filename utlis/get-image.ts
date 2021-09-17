import chrome from 'chrome-aws-lambda';
import playwright from 'playwright';
import fs from 'fs';

const BASE_URL = 'https://richardhaines-og-image.vercel.app'

export default async function getImage(path: string, slug: string) {
    console.log({ path })
    console.log({ slug })

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
        const ogImageDir = `./public/og-images`;
        const imagePath = `${ogImageDir}/${slug}.png`;
        const publicPath = `${BASE_URL}/og-images/${slug}.png`;

        console.log({ publicPath })

        if (fs.existsSync(imagePath)) {
            return publicPath;
        }

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

        return publicPath;
    } catch (e) {
        return `There was an error: ${e.message}`;
    }
}