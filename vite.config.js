import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        moving: resolve(__dirname, "moving.html"),
        grocery_shopping: resolve(__dirname, "grocery_shopping.html"),
        homework_babysitting: resolve(__dirname, "homework_babysitting.html"),
        pet_house_sitting: resolve(__dirname, "pet_house_sitting.html"),
      },
    },
  },
});