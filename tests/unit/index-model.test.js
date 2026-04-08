import { vi, test, expect } from 'vitest'; 
vi.mock('https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm', () => {
  return {
    createClient: vi.fn(() => ({
      from: vi.fn(() => ({
        select: vi.fn().mockReturnThis(),
        eq: vi.fn().mockReturnThis(),
      })),
    })),
  };
});
import { SERVICE_WORKERS } from "../../src/main.js";

  test("service worker default value", () => {
    expect(SERVICE_WORKERS.MOVING_WORKER_SERVICE_ID).toEqual(1);
  });
