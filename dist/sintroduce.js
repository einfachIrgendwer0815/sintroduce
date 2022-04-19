!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).Sintroduce=e()}(this,(function(){"use strict";
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
    ***************************************************************************** */var t,e=function(){return e=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},e.apply(this,arguments)};!function(t){t.SimpleSlideshow="SimpleSlideshow"}(t||(t={}));var n={autoStart:!0,generalPrefix:"sintroduce",viewportId:"viewport",pastClass:"past",presentClass:"present",futureClass:"future",dataAttributePrefix:"data",presentationTheme:t.SimpleSlideshow};var i=function(){function t(){this.isReady=!1,this.hasStarted=!1,this.paused=!1}return t.prototype.initialize=function(t){this.options=function(t){var i=e({},n);for(var r in t)typeof t[r]==typeof n[r]&&(i[r]=t[r]);return i}(t)},t.prototype.getIsReady=function(){return this.isReady},t.prototype.getHasStarted=function(){return this.hasStarted},t.prototype.getPaused=function(){return this.paused},t.prototype.getOption=function(t){return this.options[t]},t}(),r=new i;return r.VERSION="0.1.0",r.AUTHOR="einfachIrgendwer0815",r.LICENSE="MIT",r}));
//# sourceMappingURL=sintroduce.js.map
