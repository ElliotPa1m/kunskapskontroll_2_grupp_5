import { test, expect } from "@playwright/test";

test('load workers', async ({ page }) => {

  await page.goto('/homework_babysitting.html');

  // Wait for the container to be visible
  await expect(page.locator('.container')).toBeVisible();

  // Verify at least one worker is rendered
  await expect(page.locator('.container li').first()).toBeVisible();
});

