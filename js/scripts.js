$(function () {
    $('#callback-button').click(function (e) {
      e.preventDefault();
      $('.modal').addClass('modal_active');
      $('body').addClass('hidden');
    });
  
    $('.modal__close').click(function (e) {
      e.preventDefault();
      $('.modal').removeClass('modal_active');
      $('body').removeClass('hidden');
    });
  
  });


  $(document).ready(function() {
    $('.menu__burger').click(function() {
        $('.header__logo-wrapper none').toggleClass('none');
    });
});

