import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(process.cwd(), "index.html"),
        moving: resolve(process.cwd(), "moving.html"),
        grocery_shopping: resolve(process.cwd(), "grocery_shopping.html"),
        homework_babysitting: resolve(process.cwd(), "homework_babysitting.html"),
        pet_house_sitting: resolve(process.cwd(), "pet_house_sitting.html"),
      },
    },
  },
});