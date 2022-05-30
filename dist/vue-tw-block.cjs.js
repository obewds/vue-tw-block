"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});var t=require("vue"),r=require("@obewds/vue-tw-el"),a=require("@obewds/vue-validators");const o=t.defineComponent({name:"VueTwBlock",props:{bgPalette:{type:String,default:"default"},bgColor:{type:String,default:"default"},borderPalette:{type:String,default:"default"},borderColor:{type:String,default:""},tag:{type:String,required:!0,validator:e=>a.blockLevelElementTags.includes(e)},text:{type:String,default:""},textPalette:{type:String,default:"default"},textColor:{type:String,default:"default"}},setup(e){return(l,u)=>(t.openBlock(),t.createBlock(t.unref(r.VueTwEl),{bgPalette:e.bgPalette,bgColor:e.bgColor,borderPalette:e.borderPalette,borderColor:e.borderColor,tag:e.tag,text:e.text,textPalette:e.textPalette,textColor:e.textColor},{default:t.withCtx(()=>[t.renderSlot(l.$slots,"default")]),_:3},8,["bgPalette","bgColor","borderPalette","borderColor","tag","text","textPalette","textColor"]))}});exports.VueTwBlock=o;
