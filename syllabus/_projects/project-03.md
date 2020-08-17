---
title: Substantial Revision of Your Web Presence
due_date: &deadline 2020-12-10
preview: true
goals:
  - >
    Revise a previous project based on instructor feedback and any additional knowledge that you
    have gained since its original submission
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
  Use JavaScript only for progressive enhancement. All site content and basic functionality (e.g.,
  clicking links, viewing images and other media, and scrolling) must still be available even in the
  absence of JavaScript.
- >
  **Absolutely no** `on-` or other deprecated event attributes in your HTML. Handle all events via
  event listeners in your JavaScript. The only element of your HTML that should contain any
  references to JavaScript should be a `<script>` element that loads your JavaScript file, and
  possibly also your DOM-manipulation framework. In other words, keep your JavaScript unobtrusive to
  progressively enhance your HTML.
- >
  Avoid using JavaScript to manipulate CSS whenever possible. Limit JavaScript to manipulating the
  DOM, including adding and removing state classes, and keep style information and transitions where
  they belong: in your CSS file.
- >
  Organized, readable source that is hand-written and original (no WYSIWYGs or code-generators, no
  Bootstrap or other off-the-shelf HTML or CSS frameworks). A JavaScript framework for basic DOM
  manipulation is permissible, such as jQuery or a lightweight alternative such as Umbrella JS or
  Shoestring.
- >
  A Git repository with frequent commits and meaningful commit messages that accurately reflect
  each set of changes that you make
- >
  Your GitHub repository must contain the files and commits from both this project and Project Two.
  You are welcome to create a new remote for Project Three, but be sure that it includes your
  Project Two commits, too.
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

For this project, you will substantially revise, refactor, and improve your web presence from
Project Two and write some kind unobtrusive JavaScript component to progressively enhance your site.
