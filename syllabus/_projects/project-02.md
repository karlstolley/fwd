---
title: Responsive, Relative-Unit&nbsp;CSS
due_date: &deadline 2020-11-12
preview: false
goals:
  - Produce modern standards-compliant, mobile-first CSS
  - Establish site typography with a modular scale, and set type on a consistent baseline grid
  - Execute responsive design with flexible media and fluid grids, expressed as percentages
  - Continue to write and revise valid, well-formed semantic HTML
  - Effectively comment on and format source code for maximum readability
  - Track the development of a project over time using version control
  - >
    Deploy web pages to a public server (can be GitHub pages, optionally configured with your own
    domain name or subdomain)
requirements:
  - >
    Include multiple (at least three) linked valid, well-formed semantic HTML files (Project One,
    essentially)
  - >
    Include only one single valid, linted, error-free CSS file called `screen.css`. **Do not**
    create more than one CSS file for your project; all styles should be in the same file. Use an
    `id` value on `<html>` or `<body>` and leverage that in a CSS descendant selector if you need a
    special style on a specific page
  - >
    Use only directory-based URLs containing the default-served `index.html` file, so that you can
    point to, for example, `example.com/resume/`
  - >
    Prepare all source-code files in UTF-8/Unicode character encoding with Unix-style line endings
    (LF), entabbed with spaces (two spaces per tab)
  - >
    Indent all HTML and CSS files with 2 spaces per level of indent. Indent HTML only to show nested
    tag relationships; indent all CSS style rules inside the declaring block, and further indent all
    rules and blocks inside of your media queries
  - >
    Your project repository **must** contain the ITMD 361–style
    [`.htmllintrc`](https://gist.github.com/profstolley/559aac5112928c7c24c628c6305b70b8#file-htmllintrc) and
    [`.stylelintrc`](https://gist.github.com/profstolley/559aac5112928c7c24c628c6305b70b8#file-stylelintrc)
    linter configuration files
  - Make use of both the validators and linters to ensure the quality of both your HTML and CSS
  - Include at least one form of media (image, audio, video) in your project
  - >
    Include semantically structured, accessible text-based content to accompany all media elements
    (image, audio, video). Make use of the `<figure>` and `<figcaption>` tags
  - >
    Open your `screen.css` file with the
    [ITMD 361 House-Style modified, minified Eric Meyer reset CSS styles](https://gist.github.com/profstolley/b1f851e061f98fcbc0e41d39adc32847#file-reset-min-css)
    (if loading externally hosted typefaces via an `@import` statement, that must be your first line
    of CSS, before the reset styles)
  - >
    Use only relative units (em, rem, vm, %) in your CSS; no px, pt, or other absolute units are
    permitted in your CSS, **including in media queries**, which should be calculated as 16px ems,
    regardless of what your actual `html` em-value is
  - >
    Use at least two `min-width` media queries to enhance your mobile-first styles for larger screens
  - Completely avoid `max-width` media queries, which are **not allowed** (they are not mobile-first)
  - >
    Present source code that is hand-written and original (no WYSIWYGs or code-generators, no
    Bootstrap or other off-the-shelf HTML or CSS frameworks); no presentational classes
  - >
    Prepare a Git repository with frequent commits and meaningful commit messages that accurately
    reflect each set of changes that you make
  - >
    Your GitHub repository must contain **only** the files and commits from this project; you are
    encouraged to use and further improve your HTML files from Project One, but create a brand-new
    repository for Project Two on your computer and on GitHub

deliverables:
  - action: >
      Post draft project-repository video and GitHub link to the
      [Project Showcase Basecamp](https://3.basecamp.com/3058761/projects/18696459)
    description: >
      Create a new message thread with your name and Project Two, something like “Scarlet Hawk:
      Project Two.” The post should include:
    details:
      - The https:// link to your project’s GitHub repository
      - The public link to your project on a world-facing server
      - >
        A three- to five-minute video walkthrough of your project where you capture your site
        displayed on your computer and where you speak aloud describing your progress and challenges
      - A few questions for peer and instructor feedback
    deadline: 2020-10-29
  - action: >
      Respond with helpful feedback to at least 3 other student projects on the
      [Project Showcase Basecamp](https://3.basecamp.com/3058761/projects/18696459).
    deadline: 2020-11-05
  - action: Email instructor with final project deliverables.
    description: "The email should contain:"
    details:
      - The https:// link to your project’s GitHub repository
      - The public link to your project on a world-facing server
      - >
        A 5-7 sentence self-critique of your project and your progress in class to this point (write
        in the body of the email; **do not** attach a Word document or a PDF)
    deadline: *deadline
---

This project builds on Project One, which you will further revise and fully style with CSS to
provide a basic typographic treatment and a mobile-first responsive design that makes judicious use
of media queries and relative units (`em`/`rem`, `vw`, `%`). You will deploy your pages to a public
server, optionally behind a domain name under your control.
