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

  // broken links
  const brokenLinks = [];
  for (const link of links) {
    try {
      const response = await page.goto(link, { waitUntil: "networkidle2" });
      if (!response || !response.ok()) {
        brokenLinks.push(link);
      }
    } catch (error) {
      console.error(`Error accessing ${link}:`, error);
      brokenLinks.push(link);
    }
  }
  await browser.close();
};

// Example usage
highLightLinks("https://google.com")
  .then(() => console.log("Code coverage completed"))
  .catch((error) => console.error("Error during code coverage:", error));
