const navToggle = document.getElementById("navToggle");
const navItems = document.querySelectorAll(".nav__item");
const navParents = document.querySelectorAll(".nav__parent");
const navChildren = document.querySelectorAll(".nav__child");
const navGroups = document.querySelectorAll(".nav-group");
const pageTitle = document.getElementById("pageTitle");
const languageSelect = document.getElementById("languageSelect");
const settingsButton = document.getElementById("settingsButton");
const userMenuTrigger = document.getElementById("userMenuTrigger");
const userDropdown = document.getElementById("userDropdown");
const signinModal = document.getElementById("signinModal");
const settingsModal = document.getElementById("settingsModal");
const signinForm = document.getElementById("signinForm");
const settingsForm = document.getElementById("settingsForm");
const statusToast = document.getElementById("statusToast");
const homeDashboard = document.getElementById("homeDashboard");
const contentPlaceholder = document.getElementById("contentPlaceholder");
const placeholderText = document.getElementById("placeholderText");
const commandPanel = document.getElementById("commandPanel");
const createCommandButton = document.getElementById("createCommandButton");
const commandTableBody = document.getElementById("commandTableBody");
const commandSummary = document.getElementById("commandSummary");
const commandPagination = document.getElementById("commandPagination");
const macroPanel = document.getElementById("macroPanel");
const macroListView = document.getElementById("macroListView");
const macroEditorView = document.getElementById("macroEditorView");
const newMacroButton = document.getElementById("newMacroButton");
const createFirstMacroButton = document.getElementById("createFirstMacroButton");
const macroSearchInput = document.getElementById("macroSearchInput");
const macroTableBody = document.getElementById("macroTableBody");
const macroSummary = document.getElementById("macroSummary");
const macroPagination = document.getElementById("macroPagination");
const macroEmptyState = document.getElementById("macroEmptyState");
const macroEditorBackButton = document.getElementById("macroEditorBackButton");
const macroEditorSaveButton = document.getElementById("macroEditorSaveButton");
const macroEditorTestButton = document.getElementById("macroEditorTestButton");
const macroBasicNameInput = document.getElementById("macroBasicNameInput");
const macroBasicDescriptionInput = document.getElementById("macroBasicDescriptionInput");
const macroActionLibrary = document.getElementById("macroActionLibrary");
const macroFlowCanvas = document.getElementById("macroFlowCanvas");
const macroInspectorPanel = document.getElementById("macroInspectorPanel");
const macroInsertActionModal = document.getElementById("macroInsertActionModal");
const macroInsertActionGrid = document.getElementById("macroInsertActionGrid");
const macroReviewModal = document.getElementById("macroReviewModal");
const macroReviewHeader = document.getElementById("macroReviewHeader");
const macroReviewFlow = document.getElementById("macroReviewFlow");
const automationPanel = document.getElementById("automationPanel");
const eventTriggerPanel = document.getElementById("eventTriggerPanel");
const eventTriggerContent = document.getElementById("eventTriggerContent");
const scenarioPanel = document.getElementById("scenarioPanel");
const driverLibraryPanel = document.getElementById("driverLibraryPanel");
const importDriverButton = document.getElementById("importDriverButton");
const driverSearchInput = document.getElementById("driverSearchInput");
const driverTypeFilter = document.getElementById("driverTypeFilter");
const driverProtocolFilter = document.getElementById("driverProtocolFilter");
const driverVendorFilter = document.getElementById("driverVendorFilter");
const driverVendorList = document.getElementById("driverVendorList");
const driverModelList = document.getElementById("driverModelList");
const driverDetailContent = document.getElementById("driverDetailContent");
const driverCreateDeviceButton = document.getElementById("driverCreateDeviceButton");
const driverExportButton = document.getElementById("driverExportButton");
const importDriverModal = document.getElementById("importDriverModal");
const importDriverForm = document.getElementById("importDriverForm");
const importDriverFileInput = document.getElementById("importDriverFileInput");
const deviceIntegrationPanel = document.getElementById("deviceIntegrationPanel");
const deviceIntegrationContent = document.getElementById("deviceIntegrationContent");
const deviceDeleteModal = document.getElementById("deviceDeleteModal");
const deviceDeleteName = document.getElementById("deviceDeleteName");
const deviceDeleteMessage = document.getElementById("deviceDeleteMessage");
const confirmDeviceDeleteButton = document.getElementById("confirmDeviceDeleteButton");
const deviceReviewModal = document.getElementById("deviceReviewModal");
const deviceReviewHeader = document.getElementById("deviceReviewHeader");
const deviceReviewContent = document.getElementById("deviceReviewContent");
const displayPanel = document.getElementById("displayPanel");
const networkPanel = document.getElementById("networkPanel");
const adminPanel = document.getElementById("adminPanel");
const developerToolsPanel = document.getElementById("developerToolsPanel");
const developerToolDiscoveryTab = document.getElementById("developerToolDiscoveryTab");
const developerToolConsoleTab = document.getElementById("developerToolConsoleTab");
const developerDiscoveryView = document.getElementById("developerDiscoveryView");
const developerConsoleView = document.getElementById("developerConsoleView");
const startDiscoveryButton = document.getElementById("startDiscoveryButton");
const discoveryTableBody = document.getElementById("discoveryTableBody");
const discoverySummary = document.getElementById("discoverySummary");
const debugConsoleHint = document.getElementById("debugConsoleHint");
const debugConsoleOutput = document.getElementById("debugConsoleOutput");
const debugConsoleForm = document.getElementById("debugConsoleForm");
const debugConsoleInput = document.getElementById("debugConsoleInput");
const discoveryDetailModal = document.getElementById("discoveryDetailModal");
const discoveryDetailHeader = document.getElementById("discoveryDetailHeader");
const discoveryDetailContent = document.getElementById("discoveryDetailContent");
const eventTriggerTestModal = document.getElementById("eventTriggerTestModal");
const eventTriggerTestForm = document.getElementById("eventTriggerTestForm");
const eventTriggerTestHeader = document.getElementById("eventTriggerTestHeader");
const eventTriggerTestPayload = document.getElementById("eventTriggerTestPayload");
const eventTriggerTestResult = document.getElementById("eventTriggerTestResult");
const padButtons = document.querySelectorAll(".pad-button");
const lightBrightnessSlider = document.getElementById("lightBrightnessSlider");
const padPagesViewport = document.getElementById("padPagesViewport");
const padPagesTrack = document.getElementById("padPagesTrack");
const padPageDots = document.querySelectorAll(".pad-page-dot");
const padPages = document.querySelectorAll(".pad-page");
const ethernetForm = document.getElementById("ethernetForm");
const ethernetModeInputs = document.querySelectorAll('input[name="ethernetMode"]');
const ethernetIpInput = document.getElementById("ethernetIpInput");
const ethernetMaskInput = document.getElementById("ethernetMaskInput");
const ethernetGatewayInput = document.getElementById("ethernetGatewayInput");
const ethernetDnsInput = document.getElementById("ethernetDnsInput");
const wifiToggle = document.getElementById("wifiToggle");
const wifiList = document.getElementById("wifiList");
const wifiAvailabilityMeta = document.getElementById("wifiAvailabilityMeta");
const wifiCurrentSsid = document.getElementById("wifiCurrentSsid");
const wifiCurrentMeta = document.getElementById("wifiCurrentMeta");
const networkStatusBadge = document.getElementById("networkStatusBadge");
const networkConnectionLabel = document.getElementById("networkConnectionLabel");
const networkConnectionMeta = document.getElementById("networkConnectionMeta");
const networkStatusHint = document.getElementById("networkStatusHint");
const networkInfoIp = document.getElementById("networkInfoIp");
const networkInfoMask = document.getElementById("networkInfoMask");
const networkInfoGateway = document.getElementById("networkInfoGateway");
const networkInfoDns = document.getElementById("networkInfoDns");
const networkConnectionIcon = document.getElementById("networkConnectionIcon");
const wifiPasswordModal = document.getElementById("wifiPasswordModal");
const wifiPasswordForm = document.getElementById("wifiPasswordForm");
const wifiPasswordInput = document.getElementById("wifiPasswordInput");
const wifiPasswordNetworkName = document.getElementById("wifiPasswordNetworkName");
const commandEditorModal = document.getElementById("commandEditorModal");
const commandEditorForm = document.getElementById("commandEditorForm");
const commandEditorTitle = document.getElementById("commandEditorTitle");
const commandEditIndex = document.getElementById("commandEditIndex");
const commandNameInput = document.getElementById("commandNameInput");
const commandInterfaceSelect = document.getElementById("commandInterfaceSelect");
const commandDeviceSelect = document.getElementById("commandDeviceSelect");
const commandTelnetIpField = document.getElementById("commandTelnetIpField");
const commandTelnetPortField = document.getElementById("commandTelnetPortField");
const commandTelnetIpInput = document.getElementById("commandTelnetIpInput");
const commandTelnetPortInput = document.getElementById("commandTelnetPortInput");
const commandDataInput = document.getElementById("commandDataInput");
const commandStateUpdateEnabled = document.getElementById("commandStateUpdateEnabled");
const commandStateUpdatePanel = document.getElementById("commandStateUpdatePanel");
const commandStateUpdateParameter = document.getElementById("commandStateUpdateParameter");
const commandStateUpdateValueTextField = document.getElementById("commandStateUpdateValueTextField");
const commandStateUpdateValueNumberField = document.getElementById("commandStateUpdateValueNumberField");
const commandStateUpdateValueBooleanField = document.getElementById("commandStateUpdateValueBooleanField");
const commandStateUpdateValueText = document.getElementById("commandStateUpdateValueText");
const commandStateUpdateValueNumber = document.getElementById("commandStateUpdateValueNumber");
const commandStateUpdateValueBoolean = document.getElementById("commandStateUpdateValueBoolean");
const commandStateUpdatePreview = document.getElementById("commandStateUpdatePreview");
const adminConfirmModal = document.getElementById("adminConfirmModal");
const adminConfirmForm = document.getElementById("adminConfirmForm");
const adminConfirmActionLabel = document.getElementById("adminConfirmActionLabel");
const adminConfirmMessage = document.getElementById("adminConfirmMessage");
const displayForm = document.getElementById("displayForm");
const timeModeInputs = document.querySelectorAll('input[name="timeMode"]');
const timeFormatSelect = document.getElementById("timeFormatSelect");
const manualTimeInput = document.getElementById("manualTimeInput");
const dateInput = document.getElementById("dateInput");
const themeModeSelect = document.getElementById("themeModeSelect");
const padLanguageSelect = document.getElementById("padLanguageSelect");
const displayBrightnessSlider = document.getElementById("displayBrightnessSlider");
const displayBrightnessBadge = document.getElementById("displayBrightnessBadge");
const displayThemeBadge = document.getElementById("displayThemeBadge");
const screenLockToggle = document.getElementById("screenLockToggle");
const idleMinutesInput = document.getElementById("idleMinutesInput");
const screenSaverContentSelect = document.getElementById("screenSaverContentSelect");
const customImageField = document.getElementById("customImageField");
const customImageInput = document.getElementById("customImageInput");
const macroDeleteModal = document.getElementById("macroDeleteModal");
const macroDeleteName = document.getElementById("macroDeleteName");
const confirmMacroDeleteButton = document.getElementById("confirmMacroDeleteButton");
const adminSecurityForm = document.getElementById("adminSecurityForm");
const adminPasswordInput = document.getElementById("adminPasswordInput");
const adminPasswordConfirmInput = document.getElementById("adminPasswordConfirmInput");
const accessRoleSelect = document.getElementById("accessRoleSelect");
const accessRoleSummary = document.getElementById("accessRoleSummary");
const configImportInput = document.getElementById("configImportInput");
const configImportSummary = document.getElementById("configImportSummary");
const importConfigButton = document.getElementById("importConfigButton");
const exportConfigButton = document.getElementById("exportConfigButton");
const downloadLogButton = document.getElementById("downloadLogButton");
const otaUpdateButton = document.getElementById("otaUpdateButton");
const firmwareForm = document.getElementById("firmwareForm");
const firmwareFileInput = document.getElementById("firmwareFileInput");
const firmwareSummary = document.getElementById("firmwareSummary");
const rebootButton = document.getElementById("rebootButton");
const factoryResetButton = document.getElementById("factoryResetButton");
const commandParameterOptions = Array.from({ length: 20 }, (_, index) => `Param_${index + 1}`);

const state = {
  isLoggedIn: false,
  language: languageSelect.value,
  toastTimer: null,
  currentPadPage: 0,
  padDragStartX: 0,
  padDragDeltaX: 0,
  isPadDragging: false,
  commandPage: 1,
  macroPage: 1,
  macroSearch: "",
  macroEditorMode: "list",
  editingMacroId: "",
  pendingDeleteMacroId: "",
  selectedMacroStepPath: "",
  lastMacroInsertType: "command",
  dragInsertType: "",
  dragMacroInsertTarget: null,
  pendingMacroInsertTarget: null,
  macroDraft: null,
  stepIdCounter: 0,
  ethernet: {
    connected: true,
    mode: "dhcp",
    dhcp: {
      ip: "192.168.10.88",
      mask: "255.255.255.0",
      gateway: "192.168.10.1",
      dns: "8.8.8.8, 1.1.1.1",
    },
    static: {
      ip: "192.168.10.120",
      mask: "255.255.255.0",
      gateway: "192.168.10.1",
      dns: "8.8.8.8, 1.1.1.1",
    },
  },
  wifi: {
    enabled: true,
    connectedSSID: "Cypress_Setup_5G",
    networks: [
      { ssid: "Cypress_Setup_5G", strength: "excellent", secure: true, saved: true },
      { ssid: "MeetingRoom_AP", strength: "strong", secure: true, saved: false },
      { ssid: "Guest_Network", strength: "medium", secure: false, saved: false },
      { ssid: "Installer_Backup", strength: "weak", secure: true, saved: false },
    ],
  },
  runtimeParameters: commandParameterOptions.reduce((accumulator, key) => {
    accumulator[key] = "";
    return accumulator;
  }, {}),
  pendingWifiSSID: null,
  commands: [
    {
      id: "CMD-001",
      name: "Display Power On",
      interface: "System",
      data: "display.power=on",
      device: "Main Display",
      telnetIp: "",
      telnetPort: "",
      stateUpdate: null,
    },
    {
      id: "CMD-002",
      name: "Switcher Input 1",
      interface: "RS232",
      data: "VIDEO IN1 OUT1\\r",
      device: "Matrix Switcher",
      telnetIp: "",
      telnetPort: "",
      stateUpdate: null,
    },
    {
      id: "CMD-003",
      name: "Camera Preset Recall",
      interface: "Telnet",
      data: "camera preset recall 1",
      device: "PTZ Camera",
      telnetIp: "192.168.10.150",
      telnetPort: "23",
      stateUpdate: null,
    },
    {
      id: "CMD-004",
      name: "Display Power Off",
      interface: "System",
      data: "display.power=off",
      device: "Main Display",
      telnetIp: "",
      telnetPort: "",
      stateUpdate: null,
    },
    {
      id: "CMD-005",
      name: "Display HDMI 1",
      interface: "RS232",
      data: "SOURCE HDMI1\\r",
      device: "Main Display",
      telnetIp: "",
      telnetPort: "",
      stateUpdate: null,
    },
    {
      id: "CMD-006",
      name: "Display HDMI 2",
      interface: "RS232",
      data: "SOURCE HDMI2\\r",
      device: "Main Display",
      telnetIp: "",
      telnetPort: "",
      stateUpdate: null,
    },
    {
      id: "CMD-007",
      name: "Audio Volume Up",
      interface: "System",
      data: "audio.volume=up",
      device: "Audio DSP",
      telnetIp: "",
      telnetPort: "",
      stateUpdate: null,
    },
    {
      id: "CMD-008",
      name: "Audio Volume Down",
      interface: "System",
      data: "audio.volume=down",
      device: "Audio DSP",
      telnetIp: "",
      telnetPort: "",
      stateUpdate: null,
    },
    {
      id: "CMD-009",
      name: "Audio Mute On",
      interface: "Telnet",
      data: "mute on",
      device: "Audio DSP",
      telnetIp: "192.168.10.161",
      telnetPort: "23",
      stateUpdate: null,
    },
    {
      id: "CMD-010",
      name: "Audio Mute Off",
      interface: "Telnet",
      data: "mute off",
      device: "Audio DSP",
      telnetIp: "192.168.10.161",
      telnetPort: "23",
    },
    {
      id: "CMD-011",
      name: "Matrix Route Laptop",
      interface: "RS232",
      data: "ROUTE IN2 OUT1\\r",
      device: "Matrix Switcher",
      telnetIp: "",
      telnetPort: "",
    },
    {
      id: "CMD-012",
      name: "Matrix Route Camera",
      interface: "RS232",
      data: "ROUTE IN3 OUT1\\r",
      device: "Matrix Switcher",
      telnetIp: "",
      telnetPort: "",
    },
    {
      id: "CMD-013",
      name: "Camera Preset 2",
      interface: "Telnet",
      data: "camera preset recall 2",
      device: "PTZ Camera",
      telnetIp: "192.168.10.150",
      telnetPort: "23",
    },
    {
      id: "CMD-014",
      name: "Camera Preset 3",
      interface: "Telnet",
      data: "camera preset recall 3",
      device: "PTZ Camera",
      telnetIp: "192.168.10.150",
      telnetPort: "23",
    },
    {
      id: "CMD-015",
      name: "Camera Home",
      interface: "Telnet",
      data: "camera home",
      device: "PTZ Camera",
      telnetIp: "192.168.10.150",
      telnetPort: "23",
    },
    {
      id: "CMD-016",
      name: "Lights Scene Meeting",
      interface: "System",
      data: "lights.scene=meeting",
      device: "Lighting Controller",
      telnetIp: "",
      telnetPort: "",
    },
    {
      id: "CMD-017",
      name: "Lights Scene Presentation",
      interface: "System",
      data: "lights.scene=presentation",
      device: "Lighting Controller",
      telnetIp: "",
      telnetPort: "",
    },
    {
      id: "CMD-018",
      name: "Lights Brightness 70",
      interface: "RS232",
      data: "DIM 70\\r",
      device: "Lighting Controller",
      telnetIp: "",
      telnetPort: "",
    },
    {
      id: "CMD-019",
      name: "Project Shutdown",
      interface: "System",
      data: "system.shutdown=project",
      device: "Main Display",
      telnetIp: "",
      telnetPort: "",
    },
    {
      id: "CMD-020",
      name: "Wake Room Devices",
      interface: "System",
      data: "room.wakeup=all",
      device: "Main Display",
      telnetIp: "",
      telnetPort: "",
    },
  ],
  macros: [
    {
      id: "MAC-001",
      name: "Meeting Start",
      description: "Power on display, route presentation source, unmute DSP, and set lights to meeting mode.",
      status: "Active",
      notes: "Startup sequence for standard boardroom use.",
    },
    {
      id: "MAC-002",
      name: "System Shutdown",
      description: "Mute audio, power down display, release routing, and move room to standby state.",
      status: "Active",
      notes: "Used at room end-of-day or scheduled shutdown.",
    },
    {
      id: "MAC-003",
      name: "Projector Warmup Flow",
      description: "Apply projector startup delay, lower screen, and prepare source switching after warmup.",
      status: "Draft",
      notes: "Pending final warmup timing validation.",
    },
    {
      id: "MAC-004",
      name: "Room Occupied Action",
      description: "When occupancy is detected, wake panel, set default scene, and restore active source state.",
      status: "Disabled",
      notes: "Held until sensor commissioning completes.",
    },
    {
      id: "MAC-005",
      name: "Presentation Mode Recall",
      description: "Switch room to presentation source, dim lights, and set audio to presentation preset.",
      status: "Active",
      notes: "Used by presenters before HDMI input handoff.",
    },
    {
      id: "MAC-006",
      name: "Video Conference Start",
      description: "Enable camera, route USB bridge, select far-end audio profile, and wake secondary display.",
      status: "Active",
      notes: "Standard VC startup macro for hybrid meetings.",
    },
    {
      id: "MAC-007",
      name: "Video Conference End",
      description: "Disconnect VC bridge, mute mics, clear camera preset, and revert routing to idle.",
      status: "Draft",
      notes: "Awaiting validation with room scheduling events.",
    },
    {
      id: "MAC-008",
      name: "All Displays Off",
      description: "Send coordinated power-off commands to front display, confidence monitor, and overflow screen.",
      status: "Active",
      notes: "Triggered by shutdown routines and service actions.",
    },
    {
      id: "MAC-009",
      name: "All Displays On",
      description: "Power on display group and restore default source mapping after device warmup.",
      status: "Active",
      notes: "Used after maintenance and morning startup.",
    },
    {
      id: "MAC-010",
      name: "Audio Recovery Action",
      description: "Reset DSP mute state, restore nominal level, and re-enable amplifier outputs.",
      status: "Draft",
      notes: "Fallback workflow after audio fault alarms.",
    },
    {
      id: "MAC-011",
      name: "Camera Privacy Mode",
      description: "Move camera to privacy preset, mute tracking, and disable auto-framing profile.",
      status: "Disabled",
      notes: "Reserved for customer policy review.",
    },
    {
      id: "MAC-012",
      name: "Lighting Welcome Scene",
      description: "Recall entry scene with moderate brightness and warm tone for room arrival.",
      status: "Active",
      notes: "Also tied to occupancy automation in lobby mode.",
    },
    {
      id: "MAC-013",
      name: "Lighting Cleaning Mode",
      description: "Set all lighting zones to full output for housekeeping and maintenance access.",
      status: "Active",
      notes: "May be restricted to admin users later.",
    },
    {
      id: "MAC-014",
      name: "Panel Wake Sequence",
      description: "Wake touch panel, refresh room state, and restore navigation to home dashboard.",
      status: "Draft",
      notes: "Front-end placeholder for panel recovery behavior.",
    },
    {
      id: "MAC-015",
      name: "Panel Sleep Sequence",
      description: "Dim panel UI, stop preview polling, and move interface to idle lock screen.",
      status: "Active",
      notes: "Triggered after inactivity timeout.",
    },
    {
      id: "MAC-016",
      name: "Emergency Announce Prep",
      description: "Lower program audio, route paging source, and prepare displays for emergency overlay.",
      status: "Disabled",
      notes: "Will depend on external life-safety integration.",
    },
    {
      id: "MAC-017",
      name: "Recording Start Setup",
      description: "Enable recorder input profile, route program bus, and set confidence monitor preview.",
      status: "Active",
      notes: "For capture-enabled classrooms.",
    },
    {
      id: "MAC-018",
      name: "Recording Stop Cleanup",
      description: "Stop recording workflow, clear preview bus, and restore standard monitoring layout.",
      status: "Active",
      notes: "Pairs with recording start macro.",
    },
    {
      id: "MAC-019",
      name: "After Hours Lockdown",
      description: "Disable user controls, power down nonessential devices, and force room standby scene.",
      status: "Draft",
      notes: "Scheduled automation candidate.",
    },
    {
      id: "MAC-020",
      name: "Maintenance Bypass",
      description: "Bypass room automation dependencies and expose direct operator controls for service use.",
      status: "Disabled",
      notes: "Restricted engineering-only mode.",
    },
  ],
  drivers: [
    {
      id: "DRV-001",
      name: "Panasonic Projector LAN",
      vendor: "Panasonic",
      model: "Projector",
      deviceType: "Projector",
      protocol: "TCP/IP",
      version: "v1.2.0",
      responseFormat: "ASCII / Plain Text",
      commands: ["Power ON", "Power OFF", "Input HDMI1", "Input HDMI2", "Power Status Query"],
      notes: [
        "Requires CR at the end of each command",
        "Status query response uses plain text format",
        "Device must be reachable on local network",
      ],
    },
    {
      id: "DRV-002",
      name: "Panasonic Projector2 LAN",
      vendor: "Panasonic",
      model: "Projector2",
      deviceType: "Projector",
      protocol: "TCP/IP",
      version: "v1.1.4",
      responseFormat: "ASCII / Plain Text",
      commands: ["Power ON", "Power OFF", "Input HDMI1", "Input VGA", "Lamp Hour Query"],
      notes: ["Supports LAN monitoring only", "Recommended for enterprise projector fleets"],
    },
    {
      id: "DRV-003",
      name: "Panasonic Projector3 LAN",
      vendor: "Panasonic",
      model: "Projector3",
      deviceType: "Projector",
      protocol: "TCP/IP",
      version: "v1.0.8",
      responseFormat: "ASCII / Plain Text",
      commands: ["Power ON", "Power OFF", "Input HDMI1", "Input HDMI2", "Shutter Query"],
      notes: ["Command timing should allow 300 ms between requests", "Use local subnet reachability checks before polling"],
    },
    {
      id: "DRV-004",
      name: "Panasonic Commercial LAN",
      vendor: "Panasonic",
      model: "Commercial",
      deviceType: "Display",
      protocol: "TCP/IP",
      version: "v2.0.1",
      responseFormat: "ASCII / Plain Text",
      commands: ["Power ON", "Power OFF", "Input HDMI1", "Input HDMI2", "Volume Query"],
      notes: ["Supports commercial display command set over LAN", "Use IP reservation for permanent installations"],
    },
    {
      id: "DRV-005",
      name: "Epson Projector RS-232",
      vendor: "Epson",
      model: "Projector",
      deviceType: "Projector",
      protocol: "RS-232",
      version: "v1.3.2",
      responseFormat: "ASCII / Plain Text",
      commands: ["Power ON", "Power OFF", "Source HDMI", "Source VGA", "Power Status Query"],
      notes: ["Serial settings must match projector manual", "Requires CR/LF termination"],
    },
    {
      id: "DRV-006",
      name: "Sony Commercial Display",
      vendor: "Sony",
      model: "Commercial Display",
      deviceType: "Display",
      protocol: "HTTP",
      version: "v2.3.0",
      responseFormat: "JSON",
      commands: ["Power ON", "Power OFF", "Input HDMI1", "Input HDMI2", "Display Status Query"],
      notes: ["HTTP API must be enabled on the panel", "Recommended for network-managed signage deployments"],
    },
    {
      id: "DRV-007",
      name: "LG Commercial Display",
      vendor: "LG",
      model: "Commercial Display",
      deviceType: "Display",
      protocol: "Telnet",
      version: "v1.9.6",
      responseFormat: "Hex",
      commands: ["Power ON", "Power OFF", "Input HDMI1", "Input HDMI2", "Mute Query"],
      notes: ["Telnet service must be enabled on the device", "Hex response parser required for feedback handling"],
    },
    {
      id: "DRV-008",
      name: "Yamaha Amp",
      vendor: "Yamaha",
      model: "Amp",
      deviceType: "Audio",
      protocol: "TCP/IP",
      version: "v3.0.4",
      responseFormat: "JSON",
      commands: ["Power ON", "Power OFF", "Mute ON", "Mute OFF", "Volume Status Query"],
      notes: ["Best used on dedicated audio VLAN", "JSON response includes channel-level status"],
    },
  ],
  driverLibrary: {
    search: "",
    type: "All Types",
    protocol: "All Protocols",
    vendor: "All Vendors",
    selectedVendor: "",
    selectedDriverId: "",
  },
  devices: [
    {
      id: "DEV-001",
      name: "Meeting Room Projector",
      driverId: "DRV-001",
      driverName: "Panasonic Projector LAN",
      manual: false,
      deviceType: "Projector",
      description: "Primary projection endpoint for Meeting Room A.",
      protocol: "TCP/IP",
      connection: {
        ipAddress: "192.168.1.100",
        port: "1024",
      },
    },
    {
      id: "DEV-002",
      name: "Lobby Display",
      driverId: "DRV-006",
      driverName: "Sony Commercial Display",
      manual: false,
      deviceType: "Display",
      description: "Lobby signage display connected through enterprise network.",
      protocol: "HTTP",
      connection: {
        baseUrl: "http://192.168.1.120/api",
        authToken: "",
      },
    },
    {
      id: "DEV-003",
      name: "Room Amplifier",
      driverId: "DRV-008",
      driverName: "Yamaha Amp",
      manual: false,
      deviceType: "Audio",
      description: "Power amplifier serving Room B ceiling speakers.",
      protocol: "TCP/IP",
      connection: {
        ipAddress: "192.168.1.140",
        port: "80",
      },
    },
    {
      id: "DEV-004",
      name: "Sensor A",
      driverId: "",
      driverName: "",
      manual: true,
      deviceType: "Sensor",
      description: "Occupancy sensor integrated manually for trigger logic.",
      protocol: "HTTP",
      connection: {
        baseUrl: "http://192.168.1.210/status",
        authToken: "",
      },
    },
    {
      id: "DEV-005",
      name: "Lighting Controller",
      driverId: "",
      driverName: "",
      manual: true,
      deviceType: "Lighting",
      description: "Legacy serial lighting gateway with manual command mapping.",
      protocol: "RS-232",
      connection: {
        baudRate: "9600",
        dataBit: "8",
        parity: "None",
        stopBit: "1",
      },
    },
  ],
  deviceIntegration: {
    view: "list",
    search: "",
    type: "All Types",
    mode: "",
    editingDeviceId: "",
    pendingDeleteDeviceId: "",
    detailConnectionEdit: false,
    draft: null,
  },
  display: {
    timeMode: "auto",
    timeFormat: "12",
    manualTime: "15:30",
    date: "2026-03-30",
    themeMode: "light",
    brightness: 78,
    screenLock: true,
    idleMinutes: 10,
    screenSaverContent: "Clock",
    customImage: "",
    language: "English",
  },
  admin: {
    passwordConfigured: false,
    accessRole: "Admin",
    importedConfigName: "",
    firmwareMode: "ota",
    firmwareFileName: "",
    pendingAction: "",
  },
  developerTools: {
    activeView: "discovery",
    isScanning: false,
    hasScanned: false,
    results: [],
    selectedDiscoveryId: "",
    consoleInitialized: false,
    consoleLines: [],
  },
  eventTrigger: {
    view: "list",
    editingId: "",
    pendingTestId: "",
    draft: null,
    logs: [],
  },
};

