// Initialize click events:
document.getElementById("home-button").onclick = () =>
  showSection("home-section");
document.getElementById("premises-button").onclick = () =>
  showSection("premises-section");
document.getElementById("membership-button").onclick = () =>
  showSection("membership-section");
document.getElementById("contacts-button").onclick = () =>
  showSection("contacts-section");
document.getElementById("rules-button").onclick = () =>
  showSection("rules-section");
document.getElementById("policy-button").onclick = () =>
  showSection("policy-section");

// Display home page initially:
showSection("home-section");

function getAllSections() {
  return [
    document.getElementById("home-section"),
    document.getElementById("rules-section"),
    document.getElementById("policy-section"),
    document.getElementById("premises-section"),
    document.getElementById("membership-section"),
    document.getElementById("contacts-section"),
  ];
}

function hideAllSections() {
  for (const section of getAllSections()) {
    section.classList.add("hidden");
  }
}

function showSection(sectionId) {
  hideAllSections();
  document.getElementById(sectionId).classList.remove("hidden");
}
