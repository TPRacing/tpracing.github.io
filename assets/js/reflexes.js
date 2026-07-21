// Test de réaction « lights out » : module partagé (404.html + jeu.html).
// Les cinq feux s'allument, s'éteignent après un délai aléatoire : on clique à l'extinction.
(function () {
  const portique = document.getElementById('portique');
  if (!portique) return;
  const feux = [...portique.querySelectorAll('.feu')];
  const consigne = document.getElementById('consigne');
  const chrono = document.getElementById('chrono');
  const comparatif = document.getElementById('comparatif');
  // Éléments optionnels, présents uniquement sur la page Réflexes
  const recordBloc = document.getElementById('record-bloc');
  const recordVal = document.getElementById('record');
  const CLE_RECORD = 'tp47-reflexes-best';

  let etat = 'repos'; // repos | allumage | armé | fini
  let timers = [], t0 = 0;

  const lireRecord = () => {
    try {
      const v = parseInt(localStorage.getItem(CLE_RECORD), 10);
      return Number.isFinite(v) && v > 0 ? v : null;
    } catch (e) { return null; }
  };
  const afficherRecord = () => {
    if (!recordBloc || !recordVal) return;
    const r = lireRecord();
    if (r) { recordVal.textContent = r + ' ms'; recordBloc.hidden = false; }
  };
  const sauverRecord = (t) => {
    try {
      const r = lireRecord();
      if (!r || t < r) {
        localStorage.setItem(CLE_RECORD, String(t));
        if (recordBloc) recordBloc.classList.add('nouveau');
      }
    } catch (e) { /* stockage indisponible : le jeu marche quand même */ }
    afficherRecord();
  };

  const reset = () => {
    timers.forEach(clearTimeout); timers = [];
    feux.forEach(f => f.classList.remove('on'));
    portique.classList.remove('pret');
  };
  const montrer = (c, cmp, faux) => {
    chrono.hidden = false; comparatif.hidden = false;
    chrono.textContent = c; comparatif.textContent = cmp;
    chrono.classList.toggle('faux', !!faux);
    consigne.textContent = 'Clique pour rejouer';
  };
  const lancer = () => {
    reset();
    etat = 'allumage';
    chrono.hidden = true; comparatif.hidden = true;
    if (recordBloc) recordBloc.classList.remove('nouveau');
    consigne.textContent = 'Attends l’extinction…';
    feux.forEach((f, i) => timers.push(setTimeout(() => f.classList.add('on'), 550 * (i + 1))));
    const attente = 550 * 5 + 900 + Math.random() * 1800;
    timers.push(setTimeout(() => {
      feux.forEach(f => f.classList.remove('on'));
      portique.classList.add('pret');
      t0 = performance.now();
      etat = 'armé';
    }, attente));
  };
  const clic = () => {
    if (etat === 'repos' || etat === 'fini') { lancer(); return; }
    if (etat === 'allumage') { reset(); etat = 'fini'; montrer('JUMP START', 'Faux départ : les feux étaient encore allumés', true); return; }
    if (etat === 'armé') {
      const t = Math.round(performance.now() - t0);
      etat = 'fini';
      portique.classList.remove('pret');
      let cmp;
      if (t < 200) cmp = 'Réflexes de pro : un pilote F1 part entre 200 et 300 ms';
      else if (t < 300) cmp = 'Dans la fenêtre d’un départ F1 (200 à 300 ms)';
      else if (t < 450) cmp = 'Solide. La grille n’attend personne';
      else cmp = 'Encore un tour de chauffe ?';
      montrer(t + ' ms', cmp);
      sauverRecord(t);
    }
  };
  portique.addEventListener('click', clic);
  portique.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); clic(); } });

  // Onglet mis en arrière-plan pendant une séquence : les timers sont throttlés
  // et le chrono serait faussé. On annule proprement.
  document.addEventListener('visibilitychange', () => {
    if (document.hidden && (etat === 'allumage' || etat === 'armé')) {
      reset();
      etat = 'repos';
      consigne.textContent = 'Clique sur le portique pour lancer le départ';
    }
  });

  afficherRecord();

  // Bouton « Défier un ami » (page Réflexes) : partage natif, sinon copie du lien.
  const defier = document.getElementById('defier');
  if (defier) {
    const statut = document.getElementById('defier-statut');
    const copier = async (texte) => {
      try { await navigator.clipboard.writeText(texte); return true; }
      catch (e) { return false; }
    };
    defier.addEventListener('click', async () => {
      const r = lireRecord();
      const texte = (r ? 'J’ai réagi en ' + r + ' ms à l’extinction des feux. ' : '')
        + 'Teste tes réflexes de pilote sur le site TPRacing.';
      const url = 'https://tpracing.github.io/jeu.html';
      if (navigator.share) {
        try { await navigator.share({ title: 'Teste tes réflexes - TPRacing', text: texte, url: url }); return; }
        catch (e) { if (e && e.name === 'AbortError') return; }
      }
      const ok = await copier(texte + ' ' + url);
      if (statut) {
        statut.textContent = ok ? 'Lien copié' : url;
        defier.classList.add('copie');
        setTimeout(() => { statut.textContent = ''; defier.classList.remove('copie'); }, 1800);
      }
    });
  }
})();
