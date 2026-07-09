# Site TPRacing — mode d'emploi

## 🌐 Le site est EN LIGNE : https://tpracing.github.io/

Hébergé gratuitement sur GitHub Pages (compte GitHub : **TPRacing**).
Dépôt : https://github.com/TPRacing/tpracing.github.io

## Structure
- `index.html` — accueil : **l'association TPRacing** (héritage, trajectoire, partenaires, galerie)
- `pilote.html` — **Thomas Papone, le pilote** (bio, réseaux, parcours)
- `assets/styles.css` — le design (charte marine/or, Korataki + Bebas Neue Pro embarquées)
- `assets/img/` — photos étalonnées pour le web · `assets/fonts/` — polices woff2
- `sitemap.xml` + `robots.txt` — pour Google

## Modifier le site
1. **Demander à Claude** (le plus simple) : il modifie les fichiers ET publie la mise à jour.
2. **Toi-même** : édite le fichier .html (zones marquées `✏️ MODIFIABLE`), puis demande à
   Claude de « publier la mise à jour du site » — ou dans le Terminal :
   `cd "$HOME/Desktop/TPRacing/Site TPRacing" && git add -A && git commit -m "maj" && git push`
   Le site en ligne se met à jour en 1 à 2 minutes.

## Référencement Google
- SEO technique : déjà en place (titres, descriptions, données structurées, sitemap, canonical).
- Search Console : à connecter avec un compte Google → vérification par balise HTML
  (Claude s'en occupe), puis soumission du sitemap et demande d'indexation.
- Booster : mettre https://tpracing.github.io/ en lien sur la page LinkedIn TPRacing,
  la bio Instagram @thomaspaponeracing et les autres réseaux.

## Nom de domaine (optionnel, ~10 €/an)
`tpracing.fr` chez OVH/Gandi, branchable sur GitHub Pages sans rien casser
(fichier CNAME + 4 enregistrements DNS — Claude peut guider).
