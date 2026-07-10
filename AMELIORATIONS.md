# Site TPRacing — amélioration continue

Backlog priorisé pour la routine quotidienne. Une amélioration cohérente par jour,
charte stricte, jamais de tiret décoratif, site léger. Cocher + consigner au Journal.

## Backlog (par priorité)

- [x] Favicon propre multi-tailles depuis l'emblème (32px, 180px apple-touch) + meta theme-color marine
- [ ] Image Open Graph dédiée 1200×630 (logo + photo duotone) pour les partages LinkedIn/WhatsApp
- [ ] Micro-interaction nav : soulignement or animé qui glisse sous les liens
- [ ] Page pilote : renforcer la cohérence avec l'accueil (47 outline animé ou emblème 3D discret dans le hero)
- [ ] Section jalons/palmarès en badges chiffrés or sur marine (années de karting, sessions monoplace, licence…) à valider avec Thomas avant publication des chiffres
- [ ] Galerie : lightbox légère au clic (vanilla JS, fermeture Échap, flèches clavier)
- [ ] Photos en AVIF/WebP avec balise picture (poids −30 % environ)
- [ ] Footer : icônes réseaux SVG maison en carré biseauté (reprendre le style de la carte de visite)
- [ ] Page 404.html de marque (emblème contour géant + lien retour accueil)
- [ ] Accessibilité : focus visibles or, contrastes AA, lien d'évitement, alt complets
- [ ] Diagonales de sections : harmoniser les angles partout (même pente)
- [ ] Bande origines : parallax léger au scroll (transform, désactivé reduced-motion)
- [ ] Teaser pilote accueil : montage photo duotone dédié à la place du poster Insta
- [ ] Performances : preload du hero, lazy strict du reste, passage Lighthouse consigné
- [ ] Cartes disciplines : enrichir les survols (lieu, année en Bebas)
- [ ] Complétude : page mentions légales sobre (obligatoire en France) + lien footer
- [ ] Complétude : bloc contact clair sur l'accueil (LinkedIn asso mis en avant)
- [ ] Déclinaison du sting AE (logo animé, /Volumes/ TPT7/TPRacing/sting.jsx) en format carré 1080 pour Insta/Shorts
- [ ] Emblème 3D : version animée légère en hero (séquence AE ou sprite au scroll) si le poids reste raisonnable
- [ ] Section actus/prochaines échéances (structure seulement, contenus à valider avec Thomas)

## Règles (rappel pour la routine)

Charte : marine #1E2635, or #D49726, blanc #F6F7FC, rouge #C13221, vert #3E836E (micro-accent).
Typos : Korataki (titres) / Bebas Neue Pro (labels) / Inter (texte). Pas de tiret ni point médian décoratif.
Pas de crédit photo. Ne jamais supprimer google42175aef89d3ae74.html. Réseaux pilote seulement sur pilote.html.
Numéro pilote : 47 uniquement. Vérifier desktop 1280 + mobile 375 + console avant push.

## Journal

- 2026-07-09 : v1 → v3 : création du site, deux pages, publication GitHub Pages, Search Console.
- 2026-07-10 : v4 : DA charte (emblème 3D or, emblème contour en motif, bande origines, signature) ;
  vidéo SERA montée (fondus, étalonnage assorti, carton logo minimal) et intégrée à la galerie.
- 2026-07-10 : Favicon de marque. Silhouette plate du monogramme TP rendue depuis le path
  vectoriel de l'emblème (rasteriseur even-odd maison en PIL, contreformes correctes),
  dégradé or F0CE7A→C0861E sur tuile marine arrondie. Jeu complet : favicon.svg (crisp, 1,3 Ko),
  favicon.ico 16/32/48, favicon-32/16.png, apple-touch-icon 180 plein cadre (iOS remasque),
  icon-192. Ajout meta theme-color #1E2635 sur les 2 pages. Vérifié local (SVG rendu OK,
  5 fichiers en 200, pas d'overflow, console propre) puis prod. Poids total ~22 Ko.
- 2026-07-10 : Correction (retour Thomas « je préférais le logo principal en icône, trop doré »).
  Favicon régénéré depuis le LOGO PRINCIPAL (logo-couleur-degrade.png, marine dominant + accent or) :
  ico + 32/16 sur fond transparent (logo seul), apple-touch/icon-192 sur tuile blanc cassé #F6F7FC
  (le logo couleur est fait pour fond clair). Tuile or sur marine + favicon.svg supprimés.
  theme-color marine conservé. Règle retenue : icône du site = logo principal, jamais un monogramme
  or inventé (voir mémoire feedback).
- 2026-07-10 : Emblème 3D du hero repensé (retour Thomas « pas tout doré, le bleu brillant en 3D
  pour qu'il se démarque, dans la charte »). Re-render PIL depuis les masques séparés du logo
  (logo_navy_full + logo_gold_overlay du T7) : corps marine en BLEU MÉTALLISÉ brillant (dégradé
  acier 40639C→0B1220, sheen diagonale + streak spéculaire, biseau rim clair haut-gauche / sombre
  bas-droite), élan + damier en OR propre (remap luminance vers rampe métallique, fini le bout noir
  bavé de l'original), extrusion 3D bas-droite (flancs acier sombre). embleme-3d.webp 54 Ko
  (1511×1093), attrs width/height + alt MàJ, halo hero passé en bleu froid + fin rim or.
  Vérifié desktop + mobile 375 (pas d'overflow, console propre).
- 2026-07-10 : Emblème 3D, retouche (retour Thomas « gaffe au dégradé, ça fait une vaguelette »).
  La vaguelette venait du voile spéculaire DIAGONAL (bande de lumière -28° traversant le T et l'élan)
  + du remap de la texture or d'origine. Supprimés : dégradés désormais VERTICAUX propres (marine
  acier 4468A2→0B1220, or F0C963→B67C1E), relief conservé (extrusion bas-droite + biseau rim).
  Rendu brossé métal net, zéro ondulation. webp 50 Ko. Vérifié desktop + mobile 375.
