import puppeteer from "puppeteer";

const puppeteerServer = async () => {
  try {
    // launce a headless browser
    const browser = await puppeteer.launch({ headless: false });

    // create a new page
    const page = await browser.newPage();

    // navigate to a url
    await page.goto("https://google.com");
    // take a screenshot
    await page.screenshot({ path: "google.png" });
    // close the browser
    await browser.close();
  } catch (error) {
    console.log(error);
  }
};

await puppeteerServer();
