# DA TPRacing / vocabulaire graphique maison

Document de travail de la routine d'amélioration continue. Créé le 08/08/2026 sur demande de
Thomas : la DA du site doit être PROPRE à TPRacing et se construire de façon cumulative,
jamais retomber dans un rendu générique « IA ». Ce fichier tient le vocabulaire validé, les
interdits et leur pourquoi. Il se LIT avant tout chantier de design ou de veille, et il
s'ENRICHIT à chaque journée qui touche au design (une entrée datée, sourcée, avec la capture
ou le retour de Thomas qui la justifie). Il n'est pas une deuxième charte : la charte PDF
(28 pages) reste la loi, ce fichier note comment elle se joue SUR LE WEB.

## 1. Fondations (charte, non négociable)

- Couleurs : marine #1E2635 DOMINANT, or #D49726 en ACCENT, blanc cassé #F6F7FC,
  rouge #C13221, vert #3E836E en micro-accent (seul endroit visible : la bande origines).
  Jamais de tout-doré (retour Thomas sur le favicon, mémoire du 17/07).
- Sens des couleurs (p. 25 de la charte, repris par la bande origines) : l'or de Senna,
  le marine de la rigueur, le rouge de la persévérance, le vert des racines Papone.
- Typos : Korataki 700 pour les titres (police TRÈS large : environ 1,21 em par capitale,
  une demi-colonne tient environ 13 caractères par ligne, tout titre vise 2 lignes maximum,
  sinon on REFORMULE, accord de principe de Thomas du 18/07) ; Bebas Neue Pro pour les
  labels et kickers, **en coupe BOLD et seulement elle** depuis le 09/08 (voir le journal de DA) ;
  Inter pour le texte courant.
- Logo : COULEUR sur fond clair, BLANC sur fond sombre, jamais l'inverse. Le logo couleur
  dégradé est la version préférée de Thomas pour le numérique.
- Nom officiel au tiret court : « TPRacing - Thomas Papone Racing ». Aucun cadratin,
  aucun point médian décoratif : la ponctuation graphique maison = pastille damier + slashes.
- Numéro : le 47, seul numéro mis en avant. Les numéros des photos d'archives (324, 19, 20)
  sont des dossards de course, jamais des éléments de marque.

## 2. Vocabulaire maison (validé, en production sur le site)

Chaque élément nouveau doit pouvoir se DIRE avec ces mots-là. Si l'idée a besoin d'un
langage étranger, elle ne passe pas.

- Damier : pastille damier des kickers, marquee incliné, collage damier duotone de la
  bande origines (grille cisaillée k=-0.32), liseré damier. **Deux recettes, et c'est le
  FOND qui décide laquelle** (mesuré le 18/08) : `or sur transparent` pour tout ce qui se
  pose sur du sombre ou sur une photo (pastilles, marquee, liseré du hero) ; `marine + or
  opaque` pour ce qui se pose sur du clair (tête de la ligne de course, liseré des cartes
  blanches). Transposer la première sur du blanc donne un ruban jaune pâle qui lit « taxi ».
  **Géométrie invariable** : la tuile du `repeating-conic-gradient` vaut le DOUBLE de la
  cellule, donc un liseré de 6 px = `background-size: 6px 6px` = deux rangées de 3 px. Et
  sous 4 px de haut le damier cesse d'être un damier : il ne reste qu'une rangée, qui lit
  comme une bordure `dashed`, soit un gabarit échangé contre un autre.
- Carrés biseautés : boutons et tuiles à coin coupé (clip-path ; attention, le clip rogne
  outline et ombres, anneaux de focus en inset).
- Brackets d'angle or : les coins de cadres photo de la galerie. **Une case de grille qui
  n'est pas une photo prend les MÊMES brackets** (12/08 : la tuile « Plus d'images » de la
  galerie était la seule case sans, elle lisait comme une plaque rapportée au milieu de
  huit photos cadrées). Reprendre le vocabulaire, c'est reprendre la règle CSS existante
  (`class="frame"`), pas en redessiner une variante.
- Coupes diagonales : pente UNIFIÉE 2.3vw (le 1,3 degré du marquee) pour toutes les
  bascules de section.
- Mots géants Korataki en outline derrière les sections (Héritage, En piste, 47, Presse),
  et UN SEUL mot rempli d'or au scroll par page (règle du 03/08 : le principe charte
  « plein contre contour » animé, avec parcimonie).
- Chiffres outline or (bande de chiffres, 404 géant).
- Grain argentique global (SVG feTurbulence) + pointillés carbone sur les sections marine.
- Photos : VRAIES photos de Thomas et de la famille, en NOUVEAUX fichiers, originaux jamais
  modifiés. **Deux régimes, à ne pas confondre** (précisé le 10/08 après mesure) : les photos
  de REPORTAGE publiées dans les grilles de contenu (galerie, cartes disciplines, partenaires
  en piste) restent quasi naturelles, la couleur du kart et de la piste est de la matière ;
  le duotone split-tone marine/or (+ grain + vignette) est réservé aux MONTAGES DE MARQUE
  (teaser pilote, cartes Open Graph, collage de la bande origines). Les photos héritage
  (Le Mans 1980, Patrice 1987/1988) sont publiées BRUTES : la matière d'époque est la matière.
