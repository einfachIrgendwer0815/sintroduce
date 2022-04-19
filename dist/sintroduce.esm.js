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
var t,e,r=function(){return r=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var a in e=arguments[r])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t},r.apply(this,arguments)};(t||(t={})).SimpleSlideshow="SimpleSlideshow",function(t){t.StandardDark="StandardDark"}(e||(e={}));var n={autoStart:!0,generalPrefix:"sintroduce",viewportId:"viewport",pastClass:"past",presentClass:"present",futureClass:"future",dataAttributePrefix:"data",presentationTheme:t.SimpleSlideshow,cssTheme:e.StandardDark};var a=function(){function t(){this.isReady=!1,this.hasStarted=!1,this.paused=!1}return t.prototype.initialize=function(t){this.options=function(t){var e=r({},n);for(var a in t)typeof t[a]==typeof n[a]&&(e[a]=t[a]);return e}(t)},t.prototype.getIsReady=function(){return this.isReady},t.prototype.getHasStarted=function(){return this.hasStarted},t.prototype.getPaused=function(){return this.paused},t.prototype.getOption=function(t){return this.options[t]},t}(),i=new a;i.VERSION="0.1.0",i.AUTHOR="einfachIrgendwer0815",i.LICENSE="MIT";export{i as default};
//# sourceMappingURL=sintroduce.esm.js.map
