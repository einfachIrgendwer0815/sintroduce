/*!
* MIT licensed
*
* Copyright (C) 2022 einfachIrgendwer0815
*/
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).Sintroduce=e()}(this,(function(){"use strict";var t=function(){return t=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},t.apply(this,arguments)};function e(t,e,n){if(n||2===arguments.length)for(var i,o=0,r=e.length;o<r;o++)!i&&o in e||(i||(i=Array.prototype.slice.call(e,0,o)),i[o]=e[o]);return t.concat(i||Array.prototype.slice.call(e))}var n,i=function(t){this.action="present",this.data={element:t}},o=function(){function t(t){this.elements=void 0===t?new Array:t}return t.prototype.toArray=function(){return e([],this.elements,!0)},t.prototype.append=function(t){this.elements.push(t)},t.prototype.remove=function(){if(0!=this.elements.length)return this.elements.splice(0,1)[0]},t.prototype.reverseAppend=function(t){this.elements=[t].concat(this.elements)},t.prototype.reverseRemove=function(){if(0!=this.elements.length)return this.elements.pop()},t.prototype.clear=function(){this.elements=new Array},t.prototype.copy=function(){return new t(e([],this.elements,!0))},t}(),r=function(){function t(t){this.names=t,this.timeStatedElements=[],this.instructions=new o}return t.prototype.feedData=function(t){this.instructions.clear();for(var e=0;e<t.children.length;e++){var n=t.children[e];if("SECTION"==n.tagName){var o=n.getElementsByClassName("fragment");this.instructions.append(new i(n));for(var r=0;r<o.length;r++)this.instructions.append(new i(o[r])),this.timeStatedElements.push(o[r]);this.timeStatedElements.push(n)}}},t.prototype.getListOfTimeStatedObjects=function(){return this.timeStatedElements},t.prototype.getNavigatorInstructions=function(){return this.instructions},t}(),s=function(){function t(t){this.names=t,this.mapper=new r(this.names)}return t.prototype.initialize=function(t,e){this.setupViewport(t),this.copyContent(e)},t.prototype.setupViewport=function(t){this.viewport=document.createElement("div"),this.viewport.id=this.names.viewport,t.appendChild(this.viewport)},t.prototype.copyContent=function(t){var e=this;Array.from(t.children).forEach((function(t){e.viewport.appendChild(t)})),t.remove()},t.prototype.getViewport=function(){return this.viewport},t.prototype.getMapper=function(){return this.mapper},t}();!function(t){t.SimpleSlideshow="SimpleSlideshow"}(n||(n={}));var p={SimpleSlideshow:s},a={autoStart:!0,generalPrefix:"sintroduce",viewportId:"viewport",containerName:"container",pastClass:"past",presentClass:"present",futureClass:"future",dataAttributePrefix:"data",presentationTheme:n.SimpleSlideshow};var h=function(){function t(t,e){this.viewport=t,this.mapper=e,this.position=new Array,this.mapper.feedData(t),this.future=this.mapper.getNavigatorInstructions(),this.setInitialClasses()}return t.prototype.setInitialClasses=function(){for(var t=this.mapper.getListOfTimeStatedObjects(),e=0;e<t.length;e++)t[e].classList.add("future")},t.prototype.jumpToStart=function(){},t.prototype.getPosition=function(){return this.position},t}(),u=function(){function e(){this.isReady=!1,this.hasStarted=!1,this.paused=!1,this.names={}}return e.prototype.initialize=function(e){this.options=function(e){var n=t({},a);for(var i in e)typeof e[i]==typeof a[i]&&(n[i]=e[i]);return n}(e),this.generateNames(),this.checkForContainer()&&(null!=n[this.options.presentationTheme]?(this.theme=new p[this.options.presentationTheme](this.names),this.theme.initialize(document.body,document.getElementById(this.names.container)),this.navigator=new h(this.theme.getViewport(),this.theme.getMapper()),this.navigator.jumpToStart(),this.isReady=!0):console.error("'".concat(this.options.presentationTheme,"' is not a valid presentationTheme.")))},e.prototype.generateNames=function(){this.names.viewport=this.options.generalPrefix.concat("-",this.options.viewportId),this.names.container=this.options.generalPrefix.concat("-",this.options.containerName)},e.prototype.checkForContainer=function(){return null!=document.getElementById(this.names.container)},e.prototype.getPosition=function(){return this.navigator.getPosition()},e.prototype.getIsReady=function(){return this.isReady},e.prototype.getHasStarted=function(){return this.hasStarted},e.prototype.getPaused=function(){return this.paused},e.prototype.getOption=function(t){return this.options[t]},e}(),c=new u;return c.VERSION="0.1.0",c.AUTHOR="einfachIrgendwer0815",c.LICENSE="MIT",c}));
//# sourceMappingURL=sintroduce.js.map
