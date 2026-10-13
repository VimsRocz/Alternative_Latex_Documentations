# OpenTeX — free browser-based LaTeX editor (beta)

A public, account-free, browser-first editor, maintained in the `opentex-webapp` branch of Alternative_Latex_Documentations. The existing main branch remains unchanged.

## Features

- LaTeX editing, multi-file projects, simple project explorer and templates for articles, CVs, theses, letters and Beamer.
- pdfLaTeX, XeLaTeX and LuaLaTeX compilation **inside the visitor's browser** using TeXlyre BusyTeX WASM (TeX Live 2026).
- PDF preview, compilation diagnostics, PDF and .tex download.
- ZIP import/export, support for .tex, .bib, .sty, .cls and binary assets.
- Local browser autosave for text files; all project assets included in ZIP export.
- No tracking, API key, accounts, paid backend or server-side access to source documents.

## Development

```bash
cd webapp
npm install
npm run assets
npm run dev
```

The first asset download is **large** (approximately 500 MB compressed), and the browser initially fetches a large TeX Live WASM/data bundle. Keep available storage and bandwidth in mind.

## Build & hosting

```bash
cd webapp
npm install
npm run build:render
```

For Render Static Site configure:

- Repository: `https://github.com/VimsRocz/Alternative_Latex_Documentations`
- Branch: `opentex-webapp`
- Build command: `cd webapp && npm install && npm run build:render`
- Publish directory: `webapp/dist`

The site should be hosted over HTTPS for browser worker and WASM support.

## Privacy & limitations

All compilation is local to the client browser. Some TeX packages, fonts and assets may be requested from remote package servers; the visitor needs an internet connection to first obtain the engine. Text-only projects autosave in localStorage on the current browser. Binary uploads are **not** persisted across refreshes, so export a ZIP before leaving the page. Not all shell-escape or native TeX extensions are supported. It does **not** yet provide server-side collaboration, user login, Git synchronization, comment threads or simultaneous editing.

## Software license

The browser app is offered under **AGPL-3.0-or-later** because it includes `texlyre-busytex`, which has the same license. See https://github.com/TeXlyre/texlyre-busytex/blob/main/LICENSE. The existing MIT-licensed repository documentation and assets outside `webapp/` retain their respective licenses. The TeXlyre project and its contributors are credited here; OpenTeX is not an official TeXlyre or Overleaf service.

This is a functional public beta, not a production-hardened equivalent of Overleaf. Contributions are welcome.
