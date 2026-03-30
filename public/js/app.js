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
  const isDisplay = sectionTitle === "Pad Display Setting";
  const isNetwork = sectionTitle === "Network";
  homeDashboard.classList.toggle("is-hidden", !isHome);
  contentPlaceholder.classList.toggle("is-hidden", isHome || isDisplay || isNetwork);
  displayPanel.classList.toggle("is-hidden", !isDisplay);
  networkPanel.classList.toggle("is-hidden", !isNetwork);

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

[signinModal, settingsModal, wifiPasswordModal].forEach((modal) => {
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
  }
});

renderUserMenu();
updateContentStage("Home", true);
updatePadPage(0);
