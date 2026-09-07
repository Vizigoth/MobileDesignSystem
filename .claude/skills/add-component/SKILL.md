---
name: add-component
description: Use when adding a new component, or restructuring/documenting an existing component's page, in the Bentas Design System docs site (docs/js/pages-web.js) — governs playground config conventions (prop.group, boolean toggle standard, preview centering, CSS tab), section description rules, the 4-tab page standard, Example Viewer pattern, variant/multi-axis documentation patterns, Data Table properties consistency, and TOC ordering. Migrated out of the project's root CLAUDE.md on 2026-09-07 (doctor cleanup) so it only loads when actually adding/editing a component page — see CLAUDE.md for the universal rules that stayed there.
---

# Component Authoring & Documentation Standard

This skill holds the Bentas Design System's rules for building and documenting a component page. It only applies when adding a new component or restructuring/documenting an existing one — for the universal rules that apply to every change (icon wrapper, CSS tokens, component reuse, naming, design.md sync), see the project's root `CLAUDE.md`.

## Yeni token gerekiyorsa

Önce `docs/css/styles.css` `:root` bloğundaki mevcut `--bt-*` token'lar arasında eşleşen bir değer ara. Yoksa Figma'daki gerçek variable adını/değerini kullanıcıya danışmadan icat etme: Figma Desktop Bridge ile ilgili node'u incele (`get_metadata` → `get_design_context` → `get_screenshot`), çıkan `var(--.../token-name, fallback)` değerini styles.css'teki karşılığıyla eşleştir.

## Kontrol (component tamamlandığında)

O component'in CSS bloğunda hardcoded px/hex değer kalmadığından emin ol — yalnızca `var(--bt-*, fallback)` deseninin fallback kısmında px/hex görünmeli. CSS selector specificity'ye dikkat: aynı elementi hedefleyen daha genel bir kural (örn. `.content p`) component'in kendi class'ını ezebilir — component class'larını yeterince spesifik yaz (örn. `.bt-x-field .bt-x__desc`).

## Isolation Mode (Playground Toolbar)

`docs/js/playground.js` içindeki isolation butonu **tüm playground'larda standarttır** — ekstra kurulum gerekmez.

Yeni bir component eklendiğinde sadece `registerPlayground({id: 'pgd-xxx-overview', ...})` yeterli. `isolation.html`, `window.PAGES_WEB` üzerinden tüm sayfaların `render()` fonksiyonlarını çağırarak `_pgdConfigs`'i doldurur ve ilgili playground'ı `pgd_id` URL parametresiyle bulur.

`window.PGD_ISOLATE` kaydı veya `config.isolate` **artık yeni componentler için gerekli değil** — sadece Sidebar ve Alert gibi eskiden eklenmiş özel mount davranışları olan componentlerde kalır.

## Properties Drawer'da `prop.group` Kullanımı — ZORUNLU

`registerPlayground`'daki Properties drawer'ı (`docs/js/playground.js`), `config.props`'taki her prop'u opsiyonel bir `group: 'Etiket'` alanına göre bölümlere ayırabilir. Bu **sadece Card'a özel bir istisna değil, karmaşık (multi-section) component'ler için proje standardıdır**:

- **Header/Body/Footer gibi birbirinden ayrı, kendi içinde birden fazla prop barındıran mantıksal bölümleri olan component'lerde** (Card, Dialog gibi) her bölüm kendi `group` adıyla etiketlenmeli (örn. `group: 'Header'`, `group: 'Footer'`) — drawer'da bölüm başlıklarıyla ayrılmış, taranabilir bir liste üretir.
- **TEK bir mantıksal yapılandırma yüzeyi olan basit component'lerde** (Button'ın Theme/Size/Content/State'i gibi düz bir prop listesi) `group` HİÇ KULLANILMAMALI — tüm prop'lar group'suz bırakılmalı, drawer'da gereksiz bölüm ayraçları göstermeden tek düz liste kalmalı.

Yeni bir component eklerken hangi yaklaşımın uygun olduğuna karar vermek için: component'in Figma'daki tanımı birden fazla bağımsız alt-yapı (Header/Body/Footer gibi) içeriyorsa `group` kullan; tek bir düz varyasyon yüzeyiyse kullanma.

## Playground Toolbar Boolean Toggle Standardı — ZORUNLU

Bir playground'da bir öğeyi (icon, label, description, control vb.) tamamen göster/gizle amacıyla eklenen her toggle **`On`/`Off`** seçeneklerini kullanmalı — `Yes`/`No`, `Show`/`Hide`, `Visible`/`Hidden` gibi varyasyonlar kullanılmaz. Bu proje genelinde tek standart.

