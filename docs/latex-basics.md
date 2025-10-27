# LaTeX Basics

A comprehensive guide to LaTeX fundamentals for creating professional documents.

## Table of Contents

1. [Document Structure](#document-structure)
2. [Text Formatting](#text-formatting)
3. [Document Sections](#document-sections)
4. [Lists](#lists)
5. [Tables](#tables)
6. [Figures and Images](#figures-and-images)
7. [Mathematics](#mathematics)
8. [Citations and Bibliography](#citations-and-bibliography)
9. [Cross-References](#cross-references)
10. [Packages](#packages)

## Document Structure

Every LaTeX document has the same basic structure:

```latex
\documentclass{class}    % Required: defines document type

% Preamble (optional): package imports and settings
\usepackage{package}

\begin{document}         % Required: content starts
    Your content here
\end{document}           % Required: content ends
```

### Document Classes

Common document classes:

- `article` - Short documents, papers, articles
- `report` - Longer documents with chapters
- `book` - Books with front matter, chapters, back matter
- `beamer` - Presentations
- `letter` - Letters

Options:
```latex
\documentclass[12pt, a4paper, twocolumn]{article}
% 12pt: font size (10pt, 11pt, 12pt)
% a4paper: paper size (a4paper, letterpaper)
% twocolumn: two-column layout
```

## Text Formatting

### Font Styles

```latex
\textbf{Bold text}
\textit{Italic text}
\texttt{Typewriter (monospace) text}
\textsc{Small Caps}
\emph{Emphasized (usually italic)}

% Combining styles
\textbf{\textit{Bold and italic}}
```

### Font Sizes

```latex
{\tiny Tiny text}
{\small Small text}
{\normalsize Normal text}
{\large Large text}
{\Large Larger text}
{\LARGE Even larger}
{\huge Huge text}
{\Huge Biggest text}
```

### Text Alignment

```latex
\begin{center}
    Centered text
\end{center}

\begin{flushleft}
    Left-aligned text
\end{flushleft}

\begin{flushright}
    Right-aligned text
\end{flushright}
```

### Special Characters

Characters with special meaning in LaTeX must be escaped:

```latex
\& \% \$ \# \_ \{ \} \~{} \^{} \textbackslash
```

## Document Sections

### Hierarchical Structure

```latex
\section{Section}
\subsection{Subsection}
\subsubsection{Subsubsection}
\paragraph{Paragraph}
\subparagraph{Subparagraph}
```

For books and reports:
```latex
\part{Part}
\chapter{Chapter}
\section{Section}
```

### Unnumbered Sections

```latex
\section*{Unnumbered Section}
```

### Table of Contents

```latex
\tableofcontents  % Automatically generated from sections
```

## Lists

### Unordered (Itemized) Lists

```latex
\begin{itemize}
    \item First item
    \item Second item
    \item Third item
\end{itemize}
```

### Ordered (Enumerated) Lists

```latex
\begin{enumerate}
    \item First item
    \item Second item
    \item Third item
\end{enumerate}
```

### Description Lists

```latex
\begin{description}
    \item[Term 1] Definition of term 1
    \item[Term 2] Definition of term 2
\end{description}
```

### Nested Lists

```latex
\begin{itemize}
    \item Top level
    \begin{itemize}
        \item Second level
        \begin{itemize}
            \item Third level
        \end{itemize}
    \end{itemize}
\end{itemize}
```

## Tables

### Basic Table

```latex
\begin{tabular}{lrc}
    Left & Right & Center \\
    1 & 2 & 3 \\
    4 & 5 & 6 \\
\end{tabular}
```

Column specifiers:
- `l` - left-aligned
- `r` - right-aligned
- `c` - centered
- `|` - vertical line
- `p{width}` - paragraph column with specified width

### Table with Lines

```latex
\begin{tabular}{|l|c|r|}
    \hline
    Column 1 & Column 2 & Column 3 \\
    \hline
    A & B & C \\
    D & E & F \\
    \hline
\end{tabular}
```

### Professional Tables (using booktabs)

```latex
\usepackage{booktabs}  % In preamble

\begin{tabular}{lcc}
    \toprule
    Item & Value 1 & Value 2 \\
    \midrule
    A & 10 & 20 \\
    B & 15 & 25 \\
    C & 20 & 30 \\
    \bottomrule
\end{tabular}
```

### Table Environment (with caption)

```latex
\begin{table}[h]
    \centering
    \caption{Table caption}
    \label{tab:mytable}
    \begin{tabular}{lcc}
        % table content
    \end{tabular}
\end{table}
```

Position specifiers: `h` (here), `t` (top), `b` (bottom), `p` (page), `!` (override)

## Figures and Images

### Including Images

```latex
\usepackage{graphicx}  % In preamble

\includegraphics{image-name}
\includegraphics[width=0.5\textwidth]{image}
\includegraphics[height=5cm]{image}
\includegraphics[scale=0.75]{image}
```

### Figure Environment

```latex
\begin{figure}[h]
    \centering
    \includegraphics[width=0.8\textwidth]{image}
    \caption{Figure caption}
    \label{fig:myfigure}
\end{figure}
```

### Side-by-Side Figures

```latex
\begin{figure}[h]
    \centering
    \begin{minipage}{0.45\textwidth}
        \includegraphics[width=\textwidth]{image1}
        \caption{First image}
    \end{minipage}
    \hfill
    \begin{minipage}{0.45\textwidth}
        \includegraphics[width=\textwidth]{image2}
        \caption{Second image}
    \end{minipage}
\end{figure}
```

## Mathematics

### Inline Math

```latex
Einstein's equation is $E = mc^2$.
```

### Display Math

```latex
% Unnumbered
\[ E = mc^2 \]

% Numbered
\begin{equation}
    E = mc^2
\end{equation}
```

### Common Math Symbols

```latex
% Superscripts and subscripts
x^2, x_i, x^{10}, x_{ij}

% Fractions
\frac{numerator}{denominator}

% Square root
\sqrt{x}, \sqrt[n]{x}

% Greek letters
\alpha, \beta, \gamma, \Delta, \Sigma

% Operators
\sum, \prod, \int, \lim

% Relations
<, >, =, \leq, \geq, \neq, \approx

% Sets
\in, \notin, \subset, \cup, \cap

% Logic
\forall, \exists, \neg, \land, \lor
```

### Multiple Equations

```latex
% Aligned equations
\begin{align}
    f(x) &= x^2 + 2x + 1 \\
    &= (x + 1)^2
\end{align}

% Equation system
\begin{equation}
    \begin{cases}
        x + y = 5 \\
        2x - y = 1
    \end{cases}
\end{equation}
```

### Matrices

```latex
\begin{equation}
    A = \begin{pmatrix}
        a_{11} & a_{12} \\
        a_{21} & a_{22}
    \end{pmatrix}
\end{equation}
```

Matrix types:
- `pmatrix` - parentheses
- `bmatrix` - brackets
- `vmatrix` - vertical lines (determinant)
- `matrix` - no delimiters

## Citations and Bibliography

### BibTeX/BibLaTeX

Create a `references.bib` file:

```bibtex
@article{key2024,
    author = {Smith, John},
    title = {Article Title},
    journal = {Journal Name},
    year = {2024},
    volume = {10},
    pages = {1--10}
}

@book{bookkey,
    author = {Doe, Jane},
    title = {Book Title},
    publisher = {Publisher},
    year = {2023}
}
```

In your document:

```latex
% Using biblatex (recommended)
\usepackage{biblatex}
\addbibresource{references.bib}

\begin{document}
According to Smith \cite{key2024}...
Multiple citations \cite{key2024,bookkey}...

\printbibliography
\end{document}
```

Compile:
```bash
pdflatex main.tex
biber main
pdflatex main.tex
pdflatex main.tex
```

## Cross-References

### Labels and References

```latex
% Label a section
\section{Introduction}
\label{sec:intro}

% Label an equation
\begin{equation}
    E = mc^2
    \label{eq:einstein}
\end{equation}

% Label a figure
\begin{figure}
    ...
    \label{fig:diagram}
\end{figure}

% Reference them
See Section~\ref{sec:intro}.
Equation~\ref{eq:einstein} shows...
Figure~\ref{fig:diagram} illustrates...
```

## Packages

### Essential Packages

```latex
% Encoding and language
\usepackage[utf8]{inputenc}
\usepackage[T1]{fontenc}
\usepackage[english]{babel}

% Page layout
\usepackage{geometry}
\geometry{margin=1in}

% Graphics
\usepackage{graphicx}

% Enhanced tables
\usepackage{booktabs}

% Math
\usepackage{amsmath, amssymb, amsthm}

% Colors
\usepackage{xcolor}

% Hyperlinks
\usepackage{hyperref}
```

### Useful Packages

```latex
% Multiple columns
\usepackage{multicol}

% Fancy headers/footers
\usepackage{fancyhdr}

% Code listings
\usepackage{listings}

% Todo notes
\usepackage{todonotes}

% Advanced graphics
\usepackage{tikz}

% Chemistry
\usepackage{chemfig}

% Music notation
\usepackage{musixtex}
```

## Tips and Best Practices

1. **Compile Frequently**: Catch errors early
2. **Use Comments**: `%` for single-line comments
3. **Organize Content**: Use `\input{file}` or `\include{file}` for large documents
4. **Version Control**: Use Git for tracking changes
5. **Consistent Style**: Follow a style guide
6. **Break Lines**: LaTeX ignores single line breaks in source
7. **Use Non-breaking Space**: `~` prevents line breaks (e.g., `Figure~\ref{fig:x}`)

## Common Errors and Solutions

### Undefined Control Sequence

**Error**: `! Undefined control sequence.`

**Cause**: Command not recognized (typo or missing package)

**Solution**: Check spelling or add required package

### Missing $ Inserted

**Error**: `! Missing $ inserted.`

**Cause**: Math mode required but not activated

**Solution**: Wrap math in `$...$` or `\[...\]`

### Overfull/Underfull Box

**Warning**: `Overfull \hbox` or `Underfull \hbox`

**Cause**: LaTeX can't break line properly

**Solution**: Rephrase text, allow hyphenation, or adjust spacing

## Resources

- [LaTeX Wikibook](https://en.wikibooks.org/wiki/LaTeX)
- [Overleaf Documentation](https://www.overleaf.com/learn)
- [CTAN Package Catalog](https://ctan.org/pkg)
- [Detexify](http://detexify.kirelabs.org/) - Find symbols by drawing
- [Table Generator](https://www.tablesgenerator.com/)
- [TeX Stack Exchange](https://tex.stackexchange.com/)

---

This guide covers the essentials. For more advanced topics, consult the official LaTeX documentation and the resources listed above.
