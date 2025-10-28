# Getting Started with Alternative LaTeX Documentations

Welcome! This guide will help you get started with LaTeX and this repository.

## What is LaTeX?

LaTeX is a document preparation system for high-quality typesetting. It's widely used for:
- Academic papers and journals
- Technical reports
- Books and theses
- Presentations
- Resumes and CVs

Unlike word processors (like Microsoft Word), LaTeX separates content from formatting, allowing you to focus on writing while LaTeX handles the layout.

## Installation

### Windows

1. **Install MiKTeX**:
   - Download from [miktex.org](https://miktex.org/download)
   - Run the installer
   - Choose "Install missing packages on-the-fly: Yes"

2. **Install TeXstudio** (optional but recommended):
   - Download from [texstudio.org](https://www.texstudio.org/)
   - Install and launch

### macOS

1. **Install MacTeX**:
   ```bash
   # Using Homebrew
   brew install --cask mactex
   
   # Or download from tug.org/mactex/
   ```

2. **Install TeXstudio** (optional):
   ```bash
   brew install --cask texstudio
   ```

### Linux

**Ubuntu/Debian**:
```bash
sudo apt-get update
sudo apt-get install texlive-full
sudo apt-get install texstudio  # Optional
```

**Fedora**:
```bash
sudo dnf install texlive-scheme-full
sudo dnf install texstudio  # Optional
```

**Arch Linux**:
```bash
sudo pacman -S texlive-most
sudo pacman -S texstudio  # Optional
```

## Verify Installation

Open a terminal and run:
```bash
pdflatex --version
```

You should see version information for pdfLaTeX.

## Choose a Text Editor

### Recommended Editors

1. **TeXstudio** (Beginner-friendly)
   - Integrated PDF viewer
   - Auto-completion
   - Syntax highlighting
   - Built-in build commands

2. **Visual Studio Code** (Modern, extensible)
   - Install "LaTeX Workshop" extension
   - Powerful editing features
   - Git integration
   - Customizable

3. **Overleaf** (Online, no installation needed)
   - Browser-based
   - Real-time collaboration
   - No setup required
   - Free tier available

4. **Vim/Emacs** (Advanced users)
   - Powerful editing capabilities
   - Steep learning curve
   - Highly customizable

## Your First LaTeX Document

### Step 1: Create a New File

Create a file named `hello.tex` with the following content:

```latex
\documentclass{article}

\begin{document}
Hello, World! This is my first LaTeX document.
\end{document}
```

### Step 2: Compile the Document

**Using Command Line**:
```bash
pdflatex hello.tex
```

**Using TeXstudio**:
1. Open `hello.tex`
2. Press F5 (or click the green arrow)

**Using VS Code**:
1. Open `hello.tex`
2. Press Ctrl+Alt+B (or Cmd+Option+B on macOS)

### Step 3: View the PDF

A file named `hello.pdf` will be created. Open it to see your document!

## Understanding the Structure

```latex
\documentclass{article}     % Document type
\usepackage{package-name}   % Load packages (optional)

\title{My Document}         % Document info (optional)
\author{Your Name}
\date{\today}

\begin{document}            % Content starts here

\maketitle                  % Create title (if info provided)

Your content goes here.

\end{document}              % Content ends here
```

## Basic Formatting

### Text Formatting

```latex
\textbf{Bold text}
\textit{Italic text}
\underline{Underlined text}
\texttt{Typewriter text}
```

### Sections

```latex
\section{Section Title}
\subsection{Subsection Title}
\subsubsection{Subsubsection Title}
```

### Lists

**Itemized (bullet points)**:
```latex
\begin{itemize}
    \item First item
    \item Second item
\end{itemize}
```

**Enumerated (numbered)**:
```latex
\begin{enumerate}
    \item First item
    \item Second item
\end{enumerate}
```

### Mathematics

**Inline math**: `$E = mc^2$`

**Display math**:
```latex
\begin{equation}
    E = mc^2
\end{equation}
```

## Using Templates from This Repository

### Step 1: Choose a Template

Browse the `templates/` directory and choose one that fits your needs:
- `basic-report/` - General reports
- `academic-paper/` - Research papers
- `presentation/` - Beamer slides
- `thesis/` - Thesis/dissertation
- `cv-resume/` - Resume/CV
- `letter/` - Formal letters
- `book/` - Books

### Step 2: Copy the Template

```bash
cp -r templates/basic-report my-project
cd my-project
```

### Step 3: Customize

1. Open `main.tex` in your editor
2. Update the title, author, and date
3. Replace example content with your own
4. Add images to the `images/` directory (if needed)
5. Add references to `references.bib` (if using bibliography)

### Step 4: Compile

```bash
pdflatex main.tex
biber main          # If using bibliography
pdflatex main.tex   # Compile again
pdflatex main.tex   # And once more
```

## Common Issues and Solutions

### Problem: Missing Packages

**Error**: `File 'package.sty' not found`

**Solution**:
- **MiKTeX**: It should auto-install. If not, open MiKTeX Console → Packages → Install
- **TeX Live**: `sudo tlmgr install package-name`
- **MacTeX**: Use TeX Live Utility

### Problem: Bibliography Not Showing

**Solution**: Make sure you:
1. Have citations in your document: `\cite{key}`
2. Compile with the correct sequence:
   ```bash
   pdflatex main.tex
   biber main        # or bibtex main
   pdflatex main.tex
   pdflatex main.tex
   ```

### Problem: Image Not Displaying

**Solution**:
- Check the file path and name (case-sensitive)
- Ensure the image format is supported (PDF, PNG, JPG)
- Verify the image is in the correct directory

### Problem: Compilation Errors

**Solution**:
1. Read the error message carefully
2. Check for:
   - Missing `\end{...}` commands
   - Unmatched braces `{}` or brackets `[]`
   - Special characters that need escaping: `& % $ # _ { } ~ ^ \`
3. Comment out sections to isolate the problem
4. Check the `.log` file for detailed error info

## Next Steps

1. **Explore Templates**: Try different templates to see what they offer
2. **Learn More**: Read the documentation in `docs/latex-basics.md`
3. **Practice**: Create your own documents
4. **Customize**: Adjust templates to your needs
5. **Contribute**: Share your improvements with the community

## Resources

### Official Documentation
- [LaTeX Project](https://www.latex-project.org/)
- [CTAN (Comprehensive TeX Archive Network)](https://ctan.org/)

### Tutorials
- [Overleaf Learn LaTeX](https://www.overleaf.com/learn)
- [LaTeX Wikibook](https://en.wikibooks.org/wiki/LaTeX)
- [ShareLaTeX Guides](https://www.overleaf.com/learn/latex/Tutorials)

### Q&A
- [TeX Stack Exchange](https://tex.stackexchange.com/)
- [LaTeX Reddit](https://www.reddit.com/r/LaTeX/)

### Symbols and Tables
- [Detexify](http://detexify.kirelabs.org/classify.html) - Draw symbols to find LaTeX commands
- [Tables Generator](https://www.tablesgenerator.com/) - Visual table creator

## Getting Help

If you need help:
1. Check the template's README file
2. Consult the documentation in `docs/`
3. Search [TeX Stack Exchange](https://tex.stackexchange.com/)
4. Open an issue on GitHub
5. Ask in the discussions section

Happy LaTeXing! 🎉
