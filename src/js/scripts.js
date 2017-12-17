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
