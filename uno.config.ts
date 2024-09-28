// uno.config.ts
import { defineConfig } from "unocss";
import transformerDirectives from "@unocss/transformer-directives";

export default defineConfig({
  shortcuts: {},
  transformers: [transformerDirectives()],
  theme: {
    fontFamily: {
      body: ['"Poppins"'],
    },
  },
});
