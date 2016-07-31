// Nothing groundbreaking to see here. Sorry.

// Avoid naming collisions
'use strict';

$(document).ready(function() {
  // Adding some flair to my URL--with pizza!
  window.location.hash = "🍕";

  // Clear the form on page load.
  clearForm();

  // Instantiate a wow object
  // Call its init()
  var wow = new WOW({
    offset:-20,
    mobile:false,
  });
  wow.init();

  // ANIMATION
  //
  //
  // Animation - Slide in curtain
  $('.hero-l, .hero-r').css('width','50%');

  // Animation - Logo - Name
  $('.logo h1').css({
                      '-webkit-transform':'translate(0,0)',
                      '-moz-transform':'translate(0,0)',
                      '-ms-transform':'translate(0,0)',
                      '-o-transform':'translate(0,0)',
                      'transform':'translate(0,0)'
                    });

  // Animation - Logo - Title
  $('.logo h2').css({
                      '-webkit-transform':'translate(0,0)',
                      '-moz-transform':'translate(0,0)',
                      '-ms-transform':'translate(0,0)',
                      '-o-transform':'translate(0,0)',
                      'transform':'translate(0,0)'
                    });

  // EVENT LISTENERS
  //
  //
  $(document).on('keydown', function(e) {
    var key = e.keyCode || e.which;

    if (key === 27) {
      // ESC key pressed
      if ($('nav').hasClass('in')) {
        // Nav is open
        $('nav').removeClass('in').addClass('out');

        // Accessibility behaviour
        button.attr('aria-expanded', 'false');

        // Change nav-reveal button colour
        button.css({color:"#fff"});

        // Change button text
        button.html('<i class="fa fa-bars"></i> MENU');

        // Bring focus back to button
        button.focus();
      }
    }
    else if (key === 9) {
      // Tab key pressed
      if ($('nav').hasClass('in')) {
        if (e.target.hash === '#contact') {
          console.log('Quick, tab back to CLOSE');
        }
      }
    }
    else if (key === 13) {
      // Enter key pressed
      if ((document.activeElement.parentElement.classList).contains('nav-reveal')) {
        button.focus();
        // Change tabindex of each nav link
        navLinks.each(function(e) {
          $(this).attr('tabindex', -1);
        });
      }
    }
    else if (key === 38) {
      if ($('nav').hasClass('in')) {
        $(document.activeElement).prev('a[tabindex]').focus();
      }
    }
    else if (key === 40) {
      if ($('nav').hasClass('in')) {
        $(document.activeElement).next('a[tabindex]').focus();
      }
    }
  });

  $('.nav-reveal').on('touch click', function() {
    var nav = $('nav');

    if (nav.hasClass('out')) {
      nav.removeClass('out').addClass('in');
      button.html('<i class="fa fa-close"></i> CLOSE');
      
      // Accessibility behaviour
      button.attr('aria-expanded', 'true');

      // Change nav-reveal button colour
      button.css({color:"#1663c7"});

      // Change tabindex of each nav link
      navLinks.each(function(e) {
        $(this).attr('tabindex', 0);
      });

      // Set focus to the first item in the menu
      $('.nav-inner > a:first-child').focus();
    }
    else {
      nav.removeClass('in').addClass('out');
      button.html('<i class="fa fa-bars"></i> MENU');
      
      // Accessibility behaviour
      button.attr('aria-expanded', 'false');

      // Change nav-reveal button colour
      button.css({color:"#fff"});

      // Change tabindex of each nav link
      navLinks.each(function(e) {
        $(this).attr('tabindex', -1);
      });

      // Bring focus back to button
      button.focus();
    }
  });

  // On nav-item click, scroll to div. //
	$('.nav-inner a').on('touchend click', function(e) {
		var link = $(this).attr('href');
		$('html, body').animate({
	            scrollTop: $(link).offset().top
	        }, 800);

    // Ensure the menu closes after a click or touch.
    $('.nav-reveal').click();
	});

  // CONTACT

  // $('#form-contact').on('submit', function(e) {
  //   var e = $('#email').val();
  //   var m = $('#msg').val();

  //   var ajaxData = {
  //     email: e,
  //     msg: m
  //   }

  //   e.preventDefault();
  //   //return checkForm();

  //   // If checkForm() returns true, the form can be
  //   // submitted for an ajax call
  //   if (checkForm) {
  //     // Make ajax call to php script
  //     $.ajax({
  //       url: '../php/send_mail.php',
  //       data: ajaxData,
  //       success: function(data) {
  //         console.log(data);
  //       },
  //       error: function(jXHR, textStatus) {
  //         console.log(jXHR);
  //         console.log(textStatus);
  //       }
  //     })
  //   }
  // });

  // SOCIAL
  // Submit clicks to Google Analytics for tracking
  // Send a twitter click to GA.
  $('#twitter-link').on('click', function() {
    ga('send', 'event', 'button', 'click', 'twitter');
  });

  // Send a linkedin click to GA.
  $('#linkedin-link').on('click', function() {
    ga('send', 'event', 'button', 'click', 'linkedin');
  });

  // Send a github click to GA.
  $('#github-link').on('click', function() {
    ga('send', 'event', 'button', 'click', 'github');
  });
  

  // FUNCTION DECLARATIONS
  //
  //
  // Check if the contact form is blank
  function checkForm() {
    var email = $('#email').val();
    var msg = $('#msg').val();
    
    if (email === "" ||
        msg === "") {
          return false;
        }
    else {
      return true;
    }
  }
  // Function for clearing the form data
  function clearForm() {
    $('input, textarea').each(function(i, el) {
      el.value = "";
    });
  }
// End of document.ready
});
