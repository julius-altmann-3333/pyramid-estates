let index = 0;
const slides = document.getElementById('slides');
const totalSlides = slides.children.length;

function showSlide(i) {
  index = (i + totalSlides) % totalSlides; // Ensure index stays within bounds
  slides.style.transform = `translateX(${-index * 100}%)`;
}

function nextSlide() {
  showSlide(index + 1);
}

function prevSlide() {
  showSlide(index - 1);
}

// Auto slide every 5 seconds
let autoSlide = setInterval(() => {
  nextSlide();
}, 5000);

// Stop auto-slide on button click and restart
function resetAutoSlide() {
  clearInterval(autoSlide);
  autoSlide = setInterval(() => {
    nextSlide();
  }, 5000);
}

document.querySelectorAll('.nav button').forEach(button => {
  button.addEventListener('click', resetAutoSlide);
});
