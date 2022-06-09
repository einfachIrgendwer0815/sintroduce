/*!
* MIT licensed
*
* Copyright (C) 2022 einfachIrgendwer0815
*/
class e{constructor(e){this.action="present",this.data={element:e}}}class t{constructor(e){this.elements=void 0===e?new Array:e}toArray(){return[...this.elements]}append(e){this.elements.push(e)}remove(){if(0!=this.elements.length)return this.elements.splice(0,1)[0]}reverseAppend(e){this.elements=[e].concat(this.elements)}reverseRemove(){if(0!=this.elements.length)return this.elements.pop()}clear(){this.elements=new Array}copy(){return new t([...this.elements])}peek(){if(0!=this.elements.length)return this.elements[0]}length(){return this.elements.length}}class s{constructor(e){this.names=e,this.timeStatedElements=[],this.package={id:0,name:"",instructions:new t}}feedData(t){this.package.instructions.clear();for(var s=0;s<t.children.length;s++){var i=t.children[s];if("SECTION"==i.tagName){var n=i.getElementsByClassName("fragment");this.package.instructions.append(new e(i));for(var r=0;r<n.length;r++)this.package.instructions.append(new e(n[r])),this.timeStatedElements.push(n[r]);this.timeStatedElements.push(i)}}}getListOfTimeStatedObjects(){return[...this.timeStatedElements]}getNavigationPackages(){return[{id:0,name:"",instructions:this.package.instructions.copy()}]}getFirstPackageId(){return 0}}var i;!function(e){e.SimpleSlideshow="SimpleSlideshow"}(i||(i={}));const n={SimpleSlideshow:class{constructor(e){this.names=e,this.mapper=new s(this.names)}initialize(e,t){this.setupViewport(e),this.copyContent(t)}setupViewport(e){this.viewport=document.createElement("div"),this.viewport.id=this.names.viewport,e.appendChild(this.viewport)}copyContent(e){Array.from(e.children).forEach((e=>{this.viewport.appendChild(e)})),e.remove()}getViewport(){return this.viewport}getMapper(){return this.mapper}}},r={autoStart:!0,generalPrefix:"sintroduce",viewportId:"viewport",containerName:"container",pastClass:"past",presentClass:"present",futureClass:"future",dataAttributePrefix:"data",presentationTheme:i.SimpleSlideshow};class a{constructor(e){this.elements=void 0!==e?e:new Array}push(e){this.elements.push(e)}pop(){if(0!=this.elements.length){var e=this.elements.at(-1);return this.elements.pop(),e}}peek(){if(0!=this.elements.length)return this.elements.at(-1)}toArray(){return[...this.elements]}clear(){this.elements=new Array}copy(){return new a([...this.elements])}length(){return this.elements.length}}const o={present:{normal:function(e){e.data.element.classList.remove("future"),e.data.element.classList.add("present")},reverse:function(e){e.data.element.classList.remove("present"),e.data.element.classList.add("future")}}};class h{constructor(e,t){this.viewport=e,this.mapper=t,this.position=new Array,this.mapper.feedData(e),this.packages=this.mapper.getNavigationPackages(),this.loadPackage(this.mapper.getFirstPackageId()),this.setInitialClasses()}setInitialClasses(){for(var e=this.mapper.getListOfTimeStatedObjects(),t=0;t<e.length;t++)e[t].classList.add("future")}loadPackage(e){var s;for(let t=0;t<this.packages.length;t++)this.packages[t].id==e&&(s=this.packages[t]);null!=s&&(this.future=s.instructions,this.past=new t,this.present=new a)}jumpToStart(){var e=this.future.remove();!function(e,t="normal"){null!=o[e.action]&&o[e.action][t](e)}(e),this.past.append(e)}getPosition(){return this.position}}class p{constructor(){this.isReady=!1,this.hasStarted=!1,this.paused=!1,this.names={}}initialize(e){this.options=function(e){var t=Object.assign({},r);for(var s in e)typeof e[s]==typeof r[s]&&(t[s]=e[s]);return t}(e),this.generateNames(),this.checkForContainer()&&(null!=i[this.options.presentationTheme]?(this.theme=new n[this.options.presentationTheme](this.names),this.theme.initialize(document.body,document.getElementById(this.names.container)),this.navigator=new h(this.theme.getViewport(),this.theme.getMapper()),this.navigator.jumpToStart(),this.isReady=!0):console.error(`'${this.options.presentationTheme}' is not a valid presentationTheme.`))}generateNames(){this.names.viewport=this.options.generalPrefix.concat("-",this.options.viewportId),this.names.container=this.options.generalPrefix.concat("-",this.options.containerName)}checkForContainer(){return null!=document.getElementById(this.names.container)}getPosition(){return this.navigator.getPosition()}getIsReady(){return this.isReady}getHasStarted(){return this.hasStarted}getPaused(){return this.paused}getOption(e){return this.options[e]}}var l=new p;l.VERSION="0.1.0-dev",l.AUTHOR="einfachIrgendwer0815",l.LICENSE="MIT";export{t as Queue,e as SetPresent,p as Sintro,l as Sintroduce,a as Stack};
//# sourceMappingURL=sintroduce.esm.dev.js.map
