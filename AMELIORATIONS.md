# Site TPRacing — amélioration continue

Backlog priorisé pour la routine quotidienne. Une amélioration cohérente par jour,
charte stricte, jamais de tiret décoratif, site léger. Cocher + consigner au Journal.

## Backlog (par priorité)

- [x] Favicon propre multi-tailles depuis l'emblème (32px, 180px apple-touch) + meta theme-color marine
- [x] Image Open Graph dédiée 1200×630 (logo + photo duotone) pour les partages LinkedIn/WhatsApp
- [x] Micro-interaction nav : soulignement or animé qui glisse sous les liens
- [x] Page pilote : renforcer la cohérence avec l'accueil (47 outline animé ou emblème 3D discret dans le hero)
- [ ] Section jalons/palmarès en badges chiffrés or sur marine (années de karting, sessions monoplace, licence…) à valider avec Thomas avant publication des chiffres
- [x] Galerie : lightbox légère au clic (vanilla JS, fermeture Échap, flèches clavier)
- [x] Photos en AVIF/WebP avec balise picture (fait 18/07 : −53 % réels)
- [x] Footer : icônes réseaux SVG maison en carré biseauté (18/07, footer pilote uniquement — entités séparées)
- [x] Page 404.html de marque (emblème contour géant + lien retour accueil)
- [x] Accessibilité : focus visibles or, contrastes AA, lien d'évitement, alt complets
      (contraste de l'or sur fond clair : question posée à Thomas au Journal du 15/07)
- [x] Diagonales de sections : pente unifiée sur celle du marquee (2.3vw = 1,3 deg)
- [x] Bande origines : parallax léger au scroll (18/07, background-position, coupé reduced-motion)
- [x] Teaser pilote accueil : montage duotone dédié (IMG_3445, frontal grille, plaque 47)
- [x] Performances : preload emblème (LCP + intro), lazy en place, images −53 % (AVIF), 0 requête tierce
- [x] Cartes disciplines : méta au survol (National/X30, iRacing, FEED Magny-Cours 2024 — sourcé posts/presse)
- [x] Complétude : page mentions légales + politique de confidentialité (17/07, données officielles JOAFE)
- [x] Complétude : bloc contact sur l'accueil (LinkedIn mis en avant + email, boutons charte)
- [x] Déclinaison du sting AE en carré 1080 pour Insta/Shorts (18/07 : Communication/Réseaux/tp_sting_1080.mp4)
- [x] Complétude PWA : manifeste web + icône 512 de marque (ajout sur écran d'accueil mobile, splash, theme-color) — 18/07
- [x] Complétude : feuille de style impression / « Enregistrer en PDF » de marque (papier à en-tête logo couleur, encre sobre, décor retiré) — 19/07
- [x] Cartes OG des pages secondaires (og-contact.jpg dédiée) + audit final de clôture 5 pages, 6 correctifs — 20/07
- [x] Perf : vidéo galerie différée à l'approche (8,9 Mo économisés au chargement de l'accueil),
      13 images sous la ligne de flottaison en lazy, fetchpriority sur le LCP de pilote.html — 27/07
- [x] Audit accessibilité complet + correction des débordements réels sous 414 px (nav, galerie, contact, 404),
      bouton marine enfin défini pour contact.html, cibles tactiles de nav à 24 px, lightbox annoncée — 02/08
- [x] Audit qualité visuelle par bords zoomés de toutes les images publiées : 3 bandes noires incrustées corrigées
      (Le Mans 1980 remasterisée en 16:9 depuis la diapo originale, photo partenaires et duel Valence recadrées) — 04/08
- [ ] Emblème 3D : version animée légère en hero (séquence AE ou sprite au scroll) si le poids reste raisonnable
- [ ] Section actus/prochaines échéances (structure seulement, contenus à valider avec Thomas)
- [x] Accueil : mur de partenaires « Ils nous font confiance » (18 logos)
- [x] Partenaires : bande défilante automatique, actifs 2026 et plus gros soutiens en tête (demande Thomas 17/07)
- [x] Feed Insta : carrousels, les photos du post défilent au survol de la tuile (demande Thomas 17/07)
- [x] Pilote : section « Derniers posts » Instagram (feed maison, réels prêts à jouer au scroll)
- [x] Accueil : section « Ils parlent de nous » (2 articles Le Progrès + interview MyCitee en 2 parties)
- [x] Feed Insta : automatiser le rafraîchissement (tâche planifiée dédiée maj-feed-insta-site,
      quotidienne à 10 h, via le Chrome connecté ; validée par Thomas le 17/07)


### Idées du benchmark 18/07 (fan-out 4 agents : équipes F1, sites de pilotes, Awwwards, conversion sponsors)
- [x] Transitions de page en volet diagonal (View Transitions cross-document, logo morphé entre pages)
- [x] 404 « lights out » : test de réaction façon départ F1 (5 feux, jump start, verdicts)
- [x] Marquee asservi à la vitesse de scroll (inertie + cisaillement, pause au survol conservée)
- [x] ~~Rubrique « Réflexes » : le jeu de départ promu en vraie page jeu.html + carte d'appel sur l'accueil (21/07)~~
      ANNULÉ par Thomas le 25/07 (« ça en fait trop ») : page retirée, le jeu reste sur la 404 uniquement
- [ ] Bloc « Prochaine course » : countdown + tracé du circuit (comète de l'intro) + contexte perso + « présenté par [partenaire] » — ATTEND dates/circuits de Thomas
      (enrichi par la veille du 26/07 : accordéons natifs details qui replient la trace via :has() comme audif1.com ;
      micro-stats du tracé longueur/virages comme ironlynx.com ; une phrase d'analyse pilotage par circuit comme cadillacf1team.com)
- [ ] Bande « La saison » : cartes des manches avec résultats (P3…) et prochaine manche en or — ATTEND calendrier/résultats de Thomas
- [ ] Paliers de partenariat chiffrés + PDF dossier téléchargeable + CTA mailto pré-rempli — ATTEND montants validés par Thomas et Patrice
- [ ] Mur partenaires narratif : cartes d'activation + 2-3 citations de partenaires actuels — ATTEND citations à recueillir
- [ ] Signature manuscrite de Thomas vectorisée, tracée au scroll + rituel de clôture « Le volant se transmet » sur les 4 pages — ATTEND un scan de sa signature
- [ ] « Casques & machines » : hall of fame duotone → couleur révélée en balayage damier — ATTEND choix des objets/photos par saison
- [ ] pilote.html en deux actes (rapide « Le pilote » / intime « Au-delà du volant ») — ATTEND anecdotes de Thomas (dans ses mots)

### Idées de la veille 21/07 (workflow 6 angles : écuries, pilotes/karting, studios primés, tendances 2026, plateforme web, sport hors auto — 42 collectées, 8 retenues)
Section RÉCUPÉRÉE le 27/07 : elle était restée non commitée sur le T7 depuis le run du 21/07 (annotations entre crochets = ce qui a évolué depuis).
- [x] ~~« Teste tes réflexes » : le jeu de départ promu de la 404 en vraie rubrique jeu.html + carte d'appel accueil (Williams F1, rubrique PLAY de premier niveau — williamsf1.com) — FAIT 21/07~~ [ANNULÉ par Thomas le 25/07, page retirée]
- [ ] Frise typographique « Ils ont commencé en kart » (Senna, Prost, Schumacher, Alonso, Hamilton, Verstappen, Leclerc… puis « n°47, la suite s'écrit ») — CRG « la fabbrica dei campioni » (kartcrg.com) ; faits publics, zéro photo [contenu engageant → à VALIDER avant publication]
- [ ] Ligne de trajectoire or dessinée au scroll reliant disciplines et jalons de la filière (path SVG + animation-timeline: view(), zéro JS, fallback statique @supports/reduced-motion) — scroll-driven-animations.style + tuukkataponen.com
- [ ] Plaque signalétique pilote façon plaque d'homologation CIK-FIA (rivets et filets or, champs Bebas gravés ; UNIQUEMENT infos déjà publiées) — oscarpiastri.com transposé à l'esthétique karting
- [ ] « L'équipe derrière le 47 » : grille de cartes rôles/noms, place de figure fondatrice au père — tuukkataponen.com (page Taustatiimi) — ATTEND noms et rôles validés par Thomas
- [ ] Contact en 3 portes PARTENARIAT / PRESSE / COMMUNAUTÉ (mailto pré-remplis) + email cliquer-copier flash « COPIÉ » — premaracing.com + Podium/studio San Rita (Awwwards SOTD 27/06/2026) [recoupe « contact 2 canaux » de la veille 26/07 : fusionner au moment de faire]
- [ ] Galerie en planche-contact argentique 35 mm (bandes perforées SVG, numéros de vue « TP-47 / 03A », ±0,5° de rotation) — tendance « Imperfection is in » (lummi.ai/blog/2026-design-trend) ; prolonge le grain + récit héritage
- [ ] T et P révélés en contour or dans un intertitre plein (« TRANSMETTRE LA PASSION ») ± manifeste 3 piliers — Team WRT « WE ARE A TEAM » (w-racingteam.com) + G2/100 Thieves ; vérifier la zone de protection T-P de la charte
- [ ] Micro-tâches (trop petites pour une journée, à glisser dans un prochain chantier) : ~~text-wrap balance/pretty~~ [FAIT 26/07] ; ~~Speculation Rules~~ [FAIT 26/07] ; popover natif ancré sur les logos partenaires [repris au backlog 26/07] ; ~~morph View Transition intra-page de la lightbox~~ [FAIT 05/08] ; accordéon details/summary stylé pour mentions légales ; microcopie « voix radio d'écurie »

### Idées de la veille 26/07 (workflow 5 éclaireurs : écuries hors F1 vues, pilotes pros, sites primés, tendances 2026, plateforme web — chaque source fetchée avant citation)

Actionnables sans contenu de Thomas :
- [x] Navigation instantanée : Speculation Rules (pré-rendu des pages internes au survol, 5 pages) + calage typo
      text-wrap: balance (titres) / pretty (paragraphes) — sources : developer.chrome.com/docs/web-platform/prerender-pages,
      developer.mozilla.org (Speculation_Rules_API), webkit.org/blog/16547 ; idée convergente de 3 terrains sur 5 (fait 26/07)
- [x] Scroll-driven animations CSS : dérive lente des mots géants outline via animation-timeline: view() + migration de la
      ligne de course en scroll(root) pur CSS (le JS devient repli) — sources : MDN Scroll-driven_animations,
      scroll-driven-animations.style (showcase Chrome DevRel), cydstumpel.nl ; @supports + reduced-motion en place (fait 27/07)
- [x] Mot géant outline→rempli au fil du scroll (UN seul par page : le principe charte « plein vs contour » animé, texte réel
      dans le DOM) — source : studiomeyer.io/en/blog/kinetische-typografie (règles kinetic typo 2026)
      FAIT 03/08 sur le 47 de l'accueil et celui de pilote.html (le mot « Presse » reste en contour : un seul par page)
- [x] ~~@starting-style : fondu de FERMETURE de la lightbox galerie~~ — vérifié le 27/07 : la fermeture FOND DÉJÀ
      (transition opacity/visibility .3s dans les deux sens), l'hypothèse « fermeture sèche » de la veille était fausse ;
      @starting-style reste utile pour de futurs popovers — source : MDN @starting-style (Baseline 2024)
- [ ] Popovers partenaires ancrés (attribut popover + CSS anchor positioning, zéro JS) sur la bande défilante : mini-carte
      marine/filet or par logo (nom, statut, lien), marquee en pause via :has(:popover-open), accessible clavier/mobile là où
      le survol seul ne l'est pas — sources : nexgismo.com (anchor positioning 2026), caniuse (Chrome 125+/Safari 26+/
      Firefox 147+) → @supports requis, fallback = lien direct actuel
- [ ] corner-shape: bevel en @supports : la version NATIVE des coins biseautés maison (aujourd'hui en clip-path qui rogne
      outline et ombres) sur cartes/boutons/badges — source : smashingmagazine.com/2026/03 (corner-shape, Chrome 139+)
- [x] View Transitions directionnelles : type « retour » posé dans pageswap/pagereveal quand on remonte l'arborescence
      (le volet diagonal s'inverse) + morph galerie→lightbox en same-document (la micro-tâche du 21/07, faite dans le
      même chantier) — source : developer.chrome.com/blog/view-transitions-in-2025 (Firefox 144 = same-document Baseline,
      SANS les types → enhancement) — FAIT 05/08
- [ ] Séparateurs SVG dans le marquee : glyphe or trait fin (damier/chevron) entre les mots, façon signalétique de bord de
      piste — source : trionn.com (croix SVG inline entre les .marquee-text-item, vérifié dans le HTML)
- [ ] Labels Bebas « décodés » façon écran de chronométrage au premier reveal (~400 ms, cycle A-Z/0-9, JAMAIS sur les titres
      Korataki, coupé en reduced-motion) — source : cadillacf1team.com (composant ScrambleText, vérifié dans le HTML)
- [ ] Overlay de barres skewées (même angle que le marquee, 1 barre or d'accent) pour l'ouverture lightbox/menu mobile —
      source : charlesleclerc.com (Awwwards SOTD 24/04/2025 : 320 barres .rectangle--skew en stagger, vérifié dans le HTML)
- [x] /llms.txt à la racine (H1 + résumé + liens décrits des 5 pages, spec llmstxt.org) : la couche « lisibilité IA » qui
      alimente les réponses ChatGPT/Perplexity/AI Overviews quand un sponsor cherche TPRacing — sources : llmstxt.org,
      studiomeyer.io/en/blog/webdesign-trends-2026-reality-check (fait 31/07)
- [x] Graphe de données structurées relié (idée ajoutée le 31/07, faite le jour même dans le même chantier) : entité
      WebSite rattachée à l'association par @id partagés, fils d'ariane sur les 3 pages secondaires, JSON-LD enfin
      présent sur la page légale, lastmod du sitemap rafraîchis (ils dataient du 21/07 alors que les pages avaient
      changé le 27)

À valider ou en attente de contenu :
- [ ] Section « fronts » Karting / Simracing / Caterham : 3 cartes égales, chacune avec son état et sa prochaine échéance
      (répond au principe « ne pas enfermer TPRacing dans une case ») — sources : dorianepin.com (« Quatre fronts »),
      unitedautosports.com (la next race DE CHAQUE programme dans sa carte) — ATTEND validation du découpage + échéances
- [ ] Déclinaison micro du numéro : chips « N.47 » Bebas contour or en tête des blocs de pilote.html, le 47 traité en marque
      nommée — sources : pierregasly.com (« 10 CREW »), emilien-denner.com (monogramme ED21) — ATTEND accord (marque)
- [ ] Contact à deux canaux (Partenariats / Médias-presse) + kit presse statique (logo, 3-4 photos HD, bio courte, fiche 47)
      — source : theopourchaire.com (contact pilote + agence séparés) — ATTEND décision + contenus
- [ ] Cartes photo « partenaires en situation » (crops des stickers sur kart/combinaison/casque) en complément de la bande
      logos — source : audif1.com (alt « Sidepod of the R26 with the main sponsor logo… ») — ATTEND choix de photos nettes
- [ ] Icônes animées « direction de course » (rampe de feux en séparateur, damier, feu vert) en SVG+CSS maison, fil rouge
      avec le jeu de la 404 — source : williamsf1.com (bibliothèque de 28 Lottie race-control) — À DOSER, sobriété d'abord
Écartés en connaissance de cause : passeport de fan gamifié d'alexalbon.com (contraire au « ça en fait trop » du 25/07),
chrono de tour fictif dans l'intro (chiffre inventé), section inversée fond or de collabcapitolium.fr (bascule de DA à ne pas
tenter sans accord), glassmorphism/Y2K/maximalisme (hors charte, cf. reality-check StudioMeyer).

### Idées de la veille 03/08 (angles neufs : filière karting, ingénierie issue de la F1, sport primé, socle navigateur — chaque source ouverte et vérifiée)

Actionnables sans contenu de Thomas :
- [x] Le 47 se remplit d'or au fil de la lecture (fait le jour même, voir Journal du 03/08) — sources :
      studiomeyer.io/en/blog/webdesign-trends-2026-reality-check (la typo cinétique « a surpromis » : à réserver au hero
      ou à une transition de section, jamais généralisée) et elements.envato.com/learn/web-design-trends (le texte
      surdimensionné devient élément de mise en page, pas simple contenu)
- [ ] Popovers partenaires ancrés : l'item de la veille du 26/07 change de statut. **CSS anchor positioning est passé
      Baseline en 2026 et caniuse le donne à 81,67 % (Chrome 125+, Safari 26, Firefox 147, Android 150)** — il reste un
      enrichissement sous @supports, mais ce n'est plus une pièce exotique — source : caniuse.com/css-anchor-positioning
- [ ] `:open` (Baseline mai 2026) : styler les états ouvert/fermé de `details` et `dialog` sans classe JS — utile le jour
      où l'accordéon des mentions légales et la lightbox passeront en éléments natifs — source : web.dev/blog/baseline-digest-may-2026
- [ ] Requêtes de style de conteneur (Baseline mai 2026) : piloter les variantes claires/marine des cartes par une
      propriété personnalisée portée par la section plutôt que par des sélecteurs `.section-marine .x` en cascade —
      dette technique, zéro effet visible, gros gain de maintenance — source : web.dev/blog/baseline-digest-may-2026
- [ ] `shape()` (Baseline 2026) : successeur lisible de `clip-path: polygon()` pour les biseaux maison ; à instruire en
      même temps que `corner-shape`, la même famille de problèmes (le clip actuel rogne outline et ombres) —
      source : web.dev/baseline/2026
- [ ] Chiffres à zéro de tête façon plaque de châssis (« 05 décennies ») sur la bande de chiffres animée : le zéro
      transforme un compteur en donnée d'ingénieur, très proche de l'esprit Bebas de la charte —
      source : williamsgptech.com (« 05 Decades of motorsport engineering pedigree »)

À valider ou en attente de contenu :
- [ ] « Pourquoi nous soutenir » en 4 arguments courts, juste avant le bandeau partenaire — source : williamsgptech.com
      (bloc « Why work with us ») — ATTEND l'accord de Thomas sur les 4 arguments
- [ ] Héritage chiffré en une ligne (deux générations, première licence 1987) plutôt qu'en paragraphe —
      source : williamsgptech.com (l'héritage sert de socle de crédibilité, pas d'anecdote) — ATTEND validation du chiffre

Écartés en connaissance de cause :
- Grilles cassées / anti-grille (elements.envato.com) : la charte TPRacing est une charte de rigueur et d'alignements,
  la casser serait adapter la marque à la tendance et non l'inverse.
- Compteurs de résultats globaux (« races / wins / podiums / poles ») : hrtdriver.com, équipe de karting, les affiche
  tous à 0 pour la saison en cours, et le bloc se retourne contre l'équipe. Tant que Thomas n'a pas fourni de chiffres,
  ne rien créer de vide ; sodikart.com fait la démonstration inverse en prouvant par le fil d'actualités des résultats.
- Typographie cinétique généralisée : écartée par le reality-check à six mois (accessibilité, indexation, décalages
  de mise en page qui abîment les Core Web Vitals). D'où la règle d'un seul mot rempli par page.

Sites morts ou trompeurs, à ne pas reprendre dans une prochaine veille : teamduqueine.com, akkodis-asp.com et
tds-racing.com ne répondent plus ; signatech.fr n'est PAS l'écurie mais une entreprise de signalétique du Loiret.

### Constats reportés de l'audit SEO du 06/08 (à traiter un jour de dimension adaptée)

Perf (pour le prochain jour d'audit performance) :
- [ ] Vidéo de la galerie : 8,47 Mo en 1600x900 à 3,7 Mbit/s, sans variante allégée. Le chargement est déjà
      différé depuis le 27/07, mais le poids reste énorme dès qu'un visiteur mobile la déclenche : ré-encoder
      une version 1000 px pour les petits écrans (source `<video>` avec media) ou baisser le débit.
- [ ] Les 4 logos de marque sont restés en PNG (97 Ko au total) alors que tout le reste du site est en AVIF/WebP.
- [ ] Attribut `sizes` deux fois trop grand sur les deux photos d'héritage : le navigateur télécharge la grande
      variante pour un affichage moitié moins large.
- [ ] Logos partenaires servis environ deux fois trop grands (autour de 280 Ko pour une bande décorative).
- [ ] `@font-face` Korataki 400 déclaré mais jamais utilisé (35 Ko de police morte dans le dépôt ; jamais
      téléchargée par le navigateur, donc coût nul à l'affichage, mais autant nettoyer).
- [ ] Fond décoratif `collage-origines.webp` (127 Ko) chargé dans la première salve de l'accueil.

Pour la routine du feed Instagram (`maj-feed-insta-site`, section « Les derniers posts » interdite à cette routine) :
- [ ] `pilote.html` alt du post du 15/07 : « Monoplace TPRacing en piste, monogramme TP » laisse entendre que
      l'association possède la monoplace. C'est la voiture de l'école, décrite ailleurs sur le site comme
      « Monoplace de l'école FEED Racing France en piste ». À aligner.
- [ ] `pilote.html` alt du post du 13/07 : « dossard 32 » met en avant un numéro qui n'est pas le 47. La règle
      du site est de ne citer aucun autre numéro. À retirer de l'alt.

## Règles (rappel pour la routine)

Charte : marine #1E2635, or #D49726, blanc #F6F7FC, rouge #C13221, vert #3E836E (micro-accent).
Typos : Korataki (titres) / Bebas Neue Pro (labels) / Inter (texte). Pas de tiret ni point médian décoratif.
Pas de crédit photo (sauf mention Thierry Chomel en place). Ne jamais supprimer google42175aef89d3ae74.html.
Icônes réseaux au footer de toutes les pages (LinkedIn = asso sur les pages asso, perso sur pilote.html) ;
feed Insta et chips réseaux du hero seulement sur pilote.html.
Numéro pilote : 47 uniquement. Vérifier desktop 1280 + mobile 375 + console avant push.

## Journal

- 2026-08-06 (routine, AXE B : CORRIGER, dimension SEO TECHNIQUE + résultats Google réels, commit ec9dc99) :
  T7 non monté, travail sur clone GitHub dans le scratchpad. Dimension jamais auditée à fond jusqu'ici
  (rotation : liens 25/07, perf 27/07, accessibilité 02/08, qualité visuelle 04/08).
  **CE QUI EST SAIN, mesuré en production** : les 5 pages, le sitemap, robots.txt et llms.txt répondent 200 ;
  Googlebot reçoit bien la page complète ; compression gzip active ; aucun `X-Robots-Tag` bloquant ;
  1 seul h1 par page, aucun niveau de titre sauté, aucun title ni description en double ; canonical juste
  partout ; `noindex, follow` sur la 404 seulement ; 8 blocs JSON-LD valides ; sitemap sans BOM, XML valide,
  servi en `application/xml` y compris à Googlebot ; les 3 cartes de partage font bien 1200x630.
  **RÉSULTATS GOOGLE RÉELS (Chrome connecté, google.fr)** : `site:tpracing.github.io` renvoie 2 pages
  (accueil + pilote). Le site est **1er sur « TPRacing Thomas Papone »** et **1er sur « Thomas Papone pilote
  karting »** (devant LinkedIn, l'interview MyCitee, Le Progrès et la fiche kartcom.com). Search Console
  confirme : 2 pages dans l'index, 0 non indexée, aucun problème depuis 90 jours. **MAIS contact.html et
  mentions-legales.html ne sont toujours pas découvertes** (créées les 17 et 19/07) et l'entrée sitemap reste
  en « Impossible de récupérer le sitemap » (dernière lecture le 4 août, 0 page découverte) alors que le
  fichier est irréprochable octet par octet. Diagnostic inchangé depuis le 17/07 : bug connu des propriétés
  récentes en \*.github.io. Le titre affiché par Google pour pilote.html contient encore un tiret cadratin,
  supprimé du site le 18/07 : la page n'a donc pas été réexplorée depuis. Rien à corriger côté site.
  **CE QUI A ÉTÉ CORRIGÉ AUJOURD'HUI** :
  1. **Liens internes alignés sur l'URL canonique** : tous les liens vers l'accueil pointaient `index.html`
     alors que la canonique est `/` (24 liens sur les 5 pages). Passés en `./` et `/` sur la 404. Un moteur
     voyait deux adresses pour une seule page.
  2. **Graphe de données structurées relié** : le fondateur déclaré sur l'accueil est maintenant la MÊME
     entité que la Person de la page pilote (`@id` partagé), Patrice a un identifiant stable, la page pilote
     reçoit une entité `ProfilePage` (elle n'avait aucune entité de page, contrairement à contact et mentions),
     `primaryImageOfPage` passe en `ImageObject` (schema.org n'attend pas une chaîne), le `jobTitle` est
     harmonisé sur les deux pages (sinon deux valeurs contradictoires sur le même identifiant) et la
     convention de fragment devient `#page` partout.
  3. **Descriptions raccourcies** : accueil 176 et pilote 177 caractères, donc coupées par Google. Ramenées
     sous 155, sens conservé.
  4. **`twitter:image:alt`** ajouté sur les 4 pages indexables (l'alt existait en Open Graph seulement).
  5. **404 partageable** : elle n'avait aucune balise de partage, un lien cassé envoyé à quelqu'un
     n'affichait rien. Carte de marque ajoutée, la page reste `noindex`.
  6. **CTA de fin de section partenaires** : « Contacter l'association » quittait le site vers LinkedIn alors
     que contact.html existe depuis le 19/07. Il pointe désormais vers la page contact. Effet secondaire utile :
     la page contact, pas encore indexée, reçoit enfin un lien depuis la section commerciale.
  7. **Contradiction de chronologie** sur pilote.html : le bloc final disait « avant le passage en voiture »
     alors que la même page et l'accueil disent que le passage en monoplace est FAIT (école FEED, 2024).
     Reformulé en « avant l'entrée en championnat », avec les mots déjà employés plus haut. À revoir si tu
     préfères une autre formule.
  8. **Page confidentialité rendue exacte** : elle affirmait « aucun cookie ni aucun autre traceur sur votre
     appareil » alors que le site écrit deux choses dans le navigateur (l'intro déjà vue, en mémoire de session,
     et le meilleur temps du test de réflexes de la 404). Le « aucun cookie » est conservé et précisé
     (« ni traceur publicitaire ou de mesure d'audience »), et un paragraphe factuel décrit les deux
     informations locales. Rien n'est collecté ni transmis, la promesse du site tient toujours.
  9. **robots.txt** : les deux documents de travail publiés avec le dépôt (AMELIORATIONS.md et le mode d'emploi)
     sont exclus de l'exploration. Ils n'ont pas vocation à sortir dans les résultats.
  10. **Mode d'emploi renommé et remis à jour** : le fichier s'appelait « LISEZ-MOI [cadratin] Comment modifier
     le site.md », avec un tiret cadratin DANS le nom (URL en %E2%80%94) et 9 dans le texte. Devenu `LISEZ-MOI.md`,
     sans caractère interdit, et remis à jour (5 pages et non 2, dépôt sur le T7, Search Console déjà validée
     avec les 2 fichiers à ne jamais supprimer, routines quotidiennes).
  **MÉTHODE** : audit en 6 dimensions par agents (schema.org, métas, régression du diff, indexabilité, contenu,
  technique) puis contre-vérification adversariale de chaque constat, 48 constats bruts, 4 confirmés,
  44 réfutés ou écartés. Constats justement réfutés, à ne pas « corriger » un autre jour : le lien du partenaire
  SMD vers hexagone-motors.com (SMD appartient au groupe Hexagone Motors), le h1 « Le volant se transmet » qui
  ne contient pas de mot-clé (accroche validée par Thomas), le lastmod du sitemap qui diffère de la date de mise
  à jour affichée sur la page légale (deux dates de nature différente), l'absence d'og:url sur la 404.
  **VÉRIFS** : 5 pages x 1280/375/320 px, 0 débordement hors décor, 0 ratio d'image faux, 0 titre empilé,
  0 erreur console, tous les liens et ressources internes existants, JSON-LD reparsé, sitemap revalidé,
  captures de contrôle du bandeau partenaires et de la section confidentialité, puis contrôle en production.
  **QUESTIONS EN ATTENTE (rappel groupé)** : (a) contraste de l'or sur fond clair, la reco du 15/07 reste
  #8F661A pour les petits textes sur fond clair, rien n'est appliqué sans ton accord ; (b) Search Console :
  garder les 2 propriétés (compte asso + compte perso) ou n'en garder qu'une et ajouter l'autre compte en
  utilisateur ; (c) les métas des cartes disciplines n'apparaissent qu'au survol, donc invisibles au clavier
  seul sur desktop ; (d) le backlog reste bloqué sur tes contenus : palmarès, calendrier et résultats, paliers
  de partenariat, citations de partenaires, scan de ta signature, casques et machines, anecdotes pour la page
  pilote.

- 2026-08-05 (routine, AXE A : AMÉLIORER, chantier View Transitions, commit 902e67f) : T7 non monté, travail
  sur clone GitHub dans le scratchpad. Les deux pièces VT restantes du backlog faites ensemble :
  (1) **Morph galerie -> lightbox (same-document)** : au clic, la photo de la grille GRANDIT jusqu'à sa place
  dans la lightbox, et revient s'y poser à la fermeture, y compris sur la photo COURANTE si on a navigué aux
  flèches entre-temps. Technique : view-transition-name posé dynamiquement sur la photo cliquée (capture
  « avant »), retiré dans le callback de startViewTransition pour que seule .lb-img porte le nom dans la
  capture « après » (un nom dupliqué = transition avortée) ; classe html.vt-lb qui NEUTRALISE le volet
  ::view-transition-old/new(root) du cross-document pendant le morph (sinon ouvrir la lightbox déclenchait
  le volet de page !) ; classe .vt-net qui coupe les fondus CSS de la lightbox (l'état capturé doit être
  l'état final, pas le début d'une transition) ; object-fit: cover sur les pseudos old/new (ratios cover
  grille vs contain lightbox) ; attente plafonnée img.decode() 350 ms dans le callback (pleine taille pas
  encore décodée = morph vers une image vide). Sans startViewTransition ou en mouvement réduit : fondus
  d'avant, inchangés (vérifié : 0 appel VT sur ce chemin).
  (2) **Volet directionnel cross-document** : snippet head sur les 5 pages ; pageswap/pagereveal comparent le
  rang des pages (index 0 / pilote 1 / contact 2 / mentions 3, autre 9) et ajoutent le type « retour » quand
  on remonte -> :root:active-view-transition-type(retour) joue vt-entree-retour, le miroir exact du volet.
  Règles CSS ISOLÉES exprès : une pseudo-classe inconnue invalide toute la liste de sélecteurs qui la
  contient (l'inclure dans la liste reduced-motion existante aurait REDONNÉ les animations aux utilisateurs
  en mouvement réduit sur Firefox/vieux Safari).
  **VÉRIFS** : code livré testé tel quel (snippet extrait du DOM, exécuté avec location/navigation factices) :
  10 scénarios de direction corrects, y compris racine vs index.html, 404 et événement sans viewTransition ;
  morph prouvé par instrumentation (1 appel VT par ouverture/fermeture, noms posés/retirés au bon moment sur
  la bonne photo, zéro classe résiduelle) ; audit 5 pages x 1280/375 : 0 débordement réel au rect, 0 ratio
  faux, 0 erreur console ; prod contrôlée après déploiement. Sitemap lastmod -> 05/08 (les 5 pages changent).
  ⚠️ Rig : pane visibilityState:hidden toute la session -> les animations VT sont SAUTÉES (le nom ne vit
  qu'une frame, une sonde à 40 ms le rate : utiliser un MutationObserver) et le cross-document ne crée PAS
  de viewTransition dans un onglet caché (e.viewTransition null, garde-fou vérifié) ; l'attribut class d'un
  élément SVG est un SVGAnimatedString, pas une chaîne -> les filtres d'exclusion d'audit par regex sur
  className laissent passer les use .embleme-fond (faux positifs de débordement, décor voulu).
  Choix assumé du jour : les popovers partenaires ancrés (2x au backlog) restent en attente : intercaler une
  carte entre le clic et le site du partenaire ajoute de la friction sur des liens qui marchent, et l'info
  (nom) est déjà dans alt/aria-label ; à retenter le jour où il y aura un vrai contenu de carte (statut,
  citation) validé par Thomas.

- 2026-08-04 (routine, AXE B : CORRIGER, dimension auditée = QUALITÉ VISUELLE / BORDS D'IMAGES) : T7 monté,
  travail sur le dépôt du SSD. Première passe de la dimension « qualité visuelle par captures zoomées des
  bords » : toutes les images publiées (photos de l'accueil et du pilote, cartes OG, 18 logos partenaires,
  vignettes Insta en lecture seule) passées d'abord au scan de luminance des bords (détection de suites de
  colonnes/lignes sombres), puis contrôle À L'ŒIL par planches-contact : vue entière + les 4 bords zoomés x3
  + les 4 coins, pour chaque fichier suspect.
  **TROIS DÉFAUTS RÉELS, TOUS CORRIGÉS LE JOUR MÊME (commit 39a129a)** :
  (1) **heritage-1980 (« Le Mans 1980 / l'époque Papone »)** : le fichier publié contenait les BANDES NOIRES
  du cache de la diapositive d'origine (165 px à gauche, 200 px à droite sur 1200), bien visibles sur la page
  puisque l'affichage 16:9 en object-fit: cover conservait toute la largeur. Remasterisée DEPUIS LA DIAPO
  ORIGINALE du T7 (1980_Le_Mans (6).jpg, 5728x3824) : fenêtre 16:9 calée sur le ratio d'affichage réel de la
  figure (plus aucun pixel caché), les deux visages et la roue tenue entiers, plus aucune bande. Vérifié au
  préalable que le fichier en ligne n'était PAS étalonné (LUT quasi-identité mesurée entre original et
  publié) : la photo d'époque reste donc brute, comme ses deux voisines de section.
  (2) **partenaires-stickers (« Vos couleurs en piste / Valence 2022 »)** : bandes résiduelles du cadre
  incrusté Thierry Chomel sur LES DEUX bords (~25 px chacune, luminance ~28-31, sous le seuil de rognage 55
  du pipeline de 2021-2022 mais au-dessus du noir) : recadrée depuis le livrable étalonné, 1400 -> 1345 px.
  (3) **galerie-duel-324 (« Défense de la position / Valence 2022 »)** : même bande résiduelle à gauche
  (~25 px), recadrée 1400 -> 1374 px. Variantes -m et AVIF régénérées pour les trois, width/height et
  descripteurs srcset du markup mis à jour (la lightbox lit les mêmes chemins, rien à toucher).
  **SUSPECTS RÉFUTÉS après examen (rien à corriger)** : collage-origines (la cellule marine du damier cisaillé
  EST le design), logos hexagone-motors et lunatik (marques nativement sur aplat noir : c'est leur identité,
  pas un défaut de détourage), heritage-1987 et heritage-1988 (bords sombres = contenu photo : barrières,
  piste, carrosserie), galerie-soleil-2021 (ombre du kart au sol), pilote-simu et embleme-3d (fonds voulus),
  cartes OG (cadres dessinés voulus). Vignettes Insta : rien d'anormal, et domaine de la routine dédiée.
  **VÉRIFS** : les 12 fichiers de sortie re-scannés = 0 suite sombre résiduelle ; audit local index 1280 et
  375 = 0 débordement au rectangle, 0 ratio d'image faux, console vide ; captures des trois zones corrigées
  (héritage desktop + mobile, partenaires, galerie) ; prod contrôlée aux octets (content-length = tailles
  locales exactes) et markup en ligne vérifié (height 675, descripteur 1374w).
  ⚠️ Rig du jour : le workflow multi-agents d'inspection a calé (erreurs API en série, 6 agents sans
  progression) : repli en planches-contact inspectées inline, même méthode, mêmes preuves. Le cache
  d'images du pane survit au reload de l'iframe : forcer fetch(cache:'reload') sur CHAQUE fichier remplacé
  avant de conclure. Et dans un contexte srcset, naturalWidth rend des px CSS corrigés de densité (1200w
  affiché 500px -> naturalWidth 500), ne pas le lire comme la taille intrinsèque du fichier.

- 2026-08-03 (routine, AXE C : S'ADAPTER, veille tendances) : T7 non monté, travail sur clone GitHub dans le
  scratchpad. Veille menée sur des angles encore jamais couverts (filière karting, ingénierie issue de la F1,
  catégorie sport des sites primés, socle navigateur), chaque source ouverte avant citation. 6 idées neuves
  versées au backlog, 3 pistes écartées motivées, et une idée déjà au backlog IMPLÉMENTÉE le jour même.
  **FAIT : le 47 se remplit d'or au fil de la lecture.** Le mot géant en contour derrière la galerie de
  l'accueil et derrière le parcours de pilote.html se remplit progressivement d'un aplat or, de la gauche
  vers la droite, à mesure que la section défile : c'est le principe « contour contre plein » de la charte
  mis en mouvement, sur le seul élément qui mérite ce traitement, le numéro du pilote. Le mot « Presse » de
  l'accueil reste en contour : un seul mot rempli par page. Réalisation : dégradé plat en `background-clip: text`
  dont le `background-size` passe de 0 à 100 % sur une `animation-timeline: view()` — le texte reste du vrai
  texte dans le DOM, aucun JS, aucun octet ajouté, le contour existant continue d'être peint par-dessus.
  Aplat volontairement sous le seuil du décor, et calibré par fond après capture (or à 13 % sur les sections
  marine, 17 % sur fond clair, où l'or contraste beaucoup moins). Sans `animation-timeline` ou en
  `prefers-reduced-motion`, le mot reste exactement le contour d'aujourd'hui (vérifié : `animation: none`,
  remplissage figé à 0).
  **POURQUOI CETTE IDÉE, ET POURQUOI DOSÉE AINSI** : les deux sources de tendance de la journée convergent
  sur la typographie cinétique comme LE geste 2026 (elements.envato.com : « le texte surdimensionné devient
  élément de mise en page »), mais le bilan à six mois de StudioMeyer la classe parmi les tendances qui ont
  surpromis, à réserver au hero ou à une transition, pour trois raisons concrètes : gêne des lecteurs d'écran,
  lutte contre les robots d'indexation, décalages de mise en page qui abîment les Core Web Vitals. La version
  retenue ici échappe aux trois : le texte n'est ni découpé ni dupliqué, rien ne bouge en mise en page, seule
  une couleur de fond progresse.
  **VEILLE, CE QUI A ÉTÉ REGARDÉ** : socle navigateur (web.dev/baseline/2026 et le digest de mai) — anchor
  positioning est désormais Baseline et donné à 81,67 % par caniuse, ce qui fait passer les popovers partenaires
  du statut de pièce exotique à celui d'enrichissement raisonnable sous @supports ; `:open`, les requêtes de
  style de conteneur et `shape()` entrent aussi dans le socle et sont notés au backlog. Filière karting
  (hrtdriver.com, sodikart.com) : le premier affiche un bloc « Results by the numbers » dont les quatre
  compteurs sont à 0 pour la saison, contre-exemple utile ; le second ne publie aucun chiffre agrégé et prouve
  par le fil des résultats. Ingénierie issue de la F1 (williamsgptech.com, primé) : l'héritage y sert de socle
  de crédibilité en une ligne chiffrée (« 05 décennies ») et non d'anecdote, et un bloc « Why work with us »
  en quatre arguments précède l'appel à l'action — deux transpositions notées, la seconde en attente de
  l'accord de Thomas. Catégorie sport des sites primés relevée pour les prochaines veilles.
  **ÉLÉMENT DE RÉPONSE À UNE QUESTION EN ATTENTE** : la nouvelle fonction CSS `contrast-color()` (Baseline
  avril 2026) ne règle PAS la question du contraste de l'or sur fond clair : elle renvoie un noir ou un blanc
  de contraste, pas un or plus foncé. La recommandation du 15/07 (or foncé #8F661A réservé aux petits labels
  Bebas sur fond clair) reste la bonne réponse, toujours en attente de l'accord de Thomas.
  **VÉRIFS** : audit iframes 5 pages × 1280 et 375 px = 0 débordement au rectangle, 0 ratio d'image faux,
  0 erreur, largeur de document égale au viewport partout ; console vide ; captures headless du 47 à 0, 50 et
  100 % de remplissage sur les deux pages (le remplissage part bien de la gauche, le « 4 » plein et le « 7 »
  en contour à mi-course) ; comportement en `prefers-reduced-motion` vérifié au drapeau navigateur.
  ⚠️ Rig : le pane est resté `visibilityState: hidden` / `innerWidth: 0` toute la session ET l'extension Chrome
  connectée était injoignable, donc aucune des deux recettes habituelles de preuve d'une animation liée au
  scroll n'était disponible. Confirmé au passage, et à retenir : **`requestAnimationFrame` ne s'exécute PAS
  sous `--virtual-time-budget` en Chrome headless** (testé isolément : le `setTimeout` passe, le rAF non), ce
  qui explique pourquoi les timelines n'y suivent jamais un scroll programmatique. Preuve obtenue en deux
  temps à la place : l'objet ViewTimeline est bien attaché à l'animation et sa plage est lue par le moteur
  (`animation-timeline: view(), view()`, plage `entry 40% cover 75%`, progression calculée), et le rendu est
  contrôlé par captures en forçant le remplissage à des valeurs intermédiaires.

- 2026-08-02 (routine, AXE B : CORRIGER, dimension auditée = ACCESSIBILITÉ) : T7 non monté, travail sur clone
  GitHub dans le scratchpad. Faute d'axe-core hors ligne, harnais d'audit maison passé sur les 5 pages
  (contraste calculé fond réel compris, alt, hiérarchie de titres, landmarks, noms accessibles, ids et aria-*,
  tabindex, focusables dans un aria-hidden, cibles tactiles WCAG 2.5.8, débordements) à 320 / 360 / 375 / 390 /
  414 / 560 / 768 / 1024 / 1280 / 1680 px.
  **DÉFAUT PRINCIPAL, WCAG 1.4.10 (Reflow) : le site perdait du contenu sur petit écran, sans que rien ne le
  signale.** Depuis le passage de body en `overflow-x: clip` (27/07), un débordement horizontal n'est plus
  défilable mais CLIPPÉ : le contrôle habituel `scrollWidth > innerWidth` renvoie 0 alors que le contenu est
  bel et bien rogné, et les audits précédents concluaient « 0 débordement » à tort. Nouveau contrôle retenu :
  comparer le rectangle de CHAQUE élément au viewport. Quatre débordements réels, tous corrigés :
  (1) **nav des 5 pages** : sous ~372 px, logo + liens + bouton dépassaient et « Devenir partenaire » était
  coupé, y compris à 360 px (largeur Android très courante) ; palier `@media (max-width: 384px)` ajouté
  (logo 30 px, gouttière 9 px, libellés .82rem, bouton resserré) ; vérifié : à 320 px la barre s'arrête à
  309 px. (2) **galerie de l'accueil** : la piste de grille restait bloquée à 363 px à cause du plancher
  `min-width: auto` des cases, alors que la colonne ne fait que 330 px à 375 px et 282 px à 320 px : photos,
  brackets et légendes étaient rognés sur TOUT téléphone de 414 px ou moins (un quart de l'image perdu à
  320 px) ; corrigé par `.galerie > * { min-width: 0 }`. (3) **contact.html** : le bouton e-mail sortait de
  14 px à 320 px (palier boutons à libellé long ajouté). (4) **404** : le bloc de contenu héritait du même
  plancher de 363 px et sortait des deux côtés (`min-width: 0`), et le « 404 » géant sortait de l'ÉCRAN sous
  390 px (plancher du clamp 6rem → 4.8rem ; son débordement hors colonne de texte, lui, est voulu et conservé,
  il reprend la respiration du desktop).
  **AUTRE DÉFAUT RÉEL : `.btn-marine` n'était défini que dans la feuille inline de l'accueil**, alors que
  contact.html s'en sert pour ses deux boutons principaux (adresse e-mail et handle Instagram) : ils
  s'affichaient en texte nu, sans aplat ni biseau, depuis la création de la page le 19/07. Règle remontée dans
  styles.css (et retirée de l'accueil, qui ne l'utilise pas). Balayage systématique lancé dans la foulée
  (classes employées par page vs règles réellement atteignables) : aucun autre cas ; restent `.nouveau`,
  `.lb-actif`, `.h2-part`, `.txt`, sans effet et sans conséquence, héritées de la page jeu.html retirée le 25/07.
  **AUSSI CORRIGÉ** : cibles tactiles des liens de nav, 20 à 22 px de haut en mobile pour un minimum de 24
  (WCAG 2.5.8), passées à 25 px par un retrait haut ; **lightbox** dotée d'une région vivante
  (`aria-live="polite" aria-atomic`) sur la scène, car au clavier le focus reste sur les flèches et changer
  d'image ne disait rien à un lecteur d'écran.
  **SAINS, vérifiés (rien à faire)** : 0 erreur console sur les 5 pages, 0 ratio d'image faux, alt complets et
  non génériques, hiérarchie de titres sans saut, landmarks présents, ids uniques, tous les `aria-labelledby`
  et `aria-controls` résolus, aucun focusable piégé dans un `aria-hidden` (la copie du marquee partenaires est
  correcte : conteneur masqué, `tabindex="-1"` et alt vides), tous les `target="_blank"` avec `rel="noopener"`,
  jeu de la 404 déjà clavier et déjà annoncé (`role=button` + `aria-live`), fermeture de la lightbox qui rend
  le focus à la vignette d'origine (revérifié). Après correctifs : 0 débordement sur 5 pages × 9 largeurs.
  **OBSERVATION LAISSÉE EN L'ÉTAT** : les métas des cartes disciplines (« National / X30 Senior »…) n'apparaissent
  qu'au survol ; le `:focus-within` prévu ne se déclenche jamais puisqu'aucun élément focusable ne vit dans la
  carte. Le texte reste lu par les lecteurs d'écran et s'affiche en permanence sous 900 px, mais un visiteur
  desktop au clavier seul ne le verra pas. Corriger supposerait de revenir sur le parti pris de design validé
  le 18/07, donc rien n'est touché : à trancher avec Thomas.
  ⚠️ Rig : pane `visibilityState: hidden` toute la session (seules les iframes à largeur explicite mesurent
  juste) ; les captures headless doivent NEUTRALISER les reveals (une capture prise en plein balayage du kicker
  fait croire à un texte tronqué, faux positif attrapé aujourd'hui) ; `launch.json` pointait encore vers le
  scratchpad de la session du 31/07 (restauré vers le T7 en fin de run).

- 2026-07-31 (routine, AXE A : AMÉLIORER, volet COMPLÉTUDE) : chantier « le site lisible par les machines »,
  suite directe de la veille du 26/07. Aucun pixel ne bouge : tout se joue dans le head, à la racine et dans
  le sitemap. (1) **/llms.txt** créé à la racine selon la spec llmstxt.org (H1, résumé en citation, contexte
  factuel, puis liens décrits des 4 pages publiques, contacts et notes) : quand un partenaire potentiel demande
  à ChatGPT, Perplexity ou aux AI Overviews qui est TPRacing, ils tombent sur un résumé écrit par nous plutôt
  que sur une lecture approximative du HTML. Contenu strictement tiré des pages existantes et des mentions
  légales (RNA, date de déclaration, bureau, disciplines, contacts), rien d'inventé, rappel explicite que le
  seul numéro du pilote est le 47 pour couper court aux numéros d'archives. 3,1 Ko, servi en text/plain.
  Signalé en commentaire dans robots.txt. (2) **Graphe de données structurées relié** : jusqu'ici chaque page
  déclarait son entité dans son coin, sans lien entre elles. L'association reçoit un @id
  (`/#association`), une entité **WebSite** (`/#site`, inLanguage fr-FR, publisher = l'association) est
  ajoutée à l'accueil, et les pages secondaires s'y raccrochent : Person du pilote relié à l'association par
  @id (+ url, nationalité), ContactPage en isPartOf du site, et **la page légale reçoit enfin son JSON-LD**
  (WebPage + about/publisher + dateModified) alors qu'elle était la seule sans données structurées.
  **Fils d'ariane** (BreadcrumbList) ajoutés sur les 3 pages secondaires : c'est ce que Google affiche à la
  place de l'URL brute dans les résultats. (3) **Sitemap corrigé** : les lastmod dataient tous du 21/07 alors
  que les 5 pages avaient changé le 27 (défaut réel, un lastmod qui ment fait ignorer le signal par Google) ;
  passés au 31/07, date des modifications du jour. VÉRIFS : les 8 blocs JSON-LD des 5 pages parsés un par un
  (0 erreur, types attendus), sitemap revalidé en XML, llms.txt et robots.txt servis en 200, audit iframes
  5 pages × 1280/375 = 0 débordement, 0 ratio d'image faux, 0 erreur JS, titres intacts ; console vide ;
  captures headless desktop (accueil) et mobile (pilote) conformes. ⚠️ Rig : le pane est resté
  visibilityState hidden / innerWidth 0 toute la session (mesures top-level fausses, seules les iframes à
  largeur explicite sont fiables), les reveals ne se déclenchent pas dans une iframe hors écran (opacité 0
  attendue, pas un bug), et Chrome headless clampe --window-size=390 à ~500 px, ce qui coupe le texte dans
  les captures mobiles : l'audit iframes fait foi.
  RAPPEL GROUPÉ DES QUESTIONS OUVERTES (le précédent datait du 20/07, donc 1 par semaine maximum respecté) :
  (a) contraste de l'or #D49726 sur fond clair, 2,38:1 pour les petits labels Bebas, reco = or foncé #8F661A
  réservé à ces textes-là, rien appliqué sans accord ; (b) contenus qui débloqueraient 7 idées déjà conçues :
  calendrier et résultats de la saison, paliers de partenariat chiffrés, citations de partenaires, un scan de
  la signature de Thomas, choix des casques/karts pour un hall of fame, anecdotes pour un pilote.html en deux
  actes ; (c) validation de principe pour la frise « ils ont commencé en kart » (faits publics, aucune photo).

- 2026-07-27 (après-midi, routine, AXE B : CORRIGER, dimension auditée = PERF / POIDS RÉELS) :
  première passe perf approfondie depuis l'élargissement. MESURES : analyse statique des ressources
  eager des 5 pages (script) + réseau réel (Performance API). CONSTAT MAJEUR : l'accueil pesait
  ~9,4 Mo au chargement dont 8,88 Mo pour la vidéo galerie, téléchargée SANS aucun scroll — l'attribut
  autoplay du markup lance le fetch dès le parse, avant que l'IntersectionObserver (qui gérait déjà
  lecture/pause) ait pu servir ; preuve réseau : 2 requêtes mp4 au load. CORRIGÉ : autoplay retiré du
  markup + preload="none" (le poster de marque s'affiche, zéro octet vidéo), observateur de chauffe
  à 600 px (preload passe à auto → buffer à l'approche), play()/pause() à 25 % de visibilité comme
  avant, reduced-motion = contrôles affichés. PREUVE après correctif : 0 requête mp4 au load, puis
  sonde currentTime = lecture fluide dès que l'onglet est visible (readyState 4, +0,5 s par 500 ms).
  AUSSI CORRIGÉ : 13 images sous la ligne de flottaison passées en loading="lazy" (~440 Ko différés :
  héritage ×3, disciplines ×2, partenaires-stickers, logo asso, karting-pluie/simu/feed sur pilote,
  logo blanc des 5 footers) — l'accueil ne garde en eager que intro + emblème hero + 2 logos nav ;
  et le LCP de pilote.html (hero simulateur) reçoit fetchpriority="high" (l'accueil l'avait déjà pour
  l'emblème). SAINS (vérifiés, rien à faire) : Korataki 400 déclarée mais jamais téléchargée (fonts
  à la demande = coût nul), 3 fonts préchargées toutes utilisées, paire de logos nav volontairement
  eager (swap transparent/solide instantané, 54 Ko), pages secondaires ~215 Ko, insta-slides toujours
  chargées au premier survol seulement, CSS 32 Ko gzippé par Pages. Audit final : 5 pages × 1280/375
  en iframes = 0 débordement, 0 ratio d'image faux, comptes lazy conformes ; console vide partout.
  ⚠️ LEÇON DE RIG : cette session, le pane ET l'onglet Chrome piloté restent visibilityState:hidden
  en continu (captures CDP sans affichage réel) → Chrome DIFFÈRE le chargement média d'un onglet
  jamais visible (networkState LOADING mais 0 octet), alors que les IO tirent bien pendant les
  frames de capture. Preuve de lecture obtenue en frontant le vrai Chrome 6 s par osascript
  (activate + active tab index) avec sonde setInterval posée avant, puis focus restitué à Claude.

- 2026-07-27 (routine, AXE A : AMÉLIORER) : deux volets.
  (1) RÉCUPÉRATION : le backlog de la veille du 21/07 (8 idées sourcées, workflow 6 angles) dormait
  NON COMMITÉ sur le T7 depuis le run du 21 — retrouvé dans le diff local au moment du git pull,
  réintégré au backlog avec annotations (jeu.html annulé depuis, text-wrap + Speculation Rules
  refaits indépendamment le 26/07 et cochés). Leçon confirmée : toujours commiter le Journal AVEC
  le changement, et regarder un diff local avant de l'écarter.
  (2) IMPLÉMENTÉ (item de veille commun aux 21 et 26/07) : LE DÉCOR SUIT LE SCROLL EN CSS NATIF.
  Les mots géants outline (Presse, 47 galerie, 47 parcours pilote) dérivent lentement (translate
  3 % → -3 % de leur largeur) pendant la traversée du viewport via animation-timeline: view() +
  animation-range entry/exit — la propriété translate est utilisée à part pour ne pas toucher au
  positionnement absolu. La ligne de course passe en animation-timeline: scroll(root) pur CSS
  (compositor) ; le listener JS des 5 pages ne sert plus que de repli (early return si
  CSS.supports). Gardes : @supports + prefers-reduced-motion (mots statiques ; la ligne reste
  masquée en reduced-motion comme avant).
  BUG DE FOND DÉBUSQUÉ PAR LA VÉRIF : body avait overflow-x: hidden, ce qui fait de body un
  SCROLL CONTAINER — les timelines view() se référaient à body (qui ne défile jamais) et
  restaient figées sur des valeurs géométriques constantes. Correctif : body passe en
  overflow-x: clip (clippe sans créer de scroll container, Baseline), avec le hidden conservé
  au-dessus en repli pour les très vieux navigateurs ; html garde son overflow-x: hidden.
  VÉRIFS (parcours du combattant instructif) : pane navigateur masqué toute la session (rAF gelé,
  timeout) → headless : les timelines s'y résolvent mais NE SUIVENT PAS un scroll programmatique
  sous virtual-time (elles ont bougé pendant le vol d'un smooth scroll d'ancre, preuve du câblage,
  sans se stabiliser) → PREUVE FINALE dans le Chrome connecté : onglet d'abord en arrière-plan
  (timelines INACTIVES, currentTime null — un onglet caché fige tout), une capture fronte
  l'onglet et tout s'anime : scaleX de la ligne = 0,550 à 55 % de scroll et 0,850 à 85 %
  (correspondance exacte), dérive mesurée 3 % (avant entrée) → 1,98 % (en traversée) → -3 %
  (après sortie). Audit final headless 5 pages × 1280/375 : 0 débordement (important après le
  passage à clip), 0 titre pathologique, 0 ratio faux, bloc speculationrules toujours présent ;
  console vide (accueil + pilote, vrai Chrome). Onglet de test fermé, cadres de test supprimés.
  Au passage : l'item @starting-style du backlog est réglé par la vérif (la fermeture de la
  lightbox fond déjà, hypothèse de veille fausse) ; corner-shape évalué puis REPORTÉ en
  connaissance de cause (bénéfice réel modeste vs risque de régression sur tous les composants
  biseautés dans le navigateur dominant).

- 2026-07-26 (routine, AXE C : S'ADAPTER, veille tendances) : premier jour de veille depuis
  l'élargissement de la mission. Workflow de 5 éclaireurs en parallèle (écuries hors F1 déjà vues /
  sites persos de pilotes / sites primés Awwwards-CSSDA / tendances webdesign 2026 / nouveautés de la
  plateforme web), consigne stricte : aucune URL citée sans avoir été fetchée. ~35 patterns récoltés,
  distillés en 16 entrées sourcées au backlog (11 actionnables, 5 en attente de Thomas) + 4 écartés
  assumés. Sites les plus riches : audif1.com (next-race aux accordéons qui replient la trace),
  cadillacf1team.com (ScrambleText de chronométrage, analyse par circuit), charlesleclerc.com et
  collabcapitolium.fr (SOTD Awwwards, HTML inspecté), dorianepin.com / emilien-denner.com /
  theopourchaire.com (structuration des sites de pilotes), scroll-driven-animations.style et les docs
  Chrome/MDN/WebKit pour la plateforme. Pièges de veille consignés : verstappen.com=403,
  racingbulls.com=ECONNREFUSED, hyundai-motorsport.com=TLS mort, ferrari.com=rendu 100 % client,
  teamwrt.com n'existe pas (vrai domaine : w-racingteam.com) ; méfiance envers les blogs SEO « guide
  2026 » (un support navigateur faux corrigé par caniuse).
  IMPLÉMENTÉ LE JOUR MÊME (l'idée convergente de 3 terrains sur 5) : NAVIGATION INSTANTANÉE par
  Speculation Rules — bloc script type=speculationrules dans le head des 5 pages (prerender des liens
  internes, eagerness moderate) : au survol d'un lien de nav, la page cible est pré-rendue en
  arrière-plan et le morph du logo en View Transition se joue sans latence réseau ; les navigateurs
  sans support ignorent le bloc (rien à dégrader). Garde-fou ajouté dans le script d'intro de
  l'accueil : une page pré-rendue (document.prerendering) saute l'intro et pose le drapeau de session
  (un pré-rendu = le visiteur navigue déjà dans le site). BONUS TYPO du même lot : text-wrap: balance
  sur h1/h2/h3 et text-wrap: pretty sur les paragraphes (fini le mot orphelin en dernière ligne ;
  valeurs ignorées par les navigateurs anciens, risque zéro).
  Vérifs : audit 5 pages × 1280 et 375 en iframes fraîches (bloc présent + JSON valide partout,
  0 débordement, 0 titre pathologique, 0 ratio d'image faux), hero toujours sur 2 lignes, intro jouée
  puis retirée normalement, console vide, HTMLScriptElement.supports('speculationrules')=true dans le
  pane. NB honnête : le pré-rendu effectif n'est PAS observable dans le pane piloté (DevTools attaché
  inhibe le preloading, activationStart=0 même après survol réel) — la syntaxe est conforme aux
  exemples MDN/Chrome et le mécanisme est un pur hint sans risque. Prod smokée après push : 5 pages en
  200, bloc et règles text-wrap en ligne. T7 non monté → travail sur clone frais depuis GitHub.

- 2026-07-25 (soir, demandes Thomas : retrait de la page Réflexes + feed Insta à jour) :
  (1) PAGE RÉFLEXES RETIRÉE (« ça en fait trop, laisse juste sur la page 404 ») : jeu.html et
  og-jeu.jpg supprimés, liens « Réflexes » retirés de la nav et des pieds de page des 5 pages,
  carte d'appel « Pit stop » et son CSS retirés de l'accueil, entrée sitemap supprimée, sélecteurs
  orphelins purgés de styles.css, bloc « Défier un ami » (qui pointait vers l'URL supprimée) retiré
  de reflexes.js. Le jeu VIT toujours sur la 404 (portique + reflexes.js + styles .depart partagés
  dans styles.css) : testé en local, allumage + JUMP START OK, console vide.
  (2) FEED INSTA MIS À JOUR à la demande : nouveau post du 21/07/2026 repéré sur
  @thomaspaponeracing (shortcode DbDIlw9DNT-), « Retour sur mon premier roulage en Caterham ! »
  au circuit d'Alès : carrousel de 5 slides (4 photos + 1 vidéo onboard, slide 4). Les 5 visuels
  récupérés en pleine résolution via le Chrome connecté (recette presse-papiers), self-hébergés en
  WebP 720 (assets/insta/post-2026-07-21*.webp, ~350 Ko dont l'essentiel chargé au survol
  seulement) ; le poster de la slide vidéo sert d'image fixe dans le défilement au survol.
  Tuile insérée en tête de grille (3 posts + « Tout voir »), reveals ré-échelonnés 0/1/2/3.
  BONUS : la tuile « Tout voir » qui ouvrait seule la 2e rangée en 4:5 à côté de deux cases vides
  passe en bandeau pleine largeur dans ce cas (règle :nth-child(3n+1), même traitement que le
  mobile) : la grille reste équilibrée quel que soit le nombre de posts. Vérifs : 5 pages × 375 et
  1280 (0 débordement, 0 ratio faux, 0 lien Réflexes résiduel), captures grille desktop + mobile,
  console vide, prod smokée après push.

- 2026-07-25 (routine, AXE B : CORRIGER, dimension auditée = LIENS INTERNES ET EXTERNES) : première
  passe complète sur les liens depuis leur mise en place. Périmètre : 6 pages, 111 assets référencés,
  36 liens externes, ancres, pieds de page, nommage accessible.
  CE QUI EST SAIN : aucun lien interne cassé, aucune ancre morte (y compris les ancres cross-page
  index.html#association / #partenaires depuis les 5 autres pages) ; les 111 assets référencés
  (images AVIF/WebP + variantes 760 px, polices, JS, vidéo, favicons, manifeste) répondent 200 EN PROD
  (contrôle utile : GitHub Pages est sensible à la casse, pas le Mac) ; les 12 sites de partenaires
  répondent 200 ET appartiennent toujours à la bonne entreprise (titres de page relus un par un, pas
  seulement le code HTTP : un domaine expiré ou parké répond 200 lui aussi) ; les 2 articles du
  Progrès sont en ligne avec les bons titres ; les 2 posts Instagram liés existent toujours ; tous les
  liens externes ont target=_blank + rel=noopener ; canonical et og:url cohérents sur les 5 pages
  indexables, 404 en noindex, sitemap à jour (jeu.html inclus), mailto correctement encodé.
  NB : LinkedIn (999) et Facebook (400) renvoient des codes anti-robot en ligne de commande, ce n'est
  pas une rupture de lien ; les 2 reels MyCitee sont en ligne (compte et dates confirmés) mais leur
  légende n'est plus relisible hors session connectée (mur de connexion) — l'intitulé Partie 1 / 2
  avait été vérifié le 16/07.
  CE QUI A ÉTÉ CORRIGÉ LE JOUR MÊME : (1) le pied de page de la 404 ne proposait AUCUN lien vers
  l'accueil : la rangée avait été copiée de l'accueil, qui omet légitimement « L'association »
  puisqu'on y est déjà — lien ajouté, la règle « le pied omet la page courante » vaut maintenant sur
  les 6 pages ; (2) la page mentions légales se liait À ELLE-MÊME dans sa ligne de bas de page (seule
  page du site dans ce cas) : passée en texte simple ; (3) l'intitulé « L'association » menait à deux
  cibles différentes selon qu'on cliquait dans la nav (index.html#association) ou dans le pied
  (index.html) : même libellé, même destination désormais, sur les 4 pages concernées ; (4) sur
  contact.html deux liens « Devenir partenaire » coexistaient avec des destinations différentes (la
  section partenaires depuis la nav, un email pré-rempli depuis le bandeau) : aria-label
  « Devenir partenaire, nous écrire par email » sur le bouton, sans toucher au libellé affiché ;
  (5) assets/logo-couleur.png (15 Ko) publié sans être référencé nulle part (c'était le fichier source
  de l'icône PWA) : retiré du dépôt, récupérable dans l'historique git.
  Vérifs : re-audit complet (0 défaut restant), 6 pages × 375 et 1280 en iframes fraîches (0
  débordement, 0 ratio d'image faux, pied de page non débordant), console vide, captures des deux
  pieds de page modifiés. ⚠️ Le pane navigateur était masqué (viewport 0×0, mesures fausses) →
  contrôle visuel fait en Chrome headless via une page-cadre qui fait défiler la page en iframe
  jusqu'au pied. NB : le T7 n'était pas monté, travail sur un clone frais depuis GitHub.

- 2026-07-21 (routine, AXE A : rubrique « Réflexes », entrée de Journal rétablie le 25/07 — le commit
  277951c n'avait pas journalisé) : le test de réaction façon départ F1 vivait caché sur la page 404,
  où presque personne ne le voit. Promu en VRAIE page `jeu.html` (nav des 6 pages, sitemap 0.5,
  canonical + carte OG dédiée og-jeu.jpg, JSON-LD), logique sortie dans assets/js/reflexes.js et
  partagée avec la 404 qui garde une version courte, et carte d'appel ajoutée sur l'accueil.

- 2026-07-21 (décision Thomas) : ROUTINE ROUVERTE EN PERMANENTE ET MISSION ÉLARGIE. La clôture du
  20/07 est annulée : Thomas veut un site « continuellement mis à jour, corrections de défauts,
  adapté aux tendances, avec des audits sur internet sur ce qui pourrait être ajouté/modifié ».
  Le prompt de la tâche planifiée amelioration-site-tpracing a été réécrit en programme
  d'amélioration continue à 3 AXES en rotation (pas le même axe plus de 2 jours de suite,
  au moins 1 jour d'audit et 1 jour de veille par semaine, axe du jour noté au Journal) :
  A. AMÉLIORER : backlog design + complétude, comme avant.
  B. CORRIGER : audit approfondi d'une dimension en rotation (perf, a11y, SEO + résultats Google
  réels, liens internes/externes, rendu 320→1680, console, qualité visuelle par captures zoomées)
  puis correction le jour même.
  C. S'ADAPTER : veille tendances sur internet avec de vrais liens (écuries F1/F2/F3/GT, pilotes
  pros, karting, studios primés Awwwards/FWA/CSSDA, tendances webdesign, nouveautés CSS/JS
  utilisables en statique) → idées concrètes sourcées au backlog, une implémentée si actionnable ;
  les tendances s'adaptent à la charte, jamais l'inverse.
  Garde-fous inchangés : interdiction de s'auto-supprimer/désactiver, items bloqués sur Thomas
  préparés hors ligne seulement, jamais de changement gratuit (« RAS » au Journal sinon), rappel
  des questions ouvertes au plus 1×/semaine. Les questions en attente listées dans la clôture
  du 20/07 restent valables telles quelles.

- 2026-07-20 (routine, dernier jour : cartes OG secondaires + audit final de clôture) : deux volets.
  (1) CARTE OG CONTACT : contact.html partageait la carte de l'accueil (« Le volant se transmet »,
  hors sujet) et mentions-legales.html n'avait AUCUNE image de partage. Créé og-contact.jpg
  (1200×630, 100 Ko) avec la recette exacte des cartes du 12/07 : photo partenaires-stickers
  (kart 324, stickers sponsors lisibles = le bon visuel pour un message « partenariat »), rognage
  auto du cadre incrusté, étalonnage duotone marine dominant / or désaturé (gamma 1,5 pour tirer
  les murs clairs vers les médiums marine), scrim bas, logo BLANC, kicker Bebas pastille damier
  « Partenariat / Presse / Questions », titre Korataki « Parlons de / votre projet », filet or +
  url, liseré or. Câblé og:image + twitter:image + alt sur contact.html ; mentions-legales.html
  complétée (og:description, og:image carte accueil générique, bloc twitter entier).
  (2) AUDIT FINAL 5 PAGES (workflow 5 dimensions : SEO/meta, intégrité des références, liens
  externes, charte, a11y — chaque constat contre-vérifié par un agent chargé de le RÉFUTER) :
  6 défauts confirmés, 4 réfutés (dont 2 déjà en cours de correction et SMD→Hexagone = choix
  documenté). Corrigés : twitter:description manquant sur contact (ajouté aussi sur mentions) ;
  lastmod du sitemap périmés (passés au 20/07) ; embleme-3d.png ORPHELIN de 210 Ko publié pour
  rien (retiré du dépôt, récupérable dans l'historique git — seul le .webp est utilisé) ;
  16 logos nav/footer sans width/height (attributs anti-layout-shift ajoutés sur les 5 pages) ;
  pile print « Bebas Neue » hors charte (→ 'Arial Narrow' comme les autres piles) ; aria-label
  posé sur des <div> génériques .foot-reso (nommage interdit par ARIA sur generic → role="group",
  5 pages). ⚠️ PIÈGE DÉCOUVERT en vérifiant : ajouter width/height à un logo dont le CSS ne fixe
  que la hauteur rend l'attribut width EFFECTIF (logo footer étiré 585×52) et, combiné à
  max-width:100 % dans un parent dimensionné par le contenu, la largeur peut s'effondrer à 0 →
  correctifs `nav .logo img, footer img { max-width:none }` + `footer img { width:auto }`, et
  l'audit des ratios exclut désormais les images en object-fit:cover (recadrage éditorial voulu).
  Vérifs : 5 pages × 1280 + 375 en iframes fraîches (cache CSS busté par fetch reload — un
  ?fresh sur la PAGE ne rafraîchit PAS la feuille de style), 0 ratio faux, 0 débordement,
  console vide, footer 61×52 et nav 97×42 mesurés au pixel. Prod smokée après push.

  🏁 CLÔTURE DE LA ROUTINE (20/07/2026 = terme fixé) : la tâche planifiée quotidienne
  amelioration-site-tpracing s'arrête aujourd'hui. En 11 jours : site passé de 2 à 5 pages
  (+ 404 de marque), DA charte sur-mesure (emblème 3D, intro circuit, stings AE), bande
  partenaires, presse, feed Insta automatisé (la routine maj-feed-insta-site CONTINUE, elle),
  mentions légales, PWA, impression, accessibilité, perfs (AVIF+srcset, 0 requête tierce),
  SEO (indexé, cartes OG partout). TOUT ce qui reste au backlog attend une décision ou un
  contenu de Thomas : palmarès (chiffres), actus/prochaine course (dates), paliers de
  partenariat (montants), citations partenaires, scan de signature, photos casques/machines,
  anecdotes pilote, contraste de l'or sur fond clair (question du 15/07 toujours ouverte).
  Pour relancer une amélioration : répondre à ces questions puis recréer une tâche planifiée
  (ou demander la modif directement, le dépôt du T7 + ce fichier restent la référence).

- 2026-07-19 (routine, complétude : impression / PDF de marque) : nouvel item ajouté au backlog
  puis réalisé. Le site n'avait aucune feuille d'impression : un partenaire ou un journaliste qui
  imprimait le contact ou la page pilote (ou faisait « Enregistrer en PDF ») obtenait les fonds
  marine sombres gourmands en encre, du texte blanc invisible sur papier et tout le décor animé.
  Ajout d'un bloc `@media print` dans styles.css (aucun asset, ~130 lignes CSS) : (1) fond blanc,
  encre sobre, coupe des dégradés/trames/ombres/halos ; (2) en-tête = papier à en-tête, nav
  statique avec le LOGO COULEUR sur filet or, liens de nav masqués ; (3) sections sombres
  (.hero, .hero-pilote, .hero-404, .section-marine, .contact-tete, .legal-tete, .contact-cta)
  repassées en encre sur blanc, titres marine, accent or conservé en couleur ; (4) décor retiré
  (#intro, marquee, mots géants, bande origines, emblèmes filigranes, ligne de course, lightbox,
  numéro 47 déco, vidéo) ; (5) tous les `.rvl` forcés visibles (sinon le contenu sous la ligne de
  flottaison, jamais révélé au scroll, manquerait à l'impression) ; (6) boutons neutralisés
  (contour lisible au lieu d'aplats), liens de contenu suivis de leur URL, cartes/photos non
  coupées entre deux pages ; (7) pied de page sobre + rappel « tpracing.github.io / email » en
  Bebas. La section « Derniers posts » Instagram est laissée telle quelle (domaine de la routine
  maj-feed-insta-site). Vérifié en simulant le média print à l'écran (bascule de la condition
  @media) sur les 5 pages : en-tête logo couleur + filet or, titres marine, corps foncé, footer
  blanc + URL, 18 logos partenaires en bande figée, 0 débordement horizontal ; rendu de contact
  capturé (letterhead propre). Confirmé que l'écran n'est pas affecté (hero sombre, nav fixe,
  console propre). BONUS corrigé au passage : le Facebook du pilote (affiché sur la page) manquait
  dans le `sameAs` du JSON-LD Person → ajouté (6 profils, JSON revalidé).

- 2026-07-19 (demandes Thomas : page contact + réseaux au footer partout) : (1) NOUVELLE PAGE
  `contact.html` dans la DA du site : en-tête marine (kicker damier « Contact », h1 « Parlons de votre
  projet » à l'échelle des pages secondaires, groupes insécables), 3 cartes blanches liseré or (Par
  email / Sur LinkedIn avec note « réponse la plus rapide » / Sur les réseaux @thomaspaponeracing),
  bandeau CTA marine « Envie d'écrire la suite avec nous ? » (mailto pré-rempli objet « Partenariat
  TPRacing » + lien vers le mur partenaires), ligne info asso + lien mentions légales. PAS de
  formulaire : cohérent avec la politique zéro collecte. JSON-LD ContactPage, canonical, og:,
  sitemap (0.6). La section contact de l'accueil devient un PONT (bouton unique « Nous contacter »).
  (2) FOOTER UNIFIÉ : les 6 icônes réseaux carrées biseautées (Insta, TikTok, YouTube, Twitch,
  LinkedIn, Facebook) sont désormais au footer des 5 PAGES (décision Thomas 19/07, assouplit la
  séparation stricte des entités) — nuance conservée : LinkedIn pointe vers la PAGE ASSOCIATION sur
  les pages asso (accueil, contact, mentions, 404) et vers le PROFIL du pilote sur pilote.html ;
  CSS .foot-reso migré du <style> de pilote vers styles.css. (3) NAV : lien « Contact » sur les
  5 pages (visible aussi en mobile), actif sur la page. Vérifs : audit 5 pages × 8 largeurs (titres,
  débordements, 6 icônes présentes) = OK partout ; h1 contact = 1 ligne à 1280, 2 lignes propres en
  mobile ; captures desktop + mobile. Prod vérifiée, fichier Google intact.

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
- 2026-07-18 : Pilote — signature identitaire dans le hero (cohérence avec l'accueil). Avant, le hero
  de l'accueil avait son emblème 3D comme ancrage visuel fort, mais le hero pilote n'avait qu'une photo,
  sans élément de marque signature. Ajout du NUMÉRO DE COURSE 47 (le vrai numéro de Thomas) en grand
  contour or, posé DERRIÈRE la photo du simulateur (z-index 0 sous la grille) : le pilote passe devant le
  chiffre, effet de profondeur type carte de pilote motorsport. Parallèle thématique voulu : l'association
  se signe par son emblème, le pilote par son numéro. Le 47 se RÉVÈLE par un balayage gauche→droite au
  chargement (clip-path inset, écho du sting où l'or « se peint »), 1,05 s. Desktop : contour or opacity
  .42 qui bleede à droite (crop racé), hauteur du hero. Mobile 375 : version plus discrète (opacity .34)
  gardée au même ancrage bas derrière la photo, le haut du hero (kicker + titre) reste propre ; le 7 peeke
  en fin sliver à droite. Pur CSS + un seul <span> texte : ZÉRO nouvel asset, poids négligeable. Respecte
  prefers-reduced-motion (pas d'animation, numéro visible d'emblée). Vérifié desktop 1280 (numéro lisible
  derrière le pilote, pas de débordement, animation jouée) + mobile 375 (haut propre, accent bas discret,
  0 débordement horizontal), console vide. Fichier Google, sitemap et section « Derniers posts » intacts.
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
- 2026-07-17 (suite) : Sitemap, analyse approfondie après le doute de Thomas. Le détail GSC montre
  « Dernière lecture : 17/07/2026 » → Google EST passé relire après la resoumission, mais répond
  « Impossible de lire le sitemap » (0 page). Vérification au niveau octets du fichier servi : aucun
  BOM, XML valide, 200 en application/xml, identique pour l'UA Googlebot → le fichier est parfait,
  c'est le bug connu des propriétés GSC récentes sur *.github.io (statut erroné sur sitemap valide,
  se résout seul sous quelques jours/semaines, n'affecte PAS l'indexation — preuve : les 2 pages sont
  indexées et sortent en recherche). Remède appliqué : entrée SUPPRIMÉE (menu ⋮ du détail → Supprimer,
  purge l'état en cache) puis RESOUMISE à neuf (« Sitemap envoyé », ligne du 17 juil., saisie vérifiée
  à l'écran cette fois). À revérifier d'ici ~1 semaine ; si toujours « Impossible de lire » alors que
  tout est indexé, ignorer (cosmétique).
- 2026-07-17 (nuit) : Mentions légales + confidentialité (demande Thomas, complétude légale). Analyse
  d'abord : données OFFICIELLES tirées du JOAFE via l'API journal-officiel (TPRACING (THOMAS PAPONE
  RACING), RNA W012015296, déclarée préfecture de l'Ain le 15/12/2021, JO du 21/12/2021) et du dossier
  de création sur le T7 (CR-ListeDirigeant.pdf : Patrice président, Sophie trésorière, Thomas
  secrétaire). Décisions de Thomas : directeur de la publication = Patrice Papone ; adresse = commune
  seule (01330 Lapeyrouse, protège le domicile — l'adresse complète reste publique au JO mais pas mise
  en vitrine) ; contact = email asso + LinkedIn. Audit RGPD du site : AUCUNE collecte (pas de
  formulaire/compte/analytics/cookie → pas de bandeau requis) ; seul point noir = Inter chargée depuis
  Google Fonts (IP des visiteurs transmise à Google) → CORRIGÉ : Inter v20 auto-hébergée (police
  VARIABLE, un seul woff2 latin de 48 Ko couvre 400→700), liens googleapis/gstatic retirés des 3 pages
  → le site ne fait plus AUCUNE requête tierce (vérifié via performance.getEntriesByType : 0 requête
  externe sur les 3 pages). Page mentions-legales.html dans la DA (en-tête marine + kicker damier,
  titre Korataki, sections filet or : éditeur, contact, hébergeur GitHub, propriété intellectuelle,
  données personnelles, cookies, droit applicable ; slash — jamais de tiret décoratif), lien footer
  « / Mentions légales » sur les 4 pages, entrée sitemap (priority 0.3). Vérifié local desktop + mobile
  390 (0 débordement, console propre, Inter chargée localement) puis prod (~51 s : page, woff2, sitemap
  en 200, 0 googleapis, fichier Google intouché).
- 2026-07-18 : Intro au lancement du site (demande Thomas : « faisceaux lumineux de la charte,
  mouvements de vitesse derrière le logo »). Veille préalable sur Awwwards (préloaders primés +
  recherche motorsport) : codes retenus = fond sombre + logo centré + révélation < 2 s + sortie en
  wipe net + un accent couleur fort. Réalisation en CSS pur (pas de vidéo AE : un fichier vidéo
  devrait lui-même se charger, contre-productif pour une intro instantanée ; 0 asset ajouté, le logo
  blanc existant sert de pièce centrale). Chorégraphie ~2,2 s : voile marine profond + trame carbone,
  9 faisceaux inclinés à -6° (langage du marquee) qui filent derrière le logo — or dominant, 2 blancs
  bleutés, 1 fil rouge en micro-accent, 1 halo or large flouté (« passage proche ») — queues en
  dégradé + tête claire + halo box-shadow en mode screen ; le logo blanc se « résout » (blur 10px +
  scale 1.08 → net, recette des logo stings) ; à t≈1,25 s le dernier faisceau or épais semble jaillir
  du logo ; sortie à t=1,65 s = le voile remonte avec une lèvre diagonale (même pente que les
  sections), et les reveals du hero se déclenchent à cet instant précis (gate de l'IntersectionObserver)
  pour que l'entrée se joue sous les yeux du visiteur. Garde-fous : 1 fois par session (sessionStorage,
  décision AVANT le premier rendu par script inline dans le <head> → zéro flash), jamais en
  prefers-reduced-motion, scroll verrouillé pendant l'intro (classe sur <html>), suppression du DOM
  après sortie + failsafe 4 s, page d'accueil uniquement (l'entrée du site). Vérifié en local via gel
  d'animation (Web Animations API, frames à 650/700/1250 ms — d'abord jugés trop timides, faisceaux
  musclés : queues colorées plus tôt, halos, opacités relevées, 9 traits au lieu de 7) ; cycle complet
  desktop + mobile 390 : intro jouée puis retirée du DOM, scroll rendu, hero révélé, 0 débordement,
  console propre, rechargement sans re-jeu. Prod OK, fichier Google intouché.
- 2026-07-18 (v2, retours Thomas « trop Star Wars » + « logo principal qui se place à sa position ») :
  intro refaite en « tracé de circuit » : une piste OR se dessine en zigzag (SVG pathLength 1000 +
  stroke-dashoffset, 1,5 s, double tracé fin + halo flouté) parcourue par une voiture-lumière (comète
  = groupe SVG animateMotion SMIL, rotate="auto" pour orienter la traînée, MÊME durée/bézier que le
  dessin → la comète est pile au front du tracé ; gel de test = svg.pauseAnimations()+setCurrentTime,
  les SMIL n'apparaissent PAS dans getAnimations). L'EMBLÈME 3D (embleme-3d.webp, « celui en jaune »)
  se résout au centre puis GLISSE se poser exactement à sa place dans le hero (FLIP runtime : rect
  cible mesuré après avoir révélé .hero .visuel SANS transition — sinon la mesure attrape le décalage
  du reveal —, translate+scale centre à centre, même image donc atterrissage 1:1) ; le voile reprend
  EXACTEMENT le fond du hero → fondu de sortie sans couture. ⚠️ Bug corrigé : couper l'animation de
  résolution (animation:none) faisait retomber le logo sur opacity:0 → figer opacity/filter en inline
  AVANT. Timings : tracé 0,15→1,65 s, emblème 0,55→1,15 s, glissade 1,75→2,35 s, voile 2,25→2,65 s,
  reveals du hero câblés sur la sortie. Garde-fous inchangés (1×/session, reduced-motion, failsafe).
  Vérifié frames gelées (900/950 ms) + flux réel desktop et mobile 390 (intro jouée puis retirée,
  emblème hero visible opacity 1, 0 débordement, console propre). Prod OK.
- 2026-07-18 (session marathon, demande Thomas « améliore sans limite ») : sept chantiers.
  (1) PERF IMAGES : les 14 photos affichées passent en AVIF + repli WebP via <picture> (2,1 Mo →
  1,0 Mo, −53 %), poster vidéo et collage origines en WebP, jpg remplacés purgés du dépôt (les og-*
  restent en JPEG pour les crawlers sociaux), hero-2022/hero-course morts supprimés, width/height
  recalés sur les nouvelles dimensions, preload fetchpriority=high de l'emblème (LCP accueil + pièce
  de l'intro), lightbox corrigée pour résoudre currentSrc à l'ouverture (sinon elle rate l'AVIF des
  images lazy). (2) CONTACT : section dédiée sur l'accueil avant le footer (LinkedIn or + email marine
  — .btn-blanc invisible sur fond clair, .btn-marine créé), emblème filigrane. (3) DISCIPLINES : méta
  Bebas au survol (bandeau dégradé bas de photo, toujours visible en mobile/reduced-motion) — contenus
  sourcés des posts et de la presse. (4) DIAGONALES : pente unique 2.3vw alignée sur le marquee
  (1,3 deg) au lieu du 42px fixe qui variait selon la largeur. (5) PARALLAX bande origines
  (background-position piloté au scroll, IObserver + rAF, coupé reduced-motion). (6) TEASER PILOTE :
  montage duotone sur mesure depuis IMG_3445 (frontal grille, plaque 47) — recadrage 4:5, duotone
  marine→or (colorize midpoint 150 + 12 % d'original + vignette + grain), remplace le poster Insta.
  (7) SEO : JSON-LD de l'asso enrichi des données officielles (legalName JOAFE, RNA W012015296,
  adresse commune, email, logo, président) + icônes réseaux « carte de visite » au footer pilote
  (5 SVG maison carrés biseautés or). ⚠️ Leçons infra : le T7 s'est déconnecté en plein git add -A —
  cause = hachage des 2,6 Go de rushes NON SUIVIS (« TPRacing Vidéo Site/ ») ; .gitignore complété
  (rushes + .aep + ._*) pour que ça ne se reproduise plus ; index.lock orphelin à supprimer après un
  crash. Tout vérifié en local (pictures 200, AVIF servi, lightbox, parallax, overflow 0, console
  propre) puis smoke test prod complet : 12 URL en 200, fichier Google intouché.
  RESTE AU BACKLOG (bloqué sur décisions/contenus de Thomas) : palmarès (chiffres à valider), actus
  (contenus à valider), contraste de l'or sur fond clair (question du 15/07 toujours ouverte),
  sting 1080 Insta (asset social, hors site), emblème 3D animé en hero (rendu redondant par l'intro).
- 2026-07-18 (2e salve « sans limite ») : (1) SRCSET RESPONSIVE : variantes 760 px AVIF+WebP pour les
  13 grandes images (~25 Ko l'image au lieu de ~80) avec sizes par rôle — le mobile télécharge ~3× moins,
  et même les écrans 1x en profitent ; la lightbox repasse en pleine taille explicite (sinon elle
  hériterait de la variante réduite du srcset). (2) scroll-margin-top 76 px sur les sections ancrées
  (fini le titre caché sous la nav fixe). (3) Compteurs de la bande chiffres (2021/3/1) : montée façon
  tableau de bord au premier passage (rAF + ease-out cubic, coupé reduced-motion). (4) aria-current sur
  le lien de nav actif. (5) STING CARRÉ 1080 (dernier item backlog réalisable) : les 4 pièces du logo
  reconstruites depuis logo couleur.ai (fitz zoom 20, séparation par couleur, RACING au gap, canvas 2560²
  auto-centré → placement simplifié), sting_1080.jsx adapté de sting3 (comp 1080×1080, échelle 36,6 %,
  traits de vitesse et reflet recalés), rendu AE (⚠️ le DoScript envoyé pendant le boot d'AE est avalé
  sans erreur → renvoyer une fois l'app prête ; le module de rendu FR par défaut sort directement un
  .mp4 H.264 yuv420p social-ready, 827 Ko pour 3,4 s) ; frames de contrôle vérifiées (monogramme + or
  peint + RACING balayé + reflet). Livré : Communication/Réseaux/tp_sting_1080.mp4 ; script et pièces
  archivés avec les autres stings. Prod re-smokée après chaque salve, fichier Google intouché.
- 2026-07-18 (3e salve, retours Thomas) : (1) BUG « inadmissible » du hero pilote corrigé : le reset CSS
  ne posait pas height:auto sur les img → les nouveaux attributs width/height des <picture> étiraient la
  photo du simu (1867 px de haut), gonflaient la grille align-items:end et poussaient le texte hors
  écran (reveals jamais déclenchés). Fix : `img { height: auto }` global + `picture { display: contents }`.
  Leçon retenue : passe COMPLÈTE des 4 pages (desktop + mobile + audit automatique des ratios de chaque
  image affichée vs naturel) désormais OBLIGATOIRE avant chaque push — l'audit tourne en JS dans la page.
  (2) FACEBOOK du pilote ajouté (https://www.facebook.com/thomas.pne.9/ — fourni par Thomas ; vérifié :
  pas de page « thomaspaponeracing », et le « TPRacing » à 1,6 k abonnés sur FB = Tristan Pena Racing,
  homonyme US à ne JAMAIS lier) : chip dans la rangée réseaux du hero + 6e icône carte-de-visite au
  footer (rect arrondi + f, style stroke cohérent). (3) SITE VIVANT (benchmark landonorris.com : carte
  next-race à tracé de circuit — idée notée pour la future section actus —, marquees géants, signature
  accent, motifs continus) → pack appliqué partout : LIGNE DE COURSE de progression sous la nav (3 px or,
  pointe damier, scroll passif, cachée en reduced-motion), ::selection or/marine, scrollbar marine/or,
  reveals variés (photos .frame en léger dé-zoom 1.045→1, kickers balayés en clip-path façon drapeau),
  sweep lumineux au survol des cartes partenaires/presse, marquee en pause au survol. ⚠️ Pièges notés :
  injecter du JS « avant le premier <script> » peut tomber sur le script inline du head (index) → ancrer
  sur le contenu ; le serveur local sert du cache → cache-buster ?v= pour vérifier ; scroll smooth =
  scrollY encore à 0 juste après scrollTo (mesurer en instant). Vérifié : 4 pages × desktop/mobile,
  audit ratios 0 anomalie, overflow 0, console propre, prod OK (ligne présente sur les 4 pages).
- 2026-07-18 (4e salve) : détails signalés par Thomas corrigés (vrai « f » Facebook plein dans le carré
  arrondi ; handles @thomaspaponeracing en nowrap + taille adaptative sur les 2 tuiles — index et
  pilote). Puis BENCHMARK EN FAN-OUT (workflow 4 agents parallèles : sites d'équipes F1, sites perso de
  pilotes, micro-interactions Awwwards, conversion sponsors → 32 idées, 10 retenues, toutes sourcées —
  liste ajoutée au backlog). 3 idées sans dépendance éditoriale IMPLÉMENTÉES : (1) TRANSITIONS DE PAGE
  en volet diagonal (View Transitions cross-document : @view-transition + clip-path incliné dans l'axe
  charte, logo nav morphé entre les pages via view-transition-name, coupé en reduced-motion, dégradation
  propre hors Chrome/Safari récents) ; (2) la 404 devient un TEST DE RÉACTION « lights out » : portique
  marine 5 feux rouges, allumage séquentiel, extinction aléatoire, chrono ms + verdicts (fenêtre départ
  F1 200-300 ms), détection JUMP START, accessible clavier, devise en clôture « Ce tracé ne mène nulle
  part. Le volant, lui, se transmet. » ; (3) MARQUEE ASSERVI AU SCROLL : rAF + vélocité lissée,
  cisaillement ±3,5° qui retombe par interpolation, pause au survol, l'animation CSS reste le fallback
  reduced-motion. Vérifs : jeu 404 joué (vrai départ + faux départ), marquee sondé (translateX avance,
  skew réagit), console propre, overflow 0, prod OK. ⚠️ Timers du Browser pane throttlés en arrière-plan
  → les mesures de réaction dans le pane sont faussées (~2 s), le jeu est sain.
- 2026-07-18 (5e salve, retour Thomas « les photos c'est un peu le bazar ») : SYSTÈME D'IMAGES unifié.
  (1) Héritage : fin des décalages irréguliers (12 %/5 %) et des 3 hauteurs libres → composition
  éditoriale nette : Le Mans 1980 en bandeau 16/9 pleine largeur, puis les deux photos de Patrice côte
  à côte en 4/3 strict, gouttière constante 22 px (mobile : pile en 3/2). (2) Galerie : gouttières
  égalisées (26/24) + légendes verrouillées sur une ligne (ellipsis) pour des rangées stables.
  (3) Parcours pilote : les 3 photos d'étapes passent au même 4/3 (object-fit cover) et suppression du
  hack inline max-height sur la photo simu. Ratios vérifiés au pixel (1.33/1.33/1.33 ; héritage
  428×241 + 2×203×152), overflow 0, prod OK.
- 2026-07-18 (routine, complétude PWA) : le site avait un jeu de favicons complet (posé le 10/07) mais
  aucun manifeste web, donc « ajouté à l'écran d'accueil » sur mobile donnait une icône/nom générique
  et pas de splash de marque. Ajout de `assets/site.webmanifest` (name « TPRacing — Thomas Papone Racing »,
  short_name TPRacing, display standalone, background #F6F7FC = tuile des icônes, theme_color #1E2635 marine
  = cohérent avec le meta theme-color, categories sports/motorsport, description « Le volant se transmet »).
  Pour un manifeste réellement installable il fallait une icône 512 : générée sur mesure en PIL depuis
  logo-couleur.png, assortie AU PIXEL à l'icon-192 existante (carré plein #F6F7FC, logo à 68 % de large
  centré → padding 16 %/20 %, dans la zone de sécurité maskable) — icon-512.png 30 Ko, LANCZOS net.
  Manifeste déclaré (purpose any + maskable) et lien `rel="manifest"` ajouté sur LES 4 pages (chemins
  relatifs sur index/pilote/mentions, root-relatif sur la 404). Aucun impact visuel (changement `<head>`
  + 1 asset). Vérifié local : manifeste parsé par le navigateur, 4 icônes en 200, JSON valide,
  content-type application/manifest+json, lien présent sur les 4 pages, overflow 0, console propre. Prod :
  manifeste + icône 512 en 200 (bon MIME), liens en place, fichier Google intouché. NB infra : T7 non
  monté → travail sur clone frais depuis GitHub, poussé de là (faire `git pull` sur le T7 avant la
  prochaine modif locale).
- 2026-07-18 (audit charte demandé par Thomas, puis correctif validé) : audit complet des 4 pages
  (desktop 1280, tablette 768, mobile 375) : polices 100 % conformes (Korataki titres / Bebas labels /
  Inter texte, zéro retombée sur police système), couleurs charte exactes, aucun débordement ni texte
  rogné, aucun mojibake, espaces fines avant les « : » correctes. Seul écart trouvé : 24 tirets
  cadratins « — » résiduels (titres d'onglet, og:title/og:image:alt, JSON-LD, copyright des 4 footers,
  2 phrases des mentions légales) + 1 dans un commentaire CSS — incohérents avec la règle maison
  « slashes, jamais de tiret ». Correctif validé par Thomas : les 25 « — » remplacés par « / »
  (footer désormais « © 2026 TPRacing / Thomas Papone Racing », cohérent avec « France / Mentions
  légales » juste dessous). JSON-LD revalidé, zéro tiret restant vérifié en local puis en prod sur
  les 4 pages, console propre, fichier Google intouché. Note DA consignée : sur la bande origines,
  rouge #E06450 et vert #6FBA9C (versions éclaircies des couleurs charte pour lisibilité sur marine
  sombre) — choix assumé, seul endroit où le vert apparaît.
- 2026-07-18 (retour Thomas : « le titre est sur 5 lignes ») : composition des titres reprise partout.
  Cause : Korataki est une police très large ; dans les colonnes de grilles (hero 2 colonnes, section
  partenaires), les grands titres n'avaient pas la place de poser deux mots par ligne → empilement
  1 mot/ligne (le hero faisait 4 lignes en desktop, le h2 partenaires 5 lignes à 1024 et sur mobile).
  Correctifs, sans changer aucun texte : (1) HERO : « Le volant / se transmet » sur 2 lignes forcées
  (groupes insécables .hl + <br>), taille calibrée sur la ligne la plus large (« SE TRANSMET » ≈ 13,3×
  la taille de police) : min(3.25vw, 2.5rem) en 2 colonnes, min(6.2vw, 2.5rem) en 1 colonne ; grille
  élargie 1.22fr/.78fr ; l'emblème 3D absorbe le reste (max-width:100%, ~360px à 1680). Le nowrap fixe
  le min-content du track → le layout s'auto-ajuste, zéro débordement possible. (2) PARTENAIRES :
  h2 en 3 groupes insécables (« Des partenaires / embarqués / dans l'histoire »), min(2.4vw, 2rem) /
  mobile min(4.7vw, 2rem). (3) PILOTE : titre progression en 3 groupes insécables + h2 mobile
  min(4.75vw, 1.5rem). (4) MENTIONS : mots longs français (« confidentialité », « intellectuelle »)
  bornés (h1 min(4.6vw, 1.7rem) sous 560, h2 min(5vw, 1.05rem) sous 360). (5) GLOBAL : h2 mobile
  min(5.8vw, 1.5rem) (⚠️ déclaré APRÈS la règle générale h2, sinon la cascade l'écrase) + règle
  utilitaire .hl { white-space: nowrap }. Vérifs : audit programmatique des ~40 titres × 8 largeurs
  (320→1680) × 4 pages via iframes = zéro empilement, zéro débordement ; captures visuelles hero
  desktop/mobile + partenaires desktop/mobile. Pièges outillage consignés : le Browser pane ne peint
  plus quand il est masqué (visibilityState hidden → transitions gelées, captures blanches — re-fronter
  l'onglet) ; Chrome headless --window-size=375 clampe la fenêtre à ~500px (captures mobiles fausses) ;
  les sections en vh s'étirent dans les captures pleine hauteur ; le serveur local sert la CSS en cache
  dans les iframes (recharger avec un ?fresh).
- 2026-07-18 (retour Thomas : « partout pareil, certains trop gros ou trop longs, reformuler si besoin ») :
  SYSTÈME TYPOGRAPHIQUE UNIFIÉ + reformulations. Constats de l'inventaire (mesures réelles, 4 pages) :
  h1 pilote à 75 px contre 40 px au hero accueil ; h2 partenaires à 31 px contre 38 px ailleurs (rustine
  de la veille) ; « Une histoire de famille, un projet de course » rendu sur 4 lignes ; kickers de 31 et
  34 caractères sur 2 lignes en mobile. Décisions : (1) UNE échelle h2 partout : clamp(1.4rem, 2.7vw,
  2.15rem), soit 34 px desktop / 22 px mobile, toutes sections et toutes pages (rustines .h2-part et
  override pilote supprimées ; l'échelle utilitaire de la page légale reste propre à cette page) ;
  (2) h1 pilote aligné : clamp(2.1rem, 4vw, 3.2rem) → 51 px desktop, 34 px mobile (⚠️ min() sans
  plancher = 15 px en mobile, attrapé à la vérif visuelle) ; (3) kickers compacts en mobile (.95rem,
  letter-spacing .22em → 1 ligne) ; (4) REFORMULATIONS (panel de 3 rédacteurs + juge, gagnants posés) :
  « Une histoire de famille, un projet de course » → « La piste en héritage » ; « Des partenaires
  embarqués dans l'histoire » → « Roulez avec nous » ; « Une progression construite étape par étape »
  → « Étape par étape » ; kicker pilote « Pilote et co-fondateur de TPRacing » → « Pilote /
  Co-fondateur » (secondes options gardées en réserve : « Père et fils, même piste » / « Entrez dans
  l'histoire » / « Aucun raccourci » / « Pilote / N°47 »). Contrainte géométrique documentée : dans les
  demi-colonnes, une ligne de titre Korataki tient ~13 caractères max — les titres visent désormais
  ≤ 2 lignes de ≤ 13 caractères. Vérifs : audit 4 pages × 8 largeurs (empilement, débordement, taille
  planchère) = OK partout ; h2 mesurés identiques (34,4 px) sur accueil ET pilote ; captures desktop
  (accueil sections + pilote hero/parcours) et mobile (hero pilote, kicker 1 ligne). En ligne.
- 2026-07-18 (précision Thomas) : le nom officiel s'écrit avec un TIRET COURT « - » : « TPRacing -
  Thomas Papone Racing ». Ce qui est banni, c'est le tiret cadratin « — » décoratif, pas le trait
  d'union. Appliqué : les 4 <title>, og:title/twitter:title, og:image:alt, JSON-LD (name +
  affiliation), manifeste PWA (qui portait encore un « — » oublié) et les 4 footers copyright
  passent au « - » (18 remplacements). Le slash « / » reste UNIQUEMENT élément graphique du site
  (kickers, dates, légendes, « France / Mentions légales »). Vérifié : 0 cadratin sur tout le site,
  manifeste JSON valide, prod OK.
