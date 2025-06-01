import puppeteer from "puppeteer";

const highLightLinks = async (URL) => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto(URL);

  await browser.close();
};

// Example usage
highLightLinks("https://google.com")
  .then(() => console.log("Code coverage completed"))
  .catch((error) => console.error("Error during code coverage:", error));
