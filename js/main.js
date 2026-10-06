'use strict';
// Menu mobile.
const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('#menu');
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  menu.classList.toggle('is-open', open);
});
menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  menuButton.setAttribute('aria-expanded', 'false');
  menu.classList.remove('is-open');
}));
// Galleria, senza librerie esterne. I collegamenti alle foto funzionano anche senza JS.
const photos = [...document.querySelectorAll('.gallery__grid a')];
const lightbox = document.querySelector('#lightbox');
const enlarged = lightbox.querySelector('img');
let currentPhoto = 0;
function showPhoto(index) {
  currentPhoto = (index + photos.length) % photos.length;
  enlarged.src = photos[currentPhoto].href;
  enlarged.alt = photos[currentPhoto].querySelector('img').alt;
}
photos.forEach((photo, index) => photo.addEventListener('click', event => {
  if (typeof lightbox.showModal !== 'function') return;
  event.preventDefault();
  showPhoto(index);
  lightbox.showModal();
}));
lightbox.querySelector('.lightbox__close').addEventListener('click', () => lightbox.close());
lightbox.querySelector('.lightbox__previous').addEventListener('click', () => showPhoto(currentPhoto - 1));
lightbox.querySelector('.lightbox__next').addEventListener('click', () => showPhoto(currentPhoto + 1));
lightbox.addEventListener('click', event => { if (event.target === lightbox) lightbox.close(); });
lightbox.addEventListener('keydown', event => {
  if (event.key === 'ArrowLeft') showPhoto(currentPhoto - 1);
  if (event.key === 'ArrowRight') showPhoto(currentPhoto + 1);
});
// Formspree. Configurare data-formspree-endpoint nell'HTML prima della pubblicazione definitiva.
const form = document.querySelector('#contact-form');
const status = document.querySelector('#form-status');
const endpoint = form.dataset.formspreeEndpoint.trim();
if (endpoint) form.action = endpoint;
form.addEventListener('submit', async event => {
  event.preventDefault();
  if (!/^https:\/\/formspree\.io\/f\/[a-zA-Z0-9]+$/.test(endpoint)) {
    status.textContent = 'Il modulo non è ancora attivo. Scrivici a info@alfonsinacorridora.it oppure chiamaci al 338 7697162.';
    return;
  }
  const button = form.querySelector('button');
  button.disabled = true;
  status.textContent = 'Invio in corso…';
  try {
    const response = await fetch(endpoint, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } });
    if (!response.ok) throw new Error('Invio non riuscito');
    status.textContent = 'Grazie! Il tuo messaggio è stato inviato.';
    form.reset();
  } catch {
    status.textContent = 'Non è stato possibile inviare il messaggio. Riprova oppure scrivici a info@alfonsinacorridora.it.';
  } finally { button.disabled = false; }
});
