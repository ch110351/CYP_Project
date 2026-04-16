# Plan.md for Stitch MCP Redesign Automation

## 1. Goal and Completion Definition

This document is the canonical execution spec for redesigning the entire CYP web GUI in Stitch MCP.

The automation runner must use this file as an instruction contract, not as a general guideline. The runner must not invent page scope, page names, or design direction outside the sources defined below.

### Primary Goal

Use Stitch MCP to redesign the full CYP web GUI as a consistent enterprise control-system product, using:

- [`CYP_Design_MD.md`](C:\Users\wesley.gu\OneDrive - CYPRESS TECHNOLOGY CO.,LTD\文件\GitHub\CYP_Project\CYP_Design_MD.md) as the design system source
- [`Function.md`](C:\Users\wesley.gu\OneDrive - CYPRESS TECHNOLOGY CO.,LTD\文件\GitHub\CYP_Project\Function.md) as the sitemap and functional inventory
- all `Promt_*.md` files in the repo root as the per-page prompt library

### Completion Criteria

The automation run is complete only when all of the following are true:

1. One Stitch project named `CYP Control System UI` exists and is used for the run.
2. One design system named `CYP Control Console Design System` exists in that project.
3. The current contents of `CYP_Design_MD.md` have been loaded into that design system.
4. A global shell direction screen or equivalent first-pass shell definition has been generated before page generation begins.
5. Every page listed in the page generation matrix below has a corresponding Stitch screen.
6. Every generated screen has passed the validation rules in Section 5, or is marked `manual review required`.
7. A machine-readable markdown run summary has been produced using the schema defined in this document.

### Out of Scope

This automation stops at Stitch deliverables only:

- Stitch project
- Stitch design system
- Stitch screens
- screenshot links
- HTML export links when available
- run summary

This automation does **not**:

- modify `public/`
- modify `ui-static/`
- generate repo implementation code
- sync Stitch output back into the application

---

## 2. Inputs and Source-of-Truth Mapping

### Fixed Inputs

The automation runner must use the following sources exactly:

- Design system input:
  - [`CYP_Design_MD.md`](C:\Users\wesley.gu\OneDrive - CYPRESS TECHNOLOGY CO.,LTD\文件\GitHub\CYP_Project\CYP_Design_MD.md)
- Sitemap and page requirements:
  - [`Function.md`](C:\Users\wesley.gu\OneDrive - CYPRESS TECHNOLOGY CO.,LTD\文件\GitHub\CYP_Project\Function.md)
- Page prompt inputs:
  - every root-level `Promt_*.md` file
- Existing visual references:
  - `web/*.svg`
- Existing runtime/layout reference:
  - current integrated app shell concept in the repo, especially `public/index.html`, `public/css/base.css`, `public/css/styles.css`, `public/css/automation-*.css`, and `public/css/scenario.css`

### Normalization Rule

- the page prompt library is the set of `Promt_*.md` files

### Source Priority

When sources differ in level of detail, the runner must resolve them in this order:

1. `CYP_Design_MD.md` for visual system, tone, spacing, component language, and brand rules
2. matching `Promt_*.md` for page objective and page-level composition
3. `Function.md` for required content blocks and page semantics
4. `web/*.svg` for layout intent, reference shape, and visual anchoring
5. current runtime shell files for navigation and integrated-app structure

### Non-Invention Rule

The runner must not:

- create pages not implied by `Function.md` or `Promt_*.md`
- rename domains arbitrarily
- convert operational pages into marketing or landing layouts
- change the design system away from the CYP control-console style

---

## 3. Automation Workflow

### Phase A: Discovery and Reuse

1. List existing Stitch projects.
2. Reuse the project named `CYP Control System UI` if it already exists.
3. If it does not exist, create it.
4. List design systems for the selected project.
5. Reuse the design system named `CYP Control Console Design System` if it already exists.
6. If it does not exist, create it.
7. Update the selected design system so its `designMd` content matches the current `CYP_Design_MD.md`.

### Phase B: Global Shell Direction

Before any page-specific generation, create one shell-direction screen that establishes:

- top bar
- sidebar
- navigation grouping
- main content canvas behavior
- white-panel-on-light-background layout style
- enterprise control-console tone

This shell screen is used as the baseline composition reference for all subsequent screens.

