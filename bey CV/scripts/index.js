$(document).ready(function(){
  new WOW().init();

  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

  var docElem = document.documentElement,
        header = document.querySelector( '.navbar'),
        didScroll = false,
        changeHeaderOn = 50;

    function init() {
        window.addEventListener( 'scroll', function( event ) {
            if( !didScroll ) {
                didScroll = true;
                setTimeout( scrollPage, 250 );
            }
        }, false );
    }

    function scrollPage() {
        var sy = scrollY();
        if ( sy >= changeHeaderOn ) {
            $('.navbar').addClass('navbar-shrink');
        }
        else {
            $('.navbar').removeClass('navbar-shrink' );
        }
        didScroll = false;
    }

    $('.navbar-toggle').click(function() {
        $('.navbar').addClass('navbar-shrink');
    });

    function scrollY() {
        return window.pageYOffset || docElem.scrollTop;
    }

    init();
});