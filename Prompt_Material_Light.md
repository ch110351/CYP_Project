# Prompt MATERIAL LIGHT

## Objective
Create a single light-mode material board for the CYP project.

This board is not a marketing page and not an application screen. It is a component-and-layout reference board for Stitch generation and design handoff.

The board must focus on the reusable UI materials of this project:
- navigation objects
- control objects
- form objects
- feedback objects
- table/list objects
- pad preview objects
- template layout and button template objects

Use the CYP control-console visual language:
- white panels on a light neutral background
- cyan-blue enterprise accent color
- clear operational labels
- compact spacing
- rounded but restrained enterprise UI surfaces

Do not use hero sections, slide-deck composition, or promotional copy.

---

## Layout Direction

- Desktop-first artboard
- Organize content as a clean material board with multiple sections
- Each section should be clearly labeled and visually grouped
- Keep enough white space for handoff readability
- Use token labels, state labels, and functional labels

Recommended section order:
1. Navigation
2. Buttons and chips
3. Cards and panels
4. Inputs and form controls
5. Table and list patterns
6. Modal and feedback states
7. Pad Preview materials
8. Template Layout and Button Template materials

---

## Materials to Include

### 1. Top Bar
Show the CYP top bar as a reusable component.

Include:
- logo area
- nav toggle button
- language selector
- settings/action icon
- user menu trigger

Show states:
- default
- hover/focus for key actions

Key characteristics:
- height around 64px
- near-white background
- subtle border bottom
- compact icon buttons
- enterprise control-console tone

### 2. Sidebar
Show sidebar navigation objects and states.

Include:
- collapsed and expanded examples
- parent nav item
- child nav item
- active item
- inactive item
- hover state
- caret / group expansion treatment

Navigation domains should reflect the project:
- Home
- Control
- Device
- Scenes
- Setting

### 3. Buttons
Show button materials as reusable objects.

Include:
- primary button
- secondary button
- tertiary / low-emphasis button
- danger button
- icon button
- pill action button

Show states where useful:
- default
- hover
- active
- disabled

### 4. Chips / Status Pills
Show reusable chip objects.

Include:
- online
- warning
- error
- neutral
- selected
- active

Use pill shapes and clear state labels.

### 5. Cards / Panels
Show white panel and card styles used by the product.

Include:
- simple information card
- summary panel
- dashboard stat tile
- settings group panel
- builder side panel

Show:
- header
- eyebrow
- title
- content body
- action row

### 6. Inputs and Form Controls
Show form materials.

Include:
- text input
- select input
- search field
- textarea / notes field
- toggle-like control treatment if needed
- slider control for level / volume

Show states:
- default
- focus
- disabled
- validation/error

### 7. Table and List Patterns
Show operational data surfaces.

Include:
- toolbar with search and filter
- table header row
- default table row
- selected row
- row with action buttons
- compact list item
- empty-state block

Use realistic fields such as:
- ID
- Name
- Device
- Status
- Updated

### 8. Modal and Feedback Objects
Show reusable feedback and overlay patterns.

Include:
- centered modal
- delete confirmation dialog
- review dialog
- import dialog
- toast / snackbar
- inline feedback panel

Show:
- overlay
- title
- content
- action footer

### 9. Pad Preview Materials
Show the control-pad preview style used in this project.

Include:
- tablet-like preview frame
- pad preview shell
- page header area
- button grid area
- preview side information area if needed
- slider zone

Show control button states:
- default
- selected
- on
- alert
- disabled

This section should feel like the material language behind the operational pad UI.

### 10. Template Layout Materials
Show reusable template layout cards for the panel/scenario system.

Include:
- layout gallery row
- layout card
- selected layout card
- preview grid
- rows / columns / capacity labels

Suggested examples:
- 2x2
- 3x2
- 4x2
- mixed control layout

The visual should support layout selection workflows.

### 11. Button Template Materials
Show reusable button template variants used by the pad/scenario system.

Include:
- text-only button template
- icon + label template
- source selection template
- volume/control template
- toggle template
- alert template

For each template, show:
- preview
- label area
- icon area
- state indicator treatment
- mapping summary area if useful

### 12. Builder / Editor Surface Materials
Show the reusable building blocks for editor pages.

Include:
- left library panel
- center canvas / builder region
- right inspector panel
- selected object summary card
- preview drawer or review panel

This is important for:
- Macro Editor
- Scenario Management
- Button Editor
- Panel Layouts
- Scheduling Create

---

## Visual and Token Rules

- Use the existing CYP light palette and component language
- Background should remain light and calm
- Panels should stay white or very lightly tinted
- Use cyan-blue for active and primary emphasis
- Use strong blue sparingly for focused accents
- Use yellow highlight for selected pad-related emphasis
- Keep typography readable and enterprise-oriented
- Keep corners restrained, not playful
- Keep shadows soft and controlled

---

## Output Goal

The final screen should read as:
- a light-mode component material board
- a reusable object reference for Stitch
- a handoff board for future CYP UI generation

It should be possible to use this board as the visual material source for generating future CYP screens in light mode.
