var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a2, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a2, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a2, prop, b[prop]);
    }
  return a2;
};
import { defineComponent, inject, openBlock, createElementBlock, Fragment, createBlock, resolveDynamicComponent, withCtx, createTextVNode, toDisplayString, renderSlot, resolveComponent, normalizeClass, unref } from "vue";
var script$1 = defineComponent({
  name: "VueEl",
  props: {
    tag: {
      type: String,
      required: true,
      validator: (prop) => [
        "style",
        "title",
        "address",
        "article",
        "aside",
        "footer",
        "header",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "main",
        "nav",
        "section",
        "blockquote",
        "dd",
        "div",
        "dl",
        "dt",
        "figcaption",
        "figure",
        "li",
        "menu",
        "ol",
        "p",
        "pre",
        "ul",
        "a",
        "abbr",
        "b",
        "bdi",
        "bdo",
        "cite",
        "code",
        "data",
        "dfn",
        "em",
        "i",
        "kbd",
        "mark",
        "q",
        "rp",
        "rt",
        "ruby",
        "s",
        "samp",
        "small",
        "span",
        "strong",
        "sub",
        "sup",
        "time",
        "u",
        "var",
        "audio",
        "map",
        "video",
        "iframe",
        "object",
        "picture",
        "portal",
        "svg",
        "math",
        "canvas",
        "del",
        "ins",
        "caption",
        "colgroup",
        "table",
        "tbody",
        "td",
        "tfoot",
        "th",
        "thead",
        "tr",
        "button",
        "datalist",
        "fieldset",
        "form",
        "label",
        "legend",
        "meter",
        "optgroup",
        "option",
        "output",
        "progress",
        "select",
        "textarea",
        "details",
        "dialog",
        "summary"
      ].includes(prop)
    },
    text: {
      type: String,
      default: ""
    }
  },
  setup(props, context) {
    function emptyElementOrUnsupportedError() {
      const isEmptyElement = ["area", "base", "br", "col", "embed", "hr", "img", "input", "keygen", "link", "meta", "param", "source", "track", "wbr"].includes(props.tag);
      if (isEmptyElement) {
        console.error("The <" + props.tag + "> tag is an Empty Element, so when inside a Vue.js SFC <template> context the <" + props.tag + '> tag needs to be written in pure HTML to avoid the built-in <component is=""> functionality of Vue.js which outputs an invalid closing tag for the <' + props.tag + "> Empty Element tag.");
      }
      const isUnsupportedElement = ["body", "head", "html", "noscript", "script", "slot", "template"].includes(props.tag);
      if (isUnsupportedElement) {
        console.error("The <" + props.tag + "> element tag is not supported for rendering by the VueEl.vue (<vue-el/>) component.");
      }
      return isEmptyElement || isUnsupportedElement ? true : false;
    }
    return {
      emptyElementOrUnsupportedError
    };
  }
});
const _hoisted_1 = /* @__PURE__ */ createTextVNode("VueEl");
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return _ctx.emptyElementOrUnsupportedError() ? (openBlock(), createElementBlock(Fragment, {
    key: 0
  }, [], 64)) : (openBlock(), createBlock(resolveDynamicComponent(_ctx.tag), {
    key: 1
  }, {
    default: withCtx(() => [_ctx.text ? (openBlock(), createElementBlock(Fragment, {
      key: 0
    }, [createTextVNode(toDisplayString(_ctx.text), 1)], 64)) : renderSlot(_ctx.$slots, "default", {
      key: 1
    }, () => [_hoisted_1])]),
    _: 3
  }));
}
script$1.render = render$1;
var entry_esm$1 = /* @__PURE__ */ (() => {
  const installable = script$1;
  installable.install = (app) => {
    app.component("VueEl", installable);
  };
  return installable;
})();
var a = { console: { colors: { default: "text-gray-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80", error: "text-rose-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80", primary: "text-blue-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80", secondary: "text-violet-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80", success: "text-green-300 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80", info: "text-cyan-300 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80", caution: "text-amber-300 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80" } } };
var e$3 = { default: { colors: { default: "", error: "text-white bg-rose-500 dark:bg-rose-600", primary: "text-white bg-blue-500 dark:bg-blue-600", secondary: "text-white bg-violet-500 dark:bg-violet-600", success: "text-white bg-green-500 dark:bg-green-600" } } };
var e$2 = { monochromatic: { colors: { default: "text-gray-800 bg-gray-200 dark:bg-gray-800 dark:text-gray-200", error: "text-rose-800 bg-rose-200 dark:bg-rose-800 dark:text-rose-200", primary: "text-blue-800 bg-blue-200 dark:bg-blue-800 dark:text-blue-200", secondary: "text-violet-800 bg-violet-200 dark:bg-violet-800 dark:text-violet-200", success: "text-green-800 bg-green-300 dark:bg-green-800 dark:text-green-300", info: "text-cyan-800 bg-cyan-300 dark:bg-cyan-800 dark:text-cyan-300", caution: "text-amber-800 bg-amber-300 dark:bg-amber-800 dark:text-amber-300" } } };
var e$1 = { pastel: { colors: { default: "text-black bg-gray-100 dark:bg-gray-200", error: "text-black bg-rose-200 dark:bg-rose-300", primary: "text-black bg-blue-200 dark:bg-blue-300", secondary: "text-black bg-violet-200 dark:bg-violet-300", success: "text-black bg-green-300 dark:bg-green-400" } } };
var r = { default: { colors: { "": "", default: "border-gray-200 dark:border-gray-600", error: "border-rose-600 dark:border-rose-300", primary: "border-blue-600 dark:border-blue-300", secondary: "border-violet-600 dark:border-violet-300", success: "border-green-600 dark:border-green-300" } } };
var e = { default: { colors: { default: "", error: "text-rose-500 dark:text-rose-300", primary: "text-blue-500 dark:text-blue-300", secondary: "text-violet-500 dark:text-violet-300", success: "text-green-600 dark:text-green-300" } } };
var script = defineComponent({
  name: "VueTwEl",
  components: {
    VueEl: entry_esm$1
  },
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
      required: true
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
  setup(props) {
    var _tw$text, _tw$text$palettes, _tw$text$palettes$pro, _tw$text$palettes$pro2, _tw$bg, _tw$bg$palettes, _tw$bg$palettes$props, _tw$bg$palettes$props2, _tw$border, _tw$border$palettes, _tw$border$palettes$p, _tw$border$palettes$p2;
    const tw = Object.keys(inject("tw", {})).length > 0 ? inject("tw") : {
      bg: {
        palettes: __spreadValues(__spreadValues(__spreadValues(__spreadValues({}, a), e$3), e$2), e$1)
      },
      border: {
        palettes: __spreadValues({}, r)
      },
      text: {
        palettes: __spreadValues({}, e)
      }
    };
    let compoClasses = "";
    compoClasses += tw && tw !== null && tw !== void 0 && (_tw$text = tw.text) !== null && _tw$text !== void 0 && (_tw$text$palettes = _tw$text.palettes) !== null && _tw$text$palettes !== void 0 && (_tw$text$palettes$pro = _tw$text$palettes[props.textPalette]) !== null && _tw$text$palettes$pro !== void 0 && (_tw$text$palettes$pro2 = _tw$text$palettes$pro.colors) !== null && _tw$text$palettes$pro2 !== void 0 && _tw$text$palettes$pro2[props.textColor] ? tw.text.palettes[props.textPalette].colors[props.textColor] + " " : "";
    compoClasses += tw && tw !== null && tw !== void 0 && (_tw$bg = tw.bg) !== null && _tw$bg !== void 0 && (_tw$bg$palettes = _tw$bg.palettes) !== null && _tw$bg$palettes !== void 0 && (_tw$bg$palettes$props = _tw$bg$palettes[props.bgPalette]) !== null && _tw$bg$palettes$props !== void 0 && (_tw$bg$palettes$props2 = _tw$bg$palettes$props.colors) !== null && _tw$bg$palettes$props2 !== void 0 && _tw$bg$palettes$props2[props.bgColor] ? tw.bg.palettes[props.bgPalette].colors[props.bgColor] + " " : "";
    compoClasses += tw && tw !== null && tw !== void 0 && (_tw$border = tw.border) !== null && _tw$border !== void 0 && (_tw$border$palettes = _tw$border.palettes) !== null && _tw$border$palettes !== void 0 && (_tw$border$palettes$p = _tw$border$palettes[props.borderPalette]) !== null && _tw$border$palettes$p !== void 0 && (_tw$border$palettes$p2 = _tw$border$palettes$p.colors) !== null && _tw$border$palettes$p2 !== void 0 && _tw$border$palettes$p2[props.borderColor] ? tw.border.palettes[props.borderPalette].colors[props.borderColor] + " " : "";
    return {
      compoClasses
    };
  }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_VueEl = resolveComponent("VueEl");
  return openBlock(), createBlock(_component_VueEl, {
    tag: _ctx.tag,
    text: _ctx.text,
    class: normalizeClass(_ctx.compoClasses)
  }, {
    default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
    _: 3
  }, 8, ["tag", "text", "class"]);
}
script.render = render;
var entry_esm = /* @__PURE__ */ (() => {
  const installable = script;
  installable.install = (app) => {
    app.component("VueTwEl", installable);
  };
  return installable;
})();
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    bgPalette: { default: "default" },
    bgColor: { default: "default" },
    borderPalette: { default: "default" },
    borderColor: { default: "default" },
    tag: null,
    text: { default: "" },
    textPalette: { default: "default" },
    textColor: { default: "default" }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(entry_esm), {
        "bg-palette": __props.bgPalette,
        "bg-color": __props.bgColor,
        "border-palette": __props.borderPalette,
        "border-color": __props.borderColor,
        tag: __props.tag,
        text: __props.text,
        "text-palette": __props.textPalette,
        "text-color": __props.textColor
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 8, ["bg-palette", "bg-color", "border-palette", "border-color", "tag", "text", "text-palette", "text-color"]);
    };
  }
});
export { _sfc_main as VueTwBlock };
