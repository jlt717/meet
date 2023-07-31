import puppeteer from "puppeteer";

describe("show/hide event details", () => {
  let browser;
  let page;
  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto("http://localhost:3000/");
    await page.waitForSelector(".event");
  });

  afterAll(async () => {
    await browser.close();
  });

  test("An event element is collapsed by default", async () => {
    const eventDetails = await page.$(".event .description");
    expect(eventDetails).toBeNull();
  });

  test("User can expand an event to see details", async () => {
    await page.click(".event .details-btn");
    const eventDetails = await page.$(".event .description");
    expect(eventDetails).toBeDefined();
  });
  test("User can collapse an event to hide details", async () => {
    await page.click(".event .details-btn");
    await page.waitForTimeout(500);
    const eventDetails = await page.$(".event .description");
    expect(eventDetails).toBeNull();
  });
});
// describe("show/hide event details", () => {
//   test("An event element is collapsed by default", async () => {
//     const browser = await puppeteer.launch();

//     const page = await browser.newPage();
//     await page.goto("http://localhost:3000/");

// if your event element has a different selector, use it instead of .event
//await page.waitForSelector(".event");

// if your event's details have a different selector, use it instead of .event .details
//   const eventDetails = await page.$(".event .description");
//   expect(eventDetails).toBeNull();
//   browser.close();
// });
// test("User can expand an event to see its details", async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.goto("http://localhost:3000/");

//   await page.waitForSelector(".event");
//console.log(await page.content());
//await page.click(".event .details-btn");
//console.log(await page.content());
//     const eventDetails = await page.$(".event .description");
//     expect(eventDetails).toBeDefined();
//     browser.close();
//   });
//   test("User can collapse an event to hide details", async () => {
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
//     await page.click(".event .details-btn");
//     const eventDetails = await page.$(".event .description");
//     expect(eventDetails).toBeNull();
//     browser.close();
//   });
// });
