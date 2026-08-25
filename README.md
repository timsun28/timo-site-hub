# Timo's site shelf

A small Next.js site that doubles as a working StyleX example. It uses a Cobalt visual theme, server-rendered page structure, and one client component for the interactive project filter.

## StyleX patterns in this repo

- `styles/tokens.stylex.ts` exports real `stylex.defineVars` tokens. `styles/cobalt.theme.ts` creates `cobaltTheme` with `stylex.createTheme`.
- `app/layout.tsx` applies the theme once at the application root.
- `app/page.tsx`, `components/project-shelf.tsx`, and `components/project-card.tsx` keep StyleX objects beside their JSX. Local `stylex.create` and `stylex.props` calls compile away.
- `components/project-shelf.tsx` demonstrates conditional composition with `stylex.props(styles.filter, isSelected && styles.filterSelected)`.
- `styles/globals.css` contains reset CSS and the app's only `@stylex` directive.
- `babel.config.js` and `postcss.config.js` share StyleX compiler options. This is the configuration StyleX recommends for Next's App Router.

## Run it

```bash
pnpm install
pnpm dev
```

Then open `http://localhost:3003`.

## Verify

```bash
pnpm lint
pnpm build
```