- Paylaşılan seçenek dizisi: `TBX_BOOL_OPTS = [{ key: 'on', label: 'On' }, { key: 'off', label: 'Off' }]` (dosyada en üstte, Checkbox bloğundan önce tanımlı — ilk kullanım noktasından önce olması **zorunlu**, aksi halde `const` temporal-dead-zone hatası verir).
- Yeni bir boolean toggle eklerken **ayrı bir seçenek dizisi tanımlama** — `TBX_BOOL_OPTS`'u doğrudan reuse et (`options: TBX_BOOL_OPTS`). Component'e özel bir isim gerekiyorsa (okunabilirlik için) `const XYZ_OPTS = TBX_BOOL_OPTS;` şeklinde alias ver, içeriğini kopyalama.
- Render fonksiyonlarındaki kontroller `=== 'on'` / `!== 'off'` şeklinde yazılır (eski `=== 'yes'` / `!== 'no'` / `=== 'show'` kalıpları kullanılmaz).
- Bu, sadece toggle'ın **iki seçeneğinin adı** için geçerli — prop'un kendi etiketi (örn. "Show Description", "Show Content") aynen kalır, sadece o etiketin altındaki Yes/No veya Show/Hide seçenekleri On/Off olur.

**Geçmiş:** Bu standart 2026-07-29'da geriye dönük olarak uygulandı — önceden Checkbox/Radio/Switch `Show`/`Hide` (`CHK_SHOW_OPTS`/`CHK_DESC_OPTS`), TextBox/Textarea/Accordion/Dialog `Yes`/`No` (`TBX_BOOL_OPTS`) kullanıyordu; hepsi `On`/`Off`'a taşındı, `CHK_SHOW_OPTS`/`CHK_DESC_OPTS` kaldırılıp `TBX_BOOL_OPTS`'a alias'landı. Bkz. HISTORY.md.

## Playground Preview Centering — ZORUNLU

`registerPlayground`'daki `preview` callback'i döndürdüğü HTML'i her zaman bir centering wrapper'a sarmalıdır — aksi hâlde component playground'da sola yaslanır.

İki standart kalıp:

```javascript
// Küçük / buton / ikon tipi bileşenler:
return `<div style="display:flex;align-items:center;justify-content:center;padding:16px;">${html}</div>`;

// Form / full-width bileşenler:
return `<div style="max-width:440px;width:100%;margin:0 auto;">${html}</div>`;
```

Yeni bir component eklenirken bu wrapper **zorunludur** — eklenmezse playground'da sola yaslanır.

## Playground CSS Sekmesi — ZORUNLU

`registerPlayground` çağrısında **`css` callback'i her zaman eklenmelidir** — bu, playground'daki Preview / Code / **CSS** üç sekmesinin tamamının görünmesini sağlar.

```javascript
registerPlayground({
  id: 'pgd-xxx-overview',
  variants: VARIANTS,
  preview: (state, p) => xxxHtml(state, p),
  code:    (state, p) => xxxHtml(state, p),
  css:     (state, p) => xxxCss(state, p),   // ← ZORUNLU
})
```

`xxxCss(state, props)` fonksiyonu:
- Seçili state/props kombinasyonuna göre **ilgili CSS kurallarını** üretir
- Her property değerinin yanına token adı + fallback hex comment ekler: `var(--bt-text-brand-default)  /* #0d4e97 */`
- Dosya başında top-level `const`/`function` olarak tanımlanır (render closure içinde değil)
- Satır üretimi için `const p = (k, v) => \`  \${k}: \${v};\`` helper pattern kullanılır
- **Return formatı ZORUNLU** — diğer componentlerle aynı `<pre>` wrapper ve HTML escape:
```javascript
const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
return `<pre class="code-block" style="margin:0;border-radius:0;border:none;min-height:100%;">${esc(lines.join('\n'))}</pre>`;
```

## Her Bölümün Dokümantasyon Yapısı — ZORUNLU

Bir component sayfasındaki **her `<h2>` ve `<h3>` bölümü** — Header/Body/Footer/States/Anatomy/Building Blocks gibi her türlü bölüm — aynı üç adımlı yapıyı izler:

**1. Başlık** (`<h2>` veya `<h3>`)
- TOC'ta yer alan `<h2>` bölümlerinin `id` değeri `toc` dizisiyle birebir eşleşmeli
- Anatomy dahil her başlık açıkça yazılır — `<h3>Anatomy</h3>` başlıksız bare `<table>` kabul edilmez

**2. Description** (`<p class="page-desc">`) — ZORUNLU, istisnasız
- **3–5 cümle**, şu üç katmanı tek okuma akışında barındırır:
  1. **Tasarım kararı** — Bu bölüm neden bu şekilde tasarlandı? Hangi UX problemini çözüyor?
  2. **Görsel / davranışsal mekanik** — Hangi state'ler var, nasıl çalışıyor, hangi kısıtlamalar var?
  3. **Implementasyon referansı** — CSS class, token adı, Blazor/Telerik API (tek cümle yeterli)
- Anatomy bölümleri dahil — 2–3 cümle, yapısal katmanları + token/class adlarını + Blazor karşılığını kısaca belirtmeli
- **Kabul edilmez:** "Aşağıda örnekler:", "Playground'da dene.", tek cümlelik geçiş metinleri

**3. İçerik** — description'dan hemen sonra gelir, bare HTML kabul edilmez. Bölümün **canlı demosu** şu ikisinden **yalnızca biridir** (ikisi aynı bölümde birlikte değil):
- `registerPlayground(...)` — interaktif demo (props panelli). Tip B varyant bölümleri ve master bölüm her zaman bunu kullanır.
- `.example-viewer` — statik görsel örnek. Yalnızca playground'u OLMAYAN bölümler için (bkz. "Statik Demo Gösterimi").

