/**
 * JE-TCH 2026 — réception des inscriptions dans Google Sheets.
 * ----------------------------------------------------------------------------
 * INSTALLATION
 *   1. Crée (ou ouvre) un Google Sheet — c'est lui qui recevra les inscriptions.
 *   2. Menu  Extensions ▸ Apps Script  → colle TOUT ce fichier (remplace le contenu).
 *   3. (Conseillé) Remplace SECRET ci-dessous par une longue chaîne aléatoire.
 *   4. Déploiement ▸ Nouveau déploiement ▸ type « Application web » :
 *         • Description       : JE-TCH inscriptions
 *         • Exécuter en tant que : Moi
 *         • Qui a accès        : Tout le monde
 *      → Autorise l'accès quand Google le demande.
 *   5. Copie l'URL qui se termine par /exec et mets-la dans .env.local :
 *         GOOGLE_SHEETS_WEBHOOK_URL=...
 *         GOOGLE_SHEETS_SECRET=...   (la même valeur que SECRET ci-dessous)
 *
 *   ⚠️ À chaque modification du script, refais « Déploiement ▸ Gérer les
 *      déploiements ▸ (crayon) ▸ Nouvelle version » pour publier les changements.
 *
 * Les colonnes sont créées automatiquement à partir des champs reçus
 * (en-têtes dynamiques). Une feuille « Producteurs » et une feuille
 * « Exposants » sont alimentées selon le champ `type`.
 */

const SECRET = ''; // ← identique à GOOGLE_SHEETS_SECRET (laisser '' pour désactiver la vérification)

const SHEET_BY_TYPE = {
  producteur: 'Producteurs',
  exposant: 'Exposants',
};

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000); // évite les collisions si plusieurs envois simultanés
  try {
    const data = JSON.parse(e.postData.contents);

    // Sécurité : si un secret est défini, il doit correspondre.
    if (SECRET && data.secret !== SECRET) {
      return json({ ok: false, error: 'unauthorized' });
    }
    delete data.secret; // ne jamais écrire le secret dans la feuille

    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheetName = SHEET_BY_TYPE[data.type] || 'Inscriptions';
    const sheet = ss.getSheetByName(sheetName) || ss.insertSheet(sheetName);

    // En-têtes existants (1re ligne), puis ajout des nouvelles clés reçues.
    let headers = sheet.getLastColumn() > 0
      ? sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0].filter(String)
      : [];
    Object.keys(data).forEach(function (key) {
      if (headers.indexOf(key) === -1) headers.push(key);
    });
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);

    // Écrit la ligne dans l'ordre des en-têtes.
    const row = headers.map(function (h) {
      const v = data[h];
      if (v === undefined || v === null) return '';
      return (typeof v === 'object') ? JSON.stringify(v) : v;
    });
    sheet.appendRow(row);

    return json({ ok: true });
  } catch (err) {
    return json({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

function json(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
