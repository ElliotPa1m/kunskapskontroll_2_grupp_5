

import { createMoverCard } from "../../src/moving-view.js";
import { describe, test, expect } from "vitest";


describe("createMoverCard", () => {
  

  test("Namn, email och telefonnummer ska finnas i html", () => {
   const mover = {
    name: "Karl Svensson",
    email: "karl.svensson@foretag.se",
    image: "img.jpg",
    phone_number: "+46 70-123 45 09",
   }
 
    const html = createMoverCard(mover);

    expect(html).toContain("Karl Svensson");
    expect(html).toContain("karl.svensson@foretag.se");
    expect(html).toContain("+46 70-123 45 09");

   });
   });