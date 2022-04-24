<script setup lang="ts">

    type VueTwBlockProps = {
        text?: string | undefined
    }

    const props = withDefaults(
        defineProps<VueTwBlockProps>(), {
            text: ''
        }
    )

</script>


<template>

    <div>
        <template v-if="text">
            {{ text }}
        </template>
        <template v-else>
            <slot>VueTwBlock</slot>
        </template>
    </div>

</template>
