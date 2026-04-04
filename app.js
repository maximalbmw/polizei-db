// -------------------------------
// LOGIN-BEREICH
// -------------------------------

const loginScreen = document.getElementById("login-screen");
const app = document.getElementById("app");
const loginBtn = document.getElementById("login-btn");
const loginStatus = document.getElementById("login-status");
const userDisplay = document.getElementById("user-display");

loginBtn.addEventListener("click", () => {
  const user = document.getElementById("username").value.trim();
  const pass = document.getElementById("password").value.trim();

  // Prüfen, ob Username + Passwort existieren
  const found = USERS.find(u => u.username === user && u.password === pass);

  loginStatus.textContent = "Authentifizierung läuft…";

  setTimeout(() => {
    if (!found) {
      loginStatus.textContent = "Zugang verweigert – ungültige Anmeldedaten.";
      return;
    }

    // Login erfolgreich
    loginScreen.style.display = "none";
    app.style.display = "flex";

    userDisplay.textContent = found.username.toUpperCase();

    document.getElementById("audit-log").textContent =
      "Zugriff protokolliert – " +
      new Date().toLocaleString("de-DE") +
      " – Benutzer: " +
      found.username;

    renderResults(PERSONS);
  }, 700);
});


// -------------------------------
// SUCH- UND FILTERBEREICH
// -------------------------------

const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const statusFilter = document.getElementById("status-filter");
const resultsBody = document.getElementById("results-body");
const detailsContent = document.getElementById("details-content");


// -------------------------------
// ERGEBNISLISTE RENDERN
// -------------------------------

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


// -------------------------------
// DETAILANSICHT
// -------------------------------

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


// -------------------------------
// SUCHE ANWENDEN
// -------------------------------

function applySearch() {
  const term = searchInput.value.toLowerCase().trim();
  const status = statusFilter.value;

  const filtered = PERSONS.filter(p => {
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


// -------------------------------
// EVENT-LISTENER
// -------------------------------

searchBtn.addEventListener("click", applySearch);

searchInput.addEventListener("keydown", e => {
  if (e.key === "Enter") applySearch();
});

statusFilter.addEventListener("change", applySearch);
