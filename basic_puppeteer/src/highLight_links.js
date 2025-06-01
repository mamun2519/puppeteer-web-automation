import puppeteer from "puppeteer";

const highLightLinks = async (URL) => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto(URL);

  await page.screenshot({ path: "before_highlight.png" });

  await page.evaluate(() => {
    const links = document.querySelectorAll("a");

    links.forEach((link) => {
      link.style.backgroundColor = "yellow"; // Highlight links with yellow background
      link.style.color = "red"; // Change link text color to red
    });
  });
  await browser.close();
};

// Example usage
highLightLinks("https://google.com")
  .then(() => console.log("Code coverage completed"))
  .catch((error) => console.error("Error during code coverage:", error));
