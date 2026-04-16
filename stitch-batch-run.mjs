import fs from "node:fs/promises";
import { StitchToolClient } from "@google/stitch-sdk";

const PROJECT_TITLE = "CYP Control System UI";
const DESIGN_SYSTEM_NAME = "CYP Control Console Design System";
const SHELL_SCREEN_TITLE = "CYP App Shell Direction";
const SUMMARY_PATH = "stitch-run-summary.md";

const DOMAIN_NAV = "Home, Control, Device, Scenes, Setting";

const MATRIX = [
  { domain: "Index", pageKey: "INDEX", promptSource: "Promt_INDEX.md", promptMode: "direct", title: "CYP Index Overview" },
  { domain: "Home", pageKey: "HOME", promptSource: "Promt_HOME.md", promptMode: "direct", title: "CYP Home Dashboard" },
  { domain: "Control", pageKey: "COMMAND_MANAGEMENT", promptSource: "Promt_COMMAND_MANAGEMENT.md", promptMode: "direct", title: "CYP Command Management" },
  { domain: "Control", pageKey: "COMMAND_EDITOR", promptSource: "Promt_COMMAND_EDITOR.md", promptMode: "direct", title: "CYP Command Editor" },
  { domain: "Control", pageKey: "COMMAND_TEST", promptSource: "Promt_COMMAND_TEST.md", promptMode: "direct", title: "CYP Command Test" },
  { domain: "Control", pageKey: "MACRO_MANAGEMENT", promptSource: "Promt_MACRO_MANAGEMENT.md", promptMode: "direct", title: "CYP Macro Management" },
  { domain: "Control", pageKey: "MACRO_EDITOR", promptSource: "Promt_MACRO_EDITOR.md", promptMode: "direct", title: "CYP Macro Editor" },
  { domain: "Control", pageKey: "SCHEDULING_LIST", promptSource: "Promt_SCHEDULING_LIST.md", promptMode: "direct", title: "CYP Scheduling List" },
  { domain: "Control", pageKey: "SCHEDULING_CREATE", promptSource: "Promt_SCHEDULING_CREATE.md", promptMode: "direct", title: "CYP Scheduling Create" },
  { domain: "Control", pageKey: "EVENT_TRIGGER", promptSource: "Promt_EVENT_TRIGGER.md", promptMode: "direct", title: "CYP Event Trigger" },
  { domain: "Device", pageKey: "DEVICES_LIST", promptSource: "Promt_DEVICES_LIST.md", promptMode: "direct", title: "CYP Devices List" },
  { domain: "Device", pageKey: "DEVICE_CREATE", promptSource: "Promt_DEVICE_CREATE.md", promptMode: "direct", title: "CYP Device Create" },
  { domain: "Device", pageKey: "DRIVER_LIBRARY", promptSource: "Promt_DRIVER_LIBRARY.md", promptMode: "direct", title: "CYP Driver Library" },
  { domain: "Device", pageKey: "DEVICE_DISCOVERY", promptSource: "Promt_DEVICE_DISCOVERY.md", promptMode: "direct", title: "CYP Device Discovery" },
  { domain: "Scenes", pageKey: "SCENARIO_MANAGEMENT", promptSource: "Promt_SCENARIO_MANAGEMENT.md", promptMode: "direct", title: "CYP Scenario Management" },
  { domain: "Scenes", pageKey: "BUTTON_EDITOR", promptSource: "Promt_BUTTON_EDITOR.md", promptMode: "direct", title: "CYP Button Editor" },
  { domain: "Scenes", pageKey: "PANEL_LAYOUTS", promptSource: "Promt_PANEL_LAYOUTS.md", promptMode: "direct", title: "CYP Panel Layouts" },
  { domain: "Scenes", pageKey: "PANEL_PREVIEW", promptSource: "Promt_PANEL_PREVIEW.md", promptMode: "direct", title: "CYP Panel Preview" },
  { domain: "Setting", pageKey: "DEVICE_INFORMATION", promptSource: "Promt_DEVICE_INFORMATION.md", promptMode: "direct", title: "CYP Device Information" },
  { domain: "Setting", pageKey: "SYSTEM_SETTINGS", promptSource: "Promt_SYSTEM_SETTINGS.md", promptMode: "direct", title: "CYP System Settings" },
  { domain: "Setting", pageKey: "DATE_TIME", promptSource: "Promt_DATE_TIME.md", promptMode: "direct", title: "CYP Date and Time" },
  { domain: "Setting", pageKey: "PAD_DISPLAY_SETTING", promptSource: "Promt_PAD_DISPLAY_SETTING.md", promptMode: "direct", title: "CYP Pad Display Setting" },
  { domain: "Setting", pageKey: "THEME_ASSETS", promptSource: "Promt_THEME_ASSETS.md", promptMode: "direct", title: "CYP Theme and Assets" },
  { domain: "Setting", pageKey: "BACKUP_RESTORE", promptSource: "Promt_BACKUP_RESTORE.md", promptMode: "direct", title: "CYP Backup and Restore" },
  { domain: "Setting", pageKey: "LANGUAGE", promptSource: "Promt_LANGUAGE.md", promptMode: "direct", title: "CYP Language" },
  { domain: "Setting", pageKey: "LOG_EXPORT", promptSource: "Promt_LOG_EXPORT.md", promptMode: "direct", title: "CYP Log Export" },
  { domain: "Setting", pageKey: "FIRMWARE_UPGRADE", promptSource: "Promt_FIRMWARE_UPGRADE.md", promptMode: "direct", title: "CYP Firmware Upgrade" },
  { domain: "Setting", pageKey: "NETWORK", promptSource: "Promt_NETWORK.md", promptMode: "direct", title: "CYP Network" },
  { domain: "Setting", pageKey: "ADMIN", promptSource: "Promt_ADMIN.md", promptMode: "direct", title: "CYP Admin" },
  { domain: "Setting", pageKey: "INITIAL_SETUP", promptSource: "Promt_INITIAL_SETUP.md", promptMode: "direct", title: "CYP Initial Setup" },
  { domain: "Developer Tools", pageKey: "DEBUG_CONSOLE", promptSource: "Promt_DEBUG_CONSOLE.md", promptMode: "direct", title: "CYP Debug Console" },
  { domain: "Developer Tools", pageKey: "DEVELOPER_DEVICE_DISCOVERY", promptSource: "Promt_DEVICE_DISCOVERY.md", promptMode: "derived", title: "CYP Developer Device Discovery" },
  { domain: "UI Reference", pageKey: "DIALOGS_SHOWCASE", promptSource: "Promt_DIALOGS_SHOWCASE.md", promptMode: "direct", title: "CYP Dialogs Showcase" },
  { domain: "UI Reference", pageKey: "STATES_SHOWCASE", promptSource: "Promt_STATES_SHOWCASE.md", promptMode: "direct", title: "CYP States Showcase" }
];

