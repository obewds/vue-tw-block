var VueTwBlock=function(t,e){"use strict";const l=e.createTextVNode("VueTwBlock"),n=e.defineComponent({props:{text:{default:""}},setup(o){return(c,r)=>(e.openBlock(),e.createElementBlock("div",null,[o.text?(e.openBlock(),e.createElementBlock(e.Fragment,{key:0},[e.createTextVNode(e.toDisplayString(o.text),1)],64)):e.renderSlot(c.$slots,"default",{key:1},()=>[l])]))}});return t.VueTwBlock=n,Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}}),t}({},Vue);
