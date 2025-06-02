window.addEventListener('scroll', () => {
  const header = document.getElementById('main-header');

  if (window.scrollY > 700) {
    header.classList.add('fixed');
  } else {
    header.classList.remove('fixed');
  }
});
