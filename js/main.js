function loader(){"use strict";setTimeout(function(){$("#loader-wrapper").fadeOut()},1500)}function scroll_top(){"use strict";var t=$(".cd-top");$(window).scroll(function(){$(this).scrollTop()>300?t.addClass("cd-is-visible"):t.removeClass("cd-is-visible cd-fade-out"),$(this).scrollTop()>1200&&t.addClass("cd-fade-out")}),t.on("click",function(t){t.preventDefault(),$("body,html").animate({scrollTop:0},700)})}function accordion(){}function team_carousel(){$(".team-carousel").slick({slidesToShow:3,slidesToScroll:1,autoplay:!1,autoplaySpeed:1500,arrows:!1,dots:!1,pauseOnHover:!1,responsive:[{breakpoint:992,settings:{slidesToShow:2}},{breakpoint:650,settings:{slidesToShow:1}}]})}function clients_carousel(){$(".clients-carousel").slick({slidesToShow:5,slidesToScroll:1,autoplay:!0,autoplaySpeed:1500,arrows:!1,dots:!1,pauseOnHover:!1,responsive:[{breakpoint:1200,settings:{slidesToShow:4}},{breakpoint:800,settings:{slidesToShow:3}},{breakpoint:600,settings:{slidesToShow:2}}]})}function testimonial_slider(){$("#testimonial-slider").owlCarousel({items:1,itemsDesktop:[1e3,1],itemsDesktopSmall:[979,1],itemsTablet:[768,1],pagination:!0,navigation:!1,slideSpeed:1e3,singleItem:!1,navigationText:["",""],autoPlay:!0})}function gallery_carousel(){$(".gallery-carousel").slick({slidesToShow:4,slidesToScroll:1,autoplay:!0,autoplaySpeed:1500,arrows:!1,dots:!1,pauseOnHover:!1,responsive:[{breakpoint:992,settings:{slidesToShow:2}},{breakpoint:650,settings:{slidesToShow:1}}]})}function magnific_popup(){$(".image-popup-vertical-fit").magnificPopup({type:"image",mainClass:"mfp-with-zoom",gallery:{enabled:!0},zoom:{enabled:!0,duration:300,easing:"ease-in-out",opener:function(t){return t.is("img")?t:t.find("img")}}})}function video_popup(){var t=$('<div class="btn-wrapper text-center"><a href="#" class="btn load-more">Load More</a></div>'),e=$(".youtube-popup[data-listnum]"),a=e.length,o=2,s=0;function i(t){return e.filter(function(e){if($(this).attr("data-listnum")==t)return!0})}function r(){var e=s+o;for(e>=a&&(e=a,t.hide());s<e;){var r=i(s+1);r&&r.fadeIn(),s++}}e.length>o&&(t.on("click",function(t){t.preventDefault(),r()}),e.closest(".salvattore-grid").after(t)),$(".popup-youtube").magnificPopup({type:"iframe",removalDelay:160,preloader:!1,fixedContentPos:!1,iframe:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe></div>',patterns:{youtube:{index:"youtube.com/",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1&rel=0&showinfo=0"}},srcAction:"iframe_src"}}),r()}function counter_up(){"use strict";$.fn.counterUp=function(t){var e,a=$.extend({time:400,delay:10,offset:100,beginAt:0,formatter:!1,context:"window",callback:function(){}},t);return this.each(function(){var t=$(this),o={time:$(this).data("counterup-time")||a.time,delay:$(this).data("counterup-delay")||a.delay,offset:$(this).data("counterup-offset")||a.offset,beginAt:$(this).data("counterup-beginat")||a.beginAt,context:$(this).data("counterup-context")||a.context};t.waypoint(function(s){!function(){var s=[],i=o.time/o.delay,r=t.attr("data-num")?t.attr("data-num"):t.text(),n=/[0-9]+,[0-9]+/.test(r),l=((r=r.replace(/,/g,"")).split(".")[1]||[]).length;o.beginAt>r&&(o.beginAt=r);var d=/[0-9]+:[0-9]+:[0-9]+/.test(r);if(d){var c=r.split(":"),u=1;for(e=0;c.length>0;)e+=u*parseInt(c.pop(),10),u*=60}for(var p=i;p>=o.beginAt/r*i;p--){var f=parseFloat(r/i*p).toFixed(l);if(d){f=parseInt(e/i*p);var h=parseInt(f/3600)%24,m=parseInt(f/60)%60,v=parseInt(f%60,10);f=(h<10?"0"+h:h)+":"+(m<10?"0"+m:m)+":"+(v<10?"0"+v:v)}if(n)for(;/(\d+)(\d{3})/.test(f.toString());)f=f.toString().replace(/(\d+)(\d{3})/,"$1,$2");a.formatter&&(f=a.formatter.call(this,f)),s.unshift(f)}t.data("counterup-nums",s),t.text(o.beginAt);t.data("counterup-func",function(){t.data("counterup-nums")?(t.html(t.data("counterup-nums").shift()),t.data("counterup-nums").length?setTimeout(t.data("counterup-func"),o.delay):(t.data("counterup-nums",null),t.data("counterup-func",null),a.callback.call(this))):a.callback.call(this)}),setTimeout(t.data("counterup-func"),o.delay)}(),this.destroy()},{offset:o.offset+"%",context:o.context})})},jQuery}jQuery(document).ready(function(){"use strict";loader(),scroll_top(),counter_up(),magnific_popup(),video_popup(),accordion(),team_carousel(),clients_carousel(),testimonial_slider(),gallery_carousel(),services_carousel(),team_carousel_alt(),grid_carousel_alt(),news_carousel_alt(),projects_carousel(),welding_carousel(),testimonial_carousel()}),$(".accordion > li:eq(0) a").addClass("active").next().slideDown(),$(".accordion a").click(function(t){var e=$(this).closest("li").find("p");$(this).closest(".accordion").find("p").not(e).slideUp(),$(this).hasClass("active")?$(this).removeClass("active"):($(this).closest(".accordion").find("a.active").removeClass("active"),$(this).addClass("active")),e.stop(!1,!0).slideToggle(),t.preventDefault()}),jQuery,jQuery(document).ready(function(t){t(".counter").counterUp({delay:10,time:1e3})}),$(document).on("mousemove",function(t){$(".light").css({left:t.pageX-300,top:t.pageY-300})});var el=$(".js-tilt-container");el.on("mousemove",function(t){var e=$(this).offset(),a=e.left,o=e.top,s=t.pageX-a,i=t.pageY-o,r=$(this).width()/2-s,n=$(this).height()/2-i;$(this).css("transform","perspective(500px) rotateX("+n/40+"deg) rotateY("+-r/40+"deg) translateZ(10px)");var l=Math.sign(r)>0?-Math.abs(r):Math.abs(r);$(this).find(".js-perspective-neg").css("transform","translateY("+n/10+"px) translateX("+-l/10+"px) scale(1.15)"),$(this).removeClass("leave")}),el.on("mouseleave",function(){$(this).addClass("leave")}),$(function(){var t=$("#kehl-grid").isotope({itemSelector:".grid-box",transitionDuration:"0.5s"});$(".filter-container li").click(function(e){var a=$(this);e.preventDefault(),$(".filter li").removeClass("active"),a.addClass("active");var o=a.attr("data-filter");t.isotope({filter:o})})});var $grid=$(".grid").imagesLoaded(function(){$grid.masonry({itemSelector:".grid-box",percentPosition:!0,columnWidth:".grid-sizer"})});function services_carousel(){$(".grid-carousel").slick({slidesToShow:3,slidesToScroll:1,autoplay:!0,autoplaySpeed:1500,arrows:!1,dots:!1,pauseOnHover:!1,responsive:[{breakpoint:1500,settings:{slidesToShow:2}},{breakpoint:650,settings:{slidesToShow:1}}]})}function team_carousel_alt(){$(".team-carousel-alt").slick({slidesToShow:3,slidesToScroll:1,autoplay:!1,autoplaySpeed:1500,arrows:!1,dots:!1,pauseOnHover:!1,responsive:[{breakpoint:992,settings:{slidesToShow:2}},{breakpoint:650,settings:{slidesToShow:1}}]})}function grid_carousel_alt(){$(".services-carousel").slick({slidesToShow:3,slidesToScroll:1,autoplay:!0,autoplaySpeed:1500,arrows:!1,dots:!1,pauseOnHover:!1,responsive:[{breakpoint:1200,settings:{slidesToShow:2}},{breakpoint:768,settings:{slidesToShow:1}}]})}function news_carousel_alt(){$(".news-carousel").slick({slidesToShow:3,slidesToScroll:1,autoplay:!1,autoplaySpeed:1500,arrows:!1,dots:!1,pauseOnHover:!1,responsive:[{breakpoint:1200,settings:{slidesToShow:2}},{breakpoint:768,settings:{slidesToShow:1}}]})}function projects_carousel(){$(".projects-carousel").slick({slidesToShow:3,slidesToScroll:1,autoplay:!1,autoplaySpeed:1500,arrows:!1,dots:!1,pauseOnHover:!1,responsive:[{breakpoint:1200,settings:{slidesToShow:2}},{breakpoint:768,settings:{slidesToShow:1}}]})}function welding_carousel(){$(".welding-carousel").slick({slidesToShow:3,slidesToScroll:1,autoplay:!0,autoplaySpeed:1500,arrows:!1,dots:!1,pauseOnHover:!1,responsive:[{breakpoint:1200,settings:{slidesToShow:2}},{breakpoint:700,settings:{slidesToShow:1}}]})}function testimonial_carousel(){$("#testimonial-carousel").owlCarousel({items:2,itemsDesktop:[1e3,2],itemsDesktopSmall:[992,2],itemsTablet:[750,1],pagination:!0,navigation:!1,slideSpeed:1e3,singleItem:!1,navigationText:["",""],autoPlay:!0})}$(function(){$("#contact-form").validator(),$("#contact-form").on("submit",function(t){if(!t.isDefaultPrevented()){return $.ajax({type:"POST",url:"contact.php",data:$(this).serialize(),success:function(t){var e="alert-"+t.type,a=t.message,o='<div class="alert '+e+' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>'+a+"</div>";e&&a&&($("#contact-form").find(".messages").html(o),$("#contact-form")[0].reset())}}),!1}})}),function(t){function e(e){return e.is('[type="checkbox"]')?e.prop("checked"):e.is('[type="radio"]')?!!t('[name="'+e.attr("name")+'"]:checked').length:e.val()}var a=function(o,s){this.options=s,this.validators=t.extend({},a.VALIDATORS,s.custom),this.$element=t(o),this.$btn=t('button[type="submit"], input[type="submit"]').filter('[form="'+this.$element.attr("id")+'"]').add(this.$element.find('input[type="submit"], button[type="submit"]')),this.update(),this.$element.on("input.bs.validator change.bs.validator focusout.bs.validator",t.proxy(this.onInput,this)),this.$element.on("submit.bs.validator",t.proxy(this.onSubmit,this)),this.$element.on("reset.bs.validator",t.proxy(this.reset,this)),this.$element.find("[data-match]").each(function(){var a=t(this),o=a.data("match");t(o).on("input.bs.validator",function(t){e(a)&&a.trigger("input.bs.validator")})}),this.$inputs.filter(function(){return e(t(this))}).trigger("focusout"),this.$element.attr("novalidate",!0),this.toggleSubmit()};function o(e){return this.each(function(){var o=t(this),s=t.extend({},a.DEFAULTS,o.data(),"object"==typeof e&&e),i=o.data("bs.validator");(i||"destroy"!=e)&&(i||o.data("bs.validator",i=new a(this,s)),"string"==typeof e&&i[e]())})}a.VERSION="0.11.5",a.INPUT_SELECTOR=':input:not([type="hidden"], [type="submit"], [type="reset"], button)',a.FOCUS_OFFSET=20,a.DEFAULTS={delay:500,html:!1,disable:!0,focus:!0,custom:{},errors:{match:"Does not match",minlength:"Not long enough"},feedback:{success:"glyphicon-ok",error:"glyphicon-remove"}},a.VALIDATORS={native:function(t){var e=t[0];if(e.checkValidity)return!e.checkValidity()&&!e.validity.valid&&(e.validationMessage||"error!")},match:function(e){var o=e.data("match");return e.val()!==t(o).val()&&a.DEFAULTS.errors.match},minlength:function(t){var e=t.data("minlength");return t.val().length<e&&a.DEFAULTS.errors.minlength}},a.prototype.update=function(){return this.$inputs=this.$element.find(a.INPUT_SELECTOR).add(this.$element.find('[data-validate="true"]')).not(this.$element.find('[data-validate="false"]')),this},a.prototype.onInput=function(e){var a=this,o=t(e.target),s="focusout"!==e.type;this.$inputs.is(o)&&this.validateInput(o,s).done(function(){a.toggleSubmit()})},a.prototype.validateInput=function(a,o){e(a);var s=a.data("bs.validator.errors");a.is('[type="radio"]')&&(a=this.$element.find('input[name="'+a.attr("name")+'"]'));var i=t.Event("validate.bs.validator",{relatedTarget:a[0]});if(this.$element.trigger(i),!i.isDefaultPrevented()){var r=this;return this.runValidators(a).done(function(e){a.data("bs.validator.errors",e),e.length?o?r.defer(a,r.showErrors):r.showErrors(a):r.clearErrors(a),s&&e.toString()===s.toString()||(i=e.length?t.Event("invalid.bs.validator",{relatedTarget:a[0],detail:e}):t.Event("valid.bs.validator",{relatedTarget:a[0],detail:s}),r.$element.trigger(i)),r.toggleSubmit(),r.$element.trigger(t.Event("validated.bs.validator",{relatedTarget:a[0]}))})}},a.prototype.runValidators=function(a){var o=[],s=t.Deferred();function i(t){return function(t){return a.data(t+"-error")}(t)||((e=a[0].validity).typeMismatch?a.data("type-error"):e.patternMismatch?a.data("pattern-error"):e.stepMismatch?a.data("step-error"):e.rangeOverflow?a.data("max-error"):e.rangeUnderflow?a.data("min-error"):e.valueMissing?a.data("required-error"):null)||a.data("error");var e}return a.data("bs.validator.deferred")&&a.data("bs.validator.deferred").reject(),a.data("bs.validator.deferred",s),t.each(this.validators,t.proxy(function(t,s){var r=null;(e(a)||a.attr("required"))&&(a.data(t)||"native"==t)&&(r=s.call(this,a))&&(r=i(t)||r,!~o.indexOf(r)&&o.push(r))},this)),!o.length&&e(a)&&a.data("remote")?this.defer(a,function(){var r={};r[a.attr("name")]=e(a),t.get(a.data("remote"),r).fail(function(t,e,a){o.push(i("remote")||a)}).always(function(){s.resolve(o)})}):s.resolve(o),s.promise()},a.prototype.validate=function(){var e=this;return t.when(this.$inputs.map(function(a){return e.validateInput(t(this),!1)})).then(function(){e.toggleSubmit(),e.focusError()}),this},a.prototype.focusError=function(){if(this.options.focus){var e=this.$element.find(".has-error:first :input");0!==e.length&&(t("html, body").animate({scrollTop:e.offset().top-a.FOCUS_OFFSET},250),e.focus())}},a.prototype.showErrors=function(e){var a=this.options.html?"html":"text",o=e.data("bs.validator.errors"),s=e.closest(".form-group"),i=s.find(".help-block.with-errors"),r=s.find(".form-control-feedback");o.length&&(o=t("<ul/>").addClass("list-unstyled").append(t.map(o,function(e){return t("<li/>")[a](e)})),void 0===i.data("bs.validator.originalContent")&&i.data("bs.validator.originalContent",i.html()),i.empty().append(o),s.addClass("has-error has-danger"),s.hasClass("has-feedback")&&r.removeClass(this.options.feedback.success)&&r.addClass(this.options.feedback.error)&&s.removeClass("has-success"))},a.prototype.clearErrors=function(t){var a=t.closest(".form-group"),o=a.find(".help-block.with-errors"),s=a.find(".form-control-feedback");o.html(o.data("bs.validator.originalContent")),a.removeClass("has-error has-danger has-success"),a.hasClass("has-feedback")&&s.removeClass(this.options.feedback.error)&&s.removeClass(this.options.feedback.success)&&e(t)&&s.addClass(this.options.feedback.success)&&a.addClass("has-success")},a.prototype.hasErrors=function(){return!!this.$inputs.filter(function(){return!!(t(this).data("bs.validator.errors")||[]).length}).length},a.prototype.isIncomplete=function(){return!!this.$inputs.filter("[required]").filter(function(){var a=e(t(this));return!("string"==typeof a?t.trim(a):a)}).length},a.prototype.onSubmit=function(t){this.validate(),(this.isIncomplete()||this.hasErrors())&&t.preventDefault()},a.prototype.toggleSubmit=function(){this.options.disable&&this.$btn.toggleClass("disabled",this.isIncomplete()||this.hasErrors())},a.prototype.defer=function(e,a){if(a=t.proxy(a,this,e),!this.options.delay)return a();window.clearTimeout(e.data("bs.validator.timeout")),e.data("bs.validator.timeout",window.setTimeout(a,this.options.delay))},a.prototype.reset=function(){return this.$element.find(".form-control-feedback").removeClass(this.options.feedback.error).removeClass(this.options.feedback.success),this.$inputs.removeData(["bs.validator.errors","bs.validator.deferred"]).each(function(){var e=t(this),a=e.data("bs.validator.timeout");window.clearTimeout(a)&&e.removeData("bs.validator.timeout")}),this.$element.find(".help-block.with-errors").each(function(){var e=t(this),a=e.data("bs.validator.originalContent");e.removeData("bs.validator.originalContent").html(a)}),this.$btn.removeClass("disabled"),this.$element.find(".has-error, .has-danger, .has-success").removeClass("has-error has-danger has-success"),this},a.prototype.destroy=function(){return this.reset(),this.$element.removeAttr("novalidate").removeData("bs.validator").off(".bs.validator"),this.$inputs.off(".bs.validator"),this.options=null,this.validators=null,this.$element=null,this.$btn=null,this};var s=t.fn.validator;t.fn.validator=o,t.fn.validator.Constructor=a,t.fn.validator.noConflict=function(){return t.fn.validator=s,this},t(window).on("load",function(){t('form[data-toggle="validator"]').each(function(){var e=t(this);o.call(e,e.data())}),t(".carousel-item:first-of-type").addClass("active")})}(jQuery);