(function automationModule() {
  const automationPanel = document.getElementById("automationPanel");
  const automationContent = document.getElementById("automationContent");
  const automationDeleteModal = document.getElementById("automationDeleteModal");
  const automationDeleteName = document.getElementById("automationDeleteName");
  const automationDeleteMessage = document.getElementById("automationDeleteMessage");
  const confirmAutomationDeleteButton = document.getElementById("confirmAutomationDeleteButton");

  if (!automationPanel || !automationContent) {
    return;
  }

  const dayOptions = [
    { key: "MO", label: "Mon", value: 1 },
    { key: "TU", label: "Tue", value: 2 },
    { key: "WE", label: "Wed", value: 3 },
    { key: "TH", label: "Thu", value: 4 },
    { key: "FR", label: "Fri", value: 5 },
    { key: "SA", label: "Sat", value: 6 },
    { key: "SU", label: "Sun", value: 0 },
  ];

  const automationState = {
    initialized: false,
    schedules: [],
    search: "",
    filter: "All",
    deleteTargetId: "",
    draft: null,
  };

  function safeEscape(value) {
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

  function getCommandOptions() {
    return Array.isArray(state?.commands)
      ? state.commands.map((command) => ({ id: command.id, name: command.name }))
      : [];
  }

  function getMacroOptions() {
    return Array.isArray(state?.macros)
      ? state.macros.map((macro) => ({ id: macro.id, name: macro.name }))
      : [];
  }

  function getItemOptions(itemType) {
    return itemType === "Macro" ? getMacroOptions() : getCommandOptions();
  }

  function getBoundItemName(itemType, itemId) {
    return getItemOptions(itemType).find((item) => item.id === itemId)?.name || "Missing item";
  }

  function getRouteState(pathname = window.location.pathname) {
    if (pathname === "/scheduling" || pathname === "/scheduling/") {
      return { mode: "list", id: "" };
    }

    if (pathname === "/scheduling/create") {
      return { mode: "create", id: "" };
    }

    if (pathname.startsWith("/scheduling/edit/")) {
      return { mode: "edit", id: decodeURIComponent(pathname.split("/").pop() || "") };
    }

    return null;
  }

  function navigate(pathname, options = {}) {
    const replace = options.replace === true;

    if (window.location.pathname !== pathname) {
      window.history[replace ? "replaceState" : "pushState"]({}, "", pathname);
    }

    syncFromLocation();
  }

  function syncRoute(title) {
    if (title === "Scheduling") {
      if (window.location.pathname !== "/scheduling") {
        window.history.pushState({}, "", "/scheduling");
      }
      renderCurrentRoute();
      return;
    }

    if (window.location.pathname.startsWith("/scheduling") || window.location.pathname.startsWith("/jobs")) {
      window.history.pushState({}, "", "/");
    }
  }

  function generateId(prefix, items) {
    const maxValue = items.reduce((maxId, item) => {
      const matched = String(item.id || "").match(/(\d+)$/);
      return Math.max(maxId, matched ? Number(matched[1]) : 0);
    }, 0);

    return `${prefix}-${String(maxValue + 1).padStart(3, "0")}`;
  }

  function getEmptyDraft() {
    return {
      id: "",
      name: "",
      description: "",
      itemType: "Command",
      itemId: "",
      triggerType: "Interval",
      status: "Enabled",
      config: {
        everyHours: "4",
        startTime: "00:00",
        days: ["MO", "TU", "WE", "TH", "FR"],
        time: "08:30",
        date: "",
      },
    };
  }

  function cloneDraft(schedule) {
    return {
      id: schedule.id,
      name: schedule.name,
      description: schedule.description || "",
      itemType: schedule.itemType,
      itemId: schedule.itemId,
      triggerType: schedule.triggerType,
      status: schedule.status,
      config: {
        everyHours: schedule.config.everyHours || "4",
        startTime: schedule.config.startTime || "00:00",
        days: Array.isArray(schedule.config.days) ? [...schedule.config.days] : [],
        time: schedule.config.time || "08:30",
        date: schedule.config.date || "",
      },
    };
  }

  function getScheduleById(scheduleId) {
    return automationState.schedules.find((schedule) => schedule.id === scheduleId) || null;
  }

  function ensureInitialized() {
    if (automationState.initialized) {
      return;
    }

    const commandOptions = getCommandOptions();
    const macroOptions = getMacroOptions();

    automationState.schedules = [
      {
        id: "SCH-001",
        name: "Weekday Startup Cycle",
        description: "Bring up the room before staff arrival.",
        itemType: "Command",
        itemId: commandOptions[0]?.id || "",
        triggerType: "Recurring",
        status: "Enabled",
        config: {
          days: ["MO", "TU", "WE", "TH", "FR"],
          time: "08:30",
        },
      },
      {
        id: "SCH-002",
        name: "Every 4 Hours Check",
        description: "Refresh routing state through the day.",
        itemType: "Command",
        itemId: commandOptions[1]?.id || commandOptions[0]?.id || "",
        triggerType: "Interval",
        status: "Enabled",
        config: {
          everyHours: "4",
          startTime: "00:00",
        },
      },
      {
        id: "SCH-003",
        name: "End of Day Shutdown",
        description: "Run the shutdown macro after office hours.",
        itemType: "Macro",
        itemId: macroOptions[0]?.id || "",
        triggerType: "Calendar",
        status: "Disabled",
        config: {
          date: "2026-04-10",
          time: "18:00",
        },
      },
    ].filter((schedule) => schedule.itemId);

    automationState.initialized = true;
  }

  function ensureDraftForRoute(route) {
    if (route.mode === "create") {
      automationState.draft = automationState.draft || getEmptyDraft();
    }

    if (route.mode === "edit") {
      const schedule = getScheduleById(route.id);
      automationState.draft = schedule ? cloneDraft(schedule) : getEmptyDraft();
    }
  }

  function formatDateTime(date) {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }).format(date);
  }

  function buildDateWithTime(dateValue, timeValue) {
    if (!timeValue) {
      return null;
    }

    const [hours, minutes] = String(timeValue).split(":").map(Number);
    const target = new Date(dateValue);

    if (Number.isNaN(target.getTime()) || Number.isNaN(hours) || Number.isNaN(minutes)) {
      return null;
    }

    target.setHours(hours, minutes, 0, 0);
    return target;
  }

  function getRuleSummary(scheduleLike) {
    if (scheduleLike.triggerType === "Interval") {
      return `Every ${scheduleLike.config.everyHours || "0"} hours starting at ${scheduleLike.config.startTime || "--:--"}`;
    }

    if (scheduleLike.triggerType === "Recurring") {
      const selectedDays = dayOptions.filter((day) => scheduleLike.config.days?.includes(day.key)).map((day) => day.label);
      return selectedDays.length
        ? `Every ${selectedDays.join(", ")} at ${scheduleLike.config.time || "--:--"}`
        : "Choose at least one day of week.";
    }

    return `Run on ${scheduleLike.config.date || "----/--/--"} at ${scheduleLike.config.time || "--:--"}`;
  }

  function getUpcomingRuns(scheduleLike, count = 3) {
    const now = new Date();
    const upcoming = [];

    if (scheduleLike.triggerType === "Interval") {
      const everyHours = Number(scheduleLike.config.everyHours);
      const startTime = scheduleLike.config.startTime;

      if (everyHours < 1 || !startTime) {
        return upcoming;
      }

      const [hours, minutes] = startTime.split(":").map(Number);
      const candidate = new Date(now);
      candidate.setHours(hours, minutes, 0, 0);

      while (candidate <= now) {
        candidate.setHours(candidate.getHours() + everyHours);
      }

      for (let index = 0; index < count; index += 1) {
        upcoming.push(new Date(candidate));
        candidate.setHours(candidate.getHours() + everyHours);
      }

      return upcoming;
    }

    if (scheduleLike.triggerType === "Recurring") {
      const days = Array.isArray(scheduleLike.config.days) ? scheduleLike.config.days : [];
      const time = scheduleLike.config.time;

      if (!days.length || !time) {
        return upcoming;
      }

      for (let offset = 0; offset < 30 && upcoming.length < count; offset += 1) {
        const candidate = new Date(now);
        candidate.setDate(now.getDate() + offset);
        const matchedDay = dayOptions.find((day) => day.value === candidate.getDay());

        if (!matchedDay || !days.includes(matchedDay.key)) {
          continue;
        }

        const nextCandidate = buildDateWithTime(candidate, time);
        if (nextCandidate && nextCandidate > now) {
          upcoming.push(nextCandidate);
        }
      }

      return upcoming;
    }

    const singleRun = buildDateWithTime(scheduleLike.config.date, scheduleLike.config.time);
    if (singleRun && singleRun > now) {
      upcoming.push(singleRun);
    }

    return upcoming;
  }

  function getNextRunLabel(scheduleLike) {
    const nextRun = getUpcomingRuns(scheduleLike, 1)[0];
    return nextRun ? formatDateTime(nextRun) : "Not scheduled";
  }

  function getFilteredSchedules() {
    const keyword = automationState.search.trim().toLowerCase();

    return automationState.schedules.filter((schedule) => {
      const boundItem = getBoundItemName(schedule.itemType, schedule.itemId).toLowerCase();
      const matchesKeyword =
        !keyword ||
        [schedule.name, schedule.description || "", boundItem].some((value) => String(value).toLowerCase().includes(keyword));
      const matchesFilter = automationState.filter === "All" || schedule.triggerType === automationState.filter;
      return matchesKeyword && matchesFilter;
    });
  }

  function openDeleteModal(scheduleId) {
    const schedule = getScheduleById(scheduleId);
    if (!schedule || !automationDeleteModal || !automationDeleteName || !automationDeleteMessage) {
      return;
    }

    automationState.deleteTargetId = scheduleId;
    automationDeleteName.textContent = schedule.name;
    automationDeleteMessage.textContent = `Delete ${schedule.name} from the scheduling list?`;
    openModal(automationDeleteModal);
  }

  function closeDeleteModal() {
    automationState.deleteTargetId = "";
    if (automationDeleteModal) {
      closeModal(automationDeleteModal);
    }
  }

  function deleteCurrentTarget() {
    if (!automationState.deleteTargetId) {
      closeDeleteModal();
      return;
    }

    const target = getScheduleById(automationState.deleteTargetId);
    automationState.schedules = automationState.schedules.filter((schedule) => schedule.id !== automationState.deleteTargetId);
    showToast(`Schedule "${target?.name || automationState.deleteTargetId}" deleted.`);
    closeDeleteModal();
    renderCurrentRoute();
  }

  function validateDraft(draft) {
    if (!draft.name.trim()) {
      showToast("Schedule Name is required.");
      return false;
    }

    if (!draft.itemType) {
      showToast("Please choose Command or Macro.");
      return false;
    }

    if (!draft.itemId) {
      showToast(`Please choose a ${draft.itemType}.`);
      return false;
    }

    if (draft.triggerType === "Interval") {
      if (Number(draft.config.everyHours) < 1) {
        showToast("Every N Hours must be 1 or greater.");
        return false;
      }

      if (!draft.config.startTime) {
        showToast("Start Time is required.");
        return false;
      }
    }

    if (draft.triggerType === "Recurring") {
      if (!draft.config.days.length) {
        showToast("Select at least one day of week.");
        return false;
      }

      if (!draft.config.time) {
        showToast("Time is required.");
        return false;
      }
    }

    if (draft.triggerType === "Calendar") {
      if (!draft.config.date) {
        showToast("Date is required.");
        return false;
      }

      if (!draft.config.time) {
        showToast("Time is required.");
        return false;
      }
    }

    return true;
  }

  function saveDraft() {
    const draft = automationState.draft;
    if (!draft || !validateDraft(draft)) {
      return;
    }

    const nextSchedule = {
      id: draft.id || generateId("SCH", automationState.schedules),
      name: draft.name.trim(),
      description: draft.description.trim(),
      itemType: draft.itemType,
      itemId: draft.itemId,
      triggerType: draft.triggerType,
      status: draft.status,
      config: {
        everyHours: draft.config.everyHours,
        startTime: draft.config.startTime,
        days: [...draft.config.days],
        time: draft.config.time,
        date: draft.config.date,
      },
    };

    if (draft.id) {
      automationState.schedules = automationState.schedules.map((schedule) => (schedule.id === draft.id ? nextSchedule : schedule));
      showToast(`Schedule "${nextSchedule.name}" updated.`);
    } else {
      automationState.schedules.unshift(nextSchedule);
      showToast(`Schedule "${nextSchedule.name}" created.`);
    }

    automationState.draft = null;
    navigate("/scheduling");
  }

  function renderSearchWithFocus() {
    renderCurrentRoute();
    const input = document.getElementById("automationSchedulesSearch");
    if (input) {
      input.focus();
      input.setSelectionRange(input.value.length, input.value.length);
    }
  }

  function renderActionButtons(id) {
    return `
      <div class="macro-actions">
        <button class="macro-action-btn" type="button" data-automation-action="edit" data-id="${id}" aria-label="Edit" title="Edit">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 20h4l10-10-4-4L4 16v4Zm13-13 2 2M4 20h16" /></svg>
        </button>
        <button class="macro-action-btn macro-action-btn--danger" type="button" data-automation-action="delete" data-id="${id}" aria-label="Delete" title="Delete">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 7h14M9 7V4h6v3M8 10v7M12 10v7M16 10v7M7 7l1 13h8l1-13" /></svg>
        </button>
        <button class="macro-action-btn" type="button" data-automation-action="run" data-id="${id}" aria-label="Run now" title="Run Now">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m8 6 10 6-10 6zM5 5v14" /></svg>
        </button>
      </div>
    `;
  }

  function renderListView() {
    const filteredSchedules = getFilteredSchedules();

    return `
      <div class="automation-page automation-page--scheduling">
        <div class="automation-hero">
          <div class="automation-hero__copy">
            <span class="panel-card__eyebrow">Control Automation</span>
            <h2 id="automationPanelTitle">Scheduling</h2>
            <p>Define what should run and when it should run in one scheduling workflow.</p>
          </div>
          <div class="automation-hero__actions">
            <button class="modal-btn modal-btn--primary" type="button" data-automation-nav="/scheduling/create">Create Schedule</button>
          </div>
        </div>

        <section class="panel-card automation-list-card">
          <div class="automation-toolbar">
            <label class="form-field automation-toolbar__search">
              <span>Search</span>
              <input id="automationSchedulesSearch" type="search" placeholder="Search schedules by name or bound item" value="${safeEscape(automationState.search)}" />
            </label>
            <label class="form-field">
              <span>Filter</span>
              <select id="automationSchedulesFilter">
                <option value="All" ${automationState.filter === "All" ? "selected" : ""}>All</option>
                <option value="Interval" ${automationState.filter === "Interval" ? "selected" : ""}>Interval</option>
                <option value="Recurring" ${automationState.filter === "Recurring" ? "selected" : ""}>Recurring</option>
                <option value="Calendar" ${automationState.filter === "Calendar" ? "selected" : ""}>Calendar</option>
              </select>
            </label>
          </div>

          ${
            filteredSchedules.length
              ? `
                <div class="automation-table-wrap">
                  <table class="automation-table">
                    <thead>
                      <tr>
                        <th>Schedule Name</th>
                        <th>Type</th>
                        <th>Bound Item</th>
                        <th>Trigger Type</th>
                        <th>Rule Summary</th>
                        <th>Next Run</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      ${filteredSchedules
                        .map(
                          (schedule) => `
                            <tr>
                              <td><div class="automation-table__name"><strong>${safeEscape(schedule.name)}</strong><span>${safeEscape(schedule.id)}</span></div></td>
                              <td><span class="automation-type-badge is-${schedule.itemType.toLowerCase()}">${safeEscape(schedule.itemType)}</span></td>
                              <td>${safeEscape(getBoundItemName(schedule.itemType, schedule.itemId))}</td>
                              <td><span class="automation-trigger-badge">${safeEscape(schedule.triggerType)}</span></td>
                              <td>${safeEscape(getRuleSummary(schedule))}</td>
                              <td>${safeEscape(getNextRunLabel(schedule))}</td>
                              <td>
                                <button class="automation-toggle ${schedule.status === "Enabled" ? "is-enabled" : ""}" type="button" data-automation-action="toggle-status" data-id="${schedule.id}">
                                  <span></span>
                                  ${safeEscape(schedule.status)}
                                </button>
                              </td>
                              <td>${renderActionButtons(schedule.id)}</td>
                            </tr>
                          `
                        )
                        .join("")}
                    </tbody>
                  </table>
                </div>
              `
              : `
                <div class="automation-empty">
                  <strong>${automationState.schedules.length ? "No schedules match your search" : "No schedules yet"}</strong>
                  <p>${automationState.schedules.length ? "Try adjusting your search or trigger filter." : "Create your first schedule to bind a command or macro to time-based automation."}</p>
                  <button class="modal-btn modal-btn--primary" type="button" data-automation-nav="/scheduling/create">Create Schedule</button>
                </div>
              `
          }
        </section>
      </div>
    `;
  }

  function renderPreview(draft) {
    const upcomingRuns = getUpcomingRuns(draft, 3);

    return `
      <div class="automation-preview-stack">
        <div class="automation-preview-card">
          <span>Binding</span>
          <strong>${safeEscape(getBoundItemName(draft.itemType, draft.itemId) || "Not selected")}</strong>
        </div>
        <div class="automation-preview-card">
          <span>Rule Summary</span>
          <strong>${safeEscape(getRuleSummary(draft))}</strong>
        </div>
        <div class="automation-preview-card">
          <span>Next Run</span>
          <strong>${safeEscape(getNextRunLabel(draft))}</strong>
        </div>
        <div class="automation-preview-card">
          <span>Upcoming Runs</span>
          ${
            upcomingRuns.length
              ? `<ul class="automation-preview-list">${upcomingRuns.map((item) => `<li>${safeEscape(formatDateTime(item))}</li>`).join("")}</ul>`
              : `<p class="automation-preview-empty">Complete the required fields to preview future runs.</p>`
          }
        </div>
      </div>
    `;
  }

  function renderTriggerFields(draft) {
    if (draft.triggerType === "Interval") {
      return `
        <div class="automation-form-grid">
          <label class="form-field">
            <span>Every N Hours</span>
            <input type="number" min="1" id="automationScheduleEveryHours" value="${safeEscape(draft.config.everyHours)}" />
          </label>
          <label class="form-field">
            <span>Start Time</span>
            <input type="time" id="automationScheduleStartTime" value="${safeEscape(draft.config.startTime)}" />
          </label>
        </div>
      `;
    }

    if (draft.triggerType === "Recurring") {
      return `
        <div class="automation-form-section">
          <span class="panel-card__eyebrow">Days of Week</span>
          <div class="automation-day-picker">
            ${dayOptions
              .map(
                (day) => `
                  <button class="automation-day-chip ${draft.config.days.includes(day.key) ? "is-selected" : ""}" type="button" data-automation-day="${day.key}">
                    ${day.label}
                  </button>
                `
              )
              .join("")}
          </div>
        </div>
        <div class="automation-form-grid">
          <label class="form-field">
            <span>Time</span>
            <input type="time" id="automationScheduleRecurringTime" value="${safeEscape(draft.config.time)}" />
          </label>
        </div>
      `;
    }

    return `
      <div class="automation-form-grid">
        <label class="form-field">
          <span>Date</span>
          <input type="date" id="automationScheduleDate" value="${safeEscape(draft.config.date)}" />
        </label>
        <label class="form-field">
          <span>Time</span>
          <input type="time" id="automationScheduleCalendarTime" value="${safeEscape(draft.config.time)}" />
        </label>
      </div>
    `;
  }

  function renderFormView(route) {
    const draft = automationState.draft || getEmptyDraft();
    const itemOptions = getItemOptions(draft.itemType);

    return `
      <div class="automation-page automation-page--schedule-form">
        <div class="automation-hero">
          <div class="automation-hero__copy">
            <button class="modal-btn modal-btn--ghost" type="button" data-automation-nav="/scheduling">Back</button>
            <span class="panel-card__eyebrow">Control Automation</span>
            <h2>${route.mode === "edit" ? "Edit Schedule" : "Create Schedule"}</h2>
            <p>Choose the command or macro to execute, then define the trigger rule in the same form.</p>
          </div>
          <div class="automation-hero__actions">
            <button class="modal-btn modal-btn--ghost" type="button" data-automation-nav="/scheduling">Cancel</button>
            <button class="modal-btn modal-btn--primary" type="button" data-automation-action="save">Save Schedule</button>
          </div>
        </div>

        <div class="automation-form-shell">
          <section class="panel-card automation-form-main">
            <div class="panel-card__header">
              <div>
                <span class="panel-card__eyebrow">Schedule Definition</span>
                <h3>Scheduling Setup</h3>
              </div>
            </div>

            <div class="automation-form-grid">
              <label class="form-field">
                <span>Schedule Name</span>
                <input type="text" id="automationScheduleName" value="${safeEscape(draft.name)}" />
              </label>
              <label class="form-field">
                <span>Status</span>
                <select id="automationScheduleStatus">
                  <option value="Enabled" ${draft.status === "Enabled" ? "selected" : ""}>Enabled</option>
                  <option value="Disabled" ${draft.status === "Disabled" ? "selected" : ""}>Disabled</option>
                </select>
              </label>
              <label class="form-field form-field--full">
                <span>Description</span>
                <textarea id="automationScheduleDescription" rows="3">${safeEscape(draft.description)}</textarea>
              </label>
            </div>

            <div class="automation-form-section">
              <span class="panel-card__eyebrow">Action Binding</span>
              <div class="automation-form-grid">
                <label class="form-field">
                  <span>Item Type</span>
                  <select id="automationScheduleItemType">
                    <option value="Command" ${draft.itemType === "Command" ? "selected" : ""}>Command</option>
                    <option value="Macro" ${draft.itemType === "Macro" ? "selected" : ""}>Macro</option>
                  </select>
                </label>
                <label class="form-field">
                  <span>Select Item</span>
                  <select id="automationScheduleItemId">
                    <option value="">Select ${safeEscape(draft.itemType)}</option>
                    ${itemOptions
                      .map((option) => `<option value="${option.id}" ${draft.itemId === option.id ? "selected" : ""}>${safeEscape(option.name)}</option>`)
                      .join("")}
                  </select>
                </label>
              </div>
            </div>

            <div class="automation-form-section">
              <span class="panel-card__eyebrow">Trigger Type</span>
              <div class="automation-form-grid">
                <label class="form-field">
                  <span>Trigger Type</span>
                  <select id="automationScheduleTriggerType">
                    <option value="Interval" ${draft.triggerType === "Interval" ? "selected" : ""}>Interval</option>
                    <option value="Recurring" ${draft.triggerType === "Recurring" ? "selected" : ""}>Recurring</option>
                    <option value="Calendar" ${draft.triggerType === "Calendar" ? "selected" : ""}>Calendar</option>
                  </select>
                </label>
              </div>
              ${renderTriggerFields(draft)}
            </div>
          </section>

          <aside class="panel-card automation-preview-panel">
            <div class="panel-card__header">
              <div>
                <span class="panel-card__eyebrow">Preview</span>
                <h3>Execution Preview</h3>
              </div>
            </div>
            ${renderPreview(draft)}
          </aside>
        </div>
      </div>
    `;
  }

  function renderCurrentRoute() {
    ensureInitialized();
    const route = getRouteState() || { mode: "list", id: "" };
    ensureDraftForRoute(route);
    automationContent.innerHTML = route.mode === "list" ? renderListView() : renderFormView(route);
  }

  function syncFromLocation(shouldUpdateSection = true) {
    ensureInitialized();
    const route = getRouteState();

    if (!route) {
      return;
    }

    if (shouldUpdateSection) {
      navigateToSection("Scheduling", false, { syncRoute: false });
    }

    renderCurrentRoute();
  }

  function handleAction(action, id) {
    if (action === "save") {
      saveDraft();
      return;
    }

    if (action === "edit") {
      const schedule = getScheduleById(id);
      if (!schedule) {
        return;
      }
      automationState.draft = cloneDraft(schedule);
      navigate(`/scheduling/edit/${encodeURIComponent(id)}`);
      return;
    }

    if (action === "delete") {
      openDeleteModal(id);
      return;
    }

    if (action === "run") {
      const schedule = getScheduleById(id);
      showToast(`Schedule "${schedule?.name || id}" executed (mock).`);
      return;
    }

    if (action === "toggle-status") {
      automationState.schedules = automationState.schedules.map((schedule) =>
        schedule.id === id
          ? { ...schedule, status: schedule.status === "Enabled" ? "Disabled" : "Enabled" }
          : schedule
      );
      renderCurrentRoute();
    }
  }

  automationContent.addEventListener("click", (event) => {
    const navTarget = event.target.closest("[data-automation-nav]");
    const actionTarget = event.target.closest("[data-automation-action]");
    const dayTarget = event.target.closest("[data-automation-day]");

    if (navTarget) {
      event.preventDefault();
      const nextPath = navTarget.getAttribute("data-automation-nav") || "/scheduling";
      automationState.draft = null;
      navigate(nextPath);
      return;
    }

    if (dayTarget && automationState.draft) {
      const dayKey = dayTarget.getAttribute("data-automation-day") || "";
      const currentDays = automationState.draft.config.days;
      automationState.draft.config.days = currentDays.includes(dayKey)
        ? currentDays.filter((day) => day !== dayKey)
        : [...currentDays, dayKey];
      renderCurrentRoute();
      return;
    }

    if (actionTarget) {
      handleAction(actionTarget.getAttribute("data-automation-action") || "", actionTarget.getAttribute("data-id") || "");
    }
  });

  automationContent.addEventListener("input", (event) => {
    if (event.target.id === "automationSchedulesSearch") {
      automationState.search = event.target.value;
      renderSearchWithFocus();
      return;
    }

    if (!automationState.draft) {
      return;
    }

    if (event.target.id === "automationScheduleName") {
      automationState.draft.name = event.target.value;
    } else if (event.target.id === "automationScheduleDescription") {
      automationState.draft.description = event.target.value;
    } else if (event.target.id === "automationScheduleEveryHours") {
      automationState.draft.config.everyHours = event.target.value;
    } else if (event.target.id === "automationScheduleStartTime") {
      automationState.draft.config.startTime = event.target.value;
    } else if (event.target.id === "automationScheduleRecurringTime" || event.target.id === "automationScheduleCalendarTime") {
      automationState.draft.config.time = event.target.value;
    } else if (event.target.id === "automationScheduleDate") {
      automationState.draft.config.date = event.target.value;
    } else {
      return;
    }

    const previewBody = automationContent.querySelector(".automation-preview-stack");
    if (previewBody) {
      previewBody.outerHTML = renderPreview(automationState.draft);
    }
  });

  automationContent.addEventListener("change", (event) => {
    if (event.target.id === "automationSchedulesFilter") {
      automationState.filter = event.target.value;
      renderCurrentRoute();
      return;
    }

    if (!automationState.draft) {
      return;
    }

    if (event.target.id === "automationScheduleStatus") {
      automationState.draft.status = event.target.value;
      return;
    }

    if (event.target.id === "automationScheduleItemType") {
      automationState.draft.itemType = event.target.value;
      automationState.draft.itemId = "";
      renderCurrentRoute();
      return;
    }

    if (event.target.id === "automationScheduleItemId") {
      automationState.draft.itemId = event.target.value;
      renderCurrentRoute();
      return;
    }

    if (event.target.id === "automationScheduleTriggerType") {
      automationState.draft.triggerType = event.target.value;
      renderCurrentRoute();
    }
  });

  if (confirmAutomationDeleteButton) {
    confirmAutomationDeleteButton.addEventListener("click", deleteCurrentTarget);
  }

  if (automationDeleteModal) {
    automationDeleteModal.addEventListener("click", (event) => {
      if (event.target === automationDeleteModal) {
        closeDeleteModal();
      }
    });
  }

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !automationDeleteModal?.classList.contains("is-hidden")) {
      closeDeleteModal();
    }
  });

  window.addEventListener("popstate", () => {
    syncFromLocation();
  });

  window.syncAppRouteForSection = syncRoute;
  window.renderAutomationModule = function renderAutomationModule() {
    renderCurrentRoute();
  };

  syncFromLocation();
})();
