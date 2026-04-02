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
  const iconPickerModal = document.getElementById("scenarioIconPickerModal");
  const iconPickerContent = document.getElementById("scenarioIconPickerContent");
  const layoutCatalog = [
    { id: "1x2", label: "1x2", capacity: 2, rows: 1, cols: 2 },
    { id: "2x2", label: "2x2", capacity: 4, rows: 2, cols: 2 },
    { id: "2x3", label: "2x3", capacity: 6, rows: 2, cols: 3 },
    { id: "2x4", label: "2x4", capacity: 8, rows: 2, cols: 4 },
  ];
  const templateCategoryOrder = ["Basic", "Media", "Control"];
  const buttonCatalog = [
    { id: "custom-1x1", label: "Custom Button", size: "1x1", category: "Basic", enabled: true, note: "General purpose button", icon: "P" },
    { id: "media-player-1x1", label: "Media Player", size: "1x1", category: "Media", enabled: true, note: "Transport and volume controls", icon: "M" },
    { id: "lighting-onoff-1x1", label: "Lighting On-Off", size: "1x1", category: "Control", enabled: true, note: "Dedicated light power control", icon: "L" },
    { id: "curtain-control-1x1", label: "Curtain Control", size: "1x1", category: "Control", enabled: true, note: "Open, stop and close control", icon: "C" },
    { id: "volume-control-1x1", label: "Volume Control", size: "1x1", category: "Media", enabled: true, note: "Volume slider and mute", icon: "V" },
    { id: "door-control-1x1", label: "Door Control", size: "1x1", category: "Control", enabled: true, note: "Door lock and unlock", icon: "D" },
    { id: "fan-control-1x1", label: "Fan Control", size: "1x1", category: "Control", enabled: true, note: "Fan power and speed", icon: "A" },
    { id: "dimmer-vertical-1x2", label: "Dimmer Control", size: "1x2", category: "Control", enabled: true, note: "Vertical dimmer and color temperature", icon: "L" },
    { id: "dimmer-horizontal-2x1", label: "Dimmer Control", size: "2x1", category: "Control", enabled: true, note: "Horizontal dimmer and color temperature", icon: "L" },
    { id: "thermostat-2x2", label: "Thermostat", size: "2x2", category: "Control", enabled: true, note: "HVAC mode and temperature control", icon: "A" },
    { id: "ptz-camera-2x2", label: "PTZ Camera", size: "2x2", category: "Control", enabled: true, note: "PTZ movement and zoom", icon: "P" },
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
    mediaPrevious: "Previous Action",
    mediaPlayPause: "Play / Pause Action",
    mediaNext: "Next Action",
    mediaVolume: "Volume Action",
    lightOn: "ON Action",
    lightOff: "OFF Action",
    curtainOpen: "Open Action",
    curtainStop: "Stop Action",
    curtainClose: "Close Action",
    volumeMute: "Mute Action",
    volumeAdjust: "Volume Control Action",
    doorLock: "Lock Action",
    doorUnlock: "Unlock Action",
    fanPower: "Power Action",
    fanSpeed1: "Speed 1 Action",
    fanSpeed2: "Speed 2 Action",
    fanSpeed3: "Speed 3 Action",
    dimmerPower: "Power Action",
    dimmerBrightness: "Brightness Control Action",
    dimmerColorTemp: "Color Temperature Control Action",
    thermostatPower: "Power Action",
    thermostatTempUp: "Temp + Action",
    thermostatTempDown: "Temp - Action",
    thermostatModeCool: "Cool Action",
    thermostatModeHeat: "Heat Action",
    thermostatModeFan: "Fan Action",
    thermostatModeAuto: "Auto Action",
    ptzPower: "Power Action",
    ptzUp: "Up Action",
    ptzDown: "Down Action",
    ptzLeft: "Left Action",
    ptzRight: "Right Action",
    ptzZoomIn: "Zoom In Action",
    ptzZoomOut: "Zoom Out Action",
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
    isIconPickerOpen: false,
    uploadedIconName: "",
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

  function getMaterialSymbolName(iconKey) {
    const icons = {
      P: "tv",
      L: "lightbulb",
      A: "air",
      M: "play_circle",
      S: "tune",
      V: "volume_up",
      C: "curtains",
      D: "door_front",
      UP: "upload",
    };

    return icons[iconKey] || "widgets";
  }

  function renderIconMarkup(iconKey, className = "") {
    return `<span class="${className} material-symbols-outlined" aria-hidden="true">${getMaterialSymbolName(iconKey)}</span>`;
  }

  function getEmptyButtonConfig(button) {
    const templateId = button.buttonTemplateType || "custom-1x1";
    const storedBindings = button.config?.actionBindings || {};
    const actionBindings = {};

    getTemplateActionTargets(templateId).forEach((targetKey) => {
      actionBindings[targetKey] = Array.isArray(storedBindings[targetKey]) ? storedBindings[targetKey].map((item) => ({ ...item })) : [];
    });

    return {
      buttonId: button.id,
      templateId,
      icon: button.icon || getTemplateDefinition(templateId).icon || "P",
      label: button.label || "",
      mode: button.executionMode || "Normal",
      actionBindings,
      repeatInterval: String(button.config?.repeatInterval || "1000"),
      previewState: { ...(button.previewState || getDefaultPreviewState(templateId)) },
      mockControlState: { ...(button.mockControlState || getDefaultMockControlState(templateId)) },
    };
  }

  function getActionListByTarget(config, targetKey) {
    return config.actionBindings?.[targetKey] || [];
  }

  function setActionListByTarget(config, targetKey, nextActions) {
    config.actionBindings[targetKey] = nextActions;
  }

  function validateButtonConfig(config) {
    const errors = [];
    const templateId = config.templateId || "custom-1x1";
    const mode = config.mode || "Normal";

    if (templateId === "custom-1x1") {
      if (mode === "Normal" && getActionListByTarget(config, "normal").length === 0) {
        errors.push("Normal mode requires at least one action.");
      }

      if (mode === "Toggle") {
        if (getActionListByTarget(config, "toggleOn").length === 0) {
          errors.push("Toggle mode requires at least one ON action.");
        }

        if (getActionListByTarget(config, "toggleOff").length === 0) {
          errors.push("Toggle mode requires at least one OFF action.");
        }
      }

      if (mode === "Repeat") {
        if (getActionListByTarget(config, "repeatLoop").length === 0) {
          errors.push("Repeat mode requires at least one Repeat action.");
        }

        if (!config.repeatInterval || Number(config.repeatInterval) <= 0 || Number.isNaN(Number(config.repeatInterval))) {
          errors.push("Repeat mode requires a valid repeat interval.");
        }
      }
    } else {
      getTemplateActionTargets(templateId).forEach((targetKey) => {
        if (getActionListByTarget(config, targetKey).length === 0) {
          errors.push(`${actionTargetLabels[targetKey]} is required.`);
        }
      });
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
    return buttonCatalog.find((button) => button.id === size || button.size === size) || buttonCatalog[0];
  }

  function getTemplateDefinition(templateId) {
    return buttonCatalog.find((button) => button.id === templateId) || buttonCatalog[0];
  }

  function getDefaultPreviewState(templateId) {
    const defaults = {
      "custom-1x1": {},
      "media-player-1x1": { volume: 62, playback: "Play" },
      "lighting-onoff-1x1": { power: true },
      "curtain-control-1x1": { curtainState: "Stop" },
      "volume-control-1x1": { volume: 54, muted: false },
      "door-control-1x1": { locked: true },
      "fan-control-1x1": { speed: 2, powered: true },
      "dimmer-vertical-1x2": { selectedDimmerTarget: "brightness", level: 72, power: true },
      "dimmer-horizontal-2x1": { selectedDimmerTarget: "brightness", level: 68, power: true },
      "thermostat-2x2": { temperature: 22, mode: "Cool", power: true },
      "ptz-camera-2x2": { zoom: 2, power: true },
    };

    return { ...(defaults[templateId] || {}) };
  }

  function getDefaultMockControlState(templateId) {
    const defaults = {
      "custom-1x1": { power: true },
      "media-player-1x1": { active: true },
      "lighting-onoff-1x1": { power: true },
      "curtain-control-1x1": { active: true },
      "volume-control-1x1": { active: true },
      "door-control-1x1": { active: true },
      "fan-control-1x1": { power: true },
      "dimmer-vertical-1x2": { power: true },
      "dimmer-horizontal-2x1": { power: true },
      "thermostat-2x2": { power: true },
      "ptz-camera-2x2": { power: true },
    };

    return { ...(defaults[templateId] || {}) };
  }

  function getTemplateActionTargets(templateId) {
    const targetMap = {
      "custom-1x1": ["normal"],
      "media-player-1x1": ["mediaPrevious", "mediaPlayPause", "mediaNext", "mediaVolume"],
      "lighting-onoff-1x1": ["lightOn", "lightOff"],
      "curtain-control-1x1": ["curtainOpen", "curtainStop", "curtainClose"],
      "volume-control-1x1": ["volumeMute", "volumeAdjust"],
      "door-control-1x1": ["doorLock", "doorUnlock"],
      "fan-control-1x1": ["fanPower", "fanSpeed1", "fanSpeed2", "fanSpeed3"],
      "dimmer-vertical-1x2": ["dimmerPower", "dimmerBrightness", "dimmerColorTemp"],
      "dimmer-horizontal-2x1": ["dimmerPower", "dimmerBrightness", "dimmerColorTemp"],
      "thermostat-2x2": [
        "thermostatPower",
        "thermostatTempUp",
        "thermostatTempDown",
        "thermostatModeCool",
        "thermostatModeHeat",
        "thermostatModeFan",
        "thermostatModeAuto",
      ],
      "ptz-camera-2x2": ["ptzPower", "ptzUp", "ptzDown", "ptzLeft", "ptzRight", "ptzZoomIn", "ptzZoomOut"],
    };

    return targetMap[templateId] || ["normal"];
  }

  function getButtonSpan(size) {
    const catalogMatch = getButtonCatalogItem(size);
    const normalized = String(catalogMatch?.size || size || "1x1");

    if (normalized === "1x2") {
      return { rows: 2, cols: 1 };
    }

    if (normalized === "2x1") {
      return { rows: 1, cols: 2 };
    }

    const [rows, cols] = normalized.split("x").map((value) => Math.max(1, Number(value) || 1));
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
    const buttonTemplate = getTemplateDefinition(scenarioState.dragState.type || "custom-1x1");

    scenarioState.buttonCounter += 1;

    return {
      id: `BTN-${String(scenarioState.buttonCounter).padStart(3, "0")}`,
      page: scenarioState.selectedPage,
      position,
      size: buttonTemplate.size,
      buttonTemplateType: buttonTemplate.id,
      buttonCategory: buttonTemplate.category,
      buttonSize: buttonTemplate.size,
      icon: buttonTemplate.icon,
      label: buttonTemplate.label,
      previewState: getDefaultPreviewState(buttonTemplate.id),
      mockControlState: getDefaultMockControlState(buttonTemplate.id),
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
      actionBindings: Object.fromEntries(
        Object.entries(scenarioState.currentButtonConfig.actionBindings || {}).map(([key, actions]) => [
          key,
          actions.map((item) => ({ ...item })),
        ])
      ),
      repeatInterval: scenarioState.currentButtonConfig.repeatInterval,
    };
    targetButton.previewState = { ...scenarioState.currentButtonConfig.previewState };
    targetButton.mockControlState = { ...scenarioState.currentButtonConfig.mockControlState };
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

  function openIconPicker() {
    scenarioState.isIconPickerOpen = true;
    renderIconPickerModal();
    openModal(iconPickerModal);
  }

  function closeIconPicker() {
    scenarioState.isIconPickerOpen = false;
    closeModal(iconPickerModal);
  }

  function applyConfigIcon(iconValue) {
    if (!scenarioState.currentButtonConfig) {
      return;
    }

    scenarioState.currentButtonConfig.icon = iconValue || "B";
    scenarioState.isConfigDirty = true;
    closeIconPicker();
    renderButtonConfigModal();
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
                <div class="scenario-layout-card__copy">
                  <strong>${layout.label}</strong>
                  <span>${layout.capacity} slots</span>
                </div>
                <div
                  class="scenario-layout-card__preview"
                  style="--layout-cols:${layout.cols}; --layout-rows:${layout.rows};"
                  aria-hidden="true"
                >
                  ${Array.from({ length: layout.capacity }, () => '<span class="scenario-layout-card__slot"></span>').join("")}
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
    const groupedMarkup = templateCategoryOrder
      .map((category) => {
        const categoryItems = buttonCatalog.filter((button) => button.category === category);

        return `
          <section class="scenario-library-group">
            <div class="scenario-library-group__header">
              <strong>${category}</strong>
            </div>
            <div class="scenario-resource-list" role="list" aria-label="${category} templates">
              ${categoryItems
                .map(
                  (button) => `
                    <div
                      class="scenario-button-library-item scenario-button-library-item--${button.size} ${button.enabled ? "" : "is-disabled"}"
                      ${button.enabled ? `draggable="true" data-button-template="${button.id}"` : ""}
                    >
                      <div class="scenario-button-library-item__preview">
                        <div class="pad-button scenario-pad-button scenario-button-library-item__preview-button scenario-button-library-item__preview-button--${button.size} scenario-pad-button--${button.size}" aria-hidden="true">
                          ${renderTemplateBody(
                            {
                              buttonTemplateType: button.id,
                              icon: button.icon,
                              label: button.label,
                              previewState: getDefaultPreviewState(button.id),
                            },
                            "library"
                          )}
                        </div>
                      </div>
                      <div class="scenario-button-library-item__copy">
                        <strong>${button.label}</strong>
                      </div>
                    </div>
                  `
                )
                .join("")}
            </div>
          </section>
        `;
      })
      .join("");

    return `
      <div class="scenario-library-groups">${groupedMarkup}</div>
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
          ${renderTemplateBody(placedButton, "pad")}
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
                        </div>
                        <div class="pad-screen__indicators">
                          <span class="material-symbols-outlined pad-topbar__icon" aria-hidden="true">wifi</span>
                          <span class="pad-time">11:28</span>
                        </div>
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
                                >
                                </button>
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

  function renderSmallFeatureIcon(iconKey, className = "") {
    return renderIconMarkup(iconKey, `scenario-template__feature-icon ${className}`);
  }

  function renderControlChip(label, className = "") {
    return `<span class="scenario-template__chip ${className}">${escapeValue(label)}</span>`;
  }

  function getControlSymbolName(controlKey) {
    const icons = {
      previous: "skip_previous",
      play: "play_arrow",
      pause: "pause",
      next: "skip_next",
      powerOn: "power_settings_new",
      powerOff: "power_off",
      open: "unfold_more",
      stop: "stop",
      close: "close_fullscreen",
      lock: "lock",
      unlock: "lock_open",
      speed1: "looks_one",
      speed2: "looks_two",
      speed3: "looks_3",
      brightness: "light_mode",
      colorTemp: "wb_incandescent",
      up: "keyboard_arrow_up",
      down: "keyboard_arrow_down",
      left: "keyboard_arrow_left",
      right: "keyboard_arrow_right",
      zoomIn: "zoom_in",
      zoomOut: "zoom_out",
      tempUp: "add",
      tempDown: "remove",
    };

    return icons[controlKey] || "radio_button_checked";
  }

  function renderControlIconChip(controlKey, className = "", label = "") {
    return `
      <span class="scenario-template__chip scenario-template__chip--icon ${className}" aria-label="${escapeValue(label || controlKey)}" title="${escapeValue(label || controlKey)}">
        <span class="material-symbols-outlined" aria-hidden="true">${getControlSymbolName(controlKey)}</span>
      </span>
    `;
  }

  function renderTemplateBody(buttonLike, context = "pad") {
    const templateId = buttonLike.buttonTemplateType || buttonLike.templateId || "custom-1x1";
    const label = buttonLike.label || getTemplateDefinition(templateId).label;
    const icon = buttonLike.icon || getTemplateDefinition(templateId).icon || "P";
    const previewState = buttonLike.previewState || {};
    const isCustom = templateId === "custom-1x1";

    if (templateId === "custom-1x1") {
      return `
        <div class="scenario-template scenario-template--custom">
          ${context === "config" ? renderSmallFeatureIcon(icon, "is-large is-custom-trigger") : renderIconMarkup(icon, "pad-button__icon scenario-template__main-icon")}
          <span class="pad-button__name scenario-template__label">${escapeValue(label)}</span>
        </div>
      `;
    }

    if (templateId === "media-player-1x1") {
      return `
        <div class="scenario-template scenario-template--media-player">
          ${renderSmallFeatureIcon("M", "is-top-left")}
          <div class="scenario-template__transport">
            ${renderControlIconChip("previous", "", "Previous")}
            ${renderControlIconChip(previewState.playback === "Pause" ? "pause" : "play", "is-active", previewState.playback || "Play")}
            ${renderControlIconChip("next", "", "Next")}
          </div>
          <div class="scenario-template__slider">
            <span style="width:${previewState.volume || 62}%"></span>
          </div>
        </div>
      `;
    }

    if (templateId === "lighting-onoff-1x1") {
      return `
        <div class="scenario-template scenario-template--dual">
          ${renderSmallFeatureIcon("L", "is-top-left")}
          <div class="scenario-template__dual-actions">
            ${renderControlIconChip("powerOn", "is-active", "On")}
            ${renderControlIconChip("powerOff", "", "Off")}
          </div>
        </div>
      `;
    }

    if (templateId === "curtain-control-1x1") {
      return `
        <div class="scenario-template scenario-template--triple">
          ${renderSmallFeatureIcon("C", "is-top-left")}
          <div class="scenario-template__triple-actions">
            ${renderControlIconChip("open", "", "Open")}
            ${renderControlIconChip("stop", "is-active", "Stop")}
            ${renderControlIconChip("close", "", "Close")}
          </div>
        </div>
      `;
    }

    if (templateId === "volume-control-1x1") {
      return `
        <div class="scenario-template scenario-template--volume">
          ${renderSmallFeatureIcon("V", "is-top-left")}
          ${renderIconMarkup("V", "scenario-template__mute")}
          <div class="scenario-template__slider">
            <span style="width:${previewState.volume || 54}%"></span>
          </div>
        </div>
      `;
    }

    if (templateId === "door-control-1x1") {
      return `
        <div class="scenario-template scenario-template--dual">
          ${renderSmallFeatureIcon("D", "is-top-left")}
          <div class="scenario-template__dual-actions">
            ${renderControlIconChip("lock", previewState.locked ? "is-active" : "", "Lock")}
            ${renderControlIconChip("unlock", !previewState.locked ? "is-active" : "", "Unlock")}
          </div>
        </div>
      `;
    }

    if (templateId === "fan-control-1x1") {
      return `
        <div class="scenario-template scenario-template--fan">
          ${renderSmallFeatureIcon("A", "is-top-left")}
          ${renderSmallFeatureIcon("P", "is-top-right")}
          <div class="scenario-template__speed-stack">
            ${renderControlIconChip("speed1", previewState.speed === 1 ? "is-active" : "", "Speed 1")}
            ${renderControlIconChip("speed2", previewState.speed === 2 ? "is-active" : "", "Speed 2")}
            ${renderControlIconChip("speed3", previewState.speed === 3 ? "is-active" : "", "Speed 3")}
          </div>
        </div>
      `;
    }

    if (templateId === "dimmer-vertical-1x2") {
      return `
        <div class="scenario-template scenario-template--dimmer-vertical">
          <div class="scenario-template__corner-row">
            ${renderSmallFeatureIcon("L", "is-top-left")}
            ${renderSmallFeatureIcon("P", "is-top-right")}
          </div>
          <div class="scenario-template__vertical-slider"><span style="height:${previewState.level || 72}%"></span></div>
          <div class="scenario-template__bottom-icons">
            ${renderControlIconChip("brightness", previewState.selectedDimmerTarget === "brightness" ? "is-active" : "", "Brightness")}
            ${renderControlIconChip("colorTemp", previewState.selectedDimmerTarget === "colorTemp" ? "is-active" : "", "Color Temperature")}
          </div>
        </div>
      `;
    }

    if (templateId === "dimmer-horizontal-2x1") {
      return `
        <div class="scenario-template scenario-template--dimmer-horizontal">
          <div class="scenario-template__corner-row">
            ${renderSmallFeatureIcon("L", "is-top-left")}
            ${renderSmallFeatureIcon("P", "is-top-right")}
          </div>
          <div class="scenario-template__horizontal-layout">
            <div class="scenario-template__stacked-icons">
              ${renderControlIconChip("brightness", previewState.selectedDimmerTarget === "brightness" ? "is-active" : "", "Brightness")}
              ${renderControlIconChip("colorTemp", previewState.selectedDimmerTarget === "colorTemp" ? "is-active" : "", "Color Temperature")}
            </div>
            <div class="scenario-template__slider scenario-template__slider--wide">
              <span style="width:${previewState.level || 68}%"></span>
            </div>
          </div>
        </div>
      `;
    }

    if (templateId === "thermostat-2x2") {
      return `
        <div class="scenario-template scenario-template--thermostat">
          <div class="scenario-template__corner-row">
            ${renderSmallFeatureIcon("A", "is-top-left")}
            ${renderSmallFeatureIcon("P", "is-top-right")}
          </div>
          <div class="scenario-template__thermostat-core">
            ${renderControlIconChip("tempUp", "", "Increase Temperature")}
            <strong>${escapeValue(String(previewState.temperature || 22))}°</strong>
            ${renderControlIconChip("tempDown", "", "Decrease Temperature")}
          </div>
          <div class="scenario-template__mode-row">
            ${["Cool", "Heat", "Fan", "Auto"].map((mode) => renderControlChip(mode, previewState.mode === mode ? "is-active" : "")).join("")}
          </div>
        </div>
      `;
    }

    return `
      <div class="scenario-template scenario-template--ptz">
        <div class="scenario-template__corner-row">
          ${renderSmallFeatureIcon("P", "is-top-left")}
          ${renderSmallFeatureIcon("D", "is-top-right")}
        </div>
        <div class="scenario-template__ptz-grid">
          <span></span>
          ${renderControlIconChip("up", "", "Up")}
          <span></span>
          ${renderControlIconChip("left", "", "Left")}
          ${renderControlIconChip("right", "", "Right")}
          <span></span>
          ${renderControlIconChip("down", "", "Down")}
          <span></span>
        </div>
        <div class="scenario-template__zoom-row">
          ${renderControlIconChip("zoomIn", "", "Zoom In")}
          ${renderControlIconChip("zoomOut", "", "Zoom Out")}
        </div>
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
    const templateId = config.templateId || "custom-1x1";
    const validation = validateButtonConfig(config);
    scenarioState.configValidationErrors = scenarioState.configValidationErrors.length
      ? scenarioState.configValidationErrors
      : validation.errors;

    if (templateId === "custom-1x1") {
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

    const templateSections = {
      "media-player-1x1": [
        { key: "mediaPrevious", title: "Previous Action", required: true },
        { key: "mediaPlayPause", title: "Play / Pause Action", required: true },
        { key: "mediaNext", title: "Next Action", required: true },
        { key: "mediaVolume", title: "Volume Action", required: true },
      ],
      "lighting-onoff-1x1": [
        { key: "lightOn", title: "ON Action", required: true },
        { key: "lightOff", title: "OFF Action", required: true },
      ],
      "curtain-control-1x1": [
        { key: "curtainOpen", title: "Open Action", required: true },
        { key: "curtainStop", title: "Stop Action", required: true },
        { key: "curtainClose", title: "Close Action", required: true },
      ],
      "volume-control-1x1": [
        { key: "volumeMute", title: "Mute Action", required: true },
        { key: "volumeAdjust", title: "Volume Control Action", required: true },
      ],
      "door-control-1x1": [
        { key: "doorLock", title: "Lock Action", required: true },
        { key: "doorUnlock", title: "Unlock Action", required: true },
      ],
      "fan-control-1x1": [
        { key: "fanPower", title: "Power Action", required: true },
        { key: "fanSpeed1", title: "Speed 1 Action", required: true },
        { key: "fanSpeed2", title: "Speed 2 Action", required: true },
        { key: "fanSpeed3", title: "Speed 3 Action", required: true },
      ],
      "dimmer-vertical-1x2": [
        { key: "dimmerPower", title: "Power Action", required: true },
        { key: "dimmerBrightness", title: "Brightness Control Action", required: true },
        { key: "dimmerColorTemp", title: "Color Temperature Control Action", required: true },
      ],
      "dimmer-horizontal-2x1": [
        { key: "dimmerPower", title: "Power Action", required: true },
        { key: "dimmerBrightness", title: "Brightness Control Action", required: true },
        { key: "dimmerColorTemp", title: "Color Temperature Control Action", required: true },
      ],
      "thermostat-2x2": [
        { key: "thermostatPower", title: "Power Action", required: true },
        { key: "thermostatTempUp", title: "Temp + Action", required: true },
        { key: "thermostatTempDown", title: "Temp - Action", required: true },
        { key: "thermostatModeCool", title: "Cool Action", required: true },
        { key: "thermostatModeHeat", title: "Heat Action", required: true },
        { key: "thermostatModeFan", title: "Fan Action", required: true },
        { key: "thermostatModeAuto", title: "Auto Action", required: true },
      ],
      "ptz-camera-2x2": [
        { key: "ptzPower", title: "Power Action", required: true },
        { key: "ptzUp", title: "Up Action", required: true },
        { key: "ptzDown", title: "Down Action", required: true },
        { key: "ptzLeft", title: "Left Action", required: true },
        { key: "ptzRight", title: "Right Action", required: true },
        { key: "ptzZoomIn", title: "Zoom In Action", required: true },
        { key: "ptzZoomOut", title: "Zoom Out Action", required: true },
      ],
    };

    const extraControls =
      templateId === "dimmer-vertical-1x2" || templateId === "dimmer-horizontal-2x1"
        ? `
          <section class="settings-section scenario-config-section">
            <h3>Default Selected Control</h3>
            <div class="scenario-mode-switch">
              ${["brightness", "colorTemp"]
                .map(
                  (target) => `
                    <button
                      class="scenario-mode-option ${config.previewState.selectedDimmerTarget === target ? "is-selected" : ""}"
                      type="button"
                      data-config-preview-target="${target}"
                    >
                      ${target === "brightness" ? "Brightness" : "Color Temperature"}
                    </button>
                  `
                )
                .join("")}
            </div>
          </section>
        `
        : templateId === "thermostat-2x2"
          ? `
            <section class="settings-section scenario-config-section">
              <h3>Mock Preview State</h3>
              <div class="scenario-template-settings-grid">
                <label class="form-field">
                  <span>Temperature</span>
                  <input id="scenarioTemplateTempInput" type="number" value="${escapeValue(String(config.previewState.temperature || 22))}" />
                </label>
                <label class="form-field">
                  <span>Default Mode</span>
                  <select id="scenarioTemplateModeSelect">
                    ${["Cool", "Heat", "Fan", "Auto"]
                      .map((mode) => `<option value="${mode}" ${config.previewState.mode === mode ? "selected" : ""}>${mode}</option>`)
                      .join("")}
                  </select>
                </label>
              </div>
            </section>
          `
          : "";

    return `
      ${extraControls}
      ${templateSections[templateId].map((section) => renderActionSection(section.key, section.title, section.required)).join("")}
    `;
  }

  function renderIconPickerModal() {
    if (!iconPickerContent) {
      return;
    }

    iconPickerContent.innerHTML = `
      <div class="modal-window__header scenario-modal-header">
        <div>
          <h2 id="scenarioIconPickerTitle">Select Icon</h2>
        </div>
        <div class="scenario-modal-header__actions">
          <button class="modal-btn modal-btn--ghost" type="button" id="scenarioIconPickerCloseButton">Close</button>
        </div>
      </div>

      <div class="modal-form">
        <section class="settings-section scenario-config-section">
          <h3>Preset Icons</h3>
          <div class="scenario-icon-grid scenario-icon-grid--picker">
            ${iconCatalog
              .map(
                (icon) => `
                  <button
                    class="scenario-icon-option ${scenarioState.currentButtonConfig?.icon === icon ? "is-selected" : ""}"
                    type="button"
                    data-icon-picker-value="${icon}"
                  >
                    ${renderIconMarkup(icon, "scenario-icon-option__graphic")}
                  </button>
                `
              )
              .join("")}
          </div>
        </section>

        <section class="settings-section scenario-config-section">
          <h3>Upload Icon</h3>
          <label class="scenario-upload-field">
            <input id="scenarioIconUploadInput" type="file" accept="image/*" />
            <span>Choose icon file</span>
            <small>${escapeValue(scenarioState.uploadedIconName || "No file selected")}</small>
          </label>
          <div class="modal-window__actions">
            <button class="modal-btn modal-btn--primary" type="button" id="scenarioUseUploadedIconButton" ${scenarioState.uploadedIconName ? "" : "disabled"}>Use Uploaded Icon</button>
          </div>
        </section>
      </div>
    `;

    bindIconPickerInteractions();
  }

  function renderButtonConfigModal() {
    if (!buttonConfigContent || !scenarioState.currentButtonConfig) {
      return;
    }

    const config = scenarioState.currentButtonConfig;
    const previewLabel = config.label || "Button Label";
    const isCustomTemplate = config.templateId === "custom-1x1";

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

      <div class="modal-form scenario-config-flow">
        <section class="settings-section scenario-config-section scenario-config-section--hero">
          <h3>Preview</h3>
          <div class="scenario-config-preview scenario-config-preview--hero">
            <div class="pad-button scenario-config-preview__button scenario-config-preview__button--large">
              <span class="pad-button__status ${validateButtonConfig(config).isValid ? "is-on" : "is-alert"}"></span>
              ${
                isCustomTemplate
                  ? `
                    <button class="scenario-config-icon-trigger scenario-config-icon-trigger--inside" type="button" id="scenarioConfigIconTrigger" aria-label="Select icon">
                      ${renderIconMarkup(config.icon, "pad-button__icon scenario-config-icon-trigger__value")}
                    </button>
                    <label class="scenario-config-label-field scenario-config-label-field--inside" for="scenarioConfigLabelInput">
                      <input
                        id="scenarioConfigLabelInput"
                        type="text"
                        maxlength="10"
                        placeholder="Enter button label"
                        value="${escapeValue(config.label)}"
                      />
                      <small>${escapeValue(String((config.label || "").length))}/10</small>
                    </label>
                  `
                  : renderTemplateBody({
                      buttonTemplateType: config.templateId,
                      icon: config.icon,
                      label: previewLabel,
                      previewState: config.previewState,
                    }, "config")
              }
            </div>
          </div>
        </section>

        ${
          isCustomTemplate
            ? `
              <section class="settings-section scenario-config-section scenario-config-section--mode">
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
            `
            : ""
        }

        <section class="scenario-config-actions-stack">
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
        </section>
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
    const tempInput = document.getElementById("scenarioTemplateTempInput");
    const modeSelect = document.getElementById("scenarioTemplateModeSelect");

    document.getElementById("scenarioConfigCloseButton")?.addEventListener("click", requestCloseButtonConfig);
    document.getElementById("scenarioConfigSaveButton")?.addEventListener("click", saveButtonConfig);
    document.getElementById("scenarioConfigIconTrigger")?.addEventListener("click", openIconPicker);

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

    buttonConfigContent.querySelectorAll("[data-config-preview-target]").forEach((targetButton) => {
      targetButton.addEventListener("click", () => {
        scenarioState.currentButtonConfig.previewState.selectedDimmerTarget =
          targetButton.getAttribute("data-config-preview-target") || "brightness";
        scenarioState.isConfigDirty = true;
        renderButtonConfigModal();
      });
    });

    buttonConfigContent.querySelectorAll("[data-config-delete-action]").forEach((deleteButton) => {
      deleteButton.addEventListener("click", () => {
        const [targetKey, indexText] = String(deleteButton.getAttribute("data-config-delete-action") || "").split(":");
        deleteConfigAction(targetKey, Number(indexText));
      });
    });

    labelInput?.addEventListener("input", () => {
      scenarioState.currentButtonConfig.label = labelInput.value.slice(0, 10);
      scenarioState.isConfigDirty = true;
      const previewName = buttonConfigContent.querySelector(".scenario-config-preview__button .pad-button__name");
      const count = buttonConfigContent.querySelector(".scenario-config-label-field small");

      if (previewName) {
        previewName.textContent = scenarioState.currentButtonConfig.label || "Button Label";
      }

      if (count) {
        count.textContent = `${scenarioState.currentButtonConfig.label.length}/10`;
      }
    });

    repeatIntervalInput?.addEventListener("input", () => {
      scenarioState.currentButtonConfig.repeatInterval = repeatIntervalInput.value;
      scenarioState.isConfigDirty = true;
    });

    tempInput?.addEventListener("input", () => {
      scenarioState.currentButtonConfig.previewState.temperature = Number(tempInput.value) || 22;
      scenarioState.isConfigDirty = true;
    });

    modeSelect?.addEventListener("change", () => {
      scenarioState.currentButtonConfig.previewState.mode = modeSelect.value;
      scenarioState.isConfigDirty = true;
    });
  }

  function bindIconPickerInteractions() {
    document.getElementById("scenarioIconPickerCloseButton")?.addEventListener("click", closeIconPicker);
    document.getElementById("scenarioUseUploadedIconButton")?.addEventListener("click", () => {
      applyConfigIcon("UP");
    });

    iconPickerContent.querySelectorAll("[data-icon-picker-value]").forEach((iconButton) => {
      iconButton.addEventListener("click", () => {
        applyConfigIcon(iconButton.getAttribute("data-icon-picker-value") || "B");
      });
    });

    document.getElementById("scenarioIconUploadInput")?.addEventListener("change", (event) => {
      const file = event.target.files?.[0];
      scenarioState.uploadedIconName = file ? file.name : "";
      renderIconPickerModal();
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
  iconPickerModal?.addEventListener("click", (event) => {
    if (event.target === iconPickerModal) {
      closeIconPicker();
    }
  });
  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") {
      return;
    }

    if (scenarioState.isIconPickerOpen) {
      closeIconPicker();
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
