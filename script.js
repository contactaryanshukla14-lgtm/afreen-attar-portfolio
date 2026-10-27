'use strict';
const email = 'contact.afreenattar@gmail.com';
const sectors = {
  infrastructure: { category: 'Foundations for tomorrow', title: ['Shaping the', 'world around us.'], description: 'The places we live and the materials we build with. Connecting construction and cement within a shared industrial portfolio.', industries: ['Construction', 'Cement industry'], image: 'infrastructure.webp', alt: 'Looking up through a cluster of modern glass buildings', subject: 'Infrastructure partnership enquiry' },
  services: { category: 'Connections that move us forward', title: ['Bringing business', 'closer together.'], description: 'From moving goods to supporting essential operations. A connected portfolio of logistics, trade, facilities and energy services.', industries: ['Logistics', 'Trading', 'Import–export', 'Security & facilities', 'Fuel stations'], image: 'services.webp', alt: 'Industrial logistics and warehouse operations', subject: 'Services partnership enquiry' },
  consumer: { category: 'Enterprise in everyday life', title: ['Meeting needs.', 'Opening possibilities.'], description: 'Industries with a place in daily life. A broad portfolio spanning healthcare, agriculture, mobility, precious metals and beverages.', industries: ['Gold bullion', 'Pharmaceuticals', 'Agriculture', 'Automobiles', 'Beverages'], image: 'consumer.webp', alt: 'Open agricultural fields in soft evening light', subject: 'Consumer industries partnership enquiry' }
};
const tabs = [...document.querySelectorAll('[role="tab"]')];
const panel = document.querySelector('#sector-panel');
function selectSector(tab, focus = false) {
  const sector = sectors[tab.dataset.sector];
  if (!sector) return;
  tabs.forEach(item => { const active = item === tab; item.setAttribute('aria-selected', String(active)); item.tabIndex = active ? 0 : -1; });
  panel.setAttribute('aria-labelledby', tab.id);
  document.querySelector('#sector-category').textContent = sector.category;
  const title = document.querySelector('#sector-title');
  title.replaceChildren(document.createTextNode(sector.title[0]), document.createElement('br'), document.createTextNode(sector.title[1]));
  document.querySelector('#sector-description').textContent = sector.description;
  document.querySelector('#sector-list').replaceChildren(...sector.industries.map(text => { const li = document.createElement('li'); li.textContent = text; return li; }));
  const img = document.querySelector('#sector-image');
  img.src = '/assets/' + sector.image;
  img.alt = sector.alt;
  document.querySelector('#sector-enquiry').href = `mailto:${email}?subject=${encodeURIComponent(sector.subject)}`;
  if (focus) tab.focus();
}
tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => selectSector(tab));
  tab.addEventListener('keydown', event => {
    let next;
    if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
    if (event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = tabs.length - 1;
    if (next !== undefined) { event.preventDefault(); selectSector(tabs[next], true); }
  });
});
const menuToggle = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');
const backgroundRegions = [document.querySelector('main'), document.querySelector('footer')];
function closeMenu(returnFocus = false) {
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Open navigation');
  mobileNav.hidden = true;
  document.body.classList.remove('menu-open');
  backgroundRegions.forEach(region => { region.inert = false; });
  if (returnFocus) menuToggle.focus();
}
menuToggle.addEventListener('click', () => {
  const open = menuToggle.getAttribute('aria-expanded') === 'true';
  if (open) closeMenu();
  else { menuToggle.setAttribute('aria-expanded', 'true'); menuToggle.setAttribute('aria-label', 'Close navigation'); mobileNav.hidden = false; document.body.classList.add('menu-open'); backgroundRegions.forEach(region => { region.inert = true; }); }
});
mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => closeMenu()));
document.addEventListener('keydown', event => { if (event.key === 'Escape' && !mobileNav.hidden) closeMenu(true); });
const desktop = window.matchMedia('(min-width: 761px)');
desktop.addEventListener('change', event => { if (event.matches) closeMenu(); });
document.querySelector('.copy-email').addEventListener('click', async () => {
  const status = document.querySelector('.copy-status');
  try { await navigator.clipboard.writeText(email); status.textContent = 'Email address copied.'; }
  catch { status.textContent = 'Select the email address above to copy it, or open it to send an email.'; }
});
document.querySelector('#year').textContent = String(new Date().getFullYear());
const progress = document.querySelector('.reading-progress');
let scrollPending = false;
function updateProgress() { const range = document.documentElement.scrollHeight - innerHeight; progress.style.width = (range > 0 ? Math.min(100, scrollY / range * 100) : 0) + '%'; scrollPending = false; }
addEventListener('scroll', () => { if (!scrollPending) { scrollPending = true; requestAnimationFrame(updateProgress); } }, { passive: true });
addEventListener('resize', updateProgress, { passive: true });
updateProgress();
