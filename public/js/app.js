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
const padButtons = document.querySelectorAll(".pad-button");
const lightBrightnessSlider = document.getElementById("lightBrightnessSlider");
const padPagesViewport = document.getElementById("padPagesViewport");
const padPagesTrack = document.getElementById("padPagesTrack");
const padPageDots = document.querySelectorAll(".pad-page-dot");
const padPages = document.querySelectorAll(".pad-page");

const state = {
  isLoggedIn: false,
  language: languageSelect.value,
  toastTimer: null,
  currentPadPage: 0,
  padDragStartX: 0,
  padDragDeltaX: 0,
  isPadDragging: false,
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
  homeDashboard.classList.toggle("is-hidden", !isHome);
  contentPlaceholder.classList.toggle("is-hidden", isHome);

  if (!isHome) {
    placeholderText.textContent = `${sectionTitle} content area reserved for future modules.`;
  }
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

document.querySelectorAll("[data-close-modal]").forEach((button) => {
  button.addEventListener("click", () => {
    const modalId = button.getAttribute("data-close-modal");
    const modal = document.getElementById(modalId);

    if (modal) {
      closeModal(modal);
    }
  });
});

[signinModal, settingsModal].forEach((modal) => {
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
  }
});

renderUserMenu();
updateContentStage("Home", true);
updatePadPage(0);
