# Agent Guide Sample

## Purpose
This file defines how an AI agent should work on projects that follow the same pattern as this repo: a fast-moving product prototype, built from a clear sitemap, static UI references, and a browser-deliverable web shell.

The goal is consistency. The agent should help future projects move with the same rhythm:

1. Start from product structure and page inventory.
2. Build static UI references first when needed.
3. Consolidate approved flows into a single runnable app shell.
4. Keep files simple, readable, and easy for PM, design, and RD to inspect.

## Project Pattern
Use this repo as the reference implementation for the following delivery model:

- `ui-static/` stores handoff-grade static pages and design notes.
- `public/` stores the integrated runnable web UI.
- `server.js` serves the integrated UI through Express.
- `public/index.html` is the app shell entry.
- `public/js/app.js` holds shared app state, navigation, mock data, and common interactions.
- Feature-heavy domains can be split into focused modules such as:
  - `public/js/automation.js`
  - `public/js/scenario.js`
- CSS is split by responsibility rather than by framework:
  - global/base
  - layout
  - components
  - page-specific styles

## Agent Mission
When working on a similar project, the agent should:

- preserve the sitemap and information architecture first
- keep the UI enterprise-oriented and product-facing
- prefer incremental extension over rewrites
- use mock data to prove flows before backend integration
- make every feature demoable in browser
- keep interaction logic plain and understandable

## Working Rules

### 1. Understand before editing
Before making changes, the agent must read:

- `package.json`
- `server.js`
- root-level product or handoff docs
- `public/index.html`
- the relevant JS and CSS files for the target section

### 2. Respect the structure
For projects using this sample:

- do not introduce a frontend framework unless explicitly requested
- do not split the app into unnecessary build tooling
- keep the integrated runtime under `public/`
- keep design-handoff or page-by-page references under `ui-static/`
- keep routes simple and Express-based if no API layer is required

### 3. Build by section
Follow this order when adding or revising work:

1. Confirm sitemap position and page purpose.
2. Define the section layout and key states.
3. Add or update markup in the app shell.
4. Add styling in the matching CSS layer.
5. Add mock data and UI behavior in JS.
6. Verify navigation, modal behavior, and state updates.

### 4. Prefer modular feature files
Keep shared behavior in `app.js`. Move large domain workflows into dedicated files when any section becomes large enough to stand on its own, such as:

- scheduling / automation
- scenario builder
- device integration
- macro editor

### 5. Treat mock data as product scaffolding
Mock data is not filler. It should:

- reflect real device, command, macro, and schedule vocabulary
- make tables, forms, previews, and empty states testable
- be easy to replace later with real API data

### 6. Keep handoff assets useful
If a project includes design handoff files, the agent should maintain:

- sitemap
- page inventory
- design notes
- rebuild spec
- priority list for high-value screens

## Deliverable Standard
Each similar project should aim to ship these layers:

### A. Product structure
- PRD or outline
- sitemap
- key page list

### B. Static handoff
- standalone pages for design review
- shared style sheet
- component and flow notes

### C. Integrated demo
- one entry shell
- sidebar/topbar/navigation
- browser-runnable flows
- modals, toasts, forms, tables, previews

### D. Documentation
- root `README.md`
- `Agent.md`
- prompts for repeatable generation work

## UI Direction
Follow the style already proven in this repo:

- professional control-system interface
- desktop-first management console
- clear left navigation + top bar
- white/light panels on soft neutral background
- CYP-aligned brand accent usage
- direct labels and operational wording
- no marketing-style homepage

For homepage/dashboard work, include:

- device/system summary
- quick operational context
- runtime preview or control preview
- actionable cards instead of decorative hero sections

## Naming Guidance
- Use stable section names from the navigation model.
- Match file names to page purpose.
- Keep IDs and sample data human-readable.
- Prefer names like `Command Management`, `Driver Library`, `Scenario Management`, `Pad Display Setting`.

## Done Criteria
The agent should consider a task complete only when:

- the feature matches the existing architecture
- navigation reaches it correctly
- state changes are visible in browser
- empty, normal, and action states are represented
- documentation stays aligned with the delivered UI

## Reuse Note
For future projects, duplicate this file and update only:

- product name
- navigation domains
- brand tokens
- route map
- folder names if they differ

Keep the same operating model unless the next project truly needs a different stack.
