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
  labels et kickers ; Inter pour le texte courant.
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
  bande origines (grille cisaillée k=-0.32), liseré damier.
- Carrés biseautés : boutons et tuiles à coin coupé (clip-path ; attention, le clip rogne
  outline et ombres, anneaux de focus en inset).
- Brackets d'angle or : les coins de cadres photo de la galerie.
- Coupes diagonales : pente UNIFIÉE 2.3vw (le 1,3 degré du marquee) pour toutes les
  bascules de section.
- Mots géants Korataki en outline derrière les sections (Héritage, En piste, 47, Presse),
  et UN SEUL mot rempli d'or au scroll par page (règle du 03/08 : le principe charte
  « plein contre contour » animé, avec parcimonie).
- Chiffres outline or (bande de chiffres, 404 géant).
- Grain argentique global (SVG feTurbulence) + pointillés carbone sur les sections marine.
- Photos : VRAIES photos de Thomas et de la famille, étalonnées split-tone marine/or
  (+ grain + vignette), en NOUVEAUX fichiers, originaux jamais modifiés. Les photos
  héritage (Le Mans 1980, Patrice 1987/1988) sont publiées BRUTES : la matière d'époque
  est la matière.
- Chevrons de vitesse « » » pleins en dégradé d'opacité pour les listes et labels
  (jamais de tirets décoratifs).
- Un élément volontairement TROP GRAND par écran : c'est ce qui fait poster plutôt que
  template (consigne du 10/07).
- Emblème TP : en 3D or au hero, en contour géant filigrane dans les fonds de section.
- Mouvement : sobre et lié à la course (intro tracé de circuit, ligne de course de
  progression, marquee asservi au scroll, reveals) ; tout est coupé en
  prefers-reduced-motion ; jamais d'effet « waouh » sans rapport avec la piste.

## 3. Interdits (chaque ligne vient d'un rejet réel de Thomas)

- Plaques rectangulaires plates sur fond vide, layout symétrique sage, zéro texture :
  « trop fade, ça fait Claude » (10/07, v1 des overlays ; v1 et v2 du site rejetées pour
  la même raison). Remède : matière (grain, duotone, photo), asymétrie, oversize.
- Rendu « template IA » : dégradés violet/bleu génériques, glassmorphism, cartes toutes
  identiques, rangées d'icônes rondes, tout à la même échelle. Hors charte et hors sujet
  (reality-check StudioMeyer consigné le 03/08).
- Le tout-doré (rejet du favicon doré, 17/07) : l'or est un accent, le marine domine.
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

- 2026-08-08 : création du document. Contenu fondé sur la charte PDF, les retours de
  Thomas consignés du 09/07 au 25/07 (rejets v1/v2 du site, favicon, carton de fin,
  jeu.html, amplitudes) et le vocabulaire déjà en production sur les 5 pages. Prochaine
  étape de veille : passer les captures des sites de référence à la grille d'observation
  de la routine et sourcer ici, capture à l'appui, ce qu'on garde et ce qu'on refuse.
