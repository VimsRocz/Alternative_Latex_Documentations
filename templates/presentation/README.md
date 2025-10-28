# Presentation Template (Beamer)

A professional Beamer template for academic and professional presentations with modern design and extensive customization options.

## Features

- **Professional Themes**: Pre-configured with Madrid theme (easily customizable)
- **16:9 Aspect Ratio**: Modern widescreen format (configurable)
- **Progressive Reveal**: Build animations for step-by-step content
- **Code Listings**: Syntax-highlighted code examples
- **Two-Column Layouts**: Side-by-side content comparison
- **Block Environments**: Highlighted sections for emphasis
- **Mathematical Support**: Full LaTeX math capabilities
- **Backup Slides**: Additional slides after main presentation
- **Navigation**: Table of contents and section navigation

## Files Included

- `main.tex` - Main presentation file
- `README.md` - This file

## Quick Start

### Compilation

```bash
pdflatex main.tex
pdflatex main.tex  # Compile twice for navigation
```

Or use your LaTeX editor (TeXstudio, VS Code with LaTeX Workshop, etc.)

## Customization

### Aspect Ratio

Change the aspect ratio:
```latex
\documentclass[aspectratio=169]{beamer}  % 16:9 (default)
% \documentclass[aspectratio=43]{beamer}   % 4:3 traditional
% \documentclass[aspectratio=1610]{beamer} % 16:10
```

### Theme and Colors

Choose different themes and color schemes:
```latex
\usetheme{Madrid}
% Options: AnnArbor, Antibes, Bergen, Berkeley, Berlin, Boadilla,
%          Copenhagen, Darmstadt, Dresden, Frankfurt, Goettingen,
%          Hannover, Ilmenau, JuanLesPins, Luebeck, Madrid,
%          Malmoe, Marburg, Montpellier, PaloAlto, Pittsburgh,
%          Rochester, Singapore, Szeged, Warsaw, boxes, default

\usecolortheme{default}
% Options: default, albatross, beaver, beetle, crane, dolphin,
%          dove, fly, lily, orchid, rose, seagull, seahorse,
%          whale, wolverine
```

### Font Size

Adjust default font size:
```latex
\documentclass[12pt]{beamer}  % Options: 8pt, 9pt, 10pt, 11pt, 12pt, 14pt, 17pt, 20pt
```

### Presentation Mode

```latex
\documentclass[handout]{beamer}  % For printed handouts (no animations)
\documentclass[trans]{beamer}    % For transparency overlays
```

## Content Structure

### Basic Frame

```latex
\begin{frame}{Frame Title}
    Content goes here
\end{frame}
```

### Frame with Subtitle

```latex
\begin{frame}{Main Title}{Subtitle}
    Content
\end{frame}
```

### Itemized Lists

```latex
\begin{itemize}
    \item First point
    \item Second point
    \item Third point
\end{itemize}
```

### Enumerated Lists

```latex
\begin{enumerate}
    \item First step
    \item Second step
    \item Third step
\end{enumerate}
```

### Block Environments

```latex
% Standard block
\begin{block}{Block Title}
    Content
\end{block}

% Alert block (usually red)
\begin{alertblock}{Warning}
    Important information
\end{alertblock}

% Example block (usually green)
\begin{exampleblock}{Example}
    Example content
\end{exampleblock}
```

### Two-Column Layout

```latex
\begin{columns}[T]
    \begin{column}{0.5\textwidth}
        Left column content
    \end{column}
    
    \begin{column}{0.5\textwidth}
        Right column content
    \end{column}
\end{columns}
```

### Progressive Reveal

```latex
% Items appear one by one
\begin{itemize}
    \item<1-> First appears
    \item<2-> Second appears
    \item<3-> Third appears
\end{itemize}

% Alternative: \pause command
\begin{itemize}
    \item First item
    \pause
    \item Second item (appears after first)
    \pause
    \item Third item (appears last)
\end{itemize}
```

### Images

```latex
\begin{frame}{Image Example}
    \begin{center}
        \includegraphics[width=0.7\textwidth]{image-name}
    \end{center}
\end{frame}
```

### Tables

```latex
\begin{frame}{Table Example}
    \begin{table}
        \centering
        \begin{tabular}{lcc}
            \toprule
            Item & Value 1 & Value 2 \\
            \midrule
            A & 10 & 20 \\
            B & 15 & 25 \\
            \bottomrule
        \end{tabular}
        \caption{Table caption}
    \end{table}
\end{frame}
```

