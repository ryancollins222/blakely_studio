let navLinkDiv = document.querySelector('#navbarSupportedContent');
let navCollapseButton = document.querySelector('#nav-collapse');

navLinkDiv.addEventListener('click', (e) => {
  if (navLinkDiv.classList.contains('show')) {
    navLinkDiv.classList.remove('show');
  }
})