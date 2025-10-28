# Letter Template

A professional LaTeX template for formal business letters, cover letters, and correspondence.

## Features

- **Professional Format**: Standard business letter layout
- **Automatic Addressing**: Sender and recipient addresses properly formatted
- **Date**: Automatically includes current date
- **Signature**: Space for handwritten or digital signature
- **Optional Elements**: Enclosures, CC, PS sections
- **Clean Layout**: Professional margins and spacing

## Files Included

- `main.tex` - Main letter document
- `README.md` - This file

## Quick Start

### Compilation

```bash
pdflatex main.tex
```

Or use your LaTeX editor (TeXstudio, VS Code, etc.)

## Customization

### Sender Information

Edit your address in the preamble:
```latex
\address{
    Your Name \\
    Your Street Address \\
    City, State ZIP Code \\
    Country
}

\signature{Your Name}
```

### Recipient Information

Edit the recipient address in the letter environment:
```latex
\begin{letter}{
    Recipient Name \\
    Recipient Title \\
    Company Name \\
    Street Address \\
    City, State ZIP Code
}
```

### Date

```latex
% Default: Today's date (automatic)
% \date{} removes the date
% \date{January 15, 2024} sets custom date
```

### Opening Salutation

```latex
\opening{Dear Mr./Ms./Dr. Last Name,}
```

**Common salutations**:
- Formal (known name): `Dear Dr. Smith,`
- Formal (unknown): `Dear Sir or Madam,`
- Semi-formal: `Dear Hiring Manager,`
- Informal: `Dear John,`
- Very formal: `To Whom It May Concern,`

### Closing

```latex
\closing{Sincerely,}
```

