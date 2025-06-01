import puppeteer from "puppeteer";

const codeCoverage = async (URL) => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  // Enable code coverage
  await Promise.all([
    page.coverage.startJSCoverage(),
    page.coverage.startCSSCoverage(),
  ]);
};
