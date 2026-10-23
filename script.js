const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');

if (toggle && links) {
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!open));
    links.classList.toggle('open', !open);
  });
}

document.querySelectorAll('[data-year]').forEach((node) => {
  node.textContent = new Date().getFullYear();
});

const typewriter = document.querySelector('[data-typewriter]');
if (typewriter && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const phrases = [
    'physical simulation.',
    'synthetic data.',
    'sensing systems.'
  ];
  let phraseIndex = 0;
  let charIndex = phrases[0].length;
  let deleting = true;

  const typeNext = () => {
    const phrase = phrases[phraseIndex];
    charIndex += deleting ? -1 : 1;
    typewriter.textContent = phrase.slice(0, charIndex);

    if (deleting && charIndex === 0) {
      deleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      window.setTimeout(typeNext, 300);
      return;
    }
    if (!deleting && charIndex === phrases[phraseIndex].length) {
      deleting = true;
      window.setTimeout(typeNext, 1700);
      return;
    }
    window.setTimeout(typeNext, deleting ? 32 : 58);
  };

  window.setTimeout(typeNext, 1800);
}