**Common closings**:
- **Very formal**: `Yours faithfully,` (when you don't know the name)
- **Formal**: `Sincerely,` / `Yours truly,` / `Respectfully,`
- **Semi-formal**: `Best regards,` / `Kind regards,`
- **Informal**: `Warm regards,` / `Best wishes,`

## Letter Structure

### Standard Business Letter

```
Your Address
(automatically placed)

Date
(automatically placed)

Recipient Address

Opening Salutation

Body Paragraphs:
1. Introduction and purpose
2. Main content/details
3. Supporting information
4. Conclusion and call to action

Closing,

(Space for signature)

Your Typed Name

Optional: Enclosures, CC, PS
```

## Common Letter Types

### 1. Cover Letter (Job Application)

**Structure**:
```
Paragraph 1: State the position you're applying for and how you learned about it
Paragraph 2: Highlight relevant qualifications and experience
Paragraph 3: Explain why you're a good fit for the company
Paragraph 4: Express enthusiasm and request an interview
```

**Example**:
```latex
\opening{Dear Hiring Manager,}

I am writing to apply for the Software Engineer position at TechCorp, as 
advertised on your company website. With my background in computer science 
and three years of professional experience, I am excited about the opportunity 
to contribute to your team.

In my current role at StartupXYZ, I have successfully...

I am particularly drawn to TechCorp because...

I would welcome the opportunity to discuss how my skills and experience align 
with your needs. Thank you for considering my application.

\closing{Sincerely,}
```

### 2. Business Inquiry

**Structure**:
```
Paragraph 1: Introduce yourself and state your inquiry
Paragraph 2: Provide context and specific questions
Paragraph 3: Request information or action
```

### 3. Thank You Letter

**Structure**:
```
Paragraph 1: Express gratitude for specific action/opportunity
Paragraph 2: Reflect on the experience or reiterate interest
Paragraph 3: Look forward to next steps
```

### 4. Formal Complaint

**Structure**:
```
Paragraph 1: State the problem clearly
Paragraph 2: Provide relevant details and evidence
Paragraph 3: Explain impact and request resolution
Paragraph 4: State expected timeline for response
```

## Optional Elements

### Enclosures

When including additional documents:
```latex
\encl{Resume, Cover Letter, Portfolio}
```

This adds a line like:
```
Enclosures: Resume, Cover Letter, Portfolio
```

### Carbon Copy (CC)

When sending copies to others:
```latex
\cc{Dr. John Smith \\ Ms. Jane Doe}
```

### Postscript (PS)

For additional notes:
```latex
\ps{P.S. I will be in your area next week and would be happy to meet in person.}
```

## Advanced Customization

### Page Layout

```latex
% Adjust margins
\usepackage[top=1in, bottom=1in, left=1.25in, right=1.25in]{geometry}
```

### Fonts

```latex
% Times New Roman
\usepackage{mathptmx}

% Helvetica
\usepackage{helvet}
\renewcommand{\familydefault}{\sfdefault}

% Palatino
\usepackage{palatino}
```

### Letterhead

For company letterhead:
```latex
\usepackage{graphicx}

% Add logo
\address{
    \includegraphics[width=2in]{company-logo.png} \\
    Company Name \\
    Address \\
    City, State ZIP
}
```

### Multiple Pages

Long letters automatically continue to additional pages with proper formatting.

## Tips for Effective Letters

### Writing Style

1. **Be Concise**: Get to the point quickly
2. **Be Specific**: Provide concrete details
3. **Be Professional**: Use formal language
4. **Be Courteous**: Maintain respectful tone
5. **Be Clear**: Organize thoughts logically

### Format Guidelines

1. **Single Space**: Within paragraphs
2. **Double Space**: Between paragraphs
3. **Left Align**: All text (standard in business letters)
4. **Block Format**: No paragraph indentation (standard)

### Before Sending

1. **Proofread**: Check for spelling and grammar errors
2. **Verify Details**: Confirm recipient name, title, address
3. **Check Tone**: Ensure appropriate level of formality
4. **Review Format**: Ensure professional appearance
5. **Include Contact**: Make it easy for recipient to respond

## Common Mistakes to Avoid

1. ❌ Misspelling recipient's name
2. ❌ Wrong or generic salutation
3. ❌ Too casual tone for formal letter
4. ❌ Too wordy or rambling
5. ❌ Forgetting to sign
6. ❌ Inconsistent date format
7. ❌ Missing contact information
8. ❌ Poor formatting or layout

## Examples of Different Letter Types

### Professional Inquiry
```latex
\opening{Dear Dr. Johnson,}

I am writing to inquire about potential research opportunities in your 
laboratory for the upcoming summer. I am a junior majoring in Biology at 
State University, with a particular interest in molecular genetics.

Your recent publication on gene expression caught my attention...

\closing{Respectfully,}
```

### Recommendation Request
```latex
\opening{Dear Professor Smith,}

I hope this letter finds you well. I am writing to ask if you would be 
willing to write a letter of recommendation for my graduate school applications.

I greatly enjoyed your Advanced Algorithms course last semester...

\closing{Best regards,}
```

### Resignation Letter
```latex
\opening{Dear Mr. Johnson,}

I am writing to formally notify you of my resignation from my position as 
Marketing Manager at ABC Company, effective two weeks from today's date.

This decision was not made lightly...

\closing{Sincerely,}
```

## International Variations

### UK Format

- Use "Yours faithfully," when you don't know the name
- Use "Yours sincerely," when you know the name
- Date format: 15 January 2024

### US Format

- Use "Sincerely," as standard
- Date format: January 15, 2024

## Troubleshooting

**Problem**: Margins are wrong
- **Solution**: Adjust geometry package parameters

**Problem**: Date format is wrong
- **Solution**: Use `\date{custom date}` or load babel with your language

**Problem**: Signature spacing is too small
- **Solution**: Add `\vspace{1cm}` after `\closing{}`

## Alternative Letter Classes

If the standard letter class doesn't meet your needs:

```latex
\documentclass{newlfm}  % Modern letter format
\documentclass{scrlttr2}  % KOMA-Script letter
```

## Resources

- [The LaTeX Letter Class](https://www.latex-project.org/help/documentation/)
- [Business Letter Format](https://owl.purdue.edu/owl/subject_specific_writing/professional_technical_writing/basic_business_letters/)
- [Cover Letter Guide](https://www.indeed.com/career-advice/cover-letter-samples)

## License

This template is part of the Alternative LaTeX Documentations project and is licensed under the MIT License.
