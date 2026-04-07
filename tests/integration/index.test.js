import { test, expect, vi } from "vitest";
import { loadWorkerImages } from "../../src/main.js";
// vi.mock('https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm', () => {
//   return {
//     createClient: vi.fn(() => ({
//       from: vi.fn(() => ({
//         select: vi.fn().mockReturnThis(),
//         eq: vi.fn().mockReturnThis(),
//       })),
//     })),
//   };
// });
vi.mock('https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm', () => {
  return {
    createClient: vi.fn(() => ({
      from: vi.fn(() => ({
        select: vi.fn().mockReturnThis(),
        eq: vi.fn().mockReturnThis(),
        limit: vi.fn().mockReturnThis(),
        maybeSingle: vi.fn().mockResolvedValue({
          data: {
            workers: {
              image: 'https://example.com/worker.jpg',
              name: 'Erik Andersson'
            }
          }
        })
      })),
    })),
  };
});

test("loadWorkerImages updates DOM with worker images and names", async () => {
  document.body.innerHTML = `
    <img id="moving-worker-img" src="" />
    <span id="moving-worker-name"></span>
    <img id="grocery-shopping-worker-img" src="" />
    <span id="grocery-shopping-worker-name"></span>
    <img id="homework-childcare-worker-img" src="" />
    <span id="homework-childcare-worker-name"></span>
    <img id="pet-house-sitting-worker-img" src="" />
    <span id="pet-house-sitting-worker-name"></span>
  `;
  await loadWorkerImages();

  const movingImg = document.getElementById('moving-worker-img');
  const movingName = document.getElementById('moving-worker-name');
  expect(movingImg.src).toBe('https://example.com/worker.jpg');
  expect(movingName.textContent).toBe('Erik Andersson');
});