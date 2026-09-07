/* ============================================================
   MOBILE DESIGN SYSTEM — app.js
   Mews.design exact layout: sidebar + tabs + content + right TOC
   ============================================================ */


// Core engine — navigation and page content are in:
//   pages-mobile.js  (NAV_MOBILE, PAGES)
//   pages-web.js     (NAV_WEB, PAGES_WEB)

// ── Generic placeholder ─────────────────────────────────────
function makePage(id) {
  const parts = id.split('/');
  const label = parts[parts.length-1].split('-').map(w => w[0].toUpperCase()+w.slice(1)).join(' ');
  return {
    tabs: ['Overview'],
    toc: [],
    render: () => ({ title: label, html: `
      <p class="page-desc">Bu sayfa yakında eklenecek.</p>
      <div class="placeholder">
        <div class="placeholder-icon"><svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg></div>
        <div class="placeholder-title">${label}</div>
        <div class="placeholder-text">İçerik Figma token'ları eklendikten sonra doldurulacak.</div>
      </div>
    `})
  };
}

// ── State ───────────────────────────────────────────────────
let currentId       = 'welcome';
let currentTab      = 0;
let openGroups      = new Set();
let currentPlatform = 'web';
let platformDropdownOpen = false;

// ── Helpers ─────────────────────────────────────────────────
function getCurrentNav() { return currentPlatform === 'mobile' ? NAV_MOBILE : NAV_WEB; }
function getPages()      { return currentPlatform === 'mobile' ? PAGES : PAGES_WEB; }
function getPage(id)     { return getPages()[id] || makePage(id); }

function findOpenGroups(id) {
  function search(items, pathPrefix) {
    for (const item of items) {
      if (item.id === id) return true;
      if (item.children) {
        const groupKey = pathPrefix + item.label;
        if (search(item.children, groupKey + '/')) {
          openGroups.add(groupKey);
          return true;
        }
      }
    }
    return false;
  }
  search(getCurrentNav(), '');
}

// ── Navigate ────────────────────────────────────────────────
function navigate(id, tabIndex) {
  currentId  = id || 'welcome';
  currentTab = tabIndex || 0;
  window.location.hash = currentId === 'welcome' ? '' : currentId;
  findOpenGroups(currentId);
  render();
}

window.navigate = navigate;

window.addEventListener('hashchange', () => {
  const id = window.location.hash.replace('#','') || 'welcome';
  currentId  = id;
  currentTab = 0;
  findOpenGroups(id);
  render();
});

