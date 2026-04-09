

import { test, expect } from "@playwright/test";

test("movingsidan visar container", async ({page}) => {

 await page.goto("/moving.html"); // Vid test lokalt använde jag ("http://localhost:5173/moving.html")

const container = page.locator("#movers");

await expect(container).toBeVisible();

})