// Extract Website Source Code using Puppeteer
import puppeteer from "puppeteer";
import fs from "fs";

const getSourceCode = async (url) => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(url);

  // get the page source code
  const sourceCode = await page.content();

  // save the source code to a file
  fs.writeFileSync("source_code.html", sourceCode, "utf8");

  await browser.close();
  console.log("Source code saved to source_code.html");
};

getSourceCode("https://yahoo.com");
