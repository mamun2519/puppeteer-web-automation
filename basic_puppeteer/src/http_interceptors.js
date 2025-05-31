// http intercepters and manipulate request and response
import puppeteer from "puppeteer";

const httpInterceptors = async (URL) => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  // Intercept requests and modify them
  await page.setRequestInterception(true);
  page.on("request", (request) => {
    if (request.url().includes(".png")) {
      // Abort requests for PNG images
      request.abort();
      console.log("Aborted request for:", request.url());
    } else {
      request.headers({ secretKey: "12345" });
      request.continue();
      console.log("Continuing request for:", request.url());
    }
  });
  await page.goto(URL);
  await browser.close();
};

httpInterceptors("https://yahoo.com");
