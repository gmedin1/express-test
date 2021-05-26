var index = 0;

initialize_carousel();

function initialize_carousel() {
  const slides = document.querySelectorAll('.slide');

  for (slide of slides) {
    slide.style.display = 'none';
  }

  index++;

  if (index > slides.length) {
    index = 1;
  }

  slides[index - 1].style.display = 'block';

  setTimeout(initialize_carousel, 8000);
}
