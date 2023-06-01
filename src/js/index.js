document.addEventListener('DOMContentLoaded', function(){

  function sliderSviper(buttonLeft, buttonRight, slaids){
    const leftButton = document.querySelector(buttonLeft);
    const rightButton = document.querySelector(buttonRight);
    const slaidsFoto = document.querySelectorAll(slaids);


    // Устанавливаем обработчики событий для кнопок
    leftButton.addEventListener('click', slideToLeft);
    rightButton.addEventListener('click', slideToRight);

    // Функция для листания слайда влево
    function slideToLeft() {
      
    }
    // Функция для листания слайда вправо
    function slideToRight() {
      
    }

  }
  sliderSviper('.left', '.right', '.foto-slid');

});