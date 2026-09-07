# Medusa Design System

Bu dosya projedeki tüm CSS token'larını, layout yapılarını, komponent kalıplarını ve JS davranışlarını belgelemektedir. Yeni bir projede aynı tasarım sistemini sıfırdan anlatmak zorunda kalmamak için hazırlanmıştır.

Figma kaynak dosyası: `hRFYsry2NDU6GdgzV6oUfJ` (Akasya Web)

---

## 1. Icon Library

Tüm iconlar **Lucide** kullanır:

```html
<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js"></script>
<!-- Sayfa sonunda: -->
<script>lucide.createIcons();</script>
```

Icon kullanımı:
```html
<i data-lucide="menu"></i>
<!-- Boyut her zaman CSS ile: width/height: 16px; display: block; -->
```

---

## 2. Fontlar

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Geist:wght@400;500;600&display=swap" rel="stylesheet">
```

- `--font-title: 'Geist', sans-serif;` — Basliklar, butonlar, etiketler
- `--font-text:  'Inter', sans-serif;` — Gövde metni, form alanları

Login sayfasında sadece `Inter` yeterli (Geist gerekmez).

---

## 3. Design Tokens (CSS Custom Properties)

Bu token sistemi **Bentas Design System** (Figma: `hRFYsry2NDU6GdgzV6oUfJ`) kaynaklıdır.
Canonical kaynak: `C:\Users\necip\Desktop\MobileDesignSystem\docs\css\styles.css`

Token mimarisi: **Primitif → Renk Koleksiyonu → Semantik (surface/border/text/icon)**

---

### 3.1 Primitif Renk Paleti (`--bt-{renk}-{adım}`)

15 renk ailesi, her biri 12 adım (0, 50, 100…900, 950):

```css
/* Blue */
--bt-blue-0: #ffffff;  --bt-blue-50: #f1f7fe;  --bt-blue-100: #e2edfc;
--bt-blue-200: #bedbf9; --bt-blue-300: #85bdf4; --bt-blue-400: #449bec;
--bt-blue-500: #1c7fdb; --bt-blue-600: #0e62bb; --bt-blue-700: #0d4e97;
--bt-blue-800: #0f447d; --bt-blue-900: #123968; --bt-blue-950: #0c2445;

/* Gray */
--bt-gray-0: #ffffff;  --bt-gray-50: #fafafa;  --bt-gray-100: #f5f5f5;
--bt-gray-200: #e6e6e6; --bt-gray-300: #d4d4d4; --bt-gray-400: #a3a3a3;
--bt-gray-500: #727272; --bt-gray-600: #535353; --bt-gray-700: #404040;
--bt-gray-800: #272727; --bt-gray-900: #1a1a1a; --bt-gray-950: #0b0b0b;

/* Yellow */
--bt-yellow-0: #ffffff; --bt-yellow-50: #fdf9e8; --bt-yellow-100: #f9f2ce;
--bt-yellow-200: #f4e8aa; --bt-yellow-300: #edd882; --bt-yellow-400: #e2c455;
--bt-yellow-500: #d4af2c; --bt-yellow-600: #c49a12; --bt-yellow-700: #aa820a;
--bt-yellow-800: #8c6a05; --bt-yellow-900: #6b5103; --bt-yellow-950: #523e02;

/* Green */
--bt-green-0: #ffffff; --bt-green-50: #e8f3ee; --bt-green-100: #daede5;
--bt-green-200: #b4dbcb; --bt-green-300: #87c1ab; --bt-green-400: #5ea38b;
--bt-green-500: #448871; --bt-green-600: #356c5b; --bt-green-700: #2d584b;
--bt-green-800: #28473e; --bt-green-900: #243d36; --bt-green-950: #243d36;

/* Red */
--bt-red-0: #ffffff; --bt-red-50: #fef2f2; --bt-red-100: #fde6e6;
--bt-red-200: #fbd0d2; --bt-red-300: #f7aaae; --bt-red-400: #f27a83;
--bt-red-500: #e84b5b; --bt-red-600: #d83a52; --bt-red-700: #b31d38;
--bt-red-800: #961b35; --bt-red-900: #801b33; --bt-red-950: #470a17;

/* Teal */
--bt-teal-0: #ffffff; --bt-teal-50: #f0fdfa; --bt-teal-100: #ccfbf1;
--bt-teal-200: #99f6e4; --bt-teal-300: #5eead4; --bt-teal-400: #2dd4bf;
--bt-teal-500: #14b8a6; --bt-teal-600: #0d9488; --bt-teal-700: #0f766e;
--bt-teal-800: #115e59; --bt-teal-900: #134e4a; --bt-teal-950: #042f2e;

/* Lime */
--bt-lime-0: #ffffff; --bt-lime-50: #f7fee7; --bt-lime-100: #ecfccb;
--bt-lime-200: #d9f99d; --bt-lime-300: #bef264; --bt-lime-400: #a3e635;
--bt-lime-500: #84cc16; --bt-lime-600: #65a30d; --bt-lime-700: #4d7c0f;
--bt-lime-800: #3f6212; --bt-lime-900: #365314; --bt-lime-950: #1a2e05;

/* Cyan */
--bt-cyan-0: #ffffff; --bt-cyan-50: #ecfeff; --bt-cyan-100: #cffafe;
--bt-cyan-200: #a5f3fc; --bt-cyan-300: #67e8f9; --bt-cyan-400: #22d3ee;
--bt-cyan-500: #06b6d4; --bt-cyan-600: #0891b2; --bt-cyan-700: #0e7490;
--bt-cyan-800: #155e75; --bt-cyan-900: #164e63; --bt-cyan-950: #083344;

/* Purple */
--bt-purple-0: #ffffff; --bt-purple-50: #faf5ff; --bt-purple-100: #f3e8ff;
--bt-purple-200: #e9d5ff; --bt-purple-300: #d8b4fe; --bt-purple-400: #c084fc;
--bt-purple-500: #a855f7; --bt-purple-600: #9333ea; --bt-purple-700: #7e22ce;
--bt-purple-800: #6b21a8; --bt-purple-900: #581c87; --bt-purple-950: #3b0764;

/* Violet */
--bt-violet-0: #ffffff; --bt-violet-50: #f5f3ff; --bt-violet-100: #ede9fe;
--bt-violet-200: #ddd6fe; --bt-violet-300: #c4b5fd; --bt-violet-400: #a78bfa;
--bt-violet-500: #8b5cf6; --bt-violet-600: #7c3aed; --bt-violet-700: #6d28d9;
--bt-violet-800: #5b21b6; --bt-violet-900: #4c1d95; --bt-violet-950: #2e1065;

/* Indigo */
--bt-indigo-0: #ffffff; --bt-indigo-50: #eef2ff; --bt-indigo-100: #e0e7ff;
--bt-indigo-200: #c7d2fe; --bt-indigo-300: #a5b4fc; --bt-indigo-400: #818cf8;
--bt-indigo-500: #6366f1; --bt-indigo-600: #4f46e5; --bt-indigo-700: #4338ca;
--bt-indigo-800: #3730a3; --bt-indigo-900: #312e81; --bt-indigo-950: #1e1b4b;

/* Sky */
--bt-sky-0: #ffffff; --bt-sky-50: #f0f9ff; --bt-sky-100: #e0f2fe;
--bt-sky-200: #bae6fd; --bt-sky-300: #7dd3fc; --bt-sky-400: #38bdf8;
--bt-sky-500: #0ea5e9; --bt-sky-600: #0284c7; --bt-sky-700: #0369a1;
--bt-sky-800: #075985; --bt-sky-900: #0c4a6e; --bt-sky-950: #082f49;

/* Emerald */
--bt-emerald-0: #ffffff; --bt-emerald-50: #ecfdf5; --bt-emerald-100: #d1fae5;
--bt-emerald-200: #a7f3d0; --bt-emerald-300: #6ee7b7; --bt-emerald-400: #34d399;
--bt-emerald-500: #10b981; --bt-emerald-600: #059669; --bt-emerald-700: #047857;
--bt-emerald-800: #065f46; --bt-emerald-900: #064e3b; --bt-emerald-950: #022c22;

/* Amber */
--bt-amber-0: #ffffff; --bt-amber-50: #fffbeb; --bt-amber-100: #fef3c7;
--bt-amber-200: #fde68a; --bt-amber-300: #fcd34d; --bt-amber-400: #fbbf24;
--bt-amber-500: #f59e0b; --bt-amber-600: #d97706; --bt-amber-700: #b45309;
--bt-amber-800: #92400e; --bt-amber-900: #78350f; --bt-amber-950: #451a03;

/* Orange */
--bt-orange-0: #ffffff; --bt-orange-50: #fff7ed; --bt-orange-100: #ffedd5;
--bt-orange-200: #fed7aa; --bt-orange-300: #fdba74; --bt-orange-400: #fb923c;
--bt-orange-500: #f97316; --bt-orange-600: #ea580c; --bt-orange-700: #c2410c;
--bt-orange-800: #9a3412; --bt-orange-900: #7c2d12; --bt-orange-950: #431407;
```

---

### 3.2 Renk Koleksiyonları (Color Collections)

Semantik isimler, primitiflere `var()` alias olarak. 9 seviye: `default / light / subtle / muted / emphasis / strong / heavy / solid / intense`

```css
/* Base → Gray paleti */
--bt-base-default:  var(--bt-gray-0);    /* #ffffff */
--bt-base-light:    var(--bt-gray-50);
--bt-base-subtle:   var(--bt-gray-100);
--bt-base-muted:    var(--bt-gray-200);
--bt-base-emphasis: var(--bt-gray-300);
--bt-base-strong:   var(--bt-gray-400);
--bt-base-heavy:    var(--bt-gray-500);
--bt-base-solid:    var(--bt-gray-600);
--bt-base-intense:  var(--bt-gray-700);

/* Primary → Blue paleti */
--bt-primary-default:  var(--bt-blue-700);  /* #0d4e97 */
--bt-primary-light:    var(--bt-blue-50);
--bt-primary-subtle:   var(--bt-blue-100);
--bt-primary-muted:    var(--bt-blue-200);
--bt-primary-emphasis: var(--bt-blue-300);
--bt-primary-strong:   var(--bt-blue-400);
--bt-primary-heavy:    var(--bt-blue-500);
--bt-primary-solid:    var(--bt-blue-600);
--bt-primary-intense:  var(--bt-blue-800);

/* Secondary → Gray paleti */
--bt-secondary-default:  var(--bt-gray-700);
--bt-secondary-light:    var(--bt-gray-50);
--bt-secondary-subtle:   var(--bt-gray-100);
--bt-secondary-muted:    var(--bt-gray-200);
--bt-secondary-emphasis: var(--bt-gray-300);
--bt-secondary-strong:   var(--bt-gray-400);
--bt-secondary-heavy:    var(--bt-gray-500);
--bt-secondary-solid:    var(--bt-gray-600);
--bt-secondary-intense:  var(--bt-gray-800);

/* Brand → Blue paleti (Primary ile aynı eşlemeler) */
--bt-brand-default:  var(--bt-blue-700);
--bt-brand-light:    var(--bt-blue-50);   /* ...aynı pattern */
--bt-brand-intense:  var(--bt-blue-800);

/* Error → Red paleti */
--bt-error-default:  var(--bt-red-700);   /* #b31d38 */
--bt-error-light:    var(--bt-blue-0);    /* dikkat: Blue/0 = #ffffff */
--bt-error-subtle:   var(--bt-red-100);
--bt-error-muted:    var(--bt-red-200);
--bt-error-emphasis: var(--bt-red-300);
--bt-error-strong:   var(--bt-red-400);
--bt-error-heavy:    var(--bt-red-500);
--bt-error-solid:    var(--bt-red-600);
--bt-error-intense:  var(--bt-red-800);

/* Success → Green paleti */
--bt-success-default:  var(--bt-green-700); /* #2d584b */
--bt-success-light:    var(--bt-green-50);
--bt-success-subtle:   var(--bt-green-100);
--bt-success-intense:  var(--bt-green-800);

/* Warning → Yellow paleti */
--bt-warning-default:  var(--bt-yellow-700);
--bt-warning-light:    var(--bt-yellow-50);
--bt-warning-subtle:   var(--bt-yellow-100);  /* #f9f2ce */
--bt-warning-intense:  var(--bt-yellow-800);

/* Information → Blue paleti (Primary/Brand ile aynı eşlemeler) */
--bt-information-default:  var(--bt-blue-700);
--bt-information-intense:  var(--bt-blue-800);
```

---

### 3.3 Semantik Token'lar

**4 eksen × 7 kategori × 9 seviye** sistemi. Her eksen aynı pattern'i takip eder.

#### Surface (`--bt-surface-{kategori}-{seviye}`)

```css
/* Primary → Gray (default=Blue/0) */
--bt-surface-primary-default:  var(--bt-blue-0);    /* #ffffff */
--bt-surface-primary-light:    var(--bt-gray-50);
--bt-surface-primary-subtle:   var(--bt-gray-100);
--bt-surface-primary-muted:    var(--bt-gray-200);
--bt-surface-primary-emphasis: var(--bt-gray-300);
--bt-surface-primary-strong:   var(--bt-gray-400);
--bt-surface-primary-heavy:    var(--bt-gray-500);
--bt-surface-primary-solid:    var(--bt-gray-600);
--bt-surface-primary-intense:  var(--bt-gray-800);  /* Figma bug: Secondary grubunda tanımlı */

/* Secondary → Gray */
--bt-surface-secondary-default:  var(--bt-gray-50);
--bt-surface-secondary-light:    var(--bt-gray-100);
--bt-surface-secondary-subtle:   var(--bt-gray-200);
--bt-surface-secondary-muted:    var(--bt-gray-300);
--bt-surface-secondary-emphasis: var(--bt-gray-400);
--bt-surface-secondary-strong:   var(--bt-gray-500);
--bt-surface-secondary-heavy:    var(--bt-gray-600);
--bt-surface-secondary-solid:    var(--bt-gray-700);

/* Brand → Blue */
--bt-surface-brand-default:   var(--bt-blue-700);  /* #0d4e97 */
--bt-surface-brand-light:     var(--bt-blue-50);   /* #f1f7fe */
--bt-surface-brand-subtle:    var(--bt-blue-100);  /* #e2edfc */
--bt-surface-brand-muted:     var(--bt-blue-200);
--bt-surface-brand-emphasis:  var(--bt-blue-300);
--bt-surface-brand-strong:    var(--bt-blue-400);
--bt-surface-brand-heavy:     var(--bt-blue-500);
--bt-surface-brand-solid:     var(--bt-blue-600);
--bt-surface-brand-intense:   var(--bt-blue-800);

/* Error → Red */
--bt-surface-error-default:   var(--bt-red-700);
--bt-surface-error-light:     var(--bt-red-50);    /* #fef2f2 */
--bt-surface-error-subtle:    var(--bt-red-100);   /* #fde6e6 */
--bt-surface-error-muted:     var(--bt-red-200);
--bt-surface-error-emphasis:  var(--bt-red-300);
--bt-surface-error-strong:    var(--bt-red-400);
--bt-surface-error-heavy:     var(--bt-red-500);
--bt-surface-error-solid:     var(--bt-red-600);
--bt-surface-error-intense:   var(--bt-red-800);

/* Success → Green | Warning → Yellow | Information → Blue — aynı pattern */
```

#### Border (`--bt-border-{kategori}-{seviye}`)

```css
/* Primary → Gray (default=Gray/300) */
--bt-border-primary-default:   var(--bt-gray-300);  /* #d4d4d4 */
--bt-border-primary-light:     var(--bt-gray-50);
--bt-border-primary-subtle:    var(--bt-gray-100);
--bt-border-primary-muted:     var(--bt-gray-200);  /* #e6e6e6 */
--bt-border-primary-emphasis:  var(--bt-gray-400);
--bt-border-primary-strong:    var(--bt-gray-500);
--bt-border-primary-heavy:     var(--bt-gray-600);
--bt-border-primary-solid:     var(--bt-gray-700);
--bt-border-intense:           var(--bt-gray-800);  /* Figma leaf adı */

/* Brand → Blue */
--bt-border-brand-default:   var(--bt-blue-700);  /* #0d4e97 */
--bt-border-brand-light:     var(--bt-blue-50);
--bt-border-brand-subtle:    var(--bt-blue-100);
--bt-border-brand-muted:     var(--bt-blue-200);
--bt-border-brand-intense:   var(--bt-blue-800);

/* Error → Red | Success → Green | Warning → Yellow | Information → Blue — aynı pattern */
```

#### Text (`--bt-text-{kategori}-{seviye}`)

```css
/* Primary → Gray (inverted=Gray/0) */
--bt-text-primary-default:   var(--bt-gray-900);  /* #1a1a1a */
--bt-text-primary-light:     var(--bt-gray-200);
--bt-text-primary-subtle:    var(--bt-gray-300);
--bt-text-primary-muted:     var(--bt-gray-400);  /* #a3a3a3 */
--bt-text-primary-emphasis:  var(--bt-gray-500);  /* #727272 */
--bt-text-primary-strong:    var(--bt-gray-600);
--bt-text-primary-heavy:     var(--bt-gray-700);
--bt-text-primary-solid:     var(--bt-gray-800);
--bt-text-primary-inverted:  var(--bt-gray-0);    /* #ffffff */

/* Brand → Blue */
--bt-text-brand-default:  var(--bt-blue-700);  /* #0d4e97 */
--bt-text-brand-light:    var(--bt-blue-50);
--bt-text-brand-intense:  var(--bt-blue-800);

/* Error → Red */
--bt-text-error-default:  var(--bt-red-700);   /* #b31d38 */

/* Success → Green */
--bt-text-success-default:  var(--bt-green-700);  /* #2d584b */

/* Warning → Yellow | Information → Blue — aynı pattern */
```

#### Icon (`--bt-icon-{kategori}-{seviye}`)

```css
/* Primary → Gray (inverted=Gray/0) */
--bt-icon-primary-default:   var(--bt-gray-900);  /* #1a1a1a */
--bt-icon-primary-light:     var(--bt-gray-200);
--bt-icon-primary-subtle:    var(--bt-gray-300);
--bt-icon-primary-muted:     var(--bt-gray-400);  /* #a3a3a3 */
--bt-icon-primary-emphasis:  var(--bt-gray-500);  /* #727272 */
--bt-icon-primary-strong:    var(--bt-gray-600);  /* #535353 */
--bt-icon-primary-heavy:     var(--bt-gray-700);
--bt-icon-primary-solid:     var(--bt-gray-800);
--bt-icon-primary-inverted:  var(--bt-gray-0);    /* #ffffff */

/* Brand → Blue | Error → Red | Success → Green | Warning → Yellow — aynı pattern */
--bt-icon-brand-default:   var(--bt-blue-700);
--bt-icon-error-default:   var(--bt-red-700);
```

---

### 3.4 Backward-Compat Alias'lar

Kısa isimler, tam semantik token'lara alias:

```css
/* Text */
--bt-text-default:   var(--bt-text-primary-default);
--bt-text-muted:     var(--bt-text-primary-muted);
--bt-text-emphasis:  var(--bt-text-primary-emphasis);
--bt-text-strong:    var(--bt-text-primary-strong);
--bt-text-heavy:     var(--bt-text-primary-heavy);
--bt-text-solid:     var(--bt-text-primary-solid);
--bt-text-subtle:    var(--bt-text-primary-subtle);
--bt-text-light:     var(--bt-text-primary-light);
--bt-text-inverted:  var(--bt-text-primary-inverted);
--bt-text-brand:     var(--bt-text-brand-default);
--bt-text-success:   var(--bt-text-success-default);
--bt-text-warning:   var(--bt-text-warning-default);
--bt-text-error:     var(--bt-text-error-default);

/* Surface */
--bt-surface-default:  var(--bt-surface-primary-default);
--bt-surface-light:    var(--bt-surface-primary-light);
--bt-surface-subtle:   var(--bt-surface-primary-subtle);
--bt-surface-muted:    var(--bt-surface-primary-muted);
--bt-surface-emphasis: var(--bt-surface-primary-emphasis);
--bt-surface-brand:    var(--bt-surface-brand-default);
--bt-surface-success:  var(--bt-surface-success-light);
--bt-surface-warning:  var(--bt-surface-warning-light);
--bt-surface-error:    var(--bt-surface-error-light);

/* Border */
--bt-border-default:      var(--bt-border-primary-default);
--bt-border-muted:        var(--bt-border-primary-muted);
--bt-border-subtle:       var(--bt-border-primary-subtle);
--bt-border-emphasis:     var(--bt-border-primary-emphasis);
--bt-border-brand:        var(--bt-border-brand-default);
--bt-border-brand-light:  #f1f7fe;  /* Blue/50 hex direkt */

/* Icon */
--bt-icon-default:   var(--bt-icon-primary-default);
--bt-icon-muted:     var(--bt-icon-primary-muted);
--bt-icon-emphasis:  var(--bt-icon-primary-emphasis);
--bt-icon-inverted:  var(--bt-icon-primary-inverted);
--bt-icon-brand:     var(--bt-icon-brand-default);
```

---

### 3.5 Base Sizing Scale

```css
--bt-base-sizing-none: 0px;
--bt-base-sizing-3xs:  1px;   --bt-base-sizing-2xs:  2px;
--bt-base-sizing-xs:   4px;   --bt-base-sizing-sm:   6px;
--bt-base-sizing-md:   8px;   --bt-base-sizing-lg:   10px;
--bt-base-sizing-xl:   12px;  --bt-base-sizing-2xl:  14px;
--bt-base-sizing-3xl:  16px;  --bt-base-sizing-4xl:  18px;
--bt-base-sizing-5xl:  20px;  --bt-base-sizing-6xl:  24px;
--bt-base-sizing-7xl:  28px;  --bt-base-sizing-8xl:  32px;
--bt-base-sizing-9xl:  36px;  --bt-base-sizing-10xl: 40px;
--bt-base-sizing-11xl: 44px;  --bt-base-sizing-12xl: 48px;
--bt-base-sizing-13xl: 52px;  --bt-base-sizing-14xl: 56px;
--bt-base-sizing-15xl: 60px;  --bt-base-sizing-16xl: 64px;
--bt-base-sizing-17xl: 68px;  --bt-base-sizing-18xl: 72px;
--bt-base-sizing-19xl: 76px;  --bt-base-sizing-20xl: 80px;
--bt-base-sizing-21xl: 84px;  --bt-base-sizing-22xl: 88px;
--bt-base-sizing-23xl: 92px;  --bt-base-sizing-24xl: 96px;
--bt-base-sizing-25xl: 100px; --bt-base-sizing-26xl: 112px;
--bt-base-sizing-27xl: 120px; --bt-base-sizing-28xl: 128px;
--bt-base-sizing-29xl: 132px; --bt-base-sizing-30xl: 144px;
--bt-base-sizing-31xl: 160px; --bt-base-sizing-32xl: 176px;
--bt-base-sizing-33xl: 180px; --bt-base-sizing-34xl: 192px;
--bt-base-sizing-full: 9999px;
```

---

### 3.6 Spacing

```css
--bt-space-none: 0px;   --bt-space-2xs: 2px;
--bt-space-xs:   4px;   --bt-space-sm:  6px;
--bt-space-md:   8px;   --bt-space-lg:  10px;
--bt-space-xl:   12px;  --bt-space-2xl: 16px;
--bt-space-3xl:  20px;  --bt-space-4xl: 24px;
--bt-space-5xl:  28px;  --bt-space-6xl: 32px;
--bt-space-7xl:  36px;  --bt-space-8xl: 40px;
--bt-space-9xl:  44px;  --bt-space-10xl: 48px;
--bt-space-11xl: 52px;  --bt-space-12xl: 56px;
--bt-space-13xl: 60px;  --bt-space-14xl: 64px;
--bt-space-15xl: 68px;  --bt-space-16xl: 72px;
--bt-space-17xl: 80px;
```

---

### 3.7 Border Radius

```css
--bt-radius-none: 0px;   --bt-radius-xs:   2px;
--bt-radius-sm:   4px;   --bt-radius-md:   6px;
--bt-radius-lg:   8px;   --bt-radius-xl:   10px;
--bt-radius-2xl:  12px;  --bt-radius-3xl:  14px;
--bt-radius-4xl:  16px;  --bt-radius-5xl:  20px;
--bt-radius-6xl:  24px;  --bt-radius-full: 9999px;
```

---

### 3.7b Shadow (Elevation)

Figma'nın "Shadow" Effect Style'larından (xs–3xl, 7 seviye) birebir taşındı — `--bt-shadow-{step}`:

```css
--bt-shadow-xs:  0 1px 2px rgba(16,24,40,0.051);
--bt-shadow-sm:  0 1px 2px rgba(16,24,40,0.06), 0 1px 3px rgba(16,24,40,0.10);
--bt-shadow-md:  0 2px 4px rgba(16,24,40,0.06), 0 4px 8px rgba(16,24,40,0.10);
--bt-shadow-lg:  0 4px 6px rgba(16,24,40,0.031), 0 12px 16px rgba(16,24,40,0.078);
--bt-shadow-xl:  0 8px 8px rgba(16,24,40,0.031), 0 20px 24px rgba(16,24,40,0.078);
--bt-shadow-2xl: 0 24px 48px rgba(16,24,40,0.18);
--bt-shadow-3xl: 0 32px 64px rgba(16,24,40,0.141);
```

Kullanım: `box-shadow: var(--bt-shadow-lg, 0 4px 6px rgba(16,24,40,0.031), 0 12px 16px rgba(16,24,40,0.078));` — `var()`'ın fallback kısmı virgül içerse de (birden fazla shadow layer'ı) geçerlidir, çünkü `var()`'ın ilk virgülünden sonraki her şey tek bir fallback değeri sayılır.

Şu an projede kullanılan seviyeler: **md** (`.bt-switch__thumb`, `.bt-win-dropdown__list`), **lg** (`.bt-dd-options` Dropdown, `.bt-cal` Date Picker, `.platform-dropdown`). `xs`/`sm`/`xl`/`2xl`/`3xl` henüz kullanılmıyor ama token olarak tanımlı.

---

### 3.8 Typography

Eski ayrık `--bt-text-{size}-size` / `--bt-text-{size}-lh` scale token'ları **kaldırıldı** (2026-07-24) — artık tek kaynak, Figma'nın "Semantic Typography" koleksiyonundan (112 değişken) birebir taşınan composite `font` shorthand token'ları. `Font/Family/Text|Title|Label|Subtitle` × `Font/Weight/Regular|Medium|SemiBold|Bold` × boyut kombinasyonlarının her biri, tek bir CSS değişkenine karşılık gelir:

`--bt-{family}-{size}-{weight}` — örn. `--bt-title-lg-semibold`, `--bt-label-sm-regular`

- **family**: `text` (2xs–xl, 6 boyut), `title` (xs–6xl, 10 boyut), `label` (2xs–xl, 6 boyut), `subtitle` (2xs–xl, 6 boyut)
- **weight**: `regular` (400), `medium` (500), `semibold` (600), `bold` (700)
- Toplam: 6×4 + 10×4 + 6×4 + 6×4 = **112 token**

Boyut → px/line-height eşlemesi (artık her token'ın içine literal olarak gömülü, ayrı bir scale token'ı yok):

```
2xs=10/12  xs=12/16  sm=14/16  md=16/24  lg=18/24  xl=20/28
2xl=24/32  3xl=28/36  4xl=32/40  5xl=36/44  6xl=40/48
```

```css
--bt-title-lg-semibold: 600 18px/24px var(--font);
```

Kullanım: `font: var(--bt-title-lg-semibold, 600 18px/24px 'Geist');` — tek satırda font-weight, font-size, line-height ve font-family birden ayarlanır.

> **Not:** Figma'da bu koleksiyonun `Text`/`Title`/`Label`/`Subtitle` ailelerinin hepsi aynı `Geist` font ailesini kullanıyor — şu an semantik olarak birbirinden ayrışmıyorlar (örn. `Title/md/Regular` ile `Text/md/Regular` aynı görünür), ama Figma'da ayrı koleksiyon olarak tanımlı oldukları için burada da ayrı tutuldu.

> **Sadece font-size/line-height gerekip font shorthand'ın uygun olmadığı yerler** (örn. bir `min-height`'ı bir satırın line-height'ıyla eşleştirmek): artık karşılık gelen bir token yok, literal px değeri kullanılır (bkz. `.bt-checkbox__label-row` / `.bt-radio__label-row` / `.bt-switch__label-row` — `min-height: 16px` = Text/sm'nin line-height'ı).

---

### 3.9 Medusa'ya Özgü Ek Token'lar

MobileDesignSystem'de tanımsız, yalnızca medusa projesinde kullanılıyor:

```css
/* Etkileşim durumları */
--bt-primary-hover:  #0b4485;
--bt-primary-active: #093a72;

/* Tab yüzey durumları */
--bt-surface-tab-default: #f3f4f6;
--bt-surface-tab-hover:   #e8e9eb;

/* Login sayfası brand paneli */
--brand-bg:       #05238b;
--btn-primary-bg: #3559c7;
```

> **Not**: Medusa projesi bu token sistemi kurulmadan önce geliştirildiğinden bazı
> bileşenlerde bare hex değerleri veya eski `--color-gray-*` isimleri kullanılmaktadır.
> Yeni projelerde yukarıdaki `--bt-*` sistemi kullanılmalıdır.

---

## 4. Reset

```css
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
a { color: inherit; text-decoration: none; }
button { font-family: inherit; cursor: pointer; border: none; background: none; }
input  { font-family: inherit; outline: none; }
html, body { height: 100%; overflow: hidden; font-family: var(--font-text); }
```

---

## 5. App Shell Layout

```
.app-layout                     ← display:flex; height:100vh
  ├── .sidebar                  ← width:280px; flex-shrink:0
  └── .main-content             ← flex:1; min-width:0; display:flex; flex-direction:column
```

```css
.app-layout { display: flex; height: 100vh; }

.main-content {
  flex: 1; min-width: 0;
  display: flex; flex-direction: column;
  height: 100%; overflow: hidden;
  position: relative;
}
.main-content[hidden] { display: none !important; }
```

---

## 6. Sidebar — Standart Sidebar

> **2026-07-22 güncellemesi:** Bu bölüm eskiden Medusa'nın kendi bespoke sidebar'ını
> (`.sidebar-header`, `.nav-item-btn` vb.) belgeliyordu. O yapı artık **Bentas Design
> System'in Standart Sidebar component'ine** (`.stb-*`, Figma node `502:18421`)
> geçirildi — Medusa'nın `dashboard.html`'i bu component'in gerçek bir tüketicisi.
> Aşağıdaki CSS, Bentas-Design-System'in `docs/css/styles.css`'teki `.stb-*` bloğu
> ile **birebir aynı** (sadece token isimleri host projeye göre değişir — bkz. not).
> Design system'in kendi dokümantasyonunda ayrıca bir **Hub Sidebar** (`.sbx-*`,
> kalıcı ikon rail + ayrı toggle edilebilir drawer) varyantı da var; Medusa bunu
> kullanmıyor, o yüzden burada belgelenmedi — gerekirse Bentas-Design-System'in
> `components/sidebar` sayfasına bakılabilir.

### Yapı

```
.stb-shell                        ← tek panel, kendi üst butonuyla 280px ↔ 48px
  ├── .stb-top                    ← her zaman görünür: menu-toggle + logo + başlık
  │     ├── .stb-menu-btn
  │     └── .stb-brand            ← .stb-logo + .stb-title (collapsed'de gizlenir)
  └── .stb-body                   ← flex:1, column
        ├── .stb-search-wrap      ← .bt-searchbox (gerçek SearchBox component'i)
        │                           (collapsed'de gizlenir)
        ├── .stb-list             ← flex:1, scroll — nav item'lar (.stb-item)
        └── (proje-özel alt bölüm ── Medusa'da: kullanıcı satırı + overflow menü,
             kendi class'larını korur, Standart Sidebar'ın parçası değildir)
```

**Kritik prensip:** Collapsed/expanded state DOM değişmez — `.stb-shell.is-collapsed`
class'ı eklenir, `.stb-item-label` ve arama alanı `display:none` ile gizlenir. Bu
yüzden state geçişi CSS `transition: width` ile pürüzsüz animasyonlanır.

### CSS (token isimleri Bentas-Design-System'in `--bt-*` sistemine göre; Medusa gibi
kısaltılmış token seti kullanan projelerde `--bt-space-*`→`--space-*`,
`--bt-radius-*`→`--radius-*` şeklinde eşleştirin — **değerler aynı, sadece isim**)

```css
.stb-shell {
  width: 280px; flex-shrink: 0;
  display: flex; flex-direction: column;
  height: 100%;
  background: var(--bt-surface-primary-default);
  border-right: 1px solid var(--bt-border-primary-default);
  overflow: hidden;
  transition: width 200ms ease;
}
.stb-shell.is-collapsed { width: 48px; }

.stb-top {
  display: flex; align-items: center;
  gap: var(--bt-space-md);
  height: 48px;
  padding: var(--bt-space-sm) var(--bt-space-lg);
  background: var(--bt-primary-default);
  box-sizing: border-box; flex-shrink: 0;
}
.stb-shell.is-collapsed .stb-top { justify-content: center; padding: var(--bt-space-lg); }

.stb-menu-btn {
  width: 28px; height: 28px; flex-shrink: 0;
  display: flex; align-items: center; justify-content: center;
  border: none; padding: 0;
  border-radius: var(--bt-radius-sm);
  background: var(--bt-primary-default);
  color: var(--bt-text-primary-inverted);
  cursor: pointer; transition: background 100ms;
}
.stb-menu-btn:hover { background: var(--bt-primary-intense); } /* Medusa: --bt-primary-hover/-active kendi token'ı */

.stb-brand { display: flex; align-items: center; gap: var(--bt-space-sm); min-width: 0; overflow: hidden; }
.stb-shell.is-collapsed .stb-brand { display: none; }

/* Bentas'ta placeholder gradient logo; gerçek bir logo görseli varsa
   (Medusa gibi) bu kutu sadece 36×36/radius-md container'dır, içine <img> konur */
.stb-logo { width: 36px; height: 36px; border-radius: var(--bt-radius-md); flex-shrink: 0; overflow: hidden; }
.stb-title {
  font: var(--bt-title-lg-medium, 500 18px/24px var(--font-title));
  color: var(--bt-text-primary-inverted); white-space: nowrap;
}

.stb-body { flex: 1; min-height: 0; display: flex; flex-direction: column; }
.stb-shell.is-collapsed .stb-body { padding-top: var(--bt-space-2xl); }

/* Search — gerçek .bt-searchbox (md: 32px yükseklik) reuse edilir, statik taklit değil */
.stb-search-wrap { padding: var(--bt-space-xl) var(--bt-space-lg) var(--bt-space-md); flex-shrink: 0; }
.stb-shell.is-collapsed .stb-search-wrap { display: none; }

.stb-list { flex: 1; min-height: 0; overflow-y: auto; display: flex; flex-direction: column; gap: var(--bt-space-2xs); }
.stb-item { padding: 0 var(--bt-space-md); flex-shrink: 0; box-sizing: border-box; }
.stb-item-inner {
  display: flex; align-items: center;
  height: 32px; width: 100%;
  border-radius: var(--bt-radius-md);
  background: var(--bt-surface-primary-default);
  color: var(--bt-text-primary-default);
  text-align: left; cursor: pointer; box-sizing: border-box;
  transition: background 100ms, color 100ms;
}
.stb-item-inner:hover { background: var(--bt-surface-primary-subtle); }
.stb-item-inner:active { background: var(--bt-base-emphasis); }
.stb-item-inner.is-selected { background: var(--bt-surface-brand-default); color: var(--bt-text-primary-inverted); }
.stb-item-inner.is-selected .stb-item-icon { color: var(--bt-text-primary-inverted); }
.stb-item-inner.is-selected:hover,
.stb-item-inner.is-selected:active { background: var(--bt-primary-intense); }

.stb-item-icon {
  display: flex; align-items: center; justify-content: center;
  width: 32px; height: 32px; padding: var(--bt-space-xs); /* 4px pad + 24px ikon = 32px kontrol */
  color: var(--bt-icon-primary-strong); box-sizing: border-box; flex-shrink: 0;
}
.stb-item-label {
  flex: 1; min-width: 0; padding: var(--bt-space-md) 2px;
  font: var(--bt-text-xs-regular, 400 12px/16px var(--font));
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}
.stb-shell.is-collapsed .stb-item-label { display: none; }
.stb-shell.is-collapsed .stb-item-inner { justify-content: center; } /* label gidince tek kalan ikon ortalanır */
```

### JS Davranışı

```js
window._stbToggle = function (btn) {
  const shell = btn.closest('.stb-shell');
  if (shell) shell.classList.toggle('is-collapsed');
};
// onclick="window._stbToggle(this)" — menu-toggle butonunda

// Nav seçimi (tek seçim, kendi .stb-list'i içinde):
window._stbSelectItem = function (el) {
  const list = el.closest('.stb-list');
  if (!list) return;
  const current = list.querySelector('.stb-item-inner.is-selected');
  if (current && current !== el) current.classList.remove('is-selected');
  el.classList.add('is-selected');
};
```

### ⚠️ Lucide icon tuzağı (bir consuming projede tekrar yaşandı)

Lucide `createIcons()` çalıştığında `<i data-lucide="...">` etiketini **`<svg>`'ye
dönüştürür** (tag adı değişir, class'lar/attribute'lar korunur). Bu yüzden
`.stb-item-icon i { width:16px }` gibi **tag-tabanlı descendant seçiciler** işlem
sonrası hiçbir şeye eşleşmez — DOM'da artık `i` yok, `svg` var. Doğrusu: boyut
class'ını **doğrudan ikon elementinin üzerine** yaz (`<i data-lucide="menu"
class="stb-menu-icon">`), `.stb-menu-icon { width:14px; height:14px; }` gibi bir
class seçiciyle hedefle — Lucide bu class'ı yeni `<svg>`'ye aktarır, güvenilir
şekilde çalışır.

### Consuming proje örneği: Medusa Dashboard

`medusa-demo/dashboard.html` bu component'i gerçek bir üründe kullanıyor — bkz.
[[project_medusa_dashboard]]. Adaptasyonda dikkat edilenler:
- İçerik (logo görseli, uygulama adı, nav item'ların ikon/etiketleri, arama
  placeholder'ı) tamamen korundu — sadece yapı/state sistemi değişti.
- Kullanıcı satırı + overflow menü (`.user-widget`/`.uw-*`) Standart Sidebar'ın
  parçası **değil** — Medusa'ya özel bir alt bölüm olarak `.stb-body` içine,
  `.stb-list`'ten sonra üçüncü çocuk olarak eklendi, kendi class'larıyla
  dokunulmadan bırakıldı; sadece collapsed state'te `.user-info` metni gizlenecek
  tek bir ek kural eklendi.
- Token isimleri host projenin kendi kısaltılmış setine çevrildi (`--bt-space-lg`,
  `--bt-text-lg-size/-lh`, `--bt-base-emphasis` gibi eksik olanlar host'un
  `:root`'una eklendi).
- Nav item'lar `<div role="button">` değil gerçek `<button>` olarak yazıldı —
  klavye (Enter/Space) native çalışsın diye, orijinal Medusa markup'ı da zaten
  `<button>` kullanıyordu.

---

## 7. Page Header & Toolbar

```css
/* Sayfa başlık çubuğu */
.page-header {
  display: flex; align-items: center;
  height: 36px;
  border-bottom: 1px solid var(--bt-border-primary-default);
  padding: var(--space-sm) var(--space-xl);
  flex-shrink: 0;
  background: var(--bt-surface-primary-default);
}
.page-title {
  font-family: var(--font-title); font-size: var(--text-md);
  font-weight: 500; line-height: var(--lh-md);
  color: var(--color-gray-900); white-space: nowrap;
}

/* Toolbar (filtreler, butonlar, arama) */
.toolbar {
  display: flex; align-items: center; justify-content: space-between;
  height: 40px;
  border-bottom: 1px solid var(--bt-border-primary-default);
  padding: var(--space-sm) var(--space-xl);
  flex-shrink: 0;
  background: var(--bt-base-default);
}
.toolbar-actions { display: flex; gap: 10px; align-items: center; }

/* Toolbar search (280px genişlik) */
.toolbar-search {
  display: flex; align-items: center;
  width: 280px; height: 28px;
  border: 1px solid var(--bt-border-primary-default);
  border-radius: var(--radius-sm);
  background: var(--bt-surface-primary-default);
  overflow: hidden;
}
.toolbar-search-input {
  flex: 1; min-width: 0; border: none;
  font-size: var(--text-sm); color: var(--bt-text-primary-default);
  background: transparent; outline: none;
  padding: var(--space-xs) var(--space-xs) var(--space-xs) var(--space-xl);
}
.toolbar-search-input::placeholder { color: var(--bt-text-primary-muted); }
.toolbar-search-sep {
  width: 1px; height: 28px;
  background: var(--bt-border-primary-default); flex-shrink: 0;
}
```

---

## 8. Butonlar

### 8.1 Base .btn

```css
.btn {
  display: inline-flex; align-items: center; justify-content: center;
  gap: var(--space-sm); height: 28px; padding: 0 var(--space-md);
  border-radius: var(--radius-sm);
  font-family: var(--font-title); font-size: var(--text-xs);
  font-weight: 400; line-height: var(--lh-xs);
  cursor: pointer; transition: opacity 0.15s, background 0.15s;
}
.btn-icon { width: 16px; height: 16px; display: block; flex-shrink: 0; }
```

### 8.2 Varyantlar

```css
/* Primary — mavi dolu */
.btn-primary {
  background: var(--bt-primary-default);
  color: var(--bt-text-primary-inverted); border: none;
}
.btn-primary:hover  { background: var(--bt-primary-hover); }
.btn-primary:active { background: var(--bt-primary-active); transform: scale(0.97); }
.btn-primary:disabled {
  background: var(--bt-base-muted); color: var(--bt-text-primary-muted);
  cursor: not-allowed; pointer-events: none;
}

/* Outline — çerçeveli */
.btn-outline {
  background: transparent; color: var(--bt-text-primary-default);
  border: 1px solid var(--bt-border-primary-default);
}
.btn-outline:hover { background: var(--bt-surface-primary-subtle); }

/* Danger — kırmızı dolu */
.btn-danger { background: #b31d38; color: #ffffff; border: none; }
.btn-danger:hover  { background: #961630; }
.btn-danger:active { background: #7d1228; transform: scale(0.97); }

/* Flat small (text-only, toolbar) */
.btn-flat-sm {
  display: flex; align-items: center; justify-content: center; gap: 6px;
  padding: var(--space-sm) var(--space-md); border: none;
  border-radius: var(--radius-sm); background: transparent;
  color: var(--bt-text-primary-default);
  font-size: var(--text-xs); cursor: pointer; transition: background 0.15s;
}
.btn-flat-sm:hover { background: var(--bt-surface-primary-subtle); }
.btn-flat-sm--danger { color: #b31d38; }
.btn-flat-sm--danger:hover { background: #fef2f2; }
.btn-flat-sm:disabled { opacity: 0.4; cursor: not-allowed; pointer-events: none; }

/* Outline small */
.btn-outline-sm {
  display: flex; align-items: center; justify-content: center; gap: 6px;
  padding: var(--space-sm) var(--space-md);
  border: 1px solid var(--bt-border-primary-default);
  border-radius: var(--radius-sm); background: transparent;
  color: var(--bt-text-primary-default); font-size: var(--text-xs);
  cursor: pointer; transition: background 0.15s;
}
.btn-outline-sm:hover { background: var(--bt-surface-primary-subtle); }
```

### 8.3 Split Button (Flat)

```css
.sb-flat { position: relative; display: inline-flex; align-items: stretch; border-radius: var(--radius-sm); }
.sb-flat__btn {
  padding: var(--space-2xs) var(--space-sm); background: transparent; border: none;
  font-size: var(--text-xs); cursor: pointer;
  border-radius: var(--radius-sm) 0 0 var(--radius-sm);
  transition: background 0.12s;
}
.sb-flat__divider { width: 1px; background: var(--bt-border-primary-default); align-self: stretch; }
.sb-flat__split {
  display: inline-flex; align-items: center; justify-content: center;
  padding: var(--space-2xs); width: 20px; background: transparent; border: none;
  border-radius: 0 var(--radius-sm) var(--radius-sm) 0; cursor: pointer;
}
.sb-flat__btn:hover, .sb-flat__split:hover,
.sb-flat.is-open .sb-flat__btn,
.sb-flat.is-open .sb-flat__split { background: var(--bt-surface-primary-subtle); }

/* Dropdown list */
.sb-flat__list {
  position: absolute; top: calc(100% + 4px); left: 0; min-width: 140px;
  background: var(--bt-surface-primary-default);
  border: 1px solid var(--bt-border-primary-default);
  border-radius: var(--radius-sm); box-shadow: 0 4px 12px rgba(0,0,0,0.12);
  z-index: 200; overflow: hidden;
}
.sb-flat__list[hidden] { display: none; }
.sb-flat__item {
  display: flex; align-items: center; gap: var(--space-sm);
  padding: var(--space-md) var(--space-xl);
  font-size: var(--text-xs); cursor: pointer;
  color: var(--bt-text-primary-default); transition: background 0.1s;
}
.sb-flat__item:hover { background: var(--bt-surface-primary-subtle); }
```

---

## 9. Data Table

### Yapı

```
.table-container                ← flex:1; padding:16px; overflow:hidden
  └── .grid-card                ← white card, border, border-radius:4px
        ├── .sc-tabs             ← segmented control (tablo türü seçimi)
        └── .grid-table-wrap     ← overflow:auto; flex:1
              └── .grid-table-inner  ← min-height:100%; width:1950px (sabit genişlik)
                    └── table.data-table
```

```css
.table-container {
  flex: 1; overflow: hidden; padding: var(--space-2xl);
  background: var(--bt-surface-primary-light);
  display: flex; flex-direction: column; min-height: 0;
}
.grid-card {
  flex: 1; min-height: 0; display: flex; flex-direction: column; gap: 12px;
  background: var(--bt-surface-primary-default);
  border: 1px solid var(--bt-border-primary-default);
  border-radius: var(--radius-sm); padding: 16px; overflow: hidden;
}
.grid-table-wrap { flex: 1; min-height: 0; overflow: auto; }
.grid-table-inner { min-height: 100%; display: flex; flex-direction: column; width: 1950px; }

.data-table {
  border-collapse: collapse; table-layout: fixed; width: 1950px;
}
```

### Header Row

```css
.data-table thead tr { height: 36px; }
.data-table th {
  background: var(--bt-base-default);
  border-top: 1px solid var(--bt-border-primary-default);
  box-shadow: inset 0 -1px 0 var(--bt-border-primary-default);
  padding: 0; font-weight: 400;
  position: sticky; top: 0; z-index: 1;
  overflow: visible; user-select: none;
}
.data-table th:first-child { border-left:  1px solid var(--bt-border-primary-default); }
.data-table th:last-child  { border-right: 1px solid var(--bt-border-primary-default); }

.th-inner { display: flex; align-items: center; height: 36px; }
.th-label {
  font-size: var(--text-xs); font-weight: 500; line-height: var(--lh-xs);
  color: var(--bt-text-primary-default);
  overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
  flex: 1; min-width: 0;
}
```

### Kolon Resize Handle

```css
.col-resize-handle {
  position: absolute; right: 0; top: 0; bottom: 0;
  width: 4px; cursor: col-resize; z-index: 2; transition: background 0.15s;
}
.col-resize-handle:hover,
.col-resize-handle.is-resizing { background: var(--bt-primary-default); opacity: 0.4; }
```

JS: `mousedown` → `mousemove` ile `th.style.width` güncelle, `col` elementinin `width` attribute'unu da güncelle.

### Kolon Sort

```css
th[data-col] { cursor: pointer; user-select: none; }
.th-sort {
  display: flex; align-items: center; justify-content: center;
  width: 20px; height: 28px; flex-shrink: 0;
  color: var(--bt-icon-primary-muted, #aaa); opacity: 0;
  transition: opacity 0.15s, color 0.15s;
}
th[data-col]:hover .th-sort { opacity: 0.45; }
th[data-sort="asc"]  .th-sort,
th[data-sort="desc"] .th-sort { opacity: 1; color: var(--bt-primary-default); }
```

### Data Rows

```css
.data-table tbody tr { height: 32px; }
.data-table tbody tr:hover td { background: var(--bt-surface-primary-subtle); }
.data-table tbody tr.is-selected-row td { background: var(--bt-surface-brand-subtle); }

/* Row blur-in animasyonu (yeni eklenen satır) */
@keyframes textBlurInFlash {
  0%   { filter: blur(5px); opacity: 0;   background-color: transparent; }
  8%   { filter: blur(5px); opacity: 0.2; background-color: #dcfce7; }
  55%  { filter: blur(0px); opacity: 1;   background-color: #dcfce7; }
  100% { filter: blur(0px); opacity: 1;   background-color: transparent; }
}
.tr-blur-in td { animation: textBlurInFlash 1.6s cubic-bezier(0.4,0,0.2,1) forwards; }

.data-table td {
  background: var(--bt-base-default);
  border-bottom: 1px solid var(--bt-border-primary-default);
  padding: 0; overflow: hidden;
}
.data-table td:first-child { border-left:  1px solid var(--bt-border-primary-default); }
.data-table td:last-child  { border-right: 1px solid var(--bt-border-primary-default); }

.td-inner { display: flex; align-items: center; height: 32px; }
.td-cell  { display: flex; align-items: center; flex: 1; min-width: 0; padding: var(--space-md); }
.td-text  {
  font-size: var(--text-xs); font-weight: 400; line-height: var(--lh-xs);
  color: var(--bt-text-primary-default);
  overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
  flex: 1; min-width: 0;
}
```

### Frozen First Column

```css
.data-table th:first-child,
.data-table td:first-child {
  position: sticky; left: 0; z-index: 2;
  background: var(--bt-base-default);
}
.data-table thead th:first-child { z-index: 4; }
.data-table td:first-child { overflow: visible; }

/* Sağ taraf gölgesi */
.data-table th:first-child::after,
.data-table td:first-child::after {
  content: ''; position: absolute;
  top: 0; right: -8px; width: 8px; height: 100%;
  background: linear-gradient(to right, rgba(0,0,0,0.04), transparent);
  pointer-events: none;
}
```

### Checkbox

```css
.checkbox-box {
  width: 16px; height: 16px;
  border: 1px solid var(--bt-border-primary-default);
  border-radius: var(--radius-2xs);
  background: var(--bt-surface-primary-default);
  display: flex; align-items: center; justify-content: center;
  cursor: pointer; flex-shrink: 0;
}
.checkbox-box:hover { border-color: var(--bt-primary-default); }
.checkbox-box.is-checked { background: var(--bt-primary-default); border-color: var(--bt-primary-default); }
.checkbox-box svg { display: none; width: 12px; height: 12px; color: white; }
.checkbox-box.is-checked svg { display: block; }
```

### Badge (Durum / Öncelik)

```css
.badge-cell {
  display: flex; align-items: center; justify-content: center;
  flex: 1; height: 28px; padding: var(--space-2xs) var(--space-2xl);
}
.badge {
  display: inline-flex; align-items: center; justify-content: center;
  flex: 1; border-radius: var(--radius-full);
  border: 1px solid var(--bt-border-primary-default);
  background: var(--bt-secondary-light);
  padding: 2px var(--space-md);
}
.badge-text { font-size: var(--text-xs); font-weight: 400; line-height: var(--lh-xs); }

/* Durum renkleri */
.badge--onay-bkl    { background: var(--bt-warning-subtle); }
.badge--calisiliyor { background: var(--orange-200); }
.badge--tamamlandi  { background: var(--green-100); }
.badge--bilgi-bek   { background: var(--purple-100); }
.badge--redded      { background: #fee2e2; }
.badge--onaylandi   { background: var(--green-100); }
```

### Renkli Dot

```css
.dot-wrap { display: flex; align-items: center; justify-content: center; width: 28px; height: 28px; flex-shrink: 0; }
.dot { width: 8px; height: 8px; border-radius: 50%; background: var(--bt-primary-default); }
.dot--type-acik      { background: var(--blue-500); }
.dot--type-onay-bek  { background: var(--yellow-500); }
.dot--type-onaylandi { background: var(--teal-600); }
.dot--type-redded    { background: var(--red-500); }
```

### Öncelik & İş Türü Icon Renkleri

```css
/* Öncelik */
.oncelik-icon--dusuk  { color: var(--gray-400); }
.oncelik-icon--normal { color: var(--blue-600); }
.oncelik-icon--yuksek { color: var(--orange-600); }
.oncelik-icon--acil   { color: var(--red-600); }

/* İş Türü */
.is-turu-icon--acik      { color: var(--blue-500); }
.is-turu-icon--onay-bek  { color: var(--yellow-500); }
.is-turu-icon--onaylandi { color: var(--teal-600); }
.is-turu-icon--redded    { color: var(--red-500); }
```

### Kolon Visibility Toggle (Sütun Göster/Gizle)

```css
.col-toggle-btn {
  display: flex; align-items: center; gap: 6px;
  height: 32px; padding: 0 10px;
  border: 1px solid var(--bt-border-primary-default);
  border-radius: var(--radius-xs);
  background: var(--bt-surface-primary-default);
  cursor: pointer; transition: background 0.15s;
}
.col-toggle-menu {
  position: absolute; top: calc(100% + 6px); right: 0;
  width: 237px; background: var(--bt-surface-primary-default);
  border: 1px solid var(--bt-border-primary-default);
  border-radius: 4px;
  box-shadow: 0px 4px 4px rgba(16,24,40,0.10), 0px 2px 2px rgba(16,24,40,0.06);
  z-index: 500; padding: 16px;
  display: flex; gap: 8px; flex-direction: column;
  opacity: 0; transform: translateY(-6px) scale(0.97); transform-origin: top right;
  pointer-events: none; transition: opacity 0.18s ease, transform 0.18s ease;
}
.col-toggle-menu.is-open { opacity: 1; transform: translateY(0) scale(1); pointer-events: all; }

/* Toggle switch (32×20, thumb 16×16, radius:4px) */
.col-sw {
  flex-shrink: 0; width: 32px; height: 20px; padding: 2px;
  border-radius: 4px; background: #d4d4d4;
  display: flex; align-items: center; cursor: pointer; transition: background 0.2s;
}
.col-sw.is-on { background: var(--bt-surface-brand-default); }
.col-sw-thumb {
  width: 16px; height: 16px; border-radius: 4px;
  background: #fff; flex-shrink: 0;
  transform: translateX(0); transition: transform 0.2s;
}
.col-sw.is-on .col-sw-thumb { transform: translateX(12px); }
```

Kolon gizleme: `data-table` üzerine `col-hidden-N` class'ı eklenir (N = 2–15).
```css
.data-table.col-hidden-N thead tr th:nth-child(N),
.data-table.col-hidden-N tbody tr td:nth-child(N) { display: none; }
```

### Column Filter Panel (Kolon Başlığı Filtresi)

```css
.col-fp {
  position: fixed; z-index: 400;
  min-width: 200px; max-width: 280px;
  background: var(--bt-surface-primary-default);
  border: 1px solid var(--bt-border-primary-default);
  border-radius: var(--radius-sm);
  box-shadow: 0 4px 12px rgba(16,24,40,0.14);
  display: flex; flex-direction: column; overflow: hidden;
}
.col-fp[hidden] { display: none; }
.col-fp-input {
  width: 100%; height: 28px;
  border: 1px solid var(--bt-border-primary-default);
  border-radius: var(--radius-xs); padding: 0 8px;
  font-size: var(--text-xs); outline: none;
}
.col-fp-input:focus { border-color: var(--bt-primary-default); }
.col-fp-list { overflow-y: auto; max-height: 200px; padding: 4px 0; }
.col-fp-item {
  display: flex; align-items: center; gap: 8px;
  padding: 5px 10px; cursor: pointer; font-size: var(--text-xs);
}
.col-fp-item:hover { background: var(--bt-surface-primary-subtle); }
.col-fp-item-check {
  width: 14px; height: 14px; flex-shrink: 0;
  border: 1.5px solid var(--bt-border-primary-default);
  border-radius: 3px; display: flex; align-items: center; justify-content: center;
}
.col-fp-item.is-checked .col-fp-item-check { background: var(--bt-primary-default); border-color: var(--bt-primary-default); }
.col-fp-item.is-checked .col-fp-item-check::after { content: '✓'; color: #fff; font-size: 9px; }
```

### Segmented Control (Tablo Tab)

```css
.sc-tabs {
  display: inline-flex; align-self: flex-start;
  background: var(--bt-surface-primary-subtle);
  border: 1px solid var(--bt-border-primary-default);
  border-radius: var(--radius-sm); overflow: hidden;
}
.sc-tab {
  padding: var(--space-sm) var(--space-md);
  font-size: var(--text-xs); font-weight: 400; line-height: var(--lh-xs);
  background: var(--bt-surface-primary-subtle);
  cursor: pointer; white-space: nowrap; transition: background 0.12s, color 0.12s;
}
.sc-tab:hover:not(.is-active) { background: var(--bt-surface-tab-hover); }
.sc-tab.is-active { background: var(--bt-surface-brand-default); color: var(--bt-text-primary-inverted); }
```

Satır gizleme: `tr.sc-hidden`, `tr.fp-hidden`, `tr.search-hidden`, `tr.cf-hidden` → `display:none`

### Grid Footer (seçim özeti)

```css
.bnt-grid-footer {
  display: none; align-items: center; gap: 8px;
  padding: 8px var(--space-xl);
  border-top: 1px solid var(--bt-border-primary-default);
  background: var(--bt-base-default); flex-shrink: 0;
}
.bnt-grid-footer.is-visible { display: flex; }
.bnt-footer-label { font-size: 12px; font-weight: 500; color: var(--bt-text-primary-emphasis); }
.bnt-footer-count { font-size: 12px; font-weight: 600; color: var(--bt-primary-default); }
```

---

## 10. Side Panels (Sağdan Kayan Paneller)

### 10.1 Task Add Panel (Yeni Talep / 653px)

#### Anatomy

```
task-panel (aside, role=dialog, hidden)
  ├── task-panel__header (40px)
  │     ├── task-panel__header-left   ← [×] close btn + title
  │     └── [Kaydet] btn              ← sağda, footer YOK
  └── task-panel__body (flex:1, arka plan: surface-light)
        └── task-panel__card          ← beyaz inner card, overflow-y:auto
              ├── tp-field (İşin Adı)
              ├── tp-field (Açıklama)
              └── tp-field (...)
```

> **Header yapısı:** Close butonu + başlık **solda** (`header-left`), Kaydet butonu **header'ın sağında**. Ayrı bir footer bölümü yoktur.
>
> **Inner card:** Body, açık renkli (`surface-light`) bir dolgu alanıdır; formun kendisi beyaz (`surface-default`) bordered card içinde yaşar.

#### CSS

```css
/* Arka plan overlay */
.panel-overlay {
  position: fixed; inset: 0;
  background: rgba(0,0,0,0.35); z-index: 100;
  opacity: 0; pointer-events: none; transition: opacity 0.28s ease;
}
.panel-overlay.is-open { opacity: 1; pointer-events: all; }

/* Panel kabuğu — başlangıçta hidden attribute + translateX(100%) */
.task-panel {
  position: fixed; top: 0; right: 0;
  width: 653px; height: 100vh; z-index: 201;
  display: flex; flex-direction: column;
  background: var(--bt-surface-primary-light);
  transform: translateX(100%);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}
.task-panel.is-open { transform: translateX(0); }

/* Header — 40px */
.task-panel__header {
  height: 40px; flex-shrink: 0;
  display: flex; align-items: center; justify-content: space-between;
  padding: 0 var(--space-xl);
  background: var(--bt-surface-primary-default);
  border-bottom: 1px solid var(--bt-border-primary-default);
  box-shadow: 0px 2px 3px rgba(0,0,0,0.08);
}
.task-panel__header-left { display: flex; align-items: center; gap: var(--space-md); }
.task-panel__title {
  font-family: var(--font-title); font-size: var(--text-md);
  font-weight: 400; line-height: var(--lh-md); color: var(--color-gray-900);
}
.task-panel__close {
  display: flex; align-items: center; justify-content: center;
  width: 28px; height: 28px; padding: var(--space-sm);
  border-radius: var(--radius-sm); color: var(--bt-text-primary-default);
  transition: background 0.15s;
}
.task-panel__close:hover { background: var(--bt-surface-primary-subtle); }

/* Body */
.task-panel__body {
  flex: 1; min-height: 0; display: flex; flex-direction: column;
  padding: var(--space-2xl); background: var(--bt-surface-primary-light);
}

/* Inner card — formun yaşadığı beyaz alan */
.task-panel__card {
  flex: 1; background: var(--bt-surface-primary-default);
  border: 1px solid var(--bt-border-primary-default);
  border-radius: var(--radius-sm); padding: 20px;
  display: flex; flex-direction: column; gap: 16px;
  overflow-y: auto;
}
```

#### HTML Skeleton

```html
<div class="panel-overlay" id="panelOverlay" aria-hidden="true"></div>

<aside class="task-panel" id="taskPanel"
       role="dialog" aria-modal="true"
       aria-labelledby="taskPanelTitle"
       hidden>

  <div class="task-panel__header">
    <div class="task-panel__header-left">
      <button class="task-panel__close" id="taskPanelClose" aria-label="Kapat">
        <i data-lucide="x"></i>
      </button>
      <span class="task-panel__title" id="taskPanelTitle">Yeni İş Talebi Ekle</span>
    </div>
    <button class="btn btn-primary" id="taskPanelSave">Kaydet</button>
  </div>

  <div class="task-panel__body">
    <div class="task-panel__card">
      <!-- tp-field'ler buraya -->
    </div>
  </div>

</aside>
```

#### JS — Open / Close

```js
const panel   = document.getElementById('taskPanel');
const overlay = document.getElementById('panelOverlay');

function openPanel() {
  // Edit panel açıksa sola it
  if (editPanel.classList.contains('is-open')) {
    editPanel.classList.add('is-pushed-panel');
  }

  panel.hidden = false;           // hidden kaldır — DOM'a geri al
  panel.getBoundingClientRect();  // ⚠️ reflow zorla: animasyonun başlaması için şart
  panel.classList.add('is-open');
  overlay.classList.add('is-open');
  overlay.setAttribute('aria-hidden', 'false');

  lucide.createIcons();           // ⚠️ hidden iken ikonlar init edilemez — burada çağır
}

function closePanel() {
  editPanel.classList.remove('is-pushed-panel');
  panel.classList.remove('is-open');
  overlay.classList.remove('is-open');
  overlay.setAttribute('aria-hidden', 'true');

  // Animasyon bittikten sonra DOM'dan gizle
  panel.addEventListener('transitionend', function hide() {
    panel.hidden = true;
    panel.removeEventListener('transitionend', hide);
  }, { once: true });
}

document.getElementById('taskPanelClose').addEventListener('click', closePanel);
overlay.addEventListener('click', closePanel);
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && panel.classList.contains('is-open')) closePanel();
});
```

#### Kritik Notlar

| Kural | Neden |
|---|---|
| `panel.hidden = false` → `getBoundingClientRect()` → `classList.add('is-open')` | `hidden` kaldırılır kaldırılmaz browser layout'u hesaplar; reflow olmadan transform start state görünmez, animasyon çalışmaz |
| Kapatmada `transitionend` bekle, sonra `hidden = true` set et | Animasyon tamamlanmadan `hidden=true` yapılırsa panel anında yok olur |
| `lucide.createIcons()` panel açılışında | `hidden` iken `display:none` gibi davranır; icon SVG'leri oluşturulamaz |
| `role="dialog"` + `aria-modal="true"` + `aria-labelledby` | Ekran okuyucular için zorunlu |
| Kaydet butonu **header'da sağda**, ayrı footer yok | Medusa pattern — dar panel'de footer alan kaybedeceğinden tercih edilmiyor |

### 10.2 Filter Panel (653px — aynı yapı)

```css
.filter-panel {
  position: fixed; top: 0; right: 0;
  width: 653px; height: 100vh; z-index: 101;
  display: flex; flex-direction: column;
  background: var(--bt-surface-primary-light);
  transform: translateX(100%);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),
              width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}
.filter-panel.is-open { transform: translateX(0); }
.filter-panel.is-fullscreen { width: 100vw; }
.filter-panel.is-fullscreen .filter-panel-inner { width: 653px; }
```

`filter-panel-header`, `filter-panel-body`, `filter-panel-inner` yapısı task-panel ile aynı.

Panel header'daki icon buton:
```css
.fp-icon-btn {
  display: flex; align-items: center; justify-content: center;
  width: 28px; height: 28px; padding: var(--space-sm);
  border: none; background: none; border-radius: var(--radius-sm);
  cursor: pointer; color: var(--bt-text-primary-default); transition: background 0.15s;
}
.fp-icon-btn:hover { background: var(--bt-surface-primary-subtle); }
.fp-icon-btn svg { width: 16px; height: 16px; }
```

### 10.3 Edit Panel (Full-Screen, Daraltılabilir)

Edit panel tüm ekranı kaplar ve iki sütuna ayrılır.

```css
.edit-panel {
  position: fixed; top: 0; left: 0; right: 0; bottom: 0;
  z-index: 200; display: flex; flex-direction: column;
  background: var(--bt-surface-primary-light);
  transform: translateX(100%);
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1),
              left 0.3s ease, right 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.edit-panel.is-open { transform: translateX(0); }

/* Daraltılmış: sol yarıda görünür */
.edit-panel.is-collapsed {
  left: 50%;
  box-shadow: -12px 0 32px 0 rgba(0,0,0,0.18);
}

/* Task panel ile birlikte açık: edit panel push olur */
.edit-panel.is-open.is-pushed-panel { transform: translateX(0); }
.edit-panel.is-open.is-collapsed.is-pushed-panel { transform: translateX(max(-653px, -50vw)); }

/* Header */
.edit-panel__header {
  height: 40px; flex-shrink: 0;
  display: flex; align-items: center; justify-content: space-between;
  padding: 0 var(--space-xl);
  background: var(--bt-surface-primary-default);
  border-bottom: 1px solid var(--bt-border-primary-default);
  box-shadow: 0px 2px 3px rgba(0,0,0,0.08);
}
.edit-panel__title {
  font-family: var(--font-title); font-size: var(--text-md);
  font-weight: 400; line-height: var(--lh-md); color: var(--color-gray-900);
}

/* Toolbar */
.edit-panel__toolbar {
  flex-shrink: 0; display: flex; align-items: center;
  padding: var(--space-sm) var(--space-3xl);
  background: var(--bt-surface-primary-default);
  border-bottom: 1px solid var(--color-gray-300);
  gap: 10px;
}

/* Body: iki sütun */
.edit-panel__body { flex: 1; min-height: 0; display: flex; }

/* Sol sütun (form alanları) — 465px */
.edit-panel__left {
  width: 465px; flex-shrink: 0; height: 100%;
  background: var(--bt-surface-primary-default);
  border-right: 1px solid var(--bt-border-primary-default);
  overflow-y: auto; display: flex; flex-direction: column;
  gap: var(--space-2xl); padding: var(--space-3xl);
  transition: width 0.3s ease;
}

/* Sağ sütun (aktivite / yorumlar) */
.edit-panel__right {
  flex: 1; min-width: 0; height: 100%;
  background: var(--bt-surface-primary-light);
  display: flex; flex-direction: column; gap: 10px;
  padding: var(--space-2xl) 160px;
  overflow-y: auto;
}

/* Daraltılmış modda sütunlar */
.edit-panel.is-collapsed .edit-panel__left { width: 360px; }
.edit-panel.is-collapsed .edit-panel__right { padding-left: 40px; padding-right: 40px; }
.edit-panel.is-collapsed .ep-row { flex-direction: column; gap: 8px; }
.edit-panel.is-collapsed .ep-col { flex: none; width: 100%; }

/* Sağ taraf kartlar */
.ep-right-card {
  flex-shrink: 0; width: 100%;
  background: var(--bt-surface-primary-default);
  border: 1px solid var(--bt-border-primary-default);
  border-radius: var(--radius-sm); padding: var(--space-3xl);
  display: flex; flex-direction: column; gap: var(--space-2xl);
}

/* Section title (form bölüm başlığı) */
.ep-section-title {
  display: flex; flex-direction: column; gap: 4px;
  padding-bottom: var(--space-xs);
  border-bottom: 1px solid var(--bt-border-primary-default);
  width: 100%; flex-shrink: 0;
}
.ep-section-title h3 {
  font-family: var(--font-title); font-size: var(--text-sm);
  font-weight: 500; color: var(--bt-text-primary-default);
}
.ep-section-title p {
  font-size: var(--text-xs); font-weight: 400;
  color: var(--bt-text-primary-emphasis);
}

/* İki sütun satır */
.ep-row { display: flex; gap: 12px; width: 100%; flex-shrink: 0; }
.ep-col { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 4px; }

/* Expand/Collapse butonu */
.ep-expand-btn {
  display: flex; align-items: center; justify-content: center;
  width: 28px; height: 28px; border: none; background: transparent;
  cursor: pointer; border-radius: var(--radius-sm);
  color: var(--bt-icon-primary-strong); flex-shrink: 0;
}
.ep-expand-btn:hover { background: var(--bt-surface-primary-subtle); }
.ep-expand-btn svg { width: 14px; height: 14px; stroke-width: 1.5; }
```

---

### 10.4 Panel Stack (Katmanlı Panel Sistemi)

Bir panel içindeki butona basıldığında yeni panel sağdan açılır, alttaki panel sola kayar. Panel kapatıldığında alttakiler geri döner. Sonsuz katman desteklenir.

#### Davranış Akışı

```
Başlangıç:     [App]
Ekle/Düzenle:  [App] ← [Panel A]
İçeride buton: [App] ← [Panel A (sola kaydı)] ← [Panel B]
Panel B kapat: [App] ← [Panel A (geri geldi)]
Panel A kapat: [App]
```

#### CSS

```css
/* Temel panel — sağdan girer */
.panel {
  position: fixed; top: 0; right: 0;
  height: 100vh; z-index: 300;
  background: var(--bt-surface-primary-light);
  transform: translateX(100%);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}
.panel.is-open { transform: translateX(0); }

/* Üstüne yeni panel açıldığında panel sola kayar.
   inline style (JS tarafından set edilir) transition'ı taşır;
   is-pushed yalnızca CSS fallback olarak kullanılabilir. */
.panel.is-pushed { transform: translateX(-653px); }
.panel.is-fullscreen.is-pushed { transform: translateX(-50vw); }
```

#### JS — Panel Stack Manager

```js
const panelStack = [];

/**
 * Yeni bir panel açar; mevcut tüm açık panelleri sola iter.
 * @param {HTMLElement} panelEl   - Açılacak panel elementi
 * @param {number}      pushOffset - Sola kayma miktarı (px). Default 653.
 */
function pushPanel(panelEl, pushOffset = 653) {
  // Mevcut açık panelleri sola it
  panelStack.forEach(({ el }) => {
    el.style.transform = `translateX(-${pushOffset}px)`;
  });

  panelEl.hidden = false;
  panelEl.getBoundingClientRect(); // reflow — animasyonun başlaması için zorunlu
  panelEl.classList.add('is-open');
  panelStack.push({ el: panelEl, pushOffset });
}

/**
 * En üstteki paneli kapatır; altındakileri orijinal konumuna geri getirir.
 */
function popPanel() {
  if (!panelStack.length) return;
  const { el } = panelStack.pop();

  el.classList.remove('is-open');
  el.addEventListener('transitionend', () => {
    el.hidden = true;
    el.style.transform = '';
  }, { once: true });

  // Alttaki panellerin push offset'ini sıfırla
  panelStack.forEach(({ el: pEl }) => { pEl.style.transform = ''; });
}

// Escape tuşu her zaman en üstteki paneli kapatır
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') popPanel();
});
```

#### Kullanım Örneği

```js
// "Ekle" butonu → Panel A aç
document.getElementById('addBtn').addEventListener('click', () => {
  pushPanel(document.getElementById('panelA'));
});

// Panel A içindeki "İlişki Ekle" → Panel B aç (aynı 653px offset)
document.getElementById('addRelationBtn').addEventListener('click', () => {
  pushPanel(document.getElementById('panelB'));
});

// Her paneliniz bir .panel-close-btn içersin
document.querySelectorAll('.panel-close-btn').forEach(btn => {
  btn.addEventListener('click', popPanel);
});

// Overlay click da yalnızca en üstteki paneli kapatır
document.getElementById('panelOverlay').addEventListener('click', popPanel);
```

#### Kurallar

| Kural | Açıklama |
|---|---|
| `pushOffset` default | 653px (task/filter panel genişliği) |
| Full-screen panel üstüne açılırsa | `pushPanel(panelB, window.innerWidth / 2)` |
| Stack boşken `popPanel()` | Hiçbir şey yapmaz, hata vermez |
| Birden fazla `pushPanel()` çağrısı | Her biri tüm stack'i `pushOffset` px daha sola iter — dikkatli kullan |
| `getBoundingClientRect()` | Reflow tetikler; `hidden = false` sonrası animasyon için zorunlu |

---

## 11. Form Bileşenleri

### 11.1 Label

```css
/* Task panel */
.tp-label {
  font-family: var(--font-title); font-size: var(--text-xs);
  font-weight: 400; line-height: var(--lh-xs);
  color: var(--bt-text-primary-default); display: block;
}
/* Edit panel */
.ep-label {
  font-family: var(--font-title); font-size: var(--text-xs);
  font-weight: 400; line-height: var(--lh-xs);
  color: var(--bt-text-primary-default); display: block;
}
```

### 11.2 Input

```css
/* Task panel input */
.tp-input {
  width: 100%; height: 32px; padding: var(--space-sm) var(--space-xl);
  border: 1px solid var(--bt-border-primary-default);
  border-radius: var(--radius-sm);
  background: var(--bt-surface-primary-default);
  font-size: var(--text-xs); color: var(--bt-text-primary-default);
  outline: none; transition: border-color 0.15s, box-shadow 0.15s;
}
.tp-input::placeholder { color: var(--bt-text-primary-muted); }
.tp-input:focus {
  border-color: var(--bt-primary-default);
  box-shadow: 0 0 0 3px rgba(13,78,151,0.12);
}

/* Edit panel read-only */
.ep-input-ro {
  width: 100%; height: 32px; padding: var(--space-sm) var(--space-xl);
  border: 1px solid var(--bt-border-primary-default);
  border-radius: var(--radius-sm);
  background: var(--bt-surface-primary-subtle);
  font-size: var(--text-xs); color: var(--bt-text-primary-default);
  outline: none; cursor: default;
}

/* Edit panel editable */
.ep-input-edit {
  width: 100%; height: 32px; padding: var(--space-sm) var(--space-xl);
  border: 1px solid var(--bt-border-primary-default);
  border-radius: var(--radius-sm);
  background: var(--bt-surface-primary-default);
  font-size: var(--text-xs); color: var(--bt-text-primary-default);
  outline: none; transition: border-color 0.15s, box-shadow 0.15s;
}
.ep-input-edit:focus {
  border-color: var(--bt-primary-default);
  box-shadow: 0 0 0 3px rgba(13,78,151,0.12);
}

/* Textarea */
.tp-textarea { height: 64px; resize: none; padding-top: var(--space-sm); }
.ep-textarea-ro { height: 64px; resize: none; padding-top: var(--space-sm); }
```

### 11.3 Custom Dropdown

```css
/* Task panel dropdown */
.tp-dropdown { position: relative; }
.tp-dropdown-trigger {
  width: 100%; height: 32px;
  padding: var(--space-sm) 36px var(--space-sm) var(--space-xl);
  border: 1px solid var(--bt-border-primary-default);
  border-radius: var(--radius-sm); background: var(--bt-surface-primary-default);
  font-size: var(--text-xs); color: var(--bt-text-primary-muted);
  text-align: left; cursor: pointer;
  display: flex; align-items: center;
  transition: border-color 0.15s, box-shadow 0.15s;
}
.tp-dropdown-trigger.has-value { color: var(--bt-text-primary-default); }
.tp-dropdown-trigger:focus {
  outline: none; border-color: var(--bt-primary-default);
  box-shadow: 0 0 0 3px rgba(13,78,151,0.12);
}
.tp-dropdown.is-open .tp-input-icon { transform: translateY(-50%) rotate(180deg); }

.tp-dropdown-list {
  position: absolute; top: calc(100% + 4px); left: 0; right: 0;
  background: var(--bt-surface-primary-default);
  border-radius: var(--radius-sm); overflow-y: auto; max-height: 160px;
  z-index: 20;
  box-shadow: 0px 2px 4px rgba(16,24,40,0.06), 0px 4px 8px rgba(16,24,40,0.10);
}
.tp-dropdown-list[hidden] { display: none; }
.tp-dropdown-option {
  display: flex; align-items: center; gap: 10px;
  padding: var(--space-sm) var(--space-md); cursor: pointer;
  font-size: var(--text-xs); color: var(--bt-text-primary-default);
}
.tp-dropdown-option:hover       { background: var(--bt-surface-primary-subtle); }
.tp-dropdown-option.is-selected { background: var(--bt-surface-brand-subtle); }

/* Sağ chevron icon */
.tp-input-icon {
  position: absolute; right: var(--space-sm); top: 50%; transform: translateY(-50%);
  pointer-events: none; color: var(--bt-icon-primary-strong);
  transition: transform 0.2s ease;
}
.icon-tp-sm { width: 16px; height: 16px; display: block; }
```

Edit panel dropdown (`ep-dropdown`, `ep-dd-trigger`, `ep-dd-list`) aynı mantık ama sınıf adları `ep-` prefix'li.

### 11.4 Date Picker

```css
/* Takvim ikonu solda */
.ep-datepicker {
  position: relative; display: flex; align-items: center;
  border: 1px solid var(--bt-border-primary-default);
  border-radius: var(--radius-sm); background: var(--bt-surface-primary-default);
  height: 32px; overflow: hidden; transition: border-color 0.15s, box-shadow 0.15s;
}
.ep-datepicker:focus-within {
  border-color: var(--bt-primary-default);
  box-shadow: 0 0 0 3px rgba(13,78,151,0.12);
}
.ep-dp-icon {
  display: flex; align-items: center; justify-content: center;
  width: 32px; height: 32px; flex-shrink: 0;
  color: var(--bt-icon-primary-strong); cursor: pointer;
}
.ep-dp-input {
  flex: 1; min-width: 0; border: none; background: transparent;
  font-size: var(--text-xs); color: var(--bt-text-primary-default);
  outline: none; padding: var(--space-sm) var(--space-xs);
}
/* Gizli native date input — browser picker'ı tetikler */
.ep-dp-native {
  position: absolute; opacity: 0; pointer-events: none;
  width: 0; height: 0; top: 0; left: 0;
}
/* Read-only variant */
.ep-datepicker--ro { background: var(--bt-surface-primary-subtle); pointer-events: none; }
```

### 11.5 Numeric Stepper

```css
.num-stepper {
  display: flex; align-items: stretch; height: 32px;
  border: 1px solid var(--bt-border-primary-default);
  border-radius: var(--radius-sm); background: var(--bt-surface-primary-default);
  overflow: hidden;
}
.num-stepper__input {
  flex: 1; min-width: 0; border: none; outline: none;
  padding: 0 var(--space-xl); background: transparent;
  font-size: var(--text-xs); color: var(--bt-text-primary-default);
}
.num-stepper__arrows {
  display: flex; flex-direction: column; flex-shrink: 0;
  border-left: 1px solid var(--bt-border-primary-default);
}
.num-stepper__btn {
  flex: 1; width: 20px; border: none; background: transparent;
  cursor: pointer; display: flex; align-items: center; justify-content: center;
  color: var(--bt-text-primary-muted); padding: 0; transition: background 0.1s;
}
.num-stepper__btn + .num-stepper__btn { border-top: 1px solid var(--bt-border-primary-default); }
.num-stepper__btn:hover { background: var(--bt-surface-primary-subtle); color: var(--bt-text-primary-default); }
.num-stepper__btn svg { width: 11px; height: 11px; }
.num-stepper--disabled { background: var(--bt-surface-primary-subtle); pointer-events: none; }
```

### 11.6 File Dropzone

```css
.tp-dropzone {
  display: flex; flex-direction: column; align-items: center; gap: var(--space-md);
  padding: var(--space-2xl) var(--space-md);
  border: 1px dashed var(--bt-border-primary-default);
  border-radius: var(--radius-sm); background: var(--bt-surface-primary-light);
}
.tp-dropzone-text {
  font-size: var(--text-xs); color: var(--bt-text-primary-emphasis);
  text-align: center;
}
```

### 11.7 Edit Panel Segmented Tabs

```css
.ep-tabs {
  display: inline-flex; align-self: flex-start;
  background: var(--bt-surface-primary-subtle);
  border: 1px solid var(--bt-border-primary-default);
  border-radius: var(--radius-md); padding: var(--space-2xs); flex-shrink: 0;
}
.ep-tab {
  padding: var(--space-sm) var(--space-md);
  border-radius: var(--radius-sm); border: 1px solid transparent;
  font-size: var(--text-xs); font-weight: 400; line-height: var(--lh-xs);
  background: var(--bt-surface-tab-default); cursor: pointer; transition: background 0.12s;
}
.ep-tab:hover:not(.is-active) { background: var(--bt-surface-tab-hover); }
.ep-tab.is-active {
  background: var(--bt-surface-brand-subtle);
  color: var(--bt-primary-default);
  border-color: var(--bt-primary-default);
}
```

### 11.8 Chips / Multiselect

```css
.tt-chip {
  display: inline-flex; align-items: center; justify-content: center; gap: 2px;
  background: var(--bt-surface-primary-subtle);
  border: 1px solid var(--bt-border-primary-default);
  border-radius: 4px; padding: 2px 4px;
  font-size: 12px; font-weight: 400;
  color: var(--bt-text-primary-default); white-space: nowrap;
}
```

### 11.9 Text Editor (Rich Text Toolbar)

```css
.tt-editor { display: flex; flex-direction: column; }
.tt-toolbar {
  display: flex; align-items: center; gap: 8px;
  padding: 4px 16px; height: 40px;
  background: var(--bt-surface-primary-subtle);
  border: 1px solid var(--bt-border-primary-default);
  border-radius: var(--radius-md) var(--radius-md) 0 0; flex-shrink: 0;
}
.tt-tool-btn {
  display: flex; align-items: center; justify-content: center;
  width: 20px; height: 20px; padding: 2px; border-radius: 2px;
  border: none; background: transparent; cursor: pointer;
  font-size: 12px; font-weight: 700; color: var(--bt-text-primary-default);
}
.tt-tool-btn:hover { background: rgba(0,0,0,0.08); }
.tt-tool-btn.is-active { background: rgba(0,0,0,0.10); }
.tt-body {
  min-height: 160px; padding: 6px 12px; font-size: 12px;
  color: var(--bt-text-primary-default); outline: none; line-height: 1.5;
  background: var(--bt-surface-primary-default);
  border: 1px solid var(--bt-border-primary-default); border-top: none;
  border-radius: 0 0 var(--radius-md) var(--radius-md);
}
.tt-body:empty::before { content: "Açıklama giriniz..."; color: var(--bt-text-primary-muted); pointer-events: none; }
```

---

## 12. Activity Cards (Edit Panel Sağ Sütun)

```css
.ep-act-card {
  width: 100%; flex-shrink: 0;
  background: var(--bt-surface-primary-default);
  border: 1px solid var(--bt-border-primary-default);
  border-radius: var(--radius-sm); overflow: hidden;
}

/* Header — tıklanabilir, collapse/expand */
.ep-act-card__header {
  display: flex; align-items: flex-start; justify-content: space-between;
  cursor: pointer;
  padding: var(--space-md) var(--space-xs) var(--space-md) var(--space-3xl);
}

/* Avatar */
.ep-act-card__avatar {
  width: 28px; height: 28px; border-radius: var(--radius-full);
  border: 1px solid var(--bt-border-primary-default);
  display: flex; align-items: center; justify-content: center;
  font-size: var(--text-xs); font-weight: 500; flex-shrink: 0;
}
.ep-act-card__avatar--blue { background: var(--bt-primary-default); color: var(--bt-text-primary-inverted); }
.ep-act-card__avatar--gray { background: var(--bt-surface-primary-subtle); color: var(--bt-text-primary-default); }

/* Chevron toggle */
.ep-act-card__chevron {
  display: flex; align-items: center; justify-content: center;
  width: 28px; height: 28px; border-radius: var(--radius-sm);
  color: var(--bt-icon-primary-strong); background: none; border: none; cursor: pointer;
}
.ep-act-card__chevron i { transition: transform 0.25s ease; display: block; }
.ep-act-card.is-open .ep-act-card__chevron i { transform: rotate(180deg); }

/* Body — collapsible max-height animasyonu */
.ep-act-card__body {
  display: flex; flex-direction: column; gap: var(--space-2xl);
  overflow: hidden; max-height: 0; padding: 0 var(--space-3xl);
  box-shadow: inset 0 1px 0 var(--bt-border-primary-default);
  transition: max-height 0.3s ease, padding 0.3s ease;
}
.ep-act-card.is-open .ep-act-card__body {
  max-height: 500px; padding: var(--space-2xl) var(--space-3xl);
}

/* Log değişim gösterimi: "alan: eskiDeger → yeniDeger" */
.ep-act-card__log .from { font-weight: 500; color: var(--bt-primary-default); }
.ep-act-card__log .to   { font-weight: 500; color: var(--color-activity-success); }
/* Ok işareti: move-down iconu, -90deg döndürülmüş → sağa ok */
.ep-log-arrow { transform: rotate(-90deg); }
```

---

## 13. Overlay & Dialog

### Alert Dialog (`.bt-adlg`)

Figma kaynağı: node `625:1451` — 4 Type × 2 Button Position × 3 Button Segments. Kullanıcıdan tek bir kritik kararı isteyen, arka plan etkileşimini bloklayan sabit 420px modal. Dialog'un (`.bt-dialog`) aksine form alanı / header bar taşımaz: yalnızca ikon + başlık + açıklama + footer butonları.

> **Not — eski `.alert-dialog` / `.alert-dialog__pictogram` implementasyonu terk edildi.** Eski versiyon "daire içinde daire" bir pictogram ve hardcoded hex renkler kullanıyordu; güncel `.bt-adlg` tek katmanlı 32×32 renkli badge + tamamen token'lı renk seti kullanır ve ikonu global `.bt-icon` wrapper'ıyla render eder (component-özel icon slot class'ı yok — CLAUDE.md "İkon Wrapper Standardı").

**Markup**

```html
<!-- Type=Error, Horizontal buttons, 2 segments -->
<div class="bt-adlg bt-adlg--error bt-adlg--horizontal bt-adlg--seg-2">
  <div class="bt-adlg__body">
    <div class="bt-adlg__icon-wrap">
      <span class="bt-icon">
        <!-- SVG'ye width/height YAZILMAZ — .bt-icon svg kuralı 16×16 zorlar -->
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>
      </span>
    </div>
    <div class="bt-adlg__text">
      <p class="bt-adlg__title">Title Text Here</p>
      <div class="bt-adlg__desc"><p>Description for additional information…</p></div>
    </div>
  </div>
  <div class="bt-adlg__footer">
    <!-- Reuse edilen Button component'i — bespoke buton yazılmaz -->
    <button class="bt-btn bt-btn--sm bt-btn--base-flat" type="button">Cancel</button>
    <button class="bt-btn bt-btn--sm bt-btn--error-solid" type="button">Delete</button>
  </div>
</div>
```

**Modifier class'ları**

- Type: `bt-adlg--information` / `bt-adlg--success` / `bt-adlg--warning` / `bt-adlg--error` — yalnızca ikon badge zemin+renk token'ını ve Confirm butonun solid class'ını değiştirir.
- Button position: `bt-adlg--horizontal` (butonlar sağa hizalı, her biri 80px) / `bt-adlg--vertical` (tam genişlik, üst üste).
- Segment sayısı: `bt-adlg--seg-1` / `bt-adlg--seg-2` / `bt-adlg--seg-3` — vertical düzende seg-2/3 butonları `align-items: flex-end`, seg-1 `justify-content: center`.

**Buton sırası** (Confirm = tipe göre solid, diğerleri `bt-btn--base-flat`)

- **Vertical:** Confirm en üstte, ghost(lar) altta. seg-1 → sadece Confirm; seg-2 → Confirm + Cancel; seg-3 → Confirm + 2 ghost.
- **Horizontal:** ghost(lar) solda, Confirm sağda. seg-1 → sadece Confirm; seg-2 → Cancel + Confirm; seg-3 → 2 ghost + Confirm.

**CSS Tokens**

| Element | Property | Token | Fallback |
|---|---|---|---|
| Konteyner `.bt-adlg` | Width | — | 420px |
| Konteyner | Background | `--bt-base-default` | #ffffff |
| Konteyner | Border radius | `--bt-radius-md` | 6px |
| Konteyner | Shadow | `--bt-shadow-md` | 0 2px 4px… / 0 4px 8px… |
| Konteyner | Overflow | — | hidden (footer kenarlığı köşeye taşmasın) |
| Body `.bt-adlg__body` | Padding | `--bt-space-3xl` | 20px |
| Body | Gap (icon ↔ text) | `--bt-space-md` | 8px |
| Body | Hizalama | — | yatay + dikey ortalı (flex column) |
| Icon badge `.bt-adlg__icon-wrap` | Size | — | 32×32 |
| Icon badge | Radius | `--bt-radius-full` | 9999px |
| Icon badge · Information | Background / Color | `--bt-primary-subtle` / `--bt-icon-information-default` | #e2edfc / #0d4e97 |
| Icon badge · Success | Background / Color | `--bt-success-subtle` / `--bt-icon-success-default` | #daede5 / #2d584b |
| Icon badge · Warning | Background / Color | `--bt-warning-subtle` / `--bt-icon-warning-default` | #f9f2ce / #aa820a |
| Icon badge · Error | Background / Color | `--bt-error-subtle` / `--bt-icon-error-default` | #fde6e6 / #b31d38 |
| Icon (`.bt-icon` içinde) | Size | — | 16×16 (global `.bt-icon svg`), badge `color`'ını `currentColor` ile miras alır |
| Text `.bt-adlg__text` | Gap (title ↔ desc) | `--bt-space-xs` | 4px |
| Title `.bt-adlg__title` | Font | `--bt-title-sm-medium` | 500 14px/16px |
| Title / Description | Color | `--bt-text-primary-default` | #1a1a1a |
| Description `.bt-adlg__desc` | Font | `--bt-text-xs-regular` | 400 12px/16px |
| Footer `.bt-adlg__footer` | Border top | `--bt-border-primary-muted` | #e6e6e6 |
| Footer | Padding | `--bt-space-xl` / `--bt-space-2xl` | 12px / 16px |
| Footer | Gap | `--bt-space-md` | 8px |
| Confirm button | Class | — | `bt-btn bt-btn--sm bt-btn--{type}-solid` (information → `--primary-solid`) |
| Confirm · Horizontal | Width | — | 80px |
| Confirm · Vertical | Width | — | 100% |
| Cancel / üçüncül | Class | — | `bt-btn bt-btn--sm bt-btn--base-flat` |

**JS Davranışı**

Alert Dialog bir modal backdrop içinde açılır (z-index: overlay katmanı, bkz. §17). **Overlays grubu ortak backdrop'u:** `background: rgba(0,0,0,0.4)` + `backdrop-filter: blur(4px)` (`-webkit-` dahil) — Alert Dialog, Dialog ve Drawer (`.bt-win-overlay`) aynı değerleri paylaşır. Backdrop'a veya `data-*-close` attribute'lu herhangi bir butona tıklamak dialog'u kapatır — açılış/kapanış deseni Dialog (§15.4) ile birebir aynı: `appendChild` → reflow (`void host.offsetHeight`) → `is-visible` class'ı; kapanışta class kaldır → `setTimeout(remove, 200)`. Aynı anda birden fazla Alert Dialog açılmaz.

### Toast / Alert Banner

```css
.tt-alert-wrap {
  position: fixed; top: 0; left: 50%;
  transform: translateX(-50%) translateY(-120%);
  z-index: 9500; width: 520px; max-width: calc(100vw - 32px);
  padding-top: 16px; opacity: 0; pointer-events: none;
  transition: transform 0.32s cubic-bezier(0.4,0,0.2,1), opacity 0.28s ease;
}
.tt-alert-wrap.is-visible {
  transform: translateX(-50%) translateY(0);
  opacity: 1; pointer-events: all;
}
.tt-alert {
  display: flex; align-items: center; width: 100%;
  background: #e8f3ee; border: 1px solid #2d584b;
  border-radius: var(--radius-xs); box-shadow: 0 4px 12px rgba(0,0,0,0.12);
}
```

### Confetti Animasyonu

```css
.tt-confetti-wrap {
  position: fixed; top: 0; left: 0; width: 100%; height: 100%;
  pointer-events: none; z-index: 9300; overflow: hidden;
}
.tt-confetti-piece {
  position: absolute; top: -20px; will-change: transform, opacity;
  /* Her parça JS ile random renk, boyut, animasyon süresi alır */
}
@keyframes confettiFall {
  0%   { transform: translateY(0) rotate(0deg); opacity: 1; }
  80%  { opacity: 1; }
  100% { transform: translateY(110vh) rotate(680deg); opacity: 0; }
}
@keyframes confettiSway {
  0%   { margin-left: 0px; }
  25%  { margin-left: 20px; }
  75%  { margin-left: -20px; }
  100% { margin-left: 0px; }
}
```

---

## 14. Dashboard (Kontrol Paneli)

```css
.dp-body {
  flex: 1; overflow-y: auto; padding: 24px 28px;
  display: flex; flex-direction: column; gap: 14px;
  background: var(--bt-surface-primary-subtle);
}

/* KPI satırı — auto-fit grid */
.dp-kpi-row {
  display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: var(--space-xl);
}

/* KPI kart: header + body split (aynı border, border-top yok) */
.dp-kpi-header {
  background: var(--bt-surface-primary-light);
  border: 1px solid var(--bt-border-primary-default);
  border-top-left-radius: var(--radius-md); border-top-right-radius: var(--radius-md);
  display: flex; align-items: center; gap: var(--space-xs);
  padding: var(--space-sm) var(--space-xl);
}
.dp-kpi-body {
  background: var(--bt-surface-primary-default);
  border: 1px solid var(--bt-border-primary-default); border-top: none;
  border-bottom-left-radius: var(--radius-md); border-bottom-right-radius: var(--radius-md);
  padding: var(--space-xl); display: flex; flex-direction: column; gap: var(--space-xs);
}
.dp-kpi-value {
  font-family: var(--font-title); font-weight: 500;
  font-size: var(--text-5xl); line-height: var(--lh-5xl);
  color: var(--bt-text-primary-default);
}
.dp-kpi-desc--error   { color: var(--bt-text-error-default); }
.dp-kpi-desc--success { color: var(--bt-text-success-default); }

/* Grafik satırı — auto-fit */
.dp-charts-row {
  display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 12px; align-items: stretch;
}

/* Grafik kartları — aynı header/body split */
.dp-status-header {
  background: var(--bt-surface-primary-light);
  border: 1px solid var(--bt-border-primary-default);
  border-top-left-radius: var(--radius-md); border-top-right-radius: var(--radius-md);
  padding: var(--space-sm) var(--space-xl);
}
.dp-status-body {
  background: var(--bt-surface-primary-default);
  border: 1px solid var(--bt-border-primary-default); border-top: none;
  border-bottom-left-radius: var(--radius-md); border-bottom-right-radius: var(--radius-md);
  padding: var(--space-3xl); flex: 1;
  display: flex; align-items: center; justify-content: center;
}
.dp-col-chart { width: 100%; height: 190px; display: block; overflow: visible; }
.dp-row-chart { width: 100%; height: auto; display: block; overflow: visible; }
```

---

## 15. Login Sayfası

### İki Sütun Layout

```css
.login-page { display: flex; height: 100vh; min-height: 600px; }

/* Sol (%62) — beyaz, form */
.panel--left {
  flex: 1 1 62%; display: flex; align-items: center; justify-content: center;
  background: var(--background-color-primary); padding: 40px 32px;
}
.form-wrapper { width: 100%; max-width: 361px; }

/* Sağ (%38) — animasyonlu gradient, marka rengi */
.panel--right {
  flex: 0 0 38%; max-width: 730px;
  position: relative; overflow: hidden;
  background: var(--brand-bg); /* #05238b */
  background-image:
    radial-gradient(circle clamp(300px,24vw,920px) at var(--gx) var(--gy), rgba(2,239,254,0.45) 0%, transparent 68%),
    radial-gradient(ellipse 75% 55% at 118% -8%,  rgba(2,239,254,0.18) 0%, transparent 60%),
    radial-gradient(ellipse 90% 65% at -12% 112%, rgba(18,14,207,0.30) 0%, transparent 55%);
}
```

### Sağ Panel — Animated Gradient Orbs

5 adet orb: #02EFFE (cyan) ve #308FFF (sky blue), blur:70px, `will-change:transform`, birbirinden farklı `ease-in-out infinite alternate` animasyonlar.

```css
.g-orb { position: absolute; border-radius: 50%; filter: blur(70px); will-change: transform; opacity: 0.75; }
.g-orb--1 { width:520px; height:520px; top:-15%; left:-20%; background: radial-gradient(circle,#02EFFE 0%,rgba(2,239,254,0.4)55%,transparent 100%); animation: gorb1 16s ease-in-out infinite alternate; }
/* ... gorb2–gorb5 benzer şekilde */
```

### CSS Hover Grid (Mouse Tracking — JS gerektirmez)

`@property --gx / --gy` + 4×4 `div.hz` grid + CSS `:has()` ile hover'a göre gradient pozisyonu değişir:

```css
@property --gx { syntax: '<percentage>'; inherits: false; initial-value: 50%; }
@property --gy { syntax: '<percentage>'; inherits: false; initial-value: 40%; }
.panel--right { transition: --gx 0.45s ease, --gy 0.45s ease; }
.hover-grid { position:absolute; inset:0; display:grid; grid-template-columns:repeat(4,1fr); grid-template-rows:repeat(4,1fr); z-index:10; }
.panel--right:has(.hz:nth-child(1):hover)  { --gx: 12%; --gy: 12%; }
/* ... 16 hücreye kadar devam eder */
```

---

## 16. Dropdown & Popup Ortak Kalıplar

Tüm açılır menüler aynı göster/gizle animasyonunu kullanır:

```css
.some-menu {
  opacity: 0; pointer-events: none;
  transform: translateY(-6px) scale(0.97);
  transform-origin: top right;
  transition: opacity 0.18s ease, transform 0.18s ease;
}
.some-menu.is-open {
  opacity: 1; pointer-events: all;
  transform: translateY(0) scale(1);
}
```

Dropdown gölgesi:
```css
box-shadow: 0px 2px 4px rgba(16,24,40,0.06), 0px 4px 8px rgba(16,24,40,0.10);
```

---

## 17. Z-Index Katmanları

| Katman                   | z-index |
|--------------------------|---------|
| Kolon filter panel       | 400     |
| Kolon visibility menu    | 500     |
| Panel overlay (backdrop) | 100     |
| Filter panel             | 101     |
| Edit panel               | 200     |
| Task panel               | 201     |
| TT Panel overlay         | 201     |
| TT Panel                 | 202     |
| User widget (overflow)   | 50      |
| Confetti                 | 9300    |
| Alert banner             | 9500    |
| Alert dialog             | 10000   |
| Talep Durumu dialog      | 9000    |

---

## 18. Genel Shadow Tokenları

```css
/* shadow/sm */
box-shadow: 0px 1px 2px rgba(16,24,40,0.06), 0px 1px 3px rgba(16,24,40,0.10);

/* shadow/md */
box-shadow: 0px 2px 4px rgba(16,24,40,0.06), 0px 4px 8px rgba(16,24,40,0.10);

/* shadow/lg */
box-shadow: 0 4px 6px rgba(16,24,40,0.03), 0 12px 16px rgba(16,24,40,0.08);

/* Panel header shadow */
box-shadow: 0px 2px 3px rgba(0,0,0,0.08);

/* Edit panel collapsed shadow */
box-shadow: -12px 0 32px 0 rgba(0,0,0,0.18);
```

---

## 19. Yeni Proje Başlatma Checklist

1. Lucide script tag'ini `<head>` veya `<body>` sonuna ekle
2. Google Fonts: Inter + Geist (dashboard için), sadece Inter (login için)
3. Bu dosyadaki token bloğunu (`section 3`) `:root {}` içine kopyala
4. Reset bloğunu (`section 4`) ekle
5. `html, body { height: 100%; overflow: hidden; }` — tüm layout buna bağlı
6. `lucide.createIcons()` çağrısını sayfa sonuna ekle
7. Sidebar için `width: 280px` sabit, collapse state'i `is-collapsed` class'ı ile yönet
8. Tüm paneller `transform: translateX(100%)` → `translateX(0)` geçişiyle açılır
9. Açılır menüler `opacity+transform` animasyonu, `[hidden]` attribute veya `is-open` class'ı ile kontrol edilir
10. Tablo satır yüksekliği: header `36px`, data `32px`, toolbar `40px`, page-header `36px`

---

## 20. Token Reference Düzeltmeleri (MobileDesignSystem Denetiminden)

MobileDesignSystem docs sitesindeki 13 bileşen (Alert, Alert Dialog, Dialog, Bottom Sheet,
Accordion, Avatar, Badge, Switch, Button, Button Dock, Icon Button, Card, Bottom Tab Bar,
TextBox) satır satır taranıp render kodundaki ham hex/px değerler `var(--bt-*, fallback)`'a
çevrilirken bulunan, **bu token sistemini kullanan her projede geçerli** hatalar/tuzaklar:

### 20.1 Var olmayan (phantom) token isimleri

Figma'nın ham değişken yolu bazı yerlerde CSS custom property adıymış gibi kullanılmış,
ama böyle bir `--bt-*` değişkeni **tanımlı değil**:

| Yanlış / var olmayan | Doğrusu | Değer |
|---|---|---|
| `--bt-surface-brand-contrast-default` | `--bt-surface-brand` (alias → `--bt-surface-brand-default`) | Blue/700 · `#0d4e97` |

Figma path'i (`Surface Colors/Brand/--bt-surface-brand-contrast-default` gibi) sadece
kaynak izlenebilirliği için yorum/dokümantasyon metni olarak tutulabilir, ama gerçek
`var(...)` çağrısında **her zaman** gerçekten tanımlı token adı kullanılmalı.

### 20.2 Yanlış seviye seçilen semantic token

`--bt-text-error-emphasis` = Red/300 = `#f7aaae` (soluk pembe) — hata mesajı/description
metni için kullanılırsa yanlış olur, çünkü görsel olarak koyu kırmızı (`#b31d38`) bekleniyor.
Koyu kırmızı metin için doğru token: `--bt-text-error` (alias → `--bt-text-error-default`,
Red/700). Aynı tuzak `-emphasis` (300 seviyesi) ile `-default`/`-solid` (700/600 seviyesi)
arasında her renk ailesinde (error/success/warning/brand) tekrar edebilir — seviyeyi
her zaman gerçek render edilmiş rengin hex'iyle karşılaştırarak doğrula.

### 20.3 Icon token'ları border/surface'tan ayrı bir aile

`--bt-icon-{category}-default` kendi başına bir token ailesidir (`--bt-icon-error-default`,
`--bt-icon-warning-default`, vb.) — çoğu zaman `--bt-border-{category}-default` ile aynı
hex'e çözülür (örn. ikisi de Red/700) ama **semantik olarak farklı token'lardır**. Bir
ikonun rengini class'landırırken border token'ını ödünç almak yerine kendi icon token'ını
kullan.

### 20.4 Line-height her zaman bir token'a denk gelmeyebilir

Typography token'ları (`--bt-text-sm-regular` vb.) font-weight + font-size + line-height'ı
tek bir composite `font` shorthand'ında birlikte taşır (Text/sm ailesi = 14px/16px, Text/md
ailesi = 16px/24px). Bazı component'lerde (örn. Alert Dialog description'ı, Accordion
body'si) description metninin line-height'ı **20px** olarak Figma'da manuel override
edilmiş — bu çift (font-size + 20px) skaladaki hiçbir composite token'a denk gelmiyor.
Böyle durumlarda en yakın token'ı zorla bağlamak (örn. `var(--bt-text-sm-regular, 400
14px/20px var(--font))` gibi fallback'i kırpıp gerçek token'ı kullanmak) **sessizce yanlış
render** üretir, çünkü fallback değil gerçek token değeri (16px) uygulanır. Kural:
size+lh çifti tam eşleşiyorsa composite token'ı kullan, eşleşmiyorsa `font-size` +
`line-height`'ı ayrı ayrı literal px olarak yaz ve yanına kısa bir yorum düş.

### 20.5 Alert Notification (banner) — doğrulanmış tam spec

Figma Desktop Bridge ile Stroke/Light/Filled × 4 tip tek tek doğrulandı:

```
Stroke  bg=--bt-surface-primary-default(#fff)  border=--bt-border-primary-default(#d4d4d4)
        text=--bt-text-primary-default          icon=--bt-icon-{type}-default
Light   bg=--bt-surface-{type}-light            border=--bt-border-{type}-default
        text=--bt-text-primary-default (DEĞİŞMEZ, tint olmuyor)
Filled  bg=--bt-surface-{type}-default          border=none
        text=--bt-text-inverted (title VE description aynı opaklıkta beyaz — %85 fade YOK)
        icon=--bt-icon-inverted

İkon slotu: 40×40 hit-area, --bt-space-md (8px) padding → 24×24 gerçek ikon boyutu
Title:  --bt-title-md-regular (16/24)   Description: --bt-text-sm-regular (14/16)
```

Success/Light arka planı `--bt-surface-success-light` = Green/50 = `#e8f3ee`'dir —
`#daede5` (Green/100) ile karıştırılmamalı.

---

## 21. Playground / Component Preview Toolbar Deseni (MobileDesignSystem docs sitesi)

> Bu bölüm **Medusa Dashboard'a değil**, `MobileDesignSystem\docs` (Bentas DS component
> dokümantasyon sitesi) projesine özeldir. Genel referans olarak bırakıldı — ileride
> benzer bir "component preview / playground" ihtiyacı çıkarsa örnek alınabilir.

Nord Health (nordhealth.design) tarzı, Figma "Playground" toolbar'ından (Bentas DS node
`375:27788`) uyarlanmış, tekrar kullanılabilir bir motor: `docs/js/playground.js` →
`registerPlayground({...})`. Tek bir çağrı, hem `Overview` sekmesinin üstünde hem
`Examples` sekmesinde otomatik render edilen tam bir preview bloğu üretir.

### Toolbar kontrolleri

Toolbar **sabit** bir buton seti gösterir — `config.props`'taki tekil prop dropdown'ları
VE Variant seçici artık toolbar'da hiç render edilmez, hepsi Properties butonunun açtığı
drawer'a taşındı (kullanıcı kararı, 2026-08-07: "diğer component'lerde Variant properties'e
dahil edilmemiş, bu da properties'de gelmeli" — bkz. HISTORY.md; eskiden sadece Variant
toolbar'da ayrı bir dropdown olarak kalmıştı). Toolbar sırası artık sabit ve component'ten
component'e değişmiyor: Properties → Measure → Viewport → Isolation mode → (opsiyonel)
Click Me. **Properties, Measure, Viewport ve Isolation mode** her zaman icon+label
(`pgd-icon-btn pgd-icon-btn--labeled`) stilinde — sadece aktifken değil, varsayılan
halde de etiket görünür (eskiden bu 4 buton karışık bir şekilde bazıları sadece ikon
bazıları sadece aktifken etiketli render ediliyordu ve `config.props` toolbar'ı
component başına değişken sayıda dropdown'la dolduruyordu).

1. **Properties** — Variant seçimi de dahil TÜM konfigürasyon artık burada, tek yerde.
   Buton `config.props`'u çözümleyen prop listesi boş DEĞİLSE **YA DA**
   `config.variants.length > 1` ise render edilir (`_pgdCurrentProps.length > 0 ||
   config.variants.length > 1`) — sadece variant'ı olup hiç prop'u olmayan sayfalarda
   (örn. Sidebar'ın "Item States" örnekleri) bile Properties butonu görünür, aksi halde
   variant seçimine ulaşacak hiçbir yol kalmazdı. Tıklanınca preview'ın sağında 208px'lik
   bir drawer (`.pgd-drawer`) açılır/kapanır. Görsel tasarım Figma node `799:4657`
   ("Properties" paneli, Bentas-DS dosyası, kullanıcının kendi hazırladığı örnek) birebir
   referans alınarak yapıldı: drawer header'ı ve grup başlıkları (örn. "Header", "Body
   Title/Subtitle") düz `--bt-text-sm-medium` (14px) siyah metin
   (`.pgd-drawer__title`/`.pgd-drawer__group-label` — eskiden 11px uppercase muted
   "eyebrow" stiliydi), her grup `--bt-space-xl`(12px) dikey + `--bt-space-md`(8px) yatay
   padding + `--bt-space-sm`(6px) satır arası gap ile kendi altında border'a sahip. Her
   prop kontrolü (Variant dahil) Figma'nın **"Base Input"** komponeti: `.pgd-drawer-input`
   — sabit 28px yükseklik, `--bt-border-primary-default` border, sol tarafta muted label
   (`--bt-text-primary-strong`, örn. "Show"), sağa yaslı güçlü-renk değer
   (`--bt-text-primary-default`, örn. "On"), sağ kenara flush 28×28 chevron ikonu
   (`.pgd-drawer-input__label`/`__value`/`__icon`). Variant kendi (etiketsiz) grubunda,
   drawer'ın EN ÜSTÜNDE, diğer tüm gruplardan önce render edilir. Eski toolbar'a özel
   `.pgd-variant-btn`/`.pgd-prop-label` CSS class'ları artık hiçbir yerde kullanılmadığı
   için kaldırıldı — TEK bir prop-kontrol görsel dili kaldı (`.pgd-drawer-input`), hem
   Variant hem diğer prop'lar için. Bir prop'a opsiyonel `group: 'Etiket'` verilirse aynı
   grup drawer'da kendi başlığı altında toplanır — birden fazla prop kümesi aynı isimli
   kontrolleri (örn. Card'ın Header VE Body Title/Subtitle'ının ikisinin de
   Position/Subtitle/Left-Right Control'ü olması) tekrarlıyorsa karışmalarını önlemek
   için (bkz. §Card 16). `group` set edilmezse prop'lar drawer'da tek grup gibi (bölüm
   başlığı/ayraç olmadan, tek düz liste) art arda sıralanır. Drawer açıkken preview +
   drawer yan yana (`.pgd-viewer-split`) durur; drawer `max-height:460px` ile preview
   kutusuyla aynı sabit yüksekliğe kırpılır ve taşan içerik kendi içinde scroll olur —
   playground'ın dış yüksekliği Properties açık/kapalı fark etmeksizin sabit kalır.

   **`group` kullanım kuralı — ZORUNLU (kullanıcı kararı, 2026-08-07):** `prop.group`
   Card'a özel bir istisna değil, **karmaşık (multi-section) component'ler için proje
   standardı**. Header/Body/Footer gibi birbirinden ayrı, kendi içinde birden fazla
   prop barındıran mantıksal bölümleri olan component'lerde (Card, Dialog gibi) her
   bölüm kendi `group` adıyla (örn. `group: 'Header'`, `group: 'Footer'`) etiketlenmeli
   — bu, drawer'da bölüm başlıklarıyla ayrılmış, taranabilir bir liste üretir. Buna
   karşılık Button gibi TEK bir mantıksal yapılandırma yüzeyi olan basit component'lerde
   (Theme/Size/Content/State gibi düz bir prop listesi) `group` HİÇ kullanılmamalı —
   drawer'da gereksiz bölüm ayraçları göstermemesi için tüm prop'lar group'suz
   bırakılmalı, tek düz liste olarak kalmalı. (Not: `_allGroups`'un `prop.group`'u
   normalize etmeden kıyaslaması eskiden bir bug'a yol açıyordu — group'suz component'lerde
   art arda gelen her prop `'' !== undefined` yüzünden kendi ayrı grubuna düşüyor, görünmez
   etiketli ama border'lı sahte bölümler oluşturuyordu; `groupName = prop.group || ''`
   normalize edilerek düzeltildi, bkz. HISTORY.md.)
2. **Measure** — aktifken preview üzerinde hover edilen elementin **content box'ı mavi**
   (ortasındaki `W × H` etiketi **border-box/toplam görünen boyutu** raporlar — content-box
   değil, bkz. aşağıdaki not), **padding'i her kenarda ayrı yeşil şerit** (o kenarın px
   değeri ortada, 0 ise gizli) — klasik DevTools box-model değil, Figma/Nord tarzı
   per-side spacing inspector
3. **Viewport** — buton her zaman ikon+etiket gösterir (etiket = seçili viewport adı,
   varsayılan "Desktop"), preset seçilince aktif pill görünümüne döner ve altında
   düzenlenebilir **W/H px input + swap (⇄) butonu** açılır; frame gerçek cihaz çerçevesi
   gibi (beyaz kutu+border+shadow, sabit width×height, açık gri canvas'ta **sol üstte
   hizalı**). Presetler: Small Mobile 360×780, Large Mobile 414×896, Tablet 768×1024,
   Desktop (sınırsız/ortalanmış eski davranış)
4. **Isolation mode** — her playground'da standarttır, ekstra kurulum gerekmez.
   `pgd_id` varsa `isolation.html?pgd_id=X&variant=Y&prop=Z` açılır; `isolation.html`
   `window.PAGES_WEB` üzerinden `render()` loop'u çalıştırır (ilk eşleşmede durur),
   `_pgdConfigs[pgdId]`'yi bulur ve preview'ı doğrudan render eder. Eski
   `PGD_ISOLATE`-kayıtlı componentler (Sidebar, Alert) `component=X` param'ıyla
   çalışmaya devam eder.
5. **Click Me** (opsiyonel, `config.trigger`) — component'in gerçek çalışma anını
   (ekranın üstünden `filter:blur()` + `translateY` ile smooth slide-in/out) gösteren bir
   toast sistemi tetikler. Art arda tıklanınca toast'lar birbirini **değiştirmez, alt alta
   yığılır** — her biri kendi zamanlayıcısıyla bağımsız kaybolur.

Ayrıca toolbar'ın altında, kutudan **bağımsız** (kendi arka plan/border'ı olmayan, sade)
bir **Preview / Code segmented control** var — component sayfasının "Alert" gibi H1
başlığının hemen altında durur, kutunun İÇİNDE değil.

### Dinamik props (`config.props` bir fonksiyon olabilir)

`config.props` normalde statik bir dizi ama artık `(currentProps) => [...]` şeklinde bir
**fonksiyon** da olabilir (`_pgdResolveProps` helper'ı, `playground.js`) — prop LİSTESİNİN
kendisinin state'e göre değişmesi gerektiği durumlar için (ilk kullanım: Card'ın "Segment N"
grupları, kaç segment aktifse o kadar grup üretiliyor, bkz. §16). Statik dizi kullanan TÜM
diğer playground'lar (Button, Card'ın Header/Body Title-Subtitle/Footer grupları dahil)
hiçbir değişiklik yapmadan çalışmaya devam eder — bu tamamen opt-in bir özellik, geriye dönük
%100 uyumlu.

Fonksiyon her render'da güncel `st.props` ile çağrılır (drawer'daki bir dropdown değiştiğinde
otomatik yeniden hesaplanır); ilk state kurulumunda (`_pgdEnsureState`) henüz hiçbir prop
set edilmemişken boş obje `{}` ile çağrılır — bu yüzden fonksiyonun kendi iç fallback'i
(örn. `p.activeSegments != null ? p.activeSegments : '1'`) ile ilgili prop'un kendi
`default` alanı MUTLAKA aynı değere işaret etmeli, aksi halde ilk render ile prop
değiştikten sonraki render'lar arasında tutarsızlık oluşur.

```javascript
props: (p) => {
  const active = (p.activeSegments != null ? p.activeSegments : '1').split(',').filter(Boolean);
  const dynamicProps = [];
  active.forEach(n => dynamicProps.push({ key: `segNField`, group: `Segment ${n}`, ... }));
  return [ /* sabit prop'lar */ ...dynamicProps ];
}
```

Bir prop artık listede yoksa (örn. bir segment inaktif edildi) drawer'daki grubu kaybolur
ama `st.props` içindeki değeri SİLİNMEZ — segment tekrar aktif edilirse önceki
özelleştirmesi (Left Control, Additional Text vb.) korunmuş olarak geri gelir.

### Kritik kural — component fonksiyonlarının konumu

Playground eklenecek bir bileşenin markup/icon/kod-üretim fonksiyonları `render()`
closure'ı İÇİNDE değil, dosyanın **modül seviyesinde** (top-level `const`/`function`)
tanımlanmalı.

**Web componentleri** (`pages-web.js`): `PAGES_WEB['components/x'] = {...}` şeklinde
ayrı atama, `registerPlayground({id: 'pgd-x-overview', ...})` çağrısı yeterli.
`window.PGD_ISOLATE` kaydı **gerekmez** — isolation mode otomatik çalışır.

**Mobil componentler** (`pages-mobile.js`): `PAGES` literal'inden çıkarılıp dosya
sonuna `PAGES['components/x'] = {...}` olarak taşınır. İzolasyon için
`window.PGD_ISOLATE['componentKey'] = { mount(root, variant, props) {...} }` ile
kayıt yapılması gerekir (eski pattern — henüz pgd_id sistemine geçirilmedi).

### Icon kuralı

Toolbar icon'ları **asla elle yaklaşık çizilmemeli** — Figma'da hangi Lucide icon
kullanılmışsa (bu projede: `chevrons-up-down`, `ruler-dimension-line`, `proportions`,
`square-arrow-out-up-right`, `arrow-left-right`, `mouse-pointer-click`) gerçek path'i
çekilip kullanılmalı:

```bash
curl -sL "https://unpkg.com/lucide-static@latest/icons/<icon-name>.svg"
```

**Not — Measure etiketi content-box yerine border-box (toplam) boyutu raporluyor (2026-08-12):** Kullanıcı, Data Table'ın Header Cell'ini (`height:36px`) Measure ile ölçünce Figma spec'iyle uyuşmayan bir değer (34px) gördüğünü bildirdi. Kök neden implementasyon hatası değildi: `_pgdMeasureMove`'daki `contentBox` hesaplaması hover edilen elementin KENDİ border'ını çıkarıyordu (`contentBox.height = padBox.height - paddingTop - paddingBottom`, `padBox.height = borderBoxHeight - borderTop - borderBottom`) — kendi border'ı olan (padding'i olmayan) bir elementte bu, etikette gösterilen sayının Figma'nın frame yüksekliğinden (stroke dahil, CSS border-box'a denk gelir) tam border genişliği kadar (Header Cell'de 2px, üst+alt border; Grid Cell'de 1px, sadece alt border) eksik çıkmasına yol açıyordu — bu, sadece Grid'e özel değil, kendi border'ı olan HERHANGİ bir component'te (örn. Card'ın `.bt-card`'ı) aynı şekilde yaşanır. Kullanıcı bunu site geneli bir düzeltme olarak istedi: mavi content-box'ın kendisi (padding şeritlerine referans için) ve pozisyonu DEĞİŞMEDİ, sadece ortasındaki `W × H` etiketinin kaynağı `contentBox.width/height`'ten fonksiyonun başında zaten hesaplanan `b.width/b.height`'e (`el.getBoundingClientRect()`, border-box) çevrildi — tek satırlık, tüm playground'ları aynı anda düzelten merkezi bir değişiklik. `docs/js/playground.js` güncellendi.

---

## 12. Upload

Dosya yükleme bileşeni. Drop Zone + Upload File parçalarından oluşur. Tamamen interaktif — gerçek dosya seçimi, progress animasyonu, success/failed state yönetimi. İki tip destekler: **Standart Upload** (§12.1, tek satır dropzone) ve **External Drop Zone** (§12.4, dikey/vurgulu drop kutusu) — ikisi de aynı Upload File (§12.2) ve Upload container (§12.3) yapı taşlarını, aynı Default/Single/Multiple segment modlarını ve aynı JS state machine'ini (§12.5) paylaşır.

### 12.1 Drop Zone (`.bt-dropzone`)

`Select Files` butonu `bt-btn bt-btn--xs bt-btn--primary-ghost` component'idir. İkonlar inline SVG.

```html
<!-- Default -->
<div class="bt-upload">
  <input type="file" multiple class="bt-upload__input" style="display:none"
    onchange="btUplStartUpload(this.closest('.bt-upload'), Array.from(this.files)); this.value=''">
  <div class="bt-dropzone"
    ondragover="event.preventDefault()"
    ondrop="btUplDrop(this, event)">
    <div class="bt-dropzone__inner">
      <button class="bt-btn bt-btn--xs bt-btn--primary-ghost"
        onclick="this.closest('.bt-upload').querySelector('.bt-upload__input').click()">Select Files</button>
      <div class="bt-dropzone__status">
        <span>Drag and drop files here to upload</span>
      </div>
    </div>
  </div>
  <div class="bt-upload__files"></div>
</div>
```

**State modifiers:** `bt-dropzone--uploading` | `bt-dropzone--completed` | `bt-dropzone--failed` | `bt-dropzone--disabled`

**Status icons (inline SVG, 16×16):**
- Uploading: `arrow-up-from-line`
- Completed: `circle-check`
- Failed: `circle-alert`
- Disabled: `<button ... disabled>` → `bt-btn--primary-ghost:disabled` otomatik muted renk verir

```css
.bt-dropzone {
  display: flex; flex-direction: column;
  border: 1px dashed var(--bt-border-primary-default, #d4d4d4);
  border-radius: var(--bt-radius-sm, 4px);
  background: var(--bt-surface-primary-subtle, #f5f5f5);
  width: 100%;
}
.bt-dropzone__inner {
  display: flex; align-items: center; justify-content: center;
  gap: var(--bt-space-xs, 4px); padding: var(--bt-space-md, 8px);
}
/* Select Files butonu gerçek design system button'u — sadece underline eklenir */
.bt-dropzone .bt-btn { text-decoration: underline; }
.bt-dropzone__status {
  display: flex; align-items: center; gap: var(--bt-space-xs, 4px);
  font: var(--bt-text-xs-regular, 400 12px/16px var(--font));
  color: var(--bt-text-primary-default, #1a1a1a); white-space: nowrap;
}
.bt-dropzone--disabled  .bt-dropzone__status { color: var(--bt-text-primary-muted, #a3a3a3); }
.bt-dropzone--uploading .bt-dropzone__status { color: var(--bt-text-brand-default, #0d4e97); }
.bt-dropzone--completed .bt-dropzone__status { color: var(--bt-text-success-default, #2d584b); }
.bt-dropzone--failed    .bt-dropzone__status { color: var(--bt-text-error-default, #b31d38); }
.bt-dropzone__status-icon { display: flex; align-items: center; justify-content: center; width: 16px; height: 16px; flex-shrink: 0; }
.bt-dropzone__status-icon svg { width: 16px; height: 16px; }
```

### 12.2 Upload File (`.bt-upload-file`)

İkon ve butonlar inline SVG. Action butonları `bt-upload-file__btn` custom class'ıdır (24×24px icon button).

```html
<!-- Uploading -->
<div class="bt-upload-file">
  <div class="bt-upload-file__content">
    <div class="bt-upload-file__icon"><!-- file SVG --></div>
    <div class="bt-upload-file__info">
      <span class="bt-upload-file__name">Document.pdf</span>
      <span class="bt-upload-file__size">225.68 KB</span>
    </div>
    <div class="bt-upload-file__controls">
      <span class="bt-upload-file__pct">%25</span>
      <button class="bt-upload-file__btn" onclick="btUplRemove(this)"><!-- x SVG --></button>
    </div>
  </div>
  <div class="bt-upload-file__progress">
    <div class="bt-upload-file__progress-fill" style="width:25%"></div>
  </div>
</div>

<!-- Success: bt-upload-file--success + size text değişir + pct/bar kalkar -->
<!-- Failed:  bt-upload-file--failed  + size text değişir + retry(rotate-cw) + x buton -->
```

**Right controls per state:**
- Uploading: `%25` pct + `x` butonu + progress bar
- Success: `x` butonu (pct + bar kalkar)
- Failed: `rotate-cw` butonu + `x` butonu (pct + bar kalkar)

```css
.bt-upload-file { display: flex; flex-direction: column; gap: var(--bt-space-xs, 4px); width: 100%; }
.bt-upload-file__content { display: flex; align-items: center; gap: var(--bt-space-xs, 4px); width: 100%; }
.bt-upload-file__icon { display: flex; align-items: center; justify-content: center; width: 24px; height: 24px; flex-shrink: 0; color: var(--bt-text-primary-default, #1a1a1a); }
.bt-upload-file__icon svg { width: 16px; height: 16px; }
.bt-upload-file__info { display: flex; flex-direction: column; gap: var(--bt-space-2xs, 2px); flex: 1 0 0; min-width: 0; }
.bt-upload-file__name { font: var(--bt-text-xs-regular, 400 12px/16px var(--font)); color: var(--bt-text-primary-default, #1a1a1a); }
.bt-upload-file__size { font: var(--bt-text-2xs-regular, 400 10px/12px var(--font)); color: var(--bt-text-primary-emphasis, #727272); }
.bt-upload-file--success .bt-upload-file__size { color: var(--bt-text-success-default, #2d584b); }
.bt-upload-file--failed  .bt-upload-file__size { color: var(--bt-text-error-default, #b31d38); }
.bt-upload-file__controls { display: flex; align-items: center; gap: var(--bt-space-xs, 4px); flex-shrink: 0; }
.bt-upload-file__pct { font: var(--bt-text-xs-regular, 400 12px/16px var(--font)); color: var(--bt-text-brand-default, #0d4e97); padding: 0 var(--bt-space-md, 8px); }
.bt-upload-file__btn { display: flex; align-items: center; justify-content: center; width: 24px; height: 24px; padding: var(--bt-space-xs, 4px); border-radius: var(--bt-radius-sm, 4px); border: none; background: none; cursor: pointer; box-sizing: border-box; }
.bt-upload-file__btn:hover { background: var(--bt-surface-primary-subtle, #f5f5f5); }
.bt-upload-file__btn svg { width: 16px; height: 16px; pointer-events: none; }
.bt-upload-file__progress { position: relative; width: 100%; height: 6px; border-radius: var(--bt-radius-sm, 4px); background: var(--bt-surface-primary-muted, #e6e6e6); overflow: hidden; }
.bt-upload-file__progress-fill { position: absolute; left: 0; top: 0; height: 100%; border-radius: var(--bt-radius-sm, 4px); background: var(--bt-primary-default, #0d4e97); transition: width 0.2s ease; }
```

### 12.3 Upload container (`.bt-upload`)

```html
<div class="bt-upload">          <!-- Default: sadece dropzone -->
<div class="bt-upload bt-upload--multiple">  <!-- Multiple: gap artıyor -->
```

```css
.bt-upload { display: flex; flex-direction: column; gap: var(--bt-space-xs, 4px); width: 100%; }
.bt-upload--multiple { gap: var(--bt-space-md, 8px); }
```

### 12.4 External Drop Zone (`.bt-edz`) — 2. tip

İkinci Upload tipi. Figma kaynağı: node `586:20876` (Base External Drop Zone) + `586:21058` (3 segment: Default/Single/Multiple). Upload File (§12.2) ve Upload container (§12.3) **birebir reuse edilir** — sadece dropzone kutusunun kendisi farklıdır: satır değil, dikey stack; `Select Files` de bir link değil, gerçek design system Button component'idir.

```html
<!-- Default -->
<div class="bt-upload bt-upload--external">
  <input type="file" multiple class="bt-upload__input" style="display:none"
    onchange="btUplStartUpload(this.closest('.bt-upload'), Array.from(this.files)); this.value=''">
  <div class="bt-edz"
    ondragover="event.preventDefault()"
    ondrop="btUplDrop(this, event)">
    <button class="bt-btn bt-btn--sm bt-btn--base-outline"
      onclick="this.closest('.bt-upload').querySelector('.bt-upload__input').click()">
      <!-- plus icon 16×16 -->
      Select Files
    </button>
    <div class="bt-edz__status">
      <div class="bt-edz__status-text">
        <p>Drag and drop files here to upload JPG, PNG, DOC, TXT, XSLX, PDF</p>
        <p>( Max. 1KB - 20MB )</p>
      </div>
    </div>
  </div>
  <div class="bt-upload__files"></div>
</div>
```

**Dikkat:** `.bt-edz__status` kendisi `display:flex` (row) — iki satırlı varsayılan metin doğrudan onun içine konursa yan yana düşer. Figma'da da (node 586:3954/3955) aynı ayrım var: durum satırı row-flex, metin ayrı bir column-flex bloğunda. Bu yüzden 2 satırlı metin her zaman `.bt-edz__status-text` (column-flex) ile sarmalanmalı; ikon+tek-satır state'lerinde (Uploading/Completed/Failed) bu sarmalayıcı gerekmez, ikon+text doğrudan row içinde durur.

**Durum metni rengi:** `.bt-edz__status`, Standart Upload'daki `.bt-dropzone__status` ile **aynı token eşlemesini** kullanır — `bt-edz--uploading`→brand, `bt-edz--completed`→success, `bt-edz--failed`→error (kullanıcı kararı, tutarlılık için). Not: Figma'nın hidden state frame'lerinde (node 586:3956/3959/3962) metin `text-primary-default` (nötr) görünüyordu, yalnızca ikon değişiyordu — ama iki Upload tipi arasında tutarlılık tercih edildiği için kod bilinçli olarak Figma'dan sapıp Standart Upload'un renklendirmesini izliyor.

**Select Files butonu:** gerçek design system Button — `bt-btn bt-btn--sm bt-btn--base-outline` (28px, 1px border-primary-default, transparent bg, text-primary-default) + plus ikonu (16×16, lucide `plus`).

**Segment container:** Standart Upload'dan farklı olarak Single/Multiple'da da sabit `--bt-space-md` (8px) gap kullanılır — dosya sayısına göre değişmez (Figma'da doğrulandı). `.bt-upload--external` modifier'ı bunu sağlar.

```css
.bt-edz {
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  gap: var(--bt-space-lg, 10px); padding: var(--bt-space-md, 8px);
  border: 1px dashed var(--bt-border-primary-default, #d4d4d4);
  border-radius: var(--bt-radius-sm, 4px);
  background: var(--bt-surface-primary-subtle, #f5f5f5);
  width: 100%; box-sizing: border-box;
}
.bt-edz__status {
  display: flex; align-items: center; justify-content: center;
  gap: var(--bt-space-xs, 4px);
  font: var(--bt-text-xs-regular, 400 12px/16px var(--font));
  color: var(--bt-text-primary-default, #1a1a1a);
  text-align: center;
}
.bt-edz--uploading .bt-edz__status { color: var(--bt-text-brand-default, #0d4e97); }
.bt-edz--completed .bt-edz__status { color: var(--bt-text-success-default, #2d584b); }
.bt-edz--failed    .bt-edz__status { color: var(--bt-text-error-default, #b31d38); }
.bt-edz__status-text { display: flex; flex-direction: column; }
.bt-edz__status p { margin: 0; }
.bt-edz__status-icon { display: flex; align-items: center; justify-content: center; width: 16px; height: 16px; flex-shrink: 0; }
.bt-edz__status-icon svg { width: 16px; height: 16px; }

.bt-upload--external { gap: var(--bt-space-md, 8px); }
```

### 12.5 JS Davranışı

`pages-web.js`'de global fonksiyonlar — başka projelere taşınırken kopyalanır. Standart Upload ve External Drop Zone **aynı fonksiyonları paylaşır**: zone lookup'ları hem `.bt-dropzone` hem `.bt-edz`'i eşleştirecek şekilde genellenmiştir (`upload.querySelector('.bt-dropzone, .bt-edz')`).

| Fonksiyon | Açıklama |
|---|---|
| `btUplStartUpload(upload, files)` | File array'i alır, dropzone'u uploading yapar, her dosya için progress animasyonu başlatır |
| `btUplCompleteRow(row, success)` | Dosya satırını success/failed state'e geçirir, bar'ı kaldırır |
| `btUplRemove(btn)` | Dosya satırını siler; kalan yoksa dropzone'u default'a döndürür |
| `btUplRetry(btn)` | Başarısız dosyayı yeni bir satırla değiştirir, yeniden upload animasyonu başlatır |
| `btUplDrop(dz, event)` | Drag & drop event handler — `ondrop` ile bağlanır |
| `btUplSetDzState(zone, state)` | Zone'un `.bt-dropzone` mu `.bt-edz` mi olduğunu tespit edip ilgili status HTML'ini + `--{state}` modifier class'ını günceller (`'default'\|'uploading'\|'completed'\|'failed'`) — iki dalda da aynı renk mantığı (brand/success/error) uygulanır |
| `btUplFormatSize(bytes)` | Baytı KB/MB string'e çevirir |

---

## 13. Avatar

Kullanıcı/varlık temsili için dairesel konteyner. Figma kaynağı: node `205:25278` — 6 boyut (2xs/xs/sm/md/lg/xl) × 2 tip (Initials/Icon) × 2 tema (Default/Brand). Tamamen statik — hiç JS davranışı yok.

### 13.1 Yapı

```html
<!-- Initials, Default -->
<div class="bt-avatar bt-avatar--md">
  <span class="bt-avatar__initials">EG</span>
</div>

<!-- Icon, Brand -->
<div class="bt-avatar bt-avatar--md bt-avatar--brand">
  <span class="bt-avatar__icon"><!-- circle-user-round icon, 24×24 --></span>
</div>
```

### 13.2 Figma'da doğrulanan, ilk bakışta beklenmeyen 2 detay

1. **Icon her boyutta sabit 24×24'tür** — avatar container 24px'ten 56px'e büyürken (2xs→xl) icon boyutu **hiç değişmez**, sadece etrafındaki boş alan artar. Bu, 6 boyutun hepsi tek tek Figma'dan sorgulanarak doğrulandı (ilk izlenim "icon da orantılı büyür" olurdu, yanlış olurdu).
2. **Border her iki temada da var** — Figma'nın React/Tailwind çıktısında `border border-[--bt-border-primary-default]` sınıfı Default/Brand ayrımından ÖNCE, ortak (paylaşılan) kısımda tanımlı; yani koyu mavi Brand arka plan üstünde de aynı 1px `--bt-border-primary-default` border'ı var. Kolayca "brand'de border olmaz" diye atlanabilecek bir detay.
3. **Icon fill-tabanlı, özel bir path** — Figma'nın "Circle-User-Round" asset'i lucide'ın stroke-tabanlı `circle-user-round` ikonundan farklı, tek bir `fill` path'i. Bu yüzden lucide path'i kullanılmadı, gerçek asset SVG'si (`fill="var(--fill-0, ...)"` → `fill="currentColor"`e çevrilerek) birebir alındı.

Padding değerleri Figma çıktısında `--radius-sm/-md/-lg/-2xl/-3xl/-4xl` gibi (radius token'larıyla aynı isimli, garip) değerler olarak görünüyor — bunlar **kullanılmadı**. Container `size-[Npx]` ile SABİT boyutlu, `items-center justify-center` ile içerik ortalanıyor; nominal padding + 24px icon toplamı bazı boyutlarda (örn. 2xs: 4px+4px+24px=32px > 24px container) container'ı geçiyor, yani bu padding değerleri gerçek layout'u etkilemeyen, muhtemelen "Hug"tan "Fixed"e geçişte kalmış eski auto-layout metadata'sı. Bu yüzden CSS'te padding hiç kullanılmadı, sadece fixed width/height + flex center.

### 13.3 CSS

```css
.bt-avatar {
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0; box-sizing: border-box;
  border-radius: var(--bt-radius-full, 9999px);
  border: 1px solid var(--bt-border-primary-default, #d4d4d4);
  background: var(--bt-surface-primary-subtle, #f5f5f5);
  overflow: hidden;
}
.bt-avatar--2xs { width: var(--bt-base-sizing-6xl, 24px);  height: var(--bt-base-sizing-6xl, 24px); }
.bt-avatar--xs  { width: var(--bt-base-sizing-7xl, 28px);  height: var(--bt-base-sizing-7xl, 28px); }
.bt-avatar--sm  { width: var(--bt-base-sizing-8xl, 32px);  height: var(--bt-base-sizing-8xl, 32px); }
.bt-avatar--md  { width: var(--bt-base-sizing-10xl, 40px); height: var(--bt-base-sizing-10xl, 40px); }
.bt-avatar--lg  { width: var(--bt-base-sizing-12xl, 48px); height: var(--bt-base-sizing-12xl, 48px); }
.bt-avatar--xl  { width: var(--bt-base-sizing-14xl, 56px); height: var(--bt-base-sizing-14xl, 56px); }

.bt-avatar--brand { background: var(--bt-surface-brand-default, #0d4e97); }

.bt-avatar__initials {
  font: var(--bt-text-xs-medium, 500 12px/16px var(--font));   /* 2xs/xs/sm */
  color: var(--bt-text-primary-default, #1a1a1a);
  white-space: nowrap;
}
.bt-avatar--md .bt-avatar__initials,
.bt-avatar--lg .bt-avatar__initials,
.bt-avatar--xl .bt-avatar__initials {
  font: var(--bt-text-sm-medium, 500 14px/16px var(--font));   /* md/lg/xl */
}
.bt-avatar--brand .bt-avatar__initials { color: var(--bt-text-primary-inverted, #ffffff); }

.bt-avatar__icon {
  display: flex; align-items: center; justify-content: center;
  width: 24px; height: 24px; flex-shrink: 0;
  color: var(--bt-icon-primary-muted, #a3a3a3);
}
.bt-avatar__icon svg { width: 24px; height: 24px; }
.bt-avatar--brand .bt-avatar__icon { color: var(--bt-icon-primary-inverted, #ffffff); }
```

### 13.4 Boyut → Token eşlemesi

| Boyut | Piksel | Token |
|---|---|---|
| 2xs | 24×24 | `--bt-base-sizing-6xl` |
| xs  | 28×28 | `--bt-base-sizing-7xl` |
| sm  | 32×32 | `--bt-base-sizing-8xl` |
| md  | 40×40 | `--bt-base-sizing-10xl` |
| lg  | 48×48 | `--bt-base-sizing-12xl` |
| xl  | 56×56 | `--bt-base-sizing-14xl` |

### 13.5 Not: pages-mobile.js'teki eski implementasyon

`pages-mobile.js`'teki `'components/avatar'` sayfası bu revizyondan **kasıtlı olarak dokunulmadan** bırakıldı — tamamen ayrı, inline `style="..."` tabanlı eski bir implementasyon (kaldırılmış `--bt-text-xs-size/-lh` gibi tokenlar, yanlış arka plan/border, orantılı büyüyen icon varsayımı). `pages-web.js`'deki yeni `.bt-avatar` component'i ile paylaşılan bir kod yolu yok. Kullanıcı isterse ayrı bir oturumda mobile tarafı da bu component'e taşınabilir.

---

## 14. Accordion

Figma kaynağı: node `605:30055`. 2 varyant (**Basic** / **Bordered**) × 2 içerik tipi (**Chevron** / **Plus-X**) × 5 state (Default/Hover/Active/Focused/Disabled). Tamamen interaktif — başlığa tıklamak bölümü gerçekten açar/kapatır.

### 14.1 Yapı — flat, pozisyon class'ı yok

Figma, Bordered varyantı için `Position: Single/First/Middle/Last` diye ayrı varyantlar tanımlıyor (köşe yuvarlaklığı ve hangi kenarların border aldığını yönetmek için). Kodda bu **taklit edilmedi** — bunun yerine header'lar ve (açıkken) content'ler tek bir `.bt-accordion` konteynerinin **düz (flat) sıralı kardeşleri** olarak diziliyor, dış görünüm şöyle sağlanıyor:

- `.bt-accordion--bordered` dış konteyner `border` + `border-radius` + `overflow:hidden` taşır (kart gibi) — iç elemanların KENDİ radius'una hiç gerek kalmıyor.
- Her `.bt-accordion__header` kendi `border-bottom`'ını taşır (item'lar arası ayraç).
- `:last-child` seçicisi, o an DOM'da **gerçekten en sonda duran** elemanın (kapalıysa bir header, açıksa bir content) border-bottom'ını kaldırıp kutuyu düzgün kapatıyor — hangi item açık olursa olsun otomatik doğru çalışır, Figma'nın First/Middle/Last mantığını manuel taşımaya gerek kalmadan.
- Açık (`.is-active`) bir header **kendi** border-bottom'ını kaybeder — hemen altındaki `.bt-accordion__content` kendi border-bottom'ıyla o görevi devralır (Figma'nın "Bordered Active state'i top+bottom border'ı kaybediyor, content border-b/l/r ile kutuyu kapatıyor" davranışının CSS karşılığı).

```html
<div class="bt-accordion bt-accordion--bordered"> <!-- veya bt-accordion--basic -->
  <button class="bt-accordion__header" type="button" data-icon-type="chevron"
    aria-expanded="false" onclick="btAccToggle(this)">
    <span class="bt-accordion__body">
      <span class="bt-accordion__title">Title Text Here</span>
      <span class="bt-accordion__desc">Description</span>
    </span>
    <span class="bt-accordion__control bt-accordion__control--right"><!-- chevron/plus icon 16×16 --></span>
  </button>
  <div class="bt-accordion__content" hidden>...</div> <!-- her zaman DOM'da, [hidden] ile aç/kapa -->
  <!-- ...diğer header/content çiftleri... -->
</div>
```

**Kritik nokta:** `.bt-accordion__content` her zaman DOM'da durur (yeniden oluşturulmaz), `.is-open` class'ıyla gösterilir/gizlenir (**`[hidden]`/`display:none` DEĞİL** — bkz. §14.2'deki animasyon notu). Bu sayede `:last-child` CSS kuralı her zaman doğru elemana denk gelir ve toggle sırasında DOM'u yeniden inşa etmeye gerek kalmaz.

### 14.2 CSS

> **Kullanıcı kararıyla Figma'dan sapan 3 nokta** (aşağıdaki kodda işaretli): (1) header padding'i yatay/dikey ayrıştırıldı (Figma'da ikisi de `--bt-space-md` idi), (2) hover'da title alt çizili, (3) açılış/kapanış `grid-template-rows` ile smooth animasyonlu ve ikon artık ayrı bir "açık" SVG yerine `transform:rotate` ile dönüyor.

```css
.bt-accordion { width: 100%; }
.bt-accordion--bordered {
  border: 1px solid var(--bt-border-primary-default, #d4d4d4);
  border-radius: var(--bt-radius-md, 6px);
  overflow: hidden;
}
.bt-accordion__header {
  display: flex; align-items: flex-start;
  gap: var(--bt-space-xs, 4px);
  padding: var(--bt-space-md, 8px) var(--bt-space-xl, 12px); /* dikey md, yatay xl — kullanıcı kararı */
  background: var(--bt-base-default, #ffffff);
  border: none; border-bottom: 1px solid var(--bt-border-primary-default, #d4d4d4);
  width: 100%; cursor: pointer; font-family: inherit; text-align: left; box-sizing: border-box;
}
.bt-accordion__header:hover:not(:disabled) .bt-accordion__title { text-decoration: underline; } /* kullanıcı kararı */
.bt-accordion__header:last-child { border-bottom: none; }
.bt-accordion__header.is-active { border-bottom: none; }
.bt-accordion__header:focus-visible,
.bt-accordion__header.is-focused {
  outline: none;
  box-shadow: 0 0 0 3px rgba(212,212,212,0.5); /* Figma: Focus Ring/neutral — 50% opaklık, butonlardaki 25%'ten farklı */
  position: relative; z-index: 1;
}
/* Bordered'a özgü: Hover, Focused ile aynı ring'i alır (Basic'te ayrı Hover varyantı yok) */
.bt-accordion--bordered .bt-accordion__header:hover:not(:disabled),
.bt-accordion--bordered .bt-accordion__header.is-hover {
  box-shadow: 0 0 0 3px rgba(212,212,212,0.5);
  position: relative; z-index: 1;
}
.bt-accordion__header:disabled { cursor: not-allowed; }

.bt-accordion__control { display: flex; align-items: center; flex-shrink: 0; width: 24px; height: 24px; justify-content: center; }
.bt-accordion__control svg { width: 16px; height: 16px; }
.bt-accordion__control--right { color: var(--bt-text-primary-default, #1a1a1a); }
.bt-accordion__header:disabled .bt-accordion__control--right { color: var(--bt-text-primary-muted, #a3a3a3); }
/* Left Control — opsiyonel (Figma'nın showLeftControl prop'u), gerçek "With Content"
   örneklerinde varsayılan kapalı. İkon Figma'nın Icon/placeholder asset'inden (lucide
   "scan") birebir alındı, fill rengi #535353 = --bt-icon-primary-strong'a bağlandı. */
.bt-accordion__control--left { color: var(--bt-icon-primary-strong, #535353); }
.bt-accordion__header:disabled .bt-accordion__control--left { color: var(--bt-text-primary-muted, #a3a3a3); }
/* İkon her zaman "kapalı" glyph'iyle render edilir (chevron-down / plus) — açık görünüm
   ayrı bir SVG değil, transform:rotate ile üretiliyor (kullanıcı kararı, "smooth" istendi):
   chevron 180° dönünce chevron-up'a, plus 45° dönünce ×'e dönüşüyor. */
.bt-accordion__control--right svg { transition: transform 200ms ease; }
.bt-accordion__header[data-icon-type="chevron"].is-active .bt-accordion__control--right svg { transform: rotate(180deg); }
.bt-accordion__header[data-icon-type="plus"].is-active .bt-accordion__control--right svg { transform: rotate(45deg); }

.bt-accordion__body { display: flex; flex-direction: column; flex: 1 0 0; min-width: 0; }
.bt-accordion__title {
  font: var(--bt-title-sm-medium, 500 14px/16px var(--font));
  color: var(--bt-text-primary-default, #1a1a1a);
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}
.bt-accordion__header:disabled .bt-accordion__title { color: var(--bt-text-primary-muted, #a3a3a3); }
.bt-accordion__desc {
  font: var(--bt-text-xs-regular, 400 12px/16px var(--font));
  color: var(--bt-text-primary-emphasis, #727272);
}
.bt-accordion__header:disabled .bt-accordion__desc { color: var(--bt-text-primary-muted, #a3a3a3); }

/* Smooth aç/kapa: grid-template-rows 0fr↔1fr + iç sarmalayıcıda overflow:hidden.
   İçerik yüksekliği dinamik/bilinmeyen olsa da (metin uzunluğuna göre değişir) bu
   teknik JS ile yükseklik ölçmeye gerek bırakmadan düzgün animasyonlanır (kullanıcı kararı).
   ÖNEMLİ: border-bottom SADECE .is-open'da uygulanır — border box-model'in parçası
   olduğu için grid-template-rows:0fr'nin yüksekliği sıfırlaması onu gizlemez; base
   kuralda dursaydı kapalıyken de görünüp header'ın kendi border'ıyla üst üste binerdi
   (gerçek bug, kullanıcı fark etti ve düzeltildi). */
.bt-accordion__content {
  display: grid;
  grid-template-rows: 0fr;
  background: var(--bt-base-default, #ffffff);
  transition: grid-template-rows 250ms ease;
}
.bt-accordion__content.is-open {
  grid-template-rows: 1fr;
  border-bottom: 1px solid var(--bt-border-primary-default, #d4d4d4);
}
.bt-accordion__content.is-open:last-child { border-bottom: none; }
.bt-accordion__content-inner { overflow: hidden; min-height: 0; } /* grid animasyonu için zorunlu */
.bt-accordion__content-pad {
  padding: var(--bt-space-xl, 12px); /* dört yönde de xl — header'ın yeni yatay padding'iyle hizalı */
  font: var(--bt-text-xs-regular, 400 12px/16px var(--font));
  color: var(--bt-text-primary-default, #1a1a1a);
}
@media (prefers-reduced-motion: reduce) {
  .bt-accordion__content { transition: none; }
  .bt-accordion__control--right svg { transition: none; }
}
```

**HTML yapısı değişti:** `.bt-accordion__content` artık düz bir `<div>` değil, animasyon için iç içe iki sarmalayıcı gerektiriyor:

```html
<div class="bt-accordion__content is-open">
  <div class="bt-accordion__content-inner"><div class="bt-accordion__content-pad">...</div></div>
</div>
```

### 14.3 Figma'da doğrulanan, ilk bakışta beklenmeyen detaylar

1. **Hover/Active hiçbir yerde arka plan değiştirmiyor.** Figma'nın ürettiği React/Tailwind çıktısında Hover ve Active state'lerinin hiçbirinde `bg-[...]` override'ı yok — sadece ikon yönü (Active) ve ring (Hover, sadece Bordered'da) değişiyor. Eski `pages-mobile.js` implementasyonu bunun aksini varsayıp Active'de `--bt-surface-subtle` arka planı uyguluyordu — bu revizyonda **kasıtlı olarak yapılmadı**.
2. **Focus Ring opaklığı %50, projenin geri kalanındaki butonlardan farklı.** Diğer bileşenlerde (Button, Split Button) nötr focus ring'i `rgba(212,212,212,0.25)` iken, Accordion'da Figma "Focus Ring/neutral" effect'i açıkça `#D4D4D480` (= %50 alpha) olarak tanımlı. Bu proje-geneli tutarsızlık gibi görünse de Figma'da doğrudan bu component için böyle tanımlanmış, düzeltilmedi.
3. **Bordered'ın Middle pozisyonu TAM border alıyor (üst+alt dahil), sadece First/Last kenar kaldırıyor.** Eski varsayım (kod incelemesi öncesi) "Middle üst border'ını da kaldırır" olurdu — ama Figma'nın gerçek kodu Middle için sadece `border` (4 kenar) veriyor. Pratikte fark etmiyor çünkü komşu iki Middle item'ın üst-üste gelen border'ları aynı renkte, tek çizgi gibi görünüyor — ama bu proje `:last-child` tabanlı flat yaklaşımı seçtiği için bu detayın kodda hiç karşılığı yok (First/Middle/Last class'ı üretilmiyor).
4. **Sol ikon slotu (`Left Control`) gerçek kullanım örneklerinde hep kapalı.** Figma'nın component tanımında `showLeftControl` prop'u var ve varsayılan `true`, ama "Accordion Basic With Content" / "Accordion Bordered With Content" örneklerinin HİÇBİRİ sol ikonu göstermiyor (`showLeftControl={false}`) — bu yüzden `accHeaderHtml`'in `showLeftIcon` parametresi de varsayılan `false`. Kullanıcı isteğiyle sonradan opsiyonel olarak eklendi (playground'da "Left Icon" On/Off toggle'ı, `ACC_LEFT_OPTS`, varsayılan Off — component'in kendi `showLeftIcon = false` varsayılanıyla tutarlı) — Figma'nın kendi placeholder ikonu (`Icon/placeholder`, lucide "scan") birebir kullanılıyor.
5. **Disabled title rengi Figma'da bir ICON token'ına bağlı** (`--icon/primary/--bt-icon-primary-muted`), description ise doğru şekilde bir TEXT token'ına (`--text/primary/--bt-text-primary-muted`). İkisi de aynı hex'e (#a3a3a3) çözümlendiği için kodda ikisi de tutarlılık adına `--bt-text-primary-muted`'a bağlandı — Figma'nın olası bir bağlama hatası, bilinçli normalize edildi.

### 14.4 Kullanıcı kararıyla eklenen özelleştirmeler (Figma'nın dışında)

- **Header padding'i yatay/dikey ayrıştırıldı:** dikey `--bt-space-md` (8px, Figma'yla aynı) kaldı, yatay `--bt-space-xl`'e (12px) çıkarıldı. Content'in yatay padding'i de (eskiden `--bt-space-md`) header'la hizalı kalması için aynı şekilde `--bt-space-xl`'e çekildi — Figma'da content'in kendisi `px-md py-xl` idi, bu artık `px-xl py-xl` (tek `--bt-space-xl` değeri, dört yönde de).
- **Hover'da title alt çizili** (`text-decoration:underline`) — Figma'da böyle bir kural yok, kullanıcı isteğiyle eklendi.
- **Smooth açılış/kapanış animasyonu:** `.bt-accordion__content` artık `[hidden]`/`display:none` yerine `grid-template-rows: 0fr → 1fr` (250ms ease) ile animasyonlanıyor — içerik metni değişken uzunlukta olsa da JS ile yükseklik ölçmeye gerek kalmadan çalışan, modern bir CSS tekniği. `prefers-reduced-motion: reduce` ile devre dışı bırakılıyor.
- **İkon artık dönerek açılıyor, SVG değiştirmiyor:** eskiden `btAccToggle` açılışta chevron-down→chevron-up veya plus→× SVG'sini `innerHTML` ile değiştiriyordu; şimdi ikon HER ZAMAN "kapalı" glyph'iyle (chevron-down / plus) render ediliyor, `.is-active` class'ı CSS üzerinden `transform: rotate(180deg)` (chevron) veya `rotate(45deg)` (plus) uyguluyor — hem daha az kod hem de `transition: transform 200ms ease` ile smooth bir dönüş.
- **Playground toolbar'ında Description/Left Icon toggle'ları On/Off:** proje genelindeki `TBX_BOOL_OPTS` (On/Off — bkz. CLAUDE.md "Playground Toolbar Boolean Toggle Standardı") konvansiyonuyla tutarlı olsun diye `ACC_DESC_OPTS`/`ACC_LEFT_OPTS` artık `TBX_BOOL_OPTS`'un aynısı (referans paylaşımı, kod tekrarı yok); Description varsayılanı On, Left Icon varsayılanı Off (component'in kendi `showLeftIcon = false` varsayılanıyla tutarlı). Bu toggle'lar tarihsel olarak önce Show/Hide, sonra Yes/No, en son On/Off olarak isimlendirildi — proje genelinde tek standarda (On/Off) sabitlendi.
- **Content örneğine (metnin altına) 4'lü TextBox grid'i eklendi:** mevcut TextBox bileşeninin md/readonly hâli (`_tbxCls`, `_tbxInputInner`) sıfırdan yazılmadan yeniden kullanılıyor, her hücrede label görünür (`label:'yes'` davranışıyla aynı `.bt-tbx__meta`/`.bt-tbx__label` bloğu elle eklendi), 2 yatay x 2 dikey grid, hücreler arası boşluk `--bt-space-2xl` (24px).

### 14.5 JS Davranışı

Tek global fonksiyon, gerçek DOM manipülasyonu (Upload/Split Button ile aynı desen — sayfa yeniden render edilmiyor):

| Fonksiyon | Açıklama |
|---|---|
| `btAccToggle(btn)` | Header butonuna tıklanınca çağrılır. `disabled` ise no-op. Değilse: `is-active` class'ını toggle'lar, `aria-expanded`'ı günceller, hemen sonraki `.bt-accordion__content` kardeşin `is-open` class'ını toggle'lar (CSS geri kalanını — ikon dönüşü + yükseklik animasyonu — hallediyor). |
| `btAccIcon(iconType)` | `iconType`'a ('chevron'\|'plus') göre HER ZAMAN "kapalı" glyph SVG string'ini döndürür (chevron-down veya plus) — "açık" hâli CSS transform:rotate ile üretildiği için ayrı bir SVG'ye gerek yok. |

## 15. Dialog

Figma kaynağı: node `639:17632`. 2 Header Type × Subtitle On/Off × 2 Button Position × 3 Button Segments.

**Not — isimlendirme:** Figma'nın kendi variant adı "Header Type=Left/Flex". Bu isimlendirme kullanıcı kararıyla frontend/CSS mantığına göre bilinçli olarak değiştirildi: "Flex" → **"Center"** (varyantın gerçek etkisi title'ı ortalamak; "Flex" bir layout tekniğini değil, sonucu tanımlamalı). "Left" ismi ise olduğu gibi bırakıldı (kullanıcı sadece "Left"in karşılığı olan ikinci ismi değiştirmeye karar verdi, "Left"i "Start"a çevirmedi). Kod tarafında `bt-dialog--flex` → `bt-dialog--center` olarak değişti.

**Not — ikonlar:** İlk implementasyon close/icon-slot ikonlarını `<i data-lucide="...">` placeholder deseniyle yazmıştı — bu, Lucide runtime'ının (`lucide.createIcons()`) sayfada yüklü olmasına bağımlı, ve bu docs sitesi (ve varsayılan olarak yeni bir proje) Lucide script'i hiç yüklemiyorsa ikon render OLMAZ (boş görünür). Bu projenin geri kalan tüm component'leri gibi ikonlar doğrudan inline `<svg>` olarak gömülmeli — sadece Lucide'ı gerçekten yükleyen bir consuming projede (örn. Medusa Dashboard, bkz. §6 "Lucide icon tuzağı") `data-lucide` kalıbı kullanılabilir.

**Not — control slot yapısı (kullanıcı düzeltmesi):** Header'daki sol/sağ 40×40'lık alanlar (Figma "Base Dialog Controls") kendileri **stillendirilmiş elemanlar değil, sadece layout slot'ları**. İlk implementasyon bunu yanlış anlayıp close butonunu doğrudan 40×40 boyutunda, kendine özel hover/renk stilleriyle bespoke bir `<button>` olarak yazmıştı. Doğrusu: 40×40 slot içinde her zaman **reuse edilen bir bt-btn** oturuyor (Figma'nın "Button" instance'ı doğrulaması: xs boyut, 4px padding + 16px icon + 4px padding = 24px). Sol taraftaki (Center type'ta görünen) ikon da aynı mantıkla bir 24×24 **icon wrapper** (`.bt-dialog__icon-wrap`) içinde duruyor, içindeki ikonun kendisi wrapper'ı doldurmayan 16×16 boyutunda — doğrudan 40×40'a gömülü değil. Bu ayrım önemli çünkü component-özel bespoke bir buton yazmak yerine projenin mevcut Button sistemini (hover/focus/active state'leri dahil) reuse etmeyi sağlıyor — CLAUDE.md'nin "Mevcut Component'leri Reuse Et" kuralıyla örtüşüyor. **Sonradan kullanıcı kararıyla** close butonunun boyutu Figma'nın xs'inden (24×24) **sm'ye (28×28)** çıkarıldı, ve header'ın `--bt-space-xl` (12px) yatay padding'i kaldırılıp `--bt-space-none`'a çevrildi — bilinçli Figma sapması. Sonra bu ikinci karar **Left header type için kısmen geri alındı**: icon slot olmadığı için title'ın kendi sol inset'i olmadan header'ın gerçek kenarına yapışık kalması istenmedi, `.bt-dialog--left .bt-dialog__header` için `padding-left: var(--bt-space-xl, 12px)` eklendi (Center type'ta hâlâ `--bt-space-none` — 40×40 icon slot zaten aynı görsel inset'i sağlıyor).

### 15.1 Markup

```html
<!-- Left header type (default), Horizontal buttons, 2 segments -->
<div class="bt-dialog bt-dialog--left bt-dialog--horizontal">
  <div class="bt-dialog__header">
    <!-- Left control slot — 40×40, pure layout. ONLY has visible content for
         Center header type: a 24×24 icon wrapper holding a 16×16 icon
         (centered, NOT filling the wrapper — same 16px-icon/4px-padding
         proportion as the close button, not the "fills exactly" pattern
         .bt-avatar__icon uses). Figma "Icon/placeholder" asset = lucide
         "scan" (verified via screenshot, same icon Accordion uses). -->
    <!-- <div class="bt-dialog__icon-slot">
      <div class="bt-dialog__icon-wrap">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/></svg>
      </div>
    </div> -->
    <div class="bt-dialog__title-wrap">
      <span class="bt-dialog__title">Dialog Title</span>
      <!-- Subtitle: only when subtitle=On -->
      <!-- <span class="bt-dialog__subtitle">Supporting subtitle text</span> -->
    </div>
    <!-- Right control slot — 40×40, pure layout. Always holds a reused Button
         (sm, base-flat, icon-only → 28×28), NOT a bespoke 40×40 button. -->
    <div class="bt-dialog__control">
      <button class="bt-btn bt-btn--sm bt-btn--base-flat bt-btn--icon" type="button" aria-label="Close">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
      </button>
    </div>
  </div>
  <div class="bt-dialog__body">
    <p class="bt-dialog__body-text">Dialog body content goes here.</p>
  </div>
  <div class="bt-dialog__footer">
    <button class="bt-btn bt-btn--sm bt-btn--base-flat">Cancel</button>
    <button class="bt-btn bt-btn--sm bt-btn--primary-solid">Confirm</button>
  </div>
</div>
```

**Modifier classes:**
- Header type: `bt-dialog--left` (default, title sola hizalı) / `bt-dialog--center` (icon slot + centered title)
- Button position: `bt-dialog--horizontal` / `bt-dialog--vertical`

**Left/Right Control görünürlüğü:** Figma'da sol icon slot'u sadece Center header type'ta gösterilir (Left'te hiç yok), sağdaki close control ise her iki tipte de her zaman gösterilir — bu ikisi arasında bağımsız bir "gizle" seçeneği Figma'da yok. Playground'a kullanıcı isteğiyle **iki bağımsız toggle** eklendi (`Left Control` / `Right Control`, On/Off, `TBX_BOOL_OPTS` reuse edilerek): markup tarafında her ikisi de boş string'e düşüp elemanı DOM'dan tamamen kaldırıyor (`[hidden]`/`display:none` değil). `Left Control`'ün görünür bir etkisi olması için Header Type'ın Center olması gerekir (Left'te icon slot zaten render edilmiyor, toggle'ın kendisi devre dışı bırakılmıyor — bu projede playground prop'ları arasında conditional/dependent görünürlük mekanizması yok). `Right Control = Off` seçildiğinde close butonu (ve onu saran 40×40 slot) tamamen kaldırılıyor, title-wrap (flex:1) kalan alanı dolduruyor — bu, Figma'nın örneklerinin dışında kullanıcı kararıyla eklenen bir esneklik (örn. kapatılamaz/zorunlu-aksiyon dialog senaryosu için).

### 15.2 CSS Tokens

| Element | Property | Token | Fallback |
|---|---|---|---|
| Container | Width | — | 420px |
| Container | Background | `--bt-base-default` | #ffffff |
| Container | Border radius | `--bt-radius-md` | 6px |
| Header | Min-height | — | 40px |
| Header | Background | `--bt-base-subtle` | #f5f5f5 |
| Header | Border bottom | `--bt-border-primary-muted` | #e6e6e6 |
| Header | Padding | `--bt-space-none` | 0px |
| Header · Left type | Padding-left | `--bt-space-xl` | 12px (no icon slot, so title needs its own inset) |
| Title | Font | `--bt-title-sm-medium` | 500 14px/16px |
| Title | Color | `--bt-text-primary-default` | #1a1a1a |
| Subtitle | Font | `--bt-text-xs-regular` | 400 12px/16px |
| Subtitle | Color | `--bt-text-primary-emphasis` | #727272 |
| Control slot (left icon / right close) | Width & Height | — | 40px (layout only) |
| Close button | Class | — | `bt-btn bt-btn--sm bt-btn--base-flat bt-btn--icon` (28×28) |
| Icon slot (Center) | Width & Height | — | 24×24 wrapper (`.bt-dialog__icon-wrap`) in the 40px slot, 16×16 icon inside it |
| Body | Min-height | — | 280px |
| Body | Padding | `--bt-space-2xl` | 16px |
| Body | Gap | `--bt-space-2xl` | 16px |
| Body text | Font | `--bt-text-xs-regular` | 400 12px/16px |
| Body text | Color | `--bt-text-primary-default` | #1a1a1a |
| Footer | Border top | `--bt-border-primary-muted` | #e6e6e6 |
| Footer | Padding vertical | `--bt-space-xl` | 12px |
| Footer | Padding horizontal | `--bt-space-2xl` | 16px |
| Footer | Gap | `--bt-space-md` | 8px |
| Button · Horizontal | Width | — | 80px |
| Button · Vertical | Width | — | 100% |

**Not — CSS specificity:** `.bt-dialog__body-text` bir `<p>` etiketine tek class olarak uygulanıyor (`specificity 0,1,0`). Docs sitesindeki genel `.content p` kuralı (`0,1,1`) daha spesifik olduğu için bunu ezip 14px/emphasis-color/16px-margin-bottom uygulayabilir — normal sayfa akışında (isolation mode dışında) fark edilir, isolation preview'da `.content` sarmalayıcısı olmadığı için fark edilmez. Bu yeni bir Bentaş projesine taşınırken de aynı tuzağa düşülebileceğinden selector `.bt-dialog__body .bt-dialog__body-text` (specificity `0,2,0`) olarak yazılmalı — herhangi bir `.content p`/`.prose p` benzeri genel kuraldan bağımsız olarak kazanır.

### 15.3 Button Layout

- **Horizontal:** buttons right-aligned, fixed 80px width. Ghost(s) left, primary right.
- **Vertical:** buttons stacked full-width. Primary on top, secondary/ghost(s) below.
- Segments 1 → primary only; 2 → Cancel + Confirm; 3 → Skip + Cancel + Confirm.

### 15.4 JS Davranışı

Dialog bir modal overlay içinde açılır. Backdrop'a tıklamak veya `data-pgd-close` attribute'lu herhangi bir butona tıklamak dialog'u kapatır. **Overlays grubu ortak backdrop'u:** `background: rgba(0,0,0,0.4)` + `backdrop-filter: blur(4px)` (`-webkit-` dahil) — Alert Dialog (§13), Dialog ve Drawer (`.bt-win-overlay`) aynı değerleri paylaşır. Uygulama kodu için:

```javascript
// Open: append to body, add is-visible class after reflow
const host = document.createElement('div');
host.className = 'dialog-backdrop'; // position:fixed; inset:0; background:rgba(0,0,0,0.4); backdrop-filter:blur(4px); ...
host.innerHTML = dialogHtml;
document.body.appendChild(host);
void host.offsetHeight;
host.classList.add('is-visible');

// Close
host.addEventListener('click', e => {
  if (e.target === host || e.target.closest('[data-dialog-close]')) {
    host.classList.remove('is-visible');
    setTimeout(() => host.remove(), 200);
  }
});
```

## 16. Card

Figma kaynağı: `670:8121` (Base Card Header — 2 Type × 2 Position × 3 Segments) + `757:7380` (Figma'da "Base Card Content Header" — aynı yapı, body içindeki bölüm ayıracı olarak reuse edilir; kod ve UI'da **"Body Title/Subtitle"** olarak adlandırıldı, çünkü Card'ın zaten kendi ana Header'ı var ve body içindeki bu ikinci parçayı da "Header" olarak etiketlemek kafa karıştırıyordu — kullanıcı kararı, 2026-08-07, bkz. HISTORY.md) + `692:30381` (assembled Card örneği, "Veritabanı Detayları"). Card, ilişkili içeriği bir **Header** ve bir **Body** olmak üzere iki bölümde gruplayan bir kapsayıcı.

**Not — dış çerçeve (bilinçli sadeleştirme):** Figma'da Card'ın dış border'ı tek bir yerde tanımlı değil — Header (üst+sağ+sol) ile Body (alt+sağ+sol) kendi border'larını ayrı ayrı taşıyor, ikisi yan yana gelince tek bir çerçeve gibi görünüyor (Header'ın kendi border-bottom'ı hem dış çerçevenin parçası hem de header/body ayracı). Burada bu, tek bir `.bt-card` wrapper'ına taşındı: `.bt-card` tüm dış border+radius+`overflow:hidden`'ı taşıyor, `.bt-card__header`/`.bt-card__body` kendi border'larına sahip değil. Görsel sonuç birebir aynı, ama tek/standart bir çerçeve kuralı olduğu için Header'sız kullanım (varsa) veya farklı border-radius senaryolarında daha az kırılgan.

**Not — control slot sistemi (bilinçli sadeleştirme):** Figma'nın "Base Card Controls" component'i sol/sağ slotlarda **bağımsız boolean flag'ler** olarak tanımlı (`showIcon`, `showButton`, `showCheckbox`, `showSwitch`, `showAvatar`, `showAvatarGroup`, `showBadge`, `showAdditionalText` — teorik olarak birden fazlası aynı anda açılabilir). Playground'da bu, kullanıcı deneyimi için **tek seçimlik bir "content type" dropdown'una** sadeleştirildi (None/Icon/Button/Checkbox/Radio Button/Switch/Avatar/Avatar Group/Badge/Text) — Dialog'daki Left/Right Control On/Off toggle'larının aynı mantıkla genişletilmiş hali. Her seçenek, design system'deki **gerçek bt-\* component'lerini** reuse ediyor (Checkbox → `.bt-checkbox__box`, Radio Button → `.bt-radio__dot`, Switch → `.bt-switch__track`/`.bt-switch__thumb`, Avatar → `.bt-avatar bt-avatar--xs`, Button → `bt-btn bt-btn--sm bt-btn--base-flat bt-btn--icon`) — CLAUDE.md'nin "Mevcut Component'leri Reuse Et" kuralı. **Badge** için ise projede henüz ayrı bir reusable `.bt-badge` component'i olmadığından (Web nav'da Badge hâlâ eski mobile inline-style sayfaya düşüyor), Card'a özel, token-tabanlı `.bt-card__control-badge` class'ı eklendi — ileride gerçek bir Badge component'i eklenirse bununla değiştirilmeli.

**Not — Header/Body Title-Subtitle padding kuralı (Dialog'daki desenle aynı):** `Position=Left` header'ında title, o taraftaki 40×40 control slotu doluysa kendi padding'ini sıfırlıyor (slot zaten inseti sağlıyor), slot boşsa `--bt-space-2xl` (16px) kendi padding'ini alıyor — bu, sol/sağ için **bağımsız** çalışıyor (örn. sadece sağ slot doluysa, sol padding 16px kalırken sağ 0 olur). Body içinde bölüm ayıracı olarak reuse edilen Body Title/Subtitle (`.bt-card__header--plain`) ise Figma'da bu padding kuralına hiç girmiyor — pozisyon/control'den bağımsız her zaman 0 padding (body'nin kendi 16px padding'ine oturuyor).

**Not — Body içeriği:** Figma'nın "Base Card Content" (`756:6684`) component'i canonical içerik reçetesi: opsiyonel Body Title/Subtitle + opsiyonel Description + N adet "Card Row Segment" (28×28 ikon + flex Label + flex Value). Gerçek kullanım örneği ("Veritabanı Detayları", `692:30381`) 12px body padding ve ikon+değer kombinasyonlu (örn. yeşil ok + "%18.2") satırlar kullanıyor — ama bu tek bir ürün ekranının özelleştirmesi, docs sitesindeki generic placeholder konvansiyonuyla (diğer tüm component'lerde "Label Text Here"/"Value Text Here" gibi) tutarlı kalmak için **canonical 16px padding + sade ikon+label+value satırları** tercih edildi.

### 16.1 Markup

```html
<div class="bt-card">
  <div class="bt-card__header bt-card__header--bordered bt-card__header--bg bt-card__header--left bt-card__header--has-left bt-card__header--has-right">
    <!-- Sol control slot — 40×40, örn. Icon -->
    <span class="bt-card__control">
      <span class="bt-card__control-icon">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/></svg>
      </span>
    </span>
    <span class="bt-card__title-wrap">
      <span class="bt-card__title">Card Title Here</span>
      <!-- Subtitle: opsiyonel -->
      <span class="bt-card__subtitle">Subtitle</span>
    </span>
    <!-- Sağ control slot — 40×40, örn. Button -->
    <span class="bt-card__control">
      <span class="bt-card__control-item">
        <button type="button" class="bt-btn bt-btn--sm bt-btn--base-flat bt-btn--icon" aria-label="Action">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/></svg>
        </button>
      </span>
    </span>
  </div>
  <div class="bt-card__body">
    <!-- Body Title/Subtitle — opsiyonel bölüm ayracı, her zaman borderless -->
    <div class="bt-card__header bt-card__header--plain bt-card__header--left">
      <span class="bt-card__title-wrap">
        <span class="bt-card__title">Content Title Here</span>
      </span>
    </div>
    <p class="bt-card__description">Description for additional information displayed below the title.</p>
    <!-- Row Segment — N kez tekrarlanır. Sol/sağ slot Header'ın control sistemiyle
         aynı crdControlSlot() reuse ediyor (None/Icon/Button/Checkbox/Radio Button/
         Switch/Avatar/Avatar Group/Badge/Text) — ikisi de opsiyonel (None ise slot hiç
         render edilmez), varsayılan sol=Icon (eski sabit davranışla aynı), sağ=None. -->
    <div class="bt-card__row">
      <!-- opsiyonel sol slot — leftControl='none' ise hiç render edilmez -->
      <span class="bt-card__row-icon"><span class="bt-card__control-icon"><svg width="16" height="16" viewBox="0 0 24 24" ...></svg></span></span>
      <span class="bt-card__row-content">
        <span class="bt-card__row-col bt-card__row-col--left">
          <span class="bt-card__row-label">Label Text Here</span>
          <!-- opsiyonel, SAĞDAKİNDEN BAĞIMSIZ --> <span class="bt-card__row-add">Additional Text Here</span>
        </span>
        <span class="bt-card__row-col bt-card__row-col--right">
          <span class="bt-card__row-value">Value Text Here</span>
          <!-- opsiyonel, SOLDAKİNDEN BAĞIMSIZ --> <span class="bt-card__row-add">Additional Text Here</span>
        </span>
      </span>
      <!-- opsiyonel sağ slot — rightControl='none' ise hiç render edilmez -->
      <span class="bt-card__row-right"><span class="bt-card__control-icon"><svg ...></svg></span></span>
    </div>
  </div>
  <!-- opsiyonel footer -->
  <div class="bt-card__footer">
    <button class="bt-btn bt-btn--sm bt-btn--base-flat" type="button">Button</button>
    <button class="bt-btn bt-btn--sm bt-btn--primary-solid" type="button">Button</button>
  </div>
</div>
```

**Modifier classes:**
- Header type: `bt-card__header--bordered` (header/body arası alt ayraç) / yok (borderless) — **Background'dan bağımsız**, bkz. aşağıdaki not
- Header background: `bt-card__header--bg` (subtle gri arka plan) / yok (transparent) — **Type'tan bağımsız**, ikisi ayrı ayrı açılıp kapanabilir (4 kombinasyon)
- Header position: `bt-card__header--center` / `bt-card__header--left`
- Control varlığı: `bt-card__header--has-left` / `bt-card__header--has-right` (sadece o taraftaki title padding'ini sıfırlamak için, JS tarafında control seçimine göre otomatik ekleniyor)
- Footer buton düzeni: `bt-card--horizontal` (sağa yaslanmış, 80px sabit) / `bt-card--vertical` (tam genişlik istifleme) — `.bt-card` wrapper'ına eklenir
- Body Title/Subtitle: `bt-card__header--plain` (arka plansız, her zaman borderless/0-padding, body içinde kullanılır)

### 16.2 CSS Tokens

| Element | Property | Token | Fallback |
|---|---|---|---|
| Container | Width | — | 420px |
| Container | Background | `--bt-base-default` | #ffffff |
| Container | Border | `--bt-border-primary-default` | #d4d4d4 |
| Container | Border radius | `--bt-radius-md` | 6px |
| Header | Height | — | 40px |
| Header · Background On | Background | `--bt-base-subtle` | #f5f5f5 |
| Header · Background Off | Background | — | transparent |
| Header · Type Bordered | Border bottom | `--bt-border-primary-default` | #d4d4d4 |
| Header · Type Borderless | Border bottom | — | none |
| Header · Left, boş slot | Title padding (o taraf) | `--bt-space-2xl` | 16px |
| Title | Font | `--bt-title-sm-medium` | 500 14px/16px |
| Title | Color | `--bt-text-primary-default` | #1a1a1a |
| Subtitle | Font | `--bt-subtitle-xs-regular` | 400 12px/16px |
| Subtitle | Color | `--bt-text-primary-emphasis` | #727272 |
| Control slot | Width & Height | — | 40×40px (layout only) |
| Control · Icon | Size / Color | `--bt-icon-primary-strong` | 24×24, #535353 |
| Control · Button | Class | — | `bt-btn bt-btn--sm bt-btn--base-flat bt-btn--icon` (28×28) |
| Control · Checkbox | Class | — | `bt-checkbox__box` (16×16) |
| Control · Switch | Class | — | `bt-switch__track` + `bt-switch__thumb` (32×20 / 16×16) |
| Control · Avatar / Avatar Group | Class | — | `bt-avatar bt-avatar--xs` (28×28), grup için `margin-left:-12px` |
| Control · Badge | Background / Radius | `--bt-base-muted` / `--bt-radius-full` | #e6e6e6 / 9999px |
| Body | Padding | `--bt-space-2xl` | 16px |
| Body | Gap | `--bt-space-md` | 8px |
| Description | Font | `--bt-text-xs-regular` | 400 12px/16px |
| Row · Left icon slot | Size | — | 28×28 slot, 24×24 ikon |
| Row · Left icon | Color | `--bt-icon-primary-strong` | #535353 |
| Row · Label / Value | Font | `--bt-label-xs-regular` | 400 12px/16px |
| Row · Label / Value | Color | `--bt-text-primary-default` | #1a1a1a |
| Row · Additional Text | Font | `--bt-label-xs-regular` | 400 12px/16px |
| Row · Additional Text | Color | `--bt-text-primary-emphasis` | #727272 |
| Row · Col gap (label ↕ additional) | Gap | `--bt-space-xs` | 4px |
| Row · Right icon slot | Size | — | 28×28 slot, 24×24 ikon |
| Footer | Border top | `--bt-border-primary-muted` | #e6e6e6 |
| Footer | Padding | `--bt-space-xl` / `--bt-space-2xl` | 12px / 16px |
| Footer | Gap | `--bt-space-md` | 8px |
| Footer · Horizontal button | Width | — | 80px (sabit) |
| Footer · Vertical button | Width | — | 100% |

**Not — Body Title/Subtitle, Card Header ile aynı özelliklere sahip:** Figma'da "Base Card Content Header" (`757:7380`) `Base Card Header` ile BİREBİR aynı prop setine sahip: Position (Center/Left), Segments (1/2/3 → sol/sağ control), Type (Bordered/Borderless), Subtitle. Playground'a `titleSubtitlePosition`/`titleSubtitleSubtitle`/`titleSubtitleLeftControl`/`titleSubtitleRightControl` prop'ları eklendi — Body Title/Subtitle artık Card Header ile tam feature-parity'de, aynı `crdHeaderHtml()` fonksiyonu (`plain:true` ile) reuse edilerek render ediliyor, bu sayede Position=Center'daki ghost-mirror simetri düzeltmesi de otomatik olarak Body Title/Subtitle'a da uygulanmış oluyor.

**Not — sadeleştirme denemesi geri alındı, yerine `playground.js`'e genel prop gruplama eklendi:** Toplam prop sayısı 11'e çıkınca ("content ve header propertileri birlikte çok karışık" geri bildirimi üzerine) önce 4 prop playground'dan çıkarılıp statik bir tabloya taşınmıştı — kullanıcı bunun istediği çözüm olmadığını belirtip geri aldırdı, 4 prop playground'a geri kondu. Asıl çözüm olarak `docs/js/playground.js`'e opsiyonel bir **`prop.group`** alanı eklendi (`renderPlayground`'ın `propControls` üretimi): bir prop'un `group`'u bir öncekinden farklıysa aralarına küçük bir dikey ayraç + etiket (`.pgd-group-label`) basılıyor. `group` set edilmeyen sayfalarda (projedeki tüm diğer component'ler) davranış birebir aynı kalıyor — sıfır görsel fark, geriye dönük tam uyumlu. Card'ın prop'ları 3 gruba ayrıldı: **Header** (Type/Position/Subtitle/Left Control/Right Control), **Body Title/Subtitle** (Show/Position/Subtitle/Left Control/Right Control), **Body** (Description) — gruplandıkça tekrarlanan ön ek de prop label'larından kaldırıldı (artık sadece "Position"/"Subtitle" vb., ayraç etiketi zaten hangi gruba ait olduğunu gösteriyor). Bu, component'e özel bir çözüm ama altyapısı genel — başka bir component'in playground'unda aynı ihtiyaç çıkarsa `group` alanını eklemek yeterli. **Sonradan** (2026-08-07) grup ismi "Content Header" → **"Body Title/Subtitle"**'a değiştirildi: kullanıcı, Card'ın zaten kendi ana Header'ı olduğu için body içindeki bu ikinci parçayı da "Header" olarak etiketlemenin kafa karıştırdığını belirtti — bu isim değişikliği prop key'lerine kadar indirildi (`contentHeader*` → `titleSubtitle*`), sadece Card'a özel; proje genelindeki Header/Body/Footer grup adlandırma standardına dokunulmadı.

**Not — Body Title/Subtitle Left padding'i her zaman 0 (düzeltme):** Bir önceki notta, Figma node `759:7847`'deki (Content Header, Left, Segments=3 — control'lü) 0 padding'i görüp bunu Card Header'ın "control yoksa 16px, varsa 0" kuralıyla birebir aynı sanmış, `--has-left`/`--has-right`'a bırakmıştım. Kullanıcı bunun yanlış olduğunu belirtti: **Body Title/Subtitle, Left pozisyonda control olsun ya da olmasın HER ZAMAN 0 padding** (`--bt-space-none`) olmalı — Card Header'daki "control yoksa 16px" davranışından BİLİNÇLİ olarak farklı, çünkü Body Title/Subtitle zaten body'nin kendi 16px padding'ine oturuyor, ek bir inset'e ihtiyacı yok. `.bt-card__header--plain.bt-card__header--left .bt-card__title-wrap` kuralı (padding-left/right her ikisi de 0, control varlığından bağımsız) geri eklendi.

**Not — Figma'nın gerçek Header eksen yapısı (Type × Position × Segments):** Figma'da "Base Card Header" 3 bağımsız eksenden oluşuyor: **Type** (Bordered/Borderless), **Position** (Center/Left), **Segments** (1/2/3 — kaç control slotu dolu) → 2×2×3 = **12 toplam varyant**. Bu projede "Segments" ayrı bir değer olarak MODELLENMEDİ — yerine sol/sağ control'ler bağımsız bir içerik-tipi seçimiyle (None dahil, + Figma'nın segments'inde olmayan Checkbox/Switch/Avatar/Avatar Group/Badge/Text seçenekleriyle) genelleştirildi, bu yüzden Position × Segments'in Figma'daki 6 karşılığı (Center-1/2/3, Left-1/2/3) burada ayrı bir enum değil, `leftControl`/`rightControl` kombinasyonlarının özel halleri olarak ortaya çıkıyor. Figma'nın kendi "Segments=2, Position=Center" örneğinde (tek control + karşı tarafta BOŞ bir 40px spacer) tasarımcı sabit-genişlikli boş bir kutuyla simetriyi koruyormuş — bu proje aynı sonucu, karşı taraftaki control'ün ne olursa olsun (Avatar Group gibi geniş içerik dahil) `visibility:hidden` bir "ayna" ile daha genel biçimde sağlıyor (bkz. bir sonraki not).

**Not — Position=Center'da tek taraflı control asimetrisi:** Kullanıcı, Position=Center'da sadece sol VEYA sadece sağ control açıkken title'ın gerçek merkezden kaydığını fark etti — sebep, title-wrap'in `flex:1 1 0` olması ve tek taraflı bir control varken bu kutunun kendisinin asimetrik genişlemesiydi (`text-align:center` sadece KUTUNUN içinde ortalıyor, kutunun kendisi header'ın tam ortasında değilse title de kaymış görünüyor). Düzeltme: Position=Center'da sadece TEK taraf doluyken, boş tarafa **karşı taraftaki control'ün birebir aynı markup'ı** `visibility:hidden` (+ `aria-hidden="true"`) ile "ayna" olarak basılıyor (`crdHeaderHtml` içinde `leftSlot`/`rightSlot`) — bu sayede iki yandaki alan genişliği her zaman eşit kalıyor, control tipi ne olursa olsun (Icon/Button/Avatar Group/Badge/Text farklı genişliklerde olsa da) otomatik doğru genişlikte ayna oluşuyor, JS ile ölçüm gerekmiyor. Her iki taraf da AYNI ANDA dolu ama farklı genişlikte control'ler taşıyorsa (örn. sol Icon + sağ Avatar Group) bu teknik yardımcı olmuyor — bu zaten Usage/Don't bölümünde belgelenen bilinen bir sınırlama (Position=Center'ı asimetrik control'lerle kullanma).

**Not — Control slot padding eksikti:** Figma'nın "Base Card Controls" component'i `p-[var(--radius/radius-sm,4px)]` (mislabeled bir radius token ama değeri 4px — `--bt-space-xs` karşılığı) ile tüm kenarlarda 4px padding taşıyor. İlk implementasyonda bu hiç eklenmemişti (`.bt-card__control` sadece `justify-content:center` ile ortalıyordu, padding yoktu) — dar içeriklerde (Icon/Button vb.) görsel fark yaratmıyordu (flex centering zaten eşdeğer bir sonuç veriyordu) ama Avatar Group/Badge/Text gibi "hug content" geniş içeriklerde header kenarına fazla yakın duruyorlardı. `padding: var(--bt-space-xs, 4px)` + `box-sizing: border-box` eklendi (border-box, dar içeriklerde `min-width:40px`'in padding'i de içine alıp kutuyu büyütmemesi için gerekli).

**Not — Checkbox/Switch interaktivite:** İlk implementasyonda Checkbox/Switch control'leri tamamen statik (tıklanamaz) render ediliyordu. Kullanıcı düzeltmesiyle bunlar Button gibi gerçekten çalışır hale getirildi — Checkbox/Radio/Switch sayfalarının kendi playground önizlemesinde (`chkPreview`/`swPreview`) kullanılan **aynı onclick+`classList.toggle` deseni** reuse edildi: tıklayınca `.bt-checkbox__box--checked` / `.bt-switch__track--on` class'ı toggle'lanıyor, gerçek design system CSS'i (checked/on state renkleri) devreye giriyor. Checkbox'ın checkmark SVG'si (`_chkCheck`) de eklendi — daha önce kutunun içi boştu, checked class'ı toggle'lansa bile görünür bir işaret yoktu.

**Not — Control slot genişliği (hug content):** İlk implementasyonda `.bt-card__control` sabit `width:40px` idi — bu, Avatar Group (76px) veya uzun bir Badge/Text içeriğinde taşmaya/kırpılmaya yol açardı. Kullanıcı düzeltmesiyle `width` → `min-width:40px` yapıldı: Icon/Button/Checkbox/Switch/Avatar gibi dar içeriklerde slot yine tam 40px'te kalıp ortalanıyor, Avatar Group/Badge/Text gibi geniş içeriklerde ise slot içeriğe göre büyüyor (hug content). `height` hâlâ sabit 40px (tüm control içerikleri ≤32px yükseklikte, her zaman header'ın 40px satır yüksekliğine sığıyor).

**Not — Borderless header arka planı (2026-08-05, SONRADAN değiştirildi — bkz. aşağıdaki not):** İlk implementasyonda `.bt-card__header`'ın arka planı (`--bt-base-subtle`) Type'tan bağımsız her zaman uygulanıyordu, sadece border-bottom Bordered/Borderless'a göre koşulluydu. Kullanıcı kararıyla düzeltildi: Borderless artık arka planı da transparent yapıyor — Bordered, subtle gri arka plan + alt çizgiyi BİRLİKTE getiriyor. `.bt-card__header` base kuralı `background:transparent`'a çevrildi, `background: var(--bt-base-subtle)` `.bt-card__header--bordered` modifier'ına taşındı.

**Not — Scrollable Card eklendi (2026-08-12):** Kullanıcı isteğiyle Card'ın 5. varyantı olarak **Scrollable Card** eklendi (`components/card-scrollable`) — Header ve Footer varsayılan olarak açık ve sabit kalır (`flex-shrink:0`), sadece Body scroll olur. Figma'da ayrı bir node'u yok, mevcut `crdHtml`/`crdCss` altyapısı üzerine kuruldu. Varsayılanlar: `showHeader`/`showFooter` `'on'`, `showTitleSubtitle`/`showSegments` `'off'` — yani varsayılan halde Body'de sadece Description görünür.

Description metni bu sayfaya **özel**, daha uzun bir placeholder kullanır — `crdHtml`'in paylaşılan kısa metnine (*"Description for additional information displayed below the title to clarify the purpose of the section."*) DOKUNULMADI (diğer Card sayfalarını etkilememesi için kullanıcı kararıyla bilinçli, ilk denemede yanlışlıkla `crdHtml`'e eklenip TÜM sayfaları etkilemişti — geri alındı). `crdScrollableHtml(variant, props)`, `crdHtml`'in çıktısı üzerinde string replace ile hem `bt-card--scrollable` class'ını hem de Description metnini enjekte ediyor:
```js
function crdScrollableHtml(variant, props) {
  return crdHtml(variant, props)
    .replace('class="bt-card ', 'class="bt-card bt-card--scrollable ')
    .replace('Description for additional information displayed below the title to clarify the purpose of the section.', CRD_SCROLLABLE_DESC_TEXT);
}
```
`CRD_SCROLLABLE_DESC_TEXT`: *"Additional information displayed below the title to provide additional context about the section, clarify its purpose and intended use, explain what type of information or content is included, and help users understand what is expected from them. This supporting text can also be used to highlight important details, provide brief guidance, or explain any requirements that may not be immediately clear from the section title alone."*

Body yüksekliği `.bt-card--scrollable .bt-card__body { height: 120px; overflow-y: auto; }` — **sabit `height`, `max-height` DEĞİL**: scroll alanı içerik miktarına göre büyüyüp küçülmemeli, her zaman aynı standart pencerede kalmalı. 120px, varsayılan haldeki uzun Description metninin bu yüksekliği taşıp scroll'u varsayılan durumda bile göstermesi için seçildi (280px önce denendi, metin sığdığı için scroll tetiklenmiyordu).

**Kritik CSS düzeltmesi — flex-shrink squish bug'ı:** `.bt-card__body` bir flex column (`display:flex; flex-direction:column`). Sabit yükseklikli bir flex container'da, çocukların varsayılan `flex-shrink:1`'i toplam içerik kutunun yüksekliğini aşınca çocukları (Description `<p>`, Row Segment'ler) SIKIŞTIRIP küçültüyordu — istenen "kutu taşıp scroll olsun" değil "içerik küçülsün" davranışıydı (özellikle Segments'in tamamı açıldığında gözle görülür şekilde Description alanı küçülüyordu). Düzeltme: `.bt-card--scrollable .bt-card__body > * { flex-shrink: 0; }` — tüm doğrudan çocuklar (title/subtitle bloğu, description, her row) her zaman doğal boyutunda kalır, taşan kısım kutunun kendi `overflow-y:auto`'suyla scroll olur, hiçbir çocuk sıkışmaz.

`docs/js/pages-web.js`, `docs/css/styles.css` güncellendi.

**Not — Header varsayılan Position artık Left (2026-08-12):** Kullanıcı isteğiyle Card Header'ın varsayılan `Position`'ı **Center'dan Left'e** değiştirildi (Body Title/Subtitle zaten Left varsayılıyordu, dokunulmadı). `crdHeaderHtml(opts)`, `crdHtml(props)`, `crdCss(props)` içindeki `position = ... || 'center'` fallback'leri `'left'` oldu; Card/Default Card/Clickable Card/Selectable Card playground'larının Header grubundaki `position` prop'unun `default`'ı da `'left'`'e çevrildi. Header Types tablosundaki örnekler (Center/Left satırları) etkilenmedi, hepsi kendi `position` değerini açıkça geçiyor.

**Not — Background, Type'tan ayrı bağımsız bir prop oldu (2026-08-12):** Kullanıcı isteğiyle bir önceki notta Type'a (Bordered/Borderless) bağlanan arka plan davranışı geri ayrıştırıldı — artık **Background (On/Off)** kendi başına bağımsız bir Header prop'u, Type sadece alt ayracı (border-bottom) kontrol ediyor. `.bt-card__header--bordered` sadece `border-bottom` taşıyor, yeni `.bt-card__header--bg` class'ı sadece `background: var(--bt-base-subtle)` taşıyor — `crdHeaderHtml(opts)` artık `opts.background` (`'on'`/`'off'`, varsayılan `'on'` — eski "Bordered" görünümüyle birebir aynı) okuyup class'ı bağımsız ekliyor/kaldırıyor. Card/Default Card/Clickable Card/Selectable Card playground'larının Header grubuna `Background` (`TBX_BOOL_OPTS`) prop'u, `type`'ın hemen altına eklendi. (O sırada Collapsible Card henüz `crdHeaderHtml` kullanmıyordu, kendi sabit header'ı vardı — bu, aşağıdaki not ile değişti.)

**Not — icon taşıyıcı vs. icon boyutu (Dialog'daki aynı ayrım, tekrar karışmıştı):** İlk implementasyonda hem header control'ünün 24×24 taşıyıcısında (`.bt-card__control-icon svg { width:100%; height:100% }`) hem de Row Segment'in ikonunda (28×28 `.bt-card__row-icon` doğrudan `svg{width:24px;height:24px}` ile, ara taşıyıcı hiç yoktu) ikon, taşıyıcı kutuyu **dolduracak** şekilde zorlanmıştı — bu, Avatar'ın "ikon = wrapper boyutu" deseniyle YANLIŞ bir benzetme (Dialog'da da aynı hata yapılıp düzeltilmişti, bkz. §15). Doğrusu: taşıyıcı kutu kendi boyutunda sabit kalır (control slotunda 24×24, Row Segment'te 28×28 dış slot → 24×24 iç taşıyıcı), ikonun kendisi ise **kendi tanımlı boyutunda** (`_crdIconScan`, 16×16) taşıyıcının içinde ortalanır, taşıyıcıyı doldurmaz. Düzeltme: `.bt-card__control-icon svg{width:100%;height:100%}` kuralı kaldırıldı; Row Segment'e eksik olan 24×24 ara taşıyıcı (`.bt-card__row-icon` içine iç içe `.bt-card__control-icon` reuse edilerek) eklendi.

**Not — CSS specificity (Dialog'daki aynı bug, tekrar yakalandı):** `.bt-card__description` bir `<p>` etiketine tek class olarak uygulanmıştı (`specificity 0,1,0`) — docs sitesinin genel `.content p` kuralı (`0,1,1`, `styles.css` satır ~1382) daha spesifik olduğu için bunu ezip 14px/emphasis-color/16px-margin-bottom uyguluyordu (bkz. §15.2'deki aynı not, `.bt-dialog__body-text`). Düzeltme: selector `.bt-card__body .bt-card__description` (`specificity 0,2,0`) yapıldı — Dialog'da kullanılan aynı çözüm. **Bu artık projede üçüncü kez tekrarlanan bir hata** (Switch/Checkbox/Radio, Dialog, şimdi Card) — yeni bir component'te herhangi bir `<p>` etiketine tek class uygulanıyorsa, component tamamlanmadan önce mutlaka iki-class'lı bir selector'a (`.bt-x__body .bt-x__description` gibi) geçirilmeli, sona bırakılmamalı.

**Not — Card ailesi 4-tab standardına (Overview/CSS Properties/Usage — Examples hariç) getirildi, TOC'a otomatik Overview linki eklendi (2026-08-12):** Kullanıcı, bazı component sayfalarında Overview/CSS Properties/Examples tab'larının eksik olduğunu fark etti. İnceleme sonucu üç farklı desen bulundu: 4-tab (`Overview, Examples, CSS Properties, Usage` — Button/Checkbox gibi), 3-tab (`Overview, CSS Properties, Usage` — Examples yok, Card/Dialog gibi) ve sadece `Overview` (Clickable/Selectable Card). Kritik bulgu: 4-tab component'lerde **Examples, Overview'daki içeriğin taşınmış hali DEĞİL** — Overview kendi TOC'a eşleşen bölümleriyle (Anatomy/Sizes/States) tam kalıyor, Examples ayrıca kurgulanmış YENİ curated demo playground'ları içeriyor (örn. Checkbox'ın Examples'ında "Unchecked States"/"Checked States" diye iki ayrı tam state matrisi — Overview'daki tek genel playground'dan bağımsız). Bu yüzden site geneline Examples eklemek "mevcut içeriği taşımak" değil, her component için sıfırdan yeni örnek içerik yazmak anlamına geliyor — kapsam büyük olduğu için bu oturumda ertelendi (bkz. CLAUDE.md "Sayfa Tab Yapısı" kuralı, gelecekte component bazında ele alınacak). Bu oturumda sadece Card ailesi kendi içinde tutarlı hale getirildi: Clickable Card ve Selectable Card'a (önceden sadece `Overview` tab'ı vardı) kardeşleriyle (Default/Collapsible/Scrollable Card) aynı CSS Properties + Usage tab'ları eklendi — Examples HİÇBİR Card sayfasına eklenmedi (henüz). Ayrıca `docs/js/app.js`'teki `renderToc()`'a merkezi/otomatik bir **"Overview"** linki eklendi: `page.toc` olan HER sayfanın "On this page" panelinin en üstünde artık sayfanın başına (`#page-title`) atlayan bir link var — bu, her sayfaya manuel eklenmiyor, `renderToc()` kendisi prepend ediyor (yeni bir component eklendiğinde otomatik gelir). Card-default/Card-collapsible'ın toc'larındaki `'Anatomy'` girdileri karşılık gelen `<h2>`'lerde `id` eksikliğinden dolayı çalışmıyordu (dangling toc link) — düzeltildi (`id="Anatomy"` eklendi). `docs/js/app.js`, `docs/js/pages-web.js`, `CLAUDE.md` güncellendi.

**Not — Collapsible Card artık crdHtml'i reuse ediyor, kendi hard-coded header'ı yok (2026-08-12):** Kullanıcı, Collapsible Card'ın Properties panelinin diğer Card sayfalarından eksik göründüğünü belirtti — Header (Type/Background/Position/Subtitle/Left-Right Control) ve Body Title/Subtitle grupları hiç yoktu, çünkü `crdCollapsibleHtml` header'ı elle (hard-coded, sabit borderless + sabit chevron buton) inşa ediyordu, `crdHtml`'i hiç çağırmıyordu. Kullanıcının netleştirmesi: Right Control'ün kendi yapısı/seçenek listesi hiç bozulmayacak — tek istenen, Right Control "Button" seçiliyken o butonun ikonunun chevron olması ve tıklanınca collapse'i tetiklemesi; "Header/Body/Footer aslında hepsi aynı yapı, burada sadece collapsible davranışını demonstrate ediyoruz."

Buna göre üç fonksiyon genişletildi (hepsi geriye dönük %100 uyumlu, opsiyonel parametreler verilmezse davranış birebir eskisiyle aynı):
- `crdControlSlot(kind, override)` — `override` sadece `kind==='button'` iken kullanılır (`{ icon, onClick, ariaLabel }`), verilmezse eski genel buton (scan ikonu, `aria-label="Action"`) render edilir.
- `crdHeaderHtml(opts)` — yeni `opts.rightButtonOverride`, SADECE `rightControl==='button'` olan SAĞ slotta `crdControlSlot`'a iletilir (Left Control hiç etkilenmez, Body Title/Subtitle'ın kendi header çağrısına da iletilmez).
- `crdHtml(variant, props, opts)` — yeni 3. parametre `opts.collapsible`/`opts.expanded`. `collapsible:true` iken: (1) header'a chevron ikonlu + collapse-toggle onclick'li bir `rightButtonOverride` geçilir, (2) Row Segment listesi `.bt-card__collapse-content` ile sarmalanır (Header/Body Title-Subtitle/Description HER ZAMAN görünür kalır, sadece Segment satırları collapse olur — "collapsed state'de Default Card gibi görünür" davranışı korunuyor), (3) kök class'a `bt-card--collapsible` (+ `bt-card--expanded`) eklenir.

`crdCollapsibleHtml(variant, props)` artık tek satırlık bir sarmalayıcı: `crdHtml(variant, p, { collapsible: true, expanded })`. `_colProps` (Collapsible Card'ın playground prop'ları) artık Default Card'ın `_defaultProps`'uyla BİREBİR aynı yapı (Header/Body Title-Subtitle/Body/Footer grupları) — tek farklar: `showHeader` default `'on'` (trigger için header şart), `rightControl` default `'button'` (chevron trigger bu slotta), `showSegments` default `'on'` + `activeSegments` default `'1,2,3'` (collapse davranışını demoda göstermek için). `collapseState` (Collapsed/Expanded) prop'u eskisi gibi grupsuz/ilk sırada kalıyor — playground'da manuel state önizlemesi için.

`docs/js/pages-web.js` güncellendi — `crdCollapsibleCss`'teki gerçekte hiç kullanılmayan `.bt-card__collapse-trigger` doc bloğu da kaldırıldı (markup'ta hiç var olmayan hayalet bir class'tı).

**Not — Collapsed state'de tam gizleme yerine blur/fade "teaser" (2026-08-12, devam 2):** Kullanıcı isteğiyle collapsed state'de segment satırları artık TAMAMEN gizlenmiyor (`max-height:0` değil) — `.bt-card__collapse-content`'in collapsed `max-height`'i **56px**'e çıkarıldı (kısmi bir önizleme/"teaser" gösteriyor), `position:relative` eklendi ve yeni bir `::after` pseudo-element alt kenarda 32px yükseklikte `linear-gradient(transparent → var(--bt-base-default))` + `backdrop-filter: blur(2px)` ile hem fade hem blur karışımı bir "daha fazla içerik var" ipucu veriyor. Expanded'da bu overlay `opacity:0` ile gizleniyor (`max-height` zaten 600px'e çıkıp içeriği tam gösteriyor). Segments kapalıyken (`.bt-card__collapse-content` boş) `:empty` selector'ıyla hem peek hem overlay devre dışı kalıyor — boş bir kutu/blur görünmesin diye. `docs/css/styles.css`, `docs/js/pages-web.js` (`crdCollapsibleCss`, CSS Properties/Anatomy tabloları, States/Usage metinleri) güncellendi.

**Not — Blur, collapse-content kutusundan Body'nin alt kenarına taşındı (2026-08-12, devam 4):** Kullanıcı, blur efektinin sadece `.bt-card__collapse-content` (segment) kutusunun içinde kalmasının doğal durmadığını, `.bt-card__body`'nin (Description + segment birlikte) alt kenarından başlaması gerektiğini belirtti. `::after` artık `.bt-card__collapse-content`'te değil, **`.bt-card--collapsible .bt-card__body`**'de — sadece Collapsible Card'ı etkiler, diğer Card varyantlarının body'sini etkilemez (selector `.bt-card--collapsible` ile scope'landı). Yükseklik 64px'e çıkarıldı (Description'ın alt kısmını da kapsayacak kadar). `collapse-content`'in kendisi hâlâ `max-height:32px`/`600px` ile LAYOUT'u kırpıyor (hangi içeriğin görünür olduğunu belirliyor), blur/fade artık sadece GÖRSEL bir katman olarak body'nin üzerine biniyor. Segments kapalıyken (collapse-content boş, hiçbir şey kırpılmıyor) blur'un gereksiz yere görünmemesi için `:has()` selector'ı kullanıldı: `.bt-card--collapsible .bt-card__body:has(.bt-card__collapse-content:empty)::after { display:none; }` (modern tarayıcı desteği yeterli, proje zaten flexbox/custom property'lere dayanıyor). `docs/css/styles.css`, `docs/js/pages-web.js` (`crdCollapsibleCss`, CSS Properties/Anatomy tabloları, Overview metni) güncellendi.

**Not — Blur teaser: daha kısa peek + üstten yayılan gradual blur (2026-08-12, devam 3):** Kullanıcı, blur'un Segment 2'den başladığını (56px peek, Segment 1 tamamen net görünüyordu, blur sadece alttaki 32px'lik şeritte) ve kart yüksekliğinin gereksiz uzun olduğunu belirtti — istenen: kart daha kısa olsun (Segment 1'in kendisi kadar), blur Segment 1'in üstüne doğru da yayılsın. Düzeltme: collapsed `max-height` **56px → 32px**'e düşürüldü (yaklaşık tek satır). `::after`'ın kapsama alanı `bottom:0;height:32px`'ten **`inset:0`**'a (peek alanının TAMAMI) genişletildi — `backdrop-filter` kendi başına kademeli olamadığı için yeni bir **`mask-image: linear-gradient(to bottom, transparent, black)`** eklendi: bu, blur+gradient efektinin üstte (Segment 1'in üst kenarında) görünmez başlayıp alt kenara doğru giderek belirginleşmesini sağlıyor — sert bir "32px'te başlayan çizgi" yerine yumuşak/kademeli bir geçiş. `backdrop-filter` `blur(2px)`→`blur(3px)`'e çıkarıldı (artık mask ile modüle edildiği için alt kenarda daha belirgin olması gerekiyordu). `docs/css/styles.css`, `docs/js/pages-web.js` (`crdCollapsibleCss`, CSS Properties/Anatomy tabloları, Overview/States/Usage metinleri) güncellendi.

**Not — Chevron yönü: varsayılan aşağı, expanded'da yukarı (2026-08-12, devam):** İlk implementasyonda chevron sağ ok (›) olarak başlayıp expanded'da 90° dönüp aşağı (▾) bakıyordu. Kullanıcı kararıyla tersine çevrildi: `_crdChevronIcon`'ın path'i aşağı ok (▾, `M6 9l6 6 6-6`) oldu, `.bt-card--expanded .bt-card__chevron`'ın rotasyonu `rotate(90deg)`'den **`rotate(180deg)`**'ye çevrildi — artık varsayılan (collapsed) durumda aşağı ok, expanded'da 180° dönüp yukarı ok (▴) gösteriyor (standart accordion konvansiyonu). `docs/css/styles.css`, `docs/js/pages-web.js` güncellendi.

**Not — Body Title/Subtitle control slotu 40×40'tan 28×28'e düzeltildi (2026-08-12):** Kullanıcı, Body Title/Subtitle'ın control'lerinin (örn. Radio Button seçiliyken) Description'ın sol kenarıyla hizasız durduğunu fark etti. Kök neden: `crdHeaderHtml`, hem gerçek Header hem Body Title/Subtitle (plain mode) için AYNI `.bt-card__control` class'ını (40×40, `justify-content:center`) kullanıyordu — 16×16'lık dar bir içerik (Radio/Checkbox/Icon) bu 40px'lik kutunun ortasında konumlanınca, görsel sol kenarı Body'nin 16px padding'inden ~12px daha içeride kalıyor, Description'ın (doğrudan 16px padding'te başlayan) sol kenarıyla eşleşmiyordu. Kullanıcı, Figma'da Body ve Segment control'lerini zaten **28×28**'lik bir span içinde tasarladığını belirtti (Header'ın 40×40'ından farklı) — Row Segment'in `.bt-card__row-icon`/`.bt-card__row-right`'ı zaten bu 28×28 boyutu kullanıyordu, sadece Body Title/Subtitle yanlışlıkla Header'ın 40×40'ını reuse etmişti. Düzeltme: yeni bir modifier class `.bt-card__control--content` (`min-width:28px; height:28px; padding:0`) eklendi — `.bt-card__control` ile birlikte, sadece `plain:true` olduğunda (`controlCls = 'bt-card__control' + (plain ? ' bt-card__control--content' : '')`) uygulanıyor. `min-width` (width DEĞİL) — Avatar Group/Badge/Text gibi 28px'ten geniş içerik hâlâ büyüyebiliyor, Row Segment'teki aynı "hug content" deseni. Gerçek Header (kartın üstü) HİÇ dokunulmadı, hâlâ 40×40. `docs/css/styles.css`, `docs/js/pages-web.js` (`crdHeaderHtml`, CSS Properties tabloları) güncellendi.

**Not — Body Title/Subtitle ve Row Segment control'leri artık kutunun ortasında değil kenarına yaslı (2026-08-12):** Kullanıcı, Left Control'ün kendi span'ının SOL kenarına, Right Control'ün SAĞ kenarına yaslı durmasını istedi (önceden ikisi de `justify-content:center` ile kutunun ortasındaydı — 28×28 min-width kutu, içerik daha darsa gerçek bir slack alanı bırakıyordu). Kapsam kullanıcı kararıyla netleştirildi: **sadece Body Title/Subtitle ve Row Segment** — gerçek Header (kartın üstü, 40×40) daha önceki karar gereği dokunulmadı, hâlâ ortalı. Row Segment'te zaten ayrı sol/sağ class'lar vardı (`.bt-card__row-icon`/`.bt-card__row-right`), sadece `justify-content: center` → `flex-start`/`flex-end` değiştirildi. Body Title/Subtitle'da tek bir `.bt-card__control--content` class'ı hem sol hem sağ için kullanıldığından, yeni `.bt-card__control--left { justify-content:flex-start }` / `.bt-card__control--right { justify-content:flex-end }` modifier'ları eklendi — `crdHeaderHtml` artık `controlClsLeft`/`controlClsRight` olarak iki ayrı class string'i üretiyor (`plain` modda `--content` ile birlikte `--left`/`--right` de ekleniyor), Position=Center'daki ghost-mirror span'ları da kendi tarafının class'ını kullanıyor. `docs/css/styles.css`, `docs/js/pages-web.js` güncellendi.

**Not — Control slot'a Radio Button eklendi (2026-08-12):** Kullanıcı isteğiyle `CARD_CONTROL_OPTS`'a **Radio Button** seçeneği eklendi (Checkbox'ın hemen altına) — Header'ın sol/sağ control slotları, Row Segment'in sol/sağ slotları ve Body Title/Subtitle'ın control'leri dahil `crdControlSlot(kind)` kullanan HER yer bunu otomatik alıyor (tek kaynak fonksiyon). Radio Button sayfasının gerçek `.bt-radio__dot` class'ı (16×16, Checkbox'ın `.bt-checkbox__box`'ıyla aynı boyutta) reuse edildi — Checkbox/Switch'teki gibi gerçekten tıklanabilir: `onclick="this.querySelector('.bt-radio__dot').classList.toggle('bt-radio__dot--selected')"`. Aslında koddaki eski bir yorum satırı ("Checkbox/Radio/Switch sayfalarındaki aynı onclick+classList.toggle deseni") Radio'yu zaten kapsamı içinde varsaymıştı ama hiç implemente edilmemişti — bu eksik şimdi tamamlandı. `docs/js/pages-web.js` (`CARD_CONTROL_OPTS`, `crdControlSlot`, Control Slots örnek tablosu, CSS Properties tablosu) güncellendi.

### 16.3 JS Davranışı

Card'ın kendisi statik bir kapsayıcı — özel bir açma/kapama/state mekanizması yok. Playground'da `crdHeaderHtml(opts)` hem ana Header hem Body Title/Subtitle için tek kaynak render fonksiyonu (`plain:true` ile ayraçsız/arka plansız moda geçiyor); `crdControlSlot(kind)` Header VE Row Segment'in sol/sağ slot içeriğini üretiyor (reuse edilen tek kaynak); `crdRowHtml(opts)` tek bir Row Segment üretiyor — `opts: { leftControl, rightControl, showLeftAdditionalText, showRightAdditionalText, showLabel, showValue }`. `crdHtml`, aktif her segment numarası için `crdRowHtml`'i o segmentin KENDİ `seg{N}LeftControl`/`seg{N}RightControl`/`seg{N}LeftAdditionalText`/`seg{N}RightAdditionalText`/`seg{N}ShowLabel`/`seg{N}ShowValue` prop'larıyla çağırıyor (bkz. aşağıdaki not — segmentler artık bağımsız). Yeni bir projeye taşırken bu üç fonksiyon (+ `crdHtml` tam kart assembly'si) `docs/js/pages-web.js`'ten kopyalanabilir, JS bağımlılığı yok (tamamen string template).

**Not — Row Segment control sistemi Header'la eşitlendi (2026-08-07):** Row Segment'in sol/sağ 28×28 slotları eskiden simetrik değildi ve içerik seçimi yoktu: sol ikon (`.bt-card__row-icon`) her zaman sabit/açık bir tek ikondu (toggle edilemiyordu), sağ slot (`.bt-card__row-right`) sadece on/off bir toggle'dı (yine sabit bir ikon). Ayrıca "Additional Text" TEK bir toggle'dı ve Label (sol sütun) İLE Value (sağ sütun) altına AYNI ANDA ekleniyordu, ayrı ayrı kontrol edilemiyordu. Kullanıcı kararıyla ikisi de Header'ın control sistemiyle eşitlendi: `crdControlSlot(kind)` reuse ederek None/Icon/Button/Checkbox/Switch/Avatar/Avatar Group/Badge/Text arasından seçim sunuyor (varsayılan sol=Icon — eski sabit davranışla görsel olarak birebir aynı, sağ=None — eski off ile aynı); Additional Text de Label/Value için BAĞIMSIZ iki toggle'a bölündü. `.bt-card__row-icon`/`.bt-card__row-right`'ın `width:28px` sabiti `min-width:28px`'e çevrildi (Header'ın `.bt-card__control`'ündeki "hug content" deseniyle aynı) — artık Badge/Avatar Group/Text gibi 28px'ten geniş içerik de taşabilmeden sığıyor.

**Not — Row Segment control'leri PER-SEGMENT hale getirildi, `config.props` dinamikleşti (2026-08-07, devam):** Bir önceki notta eklenen Left/Right Control + Additional Text hâlâ TÜM aktif segmentler arasında PAYLAŞILAN tek bir ortak ayar setiydi (5 segment açıksa hepsi aynı control'ü/aynı additional-text durumunu gösteriyordu). Kullanıcı bunun yanlış olduğunu, bu özelliklerin segmentlere ait olduğunu belirtti — her segment KENDİ bağımsız Left Control / Right Control / Left Additional Text / Right Additional Text / **Show Value** (yeni, Value metnini gösterip gizleme) değerlerine sahip olmalı. Ayrıca varsayılan davranış "5 segment açık" yerine "sadece Segment 1 açık, diğerleri gerektikçe eklenip özelleştirilir" olarak değiştirildi. Bunu desteklemek için playground.js'e genel bir altyapı eklendi: `config.props` artık statik bir dizi yerine `(currentProps) => [...]` şeklinde bir FONKSİYON olabilir (`_pgdResolveProps` helper'ı, bkz. §21 "Dinamik props") — Card'ın props fonksiyonu, "Active Segments" seçimindeki her aktif numara için `Segment {N}` adında ayrı bir prop grubu (`seg{N}LeftControl` vb.) üretiyor; inaktif bir segmentin grubu drawer'da hiç görünmüyor. Prop key'leri `seg1LeftControl`, `seg1RightControl`, `seg1LeftAdditionalText`, `seg1RightAdditionalText`, `seg1ShowValue` (ve 2-5 için aynı desen). Bu, mevcut TÜM diğer playground'ları (statik `config.props` dizisi kullananlar) etkilemiyor — tamamen opt-in bir motor özelliği.

**Not — Show Label eklendi (2026-08-12):** Kullanıcı, `Show Value`'nun simetriği olarak Row Segment'e **Show Label** (`seg{N}ShowLabel`, On/Off, varsayılan On) prop'unu istedi — Value metni nasıl gizlenebiliyorsa Label metni de (`.bt-card__row-label`) bağımsız olarak gizlenebiliyor artık. `crdRowHtml(opts)`'a `showLabel` eklendi (`o.showLabel !== false`, Value ile aynı desen), `crdHtml`/`crdCollapsibleHtml`'deki per-segment `crdRowHtml` çağrılarına `showLabel: (p[\`seg${i}ShowLabel\`] || 'on') === 'on'` eklendi. Card/Default Card/Clickable Card/Collapsible Card/Selectable Card'ın hepsindeki dinamik segProps üretimine `Show Label` prop'u, `Show Value`'nun hemen üstüne eklendi.

## 17. Data Table (Grid)

Figma kaynağı: Bentas DS dosyasının "Grid" sayfası — `HeaderCell` (componentSet, node `205:23581`) + `GridCell` (componentSet, node `208:29046`) + `No Record Available` (componentSet, node `222:16015`). Data Table, bir tablonun başlık satırı (Header Cell) ve veri hücrelerini (Grid Cell) temsil eden iki paralel component'ten oluşuyor — Card'ın Header/Body ayrımına benzer ama HeaderCell ve GridCell birbirinin varyantı değil, tabloda AYNI ANDA, farklı satırlarda kullanılan iki bağımsız component.

**Not — Position ekseni corner-radius DEĞİL, kenar border'ları belirliyor:** Figma'da hem HeaderCell hem GridCell'in `Position` varyantı (Left/Middle/Right) ilk bakışta "köşe yuvarlaklığı" gibi görünse de, gerçekte tüm corner-radius değerleri her Position'da 0 — Position sadece hangi DIŞ KENAR border'larının çizileceğini kontrol ediyor: Left → sol+alt (Header'da +üst), Middle → sadece alt (Header'da +üst), Right → sağ+alt (Header'da +üst). Böylece yan yana dizilen kolonlar arasında çift border oluşmuyor, sadece tablonun dış sol/sağ kenarında görünür bir çizgi kalıyor. Bir tabloda: ilk kolon Left, son kolon Right, arası Middle olmalı. `State` (Default/Hover/Active) arka planı değiştiriyor: `--bt-base-default` (#ffffff) / `--bt-base-subtle` (#f5f5f5) / `--bt-surface-brand-subtle` (#e2edfc) — Card'daki aynı üç renkle birebir aynı.

**Not — Figma'nın bağımsız show* boolean'ları Leading/Trailing'e sadeleştirildi (Card'daki control sistemiyle aynı gerekçe):** GridCell'in Figma'da 12 bağımsız boolean'ı var (Left Control, Checkbox, Dot, Avatar, Avatar Group, Content/metin, Badge, Button, Switch, Inline TextBox, Inline DropDown, Right Control) — teorik olarak hepsi aynı anda açılabilir. Tek bir "content type" dropdown'una sadeleştirmek yerine (Card Header'daki gibi), Figma'nın kendi DOM sırası korunarak İKİ ayrı single-select'e bölündü: **Leading Control** (metinden ÖNCE gelenler — None/Checkbox/Dot/Avatar/Avatar Group) ve **Trailing Control** (metinden SONRA gelenler — None/Badge/Button/Switch/Inline TextBox/Inline Dropdown). `Content` (metin) bu ikisinden bağımsız kendi boolean'ı. Bu ayrım, "Avatar + isim metni" veya "sadece Badge" gibi gerçekçi kombinasyonları tek bir dropdown'dan daha doğru temsil ediyor — kullanıcının "avatarlı, badge'li versiyonlar var" diye tarif ettiği tam olarak bu. HeaderCell'de aynı mantıkla Checkbox (select-all) ayrı bir boolean, Sort Control kendi başına (Up/Down ikonlarını bağımsız gösterip gizleyebilen bir `Sort Direction: Both/Up/Down` seçiciyle), Filter ayrı bir boolean.

### 17.1 Markup

```html
<!-- Header Cell -->
<div class="bt-grid__header-cell bt-grid__header-cell--left">
  <span class="bt-grid__control"><span class="bt-grid__control-icon"><svg>...</svg></span></span> <!-- Left Control, opsiyonel -->
  <span class="bt-grid__control" onclick="...checkbox toggle..."><span class="bt-checkbox__box">...</span></span> <!-- Checkbox, opsiyonel -->
  <span class="bt-grid__content">Header Cell</span>
  <span class="bt-grid__sort"> <!-- Sort Control, opsiyonel -->
    <span class="bt-grid__control"><svg><!-- move-up --></svg></span>
    <span class="bt-grid__control"><svg><!-- move-down --></svg></span>
  </span>
  <span class="bt-grid__control"><svg><!-- funnel --></svg></span> <!-- Filter, opsiyonel -->
  <span class="bt-grid__control"><svg><!-- ellipsis-vertical --></svg></span> <!-- Right Control, opsiyonel -->
</div>

<!-- Grid (body) Cell -->
<div class="bt-grid__cell bt-grid__cell--left">
  <span class="bt-grid__control">...</span> <!-- Left Control, opsiyonel -->
  <!-- Leading Control (None/Checkbox/Dot/Avatar/Avatar Group), opsiyonel -->
  <span class="bt-grid__control"><span class="bt-avatar bt-avatar--xs bt-avatar--brand">...</span></span>
  <span class="bt-grid__content">Grid Cell</span>
  <!-- Trailing Control (None/Badge/Button/Switch/Inline TextBox/Inline Dropdown), opsiyonel -->
  <span class="bt-grid__control"><span class="bt-btn bt-btn--sm ...">...</span></span>
  <span class="bt-grid__control">...</span> <!-- Right Control, opsiyonel -->
</div>

<!-- Tablo — satırlar .bt-grid__row ile sarmalanır -->
<div class="bt-grid">
  <div class="bt-grid__row"><!-- header cells --></div>
  <div class="bt-grid__row"><!-- body cells --></div>
  ...
</div>

<!-- No Record Available -->
<div class="bt-grid__no-record"><span class="bt-grid__no-record-text">No records available</span></div>
```

**Reuse edilen gerçek component'ler:** Checkbox → `.bt-checkbox__box` (Card'daki aynı onclick+classList.toggle deseni), Avatar/Avatar Group → `.bt-avatar bt-avatar--xs` (Card'daki `-12px` bindirme deseni), Switch → `.bt-switch__track`/`.bt-switch__thumb`, Badge → gerçek `badgeHtml()` fonksiyonu (Badge artık class değil fonksiyon tabanlı), Button → `bt-btn bt-btn--sm bt-btn--primary-solid`, Inline TextBox/Dropdown → gerçek `.bt-tbx` yapısı (`_tbxCls`/`_tbxInputInner`/`_ddInputInner` reuse edilir, Label ve Helper Text hücrede hiç render edilmez — Figma'da da gizli, tablo hücresinde gereksiz).

### 17.2 CSS Tokens

| Element | Property | Token | Fallback |
|---|---|---|---|
| Header Cell | Height | — | 36px |
| Header Cell | Background (Default/Hover/Active) | `--bt-base-default` / `--bt-base-subtle` / `--bt-surface-brand-subtle` | #ffffff / #f5f5f5 / #e2edfc |
| Header Cell | Border | `--bt-border-primary-default` | #d4d4d4 |
| Header Cell · Content | Padding | `--bt-space-sm` | 6px |
| Header Cell · Content | Font | `--bt-text-xs-medium` | 500 12px/16px |
| Grid Cell | Height | — | 32px |
| Grid Cell | Background (Default/Hover/Active) | aynı Header Cell ile | aynı |
| Grid Cell | Border | sadece alt (+ Position'a göre sol/sağ) | #d4d4d4 |
| Grid Cell · Content | Padding | `--bt-space-md` | 8px |
| Grid Cell · Content | Font | `--bt-text-xs-regular` | 400 12px/16px |
| Control slot | Width / Height | — | min-width 28px (hug content) / 28px sabit |
| Control · Dot | Size / Color | `--bt-icon-primary-strong` | 8×8, #535353 |
| Control · Icon (Left/Right/Sort/Filter) | Size / Color | `--bt-icon-primary-strong` | 16×16, #535353 |
| Inline TextBox/Dropdown | Min-width | — | 120px |
| No Record Available | Height | — | 56px |
| No Record Available · Text | Color | `--bt-text-primary-emphasis` | #727272 |

### 17.3 JS Davranışı

`gridHeaderCellHtml(opts)` ve `gridCellHtml(opts)` — sırasıyla Header Cell ve Grid Cell için tek kaynak render fonksiyonları, `opts: { position, state, showLeft, showCheckbox/leading, showContent, contentText, showSort/trailing, sortDir, showFilter, showRight, width, sticky, frozenEdge }`. `sticky` (px sayısı veya `null`) verilirse hücreye `position:sticky;left:${sticky}px;z-index:5;` eklenir — Frozen Column sayfası için (bkz. §17.4), diğer TÜM çağrılarda `undefined` kalır, davranış değişmez. `frozenEdge:true` verilirse `bt-grid__header-cell--frozen-edge`/`bt-grid__cell--frozen-edge` class'ı eklenir (donmuş alanın sağ kenarına ince bir gölge). `gridLeadingHtml(kind)`/`gridTrailingHtml(kind)` — Leading/Trailing control içeriğini üretir (None/Checkbox/Dot/Avatar/Avatar Group ve None/Badge/Button/Switch/Inline TextBox/Inline Dropdown). `gridNoRecordHtml(opts)`. Yeni bir projeye taşırken bu fonksiyonlar `docs/js/pages-web.js`'ten kopyalanabilir, JS bağımlılığı yok.

### 17.4 Data Table Frozen Column (2026-08-12'de eklendi)

**Figma'da karşılığı YOK** — "Grid" sayfası kontrol edildi (`page.findAll(n => /frozen|pinned|sticky/i.test(n.name))`, 0 sonuç), bu genel bir UX pattern'i (yatay scroll'da ilk N kolonu sabit tutmak), gerçek `gridHeaderCellHtml`/`gridCellHtml` yapı taşları reuse edilerek CSS `position:sticky` ile sıfırdan tasarlandı (kullanıcı isteğiyle, bkz. HISTORY.md). Kullanıcının onayladığı kapsam: ayrı bir sayfa (`components/data-table-frozen-column`), nav'da "Data Table" artık bir grup (Card/Inputs ile aynı desen) — child'lar **Data Table** (mevcut) ve **Data Table Frozen Column** (yeni).

**Neden ayrı bir kolon seti gerekti:** Ana Data Table sayfasının kolonları (Checkbox/Name/Role/Status/Actions, ~510-634px) tipik bir playground kutusunda yatay scroll'a hiç girmiyor — frozen-column davranışını göstermek için gerçekten taşan bir genişlik gerekiyordu. Bu yüzden `gridFrozenColumns(p)` Department/Email/Location/Last Login kolonlarını ekliyor (toplam ~1330px). `_gridTableRowsData`'ya (ana sayfayla PAYLAŞILAN aynı dizi) bu yeni alanlar eklendi — ana sayfa bu alanları kullanmadığı için geriye dönük hiçbir şeyi bozmuyor.

> **Güncelleme (2026-08-24, devam 4):** Department/Location/Last Login başlangıçta content-kind sistemine dahil edilmemişti (salt statik metin). Kullanıcı "tüm örneklerde tüm kolonların properties'i olmalı" isteğiyle bunlara da `departmentContent`/`locationContent`/`lastLoginContent` (varsayılan `'none'`, ID/Name/Role ile BİREBİR aynı `gridContentKindToSlots()` mekanizması) eklendi — artık Frozen Column First'te 8, Frozen Column Last'ta 9 (Actions dahil) Columns prop'u var, bkz. HISTORY.md.

**Markup:**
```html
<div class="bt-grid-scroll-x"> <!-- overflow-x:auto — donmuş kolonların left ofseti buna göre hesaplanır -->
  <div class="bt-grid">
    <div class="bt-grid__row">
      <div class="bt-grid__header-cell ..." style="...;position:sticky;left:0px;z-index:5;">Checkbox</div>
      <div class="bt-grid__header-cell ... bt-grid__header-cell--frozen-edge" style="...;position:sticky;left:44px;z-index:5;">Name</div>
      <div class="bt-grid__header-cell ...">Role</div> <!-- sticky yok, normal scroll -->
      ...
    </div>
    <div class="bt-grid__body">...satırlar aynı desenle...</div>
  </div>
</div>
```

**JS davranışı:** `gridFrozenColumns(p)` — `p.frozenCount` (1 veya 2) kadar SOLDAKİ kolonu `frozen:true` işaretler, her biri için `sticky` (kendinden ÖNCEKİ donmuş kolonların toplam genişliği, kümülatif) hesaplar, son donmuş kolonu `isLastFrozen:true` ile işaretler. `gridFrozenTableHtml(props)` ana `gridTableHtml`'in birebir aynısı ama (a) `gridFrozenColumns` kullanır, (b) her hücreye `sticky`/`frozenEdge` geçirir, (c) `.bt-grid`'i `.bt-grid-scroll-x` ile sarar. `gridFrozenTableCss` CSS tab'ı için aynı bilgiyi `position:sticky;left:Npx;z-index:5;` kuralları olarak üretir.

**CSS:** `.bt-grid-scroll-x { overflow-x: auto; max-width: 100%; }` — yeni. `.bt-grid__header-cell--frozen-edge`/`.bt-grid__cell--frozen-edge { box-shadow: 2px 0 2px rgba(16,24,40,0.051); }` — donmuş alanın sağ kenarını ayırt eden ince gölge, sadece son donmuş kolonda; renk/blur `--bt-shadow-xs`'ten (`0 1px 2px rgba(16,24,40,0.051)`) AYNEN alındı, sadece yönü 90° döndürülüp yatay bir edge-shadow'a çevrildi (token vertical elevation shadow'u temsil ettiği için birebir `var()` ile referans verilemedi, bkz. devam 19 notu). Donmuş hücrelerin arka planı zaten `.bt-grid__cell`/`.bt-grid__header-cell`'in kendi opak arka planından geliyor (state'e göre `--bt-base-default`/`--bt-base-subtle`/`--bt-surface-brand-subtle`) — sticky için ayrıca bir arka plan tanımlamaya gerek yok, altından kayan kolonları zaten opak olarak örtüyor.

**Not — Frozen edge gölgesi token'sız hardcoded değerden `--bt-shadow-xs`'i reuse edecek şekilde düzeltildi (2026-08-12, devam 19):** Kullanıcı, kenar gölgesinin hangi `--bt-*` değişkenini kullandığını sordu — cevap: hiçbirini, `rgba(16,24,40,0.08)` tamamen hardcoded'dı (CLAUDE.md'nin token kuralını ihlal ediyordu). Kullanıcı `--bt-shadow-xs`'i reuse etmeyi seçti. Token'ın kendisi `0 1px 2px rgba(16,24,40,0.051)` (vertical elevation shadow) — bu proje CSS custom property'leri parça parça (sadece renk, sadece blur) reuse etmeye izin vermiyor, tüm token monolitik bir box-shadow değeri, bu yüzden birebir `var(--bt-shadow-xs)` ile yeni bir YÖN (horizontal) üretilemedi. Bunun yerine token'ın renk (`rgba(16,24,40,0.051)`) ve blur (`2px`) değerleri AYNEN kopyalanıp x/y offset'i döndürüldü: `2px 0 2px rgba(16,24,40,0.051)`. `docs/css/styles.css` güncellendi.

**Not — `.bt-grid__body`'nin global `overflow:auto`'su body hücrelerinde sticky'yi kırıyordu, container-scoped'a taşınarak düzeltildi (2026-08-12, devam 18):** Kullanıcı, frozen olması gereken kolonun body satırlarında yine de scroll ettiğini bildirdi (header'da doğru çalışıyordu). Kök neden: `.bt-grid__body { overflow: auto; }` "Alanı Doldurma" özelliği için eklenmişken (devam 4) YANLIŞLIKLA base/global kuraldı, sadece `.bt-grid-container` içindeyken değil HER ZAMAN uygulanıyordu — "tek başına kullanımda görsel fark yaratmaz" varsayımı doğruydu (gerçekten dikey scroll tetiklenmiyordu) ama YANLIŞTI: `overflow:auto`, scrollbar görünmese bile `.bt-grid__body`'yi kendi başına bir scroll container'a çeviriyor, bu da CSS spec gereği içindeki `position:sticky` hücrelerin containing block'ını (header dışında kalan TÜM body hücreleri, çünkü header `.bt-grid__body`'nin DIŞINDA, kendi ayrı `.bt-grid__row`'unda) `.bt-grid-scroll-x` yerine `.bt-grid__body`'nin kendisi yapıyordu — `.bt-grid__body` asla kendi genişliğinde scroll olmadığı için (içeriği kendi genişliğiyle tam örtüşüyor) sticky hücreler hiç sabitlenmeden normal akışta kalıp diğer her şeyle birlikte kayıyordu. Düzeltme: `overflow:auto` base `.bt-grid__body` kuralından kaldırıldı, `.bt-grid-container .bt-grid__body`'ye (zaten orada olan `flex:1;min-height:0`'ın yanına) taşındı — Alanı Doldurma özelliği (sadece `.bt-grid-container` içinde devreye giriyordu zaten) hiç etkilenmedi, standalone/Frozen Column kullanımı artık ara bir scroll container oluşturmuyor. `docs/css/styles.css` güncellendi.

**Not — `position:fixed` tek başına yeterli gelmedi (hard refresh sonrası bile playground'da bozuk kaldı) — DOM portal deseniyle kesin çözüldü (2026-08-12, devam 17):** Bir önceki not (devam 16), `position:fixed`'in `.example-viewer`/`.example-viewer-preview`'ın overflow kırpmasını atlayacağını varsayıyordu (hiçbir ata transform/filter/contain kullanmadığı doğrulanmıştı). Kullanıcı hard refresh yaptıktan SONRA bile playground'da menünün hâlâ yanlış konumda ve stilsiz/şeffaf göründüğünü bildirdi — bu, teorik CSS analizinin (containing block/overflow davranışı) yakalayamadığı başka bir etken olduğunu gösterdi (kök neden kesin izole edilemedi — Chrome bu oturumda bağlı olmadığı için DevTools ile doğrudan doğrulama yapılamadı). Kesin/garantili bir çözüm için DOM PORTAL deseni uygulandı: `btGridMenuToggle` artık menu açılınca `.bt-grid__menu-list`'i (JS referansıyla, `list._btGridHome = menu` ile nereden geldiğini hatırlayarak) gerçekten `document.body.appendChild(list)` ile taşıyor — liste artık DOM'da hangi ata zincirinin altında olduğundan TAMAMEN bağımsız, doğrudan `<body>`'nin çocuğu. Kapanınca (`btGridMenuHide` helper — item tıklama/dışarı tıklama/scroll üçünde de kullanılıyor) `list._btGridHome.appendChild(list)` ile orijinal `.bt-grid__menu`'süne geri taşınıyor (orphan bırakmamak için). `display` artık `.bt-grid__menu--open` ata class'ı üzerinden DEĞİL doğrudan `list.style.display` inline set ediliyor — çünkü liste portal'landıktan sonra `.bt-grid__menu`'nün alt öğesi olmadığı için ata-tabanlı bir CSS selector zaten çalışamazdı. Outside-click listener'ı hem `.bt-grid__menu` (tetikleyici) hem `.bt-grid__menu-list` (artık body'de) ikisini de kontrol edecek şekilde güncellendi. Bilinen kabul edilebilir sınırlama: menu açıkken playground'un Properties drawer'ından bir prop değiştirilirse (tablo yeniden render edilirse) portal'lanmış liste orphan kalabilir — düşük olasılıklı bir edge case, bu bir docs/demo sitesi kapsamında MutationObserver gibi ağır bir çözüm gerektirmiyor. `docs/css/styles.css`, `docs/js/pages-web.js` güncellendi.

**Not — Overflow menu playground'da yanlış görünüyordu (isolation mode'da doğruydu) — kök neden `.example-viewer`/`.example-viewer-preview`'ın overflow kırpması, `position:fixed`'e geçilerek düzeltildi (2026-08-12, devam 16):** Kullanıcı, menünün normal sayfadaki playground'da doğru style'da görünmediğini ama "Open in isolation mode" ile açtığında doğru göründüğünü bildirdi. Kök neden bulundu: `docs/js/playground.js`'teki playground chrome'u, `config.preview(...)` çıktısını `.example-viewer` (`overflow:hidden;border-radius:10px`) → `.example-viewer-preview` (`overflow:auto;max-height:460px`) içine sarıyor — bu iki sarmalayıcı, `.bt-grid__menu-list`'in eski `position:absolute` popup'ını (kutunun sınırlarını aşan kısmını) kırpıyordu. `docs/isolation.html` ise `cfg.preview(...)`'i DOĞRUDAN basit bir `.iso-shell` (`overflow` kısıtı yok) içine koyduğu için orada sorun görünmüyordu — bu fark kullanıcının gözlemlediği "isolation'da doğru" davranışın nedeniydi. Düzeltme: `.bt-grid__menu-list` `position:absolute`'ten `position:fixed`'e geçirildi — hiçbir ata (`.example-viewer`, `.pgd-viewport-frame` vb.) `transform`/`filter`/`contain` kullanmadığı için `position:fixed`'in containing block'ı viewport'ta kalıyor, `overflow:hidden`/`auto` sarmalayıcılarını tamamen atlıyor (bu CSS gerçeği doğrulanarak seçildi — DOM portal'ına gerek kalmadı). `top`/`right` artık CSS'te sabit değil, `btGridMenuToggle` içinde `btn.getBoundingClientRect()`'ten hesaplanıp inline set ediliyor. Ek güvenlik: `position:fixed` konumu açılışta bir kere hesaplandığı için sayfa/iç scroll kaydırılırsa buton'dan kopabilir — bunu önlemek yerine `document.addEventListener('scroll', ..., true)` (capture, iç içe scroll container'ları da yakalar) ile menüyü basitçe kapatan bir listener eklendi. `docs/css/styles.css`, `docs/js/pages-web.js` güncellendi.

**Not — Düzenle ikonu lucide `pencil`'den `pencil-line`'a değiştirildi (2026-08-12, devam 15):** Kullanıcı isteğiyle. Path resmi lucide kaynağından (WebFetch) alındı: `<path d="M13 21h8"/><path d="m15 5 4 4"/><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/>` — `pencil`'den farkı sadece ek bir alt çizgi (`M13 21h8`), kalemin kendisi aynı. `_gridIconEditItem` sabiti güncellendi (isim değişmedi, hâlâ "edit" semantiğini taşıyor). `docs/js/pages-web.js` güncellendi.

**Not — Sil ikonu (trash-2) hatalı path data'yla eklenmişti, gerçek lucide path'iyle düzeltildi (2026-08-12, devam 14):** Kullanıcı ikonlar eklendikten sonra menu item'ların stilinin bozulduğunu bildirdi. Chrome bağlı olmadığı için görsel doğrulama yapılamadı; bunun yerine `_gridIconEditItem` (pencil) ve `_gridIconCopyItem` (copy) lucide'nin resmi kaynağıyla (`raw.githubusercontent.com/lucide-icons/lucide/main/icons/*.svg`, WebFetch ile) karşılaştırıldı — ikisi de birebir doğruydu. `_gridIconTrashItem` (trash-2) İSE hatalıydı: elle yazılırken gövdenin yuvarlak köşeleri gerçek `a2 2 0 0 1 ...` (elliptical arc) komutları yerine yaklaşık `c1 0 2 1 2 2` (cubic bezier) komutlarıyla, dikey çizgiler de `<path>` yerine `<line x1.../>` ile yazılmıştı — bu görsel olarak resmi ikondan farklı/bozuk bir şekil üretiyordu (muhtemelen kullanıcının bahsettiği "bozulma" buydu). Path resmi kaynaktaki birebir haliyle değiştirildi: `<path d="M10 11v6"/><path d="M14 11v6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>`. Ders: bu projede "lucide'den birebir, elle yaklaşık çizilmez" kuralı (bkz. CLAUDE.md/HISTORY.md'deki tekrarlanan not) sözde uygulanıyordu ama gerçekte hafızadan yazılan path'ler doğrulanmamıştı — ileride yeni bir ikon eklenirken path resmi lucide kaynağından (WebFetch ile) doğrulanmalı, hafızadan yaklaşık yazılmamalı. `docs/js/pages-web.js` güncellendi.

**Not — Overflow menu item'larına (Düzenle/Kopyala/Sil) sol tarafta ikon eklendi (2026-08-12, devam 13):** Kullanıcı isteğiyle her item'ın soluna 16×16 bir ikon eklendi — lucide'den birebir (elle yaklaşık çizilmedi, Card/Grid'deki diğer ikonlarla aynı kural): `_gridIconEditItem` (pencil), `_gridIconCopyItem` (copy), `_gridIconTrashItem` (trash-2). Yeni `.bt-grid__menu-item-icon` (16×16, `--bt-icon-primary-strong`) eklendi, `.bt-grid__menu-item`'a `gap: var(--bt-space-xs, 4px)` verildi. Danger item'da (`Sil`) ikon rengi de metinle birlikte `--bt-text-error-default`'a dönüyor (`.bt-grid__menu-item--danger .bt-grid__menu-item-icon`). `docs/css/styles.css`, `docs/js/pages-web.js` güncellendi.

**Not — "Sil" item'ının hover arka planı `--bt-surface-error-subtle`'a düzeltildi (2026-08-12, devam 12):** `.bt-grid__menu-item--danger:hover` yanlışlıkla `--bt-surface-error-light` (Red/50, #fef2f2) kullanıyordu, kullanıcı doğru tonun `--bt-surface-error-subtle` (Red/100, #fde6e6) olması gerektiğini belirtti — düzeltildi. `docs/css/styles.css` güncellendi.

**Not — Overflow menu, Dropdown'ın `.bt-dd-options`/`.bt-dd-option` class'larını DOĞRUDAN paylaşmaktan vazgeçip kendi bağımsız `.bt-grid__menu-list`/`.bt-grid__menu-item` kurallarına geri döndü (2026-08-12, devam 11):** Bir önceki not (devam 10), CLAUDE.md'nin "mevcut component'leri reuse et" kuralını "aynı CSS class'larını doğrudan paylaş" olarak yorumlamıştı — kullanıcı bunun yanlış bir coupling olduğunu belirtti: Data Table'ın Actions menu'sü Dropdown'a AİT bir şey değil, kendi bağımsız bir öğesi olmalı; aksi halde Dropdown component'inde ileride yapılacak bir CSS değişikliği (örn. `.bt-dd-option` padding'i güncellenirse) Data Table'ı da istenmeden etkiler (ve tam tersi). Düzeltme: `.bt-grid__menu-list`/`.bt-grid__menu-item`/`.bt-grid__menu-item--danger` GERİ eklendi — ama artık BOŞ/rastgele değerlerle değil, Dropdown'ın `.bt-dd-options`/`.bt-dd-option`'ıyla AYNI token'ları (`--bt-surface-primary-default`, `--bt-surface-primary-subtle`, `--bt-shadow-lg`, `--bt-radius-sm`, `--bt-space-sm`/`--bt-space-md` padding) kullanarak — görsel sonuç birebir aynı, ama iki component'in CSS kuralları birbirinden TAMAMEN bağımsız, class isimleri hiç kesişmiyor. Ders: "component reuse et" kuralı asıl BUTON/CHECKBOX/BADGE/AVATAR gibi kendi başına bağımsız, gerçek fonksiyonel widget'lar (örn. `badgeHtml()`, `.bt-checkbox__box`, `bt-btn`) için geçerli — bunlar zaten "bir kere tanımlanmış, her yerde çağrılan" atomlar. Dropdown'ın açılır listesi ise Dropdown'ın kendi iç implementasyon detayı (`btDdToggle`, `.bt-tbx--active` ile sıkı bağlı), görsel olarak benzeyen ama farklı bir bileşene ait iki panel arasında sınıf paylaşmak yanlış bir coupling yaratıyor — bu durumda doğru yaklaşım "aynı token'ları kullanarak görsel tutarlılığı sağla, ama class'ları ayrı tut" oluyor. `docs/css/styles.css`, `docs/js/pages-web.js` güncellendi.

**Not — Overflow menu'nün panel/item stili bespoke CSS'ten Dropdown component'inin gerçek `.bt-dd-options`/`.bt-dd-option`'una geçirildi (2026-08-12, devam 10):** Kullanıcı, az önce eklenen `.bt-grid__menu-list`/`.bt-grid__menu-item` stilinin aslında Dropdown component'inin (`components/dropdown`, `docs/js/pages-web.js` ~4046) kendi açılır listesiyle ("DROPDOWN OPTIONS PANEL" bloğu, `.bt-dd-options`/`.bt-dd-option`/`.bt-dd-option__text`) görsel olarak aynı olduğunu fark etti — CLAUDE.md'nin "mevcut component'leri reuse et" kuralına göre bu bespoke CSS yerine gerçek Dropdown option stiline geçilmesi gerekiyordu, ilk implementasyonda bu eşleşme kaçırılmıştı. `.bt-grid__menu-list`/`.bt-grid__menu-item(--danger)` kaldırıldı; markup artık `<div class="bt-grid__menu-list bt-dd-options">` içinde `<div class="bt-dd-option">`/`<span class="bt-dd-option__text">` kullanıyor (Sil için ek `bt-dd-option--danger` modifier'ı — Dropdown'ın kendisinde olmayan, sadece Actions menu'ye özel bir renk varyantı). `.bt-dd-options`'ın varsayılan `left:0;right:0` davranışı (input'un tam genişliğine yayılma) Grid bağlamında (28×28 buton anchor) uygun olmadığı için `.bt-grid__menu-list.bt-dd-options { left:auto; right:0; min-width:140px; }` ile override edildi — panel artık hug-content, sağa hizalı. `docs/css/styles.css`, `docs/js/pages-web.js` güncellendi.

**Not — Actions'taki "More" butonu yatay ikona çevrildi ve gerçek çalışır bir overflow menu açıyor (2026-08-12, devam 9):** Kullanıcı önce ikonun neden dikey (`_gridIconEllipsis`, Header/Grid Cell'in Right Control'ünden reuse edilen kebab ikonu) olduğunu sordu — cevap: bilinçli bir seçim değildi, sadece mevcut altyapı reuse edilmişti. Kullanıcı yatay versiyonu istedi VE bu butonun tıklanınca açması gereken menünün de gerçekten çalışır hâle gelmesini istedi. Yeni `_gridIconMoreHorizontal` ikonu eklendi (yatay 3 nokta, `_gridIconEllipsis`'ten bağımsız — Header/Grid Cell'in Right Control'ündeki dikey kebab'a hiç dokunulmadı, sadece Actions'taki More butonu değişti). Gerçek bir dropdown/overflow menu eklendi: `.bt-grid__menu` (position:relative wrapper) → `.bt-grid__menu-list` (`<ul>`, position:absolute, `top:calc(100% + 2px)`, `right:0`, `--bt-shadow-md`) → `.bt-grid__menu-item` (`<li>`, hover'da `--bt-base-subtle`) × 3 örnek item (Düzenle/Kopyala/Sil — Sil `.bt-grid__menu-item--danger` ile `--bt-text-error-default`/`--bt-surface-error-light`). JS: `window.btGridMenuToggle(event, btn)` — `menu.closest('.bt-grid__menu')` bulup `bt-grid__menu--open` toggle'lar, aynı anda tek menu açık kalsın diye önce diğer tüm açık menuleri kapatır; `window.btGridMenuClose(event, item)` — bir item'a tıklanınca menüyü kapatır; global `document.addEventListener('click', ...)` — menünün dışına tıklanınca kapatır (foundations/design-examples sayfasındaki `.bt-win-dropdown` ile aynı "dışarı tıklayınca kapat" deseni). **Kritik detay:** hem trigger butonun hem item'ların onclick'i `event.stopPropagation()` çağırıyor — aksi halde tıklama `.bt-grid__row`'un kendi `onclick="btGridRowToggle(this)"`'ına bubble'layıp satırı yanlışlıkla seçili/checkbox'lı yapardı (bkz. devam 7 notu). Bilinen sınırlama: menu `.bt-grid-container`'ın scrollable `.bt-grid__body`'si (`overflow:auto`) içindeyse ve satır container'ın alt kenarına yakınsa menu kısmen kırpılabilir — bu bir docs/demo sitesi kapsamında kabul edilebilir bir sınırlama, prodüksiyonda portal-based positioning gerekirdi. `docs/css/styles.css`, `docs/js/pages-web.js` güncellendi.

**Not — Sayfanın birincil deneyimi Header Cell/Grid Cell değil, tam bir Data Table oldu (2026-08-12, devam):** İlk implementasyonda sayfa Header Cell ve Grid Cell'i iki ayrı, birbirinden kopuk top-level playground olarak sunuyordu — kullanıcı bunun doğru bir demonstrasyon olmadığını, gerçekte kimsenin bu ikisini tek başına kullanmadığını, her zaman birlikte bir tablo oluşturduklarını belirtti. Card'ın Header/Body/Footer'ı TEK bir playground'da gruplaması örnek alınarak sayfa yeniden kurgulandı: artık birincil playground **`gridTableHtml(props)`** — tam, gerçekçi bir tabloyu (Checkbox/Name+Avatar/Role/Status/Actions kolonları) uçtan uca yapılandırıyor. Prop'lar iki gruba ayrıldı: **Table** (`rowCount` 1-5, `rowState` Default/Hover/Active — tüm satırlara uygulanır, `showNoRecord` — body'yi No Record Available ile değiştirir) ve **Columns** (`showCheckboxCol`, `nameLeading` None/Avatar/Avatar Group/Dot, `showSort`, `showFilter`, `statusContent` None/Badge/Switch, `actionsContent` None/Button/Inline TextBox/Inline Dropdown). `gridTableColumns(p)` — prop'lardan kolon tanım dizisini üretir (her kolon `{width, headerText, cellLeading/cellTrailing, field}`), `showCheckboxCol`/`statusContent`/`actionsContent` "off"/"none" olduğunda ilgili kolon dizide hiç yer almaz (`filter(Boolean)`). `gridTableHtml(props)` bu kolonları `gridHeaderCellHtml`/`gridCellHtml`'e besler, her kolonun `position`'ı otomatik hesaplanır (`i===0`→left, son→right, arası→middle) — Position hiçbir zaman elle ayarlanmaz. Eski sabit/parametresiz `gridTableExampleHtml()` kaldırılıp yerine bu configurable versiyon geçti. Header Cell ve Grid Cell'in kendi playground'ları kaldırılmadı ama sayfada **"Building Blocks"** başlığı altına, ana Data Table playground'unun ALTINA taşındı — artık "ana tablonun kapsamadığı özel senaryolar için yapı taşı referansı" rolünde, birincil demo değiller. `docs/js/pages-web.js` güncellendi.

**Not — Actions kolonundaki Button, yanına flat-base "More" (overflow menu) butonu alacak şekilde genişletildi (2026-08-12, devam 8):** Kullanıcı, kendi tasarımlarında Actions için genel bir pattern kullandığını belirtti: birincil butona sık kullanılan tek bir aksiyon atanır, yanındaki ikinci buton bir dropdown butonu gibi çalışıp daha az sık kullanılan aksiyonları listeleyen bir overflow menu açar. `gridTrailingHtml('button')` case'i güncellendi — artık tek `.bt-grid__control` yerine yeni bir `.bt-grid__control-group` (flex + `gap: var(--bt-space-xs, 4px)`) iki `.bt-grid__control`'ü sarıyor: birincisi eskisi gibi `bt-btn bt-btn--sm bt-btn--primary-solid` metin butonu, ikincisi yeni bir ikon-only `bt-btn bt-btn--sm bt-btn--base-flat bt-btn--icon` (28×28, Card/Dialog'daki aynı flat-icon-button convention'ı) — içinde zaten var olan `_gridIconEllipsis` (kebab/three-dot) ikonu, `aria-label="More"`. Bu değişiklik `gridTrailingHtml` paylaşıldığı için hem ana Data Table playground'unun Actions kolonunda hem Building Blocks'taki tekil Grid Cell'in Trailing Control = Button seçeneğinde aynı anda görünüyor. `gridTableColumns(p)`'de Actions kolonunun `button` genişliği 90px'ten **130px**'e çıkarıldı (iki butonu + gap'i sığdırmak için). `docs/css/styles.css`'e `.bt-grid__control-group` eklendi, CSS Properties tablosuna ve Usage/Do listesine ilgili satırlar eklendi. `docs/css/styles.css`, `docs/js/pages-web.js` güncellendi.

**Not — Satıra tıklayınca kendi Leading Checkbox'ı da senkronize oluyor (2026-08-12, devam 7):** Kullanıcı, bir satırın herhangi bir yerine tıklandığında (checkbox'ın kendisine değil) sadece `bt-grid__row--active` (mavi seçili arka plan) toggle'landığını, satırın Leading Checkbox'ının (varsa) görsel olarak işaretli hâle gelmediğini belirtti. Yeni global `window.btGridRowToggle(row)` eklendi: satırın `bt-grid__row--active` class'ını toggle'lar, sonra `row.querySelector('.bt-checkbox__box')` ile satırın kendi checkbox'ını bulup (varsa) `classList.toggle('bt-checkbox__box--checked', active)` ile satırın YENİ active durumuna kesin (force) set eder. Ana playground'daki satır `onclick`'i `this.classList.toggle('bt-grid__row--active')`'ten `btGridRowToggle(this)`'a çevrildi. Checkbox'ın kendi bağımsız `onclick`'i (`gridLeadingHtml('checkbox')` içinde, standalone Building Blocks önizlemesi için hâlâ gerekli) korundu — satır bağlamında event bubble olup `btGridRowToggle` SONRADAN çalıştığı ve checkbox'ı force ile kesin set ettiği için, checkbox'a doğrudan tıklansa da satırın başka bir yerine tıklansa da ikisi her zaman senkron kalıyor. `docs/js/pages-web.js` güncellendi.

**Not — No Record Available artık bağımsız bir toggle değil, `rowCount === 0`'dan türetiliyor (2026-08-12, devam 6):** Kullanıcı, önceki bağımsız `showNoRecord` toggle'ının kafa karıştırıcı olduğunu belirtti: gerçek beklenen davranış, No Record metninin SADECE gerçekten 0 kayıt varken görünmesi; 1+ kayıt varken (örn. 3 satır) tablo alanının %100'ünü doldurmasa bile boşluk No Record metni OLMADAN, sessizce arka plan/border ile ("Alanı Doldurma" özelliğiyle aynı mekanizma) dolmalı. Bunun için `GRID_TABLE_ROW_OPTS` **0-10** aralığına genişletildi (`0` özel olarak `'0 (No Record)'` etiketiyle listede), `gridTableHtml`'de `showNoRecord` artık `p.showNoRecord === 'on'` yerine doğrudan `rowCount === 0` — ayrı prop tamamen kaldırıldı, ana playground'un `props` dizisinden `showNoRecord` girdisi silindi. `.bt-grid-container` içinde 0 kayıt seçildiğinde `.bt-grid__no-record`'un sabit 56px yüksekliği yerine kalan alanı doldurması için `.bt-grid-container .bt-grid__no-record { flex:1; height:auto; border:none; }` eklendi (kendi border'ı container'ınkiyle çift çizgi oluşturmasın diye kaldırıldı — üst çizgiyi zaten Header'ın border-bottom'u sağlıyor). Standalone (container'sız) Building Blocks önizlemesi sabit 56px'te kalmaya devam ediyor, sadece `.bt-grid-container` context'inde esniyor. `docs/css/styles.css`, `docs/js/pages-web.js` güncellendi.

**Not — Alanı Doldurma, ayrı statik demo yerine ana playground'a entegre edildi (2026-08-12, devam 5):** Kullanıcı, aşağıdaki "Alanı Doldurma" bölümündeki statik 220px'lik/2-satırlık demo yerine, ana Data Table playground'unun ÖNİZLEMESİNİN sabit bir yükseklikte (10 satırlık) olmasını, `Rows` prop'unu 10'dan azaltınca kalan boşluğun otomatik olarak dolduğunu görmek istedi — ekstra bir statik örneğe gerek kalmadan mevcut interaktif playground'un kendisi bu özelliği demonstre etsin diye. `GRID_TABLE_ROW_OPTS` 1-5'ten **1-10**'a çıkarıldı, `_gridTableRowsData` 10 örnek satıra genişletildi. Ana playground'un `preview` callback'i artık `gridTableHtml(p)`'yi `.bt-grid-container` ile sarıp bunu da `height:356px` (36px header + 10×32px satır) sabit yükseklikli bir `display:inline-flex;flex-direction:column` kutuya koyuyor. Varsayılan `rowCount` `'3'` kaldığı için sayfa ilk açıldığında bile "Alanı Doldurma" efekti hiçbir etkileşime gerek kalmadan direkt görünüyor; `Rows`'u 10'a çıkarınca boşluk kayboluyor. "Alanı Doldurma" bölümündeki statik demo kutusu kaldırıldı, yerine yukarıdaki ana playground'a atıf yapan bir cümle eklendi — kod örneği (kendi sayfana nasıl ekleyeceğin) ve teknik açıklaması korundu. `docs/js/pages-web.js` güncellendi.

**Not — Container'ı doldurma özelliği eklendi (2026-08-12, devam 4):** Kullanıcı, Data Table'ı bir sayfa alanına (tab panel, sağdan kayan panel vb.) koyduğunda, satır sayısı az olsa bile tablonun çerçevesinin (arka plan + border) o alanın ALT KENARINA kadar uzaması gerektiğini belirtti. Şu desen uygulandı: dış border (sol/sağ/alt) hücrelerde değil ayrı bir DIŞ KONTEYNER'de tanımlanıyor, bu konteyner `flex:1; min-height:0;` ile kendi flex parent'ının kalan yüksekliğini dolduruyor, header sabit kalırken satırlar ayrı bir `overflow:auto` sarmalayıcıda scroll oluyor — böylece içerik konteynerin doğal yüksekliğinden az olsa bile border boş alanın içinden aşağı doğru devam ediyor (satırları saran dar bir kutuda durup kalmıyor). Bentas DS'e aynı teknik opsiyonel bir `.bt-grid-container` class'ı olarak eklendi: `display:flex;flex-direction:column;flex:1;min-height:0;` + sol/sağ/alt border + arka plan. `.bt-grid` bu context'te (`.bt-grid-container .bt-grid`) `flex:1;min-height:0;width:100%` alıyor (standalone kullanımda hâlâ `width:fit-content` ile içeriğe sarılıyor, hiç dokunulmadı). Yeni `.bt-grid__body` sarmalayıcısı (`gridTableHtml`'e eklendi, header'ın dışında/altında) body satırlarını sarıyor — standalone kullanımda görsel fark yaratmıyor, `.bt-grid-container` içindeyken `flex:1;min-height:0;overflow:auto` alıp gerçekten scroll oluyor. Hücrelerin Position bazlı sol/sağ border'ları (konteyner kendi sol/sağ border'ını sağladığı için çift çizgi olmasınlar diye) `.bt-grid-container .bt-grid__cell--left/--right` ve header eşleniği için `border-left/right:none` ile bastırılıyor — `gridTableHtml`/`gridHeaderCellHtml`/`gridCellHtml`'in kendisi hiç değişmedi, mevcut Position markup'ı aynen kalıp sadece bu context'te görünmez oluyor. Data Table sayfasına yeni bir "Alanı Doldurma" bölümü eklendi: kullanım kod örneği + kesikli çizgili 220px'lik bir "parent" kutusu içinde sadece 2 satırlı canlı bir demo (çerçevenin kutunun tamamını doldurduğunu, satırların altında kalan boşluğun da arka plan/border'a dahil olduğunu gösteriyor). `docs/css/styles.css`, `docs/js/pages-web.js` güncellendi.

**Not — Header Checkbox "select all" oldu (2026-08-12, devam 3):** Kullanıcı isteğiyle Header Cell'in Checkbox Control'ü artık gerçek bir "tümünü seç" kontrolü — tıklanınca sadece kendi kutusunu değil, tablodaki TÜM body row'ların checkbox'ını ve seçili/aktif satır rengini kendi yeni durumuna göre senkronize ediyor. `gridLeadingHtml('checkbox')` (body row'daki bağımsız checkbox, hâlâ tek başına toggle'lanıyor) yerine header'a özel yeni bir fonksiyon eklendi: `gridHeaderCheckboxHtml()`, `onclick="btGridSelectAll(this)"` kullanıyor. Global `window.btGridSelectAll(el)`: kendi `.bt-checkbox__box`'ını toggle'lar, `el.closest('.bt-grid')` ile tabloyu bulur, `.bt-grid__cell .bt-checkbox__box` (SADECE body hücreleri — header'ın kendi checkbox'ı `.bt-grid__header-cell` içinde olduğu için hariç kalıyor) seçip hepsini header'ın yeni checked durumuna göre `classList.toggle(..., checked)` ile senkronize ediyor, aynı şekilde `.bt-grid__row--clickable` satırların `bt-grid__row--active` (seçili/mavi) durumunu da günceliyor. Tek yönlü senkronizasyon — body'deki bir checkbox'ı tek tek değiştirmek header'ı güncellemiyor (indeterminate state şimdilik kapsam dışı). Building Blocks'taki tekil Header Cell playground'unda (tabloya dahil değil) `el.closest('.bt-grid')` `null` döndüğü için fonksiyon güvenle sadece kendi kutusunu toggle'lamakla kalıyor, hata vermiyor. `docs/js/pages-web.js` güncellendi.

**Not — Hover/Active gerçek etkileşimle çalışıyor (2026-08-12, devam 2):** İlk implementasyonda Hover/Active state'leri sadece `state`/`rowState` prop'uyla (manuel dropdown seçimi) önizlenebiliyordu — gerçek mouse hover'ı veya tıklama hiçbir görsel değişiklik yapmıyordu. Kullanıcı isteğiyle gerçek etkileşim eklendi: `.bt-grid__row:hover .bt-grid__cell` ile satırın HERHANGİ bir hücresine mouse gelince TÜM satır (tek hücre değil) `--bt-base-subtle` rengine dönüyor — bu, `.bt-grid__cell` class'ı sadece body row'larda bulunduğu için header row'u otomatik olarak etkilemiyor (`:not()` gerekmedi). `gridTableHtml`'deki her body row'a `bt-grid__row--clickable` class'ı (cursor:pointer) ve `onclick="this.classList.toggle('bt-grid__row--active')"` eklendi — Selectable Card'daki aynı toggle deseni. `.bt-grid__row.bt-grid__row--active .bt-grid__cell` kuralı, hover kuralıyla AYNI specificity'de (üç class) ama kaynak sırasında SONRA tanımlandığı için, seçili bir satır mouse üzerindeyken de mavi (`--bt-surface-brand-subtle`) kalmaya devam ediyor, gri hover rengine dönmüyor. Building Blocks'taki tekil Header Cell/Grid Cell playground'larına da (state prop'undan bağımsız) `:hover` eklendi. `rowState`/`state` prop'ları kaldırılmadı — belirli bir durumu zorla önizlemek/dokümante etmek (örn. CSS tab'ında Active state'in tam olarak neye benzediğini görmek) için hâlâ kullanılabilir, gerçek etkileşimle çakışmıyor. `docs/css/styles.css`, `docs/js/pages-web.js` güncellendi.

**Not — Email kolonu + tablo tam genişlik fill (2026-08-13):** Tüm Data Table varyantlarına (Data Table, Data Table Toolbar, Data Table Actions, Data Table Frozen Column, Data Table Frozen Column Last) son kolon olarak **Email** eklendi — sadece Data Table Actions sayfasında Actions kolonunun solunda. `gridTableColumns` ve `gridActionsColumns` güncellendi. Frozen sayfalarında (`gridFrozenColumns`, `gridFrozenLastColumns`) kolon sırası değiştirildi: Email artık en sona alındı (Frozen Last'ta sağdan donmuş kolon da Email oldu — önceden Status'tü). **Full-width fill:** `gridHeaderCellHtml`/`gridCellHtml`'e `fillWidth: true` desteği eklendi — `flex:1;min-width:Xpx` style üretir (normal `width:Xpx` yerine). Email kolonu tüm non-frozen tablolarda `fillWidth:true` ile tanımlı, böylece her tablonun son kolonu container genişliğine kadar esniyor. `.bt-grid-container .bt-grid__row { width: 100%; }` CSS kuralı eklendi. Preview wrapper'lardan `display:inline-flex` → `display:flex` ve `width:800px`/`width:900px` gibi sabit genişlikler kaldırıldı — artık playground genişliğini dolduruyorlar. `btGridResizeStart`'ta resize sırasında `style.flex = '0 0 auto'` set ediliyor (fillWidth `flex:1`'i ezip sabit genişliğe geçiş için). `docs/css/styles.css`, `docs/js/pages-web.js` güncellendi.

**Not — Data Table Actions'ta çift scrollbar / header'ın taşması / resize sonrası boşluk-gap / body-header senkron kayması — yeni `.bt-grid-actions-container` ile düzeltildi, üç iterasyon gerekti (2026-08-14):** Kullanıcı iki ayrı hatayı ekran görüntüleriyle bildirdi: (1) playground'da hem yatay hem dikey iç içe iki scrollbar çıkıyordu, Actions header'ı tablonun dışına taşıyordu; (2) herhangi bir kolonu resize handle ile daraltınca sağda border'sız/boş bir alan oluşuyordu (son kolon container'ın içinde "yüzüyormuş" gibi duruyordu). Kök nedenler ve final çözüm:

1. **Çift scrollbar / header taşması (ilk hata):** `.bt-grid-container` kullanımında header row (`.bt-grid__row`, `.bt-grid__body`'nin DIŞINDA) hiç scroll yeteneğine sahip değildi, `.bt-grid__body` ise `overflow:auto` (hem x hem y) ile KENDİ BAŞINA bağımsız scroll oluyordu — Actions kolonu eklenince toplam genişlik (944px) playground'u aşınca header kırpılmadan/scroll olmadan dışarı taşıyor, body kendi senkronsuz scrollbar'ını gösteriyordu. Çözüm: Frozen Column'un 2026-08-12 tarihli aynı sınıf hatası için kullandığı desen (bkz. yukarıdaki "devam 18" notu) — header+body'yi TEK bir `.bt-grid-scroll-x` sarmalayıcıda birleştirmek. `gridActionsTableHtml` çıktısını `<div class="bt-grid-scroll-x"><div class="bt-grid">...</div></div>` ile sarıyor.
2. **Resize sonrası sağda boşluk (ikinci hata, İLK düzeltme denemesinde ortaya çıktı):** İlk deneme `.bt-grid-frozen-container`'ı birebir kopyalayıp `.bt-grid`'i `display:inline-flex` (content-based genişlik) yaptı — bu, içerik playground'dan DAR olduğunda (kolonlar daraltılınca) grid'in container'ın tam genişliğine hiç esnememesine, sağda boş/border'sız bir şerit kalmasına yol açtı (Frozen Column'un zaten kabul ettiği ama Actions için YANLIŞ olan bir ödün — Actions'ın `Email` kolonu `fillWidth:true` ile boşluğu doldurmalıydı, content-hugging bir `.bt-grid` bu flex:1'in hiç devreye girmesini engelliyordu). Düzeltme: `.bt-grid-container`'ın (base Data Table) ZATEN kullandığı `width:100%` + Email'in `flex:1;min-width:180px` fillWidth mekanizması geri getirildi (`.bt-grid-actions-container .bt-grid { width:100% }`, `.bt-grid__row { width:100% }`) — içerik sığdığında Email boşluğu yutuyor, gap kalmıyor.
3. **Header/body senkron kayması (İKİNCİ düzeltme denemesinde ortaya çıktı):** `width:100%` + `.bt-grid__body { overflow-y:auto }` kombinasyonu YENİ bir hata açtı — CSS'in "overflow-x/y'den biri visible değilse diğeri de otomatik `auto`'ya çevrilir" kuralı (aynı kural, Frozen Column'un sticky'yi kırdığı "devam 18" hatasının da kök nedeniydi) yüzünden `.bt-grid__body` KENDİ BAŞINA (header'dan bağımsız, senkronsuz) yatay scroll edilebilir bir container'a dönüşüyordu — `.bt-grid-scroll-x`'i sağa kaydırınca header doğru kayıyor ama body kendi (hiç kaymamış) iç scrollLeft'inde kalıp Email/Actions'ı hiç göstermiyordu (boş görünüyordu). Kesin çözüm: `.bt-grid-actions-container .bt-grid`'e `min-width: max-content;` eklendi (width:100%'in yanına) — içerik playground'dan GENİŞ olduğunda (`min-width:max-content` > `width:100%`'ün çözümlediği değer) `.bt-grid`'in GERÇEK render genişliği doğal içerik genişliğine (örn. 944px) eşitleniyor; bu durumda `.bt-grid__body`'nin KENDİ kutusu da (width:100%, artık .bt-grid'in genişlemiş haline göre) tam olarak içeriğiyle örtüşüyor — body'nin kendi içinde HİÇ taşma kalmıyor (`scrollWidth === clientWidth`), quirk'ün auto'ya çevirdiği overflow-x etkisiz kalıyor (gösterilecek bir taşma yok), yatay scroll SADECE dış `.bt-grid-scroll-x`'te gerçekleşiyor — header ve body artık HER ZAMAN senkron.

Üçü birlikte doğrulandı: (a) varsayılan genişlikte (944px > playground) tek senkron scrollbar, header/body hizalı; (b) birkaç kolon daraltılıp toplam playground'dan dar hale getirildiğinde Email boşluğu dolduruyor, sağda gap YOK; (c) bir kolon büyütülüp `.bt-grid-scroll-x` sonuna kadar kaydırıldığında header'ın son hücresiyle body'nin son hücresi (`Actions`) pixel-pixel hizalı kalıyor. Chrome uzantısı bağlı olmadığı için doğrulama gerçek headless Chrome + DevTools Protokolü (Node'un yerleşik `fetch`/`WebSocket`'i ile, ek bağımlılık yok) üzerinden gerçek `mousedown`/`mousemove`/`mouseup` event'leriyle resize simüle edilerek, `getBoundingClientRect()`/`scrollWidth` karşılaştırmalarıyla ve ekran görüntüsü kırpmalarıyla yapıldı. `docs/css/styles.css`, `docs/js/pages-web.js` güncellendi.

**Not — Kolon resize handle'larının "bazen sağdan bazen soldan kontrol ediliyormuş" izlenimi kod düzeyinde bir tutarsızlık değil:** Kullanıcı bunu yukarıdaki hatalarla birlikte bildirdi. Kod incelemesi: her `.bt-grid__resize-handle` HER ZAMAN kendi header cell'inin `position:relative` kutusunun sağ kenarında (`position:absolute;right:-3px`) — istisnasız, `--left`/`--right`/`--middle` position varyantına göre değişen bir override YOK. Yani her handle TUTARLI şekilde "kendi solundaki kolonu" kontrol ediyor. En olası açıklama: yukarıdaki gap/senkron-kayması hataları sırasında Email kolonunun öngörülemez şekilde büyüyüp küçülmesi (bazen boşluğu dolduruyor, bazen hiç dolduramıyordu) resize'ın "yanlış kolonu" değiştiriyormuş hissi yaratmış olabilir — üç hata da düzeltildiğine göre bu izlenimin de geçmesi bekleniyor, kullanıcıdan yeniden test sonrası teyit istendi.

**Not — Frozen Column Last'ta sağdan donmuş kolon Email'den Actions'a değiştirildi (2026-08-14):** Sayfanın metni (Overview açıklaması, Anatomy, Usage/Do listesi) her zaman "sağdaki **Actions** kolonu donuyor" diye yazıyordu, ama `gridFrozenLastColumns`'daki GERÇEK son kolon 2026-08-13'teki Email-ekleme oturumunda Email olmuştu (ondan önce de Status'tü — bkz. yukarıdaki not) — metin hiç güncellenmeden yanlış kolonu tarif ediyordu, kullanıcı bu tutarsızlığı fark edip düzeltilmesini istedi. `gridFrozenLastColumns`'a Data Table Actions'takiyle AYNI `cellTrailing:'button'` Actions kolonu (width 130, `gridTrailingHtml('button')` — Button + gerçek çalışan More overflow menüsü, aynı fonksiyon reuse edildi) `frozenRight:true` ile EN SONA eklendi; Email artık normal (donmamış), sıradan bir orta kolon olarak Status'un sonrasına kaydı — kolon sırası: Checkbox/ID/Name/Role/Department/Location/Last Login/Status/Email/Actions. Overview'daki "orta kolonlar (...)" cümlesi Email'i de kapsayacak şekilde güncellendi. Headless Chrome + DevTools Protokolü ile doğrulandı: sayfa ilk açıldığında Actions sağda görünür durumda, `.bt-grid-scroll-x` sonuna kadar kaydırılınca ID solda sabit kalırken Status/Email ortadan kayıyor ve Actions (Button + "…" menüsü) sağda hizalı/bozulmadan sabit kalmaya devam ediyor. `docs/js/pages-web.js` güncellendi.

**Not — Frozen edge gölgesi tekrar `--bt-shadow-xs`'e sabitlendi, offset düzeltildi (2026-08-14):** Kullanıcı gölge efektinin hangi token'dan geldiğini sordu — kod incelemesinde, "devam 19" notunun (2026-08-12) belgelediği tek-katmanlı `--bt-shadow-xs` tabanlı değerin ARADAN GEÇEN oturumlarda (dokümante edilmemiş şekilde) iki katmanlı, `--bt-shadow-sm`'e daha yakın bir değere (`2px 0 2px rgba(16,24,40,0.06), 3px 0 3px rgba(16,24,40,0.10)`) kaydığı, ama yorumun hâlâ eski xs açıklamasını taşıdığı ortaya çıktı — kod ile yorum tutarsızdı. Kullanıcı önce `--bt-shadow-xl`'e geçmeyi istedi (`8px 0 8px rgba(16,24,40,0.031), 20px 0 24px rgba(16,24,40,0.078)` — xl'in `0 8px 8px/0 20px 24px`'i yatay çevrilmiş hali), SONRA fikrini değiştirip `--bt-shadow-xs`'e dönülmesini istedi. Final değer, "devam 19"un aksine token'ın GERÇEK offset'ini birebir kullanıyor (o notta `2px 0 2px` yazılmıştı ama `--bt-shadow-xs`'in dikey offset'i `1px`, rotasyon sonrası doğrusu `1px 0`'dır): `.bt-grid__header-cell--frozen-edge`/`.bt-grid__cell--frozen-edge { box-shadow: 1px 0 2px rgba(16,24,40,0.051); }`, sağdan donmuş kenar ters yönlü (`-1px 0 2px ...`). Frozen Column ve Frozen Column Last sayfalarındaki CSS Properties/Anatomy tablo satırları da bu değere güncellendi. `docs/css/styles.css`, `docs/js/pages-web.js` güncellendi.

**Not — Frozen edge gölgesi bespoke/yumuşak bir değere geçirildi, artık hiçbir `--bt-shadow-*` token'ından türetilmiyor (2026-08-14):** Kullanıcı bir önceki notta `--bt-shadow-xs`'e sabitlenen gölgeyi test edip "çok az oldu" dedi; `--bt-shadow-sm` tabanlı bir alternatifin de (dar blur, 2-3px) "keskin" durduğunu belirtti. Mevcut hiçbir elevation token'ı (xs/sm/md/lg/xl/2xl/3xl) bu spesifik "sticky kolonun kenarında yumuşak bir fade" ihtiyacına uymuyordu — hepsi ya dar blur'lu/sert (xs/sm) ya da çok büyük/köşeli bir drop-shadow hissi veriyordu (md/lg/xl, dikey elevation için tasarlanmış). Kullanıcı isteğiyle bu efekte ÖZEL, token'a bağlı olmayan bir değer tanımlandı: iki katman, geniş blur (10px/20px), düşük opaklık (0.06/0.035) — `box-shadow: 4px 0 10px rgba(16,24,40,0.06), 10px 0 20px rgba(16,24,40,0.035)` (sağdan donmuş kenarda ters yönlü, `-4px 0 10px .../-10px 0 20px ...`). Headless Chrome + DevTools Protokolü ile zoom edilmiş ekran görüntüsüyle doğrulandı: donmuş kolonun kenarında keskin bir çizgi yerine kademeli/yumuşak bir gölge geçişi oluşuyor. Frozen Column ve Frozen Column Last'ın CSS Properties/Anatomy tablolarındaki Token sütunu artık `—` (bu proje genelinde token karşılığı olmayan sabit değerler için kullanılan standart gösterim, bkz. CLAUDE.md Anatomy bölümü kuralı). `docs/css/styles.css`, `docs/js/pages-web.js` güncellendi.

**Not — Data Table ve Card'daki "EG" avatarları Brand temadan Default temaya çevrildi (2026-08-14):** Avatar component'inin kendi sayfasında (§13) `theme` prop'u zaten `default` varsayılanla geliyordu, ama Data Table'ın satır avatarı (`gridLeadingHtml('avatar')`, tüm Data Table sayfalarında — Data Table, Data Table Actions, Frozen Column, Frozen Column Last, Toolbar) ve Card'ın header avatar control item'ı (`crdHeaderHtml`) hardcoded `bt-avatar--brand` (mavi dolgu, `--bt-surface-brand-default`) class'ı kullanıyordu — kullanıcı isteğiyle bu 9 hardcoded kullanımın tamamı `bt-avatar--brand` modifier'ı kaldırılıp Default temaya (modifier'sız, nötr gri arka plan) çevrildi. `avatarHtml`/`avatarCode` (Avatar sayfasının kendi playground fonksiyonları, theme prop'una göre dinamik class üreten) DOKUNULMADI — sadece Data Table/Card'daki statik/hardcoded örnekler değişti. `docs/js/pages-web.js`, `design.md` §17.1 (markup örneği) güncellendi.

**Not — Grid Cell'de Leading/Trailing Control (Avatar/Avatar Group/Badge/Button/Switch) hücre kenarında sadece 2px padding bırakıyordu, --bt-space-md (8px)'e düzeltildi (2026-08-14):** Kullanıcı, hücre padding'inin 8px olduğunu bildiğini ama içinde bu component'ler olduğunda bunun görünmediğini fark etti. Kök neden: `.bt-grid__cell`'in kendisinde HİÇ padding yok — kenar boşluğu tamamen o an hücrenin ilk/son çocuğu olan elemente bağlı. `.bt-grid__cell .bt-grid__content` (metin) kendi 8px'ini (`--bt-space-md`) doğru uyguluyordu, ama Leading/Trailing/Left/Right control'leri saran `.bt-grid__control` (Checkbox/Dot/Avatar/Avatar Group/Badge/Switch) ve Inline TextBox/Dropdown'ı saran `.bt-grid__inline`'ın kendi iç padding'i sadece `--bt-space-2xs` (2px) — bu değer aslında 28px'lik control kutusunda ikonu ortalamak için var, kenar boşluğu için değil, ama control hücrenin ilk/son çocuğu olduğunda YANLIŞLIKLA kenar padding'i olarak görünüyordu. Actions kolonundaki Button+More `.bt-grid__control-group`'un ise HİÇ padding'i yoktu (0px). Düzeltme: `.bt-grid__cell > .bt-grid__control:first-child/:last-child`, `.bt-grid__cell > .bt-grid__inline:first-child/:last-child`, `.bt-grid__cell > .bt-grid__control-group:first-child/:last-child` için `padding-left`/`padding-right: var(--bt-space-md, 8px)` override eklendi — control'ün kendi 2px'lik dikey/iç padding'i (ikon ortalama amaçlı) korunuyor, SADECE kenara bakan yön override ediliyor. Headless Chrome ile doğrulandı: checkbox/avatar'ın gerçek görsel kenarı artık hücre border'ından tam 8px içeride (önceden fiilen 0px görünüyordu çünkü `.bt-grid__control`'ün DIŞ kutusu zaten hücre kenarına yapışıktı, sadece kendi İÇ 2px'i ikonu hafifçe içeri itiyordu), Actions'taki control-group'un computed `padding-right` değeri 0px'ten 8px'e çıktı. Kapsam bilinçli olarak `.bt-grid__cell`'le sınırlı tutuldu — `.bt-grid__header-cell`'in kendi control'leri (Checkbox/Sort/Filter/Ellipsis, 6px `--bt-space-sm` bekleniyor) kullanıcı tarafından bildirilmedi, ayrı bir oturumda değerlendirilebilir. `docs/css/styles.css` güncellendi.

**Not — Data Table örnek satırlarındaki Status Badge'i tek renk/solid'den, satır satır dönen Basic Badge (blue/green/yellow/red) + sadece sol tarafta lucide "info" ikonuna çevrildi (2026-08-14):** Kullanıcı isteğiyle: (1) önceden her satırda AYNI mavi `type:'solid'` badge, sol VE sağ tarafta spinner ikonuyla (`_bdgLoader`, Badge sayfasının kendi genel amaçlı placeholder ikonu) görünüyordu — bu, örnek veri olduğu için birden fazla Badge rengini demonstre etmek yerine tekdüze bir görüntü veriyordu; (2) ikon SADECE solda olmalıydı; (3) ikon spinner değil lucide "info" olmalıydı (lucide-static'te resmi adı "circle-info" değil "info" — WebFetch ile path doğrulandı, elle yaklaşık çizilmedi). Değişiklikler: `_gridTableRowsData`'daki her satıra `statusColor` alanı eklendi (`_gridStatusColors = ['blue','green','yellow','red']`'den `i % 4` ile döngüsel — semantik bir durum eşlemesi değil, sadece görsel çeşitlilik). `badgeHtml(_, p)` artık opsiyonel `p.icon` fonksiyonu kabul ediyor (varsayılan hâlâ `_bdgLoader` — Badge sayfasının kendi playground'u etkilenmedi), yeni `_bdgIconInfo` bu slot'a Grid'in Status Badge'i için geçiliyor. `gridTrailingHtml('badge', opts)` artık `type:'custom', colorStyle:'basic', color: opts.color || 'blue', leftIcon:'on', rightIcon:'off', icon:_bdgIconInfo` kullanıyor (önceden `type:'solid', color:'blue'` — color hiç kullanılmıyordu, solid tipi zaten kendi sabit mavi rengini kullanıyordu). `gridCellHtml`'e `trailingColor` opt'u eklendi, `gridTrailingHtml`'e `{color: trailingColor}` olarak geçiriliyor. `gridTableHtml`/`gridFrozenTableHtml`/`gridFrozenLastTableHtml`/`gridActionsTableHtml`'deki 4 satır-render call site'ı da `trailingColor: c.cellTrailing === 'badge' ? row.statusColor : undefined` ile güncellendi — Building Blocks'taki tekil Grid Cell örnekleri (§17.1) etkilenmedi, `trailingColor` geçmedikleri için varsayılan 'blue'da kalıyorlar. Headless Chrome ile doğrulandı: art arda 3 satırda blue→green→yellow Basic Badge, hepsinde tek bir sol "info" ikonu. `docs/js/pages-web.js` güncellendi.

**Not — Status Badge'in içindeki sabit "Badge" metni, Status koluna uygun gerçek etiketlere çevrildi (2026-08-14):** Bir önceki not renk+ikonu düzeltmişti ama badge içeriği hâlâ her satırda literal "Badge" yazıyordu — kullanıcı bunun yerine Status kolonuna uygun bir metin istedi. `badgeHtml(_, p)`'deki hardcoded `Badge` metni artık `p.label || 'Badge'` (Badge sayfasının kendi playground'u parametre geçmediği için hâlâ "Badge" gösteriyor, davranışı değişmedi). Yeni `_gridStatusOptions` dizisi (`_gridStatusColors`'ın yerine geçti) renk+etiketi BİRLİKTE tanımlıyor — standart bir renk↔anlam eşlemesiyle: `blue→Active, green→Completed, yellow→Pending, red→Inactive` (gerçek bir durum makinesi değil, sadece örnek veri çeşitliliği için mantıklı bir eşleme). `_gridTableRowsData`'nın her satırına `statusColor`'ın yanına `statusLabel` de eklendi (aynı `i % 4` döngüsüyle, ikisi birlikte). `gridTrailingHtml('badge', opts)` artık `label: o.label` geçiyor, `gridCellHtml`'e `trailingLabel` opt'u eklendi (`trailingColor` ile birebir aynı desen). 4 satır-render call site'ı da `trailingLabel: c.cellTrailing === 'badge' ? row.statusLabel : undefined` ile güncellendi. Headless Chrome ile doğrulandı: art arda 3 satırda "Active"/"Completed"/"Pending" metinleri kendi renkleriyle eşleşiyor. `docs/js/pages-web.js` güncellendi.

**Not — Status Badge ikonu "info"den geri loader'a (_bdgLoader) çevrildi, 15×15px'e küçültüldü; Avatar'lar Default'tan geri Brand temaya çevrildi (2026-08-14):** Kullanıcı iki önceki oturum adımını fikrini değiştirip geri aldı. (1) Badge: `gridTrailingHtml('badge')` artık özel bir `icon` geçmiyor — `badgeHtml`'in kendi varsayılanı zaten `_bdgLoader` olduğu için otomatik ona düşüyor; `_bdgIconInfo` (lucide "info") ve `badgeHtml`'in `icon` parametresi TAMAMEN kaldırıldı çünkü artık hiçbir çağıran özel bir ikon geçmiyordu (kullanılmayan esneklik/dead code, bkz. CLAUDE.md "gereksiz abstraction ekleme" ilkesi) — `badgeHtml` şu an sadece `_bdgLoader`'ı doğrudan kullanıyor. `_bdgLoader`'ın boyutu da kullanıcı isteğiyle iki adımda değişti: önce 16×16'dan 12×12'ye, sonra 15×15'e (SVG `width`/`height`, `viewBox="0 0 24 24"` sabit kaldı — sadece render boyutu küçüldü). Bu, Badge sayfasının kendi playground'undaki ikon boyutunu DA etkiliyor (fonksiyon paylaşılıyor, kasıtlı — kullanıcı özel olarak "badge icon" dedi, Grid'e özel bir instance istemedi). (2) Avatar: Data Table'ın satır avatarı ve Card'ın header avatar control item'ındaki 9 hardcoded kullanım, bir önceki oturumda (bkz. yukarıdaki not) Default temaya çevrilmişti — kullanıcı bunu geri Brand temaya (`bt-avatar--brand` eklendi) çevirdi. Avatar Group'taki "+N" overflow göstergesi (asıl bir kişi avatarı değil) bu değişikliğin HİÇBİR aşamasında brand almadı — hep nötr/varsayılan kaldı (orijinal koddaki tasarım kararı, dokunulmadı). Headless Chrome ile doğrulandı: avatarlar tekrar solid mavi, Status Badge'leri tekrar loader/spinner ikonuyla (Active/Completed/Pending etiketleri ve renk döngüsü korunarak). `docs/js/pages-web.js`, `design.md` §17.1 güncellendi.

**Not — Status Badge sabit min-width alıp uzun metinde ellipsis + native title tooltip gösteriyor (2026-08-14):** Kullanıcı, Status kolonundaki badge genişliklerinin içindeki metne göre değiştiğini ("Active" ile "Completed" farklı genişlik), bunun yerine badge'in min-width ile sabitlenmesini, çok uzun bir metin gelirse ellipsis'lenip hover'da tooltip ile tam metnin gösterilmesini istedi. `badgeHtml(_, p)`'e iki yeni opsiyonel param eklendi: `minWidth` (pill'e `min-width:Xpx` verir) ve `maxLabelWidth` (metni bu genişlikte `overflow:hidden;text-overflow:ellipsis;white-space:nowrap` ile saran bir `<span>`'e sarar) — ikisi de sadece geçilirse devreye giriyor, Badge sayfasının kendi playground'u bunları hiç geçmediği için content-hugging davranışı DEĞİŞMEDİ. `minWidth` geçildiğinde ayrıca pill'in kendisine `title="{tam metin}"` ekleniyor (native browser tooltip — projede henüz ayrı bir Tooltip component'i yok, CLAUDE.md'nin "reuse et" kuralına uyacak bir şey bulunamadı, bu yüzden en basit/standart çözüm seçildi; kullanıcı ileride custom stilli bir Tooltip component'i isterse ayrı bir iş olarak ele alınmalı). `gridTrailingHtml('badge')` artık `minWidth:104, maxLabelWidth:64` sabit değerleriyle çağırıyor (Status kolonunun 140px genişliğine, 16px cell padding'ine ve badge'in kendi 16px iç padding'i + 15px icon + 2px gap'ine göre hesaplandı — "Completed"/"Inactive" gibi en uzun mevcut etiketler bile ellipsis'lenmeden tam sığıyor). Headless Chrome ile doğrulandı: "Active"/"Completed" badge'leri artık PIKSEL PIKSEL aynı genişlikte (104px); deneme amaçlı enjekte edilen "Waiting For Approval" gibi uzun bir etiket doğru şekilde "Waiting F…"'e kırpılıyor (`scrollWidth 114 > clientWidth 64`), badge genişliği yine 104px'te sabit kalıyor, `title` attribute'u tam metni ("Waiting For Approval") taşıyor. `docs/js/pages-web.js` güncellendi.

**Not — Status Badge min-width/ellipsis/tooltip'i tamamen geri alındı (2026-08-14):** Kullanıcı bir önceki adımdan hemen sonra fikrini değiştirdi: "max width vermekten vazgeçtim, önceki versiyonda kalsın" — yani sabit genişlik + ellipsis + tooltip fikri tamamen terk edildi, Badge tekrar content-hugging (her satırın metnine göre doğal genişlik alan) haline döndü. `badgeHtml`'deki `minWidth`/`maxLabelWidth`/`titleAttr`/`labelHtml` mantığı SİLİNDİ (bir önceki notta eklenmişti) — fonksiyon artık doğrudan `label`'ı basıyor, hiçbir width/title işleme yok. `gridTrailingHtml('badge')` çağrısından `minWidth`/`maxLabelWidth` param'ları kaldırıldı. Node harness ile 127 sayfa/tab hatasız doğrulandı. `docs/js/pages-web.js` güncellendi.

**Not — Name kolonunun leading control'ü tüm Data Table örneklerinde Avatar'dan Dot'a çevrildi (2026-08-14):** Kullanıcı, Leading/Trailing control ayrımının cell'in tamamını kapsayan tek bir bütün gibi düşünülmesi gerektiğini belirtip, şimdilik tüm tablo örneklerinde tutarlı olarak "Dot yanında text" kullanılmasını istedi. Değişenler: `gridTableColumns(p)`'deki `nameLeading` varsayılanı `'avatar'`den `'dot'`e (interaktif prop, kullanıcı Properties panelinden hâlâ Avatar/Avatar Group/None'a çevirebilir — sadece İLK açılış değeri değişti); Overview playground'daki `nameLeading` prop tanımının `default` alanı da eşleştirildi. `gridActionsColumns`, `gridFrozenColumns`, `gridFrozenLastColumns`'daki HARDCODED (prop'suz, kullanıcı değiştiremeyen) `cellLeading: 'avatar'` üçü de `cellLeading: 'dot'`e çevrildi — bu üç sayfada Name kolonu artık her zaman Dot gösteriyor. Data Table Toolbar sayfası `gridTableHtml`'i doğrudan reuse ettiği için ayrı bir değişikliğe gerek kalmadan otomatik etkilendi. Building Blocks'taki tekil "Avatar + Text" örnek satırı (§17.1, Grid Cell'in leading seçeneklerini tek tek gösteren referans tablo) BİLİNÇLİ olarak dokunulmadı — o satır Avatar seçeneğini özellikle göstermek için var. Headless Chrome ile Data Table/Data Table Actions/Frozen Column/Frozen Column Last'ın hepsinde Name kolonunun artık Dot+Text gösterdiği doğrulandı. `docs/js/pages-web.js` güncellendi.

**Not — Bir önceki değişiklik YANLIŞ kolonu değiştirmişti — Name geri Avatar'a döndü, Dot Role kolonuna eklendi; Figma'da GridCell'in Leading Control'ünün kolon-agnostik olduğu doğrulandı (2026-08-14):** Kullanıcı, "Name" değil "Role" kolonuna dot istediğini belirtti — asıl sorunun, Leading/Trailing control sisteminin sadece Name kolonuna (`nameLeading` prop'u) özel/hardcoded kurulmuş olması, herhangi bir kolonda serbestçe kullanılabilir bir yapı OLMAMASI olduğunu vurguladı. Kullanıcının paylaştığı Figma linkiyle (`GridCell`, node `839:46982`) `get_design_context` çağrısı doğrulama için yapıldı: Figma'daki gerçek component YAPISI zaten TAM olarak kod tarafındaki `gridLeadingHtml`/`gridTrailingHtml` switch-case mimarisiyle birebir eşleşiyor — Left Control/Checkbox Control/Dot Control/Avatar Control/Avatar Group Control/[content]/Badge Control/Button Control/Switch Control/Inline Textbox Control/Inline DropDown Control/Right Control hepsi AYNI GridCell'in İÇİNDE yan yana, birbirinden bağımsız, herhangi bir kombinasyonda açılıp kapanabilen slotlar olarak modellenmiş (kod tarafında zaten böyle) — yani mimari YANLIŞ değildi, sadece Data Table örnek sayfalarında Leading control'ün SADECE Name kolonuna kablolanmış olması (Role gibi diğer kolonlarda hiç kullanılamaması) kısıtlayıcıydı. Düzeltme: `nameLeading` varsayılanı ve playground prop default'u `'avatar'`e geri döndü (bir önceki notun tersi), `gridActionsColumns`/`gridFrozenColumns`/`gridFrozenLastColumns`'daki hardcoded Name `cellLeading` de `'avatar'`e döndü. Role kolonuna (`gridTableColumns` + aynı üç fonksiyon) YENİ `cellLeading: 'dot'` eklendi — dört sayfada da Role artık Dot+Text gösteriyor. **Bilinen sınırlama/gelecek iş:** Role'ün leading control'ü şu an (Name'in `nameLeading` prop'unun aksine) hardcoded/sabit — kullanıcının asıl istediği "her kolon custom olarak değiştirilebilsin" genel kapasitesi henüz eklenmedi, bu "şimdilik" bir kesin çözüm (kullanıcının kendi ifadesiyle). Headless Chrome ile Data Table ve Data Table Actions'ta Name=Avatar, Role=Dot+Text doğrulandı. `docs/js/pages-web.js` güncellendi.

**Not — Generic column-leading-config sistemi kuruldu: Role artık Name gibi bağımsız, Properties panelinden konfigüre edilebilir bir Leading control'e sahip (2026-08-14):** Kullanıcı, bir önceki oturumda Role'e sadece hardcoded `'dot'` eklenmesinin geçici bir çözüm olduğunu, asıl istediğinin herhangi bir kolonun leading control'ünü custom olarak değiştirebilmek olduğunu tekrarlayıp bunun kurulmasını istedi. Değişiklikler: (1) `GRID_TABLE_NAME_LEADING_OPTS` (None/Avatar/Avatar Group/Dot) Name'e özelmiş gibi duran ismiyle birlikte `GRID_TABLE_LEADING_OPTS`'a yeniden adlandırıldı — artık hem Name hem Role hem gelecekte eklenecek herhangi bir kolon AYNI seçenek listesini reuse ediyor (kolon-agnostik, tek kaynak). (2) `gridTableColumns(p)`'ye `roleLeading` (`p.roleLeading || 'dot'`) eklendi, Role kolonunun `cellLeading`'i artık `nameLeading` ile BİREBİR AYNI mekanizmayla (statik string yerine prop'tan okunan değişken) çalışıyor. (3) Overview playground'un `props` dizisine `{ key:'roleLeading', label:'Role Leading', group:'Columns', options:GRID_TABLE_LEADING_OPTS, default:'dot' }` eklendi — "Name Leading" ile YAN YANA, Properties panelinde bağımsız bir dropdown olarak görünüyor, Name'i etkilemeden None/Avatar/Avatar Group/Dot arasında geçiş yapılabiliyor. Headless Chrome ile `window._pgdSetProp('pgd-datatable-overview','roleLeading',...)` ile canlı test edildi: `'none'`de Role düz metne dönüyor (dot kayboluyor), `'avatarGroup'`de Role kolonu Name'den TAMAMEN bağımsız kendi Avatar Group'unu gösteriyor (Name hâlâ tek Avatar'da kalıyor), `'dot'`a geri dönünce sorunsuz eski hâline dönüyor — üç durumda da Name kolonu hiç etkilenmedi. **Kapsam notu:** Bu, SADECE interaktif Data Table Overview playground'unda (Properties panelli tek sayfa) yapıldı — Data Table Actions/Frozen Column/Frozen Column Last gibi statik (Properties panelsiz) sayfalarda Name/Role hâlâ hardcoded literal değerler (avatar/dot) olarak kalıyor, çünkü o sayfalarda zaten HİÇBİR kolon (Status/Actions dahil) interaktif değil — bu proje genelinde tutarlı bir davranış, sadece Role'e özel bir eksiklik değil. İleride ID/Email gibi başka kolonlara da leading/trailing config eklenmek istenirse aynı desen (yeni bir `xLeading`/`xTrailing` local değişkeni + `GRID_TABLE_LEADING_OPTS`'u reuse eden yeni bir props girişi) birebir tekrarlanabilir. `docs/js/pages-web.js` güncellendi.

**Not — Gerçek generic column-content-config sistemi kuruldu: ÖRNEK tablodaki (ID/Name/Role/Status/Email) HER kolon, TAM/aynı content-kind listesinden serbestçe seçim yapabiliyor (2026-08-14):** Kullanıcı bir önceki adımı yetersiz buldu — Role'e sadece bağımsız bir "Leading" prop'u eklemek yetmiyordu, çünkü o prop'un seçenek listesi hâlâ dar/hardcoded'dı (sadece None/Avatar/Avatar Group/Dot — Badge/Button/Switch/Textbox/Dropdown yoktu) ve SADECE Name+Role'e vardı, diğer kolonlara (ID/Status/Email) hiç yoktu. Kullanıcı açıkça "column properties'de status badge seçiliyse bunu avatar'a çevirebilmeliyim" dedi — yani Leading/Trailing ayrımı kullanıcı için önemsiz, istenen: HER kolon HERHANGİ bir control tipine (kategori farketmeksizin) geçebilsin.

Kuruluş: (1) **`GRID_TABLE_CONTENT_OPTS`** — None/Checkbox/Dot/Avatar/Avatar Group/Badge/Button/Switch/Inline TextBox/Inline Dropdown'ı TEK bir listede toplayan, gerçekten kolon-agnostik bir "content kind" enum'u (Figma'daki GridCell node `839:46982`'nin control envanteriyle birebir aynı sırada — bkz. yukarıdaki Figma doğrulama notu). (2) **`GRID_LEADING_KINDS`/`GRID_TRAILING_KINDS`** — hangi kind'ların Leading (metinden önce) hangilerinin Trailing (metinden sonra) olduğunu bilen iki `Set`. (3) **`gridContentKindToSlots(kind)`** — bir kind'ı `{leading, trailing}` çiftine çeviren tek satırlık router; kolon tanımları artık `cellLeading: 'avatar'` gibi sabit bir string yerine bu fonksiyonun çıktısını kullanıyor. (4) **`gridTableColumns(p)`** yeniden yazıldı: ID/Name/Role/Status/Email'in HER BİRİ artık `p.idContent`/`p.nameContent`/`p.roleContent`/`p.statusContent`/`p.emailContent`'ten `gridContentKindToSlots()` ile leading/trailing türetiyor — beşi de AYNI mekanizma, hiçbiri diğerinden ayrıcalıklı değil. Status'un tek istisnası korundu: kind `'none'` ise kolon TAMAMEN kayboluyor (önceki davranış), diğer 4 kolonda `'none'` sadece control'ü kaldırıp metni/kolonu koruyor. (5) Overview playground'un `props` dizisine **5 prop** eklendi (ID/Name/Role/Status/Email Content), HEPSİ `GRID_TABLE_CONTENT_OPTS`'u reuse ediyor — artık Properties panelinde her kolonun yanında AYNI 10 seçenekli dropdown var. Varsayılanlar önceki görünümü koruyor: ID→none, Name→avatar, Role→dot, Status→badge, Email→none.

Headless Chrome ile `_pgdSetProp` üzerinden üç ayrı senaryo canlı test edildi: **Status→Avatar** (kullanıcının verdiği tam örnek — Badge kayboldu, Status artık bir Avatar gösteriyor); **ID→Switch** (önceden HİÇ konfigüre edilemeyen bir kolon artık ID numarasının yanında bir Switch gösteriyor); **Email→Badge** (Email HEM kendi email metnini HEM de Status'un kullandığı AYNI döngüsel renk/etiket mantığıyla bir Badge gösteriyor — `cellTrailing==='badge'` kontrolü zaten kolon-agnostikti, ekstra wiring gerekmedi). Üçü de `gridTableColumns`'daki hiçbir özel-durum koduna ihtiyaç duymadan, salt prop değişimiyle çalıştı — bu, sistemin gerçekten generic olduğunun kanıtı. `docs/js/pages-web.js` güncellendi.

**Not — Data Table Toolbar sayfası "Alanı Doldurma" tekniğini hiç KULLANMIYORDU — satır sayısı azken tablo çerçevesi panelin alt kenarına kadar uzamıyordu, düzeltildi (2026-08-14):** Kullanıcı, Toolbar sayfasında satırların altındaki boşluğun tablonun bir parçası gibi görünmediğini (yani `.bt-grid-container`'ın "Alanı Doldurma" davranışının orada çalışmadığını) fark edip §17'deki ilgili dokümantasyon bölümünü (Container'ı Doldurma tekniği, `.bt-grid-container` ile parent'ın kalan yüksekliğini doldurma) hatırlattı. Kök neden: Toolbar sayfasının playground preview'ı `gridTableHtml(p)`'yi `.bt-grid-container` YERİNE düz, class'sız bir `<div style="flex:1;min-height:0;overflow-x:auto;display:flex;flex-direction:column;">` ile sarıyordu — bu div'in kendi border'ı YOK ve `.bt-grid` (base kural: `display:inline-flex;width:fit-content`) içerik boyutuna sarılı kalıyordu, panelin kalan yüksekliğine hiç esnemiyordu. Sonuç: az satırla (örn. 3), tablonun görünen sınırı (satırların kendi Position bazlı sol/sağ hücre border'ları + son satırın alt border'ı) satırların bittiği yerde kesiliyor, altındaki boşluk "kopuk"/tabloya ait olmayan bir alan gibi duruyordu — TAM olarak `.bt-grid-container`'ın çözmek için var olduğu problem, ama bu sayfada hiç kullanılmamıştı. Düzeltme tek satır: sarmalayıcı `<div class="bt-grid-container" style="overflow-x:auto;">` oldu (ana Data Table Overview playground'unun preview'ıyla BİREBİR aynı desen). `.bt-grid-panel .bt-grid`'in ZATEN var olan `flex:1;width:100%;min-height:0` kuralı ile `.bt-grid-container .bt-grid`'in (aynı özellikler, farklı selector) çakışması YOK — ikisi de aynı sonuca varıyor, specificity eşit, kaynak sırasında sonra tanımlanan (`.bt-grid-panel`) kazanıyor ama değerler identik olduğu için görsel fark yaratmıyor. `.bt-grid-container`'ın kendi border-left/right/bottom'u + `.bt-grid-container .bt-grid__cell--left/--right{border-left/right:none}` (çift border'ı önleyen suppress kuralı) artık devrede — panel içinde panelin KENDİ dış border'ından ayrı, tabloyu SARAN ikinci bir iç border oluşuyor (ekran görüntülerinde zaten görülen, ama alt kenarda kesilen görünüm bu şekilde tamamlandı). Headless Chrome ile hem rowCount=3 hem varsayılan rowCount=6 durumunda doğrulandı: `.bt-grid-container`'ın alt kenarı artık panelin iç (padding sonrası) alt kenarına 17px kalana kadar uzanıyor (bu 17px panelin kendi `--bt-space-2xl` alt padding'i, beklenen/doğru değer) — border ve arka plan satır sayısından bağımsız olarak panelin tamamını dolduruyor. `docs/js/pages-web.js` güncellendi.

**Not — `.bt-grid-container` (base Data Table + Toolbar) Properties paneli açıkken header/body senkron kayması yaşıyordu — Data Table Actions'ta zaten çözülen AYNI hatanın `.bt-grid-container`'a hiç uygulanmamış hali, `min-width:max-content` ile düzeltildi (2026-08-14):** Kullanıcı, Properties paneli açıkken (preview alanı daralınca) Data Table sayfasındaki header row'un bozulduğunu ekran görüntüsüyle bildirdi. Kök neden BİREBİR daha önce Data Table Actions'ta bulunup çözülen sorunla aynıydı (bkz. yukarıdaki "devam" notları): `.bt-grid-container .bt-grid` `width:100%` (sabit, `min-width:max-content` YOK) + `.bt-grid-container .bt-grid__body { overflow:auto }` (her iki eksende) — içerik (944px'lik 6 kolon) mevcut genişliği (Properties paneliyle daralmış, örn. ~386px) aştığında, `.bt-grid__body` KENDİ BAŞINA (header'dan bağımsız, senkronsuz) hem yatay hem dikey scroll edilebilir bir container'a dönüşüyordu — header ise hiç scroll yeteneği olmadığı için sadece görünen ilk birkaç kolonda (ID/Name/Role) donup kalıyor, body'nin kendi scrollbar'ıyla kaydırılan Status/Email'e hiç senkron olmuyordu. Bu hata SADECE Actions'ta değil `.bt-grid-container`'ı kullanan HER sayfada (plain Data Table, Data Table Toolbar) potansiyel olarak vardı ama önceki oturumda `min-width:max-content` fix'i yanlışlıkla sadece `.bt-grid-actions-container`'a uygulanmış, base `.bt-grid-container`'a hiç taşınmamıştı.

Düzeltme: `.bt-grid-container .bt-grid`'e de `min-width: max-content;` eklendi (tek satır, `.bt-grid-actions-container`'daki fix'le birebir aynı). `.bt-grid-actions-container`'ın aksine burada ayrı bir `.bt-grid-scroll-x` sarmalayıcı YOK — ama buna gerek de yok: CSS'in "flex item'ın otomatik minimum boyutu, overflow visible olduğu sürece min-content'ten küçük olamaz" kuralı sayesinde, `.bt-grid`'in inflate olan min-content'i `.bt-grid-container`'a (onun da `overflow:visible` olması nedeniyle), ondan da preview'daki ORTA sarmalayıcıya (`display:flex;flex-direction:column;height:356px`, o da `overflow:visible`) doğru YUKARI PROPAGATE oluyor — zincir ancak gerçekten `overflow-x:auto` olan EN DIŞTAKİ preview wrapper'ında (`<div style="padding:24px;overflow-x:auto;">`, tüm playground preview'larında zaten var olan ortak sarmalayıcı) duruyor. Yani `.bt-grid-container`'ın KENDİSİ de (sadece `.bt-grid`'i değil) doğal genişliğine büyüyor, border'ı bu büyümüş genişliği doğru şekilde sarıyor, ve TÜM blok (border+header+body) en dıştaki wrapper içinde TEK bir birim olarak scroll oluyor — Actions'takinden daha az kod ile (yeni bir class/wrapper gerekmedi) aynı doğru sonucu veriyor.

Headless Chrome ile `window._pgdToggleProps(...)` ile Properties paneli programatik olarak açılıp doğrulandı: düzeltme ÖNCESİ `.bt-grid__body`'nin `scrollWidth(814) > clientWidth(386)` idi (kendi başına scroll edilebilir), header sadece ID/Name/Role gösterip Status/Email'e hiç ulaşamıyordu; düzeltme SONRASI `.bt-grid`'in gerçek genişliği 814px'e çıktı, `bodyScrollWidth === bodyClientWidth (814=814)` (body artık kendi başına scroll ETMİYOR), header'da 6 kolonun (Checkbox/ID/Name/Role/Status/Email) hepsi render oluyor, en dıştaki wrapper sonuna kadar kaydırılınca header'ın son hücresiyle body'nin son hücresi pixel-pixel hizalı kalıyor (`aligned:true`). Properties kapalıyken (geniş viewport) hem plain Data Table hem Data Table Toolbar sayfalarında herhangi bir görsel regresyon olmadığı ayrıca doğrulandı — Toolbar'ın bir önceki notta düzeltilen "Alanı Doldurma" davranışı da bu değişiklikten etkilenmedi. `docs/css/styles.css` güncellendi.

**Not — Bir önceki düzeltme YANLIŞTI (`.bt-grid-container`'ın kendi border kutusu hâlâ büyümüyordu) — gerçek çözüm Actions/Frozen'daki `.bt-grid-scroll-x` deseninin `.bt-grid-container`'a da uygulanmasıydı (2026-08-14):** Kullanıcı, bir önceki notta "düzeltildi" denen sorunun AYNEN devam ettiğini ekran görüntüsüyle gösterdi — Properties paneli açıkken hâlâ header/body senkronsuzdu VE container'ın border'ı taşan içeriği sarmıyordu (içerik border'sız şekilde dışarı taşıp uzak bir ata'da scroll oluyordu). Kök neden: bir önceki düzeltme `.bt-grid`'e `min-width:max-content` verip bunun CSS'in "otomatik minimum boyut" kuralıyla `.bt-grid-container`'a, ondan da ATALARINA doğru propagate olacağını VARSAYMIŞTI — ama bu varsayım YANLIŞTI. Headless Chrome'la tüm ata zincirini (`getComputedStyle`+`getBoundingClientRect`) tek tek gezerek doğrulandı: `.bt-grid` gerçekten 814px'e büyüyordu (`scrollWidth`), AMA `.bt-grid-container`'ın KENDİSİ 388px'te SABİT kalıyordu — yani container'ın border'ı (sol/sağ/alt) hâlâ eski dar kutunun etrafındaydı, taşan 814px'lik içerik bu border'ın DIŞINA, hiç sarılmadan taşıyordu; taşma ancak playground'un uzaktaki (birkaç DOM seviyesi yukarıdaki) `overflow-x:auto` wrapper'ında yakalanıyordu — bu da görsel olarak "border'sız taşma + header/body arasında hizasızlık" izlenimi veriyordu (kullanıcının bildirdiği tam olarak buydu).

Gerçek çözüm: Data Table Actions/Frozen Column'da ZATEN kanıtlanmış olan `.bt-grid-scroll-x` desenini `.bt-grid-container`'a da taşımak — taşmayı `.bt-grid`'in TAM OLARAK bir üst ebeveyninde yakalamak, birkaç seviye yukarıdaki uzak bir ataya güvenmemek. `gridTableHtml` artık çıktısını `<div class="bt-grid-scroll-x"><div class="bt-grid">...</div></div>` ile sarıyor (Actions/Frozen'daki `gridActionsTableHtml`/`gridFrozenTableHtml` ile birebir aynı desen — bu üçü de artık AYNI alt-yapıyı reuse ediyor). Yeni CSS kuralı: `.bt-grid-container .bt-grid-scroll-x { flex:1;min-height:0;overflow-x:auto;max-width:100%; }` (yine `.bt-grid-actions-container`'daki karşılığıyla birebir aynı). `.bt-grid-container .bt-grid`'deki `min-width:max-content` KORUNDU (hâlâ gerekli — scroll-x'in içinde `.bt-grid`'in gerçek genişliğine büyümesi lazım ki scroll-x onu doğru ölçüp scroll edebilsin), sadece artık taşması scroll-x katmanında, container'ın border'ının HEMEN içinde yakalanıyor. Toolbar sayfasının preview'ındaki artık gereksiz/yanlış `overflow-x:auto` inline style'ı (`.bt-grid-container`'ın kendisine eklenmişti) kaldırıldı — o iş artık `gridTableHtml`'in kendi `.bt-grid-scroll-x`'i tarafından yapılıyor.

Headless Chrome ile TEK TEK doğrulandı (ilk seferki gibi yüzeysel değil): (1) `.bt-grid-container`'ın kendi `getBoundingClientRect().width`'i scroll ÖNCESİ ve SONRASI TAMAMEN AYNI (403px, hem konum hem boyut) — border artık asla "kaymıyor"/"büyümüyor", sabit kalıyor; (2) `.bt-grid-scroll-x`'in `scrollWidth` (817) doğru şekilde taşan içeriği yansıtıyor; (3) `.bt-grid__body`'nin `scrollWidth === clientWidth` (814=814) — body artık KESİNLİKLE kendi başına scroll edilemiyor; (4) header'da 6 kolonun (Checkbox/ID/Name/Role/Status/Email) HEPSİ render oluyor; (5) `.bt-grid-scroll-x`'i sonuna kadar kaydırınca header'ın son hücresiyle body'nin son hücresi pixel-pixel hizalı (`aligned:true`). Properties kapalıyken (geniş viewport) hem plain Data Table hem Toolbar sayfalarında ekran görüntüsüyle regresyon olmadığı da ayrıca doğrulandı. `docs/css/styles.css`, `docs/js/pages-web.js` güncellendi.

**Not — Generic column-content-config sistemi (ID/Name/Role/Status/Email Content) DÖRT sayfaya daha yayıldı: Data Table Toolbar, Data Table Actions, Frozen Column, Frozen Column Last (2026-08-14):** Kullanıcı, bu sistemin sadece ana Data Table sayfasında olmasının yetmediğini, "tüm data table sayfalarındaki örneklere" getirilmesini istedi. Önceden bu 4 sayfanın kolon fonksiyonları (`gridActionsColumns`, `gridFrozenColumns`, `gridFrozenLastColumns`) Name/Role/Status'u HARDCODED (`cellLeading:'avatar'`, `cellLeading:'dot'`, `cellTrailing:'badge'`) tutuyordu — Toolbar ise zaten `gridTableColumns`'u reuse ettiği için altyapı hazırdı ama Properties panelinde "Columns" grubu hiç YOKTU. Değişiklikler:

- **`gridActionsColumns(p)`**: ID/Name/Role/Status/Email artık `gridTableColumns` ile BİREBİR aynı mekanizmayla (`gridContentKindToSlots(p.xContent || default)`) çalışıyor. Actions kolonu (`actionsContent`) DOKUNULMADI — zaten kendi `GRID_TABLE_ACTIONS_OPTS`'uyla configurable'dı.
- **`gridFrozenColumns(p)`** / **`gridFrozenLastColumns(p)`**: Aynı 5 kolon aynı mekanizmaya geçirildi. Department/Location/Last Login BİLİNÇLİ olarak dokunulmadı — bunlar Figma'da karşılığı olmayan, sadece frozen-column davranışını göstermek için genişlik eklemeye yarayan yardımcı kolonlar (bkz. §17.4 "Neden ayrı bir kolon seti gerekti" notu), generic content sistemine dahil edilmeleri o amaçla çelişir. Frozen Column Last'ta Actions kolonu ÖNCEDEN hiç configurable DEĞİLDİ (`cellTrailing:'button'` hardcoded, `frozenRight:true`) — Data Table Actions'takiyle AYNI `actionsContent`/`GRID_TABLE_ACTIONS_OPTS` mekanizması YENİ eklendi (kullanıcı `'none'` seçerse sağdan-donma demosu geçici olarak kaybolur — bu, Status'un `'none'`de tüm sütunu kaldırmasıyla aynı, zaten var olan bir davranış kalıbı, özel olarak engellenmedi).
- **Properties panelleri**: Toolbar'a `showCheckboxCol`/`idContent`/`nameContent`/`showSort`/`roleContent`/`showFilter`/`statusContent`/`emailContent` (ana Data Table'la BİREBİR aynı "Columns" grubu) eklendi. Data Table Actions'a `idContent`/`nameContent`/`roleContent`/`statusContent`/`emailContent` eklendi (`actionsContent` zaten vardı, sırası korunarak grubun sonuna alındı). Frozen Column'a ve Frozen Column Last'a aynı 5 prop eklendi (Frozen Last'a ayrıca `actionsContent` de YENİ eklendi). Hepsi `GRID_TABLE_CONTENT_OPTS`'u (None/Checkbox/Dot/Avatar/Avatar Group/Badge/Button/Switch/Inline TextBox/Inline Dropdown) reuse ediyor — tek kaynak, 4 sayfa arasında hiç kod tekrarı yok.

Headless Chrome ile 4 sayfanın da Properties panelinde doğru prop setinin registered olduğu (`window._pgdConfigs[id].props`) VE her sayfada bir test prop'u (`statusContent`→avatar, `roleContent`→badge vb.) canlı değiştirilip DOM'da doğru şekilde yansıdığı doğrulandı — hatasız, JS exception yok. Frozen Column Last'ta `roleContent:'badge'` testi özellikle DOM seviyesinde (`innerHTML` kontrolü) doğrulandı çünkü ekran görüntüsü kırpması badge'i görsel olarak dar kolon genişliğinde kesmişti (gerçek bir hata değil, sadece test screenshot'ının crop alanı yetersizdi). Node harness ile 127 sayfa/tab hatasız. `docs/js/pages-web.js` güncellendi.

**Not — Grid Cell'in Dot control rengi nötr griden marka mavisine (`--bt-icon-brand-default`) çevrildi (2026-08-14):** Kullanıcı önce cell içindeki Dot'un rengini sordu (`--bt-icon-primary-strong`, #535353 — Figma'da renk varyantı tanımlı değil, sabit nötr gri), sonra bunu `--bt-icon-brand-default`'a (`var(--bt-blue-700)`, #0d4e97) çevirmek istedi. `.bt-grid__dot`'un `background` değeri güncellendi, Building Blocks'taki CSS Properties tablo satırı da (`Control · Dot`) yeni token/hex ile eşleştirildi. Headless Chrome ile doğrulandı — Role kolonundaki dot artık Avatar'larla aynı marka mavisinde. `docs/css/styles.css`, `docs/js/pages-web.js` güncellendi.

**Not — Actions Column artık diğer kolonlarla AYNI genel seçenek listesini kullanıyor; TRAILING kind'lar (Badge/Button/Switch/Inline TextBox/Inline Dropdown) seçiliyken hücre metni otomatik gizleniyor (2026-08-14):** Kullanıcı iki ayrı düzeltme istedi. (1) Actions Column'un kendi dar `GRID_TABLE_ACTIONS_OPTS`'u (None/Buton/TextBox/Dropdown) olması "yanlış"tı — diğer TÜM kolonlarla (ID/Name/Role/Status/Email) AYNI `GRID_TABLE_CONTENT_OPTS`'u kullanmalıydı; Button'ın varsayılan olması sadece "tasarımın çalışma şekli" gereği (Frozen Column Last'ın asıl amacı sağdan donmuş bir Actions kolonu göstermek), seçenek listesini KISITLAMAK için bir gerekçe değil. `GRID_TABLE_ACTIONS_OPTS` tamamen kaldırıldı (kullanılmayan kod) — `gridActionsColumns`/`gridFrozenLastColumns`'daki `actionsContent` artık `gridContentKindToSlots()` üzerinden diğer kolonlarla BİREBİR aynı mekanizmayı kullanıyor, Data Table Actions ve Frozen Column Last sayfalarındaki "Actions Column" prop'unun `options`'ı `GRID_TABLE_CONTENT_OPTS`'a çevrildi (varsayılan hâlâ `'button'`, davranış değişmedi — sadece kısıtlama kalktı).

(2) Kullanıcı ayrıca, Badge/Button/Switch/Inline TextBox/Inline Dropdown gibi TRAILING control'ler seçiliyken hücrede METNİN GÖRÜNMEMESİ gerektiğini belirtti — önceden örn. Email'i Badge'e çevirince hem email metni HEM badge birlikte görünüyordu (yanlıştı, Figma'daki Building Blocks referansında da bu control'ler kendi başlarına, metinsiz gösteriliyor). `gridContentKindToSlots()`'a yeni bir `showText` alanı eklendi: LEADING kind'larda (Checkbox/Dot/Avatar/Avatar Group — metinden ÖNCE gelen dekorasyonlar) `showText:true`, TRAILING kind'larda (kendi başına yeterli, bağımsız control'ler) `showText:false`, `'none'`de `showText:true` (düz metin). `gridTableColumns`/`gridActionsColumns`/`gridFrozenColumns`/`gridFrozenLastColumns`'daki ID/Name/Role/Email kolon tanımlarının `field` değeri artık `content.showText ? 'fieldAdı' : undefined` — `showText:false` olduğunda `field` hiç set edilmiyor, bu da `gridCellHtml`'in zaten var olan `showContent: c.field ? 'on':'off'` mantığıyla otomatik olarak metni kapatıyor (ayrı bir yeni parametre/mekanizma gerekmedi, mevcut altyapı reuse edildi).

Headless Chrome ile doğrulandı: Email'i Badge'e çevirince hücrenin `innerHTML`'inde SADECE badge control'ü var, `hasEmailText:false` (email metni tamamen kayboldu); Name (Avatar, bir LEADING kind) hâlâ hem avatar hem "Emre Göçer" metnini birlikte gösteriyor (LEADING kind'larda metin korunuyor, beklenen davranış); Data Table Actions sayfasındaki "Actions Column" dropdown'ının `options` listesi artık 10 elemanlı (None/Checkbox/Dot/Avatar/Avatar Group/Badge/Button/Switch/Inline TextBox/Inline Dropdown) — diğer kolonlarla birebir aynı. Node harness ile 127 sayfa/tab hatasız. `docs/js/pages-web.js` güncellendi.

**Not — Generic content-kind listesine "Icon" eklendi, loader ikonuyla render ediyor (2026-08-14):** Kullanıcı isteğiyle `GRID_TABLE_CONTENT_OPTS`'a `icon` kind'ı eklendi (None/Checkbox/Dot arasına, Dot ile Avatar'ın arasında — Figma'daki GridCell'in Left/Right Control ikon slotuyla aynı kavram). `GRID_LEADING_KINDS`'a da eklendi (metinden ÖNCE gelen bir dekorasyon — Dot/Avatar gibi, metinle birlikte kalıyor, `showText:true`). `gridLeadingHtml('icon')` yeni case'i, mevcut `gridControlIcon()` helper'ını (Left/Right Control'de zaten kullanılan, `.bt-grid__control-icon` — 16×16, `--bt-icon-primary-strong` rengini miras alan) `_bdgLoader('currentColor')` (Badge'in kendi loader/spinner ikonuyla AYNI SVG) ile besliyor — `currentColor` geçilerek ikonun rengi `.bt-grid__control-icon`'ın kendi CSS `color`'undan miras alınıyor, sort/filter/ellipsis gibi diğer grid ikonlarıyla tutarlı. Building Blocks'taki mevcut "Control · Icon" Anatomy satırı (16×16, `--bt-icon-primary-strong`, #535353) zaten bu yeni kind'ı da doğru şekilde kapsıyor — ayrı bir satır eklemeye gerek kalmadı. Headless Chrome ile doğrulandı: Role Content dropdown'ında `icon` seçeneği var, seçilince hücrede loader SVG'si + metin ("Designer") birlikte görünüyor (leading kind olduğu için metin kaybolmuyor). Node harness ile 127 sayfa/tab hatasız. `docs/js/pages-web.js` güncellendi.

**Not — Icon kind'ının ikonu loader'dan siren'e çevrildi (varsayılan renk `--bt-icon-error-default`); Badge etiketi artık HANGİ kolona uygulandıysa o kolonun kendi verisini gösteriyor; Status kolonuna kendi `field`'ı verildi (2026-08-14):** Kullanıcı üç ayrı düzeltme istedi. (1) **İkon**: Icon kind'ının `gridLeadingHtml('icon')` case'i artık Badge'in paylaşılan loader SVG'si yerine kendine ait yeni `_gridIconSiren` (lucide "siren", `unpkg.com/lucide-static` üzerinden `curl` ile birebir çekildi — elle çizilmedi) kullanıyor, varsayılan rengi `var(--bt-icon-error-default, #b31d38)`. Bunun için `gridControlIcon(icon, color)` fonksiyonuna opsiyonel bir `color` parametresi eklendi (geçilirse `<span>`'e inline `color` style'ı ekliyor, geçilmezse eskisi gibi CSS'ten miras alıyor) — Sort/Filter/Ellipsis gibi diğer `gridControlIcon()` çağrıları hiç değişmedi, sadece Icon kind kendi rengini override ediyor.

(2) **Badge etiketi kolon-agnostik hale geldi**: Önceden `trailingLabel` SADECE `c.field === 'statusLabel'` olduğunda set ediliyordu (yani sadece Status kolonu Badge'e çevrilince gerçek bir etiket görünüyordu, başka bir kolon Badge'e çevrilince `badgeHtml`'in varsayılanı olan literal "Badge" metni kalıyordu). Artık `trailingLabel: c.cellTrailing === 'badge' ? (c.field ? row[c.field] : undefined) : undefined` — HANGİ kolon Badge'e çevrilirse çevrilsin, o kolonun kendi `field`'ına karşılık gelen satır verisi badge içinde gösteriliyor (örn. Name→Badge "Emre Göçer" yazıyor, Email→Badge kişinin gerçek email'ini yazıyor). Renk döngüsü (`trailingColor`) bilinçli olarak Status'a ÖZEL kaldı (`c.field === 'statusLabel'` şartı korundu) — diğer kolonların rengi anlamlı bir durum eşlemesi taşımıyor, badge'in varsayılan (mavi) rengiyle kalması doğru.

(3) **Status'a gerçek `field` verildi**: Önceden Status kolonu `field` set ETMİYORDU (sadece Badge'in `trailingLabel`'ı için ayrı, özel bir okuma yolu vardı) — bu da Status LEADING bir kind'a (örn. yeni Icon) çevrildiğinde yanında hiç metin gösterememesine yol açıyordu (Icon kind bir LEADING kind, metinle birlikte kalması gerekiyordu ama gösterecek `field`'ı yoktu). `gridTableColumns`/`gridActionsColumns`/`gridFrozenColumns`/`gridFrozenLastColumns`'daki Status kolon tanımına `field: 'statusLabel'` eklendi (satırlardaki mevcut `row.statusLabel` verisine işaret ediyor, yeni bir veri alanı gerekmedi) — artık ID/Name/Role/Email ile BİREBİR aynı mekanizmayı kullanıyor, hiçbir özel-durum kodu kalmadı. 4 render fonksiyonundaki (`gridTableHtml`/`gridActionsTableHtml`/`gridFrozenTableHtml`/`gridFrozenLastTableHtml`) `showContent`/`trailingLabel`/`trailingColor` formülleri bu üç değişikliği yansıtacak şekilde güncellendi (yukarıdaki (2) ve (3)'teki tek/birleşik formüller).

Headless Chrome ile 4 senaryo canlı test edildi: **Status→Icon** — siren ikonu (kırmızı, `rgb(179,29,56)`, doğrulanan path verisiyle) + "Active"/"Completed"/"Pending" metni yan yana, Role'ün dot'u ve Name'in avatar'ı etkilenmedi; **Email→Badge** — badge içinde gerçek email adresi (`emre.gocer@bentas.com`); **Name→Badge** — badge içinde gerçek isim ("Emre Göçer", "Ayşe Yılmaz", "Mert Demir"), varsayılan (mavi) renkte; **Status→Badge (regresyon)** — renk döngüsü (blue/green/yellow) ve etiketler (Active/Completed/Pending) hâlâ doğru eşleşiyor, önceki behavior bozulmadı. Dördü de hem DOM assertion hem ekran görüntüsüyle doğrulandı. `node --check` + Node `vm` harness (127 sayfa/tab) hatasız. `docs/js/pages-web.js` güncellendi.

**Not — REGRESYON: bir önceki notun `showContent` formülü Frozen sayfalarındaki Department/Location/Last Login kolonlarının verisini kaybettirmişti, düzeltildi (2026-08-14):** Kullanıcı, bir önceki değişiklik sonrası Frozen Column ve Frozen Column Last sayfalarında Department/Location/Last Login kolonlarındaki datanın kaybolduğunu bildirdi. Kök neden: bir önceki notta 4 render fonksiyonuna eklenen `showContent: (c.field && c.cellTrailing === 'none') ? 'on' : 'off'` formülü, `c.cellTrailing`'in HER ZAMAN açıkça bir string olduğunu varsayıyordu — bu, `gridContentKindToSlots()`'tan geçen ID/Name/Role/Status/Email için doğruydu (o fonksiyon `trailing:'none'`i her zaman açıkça döndürüyor, bkz. §17.4 "Generic content-kind" notu), AMA Department/Location/Last Login (SADECE Frozen sayfalarına özel, `gridContentKindToSlots()`'tan hiç geçmeyen, sadece `field` taşıyan yardımcı kolonlar, bkz. yukarıdaki "Neden ayrı bir kolon seti gerekti" notu) için `c.cellTrailing` hiç set edilmediğinden `undefined` kalıyordu — `undefined === 'none'` `false` olduğu için `showContent` yanlışlıkla `'off'`e düşüyor, kolonun `field`'ı olsa bile metni gizliyordu (asıl render'da kullanılan `trailing: c.cellTrailing || 'none'` ifadesiyle TUTARSIZ bir kontroldü). Düzeltme: formül `showContent: (c.field && (c.cellTrailing || 'none') === 'none') ? 'on' : 'off'` oldu — artık `cellTrailing`'in hem `undefined` (helper kolonlar) hem açık `'none'` (generic kolonlar) hallerini AYNI şekilde ele alıyor, gerçek render'daki `|| 'none'` fallback'iyle birebir tutarlı. Değişiklik 4 render fonksiyonunun (`gridTableHtml`/`gridActionsTableHtml`/`gridFrozenTableHtml`/`gridFrozenLastTableHtml`) hepsinde birebir aynı. Headless Chrome ile doğrulandı: Frozen Column'da satır 1 artık `["10000001","EG Emre Göçer","Designer","Design","İstanbul","2 saat önce","Active","emre.gocer@bentas.com"]` (Department/Location/Last Login geri geldi), Frozen Column Last'ta aynı satır + Actions (Button+More) da bozulmadan görünüyor. `node --check` + Node `vm` harness (127 sayfa/tab) hatasız. `docs/js/pages-web.js` güncellendi.

### 17.5 Data Table Inline Editing / InCell Editing (2026-08-24'te eklendi)

**Figma'da karşılığı YOK** — kullanıcı isteğiyle sıfırdan tasarlandı (data grid dünyasındaki standart ayrım): **Inline Editing** satır bazlı düzenleme (Actions kolonundaki kalem ikonuna tıklanınca satırın TÜM editable hücreleri aynı anda view'dan edit'e geçer, Save/Cancel ile açıkça onaylanır/iptal edilir), **InCell Editing** hücre bazlı düzenleme (Excel/Sheets deseni — bir hücreye ÇİFT tıklanınca SADECE o hücre edit'e geçer, Enter/blur/dışarı tıklama ile otomatik kaydedilir, Escape ile eski değerine döner). İkisi de nav'da Data Table grubunun altında ayrı sayfalar (`components/data-table-inline-editing`, `components/data-table-incell-editing`).

**Ortak mekanizma — "dual view/edit markup + CSS-only toggle":** Editable bir hücre, view içeriğini (`.bt-grid__content` veya Status'un Badge'i) DOM'dan HİÇ kaldırmadan yanına bir edit markup'ı (`.bt-grid__cell-edit`) ekler — hangisinin görünür olacağını SADECE bir ata class'ı belirler, JS sadece bu class'ı toggle'lar (yeniden render YOK). İki bağımsız tetikleyici aynı çift markup'ı paylaşır:
- **Satır seviyesi** (`.bt-grid__row--editing`) — Inline Editing, Actions'taki kalem ikonu tüm satıra ekler.
- **Hücre seviyesi** (`.bt-grid__cell--editing`) — InCell Editing, bir hücreye çift tıklama SADECE o hücreye ekler.

```css
.bt-grid__cell-edit { display: none; flex: 1 1 auto; min-width: 0; padding: 8px; }
.bt-grid__row--editing .bt-grid__cell--editable > .bt-grid__content,
.bt-grid__row--editing .bt-grid__cell--editable > .bt-grid__control,
.bt-grid__cell--editable.bt-grid__cell--editing > .bt-grid__content,
.bt-grid__cell--editable.bt-grid__cell--editing > .bt-grid__control { display: none; }
.bt-grid__row--editing .bt-grid__cell--editable > .bt-grid__cell-edit,
.bt-grid__cell--editable.bt-grid__cell--editing > .bt-grid__cell-edit { display: flex; }
```

**`gridCellHtml(opts)` genişletmesi** — `editable` (bool), `editKind` (`'textbox'`|`'dropdown'`), `editValue`, `editDblClick` (bool) opsiyonel param'ları eklendi. Hepsi `undefined`/`false` varsayılan olduğu için diğer TÜM mevcut çağrılar (100+ yer) hiç etkilenmedi — Frozen Column'daki `sticky`/`frozenEdge` param'larıyla AYNI additive-opsiyonel desen. `editable:true` olan hücre `bt-grid__cell--editable` class'ı alır, `editKind`'a göre `_gridEditTextboxHtml(value)` (gerçek `.bt-tbx` input) veya `_gridEditDropdownHtml(value)` (gerçek `.bt-tbx__anchor` + `.bt-dd-options`, `_gridStatusOptions`'tan üretilir) render eder. `editDblClick:true` (sadece InCell sayfası) hücrenin KÖK div'ine `onclick="event.stopPropagation()"` + `ondblclick="btGridCellEditStart(event,this)"` ekler — tek tıklama satır seçimine bubble'lamaz (çift tıklamanın iki click'i satırı seçip geri kaldırmasın diye), çift tıklama edit modunu açar.

**JS event akışı:**
- `btGridCellEditStart(event, el)` — hücreyi `--editing` yapar, TextBox ise input'u focus+select eder, Dropdown ise `btDdToggle` ile açar.
- `btGridCellEditKeydown(event, input)` — Enter: view'a senkronize edip kapatır: `_btGridSyncEditView(cell)` `.bt-grid__content`'i input değerine yazar VE `input.defaultValue`'yu günceller (bir sonraki Cancel/Escape artık bu YENİ değere döner). Escape: `input.value = input.defaultValue` (son commit edilen değere/orijinale döner), kapatır.
- `btGridCellEditBlur(event, input)` — input focus kaybedince otomatik commit (InCell'in "blur ile kaydeder" davranışı).
- Global `document.addEventListener('click', ...)` — `.bt-grid__cell--editing` olan herhangi bir hücrenin DIŞINA tıklanınca commit edip kapatır. TextBox'ta blur zaten yeterli ama Dropdown'ın (`<div>` tabanlı, odaklanabilir değil) KAPANMASININ TEK yolu bu — native blur event'i hiç ateşlenmiyor.
- `btGridStatusOptionSelect(event, optEl)` — Status dropdown'ında bir seçenek seçilince hem dropdown'ın kendi `.bt-tbx__text`'ini hem (varsa) hücrenin görünür `.bt-badge__label`'ını (bkz. aşağıdaki `badgeHtml` notu) günceller, hücreyi kapatır.
- `btGridRowEditStart/Cancel/Save(event, btn)` — SADECE Inline Editing. Start satıra `--editing` ekler. Save satırdaki TÜM `.bt-grid__cell--editable` hücrelerini `_btGridSyncEditView` ile senkronize edip kapatır. Cancel input'ları `defaultValue`'ya resetleyip kapatır (typed ama kaydedilmemiş değerler atılır).

**`badgeHtml()` değişikliği (geriye dönük uyumlu):** Label artık çıplak metin değil `<span class="bt-badge__label">${label}</span>` — SADECE bir DOM-hook eklemek için, görsel/HTML yapı hiç değişmedi. Bu, Status dropdown'ından bir seçenek seçilince badge'in görünen etiketini JS'in güvenle güncelleyebilmesini sağlıyor (badge'in geri kalanı ikon `<span>`'leri + çıplak text node karışımı olduğu için stabil bir seçici yoktu).

**Actions kolonu (SADECE Inline Editing):** `gridRowEditActionsCellHtml(position, width)` — generic `editable`/`.bt-grid__cell-edit` sisteminden BAĞIMSIZ, kendi küçük view/edit çifti: view = **Edit** (`bt-btn--primary-solid`, `_gridIconEditItem` + metin — asıl tetikleyici) + **Delete** (`bt-btn--secondary-flat`, `_gridIconTrashItem` + metin — bu demo'da dekoratif, gerçek silme işlevi yok, overflow menu'deki Delete item'ıyla aynı gerekçe), ikisi de metinli/ikon-only DEĞİL (kullanıcı isteğiyle 2026-08-24 devam'da tek ikon-only kalem butonundan değiştirildi); edit = Save (`bt-btn--primary-solid`) + Cancel (`bt-btn--secondary-flat`) `.bt-grid__control-group`'u. Görünürlük `.bt-grid__row--editing .bt-grid__row-edit-view`/`.bt-grid__row-edit-edit` ile (bu eylem çiftleri bir "content kind" değil, bu sayfaya özel oldukları için ayrı tutuldu). Actions kolon genişliği metinli butonlara sığacak şekilde 220px.

**Kolon içeriği** — Checkbox/ID (salt-okunur) + Name/Role/Email (`editKind:'textbox'`) + Status (`editKind:'dropdown'`). Actions kolonu bilinçli olarak SABİT kaldı (Edit/Save/Cancel, content-kind swap'ı yok — bir "content kind" değil, sayfaya özel eylem çifti).

> **Güncelleme (2026-08-24, devam 5):** İlk tasarımda Name/Role/Email/Status'un VIEW içeriği de sabitti (Properties panelinde sadece `Rows`/`Row State` vardı) — kullanıcı "tüm örneklerde tüm kolonların properties'i olmalı" isteğiyle bu iki sayfaya da diğer TÜM Data Table sayfalarıyla BİREBİR aynı `idContent`/`nameContent`/`roleContent`/`statusContent`/`emailContent` (`GRID_TABLE_CONTENT_OPTS`, Columns grubu) eklendi. Kritik ayrım: bu VIEW içeriği `editable`/`editKind`'tan TAMAMEN BAĞIMSIZ — `gridCellHtml`'in `leading`/`trailing` param'ları zaten `editable`/`editKind`'tan ayrı çalıştığı için iki sistemi birleştirmeye gerek kalmadı. Hangi content-kind seçilirse seçilsin (Avatar/Badge/Dot/vb.) Name/Role/Email hep textbox'a, Status hep dropdown'a döner — düzenlenen ŞEY satırın gerçek değeri, o değerin view'da NASIL göründüğü değil. Varsayılanlar mevcut görünümü koruyacak şekilde seçildi (`idContent`/`nameContent`/`roleContent`/`emailContent`: `'none'`, `statusContent`: `'badge'`).

**Kolon genişlikleri, docs sitesinde yatay scroll TETİKLEMEYECEK şekilde ayarlandı (2026-08-24 devam 2):** Kullanıcı, `.content`'in maksimum genişliğinde (1100px) bile Inline Editing (Actions dahil 220px genişliğinde) ve Data Table Actions'ın kolon toplamının playground container'ını (~904px) aşıp yatay scroll'a girdiğini bildirdi — bunun SADECE docs playground alanı için geçerli olduğunu, gerçek bir sayfa layout'una eklendiğinde (Email'in `fillWidth:true`'su sayesinde) daha geniş bir container'ı doldurmaya devam etmesi gerektiğini belirtti. `gridInlineEditColumns()`/`gridActionsColumns(p)`'daki SABİT (fillWidth OLMAYAN) kolon genişlikleri diğer Data Table sayfalarıyla aynı toplam-genişlik hedefine (~900px) düşürüldü — Email'in `fillWidth`/`.bt-grid-container`/`.bt-grid-actions-container`'ın `width:100%` davranışı HİÇ değiştirilmedi.

Headless Chrome + gerçek DevTools Protokolü ile uçtan uca doğrulandı: Inline Editing'de Edit tıklaması → satır `--editing` alıyor → Name input'u değiştirilip Save'e basılınca view metni güncelleniyor VE satır kapanıyor; InCell Editing'de bir hücreye dblclick → SADECE o hücre `--editing` (input focus+select), Escape orijinal değere dönüp kapatıyor, başka bir hücrede Enter ile commit ediliyor, Status hücresinde dblclick dropdown'ı açıyor (`bt-tbx--active`), bir seçenek tıklanınca hem dropdown metni hem badge etiketi güncellenip hücre kapanıyor — konsol hatası YOK. Node `vm` harness ile 133 sayfa/tab (127 + 2 yeni sayfa × 4 tab) hatasız. `docs/css/styles.css`, `docs/js/pages-web.js`, `design.md` güncellendi.

### 17.6 Table-level Sort & Filter — gerçek sıralama, tüm sayfalarda tutarlı (2026-08-24'te eklendi)

Kullanıcı üç ayrı sorun bildirdi: (1) Data Table sayfalarının Properties panelleri birbirinden farklı özellik setlerine sahipti (Frozen First/Last ve Data Table Actions'ta Sort/Filter hiç yoktu, Inline/InCell Editing'de de yoktu). (2) Sort/Filter aslında "Columns" grubunda, TEK bir kolona bağlıydı (`Sort (Name)`, `Filter (Role)`) — mantıken bir "Table" davranışı olduğu için `Table` grubuna taşınmalı ve TÜM kolon header'larına uygulanmalıydı. (3) Filter ikonu statik kalabilir (gerçek filter overlay'i ayrı bir oturumda eklenecek) ama Sort ikonları sadece header hover'dayken görünmeli VE header'a tıklayınca GERÇEKTEN sıralama yapmalı.

**Kapsam:** `components/data-table`, `-toolbar`, `-actions`, `-frozen-column`, `-frozen-column-last`, `-inline-editing`, `-incell-editing` — 7 sayfanın YEDİSİ de artık aynı `Table` grubunda `Rows`/`Row State`/`Sort`/`Filter` prop'larına sahip (Frozen sayfalarında ayrıca `Frozen Columns`, Toolbar'da ayrıca `Toolbar` grubu). `Sort`/`Filter` `'on'` olduğunda `field`'ı olan HER kolona (Checkbox ve Actions HARİÇ — bunların sıralanacak/filtrelenecek bir verisi yok) uygulanıyor; her `gridXColumns(p)` fonksiyonu artık `const showSort = p.showSort==='on'; const showFilter = p.showFilter==='on';` okuyup HER veri kolonuna `sort: showSort, filter: showFilter` geçiyor (eskiden sadece Name `sort`, Role `filter` alıyordu).

**`gridHeaderCellHtml(opts)` genişletmesi:** `showSort`/`showFilter` opts'ları hâlâ var (davranış değişmedi — undefined kalan çağrılarda hiç fark yaratmaz) ama artık:
- `showSort:true` olan hücre `bt-grid__header-cell--sortable` class'ı VE `onclick="btGridSortBy(event,this)"` alıyor — TÜM header hücresi tıklanabilir (yaygın data-grid deseni, sadece küçük bir ikon değil).
- Sort ikon çifti (`_gridIconSortUp`/`_gridIconSortDown`) artık ayrı class'lara sahip (`bt-grid__control--sort-up`/`-down`) — aktif sıralanan kolon SADECE kendi yönünü gösterebilsin diye (bkz. CSS).
- Filter ikonuna `onclick="event.stopPropagation()"` eklendi — sort'un tüm header'ı kapsayan click'ini tetiklemesin diye (filter şimdilik dekoratif/statik).

**CSS — hover-only sort, aktif sıralama göstergesi (`docs/css/styles.css`, `.bt-grid__sort` bloğu):**
```css
.bt-grid__header-cell--sortable { cursor: pointer; }
.bt-grid__header-cell--sortable .bt-grid__sort { opacity: 0; transition: opacity .12s ease; }
.bt-grid__header-cell--sortable:hover .bt-grid__sort,
.bt-grid__header-cell--sorted .bt-grid__sort { opacity: 1; }
.bt-grid__header-cell--sorted .bt-grid__control-icon { color: var(--bt-icon-brand-default, #0d4e97); }
.bt-grid__header-cell--sorted[data-sort-dir="asc"]  .bt-grid__control--sort-down { display: none; }
.bt-grid__header-cell--sorted[data-sort-dir="desc"] .bt-grid__control--sort-up   { display: none; }
```
Filter ikonu bu hover mekanizmasına dahil DEĞİL — her zaman görünür (statik/dekoratif), gerçek filter overlay'i gelene kadar.

**`window.btGridSortBy(event, headerEl)` — gerçek DOM sıralaması, 3 tıklık döngü (2026-08-24 devam 6'da eklendi):** Tıklanan kolonun index'ini (`nth-child`) bulur, `data-sort-dir`'i 3 durumlu bir döngüde ilerletir: `null → 'asc' → 'desc' → null` (üçüncü tık = reset, dördüncü tık döngüyü baştan başlatır) — önceden sadece asc↔desc arasında 2 durumlu toggle yapıyordu, reset YOKTU (kullanıcı isteğiyle eklendi). Önceki aktif sıralama kolonunun class/attribute'unu temizler (aynı anda TEK aktif kolon). `.bt-grid__body`'nin `.bt-grid__row` çocuklarını gerçek DOM node'ları olarak `Array.sort()` ile sıralayıp `appendChild` ile yeniden ekler — bu bir yeniden-render DEĞİL, satırların KENDİSİ taşınıyor, bu yüzden satıra bağlı hiçbir state (checkbox seçili, Inline Editing'in `--editing` class'ı) kaybolmuz. Karşılaştırma değeri `gridCellHtml`'in `sortValue` opt'undan gelen `data-sort-value` attribute'undan okunuyor (contentText'ten BAĞIMSIZ — TRAILING content kind'lar örn. Badge metni gizleyebiliyor ama `data-sort-value` her zaman `row[field]`'a eşit kalıyor). Değer tamamen sayısal görünüyorsa (`parseFloat` round-trip eşleşirse) sayısal, değilse `localeCompare(v,'tr')` ile string karşılaştırma yapılıyor. **Reset (3. tık):** satırlar her render'da (TÜM `gridXTableHtml` fonksiyonlarında `.bt-grid__row`'a eklenen) `data-row-index="${idx}"` attribute'una göre yeniden sıralanıp orijinal render sırasına dönüyor — sıralama gerçek DOM node'larını taşıdığı için ayrı bir "orijinal veri" kopyası tutmaya gerek kalmadı, bu attribute tek referans kaynağı.

**Resize ↔ Sort çakışma koruması:** `window.btGridResizeStart`'a bir `moved` bayrağı eklendi — sürükleme sırasında fare 2px'ten fazla hareket ettiyse mouseup'ta `headerCell.dataset.justResized='1'` set edilip bir sonraki tick'te (`setTimeout(...,0)`) siliniyor. Bir resize sürüklemesinden sonra tarayıcının senkron olarak ateşlediği `click` event'i `btGridSortBy`'a ulaştığında bu bayrağı görüp HİÇBİR ŞEY YAPMADAN çıkıyor — aksi halde her kolon genişliği değiştirmede yanlışlıkla o kolona göre sıralama da tetiklenirdi.

Headless Chrome + gerçek DevTools Protokolü ile 7 sayfanın TAMAMINDA doğrulandı: `_pgdConfigs[id].props`'ta `showSort`/`showFilter`'ın `group:'Table'` altında olduğu, `Sort`/`Filter` açılınca `field`'ı olan TÜM kolonların `bt-grid__header-cell--sortable` aldığı (Frozen sayfalarında Department/Location/Last Login dahil 8 kolon), sort ikonunun rest state'te `opacity:0` olduğu (computed style ile ölçüldü), header'a tıklayınca satırların GERÇEKTEN yeniden sıralandığı (ID kolonunda asc/desc, Name kolonunda alfabetik "Ayşe→Emre→Mert" — 3 örnek satırın gerçek isimleriyle), filter ikonuna tıklamanın sort'u TETİKLEMEDİĞİ, resize sürükleyip bırakmanın ardından gelen click'in sort'u YANLIŞLIKLA tetiklemediği (guard doğrulandı) — konsol hatası YOK. Ekran görüntüsüyle de doğrulandı: rest state'te sadece filter ikonları görünür, hover'da Name kolonunun sort ok çifti belirir, tıklandıktan sonra satırlar sıralanır ve SADECE yukarı ok (asc) marka mavisiyle kalıcı görünür kalır. Node harness ile 133 sayfa/tab hatasız. `docs/css/styles.css`, `docs/js/pages-web.js`, `design.md` güncellendi.

**Kapsam dışı (bilinçli, kullanıcı onayladı):** Gerçek bir filter overlay/panel'i (değer girişi, uygula/temizle) bu oturumda eklenmedi — filter ikonu şimdilik sadece "bu kolon filtrelenebilir" sinyalini statik olarak veriyor. Ayrıca kullanıcı, ayrı birer sayfa olarak **Sorting** ve **Filter Menu** örneklerinin gelecekte ekleneceğini belirtti.

**Data Table Sorting sayfası (2026-08-24 devam 7'de eklendi, `components/data-table-sorting`):** Sorting örneklerinden ilki — ana Data Table'ın `gridTableColumns`/`gridTableHtml`'ini BİREBİR reuse eder (ayrı bir kolon/render fonksiyonu YOK, sıralama zaten TÜM standart sayfalarda var olan genel bir özellik), tek farkı Overview playground'unun `showSort` prop'unun varsayılanının `'off'` yerine `'on'` olması.

Examples tab'ındaki statik "Unsorted/Ascending/Descending" illüstrasyonları için `gridTableHtml`'e opsiyonel `forceSortField`/`forceSortDir` param'ları eklendi — gerçek bir tıklama olmadan render zamanında satırları önceden sıralı göstermek için (Inline Editing'in `forceEditRowIndex`'iyle AYNI desen). Bunu desteklemek için:
- `gridHeaderCellHtml`'e opsiyonel `forceSorted` (bool) param'ı eklendi — `true` ise header, `window.btGridSortBy`'ın çalışma zamanında eklediği AYNI `.bt-grid__header-cell--sorted` class'ı + `data-sort-dir` attribute'unu doğrudan render'a gömer (CSS hiç değişmedi, aynı kurallar geçerli olur), `sortDir` param'ı ('up'/'down') sadece o yöndeki ikonu render eder.
- `gridTableHtml`, `p.forceSortField` set edildiyse `_gridTableRowsData` slice'ını (dizi seviyesinde, DOM'da değil) yeni `_gridCompareFieldValues(a,b)` helper'ıyla sıralar — bu helper `window.btGridSortBy`'daki AYNI karşılaştırma mantığını (sayısal round-trip veya `localeCompare(v,'tr')`) paylaşır, tek kaynak.

**Kritik ders:** İlk yazımda sayfa açıklama metninde ham backtick (`` `field` ``) kullanıldı — bu, "devam 27" notundaki (bkz. §17.4 öncesi tarih) hatayla AYNI tuzak: sayfa tamamen bir JS template literal'i olduğu için ham backtick'ler string'i erken kapatıp `ReferenceError` fırlatır. `node --check` ile anında yakalanıp `<code>` tag'ine çevrildi — bu tür prose metinlerde kod terimi göstermek için HER ZAMAN `<code>` tag'i kullanılmalı, asla ham backtick değil.

Headless Chrome + DevTools Protokolü ile doğrulandı: Overview'da Sort varsayılan `'on'` (5 kolon anında sortable, toggle'a gerek kalmadan), Examples'taki 3 statik tablo hiç JS etkileşimi olmadan doğru sırada + doğru header göstergesiyle render oluyor (Ascending'de sadece yukarı ok/mavi, Descending'de sadece aşağı ok/mavi, Unsorted'da hiç işaretlenmemiş) — konsol hatası yok. Ekran görüntüsüyle de teyit edildi. Node harness ile 137 sayfa/tab (133+4) hatasız. `docs/js/pages-web.js` güncellendi.

**Data Table Filtering sayfası (2026-08-24 devam 8'de eklendi, `components/data-table-filtering`, nav'da Sorting'in ÜSTÜNDE):** Sorting sayfasıyla BİREBİR aynı teknik desen — ana Data Table'ın `gridTableColumns`/`gridTableHtml`'ini reuse eder, ayrı bir kolon/render fonksiyonu yok. Tek farkı Overview playground'unun `showFilter` prop'unun varsayılanının `'on'` (Sort ise bu sayfada varsayılan `'off'`) olması.

**Bilinçli kapsam sınırı:** Filter ikonu şu an SADECE görsel/statik bir sinyal — hangi kolonların filtrelenebilir olduğunu gösteriyor ama tıklanınca gerçek bir filtre paneli/overlay'i açmıyor. Kullanıcı gerçek filtreleme mekanizmasının nasıl çalışması gerektiğini AYRI bir mesajda tarif edeceğini belirtti (bkz. HISTORY.md) — bu sayfa o davranış eklenene kadar sadece "aktif/statik ikon" durumunu dürüstçe belgeliyor, Usage tab'ında bu sınırlamayı netleştiren bir Don't maddesi var. Filter'ın Sort'tan CSS'te farkı: hover'a bağlı DEĞİL, `showFilter:'on'` olduğunda ikon her zaman görünür kalır (bkz. §17.6'nın "hover-only sort" notu — bu kural SADECE sort ikonlarına uygulanıyor, filter ikonuna hiç uygulanmadı).

Headless Chrome ile doğrulandı: nav'da Filtering, Sorting'in hemen üstünde; Overview'da Filter varsayılan `'on'` (6 filter ikonu anında görünür), Sort varsayılan `'off'` (0 sortable header) — konsol hatası yok, ekran görüntüsüyle teyit edildi. Node harness ile 141 sayfa/tab (137+4) hatasız. `docs/js/pages-web.js` güncellendi.

### 17.7 Table-level Filter — gerçek çalışan overlay (2026-08-24 devam 9'da eklendi)

Kullanıcı bir referans ekran görüntüsü paylaştı: filter ikonu flat bir buton gibi çalışmalı ve aktifken basılı/aktif state'te kalmalı; tıklanınca Ara input'u + Tümünü Seç + kolonun kendi verisinden türeyen checkbox listesi + Temizle/Uygula footer'lı bir overlay açılmalı. Bu, `gridHeaderCellHtml`'in filter ikonunu üreten TEK PAYLAŞILAN kod yolu olduğu için TÜM Data Table sayfalarında (Data Table, Toolbar, Actions, Frozen First/Last, Inline/InCell Editing, Filtering, Sorting) otomatik aktif oldu — ayrı bir implementasyon yok.

**Filter trigger:** Statik `<span>` yerine gerçek `bt-btn bt-btn--sm bt-btn--base-flat bt-btn--icon` butonu (`.bt-grid__filter-btn` class'ı eklendi). Aktifken (`data-filter-active="true"` header'da) Button component'inin ZATEN var olan `.bt-btn--state-selected` modifier'ı (`background: var(--bt-primary-subtle); box-shadow: inset 0 0 0 1px var(--bt-primary-default);`) reuse edilir — yeni bir "aktif filter" stili icat edilmedi (CLAUDE.md "Mevcut Component'leri Reuse Et" kuralı).

**Panel — Overflow Menu'süyle AYNI portal deseni:** `.bt-grid__filter-panel`, Actions kolonundaki "More" overflow menu'sünün (`btGridMenuToggle`, §17 üstü) kanıtlanmış `document.body`'ye portal + `position:fixed` (`getBoundingClientRect()`'ten hesaplanan `top`/`left`) desenini kullanır — bu, grid'in `overflow:auto` sarmalayıcılarının (`.bt-grid-container`/`.bt-grid-actions-container` vb.) paneli kırpmasını önler (bkz. HISTORY.md'deki "izole çalışıyor, gerçek sayfada kırılıyor" sınıfı geçmiş hatalar). FARKI: panel ephemeral — her açılışta `document.createElement` ile yeniden oluşturulur, kapanışta `.remove()` ile DOM'dan tamamen kaldırılır; overflow menu'nün "kendi `.bt-grid__menu`'süne geri taşınma" (home konumu) mekanizmasına ihtiyaç yok çünkü panel'in sabit bir DOM konumu hiç olmadı.

**Seçenek listesi — kolonun KENDİ verisinden türer, hardcoded DEĞİL:** Panel açılırken, o kolonun index'indeki (`nth-child`) TÜM body hücrelerinin `data-sort-value` attribute'u (zaten `gridCellHtml`'in `sortValue` opt'undan geliyor — Sort kapalı olsa bile `c.field` varsa her zaman set edilir) toplanıp `Set` ile benzersizleştirilip `localeCompare(v,'tr')` ile alfabetik sıralanır. Bu sayede aynı panel kodu Status (Active/Completed/Pending/Inactive), Role, Department, Location gibi HERHANGİ bir field'lı kolonda doğru çalışır.

**Markup (panel içi):**
```html
<div class="bt-grid__filter-panel">
  <div class="bt-grid__filter-search">
    <!-- Bespoke input DEĞİL — gerçek .bt-searchbox--sm component'i (bkz. devam 14 notu) -->
    <div class="bt-searchbox bt-searchbox--sm">
      <div class="bt-searchbox__control"><span class="bt-searchbox__icon">...</span></div>
      <div class="bt-searchbox__field"><input class="bt-searchbox__text" placeholder="Ara..." oninput="btGridFilterSearch(...)"></div>
    </div>
  </div>
  <div class="bt-grid__filter-list">
    <label class="bt-grid__filter-option bt-grid__filter-option--all" onclick="btGridFilterSelectAllToggle(...)">
      <span class="bt-checkbox__box ...">...</span> Tümünü Seç
    </label>
    <label class="bt-grid__filter-option" data-filter-value="Active" onclick="btGridFilterOptionToggle(...)">
      <span class="bt-checkbox__box ...">...</span> Active
    </label>
    <!-- ...kolonun diğer benzersiz değerleri... -->
  </div>
  <div class="bt-grid__filter-footer">
    <button class="bt-btn bt-btn--sm bt-btn--secondary-flat" onclick="btGridFilterClear(...)">Temizle</button>
    <button class="bt-btn bt-btn--sm bt-btn--primary-solid" onclick="btGridFilterApplyClick(...)">Uygula</button>
  </div>
</div>
```
Checkbox'lar gerçek `.bt-checkbox__box` (+ `_chkCheck` ikonu), footer butonları gerçek `.bt-btn--secondary-flat`/`.bt-btn--primary-solid`, search gerçek `.bt-searchbox--sm` (bkz. devam 14 notu, aşağı) — özel CSS sadece panel/liste/footer'ın kendi layout'u için yazıldı, hiçbir alt component'in görünümü baştan yazılmadı.

**Search:** `oninput` ile `.bt-grid__filter-option-text`'i case-insensitive substring match'e göre görünür/gizli yapar (Tümünü Seç satırı hariç). **Tümünü Seç:** tıklanınca SADECE o an arama sonucu görünür olan seçenekleri toggle'lar (yaygın multi-select filter deseni) — arama uygulanmışken "tümünü seç" tüm listeyi değil, filtrelenmiş alt kümeyi etkiler.

**Uygula / Temizle — state ve gerçek satır filtreleme:**
- `window.btGridFilterApplyClick`: panel'deki işaretli checkbox'ların değerlerini toplar. Hepsi işaretliyse (= filtre anlamsız, "tümü") `data-filter-active`/`data-filter-values`'ı header'dan kaldırır; aksi halde `data-filter-active="true"` + `data-filter-values` (JSON dizi) olarak header'a yazar. Sonra `window.btGridApplyFilters(grid)`'i çağırıp paneli kapatır.
- `window.btGridFilterClear`: o kolonun `data-filter-active`/`data-filter-values`'ını kaldırıp yeniden uygular, paneli kapatır.
- `window.btGridApplyFilters(grid)`: grid'deki TÜM `[data-filter-active="true"]` header'ları toplar, her biri için `{nth, values:Set}` çıkarır, `.bt-grid__body`'nin HER satırı için TÜM aktif filtrelerden geçip geçmediğini (AND mantığı — `filters.every(...)`) kontrol edip `row.style.display` ile gösterir/gizler. Birden fazla kolon aynı anda filtrelenebilir, birbirini bozmadan; her Apply/Clear TÜM aktif filtreleri yeniden değerlendirir (tek kolonun state'ini izole güncellemez).
- Panel her açıldığında `data-filter-values`'tan önceki seçim geri okunur — kullanıcı hangi değerleri seçtiğini kaybetmez.

**Sort ile etkileşim:** Filter ve Sort tamamen bağımsız — Sort DOM node'larını `appendChild` ile yeniden sıralar, Filter sadece `display:none` ile görünürlüğü değiştirir; ikisi aynı anda aktif olabilir (örn. Status=Active filtrelenip ID'ye göre azalan sıralanabilir), birbirini bozmaz. Filter ikonuna tıklama zaten `event.stopPropagation()` ile header'ın sort click'ini hiç tetiklemez (bu davranış §17.6'dan beri zaten vardı, değişmedi).

Headless Chrome + DevTools Protokolü ile kapsamlıca doğrulandı: Status kolonu için panel açılışında 4 doğru değer + Tümünü Seç başta işaretli; Pending'i kaldırıp Uygula → panel kapanır, buton `.bt-btn--state-selected` alır, 6 satırdan TAM 1'i (Pending) gizlenir; paneli tekrar açınca Pending hâlâ işaretsiz (state korunmuş); arama "active" → sadece Active/Inactive listelenir; Temizle → tüm satırlar geri gelir, buton pasife döner; dışarı tıklayınca panel kapanır; filter tıklaması sort'u tetiklemez. Filter+Sort birlikte (Status=Active + ID desc) doğru çalışır (6→2 satır, ikisi de Active, azalan ID sırasında). Data Table Actions'ın farklı container/scroll yapısında da panel doğru konumlanıp viewport içinde kalır. Ekran görüntüsü kullanıcının referans görseline neredeyse birebir uyuyor. Konsol hatası YOK. Node harness ile 141 sayfa/tab hatasız. `docs/css/styles.css`, `docs/js/pages-web.js` güncellendi.

**Not (2026-08-24 devam 10):** `.bt-grid__filter-panel`'e `border: 1px solid var(--bt-border-primary-default, #d4d4d4)` eklendi — panel önceden sadece `--bt-shadow-lg` gölgesiyle ayrışıyordu, kenar çizgisi yoktu (kullanıcı isteğiyle).

**Not (2026-08-24 devam 11):** `.bt-grid__filter-footer`'a da AYNI token'la (`--bt-border-primary-default`) `border-top` eklendi (kullanıcı isteğiyle) — Temizle/Uygula butonlarını listeden ayırıyor, Tümünü Seç satırının altındaki ayırıcıyla (`.bt-grid__filter-option--all`'ın `border-bottom`'u) görsel olarak tutarlı.

**Not (2026-08-24 devam 12):** Filter ikonu 16×16'dan 12×12'ye küçültüldü (kullanıcı isteğiyle). `.bt-grid__control-icon` TÜM grid ikonları arasında (Sort/Right Control dahil) paylaşılan generic bir class olduğu için doğrudan değiştirilmedi — `.bt-grid__filter-btn .bt-grid__control-icon` + `.bt-grid__filter-btn .bt-grid__control-icon svg` scoped kuralı eklendi (SADECE filter butonunu hedefler; SVG'nin kendi `width`/`height` HTML attribute'u CSS ile ezilmesi gerektiği için `svg` elementi ayrıca hedeflendi, sadece wrapper span'ı küçültmek yetersiz kalırdı). Buton kendi içeriğine göre boyutlandığı için (`bt-btn--icon` padding + content) footprint de otomatik 28×28'den 24×24'e küçüldü — istenmemişti ama doğal/beklenen bir yan etki. Headless Chrome ile ölçülerek doğrulandı: filter ikonu tam 12×12, aynı sayfadaki Sort ikonu hâlâ 16×16 (regresyon yok).

**Not (2026-08-24 devam 13):** Kullanıcı düzeltti — buton `sm` (28×28) olarak KALMALIYDI, sadece ikon 12×12 istenmişti; `bt-btn--icon`'un padding-tabanlı hug-content davranışı butonu da istenmeden 24×24'e küçültmüştü. `.bt-grid__filter-btn`'e sabit `width:28px;height:28px;box-sizing:border-box` eklenerek buton içeriğinden bağımsız hale getirildi, ikon boyutu bu turda 14×14'e güncellendi. Ölçülerek doğrulandı: buton 28×28, ikon (wrapper + gerçek SVG) 14×14, Sort ikonu hâlâ 16×16.

**Not (2026-08-24 devam 14):** Kullanıcı Ara input'unun gerçek SearchBox'tan gelip gelmediğini sordu — GELMİYORDU, bespoke bir `<input class="bt-grid__filter-search-input">` + kendi CSS'i olarak yazılmıştı (CLAUDE.md "Mevcut Component'leri Reuse Et" ihlali). Gerçek `.bt-searchbox--sm` component yapısına (`.bt-searchbox > .bt-searchbox__control(ikon) + .bt-searchbox__field > input.bt-searchbox__text`) çevrildi, `btGridFilterSearch` gerçek SearchBox'ın `sbxInput()` ile AYNI `bt-searchbox--filled` toggle'ını da uyguluyor. Bespoke input CSS'i tamamen kaldırıldı (`.bt-searchbox`'ın kendi `width:100%`'ü yeterli). Doğrulandı: gerçek `.bt-searchbox__icon`/`.bt-searchbox__text` class'ları render oluyor, arama hâlâ doğru çalışıyor, konsol hatası yok.

**Not (2026-08-24 devam 15):** Üç düzeltme daha: (1) SearchBox `sm`→`md`. (2) `.bt-grid__filter-option` (Tümünü Seç dahil) sabit `height:32px` aldı — `--all`'ın çakışan `padding-bottom`'u kaldırılıp border-bottom/margin-bottom ile ayırıcı korundu. (3) **Bug:** panel içindeki `.bt-grid__filter-list`'te (uzun listelerde `overflow-y:auto`) scroll etmeye çalışmak paneli KAPATIYORDU — `document`'a capture:true ile eklenen global scroll listener'ı (dışarıdaki sayfa/tablo scroll'unda paneli kapatmak için, bkz. yukarısı) panel'in kendi iç scroll'unu da yakalıyordu. Düzeltme: listener artık `e.target.closest('.bt-grid__filter-panel')` kontrolüyle panel içi scroll'ları hariç tutuyor, sayfa/tablo scroll'unda hâlâ kapatıyor. Ölçülerek + davranışsal olarak doğrulandı: SearchBox 32px (md), seçenek satırları tam 32px, panel içi scroll paneli kapatmıyor, sayfa scroll'u hâlâ kapatıyor.

**Not (2026-08-24 devam 16):** Kullanıcı düzeltti — "devam 15"teki fix asıl sorunu çözmemişti. Gerçek sorun: liste GERÇEKTEN scroll edilebilir olmalıyken tüm seçenekler panel yüksekliğine (220px) sıkışıyordu. Klasik flexbox hatası: `.bt-grid__filter-list` (`flex-direction:column;max-height:220px;overflow-y:auto`) içindeki `.bt-grid__filter-option` satırlarına `flex-shrink:0` yoktu — varsayılan `flex-shrink:1` yüzünden seçenek sayısı arttıkça satırlar kendi `height:32px`'lerinden küçülüp hepsi 220px'e sığacak şekilde daralıyordu, scroll hiç tetiklenmiyordu. `.bt-grid__filter-option`'a `flex-shrink:0` eklendi. Doğrulandı: Email kolonunda (10 benzersiz değer) düzeltmeden önce `scrollHeight===clientHeight===220` (scroll yok), sonra her satır 32px kalıp `scrollHeight`(354)`>clientHeight`(220), gerçek scroll çalışıyor — ekran görüntüsüyle native scrollbar'ın göründüğü de teyit edildi.

**Not (2026-08-24 devam 17):** Kullanıcı, panel'in genel `padding`'inin (önceden `.bt-grid__filter-panel`'de) yanlış yerde olduğunu belirtti — Tümünü Seç ayırıcısı ve footer'ın üst ayırıcısı gibi border'lar panel'in KENDİ kenarına yaslanmalı (flush), padding panel'e değil içerideki bölüm div'lerine (search/list/footer) verilmeliydi. `.bt-grid__filter-panel`'in kendi padding/gap'i tamamen kaldırıldı; `.bt-grid__filter-search`'e `padding: sm sm 2xs`, `.bt-grid__filter-list`'e `padding-bottom: 2xs`, `.bt-grid__filter-footer`'a tam `padding: sm` eklendi (`.bt-grid__filter-option`'ın zaten var olan `padding:0 sm` yatay inseti değişmedi). Sonuç: `.bt-grid__filter-option--all`'ın ve footer'ın border'ları artık panel genişliğinin TAMAMINI kaplıyor (panel'in kendi 1px border'ına kadar), içerik hâlâ 6px inset'te. Ölçülerek doğrulandı: Tümünü Seç satırı ve footer'ın sol/sağ kenarları panel'in border-box kenarından TAM 1px (panel'in kendi border kalınlığı) içeride — yani flush.

**Not (2026-08-24 devam 18):** İki küçük ayar: (1) "devam 17"de eklenen `--bt-space-2xs` (2px) kullanımları (search'ün alt padding'i, list'in alt padding'i, Tümünü Seç'in margin-bottom'u — 3 yer) `--bt-space-xs`'e (4px) çıkarıldı, az bulunmuştu. (2) Panel gölgesi `--bt-shadow-lg`'den `--bt-shadow-xl`'e çevrildi (daha belirgin). Doğrulandı: computed padding/margin 4px, box-shadow `--bt-shadow-xl`'in değeriyle (`0 8px 8px .../0 20px 24px ...`) eşleşiyor.

**Not (2026-08-24 devam 19):** Aynı 3 yerdeki `--bt-space-xs` (4px) `--bt-space-lg`'ye (10px) çıkarıldı — kullanıcı ayrıca `.bt-grid__filter-list`'in kendi padding'inin de `lg` olmasını istedi, bu zaten list'in padding-bottom'u olan aynı değişiklikle karşılandı. "devam 17"deki border-flush gereksinimini bozmamak için list'e YATAY padding eklenmedi (sadece dikey) — yatay inset hâlâ `.bt-grid__filter-option`'ın kendi `padding:0 sm`'inden geliyor. Doğrulandı: üç değer de 10px, Tümünü Seç satırının kenarları panel border'ından hâlâ tam 1px içeride (flush korunmuş).

**Not (2026-08-24 devam 20):** Kullanıcı fikrini değiştirdi — `.bt-grid__filter-option`'ın kendi yatay padding'i (sm, 6px) tamamen kaldırıldı, bunun yerine `.bt-grid__filter-list`'e 4 yönden `padding: var(--bt-space-lg, 10px)` verildi. Bu, BİLİNÇLİ olarak "devam 17"deki border-flush davranışının yerini alıyor — Tümünü Seç ayırıcısı artık panel kenarına değil, list'in 10px inset'ine yaslanıyor. Flex column'daki satırlar varsayılan `align-self:stretch` ile list'in (artık padding'li) content-box genişliğine yayılmaya devam ettiği için hover arka planı hâlâ tutarlı bir satır genişliğinde. Doğrulandı: list 4 yönde de 10px padding alıyor, option'ın kendi padding'i 0, filtreleme fonksiyonelliği (Pending kaldır → Uygula → 1 satır gizlenir) hâlâ çalışıyor.

**Not (2026-08-24 devam 21):** Kullanıcı `.bt-grid__filter-option`'a tekrar yatay padding istedi — bu kez `var(--bt-space-2xs, 2px)` (list'in 10px'iyle birlikte, toplam ~12px inset). Doğrulandı: computed `padding-left`/`padding-right` tam 2px.

**Not (2026-08-24 devam 22):** 2px pratikte "yok gibi" göründüğü için `--bt-space-xs`'e (4px) çıkarıldı. Dikkat: `padding: 0 var(--bt-space-2xs, 2px)` deseni dosyada `.bt-card__control-item`'da da (alakasız, Card'a ait) var — sadece `.bt-grid__filter-option`'daki değiştirildi. Doğrulandı: computed padding-left/right 4px.

**Not (2026-08-24 devam 23-24):** `.bt-grid__filter-list`'in yönlere göre padding'i ayrıştırıldı: top=`0` (none), right=`var(--bt-space-xs, 4px)`, bottom=`var(--bt-space-lg, 10px)`, left=`var(--bt-space-lg, 10px)` — `padding: 0 var(--bt-space-xs, 4px) var(--bt-space-lg, 10px) var(--bt-space-lg, 10px)` (4 değerli shorthand). Kullanıcı önce sağı da `none` istedi, ardından `4px`'e düzeltti — bu son hâl. Doğrulandı: computed `paddingTop=0px`, `paddingRight=4px`, `paddingBottom=10px`, `paddingLeft=10px`.

## 18. Segmented Control

Figma kaynağı: `Segmented Control` component set (Size × Content × Segments, 45 varyant) + alt `Segment` component set (Size × Content × State, 54 varyant). İki seviyeli yapı: **container (track)** + tekrarlanan **segment** düğmeleri. Birbirini dışlayan görünüm/mod seçimleri için — sekme navigasyonu değil.

**Not — ters "thumb" mantığı:** Track ve seçilmemiş segmentler **aynı zemini** kullanır (base/subtle gri). Yani resting segmentler track'e karışır; ayrımı yalnız seçili segmentin brand'li zemini + border'ı yapar. iOS'un "gri track üzerinde beyaz kayan thumb" modelinin tersi.

**Not — Hover = Default:** Figma'da Segment'in Hover state'i Default ile birebir aynıdır (ayrı bir hover stili tanımlı değil). Implementasyonda da hover'da zemin DEĞİŞMEZ, yalnız `cursor: pointer` verilir. Active ve Selected state'leri de birbirinin aynısıdır.

**Not — seçili segment büyümesi:** Figma'da seçili (Active/Selected) segment, dışa hizalı 1px stroke yüzünden resting'e göre ~1px büyür (örn. Sm'de 28→30px yükseklik). Implementasyonda bu **bilinçli olarak yok sayılır**: her segment sürekli `1px solid transparent` border taşır, seçilince yalnızca `border-color` değişir → seçim değiştiğinde layout shift olmaz.

**Not — varsayılan boyut = Md (Figma sapması, kullanıcı kararı):** Figma'da `Size` varyantının varsayılanı `sm`'dir; bu projede docs + implementasyon için **Md varsayılan** kabul edilir. Md = modifiersiz `.bt-seg-ctrl` (segment 32px); Sm için `.bt-seg-ctrl--sm` (28px), Lg için `.bt-seg-ctrl--lg` (36px). Icon & Label ikon↔label boşluğu varsayılanda (Md/Lg) 4px, `.bt-seg-ctrl--sm`'de 0. Playground'ların `size` prop varsayılanı `md`, demo etiketleri `Label 1 / Label 2 / …`.

### 18.1 Markup

Taşıyıcı hiyerarşisi Figma'nın **Segment › Base Segment › Left Control / Label / Right Control** yapısıyla birebir:

```html
<div class="bt-seg-ctrl">                              <!-- + bt-seg-ctrl--sm | bt-seg-ctrl--lg (Md = varsayılan, modifiersiz) -->
  <button class="bt-segment bt-segment--icon-label bt-segment--selected"
          onclick="btSegSelect(this)">                <!-- = Figma "Segment": STATE + content padding -->
    <span class="bt-segment__base">                   <!-- = Figma "Base Segment": iç flex satırı, ikon↔label gap -->
      <span class="bt-segment__left">                  <!-- = "Left Control" 28×28 (Content = Icon / Icon & Label) -->
        <span class="bt-segment__icon">                <!-- = "Icon Control" 24×24 -->
          <svg width="18" height="18" …>…</svg>        <!-- 18×18, slotu doldurmaz -->
        </span>
      </span>
      <span class="bt-segment__label-wrap">            <!-- = "Label" frame (Content = Label / Icon & Label) -->
        <span class="bt-segment__label">Label 1</span> <!-- = "Segment Label" text -->
      </span>
      <!-- Right Control (.bt-segment__right) — "Counter Control" 28×28: sayaç rozeti
           slotu. Figma'da Show Right Control = false → ŞU AN RENDER EDİLMİYOR. -->
    </span>
  </button>
  <!-- ... -->
</div>
```

**Figma layer → class:**

| Figma layer | Class | Boyut / Rol |
|---|---|---|
| Segment | `.bt-segment` | STATE (fill/border/radius) + Content'e göre yatay padding · radius-sm |
| Base Segment | `.bt-segment__base` | iç flex satırı · ikon↔label gap (Md/Lg 4px · Sm 0) |
| Left Control | `.bt-segment__left` | 28×28 sabit · ikon taşıyıcı |
| Icon Control | `.bt-segment__icon` | 24×24 · ikonu ortalar (doldurmaz) |
| (ikon) | inline `<svg>` | 18×18 · `currentColor` |
| Label | `.bt-segment__label-wrap` › `.bt-segment__label` | hug genişlik |
| Right Control | `.bt-segment__right` | 28×28 · counter slotu · **implemente edilmedi** (Show Right Control = false) |

**Content tipine göre görünürlük + modifier** (Figma `Show Left Control` / `Show Label` boolean'larının karşılığı):

| Content | Modifier class | Görünen bölümler |
|---|---|---|
| Label | — | Label |
| Icon | `.bt-segment--icon` | Left Control (kare segment) |
| Icon & Label | `.bt-segment--icon-label` | Left Control + Label |

**İkon = inline SVG (data-lucide DEĞİL):** Figma'da Icon Control placeholder olarak `Icon/loader` taşır. Kodda ikon `<span class="bt-segment__left"><span class="bt-segment__icon"><svg width="18" height="18" …>…</svg></span></span>` olarak gömülür — bu proje Lucide runtime'ı yüklemediği için `<i data-lucide="…">` deseni ikonu **boş render eder** (bkz. §15). CSS `.bt-segment__icon i, .bt-segment__icon svg` ikisini de hedefler; renk `currentColor` üzerinden state'ten gelir. Consuming projede SVG gerçek ikonla değiştirilir. Docs demolarında `_segIcons` = 6 elemanlık Lucide seti (loader / sparkles / sun / user-round / flame / map-pin); `segItemHtml({ iconIndex })` pozisyona göre seçer (`segCtrlHtml` `i`'yi geçer, taşarsa `% 6` ile başa döner) — böylece 2–6 segmentin her biri farklı ikon gösterir.

### 18.2 CSS Tokens

**Container (`.bt-seg-ctrl`)**

| Property | Token | Fallback |
|---|---|---|
| padding | space/spacing-2xs | 2px |
| background | color/base/subtle | #f5f5f5 |
| border | border/primary/default | 1px #d4d4d4 |
| border-radius | radius/radius-md | 6px |
| segmentler arası gap | — | 0 (divider yok) |

**Segment (`.bt-segment`)**

| Property | Token | Fallback / Not |
|---|---|---|
| height · Md (varsayılan) | — | 32px (modifiersiz `.bt-seg-ctrl`) |
| height · Sm / Lg | — | 28 / 36px (`.bt-seg-ctrl--sm` / `--lg`) · token karşılığı yok |
| border-radius | radius/radius-sm | 4px |
| border (resting) | — | 1px solid transparent |
| background (resting) | color/base/subtle | #f5f5f5 — track ile aynı |
| font (resting → seçili) | typography/text-xs-regular → -medium | 400 → 500, 12px/16px (tüm boyutlarda) |
| color (resting) | text/primary/default | #1a1a1a |
| color (disabled) | text/primary/muted | #a3a3a3 (zemin değişmez) |
| focus ring | border/primary/default @ %50 | `0 0 0 3px rgba(212,212,212,.5)` — nötr gri, brand değil |

**Segment yatay padding — Content tipine BAĞLI (anahtar detay):**

| Content | padding-left | padding-right | genişlik |
|---|---|---|---|
| Label | space/spacing-xl (12px) | space/spacing-xl (12px) | içeriğe göre |
| Icon | space/spacing-none (0) | space/spacing-none (0) | kare — genişlik = yükseklik (28/32/36) |
| Icon & Label | space/spacing-none (0) | space/spacing-xl (12px) | içeriğe göre — **asimetrik**, ikon sol kenara yaslı |

> Tüm `0` değerleri `--bt-space-none` token'ından gelir (Figma'da `Space/spacing-none`) — literal `0` yazılmaz. Dokümantasyon tablolarında `—`, o hücre için bir class/token **bulunmadığını** gösterir: varsayılan durum ek modifier istemez; segment yüksekliği (28/32/36px), Left Control (28×28), Icon Control (24×24), ikon (18×18) gibi ölçüler Figma'da bir design token'a karşılık gelmez (component-özel değerler).

**Base Segment (`.bt-segment__base`)** — iç flex satırı; **ikon↔label gap BURADA** (Figma "Base Segment" itemSpacing), boyuta bağlı:

| Size | gap |
|---|---|
| Sm | space/spacing-none (0) |
| Md / Lg (varsayılan dahil) | space/spacing-xs (4px) |

**Left Control / Icon Control / ikon** — Content = Icon veya Icon & Label'da render edilir:

| Element | Class | Boyut / Not |
|---|---|---|
| Left Control | `.bt-segment__left` | 28×28 sabit (boyutla ölçeklenmez) |
| Icon Control | `.bt-segment__icon` | 24×24 · ikonu ortalar, doldurmaz |
| ikon | inline `<svg>` | 18×18 · `icon/primary/strong` → `icon/brand/default` (sel) → `icon/primary/muted` (dis) |

**Seçili / Active (`.bt-segment--selected`)**

| Property | Token | Fallback |
|---|---|---|
| background | color/primary/subtle | #e2edfc |
| border-color | border/brand/default | #0d4e97 |
| color | text/brand/default | #0d4e97 |
| icon color | icon/brand/default | #0d4e97 |
| font-weight | typography/text-xs-medium | 500 |

**Boyutla değişen TEK şeyler:** Segment yüksekliği, Icon-only kare genişliği, Base Segment'in ikon↔label boşluğu (Sm 0 / Md-Lg 4px). Yatay padding, tipografi, Left Control (28×28), Icon Control (24×24), ikon (18×18) tüm boyutlarda sabit — Figma'da hiçbiri boyutla ölçeklenmez.

**Vertical (`.bt-seg-ctrl--vertical`)** — Figma'da yok, dar alanlar için design-language kararıyla eklenen dizilim varyantı. Segmentler dikey istiflenir, her biri tam genişlik:

| Element | Property | Değer |
|---|---|---|
| `.bt-seg-ctrl--vertical` | flex-direction | column |
| `.bt-seg-ctrl--vertical` | align-items | stretch |
| `.bt-seg-ctrl--vertical .bt-segment` (+ `--icon` / `--icon-label`) | width | 100% |
| `.bt-seg-ctrl--vertical .bt-segment` | padding-left / -right | space/spacing-xl (12px) — **Content tipinden bağımsız simetrik**; yataydaki asimetrik/0 padding kuralı dikeyde geçmez |
| `.bt-seg-ctrl--vertical .bt-segment__base` | justify-content | **flex-start** — içerik sola hizalı; Label / Icon Only / With Icon satırlarında ikon ve metin AYNI x'ten başlar (yataydaki merkezleme dikeyde satırlar arası kaymaya = "farklı padding" hissine yol açardı) |

Segment yüksekliği (28/32/36), radius, tüm state/renk token'ları, "divider yok — ayrımı seçili segmentin brand border'ı yapar" yaklaşımı ve iç yapı (`.bt-segment__base` › Left Control / Label) yatayla **birebir aynı**. Toplam yükseklik = segment sayısı × yükseklik + 2× container dolgusu.

**Motion** — segmentler arası geçiş yumuşak: `.bt-segment { transition: background-color .18s ease, border-color .18s ease, color .18s ease, box-shadow .18s ease; }` + `.bt-segment__icon svg { transition: color .18s ease; }`. Seçim değişince zemin/kenar/metin/ikon rengi ease'lenir; font-weight (400→500) animate edilemez, anında değişir. Layout shift yoktur (her segment sürekli 1px şeffaf border taşır).

**Separator (`.bt-seg-ctrl--separated`)** — Figma'da yok, kullanıcı isteğiyle eklendi ve **docs playground'unda varsayılan açık**. Bitişik segmentler arasına ince dikey çizgi:

| Property | Değer |
|---|---|
| Selector | `.bt-seg-ctrl--separated .bt-segment + .bt-segment::before` (2. segment'e biner) |
| `.bt-segment` | `position: relative` gerekir (pseudo anchor) |
| content / position | `""` / `absolute`, `left: -1px` (seam'e ortalı), `width: 1px` |
| renk | `var(--bt-border-primary-emphasis, #a3a3a3)` — **#a3a3a3** |
| kalınlık | 1px |
| dikey inset (yatay dizilim) | `top`/`bottom: var(--bt-space-sm, 6px)` — çizgi segment yüksekliğini TAM kaplamaz |
| efektif yükseklik | segment H − 2px border − 12px boşluk → **Sm 14px · Md 18px · Lg 22px** |
| seçili segment komşuluğu | `.bt-segment--selected + .bt-segment::before` ve `.bt-segment--selected::before` → `opacity: 0` (aktif pill kenarıyla çakışmasın) |
| Vertical | çizgi yatay: `left`/`right: var(--bt-space-sm)`, `top: -1px`, `height: 1px` |

### 18.3 JS Davranışı

Tek fonksiyon: seçili class'ı taşımak.

```js
function btSegSelect(el) {
  const ctrl = el.closest('.bt-seg-ctrl');
  if (!ctrl) return;
  ctrl.querySelectorAll('.bt-segment').forEach(s => s.classList.remove('bt-segment--selected'));
  el.classList.add('bt-segment--selected');
}
```

Her segment `<button onclick="btSegSelect(this)">`. Consuming projede (Blazor) seçim genellikle bağlı bir `bool`/enum ile veya `TelerikButtonGroup` ile yönetilir; `bt-segment--selected` class binding'i yeterli.

**Disabled — segment bazında:** Tüm kontrolü değil, tek bir segmenti kapatmak için o segment `<button class="bt-segment" disabled>` olur (tıklama tarayıcıca engellenir, `btSegSelect` çağrılmaz). Görsel: segment/track zemini DEĞİŞMEZ, yalnız `.bt-segment:disabled` metni `text/primary/muted` (#a3a3a3), ikonu `icon/primary/muted` (#a3a3a3) yapar ve `cursor: not-allowed` verir; diğer segmentler etkilenmez. Blazor karşılığı `Enabled="false"` veya bağlı bir `bool`. Docs sayfasında hem Overview/Examples playground'larında hem ayrı "Disabled" bölümündeki playground'da bir `Disabled` property'si (None / 1st…6th) hangi segmentin kapatılacağını seçtirir.

### 18.4 Figma'da doğrulanan, ilk bakışta beklenmeyen detaylar

1. **Content tipi padding'i değiştirir** — Label 12/12, Icon 0/0 (kare), Icon & Label **0/12 asimetrik** (ikon sola yaslı). Tek bir sabit yatay padding yok.
2. **Icon ↔ Label boşluğu boyuta bağlı** — Sm'de 0, Md/Lg'de 4px.
3. **Hover ayrı state değil** — Default ile aynı.
4. **Active = Selected** — görsel olarak birebir aynı.
5. **Focus ring nötr gri** — seçili segment brand mavisi olsa bile ring `border/primary/default @ %50` (gri), brand rengi değil.
6. **Label tipografisi boyutla ölçeklenmez** — Lg'de bile 12px/16px.
7. **Left/Icon Control boyutla büyümez** — her boyutta Left Control 28×28 · Icon Control 24×24 · ikon 18×18 (yalnız Icon-only segmentin dış karesi 28/32/36 olur).
8. **Track ve resting segment aynı zemin** — seçilmemiş segmentler track'e karışır.
9. **Segments 2–6** desteklenir.
10. **Base Segment ayrı bir katman** — Segment (state + padding) ile içerik (Left Control / Label) arasında bir "Base Segment" flex satırı var; ikon↔label gap bu katmanda yaşar, Segment'te değil.
11. **Right Control (counter) Figma'da tanımlı ama pasif** — Base Segment'in 3. bölümü olan Right Control (28×28 sayaç rozeti: `radius-full` `surface/brand`, `text-2xs` beyaz sayı) var; ancak shipped Segmented Control'de `Show Right Control = false`, docs implementasyonunda henüz render edilmiyor (`.bt-segment__right` slotu ayrıldı).


## 19. Tab

Figma kaynağı: "Bentas DS" dosyası, "Tabs" sayfası — **Base Tab** (`1040:6309`, atomik yapı) + **Tab** (`1045:22304`, 216 varyant: Size × Fill Mode × Content × Type × State) + "Tabs …" assembly frame'leri.

Tab, aynı bağlamda birbirini dışlayan bölümler/görünümler arasında geçiş sağlar; Segmented Control'den farkı sayfa navigasyonu (route) için de kullanılabilmesidir. `components/tab` tek sayfa (Line/Bordered/Segmented Examples bölümleri, 4-tab standardı).

### 19.1 Yapı — Base Tab

`Base Tab` HORIZONTAL auto-layout, yatay padding `Space/spacing-xl` (12px), center/center:

- **Left Control** (28×28) → Icon Control (24×24) → ikon 18×18 — `Show Icon` / Content = Icon & Label ile
- **Label** (hug, iç pad 0 2px) → "Tab Label" — Geist 12px/400, line-height 16px
- **Right Control** (28×28):
  - **Counter** badge (min 14×14, `radius-full`, `surface/brand/default` zemin, `text/primary/inverted` sayı, 10px/12) — `Show Counter`
  - **Button** = gerçek `Base Button` (xs, icon-only, 24×24, X ikonu) — `Show Button` / Type = Closable

Boyutlar: Sm 28 / Md 32 / Lg 36 px. İkon↔label boşluğu Sm 0, Md/Lg `Space/spacing-xs` (4px). Yatay padding ve tipografi tüm boyutlarda sabit.

Docs implementasyonu — markup:
```html
<div class="bt-tab-list bt-tab-list--{line|bordered|segmented}[ bt-tab-list--vertical]" role="tablist">
  <button class="bt-tab bt-tab--{sm|md|lg}[ bt-tab--selected][ bt-tab--disabled]" onclick="btTabSelect(this)">
    <span class="bt-tab__icon"><!-- 18×18 svg --></span>   <!-- Content = Icon & Label -->
    <span class="bt-tab__label">Tab Label</span>
    <span class="bt-tab__counter">1</span>                 <!-- Show Counter -->
    <span class="bt-tab__close bt-btn bt-btn--xs bt-btn--base-flat bt-btn--icon" role="button">…</span>  <!-- Type = Closable -->
  </button>
  …
</div>
```
Not: close **`<span>`** (iç içe `<button>` geçersiz olurdu); `.bt-btn` class'ları span'e de tam stil verir.

### 19.2 Fill Mode'lar

| | Track (sarmalayıcı) | Seçili tab |
|---|---|---|
| **Line** (varsayılan) | yatay: `border-bottom` 1px `border/primary/default` — dikey: `border-right` | `border-bottom-color` (dikey: `border-right-color`) → `border/brand/default` (indicator) + metin `text/brand/default` |
| **Bordered** | aynı alt/yan çizgi | üst+yan 1px `border/primary/default` kutu + `border-bottom` **beyaz** (`base/default`) "kesik" + `background` beyaz → alttaki panele bağlanır; metin rengi **değişmez**; üst köşeler `radius-sm` |
| **Segmented** | pill: `base/subtle` zemin + 1px `border/primary/default` + `radius-md` (6px) + iç boşluk `spacing-2xs` (2px) | `primary/subtle` dolgu + 1px `border/brand/default` + metin `text/brand/default`; tab köşeleri `radius-sm` |

Her tab sürekli şeffaf 1px border taşır → seçim değişince layout shift yok (Segmented Control ile aynı desen). Line/Bordered tab'larda `margin-bottom:-1px` (dikeyde `-1px` sağ/sol) ile track çizgisine biner.

### 19.3 State'ler

Default / Hover / Selected / Focus / Disabled (Figma'da ayrıca Active = Selected ile aynı).

- **Hover** (yalnız Line): `border-bottom-color` → `border/primary/default`. Bordered/Segmented'de hover = Default.
- **Focus** (tüm fill modes): `box-shadow: 0 0 0 3px rgba(212,212,212,0.5)` — nötr gri ring, brand değil (proje standardı; bkz. Accordion/Segmented Control notu).
- **Disabled**: metin `text/primary/muted` (#a3a3a3), `cursor: not-allowed`, `pointer-events: none`. İkon rengi **değişmez** (`icon/primary/strong`, Figma böyle).
- İkon rengi hiçbir state'te değişmez: her zaman `icon/primary/strong` (#535353).
- Metin tipografisi state'ten bağımsız: Geist 400 12px/16px (`--bt-text-xs-regular`) — Selected'da da weight artmaz.

### 19.4 Yatay / Dikey

`.bt-tab-list--vertical` → `flex-direction: column`, tab içeriği sola hizalı (`justify-content: flex-start`). Line indicator alt-border yerine **sağ-border**. Bordered seçili tab (Figma `Tab Bordered Vertical` 1052:39818 — soldaki panele bağlanır): grey border **üst + sağ**, **sol kenar açık** (`border-left-color: transparent`), beyaz **alt-seam** (`border-bottom-color: base/default`), radius **sağ köşeler** (`0 4px 4px 0`). Segmented track dikey pill olur.

### 19.5 JS davranışı

```js
// seçim
window.btTabSelect = function (el) {
  const list = el.closest('.bt-tab-list');
  if (!list) return;
  list.querySelectorAll('.bt-tab').forEach(t => t.classList.remove('bt-tab--selected'));
  el.classList.add('bt-tab--selected');
};

// closable — × butonu tab'ı DOM'dan kaldırır; son tab kapatılamaz,
// seçili tab kapatılırsa komşusu (önce sonraki, yoksa önceki) seçili olur
window.btTabClose = function (el) {
  const tab  = el.closest('.bt-tab');
  const list = tab && tab.closest('.bt-tab-list');
  if (!tab || !list) return;
  const tabs = Array.from(list.querySelectorAll('.bt-tab'));
  if (tabs.length <= 1) return;
  const i = tabs.indexOf(tab);
  const wasSelected = tab.classList.contains('bt-tab--selected');
  const neighbour = tabs[i + 1] || tabs[i - 1];
  tab.remove();
  if (wasSelected && neighbour) neighbour.classList.add('bt-tab--selected');
};

// "Add Tab" — ilk tab'ı şablon alıp klonlar, Add Tab butonundan önce ekler
window.btTabAdd = function (el) {
  const list = el.closest('.bt-tab-list');
  const tmpl = list && list.querySelector('.bt-tab');
  if (!list || !tmpl) return;
  const clone = tmpl.cloneNode(true);
  clone.classList.remove('bt-tab--selected', 'bt-tab--disabled');
  const label = clone.querySelector('.bt-tab__label');
  if (label) label.textContent = 'Tab ' + (list.querySelectorAll('.bt-tab').length + 1);
  list.insertBefore(clone, el);
};
```
Close `<span>`: `onclick="event.stopPropagation();btTabClose(this)"` — tab seçimini tetiklemeden kapatır. **Add Tab** butonu (Figma `1055:40422`) `.bt-tab-list`'in son çocuğudur: `<button class="bt-tab-list__add bt-btn bt-btn--2xs bt-btn--base-flat" onclick="btTabAdd(this)">` (plus ikon + "Add Tab", 20px). `.bt-tab-list__add` yatayda `align-self: center` + `margin-left: --bt-space-xs`; dikeyde `align-self: stretch` + `justify-content: flex-start`. Blazor'da seçim bağlı bir index/enum veya `TelerikTabStrip` ile, kapatma/ekleme koleksiyon mutasyonuyla yönetilir.

### 19.6 Figma'da doğrulanan, ilk bakışta beklenmeyen detaylar

1. **Bordered'ın "kutu"su tab'ın kendisinde, "beyaz kesik" container'da** — Figma'da Base Tab instance'ı 3 kenar (`sw:[1,1,0,1]`) `border/primary/default` alır, Tab container'ı `border-bottom` (`sw:[0,0,1,0]`) `base/default` (beyaz) alır. Docs'ta ikisi de tek `.bt-tab--selected` kuralında birleştirildi.
2. **Bordered'da metin rengi değişmez** — Line ve Segmented seçili tab'da metin brand mavisine döner, Bordered'da `text/primary/default` kalır.
3. **Segmented hover = Default** — hover'da track zemininin aynısı (`base/subtle`), görsel fark yok.
4. **Disabled'da ikon muted OLMAZ** — yalnız metin `text/primary/muted`'a düşer, ikon `icon/primary/strong` kalır.
5. **Dikeyde indicator/kesik kenarı döner** — Line: alt-border → sağ-border. Bordered: yatayda üst-köşe radius + alt-kesik; dikeyde **sağ-köşe radius + sol kenar açık + alt-seam** (panel solda).
6. **Close butonu bespoke değil** — gerçek `bt-btn bt-btn--xs bt-btn--base-flat bt-btn--icon` (24×24). İç içe `<button>` sorunundan kaçınmak için `<span role="button">` olarak render edilir.
7. **Counter Base Tab'da default açık** ama Tab component'inde ayrı bir varyant değil — `Show Counter` boolean'ı; docs playground'da `Counter` (On/Off) toggle'ıyla kontrol edilir.


## 20. Kbd

Figma kaynağı: "Bentas DS" dosyası, "Kbd" sayfası — tek bir component set: **kbd** (`1148:132414`), `Type` (Single / Combo) × `Shortcut` (15 varyant). `Type=Single` tek bir key cap, `Type=Combo` key cap + "+" ayırıcı + key cap dizisidir.

Kbd, metin içinde bir klavye tuşunu veya kısayol kombinasyonunu görsel olarak işaretler (menü öğesi, tooltip, yardım metni). **Etkileşimsiz** bir göstergedir — semantik `<kbd>` elementi, buton değil; hover/focus/disabled state'i, boyut ekseni, tema ekseni **yoktur**. Tek biçim ekseni: tek tuş mu, kombo mu. `components/kbd` tek sayfa (4-tab standardı: Overview / Examples / CSS Properties / Usage).

### 20.1 Yapı

**Key cap** (`.bt-kbd`) — tek bir `<kbd>`:

- `display: inline-flex`, içerik yatay+dikey ortalı
- `min-width: 20px` → tek karakterli tuşlar ("A", "5", "⇧") kare (~20×20 px) görünür; "Ctrl", "Enter" gibi uzun etiketler içeriğe göre genişler (hug)
- `padding: Space/spacing-2xs` (2px) — **dört kenar** (component set'in tüm varyantlarında bu değer bağlı; `Type=Combo` içindeki dar tek-glyph key cap'ler `layoutSizingHorizontal: FIXED` 20px ile kare tutulur)
- `border-radius: Radius/radius-sm` (4px)
- `background: Color/Base/--bt-base-subtle` (#f5f5f5)
- yazı: **Geist Mono** Regular, `--bt-text-xs-regular` (400 · 12px/16px) — key cap'lerin monospace görünmesi tuş genişliklerini tutarlı kılar
- `color: Text/Primary/--bt-text-primary-emphasis` (#727272)
- `white-space: nowrap`

**Combo** (`.bt-kbd-combo`) — birden çok key cap:

- `display: inline-flex`, `align-items: center`, `gap: Space/spacing-2xs` (2px)
- her tuş ayrı bir `.bt-kbd`; aralarına bir **"+" ayırıcı** girer: `.bt-kbd-combo__plus` — aynı font/renk, `user-select: none` (kopyalanan metinde "+" görünmesin)
- iki, üç veya daha fazla tuş desteklenir

Docs implementasyonu — markup:
```html
<!-- tek tuş -->
<kbd class="bt-kbd">Ctrl</kbd>

<!-- kombo -->
<span class="bt-kbd-combo">
  <kbd class="bt-kbd">Ctrl</kbd>
  <span class="bt-kbd-combo__plus">+</span>
  <kbd class="bt-kbd">Shift</kbd>
  <span class="bt-kbd-combo__plus">+</span>
  <kbd class="bt-kbd">P</kbd>
</span>
```

CSS:
```css
.bt-kbd {
  display: inline-flex; align-items: center; justify-content: center;
  min-width: 20px;
  padding: var(--bt-space-2xs, 2px);
  border-radius: var(--bt-radius-sm, 4px);
  background: var(--bt-base-subtle, #f5f5f5);
  font: var(--bt-text-xs-regular, 400 12px/16px var(--mono));
  font-family: var(--mono);              /* Geist Mono */
  color: var(--bt-text-primary-emphasis, #727272);
  white-space: nowrap; box-sizing: border-box;
}
.bt-kbd-combo { display: inline-flex; align-items: center; gap: var(--bt-space-2xs, 2px); }
.bt-kbd-combo__plus {
  font: var(--bt-text-xs-regular, 400 12px/16px var(--mono));
  font-family: var(--mono);
  color: var(--bt-text-primary-emphasis, #727272);
  user-select: none;
}
```

### 20.2 Tuş tipleri

Etiket serbest metindir — üç tipik kategori: sözcük tuşları (Ctrl, Tab, Esc, Enter, Space, Del), tek harf/rakam (A, K, 5 — kare görünür) ve tek-glyph sembol tuşları (⇧ ⌘ ⌥ ⌃ ⏎ ⌫ ↑ ↓ ← →). Sembol tuşları kombolarda sözcük adlarından daha kompakt ve platformlar arası daha taşınabilirdir. Kbd hiçbir dönüşüm yapmaz; ne yazılırsa onu gösterir — platforma göre doğru glyph'i seçmek (Windows `Ctrl`, macOS `⌘`) tüketen tarafın işidir.

### 20.3 JS davranışı

**Yok.** Kbd salt-sunum bir parçadır; markup doğrudan gömülür, `window.bt*` global'i veya event handler'ı gerektirmez.


## 21. Overflow Menu

Figma kaynağı: "Bentas DS" dosyası, "Overflow Menu" sayfası (`1089:133016`). Alt yapı taşları:

- **Base Overflow Menu Item** (`1090:133293`) = `[Left Control 32×32] + [Label flex-1] + [Right Control 32×32]`, satır flex, `align-items:center`, gap 0.
- **Overflow Menu Item Controls** (`1111:130992`) — ayrı bir component set: `Content` (Left Control / Right Control) × `Type` (Icon, Checkbox, Radio, Switch, Avatar, Kbd, Palette, Button, Blank). 32×32 bir slot; içine tasarım sisteminin **gerçek** kontrolü konur, slot yalnız kutu + ortalama sağlar.
- **Overflow Menu Item** (`1112:131632`) — `Type` (Default / Destructive) × `Content` (Label / Left Control & Label / Label & Right Control / Left Control & Label & Right Control) × `State` (Default / Hover / Active / Selected / Focus / Disabled).
- **Overflow Menu Item Group Label** (`1112:132370`) — bölüm başlığı; Geist **Medium** 12/16, `text/primary/emphasis` (#727272). İç "Label" frame padding `[4,8,4,8]` → **4px dikey / 8px yatay** (`spacing-xs` / `spacing-md`). Toplam yükseklik 24px.
- **Overflow Menu List** — beyaz zemin, `border/primary/muted` (#e6e6e6) 1px kenar, `Shadow/sm` (`--bt-shadow-sm`), `radius-sm`. İçinde bir veya daha çok **Section** (padding `spacing-xs` = 4px). İki Section arasına Figma bir **Seperator** component'i (`Mode=Light`; `Line`, 1px, `border/primary/default` #d4d4d4, tam genişlik) koyar — docs'ta bu `.bt-ovf-menu__section + .bt-ovf-menu__section { border-top }` ile üretilir (aynı görünüm). "Overflow Menu Sections" frame'i 3 section gösterir: File (2 item) · Actions (5 item) · ayrı Delete section'ı (`Type=Destructive`, sol ikon `trash-2`, group label'sız).
- **Trigger** — `Base Button` Sm / Outline / Base ("Open Menu" metni) **veya** icon-only bir `bt-btn--icon` (⋯).

### 21.1 Docs implementasyonu — markup

```html
<div class="bt-ovf-menu">
  <button class="bt-btn bt-btn--sm bt-btn--base-outline" onclick="btOvfMenuToggle(event,this)">Open Menu</button>
  <div class="bt-ovf-menu__list" role="menu">
    <div class="bt-ovf-menu__section" role="group">
      <div class="bt-ovf-menu__group-label">Group Label</div>           <!-- opsiyonel -->
      <div class="bt-ovf-menu__item[ bt-ovf-menu__item--danger][ bt-ovf-menu__item--{state}]" role="menuitem" onclick="btOvfMenuClose(event,this)">
        <div class="bt-ovf-menu__item-row">
          <span class="bt-ovf-menu__ctrl">…gerçek DS kontrolü…</span>   <!-- opsiyonel sol slot -->
          <span class="bt-ovf-menu__label">
            <span class="bt-ovf-menu__label-text">Label</span>
            <span class="bt-ovf-menu__label-desc">Description</span>     <!-- opsiyonel 2. satır -->
          </span>
          <span class="bt-ovf-menu__ctrl">…</span>                      <!-- opsiyonel sağ slot -->
        </div>
      </div>
    </div>
    <!-- section + section → aralarına otomatik border-top (Line) -->
  </div>
</div>
```

### 21.2 Control slot (9 tip) — gerçek component reuse

`.bt-ovf-menu__ctrl` 32×32, `overflow:clip`, içeriği ortalar. İçine konan:

| Type | İçerik | Reuse |
|---|---|---|
| Icon | 24×24 inline SVG (`.bt-ovf-menu__ctrl-icon`), renk `icon/primary/strong` | — |
| Checkbox | `.bt-checkbox__box` (16×16) + `.bt-checkbox__check` | Checkbox |
| Radio | `.bt-radio__dot` (16×16) | Radio |
| Switch | `.bt-switch__track` + `.bt-switch__thumb` (32×20) | Switch |
| Avatar | `.bt-avatar.bt-avatar--xs` + `.bt-avatar__initials` (28×28) | Avatar |
| Kbd | `<kbd class="bt-kbd">` / `.bt-kbd-combo` — slot **`.bt-ovf-menu__ctrl--hug`** alır | Kbd |
| Palette | `.bt-ovf-menu__ctrl-palette` — 20×20, 1px `border/primary/default`, `radius-sm`, renk örneği | — |
| Button | `.bt-btn.bt-btn--2xs.bt-btn--base-flat.bt-btn--icon` | Button |
| Blank | boş 32×32 hizalayıcı (bazı satırda kontrol var bazıda yokken hizayı korur) | — |

**Kbd slotu — genişlik istisnası:** Figma'da `Content=Right/Left Control, Type=Kdb` varyantı `layoutSizingHorizontal: HUG`'dır (26px tek tuş … 82px 3'lü kombo). Bir klavye kısayolu 32px'e sığmayabildiği için Kbd taşıyan slot `.bt-ovf-menu__ctrl--hug` alır: `width:auto; min-width:32px; overflow:visible` — kbd hiç klipslenmez, hizayı korumak için min 32px kalır; yerine `.bt-ovf-menu__label` (`flex:1; min-width:0`) daralıp ellipsis yapar.

**Menü List genişlik modeli (2026-09-07, altı aşamalı revizyon — GERÇEK nihai hâl, bkz. altta):** İlk halde `min-width:180px` sabitti. Kullanıcı "Left/Right Control aktifken otomatik genişlese mantıklı olmaz mı" diye sordu; Figma incelemesi (9 örnek frame) hepsinin 226px'te AYNI olduğunu gösterdi (`180px` zaten Figma'dan 46px eksikti) — 1. düzeltme `min-width:226px`'e sabitlemekti. Sonra `get_design_context` ile "Overflow Menu Basic" frame'inin tam ağacı incelendi: 226px, component içeriğinden HESAPLANMIYOR, sadece demo frame'in elle verilmiş sabit boyutundan miras kalıyor (kullanıcı doğruladı) — Avatar'ın `--wide:260px` override'ı da aynı sebeple doğrulanmamıştı, kaldırıldı; 2. düzeltme TEK universal `min-width:240px` (8px grid) + `width:max-content` (hug) + `max-width:320px` (LİSTE seviyesinde bir tavan) oldu. **Kullanıcı bunun da eksik olduğunu gösterdi — somut örnek:** Left=Icon + Right=Kbd (uzun kombo) + Description aktifken, liste-seviyesi `max-width:320px` tavanı, kontrol slotlarının kapladığı alanı Label'dan DÜŞÜRÜYORDU — yani description'a kalan alan, kaç kontrol slotu aktif olduğuna göre RASTGELE değişiyordu (universal değildi). Ellipsis-tetikleme tavanı LİSTE'den `.bt-ovf-menu__label`'IN KENDİSİNE taşındı — ama bu ARA adımda Label hâlâ `flex:1` (= `flex-shrink:1` dahil) kullanıyordu, yani "Label asla küçülmez" garantisi tarayıcının intrinsic-sizing hesaplamasının doğru çalışmasına bağlı bir VARSAYIMDI, canlı doğrulanmış bir kesinlik değildi. **Kullanıcı somut sayılarla düzeltti** (2026-09-07, devam 5): "Basic'te 240px ise Left Control eklendiğinde ~272px, Right de eklenince ~294px olmalı — Label kontrol eklendikçe daralmamalı." **Nihai/doğru model:** `.bt-ovf-menu__label`'a **`flex-shrink:0`** eklendi (Figma'nın kendi çıktısının `flex-[1_0_0]`'ı — grow:1, shrink:0, basis:0 — ile birebir örtüşüyor) — bu, "Label asla sıkışmaz" garantisini VARSAYIMDAN ÇIKARIP KESİNLEŞTİRİYOR: hangi intrinsic-sizing yorumu geçerli olursa olsun, flex-shrink:0 tarayıcı seviyesinde Label'ın asla küçülmeyeceğini garanti eder. Taban/tavan da güncellendi: `min-width:224px` (Liste'nin 240px tabanından 16px varsayılan padding çıkarılmış hâli — kontrolsüz item'da Label+padding tam 240px eder) / `max-width:320px` (daha cömert, BENİM seçimim, Figma'da doğrulanmadı). Üç katman: **LİSTE = hug, sadece taban** (`width:max-content; min-width:240px`) — satırın gerçek doğal toplamına (sol slot + Label'ın kendi 224–320px'i + sağ slot) sarılır; her kontrol eklendiğinde LİSTE o kontrolün genişliği kadar büyür, Label'dan hiçbir şey çalınmaz. **SECTION/ITEM/ROW = fill** (`width:100%`). **LABEL = flex-shrink:0 + kendi min/max'ı + ellipsis**. Not: kullanıcının verdiği 272/294 rakamları yaklaşık — gerçek sayı, sol kontrol varken Label padding'inin 16→8'e düşmesi gibi CSS padding kurallarına göre birkaç px kayabilir; ÖNEMLİ olan davranış (additive, sıkıştırmayan) artık flex-shrink:0 ile GARANTİLİ. Hiçbir variant'a özel override YOK. `docs/css/styles.css`, `docs/js/pages-web.js` (`ovfMenuCss`, Anatomy/CSS Properties tabloları, Shortcuts/Avatar page-desc'leri, Usage listesi) güncellendi.

**GERÇEK nihai model — CSS auto-sizing tamamen terk edildi, JS'te deterministik hesaplama (2026-09-07, devam 6):** `devam 5`'teki `flex-shrink:0` + Label'da `min-width:224px`/`max-width:320px` modeli hâlâ tarayıcının flex intrinsic-sizing/max-content hesaplamasının BELİRLİ bir şekilde davranacağı varsayımına dayanıyordu (canlı doğrulanamadı). **Kullanıcı somut kanıtla düzeltti:** "330.02px diye bir width değeri olamaz" (gerçek tarayıcıda gözlemlenen kesirli/öngörülemeyen sonuç) + "Avatar'ın genişliği anlamadığım bir şekilde çok geniş" — yani `flex-grow:1` + `max-width:320px` kombinasyonu içeriğe göre öngörülemeyen şekilde şişiyordu. **Kullanıcının kendi tarif ettiği mental model esas alındı:** "Basic bizim default overflow menümüz, tüm variantlar bu variant üzerinden properties aktifleşerek oluşuyor" (Submenu = Right Control aktif + buton submenu açıyor; Icons = Left Control aktif). Çözüm: **CSS artık HİÇBİR "hug"/intrinsic-sizing hesabı yapmıyor.** Genişlik tamamen `ovfMenuHtml` (`docs/js/pages-web.js`) içinde DETERMİNİSTİK hesaplanıyor — `OVF_LIST_BASE_WIDTH` (240) + `OVF_LIST_CTRL_WIDTH` (32) sabitleri, her item için GERÇEKTEN render edilen kontrol durumunu (`_ovfTrackCtrl` — isSub/isTog'un görsel olarak dolu sağ slotu da dahil, `eRight==='none'` olsa bile) izleyip TÜM item'lar arasındaki en geniş kombinasyonu (`maxCtrlWidth`) bulur; `listMinWidth = 240 + maxCtrlWidth` inline `style="min-width:...px"` olarak basılır (`ovfListHtml`'in yeni `o.minWidth` parametresi — JS'in sonradan eklediği `top/left/right/display` inline stilleriyle çakışmaz). CSS tarafında `.bt-ovf-menu__list` sade `min-width:240px` (yalnızca bu hesabı atlayan statik kullanımlar için fallback — width:max-content YOK); `.bt-ovf-menu__label` sade `flex-grow:1; flex-shrink:0; flex-basis:auto; min-width:0` (min/max-width YOK — kontrol slotlarından TAMAMEN bağımsız, kalan alanı doldurur). Doğrulanan örnekler (bu aşamada henüz canlı DEĞİL, kod-okuma ile): Basic=240, Basic+Left=272 (kullanıcının verdiği sayıyla BİREBİR), Basic+Left+Right=304, Avatar=304. **NOT (devam 7'de düzeltildi):** burada "metin uzunluğu genişliği hiç etkilemiyor" iddia edilmişti — bu YANLIŞTI, aşağıya bakın. `docs/css/styles.css`, `docs/js/pages-web.js` — 8 nokta — güncellendi.

**Canlı tarayıcı doğrulaması + eksik kalan ellipsis-tavanının geri eklenmesi (2026-09-07, devam 7):** Kullanıcı "önerini canlı olarak test et" dedi. Playwright + sistemde kurulu Chrome (`channel:'chrome'`, indirme gerekmedi) ile gerçek docs sitesi açılıp `window._pgdSetProp` ile prop'lar değiştirilip `getBoundingClientRect()` ölçüldü. **Doğrulanan:** Basic=240px, +Left=272px (TAM beklenen), +Left+Right=304px, Avatar=304px — "inexplicably wide" bug'ı GERÇEKTEN düzelmiş. **Ama `devam 6`'daki "metin uzunluğu genişliği hiç etkilemiyor" iddiası YANLIŞ çıktı:** `.bt-ovf-menu__list`'e yalnızca `min-width` verilip `width` hiç set edilmediği için, `position:fixed` elementin ÖRTÜK `width:auto` shrink-to-fit davranışı hâlâ aktifti — canlı testte 304px'lik bir satıra ~56 karakterlik bir açıklama eklenince liste 375.375px'e, ~145 karakterlik bir metinle 856px'e (viewport 1280px, hiç kırpılmadan) büyüdü. Bu, 2026-09-04'te kabul edilen "belli bir noktadan sonra ellipsis olmalı" gereksinimini ihlal ediyordu (`devam 4`'te zaten bir kez kaybedilmiş, `devam 6`'da yanlışlıkla "çözüldü" sanılmıştı). **Çözüm — `max-width:320px` GERİ eklendi, ama bu kez `devam 4`'ün BAŞARISIZ yerine değil:** `devam 4`'te `max-width` `.bt-ovf-menu__label`'a `flex-grow:1` İLE BİRLİKTE konmuştu — bu kombinasyon kısa metni bile zorla 320'ye şişiriyordu (asıl "inexplicably wide" kaynağı muhtemelen buydu). Bu kez `max-width:320px` YALNIZCA `.bt-ovf-menu__list`'in kendi `min-width`/`max-width` çiftine eklendi, Label'a hiç dokunulmadı. **Canlı doğrulandı (Playwright, hem gerçek sayfa hem izole DOM testi + ekran görüntüsü):** kısa metin (Left+Right icon, 304px) cap varken bile 304'te kalıyor — ZORLA ŞİŞMİYOR; önceki 375px'e büyüyen orta-uzun metin artık TAM 320px'te duruyor; aşırı uzun metin (~145 karakter) ekran görüntüsüyle GERÇEKTEN kırpıldığı teyit edildi. Yani nihai model: **TABAN** (JS, deterministik, kontrol slotlarına göre — 240/272/304) + **TAVAN** (CSS `max-width:320px`, metnin taban ile tavan arasında serbestçe büyümesine izin verir) + **Label** (`flex-shrink:0`, kontrol slotlarından bağımsız, min/max-width yok). `docs/css/styles.css` (`.bt-ovf-menu__list`'e `max-width:320px` + 2 yorum güncellemesi), `docs/js/pages-web.js` (`ovfMenuCss`, Anatomy tablosuna "Width (tavan)" satırı, Usage/Shortcuts/Avatar page-desc'leri — 5 nokta) senkron güncellendi. **Yöntemsel not:** bu oturumda CSS davranışını 4 kez teorik olarak "doğru" sundum, 3'ü canlı testte yanlış çıktı — kullanıcının "canlı test et" talebi haklıydı, bundan sonra bu tür genişlik/layout iddiaları için mümkün olduğunda Playwright + sistem tarayıcısı (indirme gerekmez, `channel:'chrome'`/`'msedge'`) kullanılacak.

**Taban 240→220px + `flex-shrink:0`'ın kendisinin bug olduğu canlı tespit edildi (2026-09-07, devam 8):** Kullanıcı `OVF_LIST_BASE_WIDTH`'i 220px'e düşürmemi istedi (mekanik değişiklik — Basic=220, Icons=252, +Left+Right=284, formül aynı) ve ayrıca sordu: **"label ve description max-width'e büyüdüğünde ellipsis oluyor mu?"** Bu soruyu teorik cevaplamak yerine canlı test ettim (Playwright, gerçek sayfa + ekran görüntüsü) — cevap **HAYIR**: `.bt-ovf-menu__list`'in `max-width:320px` tavanı doğru çalışıyordu (liste gerçekten 320'de duruyordu) ama içindeki metin **"…" ile değil, çıplak/karaktersiz kesiliyordu**. Kök sebep: `.bt-ovf-menu__label`'daki `flex-shrink:0` (devam 5'te "Label asla sıkışmasın" diye eklenmişti) Label'ın text-overflow:ellipsis tetiklenmesi için gereken şeyi — GERÇEKTEN daralabilmeyi — engelliyordu; `scrollWidth`/`clientWidth` ölçümü bunu doğruladı (`truncated:false`, Label kendi tam doğal genişliğinde render oluyordu, taşma LİSTE'nin `overflow:hidden`'ı tarafından "…" olmadan ham kesiliyordu). **Canlı hipotez testi:** `flex-shrink:0`→`1` değiştirilince (a) ellipsis "…" doğru göründü (ekran görüntüsüyle teyit) VE (b) Left+Right icon senaryosunda genişlik hâlâ TAM `284px` (220+32+32) — yani `flex-shrink:0` kontrol-slotu-korumasının GERÇEK kaynağı değilmiş, o koruma zaten JS'in deterministik `min-width` hesabından geliyordu; `flex-shrink:0` sadece devam 5'te (JS hesaplaması henüz yokken) eklenmiş, sonradan gereksizleşmiş ve fark edilmeden ellipsis'i bozan bir kalıntıydı. Düzeltme: `.bt-ovf-menu__label`'da `flex-shrink:0`→`1` (varsayılan). `docs/css/styles.css` (`OVF_LIST_BASE_WIDTH` kullanımı 220, Label kuralı + yorum), `docs/js/pages-web.js` (sabit, `ovfMenuCss`, Anatomy "Label · Width" satırı, Shortcuts/Avatar page-desc'leri — 6 nokta) güncellendi. **Doğrulama (Playwright, gerçek kod tabanı üzerinde):** Basic=220px, Icons=252px, +Left+Right=284px (hepsi tam beklenen); uzun metin artık gerçekten `labelVisuallyTruncated:true` + ekran görüntüsünde görünür **"…"** ile bitiyor.

**Taban 220→160px (2026-09-07, devam 15):** Kullanıcı `OVF_LIST_BASE_WIDTH`'i 160px'e düşürmemi istedi — mekanik değişiklik, formül aynı (taban + kontrol slotu başına +32px): Basic=160, Icons=192, +Left+Right=224, Avatar=224. `docs/css/styles.css` (`.bt-ovf-menu__list` fallback `min-width`, nested/`--sub` liste yorumu), `docs/js/pages-web.js` (`OVF_LIST_BASE_WIDTH` sabiti, `ovfMenuCss`, Anatomy "Width (taban)"/nested list satırları, CSS Properties bölümü — 6 nokta) senkron güncellendi. `node --check` temiz.

**Açılış/kapanış animasyonu (2026-09-07, devam 16 — kullanıcı isteği "smooth bir açılış kapanış animasyonu ekle"):** `.bt-ovf-menu__list` (hem kök liste hem `--sub` submenu) artık fade + hafif scale/translateY ile açılıp kapanıyor — kapalı state `opacity:0; transform:translateY(-4px) scale(0.98);`, `.bt-ovf-menu__list--visible` class'ı `opacity:1; transform:none;`'a geçirir, `transition: opacity 140ms, transform 140ms` (cubic-bezier ease-out benzeri eğri), `transform-origin: top left`. Portal/`display:none↔block` mekaniği DEĞİŞMEDİ — JS `_btOvfAnimateOpen(list)`/`_btOvfAnimateClose(list, onDone)` (yeni, `docs/js/pages-web.js`) bunun ÜZERİNE ince bir katman: açılışta `display:block` + konumlama senkron kalır (offsetWidth/offsetHeight transform'dan etkilenmediği için pozisyon hesabı bozulmaz), bir reflow (`void list.offsetWidth`) ile kapalı state commit edildikten sonra bir sonraki `requestAnimationFrame`'de `--visible` eklenir (transition tetiklensin diye); kapanışta `--visible` kaldırılıp `--closing` (`pointer-events:none`) eklenir, GERÇEK `display:none` + portal'dan geri taşıma `OVF_ANIM_MS` (140ms) SONRA olur — `WeakMap` ile her liste için pending timer izlenir, yeniden açılırsa (reflow öncesi) iptal edilir. `prefers-reduced-motion:reduce` hem CSS'te (`transition:none`) hem JS'te (gecikme 0ms) saygı görür. Trigger butonuna tekrar tıklanırsa "açık mı" kontrolü artık `data-bt-ovf-portal==="1"` (önceden `style.display==='block'` idi — kapanış artık gecikmeli olduğu için bu daha doğru sinyal). `docs/css/styles.css` (`.bt-ovf-menu__list` transition/transform-origin + yeni `--visible`/`--closing` class'ları), `docs/js/pages-web.js` (`OVF_ANIM_MS`, `_btOvfHideTimers`, `_btOvfReducedMotion`, `_btOvfAnimateOpen`, `_btOvfAnimateClose`, `btOvfSubHide`/`btOvfSubOpen`/`btOvfMenuHide`/`btOvfMenuToggle` güncellendi). **Doğrulama:** `node --check` temiz; Playwright + sistem Chrome ile canlı ölçüldü — açılışta opacity 0→ara değer (~40ms'de 0.88)→1, transform scale(0.98)→scale(1); kapanışta `--closing` class'ı + opacity 1→ara değer (~60ms'de 0.05)→0, tam olarak `display:none`+portal temizliği yalnızca timer bitince; submenu'de birebir aynı davranış (ayrıca doğrulandı) — hiç JS hatası yok.

**Bug — Avatar'daki (ve genel olarak ad-hoc) Switch/Checkbox/Radio item'ları tıklanınca menüyü kapatıyordu, kontrolün kendisi hiç çevrilmiyordu (2026-09-07, devam 17 — kullanıcı bildirimi: "avatar örneğinde mesela bir menu iteminde switch var fakat interaction sağlanamıyor menü kapandığı için"):** Toggle-item tespiti (`ovfMenuHtml` içindeki `mkItem`) yalnızca dedike `isToggleVar` sayfalarında (Checkboxes/Radios/Switches) çalışıyordu — `isTog = isToggleVar && ...`. Avatar'ın "Developer Mode" item'ı (pozisyonel varsayılan olarak sağda bir Switch taşır) `isToggleVar=false` olduğu için bu kapsamın DIŞINDA kalıyordu; sağ slotta görsel olarak bir switch render ediliyordu ama item'ın `onclick` handler'ı genel `btOvfMenuClose` idi — switch'e tıklamak switch'i HİÇ çevirmeden tüm menüyü kapatıyordu. Aynı bug, herhangi bir variant'ta Item N properties panelinden Right Control'ü manuel "Switch"/"Checkbox"/"Radio"'ya çeviren (bunlar `OVF_RIGHT_OPTS`'ta her variant'ta seçilebilir) her item için de geçerliydi. **Düzeltme — toggle tespiti GENELLEŞTİRİLDİ:** `isTog` artık `isToggleVar`'dan bağımsız, doğrudan ÇÖZÜLMÜŞ sağ kontrol tipine bakıyor: `eRight === 'checkbox' || eRight === 'radio' || eRight === 'switch'` → item her zaman toggle item'dır (role `menuitemcheckbox`/`menuitemradio`, tıklama `btOvfToggle`/`btOvfRadioPick`'e gider, `_btOvfCloseAll` ÇAĞIRMAZ). `toggle` prop'u `ovfItemHtml`'e artık sabit `TOGGLE_KIND` yerine ÇÖZÜLMÜŞ `eRight` değeriyle geçiyor (dedike sayfalarda ikisi zaten aynı). Başlangıç checked state'i (`togOn`) dedike sayfalarda eski demo desenini korur (radio→idx 0, checkbox/switch→idx 0,3,…); ad-hoc durumlarda (Avatar dahil) pozisyonel varsayılan varsa (`defRightOpt.on`) o kullanılır, yoksa güvenli varsayılan `'off'`. `docs/js/pages-web.js`'te `mkItem` içinde `eLeft`/`eRight` hesaplaması `isTog`'dan ÖNCEYE alındı (artık ona bağımlı). **Doğrulama (Playwright + sistem Chrome):** Avatar örneğinde menü açılıp Developer Mode'un switch'ine tıklandı — `aria-checked` `false→true`, `.bt-switch__track--on` class'ı eklendi, menü `--visible` class'ıyla AÇIK KALDI; ardından normal bir item'a (Profile) tıklanınca menü hâlâ doğru şekilde kapandı (regresyon yok). `node --check` temiz.

`.bt-ovf-menu__label` (Figma "Label" FRAME) padding'i varsayılan **8/8** (`radius-lg` / `spacing-md`); **sol kontrol varsa** her iki yanda **8/4**'e iner (`.bt-ovf-menu__ctrl + .bt-ovf-menu__label` → `padding-inline: spacing-xs`). Sağ kontrol tek başına 8/8'i değiştirmez. Figma set'inden doğrulandı: `Content=Label` → [8,8,8,8], `Content=Left Control & Label` → [8,4,8,4], `Content=Label & Right Control` → [8,8,8,8].

### 21.3 State paletleri (item wrapper üzerinde)

**Type=Default:** Hover `base/subtle` (#f5f5f5) · Active = Selected `base/muted` (#e6e6e6) · Focus **beyaz zemin** + nötr gri ring `0 0 0 3px rgba(212,212,212,.5)` (Figma effect `Focus Ring/neutral`, brand değil — proje standardı) · Disabled metin `text/primary/muted` (#a3a3a3) + `pointer-events:none`, slot ikonu `icon/primary/muted`. Description satırı (`.bt-ovf-menu__label-desc`) hiçbir state'te renk değiştirmez — daima `text/primary/emphasis` (#727272).

**Type=Destructive** (`.bt-ovf-menu__item--danger`): metin/ikon `text|icon/error/default` (#b31d38) · Hover `error/subtle` (#fde6e6) · Active/Selected `error/muted` (#fbd0d2) · Focus `error/subtle` (#fde6e6) zemin **+ AYRI bir ring** — Figma effect `Focus Ring/error`, `0 0 0 3px rgba(232,75,91,.24)` (kırmızı tonlu, Default'un nötr gri ringinden RENK olarak da farklı, sadece zemin değil) · Disabled `text/error/muted` (#fbd0d2). **Bug düzeltmesi (2026-09-07, devam 24 — kullanıcı isteği: Figma node `1113:133828` "Type=Destructive, Content=Label, State=Focus" tekrar kontrol edildi):** Önceden `.bt-ovf-menu__item--danger.bt-ovf-menu__item--focus` yalnızca `background`'ı override ediyordu, `box-shadow` hiç override edilmediği için Default'un nötr gri ringi (`rgba(212,212,212,.5)`) sızıyordu — `get_design_context` ile Figma'nın bu state için AYRI, adlandırılmış bir efekt stili (`Focus Ring/error`) kullandığı doğrulandı, CSS buna göre düzeltildi.

Selected ile Active görsel olarak birebir aynıdır (Selected = kalıcı vurgu, Active = anlık basış).

**Kullanım deseni — Destructive item'lar:** `--danger` bir *item* modifier'ıdır, menü modu değil. Bir menü yıkıcı bir aksiyon barındırıyorsa (Delete, Remove…) yalnızca o item `--danger` alır ve **ayrı bir son `Section`'a** konur (`section + section` → `border-top` = Figma "Line"); sol kontrol ikon ise `trash-2`. Normal item'lar Default kalır — tüm menü kırmızıya boyanmaz. Figma "Overflow Menu Desctuctive" frame'i bu deseni gösterir (birkaç normal aksiyon + Line + Delete).

### 21.4 Submenu — iç içe menü listesi (Figma "Overflow Menu Submenu" `1164:4836`)

Bir menü item'ı, kendi **sağına ikinci bir menü listesi** açabilir. Figma frame'i iki `Overflow Menu List`'i yan yana gösterir: parent (226px, 6 item) ve child (189px, 3 item); child, parent'ın **sağ kenarına yaslı** ve tetikleyici item'ın **üst hizasında** durur (frame'de child `x = 226 = parent genişliği`, `y = 132 ≈ 5. item'ın üstü`). Tetikleyici item **Active** state'te (alt menü açık) ve sağ 32×32 slotunda `Icon/chevron-right` taşır.

**Markup:** submenu parent item'ı `.bt-ovf-menu__item--has-sub` alır; sağ slotu chevron-right'a kilitlenir; `.bt-ovf-menu__item-row`'un hemen ardına, kapalıyken `display:none` olan gömülü bir alt liste konur:

```html
<div class="bt-ovf-menu__item bt-ovf-menu__item--has-sub" role="menuitem"
     aria-haspopup="menu" aria-expanded="false"
     onclick="btOvfSubToggle(event,this)"
     onmouseenter="btOvfSubHover(this,true)" onmouseleave="btOvfSubHover(this,false)">
  <div class="bt-ovf-menu__item-row">
    <span class="bt-ovf-menu__label"><span class="bt-ovf-menu__label-text">Add Reminder</span></span>
    <span class="bt-ovf-menu__ctrl">…chevron-right…</span>
  </div>
  <div class="bt-ovf-menu__list bt-ovf-menu__list--sub" role="menu"
       onmouseenter="btOvfSubHover(this,true)" onmouseleave="btOvfSubHover(this,false)">
    <div class="bt-ovf-menu__section" role="group">…child item'ları…</div>
  </div>
</div>
```

Alt liste bir kök menü listesiyle **birebir aynı** yapıdadır (kendi Section + item'ları; child item'lar da `--has-sub` olabilir → **recursive**).

**CSS:** `.bt-ovf-menu__item--has-sub { position: relative }` · `.bt-ovf-menu__list--sub { z-index: 201 }` (parent list `z-index:200` üstünde). Alt menü açıkken parent item'a `.bt-ovf-menu__item--selected` eklenir (Active zemin `base/muted` #e6e6e6).

### 21.5 Toggle varyantları — Checkboxes / Radios / Switches [+ Icons]

Sağ 32×32 slotta gerçek DS bir toggle kontrolü taşıyan, **tıklamanın menüyü KAPATMADIĞI** varyant ailesi (ayar menüsü deseni). Her item `Content = Label & Right Control`; item `role="menuitemcheckbox"` (radio → `menuitemradio`) + `aria-checked` taşır.

| Varyant | Sağ kontrol | Seçim | Handler | Selected class | Figma |
|---|---|---|---|---|---|
| **Checkboxes** | `.bt-checkbox__box` (Md 16×16) | çoklu (bağımsız) | `btOvfToggle` | `--checked` | "Overflow Menu Checkboxes" `1178:22447` |
| **Radios** | `.bt-radio__dot` (16×16) | **tekli** (liste = 1 grup) | `btOvfRadioPick` | `--selected` | "Overflow Menu Radios" `1180:132375` |
| **Switches** | `.bt-switch__track` (32×20) | çoklu (bağımsız) | `btOvfToggle` | `--on` | "Overflow Menu Switches" |
| **Palettes** | `.bt-ovf-menu__ctrl-palette` (20×20) | **tekli** (liste = 1 grup) | `btOvfRadioPick` | `.bt-ovf-menu__item--selected` (item'ın kendisi — diğer satırlardaki gibi kontrolün EKİ değil, bkz. §21.5c) | Figma'da ayrı sayfa yok — bkz. §21.5c |

- `btOvfToggle(event,item)` — `stopPropagation`, item Disabled değilse satırın **son** `.bt-checkbox__box`/`.bt-switch__track`'ine ilgili `--checked`/`--on` class'ını toggle eder, `aria-checked` eşler. `_btOvfCloseAll`/`btOvfMenuClose` **çağırmaz**.
- `btOvfRadioPick(event,item)` — aynı `.bt-ovf-menu__list` içindeki tüm `[role="menuitemradio"]`'ları gezer, tıklanan item'ı seçili bırakır. **Radio ile Palette AYNI fonksiyonu paylaşır** (2026-09-07, devam 18) — renk seçimi de doğası gereği tekli — ama seçili göstergesinin YERİ kontrol tipine göre değişir (devam 19'da netleşti): Radio'da kontrolün kendisi (`.bt-radio__dot--selected`, Figma'da dolu/boş iki hâlli), Palette'te item'ın kendisi (`.bt-ovf-menu__item--selected` — Figma'da Palette'e özel bir "selected" tasarımı yok, bu yüzden component'te zaten var olan genel item state reuse edildi, swatch'a özel bir görsel icat edilmedi). Her iki durumda da `aria-checked` eşlenir, menü açık kalır.
- `ovfItemHtml`'de `o.toggle = 'checkbox'|'radio'|'switch'|'palette'` + `o.toggleOn = 'on'|'off'` verildiğinde bu yol tetiklenir; Palette için ayrıca `o.toggleColor` (swatch rengi, `.bt-ovf-menu__ctrl-palette`'in inline `background`'ı) geçirilir. `interactive:false` → statik (onclick yok).

**… Icons türevleri** (Checkboxes Icons `1179:22517` + Radios Icons + Switches Icons + Palettes Icons) — aynısı + her item'ın sol slotunda bir Lucide ikonu. `ovfMenuHtml` bu varyantlarda `left='icon'` kilitler; Checkboxes/Radios/Switches Icons sol ikon dizisi olarak `_checkLeftIcons` = `[bell, circle-alert, copy-check, mail, message-square-dot, circle-check]` (etiketlerle pozisyonel) kullanır, Palettes Icons ise `_paletteLeftIcons` = `[palette]` (TEK eleman, her item'da aynı — renk zaten swatch'la ayırt edilir). Sol kontrol olduğu için Label yatay padding 8→4px.

```html
<div class="bt-ovf-menu__item" role="menuitemcheckbox" aria-checked="true"
     onclick="btOvfToggle(event,this)">
  <div class="bt-ovf-menu__item-row">
    <span class="bt-ovf-menu__label"><span class="bt-ovf-menu__label-text">Email notifications</span></span>
    <span class="bt-ovf-menu__ctrl"><span class="bt-checkbox__box bt-checkbox__box--checked">…check svg…</span></span>
  </div>
</div>
```

Toggle'ın seçili durumu item state'inden (Default/Hover/Active/…) bağımsızdır.

### 21.5c Palettes [+ Icons] — renk seçici (2026-09-07, devam 18, kullanıcı isteği)

Kullanıcının kendi tanımı: *"bu palettes aslında bizim şu an playgroundda kullandığımız background color picker mantığında çalışıyor olan variant dolayısıyla palette renklerini orada kullandığımız color variablelarından örnekleyebiliriz"* — yani bu varyant kendi renk paletini İCAT ETMİYOR, docs sitesinin HER playground'unda zaten var olan toolbar'daki **Background** renk seçicisiyle (`playground.js` → `PGD_BG_OPTIONS`) AYNI 8 `--bt-surface-*` token'ı, aynı sırada/etiketle örnekliyor:

```js
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
```

`pages-web.js`'te `_OVF_PALETTE_LABELS = PGD_BG_OPTIONS.map(o => o.label)` / `_OVF_PALETTE_COLORS = PGD_BG_OPTIONS.map(o => \`var(${o.cssVar})\`)` — bu iki dizi item label'ı ve swatch rengini besler. (Teknik not: `pages-web.js` `<script>` sırası itibarıyla `playground.js`'ten SONRA yüklenir, top-level `const`'lar aynı doküman içi script'ler arası paylaşılan lexical scope'ta olduğu için `PGD_BG_OPTIONS`'a `window.` öneki gerekmeden doğrudan erişilebilir — `registerPlayground` zaten aynı şekilde reuse ediliyor.)

**UX — Radio ile birebir aynı, tekli seçim:** bir menüde aynı anda yalnız BİR renk "seçili" olabilir (çoklu checkbox/switch değil) — bu yüzden Palette, kontrol tipi bakımından ayrı olsa da (`.bt-ovf-menu__ctrl-palette`, 20×20 swatch), UX/interaksiyon bakımından Radio ailesine dahildir: `role="menuitemradio"`, tıklama `btOvfRadioPick`'e gider (aynı fonksiyon, Radio ile PAYLAŞILIR), menü açık kalır. Varsayılan olarak ilk item (idx 0) seçili başlar.

**Seçili göstergesi — swatch'ta DEĞİL, item'ın kendisinde (2026-09-07, devam 19 — kullanıcı düzeltmesi):** İlk uygulamada (devam 18) swatch'a özel yeni bir `box-shadow` ring icat edilmişti — ama **Figma'da Palette için "selected" diye bir tasarım YOK**, bu ring hiçbir Figma karşılığı olmayan uydurma bir görseldi. Kullanıcı bunu fark edip düzeltti: *"neden menu iteminde zaten varolan selected'i kullanmayı tercih etmedin çünkü figma tasarımında palette'in selected diye bir tasarımı yok"* — doğru çözüm, component'te ZATEN var olan ve Figma'dan doğrulanmış genel item **Active/Selected** state'ini (`.bt-ovf-menu__item--selected`, `--bt-base-muted`, §21.3) reuse etmek. Swatch olduğu gibi (kendi rengiyle) kalır, seçili olduğunda İTEM'IN ZEMİNİ vurgulanır — Submenu'nün "alt menü açıkken parent item Active olur" desenindeki mantığın birebir aynısı. `btOvfRadioPick` bu yüzden kontrol tipine göre dallanıyor: Radio'da kendi dot'unu (`.bt-radio__dot--selected` — Figma'da zaten dolu/boş iki hâlli), Palette'te item'ın kendisini (`.bt-ovf-menu__item--selected`) toggle ediyor.

**Palettes Icons:** sol slotta HER item'da AYNI Lucide `blend` ikonu (2026-09-07, devam 20 — kullanıcı isteğiyle `palette` ikonundan değiştirildi; `_paletteLeftIcons = [blend]`, tek elemanlı dizi — renk zaten sağdaki swatch'la ayırt edildiği için farklı ikon gerekmez, yalnızca "bu bir renk seçici" bağlamını taşır).

```html
<div class="bt-ovf-menu__item bt-ovf-menu__item--selected" role="menuitemradio" aria-checked="true"
     onclick="btOvfRadioPick(event,this)">
  <div class="bt-ovf-menu__item-row">
    <span class="bt-ovf-menu__label"><span class="bt-ovf-menu__label-text">Surface Brand Default</span></span>
    <span class="bt-ovf-menu__ctrl"><span class="bt-ovf-menu__ctrl-palette" style="background:var(--bt-surface-brand-default)"></span></span>
  </div>
</div>
```

`ovfItemHtml`'de `o.toggle='palette'` + `o.toggleOn` + `o.toggleColor` (yeni param, 2026-09-07) verildiğinde bu yol tetiklenir — `toggleColor` yalnızca Palette'e özel, `ovfCtrlHtml`'in `'palette'` case'inin `opt.color`'ına gider (diğer toggle tipleri bu alanı yok sayar, zararsız).

### 21.5b Avatar — hesap / kullanıcı menüsü (Figma "Overflow Menu Avatar" `1212:132236`)

Bir tetikleyici avatarın altında açılan hesap menüsü. **Ayrı bir builder DEĞİL** — diğer tüm varyantlarla AYNI `Group`/`Items`/`Item N` motorundan (`mkItem`/`ov()`/chunk mantığı) geçer; yalnız **pozisyona göre varsayılan** değişir:

- **İlk item** (`i === 0`) → kimlik: `ovfCtrlHtml('avatar', { initials:'EG' })` → `.bt-avatar.bt-avatar--xs` (28×28) + ad "Emre Göcer" + e-posta açıklaması (2 satır), `interactive:false` (tıklanamaz).
- **Son item** (`i === nItems - 1`) → Log Out: sol `log-out` ikonu, sağ `.bt-kbd` kısayolu ("Shift + K"), versiyon açıklaması (2 satır).
- **Aradaki item'lar** → aksiyon listesi, sırasıyla Profile→`circle-user-round` · Developer Mode→`user-shield` (+ örnek olsun diye sağda bir `.bt-switch__track`, kapalı) · Settings→`settings-2` · Language→`globe`. **Tam olarak DÖRT aksiyon** — fazlası/eksiği yok.

**Düzeltme (2026-09-07, devam 23 — kullanıcı isteği: "avatar variantını [Figma linki] tekrar incele"):** Bu bölüm önceden tamamen hatalıydı — yanlış Figma node'una (`1182:132948`) referans veriyordu, "User List" adında Figma'da HİÇ olmayan 5. bir aksiyon icat edilmişti (gerçek 4. ve son aksiyon "Language" onun yüzünden hiç görünmüyordu — `nItems` maks. 6 olduğu için 5. eleman asla render edilemiyordu), ikonların hepsi (`user`/`code`/`settings` gear/`users`/`languages`) yanlıştı, Log Out kısayolu "Ctrl + Q" idi (gerçeği "Shift + K"). Doğru node (`1212:132236`) `figma-desktop` MCP (`get_design_context`) ile incelendi — ikon **İSİMLERİ** Figma'nın `data-name="Icon/..."` attribute'larından okundu (`circle-user-round`/`user-shield`/`settings-2`/`globe`), path verisi ise **Figma'dan değil** — proje kuralı gereği (Bentas DS'teki her ikon lucide.dev/lucide-static'ten birebir alınır) `unpkg.com/lucide-static@latest/icons/{isim}.svg`'den fetch edildi. (İlk denemede Figma'nın Desktop Bridge local asset sunucusundan `curl` ile flattened/fill-tabanlı vektör çekilmişti — kullanıcı bunun gereksiz olduğunu, ikon isimlerinin Figma'dan okunup gerçek kaynağın her zaman lucide.dev olması gerektiğini belirtti; kod buna göre düzeltildi.)

Varsayılan `Group=3` / `Items=6` ile bölünüş **[1, 4, 1]** (kimlik / 4 aksiyon / Log Out — tam olarak Figma'daki gibi, eksik/fazla yok). `Group` prop'u avatar'da yalnız **bölüm boyutu kuralını** değiştirir: `Group ≥ 3` iken ilk/son grup her zaman 1 item alır, ortadaki grup(lar) kalan item'ları alır; `Group ≤ 2` iken diğer varyantlardaki gibi yakın-eşit bölünür.

**Her pozisyonun varsayılan Left/Right Control + Description'ı, aynı `Item N` override panelinden geçersiz kılınabilir** — `ov(i+1)` her zaman önceliklidir (`o.left/right/desc/state != null` ise pozisyonel varsayılan yerine kullanıcı değeri geçerli olur; opt de buna göre yeniden hesaplanır, eski pozisyonel `leftOpt`/`rightOpt`'ta kalınmaz). Bu, **kullanıcı feedback'ine** yanıttır: önceki sürümde Avatar tamamen ayrı bir builder'dı (Group/Items'ı hiç okumuyordu) ve "Item 1" görsel olarak 2. section'ın 1. item'ı ("Profile") gibi yanlış bir item'ı hedefliyordu, üstelik playground `Group`/`Group Label`/`Destructive Item` satırlarını gizleyip `Items`→`Actions`/`Item`→`Action N` şeklinde yeniden adlandırıyordu. Artık **hiçbir prop gizlenmiyor/yeniden adlandırılmıyor** — `ovfSecProps` avatar için de tamamen generic (`{ left:false, right:false, groupsDefault:'3' }` — Icons/Submenu/Shortcuts'ta olduğu gibi yalnız kilitli ortak Left/Right satırı gizleniyor, `Sections`'taki `groupsDefault:'2'` ile aynı mekanizma); `Item 1` = menünün gerçek 1. item'ı (kimlik), son `Item N` = gerçek son item'ı (Log Out).

### 21.6 JS davranışı

**Kök menü** — `window.btOvfMenuToggle(event, btn)` / `btOvfMenuClose(event, item)` / `btOvfMenuHide(list)`. Liste açılınca `.bt-ovf-menu__list` `document.body`'ye portal'lanır ve `position:fixed` + `btn.getBoundingClientRect()`'ten hesaplanan `top`/`right` ile konumlanır (ata elementlerin `overflow:hidden`/`transform` kurallarından bağımsız — `.bt-grid__menu` ile aynı desen). `<div role="menu">` / `<div role="menuitem">` — eski `<ul>/<li>` bırakıldı.

**Submenu** — `window.btOvfSubToggle(event, item)` (click) ve `window.btOvfSubHover(elOrSub, entering)` (hover, aç 110ms / kapat 260ms). Açılışta iç `btOvfSubOpen(item)`:

1. Gömülü `.bt-ovf-menu__list--sub`'ı `document.body`'ye taşır (parent'ın `overflow:clip`'inden kurtulur), `position:fixed` yapar.
2. `left = item.right − 1` (parent'ın sağ kenarına yaslı); `left + w > innerWidth − 4` ise **sola flip** (`left = item.left − w + 1`).
3. `top = item.top − 5` (list border + section pad ≈ 5px → 1. child item tetikleyiciyle hizalı); alta taşarsa yukarı kaydırır.
4. Parent item'a `.bt-ovf-menu__item--selected` + `aria-expanded="true"` ekler; aynı seviyedeki diğer açık submenu'leri kapatır.

Kapanışta `btOvfSubHide(sub)` önce torun submenu'leri (recursive), sonra kendini gizleyip item'ın içine geri koyar, parent'ın `--selected`'ını kaldırır. **Dışarı tıklama / scroll (capture) / bir yaprak item tıklama** → `_btOvfCloseAll()` tüm zinciri (kök + submenu'ler) toplar. `btOvfMenuClose` artık `_btOvfCloseAll`'a delege eder.

**Toggle varyantları** — `window.btOvfToggle(event, item)` (Checkboxes/Switches: satırın son `.bt-checkbox__box`/`.bt-switch__track`'ine `--checked`/`--on` toggle) ve `window.btOvfRadioPick(event, item)` (Radios: aynı liste içindeki tek radio grubu — yalnız tıklanan `--selected`). İkisi de `event.stopPropagation()`, `aria-checked` eşler, `_btOvfCloseAll`/`btOvfMenuClose` **çağırmaz** — menü açık kalır. Ayrıntı: §21.5.

### 21.7 Docs playground properties (Figma "Properties" spec + docs eklentileri)

**Master (`pgd-ovf-menu-overview`) ve 13 per-variant (`pgd-ovf-{basic|submenu|icons|shortcuts|checkboxes|checkboxes-icons|radios|radios-icons|switches|switches-icons|avatar|sections|destructive}-sec`) playground'un hepsi** aynı `props` yapısını `ovfSecProps(opts)` fonksiyonundan alır:

- **Trigger** — Button Type (Label / More).
- **Menu** (menü geneli) — [Variant — yalnız master] · **Group** (1–3: body item'ları kaç `Section`'a bölünür; sections playground'unda default 2) · **Divider** (On/Off — Off = `.bt-ovf-menu__list--no-divider`, section'lar arası `border-top` kaldırılır) · Group Label (On/Off; sections'ta default On) · Destructive Item (On/Off — Delete ayrı son section'a; Destructive playground'unda yok, intrinsic).
- **Menu Item List** (tüm item'lara birden uygulanan paylaşılan varsayılan — 2026-09-07'ye kadar "Menu Item" adındaydı, kullanıcı önerisiyle "Item" grubuyla karışmasın diye yeniden adlandırıldı) — Items (1–6) · Left Control · Right Control · Description · State. Variant left/right'ı kilitliyorsa o paylaşılan satır gizlenir (Icons → Left yok; Submenu/Shortcuts/Checkboxes/Radios/Switches → Right yok; **… Icons toggle türevleri (Checkboxes/Radios/Switches Icons) → hem Left hem Right yok**). **Dördü de (Left/Right Control, Description, State) artık gerçekten TÜM item'ları etkiler** — bkz. altındaki iki madde (2026-09-07'de düzeltilen iki ayrı bug).
- **Item** (per-item override, `props` fonksiyonu Items sayısına göre 1–N için 4'er satır üretir) — her item için `Item N · Left/Right Control · Description · State`; **dördünün de `default`'ı gerçek `'inherit'`** (state'e literal olarak `'inherit'` yazılır — somut bir kontrol tipi ASLA baked-default olarak state'e yazılmaz). Panel yine de item'ın o an GERÇEKTEN neyle render edileceğini gizlemez: `Inherit` seçeneğinin kendi **etiketi** her render'da canlı hesaplanıp parantez içinde gösterilir (`"Inherit (Icon)"` gibi) — Left/Right Control için `ovfItemAutoCtrl(variant, i, nItems, sharedLeft, sharedRight)` ile o pozisyonda gerçekten render edilecek kontrol tipi bulunur, Description/State için doğrudan paylaşılan `desc`/`state` değeri (veya Avatar'ın pozisyonel `defDesc`'i) kullanılır. Örnek: Icons sec'te `Item 1 · Left Control`'ün etiketi "Inherit (Icon)" görünür ama STATE'i `'inherit'` kalır — kullanıcı Menu Item List'in Left Control'ünü değiştirdiğinde Item 1 otomatik takip eder. Kullanıcı `Item N` satırını GERÇEKTEN somut bir değere çevirirse (örn. "Checkbox" seçerse) o satır artık paylaşılandan bağımsızlaşır — Menu Item List değiştikçe o item sabit kalır, diğerleri değişmeye devam eder. **Master'da** (`pgd-ovf-menu-overview`, `Variant` dropdown'ı canlı değişebilir) etiket her render'da `p.variant`'a göre yeniden hesaplanır — Variant değişince Item satırlarının "Inherit (X)" ipucu da otomatik güncellenir.
  - **2026-09-07 düzeltmesi #1 (Left/Right Control):** Eskiden Item N'nin properties panel `default`'ı `ovfItemAutoCtrl` ile GERÇEK ÇÖZÜLMÜŞ bir değere (örn. `'none'`) sabitleniyordu — bu, state'e kalıcı yazılan bir override'a dönüşüyordu (item ilk render'da paylaşılanla aynı görünse bile). Menu Item List'teki sonraki değişiklikler o item'a hiç ulaşmıyordu. Kök neden: state yalnızca panel açılışında `default`'tan bir kez seed edilir (`playground.js` `_pgdEnsureState`), `default` somut bir değerse o item kalıcı olarak "override edilmiş" sayılırdı.
  - **2026-09-07 düzeltmesi #2 (Description/State):** `mkItem` içindeki `eDesc`/`eState` hesaplaması paylaşılan `desc`/`state` değerini yalnızca **ilk item'a** (`isFirst`, index 0) uyguluyordu — Menu Item List'te Description=On veya State=Hover seçmek yalnızca `Item 1`'de görünüyordu, geri kalan item'lar etkilenmiyordu. Düzeltme: `isFirst` koşulu kaldırıldı, paylaşılan `desc`/`state` artık TÜM item'lara (per-item override yoksa) uygulanıyor — `eDesc = o.desc!=null ? ... : (defDesc!==undefined ? defDesc : desc)`, `eState = o.state!=null ? o.state : state`. Avatar'ın pozisyonel metni (`defDesc`: kimlik e-postası/Log Out versiyonu) ve per-item `Item N` override'ı her zaman öncelikli kalmaya devam ediyor.
- **`eLeftOpt`/`eRightOpt` seçim kuralı** (`ovfMenuHtml` → `mkItem`): pozisyonel opt (ör. Avatar'ın `{initials:'EG'}`, `{icon:_ovfIconLogOut}`, `{shortcut:'Ctrl + Q'}`) yalnızca **çözülen değer (`eLeft`/`eRight`) hâlâ o pozisyonun doğal kontrol tipiyle (`defLeft`/`defRight`) aynıysa** kullanılır — `o.left==null` kontrolü DEĞİL. Bu, hem gerçek "Inherit" akışını (`o.left==null`, `eLeft===defLeft`) hem de kullanıcının `Item N` satırında bilinçli olarak pozisyonun doğal tipiyle AYNI somut değeri seçtiği durumu aynı anda doğru sonuçlandırır (ikisinde de pozisyonel opt korunmalı); kullanıcı tipi gerçekten FARKLI bir değere çevirirse (`eLeft !== defLeft`) genel `optFor()` ikon/kısayol rotasyonuna düşer.

`Group` ve `Divider` Figma "Properties" text node'unda henüz yok — docs'a kullanıcı isteğiyle eklendi (2026-09-04). `ovfMenuHtml(p)` bunları `p.groups` / `p.divider` / `p.i{N}{left|right|desc|state}` olarak okur. CSS'te ayrı bir "divider" element/class'ı yoktur — çizgi `.bt-ovf-menu__section + .bt-ovf-menu__section { border-top }`'tur; `Divider=Off` bunu `.bt-ovf-menu__list--no-divider` modifier'ıyla iptal eder.

### 21.8 Not — eski API korundu

`.bt-ovf-menu__item-icon` (16×16 eski ikon slotu) ve `.bt-ovf-menu__divider` (`<li>` tam-genişlik çizgi) CSS'te bırakıldı ama yeni implementasyon bunları kullanmıyor — grup ayrımı artık `.bt-ovf-menu__section + .bt-ovf-menu__section` border'ıyla yapılıyor.
