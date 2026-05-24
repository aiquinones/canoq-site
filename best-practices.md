# Best Practices

Even though this is a personal site built fast, the code should be readable and intentional — not slop.

## Components

**Extract repeating UI into named components.**
If the same structure appears more than once, it becomes a component.
Examples: `ExperienceItem`, `ExternalLink`, `TypingAnimation`.

**Components receive data as props — never hardcode content inside them.**
`TypingAnimation` takes `words[]`. `ExperienceItem` takes `title`, `subtitle`, `tag`.
If you find yourself editing a component to change content, the data should be a prop instead.

**Keep components small and single-purpose.**
A component that does two things should probably be two components.

## Styles

**No raw Tailwind strings repeated across files.**
Any className used more than once goes into `src/lib/styles.ts` as a named constant.
`page.tsx` should reference `styles.heroHeader`, not `"text-8xl font-bold tracking-tighter mb-6 text-foreground"`.

**Name style constants by role, not appearance.**
`styles.sectionLabel` — good. `styles.textXsMonoUppercase` — bad.

## Exports

**Named exports for all components and utilities.**
`export const ExternalLink = ...` — correct.
Default export only where Next.js requires it (`page.tsx`, `layout.tsx`).
Even then, prefer: `const Home = () => ...; export default Home`.

## Page Files

**`page.tsx` should read like a document.**
Sections clearly labeled with comments, props passed cleanly, no inline style strings.
If you can't scan it in 10 seconds and understand the structure, it needs refactoring.

## Components (continued)

**Place helper/sub-components below the main export.**
If a file has one primary exported component and one or more private helpers, define the helpers after the main export. The reader sees the public API first.

## Content

**Never write copy that should come from the author.**
On a personal site, biographical and descriptive text has value precisely because it's human-written.
AI-generated copy is not a draft — it's a counterfeit. Use lorem ipsum as an honest placeholder until the real text is ready.

## General

**Readable > clever.**
This is a personal site. Prioritize code that future-Cano can pick up and edit without re-reading a tutorial.
