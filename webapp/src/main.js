import { BusyTexRunner, PdfLatex, XeLatex, LuaLatex } from 'texlyre-busytex';
import { zipSync, unzipSync, strToU8, strFromU8 } from 'fflate';
import './style.css';

const $ = (id) => document.getElementById(id);
const B = String.fromCharCode(92);
const t = (lines) => lines.join('\n');
const c = (name) => B + name;
const templates = {
  article: () => t([
    c('documentclass') + '[11pt,a4paper]{article}',
    c('usepackage') + '[utf8]{inputenc}',
    c('usepackage') + '{amsmath,amssymb}',
    c('usepackage') + '[margin=2.5cm]{geometry}',
    c('title') + '{A New Research Article}',
    c('author') + '{Your Name}',
    c('date') + '{' + c('today') + '}',
    '',
    c('begin') + '{document}',
    c('maketitle'),
    c('begin') + '{abstract}',
    'Write a clear summary of your research here.',
    c('end') + '{abstract}',
    c('section') + '{Introduction}',
    'Start writing your paper. Here is an equation:',
    c('begin') + '{equation}',
    'E = mc^2',
    c('end') + '{equation}',
    c('section') + '{Methods}',
    'Describe your experimental or theoretical methods.',
    c('section') + '{Conclusion}',
    'Summarize the key findings and next steps.',
    c('end') + '{document}', ''
  ]),
  resume: () => t([
    c('documentclass') + '[10pt,a4paper]{article}',
    c('usepackage') + '[margin=1.7cm]{geometry}',
    c('usepackage') + '{enumitem}',
    c('setlist') + '{nosep,leftmargin=*}',
    c('pagestyle') + '{empty}',
    c('begin') + '{document}',
    c('begin') + '{center}',
    '{' + c('LARGE') + c('bfseries') + ' Your Name}',
    c('smallskip'),
    'Email: name@example.com ' + c('textbar') + ' City, Country',
    c('end') + '{center}',
    c('section*') + '{Profile}',
    'Engineer or researcher with experience in your field.',
    c('section*') + '{Experience}',
    c('textbf') + '{Role Title} ' + c('hfill') + ' 2024--Present',
    c('begin') + '{itemize}',
    c('item') + ' Describe an accomplishment with measurable impact.',
    c('item') + ' Explain a key project or technical responsibility.',
    c('end') + '{itemize}',
    c('section*') + '{Education}',
    c('textbf') + '{Degree} ' + c('hfill') + ' 2024',
    '',
    c('section*') + '{Skills}',
    'LaTeX, Python, research, technical writing',
    c('end') + '{document}', ''
  ]),
  thesis: () => t([
    c('documentclass') + '[12pt,a4paper]{report}',
    c('usepackage') + '{amsmath,amssymb}',
    c('usepackage') + '[margin=3cm]{geometry}',
    c('title') + '{Thesis Title}',
    c('author') + '{Your Name}',
    c('date') + '{' + c('today') + '}',
    c('begin') + '{document}',
    c('maketitle'),
    c('tableofcontents'),
    c('chapter') + '{Introduction}',
    'Introduce the problem, motivation and aims.',
    c('chapter') + '{Background}',
    'Review relevant literature and theoretical foundations.',
    c('chapter') + '{Methodology}',
    'Describe your methodology.',
    c('chapter') + '{Results}',
    'Present the results.',
    c('chapter') + '{Conclusion}',
    'Summarize your contribution.',
    c('end') + '{document}', ''
  ]),
  beamer: () => t([
    c('documentclass') + '{beamer}',
    c('usetheme') + '{default}',
    c('title') + '{Research Presentation}',
    c('author') + '{Your Name}',
    c('date') + '{' + c('today') + '}',
    c('begin') + '{document}',
    c('frame') + '{' + c('titlepage') + '}',
    c('begin') + '{frame}{Motivation}',
    c('begin') + '{itemize}',
    c('item') + ' Research question',
    c('item') + ' Why it matters',
    c('end') + '{itemize}',
    c('end') + '{frame}',
    c('begin') + '{frame}{Key result}',
    c('[') + 'E=mc^2' + c(']'),
    c('end') + '{frame}',
    c('end') + '{document}', ''
  ]),
  letter: () => t([
    c('documentclass') + '[11pt,a4paper]{letter}',
    c('usepackage') + '[margin=2.5cm]{geometry}',
    c('signature') + '{Your Name}',
    c('address') + '{Your Name ' + B + B + ' Your City}',
    c('begin') + '{document}',
    c('begin') + '{letter}{Recipient Name ' + B + B + ' Company}',
    c('opening') + '{Dear Sir or Madam,}',
    'Write your letter here.',
    c('closing') + '{Sincerely,}',
    c('end') + '{letter}',
    c('end') + '{document}', ''
  ])
};

