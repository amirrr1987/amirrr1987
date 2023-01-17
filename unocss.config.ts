
import { defineConfig, } from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'

export default defineConfig({
    shortcuts: [
    ],
    rules: [
    ],
    theme: {
        colors: {
            'primary': '#42b883',
            'secondary': '#35495e',
        },

    },

    transformers: [
        transformerDirectives(),
    ],

})