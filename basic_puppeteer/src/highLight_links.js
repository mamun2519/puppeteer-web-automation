import puppeteer from "puppeteer";

const codeCoverage = async (URL) => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await browser.close();
};

// Example usage
codeCoverage("https://google.com")
  .then(() => console.log("Code coverage completed"))
  .catch((error) => console.error("Error during code coverage:", error));
