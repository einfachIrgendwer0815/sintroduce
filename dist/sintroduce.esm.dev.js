/*!
* MIT licensed
*
* Copyright (C) 2022 einfachIrgendwer0815
*/
class e{constructor(e){this.elements=void 0===e?new Array:e}toArray(){return[...this.elements]}append(e){this.elements.push(e)}remove(){0!=this.elements.length&&this.elements.splice(0,1)}reverseAppend(e){this.elements=[e].concat(this.elements)}reverseRemove(){0!=this.elements.length&&this.elements.pop()}}class t{generateNavigatorInstructions(t){return new e}}var i;!function(e){e.SimpleSlideshow="SimpleSlideshow"}(i||(i={}));const s={SimpleSlideshow:class{initialize(e,t){this.setupViewport(e),this.copyContent(t)}setupViewport(e){this.viewport=document.createElement("div"),this.viewport.id="sintroduce-viewport",e.appendChild(this.viewport)}copyContent(e){Array.from(e.children).forEach((e=>{this.viewport.appendChild(e)})),e.remove()}getViewport(){return this.viewport}getMapper(){return new t}}},r={autoStart:!0,generalPrefix:"sintroduce",viewportId:"viewport",pastClass:"past",presentClass:"present",futureClass:"future",dataAttributePrefix:"data",presentationTheme:i.SimpleSlideshow};class n{constructor(e,t){this.position=new Array,this.viewport=e,this.future=t.generateNavigatorInstructions(e)}jumpToStart(){}getPosition(){return this.position}}class o{constructor(){this.isReady=!1,this.hasStarted=!1,this.paused=!1}initialize(e){this.options=function(e){var t=Object.assign({},r);for(var i in e)typeof e[i]==typeof r[i]&&(t[i]=e[i]);return t}(e),this.checkForContainer()&&(null!=i[this.options.presentationTheme]?(this.theme=new s[this.options.presentationTheme],this.theme.initialize(document.body,document.getElementById("sintroduce-container")),this.navigator=new n(this.theme.getViewport(),this.theme.getMapper()),this.navigator.jumpToStart(),this.isReady=!0):console.error(`'${this.options.presentationTheme}' is not a valid presentationTheme.`))}checkForContainer(){return null!=document.getElementById("sintroduce-container")}getPosition(){return this.navigator.getPosition()}getIsReady(){return this.isReady}getHasStarted(){return this.hasStarted}getPaused(){return this.paused}getOption(e){return this.options[e]}}class a{constructor(e){this.elements=void 0!==e?e:new Array}push(e){this.elements.push(e)}pop(){if(0!=this.elements.length){var e=this.elements[-1];return this.elements.pop(),e}}toArray(){return[...this.elements]}}var h=new o;h.VERSION="0.1.0-dev",h.AUTHOR="einfachIrgendwer0815",h.LICENSE="MIT";export{e as Queue,o as Sintro,h as Sintroduce,a as Stack};
//# sourceMappingURL=sintroduce.esm.dev.js.map
