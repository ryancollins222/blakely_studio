let navLinkDiv = document.querySelector('.navlink-div');
let navCollapseIcon= document.querySelector('.bars-icon');
let navLinks = navLinkDiv.querySelector('ul');
// make links invisible until menu expanded
let nav = document.querySelector('nav');

// event listener to expand navbar
navLinkDiv.addEventListener('click', (e) => {
  if (!nav.classList.contains('expanded')) {
    navCollapseIcon.style = 'transform: rotate(90deg)';
    // navLinks.style.display = '';
    nav.classList.toggle('expanded');
  } else {
    navCollapseIcon.style = '';
    nav.classList.toggle('expanded');
  }
})