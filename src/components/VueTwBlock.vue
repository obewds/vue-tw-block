<!-- ./src/VueTwBlock.vue -->


<script setup lang="ts">

	import { computed, inject } from 'vue'
	import { twBgPaletteConsole } from '@obewds/tw-bg-palette-console'
	import { twBgPaletteDefault } from '@obewds/tw-bg-palette-default'
	import { twBgPaletteMonochromatic } from '@obewds/tw-bg-palette-monochromatic'
	import { twBgPalettePastel } from '@obewds/tw-bg-palette-pastel'
	import { twBorderPaletteDefault } from '@obewds/tw-border-palette-default'
	import { twTextPaletteDefault } from '@obewds/tw-text-palette-default'

    type Blocks = 'address' | 'article' | 'aside' | 'blockquote' | 'details' | 'dialog' | 'dd' | 'div' | 'dl' | 'dt' | 'fieldset' | 'figcaption' | 'figure' | 'footer' | 'form' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'header' | 'hgroup' | /*'hr',*/ 'li' | 'main' | 'nav' | 'ol' | 'p' | 'pre' | 'section' | 'table' | 'ul';

    type VueTwBlockProps = {
        bgPalette?: string,
        bgColor?: string,
        borderPalette?: string,
        borderColor?: string,
        tag: Blocks,
        text?: string | undefined,
        textPalette?: string,
        textColor?: string,
    }

    const props = withDefaults(
        defineProps<VueTwBlockProps>(), {
            bgPalette: 'default',
            bgColor: 'default',
            borderPalette: 'default',
            borderColor: 'default',
            text: '',
            textPalette: 'default',
            textColor: 'default',
        }
    )

    interface TwObject {
        bg: {
            palettes: {
                [key: string]: {
                    colors: {
                        [key: string]: string
                    }
                }
            }
        },
        border: {
            palettes: {
                [key: string]: {
                    colors: {
                        [key: string]: string
                    }
                }
            }
        },
        text: {
            palettes: {
                [key: string]: {
                    colors: {
                        [key: string]: string
                    }
                }
            }
        },
    }

    const tw = Object.keys(inject('tw', {})).length > 0 ? inject<TwObject>('tw') : {
        bg: {
            palettes: {
                ...twBgPaletteConsole,
                ...twBgPaletteDefault,
                ...twBgPaletteMonochromatic,
                ...twBgPalettePastel,
            },
        },
        border: {
            palettes: {
                ...twBorderPaletteDefault,
            },
        },
        text: {
            palettes: {
                ...twTextPaletteDefault,
            },
        },
    }

    let compoClasses = computed<string>(() => {

        let output = ''

        output += tw && tw?.text?.palettes?.[props.textPalette]?.colors?.[props.textColor] ? 
                    tw.text.palettes[props.textPalette].colors[props.textColor] + ' ' : ''

        output += tw && tw?.bg?.palettes?.[props.bgPalette]?.colors?.[props.bgColor] ? 
                    tw.bg.palettes[props.bgPalette].colors[props.bgColor] + ' ' : ''

        output += tw && tw?.border?.palettes?.[props.borderPalette]?.colors?.[props.borderColor] ? 
                    tw.border.palettes[props.borderPalette].colors[props.borderColor] + ' ' : ''

        return output
        
    })

    function emptyElementOrUnsupportedError(tag: string): boolean {

        const isEmptyElement = (['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'keygen', 'link', 'meta', 'param', 'source', 'track', 'wbr']).includes(props.tag)

        if (isEmptyElement) {
            console.error('The <' + props.tag + '> tag is an Empty Element, so when inside a Vue.js SFC <template> context the <' + props.tag + '> tag needs to be written in pure HTML to avoid the built-in <component is=""> functionality of Vue.js which outputs an invalid closing tag for the <' + props.tag + '> Empty Element tag.')
        }

        const isUnsupportedElement = (['body', 'head', 'html', 'noscript', 'script', 'slot', 'template']).includes(props.tag)

        if (isUnsupportedElement) {
            console.error('The <' + props.tag + '> element tag is not supported for rendering by the VueEl.vue (<vue-el/>) component.')
        }

        return (isEmptyElement || isUnsupportedElement) ? true : false

    }

</script>

<template>

    <template v-if="emptyElementOrUnsupportedError(tag)"></template>

	<template v-else>

		<component :is="tag" :class="compoClasses">
			<template v-if="text">
				{{ text }}
			</template>
			<template v-else>
				<slot>VueEl</slot>
			</template>
		</component>

	</template>

</template>