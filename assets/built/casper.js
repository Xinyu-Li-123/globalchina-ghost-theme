!function(e,t){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",t):"object"==typeof module&&module.exports?module.exports=t():e.EvEmitter=t()}("undefined"!=typeof window?window:this,function(){function e(){}var t=e.prototype;return t.on=function(e,t){if(e&&t){var i=this._events=this._events||{},e=i[e]=i[e]||[];return-1==e.indexOf(t)&&e.push(t),this}},t.once=function(e,t){if(e&&t){this.on(e,t);var i=this._onceEvents=this._onceEvents||{};return(i[e]=i[e]||{})[t]=!0,this}},t.off=function(e,t){e=this._events&&this._events[e];if(e&&e.length){t=e.indexOf(t);return-1!=t&&e.splice(t,1),this}},t.emitEvent=function(e,t){var i=this._events&&this._events[e];if(i&&i.length){i=i.slice(0),t=t||[];for(var n=this._onceEvents&&this._onceEvents[e],o=0;o<i.length;o++){var r=i[o];n&&n[r]&&(this.off(e,r),delete n[r]),r.apply(this,t)}return this}},t.allOff=function(){delete this._events,delete this._onceEvents},e}),function(t,i){"use strict";"function"==typeof define&&define.amd?define(["ev-emitter/ev-emitter"],function(e){return i(t,e)}):"object"==typeof module&&module.exports?module.exports=i(t,require("ev-emitter")):t.imagesLoaded=i(t,t.EvEmitter)}("undefined"!=typeof window?window:this,function(t,e){function r(e,t){for(var i in t)e[i]=t[i];return e}function s(e,t,i){if(!(this instanceof s))return new s(e,t,i);var n,o=e;return(o="string"==typeof e?document.querySelectorAll(e):o)?(this.elements=(n=o,Array.isArray(n)?n:"object"==typeof n&&"number"==typeof n.length?a.call(n):[n]),this.options=r({},this.options),"function"==typeof t?i=t:r(this.options,t),i&&this.on("always",i),this.getImages(),h&&(this.jqDeferred=new h.Deferred),void setTimeout(this.check.bind(this))):void d.error("Bad element for imagesLoaded "+(o||e))}function i(e){this.img=e}function n(e,t){this.url=e,this.element=t,this.img=new Image}var h=t.jQuery,d=t.console,a=Array.prototype.slice;(s.prototype=Object.create(e.prototype)).options={},s.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},s.prototype.addElementImages=function(e){"IMG"==e.nodeName&&this.addImage(e),!0===this.options.background&&this.addElementBackgroundImages(e);var t=e.nodeType;if(t&&c[t]){for(var i=e.querySelectorAll("img"),n=0;n<i.length;n++){var o=i[n];this.addImage(o)}if("string"==typeof this.options.background)for(var r=e.querySelectorAll(this.options.background),n=0;n<r.length;n++){var s=r[n];this.addElementBackgroundImages(s)}}};var c={1:!0,9:!0,11:!0};return s.prototype.addElementBackgroundImages=function(e){var t=getComputedStyle(e);if(t)for(var i=/url\((['"])?(.*?)\1\)/gi,n=i.exec(t.backgroundImage);null!==n;){var o=n&&n[2];o&&this.addBackground(o,e),n=i.exec(t.backgroundImage)}},s.prototype.addImage=function(e){e=new i(e);this.images.push(e)},s.prototype.addBackground=function(e,t){t=new n(e,t);this.images.push(t)},s.prototype.check=function(){function t(e,t,i){setTimeout(function(){n.progress(e,t,i)})}var n=this;return this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?void this.images.forEach(function(e){e.once("progress",t),e.check()}):void this.complete()},s.prototype.progress=function(e,t,i){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded,this.emitEvent("progress",[this,e,t]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,e),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&d&&d.log("progress: "+i,e,t)},s.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";this.isComplete=!0,this.emitEvent(e,[this]),this.emitEvent("always",[this]),this.jqDeferred&&(e=this.hasAnyBroken?"reject":"resolve",this.jqDeferred[e](this))},(i.prototype=Object.create(e.prototype)).check=function(){return this.getIsImageComplete()?void this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),void(this.proxyImage.src=this.img.src))},i.prototype.getIsImageComplete=function(){return this.img.complete&&this.img.naturalWidth},i.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.img,t])},i.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},i.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},i.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},i.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},(n.prototype=Object.create(i.prototype)).check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url,this.getIsImageComplete()&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},n.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},n.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.element,t])},(s.makeJQueryPlugin=function(e){(e=e||t.jQuery)&&((h=e).fn.imagesLoaded=function(e,t){return new s(this,e,t).jqDeferred.promise(h(this))})})(),s}),function(r){"use strict";r.fn.fitVids=function(e){var t,i,o={customSelector:null,ignore:null};return document.getElementById("fit-vids-style")||(t=document.head||document.getElementsByTagName("head")[0],(i=document.createElement("div")).innerHTML='<p>x</p><style id="fit-vids-style">.fluid-width-video-container{flex-grow: 1;width:100%;}.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>',t.appendChild(i.childNodes[1])),e&&r.extend(o,e),this.each(function(){var e=['iframe[src*="player.vimeo.com"]','iframe[src*="youtube.com"]','iframe[src*="youtube-nocookie.com"]','iframe[src*="kickstarter.com"][src*="video.html"]',"object","embed"];o.customSelector&&e.push(o.customSelector);var n=".fitvidsignore";o.ignore&&(n=n+", "+o.ignore);e=r(this).find(e.join(","));(e=(e=e.not("object object")).not(n)).each(function(){var e,t,i=r(this);0<i.parents(n).length||"embed"===this.tagName.toLowerCase()&&i.parent("object").length||i.parent(".fluid-width-video-wrapper").length||(i.css("height")||i.css("width")||!isNaN(i.attr("height"))&&!isNaN(i.attr("width"))||(i.attr("height",9),i.attr("width",16)),e=("object"===this.tagName.toLowerCase()||i.attr("height")&&!isNaN(parseInt(i.attr("height"),10))?parseInt(i.attr("height"),10):i.height())/(isNaN(parseInt(i.attr("width"),10))?i.width():parseInt(i.attr("width"),10)),i.attr("name")||(t="fitvid"+r.fn.fitVids._count,i.attr("name",t),r.fn.fitVids._count++),i.wrap('<div class="fluid-width-video-container"><div class="fluid-width-video-wrapper"></div></div>').parent(".fluid-width-video-wrapper").css("padding-top",100*e+"%"),i.removeAttr("height").removeAttr("width"))})})},r.fn.fitVids._count=0}(window.jQuery||window.Zepto),function(t,i){var n,o,r,s,h,d,a,c;function u(){if(404===this.status)return t.removeEventListener("scroll",l),void t.removeEventListener("resize",p);this.response.querySelectorAll("article.post-card").forEach(function(e){o.appendChild(i.importNode(e,!0))});var e=this.response.querySelector("link[rel=next]");e?n.href=e.href:(t.removeEventListener("scroll",l),t.removeEventListener("resize",p)),c=i.documentElement.scrollHeight,h=s=!1}function e(){var e;h||(d+a<=c-r?s=!1:(h=!0,(e=new t.XMLHttpRequest).responseType="document",e.addEventListener("load",u),e.open("GET",n.href),e.send(null)))}function m(){s||t.requestAnimationFrame(e),s=!0}function l(){d=t.scrollY,m()}function p(){a=t.innerHeight,c=i.documentElement.scrollHeight,m()}i.documentElement.classList.contains("no-infinite-scroll")||(!(n=i.querySelector("link[rel=next]"))||(o=i.querySelector(".post-feed"))&&(h=s=!(r=300),d=t.scrollY,a=t.innerHeight,c=i.documentElement.scrollHeight,t.addEventListener("scroll",l,{passive:!0}),t.addEventListener("resize",p),m()))}(window,document),function(){alert("load megamenu.js"),$("#gh-head");const i=$(".gh-head-menu .nav-item");i.each(function(e,t){$(t).css("z-index",i.length-e)})}();
//# sourceMappingURL=casper.js.map