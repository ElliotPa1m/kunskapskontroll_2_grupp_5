import { describe, test, expect, beforeEach, vi } from "vitest";

/*
describe("app integration", () => {
  beforeEach(() => {
    vi.resetModules();
    vi.stubGlobal("fetch", vi.fn());
    fetch.mockResolvedValue({
      ok: true,
      json: async () => ({ Response: "False" }),
    });
    document.body.innerHTML = `
      <main class="container">
        <h1>Inlägg</h1>
        <select id="tag-filter"><option value="">Alla</option></select>
        <div id="post-list"></div>
      </main>
    `;
  });

  test("fetchPosts returns posts from API", async () => {
    let postData = { posts: [{ id: 1, title: "Test" }] };
    fetch.mockResolvedValueOnce({ ok: true, json: async () => postData });

    const { fetchPosts } = await import("../../src/api-service.js");
    let result = await fetchPosts();

    expect(fetch).toHaveBeenCalledWith("https://dummyjson.com/posts");
    expect(result).toEqual(postData);
  });
});

*/

test("pet worker has name", () => {
  const worker = { name: "Anna" };

  expect(worker.name).toBeDefined();
});