!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("preact")):"function"==typeof define&&define.amd?define(["preact"],e):"object"==typeof exports?exports["slackers_loader-gears"]=e(require("preact")):t["slackers_loader-gears"]=e(t.preact)}(this,function(t){return function(t){function e(L){if(u[L])return u[L].exports;var n=u[L]={exports:{},id:L,loaded:!1};return t[L].call(n.exports,n,n.exports,e),n.loaded=!0,n.exports}var u={};return e.m=t,e.c=u,e.p="",e(0)}([function(t,e,u){"use strict";function L(t){return t&&t.__esModule?t:{"default":t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==("undefined"==typeof e?"undefined":M(e))&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+("undefined"==typeof e?"undefined":M(e)));t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function r(){return"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHdpZHRoPScxMzJweCcgaGVpZ2h0PScxMzJweCcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiIGNsYXNzPSJ1aWwtZ2VhcnMiPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSJub25lIiBjbGFzcz0iYmsiPjwvcmVjdD48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjAsLTIwKSI+PHBhdGggZD0iTTc5LjksNTIuNkM4MCw1MS44LDgwLDUwLjksODAsNTBzMC0xLjgtMC4xLTIuNmwtNS4xLTAuNGMtMC4zLTIuNC0wLjktNC42LTEuOC02LjdsNC4yLTIuOWMtMC43LTEuNi0xLjYtMy4xLTIuNi00LjUgTDcwLDM1Yy0xLjQtMS45LTMuMS0zLjUtNC45LTQuOWwyLjItNC42Yy0xLjQtMS0yLjktMS45LTQuNS0yLjZMNTkuOCwyN2MtMi4xLTAuOS00LjQtMS41LTYuNy0xLjhsLTAuNC01LjFDNTEuOCwyMCw1MC45LDIwLDUwLDIwIHMtMS44LDAtMi42LDAuMWwtMC40LDUuMWMtMi40LDAuMy00LjYsMC45LTYuNywxLjhsLTIuOS00LjFjLTEuNiwwLjctMy4xLDEuNi00LjUsMi42bDIuMSw0LjZjLTEuOSwxLjQtMy41LDMuMS01LDQuOWwtNC41LTIuMSBjLTEsMS40LTEuOSwyLjktMi42LDQuNWw0LjEsMi45Yy0wLjksMi4xLTEuNSw0LjQtMS44LDYuOGwtNSwwLjRDMjAsNDguMiwyMCw0OS4xLDIwLDUwczAsMS44LDAuMSwyLjZsNSwwLjQgYzAuMywyLjQsMC45LDQuNywxLjgsNi44bC00LjEsMi45YzAuNywxLjYsMS42LDMuMSwyLjYsNC41bDQuNS0yLjFjMS40LDEuOSwzLjEsMy41LDUsNC45bC0yLjEsNC42YzEuNCwxLDIuOSwxLjksNC41LDIuNmwyLjktNC4xIGMyLjEsMC45LDQuNCwxLjUsNi43LDEuOGwwLjQsNS4xQzQ4LjIsODAsNDkuMSw4MCw1MCw4MHMxLjgsMCwyLjYtMC4xbDAuNC01LjFjMi4zLTAuMyw0LjYtMC45LDYuNy0xLjhsMi45LDQuMiBjMS42LTAuNywzLjEtMS42LDQuNS0yLjZMNjUsNjkuOWMxLjktMS40LDMuNS0zLDQuOS00LjlsNC42LDIuMmMxLTEuNCwxLjktMi45LDIuNi00LjVMNzMsNTkuOGMwLjktMi4xLDEuNS00LjQsMS44LTYuN0w3OS45LDUyLjYgeiBNNTAsNjVjLTguMywwLTE1LTYuNy0xNS0xNWMwLTguMyw2LjctMTUsMTUtMTVzMTUsNi43LDE1LDE1QzY1LDU4LjMsNTguMyw2NSw1MCw2NXoiIGZpbGw9IiM4ZjdmNTkiPjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0icm90YXRlIiBmcm9tPSI5MCA1MCA1MCIgdG89IjAgNTAgNTAiIGR1cj0iMC45cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZVRyYW5zZm9ybT48L3BhdGg+PC9nPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIwLDIwKSByb3RhdGUoMTUgNTAgNTApIj48cGF0aCBkPSJNNzkuOSw1Mi42QzgwLDUxLjgsODAsNTAuOSw4MCw1MHMwLTEuOC0wLjEtMi42bC01LjEtMC40Yy0wLjMtMi40LTAuOS00LjYtMS44LTYuN2w0LjItMi45Yy0wLjctMS42LTEuNi0zLjEtMi42LTQuNSBMNzAsMzVjLTEuNC0xLjktMy4xLTMuNS00LjktNC45bDIuMi00LjZjLTEuNC0xLTIuOS0xLjktNC41LTIuNkw1OS44LDI3Yy0yLjEtMC45LTQuNC0xLjUtNi43LTEuOGwtMC40LTUuMUM1MS44LDIwLDUwLjksMjAsNTAsMjAgcy0xLjgsMC0yLjYsMC4xbC0wLjQsNS4xYy0yLjQsMC4zLTQuNiwwLjktNi43LDEuOGwtMi45LTQuMWMtMS42LDAuNy0zLjEsMS42LTQuNSwyLjZsMi4xLDQuNmMtMS45LDEuNC0zLjUsMy4xLTUsNC45bC00LjUtMi4xIGMtMSwxLjQtMS45LDIuOS0yLjYsNC41bDQuMSwyLjljLTAuOSwyLjEtMS41LDQuNC0xLjgsNi44bC01LDAuNEMyMCw0OC4yLDIwLDQ5LjEsMjAsNTBzMCwxLjgsMC4xLDIuNmw1LDAuNCBjMC4zLDIuNCwwLjksNC43LDEuOCw2LjhsLTQuMSwyLjljMC43LDEuNiwxLjYsMy4xLDIuNiw0LjVsNC41LTIuMWMxLjQsMS45LDMuMSwzLjUsNSw0LjlsLTIuMSw0LjZjMS40LDEsMi45LDEuOSw0LjUsMi42bDIuOS00LjEgYzIuMSwwLjksNC40LDEuNSw2LjcsMS44bDAuNCw1LjFDNDguMiw4MCw0OS4xLDgwLDUwLDgwczEuOCwwLDIuNi0wLjFsMC40LTUuMWMyLjMtMC4zLDQuNi0wLjksNi43LTEuOGwyLjksNC4yIGMxLjYtMC43LDMuMS0xLjYsNC41LTIuNkw2NSw2OS45YzEuOS0xLjQsMy41LTMsNC45LTQuOWw0LjYsMi4yYzEtMS40LDEuOS0yLjksMi42LTQuNUw3Myw1OS44YzAuOS0yLjEsMS41LTQuNCwxLjgtNi43TDc5LjksNTIuNiB6IE01MCw2NWMtOC4zLDAtMTUtNi43LTE1LTE1YzAtOC4zLDYuNy0xNSwxNS0xNXMxNSw2LjcsMTUsMTVDNjUsNTguMyw1OC4zLDY1LDUwLDY1eiIgZmlsbD0iIzlmOWZhYiI+PGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJyb3RhdGUiIGZyb209IjAgNTAgNTAiIHRvPSI5MCA1MCA1MCIgZHVyPSIwLjlzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlVHJhbnNmb3JtPjwvcGF0aD48L2c+PC9zdmc+"}var M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var u=0;u<e.length;u++){var L=e[u];L.enumerable=L.enumerable||!1,L.configurable=!0,"value"in L&&(L.writable=!0),Object.defineProperty(t,L.key,L)}}return function(e,u,L){return u&&t(e.prototype,u),L&&t(e,L),e}}(),j=u(1),c=u(2),w=L(c),y=function(t){function e(){return n(this,e),o(this,Object.getPrototypeOf(e).apply(this,arguments))}return i(e,t),s(e,[{key:"render",value:function(t){var e=t.text;return(0,j.h)(w["default"],{text:e||"",backgroundImage:r()})}}]),e}(j.Component);e["default"]=y,t.exports=e["default"]},function(e,u){e.exports=t},function(t,e,u){"use strict";function L(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==("undefined"==typeof e?"undefined":M(e))&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+("undefined"==typeof e?"undefined":M(e)));t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function i(){return{base:{backgroundColor:"rgb(244, 252, 255)",position:"absolute",left:0,right:0,bottom:0,top:0},box:{color:"#ED6C30",textAlign:"center",display:"block",fontSize:"44px",fontWeight:"bold",position:"absolute",width:300,height:405,margin:"auto",left:0,right:0,bottom:0,top:0},icon:{backgroundRepeat:"no-repeat",backgroundPosition:"center center",backgroundSize:"cover",width:230,height:230,margin:"auto"}}}var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t},M="function"==typeof Symbol&&"symbol"===r(Symbol.iterator)?function(t){return"undefined"==typeof t?"undefined":r(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":"undefined"==typeof t?"undefined":r(t)};Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var u=0;u<e.length;u++){var L=e[u];L.enumerable=L.enumerable||!1,L.configurable=!0,"value"in L&&(L.writable=!0),Object.defineProperty(t,L.key,L)}}return function(e,u,L){return u&&t(e.prototype,u),L&&t(e,L),e}}(),j=u(1),c=function(t){function e(){return L(this,e),n(this,Object.getPrototypeOf(e).apply(this,arguments))}return o(e,t),s(e,[{key:"render",value:function(t){var e=t.text,u=t.backgroundImage,L=t.children,n=t.className,o=i(),r=o.base,M=o.box,s=o.icon;return s.backgroundImage="url('"+u+"')",(0,j.h)("div",{className:n,style:r},(0,j.h)("div",{style:M},(0,j.h)("div",{style:s}),e||"",L))}}]),e}(j.Component);e["default"]=c,t.exports=e["default"]}])});