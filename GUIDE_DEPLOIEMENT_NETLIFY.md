# 🚀 Guide de déploiement sur Netlify

## PARTIE 1 : Créer un compte et déployer le site (5 minutes)

### Étape 1 : Créer un compte Netlify

1. **Allez sur** : https://www.netlify.com/
2. **Cliquez sur** : "Sign up" (Inscription) en haut à droite
3. **Choisissez** : "Sign up with email" (s'inscrire par email)
   - Ou utilisez votre compte GitHub/GitLab si vous en avez un
4. **Entrez** :
   - Votre email
   - Créez un mot de passe
5. **Validez** votre email (vérifiez votre boîte mail)

---

### Étape 2 : Déployer votre site

#### Option A : Déploiement par glisser-déposer (LA PLUS SIMPLE ✅)

1. **Sur votre ordinateur** :
   - Ouvrez le Terminal/Invite de commandes
   - Naviguez vers le dossier du projet :
     ```bash
     cd /Users/rusubogdan/Downloads/epilsoft
     ```
   - Exécutez :
     ```bash
     npm run build
     ```
   - Un dossier `/dist` va se créer avec votre site

2. **Sur Netlify** :
   - Une fois connecté, vous verrez "Want to deploy a new site?"
   - Cliquez sur la zone qui dit **"Deploy manually"** ou **"Drag and drop"**
   - **GLISSEZ tout le dossier `/dist`** dans la zone
   - Attendez 30 secondes... ✨ Votre site est en ligne !

3. **Votre site est maintenant accessible** :
   - Netlify vous donne une URL temporaire comme : `random-name-123456.netlify.app`
   - **Testez-le** : cliquez sur l'URL pour voir votre site en ligne !

---

#### Option B : Déploiement via GitHub (Plus automatique, recommandé pour le long terme)

Si vous utilisez Git/GitHub :

1. **Créez un dépôt GitHub** pour votre projet
2. **Poussez votre code** sur GitHub
3. **Sur Netlify** :
   - Cliquez sur "Add new site" → "Import an existing project"
   - Choisissez "GitHub"
   - Autorisez Netlify à accéder à GitHub
   - Sélectionnez votre dépôt `epilsoft`
   - Netlify détecte automatiquement Astro !
   - Build settings (déjà configurés grâce au fichier netlify.toml) :
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Cliquez sur "Deploy"

4. **Avantage** : À chaque modification du code sur GitHub, Netlify met à jour le site automatiquement !

---

## PARTIE 2 : Connecter votre domaine epilsoft.be (2 minutes)

### Étape 1 : Ajouter votre domaine sur Netlify

1. **Sur Netlify** :
   - Cliquez sur votre site
   - Allez dans **"Domain settings"** (Paramètres du domaine)
   - Cliquez sur **"Add custom domain"**
   - Entrez : `epilsoft.be`
   - Cliquez sur "Verify"
   - Netlify va vous dire : "This domain is registered on another service"
   - Cliquez sur **"Add domain"** quand même

2. **Netlify vous donne maintenant les DNS à configurer**
   - Notez ces informations (ou gardez la page ouverte)

---

### Étape 2 : Configurer les DNS chez Infomaniak

1. **Connectez-vous à Infomaniak** : https://manager.infomaniak.com/

2. **Allez dans** :
   - **Noms de domaine**
   - Cliquez sur **epilsoft.be**
   - Allez dans **"Zone DNS"** ou **"DNS"**

3. **Modifiez les enregistrements** :

   **OPTION A : Utiliser les Netlify DNS (Recommandé)**

   Netlify vous a donné 4 serveurs DNS, du type :
   ```
   dns1.p05.nsone.net
   dns2.p05.nsone.net
   dns3.p05.nsone.net
   dns4.p05.nsone.net
   ```

   - Dans Infomaniak, trouvez "Serveurs de noms" ou "Name servers"
   - Remplacez les serveurs actuels par ceux de Netlify
   - Sauvegardez

   **✅ AVANTAGE** : Tout est géré automatiquement par Netlify (HTTPS, etc.)

   ---

   **OPTION B : Pointer vers Netlify avec des enregistrements A**

   Si vous préférez garder les DNS Infomaniak :

   - **Supprimez** l'enregistrement A existant pour `@` ou `epilsoft.be`
   - **Ajoutez** un nouvel enregistrement A :
     - Type: `A`
     - Nom: `@` (ou laissez vide)
     - Valeur: `75.2.60.5` (IP de Netlify)
     - TTL: 300 ou automatique

   - **Modifiez** l'enregistrement CNAME pour `www` :
     - Type: `CNAME`
     - Nom: `www`
     - Valeur: `votre-site.netlify.app` (l'URL que Netlify vous a donnée)
     - TTL: 300 ou automatique

4. **Sauvegardez** les modifications

---

### Étape 3 : Attendre la propagation (15 minutes à 48h max)

1. **La propagation DNS** prend généralement 15-30 minutes
2. **Vérifiez** en allant sur https://epilsoft.be
3. **Netlify active automatiquement HTTPS** (certificat SSL gratuit) dès que le DNS est propagé

---

## ✅ VOTRE SITE EST EN LIGNE !

### Ce que vous avez maintenant :

- ✅ Site ultra-rapide hébergé gratuitement sur Netlify
- ✅ HTTPS automatique et gratuit
- ✅ CDN mondial (site rapide partout)
- ✅ Domaine epilsoft.be qui pointe vers le site
- ✅ Sauvegardes automatiques de toutes les versions

### Pour mettre à jour le site à l'avenir :

**Si vous avez utilisé l'Option A (glisser-déposer)** :
1. Modifiez le code localement
2. Exécutez `npm run build`
3. Glissez le nouveau dossier `/dist` sur Netlify (dans "Deploys")

**Si vous avez utilisé l'Option B (GitHub)** :
1. Modifiez le code localement
2. Poussez sur GitHub
3. Netlify met à jour automatiquement ! 🎉

---

## Résiliation de l'hébergement Infomaniak

**⚠️ ATTENTION : Faites ceci UNIQUEMENT quand epilsoft.be fonctionne 100% sur Netlify !**

1. Connectez-vous à Infomaniak
2. Allez dans "Hébergement Web"
3. Sélectionnez votre hébergement
4. Demandez la résiliation (gardez juste le domaine)
5. **Économie** : ~10-20 CHF/mois

---

## Besoin d'aide ?

- **Documentation Netlify** : https://docs.netlify.com/
- **Support Netlify** : support@netlify.com (répondent en quelques heures)
- **Vérifier le DNS** : https://dnschecker.org/

---

## Problèmes courants

**Le site ne s'affiche pas après avoir changé les DNS ?**
- Attendez 1-2 heures (propagation DNS)
- Videz le cache de votre navigateur (Ctrl+F5)
- Essayez en navigation privée

**Le certificat HTTPS ne fonctionne pas ?**
- Netlify l'active automatiquement après propagation DNS
- Peut prendre jusqu'à 24h

**J'ai fait une erreur dans les DNS ?**
- Pas de panique ! Remettez les DNS Infomaniak d'origine
- Votre site WordPress reviendra

---

🎉 **FÉLICITATIONS ! Votre site moderne est en ligne !**