Recommended screen title:

- `CYP App Shell Direction`

This shell step must occur first. Page generation must not start without it.

### Phase C: Page Generation Order

Generate or update screens in this fixed domain order:

1. `INDEX`
2. `HOME`
3. `CONTROL`
4. `DEVICE`
5. `SCENES`
6. `SETTING`
7. `DEVELOPER TOOLS`
8. `UI REFERENCE`

Within each domain, pages must follow the page generation matrix order defined in Section 4.

### Phase D: Per-Page Generation Logic

For each page in the matrix:

1. Resolve the page title from the naming rule in Section 4.
2. Resolve the matching prompt source file when present.
3. Resolve the matching content requirements from `Function.md`.
4. Assemble the final prompt using the composition rule in Section 4.
5. Search existing project screens for a screen with the target title.
6. If no matching screen exists, generate a new screen.
7. If a matching screen exists:
   - validate it against Section 5
   - if valid, keep it and mark status `generated` if from current run or `reused` if unchanged
   - if invalid or structurally off-target, edit the existing screen instead of generating a duplicate

### Phase E: Run Summary

After each page is processed, append one row to the run summary.

The summary must capture:

- domain
- page key
- prompt source
- derived or direct prompt status
- Stitch screen title
- screen id
- screenshot URL
- HTML export URL if present
- run status

### Rerun Behavior

The workflow must be rerunnable.

On rerun, the runner must:

- reuse the same project
- reuse the same design system
- reuse or edit matching screens by title
- avoid uncontrolled duplicate screens

Duplicates are only allowed if the runner explicitly marks the prior screen as superseded in the run summary. Default behavior is reuse-or-edit, not recreate.

---

## 4. Page Generation Matrix

### Naming Rule

All Stitch screens must use this title format:

- `CYP {Page Name}`

Use the exact titles listed below when a page is explicitly defined.

### Prompt Assembly Rule

For every page, compose the final Stitch prompt in this order:

1. Page-specific objective from the matching `Promt_*.md`
2. Structural requirements from the matching section in `Function.md`
3. Shared shell and tone requirements from this plan
4. Visual and token constraints from `CYP_Design_MD.md`
5. Explicit exclusions:
   - no marketing hero
   - no landing page framing
   - no promotional copy
   - no off-brand palette drift

If a page does not have a dedicated `Promt_*.md` file but exists in `Function.md`, derive its prompt from:

1. the corresponding `Function.md` section
2. the nearest related `Promt_*.md` file by domain and page type
3. the global shell and design system rules

Mark those pages as `derived` in the run summary.

### Domain: Index

| Order | Page Key | Prompt Source | Stitch Screen Title | Prompt Mode |
|---|---|---|---|---|
| 1 | INDEX | `Promt_INDEX.md` | `CYP Index Overview` | direct |

### Domain: Home

| Order | Page Key | Prompt Source | Stitch Screen Title | Prompt Mode |
|---|---|---|---|---|
| 1 | HOME | `Promt_HOME.md` | `CYP Home Dashboard` | direct |

### Domain: Control

| Order | Page Key | Prompt Source | Stitch Screen Title | Prompt Mode |
|---|---|---|---|---|
| 1 | COMMAND_MANAGEMENT | `Promt_COMMAND_MANAGEMENT.md` | `CYP Command Management` | direct |
| 2 | COMMAND_EDITOR | `Promt_COMMAND_EDITOR.md` | `CYP Command Editor` | direct |
| 3 | COMMAND_TEST | `Promt_COMMAND_TEST.md` | `CYP Command Test` | direct |
| 4 | MACRO_MANAGEMENT | `Promt_MACRO_MANAGEMENT.md` | `CYP Macro Management` | direct |
| 5 | MACRO_EDITOR | `Promt_MACRO_EDITOR.md` | `CYP Macro Editor` | direct |
| 6 | SCHEDULING_LIST | `Promt_SCHEDULING_LIST.md` | `CYP Scheduling List` | direct |
| 7 | SCHEDULING_CREATE | `Promt_SCHEDULING_CREATE.md` | `CYP Scheduling Create` | direct |
| 8 | EVENT_TRIGGER | `Promt_EVENT_TRIGGER.md` | `CYP Event Trigger` | direct |

