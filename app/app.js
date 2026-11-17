// HomeVision v0.1.0 - plain ES5 so it runs on older LG TVs (webOS 4.x).
(function () {
  var VERSION = '0.1.0';
  var screens = ['home', 'live', 'search', 'settings', 'about'];
  var current = null;

  function all(sel) { return Array.prototype.slice.call(document.querySelectorAll(sel)); }

  function visibleFocusables() {
    return all('.focusable').filter(function (el) {
      return el.offsetWidth > 0 && el.offsetHeight > 0;
    });
  }

  function setFocus(el) {
    if (!el) { return; }
    if (current) { current.classList.remove('focused'); }
    current = el;
    el.classList.add('focused');
  }

  function showScreen(name) {
    screens.forEach(function (s) {
      document.getElementById('screen-' + s).classList.toggle('hidden', s !== name);
    });
    all('.menu-item').forEach(function (m) {
      m.classList.toggle('active', m.getAttribute('data-screen') === name);
    });
  }

  function center(el) {
    var r = el.getBoundingClientRect();
    return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
  }

  // Move focus to the nearest item in the pressed direction.
  function move(dir) {
    var list = visibleFocusables();
    if (!current || list.indexOf(current) === -1) { setFocus(list[0]); return; }
    var c = center(current);
    var best = null, bestScore = Infinity;
    list.forEach(function (el) {
      if (el === current) { return; }
      var p = center(el);
      var dx = p.x - c.x, dy = p.y - c.y;
      var ok = (dir === 'left' && dx < -5) || (dir === 'right' && dx > 5) ||
               (dir === 'up' && dy < -5) || (dir === 'down' && dy > 5);
      if (!ok) { return; }
      var main = (dir === 'left' || dir === 'right') ? Math.abs(dx) : Math.abs(dy);
      var side = (dir === 'left' || dir === 'right') ? Math.abs(dy) : Math.abs(dx);
      var score = main + side * 2.5;
      if (score < bestScore) { bestScore = score; best = el; }
    });
    if (best) { setFocus(best); }
  }

  function activate() {
    if (!current) { return; }
    var s = current.getAttribute('data-screen');
    if (s) { showScreen(s); }
  }

  function goBack() {
    var home = document.getElementById('screen-home');
    if (home.classList.contains('hidden')) {
      showScreen('home');
      setFocus(document.querySelector('.menu-item[data-screen="home"]'));
    } else if (window.webOS && window.webOS.platformBack) {
      window.webOS.platformBack();
    } else {
      window.close();
    }
  }

  document.addEventListener('keydown', function (e) {
    var k = e.keyCode;
    var box = document.getElementById('keybox');
    if (box) { box.textContent = 'Last key: code ' + k; }
    if (k === 37) { move('left'); e.preventDefault(); }
    else if (k === 38) { move('up'); e.preventDefault(); }
    else if (k === 39) { move('right'); e.preventDefault(); }
    else if (k === 40) { move('down'); e.preventDefault(); }
    else if (k === 13) { activate(); e.preventDefault(); }
    else if (k === 461 || k === 8) { goBack(); e.preventDefault(); }
  });

  // Magic Remote pointer: hover moves focus, click activates.
  all('.focusable').forEach(function (el) {
    el.addEventListener('mouseenter', function () { setFocus(el); });
    el.addEventListener('click', function () { setFocus(el); activate(); });
  });

  document.getElementById('ver').textContent = VERSION;
  document.getElementById('sysinfo').textContent =
    'Screen: ' + window.innerWidth + 'x' + window.innerHeight + ' | ' + navigator.userAgent;

  showScreen('home');
  setFocus(document.querySelector('.menu-item[data-screen="home"]'));
})();