- Signe de liste = **carré biseauté or de 9 px**, jamais la puce ronde du navigateur
  (posé le 11/08 ; l'entrée précédente annonçait ici des « chevrons de vitesse » qui
  n'ont jamais existé sur le site, voir le journal du 11/08). La géométrie est celle de
  TOUS les biseaux maison : les DEUX coins coupés, haut-droit et bas-gauche.
- Ponctuation graphique : pastille damier et slash. Jamais de tiret décoratif, jamais de
  point médian.
- Label TPRacing = **Bebas BOLD + interlettrage large**, jamais l'inverse. Les deux vont
  ensemble : le tracing large seul donne le label fin et distingué des présentations
  génériques, la graisse seule perd la respiration de la charte. Ratio de référence,
  repris du dossier sponsoring : quand on passe en Bold, on resserre l'interlettrage
  d'environ 12 % (2,8 au lieu de 3,2) pour que la ligne reste tenue.
- Un élément volontairement TROP GRAND par écran : c'est ce qui fait poster plutôt que
  template (consigne du 10/07).
- **Le vide est de la matière, et il se mesure.** Deux blocs de nature différente ne se
  touchent jamais : entre eux, le pas vertical de la section qui les porte (66 px sur
  l'accueil, le même que la marge d'ouverture de `.trust`). Un intervalle inventé au jugé
  se voit autant qu'un intervalle nul (entrée du 10/08).
- Emblème TP : en 3D or au hero, en contour géant filigrane dans les fonds de section, en petit
  format or au bout du filet de la signature de bas de page. **Une seule occurrence du monogramme
  par coup d'œil** (règle du 04/09) : quand la marque se répète dans le même écran, elle ne signe
  plus, elle se redouble. La signature de charte se pose donc là où le logo n'est pas, et
  l'intervalle qui les sépare est le pas vertical du bloc, jamais un reste de mise en page.
- Mouvement : sobre et lié à la course (intro tracé de circuit, ligne de course de
  progression, marquee asservi au scroll, reveals) ; tout est coupé en
  prefers-reduced-motion ; jamais d'effet « waouh » sans rapport avec la piste.
  **Le survol RÉCOMPENSE, il n'INFORME pas** (règle du 16/08) : il peut agrandir une
  photo ou filer un liseré, jamais porter seul un fait. Une donnée factuelle est
  écrite en permanence, sur toutes les largeurs — et si un état transitoire devient
  permanent, son contraste se REMESURE, il n'a pas été calibré pour être lu.

## 3. Interdits (chaque ligne vient d'un rejet réel de Thomas)

- Plaques rectangulaires plates sur fond vide, layout symétrique sage, zéro texture :
  « trop fade, ça fait Claude » (10/07, v1 des overlays ; v1 et v2 du site rejetées pour
  la même raison). Remède : matière (grain, duotone, photo), asymétrie, oversize.
- Rendu « template IA » : dégradés violet/bleu génériques, glassmorphism, cartes toutes
  identiques, rangées d'icônes rondes, tout à la même échelle. Hors charte et hors sujet
  (reality-check StudioMeyer consigné le 03/08). **La barre d'accent pleine en tête d'une
  carte blanche en fait partie** (18/08) : c'est la carte par défaut de toutes les
  bibliothèques de composants, et sur ce site c'était le seul endroit où l'or servait
  d'APLAT sur du clair. L'or est un trait, un contour, un texte ou un damier ; quand il
  devient une surface, il n'accentue plus, il remplit.

- Un signe de DA que Safari et iOS ne rendent pas n'est PAS un signe de DA (18/08, à propos
  de `corner-shape: bevel` : Chrome et Edge seuls, Firefox et Safari à zéro). Un enrichissement
  peut être réservé à un moteur ; une pièce de vocabulaire, non, sinon la marque a deux
  visages selon le téléphone. Se tranche sur les données de compatibilité, jamais sur un billet
  de blog.
- Le tout-doré (rejet du favicon doré, 17/07) : l'or est un accent, le marine domine.
- **Le surtitre qui redit le titre** : rejeté par Thomas le 09/08, « la plupart des surtitres font
  trop robotiques car pas très utiles », exemple donné « Ils nous soutiennent » au-dessus de
  « Ils nous font confiance ». Une étiquette de rubrique (« Qui sommes nous », « Contact »,
  « Dans les médias », « Informations légales ») est collable sur n'importe quel site : c'est la
  signature du gabarit. **Règle : un surtitre ne se pose que s'il porte une information que le
  titre ne PEUT pas porter, s'il est le seul mot d'arrivée d'une ancre réellement cliquée dans le
  site, ou s'il est le seul en-tête d'un bloc sans titre.** Dans tous les autres cas la section
  s'ouvre sur son titre, et c'est la matière graphique qui l'installe (mot géant, logo, emblème
  filigrane, cadres à brackets), pas un label.
