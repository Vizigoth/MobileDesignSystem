/* ============================================================
   PLAYGROUND — reusable component preview toolbar
   Ported from Figma "Playground" toolbar (Bentas DS, node 375:27788):
     Variant select · Measure · Viewport · Open in isolation mode
   Used via registerPlayground({...}) from any pages-*.js page.
   ============================================================ */

const PGD_VIEWPORTS = [
  { key: 'small-mobile', label: 'Small Mobile', width: 360, height: 780 },
  { key: 'large-mobile', label: 'Large Mobile', width: 414, height: 896 },
  { key: 'tablet',       label: 'Tablet',        width: 768, height: 1024 },
  { key: 'desktop',      label: 'Desktop',       width: null, height: null },
];

const PGD_BG_OPTIONS = [
  { key: 'surface-primary-default',  label: 'Surface Default',       cssVar: '--bt-surface-primary-default'  },
  { key: 'surface-primary-light',    label: 'Surface Light',         cssVar: '--bt-surface-primary-light'    },
  { key: 'surface-primary-subtle',   label: 'Surface Subtle',        cssVar: '--bt-surface-primary-subtle'   },
  { key: 'surface-primary-muted',    label: 'Surface Muted',         cssVar: '--bt-surface-primary-muted'    },
  { key: 'surface-primary-emphasis', label: 'Surface Emphasis',      cssVar: '--bt-surface-primary-emphasis' },
  { key: 'surface-primary-intense',  label: 'Surface Intense',       cssVar: '--bt-surface-primary-intense'  },
  { key: 'surface-brand-light',      label: 'Surface Brand Light',   cssVar: '--bt-surface-brand-light'      },
  { key: 'surface-brand-default',    label: 'Surface Brand Default', cssVar: '--bt-surface-brand-default'    },
];

