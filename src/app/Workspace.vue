<!--
    ./src/app/Workspace.vue
-->


<script setup lang="ts">

    import VueTwBlock from '@/components/VueTwBlock.vue'

</script>


<template>

    <div class="text-green-500 text-xs pb-1">WORKSPACE</div>
    
    <div class="bg-white text-center border-t-2 border-b-2 border-green-500 border-dashed py-24">

        <div class="flex flex-col space-y-2">


            <VueTwBlock tag="div" text="VueTwBlock's with a default text palette"/>

            <VueTwBlock tag="div" text="(div) default" text-color="default"/>

            <VueTwBlock tag="div" text="(div) primary" text-color="primary"/>

            <VueTwBlock tag="div" text="(div) secondary" text-color="secondary"/>

            <VueTwBlock tag="div" text="(div) error" text-color="error"/>

            <VueTwBlock tag="div" text="(div) success" text-color="success"/>


            <VueTwBlock tag="div" text="VueTwBlock's with a default border palette"/>

            <VueTwBlock tag="div" text="(div) default" border-color="default" class="border"/>

            <VueTwBlock tag="div" text="(div) primary" border-color="primary" class="border"/>

            <VueTwBlock tag="div" text="(div) secondary" border-color="secondary" class="border"/>

            <VueTwBlock tag="div" text="(div) error" border-color="error" class="border"/>

            <VueTwBlock tag="div" text="(div) success" border-color="success" class="border"/>


            <VueTwBlock tag="div" text="VueTwBlock's with a default palette"/>

            <VueTwBlock tag="div" text="(div) default" bg-color="default"/>

            <VueTwBlock tag="div" text="(div) primary" bg-color="primary"/>

            <VueTwBlock tag="div" text="(div) primary" bg-color="secondary"/>

            <VueTwBlock tag="div" text="(div) primary" bg-color="error"/>

            <VueTwBlock tag="div" text="(div) primary" bg-color="success"/>


            <VueTwBlock tag="div" text="VueTwBlock's with a console palette"/>

            <VueTwBlock tag="div" text="(div) default" bg-palette="console" bg-color="default"/>

            <VueTwBlock tag="div" text="(div) primary" bg-palette="console" bg-color="primary"/>

            <VueTwBlock tag="div" text="(div) secondary" bg-palette="console" bg-color="secondary"/>

            <VueTwBlock tag="div" text="(div) error" bg-palette="console" bg-color="error"/>

            <VueTwBlock tag="div" text="(div) success" bg-palette="console" bg-color="success"/>
            

            <VueTwBlock tag="div" text="VueTwBlock's with a monochromatic palette"/>

            <VueTwBlock tag="div" text="(div) default" bg-palette="monochromatic" bg-color="default"/>

            <VueTwBlock tag="div" text="(div) primary" bg-palette="monochromatic" bg-color="primary"/>

            <VueTwBlock tag="div" text="(div) secondary" bg-palette="monochromatic" bg-color="secondary"/>

            <VueTwBlock tag="div" text="(div) error" bg-palette="monochromatic" bg-color="error"/>

            <VueTwBlock tag="div" text="(div) success" bg-palette="monochromatic" bg-color="success"/>
            

            <VueTwBlock tag="div" text="VueTwBlock's with a pastel palette"/>

            <VueTwBlock tag="div" text="(div) default" bg-palette="pastel" bg-color="default"/>

            <VueTwBlock tag="div" text="(div) primary" bg-palette="pastel" bg-color="primary"/>

            <VueTwBlock tag="div" text="(div) secondary" bg-palette="pastel" bg-color="secondary"/>

            <VueTwBlock tag="div" text="(div) error" bg-palette="pastel" bg-color="error"/>

            <VueTwBlock tag="div" text="(div) success" bg-palette="pastel" bg-color="success"/>

        </div>

    </div>

</template>
