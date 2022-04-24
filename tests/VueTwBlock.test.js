// ./tests/VueTwBlock.test.js

import { mount } from '@vue/test-utils'
import VueTwBlock from '../src/VueTwBlock.vue'



test('VueTwBlock.vue component mounts successfully', async () => {

    expect(VueTwBlock).toBeTruthy()

})



test('VueTwBlock.vue component text prop accepts a string value', async () => {

    const testString = 'Test String Value'

    const wrapper = mount(VueTwBlock, {
        props: {
            text: testString
        },
    })

    expect(wrapper.text()).toContain(testString)
    
})



test('VueTwBlock.vue component default slot accepts an element node with a child text node', async () => {

    const testStrLiteral = `<div>Test String Value</div>`

    const wrapper = mount(VueTwBlock, {
        slots: {
            default: testStrLiteral
        },
    })

    expect(wrapper.html()).toContain(testStrLiteral)
    
})
