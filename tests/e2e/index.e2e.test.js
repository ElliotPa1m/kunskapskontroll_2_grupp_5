import { test, expect } from "@playwright/test";

test("index page loads images", async ({ page }) => {
  await page.goto("http://127.0.0.1:5500/index.html");

  const img = page.locator("#moving-worker-img");

  await expect(img).toBeVisible();
});