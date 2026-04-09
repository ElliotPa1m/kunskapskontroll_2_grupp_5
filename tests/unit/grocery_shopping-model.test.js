import { describe, test, expect } from "vitest";
import {
  firstCharsToUpperCase,
  createGroceryWorkerCard,
} from "../../src/grocery_shopping.js";

describe("grocery shopping unit tests", () => {
  test("firstCharsToUpperCase gör första bokstaven stor", () => {
    expect(firstCharsToUpperCase("oscar")).toBe("Oscar");
  });

  test("firstCharsToUpperCase returnerar tom sträng om input saknas", () => {
    expect(firstCharsToUpperCase("")).toBe("");
    expect(firstCharsToUpperCase(null)).toBe("");
  });

  test("createGroceryWorkerCard skapar HTML med worker-data", () => {
    const worker = {
      name: "anna",
      image: "https://example.com/anna.jpg",
      phone_number: "070-123 45 67",
      email: "anna@test.se",
    };

    const html = createGroceryWorkerCard(worker);

    expect(html).toContain("Anna");
    expect(html).toContain("https://example.com/anna.jpg");
    expect(html).toContain("070-123 45 67");
    expect(html).toContain("anna@test.se");
    expect(html).toContain("Boka");
    expect(html).toContain("Kontakta");
  });
});