// LOGIN
const loginScreen = document.getElementById("login-screen");
const app = document.getElementById("app");
const loginBtn = document.getElementById("login-btn");
const loginStatus = document.getElementById("login-status");
const userDisplay = document.getElementById("user-display");

loginBtn.addEventListener("click", async () => {
  const user = document.getElementById("username").value.trim();
  const pass = document.getElementById("password").value.trim();

  if (!user || !pass) {
    loginStatus.textContent = "Bitte Dienstkennung und Passwort eingeben.";
    return;
  }

  loginStatus.textContent = "Authentifizierung läuft…";

  // Kurze Verzögerung für realistischen Effekt
  await new Promise(r => setTimeout(r, 800));

  const found = await authenticateUser(user, pass);

  if (!found) {
    loginStatus.textContent = "Zugang verweigert – ungültige Anmeldedaten.";
    return;
  }

  loginScreen.style.display = "none";
  app.style.display = "flex";

  userDisplay.textContent = found.username.toUpperCase();

  document.getElementById("audit-log").textContent =
    "Zugriff protokolliert – " +
    new Date().toLocaleString("de-DE") +
    " – Benutzer: " +
    found.username;

  loadAndRender();
});

// LOGOUT
document.getElementById("logout-btn").addEventListener("click", () => {
  app.style.display = "none";
  loginScreen.style.display = "flex";
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
  loginStatus.textContent = "";
});

// Enter-Taste im Login
document.getElementById("password").addEventListener("keydown", (e) => {
  if (e.key === "Enter") loginBtn.click();
});
document.getElementById("username").addEventListener("keydown", (e) => {
  if (e.key === "Enter") loginBtn.click();
});

// LOCAL STORAGE PERSONS
function loadLocalPersons() {
  const saved = localStorage.getItem("polis_persons");
  return saved ? JSON.parse(saved) : [];
}

function saveLocalPersons(list) {
  localStorage.setItem("polis_persons", JSON.stringify(list));
}

// FILE -> BASE64
function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

// MODULE STATE
let ALL_PERSONS = [];
let CURRENT_MODULE = "persons";

// ELEMENTE
const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const statusFilter = document.getElementById("status-filter");

const resultsBodyPersons  = document.getElementById("results-body-persons");
const detailsContentPersons = document.getElementById("details-content-persons");

const resultsBodyVehicles = document.getElementById("results-body-vehicles");
const detailsContentVehicles = document.getElementById("details-content-vehicles");

const resultsBodyCases = document.getElementById("results-body-cases");
const detailsContentCases = document.getElementById("details-content-cases");

const mapView = document.getElementById("map-view");

// DATEN LADEN
function loadAndRender() {
  ALL_PERSONS = [...PERSONS, ...loadLocalPersons()];
  renderCurrentModule();
}

// MODULE UMSCHALTEN
document.querySelectorAll('.sidebar li[data-module]').forEach(li => {
  li.addEventListener("click", () => {
    document.querySelectorAll('.sidebar li[data-module]').forEach(x => x.classList.remove("active"));
    li.classList.add("active");
    CURRENT_MODULE = li.getAttribute("data-module");
    renderCurrentModule();
  });
});

function hideAllViews() {
  document.getElementById("results-persons").classList.add("hidden");
  document.getElementById("details-persons").classList.add("hidden");
  document.getElementById("results-vehicles").classList.add("hidden");
  document.getElementById("details-vehicles").classList.add("hidden");
  document.getElementById("results-cases").classList.add("hidden");
  document.getElementById("details-cases").classList.add("hidden");
  mapView.classList.add("hidden");
}

function renderCurrentModule() {
  hideAllViews();

  if (CURRENT_MODULE === "persons") {
    document.getElementById("results-persons").classList.remove("hidden");
    document.getElementById("details-persons").classList.remove("hidden");
    applySearch();
  } else if (CURRENT_MODULE === "vehicles") {
    document.getElementById("results-vehicles").classList.remove("hidden");
    document.getElementById("details-vehicles").classList.remove("hidden");
    applySearch();
  } else if (CURRENT_MODULE === "cases") {
    document.getElementById("results-cases").classList.remove("hidden");
    document.getElementById("details-cases").classList.remove("hidden");
    applySearch();
  } else if (CURRENT_MODULE === "map") {
    mapView.classList.remove("hidden");
  }
}

// PERSONEN RENDERING
function renderPersonResults(list) {
  resultsBodyPersons.innerHTML = "";
  list.forEach(person => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>
        ${person.photo ? `<img src="${person.photo}" class="result-photo">` : ""}
        ${person.id}
      </td>
      <td>${person.name}</td>
      <td>${person.dob}</td>
      <td><span class="status-pill status-${person.status}">${person.status}</span></td>
      <td>${person.region}</td>
    `;
    tr.addEventListener("click", () => showPersonDetails(person));
    resultsBodyPersons.appendChild(tr);
  });
}

function showPersonDetails(person) {
  detailsContentPersons.innerHTML = `
    <div class="details-content">
      ${person.photo ? `<img src="${person.photo}" alt="Foto von ${person.name}">` : ""}

      <div class="label">Personen-ID</div>
      <p>${person.id}</p>

      <div class="label">Name</div>
      <p>${person.name}</p>

      <div class="label">Geburtsdatum</div>
      <p>${person.dob}</p>

      <div class="label">Status</div>
      <p>${person.status}</p>

      <div class="label">Region</div>
      <p>${person.region}</p>

      <div class="label">Aktenzeichen</div>
      <p>${person.fileRef}</p>

      <div class="label">Letzte bekannte Sichtung</div>
      <p>${person.lastSeen}</p>

      <div class="label">Risikoeinschätzung</div>
      <p>${person.risk}</p>

      <div class="label">Notizen</div>
      <p>${person.notes}</p>
    </div>
  `;
}

// FAHRZEUGE RENDERING
function renderVehicleResults(list) {
  resultsBodyVehicles.innerHTML = "";
  list.forEach(v => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${v.id}</td>
      <td>${v.plate}</td>
      <td>${v.type}</td>
      <td><span class="status-pill status-${v.status}">${v.status}</span></td>
      <td>${v.region}</td>
    `;
    tr.addEventListener("click", () => showVehicleDetails(v));
    resultsBodyVehicles.appendChild(tr);
  });
}

