(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{135:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/040200@0.5x-88ff18122b6131383cb7b5f8f4c39b05.jpg"},65:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return a})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(3),o=(r(0),r(92));const i={id:"get-logical",title:"Get logical",description:"Test the microcontroller's logic!",sidebar_label:"Get logical",image:"/img/pcb_assembly/040200@0.5x.jpg",slug:"/get-logical"},a={unversionedId:"get-logical",id:"get-logical",isDocsHomePage:!1,title:"Get logical",description:"Test the microcontroller's logic!",source:"@site/docs/get-logical.md",slug:"/get-logical",permalink:"/scout/get-logical",version:"current",sidebar_label:"Get logical",sidebar:"someSidebar",previous:{title:"Boot the microcontroller",permalink:"/scout/boot-the-microcontroller"},next:{title:"Make some noise",permalink:"/scout/make-some-noise"}},l=[{value:"Steps",id:"steps",children:[]},{value:"Test",id:"test",children:[]}],c={rightToc:l};function s({components:e,...t}){return Object(o.b)("wrapper",Object(n.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"steps"},"Steps"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Solder an SPST switch to ",Object(o.b)("strong",{parentName:"li"},"SW2"),".",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Make sure the switch is absolutely flat against the PCB before soldering all of its pins."))),Object(o.b)("li",{parentName:"ul"},"One way to do this is to solder one pin to hold it in place, then use one hand to push it into the PCB while melting the solder with your other hand; if there's any gap there it should pop in. Visually inspect to make sure it's good, then repeat with the pin on the ",Object(o.b)("em",{parentName:"li"},"opposite corner"),". Then inspect and do the remaining pins. It takes time but is worth it.")))),Object(o.b)("h2",{id:"test"},"Test"),Object(o.b)("p",null,"With power on, press the switch. The LED should light just like it does on boot! Power off."),Object(o.b)("p",null,Object(o.b)("img",{alt:"040200@0.5x.jpg",src:r(135).default})))}s.isMDXComponent=!0},92:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(r),f=n,m=u["".concat(a,".").concat(f)]||u[f]||b[f]||i;return r?o.a.createElement(m,l(l({ref:t},s),{},{components:r})):o.a.createElement(m,l({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var s=2;s<i;s++)a[s]=r[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);