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
    id: "V-2026-023",
    plate: "FB-OM 7078",
    type: "PKW, dunkelgrauer BMW 3er",
    status: "ARCHIVIERT",
    region: "Friedberg (Hessen)",
    owner: "Polizeipräsidium Hessen",
    notes: "Registriertes EF.",
    photoUrl: "https://img.bmw-syndikat.de/gallery/142/231/bild_fotos_174899.JPG"
  },
  {
    id: "V-2026-024",
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
