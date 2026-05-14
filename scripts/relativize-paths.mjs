// =====================================================================
// Script post-build : convertit les chemins absolus en chemins relatifs
// pour que le site fonctionne en ouvrant index.html directement (file://)
// et reste compatible avec un hébergement classique (OVH, etc.)
// =====================================================================

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const OUT_DIR = path.join(__dirname, "..", "out");

if (!fs.existsSync(OUT_DIR)) {
  console.error("❌ Le dossier 'out/' n'existe pas. Lance 'npm run build' d'abord.");
  process.exit(1);
}

let htmlCount = 0;
let cssCount = 0;
let jsCount = 0;

/**
 * Calcule le préfixe relatif selon la profondeur du fichier dans out/
 * - out/index.html              -> "./"
 * - out/history/index.html      -> "../"
 * - out/sub/page/index.html     -> "../../"
 */
function getRelativePrefix(filePath) {
  const rel = path.relative(OUT_DIR, filePath);
  const parts = rel.split(path.sep);
  const depth = parts.length - 1; // -1 pour le nom du fichier lui-même
  return depth === 0 ? "./" : "../".repeat(depth);
}

/**
 * Réécrit les chemins absolus dans un fichier HTML
 */
function processHtml(filePath) {
  const prefix = getRelativePrefix(filePath);
  let content = fs.readFileSync(filePath, "utf8");
  const original = content;

  // src="/..." et href="/..." (mais pas href="//...")
  content = content.replace(/(src|href)="\/(?!\/)/g, `$1="${prefix}`);

  // url(/...) dans le CSS inline
  content = content.replace(/url\(\/(?!\/)/g, `url(${prefix}`);

  // Dans les scripts JSON-encoded (ex: __NEXT_DATA__) : "\/_next/..." ou "/_next/..."
  // On remplace les références absolues à _next, à la racine
  content = content.replace(/"\/_next\//g, `"${prefix}_next/`);

  // Ajoute "index.html" à la fin des liens vers des dossiers
  // pour que ça fonctionne en file:// (qui ne sert pas index.html par défaut)
  // Ex: href="./philosophy/" -> href="./philosophy/index.html"
  //     href="../" -> href="../index.html"
  // On ne touche pas aux URLs externes (http://, https://, mailto:, tel:, #ancre)
  content = content.replace(
    /href="((?:\.\.?\/)[^"#?]*\/)"/g,
    'href="$1index.html"'
  );
  // Cas spécial : href="./" (racine relative)
  content = content.replace(/href="\.\/"/g, 'href="./index.html"');

  // Liens internes vers d'autres pages : href="\/something\/" → href="./something/" depuis racine
  // (déjà couvert par la première règle)

  if (content !== original) {
    fs.writeFileSync(filePath, content, "utf8");
    htmlCount++;
  }
}

/**
 * Réécrit les chemins dans les fichiers CSS
 * (les chemins dans les CSS générés par Next.js sont déjà relatifs au plus souvent,
 * mais certains assets peuvent référencer la racine)
 */
function processCss(filePath) {
  let content = fs.readFileSync(filePath, "utf8");
  const original = content;

  // url(/_next/...) → url(../_next/...) depuis _next/static/css/
  // Pour les CSS dans out/_next/static/css/, le _next/ est à 2 niveaux au-dessus
  const rel = path.relative(OUT_DIR, filePath);
  const depth = rel.split(path.sep).length - 1;
  const prefix = "../".repeat(depth);

  content = content.replace(/url\(\/(?!\/)/g, `url(${prefix}`);
  content = content.replace(/url\("\/(?!\/)/g, `url("${prefix}`);
  content = content.replace(/url\('\/(?!\/)/g, `url('${prefix}`);

  if (content !== original) {
    fs.writeFileSync(filePath, content, "utf8");
    cssCount++;
  }
}

/**
 * Patch léger pour les fichiers JS de Next.js : convertit les références
 * absolues à _next/ en relatives (utile pour les chunks chargés dynamiquement)
 */
function processJs(filePath) {
  let content = fs.readFileSync(filePath, "utf8");
  const original = content;

  // Remplace les chaînes "/_next/..." par "./_next/..." (chemins relatifs)
  // Note : ceci est best-effort. Pour une fiabilité parfaite, utiliser un serveur HTTP.
  // On ne touche PAS aux chunks JS car ça casserait le runtime.
  // On laisse le JS tel quel — l'app fonctionnera côté serveur HTTP, et l'HTML statique
  // restera lisible en file:// même si le JS échoue à charger des chunks.

  if (content !== original) {
    fs.writeFileSync(filePath, content, "utf8");
    jsCount++;
  }
}

/**
 * Parcourt récursivement le dossier out/
 */
function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath);
    } else if (entry.name.endsWith(".html")) {
      processHtml(fullPath);
    } else if (entry.name.endsWith(".css")) {
      processCss(fullPath);
    } else if (entry.name.endsWith(".js")) {
      processJs(fullPath);
    }
  }
}

console.log("🔧 Conversion des chemins absolus en chemins relatifs...");
walk(OUT_DIR);
console.log(`✅ Terminé : ${htmlCount} fichiers HTML, ${cssCount} fichiers CSS modifiés.`);
console.log("");
console.log("👉 Tu peux maintenant ouvrir 'out/index.html' directement dans ton navigateur.");
console.log("👉 Pour OVH : uploader le contenu de 'out/' vers /www/");