### Code Listings

```latex
\begin{frame}[fragile]{Code Example}
    \begin{lstlisting}[language=Python]
    def hello_world():
        print("Hello, World!")
    \end{lstlisting}
\end{frame}
```

Note: Frames with verbatim content (like code) need the `[fragile]` option.

### Math

```latex
\begin{frame}{Mathematical Formula}
    Inline math: $E = mc^2$
    
    Display math:
    \begin{equation}
        \int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
    \end{equation}
\end{frame}
```

## Special Frames

### Title Slide

```latex
\begin{frame}
    \titlepage
\end{frame}
```

### Table of Contents

```latex
\begin{frame}{Outline}
    \tableofcontents
\end{frame}
```

### Section TOC

```latex
\begin{frame}{Outline}
    \tableofcontents[currentsection]  % Highlight current section
\end{frame}
```

### Plain Frame (No Header/Footer)

```latex
\begin{frame}[plain]
    Content without header/footer
\end{frame}
```

## Tips for Effective Presentations

### Content Guidelines

1. **One Main Idea Per Slide**: Keep slides focused
2. **Minimal Text**: Use bullet points, not paragraphs
3. **Visual Hierarchy**: Use size, color, and spacing effectively
4. **Consistent Style**: Maintain uniform formatting
5. **High-Quality Images**: Use vector graphics when possible

### Design Tips

1. **Contrast**: Ensure text is readable against background
2. **Font Size**: Keep text large enough (18pt+ for body text)
3. **White Space**: Don't overcrowd slides
4. **Color Scheme**: Use complementary colors
5. **Animations**: Use sparingly and purposefully

### Practice Recommendations

1. **Time Your Talk**: Aim for 1-2 minutes per slide
2. **Rehearse**: Practice with the actual slides
3. **Backup Plan**: Have PDF version ready
4. **Notes**: Use speaker notes (not on slides)
5. **Questions**: Prepare backup slides for anticipated questions

## Advanced Features

### Custom Colors

```latex
\definecolor{mycolor}{RGB}{0,102,204}
\usecolortheme[named=mycolor]{structure}
```

### Logo

```latex
\logo{\includegraphics[height=0.8cm]{logo.png}}
```

### Footline Customization

```latex
\setbeamertemplate{footline}[frame number]  % Just frame numbers
```

### Navigation Symbols

```latex
\setbeamertemplate{navigation symbols}{}  % Remove navigation symbols
```

### Section Pages

```latex
\AtBeginSection[]{
    \begin{frame}
        \vfill
        \centering
        \begin{beamercolorbox}[sep=8pt,center,shadow=true,rounded=true]{title}
            \usebeamerfont{title}\insertsectionhead\par%
        \end{beamercolorbox}
        \vfill
    \end{frame}
}
```

## Export Options

### Handouts

Generate handout version:
```latex
\documentclass[handout]{beamer}
```

Then use `pgfpages` for multiple slides per page:
```latex
\usepackage{pgfpages}
\pgfpagesuselayout{4 on 1}[a4paper,border shrink=5mm,landscape]
```

### Notes

Add speaker notes:
```latex
\begin{frame}{Slide Title}
    Slide content
\end{frame}

\note{
    These are speaker notes that won't appear in the presentation.
}
```

View notes:
```latex
\setbeameroption{show notes on second screen}
```

## Requirements

- **Beamer Package**: Included in all major LaTeX distributions
- **LaTeX Distribution**: TeX Live 2020+, MiKTeX 21+, MacTeX 2020+

## Troubleshooting

**Problem**: Navigation links not working
- **Solution**: Compile twice

**Problem**: Animations not showing
- **Solution**: Make sure you're not in handout mode

**Problem**: Code not displaying
- **Solution**: Use `[fragile]` option on frame: `\begin{frame}[fragile]`

**Problem**: Image not found
- **Solution**: Check image path and file extension

## Resources

- [Beamer User Guide](https://ctan.org/pkg/beamer)
- [Beamer Theme Gallery](https://deic.uab.cat/~iblanes/beamer_gallery/)
- [ShareLaTeX Beamer Tutorial](https://www.overleaf.com/learn/latex/Beamer)

## License

This template is part of the Alternative LaTeX Documentations project and is licensed under the MIT License.