- **La typo trop FINE** : les labels en Bebas Middle ont été rejetés par Thomas le 08/08,
  « ça fait présentation Claude IA ». Un trait maigre en capitales espacées, c'est le
  registre du slide d'entreprise, pas celui de la course. Le sport auto écrit épais.
  Remède appliqué le 09/08 : coupe Bold seule (aucune Middle chargée, donc aucun recoin
  du site ne peut retomber dans le fin), interlettrage large conservé.
- Le trop-plein : la page jeu.html a été RETIRÉE le 25/07 (« ça en fait trop, laisse
  juste sur la page 404 »). Pas de nouvelle page ni rubrique sans accord, enrichir
  l'existant, sobriété d'abord.
- Carton de fin chargé (emblème + texte + damier) rejeté le 10/07 : pour les éléments de
  marque, viser le logo sting studio (logo seul, résolution rapide, zéro texte superflu).
- Compteurs ou blocs VIDES en attendant du contenu : contre-exemple hrtdriver.com
  (« Results » à 0 partout), consigné le 03/08. On ne crée rien de creux.
- Amplitudes excessives : la dérive de bandes photos à plus ou moins 130 px jugée « trop »
  (plus ou moins 45 px validé). Le mouvement TPRacing est tendu, pas flottant.
- Pas de crédit photo, sauf la mention « © Thierry Chomel et photographes officiels de
  ligue » déjà en place.

## 4. Le test des 4 questions (avant d'accepter une idée de design ou de veille)

1. Est-ce que ça parle du sport auto ET de TPRacing en particulier, ou est-ce que ça
   pourrait être collé sur n'importe quel site ?
2. Est-ce que ça se dit avec le vocabulaire du chapitre 2 ?
3. Est-ce que le ratio marine dominant / or accent est respecté ?
4. Est-ce que ça ajoute de la MATIÈRE, ou seulement un effet ?

Les quatre doivent passer. Sinon : écarté, et on note pourquoi au backlog (les refus
motivés valent autant que les idées retenues, ils empêchent de re-proposer).

## 5. Journal de DA (une entrée par jour qui touche au design, avec sources)

