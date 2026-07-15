---
name: sync-package-docs
description: Reconciles content between this site's library docs (src/content/library/**) and the corresponding package repo's README.md under ~/Developer/fylgja/. Use whenever a package README.md changes and the site docs might be stale, whenever a site library doc changes and the package README might need the same update, or whenever explicitly asked to sync/check doc drift between the site and the package repos.
---

# Sync Package Docs

Fylgja's packages each have their own repo (or subfolder in the `fylgja/fylgja` monorepo)
with a `README.md`, and this site has a corresponding content file under
`src/content/library/` that covers the same package. The two drift out of sync easily:
a fix or clarification made in one place doesn't automatically make it into the other.

This skill reconciles them in both directions. It is not a one-way "copy README into site"
or "copy site into README" operation, it's a factual diff: find real content
discrepancies (a corrected behavior, a version caveat, a removed recommendation, a new
option) and propagate whichever side is actually correct to the other side.

## Repo mapping

| Site file | Local package repo path |
|---|---|
| `src/content/library/base.mdx` | `~/Developer/fylgja/fylgja/base/README.md` |
| `src/content/library/tokens.mdx` | `~/Developer/fylgja/fylgja/tokens/README.md` |
| `src/content/library/utilities.mdx` | `~/Developer/fylgja/fylgja/utilities/README.md` |
| `src/content/library/extensions/props-builder.md` | `~/Developer/fylgja/fylgja/props-builder/README.md` |
| `src/content/library/components/badge.mdx` | `~/Developer/fylgja/fylgja/components/badge/README.md` |
| `src/content/library/components/breadcrumbs.mdx` | `~/Developer/fylgja/fylgja/components/breadcrumbs/README.md` |
| `src/content/library/components/card.mdx` | `~/Developer/fylgja/fylgja/components/card/README.md` |
| `src/content/library/components/form-extend.mdx` | `~/Developer/fylgja/fylgja/components/form-extend/README.md` |
| `src/content/library/components/input-group.mdx` | `~/Developer/fylgja/fylgja/components/input-group/README.md` |
| `src/content/library/components/toast.mdx` | `~/Developer/fylgja/fylgja/components/toast/README.md` |
| `src/content/library/extensions/snap-slider.md` | `~/Developer/fylgja/snap-slider/README.md` |
| `src/content/library/extensions/stylelint-config.md` | `~/Developer/fylgja/stylelint-config/README.md` |
| `src/content/library/extensions/alpinejs-dialog.md` | `~/Developer/fylgja/alpinejs-dialog/README.md` |
| `src/content/library/extensions/sass-extend.md` | `~/Developer/fylgja/fylgja-sass/README.md` |
| `src/content/library/extensions/preset-tailwind.md` | `~/Developer/fylgja/tailwindcss/README.md` |
| `src/content/library/extensions/preset-unocss.md` | (no repo yet, it's a `draft: true` stub, skip) |

If a mapped local path doesn't exist (the repo isn't cloned locally), report it as skipped
rather than failing or trying to clone it yourself. Re-check the mapping table itself
against `git:` frontmatter in `src/content/library/**` occasionally, new packages/components
get added over time and won't be in this table until it's updated.

## What actually needs to match

Compare the underlying facts, not formatting. These are expected, permanent differences,
never try to "fix" them:

- The site uses Astro/MDX components (e.g. `<InstallTabs pkg="..." cdn="..." />`) where the
  README uses plain `npm install` shell blocks and a CDN `<link>` snippet. Same information,
  different presentation, leave both as they are.
- The site has a `faq:` frontmatter array. READMEs don't have an equivalent section and
  shouldn't get one added.
- The site often has live interactive demo markup (raw HTML previews with inline styles/JS
  for the docs preview). READMEs don't need these, a plain code sample is enough there.
- Wording, heading structure, and section order can differ freely.

What must actually agree, because it's a claim about how the package behaves:

- Install/import instructions and paths (npm package name, `@import`/`@use` paths, granular
  imports).
- Documented options, parameters, defaults, and CSS variables.
- Behavior descriptions and caveats (e.g. "not fully supported in Safari yet" style notes).
- Version/browser-support claims. These go stale in one place while getting corrected in the
  other; treat any concrete version number as a fact to double check, not to trust blindly
  from either side.
- Recommendations ("use X, not Y") and any FAQ content in the site that documents actual
  package behavior (not site-specific meta questions).

## Workflow

1. Build the working set: either the specific package(s) the user pointed at, or every row
   in the mapping table whose local repo path exists.
2. For each pair, read both files in full.
3. Diff the facts (not the prose) per the categories above. List concrete discrepancies
   before changing anything.
4. For each discrepancy, decide which side is correct:
   - If one side is clearly outdated (e.g. a browser-support caveat that's since changed),
     verify against the actual package source or changelog when unsure, don't just trust
     whichever file "sounds newer." This matters most for version numbers and behavior
     claims, get it right rather than fast.
   - If genuinely ambiguous or both sides disagree in a way you can't resolve by reading the
     source, stop and ask the user which is authoritative. Don't guess and don't silently
     pick one.
5. Apply the fix to whichever side(s) are wrong, keeping each side's own format conventions
   (see "What actually needs to match" above). A fix to a behavior claim usually belongs in
   both the README and the site's body copy; a fix that's purely about clarifying an existing
   site FAQ answer usually doesn't need a README change unless the README makes the same
   claim.
6. Report a short summary: what was checked, what was already in sync, what changed and
   where, and what was skipped (repo not cloned locally, or flagged for the user to decide).

## Style reminders for anything you write

- No em dashes ("—") in any prose you write or edit, on either side.
- Don't run `astro build`/`astro check` automatically after routine content edits, only if
  asked or if the change is structurally risky (schema, component, routing).
