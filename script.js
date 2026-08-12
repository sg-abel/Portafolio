const header = document.querySelector('.site-header');
const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('.navigation');
const navLinks = [...document.querySelectorAll('.navigation a')];
const sections = [...document.querySelectorAll('main section[id]')];

menuButton.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
  menuButton.querySelector('i').className = isOpen ? 'bx bx-x' : 'bx bx-menu';
});

navLinks.forEach(link => link.addEventListener('click', () => {
  navigation.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.querySelector('i').className = 'bx bx-menu';
}));

const updateNavigation = () => {
  header.classList.toggle('scrolled', window.scrollY > 20);
  const current = sections.findLast(section => window.scrollY >= section.offsetTop - 150);
  navLinks.forEach(link => link.classList.toggle('active', current && link.hash === `#${current.id}`));
};

window.addEventListener('scroll', updateNavigation, { passive: true });
updateNavigation();

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(element => revealObserver.observe(element));
document.querySelector('#year').textContent = new Date().getFullYear();

