# CYP Design System - DESIGN.md
# Adapted from `Design_MD.md` for the CYP control-system web GUI, based on `web/` references and the current runnable app.

## Brand Identity

- **Product**: CYP Android Controller Pad / Control System Web GUI
- **Category**: ProAV control console, device orchestration dashboard, automation and scene management interface
- **Primary Users**: Admin, Operator, Viewer, installer, field engineer, support engineer
- **Personality**: Precise, reliable, technical, calm, enterprise-grade
- **Tone**: Clean, direct, low-noise, operational, trustworthy
- **Visual Source**:
  - `web/Login.svg`
  - `web/Device Control.svg`
  - `web/A-V Management.svg`
  - `web/A-V Rounting.svg`
  - `web/System Settings.svg`
  - `web/System Information.svg`
  - `web/User Management.svg`
  - `web/Index - 6.svg`, `web/Index - 9.svg`, `web/Index - 10.svg`, `web/Index - 11.svg`, `web/Index - 13.svg`

---

## Product Principles

- Build the interface as a working control console, not a marketing page
- Prioritize operational clarity over decorative visuals
- Keep key device status, connection health, and execution feedback visible
- Use modular management screens grouped by domain: Home, Control, Device, Scenes, Setting
- Support mock-first prototyping with a path to real integration later

---

## Colors

### Primary Palette
- Primary 700: `#06667D`
- Primary 650: `#087091`
- Primary 600: `#00839E`
- Primary 500: `#008AAB`
- Primary 450: `#009CB5`
- Primary 400: `#00A2BC`
- Primary 350: `#02A9D1`
- Primary 300: `#33AFC0`
- Primary 150: `#7FC1CE`
- Primary 100: `#A0D3DF`

### Core UI Neutrals
- Text Strong: `#383F46`
- Text Body: `#6C6C6C`
- Text Muted: `#707070`
- Text Soft: `#7F7F7F`
- Text Inverse: `#FFFFFF`
- Border Strong: `#707070`
- Border Default: `#BCBCBC`
- Border Subtle: `#C5C5C5`
- Border Soft: `#E4E4E4`
- Surface Base: `#FFFFFF`
- Surface Raised: `#F5F5F5`
- Surface Soft: `#F3F3F3`
- Surface Panel: `#EAEAEF`
- Surface Tint: `#E5F2F5`

### App Palette Overrides
- App Background: `#F4F7F8`
- Accent Background: `#E8F3F5`
- Sidebar Background: `#EEF6F7` or strong mode `#008AAB`
- Panel Background: `#FFFFFF`
- Text Strong Alt: `#10233A`
- Text Body Alt: `#365062`
- Text Dim Alt: `#5F7382`
- Accent Strong: `#1226AA`
- Brand Highlight: `#FFC629`

### Semantic Colors
- Success: `#008AAB`
- Warning: `#FF5C35`
- Danger: `#B92454`
- Danger Strong: `#F50A2A`
- Info: `#1226AA`

### Gradients
- Primary Gradient: `linear-gradient(90deg, #00839E 0%, #1292AA 27.2%, #2AA7BA 72.3%, #33AFC0 100%)`
- Secondary Gradient: `linear-gradient(90deg, #00839E 0%, #33AFC0 100%)`
- CTA Accent Gradient: `linear-gradient(180deg, #008AAB, #1226AA)`

### Usage Rules
- Use cyan-blue as the system identity and active state color
- Use deep blue only as a focused accent, not the full-page dominant tone
- Use yellow highlight for selected scene items, preview emphasis, and guided attention
- Use magenta-red for destructive or warning states only
- Keep large backgrounds white or pale blue-gray

---

## Typography

### Font Family
- Primary: `"Segoe UI", "Noto Sans TC", "Microsoft JhengHei", "PingFang TC", sans-serif`
- Fallback Runtime: `Arial, sans-serif`
- Icon Font: `Material Symbols Outlined`

