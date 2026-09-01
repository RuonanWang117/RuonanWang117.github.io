# 王若楠 · Ruonan Wang — Academic Homepage

A bilingual academic homepage featuring research interests, publications,
education, experience, selected technical projects and contact information.

## GitHub Pages deployment

1. Create the public repository `RuonanWang117.github.io`.
2. Push this project to the repository's `main` branch.
3. In **Settings → Pages**, choose **GitHub Actions** as the source.

The included workflow builds the static site and deploys `dist/client`.

## Local development

```bash
pnpm install
pnpm dev
```

## Build

```bash
pnpm build
```

The static GitHub Pages output is generated in `dist/client`.
