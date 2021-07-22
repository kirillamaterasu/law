$(function () {

    $('.slider__inner').slick({
        nextArrow: '<button type="button" class="slick-button slick-next"></button>',
        prevArrow: '<button type="button" class="slick-button slick-prev"></button>',
        infinite: false



    });

    $('input, select').styler();




    var btn = $('#button');

    $(window).scroll(function() {
      if ($(window).scrollTop() > 300) {
        btn.addClass('show');
      } else {
        btn.removeClass('show');
      }
    });
    
    btn.on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({scrollTop:0}, '300');
    });

});
