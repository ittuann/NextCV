# NextCV

📄 A modern resume website template. Build and manage your resume in Markdown — built with Tailwind CSS and Next.js.

## Samples

![Sample 1](./examples/example.png)

Visit [Live Demo](https://nextcv.vercel.app): https://nextcv.vercel.app

## Quick Start

- Deploy on Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fittuann%2FNextCV)

### Local Development

1. Fork and Clone this Repository

- Create [your own fork](https://docs.github.com/get-started/quickstart/fork-a-repo) of this repository to your GitHub account.
- Clone your fork to your local machine

```bash
git clone https://github.com/<your-github-username>/NextCV.git
cd NextCV
```

If you simply wish to explore the repository, you can clone the original repository directly:

```bash
git clone https://github.com/ittuann/NextCV.git
cd NextCV
```

2. Install Dependencies

```bash
pnpm i
```

3. Preview

```bash
pnpm dev
```

To preview the builded static site:

```bash
pnpm build
pnpm serve
```

Then you can open `http://localhost:3000` in your browser.

## Config

Edit the `cv.yaml` file writing in Markdown syntax in the root of the project.

Website will automatically read this file and generate your resume.
