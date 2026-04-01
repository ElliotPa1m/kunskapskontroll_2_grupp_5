import { test, expect } from "@playwright/test";

test("full flow: load posts and tags on start", async ({ page }) => {
  await page.goto("/");

  await expect(page.locator(".post-card").first()).toBeVisible();
  await expect(page.locator(".post-card")).not.toHaveCount(0);

  let options = page.locator("#tag-filter option");
  await expect(options.first()).toHaveText("Alla");
  expect(await options.count()).toBeGreaterThan(1);
});