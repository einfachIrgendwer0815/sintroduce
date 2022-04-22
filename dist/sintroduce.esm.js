/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var t,e=function(){return e=Object.assign||function(t){for(var e,o=1,n=arguments.length;o<n;o++)for(var i in e=arguments[o])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},e.apply(this,arguments)},o=function(){function t(){}return t.prototype.setupViewport=function(t){this.viewport=document.createElement("div"),this.viewport.id="sintroduce-viewport",t.appendChild(this.viewport)},t.prototype.copyContent=function(t){var e=this;Array.from(t.children).forEach((function(t){e.viewport.appendChild(t)})),t.remove()},t.prototype.getPosition=function(){return this.position},t.prototype.jumpTo=function(t){},t.prototype.jumpToHashLocPosition=function(){},t.prototype.setHashLoc=function(){},t}();!function(t){t.SimpleSlideshow="SimpleSlideshow"}(t||(t={}));var n={SimpleSlideshow:o},i={autoStart:!0,generalPrefix:"sintroduce",viewportId:"viewport",pastClass:"past",presentClass:"present",futureClass:"future",dataAttributePrefix:"data",presentationTheme:t.SimpleSlideshow};var r=function(){function o(){this.isReady=!1,this.hasStarted=!1,this.paused=!1}return o.prototype.initialize=function(o){this.options=function(t){var o=e({},i);for(var n in t)typeof t[n]==typeof i[n]&&(o[n]=t[n]);return o}(o),this.checkForContainer()&&(null!=t[this.options.presentationTheme]?(this.theme=new n[this.options.presentationTheme],this.theme.setupViewport(document.body),this.theme.copyContent(document.getElementById("sintroduce-container")),this.isReady=!0):console.error("'".concat(this.options.presentationTheme,"' is not a valid presentationTheme.")))},o.prototype.checkForContainer=function(){return null!=document.getElementById("sintroduce-container")},o.prototype.getIsReady=function(){return this.isReady},o.prototype.getHasStarted=function(){return this.hasStarted},o.prototype.getPaused=function(){return this.paused},o.prototype.getOption=function(t){return this.options[t]},o}(),s=new r;s.VERSION="0.1.0",s.AUTHOR="einfachIrgendwer0815",s.LICENSE="MIT";export{s as default};
//# sourceMappingURL=sintroduce.esm.js.map