const PAGE_REQUIREMENTS = {
  INDEX: "Create a sitemap-style overview of the CYP control-system product structure. Show the major domains Home, Control, Device, Scenes, Setting, Developer Tools, and UI Reference. Make it a design handoff overview page for the product, not a marketing landing page.",
  HOME: "Create the operational home dashboard for the controller pad. Emphasize pad/device information, online status, network status, connected devices, a prominent control pad preview, selected/on/alert button states, and slider-based control.",
  COMMAND_MANAGEMENT: "Create a table-based command library management page with toolbar, summary, command table, and row actions for edit, duplicate, test, and delete.",
  COMMAND_EDITOR: "Create a command editor page for device command authoring. Include command name, interface, device, command data, parameter editing, value type, preview, and protocol-specific configuration.",
  COMMAND_TEST: "Create a command testing page with payload preview, execution result feedback, and test flow validation.",
  MACRO_MANAGEMENT: "Create a macro management page with macro list, search/filter, summary, and create/edit/test actions.",
  MACRO_EDITOR: "Create a split-view macro editor with action library, flow editor canvas, inspector panel, review behavior, and stateful editing.",
  SCHEDULING_LIST: "Create a schedule management page with schedule table, type, binding, trigger type, rule summary, next run, status, and run-now controls.",
  SCHEDULING_CREATE: "Create a scheduling builder page with trigger type setup, rule configuration, binding selection, preview summary, next run, and upcoming runs.",
  EVENT_TRIGGER: "Create an event trigger configuration page showing trigger definitions, event payload preview, and action binding setup.",
  DEVICES_LIST: "Create a devices list page for managed hardware inventory with filters, device status, type, and edit/review actions.",
  DEVICE_CREATE: "Create a device creation page with driver selection, connection settings, protocol, capability summary, and review before save.",
  DRIVER_LIBRARY: "Create a driver library page with search/filter toolbar, vendor/model list, driver detail, import flow, and create-device action.",
  DEVICE_DISCOVERY: "Create a device discovery page with scan workflow, reachability results, protocol detection, discovery detail modal, and add-device affordance.",
  SCENARIO_MANAGEMENT: "Create a scenario management builder page with scenario list, layout templates, button templates, page tabs, control pad preview, canvas, button config, action binding, icon picker, and unsaved changes awareness.",
  BUTTON_EDITOR: "Create a button editor page with label, icon, macro or command binding, execute behavior, and selected button summary.",
  PANEL_LAYOUTS: "Create a panel layout selection page with layout templates, preview comparison, and compatibility emphasis.",
  PANEL_PREVIEW: "Create a control pad panel preview page focused on runtime preview and layout output.",
  DEVICE_INFORMATION: "Create a device information page showing name, IP, MAC, serial number, firmware version, uptime, and system summary cards.",
  SYSTEM_SETTINGS: "Create a system settings page covering login/logout, session timeout, access control summary, and system policy sections.",
  DATE_TIME: "Create a date and time settings page with NTP/manual selection, 12/24 hour mode, and current time configuration summary.",
  PAD_DISPLAY_SETTING: "Create a pad display setting page with theme mode, pad language, screen lock, idle time, screen saver content, and preview.",
  THEME_ASSETS: "Create a theme and assets management page for wallpapers, icon assets, and visual resource configuration.",
  BACKUP_RESTORE: "Create a backup and restore page showing export/import configuration controls, package scope, and restore validation flow.",
  LANGUAGE: "Create a language settings page for Zh, En, and Ja with localization-focused configuration state.",
  LOG_EXPORT: "Create a log export page with log type filters, export controls, and output summary.",
  FIRMWARE_UPGRADE: "Create a firmware upgrade page with OTA and local package modes, version status, and upgrade progress states.",
  NETWORK: "Create a network settings page covering Ethernet, DHCP/static, Wi-Fi list, Wi-Fi detail, and network summary.",
  ADMIN: "Create an admin page with password change, role access summary, configuration import/export, log download, OTA/manual update, reboot, and factory reset confirmation flows.",
  INITIAL_SETUP: "Create an initial setup page with first-run wizard style guidance, reset/recovery path, and setup progression.",
  DEBUG_CONSOLE: "Create a developer debug console page for system events, mock command execution, and diagnostic feedback.",
  DEVELOPER_DEVICE_DISCOVERY: "Create a developer-tools device discovery page derived from device discovery but with stronger debugging and diagnostic emphasis.",
  DIALOGS_SHOWCASE: "Create a dialogs showcase page that catalogs product modal patterns such as review, delete confirm, import, and system feedback dialogs.",
  STATES_SHOWCASE: "Create a UI states showcase page covering empty state, search empty, delete confirm messages, toast variants, and feedback states."
};