const LOCAL_KEY = 'opentex-v1-project';
const THEME_KEY = 'opentex-v1-theme';
let project = { name: 'My LaTeX project', active: 'main.tex', engine: 'pdflatex', files: { 'main.tex': templates.article() } };
const binaryFiles = new Map();
let runner = null;
let currentPdfUrl = null;
let currentPdf = null;
let compiling = false;
let showLogs = false;
let saveTimer = null;
let toastTimer = null;

function notify(message) {
  const node = $('toast');
  node.textContent = message;
  node.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => node.classList.remove('show'), 3700);
}
function updateStatus(message, tone = 'ok') {
  $('statusText').textContent = message;
  $('statusIcon').style.color = tone === 'error' ? '#ff8e91' : tone === 'busy' ? '#e9c97b' : '';
}
function safePath(raw) {
  const name = String(raw).replaceAll('\\', '/').replace(/^\.\/+/, '');
  if (!name || name.startsWith('/') || name.includes('..') || name.includes('\0')) throw Error('Unsafe file name');
  return name;
}
function isTextFile(name) { return /\.(tex|bib|sty|cls|txt|md|def|cfg)$/i.test(name); }
function saveLocal() {
  $('savedLabel').textContent = 'Saving…';
  clearTimeout(saveTimer);
  saveTimer = setTimeout(() => {
    try {
      localStorage.setItem(LOCAL_KEY, JSON.stringify(project));
      $('savedLabel').textContent = 'Saved locally';
    } catch (e) {
      $('savedLabel').textContent = 'Storage unavailable';
      notify('Local storage is full. Download a project ZIP to back up your files.');
    }
  }, 350);
}
function loadLocal() {
  try {
    const saved = JSON.parse(localStorage.getItem(LOCAL_KEY) || 'null');
    if (saved && typeof saved.name === 'string' && saved.files && typeof saved.files['main.tex'] === 'string') {
      project = saved;
      if (!project.files[project.active]) project.active = 'main.tex';
      if (!['pdflatex','xelatex','lualatex'].includes(project.engine)) project.engine = 'pdflatex';
    }
  } catch (e) { console.warn('Could not restore local project', e); }
}
function persistActiveEditor() {
  if (typeof project.files[project.active] === 'string') project.files[project.active] = $('sourceEditor').value;
}
function renderFiles() {
  const list = $('fileList');
  list.replaceChildren();
  const all = [...Object.keys(project.files), ...binaryFiles.keys()];
  for (const name of all) {
    const row = document.createElement('button');
    row.type = 'button';
    row.className = 'file-row' + (name === project.active ? ' active' : '');
    row.title = name;
    const left = document.createElement('span');
    left.className = 'file-info';
    const kind = document.createElement('span');
    kind.className = 'file-kind';
    kind.textContent = name.split('.').pop().slice(0, 3).toUpperCase();
    const caption = document.createElement('span');
    caption.textContent = name;
    left.append(kind, caption);
    row.append(left);
    if (name !== 'main.tex') {
      const del = document.createElement('span');
      del.className = 'file-del';
      del.title = 'Remove file';
      del.textContent = '×';
      del.onclick = (ev) => {
        ev.stopPropagation();
        if (!confirm('Delete ' + name + ' from this project?')) return;
        delete project.files[name];
        binaryFiles.delete(name);
        if (project.active === name) switchFile('main.tex');
        else { renderFiles(); saveLocal(); }
      };
      row.append(del);
    }
    row.onclick = () => {
      if (binaryFiles.has(name)) { notify('Binary asset: ' + name + ' (included when compiling or exporting)'); return; }
      switchFile(name);
    };
    list.append(row);
  }
}
function updateStats() {
  const value = $('sourceEditor').value;
  const lines = value.split('\n').length;
  $('editorStats').textContent = lines + ' lines · ' + value.length.toLocaleString() + ' characters';
  const visibleLines = Math.min(lines + 1, 5000);
  $('lineGutter').textContent = Array.from({length: visibleLines}, (_, i) => i + 1).join('\n');
  $('lineGutter').scrollTop = $('sourceEditor').scrollTop;
}
function switchFile(name) {
  if (name !== project.active) persistActiveEditor();
  project.active = name;
  $('sourceEditor').value = project.files[name] || '';
  $('activeFilename').textContent = name;
  $('changeIndicator').style.visibility = 'hidden';
  $('sourceEditor').scrollTop = 0;
  updateStats();
  renderFiles();
  saveLocal();
}
function newTemplate(kind) {
  if (!kind || !templates[kind]) return;
  persistActiveEditor();
  if (!confirm('Start a new ' + kind + ' template? Existing text files in this browser project will be replaced. Export ZIP first to keep a backup.')) return;
  project.files = { 'main.tex': templates[kind]() };
  project.active = 'main.tex';
  project.name = ({article:'Research article',resume:'My CV',thesis:'My thesis',beamer:'Presentation',letter:'Letter'})[kind];
  binaryFiles.clear();
  $('projectName').value = project.name;
  switchFile('main.tex');
  resetPreview();
  notify('Loaded ' + kind + ' template.');
}
function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = filename;
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 8000);
}
function filenameBase() { return (project.name || 'opentex-project').replace(/[^a-z0-9_-]+/gi, '-').replace(/^-|-$/g, '').slice(0, 50) || 'opentex'; }
function exportTex() {
  persistActiveEditor();
  downloadBlob(new Blob([project.files[project.active]], {type:'text/plain;charset=utf-8'}), project.active);
  notify('Exported ' + project.active);
}
function exportZip() {
  persistActiveEditor();
  const bundle = {};
  for (const [name, value] of Object.entries(project.files)) bundle[name] = strToU8(value);
  for (const [name, bytes] of binaryFiles) bundle[name] = bytes;
  const zipped = zipSync(bundle, {level: 6});
  downloadBlob(new Blob([zipped], {type:'application/zip'}), filenameBase() + '.zip');
  notify('Project ZIP downloaded. Keep it as your backup.');
}
async function importFiles(fileList) {
  let total = 0;
  const addFile = (name, bytes) => {
    try {
      name = safePath(name);
      if (name.endsWith('/')) return;
      if (bytes.length > 20 * 1024 * 1024) { notify('Skipped large file: ' + name); return; }
      if (isTextFile(name)) project.files[name] = strFromU8(bytes);
      else binaryFiles.set(name, bytes);
      total++;
    } catch (e) { notify('Skipped invalid filename.'); }
  };
  for (const file of fileList) {
    if (file.size > 35 * 1024 * 1024) { notify('Skipped file over 35 MB: ' + file.name); continue; }
    const bytes = new Uint8Array(await file.arrayBuffer());
    if (/\.zip$/i.test(file.name)) {
      try {
        const entries = unzipSync(bytes);
        for (const [name, data] of Object.entries(entries).slice(0, 150)) addFile(name, data);
      } catch (e) { notify('Could not read ZIP: ' + file.name); }
    } else addFile(file.name, bytes);
  }
  if (total > 0) {
    if (project.files['main.tex']) switchFile('main.tex');
    else {
      const firstTex = Object.keys(project.files).find(n => /\.tex$/i.test(n));
      if (firstTex) project.files['main.tex'] = project.files[firstTex];
      switchFile('main.tex');
    }
    notify('Imported ' + total + ' file(s).');
  }
}
function resetPreview() {
  if (currentPdfUrl) URL.revokeObjectURL(currentPdfUrl);
  currentPdfUrl = null;
  currentPdf = null;
  $('pdfFrame').hidden = true;
  $('pdfFrame').removeAttribute('src');
  $('logOutput').hidden = true;
  $('emptyPreview').hidden = false;
  $('downloadPdfButton').disabled = true;
  updateStatus('Ready to compile');
}
async function compilePdf() {
  if (compiling) return;
  persistActiveEditor();
  compiling = true;
  $('compileButton').disabled = true;
  $('compileButton').textContent = '◌ Compiling…';
  updateStatus('Preparing the TeX engine and packages…', 'busy');
  try {
    if (!runner) {
      runner = new BusyTexRunner({
        busytexBasePath: '/core/busytex',
        preloadDataPackages: ['/core/busytex/texlive-recommended.js'],
        verbose: false
      });
      await runner.initialize(true);
    }
    updateStatus('Compiling document locally…', 'busy');
    const engines = {pdflatex: PdfLatex, xelatex: XeLatex, lualatex: LuaLatex};
    const compiler = new engines[project.engine](runner);
    const attached = Object.entries(project.files).filter(([name]) => name !== 'main.tex').map(([path,content]) => ({path,content}));
    for (const [path, content] of binaryFiles) attached.push({path,content});
    const outcome = await compiler.compile({
      input: project.files['main.tex'],
      additionalFiles: attached,
      bibtex: Object.keys(project.files).some(n => n.endsWith('.bib')),
      rerun: true,
      verbose: 'info',
      shellEscape: false
    });
    $('logOutput').textContent = (outcome.log || outcome.logs?.map(x=>String(x)).join('\n') || 'No compilation log returned.');
    if (outcome.success && outcome.pdf?.length) {
      if (currentPdfUrl) URL.revokeObjectURL(currentPdfUrl);
      currentPdf = new Blob([outcome.pdf], {type:'application/pdf'});
      currentPdfUrl = URL.createObjectURL(currentPdf);
      $('pdfFrame').src = currentPdfUrl + '#toolbar=1&navpanes=0';
      $('downloadPdfButton').disabled = false;
      showLogs = false;
      syncPreview();
      updateStatus('Compiled successfully · PDF ready');
      notify('PDF compiled successfully!');
    } else {
      showLogs = true; syncPreview();
      updateStatus('Compilation failed · inspect log', 'error');
      notify('LaTeX compilation error — check the logs for details.');
    }
  } catch (e) {
    console.error(e);
    $('logOutput').textContent = (e && e.stack) || String(e);
    showLogs = true;
    syncPreview();
    updateStatus('Compiler unavailable or failed · view logs', 'error');
    notify('Compiler problem: ' + (e?.message || String(e)).slice(0,120));
    try { runner?.terminate(); } catch (_) {}
    runner = null;
  } finally {
    compiling = false;
    $('compileButton').disabled = false;
    $('compileButton').textContent = '▶ Compile PDF';
    saveLocal();
  }
}
function syncPreview() {
  $('logOutput').hidden = !showLogs;
  $('pdfFrame').hidden = showLogs || !currentPdf;
  $('emptyPreview').hidden = showLogs || !!currentPdf;
  $('toggleLogsButton').textContent = showLogs ? 'Preview' : 'Logs';
}
function addFile() {
  const raw = prompt('File name (example: chapter1.tex or references.bib)');
  if (!raw) return;
  try {
    const name = safePath(raw);
    if (project.files[name] || binaryFiles.has(name)) { notify('That file already exists.'); return; }
    if (!isTextFile(name)) { notify('Use .tex, .bib, .sty, .cls or .txt for new text files.'); return; }
    project.files[name] = '';
    switchFile(name);
    $('sourceEditor').focus();
  } catch (e) { notify('Invalid file name.'); }
}