- 2026-09-04 : **la règle du vide vaut aussi dans le pied de page, et un monogramme ne signe que s'il est
  seul.** Veille par captures sur la CLÔTURE des pages (prodrive.com, tonykart.com, kartrepublic.com,
  ming.watch, wrc.com, desktop 1280 et mobile 390).
  **(a) Ce qui a été VU.** Chez Prodrive, la page ne se termine pas sur la grille de liens : après elle
  vient une **bande de signature** sur son propre fond (presque noir contre le blanc de la grille), qui
  ne porte que la ligne de marque en capitales et un tracé technique géant en contour débordant par la
  gauche. Le mécanisme n'est pas une marge, c'est un **changement de sol** : les deux blocs ne peuvent
  pas se toucher, y compris en mobile où la bande survit entière. Chez Tony Kart et MING, à l'inverse,
  la page s'arrête sur une grille de liens plate posée sur un aplat, et rien ne distingue la fin de ces
  deux sites de n'importe quel autre.
  **(b) Le défaut que ça a révélé chez nous.** Notre `.signature-charte` (filet + emblème or, reprise des
  bas de page de la charte) et la rangée logo / réseaux / liens du pied étaient à **0 px d'encre**, sur
  les 5 pages et à toutes les largeurs, alors que le pied laisse déjà 26 px entre cette rangée et la
  ligne légale. En mobile 390 la conséquence était visible : le TP or de la signature tombait
  immédiatement au-dessus du TP RACING blanc du pied, soit **le même monogramme deux fois dans 80 px**.
  C'est mot pour mot la règle du 10/08 (« deux blocs de nature différente ne se touchent jamais,
  l'intervalle est le pas vertical de la section ») restée non appliquée à l'intérieur du pied. Corrigé
  le jour même avec le pas déjà en place dans ce bloc, 26 px, pas une valeur choisie à l'œil.
  **(c) La règle qui en sort, et qui est neuve.** Un élément de vocabulaire n'a pas seulement besoin
  d'être RARE (règle de la pastille, 09/08) : quand c'est la **marque elle-même**, il a besoin d'être
  SEUL DANS SON ÉCRAN. Deux occurrences du monogramme dans le même coup d'œil ne font pas une signature
  deux fois plus forte, elles font une répétition de logo. Corollaire de placement : la signature de
  charte se pose là où le logo du pied n'est pas, et l'écart qui les sépare est un intervalle mesuré,
  jamais un reste de mise en page.
  **(d) Fausse piste écartée, avec sa mesure.** Le premier réflexe était de masquer l'emblème de
  signature sous un point de rupture mobile. La mesure l'interdit : l'écart entre les deux marques vaut
  0,77 à 0,83 fois la largeur de l'écran de 390 à 900 px, donc **il est constant en proportion** et il
  n'existe aucune largeur à partir de laquelle le défaut apparaîtrait. Ce n'était pas la largeur, c'était
  le contact. Un point de rupture aurait été une valeur inventée pour un problème mal nommé.
  **(e) Interdit confirmé par un contre-exemple.** Kart Republic termine sur « Seguici sui social! » et
  six icônes rondes AUX COULEURS DES PLATEFORMES (Facebook bleu, Instagram dégradé, YouTube rouge) posées
  au centre d'un fond noir : cinq palettes étrangères importées d'un coup dans le dernier écran de la
  marque. L'interdit « rangée d'icônes rondes bien alignées » du chapitre 3 tient, et nos six carrés
  biseautés monochromes sont la réponse, et on ne les colorise jamais.
  **(f) Leçon de MÉTHODE, coûteuse et à retenir pour tous les harnais de capture.** Le neutraliseur de
  reveals `*{opacity:1;visibility:visible;transform:none}` qu'on injecte avant chaque capture **détruit
  la géométrie des SVG** : le path de l'emblème TP porte un `transform="matrix(1,0,0,-1,105,39.9)"` en
  attribut de présentation, qu'un `transform:none` en CSS écrase. Résultat, l'emblème du pied sortait
  ABSENT des captures (zéro pixel or mesuré dans la zone) alors que le DOM le donnait bien à 34x24 px en
  #D49726 : un faux défaut « emblème invisible depuis toujours » qu'on a failli aller corriger, comme
  celui du 09/08 qui, lui, était réel. Neutraliseur corrigé en `:not(svg):not(svg *){...}`, et l'emblème
  a été confirmé au pixel (332 pixels or à l'emplacement mesuré). Règle : **un neutraliseur de capture
  ne touche jamais aux SVG**, et un élément « invisible » se prouve au pixel après avoir vérifié que
  l'outil de capture ne l'a pas effacé lui-même.

- 2026-08-19 : **l'or ne tient pas comme ENCRE sur le blanc cassé, et c'est le fond qui décide.**
  Veille par captures (Spa-Francorchamps, Circuit Dijon-Prenois, Darren Heath, desktop 1280 et
  mobile 390) puis mesure sur le site. Trois sites, une même leçon, et un défaut mesuré chez nous.
  **(a) Ce qui a été VU.** Spa sert le MÊME slogan de deux façons selon l'écran : sur le desktop,
  « LE TRACÉ DE VOS ENVIES » est en **contour blanc** sur une vidéo de light-painting nocturne ;
  sur mobile, le même titre est **plein blanc** sur une photo du Raidillon en plein jour. Le
  contour n'est donc pas leur style, c'est leur réglage : sur un fond pâle, ils remplissent.
  Chez Darren Heath, la démonstration par l'échec : la première ligne du titre, en graisse fine
  blanche, **disparaît** là où la photo devient claire, alors que la seconde ligne, en gras, tient.
  À Dijon, « **50 ANS** » est plein et « *DE PASSION* » est en contour — dans le même titre, mais
  sur du NOIR, où le contour a de quoi mordre.
  **(b) Ce que ça donne comme règle maison.** Plein ou contour n'est pas un choix d'esthétique,
  c'est un réglage de CONTRASTE dicté par le fond. Et son corollaire, mesuré sur nos pages :
  **l'or #D49726 sur le blanc cassé #F6F7FC vaut 2,38:1** (2,50:1 sur le blanc pur des cartes),
  sous les deux seuils utiles (3:1 pour les grands textes, 4,5:1 pour les petits). Donc :
  **sur fond clair, l'encre est MARINE ; l'or y reste un SIGNE** — pastille damier, liseré damier,
  filet, anneau de survol, arête. Sur fond sombre l'or redevient l'encre (5,7 à 7,4:1 mesurés).
  C'est exactement la doctrine du damier du 18/08 (« c'est le FOND qui décide la recette »),
  étendue de la seule trame à TOUT l'or. Appliqué le jour même aux surtitres des sections claires,
  aux libellés de presse, aux flèches de lien externe, aux survols des cartes de presse et à l'état
  actif de la nav sur fond clair (où le filet or qui glisse portait déjà le signal : la couleur du
  mot était redondante, elle est rendue au marine).
  **(c) Le chiffre géant reçoit sa recette de fond clair.** Les trois chiffres de la bande
  (2021 / 3 / 1) étaient en contour or creux sur le blanc cassé : l'élément censé être le plus fort
  de la bande en était le plus pâle. Quatre variantes construites et REGARDÉES avant de trancher
  (contour or actuel, contour marine seul, plein marine + liseré or, plein marine nu) : le contour
  marine seul lit comme un dessin technique et efface l'accent, le plein nu est banal. Retenu :
  **plein marine + liseré or de 2 px sur l'arête**, qui rend le chiffre lisible par sa masse
  (14,18:1) tout en gardant l'or dans son rôle de trait. Le vocabulaire « chiffres outline or »
  n'est pas abandonné : il garde sa forme creuse là où elle marche, c'est-à-dire sur du sombre
  (le 47 géant du hero pilote à 7,37:1, le 404 à 6,52:1, tous deux mesurés et laissés intacts).
  **(d) Interdit qui en découle, à ne plus tester** : l'or ne devient PAS un texte foncé pour
  passer le seuil. Un or assombri jusqu'à 4,5:1 tombe à #93691A, un bronze olive qui n'est plus la
  couleur de la charte. On ne corrige pas un contraste en déplaçant une couleur de marque : on
  change l'encre et on laisse la couleur de marque au signe.
  **(e) Leçon de MÉTHODE, la plus coûteuse de la journée** : le fond réel d'un élément se mesure
  **au PIXEL sur la capture**, jamais en remontant le DOM à la recherche d'un `background-color`
  opaque. Sur ce site presque tous les fonds sont des photos, des dégradés ou des voiles, donc
  `backgroundColor` vaut `rgba(0,0,0,0)` partout et la remontée finit sur le blanc du `body`.
  Le premier audit, fait ainsi, a produit **six faux positifs** — le 47 géant, la tuile
  « Plus d'images », les libellés Instagram, les deux mots or des hero — tous en réalité posés sur
  du sombre et parfaitement contrastés. Deux d'entre eux avaient déjà été « corrigés » avant que
  la mesure au pixel ne le démente, et il a fallu les remettre. Règle : pour juger une couleur,
  échantillonner la couleur dominante de la zone rendue, en excluant les pixels proches de l'encre.

