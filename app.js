// LOGIN
const loginScreen = document.getElementById("login-screen");
const app = document.getElementById("app");
const loginBtn = document.getElementById("login-btn");
const loginStatus = document.getElementById("login-status");
const userDisplay = document.getElementById("user-display");

loginBtn.addEventListener("click", () => {
  const user = document.getElementById("username").value.trim();
  const pass = document.getElementById("password").value.trim();

  const found = USERS.find(u => u.username === user && u.password === pass);

  loginStatus.textContent = "Authentifizierung läuft…";

  setTimeout(() => {
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
  }, 700);
});


// LOCAL STORAGE
function loadLocalPersons() {
  const saved = localStorage.getItem("polis_persons");
  return saved ? JSON.parse(saved) : [];
}

function saveLocalPersons(list) {
  localStorage.setItem("polis_persons", JSON.stringify(list));
}


// SUCHE & UI
const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const statusFilter = document.getElementById("status-filter");
const resultsBody = document.getElementById("results-body");
const detailsContent = document.getElementById("details-content");

let ALL_PERSONS = [];

function loadAndRender() {
  ALL_PERSONS = [...PERSONS, ...loadLocalPersons()];
  renderResults(ALL_PERSONS);
}

function renderResults(list) {
  resultsBody.innerHTML = "";
  list.forEach(person => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${person.id}</td>
      <td>${person.name}</td>
      <td>${person.dob}</td>
      <td><span class="status-pill status-${person.status}">${person.status}</span></td>
      <td>${person.region}</td>
    `;
    tr.addEventListener("click", () => showDetails(person));
    resultsBody.appendChild(tr);
  });
}

function showDetails(person) {
  detailsContent.innerHTML = `
    <div class="details-content">
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

function applySearch() {
  const term = searchInput.value.toLowerCase().trim();
  const status = statusFilter.value;

  const filtered = ALL_PERSONS.filter(p => {
    const matchesTerm =
      !term ||
      p.name.toLowerCase().includes(term) ||
      p.id.toLowerCase().includes(term) ||
      p.region.toLowerCase().includes(term);

    const matchesStatus = !status || p.status === status;

    return matchesTerm && matchesStatus;
  });

  renderResults(filtered);
  detailsContent.innerHTML = `<p>${filtered.length} Treffer gefunden. Bitte Datensatz auswählen.</p>`;
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

document.getElementById("admin-save").addEventListener("click", () => {
  const newPerson = {
    id: "P-" + Date.now(),
    name: document.getElementById("admin-name").value,
    dob: document.getElementById("admin-dob").value,
    status: document.getElementById("admin-status").value,
    region: document.getElementById("admin-region").value,
    notes: document.getElementById("admin-notes").value,
    lastSeen: "Keine Daten",
    risk: "unbekannt",
    fileRef: "AZ: " + Math.floor(Math.random() * 99999)
  };

  const existing = loadLocalPersons();
  existing.push(newPerson);
  saveLocalPersons(existing);

  loadAndRender();

  alert("Datensatz gespeichert!");
});
