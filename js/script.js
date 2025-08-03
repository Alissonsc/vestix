document.addEventListener('DOMContentLoaded', () => {
  let index = 0;
  const slides = document.querySelectorAll('.slide');

  function showSlide() {
    slides.forEach((slide, i) => {
      slide.classList.remove('active');
      if (i === index) slide.classList.add('active');
    });
    index = (index + 1) % slides.length;
  }

  setInterval(showSlide, 4000);
});