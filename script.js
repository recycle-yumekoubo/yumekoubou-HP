document.addEventListener('DOMContentLoaded', function () {
  var items = document.querySelectorAll('.faq-item');
  items.forEach(function (item) {
    var btn = item.querySelector('.faq-q');
    btn.addEventListener('click', function () {
      var wasOpen = item.classList.contains('open');
      items.forEach(function (i) { i.classList.remove('open'); });
      if (!wasOpen) item.classList.add('open');
    });
  });

  var menuButton = document.querySelector('.mb-menu');
  var mobileMenu = document.querySelector('.mobile-menu');
  var closeButton = document.querySelector('.mobile-menu-close');
  var menuLinks = document.querySelectorAll('.mobile-menu-links a');

  function setMenuOpen(isOpen) {
    mobileMenu.classList.toggle('is-open', isOpen);
    mobileMenu.setAttribute('aria-hidden', String(!isOpen));
    menuButton.setAttribute('aria-expanded', String(isOpen));
  }

  menuButton.addEventListener('click', function () {
    setMenuOpen(!mobileMenu.classList.contains('is-open'));
  });
  closeButton.addEventListener('click', function () { setMenuOpen(false); });
  mobileMenu.addEventListener('click', function (event) {
    if (event.target === mobileMenu) setMenuOpen(false);
  });
  menuLinks.forEach(function (link) {
    link.addEventListener('click', function () { setMenuOpen(false); });
  });
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') setMenuOpen(false);
  });
});
