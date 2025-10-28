# Troubleshooting Guide

Common LaTeX problems and their solutions.

## Compilation Errors

### 1. Undefined Control Sequence

**Error Message**:
```
! Undefined control sequence.
l.10 \mycommand
```

**Causes**:
- Typo in command name
- Missing package that defines the command
- Command not defined

**Solutions**:
- Check spelling: `\textbf` not `\textbold`
- Load required package: `\usepackage{package-name}`
- Define custom commands before use

**Example**:
```latex
% Wrong
\textbold{text}

% Correct
\textbf{text}
```

---

### 2. Missing $ Inserted

**Error Message**:
```
! Missing $ inserted.
```

**Causes**:
- Math symbols used outside math mode
- Special characters like `_` or `^` in normal text

**Solutions**:
- Wrap math in `$...$` or `\[...\]`
- Escape special characters: `\_`, `\^`

**Example**:
```latex
% Wrong
The variable x_i is important.

% Correct
The variable $x_i$ is important.
% or
The variable x\_i is important.
```

---

### 3. Missing \begin{document}

**Error Message**:
```
! LaTeX Error: Missing \begin{document}.
```

**Causes**:
- Text before `\begin{document}`
- Special character in preamble

**Solutions**:
- Move all content after `\begin{document}`
- Check for stray characters in preamble

---

### 4. Environment Undefined

**Error Message**:
```
! LaTeX Error: Environment foo undefined.
```

**Causes**:
- Typo in environment name
- Missing package

**Solutions**:
- Check spelling
- Load required package

**Example**:
```latex
% Wrong
\begin{algoritm}
...
\end{algoritm}

% Correct
\usepackage{algorithm}
\begin{algorithm}
...
\end{algorithm}
```

---

### 5. File Not Found

**Error Message**:
```
! LaTeX Error: File 'image.png' not found.
```

**Causes**:
- Wrong file path
- Wrong file extension
- File doesn't exist

**Solutions**:
- Check file path (case-sensitive on Linux/Mac)
- Verify file extension
- Ensure file exists in specified location

**Example**:
```latex
% Set graphics path
\graphicspath{{images/}{figures/}}

% Include image
\includegraphics{myimage.png}
```

---

## Bibliography Issues

### 1. Bibliography Not Showing

**Problem**: Bibliography section is empty

**Causes**:
- No citations in document
- Wrong compilation sequence
- Wrong bibliography processor

**Solutions**:

1. Add at least one citation: `\cite{key}`

2. Use correct compilation sequence:
   ```bash
   pdflatex main.tex
   biber main        # or bibtex main
   pdflatex main.tex
   pdflatex main.tex
   ```

3. Check which processor to use:
   - `biblatex` → use `biber`
   - `natbib` or `\bibliographystyle` → use `bibtex`

---

### 2. Undefined Citations

**Problem**: Citations show as `[?]`

**Causes**:
- Citation key doesn't exist in `.bib` file
- Haven't run biber/bibtex
- Typo in citation key

**Solutions**:
- Check `.bib` file for correct key
- Compile with biber/bibtex
- Match keys exactly (case-sensitive)

---

### 3. Bibliography Style Not Working

**Problem**: Bibliography doesn't match expected style

**Solution**:
```latex
% For biblatex
\usepackage[style=ieee]{biblatex}
% Options: numeric, alphabetic, authoryear, ieee, apa, etc.

% For natbib
\bibliographystyle{plain}
% Options: plain, alpha, abbrv, unsrt, etc.
```

---

## Formatting Issues

### 1. Overfull/Underfull hbox

**Warning Message**:
```
Overfull \hbox (15.0pt too wide) in paragraph at lines 10--12
Underfull \hbox (badness 10000) in paragraph at lines 15--17
```

**Causes**:
- LaTeX can't break lines properly
- Long words without hyphenation
- URLs or code in text
- Forced line breaks

**Solutions**:

1. **For Overfull hbox**:
   ```latex
   % Allow more tolerant spacing
   \sloppy
   Your problematic paragraph
   \fussy
   
   % Or use microtype package
   \usepackage{microtype}
   
   % For URLs
   \usepackage{url}
   \url{https://example.com}
   
   % Allow hyphenation
   \hyphenation{your-long-word}
   ```

2. **For Underfull hbox**:
   - Rephrase sentence
   - Remove explicit line breaks
   - Allow LaTeX to handle spacing

---

### 2. Images Not Appearing

**Problem**: Image not showing in document

**Solutions**:

1. **Check file format**:
   - Use PDF, PNG, or JPG (not BMP or TIFF)
   - For pdfLaTeX: PDF, PNG, JPG
   - For LaTeX: EPS

2. **Check file path**:
   ```latex
   \graphicspath{{images/}{../figures/}}
   \includegraphics{myimage}  % Don't need extension
   ```

3. **Check image size**:
   ```latex
   \includegraphics[width=0.8\textwidth]{image}
   ```

4. **Use correct positioning**:
   ```latex
   \begin{figure}[H]  % Requires \usepackage{float}
       \includegraphics{image}
   \end{figure}
   ```

---

### 3. Table Too Wide

**Problem**: Table extends beyond page margins

**Solutions**:

1. **Scale the table**:
   ```latex
   \resizebox{\textwidth}{!}{
       \begin{tabular}{...}
       ...
       \end{tabular}
   }
   ```

2. **Use smaller font**:
   ```latex
   {\small
   \begin{tabular}{...}
   ...
   \end{tabular}
   }
   ```

