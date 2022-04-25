declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    bgPalette?: string | undefined;
    bgColor?: string | undefined;
    borderPalette?: string | undefined;
    borderColor?: string | undefined;
    tag: "address" | "article" | "aside" | "blockquote" | "details" | "dialog" | "dd" | "div" | "dl" | "dt" | "fieldset" | "figcaption" | "figure" | "footer" | "form" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "header" | "hgroup" | "li" | "main" | "nav" | "ol" | "p" | "pre" | "section" | "table" | "ul";
    text?: string | undefined;
    textPalette?: string | undefined;
    textColor?: string | undefined;
}>, {
    bgPalette: string;
    bgColor: string;
    borderPalette: string;
    borderColor: string;
    text: string;
    textPalette: string;
    textColor: string;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    bgPalette?: string | undefined;
    bgColor?: string | undefined;
    borderPalette?: string | undefined;
    borderColor?: string | undefined;
    tag: "address" | "article" | "aside" | "blockquote" | "details" | "dialog" | "dd" | "div" | "dl" | "dt" | "fieldset" | "figcaption" | "figure" | "footer" | "form" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "header" | "hgroup" | "li" | "main" | "nav" | "ol" | "p" | "pre" | "section" | "table" | "ul";
    text?: string | undefined;
    textPalette?: string | undefined;
    textColor?: string | undefined;
}>, {
    bgPalette: string;
    bgColor: string;
    borderPalette: string;
    borderColor: string;
    text: string;
    textPalette: string;
    textColor: string;
}>>>, {
    bgPalette: string;
    bgColor: string;
    borderPalette: string;
    borderColor: string;
    text: string;
    textPalette: string;
    textColor: string;
}>;
export default _default;
declare type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
declare type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
declare type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? P[K] & {
        default: D[K];
    } : P[K];
};
