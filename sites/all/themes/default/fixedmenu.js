jQuery(window).load(function () {

        /* fixed menu */ 
        
        var fixedmenu = 190;
        jQuery(window).scroll(function() {
            var scroll = getCurrentScroll();
              if ( scroll >= fixedmenu ) {
                   jQuery('body').addClass('fixedmenu');
              } else {
                   jQuery('body').removeClass('fixedmenu');
              }
          });
       
        function getCurrentScroll() {
           return window.pageYOffset || document.documentElement.scrollTop; 
        }

});
