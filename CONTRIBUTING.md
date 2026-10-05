# Contributing

Thanks for helping improve the QA & Testing roles taxonomy. The whole dataset is
one file — **`roles.json`** — and everything else (`README.md`, `index.html`) is
**generated** from it. So contributing is editing JSON and re-running one command.

## The golden rule

**Never hand-edit `README.md` or `index.html`.** They are build output and your
change will be overwritten the next time anyone runs the generator. Edit
`roles.json`, then regenerate.

## How to add or change a role

1. Fork and clone the repo.
2. Open `roles.json` and edit the `roles` array. Each role looks like:

   ```json
   {
     "id": "senior-automation-engineer",
     "positionTitle": "Senior Test Automation Engineer",
     "specialty": "AUTOMATION",
     "tier": "SENIOR",
     "requiredSkills": ["Framework architecture", "API+UI automation"],
     "preferredSkills": ["Performance testing", "Cloud test grids"],
     "compMin": 10000,
     "compMax": 16000,
     "aliases": ["Senior Automation Tester", "Senior Test Automation Engineer"]
   }
   ```

   Field rules:
   - `id` — stable kebab-case slug, **unique**. Don't change an existing id (it's a public handle).
   - `specialty` — one of the keys in `meta.specialties` (`MANUAL_FUNCTIONAL`, `AUTOMATION`, `SDET`, `SPECIALIST`, `HARDWARE_SYSTEMS`, `AGILE_UAT_UX`, `LEADERSHIP`). To add a new track, add it to `meta.specialties` first.
   - `tier` — one of `meta.tiers` (`ENTRY`, `MID`, `SENIOR`, `LEAD`, `MANAGER`).
   - `compMin` / `compMax` — indicative monthly gross in `meta.compCurrency` (MYR). Rough SEA mid-market calibration, not a benchmark; keep ranges sane and `compMin <= compMax`.
   - `aliases` — raw titles seen in the wild that map to this canonical role. **This is the most valuable thing to grow** — it's what powers the reverse lookup. If you've seen a QA title not in the dataset, add it as an alias of the closest canonical role (or propose a new role if nothing fits).

3. **Just want to add a job title you saw?** The lightest contribution: find the
   closest existing role and add your title to its `aliases` array. One line.

4. If you added a career-progression path, update the `ladders` object (ordered
   list of role `id`s, entry → senior).

## Regenerate and verify

```bash
node generate.js
```

This rewrites `README.md` and `index.html` from `roles.json`. Then sanity-check:

- Open `index.html` in a browser — your role appears, search finds it, filters work.
- Skim the README matrix and reverse-lookup table for your change.

Commit **all three** files (`roles.json` + the regenerated `README.md` + `index.html`).

## Validation checklist (before you open a PR)

- [ ] `roles.json` is valid JSON (`node -e "JSON.parse(require('fs').readFileSync('roles.json'))"` exits cleanly).
- [ ] `id` is unique and kebab-case; existing ids unchanged.
- [ ] `specialty` and `tier` are from the allowed sets.
- [ ] `compMin <= compMax`.
- [ ] You ran `node generate.js` and committed the regenerated `README.md` and `index.html`.
- [ ] No hand-edits to `README.md` / `index.html`.

## PR description

Say what you added/changed and, for comp numbers or a new role, a one-line
rationale or source. Small, focused PRs merge fastest.

## Build & CI

Every push and pull request runs `node generate.js` in CI and then
`git diff --exit-code` on `README.md` / `index.html`. If you edited `roles.json`
but forgot to regenerate — or hand-edited the generated files — **CI fails**.
The generator also validates `roles.json` (ids, specialties, tiers, comp order,
a required one-line `summary`, no self-aliases, and that the role count in
`meta.description` matches the data), so a malformed dataset fails the build too.

`roles.json` carries a `$schema` pointer to [`schema.json`](./schema.json); most
editors will give you inline validation and autocomplete as you edit.

Locally: `npm run check` does the same regen-and-diff the CI does.

## Scope

This is a **taxonomy of role names + light enrichment**, not a salary benchmark or
a certification guide. Comp bands are deliberately indicative. Keep additions
industry-recognised QA/testing roles.

## License

By contributing you agree your contribution is licensed under this repo's
[MIT License](./LICENSE). The role taxonomy originates from the community
[ALL_QA_Testing_Roles](https://github.com/eaccmk/ALL_QA_Testing_Roles) project.
