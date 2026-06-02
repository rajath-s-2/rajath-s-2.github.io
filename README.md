# Quant Portfolio

Static portfolio site for a quant researcher or quant engineer. It is designed to deploy cleanly on GitHub Pages with no build step.

## Edit Your Details

- Update project links in `script.js` when you publish matching public repositories.
- Refine the project entries in `script.js` with repository URLs, screenshots, and any metrics you want public.
- Replace `resume.pdf` whenever your resume changes.
- Course project artifacts and reports live in `assets/course-projects`.
- Keep project descriptions specific: research question, methods, dataset, result, and link.

## Host on GitHub Pages

1. Create a new GitHub repository named `portfolio` or `rajath-s-2.github.io`.
2. Push these files to the repository.
3. In GitHub, go to `Settings -> Pages`.
4. Under `Build and deployment`, choose `Deploy from a branch`.
5. Select the `main` branch and `/root`, then save.

If the repository is named `rajath-s-2.github.io`, the site will be available at:

```text
https://rajath-s-2.github.io
```

If the repository is named `portfolio`, the site will usually be available at:

```text
https://rajath-s-2.github.io/portfolio
```

## Project Template

Use this structure in `script.js`:

```js
{
  title: "Project name",
  category: "research",
  year: "2026",
  description: "One sentence covering the question, method, and result.",
  tags: ["Python", "pandas", "backtesting"],
  link: "https://github.com/rajath-s-2/project-name",
}
```
