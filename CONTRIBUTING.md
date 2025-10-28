# Contributing to Alternative LaTeX Documentations

Thank you for your interest in contributing to Alternative LaTeX Documentations! This document provides guidelines and instructions for contributing.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Getting Started](#getting-started)
- [Submission Guidelines](#submission-guidelines)
- [Style Guidelines](#style-guidelines)
- [Template Guidelines](#template-guidelines)

## 📜 Code of Conduct

This project and everyone participating in it is governed by our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## 🤝 How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check existing issues to avoid duplicates. When creating a bug report, include:

- **Clear title and description**
- **Steps to reproduce** the issue
- **Expected behavior** vs. actual behavior
- **LaTeX distribution and version** (e.g., TeX Live 2023)
- **Operating system and version**
- **Relevant error messages or logs**

### Suggesting Enhancements

Enhancement suggestions are welcome! Please provide:

- **Clear and descriptive title**
- **Detailed description** of the proposed feature
- **Use cases** explaining why this would be useful
- **Examples** of how it would work

### Adding New Templates

We welcome new LaTeX templates! Please ensure your template:

1. Follows a clear and logical structure
2. Includes comprehensive comments
3. Uses commonly available packages
4. Compiles without errors on major LaTeX distributions
5. Includes example content demonstrating features
6. Contains a README explaining its purpose and usage

### Improving Documentation

Documentation improvements are always appreciated:

- Fix typos or clarify unclear sections
- Add examples or tutorials
- Translate documentation to other languages
- Update outdated information

## 🚀 Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR-USERNAME/Alternative_Latex_Documentations.git
   cd Alternative_Latex_Documentations
   ```

3. **Create a branch** for your changes:
   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Make your changes** following our guidelines

5. **Test your changes**:
   - Compile LaTeX documents to ensure they work
   - Check for compilation errors
   - Verify cross-platform compatibility if possible

6. **Commit your changes**:
   ```bash
   git add .
   git commit -m "Add descriptive commit message"
   ```

7. **Push to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```

8. **Create a Pull Request** on GitHub

## 📝 Submission Guidelines

### Pull Request Process

1. **Update documentation** if you're adding new features or templates
2. **Test thoroughly** on at least one LaTeX distribution
3. **Follow the style guidelines** outlined below
4. **Write clear commit messages** describing what and why
5. **Reference relevant issues** in your PR description
6. **Be responsive** to feedback and requested changes

### Commit Message Guidelines

Write clear, concise commit messages:

- Use the present tense ("Add feature" not "Added feature")
- Use the imperative mood ("Move file to..." not "Moves file to...")
- Limit the first line to 72 characters or less
- Reference issues and pull requests where appropriate

Examples:
- `Add academic paper template with bibliography`
- `Fix compilation error in thesis template`
- `Update README with installation instructions`
- `Improve comments in presentation template`

## 🎨 Style Guidelines

### LaTeX Code Style

1. **Indentation**: Use 2 or 4 spaces consistently
2. **Line Length**: Keep lines under 80-100 characters when possible
3. **Comments**: Add comments explaining non-obvious choices
4. **Package Loading**: Group related packages together with comments
5. **Sectioning**: Use clear, descriptive section titles

Example:
```latex
% Document class configuration
\documentclass[12pt, a4paper]{article}

% Essential packages
\usepackage[utf8]{inputenc}
\usepackage[T1]{fontenc}

% Layout and formatting
\usepackage{geometry}
\usepackage{setspace}

% Graphics and figures
\usepackage{graphicx}
\usepackage{float}
```

### Documentation Style

1. **Markdown**: Use proper Markdown formatting
2. **Code Blocks**: Use fenced code blocks with language specification
3. **Headers**: Use hierarchical headers appropriately
4. **Links**: Use descriptive link text
5. **Examples**: Include practical examples

## 📐 Template Guidelines

When creating or modifying templates:

1. **Structure**:
   - Include a clear preamble section
   - Organize content logically
   - Use meaningful file and section names

2. **Comments**:
   - Explain the purpose of each section
   - Document customization options
   - Note any special requirements or dependencies

3. **Packages**:
   - Only include necessary packages
   - Add comments explaining why each package is needed
   - Use widely available packages

4. **Portability**:
   - Test on multiple LaTeX distributions if possible
   - Avoid hard-coded paths
   - Use relative paths for included files

5. **README**:
   - Create a README.md in the template directory
   - Explain the template's purpose and features
   - Provide compilation instructions
   - List any special requirements

## ✅ Checklist

Before submitting your contribution, ensure:

- [ ] Code/template compiles without errors
- [ ] Documentation is clear and complete
- [ ] Commit messages are descriptive
- [ ] Changes are tested
- [ ] README is updated if needed
- [ ] No unnecessary files are included (check .gitignore)
- [ ] Code follows style guidelines
- [ ] Comments are clear and helpful

## 🤔 Questions?

If you have questions about contributing, feel free to:

- Open an issue with the "question" label
- Start a discussion in GitHub Discussions
- Reach out to maintainers

## 🙏 Thank You!

Your contributions make this project better for everyone. We appreciate your time and effort!

---

**Happy Contributing! 🎉**
