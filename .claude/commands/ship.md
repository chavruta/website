## Step 1: Review

Run `git diff` to see all staged and unstaged changes. Also run `git status` to check for untracked files.

Review every changed and new file carefully. Check for:
- Bugs or logic errors
- Broken HTML/CSS/JS (unclosed tags, syntax errors, missing selectors)
- Security issues (exposed secrets, XSS, injection)
- Performance problems (unoptimized assets, unnecessary requests)
- Accessibility regressions (missing aria labels, contrast issues, broken RTL)
- Broken links or references
- Content inconsistencies between Hebrew, English, and Arabic versions

If you find any issues:
- List each issue clearly with the file and line number
- Explain what's wrong and suggest a fix
- **STOP HERE** — do not proceed to steps 2 or 3. Fix the issues first, then the user can run /ship again.

If the review passes clean, say "Review passed" and proceed.

## Step 2: Update documentation

Check if any of the changes require updates to:
- `CLAUDE.md` — project context, architecture, file structure, phase status
- `README.md` — contribution guidelines, technical details, current status

Only update these files if the code changes meaningfully affect their content (e.g. new files added, architecture changed, new features). Do not update them for minor edits or content-only changes.

## Step 3: Commit and push

- Stage all relevant files (be specific — don't use `git add .`)
- Do NOT stage files that contain secrets (.env, credentials, API keys)
- Write a clear, concise commit message that describes what changed and why
- Commit with the co-author trailer
- Push to main

End with a summary: what was shipped and the commit hash.
