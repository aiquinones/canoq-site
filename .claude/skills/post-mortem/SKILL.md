---
name: post-mortem
description: Capture nits from the current conversation and propose updates to best-practices.md.
allowed-tools: Read, Write, Edit, Bash, AskUserQuestion
---

## Post-mortem Process

### 1. Recount Nits
Review the conversation for:
- Corrections the user made ("no, not like that", "remove X", "change Y")
- Preferences expressed about code style, naming, or structure
- Patterns that caused friction or needed revisiting
- Things that worked well and should be reinforced

List them clearly and concisely.

### 2. Propose Updates
Read the current `best-practices.md`.

For each nit, propose a specific addition, edit, or clarification.
Show exactly what would change — quote the new text.

Do not apply anything yet.

### 3. Confirm and Update
Ask the user to confirm the proposed changes.

Once confirmed:
- Update `best-practices.md` with the approved changes
- Commit: `docs: update best-practices from post-mortem`