// ── Sidebar ─────────────────────────────────────────────────
function renderSidebar() {
  const el = document.getElementById('sidebar-nav');

  function renderItem(item, depth, pathPrefix = '') {
    const depthCls = depth === 0 ? 'nav-item' : depth === 1 ? 'nav-child' : depth === 2 ? 'nav-grandchild' : 'nav-great-grandchild';

    if (!item.children) {
      // Leaf
      return `<div class="${depthCls} ${item.id === currentId ? 'active' : ''}"
                   onclick="navigate('${item.id}')">${item.label}</div>`;
    }

    // Clickable parent with always-visible children (id + children, no chevron)
    if (item.id) {
      return `
        <div class="${depthCls} ${item.id === currentId ? 'active' : ''}" onclick="navigate('${item.id}')">${item.label}</div>
        ${item.children.map(c => renderItem(c, depth + 1, pathPrefix)).join('')}
      `;
    }

    // Static group — always visible, no chevron, no toggle
    if (item.static) {
      return `
        <div class="nav-section-label">${item.label}</div>
        ${item.children.map(c => renderItem(c, depth + 1, pathPrefix)).join('')}
      `;
    }

    // Aynı label'a sahip iki farklı grup (örn. Components/Layout ile üst seviye
    // Layout) çakışmasın diye path tabanlı benzersiz key kullanılır.
    const groupKey = pathPrefix + item.label;
    // Yalnızca en üst seviye başlıklar (Components, Foundations, …) collapse
    // olur — içlerindeki alt gruplar (Buttons, Inputs, Overlays …) chevron'suz
    // ve her zaman açık gelir (kullanıcı isteği).
    const collapsible = depth === 0;
    const isOpen = collapsible ? openGroups.has(groupKey) : true;
    const kidCls = depth === 0 ? 'nav-children' : 'nav-grandchildren';
    // Components'ın altı neredeyse tamamen alt-gruplardan oluşuyor (Buttons/
    // Card/Data Table/Inputs — her biri zaten kendi çizgisini taşıyor), üstüne
    // bir de Components'ın kendi çizgisi eklenince görünüm karışıyordu —
    // kullanıcı isteğiyle sadece bu grup için çizgi/indicator kaldırıldı.
    const showLine = item.label !== 'Components';
    const listItems = item.children.map(c => `<div class="nav-group-item">${renderItem(c, depth+1, groupKey + '/')}</div>`).join('');

    // Grup içi çocuklar: sabit ince çizgi + aktif öğenin hizasına kayan accent
    // segment (bkz. Figma 985:115153 "Indıcator Line"/"Line 305" — TOC'taki
    // .toc-line/.toc-indicator ile aynı desen, her grup kendi çizgisine sahip).
    // Trigger: collapse edilebilen üst-seviye başlıklar chevron'lu .nav-item-group;
    // alt gruplar (Buttons/Inputs/…) chevron'suz .nav-section-label ile düz başlık
    // (ikisi de aynı padding/font/renk — bkz. styles.css). Alt grupların accent
    // çizgisi ve indicator'ı korunur.
    const trigger = collapsible
      ? `<div class="nav-item-group" onclick="toggleGroup('${groupKey}')">
        <span>${item.label}</span>
        <span class="nav-chevron-slot">
          <svg class="nav-chevron ${isOpen ? 'open' : ''}" data-group-chevron="${groupKey}" width="16" height="16"
               fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m9 5 7 7-7 7"/>
          </svg>
        </span>
      </div>`
      : `<div class="nav-section-label">${item.label}</div>`;

    return `
      ${trigger}
      <div class="${kidCls} ${isOpen ? 'open' : ''}" data-group-panel="${groupKey}">
        <div class="nav-group-inner">
          ${showLine ? `
          <div class="nav-group-row">
            <div class="nav-group-line"><div class="nav-group-indicator" data-group-indicator="${groupKey}"></div></div>
            <div class="nav-group-list">${listItems}</div>
          </div>` : `
          <div class="nav-group-list nav-group-list--flush">${listItems}</div>`}
        </div>
      </div>
    `;
  }

  el.innerHTML = getCurrentNav().map(item => renderItem(item, 0)).join('');
  requestAnimationFrame(() => { updateNavIndicators(); scrollActiveNavIntoView(); });
}

// Sayfa refresh'i / derin bir sayfaya link sonrası: aktif nav öğesi sidebar'ın
// görünür alanının dışında kalıyorsa onu görünür alana getir (instant — refresh'te
// sayfa "bulunduğu yerde" açılsın, kullanıcı aşağı kaydırmak zorunda kalmasın).
// Zaten görünüyorsa hiçbir şey yapmaz (normal tıklama navigasyonunda no-op).
function scrollActiveNavIntoView() {
  const nav = document.getElementById('sidebar-nav');
  if (!nav) return;
  const active = nav.querySelector('.nav-item.active, .nav-child.active, .nav-grandchild.active, .nav-great-grandchild.active');
  if (!active) return;
  const navR = nav.getBoundingClientRect();
  const aR   = active.getBoundingClientRect();
  if (aR.top >= navR.top + 4 && aR.bottom <= navR.bottom - 4) return;   // zaten görünür
  const target = nav.scrollTop + (aR.top - navR.top) - (nav.clientHeight - aR.height) / 2;
  nav.scrollTop = Math.max(0, target);
}
window.scrollActiveNavIntoView = scrollActiveNavIntoView;

// Her grup kendi .nav-group-indicator'ına sahip — sadece aktif öğeyi
// barındıran grubunki görünür/hizalı olur, diğerleri opacity:0 kalır.
function updateNavIndicators() {
  document.querySelectorAll('[data-group-indicator]').forEach(indicator => {
    const line = indicator.parentElement;
    const list = line ? line.nextElementSibling : null;
    // .nav-group-item wrapper'ı sayesinde bu SADECE bu grubun doğrudan
    // çocuklarını yakalar — iç içe bir alt-grubun (Buttons/Card gibi) kendi
    // aktif öğesini yanlışlıkla üst grubun indicator'ına bağlamaz.
    const activeChild = list ? list.querySelector(':scope > .nav-group-item > .active') : null;
    if (!activeChild) { indicator.style.opacity = '0'; return; }
    const lineRect  = line.getBoundingClientRect();
    const childRect = activeChild.getBoundingClientRect();
    indicator.style.top     = (childRect.top - lineRect.top) + 'px';
    indicator.style.height  = childRect.height + 'px';
    indicator.style.opacity = '1';
  });
}
window.updateNavIndicators = updateNavIndicators;

