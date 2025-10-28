# CV/Resume Template

A professional LaTeX template for creating modern CVs and resumes using the ModernCV package.

## Features

- **Professional Design**: Clean, modern layout with multiple style options
- **Personal Information**: Section for contact details and social media
- **Photo Support**: Optional profile picture
- **Multiple Sections**: Education, Experience, Skills, Projects, Publications, Awards
- **Flexible Format**: Easy to customize and extend
- **Multiple Styles**: Choose from casual, classic, banking, oldstyle, or fancy
- **Color Themes**: Multiple color options available
- **Icons**: Professional icons for contact information

## Files Included

- `main.tex` - Main CV document
- `README.md` - This file

## Prerequisites

The ModernCV package is required. It's included in most LaTeX distributions, but if you get an error:

**TeX Live/MacTeX**:
```bash
sudo tlmgr install moderncv
```

**MiKTeX**:
- Should auto-install, or use MiKTeX Console to install `moderncv`

## Compilation

```bash
pdflatex main.tex
pdflatex main.tex  # Compile twice for proper formatting
```

Or use your LaTeX editor.

## Customization

### Style Options

Choose from different styles:
```latex
\moderncvstyle{banking}  % Options: casual, classic, banking, oldstyle, fancy
```

**Style descriptions**:
- `casual`: Relaxed, modern style with sections in color
- `classic`: Traditional style with timeline
- `banking`: Professional, conservative style
- `oldstyle`: Classic academic style
- `fancy`: Modern with decorative elements

### Color Themes

```latex
\moderncvcolor{blue}  % Options: blue, orange, green, red, purple, grey, black
```

### Personal Information

Update these fields with your information:
```latex
\name{First Name}{Last Name}
\title{Professional Title}
\address{Street}{City, ZIP}{Country}
\phone[mobile]{+1~(234)~567~8900}
\email{your.email@example.com}
\homepage{www.yourwebsite.com}
\social[linkedin]{yourlinkedin}
\social[github]{yourgithub}
```

### Profile Photo

To add a photo:
1. Place your photo (e.g., `picture.jpg`) in the same directory
2. Make sure this line is uncommented:
   ```latex
   \photo[70pt][0.4pt]{picture}
   ```

To remove the photo, comment out or delete that line.

### Tagline/Objective

```latex
\quote{Your professional tagline or career objective}
```

## Content Sections

### Education

```latex
\cventry{Years}{Degree}{Institution}{Location}{Grade}{
    Description and achievements
    \begin{itemize}
        \item Achievement 1
        \item Achievement 2
    \end{itemize}
}
```

### Experience

```latex
\cventry{Years}{Position}{Company}{Location}{}{
    Job description
    \begin{itemize}
        \item Responsibility/achievement 1
        \item Responsibility/achievement 2
    \end{itemize}
}
```

### Skills

**Method 1: List format**
```latex
\cvitem{Category}{Skill 1, Skill 2, Skill 3}
```

**Method 2: Two-column format**
```latex
\cvdoubleitem{Category 1}{Items}{Category 2}{Items}
```

**Method 3: Computer skills format**
```latex
\cvcomputer{Category 1}{Items}{Category 2}{Items}
```

### Projects

```latex
\cvitem{Project Name}{
    \textbf{Description:} Brief description\\
    \textbf{Technologies:} Tech stack\\
    \textbf{Link:} \url{https://github.com/...}
}
```

### Publications

```latex
\cvitem{}{Author(s), \textit{Title}, Journal/Conference, Year}
```

### Awards & Certifications

```latex
\cvitem{Year}{Award/Certification Name - Description}
```

## Tips for a Strong CV

### Content Guidelines

1. **Be Concise**: Keep it to 1-2 pages for most positions
2. **Quantify Achievements**: Use numbers and metrics
3. **Use Action Verbs**: Started with strong action verbs (Led, Developed, Achieved)
4. **Tailor Content**: Customize for each application
5. **Recent First**: List items in reverse chronological order

### Writing Tips

**Good Examples**:
- "Increased sales by 30% through implementation of new CRM system"
- "Led team of 5 developers in creating award-winning mobile app"
- "Reduced processing time by 40% by optimizing database queries"

**Avoid**:
- Generic statements without specifics
- Personal pronouns ("I", "my", "we")
- Unexplained jargon or acronyms
- Lies or exaggerations