function esc(value) {
  return String(value ?? "").replace(/\|/g, "\\|").replace(/\n/g, "<br>");
}

async function readText(path) {
  try {
    return await fs.readFile(path, "utf8");
  } catch {
    return "";
  }
}

async function writeSummary(meta, rows) {
  const header = [
    "# Stitch Run Summary",
    "",
    `- Project Name: ${meta.projectName || ""}`,
    `- Project ID: ${meta.projectId || ""}`,
    `- Design System Name: ${meta.designSystemName || ""}`,
    `- Design System Asset ID: ${meta.designSystemAssetId || ""}`,
    `- Shell Direction Screen ID: ${meta.shellScreenId || ""}`,
    `- Run Date: ${meta.runDate || new Date().toISOString()}`,
    `- Last Completed Page: ${meta.lastCompletedPage || ""}`,
    `- Halt Reason: ${meta.haltReason || ""}`,
    "",
    "| Domain | Page Key | Prompt Source | Prompt Mode | Stitch Screen Title | Screen ID | Screenshot URL | HTML URL | Status | Notes |",
    "|---|---|---|---|---|---|---|---|---|---|"
  ];
  const lines = rows.map((row) =>
    `| ${esc(row.domain)} | ${esc(row.pageKey)} | ${esc(row.promptSource)} | ${esc(row.promptMode)} | ${esc(row.title)} | ${esc(row.screenId)} | ${esc(row.screenshotUrl)} | ${esc(row.htmlUrl)} | ${esc(row.status)} | ${esc(row.notes)} |`
  );
  await fs.writeFile(SUMMARY_PATH, [...header, ...lines, ""].join("\n"), "utf8");
}

