// ============================================================
// POLIS – Authentifizierungsmodul
// ============================================================
// Zugangsdaten sind als SHA-256 Hashes gespeichert.
// Passwörter können NICHT im Klartext ausgelesen werden.
// Benutzer müssen ihre Zugangsdaten bereits kennen.
// ============================================================

const USERS_HASHED = [
  {
    usernameHash: "5e98b64a2cfa94a131b215cd03c9c43fd4dc602acfb7d597480f27ce9a29f9e7",
    passwordHash: "cb2a35ff149a556cf437b63692856294f409207d5d53dd6584c4cb0bb1ea0bd5",
    role: "operator"
  },
  {
    usernameHash: "6644ae39e5f414cdbedf4b14694c3fdf4e8c932ada781d38dabc21a4ffa0ab20",
    passwordHash: "96fa370bc7a55fb029e53a75d8eeec5cb98d10110cc5f1192e1ec5ad94f06d69",
    role: "operator"
  },
  {
    usernameHash: "8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918",
    passwordHash: "778c78fa79d89cd2a93096b793485141f88f6eb44c18fdb78f0912997293373f",
    role: "admin"
  }
];

// SHA-256 Hash-Funktion (Web Crypto API)
async function hashSHA256(text) {
  const encoder = new TextEncoder();
  const data = encoder.encode(text);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
}

// Authentifizierung prüfen – gibt User-Objekt oder null zurück
async function authenticateUser(username, password) {
  const uHash = await hashSHA256(username);
  const pHash = await hashSHA256(password);

  const match = USERS_HASHED.find(
    u => u.usernameHash === uHash && u.passwordHash === pHash
  );

  if (match) {
    return { username: username, role: match.role };
  }
  return null;
}
