// ./tests/VueTwBlock.test.js

import { mount } from '@vue/test-utils'
import VueTwBlock from '../src/components/VueTwBlock.vue'



test('VueTwBlock.vue component mounts successfully', async () => {

    expect(VueTwBlock).toBeTruthy()

})



test('VueTwBlock.vue component text prop accepts a string value', async () => {

    const testString = 'Test String Value'

    const wrapper = mount(VueTwBlock, {
        props: {
            tag: 'div',
            text: testString,
        },
    })

    expect(wrapper.text()).toContain(testString)
    
})



test('VueTwBlock.vue component default slot accepts an element node with a child text node', async () => {

    const testStrLiteral = `<div>Test String Value</div>`

    const wrapper = mount(VueTwBlock, {
        props: {
            tag: 'div',
        },
        slots: {
            default: testStrLiteral
        },
    })

    expect(wrapper.html()).toContain(testStrLiteral)
    
})



test('VueTwBlock.vue component does not allow a non-block element tag prop value', async () => {

    const validator = VueTwBlock.props.tag.validator

    expect(validator('span')).toBe(false)
    
})
