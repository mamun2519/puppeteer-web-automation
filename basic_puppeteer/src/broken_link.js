import puppeteer from "puppeteer";

const highLightLinks = async (URL) => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto(URL);

  //   const links = await page.$$eval("a", (element)=> element.map(link) => link.href));
  const links = await page.$$eval("a", (elements) =>
    elements.map((link) => link.href)
  );
  console.log("Links found on the page:", links);

  await browser.close();
};

// Example usage
highLightLinks("https://google.com")
  .then(() => console.log("Code coverage completed"))
  .catch((error) => console.error("Error during code coverage:", error));
