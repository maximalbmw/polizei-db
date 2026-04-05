const PERSONS = [
  {
    id: "P-2026-001",
    name: "Jonas Richter",
    dob: "1991-04-12",
    status: "GESUCHT",
    region: "Frankfurt am Main",
    notes: "Verdacht auf Einbruchserie in mehreren Stadtteilen.",
    lastSeen: "2026-03-28, Frankfurt-Bockenheim",
    risk: "mittel",
    fileRef: "AZ: 23-ED-4711",
    photo: null
  },
  {
    id: "P-2026-002",
    name: "Mara Lehmann",
    dob: "1987-09-03",
    status: "AKTIV",
    region: "Offenbach",
    notes: "Zeugin in laufendem Verfahren, Kontakt über Dienststelle sichern.",
    lastSeen: "2026-04-01, Offenbach-Zentrum",
    risk: "niedrig",
    fileRef: "AZ: 23-OF-9921",
    photo: null
  },
  {
    id: "P-2026-003",
    name: "Tarek Yilmaz",
    dob: "1995-01-19",
    status: "ARCHIVIERT",
    region: "Hanau",
    notes: "Verfahren abgeschlossen, Datensatz zur Dokumentation.",
    lastSeen: "2025-11-10, Hanau",
    risk: "niedrig",
    fileRef: "AZ: 22-HU-3310",
    photo: null
  },
  {
    id: "P-2026-004",
    name: "Franka Luckner",
    dob: "1987-08-09",
    status: "AKTIV",
    region: "Wiesbaden",
    notes: "Gesucht wegen schwerer Körperverletzung in 3 Fällen.",
    lastSeen: "2026-04-05, Wiesbaden, nähe Hauptbahnhof",
    risk: "hoch",
    fileRef: "AZ: 26-ED-4561",
    photo: null
  },
  {
    id: "P-2026-005",
    name: "Frank Herbst",
    dob: "1967-01-09",
    status: "AKTIV",
    region: "Rosbach v.d.H",
    notes: "- keine -",
    lastSeen: "2026-04-01, Rosbach v.d.H",
    risk: "niedrig",
    fileRef: "AZ: 12-ED-2211",
    photo: null
  },
  {
    id: "P-2026-006",
    name: "Hartmut Engels",
    dob: "1999-03-10",
    status: "AKTIV",
    region: "Wetzlar",
    notes: "Gesucht als Zeuge eines illegalen Kfz Rennens in Gießen.",
    lastSeen: "2023-03-09, Gießen",
    risk: "niedrig",
    fileRef: "AZ: 23-AH-6343",
    photo: null
  },
  {
    id: "P-2026-007",
    name: "Dr. Tabea Bach",
    dob: "1988-11-14",
    status: "ARCHIVIERT",
    region: "Bad Nauheim",
    notes: "- keine -",
    lastSeen: "2025-12-12, Bad Nauheim",
    risk: "niedrig",
    fileRef: "AZ: 26-FG-6464",
    photo: null
  },
  {
    id: "P-2026-008",
    name: "Paul Paul",
    dob: "1973-01-12",
    status: "ARCHIVIERT",
    region: "Frankfurt am Main",
    notes: "- keine -",
    lastSeen: "2026-04-03, Frankfurt am Main",
    risk: "niedrig",
    fileRef: "AZ: 67-XV-5349",
    photo: null
  },
  {
    id: "P-2026-153",
    name: "Semir Gerkhan",
    dob: "1966-04-22",
    status: "AKTIV",
    region: "Köln",
    notes: "- keine -",
    lastSeen: "2026-03-28, Köln-Porz",
    risk: "hoch",
    fileRef: "AZ: 23-ED-4711",
    photo: null
  },
  {
    id: "P-2026-154",
    name: "Niklas Richter",
    dob: "2002-12-12",
    status: "ARCHIVIERT",
    region: "Gelnhausen",
    notes: "Gesucht wegen illegalem Kfz Rennen in Frankfurt-Bahnhofsviertel.",
    lastSeen: "2026-02-07, Frankfurt-Bahnhofsviertel",
    risk: "niedrig",
    fileRef: "AZ: 29-AD-9909",
    photo: null
  }, 
];

