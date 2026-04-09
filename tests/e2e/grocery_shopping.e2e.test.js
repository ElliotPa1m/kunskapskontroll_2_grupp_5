import { test, expect } from "@playwright/test";

test("grocery shopping page loads heading and workers", async ({ page }) => {
  await page.goto("/grocery_shopping.html");

  await expect(
    page.getByRole("heading", { name: "Hjälp med handling" })
  ).toBeVisible();

  const workerCards = page.locator(".mover-wrapper");
  await expect(workerCards.first()).toBeVisible();
  await expect(workerCards).not.toHaveCount(0);

  await expect(page.locator(".boka").first()).toBeVisible();
  await expect(page.locator(".kontakta").first()).toBeVisible();
});