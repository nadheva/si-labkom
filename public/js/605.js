(self.webpackChunk=self.webpackChunk||[]).push([[605],{605:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>O});var n=t(7294),o=t(5482),a=t(9680),s=t(1636),c=t(1329),i=t(8033),l=t(8920),u=t(5893);function f(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function b(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?f(Object(t),!0).forEach((function(r){p(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):f(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function m(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var t=[],n=!0,o=!1,a=void 0;try{for(var s,c=e[Symbol.iterator]();!(n=(s=c.next()).done)&&(t.push(s.value),!r||t.length!==r);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==c.return||c.return()}finally{if(o)throw a}}return t}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return y(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return y(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}const O=function(){var e=(0,s.qt)().props.errors,r=m((0,n.useState)(!1),2),t=r[0],f=r[1],y=m((0,n.useState)({name:"",email:"",password:"",password_confirmation:""}),2),O=y[0],d=y[1];function j(e){var r=e.target.name,t="checkbox"===e.target.type?e.target.checked:e.target.value;d((function(e){return b(b({},e),{},p({},r,t))}))}return(0,u.jsxs)("div",{className:"flex items-center justify-center min-h-screen p-6 bg-indigo-900",children:[(0,u.jsx)(o.ZP,{title:"Labkom FMIPA UNS | Register"}),(0,u.jsxs)("div",{className:"w-full max-w-md",children:[(0,u.jsx)(c.Z,{className:"block w-full max-w-xs mx-auto text-white fill-current",height:50}),(0,u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),f(!0),a.Inertia.post(route("register"),O,{onFinish:function(){return f(!1)}})},className:"mt-8 overflow-hidden bg-white rounded-lg shadow-xl",children:[(0,u.jsxs)("div",{className:"px-10 py-12",children:[(0,u.jsx)("h1",{className:"text-3xl font-bold text-center",children:"Register"}),(0,u.jsx)("div",{className:"w-24 mx-auto mt-6 border-b-2"}),(0,u.jsx)(l.Z,{className:"mt-10",label:"Name",name:"name",type:"text",errors:e.name,value:O.name,onChange:j}),(0,u.jsx)(l.Z,{className:"mt-10",label:"Email",name:"email",type:"email",errors:e.email,value:O.email,onChange:j}),(0,u.jsx)(l.Z,{className:"mt-6",label:"Password",name:"password",type:"password",errors:e.password,value:O.password,onChange:j}),(0,u.jsx)(l.Z,{className:"mt-6",label:"Confirm Password",name:"password_confirmation",type:"password",errors:e.password_confirmation,value:O.password_confirmation,onChange:j})]}),(0,u.jsxs)("div",{className:"flex items-center justify-betweem px-10 py-4 bg-gray-100 border-t border-gray-200",children:[(0,u.jsxs)("p",{className:"w-full text-xs text-center text-gray-700 sm:text-sm",children:["Already have an account? ",(0,u.jsx)(s.ZQ,{className:"text-blue-500 hover:text-blue-700 no-underline hover:underline",as:"a",href:route("login"),children:"Login"})]}),(0,u.jsx)(i.Z,{type:"submit",loading:t,className:"btn-indigo",children:"Register"})]})]})]})]})}},8033:(e,r,t)=>{"use strict";t.d(r,{Z:()=>i});t(7294);var n=t(5893);function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){s(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const i=function(e){var r=e.loading,t=e.className,o=e.children,s=c(e,["loading","className","children"]);return(0,n.jsxs)("button",a(a({disabled:r,className:"focus:outline-none flex items-center ".concat(t)},s),{},{children:[r&&(0,n.jsx)("div",{className:"btn-spinner mr-2"}),o]}))}},1329:(e,r,t)=>{"use strict";t.d(r,{Z:()=>c});t(7294);var n=t(5893);function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){s(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}const c=function(e){return(0,n.jsx)("img",a(a({},e),{},{src:"/img/LogoWebLabkom.png",alt:"LogoLabkom"}))}},8920:(e,r,t)=>{"use strict";t.d(r,{Z:()=>i});t(7294);var n=t(5893);function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){s(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const i=function(e){var r=e.label,t=e.name,o=e.className,s=e.errors,i=void 0===s?[]:s,l=c(e,["label","name","className","errors"]);return(0,n.jsxs)("div",{className:o,children:[r&&(0,n.jsxs)("label",{className:"form-label",htmlFor:t,children:[r,":"]}),(0,n.jsx)("input",a(a({id:t,name:t},l),{},{className:"form-input ".concat(i.length?"error":""),autoComplete:"off"})),i&&(0,n.jsx)("div",{className:"form-error",children:i[0]})]})}}}]);
//# sourceMappingURL=605.js.map?id=6c7fb3d2387f2693b393