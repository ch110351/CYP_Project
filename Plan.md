# Plan.md for Stitch MCP iOS Redesign Automation

## 1. Goal and Completion Definition

This document is the canonical execution spec for redesigning the CYP web GUI into an iOS-style control console in Stitch MCP.

The automation runner must treat this file as an execution contract. It must not invent page scope, page names, layout patterns, or visual direction outside the inputs listed in Section 2.

### Goal

Create or update one Stitch project, one iOS design system, and one full screen set for the CYP site using the repo as source of truth.

### Completion Definition

The run is complete only when all of the following are true:

1. One Stitch project named `CYP iOS Control UI` exists and is used for the run.
2. One design system named `CYP iOS Control Console Design System` exists in that project.
3. The design system reflects the repo's current iOS style sources defined in Section 2.
4. One global shell direction screen is created or updated before page generation begins.
5. Every page in the page matrix in Section 4 has one corresponding Stitch screen.
6. Existing matching screens are edited instead of duplicated when they are already present but structurally wrong.
7. Every screen passes the validation checks in Section 5, or is marked `manual review required`.
8. One markdown run summary is produced using the table schema in Section 5.

### Out of Scope

This automation stops at Stitch deliverables only:

- Stitch project
- Stitch design system
- generated or edited Stitch screens
- screenshot links
- HTML export links when available
- run summary

This automation does not:

- write code back into `public/`
- overwrite repo HTML or CSS
- export to Figma
- invent new product flows not listed in the repo sources

## 2. Inputs and Source-of-Truth Mapping

### Fixed Inputs

The automation runner must use these sources:

- Product sitemap and page requirements:
  - `Function.md`
- Global shell and tone prompt:
  - `Prompt.md`
- Page prompt library:
  - all root-level `Promt_*.md`
- iOS design system implementation source:
  - `public/css/ios-theme.css`
  - `public/css/base.css`
  - `ui-static/ios-components-review.html`
  - `ui-static/css/ui-ios-review.css`
- Existing visual references:
  - `web/*.svg`
- Existing runtime and shell reference:
  - `public/index.html`
  - `public/js/app.js`
  - current integrated navigation and app-shell structure in `public/`

### Normalization Rules

- `Prompt_PAGE.md` means the root-level `Promt_*.md` prompt set, because no standalone `Prompt_PAGE.md` exists in the repo.
- `Prompt.md` is treated as the global shell prompt, not as a single page prompt.
- No standalone `IOS_Design.md` is present in the repo. The iOS design source of truth is the implemented iOS theme and review files listed above.

### Source Priority

When sources differ in detail, resolve them in this order:

1. `public/css/ios-theme.css`, `public/css/base.css`, `ui-static/ios-components-review.html`, `ui-static/css/ui-ios-review.css`
2. matching `Promt_*.md`
3. `Prompt.md`
4. matching section in `Function.md`
5. `web/*.svg`
6. current app-shell structure in `public/index.html` and `public/js/app.js`

### Non-Invention Rule

The runner must not:

- create pages outside `Function.md`, `Prompt.md`, and `Promt_*.md`
- turn operational pages into marketing pages
- reintroduce the old teal or aqua palette
- reintroduce company logo treatment or `CYP` wordmark inside rendered page UI
- break the app-shell model of top bar, sidebar, and content canvas

## 3. Automation Workflow

### Step 1. Project and Design System Setup

1. Create or reuse one Stitch project named `CYP iOS Control UI`.
2. Create or reuse one design system named `CYP iOS Control Console Design System`.
3. Load the iOS design system sources from Section 2 into the Stitch design system.
4. Treat the loaded design system as the only visual system for all generated screens in this run.

### Step 2. Global Shell Generation

Generate or update the shell direction first.

The shell definition must establish:

- top bar behavior
- sidebar behavior
- content canvas behavior
- section header pattern
- panel/card hierarchy
- modal and toast style
- iOS-style control-console tone

Shell screen title:

- `CYP iOS App Shell Direction`

No page generation may begin before this shell screen exists.

### Step 3. Fixed Generation Order

Generate screens in this exact order:

1. `INDEX`
2. `HOME`
3. `CONTROL`
4. `DEVICE`
5. `SCENES`
6. `SETTING`
7. `DEVELOPER TOOLS`
8. `UI REFERENCE`

Within each domain, use the page order in Section 4.

### Step 4. Per-Page Prompt Assembly

For every screen, assemble the Stitch prompt in this order:

1. Page-specific objective from the matching `Promt_*.md`
2. Structural requirements from the matching section in `Function.md`
3. Shared shell and tone requirements from `Prompt.md`
4. Global app-shell continuity from `CYP iOS App Shell Direction`
5. Visual and token constraints from the iOS design sources in Section 2
6. Explicit exclusions:
   - no marketing hero
   - no landing page framing
   - no promotional copy
   - no company logo
   - no `CYP` wordmark in rendered UI
   - no teal, cyan, or aqua brand drift

