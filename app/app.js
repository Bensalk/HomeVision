// HomeVision v0.2.0 — ES5 IIFE — Chromium 53 / webOS 4.x compatible
(function () {
  'use strict';

  var VERSION = '0.2.1';

  // ── Themes ─────────────────────────────────────────────────────────────
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

  // ── IPTV-org library (same as PadVision) ────────────────────────────────
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

  // ── Storage helpers ──────────────────────────────────────────────────────
  function storageGet(key, def) {
    try { var v = localStorage.getItem(key); return v === null ? def : v; } catch(e) { return def; }
  }
  function storageSet(key, val) {
    try { localStorage.setItem(key, val); } catch(e) {}
  }
  function storageGetInt(key, def) { return parseInt(storageGet(key, def), 10) || def; }

  // ── State ────────────────────────────────────────────────────────────────
  var currentScreen = 'home';
  var focusedEl = null;
  var channels = [];           // currently loaded channel list
  var filteredChannels = [];   // after search filter
  var currentChannel = null;
  var hlsPlayer = null;
  var themeIndex = storageGetInt('hv_theme', 0);
  var loadedPlaylistUrl = storageGet('hv_loaded_url', '');
  var customUrls = [];
  try { customUrls = JSON.parse(storageGet('hv_custom_urls', '[]')) || []; } catch(e) { customUrls = []; }

  var SCREENS = ['home', 'live', 'library', 'search', 'settings', 'about'];

  // ── DOM helpers ──────────────────────────────────────────────────────────
  function $(id) { return document.getElementById(id); }
  function all(sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); }

  // ── Theme ────────────────────────────────────────────────────────────────
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

  // ── Focus management ─────────────────────────────────────────────────────
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
    // scroll into view if inside a scroll container
    if (el.scrollIntoView) {
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

  // ── Screen navigation ─────────────────────────────────────────────────────
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

  // ── Activate (OK press or click) ─────────────────────────────────────────
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
    var thIdx = focusedEl.getAttribute('data-theme');
    if (thIdx !== null) { applyTheme(parseInt(thIdx, 10)); renderSettings(); return; }
    var delIdx = focusedEl.getAttribute('data-delurl');
    if (delIdx !== null) { deleteCustomUrl(focusedEl.getAttribute('data-delurl')); return; }
    // For inputs: nothing (typing handled natively)
  }

  function goBack() {
    if (currentScreen === 'live') {
      showScreen('home');
      setTimeout(function () { setFocus(document.querySelector('.menu-item[data-screen="home"]')); }, 60);
      return;
    }
    if (currentScreen !== 'home') {
      showScreen('home');
      setTimeout(function () { setFocus(document.querySelector('.menu-item[data-screen="home"]')); }, 60);
      return;
    }
    if (window.webOS && window.webOS.platformBack) {
      window.webOS.platformBack();
    } else {
      window.close();
    }
  }

  // ── Keyboard handler ──────────────────────────────────────────────────────
  document.addEventListener('keydown', function (e) {
    var k = e.keyCode;
    // If focus is on a text input, only intercept nav keys that make sense
    var isInput = focusedEl && (focusedEl.tagName === 'INPUT' || focusedEl.tagName === 'TEXTAREA');
    if (k === 37) { if (!isInput) { move('left'); e.preventDefault(); } }
    else if (k === 38) { if (!isInput) { move('up'); e.preventDefault(); } }
    else if (k === 39) { if (!isInput) { move('right'); e.preventDefault(); } }
    else if (k === 40) { if (!isInput) { move('down'); e.preventDefault(); } }
    else if (k === 13) { if (!isInput) { activate(); e.preventDefault(); } }
    else if (k === 461 || k === 8) { if (!isInput) { goBack(); e.preventDefault(); } }
  });

  // ── Magic Remote hover & click ────────────────────────────────────────────
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
    var el = e.target;
    while (el && el !== document.body) {
      if (el.classList && el.classList.contains('focusable')) {
        setFocus(el); activate(); return;
      }
      el = el.parentNode;
    }
  });

  // ── M3U parser ───────────────────────────────────────────────────────────
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

  // ── XHR fetch ────────────────────────────────────────────────────────────
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

  // ── Load playlist ─────────────────────────────────────────────────────────
  function loadPlaylist(url, label) {
    var libStatus = $('lib-status');
    if (libStatus) libStatus.textContent = 'Loading ' + (label || url) + '…';
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

  // ── Channel list renderer ─────────────────────────────────────────────────
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

  // ── Channel search input ──────────────────────────────────────────────────
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

  // ── Play channel by index in filteredChannels ─────────────────────────────
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

  // ── Now-playing bar on Home ───────────────────────────────────────────────
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

  // ── Library renderer ──────────────────────────────────────────────────────
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
          var label = u.length > 50 ? u.substring(0, 50) + '…' : u;
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

  // ── Search renderer ───────────────────────────────────────────────────────
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

  // ── Settings renderer ──────────────────────────────────────────────────────
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
              '<span class="saved-del focusable" tabindex="-1" data-delurl="' + esc(u) + '">✕</span>';
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

  // ── HTML escaping ─────────────────────────────────────────────────────────
  function esc(s) {
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  // ── Init ──────────────────────────────────────────────────────────────────
  document.getElementById('ver').textContent = VERSION;
  document.getElementById('sysinfo').textContent =
    'Screen: ' + window.innerWidth + 'x' + window.innerHeight + ' | ' + navigator.userAgent.substring(0, 80);

  applyTheme(themeIndex);
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
