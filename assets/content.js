// Initialize click events:
document.getElementById("home").onclick = setHome;
document.getElementById("membership").onclick = setMembership;
document.getElementById("contacts").onclick = setContacts;
document.getElementById("policy").onclick = setPolicy;

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

function createSubheading(text) {
  const subheading = document.createElement("h2");
  subheading.appendChild(document.createTextNode(text));
  return subheading;
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

function setMembership() {
  getContentNode().replaceChildren(
    createParagraph(
      "Kiinnostaako pool-biljardi tai snooker? Oletko harrastuspaikkaa tai pelikavereita vailla?"
    ),
    createParagraph(
      "Biljardiklubi Siimaseura tarjoaa hienot puitteet harrastamiseen omasta tasosta riippumatta. Pelitilamme on täysin päihteetön ja se sopii kaikenikäisille. Kilpailuhenkisille löytyy myös mahdollisuus osallistua Pirkanmaan Pool-liigaan, seuran sisäisiin liigoihin sekä kaikille avoimiin poolin kuukausikisoihin."
    ),
    createParagraph(
      "Ole rohkeasti yhteydessä puheenjohtajaan tai sali-isäntään, kysy lisää ja tule paikan päälle tutustumaan toimintaamme!"
    ),
    createSubheading("Yleistä Biljardiklubi Siimaseura ry:n jäsenyydestä"),
    createParagraph(
      "Biljardiklubi Siimaseura on Tampereen Lamminpäässä toimiva ry-muotoinen, yksityinen ja voittoa tavoittelematon biljardiseura. Pyrimme tarjoamaan jäsenillemme hyvät puitteet poolin ja snookerin harrastamiseen omalla päihteettömällä pelisalillamme."
    ),
    createParagraph(
      "Siimaseuralle on helppo saapua - niin henkilöautolla kuin linja-autollakin. Salin edustalla on ilmaista pysäköintitilaa. Nyssen bussit ajavat lähettyviltä."
    ),
    createSubheading("Biljardipöydät ja niiden käyttö"),
    createParagraph(
      "Salilla on neljä virallista pool-pöytää ja yksi ammattilaistason snookerpöytä. Pöytien harjaus, lanaus ja silitys tarvittaessa ovat jäsenten vastuulla. Uusia jäseniä ohjeistetaan pöytien huoltamisessa. Oman pelivuoron päätteeksi tulee putsata pöydät ja käyttää pallot pallopesurissa."
    ),
    createSubheading("Jäsen- ja pelimaksut"),
    createParagraph(
      "Hallitus käsittelee jäsenhakemuksen. Sen jälkeen uusi jäsen maksaa jäsenmaksun. Liityttyään ja jäsenmaksun maksettuaan voi lunastaa pelitilaan avainkoodin."
    ),
    createParagraph(
      "Avainmaksu antaa rajattoman pelioikeuden Siimaseuralla klo 07-22 välillä, pois lukien liigaottelut ja tapahtumat. Kuukausimaksun hinta on 60 €/kk. Kuukausimaksu on aina kalenterikuukausikohtainen."
    ),
    createParagraph(
      "Jäsen voi käydä myös kertamaksulla pelaamassa ja tällöin hinta on 10 €/kerta. Hyväksymme maksuvälineinä myös Smartum-setelit sekä Smartum-verkkomaksun (ei koske jäsenmaksua)."
    ),
    createParagraph(
      "Jäsenmaksu 60 €/kausi maksetaan vuosittain pelikauden alettua. Pelikausi ajoittuu aikavälille 01.07.-30.06."
    ),
    createSubheading("Vierailijat ja vierasmaksu"),
    createParagraph(
      "Siimaseuran jäsen, jolla on avainmaksu maksettuna, voi tuoda mukanaan yhden vierailijan per käynti. Vierasmaksu on 15 € eikä peliaikaa ole rajoitettu. Tosin viimeisen jäsenen lähtiessä myös vierailijan on poistuttava pelitilasta."
    ),
    createSubheading("Salin tapahtumat"),
    createParagraph(
      "Salilla voidaan järjestää kilpailuita, jotka ovat avoimia myös ulkopuolisille pelaajille. Tällaisia tapahtumia ovat esim. Pirkanmaan Pool-liigan ottelut, Pirkanmaan snookerliigan ottelut, avoimet poolin kuukausikisat, alle 18-vuotiaiden Pirkanmaan mestaruuskisat ja muut vastaavat tapahtumat."
    )
  );
}

function setContacts() {
  getContentNode().replaceChildren(
    createParagraph(
      "Timo Sacklén, puheenjohtaja, 044 342 7007, timos@siimaseura.fi"
    ),
    createParagraph(
      "Vesa Saarinen, varapuheenjohtaja, 050 558 8484, vesa@siimaseura.fi"
    ),
    createParagraph(
      "Janne Forsman, hallituksen jäsen, 041 442 2779, janne@siimaseura.fi"
    ),
    createParagraph("Joni Seppälä, sihteeri, 040 547 1415, joni@siimaseura.fi"),
    createParagraph(
      "Sami Saariaho, rahastonhoitaja, 050 326 3013, sami@siimaseura.fi"
    ),
    createParagraph(
      "Kai Talvio, hallituksen jäsen, 045 885 4449, kai@siimaseura.fi"
    )
  );
}

function setPolicy() {
  getContentNode().replaceChildren(
    createSubheading(
      "Biljardiklubi Siimaseura ry:n rekisteri- ja tietosuojaseloste"
    ),
    createSubheading("Rekisterinpitäjä"),
    createParagraph("Nimi: Biljardiklubi Siimaseura ry"),
    createParagraph("Osoite: Hämeenpuisto 40 A 3, 33200 Tampere"),
    createSubheading("Yhteyshenkilö rekisteriä koskevissa asioissa"),
    createParagraph("Nimi: Sami Saariaho, sami@siimaseura.fi, 050-3263013"),
    createParagraph("Osoite: Hämeenpuisto 40 A 3, 33200 Tampere"),
    createSubheading("Rekisterin nimi"),
    createParagraph("Biljardiklubi Siimaseura ry:n jäsenrekisteri"),
    createSubheading("Rekisterin kuvaus"),
    createParagraph(
      "Rekisterin tietoja käytetään tiedottamisessa, kun halutaan tavoittaa koko jäsenistö kerralla tai kun on tarve ottaa yhteyttä ainoastaan yksittäiseen jäseneen. Rekisterin avulla myös seurataan jäsen maksujen maksua, jotta voidaan varmistua kuka voi edustaa yhdistystä esimerkiksi kilpailuissa."
    ),
    createSubheading("Henkilötietojen käsittely"),
    createParagraph(
      "Kerättävät tiedot: Sukunimi, etunimet, asuinkunta, puhelinnumero, sähköpostiosoite."
    ),
    createParagraph(
      "Tietojen käyttö: Tietoja käytetään tiedottamiseen ja jäsenmaksun voimassaolon seurantaan."
    ),
    createParagraph(
      "Tietojen luovuttamien kolmansille osapuolille: Tietoja ei luovuteta kolmansille osapuolille."
    ),
    createSubheading("Henkilötietojen tarkistamien ja muokkaaminen"),
    createParagraph(
      "Yhdistyksen jäsen voi pyytää yhteyshenkilöä toimittamaan itseään koskevat rekisterin sisältämät tiedot tarkastaakseen niiden oikeellisuuden ja tarvittaessa korjaamaan tietoja."
    ),
    createSubheading("Omien tietojen poistaminen"),
    createParagraph(
      "Yhdistyksen jäsen voi pyytää yhteyshenkilöä toimittamaan itseään koskevat rekisterin sisältämät tiedot tarkastaakseen niiden oikeellisuuden ja tarvittaessa korjaamaan tietoja."
    )
  );
}