### Domain: Device

| Order | Page Key | Prompt Source | Stitch Screen Title | Prompt Mode |
|---|---|---|---|---|
| 1 | DEVICES_LIST | `Promt_DEVICES_LIST.md` | `CYP Devices List` | direct |
| 2 | DEVICE_CREATE | `Promt_DEVICE_CREATE.md` | `CYP Device Create` | direct |
| 3 | DRIVER_LIBRARY | `Promt_DRIVER_LIBRARY.md` | `CYP Driver Library` | direct |
| 4 | DEVICE_DISCOVERY | `Promt_DEVICE_DISCOVERY.md` | `CYP Device Discovery` | direct |

### Domain: Scenes

| Order | Page Key | Prompt Source | Stitch Screen Title | Prompt Mode |
|---|---|---|---|---|
| 1 | SCENARIO_MANAGEMENT | `Promt_SCENARIO_MANAGEMENT.md` | `CYP Scenario Management` | direct |
| 2 | BUTTON_EDITOR | `Promt_BUTTON_EDITOR.md` | `CYP Button Editor` | direct |
| 3 | PANEL_LAYOUTS | `Promt_PANEL_LAYOUTS.md` | `CYP Panel Layouts` | direct |
| 4 | PANEL_PREVIEW | `Promt_PANEL_PREVIEW.md` | `CYP Panel Preview` | direct |

### Domain: Setting

| Order | Page Key | Prompt Source | Stitch Screen Title | Prompt Mode |
|---|---|---|---|---|
| 1 | DEVICE_INFORMATION | `Promt_DEVICE_INFORMATION.md` | `CYP Device Information` | direct |
| 2 | SYSTEM_SETTINGS | `Promt_SYSTEM_SETTINGS.md` | `CYP System Settings` | direct |
| 3 | DATE_TIME | `Promt_DATE_TIME.md` | `CYP Date and Time` | direct |
| 4 | PAD_DISPLAY_SETTING | `Promt_PAD_DISPLAY_SETTING.md` | `CYP Pad Display Setting` | direct |
| 5 | THEME_ASSETS | `Promt_THEME_ASSETS.md` | `CYP Theme and Assets` | direct |
| 6 | BACKUP_RESTORE | `Promt_BACKUP_RESTORE.md` | `CYP Backup and Restore` | direct |
| 7 | LANGUAGE | `Promt_LANGUAGE.md` | `CYP Language` | direct |
| 8 | LOG_EXPORT | `Promt_LOG_EXPORT.md` | `CYP Log Export` | direct |
| 9 | FIRMWARE_UPGRADE | `Promt_FIRMWARE_UPGRADE.md` | `CYP Firmware Upgrade` | direct |
| 10 | NETWORK | `Promt_NETWORK.md` | `CYP Network` | direct |
| 11 | ADMIN | `Promt_ADMIN.md` | `CYP Admin` | direct |
| 12 | INITIAL_SETUP | `Promt_INITIAL_SETUP.md` | `CYP Initial Setup` | direct |

### Domain: Developer Tools

| Order | Page Key | Prompt Source | Stitch Screen Title | Prompt Mode |
|---|---|---|---|---|
| 1 | DEBUG_CONSOLE | `Promt_DEBUG_CONSOLE.md` | `CYP Debug Console` | direct |
| 2 | DEVELOPER_DEVICE_DISCOVERY | `Promt_DEVICE_DISCOVERY.md` | `CYP Developer Device Discovery` | derived |

Notes:

- `Function.md` defines `Developer Tools > Device Discovery`, but there is no dedicated developer-only discovery prompt.
- Reuse `Promt_DEVICE_DISCOVERY.md` structure and derive a developer-tools variant with debugging emphasis.

### Domain: UI Reference

| Order | Page Key | Prompt Source | Stitch Screen Title | Prompt Mode |
|---|---|---|---|---|
| 1 | DIALOGS_SHOWCASE | `Promt_DIALOGS_SHOWCASE.md` | `CYP Dialogs Showcase` | direct |
| 2 | STATES_SHOWCASE | `Promt_STATES_SHOWCASE.md` | `CYP States Showcase` | direct |

### Derived-Page Rule

If later repo changes introduce additional pages in `Function.md` without a matching `Promt_*.md`, the runner must:

