(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{79:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return s}));var n=a(3),r=a(7),o=(a(0),a(92)),i={id:"hacking",title:"Hacking",description:"Hack, hack, hack, hack, hack, hack.",sidebar_label:"Hacking",image:"/img/scout-10-838-032.gif",slug:"/hacking"},c={unversionedId:"hacking",id:"hacking",isDocsHomePage:!1,title:"Hacking",description:"Hack, hack, hack, hack, hack, hack.",source:"@site/docs/hacking.md",slug:"/hacking",permalink:"/scout/hacking",version:"current",sidebar_label:"Hacking",sidebar:"someSidebar",previous:{title:"Final assembly",permalink:"/scout/final-assembly"},next:{title:"Annotated BOM",permalink:"/scout/bom"}},l=[{value:"Change the Arduino code",id:"change-the-arduino-code",children:[]},{value:"Community hacks",id:"community-hacks",children:[]},{value:"Other ideas",id:"other-ideas",children:[]}],b={rightToc:l};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"This is optional!"))),Object(o.b)("h2",{id:"change-the-arduino-code"},"Change the Arduino code"),Object(o.b)("p",null,"Ready to experiment and get your hands dirty with some code?"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Install the ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.arduino.cc/en/software"}),"Arduino IDE")," and follow their instructions to install whatever drivers you'd need for an Arduino Uno."),Object(o.b)("li",{parentName:"ol"},"With the Scout's power off, use an ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.adafruit.com/product/70"}),"FTDI Serial TTL-232 cable")," to connect the Scout's UART header to your computer.",Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},'The Scout\'s UART header has "B" and "G" labels on its sides to match the cables Black and Green wires.'),Object(o.b)("li",{parentName:"ol"},"The cable provides power to the Scout, so it should now be on and working normally"),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Double check that the power switch is OFF!")," Leaving it on can permanently damage the microcontroller or batteries!"))),Object(o.b)("li",{parentName:"ol"},'In the IDE, under "Tools->Board", select "Arduino Uno". Under "Tools->Port" select your new cable; its exact name will depend on the brand. If you\'re not sure which it is, try unplugging and restarting the IDE -- whichever it was will no longer be listed, so you\'ll know which it is when reconnecting and restarting.'),Object(o.b)("li",{parentName:"ol"},"Download the code from this repo and load ",Object(o.b)("inlineCode",{parentName:"li"},"arduino/scout.ino")," in the Arduino IDE. You'll also need the ",Object(o.b)("inlineCode",{parentName:"li"},"CircularBuffer")," and ",Object(o.b)("inlineCode",{parentName:"li"},"Keypad"),' libraries, so open up "Tools->Manage libraries" and search for those to install them.',Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},'Try uploading this to the Scout by going to "Sketch->Upload". If it works, after 10 seconds or so, it will blink just like it does when you switch its power on. If it doesn\'t work, the IDE will print out an error that you can google to find out how to fix.'),Object(o.b)("li",{parentName:"ol"},"Experiment with the ",Object(o.b)("inlineCode",{parentName:"li"},"octave")," and ",Object(o.b)("inlineCode",{parentName:"li"},"glide")," values at the top of ",Object(o.b)("inlineCode",{parentName:"li"},"scout.ino")," and observe how your Scout has changed its sound."))),Object(o.b)("li",{parentName:"ol"},'"Blink"',Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},'The Arduino IDE has a default program called "Blink" (available in "File->Examples->Basics->Blink").'),Object(o.b)("li",{parentName:"ol"},"After uploading, the Scout won't be playable anymore but one of the colors on the RGB LED should blink off and on."),Object(o.b)("li",{parentName:"ol"},"Try changing the delay values in the example to make it blink faster or slower."),Object(o.b)("li",{parentName:"ol"},"Follow the steps above to bring the original Scout code back.")))),Object(o.b)("p",null,"Once you're comfortable with the Arduino code and really want to expand on what the Scout can do, take a look at the unpopulated HACK header on the PCB. It exposes all the unused pins on the ATmega328 that are safe to use for whatever you'd like:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"HACK"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"ATmega pins"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"VCC"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"n/a"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Voltage from batteries or USB")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A0-A5"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"23-28"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Analog pins")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"D12"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"18"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"There's only one unused digital pin, and this is it")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"SWC, SW1-SW3"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"16; 6,11,12"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Unused spots in the key matrix")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GND"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"n/a"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Ground")))),Object(o.b)("h2",{id:"community-hacks"},"Community hacks"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("a",Object(n.a)({parentName:"strong"},{href:"https://github.com/shamlian/scout/tree/arpeggio_hack"}),"arpeggio_hack")," from ",Object(o.b)("a",Object(n.a)({parentName:"strong"},{href:"https://github.com/shamlian"}),"Steven Shamlian"),":")," Adds polyphony by arpeggiating through the held notes. The full hack requires diodes on the switches to prevent key ghosting, but otherwise the Arduino code can work w/o any hardware changes... provided you only play certain chords or don't mind the occasional wrong note. Pretty interesting!")),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.oskitone.com/contact"}),"Got one to add?")),Object(o.b)("h2",{id:"other-ideas"},"Other ideas"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"For extra stability, add ruber feet to the bottom of your Scout.")))}s.isMDXComponent=!0},92:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return h}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},d=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),d=s(a),p=n,h=d["".concat(i,".").concat(p)]||d[p]||u[p]||o;return a?r.a.createElement(h,c(c({ref:t},b),{},{components:a})):r.a.createElement(h,c({ref:t},b))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var b=2;b<o;b++)i[b]=a[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);