- 2026-08-08 : création du document. Contenu fondé sur la charte PDF, les retours de
  Thomas consignés du 09/07 au 25/07 (rejets v1/v2 du site, favicon, carton de fin,
  jeu.html, amplitudes) et le vocabulaire déjà en production sur les 5 pages. Prochaine
  étape de veille : passer les captures des sites de référence à la grille d'observation
  de la routine et sourcer ici, capture à l'appui, ce qu'on garde et ce qu'on refuse.

- 2026-08-09 : **la graisse des labels devient une règle de DA, pas un réglage.** Source : retour
  direct de Thomas du 08/08 sur les kickers en Bebas Middle, « trop fins, ça fait présentation
  Claude IA », et bascule déjà opérée sur le dossier sponsoring (Bold 9 pt / espacement 2,8 au lieu
  de Middle 8,5 / 3,2), qui sert de référence visuelle inter-supports. Vérifié par comparaison
  rendue avant/après sur « ASSOCIATION DE SPORT AUTOMOBILE » et « LE PILOTE / N.47 » : à
  interlettrage égal la Middle se dilue sur le marine alors que la Bold tient la ligne, et le
  contraste avec le Korataki des titres redevient une hiérarchie (deux niveaux lisibles) au lieu
  d'un écart de finesse. Ce qui est entériné : **une seule graisse de Bebas est déclarée sur le
  site**, la Bold. C'est volontairement plus rigide qu'un réglage par règle : tant qu'aucune Middle
  n'est chargée, aucun label futur, aucune section reprise d'un ancien gabarit ne peut redevenir
  fine par oubli. La contrainte porte la DA à la place de la vigilance.
  Corollaire mesuré, à retenir pour les prochains chantiers typographiques : **changer de graisse
  change la largeur du texte**, donc les lignes courtes se vérifient à 320 px (ici le plus long
  kicker débordait de 5 px et repassait sur 2 lignes) ; la réponse est un palier d'interlettrage
  sur les très petits écrans, jamais un rétrécissement du corps qui casserait l'échelle des labels.
  Dernier endroit du site encore en Middle, assumé et consigné au backlog : les 3 cartes Open Graph,
  où la police est cuite dans le pixel.

- 2026-08-09 bis : **la pastille damier devient rare, donc elle redevient un signe.** Source : retour
  de Thomas le jour même sur les surtitres « robotiques ». 11 des 17 surtitres du site ont sauté, et
  avec eux leur pastille. Ce qui s'apprend ici dépasse le texte : la pastille damier ne vaut que si
  elle marque quelque chose. Posée en tête de chaque section, elle devenait un ornement de gabarit,
  exactement l'effet que la DA cherche à fuir. Il en reste 6 sur les 5 pages, chacune sur un bloc qui
  la mérite. Contrepartie vérifiée avant d'agir : une section qui perd sa pastille doit avoir une
  autre matière pour s'ouvrir. C'est le cas partout (logo couleur dégradé pour l'association, mot
  géant « Presse », 47 géant et cadres à brackets pour la galerie, emblème filigrane pour
  partenaires et contact), SAUF sur contact.html et mentions-legales.html : leurs en-têtes portaient
  un emblème filigrane resté invisible depuis toujours, en marine à 8 % sur un fond marine, faute
  d'être des `.section-marine`. Corrigé en même temps. **Règle qui en découle : avant de retirer un
  élément de vocabulaire d'un bloc, vérifier CE QUI RESTE pour le tenir, et le vérifier en capture,
  pas dans le code** ; un décor déclaré n'est pas un décor visible.

