document.addEventListener('DOMContentLoaded', function () {
  // Mobile navbar toggle
  var toggler = document.querySelector('.navbar-toggler');
  var collapse = document.querySelector('#navbarcollapse');
  if (toggler && collapse) {
    toggler.addEventListener('click', function () {
      collapse.classList.toggle('show');
    });
    // Close menu when clicking a nav link (mobile)
    collapse.querySelectorAll('.nav-link').forEach(function (link) {
      link.addEventListener('click', function () {
        collapse.classList.remove('show');
      });
    });
  }
});
