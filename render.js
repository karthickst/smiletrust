// =============================================================
// render.js — DO NOT EDIT
// Reads window.SWT_CONTENT (from content.js) and populates
// the page. All text changes should be made in content.js.
// =============================================================

(function () {
  'use strict';

  const C = window.SWT_CONTENT;
  if (!C) {
    console.error('[SWT] content.js not loaded. Page content will be empty.');
    return;
  }

  // ── tiny helpers ─────────────────────────────────────────────
  const byId   = id  => document.getElementById(id);
  const set    = (id, text)   => { const e = byId(id); if (e) e.textContent = text; };
  const markup = (id, html)   => { const e = byId(id); if (e) e.innerHTML   = html; };
  const links  = arr =>
    arr.map(l => `<li><a href="${l.href}">${l.label}</a></li>`).join('');

  // ── brand name: first word in accent colour ───────────────────
  function brandHTML(name) {
    const parts = name.split(' ');
    return `<em>${parts[0]}</em> ${parts.slice(1).join(' ')}`;
  }

  // ── site meta ─────────────────────────────────────────────────
  function renderSite() {
    document.title = C.site.title;
  }

  // ── navigation ────────────────────────────────────────────────
  function renderNav() {
    markup('nav-org-name', brandHTML(C.site.orgName));
    set('nav-donate-btn', C.nav.donateLabel);
    markup('nav-links', links(C.nav.links));
  }

  // ── hero ──────────────────────────────────────────────────────
  function renderHero() {
    const h = C.hero;
    set('hero-eyebrow', h.eyebrow);
    markup('hero-headline', `${h.headline} <span>${h.headlineAccent}</span>`);
    set('hero-subtext', h.subtext);
    set('hero-cta-donate',   h.ctaDonate);
    set('hero-cta-programs', h.ctaPrograms);
    markup('hero-stats', h.stats.map(s => `
      <div class="hero-card">
        <div class="emoji">${s.emoji}</div>
        <div class="num">${s.number}</div>
        <div class="lbl">${s.label}</div>
      </div>`).join(''));
  }

  // ── about ─────────────────────────────────────────────────────
  function renderAbout() {
    const a = C.about;
    set('about-eyebrow',       a.eyebrow);
    set('about-title',         a.title);
    set('about-description',   a.description);
    set('about-visual-tagline', a.visualTagline);
    set('about-visual-sub',    a.visualSub);
    markup('about-bullets', a.bullets.map(b =>
      `<li><span class="check">&#10003;</span><span>${b}</span></li>`
    ).join(''));
  }

  // ── programs ──────────────────────────────────────────────────
  function renderPrograms() {
    const p = C.programs;
    set('programs-eyebrow', p.eyebrow);
    set('programs-title',   p.title);
    set('programs-subtitle', p.subtitle);
    markup('programs-grid', p.items.map(i => `
      <div class="prog-card">
        <div class="prog-icon" style="background:${i.bg}">${i.icon}</div>
        <h3>${i.title}</h3>
        <p>${i.description}</p>
      </div>`).join(''));
  }

  // ── impact ────────────────────────────────────────────────────
  function renderImpact() {
    const i = C.impact;
    set('impact-eyebrow',  i.eyebrow);
    set('impact-title',    i.title);
    set('impact-subtitle', i.subtitle);
    markup('impact-stats', i.stats.map(s => `
      <div class="stat-item">
        <div class="stat-num">${s.number}</div>
        <div class="stat-label">${s.label}</div>
      </div>`).join(''));
  }

  // ── donate ────────────────────────────────────────────────────
  function renderDonate() {
    const d = C.donate;
    set('donate-title',       d.title);
    set('donate-description', d.description);
    markup('amount-grid', d.amounts.map((a, i) =>
      `<button class="amount-btn${i === d.defaultIdx ? ' active' : ''}"
               onclick="selectAmount(this)">${a}</button>`
    ).join(''));
    const cta = byId('donate-cta');
    if (cta) { cta.textContent = d.ctaLabel; cta.href = d.donateUrl; }
    markup('trust-badges', d.badges.map(b =>
      `<span class="badge"><span class="b-icon">${b.icon}</span> ${b.label}</span>`
    ).join(''));
  }

  // ── how to help ───────────────────────────────────────────────
  function renderHelp() {
    const h = C.help;
    set('help-eyebrow',  h.eyebrow);
    set('help-title',    h.title);
    set('help-subtitle', h.subtitle);
    markup('help-grid', h.items.map(i => {
      const isShare  = i.href === '#share';
      const onclick  = isShare ? ' onclick="sharePage();return false;"' : '';
      return `
        <div class="help-card">
          <div class="h-icon">${i.icon}</div>
          <h3>${i.title}</h3>
          <p>${i.description}</p>
          <a href="${i.href}" class="btn-outline"
             style="font-size:.88rem;padding:9px 20px;"${onclick}>${i.linkLabel}</a>
        </div>`;
    }).join(''));
  }

  // ── stories ───────────────────────────────────────────────────
  function renderStories() {
    const s = C.stories;
    set('stories-eyebrow',  s.eyebrow);
    set('stories-title',    s.title);
    set('stories-subtitle', s.subtitle);
    markup('stories-grid', s.items.map(i => `
      <div class="story-card">
        <p>"${i.quote}"</p>
        <div class="story-author">
          <div class="author-avatar">${i.avatar}</div>
          <div>
            <div class="author-name">${i.name}</div>
            <div class="author-role">${i.role}</div>
          </div>
        </div>
      </div>`).join(''));
  }

  // ── contact ───────────────────────────────────────────────────
  function renderContact() {
    const c = C.contact;
    set('contact-eyebrow',  c.eyebrow);
    set('contact-title',    c.title);
    set('contact-subtitle', c.subtitle);
    set('contact-address',  c.address);
    set('contact-phone',    c.phone);
    set('contact-email',    c.email);
    set('contact-hours',    c.hours);
    set('form-submit-btn',  c.formSubmitLabel);
  }

  // ── footer ────────────────────────────────────────────────────
  function renderFooter() {
    const f = C.footer;
    const s = C.site;
    markup('footer-org-name', brandHTML(s.orgName));
    set('footer-description', f.description);
    set('footer-reg',         `Reg. No. ${s.regNumber}`);
    set('footer-cert',        s.certLabel);
    markup('footer-quick-links',    links(f.quickLinks));
    markup('footer-involved-links', links(f.involvedLinks));
    markup('footer-legal-links',    links(f.legalLinks));
    set('footer-copyright', f.copyright);
    set('footer-made-with', f.madeWith);
  }

  // ── scroll spy ────────────────────────────────────────────────
  function initScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
      let current = '';
      sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 80) current = s.id;
      });
      document.querySelectorAll('.nav-links a').forEach(a => {
        a.style.color = a.getAttribute('href') === '#' + current
          ? 'var(--primary)' : '';
      });
    });
  }

  // ── boot ──────────────────────────────────────────────────────
  document.addEventListener('DOMContentLoaded', function () {
    renderSite();
    renderNav();
    renderHero();
    renderAbout();
    renderPrograms();
    renderImpact();
    renderDonate();
    renderHelp();
    renderStories();
    renderContact();
    renderFooter();
    initScrollSpy();
  });

})();

// ── Interactive functions (called from HTML) ──────────────────
function selectAmount(btn) {
  document.querySelectorAll('.amount-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

function handleForm(e) {
  e.preventDefault();
  const btn = e.target.querySelector('.btn-send');
  const msg = (window.SWT_CONTENT && window.SWT_CONTENT.contact.formSuccessMsg)
    || '✓ Message Sent!';
  btn.textContent = msg;
  btn.style.background = 'var(--teal)';
  btn.disabled = true;
  e.target.reset();
}

function sharePage() {
  if (navigator.share) {
    const name = (window.SWT_CONTENT && window.SWT_CONTENT.site.orgName) || 'Smile Welfare Trust';
    navigator.share({
      title: name,
      text:  'Help us bring smiles to underprivileged children. Every donation counts!',
      url:   window.location.href
    });
  } else {
    navigator.clipboard.writeText(window.location.href)
      .then(() => alert('Link copied! Share it with your friends and family.'));
  }
}
