$(document).ready(function() {
  $('.box-shadow-menu').click(function() {
      $('.mainnav').addClass( "open");
  });
  $('html').on('touchstart', function() {
      $('.mainnav').removeClass( "open");
  });
    $('html').click(function() {
      $('.mainnav').removeClass( "open");
  });
  $('.mainnav').click(function() {
      event.stopPropagation();
  });
  $('.box-shadow-menu').click(function() {
      event.stopPropagation();
  });
    $('.mainnav').on('touchstart', function() {
      event.stopPropagation();
  });
  $('.box-shadow-menu').on('touchstart', function() {
      event.stopPropagation();
  });
});

// back to top button
$(document).ready(function() {
    var offset=250, // At what pixels show Back to Top Button
    scrollDuration=300; // Duration of scrolling to top
        $(window).scroll(function() {
      if ($(this).scrollTop() > offset) {
                $('.top').fadeIn(500); // Time(in Milliseconds) of appearing of the Button when scrolling down.
                } else {
    $('.top').fadeOut(500); // Time(in Milliseconds) of disappearing of Button when scrolling up.
    }
  });

  // Smooth animation when scrolling
  $('.top').click(function(event) {
  event.preventDefault();
            $('html, body').animate({
          scrollTop: 0}, scrollDuration);
                });
  });


//smooth scroll to anchor
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
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
});