### Step 5. Generate or Edit

For each page in the matrix:

1. Resolve the target screen title.
2. Resolve the prompt source file.
3. Search the project for an existing screen with the same title.
4. If no screen exists, generate it.
5. If a screen exists, validate it using Section 5.
6. If the existing screen fails validation, run an edit pass instead of creating a duplicate.
7. Save the screen id, title, and artifact links into the run summary immediately after processing.

### Step 6. Page-Oriented Generation Rule

Generation is page-oriented, not fragment-oriented.

Do not split a normal page into separate screens unless the source clearly describes a builder, editor, flow composer, runtime preview, or reference board.

The following pages are builder/editor pages and must use split-view or multi-panel structure rather than generic dashboard cards:

- `CYP iOS Command Editor`
- `CYP iOS Macro Editor`
- `CYP iOS Scenario Management`
- `CYP iOS Button Editor`
- `CYP iOS Panel Layouts`
- `CYP iOS Panel Preview`
- `CYP iOS Scheduling Create`
- `CYP iOS Scheduling Edit`

## 4. Page Generation Matrix

### Naming Rule

All Stitch screens must use this title format:

- `CYP iOS {Page Name}`

### Page Matrix

#### Home

| Order | Page Key | Prompt Source | Stitch Screen Title | Mode |
|---|---|---|---|---|
| 1 | INDEX | `Promt_INDEX.md` | `CYP iOS Index` | direct |
| 2 | HOME | `Promt_HOME.md` | `CYP iOS Home Dashboard` | direct |
| 3 | CONTROL_PAD_UI | `Promt_CONTROL_PAD_UI.md` | `CYP iOS Control Pad Runtime Preview` | direct |

#### Control

| Order | Page Key | Prompt Source | Stitch Screen Title | Mode |
|---|---|---|---|---|
| 1 | COMMAND_MANAGEMENT | `Promt_COMMAND_MANAGEMENT.md` | `CYP iOS Command Management` | direct |
| 2 | COMMAND_EDITOR | `Promt_COMMAND_EDITOR.md` | `CYP iOS Command Editor` | direct |
| 3 | COMMAND_TEST | `Promt_COMMAND_TEST.md` | `CYP iOS Command Test` | direct |
| 4 | MACRO_MANAGEMENT | `Promt_MACRO_MANAGEMENT.md` | `CYP iOS Macro Management` | direct |
| 5 | MACRO_EDITOR | `Promt_MACRO_EDITOR.md` | `CYP iOS Macro Editor` | direct |
| 6 | SCHEDULING_LIST | `Promt_SCHEDULING_LIST.md` | `CYP iOS Scheduling List` | direct |
| 7 | SCHEDULING_CREATE | `Promt_SCHEDULING_CREATE.md` | `CYP iOS Scheduling Create` | direct |
| 8 | SCHEDULING_EDIT | `Promt_SCHEDULING_CREATE.md` | `CYP iOS Scheduling Edit` | derived |
| 9 | EVENT_TRIGGER | `Promt_EVENT_TRIGGER.md` | `CYP iOS Event Trigger` | direct |
| 10 | JOBS | `Promt_SCHEDULING_LIST.md` | `CYP iOS Jobs Monitor` | derived |

#### Device

| Order | Page Key | Prompt Source | Stitch Screen Title | Mode |
|---|---|---|---|---|
| 1 | DEVICES_LIST | `Promt_DEVICES_LIST.md` | `CYP iOS Devices List` | direct |
| 2 | DEVICE_CREATE | `Promt_DEVICE_CREATE.md` | `CYP iOS Add Device` | direct |
| 3 | DRIVER_LIBRARY | `Promt_DRIVER_LIBRARY.md` | `CYP iOS Driver Library` | direct |
| 4 | DEVICE_DISCOVERY | `Promt_DEVICE_DISCOVERY.md` | `CYP iOS Device Discovery` | direct |

#### Scenes

| Order | Page Key | Prompt Source | Stitch Screen Title | Mode |
|---|---|---|---|---|
| 1 | SCENARIO_MANAGEMENT | `Promt_SCENARIO_MANAGEMENT.md` | `CYP iOS Scenario Management` | direct |
| 2 | BUTTON_EDITOR | `Promt_BUTTON_EDITOR.md` | `CYP iOS Button Editor` | direct |
| 3 | PANEL_LAYOUTS | `Promt_PANEL_LAYOUTS.md` | `CYP iOS Panel Layouts` | direct |
| 4 | PANEL_PREVIEW | `Promt_PANEL_PREVIEW.md` | `CYP iOS Panel Preview` | direct |

#### Setting

