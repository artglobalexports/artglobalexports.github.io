Project code context
--------------------

Overview
--------
- Static HTML site based on the HTML5 UP "Verti" theme.
- Canonical styles: Sass at `assets/sass/main.scss` (imports partials in `assets/sass/libs/`).
- Compiled CSS output: `assets/css/main.css` (do not edit compiled CSS unless temporarily needed).
- JavaScript: jQuery-based helpers in `assets/js/` (notably `util.js` and `main.js`).

Key files
---------
- [index.html](index.html) and other pages (e.g. [media.html](media.html)) — static pages using the theme markup.
- [assets/sass/main.scss](assets/sass/main.scss) — main SCSS entry; imports `_vars.scss`, `_mixins.scss`, `_breakpoints.scss`, etc.
- [assets/css/main.css](assets/css/main.css) — compiled stylesheet produced from the SCSS.
- [assets/js/main.js](assets/js/main.js) — theme initialization (breakpoints, nav panel) + media lightbox/zoom code used on the media gallery.
- [assets/js/util.js](assets/js/util.js) — helpers: `$.fn.navList()`, `$.fn.panel()`, and other polyfills/utilities.

Media page notes
----------------
- [media.html](media.html) uses a three-column layout and the `.media-gallery` grid of thumbnail links.
- Thumbnails use markup like `<a class="image fit"><img src="..."/></a>` and are handled by the zoom lightbox in `assets/js/main.js`.

Build / dev notes
-----------------
- To regenerate `assets/css/main.css`, run a Sass compiler locally. Example command (Sass CLI):

```bash
sass assets/sass/main.scss assets/css/main.css --no-source-map --style=expanded
```

- No package.json/build pipeline present; use local Sass CLI or editor plugin.

Behavioral notes
----------------
- Mobile nav: `#nav` is transformed into `#navPanel` by `$.fn.navList()` in `util.js` and initialized in `main.js`.
- Panel visibility is controlled by toggling the `navPanel-visible` class on the `body` element.
- Lightbox: `assets/js/main.js` implements a zoom-from-thumb overlay (`#zoom-overlay`) and handles ESC/resize/close interactions.

If you want, I can:
- run a quick checks (link verification, missing images),
- add a small README with local dev steps, or
- add accessibility tweaks to the media gallery.