const VEHICLES = [
  {
    id: "V-2026-001",
    plate: "F-AB 1234",
    type: "PKW, dunkelblauer BMW 3er",
    status: "GESUCHT",
    region: "Frankfurt am Main",
    owner: "Jonas Richter",
    notes: "Fluchtfahrzeug bei Einbruchserie, zuletzt Tiefgarage Bockenheim.",
    photoUrl: "https://th.bing.com/th/id/R.0154dd03fa33675454482f4dfe1abc32?rik=HxJduiUNeLfbQQ&pid=ImgRaw&r=0"
  },
  {
    id: "V-2026-002",
    plate: "OF-ML 9087",
    type: "Kleinwagen, roter VW Polo",
    status: "AKTIV",
    region: "Offenbach",
    owner: "Mara Lehmann",
    notes: "Zeugin, Fahrzeug für An- und Abreise zu Vernehmungen.",
    photoUrl: "https://media.istockphoto.com/photos/front-view-of-red-volkswagen-polo-parked-in-the-street-picture-id1322733971?k=20&m=1322733971&s=612x612&w=0&h=gSf2tRWZeM8t2yRPaW8ZlMjytUIh_nojeyj_fJzKCXo="
  },
  {
    id: "V-2026-003",
    plate: "HU-TY 3310",
    type: "Transporter, weißer Mercedes Sprinter",
    status: "ARCHIVIERT",
    region: "Hanau",
    owner: "Tarek Yilmaz",
    notes: "Ehemals in Ermittlungen, Vorgang abgeschlossen.",
    photoUrl: "https://carwiki.de/wp-content/uploads/2020/10/Mercedes_Benz_Sprinter_Kfz_Steuer-scaled.jpg"
  },
  {
    id: "V-2026-004",
    plate: "GN-EX 39",
    type: "PKW, dunkelblauer BMW 5er",
    status: "ARCHIVIERT",
    region: "Gelnhausen",
    owner: "unbekannt",
    notes: "- keine -",
    photoUrl: "https://img.bmw-syndikat.de/gallery/135/813/739418_bmw-syndikat_bild_high.jpg"
  },
  {
    id: "V-2026-005",
    plate: "BÜD-ZM 320",
    type: "PKW, schwarzer Mercedes",
    status: "ARCHIVIERT",
    region: "Büdingen",
    owner: "Tim Mannhaimer",
    notes: "- keine -",
    photoUrl: "https://cdn.classic-trader.com/I/images/1920_1920_inset/vehicle_ad_standard_image_3f5d09df43a8a3c191329240b8eb5fbf.jpg"
  },
  {
    id: "V-2026-006",
    plate: "FB-WH 507 E",
    type: "PKW, roter Hyundai Kona Elektro",
    status: "AKTIV",
    region: "Friedberg (Hessen)",
    owner: "bisher unbekannt",
    notes: "Fahrzeug gesucht aufgrund von Verischerungsbetrug.",
    photoUrl: "https://tse1.mm.bing.net/th/id/OIP.ec70JBw783hf6l_s3Xyf8gHaE7?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: "V-2026-007",
    plate: "FB-S 2",
    type: "PKW, silberner BMW M2",
    status: "ARCHIVIERT",
    region: "Friedberg (Hessen)",
    owner: "B&K GmbH",
    notes: "- keine -",
    photoUrl: "https://live.staticflickr.com/65535/51901700226_535c5a3aa7_b.jpg"
  },
  {
  id: "V-2026-008",
  plate: "F-XY 204",
  type: "PKW, schwarzer Audi A4",
  status: "AKTIV",
  region: "Frankfurt am Main",
  owner: "unbekannt",
  notes: "Fahrzeug mehrfach im Bahnhofsviertel gesichtet.",
  photoUrl: ""
},
{
  id: "V-2026-009",
  plate: "OF-RK 77",
  type: "PKW, grauer VW Passat",
  status: "GESUCHT",
  region: "Offenbach",
  owner: "unbekannt",
  notes: "Fluchtfahrzeug nach Verkehrsunfallflucht.",
  photoUrl: ""
},
{
  id: "V-2026-010",
  plate: "HG-LM 502",
  type: "SUV, weißer Volvo XC60",
  status: "AKTIV",
  region: "Bad Homburg",
  owner: "Lena Möller",
  notes: "",
  photoUrl: ""
},
{
  id: "V-2026-011",
  plate: "GN-AB 901",
  type: "PKW, silberner Opel Astra",
  status: "ARCHIVIERT",
  region: "Gelnhausen",
  owner: "Autohaus Bergmann",
  notes: "",
  photoUrl: ""
},
{
  id: "V-2026-012",
  plate: "BÜD-F 12",
  type: "PKW, blauer Ford Focus",
  status: "AKTIV",
  region: "Büdingen",
  owner: "Familie Fischer",
  notes: "",
  photoUrl: ""
},
{
  id: "V-2026-013",
  plate: "FB-KL 889",
  type: "Transporter, weißer Ford Transit",
  status: "GESUCHT",
  region: "Friedberg",
  owner: "unbekannt",
  notes: "Zeugen melden auffälliges Fahrverhalten.",
  photoUrl: ""
},
{
  id: "V-2026-014",
  plate: "MKK-Z 300",
  type: "PKW, roter Mazda 3",
  status: "AKTIV",
  region: "Main-Kinzig-Kreis",
  owner: "Zara K.",
  notes: "",
  photoUrl: ""
},
{
  id: "V-2026-015",
  plate: "F-TS 440",
  type: "PKW, schwarzer Tesla Model 3",
  status: "AKTIV",
  region: "Frankfurt",
  owner: "Tech Solutions GmbH",
  notes: "",
  photoUrl: ""
},
{
  id: "V-2026-016",
  plate: "OF-EE 99",
  type: "PKW, grüner Skoda Octavia",
  status: "ARCHIVIERT",
  region: "Offenbach",
  owner: "E. Eberhardt",
  notes: "",
  photoUrl: ""
},
{
  id: "V-2026-017",
  plate: "HU-TR 55",
  type: "PKW, weißer Toyota Corolla",
  status: "AKTIV",
  region: "Hanau",
  owner: "T. Riedel",
  notes: "",
  photoUrl: ""
},
{
  id: "V-2026-018",
  plate: "F-DA 120",
  type: "PKW, schwarzer BMW 1er",
  status: "GESUCHT",
  region: "Frankfurt",
  owner: "unbekannt",
  notes: "Im Zusammenhang mit Taschendiebstählen gemeldet.",
  photoUrl: ""
},
{
  id: "V-2026-019",
  plate: "MKK-HH 808",
  type: "Transporter, grauer VW Crafter",
  status: "AKTIV",
  region: "Main-Kinzig-Kreis",
  owner: "Handwerk Huber",
  notes: "",
  photoUrl: ""
},
{
  id: "V-2026-020",
  plate: "FB-OP 77",
  type: "PKW, silberner Opel Corsa",
  status: "ARCHIVIERT",
  region: "Friedberg",
  owner: "O. Peters",
  notes: "",
  photoUrl: ""
},
{
  id: "V-2026-021",
  plate: "BÜD-M 300",
  type: "PKW, schwarzer Mercedes C-Klasse",
  status: "AKTIV",
  region: "Büdingen",
  owner: "M. Mertens",
  notes: "",
  photoUrl: ""
},
{
  id: "V-2026-022",
  plate: "GN-RS 12",
  type: "PKW, roter Seat Leon",
  status: "GESUCHT",
  region: "Gelnhausen",
  owner: "unbekannt",
  notes: "Zeugen melden nächtliche Rennen.",
  photoUrl: ""
},
{
  id: "V-2026-023",
  plate: "F-LL 501",
  type: "SUV, schwarzer Audi Q5",
  status: "AKTIV",
  region: "Frankfurt",
  owner: "L. Langen",
  notes: "",
  photoUrl: ""
},
{
  id: "V-2026-024",
  plate: "OF-PR 88",
  type: "PKW, weißer Peugeot 308",
  status: "ARCHIVIERT",
  region: "Offenbach",
  owner: "P. Reuter",
  notes: "",
  photoUrl: ""
},
{
  id: "V-2026-025",
  plate: "HU-XY 909",
  type: "PKW, grauer Hyundai i30",
  status: "AKTIV",
  region: "Hanau",
  owner: "X. Yildiz",
  notes: "",
  photoUrl: "https://tse2.mm.bing.net/th/id/OIP.xyLLY99xqmnCe7ZlC9rmcwHaEK?rs=1&pid=ImgDetMain&o=7&rm=3"
},
{
  id: "V-2026-026",
  plate: "MKK-AB 44",
  type: "PKW, blauer BMW 2er",
  status: "GESUCHT",
  region: "Main-Kinzig-Kreis",
  owner: "unbekannt",
  notes: "Fahrzeug flüchtete vor Kontrolle.",
  photoUrl: "https://cdn.bimmertoday.de/wp-content/uploads/2022/02/BMW-2er-Active-Tourer-U06-M-Sport-Portimao-Blau-223i-23.jpg"
},
{
  id: "V-2026-027",
  plate: "FB-RE 300",
  type: "PKW, weißer Renault Clio",
  status: "AKTIV",
  region: "Friedberg",
  owner: "R. Engel",
  notes: "",
  photoUrl: "https://cdn.motor1.com/images/mgl/Vk2pz/s3/renault-clio-e-tech.jpg"
},
{
  id: "V-2026-028",
  plate: "BÜD-K 55",
  type: "PKW, grauer Kia Ceed",
  status: "ARCHIVIERT",
  region: "Büdingen",
  owner: "K. König",
  notes: "",
  photoUrl: "https://bluesky.cdn.imgeng.in/cogstock-images/Ceed_5dr_Hatch_2022-on_Set_2_DARKPENTAMETAL.jpg?imgeng=/w_auto,700/"
},
{
  id: "V-2026-029",
  plate: "GN-TS 909",
  type: "PKW, schwarzer Toyota Supra",
  status: "AKTIV",
  region: "Gelnhausen",
  owner: "T. Schmitt",
  notes: "Farhzeug wurde als gestohlen gemeldet.",
  photoUrl: "https://th.bing.com/th/id/R.d8c7782f0d1abe4ee51590cae0f1fc15?rik=g81xk01av38gOw&pid=ImgRaw&r=0"
},
{
  id: "V-2026-030",
  plate: "F-ME 77",
  type: "PKW, silberner Mercedes E-Klasse",
  status: "AKTIV",
  region: "Frankfurt",
  owner: "M. Engel",
  notes: "",
  photoUrl: "https://carwiki.de/wp-content/uploads/2020/10/E_Klasse_Kfz_Steuer_Silber-scaled.jpg"
},
{
  id: "V-2026-031",
  plate: "OF-AL 12",
  type: "PKW, roter Alfa Romeo Giulia",
  status: "GESUCHT",
  region: "Offenbach",
  owner: "unbekannt",
  notes: "Im Zusammenhang mit illegalen Rennen.",
  photoUrl: "https://th.bing.com/th/id/R.c76198df46cb8ee454243385e51140e9?rik=5l9xZsjh3%2bvC7Q&riu=http%3a%2f%2fimages.caricos.com%2fa%2falfa_romeo%2f2017_alfa_romeo_giulia_quadrifoglio%2fimages%2f1920x1080%2f2017_alfa_romeo_giulia_quadrifoglio_74_1920x1080.jpg&ehk=U%2b2beuSJFBAsRP6OGKJwWeDDq8%2fxX8WMd1qk2rpscp4%3d&risl=&pid=ImgRaw&r=0"
},
{
  id: "V-2026-032",
  plate: "HU-PL 88",
  type: "PKW, blauer VW Golf",
  status: "AKTIV",
  region: "Hanau",
  owner: "P. Langer",
  notes: "",
  photoUrl: "https://cdn.motor1.com/images/mgl/BXA11A/s1/vw-golf-r-20-years-edition-2022-im-kurztest.jpg"
},
{
  id: "V-2026-033",
  plate: "MKK-J 300",
  type: "Transporter, weißer Sprinter",
  status: "ARCHIVIERT",
  region: "Main-Kinzig-Kreis",
  owner: "J. Transporte",
  notes: "",
  photoUrl: "https://tse2.mm.bing.net/th/id/OIP.HQbW7EFso99gs_YC443fkwHaFj?rs=1&pid=ImgDetMain&o=7&rm=3"
},
{
  id: "V-2026-034",
  plate: "FB-DA 55",
  type: "PKW, grauer Dacia Sandero",
  status: "AKTIV",
  region: "Friedberg",
  owner: "D. Aydin",
  notes: "",
  photoUrl: "https://autonotizen.de/user/pages/05.fahrberichte/2794.dacia-sandero-tce-90-expression-test-fahrt-video-review-2023/dacia-sandero-tce-90___dacia-sandero-expression-tce-90-schiefer-grau-2023-front-links___1676969309.jpg"
},
{
  id: "V-2026-035",
  plate: "BÜD-S 909",
  type: "PKW, schwarzer Subaru Impreza",
  status: "GESUCHT",
  region: "Büdingen",
  owner: "unbekannt",
  notes: "Zeugen melden extrem laute Abgasanlage.",
  photoUrl: "https://4.bp.blogspot.com/-mN3Wj-30XhI/Wr1v-jT-LmI/AAAAAAAAsxE/XtD7dWoVS8IWkGGUQdxI6XyF_VEXuaLUACK4BGAYYCw/s1600/2015%2BSubaru%2BWRX%2BSTI%2B-%2BBlack%2B-%2BImgur-709400.jpg"
},
{
  id: "V-2026-036",
  plate: "GN-M 77",
  type: "PKW, weißer Mini Cooper",
  status: "AKTIV",
  region: "Gelnhausen",
  owner: "M. Müller",
  notes: "",
  photoUrl: "https://th.bing.com/th/id/R.46825b37aa2fa74cdb75c2ac69c4b0cb?rik=FjafOvOur9KS9w&pid=ImgRaw&r=0"
  },
  {
    id: "V-2026-037",
    plate: "F-AR 300",
    type: "PKW, schwarzer Audi RS3",
    status: "GESUCHT",
    region: "Frankfurt",
    owner: "unbekannt",
    notes: "Fahrzeug flüchtete mit erhöhter Geschwindigkeit.",
    photoUrl: "https://zs-gloss-factory.de/wp-content/uploads/2019/11/DSC01543.jpg"
  },
  {
    id: "V-2026-038",
    plate: "FB-OM 7078",
    type: "PKW, dunkelgrauer BMW 3er",
    status: "ARCHIVIERT",
    region: "Friedberg (Hessen)",
    owner: "Polizeipräsidium Hessen",
    notes: "Registriertes EF.",
    photoUrl: "https://img.bmw-syndikat.de/gallery/142/231/bild_fotos_174899.JPG"
  },
  {
    id: "V-2026-039",
    plate: "FB-XY 34",
    type: "PKW, silberner BMW 5er",
    status: "ARCHIVIERT",
    region: "Friedberg (Hessen)",
    owner: "Nils Bach",
    notes: "Ehemaliges EF des Polizeipräsidiums Bayern.",
    photoUrl: "https://uploads.carandclassic.co.uk/uploads/cars/bmw/13896362.jpg"
  },
];

