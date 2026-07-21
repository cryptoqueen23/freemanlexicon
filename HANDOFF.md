# Freeman Lexicon Handoff — 2026-07-21

## What This Is

A single-file static site (`index.html` — Bootstrap 5 via CDN, Google Fonts, no build step, no backend) that searches across seven public-domain reference sources: Webster's 1913, Black's Law 1910, UCC, U.S. Constitution, Declaration of Independence, Texas Constitution, and Legal Literacy Guides. Also has Quiz Mode, Compare Mode (side-by-side lookup across all sources), and an A–Z browse filter.

Repo: `cryptoqueen23/freemanlexicon` — local at `C:\Users\insur\Desktop\freemanlexicon`.

## Hosting Status — NOT LIVE

No public URL exists yet.
- GitHub Pages is **not enabled** on the repo.
- `freedomsfighter.com` was confirmed as the intended domain (root domain, not a subdomain — `waves.freedomsfighter.com` is already used by True Wolf Waves, so this would be the bare root). Nothing has been configured yet: no `CNAME` file in the repo, no DNS record pointed at GitHub Pages, and Pages itself isn't turned on.
- Next step to go live: enable Pages (Settings → Pages → deploy from `main`), add a `CNAME` file containing `freedomsfighter.com`, and point the domain's DNS (A records to GitHub's IPs, or ALIAS/ANAME to `cryptoqueen23.github.io`) at it.

## What Was Done This Session

1. **Pulled remote work already in place** — `constitution-data.js`, `founding-state-data.js` (Declaration + Texas Constitution), and `party-platform-data.js` had been added on GitHub (by Claude-on-web) before this session started; pulled them into the local clone.
2. **Full red/white/blue restyle** — replaced the old sepia/brown palette with navy/red/cool-white across every source's accent color. Pure CSS swap, no markup/JS/id changes. Verified WCAG AA contrast (4.5:1) on every new color pair and darkened a few that fell short.
3. **Copy pass** — reworded hero, "Why Historical Sources?", donation section, and footer to lead with authority/history instead of repeating "public domain" everywhere. Dropped the "Public Domain" badge and the navbar tagline.
4. **Phoenix Securitas link** — footer now reads "Sponsored by Phoenix Securitas" and links directly to `https://www.phoenixsecuritas.com/` (was `tree.phoenixsecuritas.com`).
5. **Eagle logo** — cropped a circular badge (`logo-eagle.png`) from user-supplied artwork, added to the navbar with a red ring border.
6. **Hero background video** (`hero-bg.mp4`) — looping flag footage behind the hero text. User-supplied source was 2560×1440 @72fps, 9.2MB; compressed via ffmpeg to 1280×720 @30fps, audio stripped, CRF 28 → 907KB, visually identical at the opacity it's shown at. Opacity/overlay gradient tuned so the flag is clearly visible on the right/empty side of the hero while staying dense behind the text on the left for contrast. Hidden entirely under `prefers-reduced-motion: reduce`.
7. **Mobile fix** — search input + Compare + Quiz Mode buttons now stack on screens ≤576px instead of a cramped inline row.

All of the above is committed and pushed to `origin/main` (latest: `7cf0828`).

## Known Loose End

**`party-platform-data.js` is not wired into the site.** The file exists (founding-era party platform texts — 1840 Democratic, 1856/1860 Republican conventions, sourced from The American Presidency Project, public domain) but there's no `<script>` tag loading it in `index.html`, no menu entry, and no handling in `normalized()`/`buildFilterBar()`/`renderCompare()`. To wire it in, follow the exact pattern used for `const`/`decl`/`tx` in `index.html`:
- `<script src="party-platform-data.js"></script>`
- A menu button + `SOURCE_LABELS` entry
- A branch in `normalized()`, `updateTabs()`, `buildFilterBar()` (probably filter by `party` or `side`), and the entry-card rendering `cardClass` switch
- Decide whether it belongs in Compare Mode too

Not done yet because it hasn't been explicitly requested — flag this to the user before spending time on it, since "Democratic vs. Republican historical platforms" is editorial territory worth confirming intent on.

## Key Files

| File | Purpose |
|---|---|
| `index.html` | Entire site — markup, CSS, and JS all inline |
| `webster-data.js` | `WEBSTER_1913` — ~98,800 entries |
| `law-data.js` | `BLACKS_LAW_1910` |
| `ucc-data.js` | `UCC_SECTIONS` |
| `literacy-data.js` | `LITERACY_GUIDES` |
| `constitution-data.js` | `CONSTITUTION_SECTIONS` |
| `founding-state-data.js` | `DECLARATION_SECTIONS` + `TEXAS_CONSTITUTION_SECTIONS` |
| `party-platform-data.js` | `PARTY_PLATFORM_SECTIONS` — **unwired, see above** |
| `logo-eagle.png` | Navbar logo |
| `hero-bg.mp4` | Hero background video (compressed) |

## Testing Notes

No test suite — this is a static site. To preview locally: `python -m http.server <port>` from the repo directory, then open in a browser. Headless-Chrome CLI flags like `--window-size` do **not** reliably set the actual CSS viewport for screenshot testing in this environment (it silently rendered at `clientWidth=500` regardless of the requested size) — use `puppeteer-core` with `page.setViewport()` pointed at the system Chrome install instead if verifying responsive breakpoints again. ffmpeg is now installed system-wide via winget (`Gyan.FFmpeg`) if further video work is needed.