### Type Scale
| Token | Size | Weight | Line Height | Usage |
|---|---:|---:|---:|---|
| Display | 32px | 700 | 1.2 | Main page title or major dashboard headline |
| Heading 1 | 28px | 700 | 1.25 | Primary page titles |
| Heading 2 | 22px | 600 | 1.3 | Panel titles |
| Heading 3 | 18px | 600 | 1.35 | Section titles, card headers |
| Body Large | 16px | 500 | 1.5 | Primary UI copy |
| Body | 14px | 400 | 1.5 | Default labels and text |
| Body Small | 13px | 400 | 1.45 | Metadata, helper copy |
| Caption | 12px | 500 | 1.35 | Badges, table meta, status chips |
| Tiny | 11px | 500 | 1.3 | Secondary labels, overlines |

### Typography Rules
- Prefer readable enterprise UI hierarchy over dense compressed text
- Use one strong title, one secondary subtitle, then compact supporting metadata
- Keep operational labels concise and noun-first
- Use title case or simple sentence case in English
- Chinese labels should favor clear product vocabulary over marketing phrasing

---

## Spacing

### Base Unit: 4px

| Token | Value | Usage |
|---|---:|---|
| 2xs | 4px | Tight icon and inline spacing |
| xs | 8px | Tag padding, close controls |
| sm | 12px | Related form items |
| md | 16px | Default card padding |
| lg | 20px | Inner panel separation |
| xl | 24px | Major component gap |
| 2xl | 32px | Section spacing |
| 3xl | 40px | Larger content blocks |
| 4xl | 48px | Page rhythm |

### Layout Tokens
- Topbar height: `64px`
- Sidebar width: `268px`
- Sidebar collapsed width: `88px`
- Standard control height: `44px`
- Panel internal padding: `16px` to `24px`
- Content area page gap: `24px`
- Table row action spacing: `8px`
- Pad grid gap: `12px`

---

## Border Radius

| Token | Value | Usage |
|---|---:|---|
| none | 0px | Dividers, strict table edges |
| xs | 8px | Tiny chips, compact pills |
| sm | 12px | Inputs, action buttons |
| md | 14px | Header controls |
| lg | 16px | Cards, panels, list containers |
| xl | 18px | Floating modules, advanced editors |
| 2xl | 22px | Main large shells |
| 3xl | 24px | Tablet preview / scene canvas |
| full | 999px | Pills, status chips, toggles |

### Radius Rules
- Default input/button radius stays in the `12px` to `14px` range
- Standard cards stay in the `16px` to `18px` range
- Reserve `22px` to `24px` for hero containers like scenario preview shells

---

## Shadows

| Token | Value | Usage |
|---|---|---|
| sm | `0 4px 10px rgba(18, 38, 170, 0.04)` | Toolbar controls |
| md | `0 8px 18px rgba(18, 38, 170, 0.08)` | Hovered cards |
| lg | `0 12px 28px rgba(0, 0, 0, 0.12)` | Panels and modals |
| xl | `0 18px 36px rgba(18, 38, 170, 0.08)` | Main app shell emphasis |

### Shadow Rules
- Keep shadows soft and cool-toned
- Avoid dramatic black shadows
- Pair shadows with pale borders or tinted fills for layered enterprise depth

---

## Components

### Top Bar
- Height: `64px`
- Background: near-white with blur
- Layout: left brand / nav toggle, right language + user actions
- Border bottom: `1px` subtle line
- Use compact icon buttons with `44px` touch target

### Sidebar Navigation
- Modes: expanded and collapsed
- Group structure:
  - Home
  - Control
  - Device
  - Scenes
  - Setting
- Parent rows include icon, label, and caret
- Child items are text-first secondary navigation
- Active state uses cyan-blue emphasis and surface tint

### Buttons
- **Primary**: cyan or cyan-to-blue gradient, white text, radius `sm` or `md`, height `44px`
- **Secondary**: white or soft-tint background, accent border, accent text
- **Tertiary**: low-emphasis surface button for table actions and filters
- **Danger**: danger fill or subtle danger-tint with danger text
- **Icon Button**: square `44px`, centered icon
- **Pill Action**: radius `full`, used in filters, tags, layout choices

