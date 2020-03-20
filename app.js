let navLinkDiv = document.querySelector('.navlink-div');
let navCollapseIcon= document.querySelector('.bars-icon');
let navLinks = navLinkDiv.querySelector('ul');
// make links invisible until menu expanded
navLinks.style.display = 'none';

// event listener to show/hide nav links
navLinkDiv.addEventListener('click', (e) => {
  if (navLinks.style.display === 'none') {
    navCollapseIcon.style = 'transform: rotate(90deg)';
    navLinks.style.display = '';
  } else {
    navLinks.style.display = 'none';
    navCollapseIcon.style = '';
  }
})