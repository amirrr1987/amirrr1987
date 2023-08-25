// uno.config.ts
import { defineConfig } from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'

export default defineConfig({
  shortcuts: {
    'container-row': 'container mx-auto p-4',
  },
  transformers: [
    transformerDirectives(),
  ],
  theme: {
    fontFamily: {
      'body': ['"Poppins"'],
    }
  }
})