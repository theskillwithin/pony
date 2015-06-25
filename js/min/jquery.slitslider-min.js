!function($,t,i){"use strict";var s=$.event,e,n;e=s.special.debouncedresize={setup:function(){$(this).on("resize",e.handler)},teardown:function(){$(this).off("resize",e.handler)},handler:function(t,i){var a=this,o=arguments,l=function(){t.type="debouncedresize",s.dispatch.apply(a,o)};n&&clearTimeout(n),i?l():n=setTimeout(l,e.threshold)},threshold:20};var a=$(t),o=$(document),l=t.Modernizr;$.Slitslider=function(t,i){this.$elWrapper=$(i),this._init(t)},$.Slitslider.defaults={speed:800,optOpacity:!1,translateFactor:230,maxAngle:25,maxScale:2,autoplay:!0,keyboard:!0,interval:5500,onBeforeChange:function(t,i){return!1},onAfterChange:function(t,i){return!1}},$.Slitslider.prototype={_init:function(t){this.options=$.extend(!0,{},$.Slitslider.defaults,t),this.transEndEventNames={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd",transition:"transitionend"},this.transEndEventName=this.transEndEventNames[l.prefixed("transition")],this.support=l.csstransitions&&l.csstransforms3d,this.$el=this.$elWrapper.children(".sl-slider"),this.$slides=this.$el.children(".sl-slide").hide(),this.slidesCount=this.$slides.length,this.current=0,this.isAnimating=!1,this._getSize(),this._layout(),this._loadEvents(),this.options.autoplay&&this._startSlideshow()},_getSize:function(){this.size={width:this.$elWrapper.outerWidth(!0),height:this.$elWrapper.outerHeight(!0)}},_layout:function(){this.$slideWrapper=$('<div class="sl-slides-wrapper" />'),this.$slides.wrapAll(this.$slideWrapper).each(function(t){var i=$(this),s=i.data("orientation");i.addClass("sl-slide-"+s).children().wrapAll('<div class="sl-content-wrapper" />').wrapAll('<div class="sl-content" />')}),this._setSize(),this.$slides.eq(this.current).show()},_navigate:function(t,s){if(this.isAnimating||this.slidesCount<2)return!1;this.isAnimating=!0;var e=this,n=this.$slides.eq(this.current);s!==i?this.current=s:"next"===t?this.current=this.current<this.slidesCount-1?++this.current:0:"prev"===t&&(this.current=this.current>0?--this.current:this.slidesCount-1),this.options.onBeforeChange(n,this.current);var a=this.$slides.eq(this.current),o="next"===t?n:a,l=o.data(),r={};r.orientation=l.orientation||"horizontal",r.slice1angle=l.slice1Rotation||0,r.slice1scale=l.slice1Scale||1,r.slice2angle=l.slice2Rotation||0,r.slice2scale=l.slice2Scale||1,this._validateValues(r);var h="horizontal"===r.orientation?{marginTop:-this.size.height/2}:{marginLeft:-this.size.width/2},c={transform:"translate(0%,0%) rotate(0deg) scale(1)",opacity:1},d="horizontal"===r.orientation?{transform:"translateY(-"+this.options.translateFactor+"%) rotate("+r.slice1angle+"deg) scale("+r.slice1scale+")"}:{transform:"translateX(-"+this.options.translateFactor+"%) rotate("+r.slice1angle+"deg) scale("+r.slice1scale+")"},p="horizontal"===r.orientation?{transform:"translateY("+this.options.translateFactor+"%) rotate("+r.slice2angle+"deg) scale("+r.slice2scale+")"}:{transform:"translateX("+this.options.translateFactor+"%) rotate("+r.slice2angle+"deg) scale("+r.slice2scale+")"};this.options.optOpacity&&(d.opacity=0,p.opacity=0),n.removeClass("sl-trans-elems");var u={transition:"all "+this.options.speed+"ms ease-in-out"};o.css("z-index",this.slidesCount).find("div.sl-content-wrapper").wrap($('<div class="sl-content-slice" />').css(u)).parent().cond("prev"===t,function(){var t=this;this.css(d),setTimeout(function(){t.css(c)},50)},function(){var t=this;setTimeout(function(){t.css(d)},50)}).clone().appendTo(o).cond("prev"===t,function(){var i=this;this.css(p),setTimeout(function(){n.addClass("sl-trans-back-elems"),e.support?i.css(c).on(e.transEndEventName,function(){e._onEndNavigate(i,n,t)}):e._onEndNavigate(i,n,t)},50)},function(){var i=this;setTimeout(function(){a.addClass("sl-trans-elems"),e.support?i.css(p).on(e.transEndEventName,function(){e._onEndNavigate(i,n,t)}):e._onEndNavigate(i,n,t)},50)}).find("div.sl-content-wrapper").css(h),a.show()},_validateValues:function(t){(t.slice1angle>this.options.maxAngle||t.slice1angle<-this.options.maxAngle)&&(t.slice1angle=this.options.maxAngle),(t.slice2angle>this.options.maxAngle||t.slice2angle<-this.options.maxAngle)&&(t.slice2angle=this.options.maxAngle),(t.slice1scale>this.options.maxScale||t.slice1scale<=0)&&(t.slice1scale=this.options.maxScale),(t.slice2scale>this.options.maxScale||t.slice2scale<=0)&&(t.slice2scale=this.options.maxScale),"vertical"!==t.orientation&&"horizontal"!==t.orientation&&(t.orientation="horizontal")},_onEndNavigate:function(t,i,s){var e=t.parent(),n="sl-trans-elems sl-trans-back-elems";t.remove(),e.css("z-index",1).find("div.sl-content-wrapper").unwrap(),i.hide().removeClass(n),e.removeClass(n),this.isAnimating=!1,this.options.onAfterChange(e,this.current)},_setSize:function(){var t={width:this.size.width,height:this.size.height};this.$el.css(t).find("div.sl-content-wrapper").css(t)},_loadEvents:function(){var t=this;a.on("debouncedresize.slitslider",function(i){t._getSize(),t._setSize()}),this.options.keyboard&&o.on("keydown.slitslider",function(i){var s=i.keyCode||i.which,e={left:37,up:38,right:39,down:40};switch(s){case e.left:t._stopSlideshow(),t._navigate("prev");break;case e.right:t._stopSlideshow(),t._navigate("next")}})},_startSlideshow:function(){var t=this;this.slideshow=setTimeout(function(){t._navigate("next"),t.options.autoplay&&t._startSlideshow()},this.options.interval)},_stopSlideshow:function(){this.options.autoplay&&(clearTimeout(this.slideshow),this.isPlaying=!1,this.options.autoplay=!1)},_destroy:function(t){this.$el.off(".slitslider").removeData("slitslider"),a.off(".slitslider"),o.off(".slitslider"),this.$slides.each(function(t){var i=$(this),s=i.find("div.sl-content").children();s.appendTo(i),i.children("div.sl-content-wrapper").remove()}),this.$slides.unwrap(this.$slideWrapper).hide(),this.$slides.eq(0).show(),t&&t.call()},add:function(t,i){this.$slides=this.$slides.add(t);var s=this;t.each(function(t){var i=$(this),e=i.data("orientation");i.hide().addClass("sl-slide-"+e).children().wrapAll('<div class="sl-content-wrapper" />').wrapAll('<div class="sl-content" />').end().appendTo(s.$el.find("div.sl-slides-wrapper"))}),this._setSize(),this.slidesCount=this.$slides.length,i&&i.call($items)},next:function(){this._stopSlideshow(),this._navigate("next")},previous:function(){this._stopSlideshow(),this._navigate("prev")},jump:function(t){return t-=1,t===this.current||t>=this.slidesCount||0>t?!1:(this._stopSlideshow(),void this._navigate(t>this.current?"next":"prev",t))},play:function(){this.isPlaying||(this.isPlaying=!0,this._navigate("next"),this.options.autoplay=!0,this._startSlideshow())},pause:function(){this.isPlaying&&this._stopSlideshow()},isActive:function(){return this.isAnimating},destroy:function(t){this._destroy(t)}};var r=function(i){t.console&&t.console.error(i)};$.fn.slitslider=function(t){var i=$.data(this,"slitslider");if("string"==typeof t){var s=Array.prototype.slice.call(arguments,1);this.each(function(){return i?$.isFunction(i[t])&&"_"!==t.charAt(0)?void i[t].apply(i,s):void r("no such method '"+t+"' for slitslider self"):void r("cannot call methods on slitslider prior to initialization; attempted to call method '"+t+"'")})}else this.each(function(){i?i._init():i=$.data(this,"slitslider",new $.Slitslider(t,this))});return i}}(jQuery,window);