# WIS NETWORKS — Site vitrine

Site vitrine de WIS NETWORKS (infrastructure réseau, sécurité, infogérance), construit avec Next.js 16 et Tailwind CSS 4.

---

## 1. Prérequis

| Outil | Version | Vérifier avec |
|---|---|---|
| Node.js | **20.9 minimum** (testé en 25.x) | `node -v` |
| pnpm | 10 ou plus | `pnpm -v` |

Si pnpm n'est pas installé :

```bash
npm install -g pnpm
```

## 2. Installation

```bash
pnpm install
```

> Le projet contient un `pnpm-lock.yaml` **et** un `package-lock.json` (héritage). Utilisez **pnpm** : c'est le gestionnaire avec lequel le projet a été construit et testé.

## 3. Configuration — étape obligatoire

Le formulaire de contact envoie les messages par **EmailJS**. Ses identifiants ne sont **pas** versionnés (le fichier `.env.local` est exclu par `.gitignore`), il faut donc le recréer :

```bash
cp .env.example .env.local
```

Puis renseignez les 3 valeurs dans `.env.local`, récupérables sur [dashboard.emailjs.com](https://dashboard.emailjs.com) :

| Variable | Où la trouver dans EmailJS |
|---|---|
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | Email Services → votre service |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | Email Templates → votre template |
| `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | Account → General → Public Key |

**Sans ces variables, le site s'affiche normalement mais le formulaire de contact échoue à l'envoi.**

Deux points de vigilance :

- Ces variables sont lues **au moment du build**. Si vous les modifiez, relancez le build.
- Le template EmailJS doit utiliser exactement ces noms de variables : `{{company}}`, `{{name}}`, `{{email}}`, `{{phone}}`, `{{message}}`. Avec d'autres noms, l'email part mais arrive vide.

## 4. Lancer en développement

```bash
pnpm dev
```

Le site est accessible sur **http://localhost:3000**. Les modifications sont rechargées automatiquement.

## 5. Build de production

```bash
pnpm build   # génère la version optimisée
pnpm start   # sert cette version sur http://localhost:3000
```

Testez toujours avec `pnpm build` avant de mettre en ligne : certaines erreurs n'apparaissent pas en mode développement.

## 6. Mise en ligne

Le plus simple est **Vercel** (l'éditeur de Next.js), qui gère ce type de projet sans configuration :

1. Créez un compte sur [vercel.com](https://vercel.com) et importez le dépôt.
2. Vercel détecte Next.js automatiquement — ne modifiez pas les commandes proposées.
3. **Reportez les 3 variables d'environnement** de l'étape 3 dans *Settings → Environment Variables*.
4. Déployez.

> L'étape 4 est la plus souvent oubliée. Le fichier `.env.local` **n'est pas** envoyé lors du déploiement : si les variables ne sont pas saisies dans l'interface Vercel, le formulaire fonctionnera en local mais pas en ligne.

Tout hébergeur supportant Node.js 20.9+ convient également (`pnpm build` puis `pnpm start`).

## 7. Structure du projet

```
app/                    Les pages du site (une par dossier)
  layout.tsx            Gabarit commun : en-tête, pied de page, scripts
  page.tsx              Accueil
  services/             Nos services
  notre-approche/       Notre approche
  a-propos/             À propos
  contact/              Contact + formulaire
  globals.css           Couleurs et styles globaux
components/
  header.tsx            Barre de navigation
  footer.tsx            Pied de page (coordonnées, liens)
  animated-background.tsx  Fond animé
  ui/                   Composants d'interface réutilisables (shadcn/ui)
public/                 Images, logo, favicons
```

## 8. Modifier le contenu courant

| À changer | Fichier |
|---|---|
| Email et téléphone affichés | `components/footer.tsx` et `app/contact/page.tsx` |
| Menu de navigation | `components/header.tsx` |
| Textes des pages | le `page.tsx` du dossier concerné dans `app/` |
| Logo et favicon | `public/logo.svg`, `public/favicon.png` |
| Couleurs du site | `app/globals.css` (variables en haut du fichier) |

## 9. Mesure d'audience

Deux outils sont actifs :

- **Fairlytics** — sans cookie, sans bandeau de consentement. Le tag est dans `app/layout.tsx`. Le lien vers le tableau de bord est personnel et vous est transmis séparément : il constitue le seul moyen d'y accéder, ne le diffusez pas.
- **Vercel Analytics** — actif uniquement si le site est hébergé sur Vercel.

Les deux mesurent la même chose. Vous pouvez retirer l'un des deux depuis `app/layout.tsx`.

## 10. Points restant à traiter

- **Deux pages manquantes.** Le pied de page et le formulaire de contact renvoient vers `/mentions-legales` et `/politique-confidentialite`, qui n'existent pas encore (erreur 404). Ces pages sont obligatoires en France pour un site professionnel.
- **Les erreurs TypeScript ne bloquent pas le build** (`ignoreBuildErrors: true` dans `next.config.mjs`). Pratique pour livrer vite, mais des erreurs peuvent passer inaperçues. Vérifiez-les ponctuellement avec `npx tsc --noEmit`.
