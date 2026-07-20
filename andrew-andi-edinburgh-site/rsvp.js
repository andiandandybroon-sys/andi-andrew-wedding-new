const form = document.getElementById('rsvp-form');
const thankYou = document.getElementById('thank-you');

if (form && thankYou) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    form.hidden = true;
    thankYou.hidden = false;
    thankYou.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
}
