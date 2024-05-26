# Iliauni Programming Club

<p style="font-size: 20px;">
Welcome to the Iliauni Programming Club's official website repository!
This repository contains the code for our club's website, featuring information about events, FAQs, member testimonials, and signup links.
</p>

![Iliauni Programming Club](public/favicon-dark-v3.png)

<p style="font-size: 20px;">If you are a Iliauni Student then <a href="https://forms.gle/VFYGsTiG3tUJ3fYP6" target="_blank" style="text-decoration: none;" class="custom-link"><strong>Join Us</strong></a>!</p>


# License

This project is licensed under the [MIT License](LICENSE).

## Project Structure

- Using [Verve](https://github.com/aryanjha256/verve) as a template

```text
/
├── public/
│   └── favicon.png
├── src/
│   ├── components/
│   ├── content/
│   │   └── blog/
│   ├── layouts/
│   ├── pages/
│   │   └── index.astro
│   └── config.ts
└── package.json
```

Everything in `src/pages/` that ends with `.astro` or `.md` is a route based on its filename.

Components go into `src/components/`.

Images go into `public/` directory.

All blog posts are stored in `src/content/blog` directory.

## Commands

All commands are run from the root of the project, from a terminal:

| Command                    | Action                                           |
| :------------------------- | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm run dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm run build`           | Build your production site to `./dist/`          |
| `pnpm run preview`         | Preview your build locally, before deploying     |
| `pnpm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm run astro -- --help` | Get help using the Astro CLI                     |

## For more details see [Astro Docs](https://docs.astro.build)