1. add the page after the nearest same-domain page in generation order
2. derive the page prompt from the exact `Function.md` subsection
3. use the nearest prompt with matching page type
4. mark status as `derived`

### Builder / Editor Rule

Pages that are builder/editor flows must not be reduced to generic dashboard cards.

This specifically includes:

- `CYP Macro Editor`
- `CYP Scenario Management`
- `CYP Button Editor`
- `CYP Panel Layouts`
- `CYP Panel Preview`
- `CYP Command Editor`
- `CYP Scheduling Create`

These pages should favor:

- split-view layouts
- builder canvas patterns
- inspector panels
- configuration side panels
- previews
- stateful editing affordances

---

## 5. Validation and Rerun Rules

### Required Validation Checks Per Screen

After each generation or edit pass, validate the screen against all of the following:

1. **Correct page title and domain**
   - title matches the page matrix
   - content belongs to the intended domain

2. **Shell consistency**
   - top bar is aligned with CYP app shell direction
   - sidebar reflects CYP navigation groups
   - main content area behaves like a control-system console

3. **Functional fidelity**
   - the screen includes the major blocks required by `Function.md`
   - the composition reflects the page objective in the matching `Promt_*.md`

4. **Visual consistency**
   - uses CYP design-system palette and spacing
   - remains white-panel enterprise UI
   - does not drift into unrelated visual themes

5. **No marketing treatment**
   - no hero banner
   - no landing-page framing
   - no promotional copy
   - no decorative product-marketing layout

6. **Page-type correctness**
   - management pages use tables, filters, summary cards, or action rails as appropriate
   - editor pages use builders, inspectors, modal flows, or previews as appropriate
   - settings pages use grouped configuration sections
   - showcase pages emphasize states or modal variants rather than product narrative

### Edit Loop

Each page is allowed:

- 1 initial generation
- up to 2 edit passes

If the initial generation fails validation:

1. write a correction prompt that states the exact failed checks
2. edit the existing screen instead of generating a new one

If the second edit still fails:

- stop editing that page
- mark the page `manual review required`
- continue the rest of the run

### Duplicate-Control Rule

On rerun:

- first search by exact target title
- if an exact-title screen exists, prefer edit/reuse
- do not create a new screen just because the old one is imperfect
- only create a replacement screen if the existing one is unusable and cannot be safely edited

If a replacement screen is created, the run summary must record:

- old screen id
- new screen id
- reason for replacement

### Run Summary Schema

The automation must emit one markdown table using this exact schema:

| Domain | Page Key | Prompt Source | Prompt Mode | Stitch Screen Title | Screen ID | Screenshot URL | HTML URL | Status | Notes |
|---|---|---|---|---|---|---|---|---|---|

Allowed values for `Status`:

- `generated`
- `edited`
- `reused`
- `derived`
- `manual review required`

### Project-Level Output Block

The run summary must start with these project-level fields before the table:

- `Project Name`
- `Project ID`
- `Design System Name`
- `Design System Asset ID`
- `Shell Direction Screen ID`
- `Run Date`

### Acceptance Scenarios

A valid implementation of this plan must be able to:

1. discover the full screen list from `Function.md` and `Promt_*.md`
2. create or update exactly one Stitch design system from `CYP_Design_MD.md`
3. generate the full site screen set without inventing unlisted pages
4. produce deterministic screen titles and grouped output records
5. rerun safely without creating uncontrolled duplicates
6. distinguish between pages created from direct prompt files and pages created from derived prompts

### Spot Checks That Must Be Handled

The runner must explicitly support these situations:

- a page has both a direct `Function.md` definition and a matching `Promt_*.md`
- a page exists in `Function.md` but no dedicated prompt file exists
- an existing Stitch screen should be edited rather than regenerated
- a generated screen drifts into dashboard or marketing style and must be corrected
- builder/editor pages need split-view treatment instead of generic card grids

### Default Correction Prompt Structure

When an edit pass is needed, the correction prompt should follow this pattern:

1. restate the target page title
2. list failed validation items
3. restate missing functional blocks from `Function.md`
4. restate required layout mode from the matching `Promt_*.md`
5. restate the design-system and exclusion rules

This structure keeps the edit loop deterministic and reusable.

