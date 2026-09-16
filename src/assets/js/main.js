// 株式会社豊栄製作所 コーポレートサイト
(function () {
  // ---- ハンバーガーメニュー ----
  var menu = document.getElementById('menu');
  if (menu) {
    var open = function () { menu.hidden = false; document.body.style.overflow = 'hidden'; };
    var close = function () { menu.hidden = true; document.body.style.overflow = ''; };
    document.querySelectorAll('[data-menu-open]').forEach(function (el) { el.addEventListener('click', open); });
    document.querySelectorAll('[data-menu-close]').forEach(function (el) { el.addEventListener('click', close); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !menu.hidden) close(); });
  }

  // ---- お問い合わせフォーム ----
  var form = document.getElementById('contact-form');
  if (!form) return;
  var done = document.getElementById('form-done');
  var error = document.getElementById('form-error');
  var button = form.querySelector('.form__button');

  function showDone() {
    form.hidden = true;
    done.hidden = false;
    done.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  function buildMail(data) {
    var lines = [];
    data.forEach(function (value, key) {
      if (key === 'プライバシー・ポリシーに同意する') return;
      lines.push(key + '：' + value);
    });
    return lines.join('\n');
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    error.hidden = true;
    if (!form.checkValidity()) {
      error.hidden = false;
      var invalid = form.querySelector(':invalid');
      if (invalid) invalid.focus();
      return;
    }
    var data = new FormData(form);
    var endpoint = form.getAttribute('action');

    // 送信先が未設定の場合はメールソフトを起動する
    if (!endpoint || endpoint.indexOf('YOUR_FORM_ID') !== -1) {
      var to = form.getAttribute('data-fallback-mail');
      var subject = '【お問い合わせ】' + (data.get('お問い合わせ種別') || '') + ' ' + (data.get('お名前') || '');
      location.href = 'mailto:' + to + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(buildMail(data));
      showDone();
      return;
    }

    button.disabled = true;
    fetch(endpoint, { method: 'POST', body: data, headers: { 'Accept': 'application/json' } })
      .then(function (res) {
        if (!res.ok) throw new Error('送信に失敗しました');
        showDone();
      })
      .catch(function () {
        error.textContent = '送信に失敗しました。お手数ですがお電話またはメールでお問い合わせください。';
        error.hidden = false;
        button.disabled = false;
      });
  });
})();
