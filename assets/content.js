// Initialize click events:
document.getElementById("home").onclick = setHome;
document.getElementById("premises").onclick = setPremises;
document.getElementById("membership").onclick = setMembership;
document.getElementById("contacts").onclick = setContacts;
document.getElementById("rules").onclick = setRules;
document.getElementById("policy").onclick = setPolicy;

// Display initial content:
setHome();

function scrollToTop() {
  window.scrollTo(0, 0);
}

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

function setHome() {
  hideAllSections();
  document.getElementById("home-section").classList.remove("hidden");
}

function setPremises() {
  hideAllSections();
  document.getElementById("premises-section").classList.remove("hidden");
}

function setRules() {
  hideAllSections();
  document.getElementById("rules-section").classList.remove("hidden");
}

function setMembership() {
  hideAllSections();
  document.getElementById("membership-section").classList.remove("hidden");
}

function setContacts() {
  hideAllSections();
  document.getElementById("contacts-section").classList.remove("hidden");
}

function setPolicy() {
  hideAllSections();
  document.getElementById("policy-section").classList.remove("hidden");
}
