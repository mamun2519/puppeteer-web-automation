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

  // extract the page links
  const links = await page.$$eval("a", (anchors) =>
    anchors.map((anchor) => ({
      href: anchor.href,
      text: anchor.textContent.trim(),
    }))
  );

  const imageCount = image.length;
  const linkCount = links.length;

  // output the results
  const outPut = JSON.stringify(
    {
      imageCount,
      linkCount,
      images: image,
      links: links,
    },
    null,
    2
  );
  console.log(outPut);
  await browser.close();
};

await run();