| Order | Page Key | Prompt Source | Stitch Screen Title | Mode |
|---|---|---|---|---|
| 1 | DEVICE_INFORMATION | `Promt_DEVICE_INFORMATION.md` | `CYP iOS Device Information` | direct |
| 2 | SYSTEM_SETTINGS | `Promt_SYSTEM_SETTINGS.md` | `CYP iOS System Settings` | direct |
| 3 | DATE_TIME | `Promt_DATE_TIME.md` | `CYP iOS Date and Time` | direct |
| 4 | PAD_DISPLAY_SETTING | `Promt_PAD_DISPLAY_SETTING.md` | `CYP iOS Pad Display Setting` | direct |
| 5 | THEME_ASSETS | `Promt_THEME_ASSETS.md` | `CYP iOS Theme and Assets` | direct |
| 6 | BACKUP_RESTORE | `Promt_BACKUP_RESTORE.md` | `CYP iOS Backup and Restore` | direct |
| 7 | LANGUAGE | `Promt_LANGUAGE.md` | `CYP iOS Language` | direct |
| 8 | LOG_EXPORT | `Promt_LOG_EXPORT.md` | `CYP iOS Log Export` | direct |
| 9 | FIRMWARE_UPGRADE | `Promt_FIRMWARE_UPGRADE.md` | `CYP iOS Firmware Upgrade` | direct |
| 10 | NETWORK | `Promt_NETWORK.md` | `CYP iOS Network` | direct |
| 11 | ADMIN | `Promt_ADMIN.md` | `CYP iOS Admin` | direct |
| 12 | INITIAL_SETUP | `Promt_INITIAL_SETUP.md` | `CYP iOS Initial Setup` | direct |

#### Developer Tools

| Order | Page Key | Prompt Source | Stitch Screen Title | Mode |
|---|---|---|---|---|
| 1 | DEBUG_CONSOLE | `Promt_DEBUG_CONSOLE.md` | `CYP iOS Debug Console` | direct |
| 2 | DEVELOPER_DEVICE_DISCOVERY | `Promt_DEVICE_DISCOVERY.md` | `CYP iOS Developer Device Discovery` | derived |

#### UI Reference

| Order | Page Key | Prompt Source | Stitch Screen Title | Mode |
|---|---|---|---|---|
| 1 | DIALOGS_SHOWCASE | `Promt_DIALOGS_SHOWCASE.md` | `CYP iOS Dialogs Showcase` | direct |
| 2 | STATES_SHOWCASE | `Promt_STATES_SHOWCASE.md` | `CYP iOS States Showcase` | direct |

### Derived Page Rule

If a page exists in `Function.md` but has no dedicated prompt file, derive it from:

1. the matching `Function.md` section
2. the nearest same-domain `Promt_*.md`
3. `Prompt.md`
4. the iOS design system inputs

Every derived screen must be marked `derived` in the run summary.

## 5. Validation and Rerun Rules

### Validation Checks

For each generated or edited screen, validate all of the following:

- correct screen title and domain
- app shell consistency with the current CYP console structure
- page function matches the intended purpose in `Function.md`
- page composition reflects the matching `Promt_*.md`
- visual style matches the repo's iOS design system
- no marketing hero or landing-page treatment
- no promotional copy
- no company logo or `CYP` wordmark inside rendered page UI
- no old teal, aqua, or cyan palette drift
- no missing major blocks listed in `Function.md`
- controls, tables, forms, previews, dialogs, and inspectors match the page type
- builder/editor pages use split-view treatment where required

### Edit Loop

Each screen is allowed:

- 1 initial generation pass
- up to 2 edit passes

If the screen still fails after 2 edit passes, mark it:

- `manual review required`

### Existing Screen Reuse Rule

On rerun, the runner must:

- reuse the same Stitch project
- reuse the same design system
- search by exact screen title before generating
- edit existing screens when they are off-target
- avoid duplicate screens by default

The runner may only create a replacement screen when editing is impossible. If that happens, it must mark the old screen as superseded in the run summary.

### Run Summary Artifact Schema

The run summary must be a markdown table with exactly these columns:

| Domain | Page Key | Prompt Source | Prompt Mode | Stitch Screen Title | Screen ID | Screenshot Link | HTML Export Link | Status | Notes |
|---|---|---|---|---|---|---|---|---|---|

Allowed `Status` values:

- `generated`
- `edited`
- `reused`
- `derived`
- `manual review required`

### Acceptance Checks for This Plan

A valid automation run based on this file must be able to:

- discover the full page set from `Function.md`, `Prompt.md`, and `Promt_*.md`
- create or update exactly one iOS Stitch design system
- generate the full screen set without inventing unlisted pages
- produce deterministic screen titles
- rerun safely without uncontrolled duplicates
- distinguish direct pages from derived pages
- catch and correct screens that drift back toward the old non-iOS visual language
