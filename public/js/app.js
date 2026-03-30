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
const displayPanel = document.getElementById("displayPanel");
const networkPanel = document.getElementById("networkPanel");
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

const state = {
  isLoggedIn: false,
  language: languageSelect.value,
  toastTimer: null,
  currentPadPage: 0,
  padDragStartX: 0,
  padDragDeltaX: 0,
  isPadDragging: false,
  commandPage: 1,
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
    },
    {
      id: "CMD-002",
      name: "Switcher Input 1",
      interface: "RS232",
      data: "VIDEO IN1 OUT1\\r",
      device: "Matrix Switcher",
      telnetIp: "",
      telnetPort: "",
    },
    {
      id: "CMD-003",
      name: "Camera Preset Recall",
      interface: "Telnet",
      data: "camera preset recall 1",
      device: "PTZ Camera",
      telnetIp: "192.168.10.150",
      telnetPort: "23",
    },
    {
      id: "CMD-004",
      name: "Display Power Off",
      interface: "System",
      data: "display.power=off",
      device: "Main Display",
      telnetIp: "",
      telnetPort: "",
    },
    {
      id: "CMD-005",
      name: "Display HDMI 1",
      interface: "RS232",
      data: "SOURCE HDMI1\\r",
      device: "Main Display",
      telnetIp: "",
      telnetPort: "",
    },
    {
      id: "CMD-006",
      name: "Display HDMI 2",
      interface: "RS232",
      data: "SOURCE HDMI2\\r",
      device: "Main Display",
      telnetIp: "",
      telnetPort: "",
    },
    {
      id: "CMD-007",
      name: "Audio Volume Up",
      interface: "System",
      data: "audio.volume=up",
      device: "Audio DSP",
      telnetIp: "",
      telnetPort: "",
    },
    {
      id: "CMD-008",
      name: "Audio Volume Down",
      interface: "System",
      data: "audio.volume=down",
      device: "Audio DSP",
      telnetIp: "",
      telnetPort: "",
    },
    {
      id: "CMD-009",
      name: "Audio Mute On",
      interface: "Telnet",
      data: "mute on",
      device: "Audio DSP",
      telnetIp: "192.168.10.161",
      telnetPort: "23",
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
};

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

function syncCommandEditorInterfaceFields() {
  const isTelnet = commandInterfaceSelect?.value === "Telnet";

  commandTelnetIpField?.classList.toggle("is-hidden", !isTelnet);
  commandTelnetPortField?.classList.toggle("is-hidden", !isTelnet);
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
  const isCommandManagement = sectionTitle === "Command Management";
  const isDisplay = sectionTitle === "Pad Display Setting";
  const isNetwork = sectionTitle === "Network";
  homeDashboard.classList.toggle("is-hidden", !isHome);
  contentPlaceholder.classList.toggle("is-hidden", isHome || isCommandManagement || isDisplay || isNetwork);
  commandPanel.classList.toggle("is-hidden", !isCommandManagement);
  displayPanel.classList.toggle("is-hidden", !isDisplay);
  networkPanel.classList.toggle("is-hidden", !isNetwork);

  if (isCommandManagement) {
    renderCommandManagement();
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

  if (!isHome) {
    placeholderText.textContent = `${sectionTitle} content area reserved for future modules.`;
  }
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

      return `
        <tr>
          <td><span class="command-id">${escapeHtml(command.id)}</span></td>
          <td>
            <div class="command-name">
              <strong>${escapeHtml(command.name)}</strong>
              <span>Command #${commandIndex + 1}</span>
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

  showToast(`Test run sent to ${command.device} via ${command.interface}.`);
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

    navItems.forEach((navItem) => navItem.classList.remove("is-active"));
    item.classList.add("is-active");
    navChildren.forEach((navChild) => navChild.classList.remove("is-active"));
    navGroups.forEach((group) => group.classList.remove("is-active"));
    const title = item.dataset.title || item.dataset.section || "Home";
    pageTitle.textContent = title;
    updateContentStage(title, title === "Home");
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

    clearNavActive();

    const group = child.closest(".nav-group");
    child.classList.add("is-active");
    group.classList.add("is-active");
    setGroupOpen(group, true);
    const title = child.dataset.title || child.dataset.section || "Home";
    pageTitle.textContent = title;
    updateContentStage(title, false);
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
    syncCommandEditorInterfaceFields();
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

    if (modal) {
      closeModal(modal);
    }
  });
});

[signinModal, settingsModal, wifiPasswordModal, commandEditorModal].forEach((modal) => {
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal(modal);
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
  }
});

renderUserMenu();
renderCommandManagement();
syncCommandEditorInterfaceFields();
updateContentStage("Home", true);
updatePadPage(0);
