# Thesis/Dissertation Template

A comprehensive LaTeX template for writing theses and dissertations, suitable for Master's and PhD students.

## Features

- **Complete Structure**: Front matter, main content, back matter
- **Title Page**: Formal title page with university information
- **Abstract**: Dedicated abstract section
- **Declaration**: Standard declaration of originality
- **Acknowledgments**: Section for thanking supporters
- **Table of Contents**: Automatically generated
- **Lists**: Figures, tables, algorithms, abbreviations
- **Chapter-Based**: Organized into chapters
- **Bibliography**: BibLaTeX support for references
- **Appendices**: For supplementary material
- **Theorem Environments**: For mathematical content
- **Professional Formatting**: Proper headers, footers, spacing

## Files Included

- `main.tex` - Main thesis document
- `references.bib` - Bibliography database
- `README.md` - This file

## Prerequisites

Standard LaTeX packages (included in TeX Live, MiKTeX, MacTeX).

## Compilation

```bash
pdflatex main.tex
biber main
pdflatex main.tex
pdflatex main.tex
```

For best results, compile 2-3 times after running biber.

## Structure Overview

### Front Matter

1. **Title Page**: Official title page
2. **Abstract**: Summary of thesis (250-500 words)
3. **Declaration**: Statement of originality
4. **Dedication** (optional): Personal dedication
5. **Acknowledgments**: Thanks to supporters
6. **Table of Contents**: Automatically generated
7. **List of Figures**: If you have figures
8. **List of Tables**: If you have tables
9. **List of Abbreviations**: Key acronyms and terms

### Main Matter (Chapters)

1. **Introduction**: Background, problem, objectives
2. **Literature Review**: Previous related work
3. **Methodology**: Your approach and methods
4. **Implementation**: How you built/did it
5. **Evaluation**: Results and analysis
6. **Conclusion**: Summary and future work

### Back Matter

1. **Bibliography**: References
2. **Appendices**: Supplementary material

## Customization

### Title Page

Edit the title page section:
```latex
\begin{titlepage}
    % Update with your information
    {\LARGE\textbf{Your Thesis Title}\\[0.5cm]}
    {\Large Your Full Name\\[1cm]}
    % Update degree information
    \textbf{Doctor of Philosophy / Master of Science}\\
    \textbf{Department Name}\\
    \textbf{University Name}\\
\end{titlepage}
```

### Document Options

```latex
% Page sides: oneside or twoside
\documentclass[12pt, oneside]{book}

% For double-sided printing:
\documentclass[12pt, twoside]{book}
```

### Line Spacing

```latex
% In preamble
\onehalfspacing  % 1.5 spacing (common)
% \doublespacing  % Double spacing
% \singlespacing  % Single spacing
```

### Page Margins

```latex
\usepackage[margin=1in]{geometry}
% Or specify each margin:
\usepackage[top=1in, bottom=1in, left=1.5in, right=1in]{geometry}
```

### Hyperlink Colors

```latex
\hypersetup{
    colorlinks=true,
    linkcolor=blue,  % Internal links
    citecolor=blue,  % Citations
    urlcolor=cyan    % URLs
}

% For print version (black links):
\hypersetup{
    colorlinks=false,
    hidelinks
}
```

## Chapter Structure

### Adding a New Chapter

```latex
\chapter{Chapter Title}
\label{chap:shortname}

\section{Section Title}
\label{sec:shortname}

\subsection{Subsection Title}
\label{subsec:shortname}
```

### Referencing

```latex
% Reference a chapter
See Chapter~\ref{chap:intro}

% Reference a section
As discussed in Section~\ref{sec:methods}

% Reference a figure
Figure~\ref{fig:architecture} shows...

% Reference an equation
Equation~\ref{eq:main} defines...
```

## Figures and Tables

### Figures

```latex
\begin{figure}[htbp]
    \centering
    \includegraphics[width=0.8\textwidth]{figure-name}
    \caption{Caption describing the figure.}
    \label{fig:shortname}
\end{figure}
```

### Tables

```latex
\begin{table}[htbp]
    \centering
    \caption{Caption for the table.}
    \label{tab:shortname}
    \begin{tabular}{lcc}
        \toprule
        Column 1 & Column 2 & Column 3 \\
        \midrule
        Data & Data & Data \\
        \bottomrule
    \end{tabular}
\end{table}
```

### Long Tables

For tables spanning multiple pages:
```latex
\begin{longtable}{lcc}
    \caption{Long table caption} \\
    \toprule
    Column 1 & Column 2 & Column 3 \\
    \midrule
    \endfirsthead
    
    \multicolumn{3}{c}{\textit{(continued)}} \\
    \toprule
    Column 1 & Column 2 & Column 3 \\
    \midrule
    \endhead
    
    % Table content
    Data & Data & Data \\
    % ... many rows ...
    \bottomrule
\end{longtable}
```

