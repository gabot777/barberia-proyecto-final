document.addEventListener('DOMContentLoaded', () => {
  // --- Elementos del Header / Navegación ---
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const mainNav = document.getElementById('main-nav');

  // --- Toggle Menú Móvil ---
  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
      const isHidden = mobileMenu.classList.contains('hidden');
      mobileMenu.classList.toggle('hidden');
      mobileMenuButton.setAttribute('aria-expanded', String(isHidden));
      mobileMenuButton.setAttribute('aria-label', isHidden ? 'Cerrar menú' : 'Abrir menú');
    });

    // Cerrar menú al redimensionar a desktop
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 1024 && !mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
        mobileMenuButton.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // --- Efecto de Scroll en Navbar ---
  const handleScroll = () => {
    if (!mainNav) return;
    if (window.scrollY > 40) {
      mainNav.classList.add('nav-scrolled');
    } else {
      mainNav.classList.remove('nav-scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // --- Observador de Animación: Herramientas de Estudio (Nuestro Oficio) ---
  const toolsStudio = document.querySelector('[data-tools-studio]');
  if (toolsStudio) {
    let isIntersecting = false;
    const updateVisibility = () => {
      toolsStudio.classList.toggle('is-visible', isIntersecting && !document.hidden);
    };

    const observer = new IntersectionObserver(([entry]) => {
      isIntersecting = entry.isIntersecting;
      updateVisibility();
    }, { threshold: 0.15 });

    observer.observe(toolsStudio);
    document.addEventListener('visibilitychange', updateVisibility);
  }

  // --- Estado Abierto / Cerrado (Horarios de Atención) ---
  const statusDot = document.getElementById('status-dot-indicator');
  const statusText = document.getElementById('status-text');
  if (statusDot && statusText) {
    const weekday = new Intl.DateTimeFormat('en-US', {
      timeZone: 'America/Santiago',
      weekday: 'short',
    }).format(new Date());

    const time = new Intl.DateTimeFormat('en-GB', {
      timeZone: 'America/Santiago',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    }).format(new Date());

    const isOpen =
      (['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].includes(weekday) && time >= '10:30' && time < '19:30') ||
      (weekday === 'Sat' && time >= '10:30' && time < '16:30');

    statusDot.classList.add(isOpen ? 'open' : 'closed');
    statusText.textContent = isOpen ? 'Abierto ahora' : 'Cerrado ahora';
  }

  // --- Tabs genéricas (data-tabs) ---
  document.querySelectorAll('[data-tabs]').forEach((tabsRoot) => {
    const buttons = tabsRoot.querySelectorAll('[data-tab]');
    const panels = tabsRoot.querySelectorAll('[data-tab-panel]');
    const activate = (id) => {
      buttons.forEach((b) => {
        const active = b.dataset.tab === id;
        b.setAttribute('aria-selected', String(active));
      });
      panels.forEach((p) => p.classList.toggle('hidden', p.id !== id));
    };
    buttons.forEach((b) => b.addEventListener('click', () => activate(b.dataset.tab)));
    if (buttons.length) activate(buttons[0].dataset.tab);
  });

  // --- Modales genéricos (data-modal-open / data-modal-close) ---
  const openModal = (modal) => {
    if (!modal) return;
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
  };
  const closeModal = (modal) => {
    if (!modal) return;
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
  };

  document.querySelectorAll('[data-modal-open]').forEach((trigger) => {
    trigger.addEventListener('click', () => openModal(document.getElementById(trigger.dataset.modalOpen)));
  });
  document.querySelectorAll('[data-modal-close]').forEach((btn) => {
    btn.addEventListener('click', () => closeModal(btn.closest('[data-modal]')));
  });
  document.querySelectorAll('[data-modal]').forEach((modal) => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal(modal);
    });
  });
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    document.querySelectorAll('[data-modal]:not(.hidden)').forEach(closeModal);
  });

  // --- Formularios simulados (data-simulate-form) ---
  document.querySelectorAll('[data-simulate-form]').forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const target = document.getElementById(form.dataset.simulateForm);
      form.reset();
      openModal(target);
    });
  });

  // --- Carrusel simple (data-carousel) con autoplay ---
  document.querySelectorAll('[data-carousel]').forEach((carousel) => {
    const slides = carousel.querySelectorAll('[data-slide]');
    const dots = carousel.querySelectorAll('[data-dot]');
    let index = 0;
    let timer = null;
    const show = (i) => {
      index = (i + slides.length) % slides.length;
      slides.forEach((s, idx) => s.classList.toggle('hidden', idx !== index));
      dots.forEach((d, idx) => d.classList.toggle('carousel-dot-active', idx === index));
    };
    const restart = () => {
      if (timer) clearInterval(timer);
      timer = setInterval(() => show(index + 1), 6000);
    };
    carousel.querySelector('[data-carousel-prev]')?.addEventListener('click', () => { show(index - 1); restart(); });
    carousel.querySelector('[data-carousel-next]')?.addEventListener('click', () => { show(index + 1); restart(); });
    dots.forEach((d, idx) => d.addEventListener('click', () => { show(idx); restart(); }));
    if (slides.length) { show(0); restart(); }
  });
});