window.toggleGroup = function(groupKey) {
  const wasOpen = openGroups.has(groupKey);
  wasOpen ? openGroups.delete(groupKey) : openGroups.add(groupKey);

  const panel   = document.querySelector(`[data-group-panel="${groupKey}"]`);
  const chevron = document.querySelector(`[data-group-chevron="${groupKey}"]`);
  if (panel)   panel.classList.toggle('open', !wasOpen);
  if (chevron) chevron.classList.toggle('open', !wasOpen);
  // Grid-rows expand/collapse animasyonu (220ms) bitip gerçek geometri
  // oturduktan sonra indicator'ları tazele.
  setTimeout(updateNavIndicators, 230);
};

// ── Tabs ────────────────────────────────────────────────────
function renderTabs(page) {
  const el = document.getElementById('tabs-bar');
  if (!page.tabs || page.tabs.length === 0) {
    el.style.display = 'none';
    return;
  }
  el.style.display = 'flex';
  el.innerHTML = page.tabs.map((t,i) => `
    <div class="tab ${i === currentTab ? 'active' : ''}" onclick="switchTab(${i})">${t}</div>
  `).join('');
}

window.switchTab = function(i) {
  currentTab = i;
  const page = getPage(currentId);
  renderTabs(page);
  renderContent(page);
};

// ── Color swatches in token tables ──────────────────────────
function applyColorSwatches(root) {
  root.querySelectorAll('.token-table td').forEach(td => {
    if (td.querySelector('.bt-swatch')) return;
    const walker = document.createTreeWalker(td, NodeFilter.SHOW_TEXT);
    const nodes = [];
    let n;
    while ((n = walker.nextNode())) nodes.push(n);
    nodes.forEach(tn => {
      const text = tn.nodeValue;
      const rx = /#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})\b/g;
      if (!rx.test(text)) return;
      rx.lastIndex = 0;
      const frag = document.createDocumentFragment();
      let last = 0, m;
      while ((m = rx.exec(text))) {
        if (m.index > last) frag.appendChild(document.createTextNode(text.slice(last, m.index)));
        const sw = document.createElement('span');
        sw.className = 'bt-swatch';
        sw.style.cssText = 'display:inline-block;width:12px;height:12px;border-radius:2px;vertical-align:middle;margin-right:4px;flex-shrink:0;border:1px solid rgba(0,0,0,.1);background:' + m[0];
        frag.appendChild(sw);
        frag.appendChild(document.createTextNode(m[0]));
        last = m.index + m[0].length;
      }
      if (last < text.length) frag.appendChild(document.createTextNode(text.slice(last)));
      tn.parentNode.replaceChild(frag, tn);
    });
  });
}

// ── Syntax highlighting (Code/CSS tab'ları) ────────────────────
// Prism.js sadece tokenize eder, renkler styles.css'teki --bt-* token
// eşlemesinden gelir. Playground'un Code tab'ı (id="...-code") markup,
// projedeki tüm CSS tab örnekleri (class="code-block" konvansiyonu) css
// olarak highlight edilir — her yeni component ayrı bir kayıt gerektirmez.
function applyCodeHighlighting(root) {
  if (!window.Prism) return;
  function highlight(el, lang) {
    // Prism'in line-numbers plugin'i <pre><code>...</code></pre> yapısı
    // bekliyor — bizim <pre> düz metin içeriyor, önce <code>'ya sarmalıyoruz.
    let code = el.querySelector(':scope > code');
    if (!code) {
      code = document.createElement('code');
      code.textContent = el.textContent;
      el.textContent = '';
      el.appendChild(code);
    }
    el.classList.add('line-numbers');
    code.classList.add('language-' + lang, 'line-numbers');
    Prism.highlightElement(code);
  }
  root.querySelectorAll('.example-viewer-code pre[id$="-code"]').forEach(el => highlight(el, 'markup'));
  root.querySelectorAll('pre.code-block').forEach(el => highlight(el, 'css'));
}
window.applyCodeHighlighting = applyCodeHighlighting;

