(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{137:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a);function i(e,t,n,a){return new(n||(n=Promise))(function(r,i){function c(e){try{l(a.next(e))}catch(e){i(e)}}function o(e){try{l(a.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(c,o)}l((a=a.apply(e,t||[])).next())})}function c(e,t){var n,a,r,i,c={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function o(i){return function(o){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;c;)try{if(n=1,a&&(r=2&i[0]?a.return:i[0]?a.throw||((r=a.return)&&r.call(a),0):a.next)&&!(r=r.call(a,i[1])).done)return r;switch(a=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return c.label++,{value:i[1],done:!1};case 5:c.label++,a=i[1],i=[0];continue;case 7:i=c.ops.pop(),c.trys.pop();continue;default:if(!((r=(r=c.trys).length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){c=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){c.label=i[1];break}if(6===i[0]&&c.label<r[1]){c.label=r[1],r=i;break}if(r&&c.label<r[2]){c.label=r[2],c.ops.push(i);break}r[2]&&c.ops.pop(),c.trys.pop();continue}i=t.call(e,c)}catch(e){i=[6,e],a=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,o])}}}function o(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],a=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&a>=e.length&&(e=void 0),{value:e&&e[a++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function l(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var a,r,i=n.call(e),c=[];try{for(;(void 0===t||t-- >0)&&!(a=i.next()).done;)c.push(a.value)}catch(e){r={error:e}}finally{try{a&&!a.done&&(n=i.return)&&n.call(i)}finally{if(r)throw r.error}}return c}function s(e,t,n){if(n||2===arguments.length)for(var a,r=0,i=t.length;r<i;r++)!a&&r in t||(a||(a=Array.prototype.slice.call(t,0,r)),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))}function u(e,t,n,a,r){for(var u=[],f=5;f<arguments.length;f++)u[f-5]=arguments[f];return i(this,void 0,void 0,function(){var i,f,E,h,p,v;return c(this,function(c){switch(c.label){case 0:c.trys.push([0,12,13,14]),i=o(u),f=i.next(),c.label=1;case 1:if(f.done)return[3,11];switch(typeof(E=f.value)){case"string":return[3,2];case"number":return[3,4];case"function":return[3,6]}return[3,8];case 2:return[4,m(e,t,E,n,a,r)];case 3:return c.sent(),[3,10];case 4:return[4,d(E)];case 5:return c.sent(),[3,10];case 6:return[4,E.apply(void 0,s([e,t,n,a,r],l(u),!1))];case 7:return c.sent(),[3,10];case 8:return[4,E];case 9:c.sent(),c.label=10;case 10:return f=i.next(),[3,1];case 11:return[3,14];case 12:return h=c.sent(),p={error:h},[3,14];case 13:try{f&&!f.done&&(v=i.return)&&v.call(i)}finally{if(p)throw p.error}return[7];case 14:return[2]}})})}function m(e,t,n,a,r,o){return i(this,void 0,void 0,function(){var i,u;return c(this,function(c){switch(c.label){case 0:return i=e.textContent||"",u=function(e,t){var n=l(t).slice(0);return s(s([],l(e),!1),[NaN],!1).findIndex(function(e,t){return n[t]!==e})}(i,n),[4,f(e,s(s([],l(h(i,t,u)),!1),l(E(n,t,u)),!1),a,r,o)];case 1:return c.sent(),[2]}})})}function d(e){return i(this,void 0,void 0,function(){return c(this,function(t){switch(t.label){case 0:return[4,new Promise(function(t){return setTimeout(t,e)})];case 1:return t.sent(),[2]}})})}function f(e,t,n,a,r){return i(this,void 0,void 0,function(){var i,s,u,m,f,E,h,p,v,b,g,y,A;return c(this,function(w){switch(w.label){case 0:if(i=t,r){for(s=0,u=1;u<t.length;u++)if(m=l([t[u-1],t[u]],2),f=m[0],(E=m[1]).length>f.length||""===E){s=u;break}i=t.slice(s,t.length)}w.label=1;case 1:w.trys.push([1,6,7,8]),h=o(function(e){var t,n,a,r,i,l,s;return c(this,function(u){switch(u.label){case 0:t=function(e){return c(this,function(t){switch(t.label){case 0:return[4,{op:function(t){return requestAnimationFrame(function(){return t.textContent=e})},opCode:function(t){var n=t.textContent||"";return""===e||n.length>e.length?"DELETE":"WRITING"}}];case 1:return t.sent(),[2]}})},u.label=1;case 1:u.trys.push([1,6,7,8]),n=o(e),a=n.next(),u.label=2;case 2:return a.done?[3,5]:(r=a.value,[5,t(r)]);case 3:u.sent(),u.label=4;case 4:return a=n.next(),[3,2];case 5:return[3,8];case 6:return i=u.sent(),l={error:i},[3,8];case 7:try{a&&!a.done&&(s=n.return)&&s.call(n)}finally{if(l)throw l.error}return[7];case 8:return[2]}})}(i)),p=h.next(),w.label=2;case 2:return p.done?[3,5]:(v=p.value,b="WRITING"===v.opCode(e)?n+n*(Math.random()-.5):a+a*(Math.random()-.5),v.op(e),[4,d(b)]);case 3:w.sent(),w.label=4;case 4:return p=h.next(),[3,2];case 5:return[3,8];case 6:return g=w.sent(),y={error:g},[3,8];case 7:try{p&&!p.done&&(A=h.return)&&A.call(h)}finally{if(y)throw y.error}return[7];case 8:return[2]}})})}function E(e,t,n){var a,r;return void 0===n&&(n=0),c(this,function(i){switch(i.label){case 0:a=t(e),r=a.length,i.label=1;case 1:return n<r?[4,a.slice(0,++n).join("")]:[3,3];case 2:return i.sent(),[3,1];case 3:return[2]}})}function h(e,t,n){var a,r;return void 0===n&&(n=0),c(this,function(i){switch(i.label){case 0:a=t(e),r=a.length,i.label=1;case 1:return r>n?[4,a.slice(0,--r).join("")]:[3,3];case 2:return i.sent(),[3,1];case 3:return[2]}})}!function(e,t){void 0===t&&(t={});var n=t.insertAt;if("undefined"!=typeof document){var a=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===n&&a.firstChild?a.insertBefore(r,a.firstChild):a.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}(".index-module_type__E-SaG::after {\n  content: '|';\n  animation: index-module_cursor__PQg0P 1.1s infinite step-start;\n}\n\n@keyframes index-module_cursor__PQg0P {\n  50% {\n    opacity: 0;\n  }\n}\n");var p=Object(a.memo)(Object(a.forwardRef)(function(e,t){var n=e.sequence,i=e.repeat,c=e.className,o=e.speed,m=void 0===o?40:o,d=e.deletionSpeed,f=e.omitDeletionAnimation,E=void 0!==f&&f,h=e.preRenderFirstString,p=void 0!==h&&h,v=e.wrapper,b=void 0===v?"span":v,g=e.splitter,y=void 0===g?function(e){return s([],l(e),!1)}:g,A=e.cursor,w=void 0===A||A,I=e.style,C=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n}(e,["sequence","repeat","className","speed","deletionSpeed","omitDeletionAnimation","preRenderFirstString","wrapper","splitter","cursor","style"]),N=C["aria-label"],x=C["aria-hidden"],B=C.role;d||(d=m);var Q=new Array(2).fill(40);[m,d].forEach(function(e,t){switch(typeof e){case"number":Q[t]=Math.abs(e-100);break;case"object":var n=e.type,a=e.value;if("number"!=typeof a)break;"keyStrokeDelayInMs"===n&&(Q[t]=a)}});var k,W,S,D,O,j,R=Q[0],M=Q[1],G=function(e,t){void 0===t&&(t=null);var n=Object(a.useRef)(t);return Object(a.useEffect)(function(){e&&("function"==typeof e?e(n.current):e.current=n.current)},[e]),n}(t),P="index-module_type__E-SaG";k=c?"".concat(w?P+" ":"").concat(c):w?P:"",W=Object(a.useRef)(function(){var e,t=n;i===1/0?e=u:"number"==typeof i&&(t=Array(1+i).fill(n).flat());var a=e?s(s([],l(t),!1),[e],!1):s([],l(t),!1);return u.apply(void 0,s([G.current,y,R,M,E],l(a),!1)),function(){G.current}}),S=Object(a.useRef)(),D=Object(a.useRef)(!1),O=Object(a.useRef)(!1),j=l(Object(a.useState)(0),2)[1],D.current&&(O.current=!0),Object(a.useEffect)(function(){return D.current||(S.current=W.current(),D.current=!0),j(function(e){return e+1}),function(){O.current&&S.current&&S.current()}},[]);var F=b,T=p?n.find(function(e){return"string"==typeof e})||"":null;return r.a.createElement(F,{"aria-hidden":x,"aria-label":N,role:B,style:I,className:k,children:N?r.a.createElement("span",{"aria-hidden":"true",ref:G,children:T}):T,ref:N?void 0:G})}),function(e,t){return!0}),v=n(34),b=n(3),g=n(51),y=n.n(g),A=n(54),w=n.n(A);n(48);var I=function(){var e=r.a.createElement(v.a,{height:"2rem",icon:"tabler:device-vision-pro"}),t=r.a.createElement(v.a,{height:"2rem",icon:"solar:transmission-broken"}),n=Object(a.useState)(!1),i=Object(b.a)(n,2),c=i[0],o=i[1];return Object(a.useEffect)(function(){var e=new Image;e.src=w.a,e.onload=function(){o(!0)}},[]),r.a.createElement("div",{className:"IEEE_MAIN d-flex align-items-center"},r.a.createElement("div",{className:"WIE"},r.a.createElement("div",{className:"wie_photo px-4"},r.a.createElement("img",{className:"rounded-4 w-100",src:c?w.a:y.a,alt:"WIE"})),r.a.createElement("div",{className:"wie_content"},r.a.createElement("div",{className:"ieee_title pt-5 px-1"},"Institute of Electrical and Electronics Engineers (IEEE)"," ",r.a.createElement(v.a,{icon:"simple-line-icons:energy"})),r.a.createElement("div",null,r.a.createElement("div",{className:"wie_desc"},"Established in 1995, IEEE CRCE stands as one of the most venerable Student Chapters within the Bombay Section. With a legacy spanning 24 years, our core objective is to equip our students with profound technical knowledge. Our portfolio boasts a rich tapestry of offerings, including national-level competitions, workshops, skill development programs, industrial visits, technical conferences, and a strong commitment to humanitarian activities.")),r.a.createElement("div",{className:"wie_media"},r.a.createElement("div",{className:"mb-4 "},r.a.createElement("div",{className:"media"},r.a.createElement("div",{className:"pull-left"},e),r.a.createElement("div",{className:"media-body"},r.a.createElement("h4",{className:"media-heading"},"IEEE Vision"),r.a.createElement("div",null,"Pioneering technological excellence, IEEE CRCE strives to create a better world through innovation and education.")))),r.a.createElement("div",{className:"mb-2"},r.a.createElement("div",{className:"media"},r.a.createElement("div",{className:"pull-left"},t),r.a.createElement("div",{className:"media-body"},r.a.createElement("h4",{className:"media-heading"},"IEEE Mission"),r.a.createElement("div",null,"Dedicated to bridging academia and industry, IEEE CRCE empowers students with technical prowess and fosters a spirit of innovation, while contributing to the greater good of society."))))))))},C=(n(55),n(56)),N=n.n(C);var x=function(){var e=r.a.createElement(v.a,{height:"2rem",icon:"tabler:device-vision-pro"}),t=r.a.createElement(v.a,{height:"2rem",icon:"solar:transmission-broken"}),n=Object(a.useState)(!1),i=Object(b.a)(n,2),c=i[0],o=i[1];return Object(a.useEffect)(function(){var e=new Image;e.src=N.a,e.onload=function(){o(!0)}},[]),r.a.createElement("div",{className:"WIE_MAIN d-flex align-items-center"},r.a.createElement("div",{className:"WIE"},r.a.createElement("div",{className:"wie_photo px-4"},r.a.createElement("img",{className:"rounded-4",src:c?N.a:y.a,alt:"WIE"}),r.a.createElement("div",{className:"wie_title pt-5"},"Women In Engineering (WIE)            ",r.a.createElement(v.a,{icon:"simple-line-icons:energy"}))),r.a.createElement("div",{className:"wie_content"},r.a.createElement("div",null,r.a.createElement("div",{className:"wie_desc"},"WIE-CRCE is an affinity group of IEEE which is the world\u2019s leading professional association for the advancement of technology. WIE-CRCE aims to inculcate the importance and advancements related to technology and social issues to women to make them whole as an individual with a firm technical background. This chapter organizes the talk of eminent personalities from various fields to celebrate Women\u2019s day.")),r.a.createElement("div",{className:"wie_media"},r.a.createElement("div",{className:"col-md-6 mb-4 "},r.a.createElement("div",{className:"media"},r.a.createElement("div",{className:"pull-left"},e),r.a.createElement("div",{className:"media-body"},r.a.createElement("h4",{className:"media-heading"},"WIE Vision"),r.a.createElement("div",null,"To facilitate the recruitment and retention of women in technical disciplines globally.")))),r.a.createElement("div",{className:"col-md-6 mb-2"},r.a.createElement("div",{className:"media"},r.a.createElement("div",{className:"pull-left"},t),r.a.createElement("div",{className:"media-body"},r.a.createElement("h4",{className:"media-heading"},"WIE Mission"),r.a.createElement("div",null,"To inspire, engage, encourage, and empower IEEE women worldwide."))))))))},B=n(19);t.default=r.a.memo(function(e){document.title="IEEE WIE CRCE";var t=navigator.userAgent.includes("Windows")||navigator.userAgent.includes("Mac");return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"heroContainer snapElement"},r.a.createElement("span",{className:"reveal-text text-center"},r.a.createElement("div",{className:"fs-1"},r.a.createElement(B.a,{icon:"uvqdhrsk",colors:"primary:#fff,secondary:#fff",w:100,h:100,stroke:"bold"})),r.a.createElement("h1",{className:"mainHeading"}," IEEE WIE CRCE"),r.a.createElement("p",null,e.text),r.a.createElement("p",{className:"makeitcenter"},"Coding the Future, One Line at a Time!"," "),r.a.createElement(B.a,{icon:"vlycxjwx",colors:"primary:#fff,secondary:#fff",w:50,h:50,stroke:"bold"})),t?r.a.createElement("div",{className:"content mx-3"},r.a.createElement("div",null,r.a.createElement(v.a,{icon:"iconamoon:send"})," ",r.a.createElement(p,{sequence:["Welcome to IEEE WIE",1e3,"Welcome to IEEE WIE \u2013 Empowering Technology for a Better Tomorrow!",1e3,"Welcome to IEEE WIE \u2013 Innovating for a Better Tomorrow!",1e3,"Welcome to IEEE WIE \u2013 Transforming Ideas into Innovations!",1e3,"Welcome to IEEE WIE \u2013 From Circuits to Cybernetics, We Do It All!",1e3,"Welcome to IEEE WIE \u2013 Building Bridges with Bits and Bytes!",1e3],speed:50,deletionSpeed:70,preRenderFirstString:!0,repeat:1/0}))):null),r.a.createElement("div",{className:"snapElement"},r.a.createElement(I,null)),r.a.createElement("div",{className:"snapElement"},r.a.createElement(x,null)))})},48:function(e,t,n){},51:function(e,t){e.exports="data:image/png;base64,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"},54:function(e,t,n){e.exports=n.p+"static/media/ieeeTeam.3f7bcbc5.jpg"},55:function(e,t,n){},56:function(e,t,n){e.exports=n.p+"static/media/wieTeam.141bf3c1.jpg"}}]);
//# sourceMappingURL=5.24ab6986.chunk.js.map