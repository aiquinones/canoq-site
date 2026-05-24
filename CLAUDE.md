@AGENTS.md

# canoq-site

Personal site for Cano Q (AI Quinones). Minimalistic, techy personal page inspired by Vercel Ship NYC.

## Stack

- **Next.js 16** (App Router) — read `node_modules/next/dist/docs/` before touching routing or layouts
- **React 19**
- **Tailwind CSS v4** — config lives in `globals.css` via `@theme inline`, no `tailwind.config.js`
- **TypeScript** strict mode
- **Geist** font (Sans + Mono) via `next/font/google`

## Project Structure

```
src/
  app/
    layout.tsx          # Root layout + metadata
    page.tsx            # Thin shell — renders <SiteShell />
    globals.css         # Tailwind v4 theme + CSS variables
  components/
    SiteShell           # 'use client' — owns activeId state, orchestrates layout transition
    LandingPage         # Hero + Experience + Links (home view)
    LeftNav             # Slide-in nav: "Cano Q" back button + experience list
    ExperienceDetail    # Detail pane: experience name + body content
    ExperienceItem      # title / subtitle / tag row, accepts onClick
    ExternalLink        # external anchor with ↗, opens in new tab
    TypingAnimation     # typewriter effect, accepts words[]
  lib/
    experiences.ts      # Experience type + data array (source of truth)
    styles.ts           # Shared Tailwind className constants
```

## Development

```bash
pnpm dev       # localhost:3000
pnpm build
npx tsc --noEmit   # type-check before committing
```

## Conventions

See `best-practices.md` for coding standards specific to this project.

Skills available: `/dev-feature`, `/post-mortem`, `/commit`
