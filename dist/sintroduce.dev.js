/*!
* MIT licensed
*
* Copyright (C) 2022 einfachIrgendwer0815
*/
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).Sintroduce={})}(this,(function(t){"use strict";var e=function(){return e=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},e.apply(this,arguments)};function n(t,e,n){if(n||2===arguments.length)for(var i,o=0,r=e.length;o<r;o++)!i&&o in e||(i||(i=Array.prototype.slice.call(e,0,o)),i[o]=e[o]);return t.concat(i||Array.prototype.slice.call(e))}var i,o=function(t){this.action="present",this.data={element:t}},r=function(){function t(t){this.elements=void 0===t?new Array:t}return t.prototype.toArray=function(){return n([],this.elements,!0)},t.prototype.append=function(t){this.elements.push(t)},t.prototype.remove=function(){0!=this.elements.length&&this.elements.splice(0,1)},t.prototype.reverseAppend=function(t){this.elements=[t].concat(this.elements)},t.prototype.reverseRemove=function(){0!=this.elements.length&&this.elements.pop()},t.prototype.clear=function(){this.elements=new Array},t}(),s=function(){function t(t){this.names=t,this.instructions=new r}return t.prototype.feedData=function(t){this.instructions.clear();for(var e=0;e<t.children.length;e++){var n=t.children[e];if("SECTION"==n.tagName){var i=n.getElementsByClassName("fragment");if(0==i.length)this.instructions.append(new o(n));else for(var r=0;r<i.length;r++)this.instructions.append(new o(i[r]))}}},t.prototype.getListOfTimeStatedObjects=function(){return this.timedStatedElements},t.prototype.getNavigatorInstructions=function(){return this.instructions},t}(),p=function(){function t(t){this.names=t,this.mapper=new s(this.names)}return t.prototype.initialize=function(t,e){this.setupViewport(t),this.copyContent(e)},t.prototype.setupViewport=function(t){this.viewport=document.createElement("div"),this.viewport.id=this.names.viewport,t.appendChild(this.viewport)},t.prototype.copyContent=function(t){var e=this;Array.from(t.children).forEach((function(t){e.viewport.appendChild(t)})),t.remove()},t.prototype.getViewport=function(){return this.viewport},t.prototype.getMapper=function(){return this.mapper},t}();!function(t){t.SimpleSlideshow="SimpleSlideshow"}(i||(i={}));var a={SimpleSlideshow:p},u={autoStart:!0,generalPrefix:"sintroduce",viewportId:"viewport",containerName:"container",pastClass:"past",presentClass:"present",futureClass:"future",dataAttributePrefix:"data",presentationTheme:i.SimpleSlideshow};var h=function(){function t(t,e){this.viewport=t,this.position=new Array,e.feedData(t),this.future=e.getNavigatorInstructions()}return t.prototype.jumpToStart=function(){},t.prototype.getPosition=function(){return this.position},t}(),c=function(){function t(){this.isReady=!1,this.hasStarted=!1,this.paused=!1,this.names={}}return t.prototype.initialize=function(t){this.options=function(t){var n=e({},u);for(var i in t)typeof t[i]==typeof u[i]&&(n[i]=t[i]);return n}(t),this.generateNames(),this.checkForContainer()&&(null!=i[this.options.presentationTheme]?(this.theme=new a[this.options.presentationTheme](this.names),this.theme.initialize(document.body,document.getElementById(this.names.container)),this.navigator=new h(this.theme.getViewport(),this.theme.getMapper()),this.navigator.jumpToStart(),this.isReady=!0):console.error("'".concat(this.options.presentationTheme,"' is not a valid presentationTheme.")))},t.prototype.generateNames=function(){this.names.viewport=this.options.generalPrefix.concat("-",this.options.viewportId),this.names.container=this.options.generalPrefix.concat("-",this.options.containerName)},t.prototype.checkForContainer=function(){return null!=document.getElementById(this.names.container)},t.prototype.getPosition=function(){return this.navigator.getPosition()},t.prototype.getIsReady=function(){return this.isReady},t.prototype.getHasStarted=function(){return this.hasStarted},t.prototype.getPaused=function(){return this.paused},t.prototype.getOption=function(t){return this.options[t]},t}(),f=function(){function t(t){this.elements=void 0!==t?t:new Array}return t.prototype.push=function(t){this.elements.push(t)},t.prototype.pop=function(){if(0!=this.elements.length){var t=this.elements[-1];return this.elements.pop(),t}},t.prototype.toArray=function(){return n([],this.elements,!0)},t.prototype.clear=function(){this.elements=new Array},t}(),l=new c;l.VERSION="0.1.0-dev",l.AUTHOR="einfachIrgendwer0815",l.LICENSE="MIT",t.Queue=r,t.Sintro=c,t.Sintroduce=l,t.Stack=f,Object.defineProperty(t,"__esModule",{value:!0})}));
//# sourceMappingURL=sintroduce.dev.js.map
