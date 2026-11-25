# Unmukt Shukla

Personal site for Unmukt Shukla, SDE-1 at Neurality Health. One long page: selected work, a record of roles, a short note on the person, and skills grouped by discipline.

The page is a typeset document. Paper, one red, and a grid. Production work at Neurality sits first. Public projects link out to the live desk or the repository.

## Run it locally

```bash
npm install
npm run dev
```

The dev server listens on port **4327**.

```bash
npm run lint
npm run build
npm start
```

## Edit the words

All of the facts live in [`src/lib/content.ts`](src/lib/content.ts). The sections in `src/components/` are laid out by hand, so a new project is a new block in `work.tsx`, not another copy of the same card.
