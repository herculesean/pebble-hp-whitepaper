(function () {
  'use strict';

  var body = document.body;

  // ── Language Toggle ──
  var langLinks = document.querySelectorAll('[data-set-lang]');

  function setLang(lang) {
    body.className = body.className.replace(/lang-\w+/, 'lang-' + lang);
    document.documentElement.lang = lang === 'ko' ? 'ko' : 'en';
    langLinks.forEach(function (link) {
      link.classList.toggle('active', link.dataset.setLang === lang);
    });
    localStorage.setItem('pebble-wp-lang', lang);
  }

  langLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      setLang(this.dataset.setLang);
    });
  });

  var savedLang = localStorage.getItem('pebble-wp-lang');
  if (savedLang) setLang(savedLang);

  // ── Dark Mode Toggle ──
  var themeToggle = document.getElementById('themeToggle');

  function setTheme(dark) {
    body.classList.toggle('dark', dark);
    themeToggle.textContent = dark ? 'Light' : 'Dark';
    localStorage.setItem('pebble-wp-theme', dark ? 'dark' : 'light');
  }

  themeToggle.addEventListener('click', function () {
    setTheme(!body.classList.contains('dark'));
  });

  var savedTheme = localStorage.getItem('pebble-wp-theme');
  if (savedTheme === 'light') setTheme(false);
  else setTheme(true);

  // ── Scroll Spy (Margin TOC) ──
  var sectionIds = ['abstract', 'introduction', 'team', 'career', 'contact-section'];
  var tocLinks = document.querySelectorAll('.margin-toc a');

  function updateActiveSection() {
    var current = '';
    for (var i = 0; i < sectionIds.length; i++) {
      var el = document.getElementById(sectionIds[i]);
      if (el) {
        var rect = el.getBoundingClientRect();
        if (rect.top <= 120) {
          current = sectionIds[i];
        }
      }
    }
    tocLinks.forEach(function (link) {
      link.classList.toggle('active', link.getAttribute('href') === '#' + current);
    });
  }

  window.addEventListener('scroll', updateActiveSection, { passive: true });
  updateActiveSection();

  // ── Mobile TOC ──
  var mobileTocToggle = document.getElementById('mobileTocToggle');
  var mobileTocDropdown = document.getElementById('mobileTocDropdown');

  if (mobileTocToggle) {
    mobileTocToggle.addEventListener('click', function () {
      var isOpen = mobileTocDropdown.classList.toggle('open');
      this.setAttribute('aria-expanded', isOpen);
      this.innerHTML = isOpen ? 'Contents &#9652;' : 'Contents &#9662;';
    });

    mobileTocDropdown.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        mobileTocDropdown.classList.remove('open');
        mobileTocToggle.setAttribute('aria-expanded', 'false');
        mobileTocToggle.innerHTML = 'Contents &#9662;';
      });
    });
  }

  // ── Search ("/" key) ──
  var searchOverlay = document.getElementById('searchOverlay');
  var searchInput = document.getElementById('searchInput');

  document.addEventListener('keydown', function (e) {
    var tag = document.activeElement.tagName;
    if (e.key === '/' && !e.ctrlKey && !e.metaKey && tag !== 'INPUT' && tag !== 'TEXTAREA') {
      e.preventDefault();
      searchOverlay.classList.add('open');
      searchInput.focus();
    }
    if (e.key === 'Escape') {
      searchOverlay.classList.remove('open');
      searchInput.value = '';
      window.getSelection().removeAllRanges();
    }
  });

  searchInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      var query = this.value.trim();
      if (query) {
        window.find(query, false, false, true);
      }
    }
  });

  // ── Contact Form ──
  var contactForm = document.getElementById('contactForm');
  var formSuccess = document.getElementById('formSuccess');

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      contactForm.style.display = 'none';
      formSuccess.style.display = 'block';
    });
  }

})();
