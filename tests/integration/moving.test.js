import { describe, test, expect } from "vitest";
import { createMoverCard } from "../../src/moving-view.js";

describe("Rendera movers", () => {

  test("Testa att rendera flera movers", () => {

    const data = [

      { workers: { name: "Karl Svensson",
                   email: "karl.svensson@foretag.se",
                   image: "pic.img",
                   phone_number: "+46 70-123 45 09"
       } },
      { workers: { name: "Susanne Söderberg",
                   email: "susanne.soderberg@foretag.se",
                   image: "pic.img",
                   phone_number: "+46 70-123 45 30"
       } }
    ];

    const html = data.map(item => createMoverCard(item.workers)).join("");
    
    expect(html).toContain("Karl Svensson");
    expect(html).toContain("susanne.soderberg@foretag.se");
    expect(html).toContain("+46 70-123 45 30");
  });
});