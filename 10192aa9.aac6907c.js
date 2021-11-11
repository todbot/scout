(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{131:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/020101@0.5x-0fd8c23a5d6f203a3804421ef79e7e47.jpg"},132:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/020102@0.5x-4be57d7233f64965b2b007acc90aac8f.jpg"},133:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/020400@0.5x-94d8e63cfa48fd9813d082b9149ea34a.jpg"},61:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return s}));var n=r(3),o=(r(0),r(92));const a={id:"power-up",title:"Power up",description:"Getting power to Scout's PCB and toggling an LED.",sidebar_label:"Power up",image:"/img/pcb_assembly/020400@0.5x.jpg",slug:"/power-up"},i={unversionedId:"power-up",id:"power-up",isDocsHomePage:!1,title:"Power up",description:"Getting power to Scout's PCB and toggling an LED.",source:"@site/docs/power-up.md",slug:"/power-up",permalink:"/scout/power-up",version:"current",sidebar_label:"Power up",sidebar:"someSidebar",previous:{title:"Assemble battery pack",permalink:"/scout/assemble-battery-pack"},next:{title:"Boot the microcontroller",permalink:"/scout/boot-the-microcontroller"}},c=[{value:"Steps",id:"steps",children:[]},{value:"Test",id:"test",children:[]}],l={rightToc:c};function s({components:e,...t}){return Object(o.b)("wrapper",Object(n.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"steps"},"Steps"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Solder LED at ",Object(o.b)("strong",{parentName:"li"},"D1"),Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},"The LED has four pins for three different colors plus ground. The longest one is to ground and it goes to the hole that has a line coming out of it.\n",Object(o.b)("img",{alt:"020101@0.5x.jpg",src:r(131).default})),Object(o.b)("li",{parentName:"ol"},"Get the LED as vertically close to the PCB as reasonable; it doesn't have to be flat against PCB but does need to be straight up and down -- no leaning!\n",Object(o.b)("img",{alt:"020102@0.5x.jpg",src:r(132).default})))),Object(o.b)("li",{parentName:"ol"},"Solder sliding toggle switch ",Object(o.b)("strong",{parentName:"li"},"SW1")," and resistor ",Object(o.b)("strong",{parentName:"li"},"R1")," (220, Red Red Brown).",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Make sure the switch is flat against the PCB and its actuator is pointing left, away from the PCB."),Object(o.b)("li",{parentName:"ul"},'You can use a bit of tape or "Blu-Tack" adhesive to hold the switch in place as you solder.'))),Object(o.b)("li",{parentName:"ol"},"Wire battery pack to ",Object(o.b)("strong",{parentName:"li"},"BT1"),Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},"Thread the other side of the ribbon cable connected to the battery pack up through the hole near ",Object(o.b)("strong",{parentName:"li"},"BT1"),', then strip and solder in place. Make sure the "+" and "-" wires are going to the right places.')))),Object(o.b)("h2",{id:"test"},"Test"),Object(o.b)("p",null,"Add the batteries back. Toggling ",Object(o.b)("strong",{parentName:"p"},"SW1")," should now light one color of the LED! Yes, it is bright!! Power off before continuing soldering."),Object(o.b)("p",null,Object(o.b)("img",{alt:"020400@0.5x.jpg",src:r(133).default})))}s.isMDXComponent=!0},92:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,f=u["".concat(i,".").concat(d)]||u[d]||b[d]||a;return r?o.a.createElement(f,c(c({ref:t},s),{},{components:r})):o.a.createElement(f,c({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);