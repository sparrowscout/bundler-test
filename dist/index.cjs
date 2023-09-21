(function (g, f) {
    if ("object" == typeof exports && "object" == typeof module) {
      module.exports = f();
    } else if ("function" == typeof define && define.amd) {
      define("dummy", [], f);
    } else if ("object" == typeof exports) {
      exports["dummy"] = f();
    } else {
      g["dummy"] = f();
    }
  }(this, () => {
var exports = {};
var module = { exports };
"use strict";var t=Object.defineProperty;var m=Object.getOwnPropertyDescriptor;var i=Object.getOwnPropertyNames;var c=Object.prototype.hasOwnProperty;var o=(r,n)=>{for(var e in n)t(r,e,{get:n[e],enumerable:!0})},d=(r,n,e,b)=>{if(n&&typeof n=="object"||typeof n=="function")for(let u of i(n))!c.call(r,u)&&u!==e&&t(r,u,{get:()=>n[u],enumerable:!(b=m(n,u))||b.enumerable});return r};var f=r=>d(t({},"__esModule",{value:!0}),r);var v={};o(v,{add:()=>a,divide:()=>s,multiply:()=>p,subtract:()=>l});module.exports=f(v);function a(r,n){return r+n}function l(r,n){return r-n}function p(r,n){return r*n}function s(r,n){return r/n}
if (typeof module.exports == "object" && typeof exports == "object") {
  var __cp = (to, from, except, desc) => {
    if ((from && typeof from === "object") || typeof from === "function") {
      for (let key of Object.getOwnPropertyNames(from)) {
        if (!Object.prototype.hasOwnProperty.call(to, key) && key !== except)
        Object.defineProperty(to, key, {
          get: () => from[key],
          enumerable: !(desc = Object.getOwnPropertyDescriptor(from, key)) || desc.enumerable,
        });
      }
    }
    return to;
  };
  module.exports = __cp(module.exports, exports);
}
return module.exports;
}))