const discoveryMockDevices = [
  {
    id: "DISC-001",
    modelName: "Panasonic PT-RZ990",
    description: "4K laser projector for the main meeting room display wall.",
    ip: "192.168.10.101",
    mac: "00:1A:79:4B:10:21",
    type: "Projector",
    vendor: "Panasonic",
    protocol: "TCP/IP",
    firmware: "v3.2.1",
    location: "Meeting Room A",
    serialNumber: "PT-RZ990-A1024",
    notes: "Primary presentation projector with network standby enabled.",
  },
  {
    id: "DISC-002",
    modelName: "Sony FW-85BZ40L",
    description: "Commercial signage display used for lobby welcome content.",
    ip: "192.168.10.102",
    mac: "00:25:9C:1F:44:08",
    type: "Display",
    vendor: "Sony",
    protocol: "HTTP",
    firmware: "v1.8.5",
    location: "Lobby",
    serialNumber: "FW85BZ40L-3308",
    notes: "HTTP control API available on the enterprise AV VLAN.",
  },
  {
    id: "DISC-003",
    modelName: "QSC Core 110f",
    description: "Audio DSP handling room mixing, mute groups, and routing.",
    ip: "192.168.10.103",
    mac: "38:EA:A7:90:12:55",
    type: "Audio DSP",
    vendor: "QSC",
    protocol: "Telnet",
    firmware: "v9.8.0",
    location: "AV Rack 01",
    serialNumber: "CORE110F-99014",
    notes: "Telnet control enabled; named controls mapped for room presets.",
  },
  {
    id: "DISC-004",
    modelName: "Extron DTP CrossPoint 108 4K",
    description: "Matrix switcher for presentation routing and source switching.",
    ip: "192.168.10.104",
    mac: "00:05:A6:7D:61:92",
    type: "Matrix Switcher",
    vendor: "Extron",
    protocol: "RS-232 / TCP",
    firmware: "v2.14",
    location: "AV Rack 01",
    serialNumber: "DTPX1084K-1287",
    notes: "Detected through LAN management interface with mirrored serial control.",
  },
  {
    id: "DISC-005",
    modelName: "Lumens VC-A71P",
    description: "PTZ camera for presenter tracking and video conference presets.",
    ip: "192.168.10.105",
    mac: "84:18:3A:72:19:C0",
    type: "PTZ Camera",
    vendor: "Lumens",
    protocol: "Telnet",
    firmware: "v5.0.3",
    location: "Meeting Room A",
    serialNumber: "VCA71P-22051",
    notes: "Camera responds to preset recall and VISCA-over-IP commands.",
  },
  {
    id: "DISC-006",
    modelName: "Lutron QSX Processor",
    description: "Lighting processor controlling dimming and scene recall.",
    ip: "192.168.10.106",
    mac: "B8:27:EB:90:33:6A",
    type: "Lighting Controller",
    vendor: "Lutron",
    protocol: "Telnet",
    firmware: "v22.4",
    location: "Electrical Closet",
    serialNumber: "QSX-44783",
    notes: "Room lighting scenes are available through integration session login.",
  },
  {
    id: "DISC-007",
    modelName: "Biamp TesiraFORTE X 400",
    description: "Conference audio processor for AEC, USB bridge, and gain control.",
    ip: "192.168.10.107",
    mac: "44:D9:E7:53:80:10",
    type: "Conference DSP",
    vendor: "Biamp",
    protocol: "TCP/IP",
    firmware: "v4.3.2",
    location: "Conference Room B",
    serialNumber: "TFX400-88710",
    notes: "Supports command subscription for feedback monitoring.",
  },
  {
    id: "DISC-008",
    modelName: "Shure MXA920",
    description: "Ceiling array microphone discovered on Dante control network.",
    ip: "192.168.10.108",
    mac: "24:A4:3C:61:92:71",
    type: "Microphone Array",
    vendor: "Shure",
    protocol: "HTTP / Socket",
    firmware: "v6.1.0",
    location: "Conference Room B",
    serialNumber: "MXA920-11731",
    notes: "Beam preset and mute telemetry endpoints are available.",
  },
  {
    id: "DISC-009",
    modelName: "Samsung QB75C",
    description: "Breakout-area display for room booking and status signage.",
    ip: "192.168.10.109",
    mac: "9C:2E:7A:11:40:2B",
    type: "Display",
    vendor: "Samsung",
    protocol: "HTTP",
    firmware: "v1010.4",
    location: "Breakout Zone",
    serialNumber: "QB75C-55220",
    notes: "MagicINFO service reachable and web control responds successfully.",
  },
  {
    id: "DISC-010",
    modelName: "Yealink RoomPanel Plus",
    description: "Scheduling panel mounted outside the executive boardroom.",
    ip: "192.168.10.110",
    mac: "10:62:E5:7B:90:5D",
    type: "Scheduling Panel",
    vendor: "Yealink",
    protocol: "HTTP",
    firmware: "v1.4.9",
    location: "Executive Boardroom",
    serialNumber: "RPPLUS-77142",
    notes: "Panel is online and advertising booking status via REST API.",
  },
];

const debugConsoleHelpCommands = [
  "projector.power on",
  "projector.power off",
  "display.input hdmi1",
  "display.input hdmi2",
  "audio.volume up",
  "audio.volume down",
  "audio.mute on",
  "audio.mute off",
  "camera.preset 1",
  "system.status",
];

const eventTriggerMockRecords = [
  {
    id: "TRG-001",
    name: "Occupancy Meeting Start",
    description: "When occupancy sensor reports room occupied, run meeting startup macro.",
    sourceCategory: "External",
    interfaceType: "HTTP",
    matchMode: "keyword",
    pattern: "occupancy=occupied",
    actionType: "Macro",
    boundId: "MAC-001",
    status: "Enabled",
    cooldown: "30",
    retryCount: "1",
    allowDuplicate: false,
    logEnabled: true,
    samplePayload: "sensor=ceiling_pir;room=meeting_a;occupancy=occupied;confidence=0.98",
    lastTriggeredAt: "2026-04-07 09:10",
  },
  {
    id: "TRG-002",
    name: "HTTP HDMI 1 Switch",
    description: "Accept source switch request from third-party controller and route display to HDMI 1.",
    sourceCategory: "External",
    interfaceType: "HTTP",
    matchMode: "exact",
    pattern: "switch_to_hdmi1",
    actionType: "Command",
    boundId: "CMD-005",
    status: "Enabled",
    cooldown: "5",
    retryCount: "0",
    allowDuplicate: true,
    logEnabled: true,
    samplePayload: "switch_to_hdmi1",
    lastTriggeredAt: "2026-04-07 08:42",
  },
  {
    id: "TRG-003",
    name: "Projector Warmup Complete",
    description: "After projector reports warmup completion, continue source and screen sequence.",
    sourceCategory: "External",
    interfaceType: "Telnet",
    matchMode: "keyword",
    pattern: "warmup complete",
    actionType: "Macro",
    boundId: "MAC-003",
    status: "Enabled",
    cooldown: "20",
    retryCount: "1",
    allowDuplicate: false,
    logEnabled: true,
    samplePayload: "PJ1 status: warmup complete",
    lastTriggeredAt: "2026-04-06 17:28",
  },
  {
    id: "TRG-004",
    name: "Schedule End Shutdown",
    description: "Run full shutdown flow when internal schedule end event is emitted.",
    sourceCategory: "Internal",
    interfaceType: "Schedule Event",
    matchMode: "prefix",
    pattern: "schedule.end",
    actionType: "Macro",
    boundId: "MAC-002",
    status: "Enabled",
    cooldown: "60",
    retryCount: "0",
    allowDuplicate: false,
    logEnabled: true,
    samplePayload: "schedule.end:meeting_room_a:18:00",
    lastTriggeredAt: "2026-04-06 18:00",
  },
  {
    id: "TRG-005",
    name: "Access Granted Wake Panel",
    description: "Wake the room devices and recall default scene after badge access granted.",
    sourceCategory: "External",
    interfaceType: "TCP",
    matchMode: "parameter",
    pattern: "event=access_granted",
    actionType: "Command",
    boundId: "CMD-020",
    status: "Disabled",
    cooldown: "15",
    retryCount: "1",
    allowDuplicate: false,
    logEnabled: true,
    samplePayload: "controller=door_01;event=access_granted;room=executive_boardroom",
    lastTriggeredAt: "2026-04-05 07:54",
  },
];

const eventTriggerMockLogs = [
  {
    id: "EVTLOG-001",
    triggerId: "TRG-001",
    triggerName: "Occupancy Meeting Start",
    source: "HTTP / External",
    payload: "sensor=ceiling_pir;room=meeting_a;occupancy=occupied;confidence=0.98",
    actionLabel: "Macro · Meeting Start",
    result: "Matched and executed successfully",
    timestamp: "2026-04-07 09:10",
  },
  {
    id: "EVTLOG-002",
    triggerId: "TRG-002",
    triggerName: "HTTP HDMI 1 Switch",
    source: "HTTP / External",
    payload: "switch_to_hdmi1",
    actionLabel: "Command · Display HDMI 1",
    result: "Matched and executed successfully",
    timestamp: "2026-04-07 08:42",
  },
  {
    id: "EVTLOG-003",
    triggerId: "TRG-003",
    triggerName: "Projector Warmup Complete",
    source: "Telnet / External",
    payload: "PJ1 status: warmup complete",
    actionLabel: "Macro · Projector Warmup Flow",
    result: "Matched and executed successfully",
    timestamp: "2026-04-06 17:28",
  },
];

state.eventTriggers = eventTriggerMockRecords.map((trigger) => ({ ...trigger }));
state.eventTrigger.logs = eventTriggerMockLogs.map((log) => ({ ...log }));

const macroVariableMocks = [
  { name: "param_1", value: "2" },
  { name: "projector_status", value: "0" },
];

const macroPollingMocks = [
  "Projector Warmup Check",
  "Display Input Monitor",
  "Sensor Occupancy Polling",
];

function getNextStepId() {
  state.stepIdCounter += 1;
  return `step-${state.stepIdCounter}`;
}

function createMacroStep(type, overrides = {}) {
  const baseStep = {
    id: getNextStepId(),
    type,
  };

  if (type === "command") {
    return {
      ...baseStep,
      commandId: "",
      ...overrides,
    };
  }

  if (type === "delay") {
    return {
      ...baseStep,
      duration: 30,
      unit: "sec",
      ...overrides,
    };
  }

  if (type === "ifElse") {
    return {
      ...baseStep,
      variable: commandParameterOptions[0],
      valueType: "number",
      operator: "==",
      compareValue: "1",
      thenSteps: overrides.thenSteps || [],
      elseSteps: overrides.elseSteps || [],
      ...overrides,
    };
  }

  if (type === "polling") {
    return {
      ...baseStep,
      pollingRule: "",
      waitForResult: true,
      successOutput: "projector_status = 1",
      onMatch: "Continue",
      onTimeout: "Run Macro: Error Handling",
      ...overrides,
    };
  }

  if (type === "variable") {
    return {
      ...baseStep,
      variableName: commandParameterOptions[0],
      valueType: "text",
      value: "",
      ...overrides,
    };
  }

  if (type === "runMacro") {
    return {
      ...baseStep,
      targetMacro: "",
      ...overrides,
    };
  }

  return {
    ...baseStep,
    ...overrides,
  };
}

function cloneMacroStepWithIds(step) {
  const cloned = {
    ...step,
    id: getNextStepId(),
  };

  if (Array.isArray(step.thenSteps)) {
    cloned.thenSteps = step.thenSteps.map((childStep) => cloneMacroStepWithIds(childStep));
  }

  if (Array.isArray(step.elseSteps)) {
    cloned.elseSteps = step.elseSteps.map((childStep) => cloneMacroStepWithIds(childStep));
  }

  return cloned;
}

function buildMacroMockFlow(macroId) {
  if (macroId === "MAC-001") {
    return [
      createMacroStep("command", { commandId: "CMD-001" }),
      createMacroStep("polling", {
        pollingRule: "Projector Warmup Check",
        successOutput: "projector_status = 1",
      }),
      createMacroStep("ifElse", {
        variable: "Param_1",
        valueType: "number",
        operator: "==",
        compareValue: "1",
        thenSteps: [
          createMacroStep("command", { commandId: "CMD-005" }),
          createMacroStep("command", { commandId: "CMD-001" }),
        ],
        elseSteps: [
          createMacroStep("delay", { duration: 30, unit: "sec" }),
          createMacroStep("runMacro", { targetMacro: "System Shutdown" }),
        ],
      }),
      createMacroStep("variable", {
        variableName: "Param_1",
        valueType: "text",
        value: "meeting",
      }),
    ];
  }

  if (macroId === "MAC-002") {
    return [
      createMacroStep("command", { commandId: "CMD-009" }),
      createMacroStep("delay", { duration: 8, unit: "sec" }),
      createMacroStep("command", { commandId: "CMD-004" }),
    ];
  }

  if (macroId === "MAC-003") {
    return [
      createMacroStep("command", { commandId: "CMD-001" }),
      createMacroStep("polling", { pollingRule: "Projector Warmup Check" }),
    ];
  }

  return [];
}

function buildMacroRecord(macro) {
  return {
    ...macro,
    flow: Array.isArray(macro.flow) ? macro.flow : buildMacroMockFlow(macro.id),
  };
}

state.macros = state.macros.map((macro) => buildMacroRecord(macro));

function showToast(message) {
  window.clearTimeout(state.toastTimer);
  statusToast.textContent = message;
  statusToast.classList.add("is-visible");

  state.toastTimer = window.setTimeout(() => {
    statusToast.classList.remove("is-visible");
  }, 2400);
}

function openModal(modal) {
  modal.classList.remove("is-hidden");
  modal.setAttribute("aria-hidden", "false");
}

function closeModal(modal) {
  modal.classList.add("is-hidden");
  modal.setAttribute("aria-hidden", "true");
}

