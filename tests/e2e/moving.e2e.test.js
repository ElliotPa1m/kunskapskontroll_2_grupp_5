

import { test, expect } from "@playwright/test";

test("movingsidan visar container", async ({page}) => {

 await page.goto("/moving.html");

const container = page.locator("#movers");

await expect(container).toBeVisible();

})