- 2026-08-10 : **le vide se mesure, et un intervalle nul est un défaut de fabrication.** Source :
  captures de goodwood.com/motorsport et de baltic-watches.com. Goodwood laisse une bande vide
  d'environ 150 px avant chaque titre de section et ne remplit jamais toute la largeur ; Baltic
  ouvre un vide franc entre son carrousel de collections et la photo d'ambiance suivante. Ce ne
  sont pas des sites « aérés » par paresse : le vide y sert à séparer deux natures de contenu, et
  il est toujours de la même taille. En rentrant sur l'accueil TPRacing avec cet œil, la jonction
  bande de logos partenaires → bandeau CTA se lisait mal ; mesure faite : **0 px**, alors que la
  section elle-même s'ouvre sur 66 px. Effet visible en capture : les tuiles blanches paraissent
  coupées par l'aplat marine, leur bord bas n'existe jamais. Corrigé à 66 px, c'est-à-dire au pas
  DÉJÀ EN VIGUEUR dans la section, pas à une valeur choisie à l'œil. **Règle : quand deux blocs de
  nature différente se suivent, l'intervalle est le pas vertical de la section, et on le vérifie
  par une mesure, pas par une impression.** Corollaire d'outillage : un harnais qui liste tous les
  écarts inférieurs à 12 px entre blocs frères trouve ces défauts en quelques secondes sur les
  5 pages, là où l'œil ne les voit que par comparaison avec un autre site.

- 2026-08-10 bis : **deux régimes photo, et la fiche « Photos » du chapitre 2 est corrigée en
  conséquence.** Elle disait que les photos du site sont étalonnées split-tone. Mesure faite sur
  les 12 photos publiées (saturation moyenne et histogramme de teinte) : les photos de galerie
  vont de 0,07 à 0,23 de saturation et sortent leurs jaunes, leurs oranges et leurs verts naturels ;
  seuls le teaser pilote, les cartes Open Graph et le collage des origines sont réellement duotone.
  Le reportage est donc publié quasi naturel, et c'est cohérent : la couleur d'un kart et d'une
  piste EST de la matière, la retirer ferait exactement le rendu lisse que la DA combat. Ce qui a
  déclenché la vérification : `feed-racing.webp` (carte « Automobile ») est la photo la plus
  saturée du site, 65 % de ses pixels dans le vert de l'herbe, et la règle mal écrite invitait à
  l'étalonner. **Leçon de méthode, plus importante que le cas : avant de « rattraper » un élément
  au nom d'une règle de ce document, vérifier que la règle décrit bien ce que le site fait
  réellement.** Une règle fausse fabrique des corrections qui abîment.

- 2026-08-11 : **le seul endroit du site que le NAVIGATEUR dessinait encore.** Audit de cohérence
  de la DA page par page (5 pages regardées en captures desktop 1280 et mobile 390, puis inventaire
  mesuré du vocabulaire par page). Résultat : une seule liste de contenu existe sur tout le site,
  les trois lignes de l'éditeur dans les mentions légales, et elle sortait en **puce ronde grise du
  user-agent**. C'est le contraire exact du vocabulaire maison, et c'est le genre de détail qui ne
  se voit qu'en regardant : dans une page dont les titres sont en Korataki avec filet or, la puce
  ronde signe le gabarit par défaut. Remplacée par le carré biseauté or. **Deux décisions de méthode
  valent plus que le correctif lui-même.** (1) La règle est posée sur `main ul` dans styles.css et
  non sur la page légale seule, alors qu'aucune autre page n'a de liste aujourd'hui : la contrainte
  vaut pour les blocs futurs, exactement comme la coupe Bebas unique du 09/08. Une DA tenue par une
  règle globale ne dépend plus de la vigilance de celui qui ajoutera la prochaine liste. (2) Le
  premier jet coupait UN seul coin ; les sept `clip-path` du site coupent tous les DEUX coins,
  haut-droit et bas-gauche. Corrigé après relecture des valeurs réelles. **Reprendre le vocabulaire,
  c'est en reprendre la géométrie exacte, pas son esprit** : une variante inventée d'un signe maison
  fabrique un deuxième langage, ce qui est précisément ce que ce document doit empêcher.
  Corollaire d'accessibilité à retenir : `list-style: none` fait perdre le rôle `list` sous
  Safari/VoiceOver, donc tout retrait de puce s'accompagne d'un `role="list"` explicite.
  **Deuxième règle FAUSSE trouvée dans ce document en deux jours** (après les photos le 10/08) : le
  chapitre 2 revendiquait des « chevrons de vitesse » comme vocabulaire en production. Vérification :
  zéro occurrence dans le CSS, dans les cinq pages et dans le JS. La fiche décrivait une intention,
  pas le site. Corrigée. À la lumière du 10/08, où une règle mal écrite invitait à abîmer une photo,
  la leçon se durcit : **une entrée de ce document ne s'écrit pas depuis le souvenir d'une idée, elle
  s'écrit depuis une mesure ou une capture, et les entrées anciennes se revérifient.**

