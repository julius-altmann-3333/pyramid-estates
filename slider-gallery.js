let index = 0;
    const slides = document.getElementById('slides');
    const totalSlides = slides.children.length;

    function showSlide(i) {
      index = (i + totalSlides) % totalSlides;
      slides.style.transform = `translateX(${-index * 100}%)`;
    }

    function nextSlide() {
      showSlide(index + 1);
    }

    function prevSlide() {
      showSlide(index - 1);
    }

    // Auto slide every 5 seconds
    setInterval(() => {
      nextSlide();
    }, 5000);
