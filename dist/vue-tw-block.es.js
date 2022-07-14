import { defineComponent as l, openBlock as r, createBlock as o, unref as a, withCtx as d, renderSlot as u } from "vue";
import { VueTwEl as g } from "@obewds/vue-tw-el";
import { blockLevelElementTags as n } from "@obewds/vue-validators";
const C = /* @__PURE__ */ l({
  __name: "VueTwBlock",
  props: {
    bgPalette: {
      type: String,
      default: "default"
    },
    bgColor: {
      type: String,
      default: "default"
    },
    borderPalette: {
      type: String,
      default: "default"
    },
    borderColor: {
      type: String,
      default: ""
    },
    tag: {
      type: String,
      required: !0,
      validator: (t) => n.includes(t)
    },
    text: {
      type: String,
      default: ""
    },
    textPalette: {
      type: String,
      default: "default"
    },
    textColor: {
      type: String,
      default: "default"
    }
  },
  setup(t) {
    return (e, f) => (r(), o(a(g), {
      bgPalette: t.bgPalette,
      bgColor: t.bgColor,
      borderPalette: t.borderPalette,
      borderColor: t.borderColor,
      tag: t.tag,
      text: t.text,
      textPalette: t.textPalette,
      textColor: t.textColor
    }, {
      default: d(() => [
        u(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["bgPalette", "bgColor", "borderPalette", "borderColor", "tag", "text", "textPalette", "textColor"]));
  }
});
export {
  C as VueTwBlock
};
