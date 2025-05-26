import puppeteer from "puppeteer";

const run = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  // navigate to the page
  await page.goto("https://google.com");

  // extract the page image
  const image = await page.$$eval("img", (images) =>
    images.map((img) => {
      src: img.src;
      alt: img.alt;
    })
  );
};

await run();
