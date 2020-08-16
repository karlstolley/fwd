---
title: Project Title
due_date: &deadline 2020-11-19
preview: true
goals:
  - Produce modern standards-compliant, mobile-first CSS
  - Establish site typography with a modular scale, and set type on a consistent baseline grid
  - Execute responsive design with flexible media and fluid grids, expressed as percentages
  - Continue to write and revise valid, well-formed semantic HTML
  - Effectively comment on and format source code for maximum readability
  - Track the development of a project over time using version control
  - >
    Deploy web pages to a public server (can be GitHub pages, configured with your own domain name
    or subdomain)
requirements:
  - Multiple linked valid, well-formed semantic HTML files (Project 1, essentially)
  - >
    Directory-based URLs with use of the default-served `index.html` file, so that you can point to,
    for example, `example.com/resume/`
  - >
    All source files in UTF-8/Unicode character encoding with Unix-style line endings (LF), entabbed
    with spaces (two spaces per tab)
  - >
    Your HTML and CSS files should all be indented with 2 spaces per level of indent; indent all CSS
    style rules inside the declaring block, and further indent all rules and blocks inside your
    media queries
  - Make use of both the validators and linters to ensure the quality of both your HTML and CSS
  - Include at least one form of media (image, audio, video) in your project
  - >
    Semantically structured text-based content to accompany all media elements (image, audio,
    video). Make use of the `<figure>` and `<figcaption>` tags
  - >
    One single valid, linted, error-free CSS file called `screen.css`. **Do not** create more than
    one CSS file for your project; all styles should be in the same file. Use an `id` value on
    `<html>` or `<body>` and leverage that in a CSS descendant selector if you need a special style
    on a particular page.
  - The opening lines of your `screen.css` file should be the Eric Meyer reset CSS styles
  - >
    Use of only relative units (em, rem, vm, %) in your CSS; no px, pt, or other absolute units are
    permitted in your CSS
  - >
    Use at least two `min-width` media queries to enhance your mobile-first styles for larger screens
  - >
    Organized, readable source that is hand-written and original (no WYSIWYGs or code-generators, no
    Bootstrap or other off-the-shelf HTML or CSS frameworks)
  - >
    A Git repository with frequent commits and meaningful commit messages that accurately reflect
    each set of changes that you make
  - >
    Your GitHub repository must contain **only** the files and commits from this project; you are
    encouraged to use and further improve your HTML files from Project 1, but create a brand-new
    repository on your computer and on GitHub


deliverables:
  - action:
    description: Deliverable one.
    details:
      -
    deadline:
  - action:
    description: Deliverable two.
    details:
      -
    deadline:
  - action: Email instructor with final project deliverables.
    description: "The email should contain:"
    details:
      - The https:// link to your project’s GitHub repository
      - >
        A 4-5 sentence self-critique of your project and your progress in class to this point (write
        in the body of the email; **do not** attach a Word document or a PDF)
    deadline: *deadline
---

This project builds on Project One, which you will further revise and fully style with CSS to
provide a basic typographic treatment and responsive design that makes judicious use of media
queries and relative units (`em`/`rem`, `vw`, `%`). You will deploy your pages to a server behind a domain
name under your control.
