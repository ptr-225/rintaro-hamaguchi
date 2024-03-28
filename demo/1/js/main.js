window.addEventListener("DOMContentLoaded", function () {
  //ハンバーガーメニューをクリックするたびにactiveクラスの付与を切り替える
  document.querySelector(".hamburger").addEventListener("click", function () {
    this.classList.toggle("active");
    document.querySelector(".slide-menu__section").classList.toggle("active");
  });
});

// fadeInUp

$(function () {
  $(window).scroll(function () {
    $(".fade").each(function () {
      var scroll = $(window).scrollTop();
      var blockPosition = $(this).offset().top;
      var windowHeihgt = $(window).height();
      if (scroll > blockPosition - windowHeihgt + 100) {
        $(this).addClass("fadeUp");
      }
    });
  });
});
//