Buna ek olarak (demoyla birlikte veya tek başına) bir **tablo** konabilir:
- `<table class="token-table" style="margin-top:12px">` — token/anatomy/states tablosu; `tk(v)` helper'ı ile token adları `<code>` formatında, token karşılığı olmayanlar için Token sütununa `—`

## Controls / Kontrol Tipi Tablosu — Preview Kolonu — ZORUNLU (2026-09-07)

Bir component'in slot/control sistemi birden fazla tip alıyorsa (Overflow Menu'nün Left/Right Control'ü — Icon/Checkbox/Radio/Switch/Avatar/Kbd/Palette/Button/Blank gibi 9 tip; ileride benzer bir "hangi tiplerden birini alabilir" tablosu gerektiren her component) bu tipleri listeleyen tablo **yalnızca metinle** (Type/Reuse/Boyut kolonları) YETİNMEZ — kullanıcı isteğiyle (Overflow Menu Controls tablosu, devam 25) standart hâline geldi:

- Tabloya **`Preview`** adında bir kolon eklenir, `Type` kolonundan hemen sonra (ilk kolon).
- Bu kolonun hücresi, o satırın component'inin **gerçek render fonksiyonunu** (kod örneğiyle/Code tab'ıyla AYNI fonksiyon — örn. `ovfCtrlHtml(type, opt)`) çağırarak üretilir. **Statik bir açıklama görseli veya elle çizilmiş bir taklit DEĞİL** — playground'da göreceğin ile birebir aynı DOM.
- Sayfanın `render(tab)` fonksiyonu içinde, `tk` helper'ının yanına yerel bir `xxxPreview` helper'ı tanımlanır (Overflow Menu'de `ctrlPreview`), hücreyi hafif bir çerçeve içinde ortalar:
  ```javascript
  const ctrlPreview = html => `<div style="display:inline-flex;align-items:center;justify-content:center;min-width:44px;min-height:44px;padding:6px;border:1px solid var(--bt-border-primary-muted,#e6e6e6);border-radius:var(--bt-radius-sm,4px);background:var(--bt-base-default,#fff);">${html}</div>`;
  ```
  Her satır: `<tr><td>Icon</td><td>${ctrlPreview(ovfCtrlHtml('icon', { icon: _ovfIconEdit }))}</td><td>...Reuse...</td><td>...Boyut...</td></tr>`.
- Önizleme değeri **temsili/görünür** seçilir — varsayılan "kapalı/boş" state yerine, tipin ayırt edici özelliğini gösteren bir opt (checkbox → checked, switch → on, palette → belirgin bir marka rengi, kbd → gerçek bir kombinasyon).
- Bu, ileride **Controls/kontrol-tipi tablosu gerektiren her yeni component** için otomatik uygulanır — kullanıcı ayrıca hatırlatmasın.

## Statik Demo Gösterimi — "Example Viewer" Pattern — ZORUNLU

Bir bölümün demosu `registerPlayground` DEĞİLSE (statik/interaktif-props'suz bir önizleme), o önizleme **her zaman `.example-viewer` içine** sarılır — çıplak bir `<div style="padding:…">` sarmalayıcı kabul edilmez ("İçerik → bare HTML kabul edilmez" kuralının bir parçası). `token-table` (states/anatomy/token listesi) bu kuraldan muaftır; kural, "bir veya birkaç canlı component örneğini göstermek" için olan serbest önizlemeler içindir (Counter rozeti, Add Tab butonu, tek bir fill mode örneği vb.). Yapı `registerPlayground` yerine:

> **`.example-viewer` ile playground BİRLİKTE kullanılmaz — biri VEYA öteki.** Bir `<h2>`/`<h3>` bölümünün demosu ya bir `registerPlayground` çağrısıdır ya da bir `.example-viewer`'dır; ikisi aynı bölümde art arda konmaz. Özellikle **Tip B varyant bölümlerinde** (`<h2 id="{Variant}">` → page-desc → `pgd-{comp}-{variant}-sec` → `<h3>States</h3>` → `<h3>Anatomy</h3>`) demo **her zaman kilitli playground'dur**; varyantın "açık/özel bir hâlini" göstermek için araya `.example-viewer` eklenmez — playground'un default prop'ları o hâli zaten üretmelidir. `.example-viewer` yalnızca playground'u OLMAYAN bağımsız bölümler (Counter, Add Tab, statik örnek matrisleri) içindir. Aynı şekilde bir varyant bölümüne ikinci bir `<p class="page-desc">` de eklenmez — bölüm başına tek page-desc.

**A) Küçük component örneği (varsayılan) — alana yatay + dikey ORTALI:**
```html
<div class="example-viewer">
  <div class="example-viewer-preview" style="align-items:center;">
    <div style="display:flex;flex-direction:column;gap:20px;align-items:center;">
      <!-- bir veya birkaç canlı örnek — alt alta, ortalı -->
    </div>
  </div>
</div>
```
`.example-viewer-preview` zaten `display:flex; justify-content:center` taşır; `align-items:center` inline'ı dikey ortalamayı ekler. İç flex-column `align-items:center` her örneği yatayda ortalar. Örnekler **sola/üste yaslı bırakılmaz** — 460px'lik alanın ortasında durur.

**B) Tam-genişlik / geniş içerik (grid, tablo, cihaz çerçevesi) — frame nesting'i:**
```html
<div class="example-viewer">
  <div class="example-viewer-preview">
    <div class="pgd-preview-inner">
      <div class="pgd-viewport-frame" style="width:100%">
        <div style="padding:32px;overflow-x:auto;"><!-- geniş içerik --></div>
      </div>
    </div>
  </div>
</div>
```
Yalnızca içerik önizleme alanının tam genişliğini kullanmalıysa (Data Table `bt-grid-container` gibi) bu nesting kullanılır.

