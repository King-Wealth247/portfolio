# King Wealth — Developer Portfolio

A responsive personal portfolio website built with HTML, SCSS, and JavaScript.
This repository includes a multi-page site with a homepage, about page, projects page, contact page, and a Gulp-based SCSS build workflow.

---

## Project Overview

This portfolio site includes:

* `index.html` — homepage with welcome text, language toggle, and navigation
* `about.html` — biography, education, internship experience, and skills section
* `projects.html` — curated project showcase with GitHub links and live preview links
* `contact.html` — contact section for visitors
* `scss/` — Sass source files for styling
* `css/main.css` — compiled stylesheet generated from Sass
* `js/main.js` and `js/translation.js` — client-side interactions and language toggle support

---

## Technologies

* HTML5
* SCSS / CSS
* JavaScript (module-based)
* Gulp 5 for build automation

---

## Local Setup

1. Clone the repository:

```bash
git clone https://github.com/King-Wealth247/portfolio.git
cd portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Build styles and start the watch task:

```bash
npx gulp
```

This compiles `scss/*.scss` into `css/main.css` and watches the Sass files for changes.

---

## Development Notes

* The main Sass entry is `scss/main.scss`.
* The `gulpfile.js` compiles all files inside `scss/` and outputs compiled CSS to `css/`.
* The site uses Font Awesome for icons and supports a language toggle in the header.

---

## Repository Links

* GitHub: https://github.com/King-Wealth247/portfolio
* Live portfolio deployment: https://King-Wealth247.github.io/portfolio/

---

## Contact

If you'd like to collaborate or provide feedback, feel free to connect on GitHub or LinkedIn.
