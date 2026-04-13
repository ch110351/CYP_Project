# CYP Project Sample README

## Overview
This project is a sample delivery pattern for a control-system web GUI. It shows how to build a browser-runnable prototype from product structure, static handoff pages, and an integrated app shell.

The current implementation is based on:

- `Node.js`
- `Express`
- static HTML/CSS/JavaScript
- mock data for interaction validation

This sample is intended to be reused as a starting template for future projects that need the same workflow.

## What This Repo Demonstrates
- a clear page sitemap
- static UI handoff under `ui-static/`
- a single integrated runtime under `public/`
- modular feature scripts for large sections
- lightweight Express routing for browser preview

## Folder Structure
```text
CYP_Project/
|- public/                  # Integrated runnable UI
|  |- index.html            # Main app shell
|  |- css/                  # Shared + section styles
|  |- js/                   # App logic and feature modules
|  \- assets/               # Runtime assets
|- ui-static/               # Static handoff package and page references
|  |- *.html                # Standalone page samples
|  |- *.md                  # Handoff notes and sitemap
|  \- css/                  # Static shared styles
|- web/                     # Source visual references / screenshots / SVGs
|- server.js                # Express preview server
|- package.json             # Project scripts and dependency setup
|- Agent.md                 # Reusable agent workflow guide
|- Prompt.md                # Reusable homepage prompting sample
\- README.md                # This document
```

## Architecture Summary

### 1. App serving
`server.js` serves the `public/` folder and routes key paths back to `public/index.html`, so the integrated interface behaves like a lightweight SPA without extra frontend tooling.

### 2. Runtime UI
`public/index.html` contains the main shell:

- top bar
- left sidebar
- content canvas
- modal layers

### 3. Frontend logic
- `public/js/app.js`: shared app state, navigation, modal handling, command/macro/device/admin flows
- `public/js/automation.js`: scheduling list/create/edit flow
- `public/js/scenario.js`: scenario builder, layout selection, button config flow

### 4. UI handoff layer
`ui-static/` preserves page-by-page references for design review, Figma rebuild, and communication with PM/RD before or during integration.

## Recommended Workflow For Future Projects

### Phase 1. Define structure
- collect PRD or product outline
- draft sitemap
- confirm page inventory

### Phase 2. Build static references
- create page-level mockups under `ui-static/`
- align shared styles, page templates, and component patterns
- record design notes and scope priorities

### Phase 3. Integrate into runnable shell
- build `public/index.html`
- connect navigation and section switching
- move shared interactions into `app.js`
- split large domains into focused JS modules

### Phase 4. Validate flows
- commands
- macros
- schedules
- scenarios
- device integration
- settings/admin flows

### Phase 5. Document for reuse
- update `README.md`
- update `Agent.md`
- keep prompt templates for repeatable generation tasks

## Local Run

### Install
```bash
npm install
```

### Start
```bash
npm start
```

Default preview URL:

```text
http://localhost:3000
```

## Design Principles Reused In This Sample
- enterprise control console instead of marketing site
- desktop-first layout
- modular UI sections grouped by product domain
- mock data first, backend later
- readable vanilla JS over premature abstraction
- documentation that mirrors actual folder structure

## When To Reuse This Sample
Use this sample when the next project has most of these characteristics:

- internal tool or product console
- many management pages and workflows
- static or mock-first prototyping stage
- need for design handoff and runnable demo in parallel
- no immediate requirement for a full frontend framework

## Suggested Replacements For New Projects
When cloning this structure into a new repo, update:

- project name
- brand assets and tokens
- navigation groups
- sitemap documents
- sample data
- section modules

Keep the overall workflow unless the project has a confirmed reason to change stack.
