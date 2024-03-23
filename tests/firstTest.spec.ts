import { test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:4200");
  await page.getByText("Forms").click();
  await page.getByText("Form Layouts").click();
});

test("Locator syntax rules", async ({ page }) => {
  //by tag name
  await page.locator("input").first().click();
  //by id
   page.locator("#inputEmail1");
  //by class value
  page.locator(".shape-rectangle");
  //by attribute
  page.locator("[placeholder='Email']");
  //by class value  (full)
  page.locator(
    "[class='input-full-width size-medium status-basic shape-rectangle nb-transition']"
  );
  //combine different selectors
  page.locator("input[placeholder='Email']");
  //by xpath(NOT RECOMMENDED)
  page.locator("//*[@id='inputEmail1']");
  //by partal text match
  page.locator(":text('Using')");
  //by exact text match
  page.locator(":text-is('Using the Grid')");
});