// Exact paths from Lucide (lucide-static), matching the icons used in the
// Figma source (node 375:27788 — Icon/chevrons-up-down, Icon/ruler-dimension-line,
// Icon/proportions, Icon/square-arrow-out-up-right).
const _pgdIconChevrons = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m7 15 5 5 5-5"/><path d="m7 9 5-5 5 5"/></svg>`;
const _pgdIconRuler     = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 15v-3"/><path d="M14 15v-3"/><path d="M18 15v-3"/><path d="M2 8V4"/><path d="M22 6H2"/><path d="M22 8V4"/><path d="M6 15v-3"/><rect x="2" y="12" width="20" height="8" rx="2"/></svg>`;
const _pgdIconViewport  = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="M12 9v11"/><path d="M2 9h13a2 2 0 0 1 2 2v9"/></svg>`;
const _pgdIconIsolate   = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6"/><path d="m21 3-9 9"/><path d="M15 3h6v6"/></svg>`;
const _pgdIconSwap      = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3 4 7l4 4"/><path d="M4 7h16"/><path d="m16 21 4-4-4-4"/><path d="M20 17H4"/></svg>`;
const _pgdIconClick     = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 4.1 12 6"/><path d="m5.1 8-2.9-.8"/><path d="m6 12-1.9 2"/><path d="M7.2 2.2 8 5.1"/><path d="M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z"/></svg>`;
const _pgdIconProps     = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M15 3v18"/></svg>`;
const _pgdIconBg        = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="9" height="9" rx="1"/><rect x="13" y="2" width="9" height="9" rx="1"/><rect x="2" y="13" width="9" height="9" rx="1"/><rect x="13" y="13" width="9" height="9" rx="1"/></svg>`;

const _pgdState   = {};   // id -> { variant, props, measure, viewport, dimW, dimH, openMenu }
const _pgdConfigs = {};   // id -> config, kept so re-renders (state changes) can rebuild the block
window._pgdConfigs = _pgdConfigs; // exposed for isolation.html

function _pgdEsc(s) { return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

// `config.props` normalde statik bir dizi ama artık bir FONKSİYON da olabilir:
// `(currentProps) => [...]`. Bu, prop listesinin kendisinin state'e göre değişmesi
// gerektiği durumlar için (örn. Card'ın "Active Segments" seçimine göre her aktif
// segment için ayrı bir "Segment N" prop grubu üretmesi, bkz. HISTORY.md 2026-08-07).
// Statik dizi kullanan TÜM mevcut playground'lar (Button, Card'ın diğer grupları vb.)
// hiçbir değişiklik yapmadan çalışmaya devam eder — fonksiyon sadece opt-in.
// İlk state kurulumunda (_pgdEnsureState) henüz `st.props` yokken boş obje `{}` ile
// çağrılır — fonksiyonun kendi iç fallback'i (örn. `p.activeSegments || '1'`) bu
// durumda geçerli varsayılan listeyi üretmelidir.
function _pgdResolveProps(config, currentProps) {
  return typeof config.props === 'function'
    ? (config.props(currentProps || {}) || [])
    : (config.props || []);
}

function _pgdEnsureState(id, config) {
  if (!_pgdState[id]) {
    const props = {};
    _pgdResolveProps(config, {}).forEach(p => {
      if (p.type === 'multiselect') {
        props[p.key] = p.default != null
          ? (Array.isArray(p.default) ? p.default.join(',') : p.default)
          : p.options.map(o => o.key).join(',');
      } else if (p.type === 'text') {
        props[p.key] = p.default != null ? p.default : '';
      } else {
        props[p.key] = p.default || p.options[0].key;
      }
    });
    _pgdState[id] = {
      variant: config.variants[0].key,
      props,
      view: 'preview', // 'preview' | 'code'
      measure: false,
      viewport: 'desktop',
      dimW: null,
      dimH: null,
      openMenu: null, // 'variant' | 'viewport' | 'bg' | a props[].key | null
      bg: 'surface-primary-light',
      propsOpen: false,
      propsEntering: false,
      propsClosing: false,
      propsCloseTimer: null,
    };
  }
  return _pgdState[id];
}

// config: { id, variants:[{key,label}], props?:[{key,label,options:[{key,label}],default}],
//           preview(variantKey, props)->html, code(variantKey, props)->string, isolate: 'component-key' }
function renderPlayground(config) {
  const st = _pgdEnsureState(config.id, config);
  const variantLabel = config.variants.find(v => v.key === st.variant).label;
  const vp = PGD_VIEWPORTS.find(v => v.key === st.viewport);

  // Variant seçici artık toolbar'da değil, Properties drawer'ının en üstünde
  // (kendi grubunda, etiketsiz) render ediliyor — diğer prop'larla aynı
  // `.pgd-drawer-input` görünümünü kullanıyor (kullanıcı kararı, 2026-08-07:
  // eskiden sadece Variant toolbar'da kalmıştı, "diğer component'lerde de
  // variant properties'e dahil edilmemiş" geri bildirimiyle taşındı — bkz.
  // HISTORY.md). `config.variants.length <= 1` olan sayfalarda hiç render
  // edilmez (eskiden toolbar'da da aynı koşulla gizliydi).
  const variantDrawerRow = config.variants.length > 1 ? `<div class="pgd-drawer__row"><div class="pgd-dropdown">
    <button class="pgd-drawer-input" onclick="_pgdToggleMenu('${config.id}','variant',event)">
      <span class="pgd-drawer-input__label">${config.variantLabel || 'Variant'}</span><span class="pgd-drawer-input__value">${variantLabel}</span><span class="pgd-drawer-input__icon">${_pgdIconChevrons}</span>
    </button>
    ${st.openMenu === 'variant' ? `
    <div class="pgd-menu">
      ${config.variants.map(v => `<button class="pgd-menu-item ${v.key===st.variant?'active':''}" onclick="_pgdSetVariant('${config.id}','${v.key}')">${v.label}</button>`).join('')}
    </div>` : ''}
  </div></div>` : '';

  // Prop kontrolleri (dropdown/multiselect) — Properties drawer'ındaki her
  // satırda kullanılır. prop.group olan sayfalarda drawer grup etiketleriyle
  // ayrılır (bkz. drawerHtml).
  const _pgdPropDropdown = prop => {
    const selectedKey = st.props[prop.key];
    const selected = prop.options.find(o => o.key === selectedKey) || prop.options[0];
    return `<div class="pgd-dropdown">
      <button class="pgd-drawer-input" onclick="_pgdToggleMenu('${config.id}','${prop.key}',event)">
        <span class="pgd-drawer-input__label">${prop.label}</span><span class="pgd-drawer-input__value">${selected.label}</span><span class="pgd-drawer-input__icon">${_pgdIconChevrons}</span>
      </button>
      ${st.openMenu === prop.key ? `
      <div class="pgd-menu">
        ${prop.options.map(o => `<button class="pgd-menu-item ${o.key===selectedKey?'active':''}" onclick="_pgdSetProp('${config.id}','${prop.key}','${o.key}')">${o.label}</button>`).join('')}
      </div>` : ''}
    </div>`;
  };

  const _pgdPropMultiselect = prop => {
    const selectedKeys = (st.props[prop.key] || '').split(',').filter(Boolean);
    const allCount = prop.options.length;
    const displayText = selectedKeys.length === 0 ? 'None'
      : selectedKeys.length === allCount ? 'All'
      : selectedKeys.join(', ');
    return `<div class="pgd-dropdown">
      <button class="pgd-drawer-input" onclick="_pgdToggleMenu('${config.id}','${prop.key}',event)">
        <span class="pgd-drawer-input__label">${prop.label}</span><span class="pgd-drawer-input__value">${displayText}</span><span class="pgd-drawer-input__icon">${_pgdIconChevrons}</span>
      </button>
      ${st.openMenu === prop.key ? `
      <div class="pgd-menu">
        ${prop.options.map(o => {
          const checked = selectedKeys.includes(o.key);
          return `<button class="pgd-menu-item pgd-menu-item--check ${checked?'active':''}" onclick="_pgdToggleMulti('${config.id}','${prop.key}','${o.key}',event)"><span class="pgd-menu-check">${checked?'✓':''}</span>${o.label}</button>`;
        }).join('')}
      </div>` : ''}
    </div>`;
  };

  // Editable text prop (örn. TextBox'ın Label/Hint/Error Value'ları) — dropdown
  // yerine gerçek <input>. data-pgd-text-key, _pgdRerender'ın her tuş
  // vuruşunda odağı/imleç konumunu geri yükleyebilmesi için gerekli.
  const _pgdPropTextInput = prop => {
    const value = st.props[prop.key] || '';
    return `<div class="pgd-drawer-input pgd-drawer-input--text">
      <span class="pgd-drawer-input__label">${prop.label}</span>
      <input type="text" class="pgd-drawer-input__text" data-pgd-text-key="${prop.key}" value="${_pgdEsc(value)}" oninput="_pgdSetTextProp('${config.id}','${prop.key}',this.value)" />
    </div>`;
  };

  const _pgdPropControl = prop => prop.type === 'multiselect' ? _pgdPropMultiselect(prop) : prop.type === 'text' ? _pgdPropTextInput(prop) : _pgdPropDropdown(prop);

  // Grup listesi her zaman hesaplanır — drawer kullanır. `prop.group`'u önce
  // normalize edip (undefined→'') öyle kıyaslamak ZORUNLU: aksi halde art arda
  // gelen, hiçbiri group taşımayan prop'lar (örn. Button — Theme/Size/Content/
  // State) her biri kendi ayrı grubuna düşer ('' !== undefined her zaman true
  // olduğu için) — basit component'lerde her prop arasında görünmez etiketli
  // ama border'lı sahte bölümler oluşurdu, standart tek düz liste bozulurdu.
  const _pgdCurrentProps = _pgdResolveProps(config, st.props);

  const _allGroups = (() => {
    const g = [];
    for (const prop of _pgdCurrentProps) {
      const groupName = prop.group || '';
      const last = g[g.length - 1];
      if (!last || last.name !== groupName) g.push({ name: groupName, props: [] });
      g[g.length - 1].props.push(prop);
    }
    return g;
  })();

  // Prop kontrolleri artık toolbar'da hiç görünmez — sadece Properties
  // drawer'ı içinde. Toolbar her zaman sabit 4 buton gösterir: Properties,
  // Measure, Viewport, Isolation mode.

  // Drawer HTML — prop'ları gruplu dikey liste olarak gösterir. `pgd-drawer--entering`
  // sadece drawer'ın AÇILDIĞI render'da eklenir (bkz. _pgdToggleProps) — CSS @keyframes
  // animasyonu bu class DOM'a eklenir eklenmez otomatik oynar, JS'in rAF ile "önce
  // reflow'u boyat sonra kaldır" gibi kırılgan bir koreografi yapmasına gerek kalmaz.
  // `pgd-drawer--leaving` ise KAPANIRKEN eklenir: propsOpen hâlâ true tutulup (drawer
  // DOM'da kalır) animasyon oynatılır, gerçek kaldırma (propsOpen=false) animasyon
  // süresi kadar sonra bir setTimeout ile yapılır — bkz. _pgdToggleProps.
  const drawerHtml = st.propsOpen ? `<div class="pgd-drawer${st.propsEntering ? ' pgd-drawer--entering' : ''}${st.propsClosing ? ' pgd-drawer--leaving' : ''}">
    <div class="pgd-drawer__header"><span class="pgd-drawer__title">Properties</span></div>
    ${variantDrawerRow ? `<div class="pgd-drawer__group">${variantDrawerRow}</div>` : ''}
    ${_allGroups.map(g => `<div class="pgd-drawer__group">
      ${g.name ? `<div class="pgd-drawer__group-label">${g.name}</div>` : ''}
      ${g.props.map(prop => `<div class="pgd-drawer__row">${_pgdPropControl(prop)}</div>`).join('')}
    </div>`).join('')}
  </div>` : '';

  const isDevice = vp.key !== 'desktop';

  const viewportControl = `
    <div class="pgd-dropdown">
      <button class="pgd-icon-btn pgd-icon-btn--labeled ${isDevice ? 'is-active' : ''}" title="Viewport" onclick="_pgdToggleMenu('${config.id}','viewport',event)">
        ${_pgdIconViewport}<span>${vp.label}</span>
      </button>
      ${st.openMenu === 'viewport' ? `
      <div class="pgd-bg-menu">
        ${PGD_VIEWPORTS.map(v => `<button class="pgd-bg-item ${v.key===st.viewport?'is-active':''}" onclick="_pgdSetViewport('${config.id}','${v.key}')"><span class="pgd-bg-label">${v.label}</span>${v.width ? `<span class="pgd-vp-meta">${v.width}×${v.height}</span>` : ''}</button>`).join('')}
      </div>` : ''}
    </div>`;

  const bgOpt = PGD_BG_OPTIONS.find(o => o.key === st.bg) || PGD_BG_OPTIONS[0];
  const bgInlineStyle = `background:var(${bgOpt.cssVar});`;

  const bgControl = `
    <div class="pgd-dropdown">
      <button class="pgd-icon-btn pgd-icon-btn--labeled" title="Background" onclick="_pgdToggleMenu('${config.id}','bg',event)">
        ${_pgdIconBg}<span>Background</span><span class="pgd-bg-indicator" style="background:var(${bgOpt.cssVar});"></span>
      </button>
      ${st.openMenu === 'bg' ? `
      <div class="pgd-bg-menu">
        ${PGD_BG_OPTIONS.map(o => `<button class="pgd-bg-item ${o.key === st.bg ? 'is-active' : ''}" onclick="_pgdSetBg('${config.id}','${o.key}')"><span class="pgd-bg-swatch" style="background:var(${o.cssVar});"></span><span class="pgd-bg-label">${o.label}</span></button>`).join('')}
      </div>` : ''}
    </div>`;

  const isolateControl = `
    <button class="pgd-icon-btn pgd-icon-btn--labeled" title="Open in isolation mode" onclick="_pgdOpenIsolation('${config.id}')">${_pgdIconIsolate}<span>Isolation Mode</span></button>`;

  const triggerControl = config.trigger ? `
    <button class="pgd-trigger-btn" onclick="_pgdRunTrigger('${config.id}')">${_pgdIconClick}<span>${(config.trigger.label) || 'Click Me'}</span></button>` : '';

  const dimBar = isDevice ? `
    <div class="pgd-dim-bar">
      <label class="pgd-dim-field">
        <span class="pgd-dim-label">W</span>
        <input type="number" min="1" class="pgd-dim-input" value="${st.dimW}" onchange="_pgdSetDim('${config.id}','w',this.value)">
        <span class="pgd-dim-unit">px</span>
      </label>
      <button class="pgd-dim-swap" title="Swap width and height" onclick="_pgdSwapDims('${config.id}')">${_pgdIconSwap}</button>
      <label class="pgd-dim-field">
        <span class="pgd-dim-label">H</span>
        <input type="number" min="1" class="pgd-dim-input" value="${st.dimH}" onchange="_pgdSetDim('${config.id}','h',this.value)">
        <span class="pgd-dim-unit">px</span>
      </label>
    </div>` : '';

  const frameClass = isDevice ? 'pgd-viewport-frame is-constrained' : 'pgd-viewport-frame';
  const frameStyle = isDevice ? `width:${st.dimW}px;height:${st.dimH}px` : 'width:100%';
  const innerClass = isDevice ? 'pgd-preview-inner is-device' : 'pgd-preview-inner';

  const segControl = `
    <div class="pgd-seg-row">
      <div class="pgd-seg-ctrl">
        <button class="pgd-seg-btn ${st.view === 'preview' ? 'active' : ''}" onclick="_pgdSetView('${config.id}','preview')">Preview</button>
        <button class="pgd-seg-btn ${st.view === 'code' ? 'active' : ''}" onclick="_pgdSetView('${config.id}','code')">Code</button>
        ${config.css ? `<button class="pgd-seg-btn ${st.view === 'css' ? 'active' : ''}" onclick="_pgdSetView('${config.id}','css')">CSS</button>` : ''}
      </div>
    </div>`;

  const previewBlock = `
      <div class="example-viewer-preview" style="${bgInlineStyle}">
        <div class="${innerClass}">
          ${dimBar}
          <div class="${frameClass}" id="${config.id}-frame" style="${frameStyle}" onmousemove="_pgdMeasureMove(event,'${config.id}')" onmouseleave="_pgdMeasureLeave('${config.id}')">
            ${config.preview(st.variant, st.props)}
            <div class="pgd-measure-box" id="${config.id}-measure-box">
              <div class="pgd-mb-mar" id="${config.id}-mar-top"><span class="pgd-mb-label"></span></div>
              <div class="pgd-mb-mar" id="${config.id}-mar-bottom"><span class="pgd-mb-label"></span></div>
              <div class="pgd-mb-mar" id="${config.id}-mar-left"><span class="pgd-mb-label"></span></div>
              <div class="pgd-mb-mar" id="${config.id}-mar-right"><span class="pgd-mb-label"></span></div>
              <div class="pgd-mb-pad" id="${config.id}-pad-top"><span class="pgd-mb-label"></span></div>
              <div class="pgd-mb-pad" id="${config.id}-pad-bottom"><span class="pgd-mb-label"></span></div>
              <div class="pgd-mb-pad" id="${config.id}-pad-left"><span class="pgd-mb-label"></span></div>
              <div class="pgd-mb-pad" id="${config.id}-pad-right"><span class="pgd-mb-label"></span></div>
              <div class="pgd-mb-content" id="${config.id}-content"><span class="pgd-mb-label"></span></div>
            </div>
          </div>
        </div>
      </div>`;

  const codeBlock = `
      <div class="example-viewer-code">
        <pre id="${config.id}-code">${_pgdEsc(config.code(st.variant, st.props))}</pre>
        <button class="copy-btn" onclick="copyText(document.getElementById('${config.id}-code').textContent, this)" title="Copy code">
          <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path stroke-linecap="round" stroke-linejoin="round" d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>
        </button>
      </div>`;

  // Variant seçici artık drawer'ın içinde olduğu için, prop'u olmayan ama birden
  // fazla variant'ı olan sayfalarda da (örn. sadece variants:[...] geçen, props
  // içermeyen playground'lar) Properties butonu görünmeli — aksi halde variant
  // seçimine ulaşacak hiçbir yol kalmaz.
  const propsBtn = (_pgdCurrentProps.length > 0 || config.variants.length > 1) ? `
    <button class="pgd-icon-btn pgd-icon-btn--labeled ${st.propsOpen ? 'is-active' : ''}" title="Properties" onclick="_pgdToggleProps('${config.id}')">${_pgdIconProps}<span>Properties</span></button>` : '';

  const contentHtml = st.view === 'code' ? codeBlock
    : st.view === 'css' && config.css ? `<div class="example-viewer-code" style="padding:0;max-height:none;">${config.css(st.variant, st.props)}</div>`
    : previewBlock;

  return `
    <div id="${config.id}" style="${config.noMargin ? '' : 'margin-bottom:32px;'}">
      ${segControl}
      <div class="example-viewer">
        <div class="pgd-toolbar">
          ${propsBtn}
          <button class="pgd-icon-btn pgd-icon-btn--labeled ${st.measure?'is-active':''}" title="Measure" onclick="_pgdToggleMeasure('${config.id}')">${_pgdIconRuler}<span>Measure</span></button>
          ${bgControl}
          ${viewportControl}
          ${isolateControl}
          ${triggerControl}
        </div>
        ${st.propsOpen ? `<div class="pgd-viewer-split">${contentHtml}${drawerHtml}</div>` : contentHtml}
      </div>
    </div>`;
}

function registerPlayground(config) {
  _pgdConfigs[config.id] = config;
  return renderPlayground(config);
}

function _pgdRerender(id) {
  const config = _pgdConfigs[id];
  const container = document.getElementById(id);
  if (!config || !container) return;
  // outerHTML replacement destroys and recreates every node, so any live
  // scroll position (Properties drawer, preview frame) resets to 0 unless
  // captured here and reapplied after the swap.
  const drawer = container.querySelector('.pgd-drawer');
  const drawerScroll = drawer ? drawer.scrollTop : null;
  const preview = container.querySelector('.example-viewer-preview');
  const previewScroll = preview ? preview.scrollTop : null;
  // Bir metin prop input'u (bkz. _pgdSetTextProp) her tuş vuruşunda tüm bloğu
  // yeniden render ettiriyor — outerHTML replacement odağı/imleci kaybettirir,
  // burada yakalayıp aşağıda aynı data-pgd-text-key'li input'a geri yüklüyoruz.
  const active = document.activeElement;
  const activeTextKey = (active && container.contains(active) && active.dataset && active.dataset.pgdTextKey) || null;
  const activeSelStart = activeTextKey ? active.selectionStart : null;
  const activeSelEnd   = activeTextKey ? active.selectionEnd   : null;

  container.outerHTML = renderPlayground(config);

  const newContainer = document.getElementById(id);
  if (!newContainer) return;
  if (window.applyCodeHighlighting) window.applyCodeHighlighting(newContainer);
  if (activeTextKey) {
    const newInput = newContainer.querySelector(`[data-pgd-text-key="${activeTextKey}"]`);
    if (newInput) {
      newInput.focus();
      if (activeSelStart != null) newInput.setSelectionRange(activeSelStart, activeSelEnd);
    }
  }
  if (drawerScroll != null) {
    const newDrawer = newContainer.querySelector('.pgd-drawer');
    if (newDrawer) newDrawer.scrollTop = drawerScroll;
  }
  if (previewScroll != null) {
    const newPreview = newContainer.querySelector('.example-viewer-preview');
    if (newPreview) newPreview.scrollTop = previewScroll;
  }
}

window.renderPlayground   = renderPlayground;
window.registerPlayground = registerPlayground;

window._pgdToggleMenu = function(id, which, e) {
  e.stopPropagation();
  const st = _pgdState[id];
  st.openMenu = st.openMenu === which ? null : which;
  _pgdRerender(id);
};

window._pgdSetVariant = function(id, key) {
  const st = _pgdState[id];
  st.variant = key;
  st.openMenu = null;
  _pgdRerender(id);
};

window._pgdSetProp = function(id, propKey, optionKey) {
  const st = _pgdState[id];
  st.props[propKey] = optionKey;
  st.openMenu = null;
  _pgdRerender(id);
};

// Metin prop'u (örn. TextBox Label/Hint/Error Value) her tuş vuruşunda preview'i
// canlı güncellemek için tüm playground bloğunu yeniden render eder — outerHTML
// replacement odağı/imleci kaybettirir, bu yüzden _pgdRerender ayrıca hangi
// data-pgd-text-key'in odaklı olduğunu ve imleç/seçim konumunu yakalayıp yeni
// DOM'da aynı input'a geri yüklüyor (bkz. aşağısı).
window._pgdSetTextProp = function(id, propKey, value) {
  const st = _pgdState[id];
  st.props[propKey] = value;
  _pgdRerender(id);
};

// Açılış/kapanış animasyonu (bkz. styles.css .pgd-drawer--entering/--leaving +
// @keyframes pgd-drawer-in): rAF ile "class ekle → reflow zorla → sonraki frame'de
// class kaldır" denemeleri (transition tabanlı) outerHTML'le taze eklenen elementlerde
// güvenilir çalışmadı — rAF'ın "bir sonraki boyamadan önce" çalışma garantisi, taze
// eklenen bir element için tam olarak İLK boyamadan önce anlamına geliyor, yani
// başlangıç karesi (width:0) hiç ekrana basılmadan class kalkabiliyordu. Çözüm:
// transition yerine `animation` — bir class'la birlikte DOM'a eklenen elementte
// @keyframes animasyonu JS'siz, rAF'a hiç ihtiyaç duymadan otomatik oynar (spec
// garantisi). `st.propsEntering` SADECE drawer'ın açıldığı render'da true olacak
// şekilde ayarlanıp hemen ardından false'a çekiliyor — böylece sonraki re-render'larda
// (örn. içindeki bir dropdown'a tıklanınca) animasyon tekrar oynamıyor, sadece ilk
// açılışta bir kez çalışıyor.
//
// Kapanış aynı numarayla yapılamaz çünkü kapanışta element DOM'dan KALKIYOR — bir
// "leaving" class'ı animasyonun sonunu görmeden elementle birlikte hemen silinirdi.
// Bunun yerine: kapatma tıklanınca `propsOpen` HENÜZ false yapılmıyor (drawer DOM'da
// kalıyor), sadece `propsClosing=true` ile `--leaving` class'ı eklenip animasyon
// başlatılıyor; animasyon süresi (`_PGD_DRAWER_ANIM_MS`, CSS'teki 200ms ile senkron)
// kadar sonra gerçek kapatma (`propsOpen=false`) bir `setTimeout`'la yapılıyor. Kullanıcı
// animasyon bitmeden tekrar tıklarsa bekleyen timeout iptal edilip yeniden başlatılıyor.
const _PGD_DRAWER_ANIM_MS = 200;

window._pgdToggleProps = function(id) {
  const st = _pgdState[id];
  if (st.propsCloseTimer) { clearTimeout(st.propsCloseTimer); st.propsCloseTimer = null; }

  if (st.propsOpen && !st.propsClosing) {
    // Açıkken tıklandı → kapanış animasyonunu başlat, gerçek kaldırmayı ertele
    st.propsClosing = true;
    st.openMenu = null;
    _pgdRerender(id);
    st.propsCloseTimer = setTimeout(() => {
      st.propsOpen = false;
      st.propsClosing = false;
      st.propsCloseTimer = null;
      _pgdRerender(id);
    }, _PGD_DRAWER_ANIM_MS);
    return;
  }

  // Kapalıyken (ya da kapanış animasyonu sürerken) tıklandı → aç
  st.propsOpen = true;
  st.propsClosing = false;
  st.openMenu = null;
  st.propsEntering = true;
  _pgdRerender(id);
  st.propsEntering = false;
};

window._pgdToggleMulti = function(id, propKey, optKey, e) {
  e.stopPropagation();
  const st = _pgdState[id];
  const current = (st.props[propKey] || '').split(',').filter(Boolean);
  const idx = current.indexOf(optKey);
  if (idx === -1) current.push(optKey); else current.splice(idx, 1);
  st.props[propKey] = current.join(',');
  // openMenu intentionally NOT cleared — dropdown stays open for multi-toggle
  _pgdRerender(id);
};

window._pgdSetView = function(id, view) {
  const st = _pgdState[id];
  st.view = view;
  _pgdRerender(id);
};

window._pgdSetViewport = function(id, key) {
  const st = _pgdState[id];
  const preset = PGD_VIEWPORTS.find(v => v.key === key);
  st.viewport = key;
  st.dimW = preset.width;
  st.dimH = preset.height;
  st.openMenu = null;
  _pgdRerender(id);
};

window._pgdSetBg = function(id, key) {
  const st = _pgdState[id];
  st.bg = key;
  st.openMenu = null;
  _pgdRerender(id);
};

window._pgdSetDim = function(id, axis, value) {
  const st = _pgdState[id];
  const num = Math.max(1, parseInt(value, 10) || 1);
  if (axis === 'w') st.dimW = num; else st.dimH = num;
  _pgdRerender(id);
};

window._pgdSwapDims = function(id) {
  const st = _pgdState[id];
  const w = st.dimW;
  st.dimW = st.dimH;
  st.dimH = w;
  _pgdRerender(id);
};

window._pgdToggleMeasure = function(id) {
  const st = _pgdState[id];
  st.measure = !st.measure;
  _pgdRerender(id);
};

// Figma/Nord-Health-style spacing inspector: the hovered element's content
// area is highlighted in blue (visually still the content box, for padding
// reference), but the W×H label centered inside it reports the element's
// TOTAL border-box size (matches Figma's own frame height, which includes
// its stroke — e.g. Grid's Header Cell 36px/Grid Cell 32px) rather than the
// content-only size — content-box was 1-2px short of the Figma spec value
// whenever the element has its own border, which read as a measurement bug
// (bkz. HISTORY.md). Padding is shown as green strips, margin as orange
// strips on each side; a strip is hidden when its value is 0.
window._pgdMeasureMove = function(e, id) {
  const st = _pgdState[id];
  if (!st || !st.measure) return;
  const frame = document.getElementById(id + '-frame');
  const box   = document.getElementById(id + '-measure-box');
  if (!frame || !box) return;

  const el = e.target;
  if (el === frame || box.contains(el)) return;

  const frameRect = frame.getBoundingClientRect();
  const cs = getComputedStyle(el);
  const b  = el.getBoundingClientRect(); // border-box, viewport coords

  const bt = parseFloat(cs.borderTopWidth)    || 0, br = parseFloat(cs.borderRightWidth)  || 0;
  const bb = parseFloat(cs.borderBottomWidth) || 0, bl = parseFloat(cs.borderLeftWidth)   || 0;
  const pt = parseFloat(cs.paddingTop) || 0, pr = parseFloat(cs.paddingRight)  || 0;
  const pb = parseFloat(cs.paddingBottom) || 0, pl = parseFloat(cs.paddingLeft) || 0;
  const mt = parseFloat(cs.marginTop) || 0, mr = parseFloat(cs.marginRight)  || 0;
  const mb = parseFloat(cs.marginBottom) || 0, ml = parseFloat(cs.marginLeft) || 0;

  // frame-relative origin of the border-box
  const bLeft = b.left - frameRect.left;
  const bTop  = b.top  - frameRect.top;

  const padBox = {
    left: bLeft + bl,
    top:  bTop  + bt,
    width:  b.width  - bl - br,
    height: b.height - bt - bb,
  };
  const contentBox = {
    left: padBox.left + pl,
    top:  padBox.top  + pt,
    width:  Math.max(padBox.width  - pl - pr, 0),
    height: Math.max(padBox.height - pt - pb, 0),
  };
  // margin box extends outside the border-box
  const marBox = {
    left:   bLeft - ml,
    top:    bTop  - mt,
    width:  b.width  + ml + mr,
    height: b.height + mt + mb,
  };

  const setRect = (elm, rect) => {
    elm.style.left   = rect.left + 'px';
    elm.style.top    = rect.top + 'px';
    elm.style.width  = Math.max(rect.width, 0) + 'px';
    elm.style.height = Math.max(rect.height, 0) + 'px';
  };
  const setStrip = (elm, rect, value) => {
    elm.style.display = value > 0.5 ? 'flex' : 'none';
    setRect(elm, rect);
    elm.querySelector('.pgd-mb-label').textContent = Math.round(value);
  };

  box.style.display = 'block';

  // margin strips (orange)
  setStrip(document.getElementById(id + '-mar-top'),
    { left: marBox.left, top: marBox.top, width: marBox.width, height: mt }, mt);
  setStrip(document.getElementById(id + '-mar-bottom'),
    { left: marBox.left, top: bTop + b.height, width: marBox.width, height: mb }, mb);
  setStrip(document.getElementById(id + '-mar-left'),
    { left: marBox.left, top: bTop, width: ml, height: b.height }, ml);
  setStrip(document.getElementById(id + '-mar-right'),
    { left: bLeft + b.width, top: bTop, width: mr, height: b.height }, mr);

  // padding strips (green)
  setStrip(document.getElementById(id + '-pad-top'),
    { left: padBox.left, top: padBox.top, width: padBox.width, height: pt }, pt);
  setStrip(document.getElementById(id + '-pad-bottom'),
    { left: padBox.left, top: contentBox.top + contentBox.height, width: padBox.width, height: pb }, pb);
  setStrip(document.getElementById(id + '-pad-left'),
    { left: padBox.left, top: contentBox.top, width: pl, height: contentBox.height }, pl);
  setStrip(document.getElementById(id + '-pad-right'),
    { left: contentBox.left + contentBox.width, top: contentBox.top, width: pr, height: contentBox.height }, pr);

  const contentEl = document.getElementById(id + '-content');
  setRect(contentEl, contentBox);
  // Etiket border-box (toplam görünen) boyutu raporluyor — b, fonksiyonun
  // başında el.getBoundingClientRect() ile alınan border-box rect'i.
  contentEl.querySelector('.pgd-mb-label').textContent = `${Math.round(b.width)} × ${Math.round(b.height)}`;
};

window._pgdMeasureLeave = function(id) {
  const box = document.getElementById(id + '-measure-box');
  if (box) box.style.display = 'none';
};

window._pgdOpenIsolation = function(id) {
  const config = _pgdConfigs[id];
  const st = _pgdState[id];
  if (!config) return;

  // Explicit PGD_ISOLATE registration → use isolation.html
  if (config.isolate) {
    const params = new URLSearchParams({ component: config.isolate, variant: st.variant, ...st.props });
    window.open('isolation.html?' + params.toString(), '_blank');
    return;
  }

  // Auto-isolation: pass playground id + current state via URL params.
  // isolation.html loads playground.js, calls render() to populate _pgdConfigs,
  // then renders the preview directly — no cross-window communication needed.
  const isoParams = new URLSearchParams({ pgd_id: config.id, variant: st.variant, ...st.props });
  window.open('isolation.html?' + isoParams.toString(), '_blank');
};

// "Click Me" trigger — demonstrates the component the way it behaves at
// runtime (e.g. a toast/alert sliding in from the top of the screen) rather
// than sitting statically inside the preview frame. Shown fixed over the
// whole page, above the site chrome, so it reads as a real notification.
// Repeated clicks stack a new toast below the previous ones instead of
// replacing them — each toast lives and animates out independently.
let _pgdToastSeq = 0;

function _pgdToastHost() {
  let host = document.getElementById('pgd-toast-host');
  if (!host) {
    host = document.createElement('div');
    host.id = 'pgd-toast-host';
    document.body.appendChild(host);
  }
  return host;
}

window._pgdRunTrigger = function(id) {
  const config = _pgdConfigs[id];
  const st = _pgdState[id];
  if (!config || !config.trigger) return;

  // Modal mode — shows component centered over a backdrop, closes on backdrop/button click
  if (config.trigger.modal) {
    const existing = document.getElementById('pgd-modal-host');
    if (existing) { existing.classList.remove('is-visible'); setTimeout(() => existing.remove(), 200); return; }
    const host = document.createElement('div');
    host.id = 'pgd-modal-host';
    host.innerHTML = `<div class="pgd-modal-content">${config.preview(st.variant, st.props)}</div>`;
    const close = () => { host.classList.remove('is-visible'); setTimeout(() => { if (document.body.contains(host)) host.remove(); }, 200); };
    host.addEventListener('click', e => { if (e.target === host || e.target.closest('[data-pgd-close]')) close(); });
    document.body.appendChild(host);
    void host.offsetHeight;
    requestAnimationFrame(() => host.classList.add('is-visible'));
    return;
  }

  // Toast mode — slides in from the top of the screen, auto-dismisses
  const host = _pgdToastHost();
  const el = document.createElement('div');
  el.className = 'pgd-toast';
  el.id = 'pgd-toast-' + (++_pgdToastSeq);
  el.innerHTML = config.preview(st.variant, st.props);
  host.appendChild(el);

  void el.offsetHeight; // force reflow so the off-screen start state commits before animating in
  requestAnimationFrame(() => el.classList.add('is-visible'));

  const duration = config.trigger.duration || 3000;
  setTimeout(() => {
    el.classList.remove('is-visible');
    el.classList.add('is-leaving');
    setTimeout(() => { if (host.contains(el)) host.removeChild(el); }, 600);
  }, duration);
};

document.addEventListener('click', (e) => {
  Object.keys(_pgdState).forEach(id => {
    const st = _pgdState[id];
    if (st.openMenu && !e.target.closest(`#${id} .pgd-dropdown`)) {
      st.openMenu = null;
      _pgdRerender(id);
    }
  });
});