function showVehicleDetails(v) {
  detailsContentVehicles.innerHTML = `
    <div class="details-content">
      ${v.photoUrl ? `<img src="${v.photoUrl}" alt="Fahrzeug ${v.plate}">` : ""}

      <div class="label">Fahrzeug-ID</div>
      <p>${v.id}</p>

      <div class="label">Kennzeichen</div>
      <p>${v.plate}</p>

      <div class="label">Typ</div>
      <p>${v.type}</p>

      <div class="label">Status</div>
      <p>${v.status}</p>

      <div class="label">Region</div>
      <p>${v.region}</p>

      <div class="label">Halter</div>
      <p>${v.owner}</p>

      <div class="label">Notizen</div>
      <p>${v.notes}</p>
    </div>
  `;
}

// FÄLLE RENDERING
function renderCaseResults(list) {
  resultsBodyCases.innerHTML = "";
  list.forEach(c => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${c.id}</td>
      <td>${c.title}</td>
      <td>${c.status}</td>
      <td>${c.region}</td>
      <td>${c.leadInvestigator}</td>
    `;
    tr.addEventListener("click", () => showCaseDetails(c));
    resultsBodyCases.appendChild(tr);
  });
}

function showCaseDetails(c) {
  detailsContentCases.innerHTML = `
    <div class="details-content">
      ${c.photoUrl ? `<img src="${c.photoUrl}" alt="Fall ${c.id}">` : ""}

      <div class="label">Aktenzeichen</div>
      <p>${c.id}</p>

      <div class="label">Titel</div>
      <p>${c.title}</p>

      <div class="label">Status</div>
      <p>${c.status}</p>

      <div class="label">Region</div>
      <p>${c.region}</p>

      <div class="label">Leitender Ermittler</div>
      <p>${c.leadInvestigator}</p>

      <div class="label">Letzte Aktualisierung</div>
      <p>${c.lastUpdate}</p>

      <div class="label">Notizen</div>
      <p>${c.notes}</p>
    </div>
  `;
}

// SUCHE
function applySearch() {
  const term = searchInput.value.toLowerCase().trim();
  const status = statusFilter.value;

  if (CURRENT_MODULE === "persons") {
    const filtered = ALL_PERSONS.filter(p => {
      const matchesTerm =
        !term ||
        p.name.toLowerCase().includes(term) ||
        p.id.toLowerCase().includes(term) ||
        p.region.toLowerCase().includes(term);

      const matchesStatus = !status || p.status === status;

      return matchesTerm && matchesStatus;
    });

    renderPersonResults(filtered);
    detailsContentPersons.innerHTML = `<p>${filtered.length} Treffer gefunden. Bitte Datensatz auswählen.</p>`;
  } else if (CURRENT_MODULE === "vehicles") {
    const filtered = VEHICLES.filter(v => {
      const matchesTerm =
        !term ||
        v.plate.toLowerCase().includes(term) ||
        v.id.toLowerCase().includes(term) ||
        v.region.toLowerCase().includes(term) ||
        v.owner.toLowerCase().includes(term);

      const matchesStatus = !status || v.status === status;

      return matchesTerm && matchesStatus;
    });

    renderVehicleResults(filtered);
    detailsContentVehicles.innerHTML = `<p>${filtered.length} Treffer gefunden. Bitte Fahrzeug auswählen.</p>`;
  } else if (CURRENT_MODULE === "cases") {
    const filtered = CASES.filter(c => {
      const matchesTerm =
        !term ||
        c.title.toLowerCase().includes(term) ||
        c.id.toLowerCase().includes(term) ||
        c.region.toLowerCase().includes(term) ||
        c.leadInvestigator.toLowerCase().includes(term);

      return matchesTerm;
    });

    renderCaseResults(filtered);
    detailsContentCases.innerHTML = `<p>${filtered.length} Treffer gefunden. Bitte Fall auswählen.</p>`;
  }
}

searchBtn.addEventListener("click", applySearch);
searchInput.addEventListener("keydown", e => {
  if (e.key === "Enter") applySearch();
});
statusFilter.addEventListener("change", applySearch);

// ADMIN PANEL
document.getElementById("admin-btn").addEventListener("click", () => {
  const panel = document.getElementById("admin-panel");
  panel.style.display = panel.style.display === "none" ? "block" : "none";
});

document.getElementById("admin-save").addEventListener("click", async () => {
  const file = document.getElementById("admin-image").files[0];
  let imageBase64 = null;

  if (file) {
    imageBase64 = await fileToBase64(file);
  }

  const newPerson = {
    id: "P-" + Date.now(),
    name: document.getElementById("admin-name").value,
    dob: document.getElementById("admin-dob").value,
    status: document.getElementById("admin-status").value,
    region: document.getElementById("admin-region").value,
    notes: document.getElementById("admin-notes").value,
    lastSeen: "Keine Daten",
    risk: "unbekannt",
    fileRef: "AZ: " + Math.floor(Math.random() * 99999),
    photo: imageBase64
  };

  const existing = loadLocalPersons();
  existing.push(newPerson);
  saveLocalPersons(existing);

  loadAndRender();

  alert("Datensatz gespeichert!");
});
