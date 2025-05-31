// http intercepters and manipulate request and response
import puppeteer from "puppeteer";

const httpInterceptors = async (URL) => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  // Intercept requests and modify them
  await page.setRequestInterception(true);
  await page.goto(URL);
};
