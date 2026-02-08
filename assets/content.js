// Initialize click events:
document.getElementById("home").onclick = setHome;
document.getElementById("rules").onclick = setRules;
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

function setRules() {
  getContentNode().replaceChildren(
    createSubheading("1. § Yhdistyksen nimi ja kotipaikka"),
    createParagraph(
      "Yhdistyksen nimi on Biljardiklubi Siimaseura ry ja sen kotipaikka on Tampere."
    ),
    createSubheading("2. § Tarkoitus ja toiminnan laatu"),
    createParagraph(
      "Yhdistyksen tarkoituksena on edistää ja ylläpitää biljarditoimintaa jäsentensä keskuudessa."
    ),
    createParagraph(
      "Tarkoituksensa toteuttamiseksi yhdistys pitää yllä pelitilaa jäsenten käyttöön ja järjestää opetus- ja valmennustilaisuuksia ja kilpailuja."
    ),
    createParagraph(
      "Toimintansa tukemiseksi yhdistys kerää jäseniltään jäsenmaksua ja ottaa vastaan avustuksia, lahjoituksia ja testamentteja."
    ),
    createSubheading("3. § Jäsenet"),
    createParagraph(
      "Yhdistykseen varsinaiseksi jäseneksi voidaan hyväksyä henkilö, joka hyväksyy yhdistyksen tarkoituksen."
    ),
    createParagraph(
      "Kannattajajäseneksi voidaan hyväksyä yksityinen henkilö tai oikeuskelpoinen yhteisö, joka haluaa tukea yhdistyksen tarkoitusta ja toimintaa."
    ),
    createParagraph(
      "Varsinaiset jäsenet ja kannattajajäsenet hyväksyy hakemuksesta yhdistyksen hallitus. Jäseneksi hyväksyminen edellyttää koko hallituksen yksimielistä päätöstä."
    ),
    createSubheading("4. § Jäsenen eroaminen ja erottaminen"),
    createParagraph(
      "Jäsenellä on oikeus erota yhdistyksestä ilmoittamalla siitä kirjallisesti hallitukselle tai sen puheenjohtajalle taikka ilmoittamalla erosta yhdistyksen kokouksessa merkittäväksi pöytäkirjaan."
    ),
    createParagraph(
      "Hallitus voi erottaa jäsenen yhdistyksestä, jos jäsen on jättänyt erääntyneen jäsenmaksunsa maksamatta tai muuten jättänyt täyttämättä ne velvoitukset, joihin hän on yhdistykseen liittymällä sitoutunut tai on menettelyllään yhdistyksessä tai sen ulkopuolella huomattavasti vahingoittanut yhdistystä tai ei enää täytä laissa taikka yhdistyksen säännöissä mainittuja jäsenyyden ehtoja."
    ),
    createSubheading("5. § Liittymis- ja jäsenmaksu"),
    createParagraph(
      "Varsinaisilta jäseniltä ja kannattajajäseniltä perittävän liittymismaksun ja vuotuisen jäsenmaksun suuruudesta erikseen kummallekin jäsenryhmälle päättää vuosikokous."
    ),
    createSubheading("6. § Hallitus"),
    createParagraph(
      "Yhdistyksen asioita hoitaa hallitus, johon kuuluu vuosikokouksessa valitut puheenjohtaja ja kolmesta viiteen muuta varsinaista jäsentä."
    ),
    createParagraph("Hallituksen toimikausi on vuosikokousten välinen aika."),
    createParagraph(
      "Hallitus valitsee keskuudestaan varapuheenjohtajan sekä ottaa keskuudestaan tai ulkopuoleltaan sihteerin, rahastonhoitajan ja muut tarvittavat toimihenkilöt."
    ),
    createParagraph(
      "Mikäli hallituksen jäsen eroaa tai erotetaan kesken toimikautensa, valitaan hänen tilalleen uusi jäsen seuraavassa yhdistyksen kokouksessa jäljellä olevaksi toimikaudeksi."
    ),
    createParagraph(
      "Hallitus kokoontuu puheenjohtajan tai hänen estyneenä ollessaan varapuheenjohtajan kutsusta, kun he katsovat siihen olevan aihetta tai kun vähintään puolet hallituksen jäsenistä sitä vaatii. Hallitus voi täysilukuisena läsnä ollessaan kokoontua myös ilman eri kutsua. Kokoontuminen on mahdollista puhelimen tai vastaavan tekniikan välityksellä kaikkien hallituksen jäsenten siihen suostuessa."
    ),
    createParagraph(
      "Hallitus on päätösvaltainen, kun vähintään puolet sen jäsenistä, puheenjohtaja tai varapuheenjohtaja mukaan luettuna on läsnä. Äänestykset ratkaistaan yksinkertaisella äänten enemmistöllä. Äänten mennessä tasan ratkaisee puheenjohtajan ääni, vaaleissa kuitenkin arpa."
    ),
    createSubheading("7. § Yhdistyksen nimen kirjoittaminen"),
    createParagraph(
      "Yhdistyksen nimen kirjoittaa hallituksen puheenjohtaja, varapuheenjohtaja, sihteeri tai rahastonhoitaja, kaksi yhdessä."
    ),
    createSubheading("8. § Tilikausi ja tilintarkastus/toiminnantarkastus"),
    createParagraph("Yhdistyksen tilikausi on kalenterivuosi."),
    createParagraph(
      "Tilinpäätös tarvittavine asiakirjoineen ja hallituksen vuosikertomus on annettava tilintarkastajille/toiminnantarkastajille viimeistään kuukausi ennen vuosikokousta. Tilintarkastajien/toiminnantarkastajien tulee antaa kirjallinen lausuntonsa viimeistään kaksi viikkoa ennen vuosikokousta hallitukselle."
    ),
    createSubheading("9. § Yhdistyksen kokoukset"),
    createParagraph(
      "Yhdistyksen vuosikokous pidetään vuosittain hallituksen määräämänä päivänä tammi-heinäkuussa."
    ),
    createParagraph(
      "Ylimääräinen kokous pidetään, kun yhdistyksen kokous niin päättää tai kun hallitus katsoo siihen olevan aihetta tai kun vähintään kymmenesosa (1/10) yhdistyksen äänioikeutetuista jäsenistä sitä hallitukselta erityisesti ilmoitettua asiaa varten kirjallisesti vaatii. Kokous on pidettävä kolmenkymmenen vuorokauden kuluessa siitä, kun vaatimus sen pitämisestä on esitetty hallitukselle."
    ),
    createParagraph(
      "Yhdistyksen kokouksissa on jokaisella varsinaisella jäsenellä yksi ääni. Kannattajajäsenellä on kokouksessa läsnäolo- ja puheoikeus. Poissa oleva yhdistyksen varsinainen jäsen voi äänestää valtakirjalla."
    ),
    createParagraph(
      "Yhdistyksen kokouksen päätökseksi tulee, ellei säännöissä ole toisin määrätty, se mielipide, jota on kannattanut yli puolet annetuista äänistä. Äänten mennessä tasan ratkaisee kokouksen puheenjohtajan ääni, vaaleissa kuitenkin arpa."
    ),
    createSubheading("10. § Yhdistyksen kokousten koollekutsuminen"),
    createParagraph(
      "Hallituksen on kutsuttava yhdistyksen kokoukset koolle vähintään seitsemän vuorokautta ennen kokousta yhdistyksen käyttämällä sähköpostilistalla tai jäsenille postitetuilla kirjeillä."
    ),
    createSubheading("11. § Vuosikokous"),
    createParagraph(
      "Yhdistyksen vuosikokouksessa käsitellään seuraavat asiat:"
    ),
    createParagraph("1. kokouksen avaus"),
    createParagraph(
      "2. valitaan kokouksen puheenjohtaja, sihteeri, kaksi pöytäkirjantarkastajaa ja tarvittaessa kaksi ääntenlaskijaa"
    ),
    createParagraph("3. todetaan kokouksen laillisuus ja päätösvaltaisuus"),
    createParagraph("4. hyväksytään kokouksen työjärjestys"),
    createParagraph(
      "5. esitetään tilinpäätös, vuosikertomus ja tilintarkastajien/toiminnantarkastajien lausunto"
    ),
    createParagraph(
      "6. päätetään tilinpäätöksen vahvistamisesta ja vastuuvapauden myöntämisestä hallitukselle ja muille vastuuvelvollisille"
    ),
    createParagraph(
      "7. vahvistetaan toimintasuunnitelma, tulo- ja menoarvio sekä liittymis- ja jäsenmaksun suuruus"
    ),
    createParagraph("8. valitaan hallituksen puheenjohtaja ja muut jäsenet"),
    createParagraph(
      "9. valitaan yksi tai kaksi tilintarkastajaa/toiminnantarkastajaa ja heille varatilintarkastajat/varatoiminnantarkastajat"
    ),
    createParagraph("10. käsitellään muut kokouskutsussa mainitut asiat"),
    createParagraph(
      "Mikäli yhdistyksen jäsen haluaa saada jonkin asian yhdistyksen vuosikokouksen käsiteltäväksi, on hänen ilmoitettava siitä kirjallisesti hallitukselle niin hyvissä ajoin, että asia voidaan sisällyttää kokouskutsuun."
    ),
    createSubheading("12. § Sääntöjen muuttaminen ja yhdistyksen purkaminen"),
    createParagraph(
      "Päätös sääntöjen muuttamisesta ja yhdistyksen purkamisesta on tehtävä yhdistyksen kokouksessa vähintään kolmen neljäsosan (3/4) enemmistöllä annetuista äänistä. Kokouskutsussa on mainittava sääntöjen muuttamisesta tai yhdistyksen purkamisesta."
    ),
    createParagraph(
      "Yhdistyksen purkautuessa käytetään yhdistyksen varat yhdistyksen tarkoituksen edistämiseen purkamisesta päättävän kokouksen määräämällä tavalla. Yhdistyksen tullessa lakkautetuksi käytetään sen varat samaan tarkoitukseen."
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