function buildShellPrompt(promptText, functionText, designText) {
  return [
    "Create the master shell direction screen for the CYP control-system web GUI.",
    "This is not a marketing page. It is a design-direction screen for all application pages.",
    `Use a desktop-first enterprise control console layout with top bar, left sidebar, and main content canvas.`,
    `Navigation domains must be: ${DOMAIN_NAV}.`,
    "The shell must define the visual and structural baseline for all following pages.",
    "Keep white panels on a light background, blue-cyan control-system accents, clear enterprise spacing, and concise product-facing labels.",
    "Do not use hero banners, decorative landing-page sections, or promotional copy.",
    "",
    "Prompt source context:",
    promptText,
    "",
    "Function source context:",
    functionText,
    "",
    "Design system context:",
    designText
  ].join("\n");
}

function buildPagePrompt(page, promptText, functionText, designText) {
  const pageRequirement = PAGE_REQUIREMENTS[page.pageKey] || `Create the ${page.title} screen as a CYP control-system UI page.`;
  const editorHint = ["CYP Macro Editor", "CYP Scenario Management", "CYP Button Editor", "CYP Panel Layouts", "CYP Panel Preview", "CYP Command Editor", "CYP Scheduling Create"].includes(page.title)
    ? "This page is a builder/editor page. Use split-view, inspector, preview, builder canvas, or configuration panels rather than generic dashboard cards."
    : "";
  return [
    `Create or refine the Stitch screen titled "${page.title}".`,
    `Domain: ${page.domain}.`,
    `Page key: ${page.pageKey}.`,
    `Use the CYP design system already configured for the project.`,
    `App shell must stay consistent with the CYP console structure: top bar, left sidebar, and operational content canvas.`,
    pageRequirement,
    editorHint,
    "Do not produce a marketing page, hero banner, landing page layout, or promotional copy.",
    "Maintain the CYP control-console palette, spacing, rounded panels, and enterprise UI tone.",
    "",
    `Prompt source file (${page.promptSource}):`,
    promptText,
    "",
    "Relevant function source context:",
    functionText,
    "",
    "Design system context:",
    designText
  ].join("\n");
}

