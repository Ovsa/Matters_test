// Плавный переход по якорным ссылкам

$(document).ready(function () {
  $("#menu").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 1500);
  });
});

$(document).ready(function () {
  $("#nav-menu").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 1500);
  });
});

// Удаление якорной ссылки послее ее использования

$('a').on('click', function (e) {
  var href = this.getAttribute('href');
  var myHref = href.split('#');

  e.preventDefault();
  window.location.href = myHref[0];
});


// скрипт для бургер-меню

$(document).ready(function () {
  $('.header__burger').click(function (event) {
    $('.header__burger,.header__content').toggleClass('active');
    $('body').toggleClass('lock');


    $('.header__content').click(function (event) {
      $('.header__burger, .header__content').removeClass('active');
      $('body').removeClass('lock');
    });

  });
});

// прокрутка сайта на верх при обновлении

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

// для скрытия кнопки при открытом бургере

$(document).ready(function () {
  $('.header__burger').click(function (event) {
    $('.send__btn').toggleClass('hidden');

    $('.header__content').click(function (event) {
      $('.send__btn').removeClass('hidden');
    });

  });
});
