import { describe, test, expect, vi, beforeEach, afterEach } from "vitest";
import {
  fetchGroceryWorkers,
  renderGroceryWorkers,
  initGroceryShoppingPage,
} from "../../src/grocery_shopping.js";

describe("grocery shopping integration tests", () => {
  beforeEach(() => {
    document.body.innerHTML = `<div id="grocery-shoppers"></div>`;
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  test("fetchGroceryWorkers hämtar data från API", async () => {
    const mockData = [
      {
        workers: {
          name: "anna",
          image: "https://example.com/anna.jpg",
          phone_number: "070-123 45 67",
          email: "anna@test.se",
        },
      },
    ];

    vi.stubGlobal(
      "fetch",
      vi.fn(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockData),
        })
      )
    );

    const result = await fetchGroceryWorkers();

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(result).toEqual(mockData);
  });

  test("renderGroceryWorkers renderar workers i DOM", () => {
    const container = document.getElementById("grocery-shoppers");

    const mockData = [
      {
        workers: {
          name: "anna",
          image: "https://example.com/anna.jpg",
          phone_number: "070-123 45 67",
          email: "anna@test.se",
        },
      },
      {
        workers: {
          name: "erik",
          image: "https://example.com/erik.jpg",
          phone_number: "070-999 99 99",
          email: "erik@test.se",
        },
      },
    ];

    renderGroceryWorkers(container, mockData);

    expect(container.innerHTML).toContain("Anna");
    expect(container.innerHTML).toContain("Erik");
    expect(container.innerHTML).toContain("anna@test.se");
    expect(container.innerHTML).toContain("erik@test.se");
  });

  test("initGroceryShoppingPage hämtar och renderar workers", async () => {
    const mockData = [
      {
        workers: {
          name: "anna",
          image: "https://example.com/anna.jpg",
          phone_number: "070-123 45 67",
          email: "anna@test.se",
        },
      },
    ];

    vi.stubGlobal(
      "fetch",
      vi.fn(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockData),
        })
      )
    );

    await initGroceryShoppingPage();

    const container = document.getElementById("grocery-shoppers");
    expect(container.innerHTML).toContain("Anna");
    expect(container.innerHTML).toContain("Boka");
    expect(container.innerHTML).toContain("Kontakta");
  });
});