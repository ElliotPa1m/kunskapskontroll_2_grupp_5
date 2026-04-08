import { test, expect } from "@playwright/test";

test("index page loads images", async ({ page }) => {
  await page.goto("/");

  const img = page.locator("#moving-worker-img");

  await expect(img).toBeVisible();
});