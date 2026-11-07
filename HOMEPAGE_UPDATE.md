# Safshikan Cinematic Flight Update

Cumulative local-preview overlay for your existing Safshikan project. Includes the homepage and full-page navy/cyan theme, responsive sections, pointer lighting/tilt, scroll reveals and the new flight carousel.

## Install (Windows)
1. Stop your preview terminal with Ctrl+C.
2. Make a backup copy of Safshikan-Preview.
3. Extract this ZIP into a separate folder.
4. Copy everything INSIDE `files` into your existing Safshikan-Preview folder. Choose Replace files. Keep all other project files and assets.
5. In the project terminal run `npm.cmd run dev`. If dependencies were never installed, run `npm.cmd ci` first.
6. Open Vite's printed Local URL and press Ctrl+F5.

This is an update, not a standalone project. No GitHub login is needed. No deployment or remote Git push was performed. Restore your backup to revert.

## New in this version
- Four hero scenes: Sentinel Vigilance Pro, AGRON 10L, 30L and 50L. Automatic 6.5-second rotation with a smooth 1.65-second crossfade.
- Previous/next, individual scene selectors and pause/resume. Manual selection pauses playback. Playback pauses while controls are hovered, hero links have keyboard focus, the hero is offscreen, or the browser tab is hidden. Reduced-motion preferences disable autoplay and scene animation.
- Three newly generated agricultural flight visuals, plus the existing Sentinel scene. These are illustrative artwork, not documentary product photographs. AI imagery may differ in small details.
- Original-photo / Cinematic-view buttons on those four product cards. Technical panels keep original product photographs.
- Corrected the AGRON 50L image mapping to the repository's dedicated agron_z50p.jpeg rather than the 30L photograph.
- Other nine models retain original photographs. Some generation attempts were blocked by the image tool's safety restriction; this package does not contain cinematic replacements for every model.
- All 13 product records retained. Only the 50L source image path changed; technical data was compared against the previous full-theme package. Existing claims are not independently verified.
- No dependency changes in this final pass. This cumulative package includes the previous lockfile and theme changes.

## Checks
Production build passed. Desktop carousel controls, automatic rotation, agriculture filter (3 cards), All filter (13 cards), original-image switch and agriculture detail dialog checked. Mobile menu checked; 320/390/768px frames had no document horizontal overflow. No broken loaded images or application-origin console errors observed. Reduced-motion handling is implemented; OS emulation was unavailable.

## Existing limitations
Enquiry forms are preview-only: they do not send requests. Direct email/telephone/WhatsApp links remain available. Existing footer policy placeholders remain as in the source. This update does not establish a backend or publish the site.

## Editing
src/components/Hero.jsx: slideshow.
src/components/ProductVisual.jsx: cinematic/original photo mapping.
src/flight-theme.css: new scene/control styles.
src/full-theme.css and src/hooks/useSiteMotion.js: full-page styling and interactive motion.
src/App.jsx: retained catalogue and page content.
