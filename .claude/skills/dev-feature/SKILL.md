---
name: dev-feature
description: Full feature development cycle for canoq-site — plan, implement, PR, optional review, post-mortem prompt.
allowed-tools: Read, Write, Edit, Bash, Grep, Glob, Agent, AskUserQuestion
---

## Feature Development Cycle

### 1. Read Context
Before anything else:
- Read `best-practices.md`
- Read `CLAUDE.md` for project structure
- Scan the relevant source files

### 2. Plan
Outline:
- Which files change
- New components needed and their props
- New style constants for `src/lib/styles.ts`
- Reuse opportunities from existing components

Present the plan. Wait for confirmation before implementing.

### 3. Implement
Follow `best-practices.md` throughout:
- Extract repeating UI into named components
- No raw Tailwind strings — add to `styles.ts`
- Named exports everywhere except Next.js file conventions
- Keep `page.tsx` scannable

Run `npx tsc --noEmit` before committing.

### 4. Commit + PR
- Stage and commit with a conventional commit message
- Open a PR with a clear summary and test plan

### 5. Optional Review
Ask the user:
> "Want me to spawn a Haiku agent to review the PR? It'll cost a small amount (~$0.01)."

If yes: spawn a `code-reviewer` subagent pointing at the current branch diff.
Present findings. Iterate if needed.

### 6. Iterate
Address any feedback. Push updates to the PR branch.

### 7. Post-mortem prompt
Once the user signals the PR is merged, ask:
> "Want to run `/post-mortem` to capture nits from this session and update best-practices.md?"
