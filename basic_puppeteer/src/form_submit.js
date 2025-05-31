// form data submission using puppeteer
import puppeteer from "puppeteer";

const enterFormData = async (URL, searchQuery) => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(URL);

  await page.focus("input[name='q']"); // Focus on the search input field
  await page.keyboard.type(searchQuery); // Type the search query
  await page.keyboard.press("Enter"); // Press Enter to submit the form
  await page.waitForNavigation({ waitUntil: "networkidle2" }); // Wait for the navigation to complete

  await page.screenshot({ page: "search_result.png" }); // Take a screenshot of the search results page
  await browser.close();
};

enterFormData("https://google.com", "Puppeteer form submission example");
