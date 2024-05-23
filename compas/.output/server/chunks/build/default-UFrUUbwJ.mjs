import { _ as __nuxt_component_0$2 } from './nuxt-link-P6SDANQl.mjs';
import { useSSRContext, mergeProps, withCtx, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderClass } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main$4 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "logo" }, _attrs))} data-v-02d09641><svg width="119" height="26" viewBox="0 0 119 26" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-02d09641><g clip-path="url(#clip0_1_18)" data-v-02d09641><path d="M112.625 22.305C114.187 22.305 115.525 21.914 116.64 21.133C117.921 20.237 118.578 18.914 118.609 17.164C118.651 14.706 117.479 12.94 115.093 11.867C113.937 11.45 112.567 11.138 110.984 10.93C109.401 10.721 108.244 10.482 107.515 10.21C106.401 9.815 105.843 9.263 105.843 8.555C105.843 8.045 105.984 7.643 106.265 7.352C106.546 7.06 106.937 6.914 107.437 6.914H115.89L117.406 3.242H107.437C105.812 3.242 104.432 3.706 103.297 4.632C102.057 5.632 101.437 6.94 101.437 8.555C101.437 10.659 102.442 12.19 104.453 13.148C105.609 13.586 107.127 13.958 109.007 14.266C110.887 14.573 112.213 14.898 112.984 15.242C113.807 15.617 114.214 16.242 114.203 17.117C114.213 17.637 114.067 18.039 113.765 18.32C113.484 18.529 113.104 18.633 112.625 18.633L97.359 18.628L95.843 22.3L112.625 22.305Z" fill="#FD8301" data-v-02d09641></path><path d="M78.525 23.805L88.598 1.758H93.698L103.772 23.805H78.525ZM92.655 17.038L91.163 13.581L89.72 17.039L92.655 17.038Z" fill="#FD8301" stroke="#0C1016" stroke-width="3" data-v-02d09641></path><path d="M70.172 7.02302H77.109C77.442 7.02302 77.755 7.16902 78.047 7.46102C78.474 7.87802 78.687 8.67402 78.687 9.85102C78.687 11.018 78.474 11.81 78.047 12.227C77.755 12.518 77.442 12.664 77.109 12.664H71.734L70.172 16.445V7.02302ZM70.172 16.445H77.109C78.932 16.445 80.469 15.82 81.719 14.57C82.833 13.456 83.39 11.883 83.39 9.85202C83.39 7.82002 82.833 6.24202 81.718 5.11702C80.468 3.87702 78.932 3.25702 77.109 3.25702H65.47V22.305H70.173L70.172 16.445Z" fill="#FD8301" data-v-02d09641></path><path d="M26.094 22.356C25.812 21.754 25.621 21.228 25.521 20.779C25.421 20.329 25.325 19.564 25.234 18.485L9.219 18.539C8.073 18.539 7.068 18.107 6.203 17.242C5.203 16.242 4.703 14.706 4.703 12.632C4.703 10.758 5.203 9.32002 6.203 8.32002C7.068 7.45602 8.073 7.02302 9.219 7.02302L23.514 7.01502C23.964 6.12202 24.394 5.45302 24.804 5.00702C25.07 4.71802 25.596 4.14502 26.381 3.28702L9.219 3.25702C6.583 3.25702 4.359 4.16902 2.547 5.99202C0.849 7.68002 0 9.89302 0 12.632C0 15.57 0.849 17.882 2.547 19.57C4.359 21.393 6.583 22.305 9.219 22.305L26.094 22.355V22.356Z" fill="white" data-v-02d09641></path><path d="M62.797 22.305V3.258H59.515L50.203 18.414L52.25 21.711L58.406 11.945V22.305H62.797Z" fill="#FD8301" data-v-02d09641></path><path d="M32.04 1.55501C34.913 1.43401 38.076 1.53101 39.776 3.24101C41.316 4.77101 41.412 7.73401 41.249 10.728C41.211 11.437 41.172 12.136 41.172 12.789C41.172 16.419 40.129 19.168 38.189 21.097C36.087 23.21 33.51 24.273 30.453 24.273H28.234C27.645 24.273 27.008 24.32 26.351 24.366L25.578 24.419C23.078 24.574 20.661 24.368 19.158 22.865C17.563 21.27 17.399 17.815 17.485 14.512C17.5 13.919 17.515 13.338 17.515 12.789C17.515 9.37401 18.547 6.71801 20.499 4.77901C22.6 2.66501 25.177 1.60201 28.234 1.60201H30.453C30.946 1.60201 31.483 1.57801 32.04 1.55501Z" fill="white" stroke="#090C10" stroke-width="3" data-v-02d09641></path><path d="M46.094 22.305V11.945L49.469 17.242L51.515 13.961L44.985 3.258H41.703V22.305H46.094Z" fill="white" data-v-02d09641></path><path fill-rule="evenodd" clip-rule="evenodd" d="M36.7334 6.04107L32.1719 15.6726L26.8997 10.4004L36.7334 6.04107Z" fill="#C74923" data-v-02d09641></path><path fill-rule="evenodd" clip-rule="evenodd" d="M22.5397 20.2348L32.1719 15.6726L26.8997 10.4004L22.5397 20.2348Z" fill="#1353A2" data-v-02d09641></path><path d="M28.8259 13.7464C29.2179 14.1385 29.8536 14.1385 30.2457 13.7464C30.6378 13.3543 30.6378 12.7186 30.2457 12.3265C29.8536 11.9345 29.2179 11.9345 28.8259 12.3265C28.4338 12.7186 28.4338 13.3543 28.8259 13.7464Z" fill="white" data-v-02d09641></path></g><defs data-v-02d09641><clipPath id="clip0_1_18" data-v-02d09641><rect width="119" height="26" fill="white" data-v-02d09641></rect></clipPath></defs></svg></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Logo.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4], ["__scopeId", "data-v-02d09641"]]);
const _sfc_main$3 = {
  data() {
    return {
      isMenuActive: false,
      isMobile: false
    };
  },
  mounted() {
  },
  methods: {
    toggleMenu() {
      this.isMenuActive = !this.isMenuActive;
      const navMenu = (void 0).querySelector(".nav-menu");
      navMenu.classList.toggle("animated-menu");
    },
    checkWindowSize() {
    }
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$2;
  const _component_Logo = __nuxt_component_1$1;
  _push(`<nav${ssrRenderAttrs(mergeProps({ class: "nav" }, _attrs))} data-v-6084c031>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Logo, { class: "nav-logo" }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Logo, { class: "nav-logo" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="nav-menu" data-v-6084c031>`);
  if (!$data.isMobile || $data.isMenuActive) {
    _push(`<ul class="nav-menu__links menu-links" data-v-6084c031>`);
    _push(ssrRenderComponent(_component_NuxtLink, { to: "rates" }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<li class="menu-links__item" data-v-6084c031${_scopeId}>\u0422\u0430\u0440\u0438\u0444\u044B</li>`);
        } else {
          return [
            createVNode("li", { class: "menu-links__item" }, "\u0422\u0430\u0440\u0438\u0444\u044B")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(ssrRenderComponent(_component_NuxtLink, { to: "contacts" }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<li class="menu-links__item" data-v-6084c031${_scopeId}>\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B</li>`);
        } else {
          return [
            createVNode("li", { class: "menu-links__item" }, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</ul>`);
  } else {
    _push(`<!---->`);
  }
  if (!$data.isMobile || $data.isMenuActive) {
    _push(`<div class="nav-menu__service menu-service" data-v-6084c031><a href="tel:+74951184422" class="menu-service__phone" data-v-6084c031>+7 495 118-44-22</a><button class="menu-service__button" data-v-6084c031>\u0412\u0445\u043E\u0434</button><button class="menu-service__button" data-v-6084c031>\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F</button></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
  if ($data.isMobile) {
    _push(`<button class="${ssrRenderClass([{ active: $data.isMenuActive }, "menu__burger"])}" data-v-6084c031><span data-v-6084c031></span><span data-v-6084c031></span><span data-v-6084c031></span></button>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</nav>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Navbar.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-6084c031"]]);
const _sfc_main$2 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_Navbar = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "header" }, _attrs))} data-v-c02cfd2d>`);
  _push(ssrRenderComponent(_component_Navbar, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppHeader.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-c02cfd2d"]]);
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppFooter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_AppHeader = __nuxt_component_0;
  const _component_AppFooter = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_AppHeader, null, null, _parent));
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(ssrRenderComponent(_component_AppFooter, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-UFrUUbwJ.mjs.map
