import { test, expect } from "@playwright/test";

test("grocery shopping page loads heading and workers", async ({ page }) => {
  await page.route("**/rest/v1/worker_service**", async (route) => {
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify([
        {
          workers: {
            name: "anna",
            image: "https://example.com/anna.jpg",
            phone_number: "070-123 45 67",
            email: "anna@test.se",
          },
        },
      ]),
    });
  });

  await page.goto("/grocery_shopping.html");

  await expect(
    page.getByRole("heading", { name: "Hjälp med handling" })
  ).toBeVisible();

  const firstCard = page.locator(".mover-wrapper").first();
  await expect(firstCard).toBeVisible();

  await expect(firstCard).toContainText("Anna");
  await expect(firstCard.locator(".boka")).toBeVisible();
  await expect(firstCard.locator(".kontakta")).toBeVisible();
});