
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault(); // Prevent default scrolling

      const targetSection = document.getElementById(this.getAttribute('href').slice(1));
      targetSection.scrollIntoView({ behavior: 'smooth' });  // Smooth scrolling
    });
  });



