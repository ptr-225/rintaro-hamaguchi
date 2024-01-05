// fadeアニメーションの調整

$(window).on("load", function () {
  $("body").removeClass("fade");
});
$(function () {
  // ハッシュリンク(#)と別ウィンドウでページを開く場合はスルー
  $('a:not([href^="#"]):not([target])').on("click", function (e) {
    e.preventDefault(); // ナビゲートをキャンセル
    url = $(this).attr("href"); // 遷移先のURLを取得
    if (url !== "") {
      $("body").addClass("fadeout"); // bodyに class="fadeout"を挿入
      setTimeout(function () {
        window.location = url; // 0.2秒後に取得したURLに遷移
      }, 200);
    }
    return false;
  });
});

// /fadeアニメーションの調整
