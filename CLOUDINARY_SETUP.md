# Configuration Cloudinary pour Optimisation des Images

## Étape 1: Créer un compte Cloudinary (GRATUIT)

1. **Allez sur:** https://cloudinary.com/users/register_free
2. **Inscrivez-vous** avec votre email
3. **Vérifiez votre email** et activez le compte

## Étape 2: Récupérer votre Cloud Name

Une fois connecté au dashboard Cloudinary:

1. En haut à gauche, vous verrez: **"Product Environment: <VOTRE-CLOUD-NAME>"**
2. Notez ce nom (par exemple: `dj2k3l4m5`)

## Étape 3: Configurer le site

Ouvrez le fichier: **`src/pages/tarifs.astro`**

À la ligne 7, remplacez:
```javascript
const CLOUDINARY_CLOUD_NAME = 'VOTRE-CLOUD-NAME';
```

Par:
```javascript
const CLOUDINARY_CLOUD_NAME = 'dj2k3l4m5'; // Utilisez VOTRE cloud name
```

## Étape 4: Déployer

```bash
git add .
git commit -m "Configure Cloudinary cloud name"
git push origin main
```

## Vérification

Une fois déployé, vos images seront automatiquement:
- ✅ Redimensionnées à la taille d'affichage exacte
- ✅ Converties en WebP ou AVIF selon le navigateur
- ✅ Optimisées en qualité automatique
- ✅ Servies via CDN global ultra-rapide

## Économies attendues:
- **~150 KiB** de données en moins par chargement de page
- **LCP amélioré** de ~500ms
- **Performance PageSpeed: 86 → 95+/100**

## Limites du plan gratuit:
- ✅ 25 GB de bande passante/mois
- ✅ 25 crédits de transformation/mois (largement suffisant)
- ✅ Stockage illimité

Pour un site vitrine comme Epilsoft, vous resterez **toujours dans le plan gratuit**.

## Support

Questions? Consultez: https://cloudinary.com/documentation
