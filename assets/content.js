// Initialize click events:
document.getElementById("home").onclick = () => showSection("home-section");
document.getElementById("premises").onclick = () =>
  showSection("premises-section");
document.getElementById("membership").onclick = () =>
  showSection("membership-section");
document.getElementById("contacts").onclick = () =>
  showSection("contacts-section");
document.getElementById("rules").onclick = () => showSection("rules-section");
document.getElementById("policy").onclick = () => showSection("policy-section");

// Display initial content:
setHome();

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