loadLocal();
$('projectName').value = project.name;
$('engineSelect').value = project.engine;
$('sourceEditor').value = project.files[project.active] || '';
if (localStorage.getItem(THEME_KEY) === 'light') document.body.classList.add('light');
$('activeFilename').textContent = project.active;
renderFiles();
updateStats();

$('sourceEditor').addEventListener('input', () => {
  project.files[project.active] = $('sourceEditor').value;
  $('changeIndicator').style.visibility = 'visible';
  updateStats();
  saveLocal();
});
$('sourceEditor').addEventListener('scroll', () => { $('lineGutter').scrollTop = $('sourceEditor').scrollTop; });
$('sourceEditor').addEventListener('keydown', (event) => {
  if (event.key === 'Tab') {
    event.preventDefault();
    const input = $('sourceEditor'), start = input.selectionStart, end = input.selectionEnd;
    input.setRangeText('  ', start, end, 'end');
    input.dispatchEvent(new Event('input'));
  }
  if ((event.ctrlKey || event.metaKey) && event.key === 'Enter') { event.preventDefault(); compilePdf(); }
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 's') { event.preventDefault(); exportTex(); }
});
$('projectName').addEventListener('input', () => { project.name = $('projectName').value; saveLocal(); });
$('engineSelect').addEventListener('change', () => { project.engine = $('engineSelect').value; saveLocal(); });
$('templateSelect').addEventListener('change', () => { newTemplate($('templateSelect').value); $('templateSelect').value = ''; });
$('themeButton').onclick = () => { document.body.classList.toggle('light'); localStorage.setItem(THEME_KEY, document.body.classList.contains('light') ? 'light' : 'dark'); };
$('addFileButton').onclick = addFile;
$('importButton').onclick = () => $('uploadInput').click();
$('uploadInput').addEventListener('change', async () => { await importFiles($('uploadInput').files); $('uploadInput').value = ''; });
$('downloadTexButton').onclick = exportTex;
$('exportButton').onclick = exportZip;
$('compileButton').onclick = compilePdf;
$('emptyCompileButton').onclick = compilePdf;
$('downloadPdfButton').onclick = () => { if (currentPdf) downloadBlob(currentPdf, filenameBase() + '.pdf'); };
$('toggleLogsButton').onclick = () => { showLogs = !showLogs; syncPreview(); };
window.addEventListener('beforeunload', () => { persistActiveEditor(); try { localStorage.setItem(LOCAL_KEY, JSON.stringify(project)); } catch (_) {} });
