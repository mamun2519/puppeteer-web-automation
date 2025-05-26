import puppeteer from "puppeteer";

const run = async () => {
  try {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto("https://yahoo.com");

    // get a page title
    const title = await page.title();

    console.log("Page Title:", title);
    // get the headings on the page
    const headings = await page.$eval("h1", (element) => element.textContent);
    console.log("Heading:", headings);

    await page.screenshot({ path: "yahoo.png" });

    // take the pdf of the page
    await page.pdf({ path: "yahoo.pdf", format: "A4" });

    await browser.close();
  } catch (error) {
    console.log(error);
  }
};

await run();