// ── Content ─────────────────────────────────────────────────
function renderContent(page) {
  const tab     = page.tabs ? page.tabs[currentTab] : null;
  const result  = page.render(tab);
  const titleEl = document.getElementById('page-title');
  const bodyEl  = document.getElementById('content-body');

  titleEl.textContent = result.title || '';
  titleEl.style.display = result.title ? 'block' : 'none';
  bodyEl.innerHTML = result.html;
  applyColorSwatches(bodyEl);
  applyCodeHighlighting(bodyEl);
}

// ── TOC ─────────────────────────────────────────────────────
let _tocObserver = null;
const _tocLabelIcon = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 5H3"/><path d="M15 12H3"/><path d="M17 19H3"/></svg>`;

function renderToc(page) {
  const col = document.getElementById('toc-col');
  const el  = document.getElementById('toc');
  if (_tocObserver) { _tocObserver.disconnect(); _tocObserver = null; }
  if (!page.toc || page.toc.length === 0) {
    col.style.display = 'none';
    return;
  }
  col.style.display = 'flex'; // .toc-col artık flex (satır + indicator çizgisi), 'block' layout'u bozar

  const isGrouped = page.toc.length > 0 && typeof page.toc[0] === 'object';

  // "Overview" — sayfanın en üstüne (page-title / h1) atlayan standart ilk
  // madde, TÜM sayfalarda (toc'u olan) otomatik olarak eklenir; page.toc
  // dizisine manuel eklenmesi gerekmez, yeni bir component eklendiğinde de
  // buraya otomatik gelir (bkz. HISTORY.md). scrollToSection zaten generic
  // olduğu için page-title'a da aynı şekilde çalışır; scroll-spy de
  // data-target'ı otomatik yakalar.
  const overviewLink = `<div class="toc-link active" data-target="page-title" onclick="scrollToSection('page-title')">Overview</div>`;

  if (isGrouped) {
    el.innerHTML = `
      <div class="toc-label">${_tocLabelIcon}<span>On this page</span></div>
      ${overviewLink}
      ${page.toc.map(({ group, items }) => `
        <div class="toc-group-label">${group}</div>
        ${items.map(item => {
          const isSub = typeof item === 'object' && item !== null;
          const label = isSub ? item.label : item;
          const parentLink = `<div class="toc-link" data-target="${label}" onclick="scrollToSection('${label}')">${label}</div>`;
          if (!isSub || !item.sub || !item.sub.length) return parentLink;
          const subLinks = item.sub.map(s =>
            `<div class="toc-link toc-link--sub" data-target="${label}-${s}" onclick="scrollToSection('${label}-${s}')">${s}</div>`
          ).join('');
          return parentLink + subLinks;
        }).join('')}
      `).join('')}
    `;
  } else {
    el.innerHTML = `
      <div class="toc-label">${_tocLabelIcon}<span>On this page</span></div>
      ${overviewLink}
      ${page.toc.map(t => `
        <div class="toc-link" data-target="${t}" onclick="scrollToSection('${t}')">${t}</div>
      `).join('')}
    `;
  }

  // Overview linki innerHTML'de "active" olarak hardcode edildi (yukarı bak) —
  // ama GERÇEK başlangıç konumu setupTocScrollSpy() içinde senkron olarak
  // hesaplanıp uygulanıyor (2026-09-07 düzeltmesi — bkz. altta, önceden burada
  // koşulsuz 'page-title' basılıyordu, sayfa scroll pozisyonu 0 olmadığında
  // TOC yanlış gösteriyordu).
  setupTocScrollSpy();
}

