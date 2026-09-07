# Bentas Design System — Proje Kuralları

## İçerik Kaldırma Yasağı — ZORUNLU

Mevcut bir sayfada herhangi bir içerik (tablo, bölüm, tab içeriği, playground vb.) kaldırılacaksa ya da başka bir yere taşınacaksa **kullanıcıya önceden bildir ve onay al.** Kullanıcı açıkça "kaldır", "sil" veya "taşı" demediği sürece hiçbir mevcut içerik silinmez veya yerinden oynatılmaz. Kural uygulamak (description eklemek, 4-tab standardı, anatomy başlıkları vb.) bu yasağı geçersiz kılmaz — içerik eklenir, mevcut içerik korunur.

## İkon Wrapper Standardı — ZORUNLU

Component içinde Lucide SVG ikon kullanılacaksa **her zaman** `<span class="bt-icon">` wrapper'ı kullanılır — component'e özel bir icon slot class'ı (`bt-xxx__icon` gibi) **asla** tanımlanmaz.

```html
<span class="bt-icon">
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <!-- Lucide path -->
  </svg>
</span>
```

- `.bt-icon` → 24×24px, `inline-flex`, centered (`styles.css`'te global tanımlı)
- `.bt-icon svg` → 16×16px, CSS tarafından zorlanır — SVG'ye `width`/`height` attribute'u **yazılmaz**
- `viewBox="0 0 24 24"` her zaman kalır (Lucide koordinat sistemi)
- Farklı boyut gerekiyorsa (örn. 20×20 wrapper) — önce Figma'dan doğrula, sonra component'e özel override yaz (global class'ı değiştirme)

## CSS Değişkenleri (Design Tokens) — ZORUNLU

`docs/css/styles.css` kapsamlı bir `--bt-*` design token seti tanımlıyor: spacing, radius, renk/surface, tipografi (font-size + line-height dahil). Yeni bir component eklerken veya mevcut bir component'i değiştirirken **her görsel değer** ilgili token'dan gelmeli — hardcoded px/hex yazılmamalı.

- **Spacing (padding, margin, gap):** `var(--bt-space-{none|2xs|xs|sm|md|lg|xl|2xl|3xl...}, fallback-px)`
- **Font-size / line-height:** `var(--bt-text-{2xs|xs|sm|md|lg|xl|2xl...}-size)` ve `var(--bt-text-{...}-lh)` — asla elle `font-size:12px` / `line-height:16px` yazma
- **Renkler (background, color, border-color):** `var(--bt-surface-*)`, `var(--bt-text-*)`, `var(--bt-border-*)` — hex kodunu sadece fallback olarak yaz: `var(--bt-token, #hex)`
- **Border-radius:** `var(--bt-radius-{none|xs|sm|md|lg|xl...})`

Sabit piksel değeri sadece **token karşılığı olmayan** boyutlarda kabul edilebilir (örn. bir ikonun tam 16×16px olması gibi element-özel bir ölçüm — bu da önce Figma'dan doğrulanmalı).

Yeni bir token gerektiğinde veya bir component tamamlandığında yapılacak kontroller için, ve genel olarak component sayfası ekleme/dokümante etme iş akışı (playground config, tab yapısı, description kuralları, varyant dokümantasyonu vb.) için: **`add-component` skill'i** (`.claude/skills/add-component/SKILL.md`).

## Mevcut Component'leri Reuse Et — ZORUNLU

Yeni bir component oluştururken, içinde kullanılan alt öğeler (buton, ikon, input vb.) için **özel CSS yazmak yerine tasarım sistemine eklenmiş component class'larını kullan**.

- **Button**: `bt-btn bt-btn--{size} bt-btn--{variant}` — asla custom `button` stili yazma
- **Genel kural**: O öğenin design system'de karşılığı varsa onu kullan; yoksa yeni component olarak ekle

Örnek (Upload → Select Files):
```html
<!-- ✗ Yanlış: custom class -->
<button class="bt-dropzone__link">Select Files</button>

<!-- ✓ Doğru: gerçek button component -->
<button class="bt-btn bt-btn--xs bt-btn--primary-ghost">Select Files</button>
```

Yeni component tasarlanırken Figma'da iç öğelerin hangi design system component'ini kullandığı `get_design_context` çıktısından (`data-name="Button"` gibi) anlaşılabilir — o component'in class'larını kullan.

## Component İsimlendirme Kuralı

Bileşen adları **PascalCase** olmalı, kelimeler ayrı harf büyüklüğüyle birleştirilmeli:
- `SearchBox` (✓) — `Searchbox` değil (✗)
- `SplitButton` (✓), `IconButton` (✓), `TextBox` (✓)

Figma sayfa adı referans alınır; belirsizlik varsa major design system'lerdeki (Material, Carbon, Fluent) yaygın kullanım tercih edilir.

## design.md ve CLAUDE.md senkronizasyonu — ZORUNLU

Bu projede oluşturulan component'ler (markup + CSS + JS davranışı) **bundan sonraki
Bentaş projelerinde de kullanılacak** — yani bu repo sadece kendi docs sitesi değil,
aynı zamanda diğer projelerin kopyalayıp yapıştıracağı bir referans kaynağı.
Bu yüzden bir component eklendiğinde/değiştirildiğinde:

1. `docs/css/styles.css` + `docs/js/pages-web.js` (gerçek implementasyon) güncellenir.
2. **`design.md`** o component'in ilgili bölümü (yapı + CSS + JS davranışı, taşınabilir/token-adı-agnostik anlatımla) güncellenir — yeni bir projede bu dosya tek başına yeterli olmalı.
3. **`HISTORY.md`**'ye kısa bir oturum notu eklenir.

Bunu component değişikliği yapılan HER oturumda otomatik yap, kullanıcı ayrıca hatırlatmasın.

## Component sayfası ekleme/dokümante etme

Playground config standartları (prop.group, boolean toggle, preview centering, CSS tab), bölüm açıklama kuralları, 4-tab yapısı, Example Viewer pattern, varyant/çok-eksenli dokümantasyon standartları ve Data Table properties tutarlılığı **`add-component` skill'ine taşındı** (2026-09-07, doctor cleanup — bkz. HISTORY.md). Bir component eklerken veya bir component sayfasını restructure/dokümante ederken bu skill otomatik yüklenir.

## Son Tamamlanan Component

**Tab** — 2026-08-31 (`components/tab`, Layout grubu). Fill Mode: Line / Bordered / Segmented; yatay+dikey; Size Sm/Md/Lg; State Default/Hover/Selected/Focus/Disabled; opsiyonel ikon, sayı rozeti (`Show Counter`), kapatma butonu (Type=Closable, gerçek `.bt-btn` reuse). `.bt-tab-list` + `.bt-tab` class'ları, `window.btTabSelect`. Figma "Bentas DS" › "Tabs" (Base Tab 1040:6309 + Tab 1045:22304). design.md §19. Nav'daki eski `tab-menu-horizontal`/`tab-menu-vertical` placeholder'ları kaldırıldı.

**Data Table (Grid)** — 2026-08-12 (HeaderCell + GridCell + No Record Available + Frozen Column varyasyonu, bkz. design.md §17), en son 2026-08-24'te Inline Editing + InCell Editing sayfalarıyla (design.md §17.5), 7 sayfanın tamamında tutarlı Table-level Sort/Filter (gerçek sıralama, hover-only sort ikonları, 3 tıklık asc→desc→reset döngüsü), **Sorting** ve **Filtering** sayfalarıyla (design.md §17.6) ve GERÇEK çalışan Filter overlay'iyle (Ara/Tümünü Seç/kolon-verisinden-türeyen checkbox listesi/Temizle-Uygula, satırları fiilen filtreler, aktif buton state'i — TÜM Data Table sayfalarında paylaşılan tek kod yolu) genişletildi (design.md §17.7).
Detaylı oturum geçmişi: `HISTORY.md`
