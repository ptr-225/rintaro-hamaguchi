window.addEventListener('DOMContentLoaded', function() {
      //ハンバーガーメニューをクリックするたびにactiveクラスの付与を切り替える
      document.querySelector('.hamburger').addEventListener('click', function(){
        this.classList.toggle('active');
        document.querySelector('.slide-menu__section').classList.toggle('active');
      })
    })