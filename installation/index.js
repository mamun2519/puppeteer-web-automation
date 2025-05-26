const puppeteer = require("puppeteer");

const puppeteerServer = async () => {
  // launce a headless browser
  const browser = await puppeteer.launch({ headless: true });

  // create a new page
  const page = await browser.newPage();

  // navigate to a url
  await page.goto("https://google.com");
  // take a screenshot
  await page.screenshot({ path: "google.png" });
  // close the browser
  await browser.close();
};

await puppeteerServer();
