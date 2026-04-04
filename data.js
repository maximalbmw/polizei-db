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
    photoUrl: "https://upload.wikimedia.org/wikipedia/commons/0/0b/2019_BMW_320d_M_Sport_Touring_Automatic_2.0_Front.jpg"
  },
  {
    id: "V-2026-002",
    plate: "OF-ML 9087",
    type: "Kleinwagen, roter VW Polo",
    status: "AKTIV",
    region: "Offenbach",
    owner: "Mara Lehmann",
    notes: "Zeugin, Fahrzeug für An- und Abreise zu Vernehmungen.",
    photoUrl: "https://upload.wikimedia.org/wikipedia/commons/4/4b/2018_Volkswagen_Polo_SE_TSi_1.0_Front.jpg"
  },
  {
    id: "V-2026-003",
    plate: "HU-TY 3310",
    type: "Transporter, weißer Mercedes Sprinter",
    status: "ARCHIVIERT",
    region: "Hanau",
    owner: "Tarek Yilmaz",
    notes: "Ehemals in Ermittlungen, Vorgang abgeschlossen.",
    photoUrl: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Mercedes_Sprinter_II_316_CDI_Kastenwagen_MJ2013.JPG"
  }
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
