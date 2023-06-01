document.addEventListener('DOMContentLoaded', function() {
  function sliderSwiper(buttonLeft, buttonRight, carousel, slides) {
    const leftButtons = document.querySelectorAll(buttonLeft);
    const rightButtons = document.querySelectorAll(buttonRight);
    const sliderContainers = document.querySelectorAll(carousel);

    function slideToNext(container) {
      const slideItems = container.querySelectorAll(slides);
      const slideWidth = slideItems[0].offsetWidth;

      container.style.transition = 'transform 0.5s ease';
      container.style.transform = `translateX(-${slideWidth}px)`;

      setTimeout(function() {
        container.appendChild(slideItems[0]);
        container.style.transition = 'none';
        container.style.transform = 'translateX(0)';
      }, 500);
    }

    function slideToPrev(container) {
      const slideItems = container.querySelectorAll(slides);
      const slideWidth = slideItems[0].offsetWidth;

      const lastSlide = slideItems[slideItems.length - 1];
      container.insertBefore(lastSlide, slideItems[0]);

      container.style.transition = 'none';
      container.style.transform = `translateX(-${slideWidth}px`;

      setTimeout(function() {
        container.style.transition = 'transform 0.5s ease';
        container.style.transform = 'translateX(0)';
      }, 50);
    }

    leftButtons.forEach(function(button) {
      button.addEventListener('click', function() {
        const container = button.closest('.wraper').querySelector('.carousel');
        slideToPrev(container);
      });
    });

    rightButtons.forEach(function(button) {
      button.addEventListener('click', function() {
        const container = button.closest('.wraper').querySelector('.carousel');
        slideToNext(container);
      });
    });
  }

  sliderSwiper('.left', '.right', '.carousel', '.foto-slid');
});