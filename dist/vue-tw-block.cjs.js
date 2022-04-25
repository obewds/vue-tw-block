"use strict";var C=Object.defineProperty;var m=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var f=(a,e,t)=>e in a?C(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,l=(a,e)=>{for(var t in e||(e={}))E.call(e,t)&&f(a,t,e[t]);if(m)for(var t of m(e))P.call(e,t)&&f(a,t,e[t]);return a};Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});var r=require("vue"),w={console:{colors:{default:"text-gray-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80",error:"text-rose-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80",primary:"text-blue-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80",secondary:"text-violet-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80",success:"text-green-300 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80",info:"text-cyan-300 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80",caution:"text-amber-300 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80"}}},B={default:{colors:{default:"",error:"text-white bg-rose-500 dark:bg-rose-600",primary:"text-white bg-blue-500 dark:bg-blue-600",secondary:"text-white bg-violet-500 dark:bg-violet-600",success:"text-white bg-green-500 dark:bg-green-600"}}},T={monochromatic:{colors:{default:"text-gray-800 bg-gray-200 dark:bg-gray-800 dark:text-gray-200",error:"text-rose-800 bg-rose-200 dark:bg-rose-800 dark:text-rose-200",primary:"text-blue-800 bg-blue-200 dark:bg-blue-800 dark:text-blue-200",secondary:"text-violet-800 bg-violet-200 dark:bg-violet-800 dark:text-violet-200",success:"text-green-800 bg-green-300 dark:bg-green-800 dark:text-green-300",info:"text-cyan-800 bg-cyan-300 dark:bg-cyan-800 dark:text-cyan-300",caution:"text-amber-800 bg-amber-300 dark:bg-amber-800 dark:text-amber-300"}}},V={pastel:{colors:{default:"text-black bg-gray-100 dark:bg-gray-200",error:"text-black bg-rose-200 dark:bg-rose-300",primary:"text-black bg-blue-200 dark:bg-blue-300",secondary:"text-black bg-violet-200 dark:bg-violet-300",success:"text-black bg-green-300 dark:bg-green-400"}}},j={default:{colors:{"":"",default:"border-gray-200 dark:border-gray-600",error:"border-rose-600 dark:border-rose-300",primary:"border-blue-600 dark:border-blue-300",secondary:"border-violet-600 dark:border-violet-300",success:"border-green-600 dark:border-green-300"}}},S={default:{colors:{default:"",error:"text-rose-500 dark:text-rose-300",primary:"text-blue-500 dark:text-blue-300",secondary:"text-violet-500 dark:text-violet-300",success:"text-green-600 dark:text-green-300"}}};const $=r.createTextVNode("VueEl"),F=r.defineComponent({props:{bgPalette:{default:"default"},bgColor:{default:"default"},borderPalette:{default:"default"},borderColor:{default:"default"},tag:null,text:{default:""},textPalette:{default:"default"},textColor:{default:"default"}},setup(a){const e=a,t=Object.keys(r.inject("tw",{})).length>0?r.inject("tw"):{bg:{palettes:l(l(l(l({},w),B),T),V)},border:{palettes:l({},j)},text:{palettes:l({},S)}};let v=r.computed(()=>{var b,g,d,c,s,n,i,u,k,y,p,x;let o="";return o+=t&&((c=(d=(g=(b=t==null?void 0:t.text)==null?void 0:b.palettes)==null?void 0:g[e.textPalette])==null?void 0:d.colors)==null?void 0:c[e.textColor])?t.text.palettes[e.textPalette].colors[e.textColor]+" ":"",o+=t&&((u=(i=(n=(s=t==null?void 0:t.bg)==null?void 0:s.palettes)==null?void 0:n[e.bgPalette])==null?void 0:i.colors)==null?void 0:u[e.bgColor])?t.bg.palettes[e.bgPalette].colors[e.bgColor]+" ":"",o+=t&&((x=(p=(y=(k=t==null?void 0:t.border)==null?void 0:k.palettes)==null?void 0:y[e.borderPalette])==null?void 0:p.colors)==null?void 0:x[e.borderColor])?t.border.palettes[e.borderPalette].colors[e.borderColor]+" ":"",o});function h(o){const b=["area","base","br","col","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"].includes(e.tag);b&&console.error("The <"+e.tag+"> tag is an Empty Element, so when inside a Vue.js SFC <template> context the <"+e.tag+'> tag needs to be written in pure HTML to avoid the built-in <component is=""> functionality of Vue.js which outputs an invalid closing tag for the <'+e.tag+"> Empty Element tag.");const g=["body","head","html","noscript","script","slot","template"].includes(e.tag);return g&&console.error("The <"+e.tag+"> element tag is not supported for rendering by the VueEl.vue (<vue-el/>) component."),!!(b||g)}return(o,b)=>h(a.tag)?(r.openBlock(),r.createElementBlock(r.Fragment,{key:0},[],64)):(r.openBlock(),r.createBlock(r.resolveDynamicComponent(a.tag),{key:1,class:r.normalizeClass(r.unref(v))},{default:r.withCtx(()=>[a.text?(r.openBlock(),r.createElementBlock(r.Fragment,{key:0},[r.createTextVNode(r.toDisplayString(a.text),1)],64)):r.renderSlot(o.$slots,"default",{key:1},()=>[$])]),_:3},8,["class"]))}});exports.VueTwBlock=F;