- 2026-08-10 ter : **la forme exacte du surtitre qui aurait le droit de revenir.** L'élagage du
  09/08 a supprimé les surtitres-rubriques. Deux sites montrent la forme qui, elle, tient debout.
  goodwood.com/motorsport : « OUR » puis « FLAGSHIP EVENTS », « EXPLORE » puis « ALL THINGS
  MOTORSPORT », « THE » puis « DRIVING EXPERIENCES ». La petite ligne n'est pas une étiquette de
  rubrique, c'est le début de la phrase que le grand titre termine, et elle n'a aucun sens détachée.
  baltic-watches.com : « AQUASCAPHE MK2 COLLECTION » au-dessus de « NOW WITH A DATE ». La petite
  ligne porte le référent, sans lequel le titre ne veut rien dire. **Règle qui s'ajoute à celle du
  09/08 : si un surtitre revient un jour sur ce site, il devra être soit un fragment de phrase que
  le titre finit, soit le nom de l'objet montré. Jamais le nom de la rubrique.** Détail de mise en
  page relevé en capture, transposable au filet or maison : le filet qui accompagne le mot change
  de place selon l'alignement, des deux côtés quand le bloc est centré, à droite seulement quand il
  est aligné à gauche.

- 2026-08-12 : **une taille de texte se règle sur la boîte qui le porte, jamais sur la fenêtre.**
  Mesuré sur la tuile « Plus d'images » de la galerie de l'accueil : le handle
  `@thomaspaponeracing` était dimensionné en `clamp(.68rem, 2vw, 1rem)` alors que la largeur de
  sa case, elle, dépend du NOMBRE DE COLONNES de la galerie, qui change par paliers (3 colonnes,
  puis 2 sous 900 px, puis 1 sous 620). Les deux courbes n'ont aucune raison de se suivre : à
  950 px de fenêtre la case ne fait plus que 263 px alors que le texte reste à sa taille maximale
  et sort de 153 px, en traversant sa propre bordure. Le texte débordait sur 9 des 14 largeurs
  testées, et là où il ne débordait pas (620 px, case de 546 px) il était au contraire minuscule
  dans une grande case. **Règle : dès qu'un texte doit tenir dans une case dont la largeur est
  décidée par une grille, il se dimensionne en unités de conteneur (`cqi`) et pas en `vw`.**
  Formule utilisée, à réemployer : mesurer le rapport largeur-du-texte / taille-de-police (ici
  22,70 pour du Korataki bold en capitales), puis poser `font-size: min(<taille max>, k·cqi)`
  avec k = 100 / rapport, moins 4 % de marge. Filet de sécurité systématique en plus de la
  formule : `max-width: 100%` + `text-overflow: ellipsis`, pour qu'un cas non prévu se coupe
  DANS la case au lieu de la traverser.
  Corollaire de méthode : un contrôle de débordement qui compare les rectangles d'éléments ne
  voit RIEN ici, parce que la boîte du span fait sagement la largeur de sa case et que seul le
  texte peint dehors. Il faut mesurer le texte lui-même (`Range.getBoundingClientRect`).

