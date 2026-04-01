(function scenarioModule() {
  const scenarioPanel = document.getElementById("scenarioPanel");
  const scenarioContent = document.getElementById("scenarioContent");
  const layoutConfirmModal = document.getElementById("scenarioLayoutConfirmModal");
  const layoutConfirmMessage = document.getElementById("scenarioLayoutConfirmMessage");
  const confirmLayoutButton = document.getElementById("confirmScenarioLayoutButton");
  const buttonConfigModal = document.getElementById("scenarioButtonConfigModal");
  const buttonConfigContent = document.getElementById("scenarioButtonConfigContent");
  const actionPickerModal = document.getElementById("scenarioActionPickerModal");
  const actionPickerContent = document.getElementById("scenarioActionPickerContent");
  const layoutCatalog = [
    { id: "1x2", label: "1x2", capacity: 2, rows: 1, cols: 2 },
    { id: "2x2", label: "2x2", capacity: 4, rows: 2, cols: 2 },
    { id: "2x3", label: "2x3", capacity: 6, rows: 2, cols: 3 },
    { id: "2x4", label: "2x4", capacity: 8, rows: 2, cols: 4 },
  ];
  const buttonCatalog = [
    { id: "1x1", label: "1x1 Button", size: "1x1", enabled: true, note: "Draggable" },
    { id: "1x2", label: "1x2 Button", size: "1x2", enabled: true, note: "Horizontal span" },
    { id: "2x1", label: "2x1 Button", size: "2x1", enabled: true, note: "Vertical span" },
    { id: "2x2", label: "2x2 Button", size: "2x2", enabled: true, note: "Large tile" },
  ];
  const iconCatalog = ["P", "L", "A", "M", "S", "V", "C", "D"];
  const pickerItems = {
    Command: [
      { id: "CMD-PWR-ON", name: "Projector Power ON", meta: "TCP/IP", description: "Power on the projector." },
      { id: "CMD-PWR-OFF", name: "Projector Power OFF", meta: "TCP/IP", description: "Power off the projector." },
      { id: "CMD-HDMI1", name: "HDMI1 Select", meta: "RS-232", description: "Switch to HDMI 1 input." },
      { id: "CMD-LIGHTS-DIM", name: "Lights Dim", meta: "Telnet", description: "Dim lighting to preset level." },
      { id: "CMD-VOLUME-UP", name: "Volume Up", meta: "TCP/IP", description: "Increase amplifier volume." },
    ],
    Macro: [
      { id: "MAC-MEETING-START", name: "Meeting Start", meta: "Macro", description: "Prepare room for a meeting." },
      { id: "MAC-MEETING-END", name: "Meeting End", meta: "Macro", description: "Shut down room after meeting." },
      { id: "MAC-PRESENTATION", name: "Presentation Mode", meta: "Macro", description: "Set room to presentation mode." },
      { id: "MAC-SHUTDOWN", name: "System Shutdown", meta: "Macro", description: "Perform full system shutdown." },
    ],
  };
  const actionTargetLabels = {
    normal: "Normal Actions",
    toggleOn: "ON Actions",
    toggleOff: "OFF Actions",
    repeatStart: "Start Actions",
    repeatLoop: "Repeat Actions",
    repeatStop: "Stop Actions",
  };

  if (!scenarioPanel || !scenarioContent) {
    return;
  }

  const scenarioState = {
    initialized: false,
    selectedLayout: "2x4",
    selectedPage: 0,
    pages: [],
    isDirty: false,
    activeLeftTab: "layouts",
    selectedButtonId: "",
    dragState: {
      mode: "",
      type: "",
      sourceButtonId: "",
      overSlot: null,
      previewSlots: [],
      isValidDrop: false,
    },
    pageSwipe: {
      bound: false,
      active: false,
      startX: 0,
      deltaX: 0,
    },
    pendingLayout: "",
    highlightInvalid: false,
    buttonCounter: 0,
    isConfigModalOpen: false,
    isPickerDialogOpen: false,
    pickerTab: "Command",
    pickerSearch: "",
    pickerSelectedId: "",
    editingMode: "Normal",
    currentButtonConfig: null,
    currentActionTarget: "normal",
    configValidationErrors: [],
    isConfigDirty: false,
  };

  function initializeScenarioState() {
    if (scenarioState.initialized) {
      return;
    }

    scenarioState.pages = Array.from({ length: 3 }, (_, pageIndex) => ({
      id: `page-${pageIndex + 1}`,
      buttons: [],
    }));
    scenarioState.initialized = true;
  }

  function escapeValue(value) {
    if (typeof escapeHtml === "function") {
      return escapeHtml(value);
    }

    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");
  }

  function notify(message) {
    if (typeof showToast === "function") {
      showToast(message);
      return;
    }

    window.alert(message);
  }

  function getEmptyButtonConfig(button) {
    return {
      buttonId: button.id,
      icon: button.icon || "B",
      label: button.label || "",
      mode: button.executionMode || "Normal",
      normalActions: Array.isArray(button.config?.normalActions) ? button.config.normalActions.map((item) => ({ ...item })) : [],
      toggleOnActions: Array.isArray(button.config?.toggleOnActions) ? button.config.toggleOnActions.map((item) => ({ ...item })) : [],
      toggleOffActions: Array.isArray(button.config?.toggleOffActions) ? button.config.toggleOffActions.map((item) => ({ ...item })) : [],
      repeatStartActions: Array.isArray(button.config?.repeatStartActions) ? button.config.repeatStartActions.map((item) => ({ ...item })) : [],
      repeatLoopActions: Array.isArray(button.config?.repeatLoopActions) ? button.config.repeatLoopActions.map((item) => ({ ...item })) : [],
      repeatStopActions: Array.isArray(button.config?.repeatStopActions) ? button.config.repeatStopActions.map((item) => ({ ...item })) : [],
      repeatInterval: String(button.config?.repeatInterval || "1000"),
    };
  }

  function getActionListByTarget(config, targetKey) {
    const map = {
      normal: "normalActions",
      toggleOn: "toggleOnActions",
      toggleOff: "toggleOffActions",
      repeatStart: "repeatStartActions",
      repeatLoop: "repeatLoopActions",
      repeatStop: "repeatStopActions",
    };

    return config[map[targetKey]] || [];
  }

  function setActionListByTarget(config, targetKey, nextActions) {
    const map = {
      normal: "normalActions",
      toggleOn: "toggleOnActions",
      toggleOff: "toggleOffActions",
      repeatStart: "repeatStartActions",
      repeatLoop: "repeatLoopActions",
      repeatStop: "repeatStopActions",
    };

    config[map[targetKey]] = nextActions;
  }

  function validateButtonConfig(config) {
    const errors = [];
    const mode = config.mode || "Normal";

    if (mode === "Normal" && config.normalActions.length === 0) {
      errors.push("Normal mode requires at least one action.");
    }

    if (mode === "Toggle") {
      if (config.toggleOnActions.length === 0) {
        errors.push("Toggle mode requires at least one ON action.");
      }

      if (config.toggleOffActions.length === 0) {
        errors.push("Toggle mode requires at least one OFF action.");
      }
    }

    if (mode === "Repeat") {
      if (config.repeatLoopActions.length === 0) {
        errors.push("Repeat mode requires at least one Repeat action.");
      }

      if (!config.repeatInterval || Number(config.repeatInterval) <= 0 || Number.isNaN(Number(config.repeatInterval))) {
        errors.push("Repeat mode requires a valid repeat interval.");
      }
    }

    return {
      isValid: errors.length === 0,
      errors,
    };
  }

  function getFilteredPickerItems() {
    const items = pickerItems[scenarioState.pickerTab] || [];
    const keyword = scenarioState.pickerSearch.trim().toLowerCase();

    if (!keyword) {
      return items;
    }

    return items.filter((item) => {
      return [item.name, item.meta, item.description].some((value) => String(value || "").toLowerCase().includes(keyword));
    });
  }

  function getLayoutConfig(layoutId = scenarioState.selectedLayout) {
    return layoutCatalog.find((layout) => layout.id === layoutId) || layoutCatalog[layoutCatalog.length - 1];
  }

  function getCurrentPageState() {
    return scenarioState.pages[scenarioState.selectedPage];
  }

  function getButtonCatalogItem(size) {
    return buttonCatalog.find((button) => button.size === size) || buttonCatalog[0];
  }

  function getButtonSpan(size) {
    const [rows, cols] = String(size || "1x1")
      .split("x")
      .map((value) => Math.max(1, Number(value) || 1));

    return { rows, cols };
  }

  function getGridCoordinates(index, layoutConfig = getLayoutConfig()) {
    return {
      row: Math.floor(index / layoutConfig.cols),
      col: index % layoutConfig.cols,
    };
  }

  function getGridIndex(row, col, layoutConfig = getLayoutConfig()) {
    return row * layoutConfig.cols + col;
  }

  function getOccupiedSlots(anchorIndex, size, layoutConfig = getLayoutConfig()) {
    const { row, col } = getGridCoordinates(anchorIndex, layoutConfig);
    const span = getButtonSpan(size);
    const occupiedSlots = [];

    for (let rowOffset = 0; rowOffset < span.rows; rowOffset += 1) {
      for (let colOffset = 0; colOffset < span.cols; colOffset += 1) {
        const nextRow = row + rowOffset;
        const nextCol = col + colOffset;

        if (nextRow >= layoutConfig.rows || nextCol >= layoutConfig.cols) {
          return [];
        }

        occupiedSlots.push(getGridIndex(nextRow, nextCol, layoutConfig));
      }
    }

    return occupiedSlots;
  }

  function canPlaceButtonAt(pageIndex, anchorIndex, size, ignoreButtonId = "") {
    const layoutConfig = getLayoutConfig();
    const occupiedSlots = getOccupiedSlots(anchorIndex, size, layoutConfig);

    if (!occupiedSlots.length) {
      return { valid: false, occupiedSlots: [] };
    }

    const pageButtons = scenarioState.pages[pageIndex]?.buttons || [];
    const hasCollision = pageButtons.some((button) => {
      if (ignoreButtonId && button.id === ignoreButtonId) {
        return false;
      }

      const buttonSlots = getOccupiedSlots(button.position, button.size, layoutConfig);
      return buttonSlots.some((slot) => occupiedSlots.includes(slot));
    });

    return {
      valid: !hasCollision,
      occupiedSlots,
    };
  }

  function getButtonsAcrossPages() {
    return scenarioState.pages.flatMap((page) => page.buttons);
  }

  function getDerivedState() {
    const allButtons = getButtonsAcrossPages();
    const hasInvalidButtons = allButtons.some((button) => !button.isValid);

    return {
      canSync: scenarioState.isDirty,
      hasInvalidButtons,
      hasUnsavedChanges: scenarioState.isDirty,
    };
  }

  function createButtonInstance(position) {
    const buttonTemplate = getButtonCatalogItem(scenarioState.dragState.type || "1x1");

    scenarioState.buttonCounter += 1;

    return {
      id: `BTN-${String(scenarioState.buttonCounter).padStart(3, "0")}`,
      page: scenarioState.selectedPage,
      position,
      size: buttonTemplate.size,
      icon: buttonTemplate.size,
      label: `${buttonTemplate.label.replace(" Button", "")} ${scenarioState.buttonCounter}`,
      isValid: false,
    };
  }

  function getButtonAt(pageIndex, position) {
    const layoutConfig = getLayoutConfig();

    return (
      scenarioState.pages[pageIndex]?.buttons.find((button) =>
        getOccupiedSlots(button.position, button.size, layoutConfig).includes(position)
      ) || null
    );
  }

  function getButtonById(buttonId) {
    for (const page of scenarioState.pages) {
      const foundButton = page.buttons.find((button) => button.id === buttonId);

      if (foundButton) {
        return foundButton;
      }
    }

    return null;
  }

  function clearDragState() {
    scenarioState.dragState.mode = "";
    scenarioState.dragState.type = "";
    scenarioState.dragState.sourceButtonId = "";
    scenarioState.dragState.overSlot = null;
    scenarioState.dragState.previewSlots = [];
    scenarioState.dragState.isValidDrop = false;
  }

  function syncDragPreview() {
    scenarioContent.querySelectorAll("[data-slot-index]").forEach((slotElement) => {
      const slotIndex = Number(slotElement.getAttribute("data-slot-index"));
      const slotPage = Number(slotElement.getAttribute("data-slot-page"));
      const inPreview =
        slotPage === scenarioState.selectedPage && scenarioState.dragState.previewSlots.includes(slotIndex);

      slotElement.classList.toggle("is-drag-over", inPreview && scenarioState.dragState.isValidDrop);
      slotElement.classList.toggle("is-drop-invalid", inPreview && !scenarioState.dragState.isValidDrop);
    });
  }

  function resetPageSwipe() {
    scenarioState.pageSwipe.active = false;
    scenarioState.pageSwipe.startX = 0;
    scenarioState.pageSwipe.deltaX = 0;
  }

  function markDirty() {
    scenarioState.isDirty = true;
  }

  function getIncompatibleButtonCount(layoutId) {
    const layoutConfig = getLayoutConfig(layoutId);

    return scenarioState.pages.reduce((count, page) => {
      return count + page.buttons.filter((button) => !getOccupiedSlots(button.position, button.size, layoutConfig).length).length;
    }, 0);
  }

  function pruneButtonsForLayout(layoutId) {
    const layoutConfig = getLayoutConfig(layoutId);

    scenarioState.pages = scenarioState.pages.map((page, pageIndex) => ({
      ...page,
      buttons: page.buttons
        .filter((button) => getOccupiedSlots(button.position, button.size, layoutConfig).length)
        .map((button) => ({
          ...button,
          page: pageIndex,
        })),
    }));

    if (scenarioState.selectedButtonId) {
      const selectedStillExists = getButtonsAcrossPages().some((button) => button.id === scenarioState.selectedButtonId);

      if (!selectedStillExists) {
        scenarioState.selectedButtonId = "";
      }
    }
  }

  function applyLayout(layoutId) {
    scenarioState.selectedLayout = layoutId;
    pruneButtonsForLayout(layoutId);
    scenarioState.pendingLayout = "";
    markDirty();
    renderScenario();
  }

  function requestLayoutChange(layoutId) {
    if (layoutId === scenarioState.selectedLayout) {
      return;
    }

    const incompatibleCount = getIncompatibleButtonCount(layoutId);

    if (!incompatibleCount) {
      applyLayout(layoutId);
      return;
    }

    scenarioState.pendingLayout = layoutId;

    if (layoutConfirmMessage) {
      layoutConfirmMessage.textContent = `Changing layout may remove incompatible buttons. ${incompatibleCount} button${incompatibleCount > 1 ? "s will" : " will"} be removed.`;
    }

    if (typeof openModal === "function") {
      openModal(layoutConfirmModal);
    } else {
      layoutConfirmModal?.classList.remove("is-hidden");
    }
  }

  function switchPage(pageIndex) {
    scenarioState.selectedPage = pageIndex;
    scenarioState.selectedButtonId = "";
    clearDragState();
    resetPageSwipe();
    renderScenario();
  }

  function switchTab(tabId) {
    scenarioState.activeLeftTab = tabId;
    renderScenario();
  }

  function addButtonToSlot(position) {
    const currentPage = getCurrentPageState();
    const dragType = scenarioState.dragState.type || "1x1";
    const placement = canPlaceButtonAt(scenarioState.selectedPage, position, dragType);

    if (!placement.valid) {
      notify("Drop failed. Choose a valid empty area for this button size.");
      return;
    }

    const newButton = createButtonInstance(position);
    currentPage.buttons.push(newButton);
    currentPage.buttons.sort((left, right) => left.position - right.position);
    scenarioState.selectedButtonId = newButton.id;
    scenarioState.highlightInvalid = false;
    markDirty();
    clearDragState();
    renderScenario();
  }

  function moveButtonToSlot(buttonId, position) {
    const currentPage = getCurrentPageState();
    const movingButton = currentPage.buttons.find((button) => button.id === buttonId);

    if (!movingButton) {
      clearDragState();
      renderScenario();
      return;
    }

    const placement = canPlaceButtonAt(scenarioState.selectedPage, position, movingButton.size, movingButton.id);

    if (!placement.valid) {
      clearDragState();
      syncDragPreview();
      notify("Move failed. Choose a valid empty area for this button size.");
      return;
    }

    movingButton.position = position;
    currentPage.buttons.sort((left, right) => left.position - right.position);
    scenarioState.selectedButtonId = movingButton.id;
    scenarioState.highlightInvalid = false;
    markDirty();
    clearDragState();
    renderScenario();
  }

  function removeSelectedButton() {
    if (!scenarioState.selectedButtonId) {
      return;
    }

    const currentPage = getCurrentPageState();
    const targetButton = getButtonById(scenarioState.selectedButtonId);

    currentPage.buttons = currentPage.buttons.filter((button) => button.id !== scenarioState.selectedButtonId);
    scenarioState.selectedButtonId = "";
    scenarioState.highlightInvalid = false;
    markDirty();
    renderScenario();
    notify(`${targetButton?.label || "Button"} removed.`);
  }

  function openButtonConfig(buttonId) {
    const button = getButtonById(buttonId);

    if (!button) {
      return;
    }

    scenarioState.selectedButtonId = buttonId;
    scenarioState.currentButtonConfig = getEmptyButtonConfig(button);
    scenarioState.editingMode = scenarioState.currentButtonConfig.mode;
    scenarioState.currentActionTarget = "normal";
    scenarioState.configValidationErrors = [];
    scenarioState.isConfigDirty = false;
    scenarioState.isConfigModalOpen = true;
    renderButtonConfigModal();
    openModal(buttonConfigModal);
  }

  function requestCloseButtonConfig() {
    if (scenarioState.isConfigDirty && !window.confirm("You have unsaved changes. Close Button Configuration?")) {
      return;
    }

    scenarioState.isConfigModalOpen = false;
    scenarioState.currentButtonConfig = null;
    scenarioState.currentActionTarget = "normal";
    scenarioState.configValidationErrors = [];
    scenarioState.isConfigDirty = false;
    closeModal(buttonConfigModal);
  }

  function saveButtonConfig() {
    if (!scenarioState.currentButtonConfig) {
      return;
    }

    const validation = validateButtonConfig(scenarioState.currentButtonConfig);
    scenarioState.configValidationErrors = validation.errors;

    if (!validation.isValid) {
      renderButtonConfigModal();
      notify(validation.errors[0]);
      return;
    }

    const targetButton = getButtonById(scenarioState.currentButtonConfig.buttonId);

    if (!targetButton) {
      requestCloseButtonConfig();
      return;
    }

    targetButton.icon = scenarioState.currentButtonConfig.icon;
    targetButton.label = scenarioState.currentButtonConfig.label || targetButton.label || "Button";
    targetButton.executionMode = scenarioState.currentButtonConfig.mode;
    targetButton.config = {
      normalActions: scenarioState.currentButtonConfig.normalActions.map((item) => ({ ...item })),
      toggleOnActions: scenarioState.currentButtonConfig.toggleOnActions.map((item) => ({ ...item })),
      toggleOffActions: scenarioState.currentButtonConfig.toggleOffActions.map((item) => ({ ...item })),
      repeatStartActions: scenarioState.currentButtonConfig.repeatStartActions.map((item) => ({ ...item })),
      repeatLoopActions: scenarioState.currentButtonConfig.repeatLoopActions.map((item) => ({ ...item })),
      repeatStopActions: scenarioState.currentButtonConfig.repeatStopActions.map((item) => ({ ...item })),
      repeatInterval: scenarioState.currentButtonConfig.repeatInterval,
    };
    targetButton.isValid = validation.isValid;
    markDirty();
    scenarioState.isConfigDirty = false;
    renderScenario();
    requestCloseButtonConfig();
    notify(`${targetButton.label} configuration saved.`);
  }

  function openActionPicker(targetKey) {
    scenarioState.currentActionTarget = targetKey;
    scenarioState.isPickerDialogOpen = true;
    scenarioState.pickerTab = "Command";
    scenarioState.pickerSearch = "";
    scenarioState.pickerSelectedId = "";
    renderActionPickerModal();
    openModal(actionPickerModal);
  }

  function closeActionPicker() {
    scenarioState.isPickerDialogOpen = false;
    scenarioState.pickerSelectedId = "";
    scenarioState.pickerSearch = "";
    closeModal(actionPickerModal);
  }

  function confirmActionPickerSelection() {
    if (!scenarioState.currentButtonConfig || !scenarioState.pickerSelectedId) {
      return;
    }

    const selectedItem = (pickerItems[scenarioState.pickerTab] || []).find((item) => item.id === scenarioState.pickerSelectedId);

    if (!selectedItem) {
      return;
    }

    const nextActions = [
      ...getActionListByTarget(scenarioState.currentButtonConfig, scenarioState.currentActionTarget),
      {
        id: selectedItem.id,
        type: scenarioState.pickerTab,
        name: selectedItem.name,
        meta: selectedItem.meta,
        description: selectedItem.description,
      },
    ];

    setActionListByTarget(scenarioState.currentButtonConfig, scenarioState.currentActionTarget, nextActions);
    scenarioState.isConfigDirty = true;
    closeActionPicker();
    renderButtonConfigModal();
  }

  function deleteConfigAction(targetKey, actionIndex) {
    if (!scenarioState.currentButtonConfig) {
      return;
    }

    const nextActions = getActionListByTarget(scenarioState.currentButtonConfig, targetKey).filter((_, index) => index !== actionIndex);
    setActionListByTarget(scenarioState.currentButtonConfig, targetKey, nextActions);
    scenarioState.isConfigDirty = true;
    renderButtonConfigModal();
  }

  function handleSync() {
    const derivedState = getDerivedState();

    if (!derivedState.canSync) {
      return;
    }

    if (derivedState.hasInvalidButtons) {
      scenarioState.highlightInvalid = true;
      renderScenario();
      notify("Sync failed. Configure all invalid buttons before syncing.");
      return;
    }

    scenarioState.isDirty = false;
    scenarioState.highlightInvalid = false;
    renderScenario();
    notify("Pad layout synced successfully.");
  }

  function getSyncStatusMarkup() {
    const derivedState = getDerivedState();
    const statusClass = scenarioState.isDirty ? "is-pending" : "is-synced";
    const statusLabel = scenarioState.isDirty ? "Pending Sync" : "Synced";
    const helperText = derivedState.hasInvalidButtons
      ? "Invalid buttons must be completed before sync."
      : scenarioState.isDirty
        ? "Review page layouts and push the latest changes to the pad."
        : "Pad preview is aligned with the latest synced scenario.";

    return `
      <div class="scenario-status ${statusClass}">
        <span class="scenario-status__dot" aria-hidden="true"></span>
        <div>
          <strong>${statusLabel}</strong>
          <p>${helperText}</p>
        </div>
      </div>
    `;
  }

  function renderLayoutTab() {
    const currentLayout = getLayoutConfig();

    return `
      <div class="scenario-resource-list" role="list" aria-label="Pad layout list">
        ${layoutCatalog
          .map(
            (layout) => `
              <button
                class="scenario-resource-item ${layout.id === currentLayout.id ? "is-selected" : ""}"
                type="button"
                data-scenario-layout="${layout.id}"
              >
                <div>
                  <strong>${layout.label}</strong>
                  <span>${layout.capacity} slots</span>
                </div>
                <span class="scenario-resource-item__meta">${layout.rows} x ${layout.cols}</span>
              </button>
            `
          )
          .join("")}
      </div>
    `;
  }

  function renderButtonTab() {
    return `
      <div class="scenario-resource-list" role="list" aria-label="Pad button list">
        ${buttonCatalog
          .map(
            (button) => `
              <div
                class="scenario-button-library-item scenario-button-library-item--${button.size} ${button.enabled ? "" : "is-disabled"}"
                ${button.enabled ? `draggable="true" data-button-template="${button.size}"` : ""}
              >
                <div class="scenario-button-library-item__preview">
                  <div class="pad-button scenario-button-library-item__preview-button scenario-button-library-item__preview-button--${button.size}">
                    <span class="pad-button__status"></span>
                    <span class="pad-button__icon">${button.size}</span>
                    <span class="pad-button__name">${button.label.replace(" Button", "")}</span>
                  </div>
                </div>
                <div class="scenario-button-library-item__copy">
                  <strong>${button.label}</strong>
                  <span>${button.note}</span>
                </div>
              </div>
            `
          )
          .join("")}
      </div>
    `;
  }

  function renderPadSlots(pageIndex) {
    const currentPage = scenarioState.pages[pageIndex];
    const layoutConfig = getLayoutConfig();
    const cells = Array.from({ length: layoutConfig.capacity }, (_, position) => {
      const { row, col } = getGridCoordinates(position, layoutConfig);
      const occupyingButton = getButtonAt(pageIndex, position);
      const isAnchor = occupyingButton?.position === position;
      const isPreview = scenarioState.selectedPage === pageIndex && scenarioState.dragState.previewSlots.includes(position);
      const previewClass = isPreview
        ? scenarioState.dragState.isValidDrop
          ? "is-drag-over"
          : "is-drag-over is-drop-invalid"
        : "";

      return `
        <div
          class="scenario-slot ${occupyingButton ? "is-occupied" : ""} ${previewClass}"
          data-slot-index="${position}"
          data-slot-page="${pageIndex}"
          style="grid-row:${row + 1}; grid-column:${col + 1};"
        >
          ${
            !occupyingButton
              ? `
                <div class="scenario-slot__placeholder">
                  <strong>Empty Slot</strong>
                  <span>Drag Button Here</span>
                </div>
              `
              : !isAnchor
                ? `<div class="scenario-slot__shadow"></div>`
                : ""
          }
        </div>
      `;
    });
    const buttons = currentPage.buttons.map((placedButton) => {
      const isSelected = scenarioState.selectedButtonId === placedButton.id;
      const isInvalid = !placedButton.isValid;
      const highlightInvalid = scenarioState.highlightInvalid && isInvalid;
      const { row, col } = getGridCoordinates(placedButton.position, layoutConfig);
      const span = getButtonSpan(placedButton.size);

      return `
        <button
          class="pad-button scenario-pad-button scenario-pad-button--${placedButton.size} ${isSelected ? "is-selected" : ""} ${highlightInvalid ? "is-invalid" : ""}"
          type="button"
          data-scenario-button-id="${placedButton.id}"
          draggable="true"
          style="grid-row:${row + 1} / span ${span.rows}; grid-column:${col + 1} / span ${span.cols};"
        >
          <span class="pad-button__status ${highlightInvalid || isInvalid ? "is-alert" : ""}"></span>
          <span class="pad-button__icon scenario-pad-button__icon" aria-hidden="true">${placedButton.icon || "B"}</span>
          <span class="pad-button__name scenario-pad-button__name">${escapeValue(placedButton.label)}</span>
          ${isInvalid ? '<span class="scenario-pad-button__badge">Not Configured</span>' : ""}
        </button>
      `;
    });

    return `
      <section class="pad-page ${scenarioState.selectedPage === pageIndex ? "is-active" : ""}" data-scenario-preview-page="${pageIndex}">
        <div
          class="scenario-pad-grid"
          style="--scenario-cols:${layoutConfig.cols}; --scenario-rows:${layoutConfig.rows};"
          aria-label="Pad layout preview page ${pageIndex + 1}"
        >
          ${cells.join("")}
          ${buttons.join("")}
        </div>
      </section>
    `;
  }

  function renderScenario() {
    initializeScenarioState();

    const layoutConfig = getLayoutConfig();
    const derivedState = getDerivedState();
    const totalButtons = getButtonsAcrossPages().length;
    const selectedButton = scenarioState.selectedButtonId ? getButtonById(scenarioState.selectedButtonId) : null;

    scenarioContent.innerHTML = `
      <div class="scenario-shell">
        <section class="panel-card scenario-hero" aria-labelledby="scenarioPanelTitle">
          <div class="scenario-hero__copy">
            <span class="panel-card__eyebrow">Scenes</span>
            <h2 id="scenarioPanelTitle">Scenario Management</h2>
            <p>Design pad layouts and configure scenario buttons</p>
          </div>
          <div class="scenario-hero__actions">
            ${getSyncStatusMarkup()}
            <button
              class="modal-btn modal-btn--ghost"
              type="button"
              id="scenarioRemoveButton"
              ${selectedButton ? "" : "disabled"}
            >
              Remove Selected
            </button>
            <button
              class="modal-btn modal-btn--primary"
              type="button"
              id="scenarioSyncButton"
              ${derivedState.canSync ? "" : "disabled"}
            >
              Sync To Pad
            </button>
          </div>
        </section>

        <div class="scenario-workspace">
          <section class="panel-card scenario-resource-panel" aria-labelledby="scenarioResourceTitle">
            <div class="scenario-resource-panel__header">
              <div>
                <span class="panel-card__eyebrow">Resources</span>
                <h3 id="scenarioResourceTitle">Scenario Assets</h3>
              </div>
            </div>

            <div class="scenario-resource-panel__body">
              <div class="scenario-tab-switch" role="tablist" aria-label="Scenario resource tabs">
                <button
                  class="scenario-tab ${scenarioState.activeLeftTab === "layouts" ? "is-active" : ""}"
                  type="button"
                  role="tab"
                  aria-selected="${scenarioState.activeLeftTab === "layouts"}"
                  data-scenario-tab="layouts"
                >
                  Pad Layout List
                </button>
                <button
                  class="scenario-tab ${scenarioState.activeLeftTab === "buttons" ? "is-active" : ""}"
                  type="button"
                  role="tab"
                  aria-selected="${scenarioState.activeLeftTab === "buttons"}"
                  data-scenario-tab="buttons"
                >
                  Pad Button List
                </button>
              </div>
              ${scenarioState.activeLeftTab === "layouts" ? renderLayoutTab() : renderButtonTab()}
            </div>
          </section>

          <section class="panel-card scenario-preview-panel" aria-labelledby="scenarioPreviewTitle">
            <div class="scenario-preview-panel__header">
              <div>
                <span class="panel-card__eyebrow">Pad Preview</span>
                <h3 id="scenarioPreviewTitle">Pad Layout Preview</h3>
              </div>
              <div class="scenario-page-switch" role="tablist" aria-label="Pad pages">
                ${scenarioState.pages
                  .map(
                    (page, index) => `
                      <button
                        class="scenario-page-btn ${scenarioState.selectedPage === index ? "is-active" : ""}"
                        type="button"
                        role="tab"
                        aria-selected="${scenarioState.selectedPage === index}"
                        data-scenario-page="${index}"
                      >
                        Page ${index + 1}
                      </button>
                    `
                  )
                  .join("")}
              </div>
            </div>

            <div class="scenario-preview-panel__meta">
              <span>Current Layout: <strong>${layoutConfig.label}</strong></span>
              <span>Slots: <strong>${layoutConfig.capacity}</strong></span>
              <span>Total Buttons: <strong>${totalButtons}</strong></span>
            </div>

            <div class="pad-preview scenario-pad-preview">
              <div class="pad-device">
                <div class="pad-device__frame">
                  <div class="pad-device__bezel">
                    <div class="pad-device__camera"></div>
                    <div class="pad-device__speaker"></div>

                    <div class="pad-screen">
                      <div class="pad-screen__topbar">
                        <div class="pad-screen__site">
                          <span class="pad-screen__site-name">Scenario Pad</span>
                          <span class="pad-screen__site-status">${scenarioState.isDirty ? "Draft" : "Synced"}</span>
                        </div>
                        <div class="pad-screen__indicators">
                          <span class="pad-indicator is-online"></span>
                          <span class="pad-indicator ${derivedState.canSync ? "" : "is-sync"}"></span>
                          <span class="pad-time">11:28</span>
                        </div>
                      </div>

                      <div class="pad-screen__title">
                        <strong>Scenario Page ${scenarioState.selectedPage + 1}</strong>
                        <span>Drag scenario buttons into available slots</span>
                      </div>

                      <div class="pad-pages__viewport scenario-pages__viewport" id="scenarioPagesViewport">
                        <div
                          class="pad-pages__track scenario-pages__track"
                          id="scenarioPagesTrack"
                          style="transform: translateX(calc(${-scenarioState.selectedPage * 100}% + ${scenarioState.pageSwipe.deltaX}px));"
                        >
                          ${scenarioState.pages.map((_, index) => renderPadSlots(index)).join("")}
                        </div>
                      </div>

                      <div class="pad-pages__footer scenario-pad-footer">
                        <div class="pad-pages__dots" aria-label="Page indicators">
                          ${scenarioState.pages
                            .map(
                              (_, index) => `
                                <button
                                  class="pad-page-dot ${scenarioState.selectedPage === index ? "is-active" : ""}"
                                  type="button"
                                  data-scenario-page-dot="${index}"
                                  aria-label="Scenario page ${index + 1}"
                                ></button>
                              `
                            )
                            .join("")}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="scenario-preview-status-note">
              ${derivedState.hasInvalidButtons ? "Contains invalid buttons that must be configured before sync." : "Swipe left or right on the pad preview to change pages."}
            </div>

            <div class="scenario-preview-panel__note">
              <strong>Placeholder Behavior</strong>
              <p>Click a placed button to open its future configuration workflow. Full button configuration and command or macro binding will be added next.</p>
            </div>
          </section>
        </div>
      </div>
    `;

    bindScenarioInteractions();
  }

  function renderActionRows(targetKey) {
    const actions = getActionListByTarget(scenarioState.currentButtonConfig, targetKey);

    if (!actions.length) {
      return `
        <div class="scenario-config-empty">
          <strong>No actions configured</strong>
          <span>Add a command or macro to this action list.</span>
        </div>
      `;
    }

    return `
      <div class="scenario-action-table">
        <div class="scenario-action-table__head">
          <span>#</span>
          <span>Type</span>
          <span>Name</span>
          <span>Action</span>
        </div>
        ${actions
          .map(
            (action, index) => `
              <div class="scenario-action-table__row">
                <span>${index + 1}</span>
                <span>${escapeValue(action.type)}</span>
                <span>
                  <strong>${escapeValue(action.name)}</strong>
                  <small>${escapeValue(action.meta || "")}</small>
                </span>
                <span>
                  <button
                    class="scenario-inline-action"
                    type="button"
                    data-config-delete-action="${targetKey}:${index}"
                  >
                    Delete
                  </button>
                </span>
              </div>
            `
          )
          .join("")}
      </div>
    `;
  }

  function renderActionSection(targetKey, heading, required = false, extraMarkup = "") {
    return `
      <section class="settings-section scenario-config-section">
        <div class="scenario-config-section__header">
          <h3>${heading}</h3>
          <button class="modal-btn modal-btn--ghost" type="button" data-config-add-action="${targetKey}">Add</button>
        </div>
        ${required ? '<span class="scenario-config-required">Required</span>' : ""}
        ${extraMarkup}
        ${renderActionRows(targetKey)}
      </section>
    `;
  }

  function renderButtonConfigBody() {
    if (!scenarioState.currentButtonConfig) {
      return "";
    }

    const config = scenarioState.currentButtonConfig;
    const validation = validateButtonConfig(config);
    scenarioState.configValidationErrors = scenarioState.configValidationErrors.length
      ? scenarioState.configValidationErrors
      : validation.errors;

    if (config.mode === "Toggle") {
      return `
        ${renderActionSection("toggleOn", "ON Actions", true)}
        ${renderActionSection("toggleOff", "OFF Actions", true)}
      `;
    }

    if (config.mode === "Repeat") {
      return `
        ${renderActionSection("repeatStart", "Start Actions")}
        ${renderActionSection(
          "repeatLoop",
          "Repeat Actions",
          true,
          `
            <label class="form-field">
              <span>Repeat Interval (ms)</span>
              <input id="scenarioRepeatIntervalInput" type="number" min="1" value="${escapeValue(config.repeatInterval)}" />
            </label>
          `
        )}
        ${renderActionSection("repeatStop", "Stop Actions")}
      `;
    }

    return renderActionSection("normal", "Action Table", true);
  }

  function renderButtonConfigModal() {
    if (!buttonConfigContent || !scenarioState.currentButtonConfig) {
      return;
    }

    const config = scenarioState.currentButtonConfig;
    const previewLabel = config.label || "Button Label";

    buttonConfigContent.innerHTML = `
      <div class="modal-window__header scenario-modal-header">
        <div>
          <h2 id="scenarioButtonConfigTitle">Button Configuration</h2>
        </div>
        <div class="scenario-modal-header__actions">
          <button class="modal-btn modal-btn--ghost" type="button" id="scenarioConfigCloseButton">Close</button>
          <button class="modal-btn modal-btn--primary" type="button" id="scenarioConfigSaveButton">Save</button>
        </div>
      </div>

      <div class="modal-form scenario-config-layout">
        <section class="settings-section scenario-config-section">
          <h3>Preview</h3>
          <div class="scenario-config-preview">
            <button class="pad-button scenario-config-preview__button" type="button">
              <span class="pad-button__status ${validateButtonConfig(config).isValid ? "is-on" : "is-alert"}"></span>
              <span class="pad-button__icon">${escapeValue(config.icon)}</span>
              <span class="pad-button__name">${escapeValue(previewLabel)}</span>
            </button>
          </div>
        </section>

        <section class="settings-section scenario-config-section">
          <h3>Icon</h3>
          <div class="scenario-icon-grid">
            ${iconCatalog
              .map(
                (icon) => `
                  <button
                    class="scenario-icon-option ${config.icon === icon ? "is-selected" : ""}"
                    type="button"
                    data-config-icon="${icon}"
                  >
                    ${icon}
                  </button>
                `
              )
              .join("")}
          </div>
        </section>

        <section class="settings-section scenario-config-section">
          <h3>Label</h3>
          <label class="form-field">
            <span>Button Label</span>
            <input id="scenarioConfigLabelInput" type="text" placeholder="Enter button label" value="${escapeValue(config.label)}" />
          </label>
        </section>

        <section class="settings-section scenario-config-section">
          <h3>Execution Mode</h3>
          <div class="scenario-mode-switch" role="radiogroup" aria-label="Execution Mode">
            ${["Normal", "Toggle", "Repeat"]
              .map(
                (mode) => `
                  <button
                    class="scenario-mode-option ${config.mode === mode ? "is-selected" : ""}"
                    type="button"
                    role="radio"
                    aria-checked="${config.mode === mode}"
                    data-config-mode="${mode}"
                  >
                    ${mode}
                  </button>
                `
              )
              .join("")}
          </div>
        </section>

        ${renderButtonConfigBody()}

        ${
          scenarioState.configValidationErrors.length
            ? `
              <section class="settings-section scenario-config-errors">
                <h3>Validation</h3>
                <ul>
                  ${scenarioState.configValidationErrors.map((error) => `<li>${escapeValue(error)}</li>`).join("")}
                </ul>
              </section>
            `
            : ""
        }
      </div>
    `;

    bindButtonConfigModalInteractions();
  }

  function renderActionPickerModal() {
    if (!actionPickerContent) {
      return;
    }

    const filteredItems = getFilteredPickerItems();

    actionPickerContent.innerHTML = `
      <div class="modal-window__header scenario-modal-header">
        <div>
          <h2 id="scenarioActionPickerTitle">Add Action</h2>
        </div>
      </div>

      <div class="modal-form">
        <div class="scenario-picker-tabs" role="tablist" aria-label="Action type">
          ${["Command", "Macro"]
            .map(
              (tab) => `
                <button
                  class="scenario-picker-tab ${scenarioState.pickerTab === tab ? "is-selected" : ""}"
                  type="button"
                  data-picker-tab="${tab}"
                >
                  ${tab}
                </button>
              `
            )
            .join("")}
        </div>

        <label class="form-field">
          <span>Search</span>
          <input id="scenarioPickerSearchInput" type="text" placeholder="Search commands or macros" value="${escapeValue(scenarioState.pickerSearch)}" />
        </label>

        <div class="scenario-picker-table">
          <div class="scenario-action-table__head">
            <span>Name</span>
            <span>Type / Protocol</span>
            <span>Description</span>
          </div>
          ${
            filteredItems.length
              ? filteredItems
                  .map(
                    (item) => `
                      <button
                        class="scenario-picker-row ${scenarioState.pickerSelectedId === item.id ? "is-selected" : ""}"
                        type="button"
                        data-picker-item="${item.id}"
                      >
                        <span>${escapeValue(item.name)}</span>
                        <span>${escapeValue(item.meta)}</span>
                        <span>${escapeValue(item.description || "")}</span>
                      </button>
                    `
                  )
                  .join("")
              : `
                <div class="scenario-config-empty">
                  <strong>No matching items</strong>
                  <span>Try adjusting your search.</span>
                </div>
              `
          }
        </div>

        <div class="modal-window__actions">
          <button class="modal-btn modal-btn--ghost" type="button" id="scenarioPickerCancelButton">Cancel</button>
          <button class="modal-btn modal-btn--primary" type="button" id="scenarioPickerConfirmButton" ${scenarioState.pickerSelectedId ? "" : "disabled"}>Confirm</button>
        </div>
      </div>
    `;

    bindActionPickerInteractions();
  }

  function bindButtonConfigModalInteractions() {
    const labelInput = document.getElementById("scenarioConfigLabelInput");
    const repeatIntervalInput = document.getElementById("scenarioRepeatIntervalInput");

    document.getElementById("scenarioConfigCloseButton")?.addEventListener("click", requestCloseButtonConfig);
    document.getElementById("scenarioConfigSaveButton")?.addEventListener("click", saveButtonConfig);

    buttonConfigContent.querySelectorAll("[data-config-icon]").forEach((iconButton) => {
      iconButton.addEventListener("click", () => {
        scenarioState.currentButtonConfig.icon = iconButton.getAttribute("data-config-icon") || "B";
        scenarioState.isConfigDirty = true;
        renderButtonConfigModal();
      });
    });

    buttonConfigContent.querySelectorAll("[data-config-mode]").forEach((modeButton) => {
      modeButton.addEventListener("click", () => {
        scenarioState.currentButtonConfig.mode = modeButton.getAttribute("data-config-mode") || "Normal";
        scenarioState.editingMode = scenarioState.currentButtonConfig.mode;
        scenarioState.configValidationErrors = [];
        scenarioState.isConfigDirty = true;
        renderButtonConfigModal();
      });
    });

    buttonConfigContent.querySelectorAll("[data-config-add-action]").forEach((addButton) => {
      addButton.addEventListener("click", () => {
        openActionPicker(addButton.getAttribute("data-config-add-action"));
      });
    });

    buttonConfigContent.querySelectorAll("[data-config-delete-action]").forEach((deleteButton) => {
      deleteButton.addEventListener("click", () => {
        const [targetKey, indexText] = String(deleteButton.getAttribute("data-config-delete-action") || "").split(":");
        deleteConfigAction(targetKey, Number(indexText));
      });
    });

    labelInput?.addEventListener("input", () => {
      scenarioState.currentButtonConfig.label = labelInput.value;
      scenarioState.isConfigDirty = true;
      const previewName = buttonConfigContent.querySelector(".scenario-config-preview__button .pad-button__name");

      if (previewName) {
        previewName.textContent = labelInput.value || "Button Label";
      }
    });

    repeatIntervalInput?.addEventListener("input", () => {
      scenarioState.currentButtonConfig.repeatInterval = repeatIntervalInput.value;
      scenarioState.isConfigDirty = true;
    });
  }

  function bindActionPickerInteractions() {
    document.getElementById("scenarioPickerCancelButton")?.addEventListener("click", closeActionPicker);
    document.getElementById("scenarioPickerConfirmButton")?.addEventListener("click", confirmActionPickerSelection);

    actionPickerContent.querySelectorAll("[data-picker-tab]").forEach((tabButton) => {
      tabButton.addEventListener("click", () => {
        scenarioState.pickerTab = tabButton.getAttribute("data-picker-tab") || "Command";
        scenarioState.pickerSelectedId = "";
        renderActionPickerModal();
      });
    });

    document.getElementById("scenarioPickerSearchInput")?.addEventListener("input", (event) => {
      scenarioState.pickerSearch = event.target.value;
      renderActionPickerModal();
      document.getElementById("scenarioPickerSearchInput")?.focus();
    });

    actionPickerContent.querySelectorAll("[data-picker-item]").forEach((rowButton) => {
      rowButton.addEventListener("click", () => {
        scenarioState.pickerSelectedId = rowButton.getAttribute("data-picker-item") || "";
        renderActionPickerModal();
      });
    });
  }

  function bindScenarioInteractions() {
    const syncButton = document.getElementById("scenarioSyncButton");
    const removeButton = document.getElementById("scenarioRemoveButton");

    syncButton?.addEventListener("click", handleSync);
    removeButton?.addEventListener("click", removeSelectedButton);

    scenarioContent.querySelectorAll("[data-scenario-tab]").forEach((tabButton) => {
      tabButton.addEventListener("click", () => {
        switchTab(tabButton.getAttribute("data-scenario-tab"));
      });
    });

    scenarioContent.querySelectorAll("[data-scenario-layout]").forEach((layoutButton) => {
      layoutButton.addEventListener("click", () => {
        requestLayoutChange(layoutButton.getAttribute("data-scenario-layout"));
      });
    });

    scenarioContent.querySelectorAll("[data-scenario-page]").forEach((pageButton) => {
      pageButton.addEventListener("click", () => {
        switchPage(Number(pageButton.getAttribute("data-scenario-page")));
      });
    });

    scenarioContent.querySelectorAll("[data-scenario-page-dot]").forEach((pageDot) => {
      pageDot.addEventListener("click", () => {
        switchPage(Number(pageDot.getAttribute("data-scenario-page-dot")));
      });
    });

    scenarioContent.querySelectorAll("[data-button-template]").forEach((buttonItem) => {
      buttonItem.addEventListener("dragstart", (event) => {
        scenarioState.dragState.mode = "create";
        scenarioState.dragState.type = buttonItem.getAttribute("data-button-template") || "";
        event.dataTransfer.effectAllowed = "copy";
        event.dataTransfer.setData("text/plain", scenarioState.dragState.type);
        syncDragPreview();
      });

      buttonItem.addEventListener("dragend", () => {
        clearDragState();
        syncDragPreview();
      });
    });

    scenarioContent.querySelectorAll("[data-slot-index]").forEach((slotElement) => {
      const slotIndex = Number(slotElement.getAttribute("data-slot-index"));
      const slotPage = Number(slotElement.getAttribute("data-slot-page"));

      slotElement.addEventListener("dragenter", (event) => {
        event.preventDefault();

        if (!scenarioState.dragState.type || slotPage !== scenarioState.selectedPage) {
          return;
        }

        const ignoreButtonId = scenarioState.dragState.mode === "move" ? scenarioState.dragState.sourceButtonId : "";
        const placement = canPlaceButtonAt(slotPage, slotIndex, scenarioState.dragState.type, ignoreButtonId);
        scenarioState.dragState.overSlot = slotIndex;
        scenarioState.dragState.previewSlots = placement.occupiedSlots;
        scenarioState.dragState.isValidDrop = placement.valid;
        syncDragPreview();
      });

      slotElement.addEventListener("dragover", (event) => {
        if (!scenarioState.dragState.type || slotPage !== scenarioState.selectedPage) {
          return;
        }

        event.preventDefault();
        event.dataTransfer.dropEffect = "copy";
        const ignoreButtonId = scenarioState.dragState.mode === "move" ? scenarioState.dragState.sourceButtonId : "";
        const placement = canPlaceButtonAt(slotPage, slotIndex, scenarioState.dragState.type, ignoreButtonId);

        if (
          scenarioState.dragState.overSlot !== slotIndex ||
          scenarioState.dragState.isValidDrop !== placement.valid ||
          scenarioState.dragState.previewSlots.join(",") !== placement.occupiedSlots.join(",")
        ) {
          scenarioState.dragState.overSlot = slotIndex;
          scenarioState.dragState.previewSlots = placement.occupiedSlots;
          scenarioState.dragState.isValidDrop = placement.valid;
          syncDragPreview();
        }
      });

      slotElement.addEventListener("dragleave", (event) => {
        if (!event.currentTarget.contains(event.relatedTarget) && scenarioState.dragState.overSlot === slotIndex) {
          scenarioState.dragState.overSlot = null;
        }
      });

      slotElement.addEventListener("drop", (event) => {
        event.preventDefault();

        if (!scenarioState.dragState.type || slotPage !== scenarioState.selectedPage) {
          clearDragState();
          syncDragPreview();
          return;
        }

        const ignoreButtonId = scenarioState.dragState.mode === "move" ? scenarioState.dragState.sourceButtonId : "";
        const placement = canPlaceButtonAt(slotPage, slotIndex, scenarioState.dragState.type, ignoreButtonId);

        if (!placement.valid) {
          clearDragState();
          syncDragPreview();
          notify("Drop failed. Choose a valid empty area for this button size.");
          return;
        }

        if (scenarioState.dragState.mode === "move" && scenarioState.dragState.sourceButtonId) {
          moveButtonToSlot(scenarioState.dragState.sourceButtonId, slotIndex);
          return;
        }

        addButtonToSlot(slotIndex);
      });
    });

    bindPreviewSwipe();

    scenarioContent.querySelectorAll("[data-scenario-button-id]").forEach((buttonElement) => {
      buttonElement.addEventListener("dragstart", (event) => {
        const buttonId = buttonElement.getAttribute("data-scenario-button-id") || "";
        const movingButton = getButtonById(buttonId);

        if (!movingButton) {
          return;
        }

        scenarioState.dragState.mode = "move";
        scenarioState.dragState.type = movingButton.size;
        scenarioState.dragState.sourceButtonId = movingButton.id;
        event.dataTransfer.effectAllowed = "move";
        event.dataTransfer.setData("text/plain", movingButton.size);
        syncDragPreview();
      });

      buttonElement.addEventListener("dragend", () => {
        clearDragState();
        syncDragPreview();
      });

      buttonElement.addEventListener("click", () => {
        scenarioState.selectedButtonId = buttonElement.getAttribute("data-scenario-button-id") || "";
        renderScenario();
        openButtonConfig(scenarioState.selectedButtonId);
      });
    });
  }

  function onConfirmLayoutChange() {
    if (!scenarioState.pendingLayout) {
      if (typeof closeModal === "function") {
        closeModal(layoutConfirmModal);
      }
      return;
    }

    applyLayout(scenarioState.pendingLayout);

    if (typeof closeModal === "function") {
      closeModal(layoutConfirmModal);
    } else {
      layoutConfirmModal?.classList.add("is-hidden");
    }
  }

  function bindPreviewSwipe() {
    const viewport = document.getElementById("scenarioPagesViewport");
    const track = document.getElementById("scenarioPagesTrack");

    if (!viewport || !track) {
      return;
    }

    const startSwipe = (clientX) => {
      scenarioState.pageSwipe.active = true;
      scenarioState.pageSwipe.startX = clientX;
      scenarioState.pageSwipe.deltaX = 0;
      viewport.classList.add("is-dragging");
      track.style.transition = "none";
    };

    const moveSwipe = (clientX) => {
      if (!scenarioState.pageSwipe.active) {
        return;
      }

      scenarioState.pageSwipe.deltaX = clientX - scenarioState.pageSwipe.startX;
      track.style.transform = `translateX(calc(${-scenarioState.selectedPage * 100}% + ${scenarioState.pageSwipe.deltaX}px))`;
    };

    const endSwipe = () => {
      if (!scenarioState.pageSwipe.active) {
        return;
      }

      const threshold = Math.max(42, viewport.clientWidth * 0.14);
      const deltaX = scenarioState.pageSwipe.deltaX;
      let nextPage = scenarioState.selectedPage;

      if (deltaX <= -threshold && scenarioState.selectedPage < scenarioState.pages.length - 1) {
        nextPage += 1;
      } else if (deltaX >= threshold && scenarioState.selectedPage > 0) {
        nextPage -= 1;
      }

      resetPageSwipe();
      viewport.classList.remove("is-dragging");
      track.style.transition = "";

      if (nextPage !== scenarioState.selectedPage) {
        switchPage(nextPage);
        return;
      }

      track.style.transform = `translateX(${-scenarioState.selectedPage * 100}%)`;
    };

    viewport.addEventListener("mousedown", (event) => {
      if (event.target.closest("[data-scenario-button-id]")) {
        return;
      }

      startSwipe(event.clientX);
    });

    viewport.addEventListener("touchstart", (event) => {
      if (event.target.closest("[data-scenario-button-id]")) {
        return;
      }

      startSwipe(event.touches[0].clientX);
    }, { passive: true });

    viewport.addEventListener("mouseleave", () => {
      if (scenarioState.pageSwipe.active) {
        endSwipe();
      }
    });

    if (scenarioState.pageSwipe.bound) {
      return;
    }

    window.addEventListener("mousemove", (event) => {
      moveSwipe(event.clientX);
    });

    window.addEventListener(
      "touchmove",
      (event) => {
        if (!scenarioState.pageSwipe.active) {
          return;
        }

        moveSwipe(event.touches[0].clientX);
      },
      { passive: true }
    );

    window.addEventListener("mouseup", endSwipe);
    window.addEventListener("touchend", endSwipe);
    scenarioState.pageSwipe.bound = true;
  }

  function canLeaveCurrentSection(nextTitle) {
    const currentTitle = document.getElementById("pageTitle")?.textContent?.trim();

    if (currentTitle !== "Scenario Management") {
      return true;
    }

    if (nextTitle === "Scenario Management") {
      return true;
    }

    if (!getDerivedState().hasUnsavedChanges && !scenarioState.isConfigDirty) {
      return true;
    }

    return window.confirm("You have unsaved changes");
  }

  function handleBeforeUnload(event) {
    const currentTitle = document.getElementById("pageTitle")?.textContent?.trim();

    if (
      currentTitle !== "Scenario Management" ||
      (!getDerivedState().hasUnsavedChanges && !scenarioState.isConfigDirty)
    ) {
      return;
    }

    event.preventDefault();
    event.returnValue = "You have unsaved changes";
  }

  function syncRouteForScenario(title) {
    if (title === "Scenario Management") {
      if (window.location.pathname !== "/scenarios") {
        window.history.pushState({}, "", "/scenarios");
      }
      return;
    }

    if (typeof syncRouteForScenario.previous === "function") {
      const previousPath = window.location.pathname;
      syncRouteForScenario.previous(title);

      if (window.location.pathname !== previousPath || !previousPath.startsWith("/scenarios")) {
        return;
      }
    }

    if (window.location.pathname.startsWith("/scenarios")) {
      window.history.pushState({}, "", "/");
    }
  }

  function syncFromLocation() {
    if (window.location.pathname === "/scenarios" || window.location.pathname === "/scenarios/") {
      if (typeof navigateToSection === "function") {
        navigateToSection("Scenario Management", false, { syncRoute: false });
      }
    }
  }

  confirmLayoutButton?.addEventListener("click", onConfirmLayoutChange);
  window.addEventListener("beforeunload", handleBeforeUnload);
  window.addEventListener("popstate", syncFromLocation);
  buttonConfigModal?.addEventListener("click", (event) => {
    if (event.target === buttonConfigModal) {
      requestCloseButtonConfig();
    }
  });
  actionPickerModal?.addEventListener("click", (event) => {
    if (event.target === actionPickerModal) {
      closeActionPicker();
    }
  });
  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") {
      return;
    }

    if (scenarioState.isPickerDialogOpen) {
      closeActionPicker();
      return;
    }

    if (scenarioState.isConfigModalOpen) {
      requestCloseButtonConfig();
    }
  });

  syncRouteForScenario.previous = typeof window.syncAppRouteForSection === "function" ? window.syncAppRouteForSection : null;
  window.syncAppRouteForSection = syncRouteForScenario;
  window.canLeaveCurrentSection = canLeaveCurrentSection;
  window.renderScenarioModule = renderScenario;

  initializeScenarioState();
  syncFromLocation();
})();
