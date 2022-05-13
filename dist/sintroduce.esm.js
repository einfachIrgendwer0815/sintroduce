/*!
* MIT licensed
*
* Copyright (C) 2022 einfachIrgendwer0815
*/
class t{constructor(t){this.action="present",this.data={element:t}}}class e{constructor(t){this.elements=void 0===t?new Array:t}toArray(){return[...this.elements]}append(t){this.elements.push(t)}remove(){if(0!=this.elements.length)return this.elements.splice(0,1)[0]}reverseAppend(t){this.elements=[t].concat(this.elements)}reverseRemove(){if(0!=this.elements.length)return this.elements.pop()}clear(){this.elements=new Array}}class s{constructor(t){this.names=t,this.timeStatedElements=[],this.instructions=new e}feedData(e){this.instructions.clear();for(var s=0;s<e.children.length;s++){var i=e.children[s];if("SECTION"==i.tagName){var n=i.getElementsByClassName("fragment");this.instructions.append(new t(i));for(var r=0;r<n.length;r++)this.instructions.append(new t(n[r])),this.timeStatedElements.push(n[r]);this.timeStatedElements.push(i)}}}getListOfTimeStatedObjects(){return this.timeStatedElements}getNavigatorInstructions(){return this.instructions}}var i;!function(t){t.SimpleSlideshow="SimpleSlideshow"}(i||(i={}));const n={SimpleSlideshow:class{constructor(t){this.names=t,this.mapper=new s(this.names)}initialize(t,e){this.setupViewport(t),this.copyContent(e)}setupViewport(t){this.viewport=document.createElement("div"),this.viewport.id=this.names.viewport,t.appendChild(this.viewport)}copyContent(t){Array.from(t.children).forEach((t=>{this.viewport.appendChild(t)})),t.remove()}getViewport(){return this.viewport}getMapper(){return this.mapper}}},r={autoStart:!0,generalPrefix:"sintroduce",viewportId:"viewport",containerName:"container",pastClass:"past",presentClass:"present",futureClass:"future",dataAttributePrefix:"data",presentationTheme:i.SimpleSlideshow};class a{constructor(t,e){this.viewport=t,this.mapper=e,this.position=new Array,this.mapper.feedData(t),this.future=this.mapper.getNavigatorInstructions(),this.setInitialClasses()}setInitialClasses(){for(var t=this.mapper.getListOfTimeStatedObjects(),e=0;e<t.length;e++)t[e].classList.add("future")}jumpToStart(){}getPosition(){return this.position}}var o=new class{constructor(){this.isReady=!1,this.hasStarted=!1,this.paused=!1,this.names={}}initialize(t){this.options=function(t){var e=Object.assign({},r);for(var s in t)typeof t[s]==typeof r[s]&&(e[s]=t[s]);return e}(t),this.generateNames(),this.checkForContainer()&&(null!=i[this.options.presentationTheme]?(this.theme=new n[this.options.presentationTheme](this.names),this.theme.initialize(document.body,document.getElementById(this.names.container)),this.navigator=new a(this.theme.getViewport(),this.theme.getMapper()),this.navigator.jumpToStart(),this.isReady=!0):console.error(`'${this.options.presentationTheme}' is not a valid presentationTheme.`))}generateNames(){this.names.viewport=this.options.generalPrefix.concat("-",this.options.viewportId),this.names.container=this.options.generalPrefix.concat("-",this.options.containerName)}checkForContainer(){return null!=document.getElementById(this.names.container)}getPosition(){return this.navigator.getPosition()}getIsReady(){return this.isReady}getHasStarted(){return this.hasStarted}getPaused(){return this.paused}getOption(t){return this.options[t]}};o.VERSION="0.1.0",o.AUTHOR="einfachIrgendwer0815",o.LICENSE="MIT";export{o as default};
//# sourceMappingURL=sintroduce.esm.js.map
