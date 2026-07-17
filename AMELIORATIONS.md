# Site TPRacing — amélioration continue

Backlog priorisé pour la routine quotidienne. Une amélioration cohérente par jour,
charte stricte, jamais de tiret décoratif, site léger. Cocher + consigner au Journal.

## Backlog (par priorité)

- [x] Favicon propre multi-tailles depuis l'emblème (32px, 180px apple-touch) + meta theme-color marine
- [x] Image Open Graph dédiée 1200×630 (logo + photo duotone) pour les partages LinkedIn/WhatsApp
- [x] Micro-interaction nav : soulignement or animé qui glisse sous les liens
- [ ] Page pilote : renforcer la cohérence avec l'accueil (47 outline animé ou emblème 3D discret dans le hero)
- [ ] Section jalons/palmarès en badges chiffrés or sur marine (années de karting, sessions monoplace, licence…) à valider avec Thomas avant publication des chiffres
- [x] Galerie : lightbox légère au clic (vanilla JS, fermeture Échap, flèches clavier)
- [ ] Photos en AVIF/WebP avec balise picture (poids −30 % environ)
- [ ] Footer : icônes réseaux SVG maison en carré biseauté (reprendre le style de la carte de visite)
- [x] Page 404.html de marque (emblème contour géant + lien retour accueil)
- [x] Accessibilité : focus visibles or, contrastes AA, lien d'évitement, alt complets
      (contraste de l'or sur fond clair : question posée à Thomas au Journal du 15/07)
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
- [x] Accueil : mur de partenaires « Ils nous font confiance » (18 logos)
- [x] Partenaires : bande défilante automatique, actifs 2026 et plus gros soutiens en tête (demande Thomas 17/07)
- [x] Feed Insta : carrousels, les photos du post défilent au survol de la tuile (demande Thomas 17/07)
- [x] Pilote : section « Derniers posts » Instagram (feed maison, réels prêts à jouer au scroll)
- [x] Accueil : section « Ils parlent de nous » (2 articles Le Progrès + interview MyCitee en 2 parties)
- [x] Feed Insta : automatiser le rafraîchissement (tâche planifiée dédiée maj-feed-insta-site,
      quotidienne à 10 h, via le Chrome connecté ; validée par Thomas le 17/07)

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
- 2026-07-10 : Emblème 3D, version APLATS (retour Thomas « le bord jaune/bleu n'est pas droit, utilise
  l'emblème sans dégradé du logo principal »). La frontière ondulée venait des masques mous du T7 :
  re-source depuis `logo couleur.ai` rasterisé net en fitz (zoom 20), séparation or/bleu PAR COULEUR
  (bords vectoriels droits), RACING recadré par détection du gap. Faces en APLATS (marine 24314 9,
  or D49726, aucun dégradé de surface), relief par biseau de bord + extrusion 3D bas-droite. Bord
  or/bleu maintenant droit et franc. webp 37 Ko (1561×1106, attrs MàJ). Vérifié desktop + mobile 375.
- 2026-07-12 : Cartes Open Graph dédiées 1200×630 (une par page). Avant, le partage LinkedIn/WhatsApp/X
  affichait une photo brute (hero-2022.jpg / poster-pilote.jpg) mal recadrée et sans marque. Créé 2 cartes
  assorties en PIL (script scratchpad) : étalonnage split-tone marine dominant / or en accent comme les
  photos du site (colorize + voile marine + vignette), scrim bas marine profond, logo BLANC (règle charte
  fond sombre), kicker Bebas avec pastille damier or (pas de tiret), titre Korataki bold, filet or + url,
  rim or. Accueil = kart 324 + « Le volant se transmet » ; pilote = simu (visage de Thomas) + « Thomas
  Papone / Pilote / Karting / Simracing ». Supersampling ×2 pour la netteté du texte. Câblé og:image +
  og:image:width/height/alt/type + og:site_name + carte Twitter (summary_large_image) sur les 2 pages.
  Vérifié : pages + images en 200 (og-accueil 104 Ko, og-pilote 65 Ko), JPEG 1200×630 valides, HTML bien
  formé, fichier Google intouché. NB : launch.json « site-tpracing » repointé vers le dossier sur le T7
  (l'ancien chemin Desktop avait disparu après réorg du 11/07).
- 2026-07-13 : Page 404 de marque (complétude). Avant, une URL erronée sur tpracing.github.io tombait sur la
  404 générique GitHub. Créé `404.html` sur mesure, dans la DA du site : fond marine dégradé + trame, gros
  « 404 » en contour or (reprise des num-outline), emblème TP contour géant en filigrane derrière le chiffre,
  pastille damier « Erreur 404 », titre Korataki « Sortie de piste » (métaphore course, zéro tiret), lead, et
  deux boutons charte (Retour à l'accueil / Découvrir le pilote) + liseré damier bas. Réutilise styles.css, la
  nav et le footer. ⚠️ Chemins TOUS root-relatifs (/assets, /index.html…) car GitHub Pages sert la 404 depuis
  n'importe quel niveau de path ; page en noindex, hors sitemap. Vérifié local desktop 1280 + mobile 375 (aucun
  débordement, console propre), puis prod : /404.html en 200, et une URL inexistante renvoie bien la page
  « Sortie de piste » avec statut HTTP 404. Fichier Google intouché.
- 2026-07-13 : Galerie « En piste » — agrandissement au clic (lightbox). Avant, les 6 photos de course n'étaient
  cliquables nulle part ; on ne pouvait pas les voir en grand. Ajout d'une lightbox maison en vanilla JS (aucune
  dépendance, ~+80 lignes JS dans index.html + ~130 lignes CSS dans styles.css, poids négligeable, zéro image
  nouvelle). Récit design conforme à la charte : fond marine profond (#060916) + trame carbone + halo or, photo
  affichée en PLEIN CADRE (contain, jusqu'à 1120px / 74vh — révèle l'image entière alors que la grille la rogne en
  3/2), cadre à brackets or (réutilise .frame), légende Bebas avec pastille damier or (reprise du kicker, zéro
  tiret), compteur « 03 / 06 » en Korataki contour or, boutons carrés biseautés charte (fermer + flèches). Le fond
  or/marine du dégradé n'est pas séparé : réutilise les tokens de la charte. Accessibilité soignée : chaque photo
  devient role=button tabindex=0 avec aria-label « Agrandir : {légende} » + repère loupe ⤢ au survol/focus ;
  dialog aria-modal ; ouverture au clic/Entrée/Espace ; Échap ferme ; flèches ←/→ naviguent (bouclage) ; piège à
  focus (Tab reste dans la lightbox) ; focus mis sur « Fermer » à l'ouverture (via double rAF, sinon l'élément est
  encore visibility:hidden) et RENDU à la photo d'origine à la fermeture ; scroll de page verrouillé pendant
  l'ouverture ; préchargement des vignettes voisines pour une nav fluide ; transitions coupées en
  prefers-reduced-motion. Progressive enhancement : tout est injecté en JS, donc sans JS la galerie reste des
  images statiques (pas de repère trompeur). La vidéo SERA et la tuile Instagram @thomaspaponeracing sont exclues
  (non cliquables, intactes). Vérifié local desktop 1280 (ouverture, ←/→ + bouclage, Échap, clic-fond, focus rendu)
  ET mobile 375 (flèches repositionnées en bas, image dans le cadre, zéro débordement horizontal), console propre.
  Puis prod : accueil 200, .lightbox présent dans styles.css et lb-scene dans index.html. Fichier Google intouché,
  page pilote et sitemap non modifiés.
- 2026-07-15 : Accessibilité, parcours clavier (complétude + finition, les 3 pages). Avant, seule la
  lightbox d'hier avait un style de focus : en naviguant au clavier, les liens de nav, les boutons et le
  footer n'avaient aucun repère fiable, et aucune page n'avait de `<main>` ni de lien d'évitement.
  Ajouts : (1) lien d'évitement « Aller au contenu », premier arrêt de tabulation, en pastille or à
  coin biseauté qui glisse de DERRIÈRE la barre de nav (z-index inférieur) et se pose juste dessous
  (84 px desktop, 66 px mobile) sans jamais masquer les liens ; (2) anneau de focus deux tons qui
  reprend la règle charte du logo, marine sur fond clair / or sur fond sombre, avec le filet de la
  couleur opposée collé à l'élément (l'or seul ne se détache pas du blanc cassé) ; il bascule tout seul
  quand la nav passe en solide au scroll ; (3) les boutons sont détourés au `clip-path`, qui rogne
  outline ET ombre portée : anneau posé en `inset` à l'intérieur du bouton ; (4) `<main id="contenu">`
  sur les 3 pages + `aria-label` sur la nav. Bug corrigé au passage : le lien du logo perdait son nom
  accessible dès que la nav passait en solide (les 2 logos se relaient en `display:none`, et un `img`
  masqué sort de l'arbre d'accessibilité, donc plus aucun `alt` lisible) → `aria-label` porté par le
  lien, `alt=""` sur les deux images. Vérifié en local desktop 1280 + mobile 375 : 23 éléments
  focusables sur l'accueil, 17 sur pilote, 11 sur la 404, TOUS avec un repère visible (mesuré au
  navigateur, pas à l'œil) ; les deux états de nav testés ; lightbox d'hier intacte (ouverture,
  légende, compteur, Échap) ; zéro débordement horizontal, console propre. Prod OK : les 3 pages,
  styles.css, sitemap, robots et le fichier Google en 200, une URL inexistante rend toujours la 404
  de marque. Zéro image ajoutée (CSS + attributs seulement).
  ⚠️ NB technique : le T7 n'était pas branché, le dépôt (qui y vit depuis le 12/07) était donc
  introuvable → travail fait sur un clone frais depuis GitHub, poussé normalement. Sur le T7, faire
  un `git pull` avant toute nouvelle modif locale, sinon divergence.

  ❓ QUESTION POUR THOMAS (décision de DA, rien n'a été touché) : l'or de la charte #D49726 sur le
  fond blanc cassé ne donne que **2,38:1**, alors que le minimum légal/AA pour du petit texte est de
  4,5:1. Ça concerne les kickers (« ASSOCIATION DE SPORT AUTOMOBILE », « LE PILOTE »…) en Bebas ~18 px
  sur les sections claires : lisibles pour toi, pénibles en plein soleil ou pour une vue fatiguée.
  Trois options, je n'en applique aucune sans ton accord :
  1. Ne rien changer : fidélité totale à la charte, on assume le défaut de contraste.
  2. Un or foncé UNIQUEMENT pour ces petits textes sur fond clair (ex. #8F661A, même teinte, 4,81:1) ;
     l'or #D49726 reste partout ailleurs (aplats, filets, boutons, fonds sombres). C'est ma reco.
  3. Passer les kickers sur fond clair en marine, l'or ne servant plus que de pastille damier.
  À noter : sur fond sombre l'or est déjà bon (5,96:1), il n'y a donc rien à corriger là.
- 2026-07-16 : Accueil — mur de partenaires « Ils nous font confiance » (demande de Thomas). 18 logos
  fournis dans ~/Desktop/Logo Partenaires, optimisés en WebP (trim des marges + flatten sur blanc +
  resize 560px, total ~250 Ko) et posés sur des tuiles blanches à coin biseauté (grille 6/3/2 selon
  l'écran, survol = lift + liseré or). Section insérée dans #partenaires entre les cartes de valeur et
  le CTA, titre Korataki + kicker damier « Ils nous soutiennent » + « Et vous, pourquoi pas ? » qui
  amène au CTA. 13 logos cliquables vers le site du partenaire (URL vérifiées en 200 ; DMPI, AMS, GPI,
  Midas, Les Frang'Ain laissés non cliquables faute de site fiable). Note : tous les logos affichés
  (actifs comme anciens soutiens) car Thomas a fourni les 18 ; GPI = Grayel Protection Incendie, SMD =
  groupe Hexagone Motors. Vérifié desktop 1280 (6 col) + mobile 390 (2 col), zéro débordement, console
  propre. En ligne.
- 2026-07-16 : Pilote — section « Derniers posts » Instagram (demande de Thomas, « feed maison » choisi
  parmi 3 options). Récupéré ses 2 publications actuelles via le Chrome connecté (@thomaspaponeracing) ;
  vignettes téléchargées (endpoint /p/{code}/media/?size=l) et self-hébergées en WebP 4:5 (assets/insta/,
  ~110 Ko). Grille 3 tuiles (2 posts + tuile marine « Tout voir @thomaspaponeracing ↗ »), pastille
  Instagram maison en SVG, date en surimpression, survol = zoom + liseré or. Le JS rend n'importe quelle
  tuile marquée « réel » en VIDÉO qui joue en muet au défilement (même mécanisme que la vidéo SERA,
  coupé en prefers-reduced-motion) : prêt pour ses futurs réels, aucun aujourd'hui (il n'a que 2 posts
  photo). Placé UNIQUEMENT sur pilote.html (règle de séparation des entités). Vérifié desktop 1280 (3 col)
  + mobile 390 (2 col + bandeau pleine largeur), zéro débordement, console propre. En ligne.
  ❓ EN ATTENTE DE THOMAS : le feed Insta est une photo à l'instant T : pour qu'il se rafraîchisse seul
  il faut brancher la routine sur le Chrome connecté (noté au backlog).
- 2026-07-16 : Accueil — section « Ils parlent de nous » (suite de la demande de Thomas). Les articles du
  Progrès introuvables depuis mes recherches US ont été trouvés via une recherche Google DANS SON Chrome
  (résultats géolocalisés France) : « Thomas, jeune espoir du sport automobile » (23/04/2024, /societe/) et
  « Karting : un bel avenir se dessine pour le jeune Thomas Papone » (28/08/2024, /sport/), les 2 vérifiées
  en 200 avec og:title conforme. L'interview MyCitee (2 reels @myciteemedia, trouvés via son
  taplink.cc/thomaspaponeracing) : titres et liens vérifiés dans son Chrome connecté (caption « THOMAS
  PAPONE, PILOTE DE KARTING — Nouvelle interview - Partie 1/2 »). Section posée entre #partenaires et la
  galerie : mot géant « Presse » en fond, kicker damier « Dans les médias », 3 cartes blanches à liseré or
  haut (écho des cartes partenaires) : média en Bebas or + date après slash (pas de tiret), titre de
  l'article entre guillemets en Inter, « Lire l'article ↗ » ; la carte MyCitee porte 2 chips biseautées
  « Partie 1 / Partie 2 » (reprise des chips réseaux de la page pilote). Cartes cliquables entières pour
  Le Progrès. Pas de vignettes presse : les photos des articles sont © Le Progrès et les covers de reels
  exigent un login — texte seul, zéro risque de droits. Liens vers médias EXTERNES donc conformes à la
  séparation des entités (pas les réseaux du pilote). Vérifié desktop (3 cartes en ligne) + mobile 390
  (1 colonne), zéro débordement, console propre, ordre des sections OK (partenaires → presse → galerie).
  En ligne.
- 2026-07-16 : Micro-interaction de nav (finition design, les 3 pages via styles.css seul). Avant, les
  liens de nav n'avaient qu'un changement de couleur au survol et l'actif un simple `border-bottom`
  statique. Ajout d'un soulignement or de 2 px en `::after` qui GLISSE : `scaleX(0)` au repos, entre par
  la gauche au survol/focus (`transform-origin` gauche) et ressort par la droite (origin droite) quand on
  quitte ; il reste plein sur le lien actif (« Le pilote » sur pilote.html). Le bouton plein « Devenir
  partenaire » est exclu (`:not(.nav-cta)`), et la règle marche dans les deux états de nav (or sur le
  hero sombre, or sur la barre claire au scroll). `padding-bottom` de 5 px pour aérer le trait sous le
  texte ; transition coupée en `prefers-reduced-motion`. Vérifié en local desktop 1280 (repos = aucun
  trait, état survol forcé = trait exactement à la largeur de chaque libellé et absent sous le CTA, nav
  solide claire OK) ET mobile 375 (actif souligné, zéro débordement horizontal), console propre. Prod
  après ~25 s : CSS à jour, les 3 pages + sitemap + robots + fichier Google en 200. Zéro image ajoutée
  (CSS seul, poids négligeable).
- 2026-07-17 : Feed Insta automatisé (accord de Thomas). Nouvelle tâche planifiée dédiée
  « maj-feed-insta-site » (quotidienne, 10 h, tourne quand l'app Claude est ouverte) : lit la grille
  @thomaspaponeracing dans le Chrome connecté, compare les shortcodes à ceux de pilote.html, télécharge
  les vignettes des nouveaux posts (endpoint /media/ pour les photos, rognage de screenshot pour les
  réels), met à jour la grille (max 5 posts + « Tout voir »), vérifie en local, pousse, et ne journalise
  que s'il y a du changement. Les réels restent en vignette + pastille lecture tant que Thomas ne fournit
  pas le fichier vidéo source (autoplay possible ensuite via data-video). La routine design
  amelioration-site-tpracing a aussi été corrigée (chemin T7 au lieu du Desktop disparu) et ne touche
  plus à cette section. NB : premier « Run now » conseillé pour pré-approuver les outils (navigateur).
- 2026-07-17 : Deux évolutions demandées par Thomas. (1) PARTENAIRES : le mur statique devient une
  BANDE DÉFILANTE automatique (marquee CSS pur, boucle 58 s, fondu aux bords par mask-image, pause au
  survol ET au focus clavier, copie du lot en aria-hidden/tabindex -1 pour la boucle, reduced-motion =
  mur statique sans doublon). Ordre d'importance tiré du Suivi_Partenaires : actifs 2026 par soutien
  cumulé décroissant (Combe, Bobinage Duclos, MBE, Savoie Transmissions, Alpes IS, F3C, Banque Populaire)
  puis anciens soutiens décroissants (Grayel, Approtech, AMS, Hexagone/SMD, Frang'Ain, Lunatik, Pompes
  Services, DMPI, Midas, Serv'EAU). (2) INSTAGRAM : les 2 posts sont des CARROUSELS (7 et 11 photos) ;
  au survol d'une tuile les autres photos du post défilent en fondu (1,1 s par photo, retour couverture,
  reset à la sortie, désactivé en reduced-motion), pictogramme carrousel façon Instagram en haut à
  gauche, aria-label enrichi. Les 16 photos de slides ont été récupérées en pleine résolution via le
  Chrome connecté (canvas CORS + presse-papiers, recette en mémoire projet) et self-hébergées en WebP
  720 q76 (~1,1 Mo au total, chargées UNIQUEMENT au premier survol, rien au chargement de la page —
  au-delà des 500 Ko de la règle mais justifié : demande explicite + lazy réel). Vérifié desktop +
  mobile 390 (ordre de la bande conforme, pause OK, diaporama avance et se réinitialise, 0 débordement,
  console propre) puis prod (~30 s : trust-band + data-slides + slides en 200, fichier Google intouché).
- 2026-07-17 (soir) : Point SEO / Search Console (demande Thomas). Analyse du sitemap : le fichier est
  VALIDE (XML bien formé, 200, content-type application/xml, déclaré dans robots.txt) — le « Impossible
  de récupérer le sitemap » affiché depuis le 9 juil. est le statut GSC pas encore rafraîchi, pas un
  défaut du fichier. Fait : lastmod passés au 17/07 + resoumission du sitemap dans GSC (ligne datée du
  17 juil., relecture Google à venir). Constat clé : LES 2 PAGES SONT DÉJÀ INDEXÉES (« Cette URL est
  sur Google » pour l'accueil et pilote.html) et sortent dans les résultats (site:tpracing.github.io =
  2 résultats avec titres/descriptions propres) → le sitemap en erreur n'a rien bloqué. Réindexation
  demandée pour les 2 pages (file d'attente prioritaire) pour pousser les nouveautés (bande partenaires,
  presse, feed Insta). À revérifier dans quelques jours : statut sitemap « Réussite » + prise en compte
  des nouvelles sections dans le cache Google. Piège GSC récurrent : la barre d'inspection perd la
  saisie au clic/type → remplir l'input en JS (native setter + event input) puis Entrée.