3. **Rotate table**:
   ```latex
   \usepackage{rotating}
   \begin{sidewaystable}
       \begin{tabular}{...}
       ...
       \end{tabular}
   \end{sidewaystable}
   ```

4. **Use landscape page**:
   ```latex
   \usepackage{pdflscape}
   \begin{landscape}
       \begin{table}
       ...
       \end{table}
   \end{landscape}
   ```

---

## Package Issues

### 1. Package Not Found

**Error Message**:
```
! LaTeX Error: File 'package.sty' not found.
```

**Solutions**:

**MiKTeX (Windows)**:
- Should auto-install if configured
- Or open MiKTeX Console → Packages → search and install

**TeX Live (Linux/Mac)**:
```bash
sudo tlmgr update --self
sudo tlmgr install package-name
```

**MacTeX**:
- Use TeX Live Utility (GUI)
- Or use `tlmgr` in terminal

---

### 2. Package Clash

**Error Message**:
```
! LaTeX Error: Option clash for package foo.
```

**Causes**:
- Package loaded multiple times with different options
- Package loaded by another package

**Solutions**:
```latex
% Wrong
\usepackage{hyperref}
\usepackage[colorlinks]{hyperref}

% Correct - load once with all options
\usepackage[colorlinks]{hyperref}
```

---

### 3. Incompatible Packages

**Problem**: Packages conflict with each other

**Common conflicts**:
- `hyperref` should be loaded last (with few exceptions)
- `inputenc` not needed with XeLaTeX/LuaLaTeX
- Some packages require specific loading order

**Solution**:
```latex
% Load packages in this order
\usepackage{...}           % Most packages
\usepackage{hyperref}      % Near the end
\usepackage{cleveref}      % After hyperref
```

---

## Cross-Reference Issues

### 1. References Show as ??

**Problem**: `\ref{label}` shows as `??`

**Causes**:
- Label doesn't exist
- Haven't compiled twice
- Typo in label name

**Solutions**:
- Ensure label exists: `\label{fig:mylabel}`
- Compile document twice
- Check label name matches reference

---

### 2. Wrong Reference Numbers

**Problem**: References show wrong numbers

**Solution**: Compile twice (LaTeX needs two passes for references)

---

## Encoding Issues

### 1. Strange Characters

**Problem**: Special characters (é, ñ, ö, etc.) appear incorrectly

**Solutions**:

1. **Set input encoding**:
   ```latex
   \usepackage[utf8]{inputenc}
   \usepackage[T1]{fontenc}
   ```

2. **Use XeLaTeX or LuaLaTeX** (better Unicode support):
   ```bash
   xelatex main.tex
   ```

3. **Use LaTeX commands**:
   ```latex
   \'e  % é
   \~n  % ñ
   \"o  % ö
   ```

---

## Performance Issues

### 1. Slow Compilation

**Problem**: LaTeX takes too long to compile

**Solutions**:

1. **Use draft mode** (skips images):
   ```latex
   \documentclass[draft]{article}
   ```

2. **Comment out slow parts** during editing

3. **Use `\includeonly`** for large documents:
   ```latex
   \includeonly{chapter1,chapter3}  % Only compile these
   \include{chapter1}
   \include{chapter2}
   \include{chapter3}
   ```

4. **Reduce image resolution** for drafts

---

## Editor-Specific Issues

### TeXstudio

**Problem**: Build command not working

**Solution**:
- Options → Configure TeXstudio → Build
- Check default compiler and bibliography tool
- Use F5 for default build, F6 for compile, F7 for view

---

### VS Code (LaTeX Workshop)

**Problem**: Auto-build not working

**Solution**:
- Check `.vscode/settings.json`
- Ensure LaTeX Workshop extension is installed
- Check output panel for errors

---

### Overleaf

**Problem**: Project won't compile

**Solutions**:
- Check compiler (pdfLaTeX, XeLaTeX, LuaLaTeX)
- Menu → Compiler
- Check timeout settings for large documents

---

## Getting More Help

### Check Log Files

The `.log` file contains detailed error information:
```bash
cat main.log | grep -A 5 "!"
```

### Online Resources

1. **TeX Stack Exchange**: https://tex.stackexchange.com/
   - Search existing questions
   - Ask new questions with minimal example

2. **LaTeX Wikibook**: https://en.wikibooks.org/wiki/LaTeX

3. **CTAN Documentation**: https://ctan.org/

### Creating Minimal Examples

When asking for help, create a minimal example:

```latex
\documentclass{article}
\usepackage{relevant-package}

\begin{document}
% Minimal code that reproduces the problem
\end{document}
```

### Common Commands for Debugging

```latex
% Show package versions
\listfiles

% Debug mode
\errorcontextlines=999

% Draft mode (faster compilation)
\documentclass[draft]{article}

% Show labels and references
\usepackage{showkeys}
```

---

## Prevention Tips

1. **Backup regularly**: Use version control (Git)
2. **Compile often**: Catch errors early
3. **Comment code**: Help future you
4. **Use consistent style**: Easier to spot errors
5. **Test incrementally**: Add content gradually
6. **Read error messages**: They often tell you exactly what's wrong
7. **Keep LaTeX updated**: Bug fixes and improvements

---

If you encounter an issue not covered here, please:
1. Check the official documentation for relevant packages
2. Search TeX Stack Exchange
3. Open an issue on this repository's GitHub page