- 2026-08-16 : **ce qui n'existe qu'au survol n'existe pas, et ce qu'on rend permanent se remesure.**
  Source : caterhamcars.com/fr/sport-automobile, bloc « NOS CHAMPIONNATS EN UN COUP D'OEIL », capturé en
  desktop 1280 et en mobile 390. Trois cartes de championnat y écrivent EN PERMANENCE tout ce qui les
  distingue — niveau, courses, tours, nombre de pilotes, support — en paires étiquette/valeur séparées de
  filets fins, le niveau étant porté par un `<progress value max>` natif. Rien n'attend un geste de souris.
  Appliqué au site : les trois cartes disciplines de l'accueil escamotaient leur unique ligne factuelle en
  `translateY(101%)` et ne la rendaient qu'au `:hover` ; le `:focus-within` prévu en secours ne pouvait
  jamais se déclencher, faute d'élément focusable dans la carte. Au repos, à 1280, les trois cartes étaient
  interchangeables. **Règle : une information factuelle ne se cache pas derrière un survol. Le survol
  récompense, il n'informe pas** — il peut agrandir une photo, filer un liseré, jamais porter seul un fait.
  Corollaire mesuré, plus utile encore : **un élément conçu pour être révélé une seconde n'a jamais été
  calibré pour être LU.** Le voile sous cette ligne donnait 3,86:1 en médiane et 2,81:1 sur le décile clair
  de la carte karting une fois la ligne permanente, sous le seuil AA. Repris à .95/.90 jusqu'à 54 % de la
  hauteur, il remonte à 8,80 / 6,40. **Rendre un état transitoire permanent, c'est en devenir responsable
  au contraste : on remesure, on ne suppose pas.**
  Écart assumé le même jour, et il compte autant : Caterham pose sur l'arête HAUTE de chaque carte une barre
  d'accent en dégradé (transparente à gauche, pleine à droite). Le liseré or sur l'arête est du vocabulaire
  maison, la tentation était directe. Refusé : trois cartes voisines portant le même ornement au même
  endroit, c'est la signature d'un gabarit, exactement ce que la pastille damier a appris le 09/08. Ces
  cartes manquaient d'information, pas d'un troisième signe doré. **Quand une veille propose un signe et
  que le site manque d'un fait, c'est le fait qu'on pose.**

- 2026-08-15 : **la règle de la graisse unique atteint les pixels : plus un seul texte du site en
  Bebas Middle, rasters compris.** Les trois cartes Open Graph, derniers endroits où la coupe fine
  rejetée le 08/08 vivait encore (cuite en dur dans les JPG), refaites d'un bloc depuis les photos
  sources avec bebas_bold.ttf, l'interlettrage Middle d'origine résolu numériquement sur la carte
  en ligne puis resserré de 12 % : la règle du 09/08 s'applique donc aussi hors CSS, avec le même
  ratio. Deux enseignements de méthode, mesurés sur ce chantier. (1) **Un raster de marque se
  reconstruit d'un bloc et se recale par mesures, jamais à l'œil** : géométrie relevée au pixel sur
  les cartes en ligne, corps du titre retrouvé par calcul (648 px recalculés contre 650 mesurés),
  sujets recalés par template matching (résidus finaux 0 à 8 px). Les jugements à l'œil des
  premières passes se trompaient de 30 à 130 px, et dans les deux sens. (2) **Ce que la photo
  faisait dans l'original, la copie doit le refaire par un moyen explicite** : la lisibilité de la
  fin du kicker de la carte accueil tenait à un creux sombre de la photo, pas à un choix
  typographique ; le recadrage recalé n'avait plus ce creux, une ombre marine elliptique feutrée
  rend le même service, contrôlée au chiffre (fond sous les lettres ramené de 185 à environ 110,
  blanc du carénage voisin intact à 246). Un rôle graphique n'appartient pas à l'accident qui le
  rendait : il se transporte.

- 2026-08-18 : **remplacer un ornement générique n'est pas en ajouter un, mais la recette se reprend
  au fond près.** Les six cartes blanches de l'accueil (3 arguments partenaires, 3 articles de presse)
  partageaient une recette mesurée à l'identique, barre or pleine de 3 px comprise. La tentation du
  16/08 était encore fraîche et elle a servi de garde-fou : ce jour-là le liseré or sur l'arête des
  cartes disciplines avait été REFUSÉ, parce qu'ajouter un troisième signe doré à des cartes qui
  manquaient d'information, c'est signer un gabarit. Ici le mouvement est différent et il faut savoir
  le dire : on n'AJOUTE rien, on remplace un ornement générique par de la matière maison, à nombre
  d'ornements constant. Le test de la question 4 (matière ou effet ?) tranche : une texture remplace
  un aplat. Ce qui s'apprend ensuite est plus utile que le correctif. **Une recette maison ne se
  transpose pas, elle se choisit en fonction du fond.** Les quatre variantes ont été construites et
  regardées côte à côte avant décision : le damier or-sur-transparent du hero, transposé tel quel sur
  du blanc, donne un ruban jaune pâle qui lit « taxi », et réduit à 3 px de haut il ne lit plus qu'en
  pointillés, c'est-à-dire une bordure `dashed`, un gabarit échangé contre un autre. La bonne recette
  existait déjà, marine + or, et c'est précisément celle que le site réserve à son seul élément posé
  sur du clair (la tête de la ligne de course). **Corollaire d'outillage, à retenir : un décor peint
  en FOND disparaît sur le papier.** Le liseré est un `background`, l'impression ne l'imprime pas, et
  la carte se serait ouverte par le haut sur la feuille de style d'impression de marque. Un filet or
  plein de 2 px prend le relais en `@media print` ; vérifié en regardant le PDF rendu, pas en le
  supposant. **Règle qui en découle : toute pièce de vocabulaire posée en `background` se double d'un
  équivalent en bordure pour le papier.**
