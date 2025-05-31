// Extract Website Source Code using Puppeteer
import puppeteer from "puppeteer";
import fs from "fs";

const getSourceCode = async (url) => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(url);

  // get the page source code
};