**Kod gösterimi** (opsiyonel, playground Code tab ile aynı görünüm):
```html
<div class="example-viewer">
  <div class="example-viewer-code"><pre><!-- escaped HTML/CSS --></pre></div>
</div>
```

**Kurallar:**
- `.example-viewer` → kenarlı, rounded wrapper (`border: 1px solid var(--bt-border-muted); border-radius: 10px`)
- `.example-viewer-preview` → açık arka planlı önizleme alanı (`min-height/max-height: 460px`, `justify-content:center`)
- `.example-viewer-code` → kod alanı (`border-top` ile preview'dan ayrılır); yalnız kullanılabilir
- İkisi **aynı** `.example-viewer` içinde art arda veya **ayrı** `.example-viewer` blokları olarak kullanılabilir
- **`registerPlayground` kullanılmaz** — bu pattern tamamen statik/interaktif değil

**Kod renklendirme (syntax highlighting + satır numaraları) — ZORUNLU:**

`applyCodeHighlighting` iki selector'ı otomatik işler — doğru class/id kullanılırsa ek kurulum gerekmez:

```html
<!-- HTML kodu (language-markup + line-numbers) -->
<!-- pre id'si mutlaka "-code" ile bitmeli, .example-viewer-code içinde olmalı -->
<div class="example-viewer-code">
  <pre id="ev-{sayfa-adı}-code">...escaped HTML...</pre>
</div>

<!-- CSS kodu (language-css + line-numbers) -->
<!-- .example-viewer-code içinde veya dışında, sadece class="code-block" yeterli -->
<div class="example-viewer-code">
  <pre class="code-block">...escaped CSS...</pre>
</div>
```

- HTML gösteriminde `id` **benzersiz** olmalı, `-code` ile bitmeli
- İçerik her zaman HTML-escape edilmeli: `&` → `&amp;`, `<` → `&lt;`, `>` → `&gt;`
- Playground'daki `_pgdEsc()` yerine sayfa içinde inline IIFE: `${(() => { const esc = s => s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); return esc(\`...\`); })()}`

## Sayfa Tab Yapısı — ZORUNLU (4 Tab Standardı)

Her component sayfası (Web dokümantasyonu, `PAGES_WEB[...]`) **dört tab** taşımalı, bu sırayla:

```javascript
tabs: ['Overview', 'Examples', 'CSS Properties', 'Usage'],
```

- **Overview** — component'in ne olduğunu tanıtan kısa açıklama + TEK bir interaktif `registerPlayground` (component'in tüm prop'larını kapsayan genel amaçlı demo) + varsa `toc`'taki bölümlerle eşleşen Anatomy/yapı tabloları.
- **Examples** — component'in farklı varyant/tip kombinasyonlarını gösteren, genelde birden fazla küçük `registerPlayground` veya statik önizleme tablosu içeren AYRI bir tab. Overview'daki tek genel playground'un aksine, burada component'in somut kullanım senaryoları (örn. Button'daki Solid/Outline/Flat/Ghost örnekleri, Card'daki Header Types/Body Content tabloları) yer alır — Overview'a gömülmez.
- **CSS Properties** — design token–CSS değişken eşleşme tablosu (`token-table`).
- **Usage** — Do/Don't listeleri.

Bir component'in **State/Anatomy** gibi tab-özel içerikleri varsa (örn. Clickable Card'ın Default/Hover/Active State tablosu) bunlar **Examples** tab'ına gider, Overview'da sadece genel playground + kısa açıklama kalır.

**Bu, geriye dönük bir standart** — 2026-08-12'de siteye uygulandı (bkz. HISTORY.md), yeni eklenen HER component bu 4-tab yapısıyla gelmeli, `['Overview', 'CSS Properties', 'Usage']` (Examples'sız 3-tab) veya sadece `['Overview']` gibi eksik yapılar kabul edilmez.

## Component Dokümantasyon Bütünlük Standardı — ZORUNLU

Yeni bir component eklenirken veya mevcut bir component güncellenirken **bütünlük** iki tipe göre belirlenir:

---

### Tip A — Variant'sız Component (Button, Badge, Kbd, Separator…)

