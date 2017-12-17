/*!
 * quickpresence
 * simple html template for getting your presence online fast
 * https://arronmccrory.com/
 * @author Arron McCrory
 * @version 1.0
 * Copyright 2017. MIT licensed.
 */
(function ($, window, document, undefined) {

  'use strict';

  $(function () {
    // FastShell

      // Select all links with hashes
      $('body')
      // Remove links that don't actually link to anything
          .not('[href="#"]')
          .not('[href="#0"]')
          .on('click','a[href*="#"]', function(event) {
              // On-page links
              if (
                  location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                  &&
                  location.hostname == this.hostname
              ) {
                  // Figure out element to scroll to
                  var target = $(this.hash);
                  var moreOffset = $('header').height();

                  target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                  // Does a scroll target exist?
                  if (target.length) {
                      // Only prevent default if animation is actually gonna happen
                      event.preventDefault();
                      $('html, body').animate({
                          scrollTop: target.offset().top - moreOffset
                      }, 350, function() {
                          // Callback after animation
                          // Must change focus!
                          var $target = $(target);
                          $target.focus();
                          if ($target.is(":focus")) { // Checking if the target was focused
                              return false;
                          } else {
                              $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                              $target.focus(); // Set focus again
                          };
                      });
                  }
              }
          });


      var closeMobileNav = function() {
          $('.nav--mobile').addClass('slide-away');
          $('#mobileNavToggle').removeClass('toggled');

          setTimeout((function(){
              $('.nav--mobile').removeClass('active');
              $('.nav--mobile').removeClass('slide-away');
          }), 300);
      };

      // Mobile nav toggle
      $('#mobileNavToggle').click(function(){

          $(this).toggleClass('toggled');

          var _this = this;
          if($('.nav--mobile').hasClass('active')) {
              closeMobileNav();
              $('body').css('overflow', 'auto');


          } else {
              $('#mobileNavToggle').addClass('toggled');
              $('.nav--mobile').addClass('active');
              $('body').css('overflow', 'hidden');


          }
      });



      $('.nav--mobile').on('click', 'a', function(){
          closeMobileNav();
      });
      $('.logo').on('click', 'a', function(){
          closeMobileNav();
      });


      var buildMobileNavLinks = function(){

          var html = $('.nav--main').html();
          $('.nav--mobile').html(html);
      };

      buildMobileNavLinks();


      // var checkNavigationHideAtValue = function() {
      //   var attr = $('.nav--main').attr('data-hideat');
      //   if(attr !== typeof undefined && attr !== false){
      //       var hideAt = $('.nav--main').attr('data-hideat');
      //       var navStyle = ''+
      //           ''+
      //             '@media screen and (max-width: '+hideAt+'px) {'+
      //               '.nav--main { display: none; }' +
      //               '.mobile-nav-toggle { display: block; } '+
      //             '}'+
      //         ''+
      //       '';
      //
      //       var head = document.getElementsByTagName('head')[0];
      //       var styleTag = document.createElement('style');
      //       styleTag.type = 'text/css';
      //       if (styleTag.styleSheet){
      //           styleTag.styleSheet.cssText = navStyle;
      //       } else {
      //           styleTag.appendChild(document.createTextNode(navStyle));
      //       }
      //
      //       head.appendChild(styleTag);
      //   }
      // };

      //checkNavigationHideAtValue();

      var checkWindowSizeAndResize = function() {
          var navWidth = $('.nav--main').width();
          var headerWidth = $('.header').width();
          var logoWidth = $('.logo').width();

          if(navWidth > (headerWidth - logoWidth - 50)){
              if($('.nav--main').is(":visible")) {
                  $('.nav--main ').hide();
                  $('.mobile-nav-toggle').show();
              }
          }
          else {
              if(!$('.nav--main').is(":visible")) {
                  $('.nav--main').show();
                  $('.mobile-nav-toggle').hide();
              }
          }
      };

      window.onresize = function(event) {
          checkWindowSizeAndResize();
      };

      // Inital Window Size Check
      checkWindowSizeAndResize();

  });

})(jQuery, window, document);

