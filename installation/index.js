const puppeteer = require("puppeteer");

const puppeteerServer = async () => {
  // launce a headless browser
  const browser = await puppeteer.launch({ headless: true });

  // create a new page
  const page = await browser.newPage();
};

await puppeteerServer();
