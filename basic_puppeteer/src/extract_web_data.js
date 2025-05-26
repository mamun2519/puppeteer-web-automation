import puppeteer from "puppeteer";

const run = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
};

await run();