async function main() {
  const apiKey = process.env.STITCH_API_KEY;
  if (!apiKey) {
    throw new Error("STITCH_API_KEY is not set.");
  }

  const client = new StitchToolClient({ apiKey });
  const rows = [];
  const meta = {
    projectName: PROJECT_TITLE,
    designSystemName: DESIGN_SYSTEM_NAME,
    runDate: new Date().toISOString(),
    haltReason: ""
  };

  const functionText = await readText("Function.md");
  const designText = await readText("CYP_Design_MD.md");
  const indexPrompt = await readText("Promt_INDEX.md");

  try {
    const projectsResult = await client.callTool("list_projects", {});
    let project = (projectsResult.projects || []).find((p) => p.title === PROJECT_TITLE);
    if (!project) {
      const created = await client.callTool("create_project", { title: PROJECT_TITLE });
      const createdId = created.project?.projectId || created.projectId || created.id || created.name?.replace(/^projects\//, "");
      if (!createdId) throw new Error("Unable to resolve project id after create_project.");
      project = { title: PROJECT_TITLE, name: `projects/${createdId}` };
    }
    const projectId = project.projectId || project.id || project.name?.replace(/^projects\//, "");
    meta.projectId = projectId;

    const designSystemsResult = await client.callTool("list_design_systems", { projectId });
    let designSystemRecord = (designSystemsResult.designSystems || []).find(
      (ds) => ds.designSystem?.displayName === DESIGN_SYSTEM_NAME
    );
    if (!designSystemRecord) {
      const createdDesign = await client.callTool("create_design_system", {
        projectId,
        designSystem: {
          displayName: DESIGN_SYSTEM_NAME,
          theme: {
            colorMode: "LIGHT",
            colorVariant: "FIDELITY",
            headlineFont: "INTER",
            bodyFont: "INTER",
            labelFont: "INTER",
            roundness: "ROUND_TWELVE",
            customColor: "#008AAB",
            overridePrimaryColor: "#008AAB",
            overrideSecondaryColor: "#1226AA",
            overrideTertiaryColor: "#FFC629",
            overrideNeutralColor: "#F4F7F8",
            designMd: designText
          }
        }
      });
      designSystemRecord = {
        name: createdDesign.designSystem?.name || createdDesign.name,
        designSystem: createdDesign.designSystem?.designSystem || createdDesign.designSystem
      };
    }
    meta.designSystemAssetId = String(designSystemRecord.name || "").replace(/^assets\//, "");

    const screensResult = await client.callTool("list_screens", { projectId });
    const existingScreens = screensResult.screens || [];

    let shellScreen = existingScreens.find((s) => s.title === SHELL_SCREEN_TITLE);
    if (!shellScreen) {
      const shellGenerated = await client.callTool("generate_screen_from_text", {
        projectId,
        deviceType: "DESKTOP",
        modelId: "GEMINI_3_1_PRO",
        prompt: buildShellPrompt(indexPrompt, functionText, designText)
      });
      shellScreen = shellGenerated.outputComponents?.find((c) => c.design?.screens?.[0])?.design?.screens?.[0];
    }
    meta.shellScreenId = shellScreen?.id || "";

    await writeSummary(meta, rows);

    for (const page of MATRIX) {
      const promptText = await readText(page.promptSource);
      const currentScreens = await client.callTool("list_screens", { projectId });
      const found = (currentScreens.screens || []).find((s) => s.title === page.title);
      let screen;
      let status;
      let notes = "";

      try {
        if (found) {
          const edited = await client.callTool("edit_screens", {
            projectId,
            selectedScreenIds: [found.id || found.screenId || String(found.name).split("/").pop()],
            deviceType: "DESKTOP",
            modelId: "GEMINI_3_1_PRO",
            prompt: buildPagePrompt(page, promptText, functionText, designText)
          });
          screen = edited.outputComponents?.find((c) => c.design?.screens?.[0])?.design?.screens?.[0];
          status = "edited";
        } else {
          const generated = await client.callTool("generate_screen_from_text", {
            projectId,
            deviceType: "DESKTOP",
            modelId: "GEMINI_3_1_PRO",
            prompt: buildPagePrompt(page, promptText, functionText, designText)
          });
          screen = generated.outputComponents?.find((c) => c.design?.screens?.[0])?.design?.screens?.[0];
          status = page.promptMode === "derived" ? "derived" : "generated";
        }
      } catch (error) {
        meta.lastCompletedPage = page.title;
        meta.haltReason = `Stopped at ${page.title}: ${error instanceof Error ? error.message : String(error)}`;
        rows.push({
          domain: page.domain,
          pageKey: page.pageKey,
          promptSource: page.promptSource,
          promptMode: page.promptMode,
          title: page.title,
          screenId: "",
          screenshotUrl: "",
          htmlUrl: "",
          status: "manual review required",
          notes: meta.haltReason
        });
        await writeSummary(meta, rows);
        throw error;
      }

      rows.push({
        domain: page.domain,
        pageKey: page.pageKey,
        promptSource: page.promptSource,
        promptMode: page.promptMode,
        title: page.title,
        screenId: screen?.id || "",
        screenshotUrl: screen?.screenshot?.downloadUrl || "",
        htmlUrl: screen?.htmlCode?.downloadUrl || "",
        status,
        notes
      });
      meta.lastCompletedPage = page.title;
      await writeSummary(meta, rows);
      console.log(`DONE: ${page.title}`);
    }

    meta.haltReason = "Completed";
    await writeSummary(meta, rows);
    console.log("BATCH COMPLETE");
  } finally {
    await client.close();
  }
}

main().catch((error) => {
  console.error(error instanceof Error ? error.stack || error.message : String(error));
  process.exit(1);
});
