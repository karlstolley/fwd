---
title: Targeted Revision of Your Web Presence
due_date: &deadline 2021-12-09
preview: true
goals:
  - >
    Revise a previous project based on instructor feedback and any additional knowledge that you
    have gained since its original submission
requirements:
- All the requirements for [Project Two](#project-two)
- >
  Your targeted revision should appear on a feature branch in your repository; if you like the work
  enough to merge the commits from the feature branch into your `main` branch, that's fine, but
  preserve the feature branch for submitting your project.
- >
  The feature branch should be descriptive of your targeted revision. If you work on colors,
  `colors` is a great branch name. Working on layout? Go with `layout`. And so on.
- >
  Use JavaScript only for progressive enhancement. All site content and basic functionality (e.g.,
  clicking links, viewing images and other media, and scrolling) must still be available even in the
  absence of JavaScript.
- >
  **Do not use** `on-` or other deprecated event attributes in your HTML. Handle all events via
  event listeners in your JavaScript, with `addEventListener`. The only element of your HTML that
  should contain any references to JavaScript should be a `<script>` element that loads your
  JavaScript file, and possibly also your DOM-manipulation framework. In other words, keep your
  JavaScript unobtrusive to progressively enhance your HTML.
- >
  Avoid using JavaScript to manipulate CSS whenever possible. Limit JavaScript to manipulating the
  DOM, including adding and removing state classes, and keep style information and transitions where
  they belong: in your CSS file.
deliverables:
  - action: (**Firm deadline.**) Email instructor with final project deliverables.
    description: "The email should contain:"
    details:
      - The https:// link to your project’s GitHub repository
      - The https:// link to your feature branch on GitHub
      - >
        A 4-5 sentence self-critique of your project and your progress in class this semester (write
        in the body of the email; **do not** attach a Word document or a PDF)
    deadline: *deadline
---

For this project, you will make a targeted revision of or enhancement to your Project Two. You will
do that work on a feature branch named for the emphasis of your revision. For example, if you want
to work on your site’s layout, you would create and checkout a feature branch called `layout` (`git
checkout -b layout`) and write all of your commits on that branch. Targeted revisions to your CSS
and HTML are acceptable for this project, but you may also elect to write an unobtrusive JavaScript
component to progressively enhance your site.
