import puppeteer from "puppeteer";
const device = puppeteer.KnownDevices["iPhone 13 Pro Max"];
const emulateDevice = async (URL) => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  // Emulate the device
  await page.emulate(device);

  // Navigate to the URL
  await page.goto(URL);

  // Take a screenshot
  await page.screenshot({ path: "emulated_device_screenshot.png" });

  // Close the browser
  await browser.close();
};

emulateDevice("https://google.com");