function setActiveTocLink(id) {
  let activeLink = null;
  document.querySelectorAll('#toc .toc-link').forEach(link => {
    const isActive = link.dataset.target === id;
    link.classList.toggle('active', isActive);
    if (isActive) activeLink = link;
  });
  // Sol çizgideki accent segment aktif linkin hizasına taşınır (bkz. Figma
  // "Line 305" — sabit bir tam-yükseklik çizgi değil, sadece aktif öğenin
  // yanında beliren hareketli bir işaretçi).
  const indicator = document.getElementById('toc-indicator');
  const line       = document.querySelector('.toc-line');
  if (!indicator || !line) return;
  if (!activeLink) { indicator.style.opacity = '0'; return; }
  const lineRect = line.getBoundingClientRect();
  const linkRect = activeLink.getBoundingClientRect();
  indicator.style.top    = (linkRect.top - lineRect.top) + 'px';
  indicator.style.height = linkRect.height + 'px';
  indicator.style.opacity = '1';
}

function setupTocScrollSpy() {
  const links = Array.from(document.querySelectorAll('#toc .toc-link'));
  const targets = links
    .map(link => document.getElementById(link.dataset.target))
    .filter(Boolean);
  if (!targets.length) return;

  // Page scrolls at document level (window) — .main-header is sticky (68px), so
  // headings must clear it before counting as "in view".
  _tocObserver = new IntersectionObserver(entries => {
    const visible = entries.filter(e => e.isIntersecting);
    if (!visible.length) return;
    visible.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
    setActiveTocLink(visible[0].target.id);
  }, {
    root: null,
    rootMargin: '-76px 0px -70% 0px',
    threshold: 0
  });

  targets.forEach(t => _tocObserver.observe(t));

  // Başlangıç aktif linki — IntersectionObserver'ın kendi ilk (async) callback'i
  // gelene KADAR beklemek yerine (bu her zaman aynı frame'de gelmeyebilir ve
  // önceki kod bu arada 'page-title'i koşulsuz basıyordu, race condition),
  // GERÇEK scroll pozisyonunu SENKRON hesaplayıp hemen uyguluyoruz — sayfa
  // yenilendiğinde (tarayıcı scroll restoration) veya scroll 0 olmadan
  // render edildiğinde TOC ilk andan itibaren doğru konumu gösterir
  // (kullanıcı geri bildirimi, 2026-09-07: "sayfayı yenilediğimde toc
  // başlığı triggerlanan alanın dışındaysa toc doğru yeri göstermiyor").
  requestAnimationFrame(() => setActiveTocLink(_tocDetectActiveId(targets)));
}

// setupTocScrollSpy'daki IntersectionObserver'ın rootMargin'iyle (-76px üst /
// -70% alt) AYNI bandı senkron olarak taklit eder — bir heading bu bantta
// (76px sticky header'ın altında, viewport'un üst %30'unda) sayılıyorsa "aktif
// adayı" odur; observer'ın async ilk tetiklemesini beklemeye gerek kalmaz.
function _tocDetectActiveId(targets) {
  const topBound    = 76;                    // .main-header yüksekliği (observer'daki -76px ile aynı)
  const bottomBound = window.innerHeight * 0.30; // observer'daki -70% alt kesimle aynı bant
  const inBand = targets.filter(t => {
    const r = t.getBoundingClientRect();
    return r.top < bottomBound && r.bottom > topBound;
  });
  if (inBand.length) {
    inBand.sort((a, b) => a.getBoundingClientRect().top - b.getBoundingClientRect().top);
    return inBand[0].id;
  }
  // Bantta hiçbir heading yoksa: hepsi bandın ALTINDAYSA (sayfa başı) Overview;
  // hepsi bandın ÜSTÜNDEYSE (sayfa sonuna kadar scroll edilmiş) son heading aktif kalır.
  const passed = targets.filter(t => t.getBoundingClientRect().top <= topBound);
  return passed.length ? passed[passed.length - 1].id : 'page-title';
}

window.scrollToSection = function(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  setActiveTocLink(id);
};

window.switchTokenView = function(sectionId, view, btn) {
  const preview = document.getElementById(`token-view-preview-${sectionId}`);
  const json    = document.getElementById(`token-view-json-${sectionId}`);
  if (!preview || !json) return;
  const isPreview = view === 'preview';
  preview.style.display = isPreview ? '' : 'none';
  json.style.display    = isPreview ? 'none' : '';
  btn.closest('.pgd-seg-ctrl').querySelectorAll('.pgd-seg-btn').forEach(b => {
    b.classList.toggle('active', b === btn);
  });
};

