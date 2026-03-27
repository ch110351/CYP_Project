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

const state = {
  isLoggedIn: false,
  language: languageSelect.value,
  toastTimer: null,
};
