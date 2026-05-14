# Guide de Déploiement sur OVH (Hébergement Mutualisé)

Ce guide explique comment générer la version statique du site et la déployer sur un hébergement mutualisé OVH (Apache).

---

## 1. Configuration appliquée

Les modifications suivantes ont été faites pour rendre le site **100% statique** :

### `next.config.ts`
```ts
output: "export"          // Génère un site HTML/CSS/JS pur (pas de Node.js requis)
trailingSlash: true       // URLs avec slash final (mieux pour Apache)
images: { unoptimized: true }  // Désactive l'optimisation serveur des images
```

### `public/.htaccess`
Fichier Apache pour OVH :
- Réécriture d'URL pour les routes Next.js (`/history` → `/history/index.html`)
- Compression GZIP
- Cache navigateur
- Headers de sécurité
- Page 404 personnalisée

---

## 2. Générer la version statique

### Étape 1 — Installer les dépendances (si pas déjà fait)
```bash
npm install
```

### Étape 2 — Construire le site statique
```bash
npm run build
```

Cette commande va :
- Compiler tout le projet
- Générer un dossier `out/` à la racine du projet
- Le dossier `out/` contient TOUS les fichiers à uploader (HTML, CSS, JS, images, .htaccess)

### Étape 3 — Vérifier localement (optionnel mais recommandé)
```bash
npx serve out
```
Puis ouvrir `http://localhost:3000` pour tester avant déploiement.

---

## 3. Déployer sur OVH

### Méthode A — Via FTP (FileZilla, WinSCP)

1. **Récupérer les identifiants FTP** depuis l'espace client OVH :
   - Espace client OVH → Hébergements → votre hébergement → onglet **FTP-SSH**

2. **Se connecter avec FileZilla** :
   - Hôte : `ftp.cluster0XX.hosting.ovh.net` (fourni par OVH)
   - Identifiant : votre login FTP
   - Mot de passe : votre mot de passe FTP
   - Port : 21

3. **Uploader le contenu du dossier `out/`** :
   - **IMPORTANT** : Uploader le **CONTENU** de `out/` (pas le dossier lui-même)
   - Destination : `/www/` (ou le dossier racine de votre hébergement OVH)
   - **Inclure le fichier `.htaccess`** (souvent caché par défaut, activer "afficher les fichiers cachés")

### Méthode B — Via SSH (si activé sur votre offre OVH)

```bash
# Compresser le dossier out
cd out
tar -czf ../site.tar.gz .

# Transférer via SCP
scp ../site.tar.gz user@ssh.cluster0XX.hosting.ovh.net:~/

# Se connecter en SSH
ssh user@ssh.cluster0XX.hosting.ovh.net

# Décompresser dans /www
cd www
tar -xzf ~/site.tar.gz
rm ~/site.tar.gz
```

---

## 4. Structure attendue sur OVH

Après upload, votre dossier `/www/` sur OVH doit ressembler à :

```
/www/
├── .htaccess                  ← IMPORTANT (fichier caché)
├── index.html                 ← Page d'accueil
├── 404.html
├── _next/                     ← JS et CSS compilés
│   ├── static/
│   └── ...
├── history/
│   └── index.html
├── philosophy/
│   └── index.html
├── partners/
│   └── index.html
├── contact/
│   └── index.html
├── references/
│   └── index.html
├── hsse/
│   └── index.html
├── business/
│   └── index.html
├── logo1.png
├── hero3.png
├── ...                        ← toutes les autres images
└── favicon.ico
```

---

## 5. Tester le site déployé

1. Ouvrir votre nom de domaine : `https://votre-domaine.com`
2. Tester toutes les pages :
   - `/` (accueil)
   - `/history/`
   - `/philosophy/`
   - `/partners/`
   - `/contact/`
   - `/references/`
   - `/hsse/`
   - `/business/`
3. Tester la navigation, les images, le mode sombre

---

## 6. Problèmes fréquents et solutions

### ❌ Les pages internes affichent une 404
**Cause :** Le fichier `.htaccess` n'a pas été uploadé.
**Solution :** Vérifier dans FileZilla que les fichiers cachés sont visibles, puis uploader `.htaccess` manuellement.

### ❌ Les images ne s'affichent pas
**Cause :** Les images sont à la racine, mais référencées avec un chemin absolu.
**Solution :** Vérifier que toutes les images du dossier `public/` ont bien été uploadées à la racine de `/www/`.

### ❌ Le CSS ne se charge pas
**Cause :** Le dossier `_next/` n'a pas été uploadé entièrement.
**Solution :** Re-uploader le dossier `_next/` complet.

### ❌ Erreur 500 (Internal Server Error)
**Cause :** Problème dans le fichier `.htaccess` (module Apache non disponible sur OVH).
**Solution :** Renommer temporairement `.htaccess` en `.htaccess.bak` pour identifier le problème, puis ajuster.

### ❌ Les polices Google Fonts ne se chargent pas
**Cause :** Limitations CORS / réseau OVH.
**Solution :** Les polices sont auto-hébergées par Next.js dans `_next/static/`, donc ça devrait fonctionner. Si problème, vérifier que `_next/` est complet.

---

## 7. Mettre à jour le site

Pour publier une nouvelle version :

```bash
# 1. Modifier le code
# 2. Reconstruire
npm run build

# 3. Re-uploader le contenu de out/ vers /www/ sur OVH
#    (FileZilla : remplacer les fichiers existants)
```

---

## 8. Limitations à savoir

Avec un export statique, les fonctionnalités suivantes **ne fonctionnent pas** :
- ❌ API Routes Next.js (`/api/...`)
- ❌ `getServerSideProps` (rendu côté serveur)
- ❌ Middleware Next.js
- ❌ Réécritures et redirections dynamiques (utiliser `.htaccess`)
- ❌ Image Optimization (les images sont servies en taille originale)

✅ Le projet OMOS n'utilise aucune de ces fonctionnalités, donc tout est compatible.

---

## 9. Récapitulatif rapide

```bash
# Construire
npm run build

# Le dossier "out/" contient tout ce qu'il faut uploader

# Uploader le contenu de "out/" vers "/www/" sur OVH (via FTP)
# Inclure le fichier .htaccess !
```

**C'est tout !** Le site sera en ligne sur votre domaine OVH.
