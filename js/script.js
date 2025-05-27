document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.quote-track');
  const slides = document.querySelectorAll('.quote-slide');
  let index = parseInt(localStorage.getItem('quoteIndex')) || 0;

  function showQuote() {
    if (!track || slides.length === 0) return;
    track.style.transform = `translateX(-${index * 100}%)`;
    localStorage.setItem('quoteIndex', index);
  }

  function nextQuote() {
    index = (index + 1) % slides.length;
    showQuote();
  }

  showQuote(); // show initial quote
  setInterval(nextQuote, 6000); // rotate every 6 seconds
});

