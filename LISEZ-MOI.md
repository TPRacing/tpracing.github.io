# Site TPRacing, mode d'emploi

## Le site est EN LIGNE : https://tpracing.github.io/

Hébergé gratuitement sur GitHub Pages (compte GitHub : **TPRacing**).
Dépôt : https://github.com/TPRacing/tpracing.github.io

## Structure
- `index.html` : accueil, **l'association TPRacing** (héritage, trajectoire, partenaires, presse, galerie)
- `pilote.html` : **Thomas Papone, le pilote** (bio, parcours, derniers posts, réseaux)
- `contact.html` : email, LinkedIn de l'association, réseaux
- `mentions-legales.html` : mentions légales et confidentialité
- `404.html` : page introuvable de marque, avec le test de réflexes
- `assets/styles.css` : le design (charte marine et or, Korataki + Bebas Neue Pro embarquées)
- `assets/img/` : photos étalonnées pour le web, `assets/fonts/` : polices woff2
- `sitemap.xml`, `robots.txt`, `llms.txt` : pour Google et les assistants

## Modifier le site
1. **Demander à Claude** (le plus simple) : il modifie les fichiers ET publie la mise à jour.
2. **Toi-même** : édite le fichier .html (zones marquées `MODIFIABLE`), puis demande à
   Claude de « publier la mise à jour du site », ou dans le Terminal :
   `cd "/Volumes/ TPT7/TPRacing/Site TPRacing" && git add -A && git commit -m "maj" && git push`
   Le site en ligne se met à jour en 1 à 2 minutes.

Une routine quotidienne améliore le site toute seule (design, audits, veille) et consigne
tout dans `AMELIORATIONS.md`. Le feed Instagram de la page pilote a sa propre routine.

## Référencement Google
- SEO technique en place : titres, descriptions, données structurées, sitemap, canonical, llms.txt.
- Search Console : propriété validée par les fichiers `google42175aef89d3ae74.html` (compte de
  l'association) et `googleac89672b6f8aaaf5.html` (compte perso). **Ne jamais les supprimer.**
- Booster : mettre https://tpracing.github.io/ en lien sur la page LinkedIn TPRacing,
  la bio Instagram @thomaspaponeracing et les autres réseaux.

## Nom de domaine (optionnel, environ 10 euros par an)
`tpracing.fr` chez OVH ou Gandi, branchable sur GitHub Pages sans rien casser
(fichier CNAME et 4 enregistrements DNS, Claude peut guider).
