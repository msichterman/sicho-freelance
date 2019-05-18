$(document).ready(function() {
  // NAVIGATION --------------------------//
  // Logo Link
  $(".logo")
    .find("#top-link")
    .click(function(e) {
      e.preventDefault();
      var section = $(this).attr("href");
      $("html, body").animate({
        scrollTop: $(section).offset().top - 100
      });
    });

  // Features Link
  $("nav")
    .find("#features-link")
    .click(function(e) {
      e.preventDefault();
      var section = $(this).attr("href");
      $("html, body").animate({
        scrollTop: $(section).offset().top - calcOffset()
      });
    });

  // About Me Link
  $("nav")
    .find("#about-link")
    .click(function(e) {
      e.preventDefault();
      var section = $(this).attr("href");
      $("html, body").animate({
        scrollTop: $(section).offset().top - calcOffset()
      });
    });

  // Projects Link
  $("nav")
    .find("#projects-link")
    .click(function(e) {
      e.preventDefault();
      var section = $(this).attr("href");
      $("html, body").animate({
        scrollTop: $(section).offset().top - (calcOffset() + 75)
      });
    });

  // Media Query
  function calcOffset() {
    let offset = 0;
    if (window.matchMedia("(max-width: 600px)").matches) {
      offset = 205;
    } else if (window.matchMedia("(max-width: 800px)").matches) {
      offset = 107;
    } else {
      offset = 100;
    }
    return offset;
  }

  // ABOUT ME ----------------------------//
  // Card 1 Hover
  $("#card1").hover(
    function() {
      $(".blur1").css("filter", "blur(3px)");
    },
    function() {
      $(".blur1").css("filter", "none");
    }
  );

  // Card 2 Hover
  $("#card2").hover(
    function() {
      $(".blur2").css("filter", "blur(3px)");
    },
    function() {
      $(".blur2").css("filter", "none");
    }
  );

  // Card 3 Hover
  $("#card3").hover(
    function() {
      $(".blur3").css("filter", "blur(3px)");
    },
    function() {
      $(".blur3").css("filter", "none");
    }
  );
});
