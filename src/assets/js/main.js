// 株式会社豊栄製作所 コーポレートサイト
(function () {
  var menu = document.getElementById('menu');
  if (!menu) return;

  function open() {
    menu.hidden = false;
    document.body.style.overflow = 'hidden';
  }
  function close() {
    menu.hidden = true;
    document.body.style.overflow = '';
  }

  document.querySelectorAll('[data-menu-open]').forEach(function (el) {
    el.addEventListener('click', open);
  });
  document.querySelectorAll('[data-menu-close]').forEach(function (el) {
    el.addEventListener('click', close);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !menu.hidden) close();
  });
})();
