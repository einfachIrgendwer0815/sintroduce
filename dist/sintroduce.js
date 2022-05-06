/*!
* MIT licensed
*
* Copyright (C) 2022 einfachIrgendwer0815
*/
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).Sintroduce=e()}(this,(function(){"use strict";var t=function(){return t=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},t.apply(this,arguments)};var e,n=function(t){this.action="present",this.data={element:t}},i=function(){function t(t){this.elements=void 0===t?new Array:t}return t.prototype.toArray=function(){return function(t,e,n){if(n||2===arguments.length)for(var i,o=0,r=e.length;o<r;o++)!i&&o in e||(i||(i=Array.prototype.slice.call(e,0,o)),i[o]=e[o]);return t.concat(i||Array.prototype.slice.call(e))}([],this.elements,!0)},t.prototype.append=function(t){this.elements.push(t)},t.prototype.remove=function(){0!=this.elements.length&&this.elements.splice(0,1)},t.prototype.reverseAppend=function(t){this.elements=[t].concat(this.elements)},t.prototype.reverseRemove=function(){0!=this.elements.length&&this.elements.pop()},t.prototype.clear=function(){this.elements=new Array},t}(),o=function(){function t(t){this.names=t,this.instructions=new i}return t.prototype.feedData=function(t){this.instructions.clear();for(var e=0;e<t.children.length;e++){var i=t.children[e];if("SECTION"==i.tagName){var o=i.getElementsByClassName("fragment");if(0==o.length)this.instructions.append(new n(i));else for(var r=0;r<o.length;r++)this.instructions.append(new n(o[r]))}}},t.prototype.getListOfTimeStatedObjects=function(){return this.timedStatedElements},t.prototype.getNavigatorInstructions=function(){return this.instructions},t}(),r=function(){function t(t){this.names=t,this.mapper=new o(this.names)}return t.prototype.initialize=function(t,e){this.setupViewport(t),this.copyContent(e)},t.prototype.setupViewport=function(t){this.viewport=document.createElement("div"),this.viewport.id=this.names.viewport,t.appendChild(this.viewport)},t.prototype.copyContent=function(t){var e=this;Array.from(t.children).forEach((function(t){e.viewport.appendChild(t)})),t.remove()},t.prototype.getViewport=function(){return this.viewport},t.prototype.getMapper=function(){return this.mapper},t}();!function(t){t.SimpleSlideshow="SimpleSlideshow"}(e||(e={}));var s={SimpleSlideshow:r},p={autoStart:!0,generalPrefix:"sintroduce",viewportId:"viewport",containerName:"container",pastClass:"past",presentClass:"present",futureClass:"future",dataAttributePrefix:"data",presentationTheme:e.SimpleSlideshow};var a=function(){function t(t,e){this.viewport=t,this.position=new Array,e.feedData(t),this.future=e.getNavigatorInstructions()}return t.prototype.jumpToStart=function(){},t.prototype.getPosition=function(){return this.position},t}(),h=function(){function n(){this.isReady=!1,this.hasStarted=!1,this.paused=!1,this.names={}}return n.prototype.initialize=function(n){this.options=function(e){var n=t({},p);for(var i in e)typeof e[i]==typeof p[i]&&(n[i]=e[i]);return n}(n),this.generateNames(),this.checkForContainer()&&(null!=e[this.options.presentationTheme]?(this.theme=new s[this.options.presentationTheme](this.names),this.theme.initialize(document.body,document.getElementById(this.names.container)),this.navigator=new a(this.theme.getViewport(),this.theme.getMapper()),this.navigator.jumpToStart(),this.isReady=!0):console.error("'".concat(this.options.presentationTheme,"' is not a valid presentationTheme.")))},n.prototype.generateNames=function(){this.names.viewport=this.options.generalPrefix.concat("-",this.options.viewportId),this.names.container=this.options.generalPrefix.concat("-",this.options.containerName)},n.prototype.checkForContainer=function(){return null!=document.getElementById(this.names.container)},n.prototype.getPosition=function(){return this.navigator.getPosition()},n.prototype.getIsReady=function(){return this.isReady},n.prototype.getHasStarted=function(){return this.hasStarted},n.prototype.getPaused=function(){return this.paused},n.prototype.getOption=function(t){return this.options[t]},n}(),u=new h;return u.VERSION="0.1.0",u.AUTHOR="einfachIrgendwer0815",u.LICENSE="MIT",u}));
//# sourceMappingURL=sintroduce.js.map
