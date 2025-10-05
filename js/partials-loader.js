// /js/partials-loader.js
const navPlaceholder = document.getElementById('nav-placeholder');
const footerPlaceholder = document.getElementById('footer-placeholder');

if (navPlaceholder) {
    fetch('/_partials/nav.html').then(r => r.text()).then(d => navPlaceholder.innerHTML = d);
}
if (footerPlaceholder) {
    fetch('/_partials/footer.html').then(r => r.text()).then(d => footerPlaceholder.innerHTML = d);
}