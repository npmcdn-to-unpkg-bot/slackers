!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("preact")):"function"==typeof define&&define.amd?define(["preact"],t):"object"==typeof exports?exports.slackers_base=t(require("preact")):e.slackers_base=t(e.preact)}(this,function(e){return function(e){function t(r){if(o[r])return o[r].exports;var n=o[r]={exports:{},id:r,loaded:!1};return e[r].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var o={};return t.m=e,t.c=o,t.p="",t(0)}([function(e,t,o){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(){return{base:{backgroundColor:"rgb(244, 252, 255)",position:"absolute",left:0,right:0,bottom:0,top:0},box:{color:"#ED6C30",textAlign:"center",display:"block",fontSize:"44px",fontWeight:"bold",position:"absolute",width:300,height:405,margin:"auto",left:0,right:0,bottom:0,top:0},icon:{backgroundRepeat:"no-repeat",backgroundPosition:"center center",backgroundSize:"cover",width:230,height:230,margin:"auto"}}}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,o,r){return o&&e(t.prototype,o),r&&e(t,r),t}}(),u=o(1),s=function(e){function t(){return r(this,t),n(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),c(t,[{key:"render",value:function(e){var t=e.text,o=e.backgroundImage,r=e.children,n=e.className,i=a(),c=i.base,s=i.box,f=i.icon;return f.backgroundImage="url('"+o+"')",(0,u.h)("div",{className:n,style:c},(0,u.h)("div",{style:s},(0,u.h)("div",{style:f}),t||"",r))}}]),t}(u.Component);t["default"]=s},function(t,o){t.exports=e}])});