/*!
 * quickpresence
 * simple html template for getting your presence online fast
 * https://arronmccrory.com/
 * @author Arron McCrory
 * @version 1.0
 * Copyright 2017. MIT licensed.
 */
/**
 * Pure JavaScript implementation of zoom.js.
 *
 * Original preamble:
 * zoom.js - It's the best way to zoom an image
 * @version v0.0.2
 * @link https://github.com/fat/zoom.js
 * @license MIT
 *
 * This is a fork of the original zoom.js implementation by @fat.
 * Copyrights for the original project are held by @fat. All other copyright
 * for changes in the fork are held by Nishanth Shanmugham.
 *
 * Copyright (c) 2013 @fat
 * The MIT License. Copyright © 2016 Nishanth Shanmugham.
 */
(function() {
    "use strict";
    var _createClass = function() {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        return function(Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    (function(modules) {
        var installedModules = {};
        function __webpack_require__(moduleId) {
            if (installedModules[moduleId]) return installedModules[moduleId].exports;
            var module = installedModules[moduleId] = {
                i: moduleId,
                l: false,
                exports: {}
            };
            modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
            module.l = true;
            return module.exports;
        }
        __webpack_require__.m = modules;
        __webpack_require__.c = installedModules;
        __webpack_require__.i = function(value) {
            return value;
        };
        __webpack_require__.d = function(exports, name, getter) {
            if (!__webpack_require__.o(exports, name)) {
                Object.defineProperty(exports, name, {
                    configurable: false,
                    enumerable: true,
                    get: getter
                });
            }
        };
        __webpack_require__.n = function(module) {
            var getter = module && module.__esModule ? function getDefault() {
                return module["default"];
            } : function getModuleExports() {
                return module;
            };
            __webpack_require__.d(getter, "a", getter);
            return getter;
        };
        __webpack_require__.o = function(object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
        };
        __webpack_require__.p = "";
        return __webpack_require__(__webpack_require__.s = 3);
    })([ function(module, exports, __webpack_require__) {
        "use strict";
        __webpack_require__.d(exports, "a", function() {
            return windowWidth;
        });
        __webpack_require__.d(exports, "b", function() {
            return windowHeight;
        });
        __webpack_require__.d(exports, "c", function() {
            return elemOffset;
        });
        __webpack_require__.d(exports, "d", function() {
            return once;
        });
        var windowWidth = function windowWidth() {
            return document.documentElement.clientWidth;
        };
        var windowHeight = function windowHeight() {
            return document.documentElement.clientHeight;
        };
        var elemOffset = function elemOffset(elem) {
            var rect = elem.getBoundingClientRect();
            var docElem = document.documentElement;
            var win = window;
            return {
                top: rect.top + win.pageYOffset - docElem.clientTop,
                left: rect.left + win.pageXOffset - docElem.clientLeft
            };
        };
        var once = function once(elem, type, handler) {
            var fn = function fn(e) {
                e.target.removeEventListener(type, fn);
                handler();
            };
            elem.addEventListener(type, fn);
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        var __WEBPACK_IMPORTED_MODULE_0__zoom_image_js__ = __webpack_require__(2);
        var __WEBPACK_IMPORTED_MODULE_1__utils_js__ = __webpack_require__(0);
        __webpack_require__.d(exports, "a", function() {
            return zoom;
        });
        var current = null;
        var offset = 80;
        var initialScrollPos = -1;
        var initialTouchPos = -1;
        var setup = function setup(elem) {
            elem.addEventListener("click", prepareZoom);
        };
        var prepareZoom = function prepareZoom(e) {
            if (document.body.classList.contains("zoom-overlay-open")) {
                return;
            }
            if (e.metaKey || e.ctrlKey) {
                window.open(e.target.getAttribute("data-original") || e.target.src, "_blank");
                return;
            }
            if (e.target.width >= __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_js__["a"])() - offset) {
                return;
            }
            closeCurrent(true);
            current = new __WEBPACK_IMPORTED_MODULE_0__zoom_image_js__["a"](e.target, offset);
            current.zoom();
            addCloseListeners();
        };
        var closeCurrent = function closeCurrent(force) {
            if (current == null) {
                return;
            }
            if (force) {
                current.dispose();
            } else {
                current.close();
            }
            removeCloseListeners();
            current = null;
        };
        var addCloseListeners = function addCloseListeners() {
            document.addEventListener("scroll", handleScroll);
            document.addEventListener("keyup", handleKeyup);
            document.addEventListener("touchstart", handleTouchStart);
            document.addEventListener("click", handleClick, true);
        };
        var removeCloseListeners = function removeCloseListeners() {
            document.removeEventListener("scroll", handleScroll);
            document.removeEventListener("keyup", handleKeyup);
            document.removeEventListener("touchstart", handleTouchStart);
            document.removeEventListener("click", handleClick, true);
        };
        var handleScroll = function handleScroll() {
            if (initialScrollPos == -1) {
                initialScrollPos = window.pageYOffset;
            }
            var deltaY = Math.abs(initialScrollPos - window.pageYOffset);
            if (deltaY >= 40) {
                closeCurrent();
            }
        };
        var handleKeyup = function handleKeyup(e) {
            if (e.keyCode == 27) {
                closeCurrent();
            }
        };
        var handleTouchStart = function handleTouchStart(e) {
            var t = e.touches[0];
            if (t == null) {
                return;
            }
            initialTouchPos = t.pageY;
            e.target.addEventListener("touchmove", handleTouchMove);
        };
        var handleTouchMove = function handleTouchMove(e) {
            var t = e.touches[0];
            if (t == null) {
                return;
            }
            if (Math.abs(t.pageY - initialTouchPos) > 10) {
                closeCurrent();
                e.target.removeEventListener("touchmove", handleTouchMove);
            }
        };
        var handleClick = function handleClick() {
            closeCurrent();
        };
        var zoom = Object.create(null);
        zoom.setup = setup;
    }, function(module, exports, __webpack_require__) {
        "use strict";
        var __WEBPACK_IMPORTED_MODULE_0__utils_js__ = __webpack_require__(0);
        var Size = function Size(w, h) {
            _classCallCheck(this, Size);
            this.w = w;
            this.h = h;
        };
        var ZoomImage = function() {
            function ZoomImage(img, offset) {
                _classCallCheck(this, ZoomImage);
                this.img = img;
                this.preservedTransform = img.style.transform;
                this.wrap = null;
                this.overlay = null;
                this.offset = offset;
            }
            _createClass(ZoomImage, [ {
                key: "forceRepaint",
                value: function forceRepaint() {
                    var _ = this.img.offsetWidth;
                    return;
                }
            }, {
                key: "zoom",
                value: function zoom() {
                    var size = new Size(this.img.naturalWidth, this.img.naturalHeight);
                    this.wrap = document.createElement("div");
                    this.wrap.classList.add("zoom-img-wrap");
                    this.img.parentNode.insertBefore(this.wrap, this.img);
                    this.wrap.appendChild(this.img);
                    this.img.classList.add("zoom-img");
                    this.img.setAttribute("data-action", "zoom-out");
                    this.overlay = document.createElement("div");
                    this.overlay.classList.add("zoom-overlay");
                    document.body.appendChild(this.overlay);
                    this.forceRepaint();
                    var scale = this.calculateScale(size);
                    this.forceRepaint();
                    this.animate(scale);
                    document.body.classList.add("zoom-overlay-open");
                }
            }, {
                key: "calculateScale",
                value: function calculateScale(size) {
                    var maxScaleFactor = size.w / this.img.width;
                    var viewportWidth = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_js__["a"])() - this.offset;
                    var viewportHeight = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_js__["b"])() - this.offset;
                    var imageAspectRatio = size.w / size.h;
                    var viewportAspectRatio = viewportWidth / viewportHeight;
                    if (size.w < viewportWidth && size.h < viewportHeight) {
                        return maxScaleFactor;
                    } else if (imageAspectRatio < viewportAspectRatio) {
                        return viewportHeight / size.h * maxScaleFactor;
                    } else {
                        return viewportWidth / size.w * maxScaleFactor;
                    }
                }
            }, {
                key: "animate",
                value: function animate(scale) {
                    var imageOffset = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_js__["c"])(this.img);
                    var scrollTop = window.pageYOffset;
                    var viewportX = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_js__["a"])() / 2;
                    var viewportY = scrollTop + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_js__["b"])() / 2;
                    var imageCenterX = imageOffset.left + this.img.width / 2;
                    var imageCenterY = imageOffset.top + this.img.height / 2;
                    var tx = viewportX - imageCenterX;
                    var ty = viewportY - imageCenterY;
                    var tz = 0;
                    var imgTr = "scale(" + scale + ")";
                    var wrapTr = "translate3d(" + tx + "px, " + ty + "px, " + tz + "px)";
                    this.img.style.transform = imgTr;
                    this.wrap.style.transform = wrapTr;
                }
            }, {
                key: "dispose",
                value: function dispose() {
                    if (this.wrap == null || this.wrap.parentNode == null) {
                        return;
                    }
                    this.img.classList.remove("zoom-img");
                    this.img.setAttribute("data-action", "zoom");
                    this.wrap.parentNode.insertBefore(this.img, this.wrap);
                    this.wrap.parentNode.removeChild(this.wrap);
                    document.body.removeChild(this.overlay);
                    document.body.classList.remove("zoom-overlay-transitioning");
                }
            }, {
                key: "close",
                value: function close() {
                    var _this = this;
                    document.body.classList.add("zoom-overlay-transitioning");
                    this.img.style.transform = this.preservedTransform;
                    if (this.img.style.length === 0) {
                        this.img.removeAttribute("style");
                    }
                    this.wrap.style.transform = "none";
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_js__["d"])(this.img, "transitionend", function() {
                        _this.dispose();
                        document.body.classList.remove("zoom-overlay-open");
                    });
                }
            } ]);
            return ZoomImage;
        }();
        exports["a"] = ZoomImage;
    }, function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var __WEBPACK_IMPORTED_MODULE_0__src_zoom_js__ = __webpack_require__(1);
        document.addEventListener("DOMContentLoaded", function() {
            var elems = document.querySelectorAll("img[data-action='zoom']");
            for (var i = 0; i < elems.length; i++) {
                __WEBPACK_IMPORTED_MODULE_0__src_zoom_js__["a"].setup(elems[i]);
            }
        });
    } ]);
})();
/*!
 * quickpresence
 * simple html template for getting your presence online fast
 * https://arronmccrory.com/
 * @author Arron McCrory
 * @version 1.0
 * Copyright 2017. MIT licensed.
 */
