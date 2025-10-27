# Alternative LaTeX Documentations

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

An offline application and comprehensive collection of LaTeX templates for writing professional reports, documents, and academic papers offline using LaTeX.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Templates](#templates)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Support](#support)

## 🎯 Overview

Alternative LaTeX Documentations provides a complete offline solution for creating professional documents using LaTeX. Whether you're writing academic papers, technical reports, presentations, or books, this project offers templates and tools to work entirely offline.

## ✨ Features

- **Offline First**: Work completely offline without internet dependency
- **Multiple Templates**: Pre-configured templates for various document types
- **Easy to Use**: Simple setup and intuitive structure
- **Customizable**: Easily adapt templates to your needs
- **Best Practices**: Templates follow LaTeX best practices
- **Cross-Platform**: Works on Windows, macOS, and Linux

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **LaTeX Distribution**: 
  - Windows: [MiKTeX](https://miktex.org/) or [TeX Live](https://www.tug.org/texlive/)
  - macOS: [MacTeX](https://www.tug.org/mactex/)
  - Linux: TeX Live (install via package manager)
  
- **Optional but Recommended**:
  - [Visual Studio Code](https://code.visualstudio.com/) with LaTeX Workshop extension
  - [TeXstudio](https://www.texstudio.org/) - LaTeX editor
  - [Overleaf Desktop](https://www.overleaf.com/) - For local Overleaf experience

## 🚀 Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/VimsRocz/Alternative_Latex_Documentations.git
   cd Alternative_Latex_Documentations
   ```

2. **Verify LaTeX installation**:
   ```bash
   pdflatex --version
   ```

3. **Start using templates**:
   - Navigate to the `templates/` directory
   - Choose a template that fits your needs
   - Copy it to your working directory
   - Customize and compile

## 📝 Usage

### Quick Start

1. **Choose a template** from the `templates/` directory
2. **Copy the template** to your working directory:
   ```bash
   cp -r templates/basic-report my-report
   cd my-report
   ```

3. **Edit the main `.tex` file** with your content

4. **Compile the document**:
   ```bash
   pdflatex main.tex
   ```
   
   For documents with bibliography:
   ```bash
   pdflatex main.tex
   bibtex main
   pdflatex main.tex
   pdflatex main.tex
   ```

5. **View the generated PDF**

### Using with an Editor

**Visual Studio Code**:
1. Install the "LaTeX Workshop" extension
2. Open a `.tex` file
3. Press `Ctrl+Alt+B` (or `Cmd+Option+B` on macOS) to build
4. Press `Ctrl+Alt+V` (or `Cmd+Option+V` on macOS) to view PDF

**TeXstudio**:
1. Open a `.tex` file
2. Press `F5` to compile and view

## 📁 Templates

Available templates include:

- **Basic Report**: Simple document structure for reports
- **Academic Paper**: Template for academic articles and papers
- **Presentation**: Beamer template for presentations
- **Thesis/Dissertation**: Complete thesis template
- **Resume/CV**: Professional CV templates
- **Letter**: Formal letter template
- **Book**: Multi-chapter book template

Each template includes:
- Pre-configured document class and packages
- Example content and structure
- Comments explaining customization options
- Bibliography setup (where applicable)

## 📂 Project Structure

```
Alternative_Latex_Documentations/
├── templates/           # LaTeX document templates
│   ├── basic-report/
│   ├── academic-paper/
│   ├── presentation/
│   ├── thesis/
│   ├── cv-resume/
│   ├── letter/
│   └── book/
├── docs/               # Additional documentation
│   ├── getting-started.md
│   ├── latex-basics.md
│   └── troubleshooting.md
├── examples/           # Example compiled documents
├── scripts/            # Helper scripts
├── .gitignore
├── CONTRIBUTING.md
├── CODE_OF_CONDUCT.md
├── LICENSE
└── README.md
```

## 🤝 Contributing

Contributions are welcome! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for details on how to contribute to this project.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 💬 Support

- **Issues**: Report bugs or request features via [GitHub Issues](https://github.com/VimsRocz/Alternative_Latex_Documentations/issues)
- **Discussions**: Join conversations in [GitHub Discussions](https://github.com/VimsRocz/Alternative_Latex_Documentations/discussions)

## 🙏 Acknowledgments

- LaTeX Project Team for the amazing typesetting system
- All contributors who help improve this project
- The open-source community for inspiration and support

---

**Made with ❤️ for the LaTeX community**