### Section Priority

**Essential sections**:
1. Personal Information
2. Education
3. Experience
4. Skills

**Optional sections** (include if relevant):
- Projects
- Publications
- Awards & Honors
- Certifications
- Volunteer Experience
- Interests

### Technical Roles

For software/engineering positions, emphasize:
- **Technical Skills**: Programming languages, frameworks, tools
- **Projects**: Link to GitHub, portfolio, or live demos
- **Open Source**: Contributions to open source projects
- **Metrics**: Performance improvements, code coverage, uptime

### Academic Positions

For academic/research positions, emphasize:
- **Publications**: List all publications in standard format
- **Grants**: Research funding obtained
- **Teaching**: Courses taught and student evaluations
- **Conference Talks**: Presentations given

## Advanced Customization

### Adjust Layout

```latex
% Adjust margins
\usepackage[scale=0.85]{geometry}  % 0.75-0.85 recommended

% Adjust timeline column width
\setlength{\hintscolumnwidth}{3cm}
```

### Add Custom Sections

```latex
\section{Custom Section Name}
\cvitem{Label}{Content}
```

### Change Font Size

```latex
\documentclass[11pt,a4paper,sans]{moderncv}
% Options: 10pt, 11pt, 12pt
```

### Change Font Family

```latex
\documentclass[11pt,a4paper,sans]{moderncv}
% Options: sans (default), roman
```

## Creating a Cover Letter

The template includes commented-out code for a cover letter. To use it:

1. Uncomment the cover letter section at the end
2. Fill in recipient information
3. Write your letter content
4. Compile

```latex
\recipient{HR Department}{Company Name\\Address}
\date{\today}
\opening{Dear Hiring Manager,}
\closing{Sincerely,}

\makelettertitle
% Your letter content
\makeletterclosing
```

## Multiple Page CVs

For CVs longer than one page:
- Content automatically flows to next page
- Headers and footers appear on all pages
- Page numbers added automatically

## Export Options

### PDF/A Format

For archival or submission requirements:
```latex
\usepackage[a-1b]{pdfx}  % Add to preamble
```

### Print Version

Ensure colors print well:
- Test print or preview
- Consider using grey color scheme for black & white printing

## Common Modifications

### Remove Photo

Comment out or delete:
```latex
% \photo[70pt][0.4pt]{picture}
```

### Change Contact Info Icons

Icons are automatic based on fields used:
- `\phone[mobile]{}` - mobile phone icon
- `\phone[fixed]{}` - landline icon
- `\email{}` - email icon
- `\homepage{}` - globe icon
- `\social[linkedin]{}` - LinkedIn icon
- `\social[github]{}` - GitHub icon
- `\social[twitter]{}` - Twitter icon

### Adjust Spacing

```latex
\vspace{1em}  % Add space
```

## Troubleshooting

**Problem**: ModernCV package not found
- **Solution**: Install via package manager (tlmgr or MiKTeX Console)

**Problem**: Photo not displaying
- **Solution**: Check filename and path, ensure image file exists

**Problem**: Social icons not showing
- **Solution**: Update to latest ModernCV version

**Problem**: Layout issues
- **Solution**: Adjust geometry scale parameter

## Alternative CV Packages

If ModernCV doesn't fit your needs, consider:
- **europecv**: European CV format
- **curve**: Another modern CV style
- **limecv**: Minimalist design
- **altacv**: Column-based layout
- **awesome-cv**: Another popular modern style

## Examples and Inspiration

- [ModernCV Examples](https://www.latextemplates.com/cat/curricula-vitae)
- [Overleaf CV Gallery](https://www.overleaf.com/gallery/tagged/cv)
- [LaTeX CV Templates](https://www.overleaf.com/latex/templates/tagged/cv)

## Best Practices

1. **Proofread**: Check for typos and grammatical errors
2. **Consistent Format**: Use same tense and style throughout
3. **White Space**: Don't overcrowd the page
4. **Professional Email**: Use a professional email address
5. **Update Regularly**: Keep your CV current
6. **Save as PDF**: Always send PDF, not source files
7. **File Naming**: Use "FirstName_LastName_CV.pdf"

## License

This template is part of the Alternative LaTeX Documentations project and is licensed under the MIT License.

The ModernCV package is subject to its own license terms (LaTeX Project Public License).