### Cards / Panels
- Background: white
- Border: subtle gray-blue line
- Radius: `16px` to `18px`
- Shadow: `sm` to `lg`
- Typical structure:
  - Eyebrow
  - Title
  - Status chip or action row
  - Content grid, list, or form body

### Inputs
- Height: `44px`
- Background: white to very light tinted gradient
- Border radius: `12px` to `14px`
- Border: subtle line
- Focus ring: cyan-blue outline or glow
- Select controls match button height and shape

### Tables / Lists
- Use compact operational rows
- Support:
  - search
  - filter
  - pagination
  - row actions
  - empty state
- Primary fields should remain left aligned
- Status and execution results should use chips or concise badges

### Status Chips
- Shape: pill
- Online: cyan-blue tint
- Warning: orange tint
- Error: magenta-red tint
- Neutral: gray tint

### Modal / Dialog
- Large centered modal for review, test result, import, delete confirm
- Radius: `18px`
- Overlay: dark neutral with moderate opacity
- Header, content, footer actions clearly separated

### Dashboard Stat Tile
- Used on Home and System Information screens
- Structure:
  - label
  - main value
  - support meta or badge
- Visual tone: white tile on soft neutral field

### Scheduling Builder
- Two-part layout:
  - rule definition
  - preview summary
- Must expose:
  - trigger type
  - cadence
  - next run
  - upcoming runs

### Macro Editor
- Three-zone editor:
  - action library
  - flow canvas
  - inspector
- Flow steps must visually differentiate:
  - command
  - delay
  - if/else
  - polling
  - variable update
  - run macro

### Scenario / Panel Editor
- Core elements:
  - layout selection
  - pad preview
  - button grid
  - selected button inspector
  - action/icon binding
- Highlight selected button with yellow ring or bright accent border
- Use tablet-like preview framing as a functional boundary

### Network / Settings Forms
- Present configuration in grouped sections
- Keep summary and editable fields together
- Show current state before destructive changes

---

## Iconography

- Style: outlined system icons with simple filled support icons where needed
- Primary size: `20px` to `24px`
- Navigation icons: monochrome, low noise
- Operational icons should communicate category quickly:
  - Home
  - Control
  - Device
  - Scene
  - Setting
  - Network
  - User
  - Warning
  - Success

### Icon Rules
- Use icons to support scanning, not to decorate every label
- Keep all stroke weights visually consistent
- Maintain minimum `44px` touch target for clickable icon controls

---

## Motion / Animation

- Micro interaction: `180ms`
- Standard transition: `200ms`
- Modal / panel transition: `240ms` to `300ms`
- Easing: `ease` or `cubic-bezier(0.4, 0, 0.2, 1)`

### Motion Rules
- Hover: slight lift or border emphasis
- Press: small scale-down or darker fill
- Navigation expand/collapse: quick vertical reveal
- Avoid flashy motion; this is an operational console

---

## Screen Inventory

### Authentication
- `web/Login.svg`
  - Login entry
  - role access entry point

### Home / Dashboard
- `web/Index - 6.svg`
- `web/Index - 9.svg`
- `web/Index - 10.svg`
- `web/Index - 11.svg`
- `web/Index - 13.svg`
  - Pad information
  - network status
  - connected devices
  - quick control preview
  - status indicators

### AV Control / Routing
- `web/A-V Management.svg`
- `web/A-V Rounting.svg`
- `web/A-V Rounting – 1.svg`
- `web/A-V Rounting – 2.svg`
- `web/A-V Rounting – 3.svg`
- `web/A-V Rounting – 4.svg`
- `web/A-V Rounting – 5.svg`
- `web/A-V Rounting – DisplayPort.svg`
- `web/A-V Rounting – HDMI  1.svg`
- `web/A-V Rounting – HDMI  2.svg`
- `web/A-V Rounting – Input 8 Edit VGA.svg`
- `web/A-V Rounting – Output A Edit.svg`
- `web/A-V Rounting – Output B Edit – 1.svg`
- `web/A-V Rounting – USB-C.svg`
  - input/output mapping
  - source switching
  - route detail editing
  - connector-specific variants

