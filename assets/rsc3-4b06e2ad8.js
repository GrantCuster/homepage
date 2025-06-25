var p={exports:{}},i={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m;function d(){if(m)return i;m=1;var s=Symbol.for("react.transitional.element"),a=Symbol.for("react.fragment");function l(x,r,t){var n=null;if(t!==void 0&&(n=""+t),r.key!==void 0&&(n=""+r.key),"key"in r){t={};for(var o in r)o!=="key"&&(t[o]=r[o])}else t=r;return r=t.ref,{$$typeof:s,type:x,key:n,ref:r!==void 0?r:null,props:t}}return i.Fragment=a,i.jsx=l,i.jsxs=l,i}var u;function c(){return u||(u=1,p.exports=d()),p.exports}var e=c();function g(){const s=[["/images/portraits/collapse.png","collapse"],["/images/portraits/collapse2.png","collapse"],["/images/portraits/grain.jpg","grain"],["/images/portraits/image-paint.jpg","image paint"],["/images/portraits/image-paint2.jpg","image paint"],["/images/portraits/flow.png","flow"],["/images/portraits/mask1.jpg","mask"],["/images/portraits/res.jpg","res"]],a=Math.floor(Math.random()*s.length);return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"w-1/2 md:w-2/3",children:e.jsx("img",{src:s[a][0]})}),e.jsx("div",{className:"",children:e.jsxs("div",{className:"mt-[0.75lh]",children:["Portrait made with"," ",e.jsx("a",{href:`https://${s[a][1]}.constraint.systems`,className:"underline aqua",target:"_blank",children:s[a][1]})]})})]})}export{g as Portrait};
