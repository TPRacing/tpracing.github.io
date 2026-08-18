// Test de réaction « lights out » (404.html).
// Les cinq feux s'allument, s'éteignent après un délai aléatoire : on clique à l'extinction.
(function () {
  const portique = document.getElementById('portique');
  if (!portique) return;
  const feux = [...portique.querySelectorAll('.feu')];
  const consigne = document.getElementById('consigne');
  const chrono = document.getElementById('chrono');
  const comparatif = document.getElementById('comparatif');
  // Le meilleur temps était affiché par la page Réflexes, retirée le 25/07 :
  // il n'était plus qu'écrit dans le navigateur du visiteur sans jamais lui être montré.

  let etat = 'repos'; // repos | allumage | armé | fini
  let timers = [], t0 = 0;

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

})();
