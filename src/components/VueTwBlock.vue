<!-- ./src/VueTwBlock.vue -->


<script setup lang="ts">

	import VueTwEl from '@obewds/vue-tw-el'

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

</script>

<template>

    <VueTwEl
        :bg-palette="bgPalette"
        :bg-color="bgColor"
        :border-palette="borderPalette"
        :border-color="borderColor"
        :tag="tag"
        :text="text"
        :text-palette="textPalette"
        :text-color="textColor"
    >
        <slot/>
    </VueTwEl>

</template>