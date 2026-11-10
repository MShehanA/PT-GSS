(() => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      nav.classList.toggle('is-open', !open);
      document.body.classList.toggle('menu-open', !open);
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      toggle.setAttribute('aria-expanded', 'false');
      nav.classList.remove('is-open');
      document.body.classList.remove('menu-open');
    }));
  }
  const backTop = document.querySelector('.back-top');
  const updateTop = () => backTop?.classList.toggle('is-visible', window.scrollY > 450);
  window.addEventListener('scroll', updateTop, { passive: true });
  updateTop();
  backTop?.addEventListener('click', event => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  const params = new URLSearchParams(window.location.search);
  if (params.get('sent') === '1') {
    const form = document.querySelector('.contact-form');
    if (form) {
      const notice = document.createElement('p');
      notice.className = 'success-note';
      notice.textContent = 'Pesan berhasil dikirim. Terima kasih telah menghubungi GSS.';
      form.prepend(notice);
    }
  }
})();
  const contactForm = document.querySelector('#contact-form');
  contactForm?.addEventListener('submit', event => {
    event.preventDefault();
    let notice = contactForm.querySelector('.success-note');
    if (!notice) {
      notice = document.createElement('p');
      notice.className = 'placeholder-note';
      notice.textContent = 'Formulir belum aktif. Silakan hubungi GSS melalui email atau nomor telepon resmi setelah informasi kontak ditambahkan.';
      contactForm.prepend(notice);
    }
  });