## Citations and Bibliography

### Adding References

In `references.bib`:
```bibtex
@article{key2024,
    author = {Author, Name},
    title = {Article Title},
    journal = {Journal Name},
    year = {2024},
    volume = {10},
    pages = {1--20}
}
```

### Citing

```latex
% Single citation
\cite{key2024}

% Multiple citations
\cite{key2024,key2023,key2022}

% Citation with page number
\cite[p.~10]{key2024}
```

## Mathematical Content

### Theorems and Definitions

```latex
\begin{theorem}[Theorem Name]
\label{thm:name}
Statement of the theorem.
\end{theorem}

\begin{proof}
Proof of the theorem.
\end{proof}

\begin{definition}[Term]
\label{def:term}
Definition of the term.
\end{definition}
```

### Equations

```latex
% Display equation
\begin{equation}
\label{eq:name}
E = mc^2
\end{equation}

% Multiple aligned equations
\begin{align}
f(x) &= x^2 + 2x + 1 \label{eq:first} \\
&= (x + 1)^2 \label{eq:second}
\end{align}
```

## Appendices

```latex
\begin{appendices}

\chapter{First Appendix}
\label{app:first}
Content of first appendix.

\chapter{Second Appendix}
\label{app:second}
Content of second appendix.

\end{appendices}
```

## Tips for Thesis Writing

### Organization

1. **One File per Chapter**: For large theses, split into multiple files:
   ```latex
   \include{chapters/introduction}
   \include{chapters/literature}
   \include{chapters/methodology}
   ```

2. **Use Labels Consistently**: Prefix labels by type:
   - Chapters: `chap:name`
   - Sections: `sec:name`
   - Figures: `fig:name`
   - Tables: `tab:name`
   - Equations: `eq:name`

3. **Compile Frequently**: Catch errors early

### Writing Style

1. **Be Clear**: Use simple, direct language
2. **Be Consistent**: Use same terms throughout
3. **Be Precise**: Define technical terms
4. **Be Objective**: Present facts and evidence
5. **Be Complete**: Don't assume reader knowledge

### Formatting

1. **Consistent Fonts**: Stick to document defaults
2. **Proper Spacing**: Use `~` for non-breaking spaces: `Figure~\ref{fig:x}`
3. **Punctuation**: Be consistent with oxford commas, etc.
4. **Capitalization**: Follow field conventions

## University-Specific Requirements

Many universities have specific formatting requirements. Check your department's thesis guidelines for:

- **Margins**: Some require larger margins for binding
- **Line Spacing**: Double spacing may be required
- **Font**: Times New Roman, Arial, etc. may be specified
- **Title Page**: Format may be prescribed
- **Page Numbers**: Location and format requirements
- **Bibliography Style**: Specific citation style required

## Splitting Into Multiple Files

For easier management of large theses:

```latex
% In main.tex
\input{frontmatter/abstract}
\input{frontmatter/acknowledgments}

\include{chapters/chapter1}
\include{chapters/chapter2}
\include{chapters/chapter3}

\include{appendices/appendixA}
```

Create corresponding files:
- `frontmatter/abstract.tex`
- `chapters/chapter1.tex`
- etc.

## Common Issues

### Problem: Table of Contents Not Updated

**Solution**: Compile twice (first run generates TOC data, second uses it)

### Problem: Bibliography Not Showing

**Solution**: Run biber and compile again:
```bash
pdflatex main
biber main
pdflatex main
pdflatex main
```

### Problem: Page Numbers Wrong

**Solution**: Ensure frontmatter uses `\frontmatter`, main content uses `\mainmatter`

## Before Submission

- [ ] Proofread entire thesis multiple times
- [ ] Check all figures are high quality
- [ ] Verify all references are complete and correct
- [ ] Ensure consistent formatting throughout
- [ ] Check university guidelines are met
- [ ] Get feedback from supervisor and peers
- [ ] Run spell check
- [ ] Check all cross-references work
- [ ] Verify page numbers and TOC are correct
- [ ] Create final PDF with proper metadata

## Print Considerations

For printed copies:

```latex
% Use twoside for double-sided printing
\documentclass[12pt, twoside]{book}

% Adjust inner/outer margins for binding
\usepackage[inner=1.5in, outer=1in]{geometry}

% Remove colored links for print
\hypersetup{hidelinks}
```

## License

This template is part of the Alternative LaTeX Documentations project and is licensed under the MIT License.
