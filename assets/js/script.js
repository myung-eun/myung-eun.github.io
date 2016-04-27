$(document).ready(function() {


//CONSOLE LOG
// $(document).scroll(function() {
//    console.log($(window).scrollTop());
// });



$(function() {
   $('body').removeClass('fade-out');
});


// MAKING THE NAV BAR STICK TO THE TOP AS YOU SCROLL DOWN
// (and then un-stick when you scroll back up)
$(window).scroll(function () {
    if ($(window).scrollTop() >= 320) {
      $('#navcontainer').addClass('sticky');
    }
    if ($(window).scrollTop() < 320) {
      $('#navcontainer').removeClass('sticky');
    }
  });



//if the bottom of the window is past .4 of the post div
//remove class post-container-inactive from post-container h1
// at speed MEDIUM

//if the bottom of the windo is past .4 of the post div
// remove class post-container-inactive from post-container p
// at speed SLIGHTLY SLOWER

//If you press any of the buttons, make window scroll to the top of
//the respective post with a Boolean animation speed


$(window).scroll(function(){
    if ($(this).scrollTop() >= 120) {
        $('.parallax-window.home h1').fadeOut();
    } else {
        $('.parallax-window.home h1').fadeIn();
    }
});

$(window).scroll(function(){
    if ($(this).scrollTop() >= 450) {
        $('.parallax-window.about h1').fadeIn();
    } else {
        $('.parallax-window.about h1').fadeOut();
    }
});

$(window).scroll(function(){
    if ($(this).scrollTop() >= 1310) {
        $('.parallax-window.work h1').fadeIn();
    } else {
        $('.parallax-window.work h1').fadeOut();
    }
});


// BUTTONS

$(".menu-item.home").click(function() {
  $('html, body').animate({
      scrollTop: $(".parallax-window.home").offset().top
  }, 500);
});

$(".menu-item.about").click(function() {
  $('html, body').animate({
      scrollTop: $(".parallax-window.about").offset().top
  }, 500);
});

$(".menu-item.work").click(function() {
  $('html, body').animate({
      scrollTop: $(".parallax-window.work").offset().top
  }, 500);
});




});