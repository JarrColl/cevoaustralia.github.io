
function showRandomTestimonial() {
  var tsList = $("div.testimonial"),
      idx = Math.floor(Math.random()*tsList.length);

  tsList.hide();
  $(tsList[idx]).fadeIn().css("display", "inline-block");
  window.setTimeout(function() {
    $(tsList[idx]).fadeOut();
  }, 9000);
}

$(document).ready(function(){

  // Smooth scrolling via animate()
  $("a").on('click', function(event) {
    if (this.hash && window.location.pathname == "/") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });

  var maxOffset = 50;
  $(window).scroll(function() {
    if ($(window).scrollTop() >= maxOffset) {
      $('.navbar-default').addClass('navbar-shrink');
    }
    else {
      $('.navbar-default').removeClass('navbar-shrink');
    }
  });

  showRandomTestimonial();
  window.setInterval(showRandomTestimonial, 10000);
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// Async contact form
$('form[id=contactForm]').submit(function(){
  $.post($(this).attr('action'), $(this).serialize(), function(data, textStatus, jqXHR){
    $('form[id=contactForm] #success').hide();
    $('form[id=contactForm] #error').hide();
    if (jqXHR.status == 200) {
      $('form[id=contactForm] #success').show();
    }}, 'json').fail(function(){
      $('form[id=contactForm] #success').hide();
      $('form[id=contactForm] #error').hide();
      $('form[id=contactForm] #error').show();
  });
  return false;
});

// Contact form validation
$.validate({
  modules : 'html5, toggleDisabled'
});
