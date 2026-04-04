# Stamping Across Taipei — Improvement Plan

## 1. Clean Up Dead / Scaffold Code

**Problem:** `App2.jsx` and `App2.css` are leftover Vite template files that are never imported. A stale `console.log(stamp01)` sits in `App.jsx`, and large commented-out blocks clutter the file.

**Execution:**
- Delete `App2.jsx` and `App2.css`.
- Remove the `console.log(stamp01)` call and the unused `stamp01` import (it's only used inside the `Header` component via the same variable—keep the import there or consolidate).
- Remove the commented-out JSX (`{/* {images.map(...)} */}`) and the block comment explaining the array shape—move that to a doc or keep it nowhere.
- Remove the unused `useState` import in `App.jsx`.

---

## 2. Fix Invalid HTML Elements

**Problem:** `<p1>` and `<p2>` are not valid HTML elements. React will render them as custom elements with no semantic meaning, no accessibility, and the CSS selectors (`p1`, `p2`) target element names which is fragile.

**Execution:**
- Replace `<p1>` with `<p className="subtitle">` (or an `<a>` if "skip to stamp catalogue" should be a link).
- Replace `<p2>` with `<p className="description">`.
- Update `App.css` selectors from `p1` / `p2` to `.subtitle` / `.description`.

---

## 3. Use `className` Consistently (not `class`)

**Problem:** JSX uses `class` in many places (`class="header-container"`, `class="Stat-container"`, etc.). React expects `className`. This currently works but throws console warnings and will break in stricter environments.

**Execution:**
- Find-and-replace every `class=` with `className=` across all JSX files.

---

## 4. Extract Components Into Separate Files

**Problem:** `Header`, `Intro`, and `Stat1` are all defined in `App.jsx`. As the site grows (stamp catalogue, individual stamp pages, stats), this will become unmanageable.

**Execution:**
- Create `src/components/` directory.
- Move `Header` → `src/components/Header.jsx`, `Intro` → `src/components/Intro.jsx`, `Stat1` → `src/components/Stat1.jsx`.
- Import them in `App.jsx`.

---

## 5. Build the Stamp Catalogue

**Problem:** The glob import (`import.meta.glob('./assets/stamps/*')`) already loads all 91 stamp images but the rendering is commented out. This is the core feature of the site.

**Execution:**
- Create a `src/components/StampCatalogue.jsx` component.
- Render the `images` array as a responsive grid of stamp thumbnails.
- Add `alt` text per stamp (even just `"Stamp 01"` derived from the filename).
- Consider lazy-loading (`loading="lazy"`) since there are 91 images.
- Add a click-to-enlarge modal or lightbox for viewing stamps full-size.

---

## 6. Add Routing

**Problem:** The site is a single component with no navigation. The header says "skip to stamp catalogue" but there's nothing to skip to.

**Execution:**
- Install `react-router-dom`.
- Create routes: `/` (landing / hero), `/stamps` (catalogue), `/stamps/:id` (individual stamp detail — optional).
- Wire the "skip to stamp catalogue" text as a `<Link to="/stamps">` or an anchor `<a href="#catalogue">`.

---

## 7. Make It Responsive

**Problem:** Font sizes are hardcoded (`100px`, `80px`), the `#root` has a fixed `1126px` width, and `.image1` uses absolute `px` positioning. This will look broken on mobile.

**Execution:**
- Switch `h1`/`h2` font sizes to `clamp()` values, e.g. `clamp(2.5rem, 8vw, 6.25rem)`.
- Replace fixed `width: 1126px` on `#root` with a max-width and fluid padding.
- Use CSS Grid or Flexbox for the stamp grid so it reflows naturally.
- Add media queries for the header/sticker layout on smaller screens.

---

## 8. Improve CSS Architecture

**Problem:** CSS naming is inconsistent (`.title-container` vs `.Stat-container`), styles for `h1`/`h2`/`h3`/`p` are global which will collide as the app grows, and `index.css` has leftover selectors for elements (`hx1`, `hx2`) that don't exist in the current markup.

**Execution:**
- Adopt a consistent naming convention (e.g. BEM or just all-lowercase-kebab).
- Scope component styles with CSS Modules (`App.module.css`) or keep using plain CSS but namespace with parent selectors.
- Remove dead selectors (`hx1`, `hx2`, `code`, `.counter` in `index.css`).
- Move global resets and CSS custom properties into `index.css`; keep component styles in their own files.

---

## 9. Add Metadata & SEO Basics

**Problem:** The page title is the raw project name `stamping-across-taipei`. There's no meta description, Open Graph tags, or social preview image.

**Execution:**
- Update `<title>` in `index.html` to something human-friendly: `"Stamping Across Taipei in 5 Days"`.
- Add `<meta name="description" content="...">`.
- Add OG tags (`og:title`, `og:description`, `og:image`) for social sharing.
- Generate a social preview image from one of the stamp assets.

---

## 10. Optimise Image Assets

**Problem:** 91 PNG stamp images are imported eagerly at build time. Depending on file sizes this could result in a very large bundle.

**Execution:**
- Measure current image sizes (`du -sh src/assets/stamps/`).
- Convert PNGs to WebP (or AVIF) for smaller file sizes, with PNG fallback.
- Use `loading="lazy"` on `<img>` tags so off-screen stamps don't block initial paint.
- Consider a thumbnail + full-size approach: small thumbnails for the grid, load full resolution on click.

---

## 11. Add `.DS_Store` to `.gitignore`

**Problem:** macOS `.DS_Store` files are committed inside `src/` and `src/assets/`.

**Execution:**
- Add `.DS_Store` to `.gitignore` (it's already listed, but the existing files need to be removed from tracking).
- Run `git rm --cached` on the tracked `.DS_Store` files.

---

## Priority Order

| Priority | Item | Effort |
|----------|------|--------|
| 🔴 P0 | #2 Fix invalid HTML elements | Small |
| 🔴 P0 | #3 Fix `class` → `className` | Small |
| 🟠 P1 | #1 Remove dead code | Small |
| 🟠 P1 | #5 Build stamp catalogue | Medium |
| 🟡 P2 | #4 Extract components | Small |
| 🟡 P2 | #7 Make it responsive | Medium |
| 🟡 P2 | #8 Fix CSS architecture | Medium |
| 🟢 P3 | #6 Add routing | Medium |
| 🟢 P3 | #9 Metadata & SEO | Small |
| 🟢 P3 | #10 Optimise images | Medium |
| 🟢 P3 | #11 Clean `.DS_Store` | Tiny |
