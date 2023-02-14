
import { defineConfig, } from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'
import transformerCompileClass from '@unocss/transformer-compile-class'
import transformerVariantGroup from '@unocss/transformer-variant-group'

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
        // transformerVariantGroup(),
        // transformerCompileClass(),
    ],

})