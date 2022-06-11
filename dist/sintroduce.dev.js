/*!
* MIT licensed
*
* Copyright (C) 2022 einfachIrgendwer0815
*/
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).Sintroduce={})}(this,(function(t){"use strict";var e=function(){return e=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var s in e=arguments[n])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t},e.apply(this,arguments)};function n(t,e,n){if(n||2===arguments.length)for(var i,s=0,o=e.length;s<o;s++)!i&&s in e||(i||(i=Array.prototype.slice.call(e,0,s)),i[s]=e[s]);return t.concat(i||Array.prototype.slice.call(e))}var i,s=function(t){this.action="present",this.data={element:t}},o=function(){function t(t){this.elements=void 0===t?new Array:t}return t.prototype.toArray=function(){return n([],this.elements,!0)},t.prototype.includes=function(t){return this.elements.includes(t)},t.prototype.append=function(t){this.elements.push(t)},t.prototype.remove=function(){if(0!=this.elements.length)return this.elements.splice(0,1)[0]},t.prototype.reverseAppend=function(t){this.elements=[t].concat(this.elements)},t.prototype.reverseRemove=function(){if(0!=this.elements.length)return this.elements.pop()},t.prototype.clear=function(){this.elements=new Array},t.prototype.copy=function(){return new t(n([],this.elements,!0))},t.prototype.peek=function(){if(0!=this.elements.length)return this.elements[0]},t.prototype.length=function(){return this.elements.length},t}(),r=function(){function t(t){this.names=t,this.timeStatedElements=[],this.package={id:0,name:"",instructions:new o}}return t.prototype.feedData=function(t){this.package.instructions.clear();for(var e=0;e<t.children.length;e++){var n=t.children[e];if("SECTION"==n.tagName){var i=n.getElementsByClassName("fragment");this.package.instructions.append(new s(n));for(var o=0;o<i.length;o++)this.package.instructions.append(new s(i[o])),this.timeStatedElements.push(i[o]);this.timeStatedElements.push(n)}}},t.prototype.getListOfTimeStatedObjects=function(){return n([],this.timeStatedElements,!0)},t.prototype.getNavigationPackages=function(){return[{id:0,name:"",instructions:this.package.instructions.copy()}]},t.prototype.getFirstPackageId=function(){return 0},t}(),a=function(){function t(t){this.names=t,this.mapper=new r(this.names)}return t.prototype.initialize=function(t,e){this.setupViewport(t),this.copyContent(e)},t.prototype.setupViewport=function(t){this.viewport=document.createElement("div"),this.viewport.id=this.names.viewport,t.appendChild(this.viewport)},t.prototype.copyContent=function(t){var e=this;Array.from(t.children).forEach((function(t){e.viewport.appendChild(t)})),t.remove()},t.prototype.getViewport=function(){return this.viewport},t.prototype.getMapper=function(){return this.mapper},t}();!function(t){t.SimpleSlideshow="SimpleSlideshow"}(i||(i={}));var p={SimpleSlideshow:a},u={autoStart:!0,generalPrefix:"sintroduce",viewportId:"viewport",containerName:"container",pastClass:"past",presentClass:"present",futureClass:"future",dataAttributePrefix:"data",presentationTheme:i.SimpleSlideshow};var h=function(){function t(t){this.elements=void 0!==t?t:new Array}return t.prototype.push=function(t){this.elements.push(t)},t.prototype.pop=function(){if(0!=this.elements.length){var t=this.elements.at(-1);return this.elements.pop(),t}},t.prototype.peek=function(){if(0!=this.elements.length)return this.elements.at(-1)},t.prototype.toArray=function(){return n([],this.elements,!0)},t.prototype.includes=function(t){return this.elements.includes(t)},t.prototype.clear=function(){this.elements=new Array},t.prototype.copy=function(){return new t(n([],this.elements,!0))},t.prototype.length=function(){return this.elements.length},t}(),c={present:{normal:function(t,e,n){if(e.length()>0){for(var i=function(t,e){var n=[],i=t.parentElement,s=t.parentElement.id==e.viewport;for(;!s;)"1"==i.getAttribute("time-stated")&&n.push(i),i.parentElement.id==e.viewport&&(s=!0),i=i.parentElement;return n}(t.data.element,n);e.length()>0&&!i.includes(e.peek());){f(e.pop())}for(var s=i.length-1;s>=0;s--)e.includes(i[s])||(m(i[s]),e.push(i[s]))}m(t.data.element),e.push(t.data.element)},reverse:function(t,e,n){}}};function l(t,e,n,i){void 0===i&&(i="normal"),null!=c[t.action]&&c[t.action][i](t,e,n)}function f(t){t.classList.remove("present"),t.classList.remove("future"),t.classList.add("past")}function m(t){t.classList.remove("past"),t.classList.remove("future"),t.classList.add("present")}var d=function(){function t(t,e,n){this.viewport=t,this.mapper=e,this.names=n,this.position=new Array,this.mapper.feedData(t),this.packages=this.mapper.getNavigationPackages(),this.loadPackage(this.mapper.getFirstPackageId()),this.setInitialClasses()}return t.prototype.setInitialClasses=function(){for(var t=this.mapper.getListOfTimeStatedObjects(),e=0;e<t.length;e++)t[e].classList.add("future"),t[e].setAttribute("time-stated","1")},t.prototype.loadPackage=function(t){for(var e,n=0;n<this.packages.length;n++)this.packages[n].id==t&&(e=this.packages[n]);null!=e&&(this.future=e.instructions,this.past=new h,this.present=new h)},t.prototype.next=function(){var t=this.future.remove();null!=t&&(l(t,this.present,this.names),this.past.push(t))},t.prototype.back=function(){var t=this.past.pop();null!=t&&(l(t,this.present,this.names,"reverse"),this.future.reverseAppend(t))},t.prototype.getPosition=function(){return this.position},t}(),y=function(){function t(){this.isReady=!1,this.hasStarted=!1,this.paused=!1,this.names={}}return t.prototype.initialize=function(t){this.options=function(t){var n=e({},u);for(var i in t)typeof t[i]==typeof u[i]&&(n[i]=t[i]);return n}(t),this.generateNames(),this.checkForContainer()&&(null!=i[this.options.presentationTheme]?(this.theme=new p[this.options.presentationTheme](this.names),this.theme.initialize(document.body,document.getElementById(this.names.container)),this.navigator=new d(this.theme.getViewport(),this.theme.getMapper(),this.names),this.navigator.next(),this.isReady=!0):console.error("'".concat(this.options.presentationTheme,"' is not a valid presentationTheme.")))},t.prototype.generateNames=function(){this.names.viewport=this.options.generalPrefix.concat("-",this.options.viewportId),this.names.container=this.options.generalPrefix.concat("-",this.options.containerName)},t.prototype.checkForContainer=function(){return null!=document.getElementById(this.names.container)},t.prototype.getPosition=function(){return this.navigator.getPosition()},t.prototype.getIsReady=function(){return this.isReady},t.prototype.getHasStarted=function(){return this.hasStarted},t.prototype.getPaused=function(){return this.paused},t.prototype.getOption=function(t){return this.options[t]},t}(),g=new y;g.VERSION="0.1.0-dev",g.AUTHOR="einfachIrgendwer0815",g.LICENSE="MIT",t.Queue=o,t.SetPresent=s,t.Sintro=y,t.Sintroduce=g,t.Stack=h,Object.defineProperty(t,"__esModule",{value:!0})}));
//# sourceMappingURL=sintroduce.dev.js.map
