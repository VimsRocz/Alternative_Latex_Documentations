# Academic Paper Template

A professional LaTeX template for academic papers, conference submissions, and journal articles, following standard academic formatting conventions.

## Features

- **Two-Column Layout**: Standard format for academic conferences and journals
- **IEEE Citation Style**: Professional citation formatting
- **Abstract and Keywords**: Properly formatted abstract section
- **Theorem Environments**: Support for theorems, lemmas, propositions, etc.
- **Algorithm Support**: Include pseudocode algorithms
- **Mathematical Notation**: Full math support with AMS packages
- **Professional Typography**: Times font and proper spacing
- **Hyperlinked References**: Clickable citations and cross-references
- **Author Affiliations**: Support for multiple authors and institutions

## Files Included

- `main.tex` - Main document file
- `references.bib` - Bibliography database
- `README.md` - This file

## Compilation Instructions

### Standard Compilation

```bash
pdflatex main.tex
biber main
pdflatex main.tex
pdflatex main.tex
```

### Using LaTeX Workshop (VS Code)

1. Open `main.tex`
2. Press `Ctrl+Alt+B` (or `Cmd+Option+B` on macOS)
3. View with `Ctrl+Alt+V` (or `Cmd+Option+V` on macOS)

## Customization

### Document Information

```latex
\title{Your Academic Paper Title: \\
       A Comprehensive Study}

\author{
    First Author\thanks{Email: first.author@university.edu} \\
    \small Department of Computer Science \\
    ...
}
```

### Line Numbers (for Review)

Uncomment these lines to add line numbers:
```latex
\usepackage{lineno}
\linenumbers
```

### Single Column Format

Change the document class:
```latex
\documentclass{article}  % Instead of [twocolumn]
```

### Citation Style

Change to other styles:
```latex
\usepackage[style=ieee, sorting=none]{biblatex}
% Options: ieee, apa, acm, nature, science, etc.
```

## Structure Sections

### Standard Academic Paper Structure

1. **Title and Authors**: Paper title and author information
2. **Abstract**: Brief summary (150-250 words)
3. **Keywords**: 4-6 keywords for indexing
4. **Introduction**: Background, motivation, contributions
5. **Related Work**: Literature review
6. **Methodology**: Technical approach and algorithms
7. **Experimental Results**: Empirical evaluation
8. **Discussion**: Analysis and implications
9. **Conclusion**: Summary and future work
10. **Acknowledgments**: Funding and thanks
11. **References**: Bibliography

### Writing Theorems

```latex
\begin{theorem}
\label{thm:main}
Statement of the theorem.
\end{theorem}

\begin{proof}
Proof of the theorem.
\end{proof}
```

### Writing Algorithms

```latex
\begin{algorithm}
\caption{Algorithm Name}
\begin{algorithmic}[1]
\State \textbf{Input:} Data
\State \textbf{Output:} Result
\State Initialize variables
\For{condition}
    \State Do something
\EndFor
\State \Return result
\end{algorithmic}
\end{algorithm}
```

### Mathematical Equations

```latex
% Inline math
The equation $E = mc^2$ is famous.

% Display math
\begin{equation}
\label{eq:important}
f(x) = \sum_{i=1}^{n} x_i^2
\end{equation}
```

## Adding Content

### Tables

```latex
\begin{table}[H]
\centering
\caption{Results comparison.}
\label{tab:results}
\begin{tabular}{lccc}
\toprule
Method & Metric 1 & Metric 2 & Metric 3 \\
\midrule
Baseline & 85.3 & 78.9 & 82.1 \\
Ours & \textbf{91.2} & \textbf{85.7} & \textbf{87.9} \\
\bottomrule
\end{tabular}
\end{table}
```

### Figures

```latex
\begin{figure}[H]
    \centering
    \includegraphics[width=\linewidth]{figure-name}
    \caption{Figure caption here.}
    \label{fig:label}
\end{figure}
```

For two-column figures:
```latex
\begin{figure*}[t]
    \centering
    \includegraphics[width=\textwidth]{wide-figure}
    \caption{Wide figure spanning both columns.}
    \label{fig:wide}
\end{figure*}
```

### Citations

Add to `references.bib`:
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

Cite in text:
```latex
Previous work \cite{key2024} showed...
Multiple citations \cite{key1,key2,key3}...
```

## Requirements

### Required Packages

- **Core**: inputenc, fontenc, babel
- **Layout**: geometry
- **Typography**: times, setspace
- **Graphics**: graphicx, float
- **Tables**: booktabs, multirow
- **Math**: amsmath, amssymb, amsthm
- **Algorithms**: algorithm, algpseudocode
- **Colors**: xcolor
- **References**: hyperref, biblatex

### LaTeX Distribution

- TeX Live 2020+
- MiKTeX 21+
- MacTeX 2020+

## Conference Submission Tips

1. **Read Guidelines**: Always check the specific conference/journal style guide
2. **Page Limits**: Respect the page limit (usually 6-12 pages)
3. **Anonymization**: Some venues require anonymous submissions (remove author names)
4. **Supplementary Material**: Place in separate files if required
5. **File Format**: Check if PDF/A compliance is needed
6. **Copyright**: Include copyright notice if required

## Common Adjustments for Different Venues

### ACM Format
```latex
\documentclass[sigconf]{acmart}
```

### IEEE Format
```latex
\documentclass[conference]{IEEEtran}
```

### Springer LNCS
```latex
\documentclass[runningheads]{llncs}
```

Note: These may require specific class files from the publisher.

## Troubleshooting

**Columns not balancing**: Add `\usepackage{balance}` and `\balance` before references

**Overfull hbox warnings**: Adjust word spacing or rephrase sentences

**References not showing**: Ensure you run biber (not bibtex) and compile multiple times

**Algorithm package errors**: Make sure both `algorithm` and `algpseudocode` are installed

## Best Practices

1. **Write clearly**: Use simple, direct language
2. **Be precise**: Define terms and notation carefully
3. **Support claims**: Provide evidence for all claims
4. **Cite properly**: Give credit to prior work
5. **Proofread**: Check for typos and grammatical errors
6. **Get feedback**: Have colleagues review before submission

## License

This template is part of the Alternative LaTeX Documentations project and is licensed under the MIT License.