### AV Manipulation
- `web/AV ManipulationAudio Settings – 1.svg`
- `web/AV ManipulationAudio Settings – 2.svg`
- `web/AV ManipulationOSD Settings.svg`
- `web/AV ManipulationOSD Settings – 1.svg`
- `web/AV ManipulationVideo Settings.svg`
- `web/AV ManipulationVideo Settings – 1.svg`
- `web/AV ManipulationVideo Settings – Collapse All.svg`
- `web/AV ManipulationVideo Settings – Collapse All – 1.svg`
- `web/AV ManipulationVideo Settings_0.svg`
- `web/AV ManipulationVideo Settings_0 – 1.svg`
- `web/AV ManipulationVideo Settings_100.svg`
- `web/AV ManipulationVideo Settings_100 – 1.svg`
  - audio tuning
  - video tuning
  - OSD setup
  - expanded/collapsed variants
  - slider and value states

### Device & User Management
- `web/Device Control.svg`
- `web/Device Control – 1.svg`
- `web/User Management.svg`
  - device list and detail
  - control actions
  - role management

### System
- `web/System Information.svg`
- `web/System Information – 1.svg`
- `web/System Settings.svg`
- `web/System Settings – 1.svg`
  - firmware and hardware data
  - admin and network settings
  - platform configuration

---

## Domain Mapping

### Home
- System overview
- Device summary
- Connected devices
- Network health
- Quick control panel preview

### Control
- Command management
- Command editor
- Command test
- Macro management
- Macro editor
- Scheduling list
- Scheduling create/edit
- Event trigger

### Device
- Device integration
- Device list
- Add/edit/delete device
- Driver library
- Device discovery

### Scenes
- Scenario management
- Panel layouts
- Button editor
- Panel preview

### Setting
- Device information
- System settings
- Date & time
- Network
- Display setting
- Theme & assets
- Language
- Backup / restore
- Log export
- Firmware upgrade
- Admin
- Initial setup

---

## UX Rules

### DO
- Keep the app shell stable while only the content area changes
- Make tables, forms, and panels feel like part of one consistent console
- Surface execution results with clear feedback after test, run, import, or update actions
- Show selected state strongly in scene/pad editing flows
- Use summary cards before detailed forms on settings pages
- Keep important machine data visible: IP, MAC, firmware, model, role, status
- Use mock data structures that resemble real deployment entities

### DON'T
- Don't turn large management pages into oversized marketing cards
- Don't use saturated accent fills across entire sections
- Don't hide critical status behind only color; pair with text or chips
- Don't mix multiple unrelated visual styles across modules
- Don't over-round utility controls beyond the established system
- Don't use decorative gradients unless they reinforce active controls or focus areas

---

## Accessibility & Internationalization

- Minimum touch target: `44px`
- Support languages:
  - English
  - Traditional Chinese
  - Japanese
- Preserve readable contrast for white surfaces and accent actions
- Use text labels with icons in navigation where possible
- Status chips should combine color and wording

---

## Implementation Notes

This design system reflects the current codebase and wireframe assets:

1. `public/css/base.css` defines the wireframe-derived base tokens
2. `public/css/styles.css` carries the integrated runtime shell styling
3. `public/css/automation-*.css` defines scheduling and automation management surfaces
4. `public/css/scenario.css` defines scenario editor, panel layout, and preview styling
5. `public/index.html` confirms the current app-shell navigation and page grouping
6. `public/js/app.js`, `public/js/automation.js`, and `public/js/scenario.js` confirm the current interaction domains

---

## File Export Notes

This DESIGN.md is intended to be used with:

1. **Google Stitch**: as the project-specific design system prompt
2. **Codex / AI coding agents**: as the canonical UI style guide for new screens
3. **Design handoff workflows**: to align `web/` references with the integrated runtime

When generating new UI, follow this document instead of the original generic `Design_MD.md`, because the CYP project uses a blue-cyan enterprise control-system visual language rather than the original green gaming theme.
