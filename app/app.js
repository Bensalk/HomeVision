// HomeVision v0.2.0 â ES5 IIFE â Chromium 53 / webOS 4.x compatible
(function () {
  'use strict';

  var VERSION = '0.4.0';

  // ââ Themes âââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
  var THEMES = [
    { name: 'Midnight', bg: '#0B0D14', surface: '#151826', accent: '#7C5CFF', glow: '#1A1440' },
    { name: 'AMOLED',   bg: '#000000', surface: '#111111', accent: '#FFFFFF', glow: '#000000' },
    { name: 'Neon',     bg: '#07060F', surface: '#140F2A', accent: '#00F0FF', glow: '#2A0F3A' },
    { name: 'Sunset',   bg: '#1A0B12', surface: '#2A1420', accent: '#FF7A45', glow: '#4A1D2E' },
    { name: 'Ocean',    bg: '#06121C', surface: '#0D2233', accent: '#2EA8FF', glow: '#0B3A57' },
    { name: 'Forest',   bg: '#07130D', surface: '#0F2318', accent: '#3DDC84', glow: '#123B26' },
    { name: 'Crimson',  bg: '#140608', surface: '#241014', accent: '#FF3B5C', glow: '#3A0F18' },
    { name: 'Gold',     bg: '#120F05', surface: '#211B0B', accent: '#FFC53D', glow: '#3A2D0A' },
    { name: 'Mint',     bg: '#06120F', surface: '#0D211C', accent: '#5CF2C8', glow: '#0F3A30' },
    { name: 'Slate',    bg: '#0E1116', surface: '#1A1F27', accent: '#9AA7B8', glow: '#232A35' }
  ];

  // ââ IPTV-org library (same as PadVision) ââââââââââââââââââââââââââââââââ
  var BASE = 'https://iptv-org.github.io/iptv/';
  var LIBRARY = [
    { section: 'Popular',              name: 'India',                  url: BASE + 'countries/in.m3u' },
    { section: 'Popular',              name: 'Malayalam',              url: BASE + 'languages/mal.m3u' },
    { section: 'Popular',              name: 'Hindi',                  url: BASE + 'languages/hin.m3u' },
    { section: 'Popular',              name: 'Tamil',                  url: BASE + 'languages/tam.m3u' },
    { section: 'Popular',              name: 'Telugu',                 url: BASE + 'languages/tel.m3u' },
    { section: 'Popular',              name: 'English',                url: BASE + 'languages/eng.m3u' },
    { section: 'Popular',              name: 'All channels (large)',   url: BASE + 'index.m3u' },
    { section: 'Indian Languages',     name: 'Kannada',                url: BASE + 'languages/kan.m3u' },
    { section: 'Indian Languages',     name: 'Bengali',                url: BASE + 'languages/ben.m3u' },
    { section: 'Indian Languages',     name: 'Marathi',                url: BASE + 'languages/mar.m3u' },
    { section: 'Indian Languages',     name: 'Punjabi',                url: BASE + 'languages/pan.m3u' },
    { section: 'Indian Languages',     name: 'Gujarati',               url: BASE + 'languages/guj.m3u' },
    { section: 'Indian Languages',     name: 'Urdu',                   url: BASE + 'languages/urd.m3u' },
    { section: 'Indian Languages',     name: 'Odia',                   url: BASE + 'languages/ory.m3u' },
    { section: 'Indian Languages',     name: 'Assamese',               url: BASE + 'languages/asm.m3u' },
    { section: 'Indian Languages',     name: 'Sindhi',                 url: BASE + 'languages/snd.m3u' },
    { section: 'Indian Languages',     name: 'Nepali',                 url: BASE + 'languages/nep.m3u' },
    { section: 'TV Shows & More',      name: 'Series',                 url: BASE + 'categories/series.m3u' },
    { section: 'TV Shows & More',      name: 'Animation',              url: BASE + 'categories/animation.m3u' },
    { section: 'TV Shows & More',      name: 'Family',                 url: BASE + 'categories/family.m3u' },
    { section: 'TV Shows & More',      name: 'Classic',                url: BASE + 'categories/classic.m3u' },
    { section: 'TV Shows & More',      name: 'Lifestyle',              url: BASE + 'categories/lifestyle.m3u' },
    { section: 'TV Shows & More',      name: 'Cooking',                url: BASE + 'categories/cooking.m3u' },
    { section: 'TV Shows & More',      name: 'Travel',                 url: BASE + 'categories/travel.m3u' },
    { section: 'Categories',           name: 'News',                   url: BASE + 'categories/news.m3u' },
    { section: 'Categories',           name: 'Music',                  url: BASE + 'categories/music.m3u' },
    { section: 'Categories',           name: 'Sports',                 url: BASE + 'categories/sports.m3u' },
    { section: 'Categories',           name: 'Movies',                 url: BASE + 'categories/movies.m3u' },
    { section: 'Categories',           name: 'Kids',                   url: BASE + 'categories/kids.m3u' },
    { section: 'Categories',           name: 'Documentary',            url: BASE + 'categories/documentary.m3u' },
    { section: 'Categories',           name: 'Entertainment',          url: BASE + 'categories/entertainment.m3u' },
    { section: 'Categories',           name: 'Comedy',                 url: BASE + 'categories/comedy.m3u' },
    { section: 'Categories',           name: 'Religious',              url: BASE + 'categories/religious.m3u' },
    { section: 'Categories',           name: 'Education',              url: BASE + 'categories/education.m3u' },
    { section: 'Categories',           name: 'Business',               url: BASE + 'categories/business.m3u' },
    { section: 'Categories',           name: 'Science & Tech',         url: BASE + 'categories/science.m3u' },
    { section: 'Categories',           name: 'Weather',                url: BASE + 'categories/weather.m3u' },
    { section: 'Categories',           name: 'Auto',                   url: BASE + 'categories/auto.m3u' },
    { section: 'Categories',           name: 'Shop',                   url: BASE + 'categories/shop.m3u' },
    { section: 'Categories',           name: 'Outdoor',                url: BASE + 'categories/outdoor.m3u' },
    { section: 'International Languages', name: 'Arabic',              url: BASE + 'languages/ara.m3u' },
    { section: 'International Languages', name: 'Spanish',             url: BASE + 'languages/spa.m3u' },
    { section: 'International Languages', name: 'French',              url: BASE + 'languages/fra.m3u' },
    { section: 'International Languages', name: 'German',              url: BASE + 'languages/deu.m3u' },
    { section: 'International Languages', name: 'Portuguese',          url: BASE + 'languages/por.m3u' },
    { section: 'International Languages', name: 'Russian',             url: BASE + 'languages/rus.m3u' },
    { section: 'International Languages', name: 'Turkish',             url: BASE + 'languages/tur.m3u' },
    { section: 'International Languages', name: 'Indonesian',          url: BASE + 'languages/ind.m3u' },
    { section: 'International Languages', name: 'Chinese',             url: BASE + 'languages/zho.m3u' },
    { section: 'International Languages', name: 'Japanese',            url: BASE + 'languages/jpn.m3u' },
    { section: 'International Languages', name: 'Korean',              url: BASE + 'languages/kor.m3u' },
    { section: 'Countries',            name: 'United Arab Emirates',   url: BASE + 'countries/ae.m3u' },
    { section: 'Countries',            name: 'Qatar',                  url: BASE + 'countries/qa.m3u' },
    { section: 'Countries',            name: 'Saudi Arabia',           url: BASE + 'countries/sa.m3u' },
    { section: 'Countries',            name: 'United Kingdom',         url: BASE + 'countries/gb.m3u' },
    { section: 'Countries',            name: 'United States',          url: BASE + 'countries/us.m3u' },
    { section: 'Countries',            name: 'Pakistan',               url: BASE + 'countries/pk.m3u' },
    { section: 'Countries',            name: 'Bangladesh',             url: BASE + 'countries/bd.m3u' },
    { section: 'Countries',            name: 'Sri Lanka',              url: BASE + 'countries/lk.m3u' },
    { section: 'Countries',            name: 'Nepal',                  url: BASE + 'countries/np.m3u' },
    { section: 'Countries',            name: 'Singapore',              url: BASE + 'countries/sg.m3u' },
    { section: 'Countries',            name: 'Malaysia',               url: BASE + 'countries/my.m3u' },
    { section: 'Countries',            name: 'Indonesia',              url: BASE + 'countries/id.m3u' },
    { section: 'Countries',            name: 'Philippines',            url: BASE + 'countries/ph.m3u' },
    { section: 'Countries',            name: 'Australia',              url: BASE + 'countries/au.m3u' },
    { section: 'Countries',            name: 'Canada',                 url: BASE + 'countries/ca.m3u' },
    { section: 'Countries',            name: 'Germany',                url: BASE + 'countries/de.m3u' },
    { section: 'Countries',            name: 'France',                 url: BASE + 'countries/fr.m3u' },
    { section: 'Countries',            name: 'Turkey',                 url: BASE + 'countries/tr.m3u' },
    { section: 'Countries',            name: 'Japan',                  url: BASE + 'countries/jp.m3u' },
    { section: 'Countries',            name: 'South Korea',            url: BASE + 'countries/kr.m3u' },
    { section: 'Countries',            name: 'South Africa',           url: BASE + 'countries/za.m3u' },
    { section: 'Countries',            name: 'Nigeria',                url: BASE + 'countries/ng.m3u' },
    { section: 'Countries',            name: 'Egypt',                  url: BASE + 'countries/eg.m3u' }
  ];

  // ââ Storage helpers ââââââââââââââââââââââââââââââââââââââââââââââââââââââ
  function storageGet(key, def) {
    try { var v = localStorage.getItem(key); return v === null ? def : v; } catch(e) { return def; }
  }
  function storageSet(key, val) {
    try { localStorage.setItem(key, val); } catch(e) {}
  }
  function storageGetInt(key, def) { return parseInt(storageGet(key, def), 10) || def; }

  // ââ State ââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
  var currentScreen = 'home';
  var focusedEl = null;
  var channels = [];           // currently loaded channel list
  var filteredChannels = [];   // after search filter
  var currentChannel = null;
  var hlsPlayer = null;
  var themeIndex = storageGetInt('hv_theme', 0);
  var aspectMode = storageGetInt('hv_aspect', 0); // 0=stretch, 1=fit, 2=zoom
  var ASPECT_MODES = ['stretch', 'fit', 'zoom'];
  var ASPECT_LABELS = ['Stretch', 'Fit', 'Zoom'];
  var loadedPlaylistUrl = storageGet('hv_loaded_url', '');
  var customUrls = [];
  var ctrlHideTimer = null;
  var idleFullscreenTimer = null;
  try { customUrls = JSON.parse(storageGet('hv_custom_urls', '[]')) || []; } catch(e) { customUrls = []; }

  var SCREENS = ['home', 'live', 'library', 'search', 'settings', 'about'];

  // ââ DOM helpers ââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
  function $(id) { return document.getElementById(id); }
  function all(sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); }

  // ââ Theme ââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
  function applyTheme(idx) {
    themeIndex = idx;
    storageSet('hv_theme', idx);
    var t = THEMES[idx] || THEMES[0];
    var s = document.documentElement.style;
    s.setProperty('--bg',      t.bg);
    s.setProperty('--surface', t.surface);
    s.setProperty('--accent',  t.accent);
    s.setProperty('--glow',    t.glow);
    // also tint sidebar background directly
    var sb = document.getElementById('sidebar');
    if (sb) sb.style.background = t.surface;
    document.body.style.background = t.bg;
  }

  // ââ Focus management âââââââââââââââââââââââââââââââââââââââââââââââââââââ
  function visibleFocusables() {
    return all('.focusable').filter(function (el) {
      return el.offsetWidth > 0 && el.offsetHeight > 0;
    });
  }

  function setFocus(el) {
    if (!el) return;
    if (focusedEl) focusedEl.classList.remove('focused');
    focusedEl = el;
    el.classList.add('focused');
    // Manual scroll for ch-list (scrollIntoView unreliable in WebOS Chromium 53)
    var chList = $('ch-list');
    if (chList && chList.contains(el)) {
      var elTop = el.offsetTop - chList.offsetTop;
      var elBottom = elTop + el.offsetHeight;
      var listScroll = chList.scrollTop;
      var listHeight = chList.offsetHeight;
      if (elTop < listScroll) {
        chList.scrollTop = elTop - 8;
      } else if (elBottom > listScroll + listHeight) {
        chList.scrollTop = elBottom - listHeight + 8;
      }
    } else if (el.scrollIntoView) {
      try { el.scrollIntoView({ block: 'nearest' }); } catch(e) {}
    }
  }

  function center(el) {
    var r = el.getBoundingClientRect();
    return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
  }

  function move(dir) {
    var list = visibleFocusables();
    if (!focusedEl || list.indexOf(focusedEl) === -1) { setFocus(list[0]); return; }
    var c = center(focusedEl);
    var best = null, bestScore = Infinity;
    for (var i = 0; i < list.length; i++) {
      var el = list[i];
      if (el === focusedEl) continue;
      var p = center(el);
      var dx = p.x - c.x, dy = p.y - c.y;
      var ok = (dir === 'left'  && dx < -5) ||
               (dir === 'right' && dx >  5) ||
               (dir === 'up'    && dy < -5) ||
               (dir === 'down'  && dy >  5);
      if (!ok) continue;
      var main = (dir === 'left' || dir === 'right') ? Math.abs(dx) : Math.abs(dy);
      var side = (dir === 'left' || dir === 'right') ? Math.abs(dy) : Math.abs(dx);
      var score = main + side * 2.5;
      if (score < bestScore) { bestScore = score; best = el; }
    }
    if (best) setFocus(best);
  }

  // ââ Aspect ratio âââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
  function applyAspect(mode) {
    aspectMode = mode;
    storageSet('hv_aspect', mode);
    var video = $('hv-video');
    var wrap  = $('player-wrap');
    if (!video || !wrap) return;

    var cw = wrap.offsetWidth  || 1920;
    var ch = wrap.offsetHeight || 1080;
    var vw = video.videoWidth  || 16;
    var vh = video.videoHeight || 9;
    var w, h, t, l;

    if (mode === 0) {           // Stretch â fill the box completely
      w = cw; h = ch; t = 0; l = 0;
    } else if (mode === 1) {   // Fit â letterbox / pillarbox
      var ratio = Math.min(cw / vw, ch / vh);
      w = Math.round(vw * ratio);
      h = Math.round(vh * ratio);
      t = Math.round((ch - h) / 2);
      l = Math.round((cw - w) / 2);
    } else {                   // Zoom â fill and crop edges
      var ratio2 = Math.max(cw / vw, ch / vh);
      w = Math.round(vw * ratio2);
      h = Math.round(vh * ratio2);
      t = Math.round((ch - h) / 2);
      l = Math.round((cw - w) / 2);
    }

    video.style.width  = w + 'px';
    video.style.height = h + 'px';
    video.style.top    = t + 'px';
    video.style.left   = l + 'px';

    var lbl = $('ctrl-aspect-label');
    if (lbl) lbl.textContent = ASPECT_LABELS[mode];
  }

  function cycleAspect() {
    applyAspect((aspectMode + 1) % ASPECT_MODES.length);
  }

  // ââ Fullscreen ââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
  function isFullscreen() {
    return !!(document.fullscreenElement || document.webkitFullscreenElement ||
              document.mozFullScreenElement);
  }

  function toggleFullscreen() {
    var wrap = $('player-wrap');
    var fsLabel = $('ctrl-fs-label');
    if (!wrap) return;
    if (isFullscreen()) {
      if (document.exitFullscreen) document.exitFullscreen();
      else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
      else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
      if (fsLabel) fsLabel.textContent = 'â¶ Full';
    } else {
      if (wrap.requestFullscreen) wrap.requestFullscreen();
      else if (wrap.webkitRequestFullscreen) wrap.webkitRequestFullscreen();
      else if (wrap.mozRequestFullScreen) wrap.mozRequestFullScreen();
      if (fsLabel) fsLabel.textContent = 'â Exit';
      // Push history so back key exits fullscreen via popstate
      try { history.pushState({ screen: 'live', playing: true, fullscreen: true }, ''); } catch(e) {}
    }
  }

  // Handle fullscreen change events
  function onFsChange() {
    var fsLabel = $('ctrl-fs-label');
    if (fsLabel) fsLabel.textContent = isFullscreen() ? 'â Exit' : 'â¶ Full';
    // Re-apply aspect ratio since container dimensions changed
    setTimeout(function () { applyAspect(aspectMode); }, 100);
  }
  document.addEventListener('fullscreenchange', onFsChange);
  document.addEventListener('webkitfullscreenchange', onFsChange);

  // ââ Auto fullscreen when idle âââââââââââââââââââââââââââââââââââââââââââââ
  function resetIdleFullscreenTimer() {
    clearTimeout(idleFullscreenTimer);
    if (currentChannel && !isFullscreen()) {
      idleFullscreenTimer = setTimeout(function () {
        if (currentChannel && !isFullscreen()) { toggleFullscreen(); }
      }, 10000);
    }
  }

  // ââ Player controls overlay show/hide âââââââââââââââââââââââââââââââââââââ
  function showPlayerControls() {
    var ctrl = $('player-controls');
    if (!ctrl) return;
    ctrl.classList.remove('hidden');
    // Also briefly re-show OSD
    var osdEl = $('player-osd');
    if (osdEl) {
      osdEl.classList.remove('osd-hidden');
      clearTimeout(window._osdHideTimer);
      window._osdHideTimer = setTimeout(function () {
        osdEl.classList.add('osd-hidden');
      }, 4000);
    }
    clearTimeout(ctrlHideTimer);
    ctrlHideTimer = setTimeout(function () {
      ctrl.classList.add('hidden');
    }, 5000);
  }

  // ââ Screen navigation âââââââââââââââââââââââââââââââââââââââââââââââââââââ
  function showScreen(name) {
    currentScreen = name;
    for (var i = 0; i < SCREENS.length; i++) {
      var s = SCREENS[i];
      var el = $('screen-' + s);
      if (el) el.classList.toggle('hidden', s !== name);
    }
    all('.menu-item').forEach(function (m) {
      m.classList.toggle('active', m.getAttribute('data-screen') === name);
    });
    // Push history state so webOS routes back key through popstate (not system menu)
    try { history.pushState({ screen: name }, ''); } catch(e) {}
    // per-screen setup
    if (name === 'live') {
      renderChannelList();
      var chSearch = $('ch-search');
      if (channels.length > 0 && chSearch) {
        setTimeout(function () { setFocus(chSearch); }, 60);
      }
    } else if (name === 'library') {
      renderLibrary();
    } else if (name === 'settings') {
      renderSettings();
    } else if (name === 'search') {
      setTimeout(function () { var si = $('search-input'); if (si) setFocus(si); }, 60);
    }
  }

  // ââ Activate (OK press or click) âââââââââââââââââââââââââââââââââââââââââ
  function activate() {
    if (!focusedEl) return;
    var sc = focusedEl.getAttribute('data-screen');
    if (sc) { showScreen(sc); return; }
    var gt = focusedEl.getAttribute('data-goto');
    if (gt) { showScreen(gt); return; }
    var libUrl = focusedEl.getAttribute('data-liburl');
    if (libUrl) { loadPlaylist(libUrl, focusedEl.textContent); return; }
    var chUrl = focusedEl.getAttribute('data-churl');
    if (chUrl !== null) { playChannel(parseInt(focusedEl.getAttribute('data-chidx'), 10)); return; }
    var srUrl = focusedEl.getAttribute('data-srurl');
    if (srUrl !== null) { playUrl(focusedEl.getAttribute('data-srname'), focusedEl.getAttribute('data-srgroup'), srUrl); return; }
    if (focusedEl.id === 'custom-add') { addCustomUrl(); return; }
    if (focusedEl.id === 'ctrl-aspect') { cycleAspect(); return; }
    if (focusedEl.id === 'ctrl-fullscreen') { toggleFullscreen(); return; }
    if (focusedEl.id === 'ctrl-exit') { goBack(); return; }
    var thIdx = focusedEl.getAttribute('data-theme');
    if (thIdx !== null) { applyTheme(parseInt(thIdx, 10)); renderSettings(); return; }
    var delIdx = focusedEl.getAttribute('data-delurl');
    if (delIdx !== null) { deleteCustomUrl(focusedEl.getAttribute('data-delurl')); return; }
    // For inputs: nothing (typing handled natively)
  }

  function goBack() {
    // 1. Exit fullscreen first if active
    if (isFullscreen()) {
      if (document.exitFullscreen) document.exitFullscreen();
      else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
      else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
      return;
    }
    // 2. If a channel is playing, stop it and return to channel list
    if (currentChannel) {
      clearTimeout(idleFullscreenTimer);
      var video2 = $('hv-video');
      if (video2) { video2.pause(); video2.src = ''; }
      if (hlsPlayer) { try { hlsPlayer.destroy(); } catch(e) {} hlsPlayer = null; }
      currentChannel = null;
      var ctrl2 = $('player-controls');
      if (ctrl2) ctrl2.classList.add('hidden');
      var osdEl2 = $('player-osd');
      if (osdEl2) osdEl2.classList.add('osd-hidden');
      // Show channel panel + sidebar again
      var liveScreen2 = $('screen-live');
      if (liveScreen2) liveScreen2.classList.remove('playing');
      var appEl2 = $('app');
      if (appEl2) appEl2.classList.remove('watching');
      var chSearch2 = $('ch-search');
      if (chSearch2) setTimeout(function () { setFocus(chSearch2); }, 60);
      return;
    }
    // 3. Navigate back within the app
    if (currentScreen !== 'home') {
      showScreen('home');
      setTimeout(function () { setFocus(document.querySelector('.menu-item[data-screen="home"]')); }, 60);
      return;
    }
    // 4. Already on home â do nothing (prevent app exit)
    // On WebOS, pressing back on home could exit; keep user in app instead.
    // Only allow platform back if user confirms (here we just do nothing).
  }

  // ââ Keyboard handler ââââââââââââââââââââââââââââââââââââââââââââââââââââââ
  function handleKeyDown(e) {
    var k = e.keyCode;
    var isInput = focusedEl && (focusedEl.tagName === 'INPUT' || focusedEl.tagName === 'TEXTAREA');
    var isChSearch = focusedEl && focusedEl.id === 'ch-search';
    // Reset idle-fullscreen timer on any key while watching
    if (currentChannel) { resetIdleFullscreenTimer(); }

    // Back button â handle first before anything else
    // But let Backspace (k=8) work normally when user is typing in the search box
    if (k === 461 || k === 8) {
      if (k === 8 && isChSearch) {
        return; // let the browser delete the character
      }
      e.preventDefault(); e.stopPropagation(); e.stopImmediatePropagation();
      goBack();
      return false;
    }

    var isCtrlFocused = focusedEl && (
      focusedEl.id === 'ctrl-aspect' ||
      focusedEl.id === 'ctrl-fullscreen' ||
      focusedEl.id === 'ctrl-exit'
    );

    // Arrow keys while watching a channel â show controls and navigate within them
    if (currentScreen === 'live' && currentChannel && !isInput) {
      if (k === 37 || k === 38 || k === 39 || k === 40) {
        var ctrl0 = $('player-controls');
        var ctrlVisible0 = ctrl0 && !ctrl0.classList.contains('hidden');
        var btns = ['ctrl-fullscreen', 'ctrl-aspect', 'ctrl-exit'];
        // Every arrow key resets the hide timer
        showPlayerControls();
        if (!ctrlVisible0) {
          // Controls were hidden â focus exit button
          setTimeout(function () {
            var exitBtn0 = $('ctrl-exit');
            if (exitBtn0) setFocus(exitBtn0);
          }, 50);
          e.preventDefault();
          return;
        } else if (isCtrlFocused) {
          // On a ctrl button â navigate left/right between them
          var ci = btns.indexOf(focusedEl.id);
          if (k === 37 && ci > 0) { setFocus($(btns[ci - 1])); }
          else if (k === 39 && ci < btns.length - 1) { setFocus($(btns[ci + 1])); }
          e.preventDefault();
          return;
        } else {
          // Controls visible, focus not on ctrl â move focus to exit button
          var exitBtn1 = $('ctrl-exit');
          if (exitBtn1) setFocus(exitBtn1);
          e.preventDefault();
          return;
        }
      }
    }

    if (k === 37) {
      if (!isInput) { move('left'); e.preventDefault(); }
    } else if (k === 38) {
      if (!isInput) { move('up'); e.preventDefault(); }
      else if (isChSearch) { move('up'); e.preventDefault(); }
    } else if (k === 39) {
      if (!isInput) { move('right'); e.preventDefault(); }
    } else if (k === 40) {
      if (!isInput) { move('down'); e.preventDefault(); }
      else if (isChSearch) {
        var firstCh = document.querySelector('#ch-list .ch-item');
        if (firstCh) { setFocus(firstCh); e.preventDefault(); }
        else { move('down'); e.preventDefault(); }
      }
    } else if (k === 13) {
      if (!isInput) {
        if (currentScreen === 'live' && currentChannel) {
          var ctrl = $('player-controls');
          var ctrlVisible = ctrl && !ctrl.classList.contains('hidden');
          if (ctrlVisible && isCtrlFocused) {
            activate();
          } else if (!ctrlVisible) {
            showPlayerControls();
            var exitBtn = $('ctrl-exit');
            if (exitBtn) setFocus(exitBtn);
          } else {
            activate();
          }
        } else {
          activate();
        }
        e.preventDefault();
      }
    }
  }

  // Single capture-phase listener on window only (avoids double-firing)
  window.addEventListener('keydown', handleKeyDown, true);

  // ââ Magic Remote / mouse wheel scroll throttle on channel list âââââââââââââ
  // LG Magic Remote fires many wheel events per gesture â cap to one focus-move
  // per ~150ms so the list doesn't fly past every channel.
  var wheelThrottleTimer = null;
  var chListEl = $('ch-list');
  if (chListEl) {
    chListEl.addEventListener('wheel', function(e) {
      e.preventDefault();
      if (wheelThrottleTimer) return;
      wheelThrottleTimer = setTimeout(function() { wheelThrottleTimer = null; }, 150);
      // Move focus one item up or down
      var items = Array.prototype.slice.call(chListEl.querySelectorAll('.ch-item'));
      if (!items.length) return;
      var idx = focusedEl ? items.indexOf(focusedEl) : -1;
      if (e.deltaY > 0) {
        idx = idx < items.length - 1 ? idx + 1 : idx;
      } else {
        idx = idx > 0 ? idx - 1 : 0;
      }
      setFocus(items[idx]);
    }, { passive: false });
  }

  // ââ WebOS back key via history API ââââââââââââââââââââââââââââââââââââââââ
  // WebOS routes back button through popstate when history entries exist
  window.addEventListener('popstate', function (e) {
    goBack();
  });
  // Seed an initial history entry so popstate fires on first back press
  try { history.replaceState({ screen: 'home' }, ''); } catch(e) {}

  // ââ Magic Remote hover & click ââââââââââââââââââââââââââââââââââââââââââââ
  document.addEventListener('mouseover', function (e) {
    var el = e.target;
    while (el && el !== document.body) {
      if (el.classList && el.classList.contains('focusable')) {
        setFocus(el); return;
      }
      el = el.parentNode;
    }
  });
  document.addEventListener('click', function (e) {
    // If watching a channel and clicking on player area, show controls
    if (currentScreen === 'live' && currentChannel) {
      var pw = $('player-wrap');
      if (pw && pw.contains(e.target)) {
        showPlayerControls();
      }
    }
    var el = e.target;
    while (el && el !== document.body) {
      if (el.classList && el.classList.contains('focusable')) {
        setFocus(el); activate(); return;
      }
      el = el.parentNode;
    }
  });

  // ââ M3U parser âââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
  function parseM3u(text) {
    var out = [];
    var name = '', group = 'Other', logo = null;
    var attrRe = /([\w-]+)="([^"]*)"/g;
    var lines = text.split('\n');
    for (var i = 0; i < lines.length; i++) {
      var l = lines[i].replace(/\r$/, '').trim();
      if (l.indexOf('#EXTINF') === 0) {
        // reset
        name = ''; group = 'Other'; logo = null;
        // parse attrs
        var m;
        attrRe.lastIndex = 0;
        while ((m = attrRe.exec(l)) !== null) {
          if (m[1] === 'group-title' && m[2]) group = m[2];
          if (m[1] === 'tvg-logo' && m[2]) logo = m[2];
        }
        // name after last comma
        var ci = l.lastIndexOf(',');
        if (ci !== -1) name = l.substring(ci + 1).trim();
      } else if (l.length > 0 && l.charAt(0) !== '#') {
        out.push({ name: name || l, url: l, group: group, logo: logo });
        name = ''; group = 'Other'; logo = null;
      }
    }
    return out;
  }

  // ââ XHR fetch ââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
  function xhrGet(url, cb) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.timeout = 30000;
    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 400) {
        cb(null, xhr.responseText);
      } else {
        cb('HTTP ' + xhr.status);
      }
    };
    xhr.onerror   = function () { cb('Network error'); };
    xhr.ontimeout = function () { cb('Timeout'); };
    xhr.send();
  }

  // ââ Load playlist âââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
  function loadPlaylist(url, label) {
    var libStatus = $('lib-status');
    if (libStatus) libStatus.textContent = 'Loading ' + (label || url) + 'â¦';
    xhrGet(url, function (err, text) {
      if (err) {
        if (libStatus) libStatus.textContent = 'Failed to load: ' + err;
        return;
      }
      channels = parseM3u(text);
      filteredChannels = channels.slice();
      loadedPlaylistUrl = url;
      storageSet('hv_loaded_url', url);
      if (libStatus) libStatus.textContent = 'Loaded: ' + channels.length + ' channels from ' + (label || url);
      // Update now-playing bar hint on home
      updateNowPlayingBar();
      // Mark library item
      all('.lib-item').forEach(function (el) {
        el.classList.toggle('lib-loaded', el.getAttribute('data-liburl') === url);
      });
      // Switch to Live TV
      showScreen('live');
    });
  }

  // ââ Channel list renderer âââââââââââââââââââââââââââââââââââââââââââââââââ
  function renderChannelList() {
    var list = $('ch-list');
    var empty = $('ch-empty');
    if (!list) return;
    list.innerHTML = '';
    var query = ($('ch-search') ? $('ch-search').value : '').toLowerCase();
    filteredChannels = channels.filter(function (c) {
      return !query || c.name.toLowerCase().indexOf(query) !== -1 || c.group.toLowerCase().indexOf(query) !== -1;
    });
    if (filteredChannels.length === 0) {
      if (empty) empty.classList.remove('hidden');
      return;
    }
    if (empty) empty.classList.add('hidden');
    for (var i = 0; i < filteredChannels.length; i++) {
      (function (idx) {
        var c = filteredChannels[idx];
        var div = document.createElement('div');
        div.className = 'ch-item focusable' + (currentChannel && currentChannel.url === c.url ? ' ch-playing' : '');
        div.setAttribute('tabindex', '-1');
        div.setAttribute('data-churl', c.url);
        div.setAttribute('data-chidx', idx);
        div.innerHTML = '<div class="ch-name">' + esc(c.name) + '</div>' +
                        '<div class="ch-group">' + esc(c.group) + '</div>';
        list.appendChild(div);
      })(i);
    }
  }

  // ââ Channel search input ââââââââââââââââââââââââââââââââââââââââââââââââââ
  var chSearchTimer = null;
  var chSearchEl = $('ch-search');
  if (chSearchEl) {
    chSearchEl.addEventListener('input', function () {
      clearTimeout(chSearchTimer);
      chSearchTimer = setTimeout(renderChannelList, 200);
    });
    chSearchEl.addEventListener('focus', function () { setFocus(chSearchEl); });
  }

  var searchInputEl = $('search-input');
  if (searchInputEl) {
    searchInputEl.addEventListener('input', function () {
      renderSearchResults(searchInputEl.value);
    });
    searchInputEl.addEventListener('focus', function () { setFocus(searchInputEl); });
  }

  // ââ Play channel by index in filteredChannels âââââââââââââââââââââââââââââ
  function playChannel(idx) {
    var c = filteredChannels[idx];
    if (!c) return;
    playUrl(c.name, c.group, c.url);
  }

  function playUrl(name, group, url) {
    currentChannel = { name: name, group: group, url: url };
    updateNowPlayingBar();
    var video = $('hv-video');
    var spinner = $('player-spinner');
    var errEl = $('player-error');
    var osdName = $('osd-name');
    var osdGroup = $('osd-group');
    var osdStatus = $('osd-status');
    if (osdName) osdName.textContent = name;
    if (osdGroup) osdGroup.textContent = group;
    if (osdStatus) osdStatus.textContent = '';
    var ctrlName = $('ctrl-name');
    var ctrlGroup = $('ctrl-group');
    if (ctrlName) ctrlName.textContent = name;
    if (ctrlGroup) ctrlGroup.textContent = group;
    // Show OSD then auto-hide after 4 seconds
    var osdEl = $('player-osd');
    if (osdEl) {
      osdEl.classList.remove('osd-hidden');
      clearTimeout(window._osdHideTimer);
      window._osdHideTimer = setTimeout(function () {
        osdEl.classList.add('osd-hidden');
      }, 4000);
    }
    // Hide channel panel + sidebar â expand video to full width
    var liveScreen = $('screen-live');
    if (liveScreen) liveScreen.classList.add('playing');
    var appEl = $('app');
    if (appEl) appEl.classList.add('watching');
    // Push history so webOS back key triggers popstate â goBack()
    try { history.pushState({ screen: 'live', playing: true }, ''); } catch(e) {}
    showPlayerControls();
    resetIdleFullscreenTimer();
    if (spinner) spinner.classList.remove('hidden');
    if (errEl) errEl.classList.add('hidden');
    // destroy previous hls
    if (hlsPlayer) {
      try { hlsPlayer.destroy(); } catch(e) {}
      hlsPlayer = null;
    }
    var isHls = url.toLowerCase().indexOf('.m3u8') !== -1 ||
                url.toLowerCase().indexOf('.m3u')  !== -1;
    if (isHls && window.Hls && Hls.isSupported()) {
      hlsPlayer = new Hls({ enableWorker: false, maxBufferLength: 30 });
      hlsPlayer.loadSource(url);
      hlsPlayer.attachMedia(video);
      hlsPlayer.on(Hls.Events.MANIFEST_PARSED, function () {
        video.play();
        if (spinner) spinner.classList.add('hidden');
        if (osdStatus) osdStatus.textContent = 'Live';
      });
      video.addEventListener('loadedmetadata', function () { applyAspect(aspectMode); });
      hlsPlayer.on(Hls.Events.ERROR, function (event, data) {
        if (data.fatal) {
          if (spinner) spinner.classList.add('hidden');
          if (errEl) errEl.classList.remove('hidden');
          if (osdStatus) osdStatus.textContent = 'Error';
        }
      });
    } else {
      // Native video (MP4 / native HLS on some platforms)
      video.src = url;
      video.load();
      video.play();
      video.oncanplay = function () {
        if (spinner) spinner.classList.add('hidden');
        if (osdStatus) osdStatus.textContent = 'Live';
        applyAspect(aspectMode);
      };
      video.onerror = function () {
        if (spinner) spinner.classList.add('hidden');
        if (errEl) errEl.classList.remove('hidden');
        if (osdStatus) osdStatus.textContent = 'Error';
      };
    }
    // highlight in list
    all('.ch-item').forEach(function (el) {
      el.classList.toggle('ch-playing', el.getAttribute('data-churl') === url);
    });
  }

  // ââ Now-playing bar on Home âââââââââââââââââââââââââââââââââââââââââââââââ
  function updateNowPlayingBar() {
    var bar = $('now-playing-bar');
    var npName = $('np-name');
    if (!bar) return;
    if (currentChannel) {
      bar.classList.remove('hidden');
      if (npName) npName.textContent = currentChannel.name;
    } else {
      bar.classList.add('hidden');
    }
  }

  // ââ Library renderer ââââââââââââââââââââââââââââââââââââââââââââââââââââââ
  function renderLibrary() {
    var container = $('lib-sections');
    if (!container) return;
    container.innerHTML = '';
    // group by section
    var sections = [];
    var sectionMap = {};
    for (var i = 0; i < LIBRARY.length; i++) {
      var item = LIBRARY[i];
      if (!sectionMap[item.section]) {
        sectionMap[item.section] = [];
        sections.push(item.section);
      }
      sectionMap[item.section].push(item);
    }
    // custom urls section
    if (customUrls.length > 0) {
      var customSectionDiv = document.createElement('div');
      customSectionDiv.innerHTML = '<div class="lib-section-title">My Playlists</div>';
      var customRow = document.createElement('div');
      customRow.className = 'lib-row';
      for (var ci = 0; ci < customUrls.length; ci++) {
        (function (u) {
          var label = u.length > 50 ? u.substring(0, 50) + 'â¦' : u;
          var btn = document.createElement('div');
          btn.className = 'lib-item focusable' + (loadedPlaylistUrl === u ? ' lib-loaded' : '');
          btn.setAttribute('tabindex', '-1');
          btn.setAttribute('data-liburl', u);
          btn.textContent = label;
          customRow.appendChild(btn);
        })(customUrls[ci]);
      }
      customSectionDiv.appendChild(customRow);
      container.appendChild(customSectionDiv);
    }
    for (var si = 0; si < sections.length; si++) {
      var sName = sections[si];
      var secDiv = document.createElement('div');
      var titleDiv = document.createElement('div');
      titleDiv.className = 'lib-section-title';
      titleDiv.textContent = sName;
      secDiv.appendChild(titleDiv);
      var rowDiv = document.createElement('div');
      rowDiv.className = 'lib-row';
      var items = sectionMap[sName];
      for (var ii = 0; ii < items.length; ii++) {
        (function (it) {
          var btn = document.createElement('div');
          btn.className = 'lib-item focusable' + (loadedPlaylistUrl === it.url ? ' lib-loaded' : '');
          btn.setAttribute('tabindex', '-1');
          btn.setAttribute('data-liburl', it.url);
          btn.textContent = it.name;
          rowDiv.appendChild(btn);
        })(items[ii]);
      }
      secDiv.appendChild(rowDiv);
      container.appendChild(secDiv);
    }
    // focus first item
    setTimeout(function () {
      var first = container.querySelector('.lib-item');
      if (first) setFocus(first);
    }, 60);
  }

  // ââ Search renderer âââââââââââââââââââââââââââââââââââââââââââââââââââââââ
  function renderSearchResults(query) {
    var container = $('search-results');
    if (!container) return;
    container.innerHTML = '';
    if (!query || query.length < 2) return;
    var q = query.toLowerCase();
    var matches = channels.filter(function (c) {
      return c.name.toLowerCase().indexOf(q) !== -1 || c.group.toLowerCase().indexOf(q) !== -1;
    }).slice(0, 80);
    for (var i = 0; i < matches.length; i++) {
      (function (c) {
        var div = document.createElement('div');
        div.className = 'sr-item focusable';
        div.setAttribute('tabindex', '-1');
        div.setAttribute('data-srurl', c.url);
        div.setAttribute('data-srname', c.name);
        div.setAttribute('data-srgroup', c.group);
        div.innerHTML = '<div class="sr-name">' + esc(c.name) + '</div>' +
                        '<div class="sr-group">' + esc(c.group) + '</div>';
        container.appendChild(div);
      })(matches[i]);
    }
  }

  // ââ Settings renderer ââââââââââââââââââââââââââââââââââââââââââââââââââââââ
  function renderSettings() {
    var themeRow = $('theme-row');
    if (themeRow) {
      themeRow.innerHTML = '';
      for (var i = 0; i < THEMES.length; i++) {
        (function (idx) {
          var btn = document.createElement('div');
          btn.className = 'theme-btn focusable' + (themeIndex === idx ? ' theme-active' : '');
          btn.style.background = THEMES[idx].surface;
          btn.style.color = THEMES[idx].accent;
          btn.setAttribute('tabindex', '-1');
          btn.setAttribute('data-theme', idx);
          btn.textContent = THEMES[idx].name;
          themeRow.appendChild(btn);
        })(i);
      }
    }
    var savedList = $('saved-list');
    if (savedList) {
      savedList.innerHTML = '';
      var allUrls = customUrls.slice();
      if (loadedPlaylistUrl && allUrls.indexOf(loadedPlaylistUrl) === -1) {
        // show currently loaded url even if not saved as custom
      }
      if (allUrls.length === 0) {
        savedList.innerHTML = '<p class="info">No custom playlists saved yet.</p>';
      } else {
        for (var ci = 0; ci < allUrls.length; ci++) {
          (function (u, idx) {
            var div = document.createElement('div');
            div.className = 'saved-item';
            div.innerHTML = '<span class="saved-url">' + esc(u) + '</span>' +
              '<span class="saved-del focusable" tabindex="-1" data-delurl="' + esc(u) + '">â</span>';
            savedList.appendChild(div);
          })(allUrls[ci], ci);
        }
      }
    }
    setTimeout(function () {
      var first = $('theme-row') ? $('theme-row').querySelector('.theme-btn') : null;
      if (first) setFocus(first);
    }, 60);
  }

  function addCustomUrl() {
    var input = $('custom-url');
    if (!input) return;
    var url = input.value.trim();
    if (!url || url.indexOf('http') !== 0) return;
    if (customUrls.indexOf(url) === -1) {
      customUrls.push(url);
      storageSet('hv_custom_urls', JSON.stringify(customUrls));
    }
    input.value = '';
    renderSettings();
    renderLibrary();
  }

  function deleteCustomUrl(url) {
    customUrls = customUrls.filter(function (u) { return u !== url; });
    storageSet('hv_custom_urls', JSON.stringify(customUrls));
    renderSettings();
    renderLibrary();
  }

  // ââ HTML escaping âââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
  function esc(s) {
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  // ââ Init ââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
  document.getElementById('ver').textContent = VERSION;
  document.getElementById('sysinfo').textContent =
    'Screen: ' + window.innerWidth + 'x' + window.innerHeight + ' | ' + navigator.userAgent.substring(0, 80);

  applyTheme(themeIndex);
  applyAspect(aspectMode);
  showScreen('home');

  setTimeout(function () {
    setFocus(document.querySelector('.menu-item[data-screen="home"]'));
  }, 80);

  // If a playlist was loaded before, reload it silently
  if (loadedPlaylistUrl) {
    xhrGet(loadedPlaylistUrl, function (err, text) {
      if (!err) {
        channels = parseM3u(text);
        filteredChannels = channels.slice();
        updateNowPlayingBar();
      }
    });
  }

})();