const CASES = [
  {
    id: "AZ: 23-ED-4711",
    title: "Einbruchserie Westend/Bockenheim",
    status: "OFFEN",
    region: "Frankfurt am Main",
    leadInvestigator: "KHK Weber",
    lastUpdate: "2026-03-30",
    notes: "Mehrere hochwertige Einbrüche, Verdacht auf organisierte Bande. Verbindung zu Fahrzeug V-2026-001.",
    photoUrl: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Police_Line_Yellow_Blur.jpg"
  },
  {
    id: "AZ: 23-OF-9921",
    title: "Zeugenverfahren Lehmann",
    status: "LAUFEND",
    region: "Offenbach",
    leadInvestigator: "KOKin Brandt",
    lastUpdate: "2026-04-01",
    notes: "Zeugin in größerem Betrugsverfahren, Schutzmaßnahmen eingeleitet.",
    photoUrl: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Courtroom_in_the_United_States.jpg"
  },
  {
    id: "AZ: 22-HU-3310",
    title: "Transporter-Ermittlungen Hanau",
    status: "ABGESCHLOSSEN",
    region: "Hanau",
    leadInvestigator: "KHK Yilmaz",
    lastUpdate: "2025-11-15",
    notes: "Verfahren abgeschlossen, Daten zur Dokumentation im System belassen.",
    photoUrl: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Police_car_lights.jpg"
  }
];
