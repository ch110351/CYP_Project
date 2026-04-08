# UI Handoff Sitemap

## Purpose
This document is the design handoff sitemap and page inventory for the static CYP control platform UI package.

## Handoff Entry
- `index.html`

## Primary Navigation Map
### Home
- `home.html`
- `control-pad-ui.html`

### Control
- `command-management.html`
- `command-editor.html`
- `command-test.html`
- `macro-management.html`
- `macro-editor.html`
- `scheduling-list.html`
- `scheduling-create.html`
- `event-trigger.html`

### Device
- `devices-list.html`
- `device-create.html`
- `driver-library.html`

### Scenes
- `scenario-management.html`
- `button-editor.html`
- `panel-layouts.html`
- `panel-preview.html`

### Setting
- `device-information.html`
- `system-settings.html`
- `date-time.html`
- `pad-display-setting.html`
- `theme-assets.html`
- `backup-restore.html`
- `language.html`
- `log-export.html`
- `firmware-upgrade.html`
- `network.html`
- `admin.html`
- `initial-setup.html`

### Developer Tools
- `device-discovery.html`
- `debug-console.html`

### UI Reference
- `dialogs-showcase.html`
- `states-showcase.html`

## Page Inventory
### `home.html`
- Dashboard landing page
- Device summary cards
- Pad preview placeholder blocks

### `control-pad-ui.html`
- Runtime quick control page
- Multi-page button layout
- Status feedback area

### `command-management.html`
- Command list table
- Action icon patterns
- Table-based library layout

### `command-editor.html`
- Command name / protocol / string editor
- Retry and timeout fields
- Device binding summary

### `command-test.html`
- Test runner form
- Manual payload input
- Response log area

### `macro-management.html`
- Macro list
- Search toolbar
- Primary CTA

### `macro-editor.html`
- 3-column builder layout
- Action Library
- Flow Editor
- Inspector

### `scheduling-list.html`
- Scheduling table
- Search / filter toolbar
- Trigger / status / action presentation

### `scheduling-create.html`
- Merged schedule creation flow
- Item binding
- Trigger configuration
- Preview panel

### `devices-list.html`
- Device list table
- Driver/manual distinction
- Action icon patterns

### `device-create.html`
- Driver-based add device form
- Connection settings
- Capability preview

### `driver-library.html`
- Search / filter toolbar
- Vendor / model / detail master-detail layout

### `scenario-management.html`
- Scenario list + detail split view

### `button-editor.html`
- Button label / icon editor
- Macro or command binding
- Execute behavior selector

### `panel-layouts.html`
- Template layout gallery
- Structural layout choices

### `panel-preview.html`
- Static panel mock
- Final control page placeholder

### `event-trigger.html`
- Future trigger table structure placeholder

### `device-discovery.html`
- Discovered device table
- Reachability and protocol summary

### `debug-console.html`
- System event console
- Diagnostic KPI cards

### `device-information.html`
- Name / IP / MAC / serial summary
- Firmware and uptime overview

### `system-settings.html`
- Login and session timeout
- Access control policy summary

### `date-time.html`
- NTP / manual setup
- 12 / 24 hour formatting

### `pad-display-setting.html`
- Display preferences form
- Summary / preview block

### `theme-assets.html`
- Theme preset reference
- Wallpapers and icon assets summary

### `backup-restore.html`
- Export package scope
- Restore validation and rollback notes

### `language.html`
- Zh / En / Ja language selector
- Localization notes

### `log-export.html`
- Date range and log type filtering
- Export summary area

### `firmware-upgrade.html`
- OTA upgrade card
- Local package validation notes

### `network.html`
- Ethernet setup
- Wi-Fi list

### `admin.html`
- Security form
- Maintenance action groups

### `initial-setup.html`
- First boot wizard outline
- Factory reset recovery flow

### `dialogs-showcase.html`
- Review dialog
- Delete confirmation dialog
- Import dialog

### `states-showcase.html`
- Empty state
- No-result state
- Delete confirm message style
- Toast message variants

## Shared Assets
- `assets/cyp-logo.png`
- `css/ui-static.css`

## Design Notes
- Brand colors follow CYP palette only
- Typography uses Arial
- Layout direction is professional control system / enterprise control platform
- Static pages are for visual handoff, not runtime interaction spec