function closeUserMenu() {
  userDropdown.classList.add("is-hidden");
  userMenuTrigger.setAttribute("aria-expanded", "false");
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function getCommandPageCount() {
  return Math.max(1, Math.ceil(state.commands.length / 15));
}

function normalizeCommandPage() {
  state.commandPage = Math.max(1, Math.min(state.commandPage, getCommandPageCount()));
}

function generateCommandId() {
  const nextNumber =
    state.commands.reduce((maxValue, command) => {
      const matched = String(command.id || "").match(/(\d+)$/);
      const numericId = matched ? Number(matched[1]) : 0;
      return Math.max(maxValue, numericId);
    }, 0) + 1;

  return `CMD-${String(nextNumber).padStart(3, "0")}`;
}

function populateCommandParameterOptions() {
  if (!commandStateUpdateParameter) {
    return;
  }

  commandStateUpdateParameter.innerHTML = commandParameterOptions
    .map((parameter) => `<option value="${parameter}">${parameter}</option>`)
    .join("");
}

function getSelectedCommandStateUpdateType() {
  const checkedInput = document.querySelector('input[name="commandStateUpdateValueType"]:checked');
  return checkedInput ? checkedInput.value : "number";
}

function setSelectedCommandStateUpdateType(valueType) {
  const targetInput = document.querySelector(`input[name="commandStateUpdateValueType"][value="${valueType}"]`);

  if (targetInput) {
    targetInput.checked = true;
  }
}

function getCommandStateUpdateValueByType(valueType) {
  if (valueType === "number") {
    return commandStateUpdateValueNumber?.value.trim() || "";
  }

  if (valueType === "boolean") {
    return commandStateUpdateValueBoolean?.value === "true";
  }

  return commandStateUpdateValueText?.value || "";
}

function getCommandStateUpdatePreviewText(stateUpdate) {
  if (!stateUpdate?.enabled) {
    return "No parameter update configured.";
  }

  const formattedValue =
    stateUpdate.valueType === "string"
      ? `"${String(stateUpdate.value)}"`
      : String(stateUpdate.value);

  return `${stateUpdate.parameter} (${stateUpdate.valueType})\n= ${formattedValue}`;
}

function updateCommandStateValueField() {
  const valueType = getSelectedCommandStateUpdateType();
  const isEnabled = Boolean(commandStateUpdateEnabled?.checked);

  commandStateUpdateValueTextField?.classList.toggle("is-hidden", valueType !== "string");
  commandStateUpdateValueNumberField?.classList.toggle("is-hidden", valueType !== "number");
  commandStateUpdateValueBooleanField?.classList.toggle("is-hidden", valueType !== "boolean");

  if (commandStateUpdateValueText) {
    commandStateUpdateValueText.disabled = !isEnabled || valueType !== "string";
  }

  if (commandStateUpdateValueNumber) {
    commandStateUpdateValueNumber.disabled = !isEnabled || valueType !== "number";
  }

  if (commandStateUpdateValueBoolean) {
    commandStateUpdateValueBoolean.disabled = !isEnabled || valueType !== "boolean";
  }
}

function readCommandStateUpdateFromForm() {
  const enabled = Boolean(commandStateUpdateEnabled?.checked);

  if (!enabled) {
    return null;
  }

  const valueType = getSelectedCommandStateUpdateType();

  return {
    enabled: true,
    parameter: commandStateUpdateParameter?.value || commandParameterOptions[0],
    valueType,
    value: getCommandStateUpdateValueByType(valueType),
  };
}

function updateCommandStateUpdatePreview() {
  if (!commandStateUpdatePreview) {
    return;
  }

  const previewValue = commandStateUpdatePreview.querySelector(".command-preview-card__value");

  if (!previewValue) {
    return;
  }

  previewValue.textContent = getCommandStateUpdatePreviewText(readCommandStateUpdateFromForm());
}

function syncCommandStateUpdatePanel() {
  const isEnabled = Boolean(commandStateUpdateEnabled?.checked);

  commandStateUpdatePanel?.classList.toggle("is-disabled", !isEnabled);

  if (commandStateUpdateParameter) {
    commandStateUpdateParameter.disabled = !isEnabled;
  }

  document.querySelectorAll('input[name="commandStateUpdateValueType"]').forEach((input) => {
    input.disabled = !isEnabled;
  });

  updateCommandStateValueField();
  updateCommandStateUpdatePreview();
}

function resetCommandEditorStateUpdateFields() {
  if (commandStateUpdateEnabled) {
    commandStateUpdateEnabled.checked = false;
  }

  if (commandStateUpdateParameter) {
    commandStateUpdateParameter.value = commandParameterOptions[0];
  }

  setSelectedCommandStateUpdateType("number");

  if (commandStateUpdateValueText) {
    commandStateUpdateValueText.value = "";
  }

  if (commandStateUpdateValueNumber) {
    commandStateUpdateValueNumber.value = "";
  }

  if (commandStateUpdateValueBoolean) {
    commandStateUpdateValueBoolean.value = "true";
  }

  syncCommandStateUpdatePanel();
}

function applyCommandStateUpdateToForm(stateUpdate) {
  resetCommandEditorStateUpdateFields();

  if (!stateUpdate?.enabled) {
    return;
  }

  if (commandStateUpdateEnabled) {
    commandStateUpdateEnabled.checked = true;
  }

  if (commandStateUpdateParameter) {
    commandStateUpdateParameter.value = stateUpdate.parameter || commandParameterOptions[0];
  }

  setSelectedCommandStateUpdateType(stateUpdate.valueType || "number");

  if (stateUpdate.valueType === "number" && commandStateUpdateValueNumber) {
    commandStateUpdateValueNumber.value = stateUpdate.value ?? "";
  } else if (stateUpdate.valueType === "boolean" && commandStateUpdateValueBoolean) {
    commandStateUpdateValueBoolean.value = String(stateUpdate.value === true);
  } else if (commandStateUpdateValueText) {
    commandStateUpdateValueText.value = stateUpdate.value ?? "";
  }

  syncCommandStateUpdatePanel();
}

function validateCommandStateUpdate(stateUpdate) {
  if (!stateUpdate?.enabled) {
    return { isValid: true, stateUpdate: null };
  }

  if (!stateUpdate.parameter) {
    return { isValid: false, message: "Please select a parameter to update." };
  }

  if (stateUpdate.valueType === "number") {
    if (stateUpdate.value === "" || Number.isNaN(Number(stateUpdate.value))) {
      return { isValid: false, message: "Please enter a valid number for state update." };
    }

    stateUpdate.value = Number(stateUpdate.value);
  } else if (stateUpdate.valueType === "string") {
    if (String(stateUpdate.value).trim() === "") {
      return { isValid: false, message: "Please enter a string value for state update." };
    }
  } else if (stateUpdate.valueType === "boolean") {
    stateUpdate.value = Boolean(stateUpdate.value);
  }

  return { isValid: true, stateUpdate };
}

function generateMacroId() {
  const nextNumber =
    state.macros.reduce((maxValue, macro) => {
      const matched = String(macro.id || "").match(/(\d+)$/);
      const numericId = matched ? Number(matched[1]) : 0;
      return Math.max(maxValue, numericId);
    }, 0) + 1;

  return `MAC-${String(nextNumber).padStart(3, "0")}`;
}

function syncCommandEditorInterfaceFields() {
  const isTelnet = commandInterfaceSelect?.value === "Telnet";

  commandTelnetIpField?.classList.toggle("is-hidden", !isTelnet);
  commandTelnetPortField?.classList.toggle("is-hidden", !isTelnet);
}

function getFilteredMacros() {
  const keyword = state.macroSearch.trim().toLowerCase();

  if (!keyword) {
    return state.macros;
  }

  return state.macros.filter((macro) =>
    [macro.id, macro.name, macro.description].some((value) =>
      String(value).toLowerCase().includes(keyword)
    )
  );
}

function getMacroPageCount(filteredMacros = getFilteredMacros()) {
  return Math.max(1, Math.ceil(filteredMacros.length / 15));
}

function normalizeMacroPage(filteredMacros = getFilteredMacros()) {
  state.macroPage = Math.max(1, Math.min(state.macroPage, getMacroPageCount(filteredMacros)));
}

function getStepTypeLabel(type) {
  const labels = {
    command: "Execute Command",
    delay: "Delay",
    ifElse: "IF / ELSE",
    polling: "Start Polling",
    variable: "Update Variable",
    runMacro: "Run Macro",
  };

  return labels[type] || "Step";
}

function getStepThemeClass(type) {
  const themeMap = {
    command: "is-command",
    delay: "is-delay",
    ifElse: "is-ifelse",
    polling: "is-polling",
    variable: "is-variable",
    runMacro: "is-runmacro",
  };

  return themeMap[type] || "is-default";
}

function getCommandLabel(commandId) {
  const command = state.commands.find((item) => item.id === commandId);
  return command ? `${command.id} - ${command.name}` : "No command selected";
}

function getStepSummary(step) {
  if (step.type === "command") {
    return getCommandLabel(step.commandId);
  }

  if (step.type === "delay") {
    return `${step.duration || 0} ${step.unit || "sec"}`;
  }

  if (step.type === "ifElse") {
    return `${step.variable || "variable"} ${step.operator || "=="} ${step.compareValue || "value"}`;
  }

  if (step.type === "polling") {
    return step.pollingRule || "No polling rule selected";
  }

  if (step.type === "variable") {
    return `${step.variableName || "variable"} = ${step.value || "(empty)"}`;
  }

  if (step.type === "runMacro") {
    return step.targetMacro || "No target macro selected";
  }

  return "Unconfigured step";
}

function getMacroInspectorPreviewText(step) {
  if (!step) {
    return "";
  }

  if (step.type === "ifElse") {
    return `Preview: IF ${step.variable || "Param_1"} ${step.operator || "=="} ${step.compareValue || ""}`.trim();
  }

  if (step.type === "variable") {
    return `Preview: ${step.variableName || "Param_1"} = ${step.value || "(empty)"}`;
  }

  return `Preview: ${getStepSummary(step)}`;
}

function updateSelectedMacroStepDisplay(step) {
  if (!step || !state.selectedMacroStepPath) {
    return;
  }

  const selectedCard = macroFlowCanvas?.querySelector(`[data-step-path="${state.selectedMacroStepPath}"]`);

  if (selectedCard) {
    const summaryElement = selectedCard.querySelector(".macro-step-card__summary");
    const warningElement = selectedCard.querySelector(".macro-step-warning");
    const nextSummary = getStepSummary(step);
    const nextWarning = getStepWarning(step);

    if (summaryElement) {
      summaryElement.textContent = nextSummary;
    }

    selectedCard.classList.toggle("is-invalid", Boolean(nextWarning));

    if (warningElement) {
      warningElement.textContent = nextWarning;
      warningElement.classList.toggle("is-hidden", !nextWarning);
    } else if (nextWarning) {
      const body = selectedCard.querySelector(".macro-step-card__body");

      if (body) {
        body.insertAdjacentHTML("beforeend", `<div class="macro-step-warning">${escapeHtml(nextWarning)}</div>`);
      }
    }
  }

  const previewElement = macroInspectorPanel?.querySelector(".macro-inspector-preview");

  if (previewElement) {
    previewElement.textContent = getMacroInspectorPreviewText(step);
  }
}

function getStepWarning(step) {
  if (step.type === "command" && !step.commandId) {
    return "No command selected";
  }

  if (step.type === "delay" && (!step.duration || Number(step.duration) <= 0)) {
    return "Incomplete configuration";
  }

  if (step.type === "polling" && !step.pollingRule) {
    return "No polling rule selected";
  }

  if (step.type === "variable" && !step.value) {
    return "Incomplete configuration";
  }

  if (step.type === "runMacro" && !step.targetMacro) {
    return "No target macro selected";
  }

  return "";
}

function getMacroDraftSteps() {
  return state.macroDraft?.flow || [];
}

function serializeStepPath(pathSegments) {
  return pathSegments.join(".");
}

function getStepDisplayIndex(pathSegments) {
  return pathSegments.filter((segment) => typeof segment === "number").map((segment) => segment + 1).join(".");
}

function parseStepPath(pathValue) {
  if (!pathValue) {
    return [];
  }

  return pathValue.split(".").map((segment) => (/^\d+$/.test(segment) ? Number(segment) : segment));
}

function getStepByPath(pathSegments) {
  let steps = getMacroDraftSteps();
  let currentStep = null;

  for (let index = 0; index < pathSegments.length; index += 1) {
    const segment = pathSegments[index];

    if (typeof segment === "number") {
      currentStep = steps?.[segment];
      if (!currentStep) {
        return null;
      }

      if (index === pathSegments.length - 1) {
        return currentStep;
      }
    } else if (segment === "then" || segment === "else") {
      steps = currentStep?.[`${segment}Steps`] || [];
    }
  }

  return currentStep;
}

function getContainerFromPath(pathSegments) {
  if (!pathSegments.length) {
    return { steps: getMacroDraftSteps(), index: -1 };
  }

  const index = pathSegments[pathSegments.length - 1];
  const parentPath = pathSegments.slice(0, -1);

  if (!parentPath.length) {
    return { steps: getMacroDraftSteps(), index };
  }

  const parentBranch = parentPath[parentPath.length - 1];
  const ownerPath = parentPath.slice(0, -1);
  const ownerStep = getStepByPath(ownerPath);

  if (!ownerStep || (parentBranch !== "then" && parentBranch !== "else")) {
    return { steps: getMacroDraftSteps(), index };
  }

  return {
    steps: ownerStep[`${parentBranch}Steps`],
    index,
  };
}

function getStepListByContainerPath(containerSegments = []) {
  if (!containerSegments.length) {
    return getMacroDraftSteps();
  }

  const branchName = containerSegments[containerSegments.length - 1];
  const ownerPath = containerSegments.slice(0, -1);
  const ownerStep = getStepByPath(ownerPath);

  if (!ownerStep || (branchName !== "then" && branchName !== "else")) {
    return getMacroDraftSteps();
  }

  return ownerStep[`${branchName}Steps`];
}

function setSelectedStep(pathValue = "") {
  state.selectedMacroStepPath = pathValue;
  renderMacroEditor();
}

function ensureSelectedStep() {
  if (!state.selectedMacroStepPath) {
    return;
  }

  if (!getStepByPath(parseStepPath(state.selectedMacroStepPath))) {
    state.selectedMacroStepPath = "";
  }
}

function createInsertableMacroStep(type) {
  return type === "ifElse"
    ? createMacroStep("ifElse", {
        thenSteps: [createMacroStep("command")],
        elseSteps: [createMacroStep("delay", { duration: 30, unit: "sec" })],
      })
    : createMacroStep(type);
}

function clearMacroDragIndicators() {
  state.dragMacroInsertTarget = null;
  macroFlowCanvas?.querySelectorAll(".is-drop-before, .is-drop-after, .is-drag-over").forEach((element) => {
    element.classList.remove("is-drop-before", "is-drop-after", "is-drag-over");
  });
  macroFlowCanvas?.querySelectorAll("[data-macro-add-step-hint]").forEach((element) => {
    element.classList.remove("is-drop");
    element.textContent = element.getAttribute("data-macro-default-hint") || "Ready for more logic, delays, or nested control branches.";
  });
}

function openMacroInsertActionModal(containerPath = [], insertIndex = null) {
  state.pendingMacroInsertTarget = {
    containerPath,
    insertIndex,
  };
  openModal(macroInsertActionModal);
}

function closeMacroInsertActionModal() {
  state.pendingMacroInsertTarget = null;
  closeModal(macroInsertActionModal);
}

function insertMacroStep(type, containerPath = [], insertIndex = null) {
  const targetSteps = getStepListByContainerPath(containerPath);
  insertMacroStepAt(type, containerPath, insertIndex === null ? targetSteps.length : insertIndex);
}

function insertMacroStepAt(type, containerPath = [], insertIndex = null) {
  if (!state.macroDraft) {
    return;
  }

  state.lastMacroInsertType = type;
  const targetSteps = getStepListByContainerPath(containerPath);
  const nextIndex = insertIndex === null ? targetSteps.length : Math.max(0, Math.min(insertIndex, targetSteps.length));
  const newStep = createInsertableMacroStep(type);

  targetSteps.splice(nextIndex, 0, newStep);
  state.selectedMacroStepPath = serializeStepPath([...containerPath, nextIndex]);
  renderMacroEditor();
}

function getMacroAddStepBar(containerPath = [], hint = "Ready for more logic, delays, or nested control branches.", buttonLabel = "+ Add Step") {
  const pathValue = serializeStepPath(containerPath);

  return `
    <div class="macro-add-step-bar" data-macro-add-step-container="${pathValue}">
      <div class="macro-add-step-bar__copy">
        <span class="macro-add-step-bar__hint" data-macro-add-step-hint="true" data-macro-default-hint="${escapeHtml(hint)}">${escapeHtml(hint)}</span>
      </div>
      <button class="modal-btn modal-btn--ghost" type="button" data-macro-add-step="true" data-container-path="${pathValue}">
        ${buttonLabel}
      </button>
    </div>
  `;
}

function duplicateMacroStep(pathValue) {
  const pathSegments = parseStepPath(pathValue);
  const { steps, index } = getContainerFromPath(pathSegments);
  const step = steps?.[index];

  if (!step) {
    return;
  }

  steps.splice(index + 1, 0, cloneMacroStepWithIds(step));
  state.selectedMacroStepPath = serializeStepPath([...pathSegments.slice(0, -1), index + 1]);
  renderMacroEditor();
}

function deleteMacroStep(pathValue) {
  const pathSegments = parseStepPath(pathValue);
  const { steps, index } = getContainerFromPath(pathSegments);

  if (!steps?.[index]) {
    return;
  }

  steps.splice(index, 1);
  ensureSelectedStep();
  renderMacroEditor();
}

function openMacroListView() {
  state.macroEditorMode = "list";
  state.editingMacroId = "";
  state.selectedMacroStepPath = "";
  state.macroDraft = null;
  macroListView?.classList.remove("is-hidden");
  macroEditorView?.classList.add("is-hidden");
  renderMacroManagement();
}

function openMacroEditor(macroId = "") {
  const macro = state.macros.find((item) => item.id === macroId);

  state.macroEditorMode = "editor";
  state.editingMacroId = macro?.id || "";
  state.selectedMacroStepPath = "";
  state.macroDraft = macro
    ? {
        id: macro.id,
        name: macro.name,
        description: macro.description,
        notes: macro.notes || "",
        flow: macro.flow.map((step) => cloneMacroStepWithIds(step)),
      }
    : {
        id: "",
        name: "",
        description: "",
        notes: "",
        flow: [],
      };

  macroListView?.classList.add("is-hidden");
  macroEditorView?.classList.remove("is-hidden");
  renderMacroEditor();
  macroBasicNameInput?.focus();
}

function promptDeleteMacro(macroId) {
  const macro = state.macros.find((item) => item.id === macroId);

  if (!macro || !macroDeleteName) {
    return;
  }

  state.pendingDeleteMacroId = macro.id;
  macroDeleteName.textContent = macro.name;
  openModal(macroDeleteModal);
}

function duplicateMacro(macroId) {
  const macro = state.macros.find((item) => item.id === macroId);

  if (!macro) {
    return;
  }

  state.macros.unshift({
    ...macro,
    id: generateMacroId(),
    name: `${macro.name} Copy`,
    flow: macro.flow.map((step) => cloneMacroStepWithIds(step)),
  });
  state.macroPage = 1;
  renderMacroManagement();
  showToast(`${macro.name} duplicated.`);
}

function deleteMacro(macroId) {
  const macro = state.macros.find((item) => item.id === macroId);

  if (!macro) {
    return;
  }

  state.macros = state.macros.filter((item) => item.id !== macroId);

  if (state.editingMacroId === macroId) {
    openMacroListView();
  } else {
    renderMacroManagement();
  }

  showToast(`${macro.name} deleted.`);
}

function normalizeMacroValueType(valueType) {
  const normalized = String(valueType || "").toLowerCase();

  if (normalized === "number" || normalized === "boolean" || normalized === "text") {
    return normalized;
  }

  if (normalized === "string") {
    return "text";
  }

  return "text";
}

function getMacroValueOperators(valueType) {
  if (valueType === "number") {
    return ["==", "!=", ">", ">=", "<", "<="];
  }

  if (valueType === "boolean") {
    return ["==", "!="];
  }

  return ["==", "!=", "contains", "startsWith", "endsWith"];
}

function getMacroTypedInputControl(fieldName, valueType, value, options = {}) {
  const safeValue = value ?? "";
  const extraAttrs = options.disabled ? "disabled" : "";

  if (valueType === "number") {
    return `<input type="number" step="any" data-step-field="${fieldName}" value="${escapeHtml(safeValue)}" ${extraAttrs} />`;
  }

  if (valueType === "boolean") {
    return `
      <select data-step-field="${fieldName}" ${extraAttrs}>
        <option value="true" ${String(safeValue) === "true" ? "selected" : ""}>true</option>
        <option value="false" ${String(safeValue) === "false" ? "selected" : ""}>false</option>
      </select>
    `;
  }

  return `<input type="text" data-step-field="${fieldName}" value="${escapeHtml(safeValue)}" ${extraAttrs} />`;
}

function renderMacroStepActions(pathValue) {
  return `
    <div class="macro-step-card__actions">
      <button class="macro-step-icon-btn macro-step-icon-btn--danger" type="button" data-macro-step-action="delete" data-step-path="${pathValue}" aria-label="Delete step" title="Delete">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 7h14M9 7V4h6v3M8 10v7M12 10v7M16 10v7M7 7l1 13h8l1-13" /></svg>
      </button>
    </div>
  `;
}

function renderMacroReviewSteps(steps, parentPath = []) {
  return steps
    .map((step, index) => {
      const pathSegments = [...parentPath, index];
      const pathValue = serializeStepPath(pathSegments);
      const summary = getStepSummary(step);
      const warning = getStepWarning(step);

      if (step.type === "ifElse") {
        return `
          <div class="macro-step-slot">
            <article class="macro-step-card macro-if-block" data-step-path="${pathValue}">
              <div class="macro-step-card__main">
                <div class="macro-step-card__index">${getStepDisplayIndex(pathSegments)}</div>
                <div class="macro-step-card__body">
                  <div class="macro-step-card__header">
                    <div class="macro-step-card__type">
                      <span class="macro-step-card__badge ${getStepThemeClass(step.type)}">${getStepTypeLabel(step.type)}</span>
                      <strong>IF condition</strong>
                    </div>
                  </div>
                  <div class="macro-step-card__summary">${escapeHtml(summary)}</div>
                  ${warning ? `<div class="macro-step-warning">${escapeHtml(warning)}</div>` : ""}
                </div>
              </div>
              <div class="macro-branch-list">
                <section class="macro-branch-card">
                  <div class="macro-branch-card__header">
                    <strong>Then</strong>
                    <span class="macro-branch-card__tag">THEN</span>
                  </div>
                  <div class="macro-step-stack">
                    ${step.thenSteps.length ? renderMacroReviewSteps(step.thenSteps, [...pathSegments, "then"]) : '<div class="macro-branch-empty">No steps.</div>'}
                  </div>
                </section>
                <section class="macro-branch-card">
                  <div class="macro-branch-card__header">
                    <strong>Else</strong>
                    <span class="macro-branch-card__tag">ELSE</span>
                  </div>
                  <div class="macro-step-stack">
                    ${step.elseSteps.length ? renderMacroReviewSteps(step.elseSteps, [...pathSegments, "else"]) : '<div class="macro-branch-empty">No steps.</div>'}
                  </div>
                </section>
              </div>
            </article>
          </div>
        `;
      }

      return `
        <div class="macro-step-slot">
          <article class="macro-step-card" data-step-path="${pathValue}">
            <div class="macro-step-card__main">
              <div class="macro-step-card__index">${getStepDisplayIndex(pathSegments)}</div>
              <div class="macro-step-card__body">
                <div class="macro-step-card__header">
                  <div class="macro-step-card__type">
                    <span class="macro-step-card__badge ${getStepThemeClass(step.type)}">${getStepTypeLabel(step.type)}</span>
                    <strong>${getStepTypeLabel(step.type)}</strong>
                  </div>
                </div>
                <div class="macro-step-card__summary">${escapeHtml(summary)}</div>
                ${warning ? `<div class="macro-step-warning">${escapeHtml(warning)}</div>` : ""}
              </div>
            </div>
          </article>
        </div>
      `;
    })
    .join("");
}

function openMacroReviewModal(macroId) {
  const macro = state.macros.find((item) => item.id === macroId);

  if (!macro || !macroReviewHeader || !macroReviewFlow) {
    return;
  }

  macroReviewHeader.innerHTML = `
    <span class="panel-card__eyebrow">${escapeHtml(macro.id)}</span>
    <h3>${escapeHtml(macro.name)}</h3>
    <p>${escapeHtml(macro.description || "No description")}</p>
  `;

  macroReviewFlow.innerHTML = macro.flow.length
    ? `<div class="macro-step-stack">${renderMacroReviewSteps(macro.flow)}</div>`
    : `<div class="macro-flow-empty"><strong>No steps in this macro yet</strong></div>`;

  openModal(macroReviewModal);
}

function renderMacroSteps(steps, parentPath = []) {
  const renderedSteps = steps
    .map((step, index) => {
      const pathSegments = [...parentPath, index];
      const pathValue = serializeStepPath(pathSegments);
      const warning = getStepWarning(step);
      const isSelected = state.selectedMacroStepPath === pathValue;
      const containerPath = serializeStepPath(parentPath);

      if (step.type === "ifElse") {
        return `
          <div class="macro-step-slot" data-step-slot="true" data-container-path="${containerPath}" data-step-index="${index}">
          <article class="macro-step-card macro-if-block ${isSelected ? "is-selected" : ""} ${warning ? "is-invalid" : ""}" data-step-path="${pathValue}">
            <div class="macro-step-card__main">
              <div class="macro-step-card__index">${getStepDisplayIndex(pathSegments)}</div>
              <div class="macro-step-card__body">
                <div class="macro-step-card__header">
                  <div class="macro-step-card__type">
                    <span class="macro-step-card__badge ${getStepThemeClass(step.type)}">${getStepTypeLabel(step.type)}</span>
                    <strong>IF condition</strong>
                  </div>
                  ${renderMacroStepActions(pathValue)}
                </div>
                <div class="macro-step-card__summary">${escapeHtml(getStepSummary(step))}</div>
                <div class="macro-step-card__meta">Conditional routing for control logic branches.</div>
                ${warning ? `<div class="macro-step-warning">${escapeHtml(warning)}</div>` : ""}
              </div>
            </div>
            <div class="macro-branch-list">
              <section class="macro-branch-card ${state.selectedMacroStepPath.startsWith(`${pathValue}.then`) ? "is-selected" : ""}">
                <div class="macro-branch-card__header">
                  <strong>Then</strong>
                  <span class="macro-branch-card__tag">THEN</span>
                </div>
                <div class="macro-step-stack">
                  ${step.thenSteps.length ? renderMacroSteps(step.thenSteps, [...pathSegments, "then"]) : '<div class="macro-branch-empty">No steps yet.</div>'}
                  ${getMacroAddStepBar([...pathSegments, "then"], "Add the next THEN action or drag one here.")}
                </div>
              </section>
              <section class="macro-branch-card ${state.selectedMacroStepPath.startsWith(`${pathValue}.else`) ? "is-selected" : ""}">
                <div class="macro-branch-card__header">
                  <strong>Else</strong>
                  <span class="macro-branch-card__tag">ELSE</span>
                </div>
                <div class="macro-step-stack">
                  ${step.elseSteps.length ? renderMacroSteps(step.elseSteps, [...pathSegments, "else"]) : '<div class="macro-branch-empty">No steps yet.</div>'}
                  ${getMacroAddStepBar([...pathSegments, "else"], "Add the next ELSE action or drag one here.")}
                </div>
              </section>
            </div>
          </article>
          </div>
        `;
      }

      return `
        <div class="macro-step-slot" data-step-slot="true" data-container-path="${containerPath}" data-step-index="${index}">
        <article class="macro-step-card ${isSelected ? "is-selected" : ""} ${warning ? "is-invalid" : ""}" data-step-path="${pathValue}">
          <div class="macro-step-card__main">
            <div class="macro-step-card__index">${getStepDisplayIndex(pathSegments)}</div>
            <div class="macro-step-card__body">
              <div class="macro-step-card__header">
                <div class="macro-step-card__type">
                  <span class="macro-step-card__badge ${getStepThemeClass(step.type)}">${getStepTypeLabel(step.type)}</span>
                  <strong>${getStepTypeLabel(step.type)}</strong>
                </div>
                ${renderMacroStepActions(pathValue)}
              </div>
              <div class="macro-step-card__summary">${escapeHtml(getStepSummary(step))}</div>
              <div class="macro-step-card__meta">Step ID: ${escapeHtml(step.id)}</div>
              ${warning ? `<div class="macro-step-warning">${escapeHtml(warning)}</div>` : ""}
            </div>
          </div>
        </article>
        </div>
      `;
    })
    .join("");

  return renderedSteps;
}

function renderMacroFlow() {
  if (!macroFlowCanvas || !state.macroDraft) {
    return;
  }

  const steps = getMacroDraftSteps();

  if (!steps.length) {
    macroFlowCanvas.innerHTML = `
      <div class="macro-flow-empty">
        <strong>No steps in this macro yet</strong>
        <p>Start building your control logic</p>
        <button class="modal-btn modal-btn--primary" type="button" data-macro-empty-add="true">+ Add First Step</button>
        <span>or drag an action card into the flow</span>
      </div>
      ${getMacroAddStepBar([], "Drop Action Here", "+ Add Step")}
    `;
    return;
  }

  macroFlowCanvas.innerHTML = `
    <div class="macro-step-stack">
      ${renderMacroSteps(steps)}
    </div>
    ${getMacroAddStepBar([], "Ready for more logic, delays, or nested control branches.", "+ Add Step")}
  `;
}

function getInspectorField(label, control) {
  return `
    <label class="form-field">
      <span>${label}</span>
      ${control}
    </label>
  `;
}

function renderInspectorOptions(items, selectedValue) {
  return items
    .map((item) => `<option value="${escapeHtml(item)}" ${item === selectedValue ? "selected" : ""}>${escapeHtml(item)}</option>`)
    .join("");
}

function renderMacroInspector() {
  if (!macroInspectorPanel) {
    return;
  }

  const selectedStep = getStepByPath(parseStepPath(state.selectedMacroStepPath));

  if (!selectedStep) {
    macroInspectorPanel.innerHTML = `
      <div class="macro-inspector-empty">
        <p>Select a step to edit its properties</p>
      </div>
    `;
    return;
  }

  let fields = "";

  if (selectedStep.type === "command") {
    fields = `
      ${getInspectorField("Command", `
        <select data-step-field="commandId">
          <option value="">Select command</option>
          ${state.commands.map((command) => `<option value="${command.id}" ${command.id === selectedStep.commandId ? "selected" : ""}>${escapeHtml(command.id)} - ${escapeHtml(command.name)}</option>`).join("")}
        </select>
      `)}
    `;
  } else if (selectedStep.type === "delay") {
    fields = `
      ${getInspectorField("Step Type", `<input type="text" value="${getStepTypeLabel(selectedStep.type)}" disabled />`)}
      ${getInspectorField("Duration", `<input type="number" min="1" data-step-field="duration" value="${escapeHtml(selectedStep.duration)}" />`)}
      ${getInspectorField("Unit", `
        <select data-step-field="unit">
          <option value="sec" ${selectedStep.unit === "sec" ? "selected" : ""}>sec</option>
          <option value="ms" ${selectedStep.unit === "ms" ? "selected" : ""}>ms</option>
        </select>
      `)}
    `;
  } else if (selectedStep.type === "ifElse") {
    const valueType = normalizeMacroValueType(selectedStep.valueType);
    const operators = getMacroValueOperators(valueType);
    const operator = operators.includes(selectedStep.operator) ? selectedStep.operator : operators[0];
    fields = `
      ${getInspectorField("Variable", `<select data-step-field="variable">${renderInspectorOptions(commandParameterOptions, selectedStep.variable)}</select>`)}
      ${getInspectorField("Value Type", `
        <select data-step-field="valueType">
          <option value="number" ${valueType === "number" ? "selected" : ""}>number</option>
          <option value="text" ${valueType === "text" ? "selected" : ""}>text</option>
          <option value="boolean" ${valueType === "boolean" ? "selected" : ""}>boolean</option>
        </select>
      `)}
      ${getInspectorField("Operator", `
        <select data-step-field="operator">
          ${operators.map((item) => `<option value="${item}" ${operator === item ? "selected" : ""}>${escapeHtml(item)}</option>`).join("")}
        </select>
      `)}
      ${getInspectorField("Compare Value", getMacroTypedInputControl("compareValue", valueType, selectedStep.compareValue))}
      <div class="macro-inspector-preview">${escapeHtml(getMacroInspectorPreviewText({ ...selectedStep, operator }))}</div>
    `;
  } else if (selectedStep.type === "polling") {
    fields = `
      ${getInspectorField("Polling Rule", `<select data-step-field="pollingRule"><option value="">Select polling rule</option>${renderInspectorOptions(macroPollingMocks, selectedStep.pollingRule)}</select>`)}
      ${getInspectorField("Wait for Result", `<select data-step-field="waitForResult"><option value="true" ${selectedStep.waitForResult ? "selected" : ""}>Yes</option><option value="false" ${!selectedStep.waitForResult ? "selected" : ""}>No</option></select>`)}
      ${getInspectorField("Success Output", `<input type="text" data-step-field="successOutput" value="${escapeHtml(selectedStep.successOutput)}" />`)}
      ${getInspectorField("On Match", `<input type="text" data-step-field="onMatch" value="${escapeHtml(selectedStep.onMatch)}" />`)}
      ${getInspectorField("On Timeout", `<input type="text" data-step-field="onTimeout" value="${escapeHtml(selectedStep.onTimeout)}" />`)}
    `;
  } else if (selectedStep.type === "variable") {
    const valueType = normalizeMacroValueType(selectedStep.valueType);
    fields = `
      ${getInspectorField("Variable", `<select data-step-field="variableName">${renderInspectorOptions(commandParameterOptions, selectedStep.variableName)}</select>`)}
      ${getInspectorField("Value Type", `
        <select data-step-field="valueType">
          <option value="number" ${valueType === "number" ? "selected" : ""}>number</option>
          <option value="text" ${valueType === "text" ? "selected" : ""}>text</option>
          <option value="boolean" ${valueType === "boolean" ? "selected" : ""}>boolean</option>
        </select>
      `)}
      ${getInspectorField("Value", getMacroTypedInputControl("value", valueType, selectedStep.value))}
      <div class="macro-inspector-preview">${escapeHtml(getMacroInspectorPreviewText(selectedStep))}</div>
    `;
  } else if (selectedStep.type === "runMacro") {
    fields = `
      ${getInspectorField("Target Macro", `
        <select data-step-field="targetMacro">
          <option value="">Select macro</option>
          ${renderInspectorOptions(state.macros.map((macro) => macro.name), selectedStep.targetMacro)}
        </select>
      `)}
    `;
  }

  macroInspectorPanel.innerHTML = `
    <div class="macro-inspector-section">
      ${fields}
    </div>
  `;
}

function renderMacroEditor() {
  if (!state.macroDraft) {
    return;
  }

  if (macroBasicNameInput) {
    macroBasicNameInput.value = state.macroDraft.name;
  }

  if (macroBasicDescriptionInput) {
    macroBasicDescriptionInput.value = state.macroDraft.description;
  }

  renderMacroFlow();
  renderMacroInspector();
}

// Filter the mock driver catalog entirely on the client for now.
function getFilteredDrivers() {
  const keyword = state.driverLibrary.search.trim().toLowerCase();

  return state.drivers.filter((driver) => {
    const matchesKeyword =
      !keyword ||
      [driver.vendor, driver.model, driver.deviceType, driver.name].some((value) =>
        String(value).toLowerCase().includes(keyword)
      );
    const matchesType = state.driverLibrary.type === "All Types" || driver.deviceType === state.driverLibrary.type;
    const matchesProtocol =
      state.driverLibrary.protocol === "All Protocols" || driver.protocol === state.driverLibrary.protocol;
    const matchesVendor =
      state.driverLibrary.vendor === "All Vendors" || driver.vendor === state.driverLibrary.vendor;

    return matchesKeyword && matchesType && matchesProtocol && matchesVendor;
  });
}

function normalizeDriverLibrarySelection(filteredDrivers = getFilteredDrivers()) {
  const availableVendors = [...new Set(filteredDrivers.map((driver) => driver.vendor))];

  if (!availableVendors.length) {
    state.driverLibrary.selectedVendor = "";
    state.driverLibrary.selectedDriverId = "";
    return;
  }

  if (!availableVendors.includes(state.driverLibrary.selectedVendor)) {
    state.driverLibrary.selectedVendor = availableVendors[0];
  }

  const visibleDrivers = filteredDrivers.filter((driver) => driver.vendor === state.driverLibrary.selectedVendor);
  const selectedDriverExists = visibleDrivers.some((driver) => driver.id === state.driverLibrary.selectedDriverId);

  if (!selectedDriverExists) {
    state.driverLibrary.selectedDriverId = visibleDrivers[0]?.id || "";
  }
}

function getSelectedDriver() {
  return state.drivers.find((driver) => driver.id === state.driverLibrary.selectedDriverId) || null;
}

function renderDriverVendorList(filteredDrivers) {
  if (!driverVendorList) {
    return;
  }

  const vendorItems = [...new Set(filteredDrivers.map((driver) => driver.vendor))];

  if (!vendorItems.length) {
    driverVendorList.innerHTML = `
      <div class="driver-detail-empty">
        <h4>No drivers found</h4>
        <p>Try adjusting your search or filters</p>
      </div>
    `;
    return;
  }

  driverVendorList.innerHTML = vendorItems
    .map((vendor) => {
      const count = filteredDrivers.filter((driver) => driver.vendor === vendor).length;
      return `
        <button class="driver-vendor-item ${vendor === state.driverLibrary.selectedVendor ? "is-selected" : ""}" type="button" data-driver-vendor="${vendor}">
          <strong>${escapeHtml(vendor)}</strong>
          <span>${count}</span>
        </button>
      `;
    })
    .join("");
}

function renderDriverModelList(filteredDrivers) {
  if (!driverModelList) {
    return;
  }

  const visibleDrivers = filteredDrivers.filter((driver) => driver.vendor === state.driverLibrary.selectedVendor);

  if (!visibleDrivers.length) {
    driverModelList.innerHTML = `
      <div class="driver-detail-empty">
        <h4>No drivers found</h4>
        <p>Try adjusting your search or filters</p>
      </div>
    `;
    return;
  }

  driverModelList.innerHTML = visibleDrivers
    .map(
      (driver) => `
        <button class="driver-model-item ${driver.id === state.driverLibrary.selectedDriverId ? "is-selected" : ""}" type="button" data-driver-id="${driver.id}">
          <div class="driver-model-item__name">
            <strong>${escapeHtml(driver.name)}</strong>
            <span class="driver-protocol-badge">${escapeHtml(driver.protocol)}</span>
          </div>
          <div class="driver-model-item__meta">
            <span>${escapeHtml(driver.vendor)}</span>
            <span>${escapeHtml(driver.deviceType)}</span>
          </div>
        </button>
      `
    )
    .join("");
}

function renderDriverDetail() {
  if (!driverDetailContent) {
    return;
  }

  const driver = getSelectedDriver();

  if (driverCreateDeviceButton) {
    driverCreateDeviceButton.disabled = !driver;
  }

  if (driverExportButton) {
    driverExportButton.disabled = !driver;
  }

  if (!driver) {
    driverDetailContent.innerHTML = `
      <div class="driver-detail-empty">
        <h4>Select a driver to view details</h4>
        <p>Choose a model from the list to inspect protocol support and commands.</p>
      </div>
    `;
    return;
  }

  driverDetailContent.innerHTML = `
    <section class="driver-detail-section">
      <div class="driver-detail-section__header">
        <div>
          <span class="panel-card__eyebrow">Driver Summary</span>
          <h4>${escapeHtml(driver.name)}</h4>
        </div>
        <span class="driver-protocol-badge">${escapeHtml(driver.protocol)}</span>
      </div>
      <div class="driver-summary-grid">
        <div class="driver-summary-item"><span>Driver Name</span><strong>${escapeHtml(driver.name)}</strong></div>
        <div class="driver-summary-item"><span>Vendor</span><strong>${escapeHtml(driver.vendor)}</strong></div>
        <div class="driver-summary-item"><span>Device Type</span><strong>${escapeHtml(driver.deviceType)}</strong></div>
        <div class="driver-summary-item"><span>Version</span><strong>${escapeHtml(driver.version)}</strong></div>
        <div class="driver-summary-item"><span>Supported Protocol</span><strong>${escapeHtml(driver.protocol)}</strong></div>
        <div class="driver-summary-item"><span>Response Format</span><strong>${escapeHtml(driver.responseFormat)}</strong></div>
      </div>
    </section>

    <section class="driver-detail-section">
      <div class="driver-detail-section__header">
        <div>
          <span class="panel-card__eyebrow">Supported Commands</span>
          <h4>Control Capabilities</h4>
        </div>
      </div>
      <ul class="driver-detail-list">
        ${driver.commands.map((command) => `<li>${escapeHtml(command)}</li>`).join("")}
      </ul>
    </section>

    <section class="driver-detail-section">
      <div class="driver-detail-section__header">
        <div>
          <span class="panel-card__eyebrow">Response Format</span>
          <h4>Expected Payload Type</h4>
        </div>
      </div>
      <ul class="driver-detail-list">
        <li>${escapeHtml(driver.responseFormat)}</li>
      </ul>
    </section>

    <section class="driver-detail-section">
      <div class="driver-detail-section__header">
        <div>
          <span class="panel-card__eyebrow">Notes</span>
          <h4>Integration Notes</h4>
        </div>
      </div>
      <ul class="driver-detail-list">
        ${driver.notes.map((note) => `<li>${escapeHtml(note)}</li>`).join("")}
      </ul>
    </section>
  `;
}

// Driver Library follows a vendor -> model master-detail workflow for SI users.
function renderDriverLibrary() {
  if (!driverLibraryPanel) {
    return;
  }

  if (driverSearchInput && driverSearchInput.value !== state.driverLibrary.search) {
    driverSearchInput.value = state.driverLibrary.search;
  }

  if (driverTypeFilter) {
    driverTypeFilter.value = state.driverLibrary.type;
  }

  if (driverProtocolFilter) {
    driverProtocolFilter.value = state.driverLibrary.protocol;
  }

  if (driverVendorFilter) {
    driverVendorFilter.value = state.driverLibrary.vendor;
  }

  const filteredDrivers = getFilteredDrivers();
  normalizeDriverLibrarySelection(filteredDrivers);
  renderDriverVendorList(filteredDrivers);
  renderDriverModelList(filteredDrivers);
  renderDriverDetail();
}

function generateDeviceId() {
  const nextNumber =
    state.devices.reduce((maxValue, device) => {
      const matched = String(device.id || "").match(/(\d+)$/);
      const numericId = matched ? Number(matched[1]) : 0;
      return Math.max(maxValue, numericId);
    }, 0) + 1;

  return `DEV-${String(nextNumber).padStart(3, "0")}`;
}

function getEmptyDeviceDraft() {
  return {
    mode: "",
    driverId: state.drivers[0]?.id || "",
    name: "",
    description: "",
    deviceType: "Projector",
    protocol: "TCP/IP",
    connection: {
      ipAddress: "",
      port: "",
      baudRate: "9600",
      dataBit: "8",
      parity: "None",
      stopBit: "1",
      baseUrl: "",
      authToken: "",
    },
    testStatus: "Not Tested",
    testMessage: "Connection test has not been run.",
  };
}

function getFilteredDevices() {
  const keyword = state.deviceIntegration.search.trim().toLowerCase();

  return state.devices.filter((device) => {
    const connectionText = getDeviceConnectionLabel(device).toLowerCase();
    const matchesKeyword =
      !keyword ||
      [device.name, connectionText].some((value) => String(value).toLowerCase().includes(keyword));
    const matchesType = state.deviceIntegration.type === "All Types" || device.deviceType === state.deviceIntegration.type;
    return matchesKeyword && matchesType;
  });
}

function getDeviceById(deviceId) {
  return state.devices.find((device) => device.id === deviceId) || null;
}

function getDriverById(driverId) {
  return state.drivers.find((driver) => driver.id === driverId) || null;
}

function getDeviceConnectionLabel(device) {
  if (device.protocol === "RS-232") {
    return "RS-232";
  }

  if (device.protocol === "HTTP") {
    return device.connection.baseUrl || "HTTP";
  }

  return device.connection.ipAddress || device.protocol;
}

function getProtocolFields(protocol, connection) {
  if (protocol === "RS-232") {
    return `
      <div class="device-form-grid">
        ${getInspectorField("Baud Rate", `<input type="number" name="baudRate" value="${escapeHtml(connection.baudRate || "9600")}" />`)}
        ${getInspectorField("Data Bit", `<input type="number" name="dataBit" value="${escapeHtml(connection.dataBit || "8")}" />`)}
        ${getInspectorField("Parity", `
          <select name="parity">
            <option value="None" ${connection.parity === "None" ? "selected" : ""}>None</option>
            <option value="Even" ${connection.parity === "Even" ? "selected" : ""}>Even</option>
            <option value="Odd" ${connection.parity === "Odd" ? "selected" : ""}>Odd</option>
          </select>
        `)}
        ${getInspectorField("Stop Bit", `<input type="number" name="stopBit" value="${escapeHtml(connection.stopBit || "1")}" />`)}
      </div>
    `;
  }

  if (protocol === "HTTP") {
    return `
      <div class="device-form-grid">
        ${getInspectorField("Base URL", `<input type="text" name="baseUrl" value="${escapeHtml(connection.baseUrl || "")}" placeholder="http://192.168.1.120/api" />`)}
        ${getInspectorField("Authentication Token", `<input type="text" name="authToken" value="${escapeHtml(connection.authToken || "")}" placeholder="Optional" />`)}
      </div>
    `;
  }

  return `
    <div class="device-form-grid">
      ${getInspectorField("IP Address", `<input type="text" name="ipAddress" value="${escapeHtml(connection.ipAddress || "")}" placeholder="192.168.1.100" />`)}
      ${getInspectorField("Port", `<input type="number" name="port" value="${escapeHtml(connection.port || "")}" placeholder="23" />`)}
    </div>
  `;
}

function openDevicesListView() {
  state.deviceIntegration.view = "list";
  state.deviceIntegration.mode = "";
  state.deviceIntegration.editingDeviceId = "";
  state.deviceIntegration.detailConnectionEdit = false;
  state.deviceIntegration.draft = null;
  renderDeviceIntegration();
}

function renderDevicesListWithSearchFocus(cursorPosition = null) {
  renderDeviceIntegration();

  const nextSearchInput = document.getElementById("deviceSearchInput");

  if (!nextSearchInput) {
    return;
  }

  nextSearchInput.focus();

  if (cursorPosition !== null) {
    nextSearchInput.setSelectionRange(cursorPosition, cursorPosition);
  }
}

function openAddDeviceView(mode = "", existingDeviceId = "", presetDriverId = "") {
  const existingDevice = existingDeviceId ? getDeviceById(existingDeviceId) : null;
  const draft = getEmptyDeviceDraft();

  if (existingDevice) {
    draft.mode = existingDevice.manual ? "manual" : "driver";
    draft.driverId = existingDevice.driverId || draft.driverId;
    draft.name = existingDevice.name;
    draft.description = existingDevice.description;
    draft.deviceType = existingDevice.deviceType;
    draft.protocol = existingDevice.protocol;
    draft.connection = {
      ...draft.connection,
      ...existingDevice.connection,
    };
  } else if (mode) {
    draft.mode = mode;
  }

  if (!existingDevice && presetDriverId) {
    draft.mode = "driver";
    draft.driverId = presetDriverId;
  }

  state.deviceIntegration.view = "add";
  state.deviceIntegration.mode = draft.mode;
  state.deviceIntegration.editingDeviceId = existingDeviceId;
  state.deviceIntegration.draft = draft;
  renderDeviceIntegration();
}

function openDeviceDetailView(deviceId) {
  state.deviceIntegration.view = "detail";
  state.deviceIntegration.editingDeviceId = deviceId;
  state.deviceIntegration.detailConnectionEdit = false;
  renderDeviceIntegration();
}

function buildCommandsFromDriver(deviceName, driver) {
  const interfaceMap = {
    "TCP/IP": "System",
    Telnet: "Telnet",
    "RS-232": "RS232",
    HTTP: "System",
  };
  const existingMax =
    state.commands.reduce((maxValue, command) => {
      const matched = String(command.id || "").match(/(\d+)$/);
      return Math.max(maxValue, matched ? Number(matched[1]) : 0);
    }, 0);

  return driver.commands.map((capability, index) => ({
    id: `CMD-${String(existingMax + index + 1).padStart(3, "0")}`,
    name: `${deviceName}_${driver.model}_${capability}`.replace(/\s+/g, "_"),
    interface: interfaceMap[driver.protocol] || "System",
    data: capability,
    device: deviceName,
    telnetIp: driver.protocol === "Telnet" ? "0.0.0.0" : "",
    telnetPort: driver.protocol === "Telnet" ? "23" : "",
    stateUpdate: null,
  }));
}

function saveDeviceDraft() {
  const draft = state.deviceIntegration.draft;

  if (!draft || !draft.name.trim()) {
    showToast("Please enter a device name.");
    return;
  }

  const driver = draft.mode === "driver" ? getDriverById(draft.driverId) : null;
  const nextDevice = {
    id: state.deviceIntegration.editingDeviceId ? state.deviceIntegration.editingDeviceId : generateDeviceId(),
    name: draft.name.trim(),
    driverId: draft.mode === "driver" ? driver?.id || "" : "",
    driverName: draft.mode === "driver" ? driver?.name || "" : "",
    manual: draft.mode !== "driver",
    deviceType: draft.mode === "driver" ? driver?.deviceType || draft.deviceType : draft.deviceType,
    description: draft.description.trim(),
    protocol: draft.mode === "driver" ? driver?.protocol || draft.protocol : draft.protocol,
    connection: { ...draft.connection },
  };

  if (state.deviceIntegration.editingDeviceId) {
    state.devices = state.devices.map((device) => (device.id === nextDevice.id ? nextDevice : device));
    showToast(`${nextDevice.name} updated.`);
  } else {
    state.devices.unshift(nextDevice);

    if (driver) {
      state.commands.unshift(...buildCommandsFromDriver(nextDevice.name, driver));
    }

    showToast(`${nextDevice.name} saved.`);
  }

  openDevicesListView();
}

function runDeviceConnectionTest(context = "draft") {
  const isSuccess = Math.random() > 0.2;
  const message = isSuccess
    ? "Connection verified. Device responded within expected timing."
    : "Connection failed. Check address, protocol, or physical wiring.";

  if (context === "draft" && state.deviceIntegration.draft) {
    state.deviceIntegration.draft.testStatus = isSuccess ? "Success" : "Failed";
    state.deviceIntegration.draft.testMessage = message;
    renderDeviceIntegration();
    return;
  }

  showToast(isSuccess ? "Device test successful." : "Device test failed.");
}

function promptDeleteDevice(deviceId) {
  const device = getDeviceById(deviceId);

  if (!device || !deviceDeleteName || !deviceDeleteMessage) {
    return;
  }

  state.deviceIntegration.pendingDeleteDeviceId = deviceId;
  deviceDeleteName.textContent = device.name;
  deviceDeleteMessage.textContent = `Are you sure you want to delete ${device.name} from the integrated device list?`;
  openModal(deviceDeleteModal);
}

function renderDeviceReviewContent(device) {
  const driver = device.driverId ? getDriverById(device.driverId) : null;
  const commandList = driver ? driver.commands : [];

  const connectionMarkup =
    device.protocol === "RS-232"
      ? `
        <div class="driver-summary-grid">
          <div class="driver-summary-item"><span>Baud Rate</span><strong>${escapeHtml(device.connection.baudRate || "9600")}</strong></div>
          <div class="driver-summary-item"><span>Data Bit</span><strong>${escapeHtml(device.connection.dataBit || "8")}</strong></div>
          <div class="driver-summary-item"><span>Parity</span><strong>${escapeHtml(device.connection.parity || "None")}</strong></div>
          <div class="driver-summary-item"><span>Stop Bit</span><strong>${escapeHtml(device.connection.stopBit || "1")}</strong></div>
        </div>
      `
      : device.protocol === "HTTP"
        ? `
          <div class="driver-summary-grid">
            <div class="driver-summary-item"><span>Base URL</span><strong>${escapeHtml(device.connection.baseUrl || "---")}</strong></div>
            <div class="driver-summary-item"><span>Authentication Token</span><strong>${escapeHtml(device.connection.authToken || "Not configured")}</strong></div>
          </div>
        `
        : `
          <div class="driver-summary-grid">
            <div class="driver-summary-item"><span>IP Address</span><strong>${escapeHtml(device.connection.ipAddress || "---")}</strong></div>
            <div class="driver-summary-item"><span>Port</span><strong>${escapeHtml(device.connection.port || "---")}</strong></div>
          </div>
        `;

  return `
    <section class="device-form-section">
      <span class="panel-card__eyebrow">Device Summary</span>
      <div class="driver-summary-grid">
        <div class="driver-summary-item"><span>Device Name</span><strong>${escapeHtml(device.name)}</strong></div>
        <div class="driver-summary-item"><span>Driver</span><strong>${escapeHtml(device.driverName || "Manual Device")}</strong></div>
        <div class="driver-summary-item"><span>Device Type</span><strong>${escapeHtml(device.deviceType)}</strong></div>
        <div class="driver-summary-item"><span>Protocol</span><strong>${escapeHtml(device.protocol)}</strong></div>
      </div>
    </section>
    <section class="device-form-section">
      <span class="panel-card__eyebrow">Connection</span>
      ${connectionMarkup}
    </section>
    <section class="device-form-section">
      <span class="panel-card__eyebrow">${device.manual ? "Manual Device" : "Commands from Driver"}</span>
      ${
        commandList.length
          ? `<ul class="driver-detail-list">${commandList.map((command) => `<li>${escapeHtml(command)}</li>`).join("")}</ul>`
          : `
            <div class="device-manual-notice">
              <strong>Manual Device</strong>
              <p>No driver assigned.</p>
              <p>Commands must be configured manually in Command Management.</p>
            </div>
          `
      }
    </section>
  `;
}

function openDeviceReviewModal(deviceId) {
  const device = getDeviceById(deviceId);

  if (!device || !deviceReviewHeader || !deviceReviewContent) {
    return;
  }

  deviceReviewHeader.innerHTML = `
    <h3>${escapeHtml(device.name)}</h3>
    <p>${escapeHtml(device.description || "Integrated device instance")}</p>
  `;
  deviceReviewContent.innerHTML = renderDeviceReviewContent(device);
  openModal(deviceReviewModal);
}

function deleteDevice(deviceId) {
  const device = getDeviceById(deviceId);

  if (!device) {
    return;
  }

  state.devices = state.devices.filter((item) => item.id !== deviceId);
  showToast(`${device.name} deleted.`);
  openDevicesListView();
}

function renderDevicesListView() {
  const filteredDevices = getFilteredDevices();
  const hasAnyDevices = state.devices.length > 0;

  return `
    <div class="device-page-hero">
      <div class="device-page-hero__copy">
        <span class="panel-card__eyebrow">Device Integration</span>
        <h2 id="deviceIntegrationPanelTitle">Devices</h2>
        <p>Manage integrated device instances for control workflows</p>
      </div>
      <button class="modal-btn modal-btn--primary" type="button" data-device-action="open-add">+ Add Device</button>
    </div>

    <section class="panel-card device-page-card">
      <div class="device-toolbar">
        <label class="form-field device-search-field">
          <span>Search</span>
          <input id="deviceSearchInput" type="search" placeholder="Search devices by name, IP" value="${escapeHtml(state.deviceIntegration.search)}" />
        </label>
        <label class="form-field">
          <span>Type</span>
          <select id="deviceTypeFilter">
            <option value="All Types" ${state.deviceIntegration.type === "All Types" ? "selected" : ""}>All Types</option>
            <option value="Projector" ${state.deviceIntegration.type === "Projector" ? "selected" : ""}>Projector</option>
            <option value="Display" ${state.deviceIntegration.type === "Display" ? "selected" : ""}>Display</option>
            <option value="Audio" ${state.deviceIntegration.type === "Audio" ? "selected" : ""}>Audio</option>
            <option value="Sensor" ${state.deviceIntegration.type === "Sensor" ? "selected" : ""}>Sensor</option>
            <option value="Lighting" ${state.deviceIntegration.type === "Lighting" ? "selected" : ""}>Lighting</option>
          </select>
        </label>
      </div>

      <div class="device-table-wrap">
        ${
          filteredDevices.length
            ? `
              <table class="device-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Driver</th>
                    <th>Connection</th>
                    <th>Type</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  ${filteredDevices
                    .map(
                      (device) => `
                        <tr class="device-table__row" data-device-open-id="${device.id}">
                          <td><div class="device-table__name"><strong>${escapeHtml(device.name)}</strong><span>${escapeHtml(device.description || "Integrated device instance")}</span></div></td>
                          <td><span class="device-driver-badge ${device.driverName ? "is-driver" : "is-manual"}">${escapeHtml(device.driverName || "---")}</span></td>
                          <td>${escapeHtml(getDeviceConnectionLabel(device))}</td>
                          <td><span class="driver-protocol-badge">${escapeHtml(device.deviceType)}</span></td>
                          <td>
                            <div class="macro-actions">
                              <button class="macro-action-btn" type="button" data-device-row-action="edit" data-device-id="${device.id}" aria-label="Edit device" title="Edit">
                                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 20h4l10-10-4-4L4 16v4Zm13-13 2 2M4 20h16" /></svg>
                              </button>
                              <button class="macro-action-btn" type="button" data-device-row-action="test" data-device-id="${device.id}" aria-label="Test connection" title="Test">
                                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 18h.01M8.2 15.8a5.4 5.4 0 1 1 7.6 0M5.4 13a9.4 9.4 0 0 1 13.2 0M2.7 10.3a13.2 13.2 0 0 1 18.6 0" /></svg>
                              </button>
                              <button class="macro-action-btn" type="button" data-device-row-action="commands" data-device-id="${device.id}" aria-label="Go to commands" title="Commands">
                                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 7h12M8 12h12M8 17h12M4 7h.01M4 12h.01M4 17h.01" /></svg>
                              </button>
                              <button class="macro-action-btn macro-action-btn--danger" type="button" data-device-row-action="delete" data-device-id="${device.id}" aria-label="Delete device" title="Delete">
                                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 7h14M9 7V4h6v3M8 10v7M12 10v7M16 10v7M7 7l1 13h8l1-13" /></svg>
                              </button>
                            </div>
                          </td>
                        </tr>
                      `
                    )
                    .join("")}
                </tbody>
              </table>
            `
            : `
              <div class="driver-detail-empty">
                <h4>${hasAnyDevices ? "No devices found" : "No devices added yet"}</h4>
                <p>${hasAnyDevices ? "Try adjusting your search or type filter." : "Start by creating a device instance from a driver or manual setup."}</p>
                ${
                  hasAnyDevices
                    ? ""
                    : '<button class="modal-btn modal-btn--primary" type="button" data-device-action="open-add">+ Add Your First Device</button>'
                }
              </div>
            `
        }
      </div>
    </section>
  `;
}

function renderDeviceModeCards(selectedMode) {
  return `
    <div class="device-mode-grid">
      <button class="device-mode-card ${selectedMode === "driver" ? "is-selected" : ""}" type="button" data-device-mode="driver">
        <span class="panel-card__eyebrow">Select Driver</span>
        <strong>Use Driver</strong>
        <p>Use a predefined driver to quickly configure a supported device. Includes protocol and command capability preview.</p>
        <span class="device-mode-card__cta">Continue</span>
      </button>
      <button class="device-mode-card ${selectedMode === "manual" ? "is-selected" : ""}" type="button" data-device-mode="manual">
        <span class="panel-card__eyebrow">Manual Setup</span>
        <strong>Manual Device</strong>
        <p>Create a device without a predefined driver. Commands will need to be created manually later.</p>
        <span class="device-mode-card__cta">Continue</span>
      </button>
    </div>
  `;
}

function renderDeviceDraftView() {
  const draft = state.deviceIntegration.draft || getEmptyDeviceDraft();
  const selectedDriver = draft.mode === "driver" ? getDriverById(draft.driverId) : null;
  const effectiveProtocol = draft.mode === "driver" ? selectedDriver?.protocol || draft.protocol : draft.protocol;
  const effectiveType = draft.mode === "driver" ? selectedDriver?.deviceType || draft.deviceType : draft.deviceType;
  const title = state.deviceIntegration.editingDeviceId ? "Edit Device" : "Add Device";

  return `
    <div class="device-page-hero">
      <div class="device-page-hero__copy">
        <button class="modal-btn modal-btn--ghost" type="button" data-device-action="back-to-list">Back</button>
        <span class="panel-card__eyebrow">Device Integration</span>
        <h2>${title}</h2>
        <p>Select how you want to create this device instance</p>
      </div>
      <div class="driver-detail-actions">
        <button class="modal-btn modal-btn--ghost" type="button" data-device-action="back-to-list">Cancel</button>
        <button class="modal-btn modal-btn--primary" type="button" data-device-action="save-device">Save Device</button>
      </div>
    </div>

    <section class="panel-card device-page-card">
      ${renderDeviceModeCards(draft.mode)}
      ${
        !draft.mode
          ? ""
          : `
            <div class="device-add-layout">
              <section class="device-form-panel">
                ${
                  draft.mode === "driver"
                    ? `
                      <div class="device-form-section">
                        <span class="panel-card__eyebrow">Select Driver</span>
                        ${getInspectorField(
                          "Driver",
                          `<select name="driverId" data-device-draft-field="driverId">
                            ${state.drivers
                              .map(
                                (driver) =>
                                  `<option value="${driver.id}" ${driver.id === draft.driverId ? "selected" : ""}>${escapeHtml(driver.name)}</option>`
                              )
                              .join("")}
                          </select>`
                        )}
                      </div>
                    `
                    : ""
                }

                <div class="device-form-section">
                  <span class="panel-card__eyebrow">Basic Information</span>
                  <div class="device-form-grid">
                    ${getInspectorField("Device Name", `<input type="text" name="name" data-device-draft-field="name" value="${escapeHtml(draft.name)}" />`)}
                    ${
                      draft.mode === "manual"
                        ? getInspectorField(
                            "Device Type",
                            `<select name="deviceType" data-device-draft-field="deviceType">
                              ${["Projector", "Display", "Audio", "Sensor", "Lighting", "Other"]
                                .map((item) => `<option value="${item}" ${draft.deviceType === item ? "selected" : ""}>${item}</option>`)
                                .join("")}
                            </select>`
                          )
                        : `<div class="device-driver-preview-card"><span>Device Type</span><strong>${escapeHtml(effectiveType)}</strong></div>`
                    }
                    ${getInspectorField("Description", `<textarea name="description" data-device-draft-field="description" rows="3">${escapeHtml(draft.description)}</textarea>`)}
                  </div>
                </div>

                <div class="device-form-section">
                  <span class="panel-card__eyebrow">Connection Settings</span>
                  ${
                    draft.mode === "manual"
                      ? getInspectorField(
                          "Protocol",
                          `<select name="protocol" data-device-draft-field="protocol">
                            ${["RS-232", "TCP/IP", "Telnet", "HTTP", "Other"]
                              .map((item) => `<option value="${item}" ${draft.protocol === item ? "selected" : ""}>${item}</option>`)
                              .join("")}
                          </select>`
                        )
                      : `<div class="device-driver-preview-card"><span>Protocol</span><strong>${escapeHtml(effectiveProtocol)}</strong></div>`
                  }
                  ${getProtocolFields(effectiveProtocol, draft.connection)}
                </div>

                <div class="device-form-section">
                  <span class="panel-card__eyebrow">Test Connection</span>
                  <div class="device-test-row">
                    <button class="modal-btn modal-btn--ghost" type="button" data-device-action="test-draft-connection">Test Connection</button>
                    <span class="device-test-status ${draft.testStatus === "Success" ? "is-success" : draft.testStatus === "Failed" ? "is-failed" : ""}">${escapeHtml(draft.testStatus)}</span>
                  </div>
                  <div class="device-test-message">${escapeHtml(draft.testMessage)}</div>
                </div>

                ${
                  draft.mode === "manual"
                    ? `
                      <div class="device-manual-notice">
                        <strong>Manual Device Notice</strong>
                        <p>No predefined driver is assigned to this device.</p>
                        <p>Commands must be created manually in Command Management after saving.</p>
                      </div>
                    `
                    : ""
                }
              </section>

              <aside class="device-side-panel">
                ${
                  draft.mode === "driver" && selectedDriver
                    ? `
                      <section class="device-form-section">
                        <span class="panel-card__eyebrow">Driver Summary Preview</span>
                        <div class="driver-summary-grid">
                          <div class="driver-summary-item"><span>Vendor</span><strong>${escapeHtml(selectedDriver.vendor)}</strong></div>
                          <div class="driver-summary-item"><span>Device Type</span><strong>${escapeHtml(selectedDriver.deviceType)}</strong></div>
                          <div class="driver-summary-item"><span>Supported Protocol</span><strong>${escapeHtml(selectedDriver.protocol)}</strong></div>
                          <div class="driver-summary-item"><span>Command Count</span><strong>${selectedDriver.commands.length}</strong></div>
                        </div>
                      </section>
                      <section class="device-form-section">
                        <span class="panel-card__eyebrow">Capability Preview</span>
                        <ul class="driver-detail-list">
                          ${selectedDriver.commands.map((command) => `<li>${escapeHtml(command)}</li>`).join("")}
                        </ul>
                        <div class="device-driver-sync-note">
                          Saving this driver-based device will automatically add its available commands into Command Management.
                        </div>
                      </section>
                    `
                    : ""
                }
              </aside>
            </div>
          `
      }
    </section>
  `;
}

function renderDeviceDetailView() {
  const device = getDeviceById(state.deviceIntegration.editingDeviceId);

  if (!device) {
    return renderDevicesListView();
  }

  const driver = device.driverId ? getDriverById(device.driverId) : null;

  return `
    <div class="device-page-hero">
      <div class="device-page-hero__copy">
        <button class="modal-btn modal-btn--ghost" type="button" data-device-action="back-to-list">Back</button>
        <span class="panel-card__eyebrow">Device Detail</span>
        <h2>${escapeHtml(device.name)}</h2>
        <p>${escapeHtml(device.description || "Integrated device instance")}</p>
      </div>
      <div class="driver-detail-actions">
        <button class="modal-btn modal-btn--ghost" type="button" data-device-action="edit-connection" data-device-id="${device.id}">Edit Connection</button>
        <button class="modal-btn modal-btn--ghost" type="button" data-device-action="test-device" data-device-id="${device.id}">Test Connection</button>
        <button class="modal-btn modal-btn--ghost" type="button" data-device-action="go-commands" data-device-id="${device.id}">Go to Commands</button>
        <button class="modal-btn modal-btn--primary" type="button" data-device-action="delete-device" data-device-id="${device.id}">Delete Device</button>
      </div>
    </div>

    <section class="panel-card device-page-card">
      <div class="device-detail-grid">
        <section class="device-form-section">
          <span class="panel-card__eyebrow">Device Summary</span>
          <div class="driver-summary-grid">
            <div class="driver-summary-item"><span>Device Name</span><strong>${escapeHtml(device.name)}</strong></div>
            <div class="driver-summary-item"><span>Driver</span><strong>${escapeHtml(device.driverName || "Manual Device")}</strong></div>
            <div class="driver-summary-item"><span>Device Type</span><strong>${escapeHtml(device.deviceType)}</strong></div>
            <div class="driver-summary-item"><span>Connection</span><strong>${escapeHtml(getDeviceConnectionLabel(device))}</strong></div>
          </div>
        </section>
        <section class="device-form-section">
          <span class="panel-card__eyebrow">Connection</span>
          ${getProtocolFields(device.protocol, device.connection)}
        </section>
      </div>

      <section class="device-form-section">
        <span class="panel-card__eyebrow">${device.manual ? "Manual Device" : "Commands from Driver"}</span>
        ${
          driver
            ? `<ul class="driver-detail-list">${driver.commands.map((command) => `<li>${escapeHtml(command)}</li>`).join("")}</ul>`
            : `
              <div class="device-manual-notice">
                <strong>Manual Device</strong>
                <p>No driver assigned.</p>
                <p>Commands must be configured manually.</p>
              </div>
            `
        }
      </section>
    </section>
  `;
}

function renderDeviceIntegration() {
  if (!deviceIntegrationContent) {
    return;
  }

  if (state.deviceIntegration.view === "add") {
    deviceIntegrationContent.innerHTML = renderDeviceDraftView();
    return;
  }

  if (state.deviceIntegration.view === "detail") {
    deviceIntegrationContent.innerHTML = renderDeviceDetailView();
    return;
  }

  deviceIntegrationContent.innerHTML = renderDevicesListView();
}

function renderMacroManagement() {
  if (!macroPanel || !macroTableBody || !macroSummary || !macroEmptyState || !macroPagination) {
    return;
  }

  const filteredMacros = getFilteredMacros();
  normalizeMacroPage(filteredMacros);
  macroSummary.textContent = `${filteredMacros.length} macro${filteredMacros.length === 1 ? "" : "s"}`;

  if (macroSearchInput && macroSearchInput.value !== state.macroSearch) {
    macroSearchInput.value = state.macroSearch;
  }

  const hasMacros = state.macros.length > 0;
  const hasFilteredMacros = filteredMacros.length > 0;

  macroEmptyState.classList.toggle("is-hidden", hasMacros);

  if (!hasMacros) {
    macroTableBody.innerHTML = "";
    macroPagination.innerHTML = "";
    return;
  }

  if (!hasFilteredMacros) {
    macroTableBody.innerHTML = `
      <tr>
        <td class="command-empty" colspan="4">
          <p>No macros match your search.</p>
        </td>
      </tr>
    `;
    macroPagination.innerHTML = "";
    return;
  }

  const pageSize = 15;
  const pageStart = (state.macroPage - 1) * pageSize;
  const currentPageMacros = filteredMacros.slice(pageStart, pageStart + pageSize);

  macroTableBody.innerHTML = currentPageMacros
    .map((macro) => `
      <tr class="${state.editingMacroId === macro.id && state.macroEditorMode === "editor" ? "is-selected" : ""}" data-macro-row-id="${macro.id}">
        <td><span class="command-id">${escapeHtml(macro.id)}</span></td>
        <td><div class="macro-name"><strong>${escapeHtml(macro.name)}</strong></div></td>
        <td><div class="macro-description">${escapeHtml(macro.description)}</div></td>
        <td>
          <div class="macro-actions">
            <button class="macro-action-btn" type="button" data-macro-action="edit" data-macro-id="${macro.id}" aria-label="Edit macro" title="Edit">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 20h4l10-10-4-4L4 16v4Zm13-13 2 2M4 20h16" /></svg>
            </button>
            <button class="macro-action-btn" type="button" data-macro-action="duplicate" data-macro-id="${macro.id}" aria-label="Duplicate macro" title="Duplicate">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 9h10v11H9zM5 4h10v11" /></svg>
            </button>
            <button class="macro-action-btn macro-action-btn--danger" type="button" data-macro-action="delete" data-macro-id="${macro.id}" aria-label="Delete macro" title="Delete">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 7h14M9 7V4h6v3M8 10v7M12 10v7M16 10v7M7 7l1 13h8l1-13" /></svg>
            </button>
            <button class="macro-action-btn" type="button" data-macro-action="test" data-macro-id="${macro.id}" aria-label="Test macro" title="Test">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m8 6 10 6-10 6zM5 5v14" /></svg>
            </button>
          </div>
        </td>
      </tr>
    `)
    .join("");

  const pageCount = getMacroPageCount(filteredMacros);
  const pageButtons = Array.from({ length: pageCount }, (_, index) => {
    const pageNumber = index + 1;

    return `
      <button class="command-page-btn ${pageNumber === state.macroPage ? "is-active" : ""}" type="button" data-macro-page="${pageNumber}">
        ${pageNumber}
      </button>
    `;
  }).join("");

  macroPagination.innerHTML = `
    <button class="command-page-btn" type="button" data-macro-page-nav="prev" ${state.macroPage === 1 ? "disabled" : ""}>Prev</button>
    ${pageButtons}
    <button class="command-page-btn" type="button" data-macro-page-nav="next" ${state.macroPage === pageCount ? "disabled" : ""}>Next</button>
  `;
}

function renderUserMenu() {
  if (state.isLoggedIn) {
    userDropdown.innerHTML = `
      <button class="user-menu__item" type="button" data-action="open-settings" role="menuitem">
        Setting
      </button>
      <button class="user-menu__item" type="button" data-action="logout" role="menuitem">
        Logout
      </button>
    `;
    settingsButton.classList.remove("is-hidden");
  } else {
    userDropdown.innerHTML = `
      <button class="user-menu__item" type="button" data-action="login" role="menuitem">
        Login
      </button>
    `;
    settingsButton.classList.add("is-hidden");
  }
}

function updatePadPage(pageIndex) {
  const maxPage = padPages.length - 1;
  const nextPage = Math.max(0, Math.min(pageIndex, maxPage));

  state.currentPadPage = nextPage;
  padPagesTrack.style.transform = `translateX(-${nextPage * 100}%)`;

  padPages.forEach((page, index) => {
    page.classList.toggle("is-active", index === nextPage);
  });

  padPageDots.forEach((dot, index) => {
    dot.classList.toggle("is-active", index === nextPage);
  });
}

function updateContentStage(sectionTitle, isHome) {
  const isDeviceIntegration = sectionTitle === "Device Integration";
  const isCommandManagement = sectionTitle === "Command Management";
  const isMacroManagement = sectionTitle === "Macro Management";
  const isScheduling = sectionTitle === "Scheduling";
  const isEventTrigger = sectionTitle === "Event Trigger";
  const isScenarioManagement = sectionTitle === "Scenario Management";
  const isDriverLibrary = sectionTitle === "Driver Library";
  const isDisplay = sectionTitle === "Pad Display Setting";
  const isNetwork = sectionTitle === "Network";
  const isAdmin = sectionTitle === "Admin";
  const isDeveloperTool = sectionTitle === "Developer Tool";
  homeDashboard.classList.toggle("is-hidden", !isHome);
  contentPlaceholder.classList.toggle(
    "is-hidden",
    isHome ||
      isDeviceIntegration ||
      isCommandManagement ||
      isMacroManagement ||
      isScheduling ||
      isEventTrigger ||
      isScenarioManagement ||
      isDriverLibrary ||
      isDisplay ||
      isNetwork
  );
  deviceIntegrationPanel.classList.toggle("is-hidden", !isDeviceIntegration);
  commandPanel.classList.toggle("is-hidden", !isCommandManagement);
  macroPanel.classList.toggle("is-hidden", !isMacroManagement);
  automationPanel.classList.toggle("is-hidden", !isScheduling);
  eventTriggerPanel.classList.toggle("is-hidden", !isEventTrigger);
  scenarioPanel.classList.toggle("is-hidden", !isScenarioManagement);
  driverLibraryPanel.classList.toggle("is-hidden", !isDriverLibrary);
  contentPlaceholder.classList.toggle(
    "is-hidden",
    isHome ||
      isDeviceIntegration ||
      isCommandManagement ||
      isMacroManagement ||
      isScheduling ||
      isEventTrigger ||
      isScenarioManagement ||
      isDriverLibrary ||
      isDisplay ||
      isNetwork ||
      isAdmin ||
      isDeveloperTool
  );
  displayPanel.classList.toggle("is-hidden", !isDisplay);
  networkPanel.classList.toggle("is-hidden", !isNetwork);
  adminPanel.classList.toggle("is-hidden", !isAdmin);
  developerToolsPanel.classList.toggle("is-hidden", !isDeveloperTool);

  if (isDeviceIntegration) {
    renderDeviceIntegration();
    return;
  }

  if (isCommandManagement) {
    renderCommandManagement();
    return;
  }

  if (isMacroManagement) {
    renderMacroManagement();
    if (state.macroEditorMode === "editor") {
      openMacroEditor(state.editingMacroId);
    } else {
      openMacroListView();
    }
    return;
  }

  if (isScheduling) {
    if (typeof window.renderAutomationModule === "function") {
      window.renderAutomationModule(sectionTitle);
    }
    return;
  }

  if (isEventTrigger) {
    renderEventTrigger();
    return;
  }

  if (isScenarioManagement) {
    if (typeof window.renderScenarioModule === "function") {
      window.renderScenarioModule();
    }
    return;
  }

  if (isDriverLibrary) {
    renderDriverLibrary();
    return;
  }

  if (isDisplay) {
    renderDisplayPanel();
    return;
  }

  if (isNetwork) {
    renderNetworkPanel();
    return;
  }

  if (isAdmin) {
    renderAdminPanel();
    return;
  }

  if (isDeveloperTool) {
    renderDeveloperTools();
    return;
  }

  if (!isHome) {
    placeholderText.textContent = `${sectionTitle} content area reserved for future modules.`;
  }
}

function getDiscoveryById(discoveryId) {
  return discoveryMockDevices.find((device) => device.id === discoveryId) || null;
}

function appendDebugConsoleLine(kind, text) {
  state.developerTools.consoleLines.push({ kind, text });
}

function ensureDebugConsoleInitialized() {
  if (state.developerTools.consoleInitialized) {
    return;
  }

  appendDebugConsoleLine("system", "CYP Debug Console ready.");
  appendDebugConsoleLine("system", "Use '?' to list available mock commands.");
  state.developerTools.consoleInitialized = true;
}

function renderDebugConsole() {
  if (!debugConsoleOutput || !debugConsoleHint) {
    return;
  }

  ensureDebugConsoleInitialized();
  debugConsoleHint.textContent = "Type ? for supported commands";
  debugConsoleOutput.innerHTML = state.developerTools.consoleLines
    .map((line) => `
      <div class="debug-console-line debug-console-line--${escapeHtml(line.kind)}">
        <span class="debug-console-line__label">${escapeHtml(line.kind.toUpperCase())}</span>
        <span class="debug-console-line__text">${escapeHtml(line.text)}</span>
      </div>
    `)
    .join("");
  debugConsoleOutput.scrollTop = debugConsoleOutput.scrollHeight;
}

function getDebugConsoleResponse(command) {
  const normalized = command.trim().toLowerCase();

  if (normalized === "?") {
    return debugConsoleHelpCommands.map((item, index) => `${index + 1}. ${item}`);
  }

  const responseMap = {
    "projector.power on": "ACK: Main projector power-on command queued successfully.",
    "projector.power off": "ACK: Main projector shutdown command queued successfully.",
    "display.input hdmi1": "ACK: Display input switched to HDMI 1.",
    "display.input hdmi2": "ACK: Display input switched to HDMI 2.",
    "audio.volume up": "ACK: Audio DSP volume increased by 2 steps.",
    "audio.volume down": "ACK: Audio DSP volume decreased by 2 steps.",
    "audio.mute on": "ACK: Audio DSP mute enabled.",
    "audio.mute off": "ACK: Audio DSP mute disabled.",
    "camera.preset 1": "ACK: PTZ camera recalled preset 1.",
    "system.status": "STATUS: 10 devices reachable, Ethernet active, control engine online.",
  };

  if (responseMap[normalized]) {
    return [responseMap[normalized]];
  }

  return [`ERROR: Unknown command "${command}". Type ? for supported commands.`];
}

function submitDebugConsoleCommand(rawCommand) {
  const command = rawCommand.trim();

  if (!command) {
    return;
  }

  appendDebugConsoleLine("input", `> ${command}`);
  getDebugConsoleResponse(command).forEach((line) => {
    appendDebugConsoleLine(line.startsWith("ERROR:") ? "error" : "system", line);
  });
  renderDebugConsole();
}

function renderDeveloperTools() {
  if (
    !discoveryTableBody ||
    !discoverySummary ||
    !startDiscoveryButton ||
    !developerDiscoveryView ||
    !developerConsoleView ||
    !developerToolDiscoveryTab ||
    !developerToolConsoleTab
  ) {
    return;
  }

  const discoveryState = state.developerTools;
  const isDiscoveryView = discoveryState.activeView === "discovery";
  developerDiscoveryView.classList.toggle("is-hidden", !isDiscoveryView);
  developerConsoleView.classList.toggle("is-hidden", isDiscoveryView);
  developerToolDiscoveryTab.classList.toggle("is-active", isDiscoveryView);
  developerToolConsoleTab.classList.toggle("is-active", !isDiscoveryView);
  developerToolDiscoveryTab.setAttribute("aria-selected", String(isDiscoveryView));
  developerToolConsoleTab.setAttribute("aria-selected", String(!isDiscoveryView));
  startDiscoveryButton.disabled = discoveryState.isScanning;
  startDiscoveryButton.textContent = discoveryState.isScanning ? "Scanning..." : "Start Discovery";

  if (!isDiscoveryView) {
    renderDebugConsole();
  }

  if (!discoveryState.hasScanned) {
    discoverySummary.textContent = "No devices discovered";
    discoveryTableBody.innerHTML = `
      <tr>
        <td class="command-empty discovery-empty" colspan="4">
          <p>Press Start Discovery to search for devices on the network.</p>
        </td>
      </tr>
    `;
    return;
  }

  discoverySummary.textContent = `${discoveryState.results.length} device${discoveryState.results.length === 1 ? "" : "s"} found`;

  if (!discoveryState.results.length) {
    discoveryTableBody.innerHTML = `
      <tr>
        <td class="command-empty discovery-empty" colspan="4">
          <p>No devices found in the last discovery pass.</p>
        </td>
      </tr>
    `;
    return;
  }

  discoveryTableBody.innerHTML = discoveryState.results
    .map((device) => `
      <tr class="discovery-row" data-discovery-id="${device.id}" tabindex="0">
        <td>
          <div class="command-name">
            <strong>${escapeHtml(device.modelName)}</strong>
            <span>${escapeHtml(device.vendor)} · ${escapeHtml(device.type)}</span>
          </div>
        </td>
        <td><div class="command-data">${escapeHtml(device.description)}</div></td>
        <td><span class="command-id">${escapeHtml(device.ip)}</span></td>
        <td><span class="command-id">${escapeHtml(device.mac)}</span></td>
      </tr>
    `)
    .join("");
}

function startDeviceDiscovery() {
  if (state.developerTools.isScanning) {
    return;
  }

  state.developerTools.isScanning = true;
  state.developerTools.hasScanned = true;
  state.developerTools.results = [];
  renderDeveloperTools();

  window.setTimeout(() => {
    state.developerTools.isScanning = false;
    state.developerTools.results = discoveryMockDevices.map((device) => ({ ...device }));
    renderDeveloperTools();
    showToast(`Device discovery complete. ${state.developerTools.results.length} devices found.`);
  }, 900);
}

function switchDeveloperToolView(nextView) {
  state.developerTools.activeView = nextView === "console" ? "console" : "discovery";
  renderDeveloperTools();

  if (state.developerTools.activeView === "console" && debugConsoleInput) {
    debugConsoleInput.focus();
  }
}

function openDiscoveryDetail(discoveryId) {
  const device = getDiscoveryById(discoveryId);

  if (!device || !discoveryDetailHeader || !discoveryDetailContent || !discoveryDetailModal) {
    return;
  }

  state.developerTools.selectedDiscoveryId = device.id;
  discoveryDetailHeader.innerHTML = `
    <span class="panel-card__eyebrow">${escapeHtml(device.id)}</span>
    <h3>${escapeHtml(device.modelName)}</h3>
    <p>${escapeHtml(device.description)}</p>
  `;
  discoveryDetailContent.innerHTML = `
    <div class="info-grid">
      <article class="info-item">
        <span class="info-item__label">Vendor</span>
        <strong class="info-item__value">${escapeHtml(device.vendor)}</strong>
      </article>
      <article class="info-item">
        <span class="info-item__label">Device Type</span>
        <strong class="info-item__value">${escapeHtml(device.type)}</strong>
      </article>
      <article class="info-item">
        <span class="info-item__label">IP Address</span>
        <strong class="info-item__value">${escapeHtml(device.ip)}</strong>
      </article>
      <article class="info-item">
        <span class="info-item__label">MAC Address</span>
        <strong class="info-item__value">${escapeHtml(device.mac)}</strong>
      </article>
      <article class="info-item">
        <span class="info-item__label">Protocol</span>
        <strong class="info-item__value">${escapeHtml(device.protocol)}</strong>
      </article>
      <article class="info-item">
        <span class="info-item__label">Firmware</span>
        <strong class="info-item__value">${escapeHtml(device.firmware)}</strong>
      </article>
      <article class="info-item">
        <span class="info-item__label">Location</span>
        <strong class="info-item__value">${escapeHtml(device.location)}</strong>
      </article>
      <article class="info-item">
        <span class="info-item__label">Serial Number</span>
        <strong class="info-item__value">${escapeHtml(device.serialNumber)}</strong>
      </article>
    </div>
    <section class="panel-card discovery-detail-notes">
      <div class="panel-card__header">
        <div>
          <span class="panel-card__eyebrow">Discovery Notes</span>
          <h3>Integrator Notes</h3>
        </div>
      </div>
      <p>${escapeHtml(device.notes)}</p>
    </section>
  `;

  openModal(discoveryDetailModal);
}

function getEventTriggerById(triggerId) {
  return (state.eventTriggers || []).find((trigger) => trigger.id === triggerId) || null;
}

function getEventTriggerActionLabel(trigger) {
  const sourceList = trigger.actionType === "Macro" ? state.macros : state.commands;
  const boundItem = sourceList.find((item) => item.id === trigger.boundId);
  return `${trigger.actionType} · ${boundItem?.name || "Unassigned"}`;
}

function generateEventTriggerId() {
  const nextNumber = (state.eventTriggers || []).reduce((maxValue, trigger) => {
    const matched = String(trigger.id || "").match(/(\d+)$/);
    return Math.max(maxValue, matched ? Number(matched[1]) : 0);
  }, 0) + 1;

  return `TRG-${String(nextNumber).padStart(3, "0")}`;
}

function getEmptyEventTriggerDraft() {
  return {
    id: "",
    name: "",
    description: "",
    sourceCategory: "External",
    interfaceType: "HTTP",
    matchMode: "exact",
    pattern: "",
    actionType: "Command",
    boundId: "",
    status: "Enabled",
    cooldown: "10",
    retryCount: "0",
    allowDuplicate: false,
    logEnabled: true,
    samplePayload: "",
    lastTriggeredAt: "Never",
  };
}

function cloneEventTriggerDraft(trigger) {
  return {
    id: trigger.id,
    name: trigger.name,
    description: trigger.description,
    sourceCategory: trigger.sourceCategory,
    interfaceType: trigger.interfaceType,
    matchMode: trigger.matchMode,
    pattern: trigger.pattern,
    actionType: trigger.actionType,
    boundId: trigger.boundId,
    status: trigger.status,
    cooldown: trigger.cooldown,
    retryCount: trigger.retryCount,
    allowDuplicate: Boolean(trigger.allowDuplicate),
    logEnabled: trigger.logEnabled !== false,
    samplePayload: trigger.samplePayload || "",
    lastTriggeredAt: trigger.lastTriggeredAt || "Never",
  };
}

function ensureEventTriggerDraftBinding(triggerDraft) {
  const sourceList = triggerDraft.actionType === "Macro" ? state.macros : state.commands;

  if (!sourceList.some((item) => item.id === triggerDraft.boundId)) {
    triggerDraft.boundId = sourceList[0]?.id || "";
  }
}

function openEventTriggerEditor(triggerId = "") {
  const trigger = triggerId ? getEventTriggerById(triggerId) : null;
  state.eventTrigger.view = "editor";
  state.eventTrigger.editingId = trigger?.id || "";
  state.eventTrigger.draft = trigger ? cloneEventTriggerDraft(trigger) : getEmptyEventTriggerDraft();
  ensureEventTriggerDraftBinding(state.eventTrigger.draft);
  renderEventTrigger();
}

function closeEventTriggerEditor() {
  state.eventTrigger.view = "list";
  state.eventTrigger.editingId = "";
  state.eventTrigger.draft = null;
  renderEventTrigger();
}

function deleteEventTrigger(triggerId) {
  const trigger = getEventTriggerById(triggerId);

  if (!trigger) {
    return;
  }

  state.eventTriggers = state.eventTriggers.filter((item) => item.id !== triggerId);
  state.eventTrigger.logs = state.eventTrigger.logs.filter((log) => log.triggerId !== triggerId);
  renderEventTrigger();
  showToast(`${trigger.name} deleted.`);
}

function toggleEventTriggerStatus(triggerId) {
  state.eventTriggers = state.eventTriggers.map((trigger) =>
    trigger.id === triggerId
      ? { ...trigger, status: trigger.status === "Enabled" ? "Disabled" : "Enabled" }
      : trigger
  );
  renderEventTrigger();
}

function getEventTriggerMatchSummary(trigger) {
  const matchLabels = {
    exact: "Exact Match",
    keyword: "Keyword Match",
    prefix: "Prefix Match",
    parameter: "Parameter Match",
  };

  return `${matchLabels[trigger.matchMode] || trigger.matchMode} · ${trigger.pattern || "No pattern"}`;
}

function validateEventTriggerDraft(draft) {
  if (!draft.name.trim()) {
    showToast("Please enter a trigger name.");
    return false;
  }

  if (!draft.pattern.trim()) {
    showToast("Please enter an event pattern.");
    return false;
  }

  if (!draft.boundId) {
    showToast(`Please choose a ${draft.actionType}.`);
    return false;
  }

  return true;
}

function saveEventTriggerDraft() {
  const draft = state.eventTrigger.draft;

  if (!draft || !validateEventTriggerDraft(draft)) {
    return;
  }

  const nextTrigger = {
    ...draft,
    id: draft.id || generateEventTriggerId(),
    name: draft.name.trim(),
    description: draft.description.trim(),
    pattern: draft.pattern.trim(),
    samplePayload: draft.samplePayload.trim(),
  };

  if (draft.id) {
    state.eventTriggers = state.eventTriggers.map((trigger) => (trigger.id === draft.id ? nextTrigger : trigger));
    showToast(`${nextTrigger.name} updated.`);
  } else {
    state.eventTriggers.unshift(nextTrigger);
    showToast(`${nextTrigger.name} created.`);
  }

  closeEventTriggerEditor();
}

function evaluateEventTrigger(trigger, payload) {
  const normalizedPayload = String(payload || "");
  const normalizedSource = normalizedPayload.toLowerCase();
  const normalizedPattern = String(trigger.pattern || "").toLowerCase();
  let matched = false;

  if (trigger.matchMode === "exact") {
    matched = normalizedSource.trim() === normalizedPattern.trim();
  } else if (trigger.matchMode === "keyword") {
    matched = normalizedSource.includes(normalizedPattern);
  } else if (trigger.matchMode === "prefix") {
    matched = normalizedSource.trim().startsWith(normalizedPattern);
  } else if (trigger.matchMode === "parameter") {
    const [key, value] = normalizedPattern.split("=");
    matched = key && value ? normalizedSource.includes(`${key.trim()}=${value.trim()}`) : false;
  }

  const actionLabel = getEventTriggerActionLabel(trigger);
  return {
    matched,
    actionLabel,
    message: matched
      ? `Payload matched trigger condition. ${actionLabel} will be executed.`
      : "Payload did not match the configured trigger condition.",
  };
}

function addEventTriggerLog(trigger, payload, resultText) {
  state.eventTrigger.logs.unshift({
    id: `EVTLOG-${String(state.eventTrigger.logs.length + 1).padStart(3, "0")}`,
    triggerId: trigger.id,
    triggerName: trigger.name,
    source: `${trigger.interfaceType} / ${trigger.sourceCategory}`,
    payload,
    actionLabel: getEventTriggerActionLabel(trigger),
    result: resultText,
    timestamp: new Date().toLocaleString("sv-SE").replace("T", " ").slice(0, 16),
  });

  state.eventTrigger.logs = state.eventTrigger.logs.slice(0, 12);
}

function openEventTriggerTestModal(triggerId) {
  const trigger = getEventTriggerById(triggerId);

  if (!trigger || !eventTriggerTestModal || !eventTriggerTestHeader || !eventTriggerTestPayload || !eventTriggerTestResult) {
    return;
  }

  state.eventTrigger.pendingTestId = trigger.id;
  eventTriggerTestHeader.innerHTML = `
    <span class="panel-card__eyebrow">${escapeHtml(trigger.id)}</span>
    <h3>${escapeHtml(trigger.name)}</h3>
    <p>${escapeHtml(trigger.description || "No description")}</p>
  `;
  eventTriggerTestPayload.value = trigger.samplePayload || "";
  eventTriggerTestResult.innerHTML = `
    <p>Run a test to validate the payload against <strong>${escapeHtml(getEventTriggerMatchSummary(trigger))}</strong>.</p>
  `;
  openModal(eventTriggerTestModal);
}

function runEventTriggerTest() {
  const trigger = getEventTriggerById(state.eventTrigger.pendingTestId);

  if (!trigger || !eventTriggerTestPayload || !eventTriggerTestResult) {
    return;
  }

  const payload = eventTriggerTestPayload.value.trim();
  const evaluation = evaluateEventTrigger(trigger, payload);
  const timestamp = new Date().toLocaleString("sv-SE").replace("T", " ").slice(0, 16);

  if (evaluation.matched) {
    trigger.lastTriggeredAt = timestamp;
  }

  const resultText = evaluation.matched ? "Matched and executed successfully" : "No action executed";

  if (trigger.logEnabled) {
    addEventTriggerLog(trigger, payload, resultText);
  }

  eventTriggerTestResult.innerHTML = `
    <div class="info-grid">
      <article class="info-item">
        <span class="info-item__label">Match Result</span>
        <strong class="info-item__value">${evaluation.matched ? "Matched" : "Not Matched"}</strong>
      </article>
      <article class="info-item">
        <span class="info-item__label">Action</span>
        <strong class="info-item__value">${escapeHtml(evaluation.actionLabel)}</strong>
      </article>
      <article class="info-item">
        <span class="info-item__label">Match Rule</span>
        <strong class="info-item__value">${escapeHtml(getEventTriggerMatchSummary(trigger))}</strong>
      </article>
      <article class="info-item">
        <span class="info-item__label">Executed At</span>
        <strong class="info-item__value">${escapeHtml(timestamp)}</strong>
      </article>
    </div>
    <p>${escapeHtml(evaluation.message)}</p>
  `;

  renderEventTrigger();
  showToast(evaluation.matched ? `Trigger test passed: ${trigger.name}` : `Trigger test did not match: ${trigger.name}`);
}

function renderEventTriggerList() {
  const triggerRows = (state.eventTriggers || [])
    .map((trigger) => `
      <tr>
        <td>
          <div class="command-name">
            <strong>${escapeHtml(trigger.name)}</strong>
            <span>${escapeHtml(trigger.id)} · ${escapeHtml(trigger.description || "No description")}</span>
          </div>
        </td>
        <td><span class="command-pill">${escapeHtml(trigger.sourceCategory)}</span></td>
        <td>${escapeHtml(trigger.interfaceType)}</td>
        <td><div class="command-data">${escapeHtml(getEventTriggerMatchSummary(trigger))}</div></td>
        <td>${escapeHtml(getEventTriggerActionLabel(trigger))}</td>
        <td><span class="event-trigger-status is-${trigger.status.toLowerCase()}">${escapeHtml(trigger.status)}</span></td>
        <td>${escapeHtml(trigger.lastTriggeredAt || "Never")}</td>
        <td>
          <div class="command-actions">
            <button class="command-action-btn" type="button" data-event-trigger-action="edit" data-event-trigger-id="${trigger.id}" aria-label="Edit trigger" title="Edit">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 20h4l10-10-4-4L4 16v4Zm13-13 2 2M4 20h16" /></svg>
            </button>
            <button class="command-action-btn" type="button" data-event-trigger-action="test" data-event-trigger-id="${trigger.id}" aria-label="Test trigger" title="Test">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m8 6 10 6-10 6zM5 5v14" /></svg>
            </button>
            <button class="command-action-btn" type="button" data-event-trigger-action="toggle" data-event-trigger-id="${trigger.id}" aria-label="Enable or disable trigger" title="Enable / Disable">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 12h10M12 7l5 5-5 5" /></svg>
            </button>
            <button class="command-action-btn command-action-btn--danger" type="button" data-event-trigger-action="delete" data-event-trigger-id="${trigger.id}" aria-label="Delete trigger" title="Delete">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 7h14M9 7V4h6v3M8 10v7M12 10v7M16 10v7M7 7l1 13h8l1-13" /></svg>
            </button>
          </div>
        </td>
      </tr>
    `)
    .join("");

  return `
    <div class="event-trigger-shell">
      <div class="command-hero">
        <div class="command-hero__copy">
          <span class="panel-card__eyebrow">Control Automation</span>
          <h2 id="eventTriggerPanelTitle">Event Trigger</h2>
          <p>Receive internal or external events and trigger commands or macros based on matching rules.</p>
        </div>
        <button class="modal-btn modal-btn--primary" type="button" data-event-trigger-toolbar="create">Create Trigger</button>
      </div>

      <div class="event-trigger-layout">
        <section class="panel-card command-card">
          <div class="panel-card__header">
            <div>
              <span class="panel-card__eyebrow">Trigger List</span>
              <h3>Event Trigger List</h3>
            </div>
            <div class="command-summary">${state.eventTriggers.length} triggers</div>
          </div>
          <div class="command-table-wrap">
            <table class="command-table event-trigger-table">
              <thead>
                <tr>
                  <th>Trigger Name</th>
                  <th>Source</th>
                  <th>Interface</th>
                  <th>Match Rule</th>
                  <th>Bound Action</th>
                  <th>Status</th>
                  <th>Last Trigger Time</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                ${triggerRows || `
                  <tr>
                    <td class="command-empty" colspan="8"><p>No triggers yet.</p></td>
                  </tr>
                `}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  `;
}

function renderEventTriggerEditor() {
  const draft = state.eventTrigger.draft || getEmptyEventTriggerDraft();
  ensureEventTriggerDraftBinding(draft);
  const boundOptions = (draft.actionType === "Macro" ? state.macros : state.commands)
    .map((item) => `<option value="${item.id}" ${draft.boundId === item.id ? "selected" : ""}>${escapeHtml(item.name)}</option>`)
    .join("");

  return `
    <div class="event-trigger-shell">
      <div class="command-hero">
        <div class="command-hero__copy">
          <button class="modal-btn modal-btn--ghost" type="button" data-event-trigger-toolbar="back">Back</button>
          <span class="panel-card__eyebrow">Control Automation</span>
          <h2 id="eventTriggerPanelTitle">${draft.id ? "Edit Trigger" : "Create Trigger"}</h2>
          <p>Define the source, matching rule, and command or macro action for this trigger.</p>
        </div>
        <div class="macro-editor-topbar__actions">
          <button class="modal-btn modal-btn--ghost" type="button" data-event-trigger-toolbar="test-draft">Test Trigger</button>
          <button class="modal-btn modal-btn--primary" type="button" data-event-trigger-toolbar="save">Save Trigger</button>
        </div>
      </div>

      <div class="automation-form-shell">
        <section class="panel-card automation-form-main">
          <div class="panel-card__header">
            <div>
              <span class="panel-card__eyebrow">Trigger Definition</span>
              <h3>Trigger Setup</h3>
            </div>
          </div>
          <div class="network-form-grid">
            <label class="form-field">
              <span>Trigger Name</span>
              <input type="text" data-event-trigger-field="name" value="${escapeHtml(draft.name)}" />
            </label>
            <label class="form-field">
              <span>Status</span>
              <select data-event-trigger-field="status">
                <option value="Enabled" ${draft.status === "Enabled" ? "selected" : ""}>Enabled</option>
                <option value="Disabled" ${draft.status === "Disabled" ? "selected" : ""}>Disabled</option>
              </select>
            </label>
            <label class="form-field form-field--full">
              <span>Description</span>
              <textarea rows="3" data-event-trigger-field="description">${escapeHtml(draft.description)}</textarea>
            </label>
            <label class="form-field">
              <span>Source Category</span>
              <select data-event-trigger-field="sourceCategory">
                <option value="Internal" ${draft.sourceCategory === "Internal" ? "selected" : ""}>Internal</option>
                <option value="External" ${draft.sourceCategory === "External" ? "selected" : ""}>External</option>
              </select>
            </label>
            <label class="form-field">
              <span>Interface</span>
              <select data-event-trigger-field="interfaceType">
                <option value="System Event" ${draft.interfaceType === "System Event" ? "selected" : ""}>System Event</option>
                <option value="Schedule Event" ${draft.interfaceType === "Schedule Event" ? "selected" : ""}>Schedule Event</option>
                <option value="UI Event" ${draft.interfaceType === "UI Event" ? "selected" : ""}>UI Event</option>
                <option value="HTTP" ${draft.interfaceType === "HTTP" ? "selected" : ""}>HTTP</option>
                <option value="TCP" ${draft.interfaceType === "TCP" ? "selected" : ""}>TCP</option>
                <option value="Telnet" ${draft.interfaceType === "Telnet" ? "selected" : ""}>Telnet</option>
                <option value="RS-232" ${draft.interfaceType === "RS-232" ? "selected" : ""}>RS-232</option>
              </select>
            </label>
            <label class="form-field">
              <span>Match Mode</span>
              <select data-event-trigger-field="matchMode">
                <option value="exact" ${draft.matchMode === "exact" ? "selected" : ""}>Exact Match</option>
                <option value="keyword" ${draft.matchMode === "keyword" ? "selected" : ""}>Keyword Match</option>
                <option value="prefix" ${draft.matchMode === "prefix" ? "selected" : ""}>Prefix Match</option>
                <option value="parameter" ${draft.matchMode === "parameter" ? "selected" : ""}>Parameter Match</option>
              </select>
            </label>
            <label class="form-field form-field--full">
              <span>Event Pattern</span>
              <input type="text" data-event-trigger-field="pattern" value="${escapeHtml(draft.pattern)}" placeholder="Example: occupancy=occupied" />
            </label>
            <label class="form-field">
              <span>Action Type</span>
              <select data-event-trigger-field="actionType">
                <option value="Command" ${draft.actionType === "Command" ? "selected" : ""}>Command</option>
                <option value="Macro" ${draft.actionType === "Macro" ? "selected" : ""}>Macro</option>
              </select>
            </label>
            <label class="form-field">
              <span>Bound ${escapeHtml(draft.actionType)}</span>
              <select data-event-trigger-field="boundId">
                ${boundOptions}
              </select>
            </label>
            <label class="form-field">
              <span>Cooldown (sec)</span>
              <input type="number" min="0" data-event-trigger-field="cooldown" value="${escapeHtml(draft.cooldown)}" />
            </label>
            <label class="form-field">
              <span>Retry Count</span>
              <input type="number" min="0" data-event-trigger-field="retryCount" value="${escapeHtml(draft.retryCount)}" />
            </label>
            <label class="form-field form-field--full">
              <span>Sample Payload</span>
              <textarea rows="4" data-event-trigger-field="samplePayload">${escapeHtml(draft.samplePayload)}</textarea>
            </label>
          </div>
          <div class="event-trigger-inline-options">
            <label class="checkbox-field">
              <input type="checkbox" data-event-trigger-flag="allowDuplicate" ${draft.allowDuplicate ? "checked" : ""} />
              <span>Allow duplicate trigger execution</span>
            </label>
            <label class="checkbox-field">
              <input type="checkbox" data-event-trigger-flag="logEnabled" ${draft.logEnabled ? "checked" : ""} />
              <span>Record trigger log</span>
            </label>
          </div>
        </section>

        <aside class="panel-card automation-preview-panel">
          <div class="panel-card__header">
            <div>
              <span class="panel-card__eyebrow">Preview</span>
              <h3>Execution Preview</h3>
            </div>
          </div>
          <div class="automation-preview-stack">
            <div class="automation-preview-card">
              <span>Source</span>
              <strong>${escapeHtml(draft.sourceCategory)} · ${escapeHtml(draft.interfaceType)}</strong>
            </div>
            <div class="automation-preview-card">
              <span>Match Rule</span>
              <strong>${escapeHtml(getEventTriggerMatchSummary(draft))}</strong>
            </div>
            <div class="automation-preview-card">
              <span>Action</span>
              <strong>${escapeHtml(getEventTriggerActionLabel(draft))}</strong>
            </div>
            <div class="automation-preview-card">
              <span>Scenario Example</span>
              <strong>${escapeHtml(draft.samplePayload || "Use the sample payload to test this trigger.")}</strong>
            </div>
          </div>
        </aside>
      </div>
    </div>
  `;
}

function renderEventTrigger() {
  if (!eventTriggerContent) {
    return;
  }

  eventTriggerContent.innerHTML = state.eventTrigger.view === "editor"
    ? renderEventTriggerEditor()
    : renderEventTriggerList();
}

function renderCommandManagement() {
  if (!commandTableBody || !commandSummary || !commandPagination) {
    return;
  }

  normalizeCommandPage();
  commandSummary.textContent = `${state.commands.length} command${state.commands.length === 1 ? "" : "s"}`;

  if (!state.commands.length) {
    commandTableBody.innerHTML = `
      <tr>
        <td class="command-empty" colspan="6">
          <p>No commands yet. Use Create to add the first command.</p>
        </td>
      </tr>
    `;
    commandPagination.innerHTML = "";
    return;
  }

  const pageSize = 15;
  const pageStart = (state.commandPage - 1) * pageSize;
  const currentPageCommands = state.commands.slice(pageStart, pageStart + pageSize);

  commandTableBody.innerHTML = currentPageCommands
    .map((command, index) => {
      const preview = command.data.length > 72 ? `${command.data.slice(0, 72)}...` : command.data;
      const commandIndex = pageStart + index;
      const stateUpdateSummary = command.stateUpdate?.enabled
        ? `Updates ${command.stateUpdate.parameter} (${command.stateUpdate.valueType})`
        : "No state update";

      return `
        <tr>
          <td><span class="command-id">${escapeHtml(command.id)}</span></td>
          <td>
            <div class="command-name">
              <strong>${escapeHtml(command.name)}</strong>
              <span>Command #${commandIndex + 1} · ${escapeHtml(stateUpdateSummary)}</span>
            </div>
          </td>
          <td><span class="command-pill">${escapeHtml(command.interface)}</span></td>
          <td><div class="command-data">${escapeHtml(preview).replace(/\n/g, "<br />")}</div></td>
          <td>${escapeHtml(command.device)}</td>
          <td>
            <div class="command-actions">
              <button class="command-action-btn" type="button" data-command-action="edit" data-command-index="${commandIndex}" aria-label="Edit command" title="Edit">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M4 20h4l10-10-4-4L4 16v4Zm13-13 2 2M4 20h16" />
                </svg>
              </button>
              <button class="command-action-btn" type="button" data-command-action="copy" data-command-index="${commandIndex}" aria-label="Copy command" title="Copy">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M9 9h10v11H9zM5 4h10v11" />
                </svg>
              </button>
              <button class="command-action-btn command-action-btn--danger" type="button" data-command-action="delete" data-command-index="${commandIndex}" aria-label="Delete command" title="Delete">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5 7h14M9 7V4h6v3M8 10v7M12 10v7M16 10v7M7 7l1 13h8l1-13" />
                </svg>
              </button>
              <button class="command-action-btn" type="button" data-command-action="test" data-command-index="${commandIndex}" aria-label="Test run command" title="Test Run">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="m8 6 10 6-10 6zM5 5v14" />
                </svg>
              </button>
            </div>
          </td>
        </tr>
      `;
    })
    .join("");

  const pageCount = getCommandPageCount();
  const pageButtons = Array.from({ length: pageCount }, (_, index) => {
    const pageNumber = index + 1;

    return `
      <button
        class="command-page-btn ${pageNumber === state.commandPage ? "is-active" : ""}"
        type="button"
        data-command-page="${pageNumber}"
      >
        ${pageNumber}
      </button>
    `;
  }).join("");

  commandPagination.innerHTML = `
    <button class="command-page-btn" type="button" data-command-page-nav="prev" ${state.commandPage === 1 ? "disabled" : ""}>
      Prev
    </button>
    ${pageButtons}
    <button class="command-page-btn" type="button" data-command-page-nav="next" ${state.commandPage === pageCount ? "disabled" : ""}>
      Next
    </button>
  `;
}

function openCommandEditor(mode, commandIndex = null) {
  const isEditMode = mode === "edit";
  const command = isEditMode && commandIndex !== null ? state.commands[commandIndex] : null;

  commandEditorTitle.textContent = isEditMode ? "Edit Command" : "Create Command";
  commandEditIndex.value = commandIndex !== null ? String(commandIndex) : "";
  commandNameInput.value = command?.name || "";
  commandInterfaceSelect.value = command?.interface || "System";
  commandDeviceSelect.value = command?.device || "Main Display";
  commandTelnetIpInput.value = command?.telnetIp || "";
  commandTelnetPortInput.value = command?.telnetPort || "";
  commandDataInput.value = command?.data || "";
  applyCommandStateUpdateToForm(command?.stateUpdate || null);
  syncCommandEditorInterfaceFields();

  openModal(commandEditorModal);
  commandNameInput.focus();
}

function duplicateCommand(commandIndex) {
  const command = state.commands[commandIndex];

  if (!command) {
    return;
  }

  state.commands.splice(commandIndex + 1, 0, {
    ...command,
    id: generateCommandId(),
    name: `${command.name} Copy`,
  });
  renderCommandManagement();
  showToast(`${command.name} copied.`);
}

function deleteCommand(commandIndex) {
  const command = state.commands[commandIndex];

  if (!command) {
    return;
  }

  state.commands.splice(commandIndex, 1);
  normalizeCommandPage();
  renderCommandManagement();
  showToast(`${command.name} deleted.`);
}

function testRunCommand(commandIndex) {
  const command = state.commands[commandIndex];

  if (!command) {
    return;
  }

  if (command.stateUpdate?.enabled && command.stateUpdate.parameter) {
    state.runtimeParameters[command.stateUpdate.parameter] = command.stateUpdate.value;
    showToast(`Test run sent to ${command.device} via ${command.interface}. ${command.stateUpdate.parameter} updated.`);
    return;
  }

  showToast(`Test run sent to ${command.device} via ${command.interface}.`);
}

function renderAdminPanel() {
  accessRoleSelect.value = state.admin.accessRole;
  accessRoleSummary.textContent = state.admin.accessRole;
  configImportSummary.textContent = state.admin.importedConfigName || "No file imported";
  firmwareFileInput.value = "";
  firmwareSummary.textContent = state.admin.firmwareMode === "manual" && state.admin.firmwareFileName
    ? `v0.2.6 / Manual ${state.admin.firmwareFileName}`
    : "v0.2.6 / OTA Ready";
}

function triggerDownload(filename, content, type) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function openAdminConfirm(action) {
  state.admin.pendingAction = action;
  adminConfirmActionLabel.textContent = action === "factory-reset" ? "Factory Reset" : "Reboot";
  adminConfirmMessage.textContent = action === "factory-reset"
    ? "This will restore the pad to factory defaults and clear current configuration. Do you want to continue?"
    : "The pad will reboot and temporarily disconnect. Do you want to continue?";
  openModal(adminConfirmModal);
}

function renderDisplayPanel() {
  const display = state.display;

  timeModeInputs.forEach((input) => {
    input.checked = input.value === display.timeMode;
  });

  timeFormatSelect.value = display.timeFormat;
  manualTimeInput.value = display.manualTime;
  manualTimeInput.disabled = display.timeMode !== "manual";
  dateInput.value = display.date;
  themeModeSelect.value = display.themeMode;
  padLanguageSelect.value = display.language;
  displayBrightnessSlider.value = String(display.brightness);
  screenLockToggle.checked = display.screenLock;
  idleMinutesInput.value = String(display.idleMinutes);
  screenSaverContentSelect.value = display.screenSaverContent;
  customImageInput.value = "";
  customImageField.classList.toggle("is-hidden", display.screenSaverContent !== "Custom Image");

  displayBrightnessBadge.textContent = `${display.brightness}%`;
  displayThemeBadge.textContent = `${display.themeMode === "light" ? "Light" : "Dark"} Mode`;
}

function getEthernetProfile() {
  return state.ethernet.mode === "static" ? state.ethernet.static : state.ethernet.dhcp;
}

function getActiveNetworkInfo() {
  if (state.ethernet.connected) {
    return {
      type: "Ethernet",
      badge: "Ethernet Active",
      label: "RJ45 connected",
      meta: state.ethernet.mode.toUpperCase(),
      hint: "Wired connection is online and currently used for system traffic.",
      values: getEthernetProfile(),
      icon: `
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M7 5h10v4H7zM5 11h14v8H5zM9 15h2M13 15h2" />
        </svg>
      `,
    };
  }

  if (state.wifi.enabled && state.wifi.connectedSSID) {
    return {
      type: "Wi-Fi",
      badge: "Wi-Fi Active",
      label: state.wifi.connectedSSID,
      meta: "Wireless connected",
      hint: "Wireless connection is active because wired Ethernet is unavailable.",
      values: {
        ip: "192.168.10.121",
        mask: "255.255.255.0",
        gateway: "192.168.10.1",
        dns: "8.8.8.8, 1.1.1.1",
      },
      icon: `
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M3.5 9.5a13.5 13.5 0 0 1 17 0M6.5 12.5a9.5 9.5 0 0 1 11 0M9.5 15.5a5.5 5.5 0 0 1 5 0M12 19h.01" />
        </svg>
      `,
    };
  }

  return {
    type: "Offline",
    badge: "Offline",
    label: "No active network",
    meta: "Ethernet disconnected / Wi-Fi idle",
    hint: "Turn on Wi-Fi or connect Ethernet to restore management access.",
    values: {
      ip: "--",
      mask: "--",
      gateway: "--",
      dns: "--",
    },
    icon: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 4l16 16M3.5 9.5a13.5 13.5 0 0 1 6.57-3.25M9.5 15.5a5.5 5.5 0 0 1 2.5-.6M20.5 9.5a13.5 13.5 0 0 0-4.08-2.35M17.5 12.5a9.5 9.5 0 0 0-3.24-1.62" />
      </svg>
    `,
  };
}

function getWifiStrengthIcon(strength) {
  const strengths = {
    excellent: "M4 18.5a12.5 12.5 0 0 1 16 0M7 15.5a8.5 8.5 0 0 1 10 0M10 12.5a4.5 4.5 0 0 1 4 0M12 19h.01",
    strong: "M4 18.5a12.5 12.5 0 0 1 16 0M7 15.5a8.5 8.5 0 0 1 10 0M12 19h.01",
    medium: "M4 18.5a12.5 12.5 0 0 1 16 0M12 19h.01",
    weak: "M12 19h.01",
  };

  return strengths[strength] || strengths.medium;
}

function renderWifiList() {
  if (!wifiList) {
    return;
  }

  if (!state.wifi.enabled) {
    wifiList.innerHTML = `
      <button class="wifi-network" type="button" disabled>
        <span class="wifi-network__name">
          <strong>Wi-Fi is turned off</strong>
          <span>Enable Wi-Fi to scan for nearby networks.</span>
        </span>
      </button>
    `;
    wifiAvailabilityMeta.textContent = "Wireless scanning paused.";
    return;
  }

  wifiAvailabilityMeta.textContent = "Tap a secured network to enter password.";
  wifiList.innerHTML = state.wifi.networks
    .map((network) => {
      const isConnected = state.wifi.connectedSSID === network.ssid;
      const securityLabel = network.secure ? "Password required" : "Open network";
      const metaLabel = isConnected ? "Connected" : network.saved ? "Saved network" : securityLabel;

      return `
        <button
          class="wifi-network ${isConnected ? "is-connected" : ""}"
          type="button"
          data-ssid="${network.ssid}"
          data-secure="${String(network.secure)}"
        >
          <span class="wifi-network__identity">
            <span class="wifi-strength is-${network.strength}">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="${getWifiStrengthIcon(network.strength)}" />
              </svg>
            </span>
            <span class="wifi-network__name">
              <strong>${network.ssid}</strong>
              <span>${metaLabel}</span>
            </span>
          </span>
          <span class="wifi-network__meta">
            ${network.secure ? `
              <span class="wifi-lock" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M8 11V8a4 4 0 1 1 8 0v3M6 11h12v9H6z" />
                </svg>
              </span>` : ""}
            ${isConnected ? '<span class="wifi-pill">Connected</span>' : ""}
          </span>
        </button>
      `;
    })
    .join("");
}

function syncEthernetForm() {
  const profile = getEthernetProfile();
  const isStatic = state.ethernet.mode === "static";

  ethernetModeInputs.forEach((input) => {
    input.checked = input.value === state.ethernet.mode;
  });

  ethernetIpInput.value = profile.ip;
  ethernetMaskInput.value = profile.mask;
  ethernetGatewayInput.value = profile.gateway;
  ethernetDnsInput.value = profile.dns;

  [ethernetIpInput, ethernetMaskInput, ethernetGatewayInput, ethernetDnsInput].forEach((input) => {
    input.disabled = !isStatic;
  });
}

function renderNetworkPanel() {
  const active = getActiveNetworkInfo();

  networkStatusBadge.textContent = active.badge;
  networkConnectionLabel.textContent = active.type === "Offline" ? active.label : active.type;
  networkConnectionMeta.textContent = active.type === "Offline" ? active.meta : `${active.label} / ${active.meta}`;
  networkStatusHint.textContent = active.hint;
  networkInfoIp.textContent = active.values.ip;
  networkInfoMask.textContent = active.values.mask;
  networkInfoGateway.textContent = active.values.gateway;
  networkInfoDns.textContent = active.values.dns.replace(/,\s*/g, " / ");
  networkConnectionIcon.innerHTML = active.icon;

  wifiToggle.checked = state.wifi.enabled;
  wifiCurrentSsid.textContent = state.wifi.connectedSSID || "Not connected";
  wifiCurrentMeta.textContent = state.ethernet.connected
    ? "Standby because Ethernet is active"
    : state.wifi.connectedSSID
      ? "Wireless is currently carrying traffic"
      : "No wireless connection";

  syncEthernetForm();
  renderWifiList();
}

function isValidIPv4(value) {
  const trimmed = value.trim();

  if (!trimmed) {
    return false;
  }

  const parts = trimmed.split(".");

  if (parts.length !== 4) {
    return false;
  }

  return parts.every((part) => {
    if (!/^\d+$/.test(part)) {
      return false;
    }

    const number = Number(part);
    return number >= 0 && number <= 255;
  });
}

function isValidDnsList(value) {
  return value
    .split(",")
    .map((entry) => entry.trim())
    .filter(Boolean)
    .every((entry) => isValidIPv4(entry));
}

function openWifiPasswordModal(ssid) {
  state.pendingWifiSSID = ssid;
  wifiPasswordNetworkName.textContent = ssid;
  wifiPasswordInput.value = "";
  openModal(wifiPasswordModal);
  wifiPasswordInput.focus();
}

function connectToWifi(ssid) {
  state.wifi.connectedSSID = ssid;
  renderNetworkPanel();

  if (state.ethernet.connected) {
    showToast(`${ssid} saved. Ethernet remains the active connection.`);
    return;
  }

  showToast(`${ssid} connected successfully.`);
}

function clearNavActive() {
  navItems.forEach((item) => item.classList.remove("is-active"));
  navChildren.forEach((item) => item.classList.remove("is-active"));
  navGroups.forEach((group) => group.classList.remove("is-active"));
}

function setGroupOpen(group, shouldOpen) {
  const children = group.querySelector(".nav__children");
  const parent = group.querySelector(".nav__parent");

  group.classList.toggle("is-open", shouldOpen);
  parent.setAttribute("aria-expanded", String(shouldOpen));
  children.classList.toggle("is-hidden", !shouldOpen);
}

function navigateToSection(title, isHome = false, options = {}) {
  if (typeof window.canLeaveCurrentSection === "function" && !window.canLeaveCurrentSection(title)) {
    return;
  }

  const directItem = Array.from(navItems).find((item) => (item.dataset.title || item.dataset.section) === title);
  const childItem = Array.from(navChildren).find((item) => (item.dataset.title || item.dataset.section) === title);

  clearNavActive();

  if (directItem) {
    directItem.classList.add("is-active");
  }

  if (childItem) {
    const group = childItem.closest(".nav-group");
    childItem.classList.add("is-active");

    if (group) {
      group.classList.add("is-active");
      setGroupOpen(group, true);
    }
  }

  pageTitle.textContent = title;
  updateContentStage(title, isHome);

  if (options.syncRoute !== false && typeof window.syncAppRouteForSection === "function") {
    window.syncAppRouteForSection(title);
  }
}

navToggle.addEventListener("click", () => {
  const collapsed = document.body.classList.toggle("is-collapsed");
  navToggle.setAttribute("aria-expanded", String(!collapsed));

  if (collapsed) {
    navGroups.forEach((group) => setGroupOpen(group, false));
  }
});

navItems.forEach((item) => {
  item.addEventListener("click", (event) => {
    event.preventDefault();
    const title = item.dataset.title || item.dataset.section || "Home";
    navigateToSection(title, title === "Home");
  });
});

navParents.forEach((parent) => {
  parent.addEventListener("click", () => {
    const group = parent.closest(".nav-group");
    const isOpen = group.classList.contains("is-open");

    if (document.body.classList.contains("is-collapsed")) {
      document.body.classList.remove("is-collapsed");
      navToggle.setAttribute("aria-expanded", "true");
    }

    navGroups.forEach((navGroup) => {
      setGroupOpen(navGroup, navGroup === group ? !isOpen : false);
    });
  });
});

navChildren.forEach((child) => {
  child.addEventListener("click", (event) => {
    event.preventDefault();
    const title = child.dataset.title || child.dataset.section || "Home";
    navigateToSection(title, false);
  });
});

padButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const actionName = button.dataset.padAction || "Control";
    const isToggle = button.dataset.toggleTarget === "display";
    const isSelectable = button.dataset.selectable === "true";
    const statusLight = button.querySelector(".pad-button__status");

    if (isToggle) {
      const isSelected = button.classList.toggle("is-selected");
      button.setAttribute("aria-pressed", String(isSelected));

      const buttonName = button.querySelector(".pad-button__name");
      if (buttonName) {
        buttonName.textContent = isSelected ? "Display On" : "Display Off";
      }

      if (statusLight) {
        statusLight.classList.toggle("is-on", isSelected);
      }

      button.classList.add("is-pressed");
      window.setTimeout(() => {
        button.classList.remove("is-pressed");
      }, 180);

      showToast(`Display ${isSelected ? "On" : "Off"} triggered.`);
      return;
    }

    if (isSelectable) {
      const grid = button.closest(".pad-grid");
      const buttonName = button.dataset.padAction || "";
      let selectionGroup = "default";

      if (buttonName.startsWith("Display")) {
        selectionGroup = "display";
      } else if (buttonName.startsWith("Source")) {
        selectionGroup = "source";
      } else if (buttonName.startsWith("Scene")) {
        selectionGroup = "scene";
      }

      grid.querySelectorAll(`[data-selectable="true"]`).forEach((gridButton) => {
        const gridName = gridButton.dataset.padAction || "";
        const gridStatus = gridButton.querySelector(".pad-button__status");
        let gridGroup = "default";

        if (gridName.startsWith("Display")) {
          gridGroup = "display";
        } else if (gridName.startsWith("Source")) {
          gridGroup = "source";
        } else if (gridName.startsWith("Scene")) {
          gridGroup = "scene";
        }

        if (gridGroup === selectionGroup) {
          gridButton.classList.remove("is-selected");

          if (gridStatus && !gridStatus.classList.contains("is-alert")) {
            gridStatus.classList.remove("is-on");
          }
        }
      });

      button.classList.add("is-selected");

      if (statusLight && !statusLight.classList.contains("is-alert")) {
        statusLight.classList.add("is-on");
      }
    }

    button.classList.add("is-pressed");
    window.setTimeout(() => {
      button.classList.remove("is-pressed");
    }, 180);

    showToast(`${actionName} triggered.`);
  });
});

if (lightBrightnessSlider) {
  const lightBrightnessCard = lightBrightnessSlider.closest(".pad-slider-card");
  const lightBrightnessStatus = lightBrightnessCard?.querySelector(".pad-button__status");

  lightBrightnessSlider.addEventListener("input", () => {
    const value = Number(lightBrightnessSlider.value);

    if (lightBrightnessStatus) {
      lightBrightnessStatus.classList.toggle("is-on", value > 0);
    }
  });

  lightBrightnessSlider.addEventListener("change", () => {
    showToast(`Lighting brightness set to ${lightBrightnessSlider.value}%.`);
  });
}

if (displayBrightnessSlider) {
  displayBrightnessSlider.addEventListener("input", () => {
    displayBrightnessBadge.textContent = `${displayBrightnessSlider.value}%`;
  });
}

timeModeInputs.forEach((input) => {
  input.addEventListener("change", () => {
    manualTimeInput.disabled = input.value !== "manual";
  });
});

if (screenSaverContentSelect) {
  screenSaverContentSelect.addEventListener("change", () => {
    customImageField.classList.toggle("is-hidden", screenSaverContentSelect.value !== "Custom Image");
  });
}

if (padPagesViewport && padPagesTrack) {
  padPageDots.forEach((dot) => {
    dot.addEventListener("click", () => {
      updatePadPage(Number(dot.dataset.padPage || 0));
    });
  });

  const beginPadDrag = (clientX) => {
    state.isPadDragging = true;
    state.padDragStartX = clientX;
    state.padDragDeltaX = 0;
    padPagesViewport.classList.add("is-dragging");
  };

  const movePadDrag = (clientX) => {
    if (!state.isPadDragging) {
      return;
    }

    state.padDragDeltaX = clientX - state.padDragStartX;
  };

  const endPadDrag = () => {
    if (!state.isPadDragging) {
      return;
    }

    const threshold = 40;

    if (state.padDragDeltaX <= -threshold) {
      updatePadPage(state.currentPadPage + 1);
    } else if (state.padDragDeltaX >= threshold) {
      updatePadPage(state.currentPadPage - 1);
    } else {
      updatePadPage(state.currentPadPage);
    }

    state.isPadDragging = false;
    state.padDragStartX = 0;
    state.padDragDeltaX = 0;
    padPagesViewport.classList.remove("is-dragging");
  };

  padPagesViewport.addEventListener("pointerdown", (event) => {
    beginPadDrag(event.clientX);
  });

  padPagesViewport.addEventListener("pointermove", (event) => {
    movePadDrag(event.clientX);
  });

  padPagesViewport.addEventListener("pointerup", endPadDrag);
  padPagesViewport.addEventListener("pointercancel", endPadDrag);
  padPagesViewport.addEventListener("pointerleave", endPadDrag);
}

languageSelect.addEventListener("change", () => {
  state.language = languageSelect.value;
  showToast(`Language set to ${languageSelect.options[languageSelect.selectedIndex].text}`);
});

userMenuTrigger.addEventListener("click", () => {
  const isOpen = !userDropdown.classList.contains("is-hidden");
  userDropdown.classList.toggle("is-hidden", isOpen);
  userMenuTrigger.setAttribute("aria-expanded", String(!isOpen));
});

userDropdown.addEventListener("click", (event) => {
  const actionButton = event.target.closest("[data-action]");

  if (!actionButton) {
    return;
  }

  const action = actionButton.dataset.action;
  closeUserMenu();

  if (action === "login") {
    openModal(signinModal);
    return;
  }

  if (action === "open-settings" && state.isLoggedIn) {
    openModal(settingsModal);
    return;
  }

  if (action === "logout") {
    state.isLoggedIn = false;
    signinForm.reset();
    settingsForm.reset();
    renderUserMenu();
    showToast("Signed out successfully.");
  }
});

settingsButton.addEventListener("click", () => {
  if (!state.isLoggedIn) {
    return;
  }

  openModal(settingsModal);
});

signinForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(signinForm);
  const username = String(formData.get("username") || "").trim();
  const password = String(formData.get("password") || "").trim();

  if (!username || !password) {
    showToast("Please enter username and password.");
    return;
  }

  state.isLoggedIn = true;
  renderUserMenu();
  closeModal(signinModal);
  signinForm.reset();
  showToast("Sign in successful.");
});

settingsForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(settingsForm);
  const newPassword = String(formData.get("newPassword") || "");
  const confirmPassword = String(formData.get("confirmPassword") || "");

  if (newPassword !== confirmPassword) {
    showToast("New password and confirmation must match.");
    return;
  }

  closeModal(settingsModal);
  settingsForm.reset();
  showToast("Password updated successfully.");
});

ethernetModeInputs.forEach((input) => {
  input.addEventListener("change", () => {
    state.ethernet.mode = input.value;
    syncEthernetForm();
  });
});

if (ethernetForm) {
  ethernetForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (state.ethernet.mode === "dhcp") {
      showToast("Ethernet set to DHCP.");
      renderNetworkPanel();
      return;
    }

    const formValues = {
      ip: ethernetIpInput.value.trim(),
      mask: ethernetMaskInput.value.trim(),
      gateway: ethernetGatewayInput.value.trim(),
      dns: ethernetDnsInput.value.trim(),
    };

    const hasValidNetworkFields =
      isValidIPv4(formValues.ip) &&
      isValidIPv4(formValues.mask) &&
      isValidIPv4(formValues.gateway) &&
      isValidDnsList(formValues.dns);

    if (!hasValidNetworkFields) {
      showToast("Please enter valid IPv4 values for IP, mask, gateway, and DNS.");
      return;
    }

    state.ethernet.static = formValues;
    renderNetworkPanel();
    showToast("Ethernet static IP settings applied.");
  });
}

if (displayForm) {
  displayForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const selectedTimeMode = Array.from(timeModeInputs).find((input) => input.checked)?.value || "auto";
    const idleMinutes = Number(idleMinutesInput.value);

    if (!dateInput.value) {
      showToast("Please select a date.");
      return;
    }

    if (selectedTimeMode === "manual" && !manualTimeInput.value) {
      showToast("Please enter the current time.");
      return;
    }

    if (!Number.isFinite(idleMinutes) || idleMinutes < 1) {
      showToast("Idle time must be at least 1 minute.");
      return;
    }

    if (screenSaverContentSelect.value === "Custom Image" && !customImageInput.files?.length) {
      showToast("Please choose a local image file.");
      return;
    }

    state.display = {
      timeMode: selectedTimeMode,
      timeFormat: timeFormatSelect.value,
      manualTime: manualTimeInput.value || state.display.manualTime,
      date: dateInput.value,
      themeMode: themeModeSelect.value,
      brightness: Number(displayBrightnessSlider.value),
      screenLock: screenLockToggle.checked,
      idleMinutes,
      screenSaverContent: screenSaverContentSelect.value,
      customImage: customImageInput.files?.[0]?.name || state.display.customImage,
      language: padLanguageSelect.value,
    };

    renderDisplayPanel();
    showToast("Pad display settings applied.");
  });
}

if (createCommandButton) {
  createCommandButton.addEventListener("click", () => {
    openCommandEditor("create");
  });
}

if (commandTableBody) {
  commandTableBody.addEventListener("click", (event) => {
    const actionButton = event.target.closest("[data-command-action]");

    if (!actionButton) {
      return;
    }

    const action = actionButton.getAttribute("data-command-action");
    const commandIndex = Number(actionButton.getAttribute("data-command-index"));

    if (!Number.isInteger(commandIndex) || commandIndex < 0) {
      return;
    }

    if (action === "edit") {
      openCommandEditor("edit", commandIndex);
      return;
    }

    if (action === "copy") {
      duplicateCommand(commandIndex);
      return;
    }

    if (action === "delete") {
      deleteCommand(commandIndex);
      return;
    }

    if (action === "test") {
      testRunCommand(commandIndex);
    }
  });
}

if (commandPagination) {
  commandPagination.addEventListener("click", (event) => {
    const pageButton = event.target.closest("[data-command-page]");
    const navButton = event.target.closest("[data-command-page-nav]");

    if (pageButton) {
      state.commandPage = Number(pageButton.getAttribute("data-command-page"));
      renderCommandManagement();
      return;
    }

    if (!navButton) {
      return;
    }

    const direction = navButton.getAttribute("data-command-page-nav");

    if (direction === "prev" && state.commandPage > 1) {
      state.commandPage -= 1;
    }

    if (direction === "next" && state.commandPage < getCommandPageCount()) {
      state.commandPage += 1;
    }

    renderCommandManagement();
  });
}

if (commandInterfaceSelect) {
  commandInterfaceSelect.addEventListener("change", () => {
    syncCommandEditorInterfaceFields();
  });
}

if (commandStateUpdateEnabled) {
  commandStateUpdateEnabled.addEventListener("change", () => {
    syncCommandStateUpdatePanel();
  });
}

if (commandStateUpdateParameter) {
  commandStateUpdateParameter.addEventListener("change", () => {
    updateCommandStateUpdatePreview();
  });
}

document.querySelectorAll('input[name="commandStateUpdateValueType"]').forEach((input) => {
  input.addEventListener("change", () => {
    updateCommandStateValueField();
    updateCommandStateUpdatePreview();
  });
});

[commandStateUpdateValueText, commandStateUpdateValueNumber, commandStateUpdateValueBoolean].forEach((input) => {
  if (!input) {
    return;
  }

  input.addEventListener("input", () => {
    updateCommandStateUpdatePreview();
  });

  input.addEventListener("change", () => {
    updateCommandStateUpdatePreview();
  });
});

if (commandEditorForm) {
  commandEditorForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = commandNameInput.value.trim();
    const commandData = commandDataInput.value.trim();
    const interfaceType = commandInterfaceSelect.value;
    const device = commandDeviceSelect.value;
    const telnetIp = commandTelnetIpInput.value.trim();
    const telnetPort = commandTelnetPortInput.value.trim();
    const editIndex = commandEditIndex.value === "" ? -1 : Number(commandEditIndex.value);
    const stateUpdateValidation = validateCommandStateUpdate(readCommandStateUpdateFromForm());

    if (!name) {
      showToast("Please enter a command name.");
      return;
    }

    if (!commandData) {
      showToast("Please enter command data.");
      return;
    }

    if (interfaceType === "Telnet") {
      if (!telnetIp) {
        showToast("Please enter Telnet IP.");
        return;
      }

      if (!telnetPort || Number(telnetPort) < 1 || Number(telnetPort) > 65535) {
        showToast("Please enter a valid Telnet port.");
        return;
      }
    }

    if (!stateUpdateValidation.isValid) {
      showToast(stateUpdateValidation.message);
      return;
    }

    const nextCommand = {
      id: Number.isInteger(editIndex) && editIndex >= 0 && state.commands[editIndex]
        ? state.commands[editIndex].id
        : generateCommandId(),
      name,
      interface: interfaceType,
      data: commandData,
      device,
      telnetIp: interfaceType === "Telnet" ? telnetIp : "",
      telnetPort: interfaceType === "Telnet" ? telnetPort : "",
      stateUpdate: stateUpdateValidation.stateUpdate,
    };

    if (Number.isInteger(editIndex) && editIndex >= 0 && state.commands[editIndex]) {
      state.commands[editIndex] = nextCommand;
      showToast(`${name} updated.`);
    } else {
      state.commands.unshift(nextCommand);
      state.commandPage = 1;
      showToast(`${name} created.`);
    }

    renderCommandManagement();
    closeModal(commandEditorModal);
    commandEditorForm.reset();
    commandEditIndex.value = "";
    commandInterfaceSelect.value = "System";
    commandDeviceSelect.value = "Main Display";
    commandTelnetIpInput.value = "";
    commandTelnetPortInput.value = "";
    resetCommandEditorStateUpdateFields();
    syncCommandEditorInterfaceFields();
  });
}

if (newMacroButton) {
  newMacroButton.addEventListener("click", () => {
    openMacroEditor();
  });
}

if (createFirstMacroButton) {
  createFirstMacroButton.addEventListener("click", () => {
    openMacroEditor();
  });
}

if (macroEditorBackButton) {
  macroEditorBackButton.addEventListener("click", () => {
    openMacroListView();
  });
}

if (macroSearchInput) {
  macroSearchInput.addEventListener("input", () => {
    state.macroSearch = macroSearchInput.value;
    state.macroPage = 1;
    renderMacroManagement();
  });
}

if (driverSearchInput) {
  driverSearchInput.addEventListener("input", () => {
    state.driverLibrary.search = driverSearchInput.value;
    renderDriverLibrary();
  });
}

if (driverTypeFilter) {
  driverTypeFilter.addEventListener("change", () => {
    state.driverLibrary.type = driverTypeFilter.value;
    renderDriverLibrary();
  });
}

if (driverProtocolFilter) {
  driverProtocolFilter.addEventListener("change", () => {
    state.driverLibrary.protocol = driverProtocolFilter.value;
    renderDriverLibrary();
  });
}

if (driverVendorFilter) {
  driverVendorFilter.addEventListener("change", () => {
    state.driverLibrary.vendor = driverVendorFilter.value;
    renderDriverLibrary();
  });
}

if (driverVendorList) {
  driverVendorList.addEventListener("click", (event) => {
    const vendorButton = event.target.closest("[data-driver-vendor]");

    if (!vendorButton) {
      return;
    }

    state.driverLibrary.selectedVendor = vendorButton.getAttribute("data-driver-vendor") || "";
    state.driverLibrary.selectedDriverId = "";
    renderDriverLibrary();
  });
}

if (driverModelList) {
  driverModelList.addEventListener("click", (event) => {
    const modelButton = event.target.closest("[data-driver-id]");

    if (!modelButton) {
      return;
    }

    state.driverLibrary.selectedDriverId = modelButton.getAttribute("data-driver-id") || "";
    renderDriverLibrary();
  });
}

if (importDriverButton) {
  importDriverButton.addEventListener("click", () => {
    openModal(importDriverModal);
  });
}

if (importDriverForm) {
  importDriverForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const fileName = importDriverFileInput?.files?.[0]?.name || "mock-driver.pkg";
    closeModal(importDriverModal);
    importDriverForm.reset();
    showToast(`${fileName} imported successfully.`);
  });
}

if (driverCreateDeviceButton) {
  driverCreateDeviceButton.addEventListener("click", () => {
    const selectedDriver = getSelectedDriver();

    if (!selectedDriver) {
      return;
    }

    navigateToSection("Device Integration", false);
    openAddDeviceView("driver", "", selectedDriver.id);
  });
}

if (driverExportButton) {
  driverExportButton.addEventListener("click", () => {
    if (!getSelectedDriver()) {
      return;
    }

    showToast("Driver exported.");
  });
}

if (deviceIntegrationContent) {
  deviceIntegrationContent.addEventListener("click", (event) => {
    const actionButton = event.target.closest("[data-device-action]");
    const rowActionButton = event.target.closest("[data-device-row-action]");
    const modeButton = event.target.closest("[data-device-mode]");
    const openRow = event.target.closest("[data-device-open-id]");

    if (modeButton) {
      openAddDeviceView(modeButton.getAttribute("data-device-mode") || "");
      return;
    }

    if (rowActionButton) {
      const action = rowActionButton.getAttribute("data-device-row-action");
      const deviceId = rowActionButton.getAttribute("data-device-id") || "";

      if (action === "edit") {
        openAddDeviceView("", deviceId);
        return;
      }

      if (action === "test") {
        runDeviceConnectionTest("detail");
        return;
      }

      if (action === "commands") {
        showToast("Go to Command Management.");
        return;
      }

      if (action === "delete") {
        promptDeleteDevice(deviceId);
      }
      return;
    }

    if (openRow) {
      openDeviceReviewModal(openRow.getAttribute("data-device-open-id") || "");
      return;
    }

    if (!actionButton) {
      return;
    }

    const action = actionButton.getAttribute("data-device-action");
    const deviceId = actionButton.getAttribute("data-device-id") || "";

    if (action === "open-add") {
      openAddDeviceView();
      return;
    }

    if (action === "back-to-list") {
      openDevicesListView();
      return;
    }

    if (action === "save-device") {
      saveDeviceDraft();
      return;
    }

    if (action === "test-draft-connection") {
      runDeviceConnectionTest("draft");
      return;
    }

    if (action === "edit-connection") {
      openAddDeviceView("", deviceId);
      return;
    }

    if (action === "test-device") {
      runDeviceConnectionTest("detail");
      return;
    }

    if (action === "go-commands") {
      showToast("Go to Command Management.");
      return;
    }

    if (action === "delete-device") {
      promptDeleteDevice(deviceId);
    }
  });

  deviceIntegrationContent.addEventListener("input", (event) => {
    const field = event.target.getAttribute("data-device-draft-field");

    if (event.target.id === "deviceSearchInput") {
      state.deviceIntegration.search = event.target.value;
      renderDevicesListWithSearchFocus(event.target.selectionStart ?? state.deviceIntegration.search.length);
      return;
    }

    if (!field || !state.deviceIntegration.draft) {
      if (state.deviceIntegration.draft && event.target.name) {
        state.deviceIntegration.draft.connection[event.target.name] = event.target.value;
      }
      return;
    }

    state.deviceIntegration.draft[field] = event.target.value;
  });

  deviceIntegrationContent.addEventListener("change", (event) => {
    const field = event.target.getAttribute("data-device-draft-field");

    if (event.target.id === "deviceTypeFilter") {
      state.deviceIntegration.type = event.target.value;
      renderDeviceIntegration();
      return;
    }

    if (field && state.deviceIntegration.draft) {
      state.deviceIntegration.draft[field] = event.target.value;

      if (field === "driverId" || field === "protocol" || field === "deviceType") {
        renderDeviceIntegration();
        return;
      }
    }

    if (state.deviceIntegration.draft && event.target.name) {
      state.deviceIntegration.draft.connection[event.target.name] = event.target.value;
    }
  });
}

if (confirmDeviceDeleteButton) {
  confirmDeviceDeleteButton.addEventListener("click", () => {
    if (!state.deviceIntegration.pendingDeleteDeviceId) {
      closeModal(deviceDeleteModal);
      return;
    }

    const targetId = state.deviceIntegration.pendingDeleteDeviceId;
    state.deviceIntegration.pendingDeleteDeviceId = "";
    closeModal(deviceDeleteModal);
    deleteDevice(targetId);
  });
}

if (startDiscoveryButton) {
  startDiscoveryButton.addEventListener("click", () => {
    startDeviceDiscovery();
  });
}

if (developerToolDiscoveryTab) {
  developerToolDiscoveryTab.addEventListener("click", () => {
    switchDeveloperToolView("discovery");
  });
}

if (developerToolConsoleTab) {
  developerToolConsoleTab.addEventListener("click", () => {
    switchDeveloperToolView("console");
  });
}

if (discoveryTableBody) {
  discoveryTableBody.addEventListener("click", (event) => {
    const row = event.target.closest("[data-discovery-id]");

    if (!row) {
      return;
    }

    openDiscoveryDetail(row.getAttribute("data-discovery-id") || "");
  });

  discoveryTableBody.addEventListener("keydown", (event) => {
    const row = event.target.closest("[data-discovery-id]");

    if (!row || (event.key !== "Enter" && event.key !== " ")) {
      return;
    }

    event.preventDefault();
    openDiscoveryDetail(row.getAttribute("data-discovery-id") || "");
  });
}

if (eventTriggerContent) {
  eventTriggerContent.addEventListener("click", (event) => {
    const toolbarButton = event.target.closest("[data-event-trigger-toolbar]");
    const actionButton = event.target.closest("[data-event-trigger-action]");

    if (toolbarButton) {
      const action = toolbarButton.getAttribute("data-event-trigger-toolbar") || "";

      if (action === "create") {
        openEventTriggerEditor();
        return;
      }

      if (action === "back") {
        closeEventTriggerEditor();
        return;
      }

      if (action === "save") {
        saveEventTriggerDraft();
        return;
      }

      if (action === "test-draft") {
        if (state.eventTrigger.draft?.id) {
          openEventTriggerTestModal(state.eventTrigger.draft.id);
          return;
        }

        showToast("Save the trigger first before running the test flow.");
        return;
      }
    }

    if (!actionButton) {
      return;
    }

    const action = actionButton.getAttribute("data-event-trigger-action") || "";
    const triggerId = actionButton.getAttribute("data-event-trigger-id") || "";

    if (!triggerId) {
      return;
    }

    if (action === "edit") {
      openEventTriggerEditor(triggerId);
      return;
    }

    if (action === "test") {
      openEventTriggerTestModal(triggerId);
      return;
    }

    if (action === "toggle") {
      toggleEventTriggerStatus(triggerId);
      return;
    }

    if (action === "delete") {
      deleteEventTrigger(triggerId);
    }
  });

  eventTriggerContent.addEventListener("input", (event) => {
    if (!state.eventTrigger.draft) {
      return;
    }

    const field = event.target.getAttribute("data-event-trigger-field");

    if (!field) {
      return;
    }

    state.eventTrigger.draft[field] = event.target.value;
  });

  eventTriggerContent.addEventListener("change", (event) => {
    if (!state.eventTrigger.draft) {
      return;
    }

    const field = event.target.getAttribute("data-event-trigger-field");
    const flag = event.target.getAttribute("data-event-trigger-flag");

    if (field) {
      state.eventTrigger.draft[field] = event.target.value;

      if (field === "actionType") {
        ensureEventTriggerDraftBinding(state.eventTrigger.draft);
      }

      renderEventTrigger();
      return;
    }

    if (flag) {
      state.eventTrigger.draft[flag] = event.target.checked;
      renderEventTrigger();
    }
  });
}

if (debugConsoleForm) {
  debugConsoleForm.addEventListener("submit", (event) => {
    event.preventDefault();
    submitDebugConsoleCommand(debugConsoleInput?.value || "");

    if (debugConsoleInput) {
      debugConsoleInput.value = "";
      debugConsoleInput.focus();
    }
  });
}

if (eventTriggerTestForm) {
  eventTriggerTestForm.addEventListener("submit", (event) => {
    event.preventDefault();
    runEventTriggerTest();
  });
}

if (macroBasicNameInput) {
  macroBasicNameInput.addEventListener("input", () => {
    if (!state.macroDraft) {
      return;
    }

    state.macroDraft.name = macroBasicNameInput.value;
  });
}

if (macroBasicDescriptionInput) {
  macroBasicDescriptionInput.addEventListener("input", () => {
    if (!state.macroDraft) {
      return;
    }

    state.macroDraft.description = macroBasicDescriptionInput.value;
  });
}

if (macroPagination) {
  macroPagination.addEventListener("click", (event) => {
    const pageButton = event.target.closest("[data-macro-page]");
    const navButton = event.target.closest("[data-macro-page-nav]");

    if (pageButton) {
      state.macroPage = Number(pageButton.getAttribute("data-macro-page"));
      renderMacroManagement();
      return;
    }

    if (!navButton) {
      return;
    }

    const filteredMacros = getFilteredMacros();
    const direction = navButton.getAttribute("data-macro-page-nav");

    if (direction === "prev" && state.macroPage > 1) {
      state.macroPage -= 1;
    }

    if (direction === "next" && state.macroPage < getMacroPageCount(filteredMacros)) {
      state.macroPage += 1;
    }

    renderMacroManagement();
  });
}

if (macroTableBody) {
  macroTableBody.addEventListener("click", (event) => {
    const actionButton = event.target.closest("[data-macro-action]");
    const macroRow = event.target.closest("[data-macro-row-id]");

    if (!actionButton) {
      if (macroRow) {
        openMacroReviewModal(macroRow.getAttribute("data-macro-row-id") || "");
      }
      return;
    }

    const action = actionButton.getAttribute("data-macro-action");
    const macroId = actionButton.getAttribute("data-macro-id") || "";

    if (!macroId) {
      return;
    }

    if (action === "edit") {
      openMacroEditor(macroId);
      return;
    }

    if (action === "duplicate") {
      duplicateMacro(macroId);
      return;
    }

    if (action === "delete") {
      promptDeleteMacro(macroId);
      return;
    }

    if (action === "test") {
      const macro = state.macros.find((item) => item.id === macroId);

      if (macro) {
        showToast(`Macro test started: ${macro.name}`);
      }
    }
  });
}

if (macroActionLibrary) {
  macroActionLibrary.querySelectorAll("[data-macro-insert-type]").forEach((button) => {
    button.setAttribute("draggable", "true");
  });

  macroActionLibrary.addEventListener("click", (event) => {
    const actionButton = event.target.closest("[data-macro-insert-type]");

    if (!actionButton) {
      return;
    }

    insertMacroStep(actionButton.getAttribute("data-macro-insert-type") || "command");
  });

  macroActionLibrary.addEventListener("dragstart", (event) => {
    const actionButton = event.target.closest("[data-macro-insert-type]");

    if (!actionButton) {
      return;
    }

    const insertType = actionButton.getAttribute("data-macro-insert-type") || "command";
    state.dragInsertType = insertType;
    state.lastMacroInsertType = insertType;
    event.dataTransfer?.setData("text/plain", insertType);
    event.dataTransfer.effectAllowed = "copy";
  });

  macroActionLibrary.addEventListener("dragend", () => {
    state.dragInsertType = "";
    clearMacroDragIndicators();
  });
}

if (macroInsertActionGrid) {
  macroInsertActionGrid.addEventListener("click", (event) => {
    const actionButton = event.target.closest("[data-macro-modal-insert-type]");

    if (!actionButton || !state.pendingMacroInsertTarget) {
      return;
    }

    const insertType = actionButton.getAttribute("data-macro-modal-insert-type") || "command";
    const { containerPath, insertIndex } = state.pendingMacroInsertTarget;
    insertMacroStep(insertType, containerPath, insertIndex);
    closeMacroInsertActionModal();
  });
}

if (macroFlowCanvas) {
  macroFlowCanvas.addEventListener("click", (event) => {
    const actionButton = event.target.closest("[data-macro-step-action]");
    const targetStep = event.target.closest("[data-step-path]");
    const addStepButton = event.target.closest("[data-macro-add-step]");
    const addFirstStepButton = event.target.closest("[data-macro-empty-add]");

    if (actionButton) {
      const stepAction = actionButton.getAttribute("data-macro-step-action");
      const stepPath = actionButton.getAttribute("data-step-path") || "";

      if (stepAction === "delete") {
        deleteMacroStep(stepPath);
        return;
      }
    }

    if (addStepButton || addFirstStepButton) {
      const containerPath = parseStepPath(addStepButton?.getAttribute("data-container-path") || "");
      const targetSteps = getStepListByContainerPath(containerPath);
      openMacroInsertActionModal(containerPath, targetSteps.length);
      return;
    }

    if (targetStep) {
      setSelectedStep(targetStep.getAttribute("data-step-path") || "");
    }
  });

  macroFlowCanvas.addEventListener("dragover", (event) => {
    if (!state.dragInsertType) {
      return;
    }

    const addStepBar = event.target.closest("[data-macro-add-step-container]");
    const stepSlot = event.target.closest("[data-step-slot]");

    if (!addStepBar && !stepSlot) {
      return;
    }

    event.preventDefault();
    event.dataTransfer.dropEffect = "copy";
    clearMacroDragIndicators();

    if (addStepBar) {
      const containerPath = parseStepPath(addStepBar.getAttribute("data-macro-add-step-container") || "");
      const hint = addStepBar.querySelector("[data-macro-add-step-hint]");
      addStepBar.classList.add("is-drag-over");
      if (hint) {
        hint.classList.add("is-drop");
        hint.textContent = "Drop Action Here";
      }
      state.dragMacroInsertTarget = {
        containerPath,
        insertIndex: getStepListByContainerPath(containerPath).length,
      };
      return;
    }

    const containerPath = parseStepPath(stepSlot.getAttribute("data-container-path") || "");
    const stepIndex = Number(stepSlot.getAttribute("data-step-index") || "0");
    const slotRect = stepSlot.getBoundingClientRect();
    const shouldInsertBefore = event.clientY < slotRect.top + slotRect.height / 2;

    stepSlot.classList.add(shouldInsertBefore ? "is-drop-before" : "is-drop-after");
    state.dragMacroInsertTarget = {
      containerPath,
      insertIndex: shouldInsertBefore ? stepIndex : stepIndex + 1,
    };
  });

  macroFlowCanvas.addEventListener("dragleave", (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      clearMacroDragIndicators();
    }
  });

  macroFlowCanvas.addEventListener("drop", (event) => {
    if (!state.dragInsertType || !state.dragMacroInsertTarget) {
      return;
    }

    event.preventDefault();

    const insertType = state.dragInsertType || event.dataTransfer?.getData("text/plain") || "command";
    const { containerPath, insertIndex } = state.dragMacroInsertTarget;

    insertMacroStepAt(insertType, containerPath, insertIndex);
    state.dragInsertType = "";
    clearMacroDragIndicators();
  });
}

if (macroInspectorPanel) {
  macroInspectorPanel.addEventListener("input", (event) => {
    const field = event.target.getAttribute("data-step-field");
    const step = getStepByPath(parseStepPath(state.selectedMacroStepPath));

    if (!field || !step) {
      return;
    }

    step[field] = event.target.value;
    updateSelectedMacroStepDisplay(step);
  });

  macroInspectorPanel.addEventListener("change", (event) => {
    const field = event.target.getAttribute("data-step-field");
    const step = getStepByPath(parseStepPath(state.selectedMacroStepPath));

    if (!field || !step) {
      return;
    }

    if (field === "waitForResult") {
      step[field] = event.target.value === "true";
    } else if (field === "valueType") {
      step[field] = normalizeMacroValueType(event.target.value);

      if (step.type === "ifElse") {
        const operators = getMacroValueOperators(step[field]);
        step.operator = operators[0];
        step.compareValue = step[field] === "boolean" ? "true" : "";
      } else if (step.type === "variable") {
        step.value = step[field] === "boolean" ? "true" : "";
      }
    } else {
      step[field] = event.target.value;
    }

    renderMacroEditor();
  });
}

if (macroEditorSaveButton) {
  macroEditorSaveButton.addEventListener("click", () => {
    if (!state.macroDraft) {
      return;
    }

    const name = state.macroDraft.name.trim();
    const description = state.macroDraft.description.trim();

    if (!name) {
      showToast("Please enter a macro name.");
      return;
    }

    if (!description) {
      showToast("Please enter a macro description.");
      return;
    }

    const nextMacro = {
      id: state.macroDraft.id || generateMacroId(),
      name,
      description,
      notes: state.macroDraft.notes || "",
      status: state.macroDraft.status || "Draft",
      flow: state.macroDraft.flow.map((step) => cloneMacroStepWithIds(step)),
    };

    if (state.macroDraft.id) {
      state.macros = state.macros.map((macro) => (macro.id === state.macroDraft.id ? nextMacro : macro));
      state.editingMacroId = nextMacro.id;
      showToast(`${name} saved.`);
    } else {
      state.macros.unshift(nextMacro);
      state.editingMacroId = nextMacro.id;
      state.macroPage = 1;
      showToast(`${name} created.`);
    }

    openMacroListView();
  });
}

if (macroEditorTestButton) {
  macroEditorTestButton.addEventListener("click", () => {
    const macroName = state.macroDraft?.name?.trim() || "Untitled Macro";
    showToast(`Macro test started: ${macroName}`);
  });
}

if (confirmMacroDeleteButton) {
  confirmMacroDeleteButton.addEventListener("click", () => {
    if (!state.pendingDeleteMacroId) {
      closeModal(macroDeleteModal);
      return;
    }

    const targetId = state.pendingDeleteMacroId;
    state.pendingDeleteMacroId = "";
    closeModal(macroDeleteModal);
    deleteMacro(targetId);
  });
}

if (adminSecurityForm) {
  adminSecurityForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const password = adminPasswordInput.value.trim();
    const confirmPassword = adminPasswordConfirmInput.value.trim();

    if (password || confirmPassword) {
      if (password.length < 4) {
        showToast("Password must be at least 4 characters.");
        return;
      }

      if (password !== confirmPassword) {
        showToast("Password confirmation does not match.");
        return;
      }

      state.admin.passwordConfigured = true;
    }

    state.admin.accessRole = accessRoleSelect.value;
    adminSecurityForm.reset();
    accessRoleSelect.value = state.admin.accessRole;
    renderAdminPanel();
    showToast("Admin security settings applied.");
  });
}

if (importConfigButton) {
  importConfigButton.addEventListener("click", () => {
    const selectedFile = configImportInput.files?.[0];

    if (!selectedFile) {
      showToast("Please choose a configuration file to import.");
      return;
    }

    state.admin.importedConfigName = selectedFile.name;
    renderAdminPanel();
    showToast(`Configuration imported from ${selectedFile.name}.`);
  });
}

if (exportConfigButton) {
  exportConfigButton.addEventListener("click", () => {
    const exportedConfig = {
      exportedAt: new Date().toISOString(),
      network: state.ethernet,
      wifi: {
        enabled: state.wifi.enabled,
        connectedSSID: state.wifi.connectedSSID,
      },
      display: state.display,
      admin: {
        accessRole: state.admin.accessRole,
      },
    };

    triggerDownload("pad-config-export.json", JSON.stringify(exportedConfig, null, 2), "application/json");
    showToast("Configuration export started.");
  });
}

if (downloadLogButton) {
  downloadLogButton.addEventListener("click", () => {
    const logContent = [
      `[${new Date().toISOString()}] INFO System online`,
      `[${new Date().toISOString()}] INFO Network status: ${state.ethernet.connected ? "Ethernet Active" : "Wi-Fi Active"}`,
      `[${new Date().toISOString()}] INFO Access role: ${state.admin.accessRole}`,
    ].join("\n");

    triggerDownload("pad-system-log.txt", logContent, "text/plain");
    showToast("Log download started.");
  });
}

if (otaUpdateButton) {
  otaUpdateButton.addEventListener("click", () => {
    state.admin.firmwareMode = "ota";
    renderAdminPanel();
    showToast("OTA update started.");
  });
}

if (firmwareForm) {
  firmwareForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const firmwareFile = firmwareFileInput.files?.[0];

    if (!firmwareFile) {
      showToast("Please choose a local firmware file.");
      return;
    }

    state.admin.firmwareMode = "manual";
    state.admin.firmwareFileName = firmwareFile.name;
    renderAdminPanel();
    showToast(`Manual firmware upgrade started with ${firmwareFile.name}.`);
  });
}

if (rebootButton) {
  rebootButton.addEventListener("click", () => {
    openAdminConfirm("reboot");
  });
}

if (factoryResetButton) {
  factoryResetButton.addEventListener("click", () => {
    openAdminConfirm("factory-reset");
  });
}

if (adminConfirmForm) {
  adminConfirmForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const pendingAction = state.admin.pendingAction;
    closeModal(adminConfirmModal);
    state.admin.pendingAction = "";

    if (pendingAction === "factory-reset") {
      showToast("Factory reset initiated.");
      return;
    }

    if (pendingAction === "reboot") {
      showToast("System reboot initiated.");
    }
  });
}

if (wifiToggle) {
  wifiToggle.addEventListener("change", () => {
    state.wifi.enabled = wifiToggle.checked;

    if (!state.wifi.enabled) {
      state.wifi.connectedSSID = "";
      if (!state.ethernet.connected) {
        renderNetworkPanel();
      } else {
        renderNetworkPanel();
      }
      showToast("Wi-Fi turned off.");
      return;
    }

    if (!state.wifi.connectedSSID) {
      state.wifi.connectedSSID = "Cypress_Setup_5G";
    }

    renderNetworkPanel();
    showToast("Wi-Fi turned on.");
  });
}

if (wifiList) {
  wifiList.addEventListener("click", (event) => {
    const networkButton = event.target.closest("[data-ssid]");

    if (!networkButton || !state.wifi.enabled) {
      return;
    }

    const ssid = networkButton.getAttribute("data-ssid") || "";
    const secure = networkButton.getAttribute("data-secure") === "true";

    if (!ssid) {
      return;
    }

    if (secure) {
      openWifiPasswordModal(ssid);
      return;
    }

    connectToWifi(ssid);
  });
}

if (wifiPasswordForm) {
  wifiPasswordForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const password = String(new FormData(wifiPasswordForm).get("wifiPassword") || "").trim();

    if (password.length < 8) {
      showToast("Wi-Fi password must be at least 8 characters.");
      return;
    }

    if (!state.pendingWifiSSID) {
      closeModal(wifiPasswordModal);
      return;
    }

    const targetNetwork = state.wifi.networks.find((network) => network.ssid === state.pendingWifiSSID);

    if (targetNetwork) {
      targetNetwork.saved = true;
    }

    connectToWifi(state.pendingWifiSSID);
    state.pendingWifiSSID = null;
    closeModal(wifiPasswordModal);
  });
}

document.querySelectorAll("[data-close-modal]").forEach((button) => {
  button.addEventListener("click", () => {
    const modalId = button.getAttribute("data-close-modal");
    const modal = document.getElementById(modalId);

    if (modalId === "macroInsertActionModal") {
      closeMacroInsertActionModal();
      return;
    }

    if (modal) {
      closeModal(modal);
    }
  });
});

[signinModal, settingsModal, wifiPasswordModal, commandEditorModal, macroDeleteModal, adminConfirmModal, macroInsertActionModal, macroReviewModal, importDriverModal, deviceDeleteModal, deviceReviewModal, eventTriggerTestModal, discoveryDetailModal, document.getElementById("scenarioLayoutConfirmModal")].forEach((modal) => {
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      if (modal === macroInsertActionModal) {
        closeMacroInsertActionModal();
      } else {
        closeModal(modal);
      }
    }
  });
});

document.addEventListener("click", (event) => {
  if (!event.target.closest("#userMenu")) {
    closeUserMenu();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeUserMenu();
    closeModal(signinModal);
    closeModal(settingsModal);
    closeModal(wifiPasswordModal);
    closeModal(commandEditorModal);
    closeModal(macroDeleteModal);
    closeModal(adminConfirmModal);
    closeMacroInsertActionModal();
    closeModal(macroReviewModal);
    closeModal(importDriverModal);
    closeModal(deviceDeleteModal);
    closeModal(deviceReviewModal);
    closeModal(eventTriggerTestModal);
    closeModal(discoveryDetailModal);
    closeModal(document.getElementById("scenarioLayoutConfirmModal"));
    closeModal(commandEditorModal);
    closeModal(macroDeleteModal);
  }
});

renderUserMenu();
populateCommandParameterOptions();
resetCommandEditorStateUpdateFields();
renderDriverLibrary();
renderDeviceIntegration();
renderCommandManagement();
renderMacroManagement();
renderEventTrigger();
renderDeveloperTools();
syncCommandEditorInterfaceFields();
updateContentStage("Home", true);
updatePadPage(0);
