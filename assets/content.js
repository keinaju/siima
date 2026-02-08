// Initialize click events:
document.getElementById("home").onclick = setHome;
document.getElementById("contacts").onclick = setContacts;

// Display initial content:
setHome();

// Returns the node where content is displayed.
function getContentNode() {
  return document.getElementById("content");
}

function createParagraph(text) {
  const paragraph = document.createElement("p");
  paragraph.appendChild(document.createTextNode(text));
  return paragraph;
}

function setHome() {
  getContentNode().replaceChildren(
    createParagraph(
      "Biljardiklubi Siimaseura ry. on Tampereen Lamminpäästä käsin biljardiharrastusta edistävä yhdistys. Jäseniä ja pelaajia on nelisenkymmentä."
    ),
    createParagraph(
      "Siimaseuran oma kotisali, jossa on neljä kilpatason pool-pöytää (2 Diamondia ja 2 Dynamic III) ja yksi Shender-snookerpöytä."
    ),
    createParagraph(
      "Biljardiklubi Siimaseura ry:n biljarditoiminta sopii kaikille - junioreista senioreihin ja aloittelijoista vuosikymmeniä pelanneisiin konkareihin. Seuralla on päävalmentaja ja kaikkiaan neljä Suomen Biljardiliitto ry:n kouluttamaa seuravalmentajaa. Tarjolla on valmennusta myös alle 18-vuotiaille."
    ),
    createParagraph(
      "Aktiivista biljarditoimintaa on harjoitettu vuodesta 2005 ja rekisteröitynä yhdistyksenä vuodesta 2007 saakka. Alkuperäinen nimi Pyhäjärven Siimaseura ry. vaihdettiin nykyiseen muotoonsa muuton myötä vuonna 2017. Yhdistyksemme on myös Suomen Biljardiliitto ry:n jäsen."
    )
  );
}

function setContacts() {
  getContentNode().replaceChildren(
    createParagraph("Timo Sacklen, puheenjohtaja")
  );
}