window.copyText = function(text, btn) {
  navigator.clipboard.writeText(text).then(() => {
    const original = btn.innerHTML;
    btn.innerHTML = '<svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>';
    btn.classList.add('copy-btn--success');
    setTimeout(() => { btn.innerHTML = original; btn.classList.remove('copy-btn--success'); }, 1500);
  });
};

// ── Platform Switcher ────────────────────────────────────────
const _iconTabletSmartphone = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="10" height="14" x="3" y="8" rx="2"/><path d="M15 4h2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-2.5"/><path d="M8 19v.01"/></svg>`;
const _iconAppWindow        = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M10 4v4"/><path d="M2 8h20"/><path d="M6 4v4"/></svg>`;
const _iconChevronsUpDown   = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m7 15 5 5 5-5"/><path d="m7 9 5-5 5 5"/></svg>`;
const _iconCircleCheck      = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>`;

function renderPlatformSwitcher() {
  const el = document.getElementById('platform-switcher');
  if (!el) return;
  const isMobile = currentPlatform === 'mobile';
  const platformIcon = isMobile ? _iconTabletSmartphone : _iconAppWindow;
  const subLabel     = isMobile ? 'Mobile-v.1.0.0' : 'Web-v.1.0.0';

  const headerTitle = document.getElementById('platform-header-title');
  if (headerTitle) headerTitle.textContent = isMobile ? 'Mobile' : 'Web';

  el.innerHTML = `
    <button class="platform-trigger" onclick="togglePlatformDropdown(event)">
      <div class="platform-icon-btn">
        <div class="platform-icon-inner">${platformIcon}</div>
      </div>
      <div class="platform-text">
        <div class="platform-text-title">Documentation</div>
        <div class="platform-text-sub">${subLabel}</div>
      </div>
      <div class="platform-chevrons">${_iconChevronsUpDown}</div>
    </button>
    ${platformDropdownOpen ? `
    <div class="platform-dropdown">
      <div class="platform-option ${isMobile ? 'active' : ''}" onclick="switchPlatform('mobile', event)">
        <span class="platform-option-label">Mobile-V1.0.0</span>
        ${isMobile ? `<span class="platform-option-check">${_iconCircleCheck}</span>` : ''}
      </div>
      <div class="platform-option ${!isMobile ? 'active' : ''}" onclick="switchPlatform('web', event)">
        <span class="platform-option-label">Web-V1.0.0</span>
        ${!isMobile ? `<span class="platform-option-check">${_iconCircleCheck}</span>` : ''}
      </div>
    </div>` : ''}
  `;
}

window.togglePlatformDropdown = function(e) {
  e.stopPropagation();
  platformDropdownOpen = !platformDropdownOpen;
  renderPlatformSwitcher();
};

window.switchPlatform = function(platform, e) {
  e.stopPropagation();
  currentPlatform = platform;
  platformDropdownOpen = false;
  render();
};

document.addEventListener('click', e => {
  if (platformDropdownOpen && !e.target.closest('#platform-switcher')) {
    platformDropdownOpen = false;
    renderPlatformSwitcher();
  }
});

// ── Full render ─────────────────────────────────────────────
function render() {
  const page = getPage(currentId);
  renderPlatformSwitcher();
  renderSidebar();
  renderTabs(page);
  renderContent(page);
  renderToc(page);
  // 2026-09-07 düzeltmesi: `.main`'in kendi scrollTop'ı hiç işe yaramıyordu —
  // .main'de `overflow` tanımlı değil (bkz. styles.css), yani kendi scroll
  // container'ı DEĞİL; sayfa gerçekte window/document seviyesinde kayıyor
  // (TOC'un IntersectionObserver'ı da zaten `root:null` ile bunu varsayıyor).
  // Bu yüzden başka bir sidebar sayfasına geçildiğinde scroll pozisyonu HİÇ
  // sıfırlanmıyor, önceki sayfadan kalan konumdan devam ediyordu (kullanıcı
  // geri bildirimi, 2026-09-07: "...sayfayı en tepeden başlatmak yerine
  // bulunduğum konumdan devam ettiriyor").
  window.scrollTo(0, 0);
}

// ── Init ────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const hash = window.location.hash.replace('#','') || 'welcome';
  currentId  = hash;
  currentTab = 0;
  findOpenGroups(hash);
  renderPlatformSwitcher();
  render();
});
