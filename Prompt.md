# Homepage Framework Prompt Sample

Use the following prompt when creating the homepage framework for a new project that should follow the same structure and tone as this repo.

## Prompt
```md
Please create the homepage framework for a desktop-first control-system web GUI.

Project type:
- enterprise control platform
- internal/product operation console
- browser-based management interface

Reference implementation style:
- Node.js + Express served static site
- main app shell in a single `index.html`
- modular JavaScript by feature domain
- left sidebar navigation
- top bar with logo, language, and user actions
- main content canvas for section switching
- modal-based create/edit/detail interactions

Homepage goal:
- do not make a marketing landing page
- do not use hero banners
- do not write promotional copy
- build an operational dashboard homepage

Homepage framework must include:
1. App shell
   - top bar
   - collapsible sidebar
   - main content area

2. Homepage content blocks
   - device/system overview card
   - runtime status summary
   - quick control or preview area
   - key operational information cards

3. Navigation structure
   - Home
   - Control
   - Device
   - Scenes
   - Setting

4. UI style direction
   - professional control console
   - clean light background
   - white content panels
   - restrained brand accent color
   - compact enterprise spacing
   - no decorative gradients or marketing visuals

5. Implementation constraints
   - plain HTML, CSS, and JavaScript
   - structure should be easy to integrate into a single-page shell
   - class naming should stay readable and domain-oriented
   - prepare placeholders for future modals and section panels

6. Output expectations
   - provide homepage HTML structure first
   - define the main CSS layout blocks
   - include sample placeholder content that looks like a real control product
   - keep text product-facing and operational

The homepage should feel like the first screen of a real device-management system, not a company website.
```

## Prompt Usage Notes
- Replace the navigation groups if the next project uses different domains.
- Replace the homepage cards with the real operational priorities of the new product.
- If the next project also needs a static handoff package, generate the homepage once for `ui-static/home.html`, then integrate it into the main app shell.
