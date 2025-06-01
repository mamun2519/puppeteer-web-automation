import puppeteer from "puppeteer";

const codeCoverage = async (URL) => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  // Enable code coverage
  await Promise.all([
    page.coverage.startJSCoverage(),
    page.coverage.startCSSCoverage(),
  ]);

  // Navigate to the URL
  await page.goto(URL);

  // Stop code coverage
  const [jsCoverage, cssCoverage] = await Promise.all([
    page.coverage.stopJSCoverage(),
    page.coverage.stopCSSCoverage(),
  ]);
  // log the coverage data
  console.log("JavaScript Coverage:", jsCoverage);
  console.log("CSS Coverage:", cssCoverage);
};
