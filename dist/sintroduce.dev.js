/*!
* MIT licensed
*
* Copyright (C) 2022 einfachIrgendwer0815
*/
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).Sintroduce={})}(this,(function(t){"use strict";var e=function(){return e=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},e.apply(this,arguments)};var n,o=function(){function t(){}return t.prototype.map=function(t){for(var e=new Array,n=0;n<t.children.length;n++){var o=Array.from(t.children[n].getElementsByClassName("fragment"));e.push(o)}return e},t}(),i=function(){function t(){}return t.prototype.initialize=function(t,e){this.setupViewport(t),this.copyContent(e),this.map=(new o).map(this.viewport)},t.prototype.setupViewport=function(t){this.viewport=document.createElement("div"),this.viewport.id="sintroduce-viewport",t.appendChild(this.viewport)},t.prototype.copyContent=function(t){var e=this;Array.from(t.children).forEach((function(t){e.viewport.appendChild(t)})),t.remove()},t.prototype.getPosition=function(){return this.position},t.prototype.jumpTo=function(t){},t.prototype.jumpToHashLocPosition=function(){},t.prototype.setHashLoc=function(){},t}();!function(t){t.SimpleSlideshow="SimpleSlideshow"}(n||(n={}));var r={SimpleSlideshow:i},p={autoStart:!0,generalPrefix:"sintroduce",viewportId:"viewport",pastClass:"past",presentClass:"present",futureClass:"future",dataAttributePrefix:"data",presentationTheme:n.SimpleSlideshow};var s=function(){function t(){this.isReady=!1,this.hasStarted=!1,this.paused=!1}return t.prototype.initialize=function(t){this.options=function(t){var n=e({},p);for(var o in t)typeof t[o]==typeof p[o]&&(n[o]=t[o]);return n}(t),this.checkForContainer()&&(null!=n[this.options.presentationTheme]?(this.theme=new r[this.options.presentationTheme],this.theme.initialize(document.body,document.getElementById("sintroduce-container")),this.isReady=!0):console.error("'".concat(this.options.presentationTheme,"' is not a valid presentationTheme.")))},t.prototype.checkForContainer=function(){return null!=document.getElementById("sintroduce-container")},t.prototype.getPosition=function(){return this.theme.getPosition()},t.prototype.getIsReady=function(){return this.isReady},t.prototype.getHasStarted=function(){return this.hasStarted},t.prototype.getPaused=function(){return this.paused},t.prototype.getOption=function(t){return this.options[t]},t}(),u=function(){function t(t){this.elements=void 0===t?new Array:t}return t.prototype.toArray=function(){return function(t,e,n){if(n||2===arguments.length)for(var o,i=0,r=e.length;i<r;i++)!o&&i in e||(o||(o=Array.prototype.slice.call(e,0,i)),o[i]=e[i]);return t.concat(o||Array.prototype.slice.call(e))}([],this.elements,!0)},t.prototype.append=function(t){this.elements.push(t)},t.prototype.remove=function(){this.elements.splice(0,1)},t.prototype.reverseAppend=function(t){this.elements=[t].concat(this.elements)},t.prototype.reverseRemove=function(){this.elements.pop()},t}(),a=new s;a.VERSION="0.1.0-dev",a.AUTHOR="einfachIrgendwer0815",a.LICENSE="MIT",t.Queue=u,t.Sintro=s,t.Sintroduce=a,Object.defineProperty(t,"__esModule",{value:!0})}));
//# sourceMappingURL=sintroduce.dev.js.map