**Overview sekmesi (bu sırayla):**
1. Master playground — tüm eksenler (size, state, theme, feature toggle'lar) kontrol edilebilir
2. `<h2 id="Anatomy">` + page-desc + anatomy tablosu
3. `<h2 id="Sizes">` + page-desc + sizes tablosu (varsa)
4. `<h2 id="States">` + page-desc + states matrisi (varsa)
5. `<h2 id="Themes">` + page-desc + themes tablosu (varsa)
6. [Diğer eksenler — bkz. "Çok Eksenli Component Dokümantasyonu"]

**Examples sekmesi:** Her eksen için token-table (Segmented Control deseni — satırlar: eksen değerleri, Preview kolonu)

---

### Tip B — Variant'lı Component (Overflow Menu, Card, Dialog…)

Variant = component'in **davranışsal kimliğini** değiştiren eksen (Overflow Menu: Basic/Submenu/Icons/Shortcuts/Sections/Destructive gibi). Variant bölümleri **Overview sekmesinde**, genel bölümlerden SONRA yer alır — Examples'ta değil.

**Overview sekmesi (bu sırayla):**
1. Master playground — variant dahil tüm props kontrol edilebilir (`pgd-{comp}-overview`)
2. `<h2 id="Anatomy">` + page-desc + genel anatomy tablosu (tüm variant'larda ortak katmanlar)
3. `<h2 id="States">` + page-desc + genel states matrisi (varsa)
4. [Diğer genel eksenler: Sizes, Themes, vb. — varsa]
5. **Her variant için ayrı `<h2>` bölümü** (genel bölümlerden sonra, bu sırayla):
   - `<p class="page-desc">` — 3 katman: tasarım kararı + görsel mekanik + implementasyon referansı
   - `${registerPlayground({ id: 'pgd-{comp}-{variant}-sec' })}` — **o variant kilitli**, diğer tüm props (state, size, items, controls, feature toggle'lar…) özgür ve kontrol edilebilir
   - `<h3>States</h3>` + page-desc + o varyanta özgü states tablosu
   - `<h3>Anatomy</h3>` + page-desc + o varyanta özgü anatomy tablosu (token listesi)

**Examples sekmesi:** Tüm variant'ları tek bir token-table'da karşılaştırır:
```
<table class="token-table">
  <thead><tr><th>Variant</th><th>Preview</th></tr></thead>
  <tbody>
    <tr><td>Basic</td><td>${ovfBareListHtml(...)}</td></tr>
    <tr><td>Submenu</td><td>${ovfBareListHtml(...)}</td></tr>
    ...
  </tbody>
</table>
```
Her variant satırı, o variant'ın en temsili halini gösterir (gereksiz trigger/overlay olmadan).

**TOC:**
```javascript
toc: [
  'Anatomy', 'States',           // genel (Sizes/Themes varsa eklenir)
  'Variant A', 'Variant B', ...  // her variant adı — h3 sub-bölümler TOC'ta YER ALMAZ
]
```

---

### Tamamlama Kontrol Listesi (her component için)

Bir component'i tamamlamadan önce şunların tümü sağlanmış olmalı:

- [ ] **4 tab var**: Overview / Examples / CSS Properties / Usage
- [ ] **Overview**: Master playground tüm eksen ve props'ları kapsiyor
- [ ] **Her h2/h3**: `<p class="page-desc">` var (bölüm başına **tek** tane), 3–5 cümle, 3 katman (karar/mekanik/implementasyon)
- [ ] **Her playground**: `css` callback var
- [ ] **Variant'lı ise**: Her variant için kendi `pgd-{comp}-{variant}-sec` playground'u var; variant kilitli, diğer tüm props özgür
- [ ] **Variant'lı ise**: Variant bölümünde `.example-viewer` YOK — demo yalnızca kilitli playground'dur (bkz. "Statik Demo Gösterimi": ikisi aynı bölümde birlikte kullanılmaz)
- [ ] **Variant'lı ise**: Her variant bölümünde `<h3>States</h3>` + `<h3>Anatomy</h3>` sub-bölümleri var
- [ ] **Variant'lı ise**: Variant bölümleri Overview'da (genel bölümlerden sonra), Examples'ta değil
- [ ] **Variant'lı ise**: Examples tab → tek karşılaştırma token-table'ı (her variant bir satır)
- [ ] **TOC**: Sayfadaki tüm `<h2>` bölümlerini, doküman sırasıyla kapsiyor
- [ ] **CSS Properties tab**: Tüm component token'ları eksiksiz tablo
- [ ] **Usage tab**: Do/Don't içeriği var, component'e özgü yanlış kullanım senaryoları

## Varyant Dokümantasyonu — Tek Sayfa Standardı — ZORUNLU

Bir component'in birden fazla davranışsal varyantı varsa (örn. Card → Default/Clickable/Selectable/Collapsible/Scrollable), **bu varyantlar ayrı sidebar sayfaları olarak değil, ana component sayfasında TOC bölümleri olarak** dokümante edilir. Bu kural 2026-08-27'de Card component'i üzerinde uygulanmış ve tüm component'ler için genel standard olarak kabul edilmiştir.

**Sidebar nav:** Component için tek bir leaf item — grup + children yapısı kullanılmaz.
```javascript
{ label: 'ComponentName', id: 'components/component-name' }   // ✓
// Children listesi ile grup yapısı  ✗
```

**TOC:** Ana component bölümleri + her varyant adı düz bir dizi olarak listelenir:
```javascript
toc: ['Section1', 'Section2', 'Variant A', 'Variant B', 'Variant C'],
```

**Her varyant bölümünün zorunlu içeriği** (bu sırayla):

1. `<h2 id="Variant Name">Variant Name</h2>` — id değeri toc dizisindeki string ile birebir eşleşmeli
2. `<p class="page-desc">` — description kuralına göre 3–5 cümle (tasarım kararı + görsel mekanik + implementasyon referansı)
3. `${registerPlayground({...})}` — o varyanta özel tam playground; ID formatı `pgd-{component}-{variant}-sec` (sub-sayfalardaki `pgd-{component}-{variant}-overview` ID'siyle çakışmama için)
4. `<h3>Alt Bölüm</h3>` + description + içerik — varyanta özel alt bölümler (örnekler):
   - **States** tablosu (Default/Hover/Active/Selected gibi etkileşim durumları varsa)
   - **Body Content** tablosu (içerik kombinasyonlarını gösteren tablo varsa)
   - **Anatomy** tablosu (her varyant için token listesi — ZORUNLU)

**Playground ID çakışması:** Ana component sayfasındaki varyant playground'larının ID'leri, eski sub-sayfaların (eğer hâlâ PAGES_WEB'de tanımlıysa) playground ID'leriyle çakışmamalı. `-sec` son eki bu ayrımı sağlar.

**Sub-sayfalar:** Eski sub-sayfa `PAGES_WEB[...]` tanımları silinmek zorunda değil — sidebar'dan kaldırılmaları yeterli. Ancak yeni component eklenirken sub-sayfa hiç oluşturulmaz.

## Çok Eksenli (Multi-Axis) Component Dokümantasyonu — ZORUNLU

Bir component'in yapılandırma yüzeyi = **eksenler** kümesi (Fill Mode, Content Type, Size, State, Orientation, Closable, Counter…). Yukarıdaki "Varyant Dokümantasyonu" davranışsal varyantları (Card: Default/Clickable/…) kapsar; **bu kural ise dik/ortogonal yapılandırma eksenlerini** kapsar (Tab, Segmented Control, Button). Her ekseni aşağıdaki **5 türden** birine sok; her türün sabit bir muamelesi var — yeni component eklerken önce eksenleri sınıflandır.

| # | Tür | Nasıl anlaşılır | Playground prop | Bölüm(ler) | TOC'ta? |
|---|---|---|---|---|---|
| 1 | **Core** | Her component'te var | ✓ | `Sizes` / `States` / `Themes` `<h2>` — sabit sıra (bkz. "TOC sıralaması") | **✓** |
| 2 | **Primary** | Görsel kimliği **en çok** değiştiren **tek** eksen (Tab→Fill Mode, Button→Fill Mode) | ✓ | (a) tek `<h2 id="{Eksen çoğul}">` **karşılaştırma** (statik `token-table`, satır/değer) **+** (b) **her değer için ayrı `<h2 id="{değer}">` bölüm** (Line, Bordered, Segmented…) | (a) ve (b)**nin hepsi ✓** |
| 3 | **Content** | İç içeriğin **kutu geometrisini/padding'ini** değiştirdiği eksen (Segmented Control→Content Type: Icon Only kutuyu kareler). İkon sadece görünüp kayboluyorsa (padding sabit) bu bir Content ekseni DEĞİL, **Feature toggle** — Tab böyle. | ✓ | Primary ekseni varsa: her Primary değer bölümünün **içinde `<h3>` alt-bölüm** (Label / Icon & Label / Closable…). Primary eksen yoksa: Primary gibi kendi `<h2 id="{değer}">`'leri | Primary'nin içindeyse `<h3>` → **✗**; bağımsızsa `<h2>` → **✓** |
| 4 | **Layout** | Orientation (Horizontal/Vertical) vb. | ✓ | yalnız **varsayılan-olmayan** değer için `<h2 id="Vertical">` — Primary eksen boyunca preview | **✓** |
| 5 | **Feature toggle** | Opsiyonel, bağımsız eklenen parça (Counter, Add Tab, Separator, Show Icon…) | ✓ `On`/`Off` — `TBX_BOOL_OPTS` reuse | Primary değer bölümlerine özgü toggle (Closable gibi) → o bölümlerin içinde `<h3>`. Kesişen/genel toggle (Counter, Add Tab) → bağımsız `<h2 id="{Özellik}">` | `<h3>` → **✗**; bağımsız `<h2>` → **✓** |

### Sayfa iskeleti (Primary ekseni olan component — örn. Tab)

**Overview sekmesi** (bu sırayla):
1. **Master playground** — TEK `registerPlayground` (`pgd-{comp}-overview`), `props` TÜM eksenleri şu sırada: primary → orientation → size → content → count/selected → feature toggle'lar. `css` callback scoped kuralları yazar.
2. `<h2 id="Anatomy">` + `<h2 id="Sizes">` + `<h2 id="States">` (state matrisi Primary değer başına bir `<div>`-etiketli alt-tablo — `<h3>` değil) + `<h2 id="{Primary çoğul}">` (statik karşılaştırma tablosu).
3. **Her Primary değer için `<h2 id="{değer}">`** (Line → Bordered → Segmented):
   - `<p class="page-desc">` (3-katmanlı) + o değere **kilitli** `registerPlayground` (`pgd-{comp}-{değer}-sec`; primary sabit, orientation/size/count/selected/toggle'lar açık)
   - içinde **`<h3>` alt-bölümler**: `Label` → `Icon & Label` → `Closable` (Content ekseni + o eksene özgü toggle'lar). **Her `<h3>` kendi `registerPlayground`'una sahip** (`pgd-{comp}-{değer}-{alt}-sec`; hem primary hem content sabit, size/count/selected açık) + `<p class="page-desc">`.

**Examples sekmesi:** Overview'daki `<h2 id>` bölümlerinin **aynısı** (Line/Bordered/Segmented + Vertical + Counter + Add Tab), ama playground yerine **interaktif preview tabloları** (Segmented Control Examples deseni — satırlar: Label / Icon & Label / Closable / With Counter). Bağımsız `<h2>`'ler (Vertical, Counter, Add Tab) yalnız Examples'ta olabilir.

**TOC (düz dizi) — sayfadaki HER `<h2>` bölümü, doküman sırasında:**
```javascript
toc: ['Anatomy', 'Sizes', 'States', 'Themes'?,      // core
      'Fill Modes',                                   // primary karşılaştırma
      'Line', 'Bordered', 'Segmented',                // her primary değer
      'Vertical', 'Counter', 'Add Tab']               // bağımsız layout/toggle
```
`<h3>` alt-bölümler (Label / Icon & Label / Closable) TOC'ta değildir. Overview ve Examples aynı `id`'leri paylaşır (farklı sekmelerde, aynı anda DOM'da değil) — `renderToc` hangi sekmedeysen o `id`'yi bulur.

**Playground ID çakışması:** `pgd-{comp}-overview` · `pgd-{comp}-{değer}-sec` · `pgd-{comp}-{değer}-{alt}-sec` · Examples tarafında `-ex` son eki.

**Statik demolar → `.example-viewer`:** Bir bağımsız `<h2>` bölümü (Counter, Add Tab gibi) playground yerine sadece canlı örnek gösteriyorsa, önizleme **`.example-viewer` içine sarılır** (bkz. "Statik Demo Gösterimi — ZORUNLU"). Çıplak `<div>` sarmalayıcı veya salt `token-table` yerine değil, bunlara ek olarak — birden çok örnek `.example-viewer-preview` içindeki flex-column'da alt alta dizilir.

**İnteraktif davranış:** bir toggle gerçek runtime davranışı taşıyorsa (close siler, Add Tab klonlar) → `window.btXxx(el)` global (`btSegSelect`/`btTabSelect`/`btTabClose`/`btTabAdd` deseni), markup helper'ında `onclick`, ilgili `<h3>`/`<h2>` description'ında kalın **"Çalışır:"** + handler adı.

**Referanslar:** `components/segmented-control` (Content ekseni bağımsız `<h2>`'ler — Primary eksen yok), `components/tab` (Primary = Fill Mode, Content `<h3>` olarak Fill Mode değerlerinin içinde) ve `components/avatar` (Primary = Type / Initials·Icon, Core = Theme + Size, State yok) bu standardın kanonik örnekleridir.

### Tablo dışı bir eksen türüyle karşılaşınca

Bu 5 tür tekrar eden desenleri kapsar; farklı bir eksen türü çıkarsa:

1. **Önce mevcut bir türe *ihtiyaca göre* eşle** (isme göre değil): görsel kimliği değiştiriyor → Primary · iç kutu geometrisi/padding → Content · istifleme yönü → Layout · opsiyonel bir parça ekliyor/çıkarıyor → Feature toggle · her component'te evrensel → Core. Eksen component'in **ne yaptığını** değiştiriyorsa (görünüşünü değil — single/multi select, editable/readonly gibi) bu tablo değil, **"Varyant Dokümantasyonu — Tek Sayfa Standardı"** (Card modeli) geçerlidir.
2. **Gerçekten hiçbirine uymuyorsa:** varsayılan olarak **Primary/Content gibi ele al** (karşılaştırma `<h2>` + per-değer `<h2 id>` bölümleri + kilitli playground) — bu en açık/kapsamlı muamele, asla eksik-dokümante etmez. **Ama sessizce 6. kategori uydurma:** ekseni tarif et, en yakın türü + gerekçeni söyle, kullanıcıdan onay ya da yeni tür adı iste.
3. **Yeni tür doğrulanırsa:** hemen bu tabloya **Tür 6** olarak, sabit muamelesiyle (playground prop mu · hangi bölüm(ler) · TOC'ta mı) ekle — bir sonraki tekrar deterministik olsun.
4. **Eskalasyon eşiği:** aynı "uymayan" eksen **ikinci kez** çıkarsa artık zorunlu olarak yazılı bir tür olur (projede bu desen zaten var — Data Table'ın per-kolon config'i "Properties Tutarlılığı" kuralını, Card varyantları ayrı bir standardı doğurdu).

## Data Table Örneklerinde Properties Tutarlılığı — ZORUNLU

Data Table'ın TÜM örnek sayfaları (`components/data-table*` — Data Table, Toolbar, Actions, Frozen Column First/Last, Inline Editing, InCell Editing, ve gelecekte eklenecek her yeni Data Table örneği, örn. Sorting/Filter Menu) **aynı temel Properties setine** sahip olmalı (kullanıcı isteğiyle, 2026-08-24, bkz. HISTORY.md). Bu otomatik/koddan gelen bir davranış DEĞİL — yeni bir Data Table sayfası eklerken/mevcut birini değiştirirken elle uygulanması gereken bir kontrol listesi:

1. **Her veri kolonu kendi Content prop'una sahip olmalı** — `field`'ı olan HER kolon (Checkbox ve Actions HARİÇ), `GRID_TABLE_CONTENT_OPTS` (None/Checkbox/Dot/Icon/Avatar/Avatar Group/Badge/Button/Switch/Inline TextBox/Inline Dropdown) kullanan bir `xContent` prop'u almalı, `group: 'Columns'` altında. Sayfaya özel yardımcı kolonlar bile (örn. Frozen'daki Department/Location/Last Login) bu kuraldan MUAF DEĞİL — Figma'da karşılığı olmasalar bile Content prop'u almalılar (varsayılan `'none'` ile mevcut görünüm korunur).
2. **`Table` grubu her zaman `Rows`/`Row State`/`Sort`/`Filter` içermeli** — `rowCount`(`GRID_TABLE_ROW_OPTS`), `rowState`(`GRID_STATE_OPTS`), `showSort`/`showFilter`(`TBX_BOOL_OPTS`). Sort/Filter TEK bir kolona bağlanmaz (`gridXColumns(p)` içinde `const showSort=p.showSort==='on'` okunup HER veri kolonuna `sort`/`filter` geçilir) — `gridHeaderCellHtml`'e `showSort`/`showFilter`, `gridCellHtml`'e `sortValue: c.field ? row[c.field] : undefined` iletilmeli (sıralama gerçekten çalışsın diye, bkz. `window.btGridSortBy`).
3. **Actions kolonu varsa** (Data Table Actions/Frozen Last deseni) `actionsContent` prop'u da `GRID_TABLE_CONTENT_OPTS` kullanmalı (Columns grubunun sonunda). Inline Editing'in Edit/Save/Cancel çifti gibi sayfaya özel eylem kolonları bu kuraldan muaf (bunlar bir "content kind" değil).
4. **Editable/dual-view sayfalarında** (Inline/InCell Editing deseni) Content prop'ları `editable`/`editKind`'tan TAMAMEN BAĞIMSIZ kalmalı — `gridCellHtml`'in `leading`/`trailing` (view) ve `editable`/`editKind` (edit) param'ları zaten ayrık çalışıyor, hangi content-kind seçilirse seçilsin editKind (textbox/dropdown) sabit kalır.

Yeni bir Data Table örneği eklerken bu dört maddeyi kontrol et — kullanıcı ayrıca hatırlatmadan.

## "On this page" (TOC) — Overview Linki Otomatik

`docs/js/app.js`'teki `renderToc()`, `page.toc` dizisi olan HER sayfanın "On this page" panelinin en üstüne otomatik olarak sayfanın başına (`#page-title`) atlayan bir **"Overview"** linki ekler. Bu **merkezi/otomatik** bir davranış — yeni bir component sayfası eklerken `toc` dizisine manuel `'Overview'` eklemeye gerek YOK, `renderToc()` bunu kendisi prepend ediyor. `page.toc` boşsa (`toc: []`) TOC paneli hiç gösterilmiyor, bu davranış değişmedi.

### TOC bölüm adlandırması ve sıralaması — STANDART

- **Adlandırma:** Boyut bölümü her zaman **`Sizes`** (çoğul) — `Size` değil. Tema bölümü her zaman **`Themes`** (çoğul) — `Theme` değil. (2026-08-31: `components/button-group`'ta `Size`/`Theme` → `Sizes`/`Themes` düzeltildi.)
- **Sıralama:** `toc` dizisi şu sabit blokla başlar (mevcut olanlar, bu sırada): **Anatomy → Sizes → States → Themes**. "Overview" `renderToc()` tarafından zaten en üste otomatik ekleniyor, diziye yazılmaz. Themes'in altındaki per-tema girdileri (`Base`, `Primary`, …) bu bloğun hemen ardından gelir.
- **Component-özel bölümler** (Types, Fill Mode, Label Position, Content Position, Content Types, varyant bölümleri vb.) sabit bloktan **sonra**, yani **Themes'den (ve per-tema girdilerinden) sonra** listelenir; kendi aralarındaki mevcut göreli sıraları korunur.
- `toc` dizisindeki sıra ile sayfa gövdesindeki `<h2>`/`<h3>` sırası **birebir aynı olmalı** — bir bölümü toc'ta yukarı/aşağı alırken karşılık gelen render bloğu da taşınır (aksi halde toc linkine tıklayınca sayfa geriye zıplar). Bu bir "içerik taşıma"dır; [İçerik Kaldırma Yasağı] gereği yalnızca kullanıcı sıralama değişikliği istediğinde yapılır.
- **Uygulama durumu:** 2026-08-31 itibarıyla yalnızca Buttons grubunda uygulandı — `Button`, `Button Group`, `Split Button` ve `Icon Button` (bu sonuncusu `pages-web.js`'te sıfırdan yazıldı, Button helper'larını `content:'icon'` kilitli reuse ediyor) web docs'ta tam standartta (description + TOC adlandırma/sıralama). `pages-mobile.js`'teki eski `components/icon-button` sayfası dokunulmadı (mobil docs hâlâ onu kullanıyor). Diğer component grupları sonraki oturumlarda bu standarda getirilecek.
