// /js/router.js

// O MAPA DO SITE: AS CHAVES SEM O '#'
const routes = {
    '/inicio':   { content: '/pages/inicio.html',   layout: '/layouts/_principais-base.html' },
    '/sobre':    { content: '/pages/sobre.html',    layout: '/layouts/_principais-base.html' },
    '/projetos': { content: '/pages/projetos.html', layout: '/layouts/_principais-base.html' },
    '/faq':      { content: '/pages/faq.html',      layout: '/layouts/_principais-base.html' },
    '/equipe':   { content: '/pages/equipe.html',   layout: '/layouts/_principais-base.html' },
    '/criador': { content: '/pages/criador.html', layout: '/layouts/_estatica-base.html' },

    // Páginas de projetos individuais
    '/projetos/radio-multiversus': { content: '/pages/projetos/radio-multiversus.html', layout: '/layouts/_principais-base.html' },

    //Docs
    '/docs': { content: '/pages/docs.html', layout: '/layouts/_principais-base.html' },
    '/docs/produzido-comunidade': { content: '/pages/docs/produzido-comunidade.html', layout: '/layouts/_principais-base.html' },
    '/docs/referencias': { content: '/pages/docs/referencias.html', layout: '/layouts/_principais-base.html' }, 
    '/docs/detail/ese-guanambi-2-0': { content: '/pages/docs/detail/ese-guanambi-2-0.html', layout: '/layouts/_principais-base.html' },
    '/docs/detail/wiplash': { content: '/pages/docs/detail/wiplash.html', layout: '/layouts/_principais-base.html' }, 

    // Páginas especiais
    '/contato': { content: '/pages/contato.html', layout: '/layouts/_principais-base.html' },
    '/junte-se': { content: '/pages/junte-se.html', layout: '/layouts/_formularios-base.html' },
    '/termos-de-uso': { content: '/pages/termos-de-uso.html', layout: '/layouts/_estatica-base.html' }
};

const appBody = document.getElementById('app-body');
const loader = document.getElementById('loader');

function setupAnchorLinks() {
    const anchorLinks = document.querySelectorAll('.anchor-link');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Impede o navegador de mudar a URL

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth' // Faz a rolagem ser suave
                });
            }
        });
    });
}

async function loadPartials() {
    const navPlaceholder = appBody.querySelector('#nav-placeholder');
    const footerPlaceholder = appBody.querySelector('#footer-placeholder');
    if (navPlaceholder) {
        const navResponse = await fetch('/_partials/nav.html');
        navPlaceholder.innerHTML = await navResponse.text();
    }
    if (footerPlaceholder) {
        const footerResponse = await fetch('/_partials/footer.html');
        footerPlaceholder.innerHTML = await footerResponse.text();
    }
}

function setupDocsSearch() {
    const searchInput = document.getElementById('doc-search-input');
    const searchButton = document.getElementById('doc-search-button');
    const container = document.getElementById('docs-grid-container');

    if (!searchInput || !container) return; // Só executa se os elementos existirem

    const allCards = Array.from(container.getElementsByClassName('doc-card'));

    function filterDocs() {
        const searchTerm = searchInput.value.toLowerCase();
        allCards.forEach(card => {
            const title = card.getAttribute('data-title').toLowerCase();
            if (title.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    searchInput.addEventListener('keyup', filterDocs);
    searchButton.addEventListener('click', filterDocs);
}

async function navigate() {
    try {
        // Esta linha remove o '#' da URL, por isso as chaves não podem tê-lo
        const path = window.location.hash.substring(1) || '/inicio';
        const route = routes[path]; // A busca agora vai funcionar!

        if (!route) {
            // Se a rota não existir, lidamos com o erro elegantemente
            const layoutResponse = await fetch('/layouts/_principais-base.html');
            appBody.innerHTML = await layoutResponse.text();
            const contentPlaceholder = appBody.querySelector('#content-placeholder');
            contentPlaceholder.innerHTML = '<h1>Erro 404: Página não encontrada</h1>';
            await loadPartials();
            return;
        }

        const layoutResponse = await fetch(route.layout);
        appBody.innerHTML = await layoutResponse.text();

        const contentResponse = await fetch(route.content);
        const contentPlaceholder = appBody.querySelector('#content-placeholder');
        if (contentPlaceholder) {
            contentPlaceholder.innerHTML = await contentResponse.text();
        }

        await loadPartials();
        setupAnchorLinks();
        setupDocsSearch();

    } catch (error) {
        console.error('Erro ao carregar a página:', error);
        appBody.innerHTML = '<h1>Erro ao carregar conteúdo. Verifique o console.</h1>';
    }
}

async function initialLoad() {
    await navigate();
    setTimeout(() => {
        loader.classList.add('hidden');
        appBody.style.display = 'block';
    }, 3000);
}

async function handleRouteChange() {
    await navigate();
}

window.addEventListener('load', initialLoad);
window.addEventListener('hashchange', handleRouteChange);