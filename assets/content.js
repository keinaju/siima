const navMap = {
  "home-button": "home-section",
  "premises-button": "premises-section",
  "membership-button": "membership-section",
  "contacts-button": "contacts-section",
  "rules-button": "rules-section",
  "policy-button": "policy-section",
};

// Initialize nav button click events
for (const [buttonId, sectionId] of Object.entries(navMap)) {
  document.getElementById(buttonId).onclick = () =>
    showSection(sectionId, buttonId);
}

// Display home page initially
showSection("home-section", "home-button");

function hideAllSections() {
  for (const sectionId of Object.values(navMap)) {
    const section = document.getElementById(sectionId);
    section.classList.add("hidden");
  }
}

function clearActiveNav() {
  document.querySelectorAll(".navigation-button").forEach((button) => {
    button.classList.remove("active");
  });
}

function showSection(sectionId, activeButtonId) {
  hideAllSections();
  clearActiveNav();
  document.getElementById(sectionId).classList.remove("hidden");
  if (activeButtonId) {
    document.getElementById(activeButtonId).classList.add("active");
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
}
