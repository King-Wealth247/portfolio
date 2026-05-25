# To make modifications

Clone the repository:

```bash
git clone https://github.com/King-Wealth247/portfolio.git
```

Navigate to the project directory:

```bash
cd portfolio
```

Create a new branch for your changes:

```bash
git checkout -b your-branch-name
```

Install dependencies:

```bash
npm install
```

Build SCSS and watch for changes:

```bash
npx gulp
```

The default Gulp task compiles `scss/*.scss` into `css/main.css` and watches the source files.

## Edit files

Modify the project files as needed:

* `index.html`
* `about.html`
* `projects.html`
* `contact.html`
* `scss/main.scss` and partials
* `js/main.js`

---

## Commit your changes

```bash
git add .
git commit -m "Update portfolio content or styling"
git push origin your-branch-name
```