/**
 * Pure JavaScript implementation of zoom.js.
 *
 * Original preamble:
 * zoom.js - It's the best way to zoom an image
 * @version v0.0.2
 * @link https://github.com/fat/zoom.js
 * @license MIT
 *
 * This is a fork of the original zoom.js implementation by @fat.
 * Copyrights for the original project are held by @fat. All other copyright
 * for changes in the fork are held by Nishanth Shanmugham.
 *
 * Copyright (c) 2013 @fat
 * The MIT License. Copyright © 2016 Nishanth Shanmugham.
 */
!function(){"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var e=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}();!function(t){function e(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=3)}([function(t,e,n){n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o}),n.d(e,"c",function(){return r}),n.d(e,"d",function(){return a});var i=function(){return document.documentElement.clientWidth},o=function(){return document.documentElement.clientHeight},r=function(t){var e=t.getBoundingClientRect(),n=document.documentElement,i=window;return{top:e.top+i.pageYOffset-n.clientTop,left:e.left+i.pageXOffset-n.clientLeft}},a=function(t,e,n){var i=function t(i){i.target.removeEventListener(e,t),n()};t.addEventListener(e,i)}},function(t,e,n){var i=n(2),o=n(0);n.d(e,"a",function(){return w});var r=null,a=80,s=-1,u=-1,c=function(t){t.addEventListener("click",l)},l=function(t){return document.body.classList.contains("zoom-overlay-open")?void 0:t.metaKey||t.ctrlKey?void window.open(t.target.getAttribute("data-original")||t.target.src,"_blank"):void(t.target.width>=n.i(o.a)()-a||(d(!0),r=new i.a(t.target,a),r.zoom(),m()))},d=function(t){null!=r&&(t?r.dispose():r.close(),f(),r=null)},m=function(){document.addEventListener("scroll",h),document.addEventListener("keyup",v),document.addEventListener("touchstart",p),document.addEventListener("click",y,!0)},f=function(){document.removeEventListener("scroll",h),document.removeEventListener("keyup",v),document.removeEventListener("touchstart",p),document.removeEventListener("click",y,!0)},h=function(){-1==s&&(s=window.pageYOffset);var t=Math.abs(s-window.pageYOffset);t>=40&&d()},v=function(t){27==t.keyCode&&d()},p=function(t){var e=t.touches[0];null!=e&&(u=e.pageY,t.target.addEventListener("touchmove",g))},g=function t(e){var n=e.touches[0];null!=n&&Math.abs(n.pageY-u)>10&&(d(),e.target.removeEventListener("touchmove",t))},y=function(){d()},w=Object.create(null);w.setup=c},function(n,i,o){var r=o(0),a=function e(n,i){t(this,e),this.w=n,this.h=i},s=function(){function n(e,i){t(this,n),this.img=e,this.preservedTransform=e.style.transform,this.wrap=null,this.overlay=null,this.offset=i}return e(n,[{key:"forceRepaint",value:function(){this.img.offsetWidth}},{key:"zoom",value:function(){var t=new a(this.img.naturalWidth,this.img.naturalHeight);this.wrap=document.createElement("div"),this.wrap.classList.add("zoom-img-wrap"),this.img.parentNode.insertBefore(this.wrap,this.img),this.wrap.appendChild(this.img),this.img.classList.add("zoom-img"),this.img.setAttribute("data-action","zoom-out"),this.overlay=document.createElement("div"),this.overlay.classList.add("zoom-overlay"),document.body.appendChild(this.overlay),this.forceRepaint();var e=this.calculateScale(t);this.forceRepaint(),this.animate(e),document.body.classList.add("zoom-overlay-open")}},{key:"calculateScale",value:function(t){var e=t.w/this.img.width,n=o.i(r.a)()-this.offset,i=o.i(r.b)()-this.offset,a=t.w/t.h,s=n/i;return t.w<n&&t.h<i?e:s>a?i/t.h*e:n/t.w*e}},{key:"animate",value:function(t){var e=o.i(r.c)(this.img),n=window.pageYOffset,i=o.i(r.a)()/2,a=n+o.i(r.b)()/2,s=e.left+this.img.width/2,u=e.top+this.img.height/2,c=i-s,l=a-u,d=0,m="scale("+t+")",f="translate3d("+c+"px, "+l+"px, "+d+"px)";this.img.style.transform=m,this.wrap.style.transform=f}},{key:"dispose",value:function(){null!=this.wrap&&null!=this.wrap.parentNode&&(this.img.classList.remove("zoom-img"),this.img.setAttribute("data-action","zoom"),this.wrap.parentNode.insertBefore(this.img,this.wrap),this.wrap.parentNode.removeChild(this.wrap),document.body.removeChild(this.overlay),document.body.classList.remove("zoom-overlay-transitioning"))}},{key:"close",value:function(){var t=this;document.body.classList.add("zoom-overlay-transitioning"),this.img.style.transform=this.preservedTransform,0===this.img.style.length&&this.img.removeAttribute("style"),this.wrap.style.transform="none",o.i(r.d)(this.img,"transitionend",function(){t.dispose(),document.body.classList.remove("zoom-overlay-open")})}}]),n}();i.a=s},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var i=n(1);document.addEventListener("DOMContentLoaded",function(){for(var t=document.querySelectorAll("img[data-action='zoom']"),e=0;e<t.length;e++)i.a.setup(t[e])})}])}();