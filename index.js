
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault(); // Prevent default scrolling

      const targetSection = document.getElementById(this.getAttribute('href').slice(1));
      targetSection.scrollIntoView({ behavior: 'smooth' });  // Smooth scrolling
    });
  });



const tooggleBtn = document.querySelector('.toggle-btn')
const tooggleBtnIcon = document.querySelector('.toggle-btn-i')
const dropDownMenu = document.querySelector('.dropdown-menu')

tooggleBtn.onclick = function () {
  dropDownMenu.classList.toggle('open')
  const isopen = dropDownMenu.classList.contains('open')
  
  tooggleBtnIcon.classList = isopen
  ? 'fa-solid fa-xmark'
  : 'fa-solid fa-bars'
}


function downloadFile(url) {
  const link = document.createElement('a');
  link.href = url;
  link.download = 'cv.pdf'; 
  link.click();
}