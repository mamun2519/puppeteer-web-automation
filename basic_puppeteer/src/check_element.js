import puppeteer from "puppeteer";

// check element on the web page
const checkElementPresent = async (URL, elements) => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto(URL);

  const presentElement = [];

  for (const element of elements) {
  }
  await browser.close();
};

// Example usage
checkElementPresent("https://google.com")
  .then(() => console.log("Code coverage completed"))
  .catch((error) => console.error("Error during code coverage:", error));
