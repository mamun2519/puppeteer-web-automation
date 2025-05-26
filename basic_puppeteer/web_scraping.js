import puppeteer from "puppeteer";

const run = async () => {
  try {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto("https://youtube.com");

    // get a page title
    const title = await page.title();

    console.log("Page Title:", title);
    // get the headings on the page
  } catch (error) {
    console.log(error);
  }
};

await run();
