// /js/router.js

// O MAPA DO SITE: AS CHAVES SEM O '#'
const routes = {
    '/inicio': { content: '/pages/inicio.html', layout: '/layouts/_personalizaveis-base.html' },

    // Páginas Principais
    '/projetos': { content: '/pages/projetos.html', layout: '/layouts/_principais-base.html' },
    '/conexoes': { content: '/pages/conexoes.html', layout: '/layouts/_principais-base.html' },
    '/contribuicoes': { content: '/pages/contribuicoes.html', layout: '/layouts/_principais-base.html' },
    '/equipe': { content: '/pages/equipe.html', layout: '/layouts/_principais-base.html' },
    '/docs': { content: '/pages/docs.html', layout: '/layouts/_personalizaveis-base.html' },

    //Formularios
    '/junte-se': { content: '/pages/junte-se.html', layout: '/layouts/_formularios-base.html' },

    // Páginas de Pesquisa
    '/docs/produzido-comunidade': { content: '/pages/docs/produzido-comunidade.html', layout: '/layouts/_pesquisa-base.html' },
    '/docs/referencias': { content: '/pages/docs/referencias.html', layout: '/layouts/_pesquisa-base.html' },
    '/glossario': { content: '/pages/glossario.html', layout: '/layouts/_pesquisa-base.html' },
    '/faq': { content: '/pages/faq.html', layout: '/layouts/_pesquisa-base.html' },

    // Páginas Sobre a Comunidade
    '/comece-aqui': { content: '/pages/comece-aqui.html', layout: '/layouts/_principais-base.html' },
    '/como-participar': { content: '/pages/como-participar.html', layout: '/layouts/_principais-base.html' },
    '/pilares': { content: '/pages/pilares.html', layout: '/layouts/_estatico-base.html' },
    '/sobre': { content: '/pages/sobre.html', layout: '/layouts/_estatico-base.html' },
    '/cronologia': { content: '/pages/cronologia.html', layout: '/layouts/_estatico-base.html' },
    '/contato': { content: '/pages/contato.html', layout: '/layouts/_estatico-base.html' },
    '/termos-de-uso': { content: '/pages/termos-de-uso.html', layout: '/layouts/_estatico-base.html' },

    // Paginas destinadas a AREAS
    '/areas': { content: '/pages/areas.html', layout: '/layouts/_principais-base.html' },
    '/areas/discutidores': { content: '/pages/areas/discutidores.html', layout: '/layouts/_principais-base.html' },
    '/areas/subgrupo/the-free-society': { content: '/pages/areas/subgrupo/the-free-society.html', layout: '/layouts/_personalizaveis-base.html' },

    // Páginas de Eventos e Noticias
    '/eventos-noticias': { content: '/pages/eventos-noticias.html', layout: '/layouts/_principais-base.html' },
    '/eventos/workshop-pilares': { content: '/pages/eventos/workshop-pilares.html', layout: '/layouts/_docs-base.html' },
    '/noticias/ese-kosmo-alpha': { content: '/pages/noticias/ese-kosmo-alpha.html', layout: '/layouts/_docs-base.html' },

    // Páginas de integrantes 
    '/integrantes': { content: '/pages/integrantes.html', layout: '/layouts/_estatico-base.html' },
    '/integrantes/eduardo-guimaraes': { content: '/pages/integrantes/eduardo-guimaraes.html', layout: '/layouts/_personalizaveis-base.html' },

    //Docs
    '/docs/detail/ese-guanambi-2-0': { content: '/pages/docs/detail/ese-guanambi-2-0.html', layout: '/layouts/_docs-base.html' },
    '/docs/detail/wiplash': { content: '/pages/docs/detail/wiplash.html', layout: '/layouts/_docs-base.html' },
    // Projetos Individuais
    '/projetos/ese-kosmo': { content: '/pages/projetos/ese-kosmo.html', layout: '/layouts/_docs-base.html' },
    '/projetos/radio-multiversus': { content: '/pages/projetos/radio-multiversus.html', layout: '/layouts/_docs-base.html' },

    // Modelos Layouts
    '/modelo/principais': { content: '/pages/modelo/modelo-principais.html', layout: '/layouts/_principais-base.html' },
    '/modelo/pesquisa': { content: '/pages/modelo/modelo-pesquisa.html', layout: '/layouts/_pesquisa-base.html' },
    '/modelo/personalizaveis': { content: '/pages/modelo/modelo-personalizaveis.html', layout: '/layouts/_personalizaveis-base.html' },
    '/modelo/formularios': { content: '/pages/modelo/modelo-formularios.html', layout: '/layouts/_formularios-base.html' },
    '/modelo/estatico': { content: '/pages/modelo/modelo-estatico.html', layout: '/layouts/_estatico-base.html' },
    '/modelo/docs': { content: '/pages/modelo/modelo-docs.html', layout: '/layouts/_docs-base.html' },
};

const appBody = document.getElementById('app-body');
const loader = document.getElementById('loader');

function setupAnchorLinks() {
    const anchorLinks = document.querySelectorAll('.anchor-link');
    const anchorLinksButton = document.querySelectorAll('.anchor-link-button');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Impede o navegador de mudar a URL

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth' // Faz a rolagem ser suave
                });
            }
        });
    });
    anchorLinksButton.forEach(btn => {
        btn.addEventListener('click', function (event) {
            event.preventDefault();
            // suporta href="#id" ou data-target="id"
            const href = this.getAttribute('href') || this.dataset.target;
            if (!href) return;
            const targetId = href.startsWith('#') ? href.substring(1) : href;
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
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

function setupDocsSearch(containerId, sourceData) {
    const searchInput = document.getElementById('doc-search-input');
    const searchButton = document.getElementById('doc-search-button');
    const container = document.getElementById(containerId);

    // Se não encontrarmos os elementos necessários (estamos em outra página), não fazemos nada.
    if (!searchInput || !container) return;

    function filterAndRender() {
        const searchTerm = searchInput.value.toLowerCase();

        // Filtra o array de dados original (sourceData)
        const filteredData = sourceData.filter(doc => {
            return doc.title.toLowerCase().includes(searchTerm);
        });

        // Renderiza os cards novamente, mas apenas com os dados filtrados
        renderDocs(containerId, filteredData);
    }

    searchInput.addEventListener('keyup', filterAndRender);
    searchButton.addEventListener('click', filterAndRender);
}

function setupGlossarySearch() {
    const searchInput = document.getElementById('glossary-search-input');
    if (!searchInput) return;

    function filterAndRender() {
        const searchTerm = searchInput.value.toLowerCase();

        const filteredData = glossaryData.map(category => {
            const filteredTerms = category.terms.filter(item => {
                return item.tags.toLowerCase().includes(searchTerm);
            });
            return { ...category, terms: filteredTerms };
        }).filter(category => category.terms.length > 0);

        renderGlossary(filteredData);
    }

    searchInput.addEventListener('keyup', filterAndRender);
}

function renderIntegrantes() {
    const container = document.getElementById('integrantes-grid-container');
    if (!container) return; // Se não estiver na página de integrantes, não faz nada

    // Limpa o container caso já tenha algo
    container.innerHTML = '';

    // Itera sobre os dados de integrantesData (que vem do data.js)
    integrantesData.forEach(integrante => {
        const cardHTML = `
            <a href="${integrante.url}" class="integrante-card">
                <img src="${integrante.image}" alt="Foto de ${integrante.name}">
                <div class="card-info">
                    <h3>${integrante.name}</h3>
                    <p>${integrante.role}</p>
                </div>
            </a>
        `;
        // Adiciona o card gerado ao container
        container.innerHTML += cardHTML;
    });
}

function renderDocs(containerId, data) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';
    data.forEach(doc => {
        const disabledClass = !doc.enabled ? 'disabled' : '';
        const cardHTML = `
            <div class="doc-card" data-title="${doc.title}">
                <img src="${doc.image}" alt="${doc.alt}">
                <div class="card-body">
                    <h4>${doc.title}</h4>
                    <p>${doc.description}</p>
                    <a href="${doc.url}" class="card-button ${disabledClass}">${doc.buttonText}</a>
                </div>
            </div>
        `;
        container.innerHTML += cardHTML;
    });
}

function renderEvents() {
    const container = document.getElementById('event-list-container');
    if (!container) return;

    container.innerHTML = '';
    eventsData.forEach(event => {
        const target = event.external ? 'target="_blank"' : '';
        const cardHTML = `
            <div class="event-item">
                <div class="event-info">
                    <h3>${event.title}</h3>
                    <p>${event.description}</p>
                </div>
                <div class="event-action">
                    <span class="event-date">${event.date}</span>
                    <a href="${event.url}" ${target} class="card-button">${event.buttonText}</a>
                </div>
            </div>
        `;
        container.innerHTML += cardHTML;
    });
}

function renderNews() {
    const container = document.getElementById('news-grid-container');
    if (!container) return;

    container.innerHTML = '';
    newsData.forEach(news => {
        const target = news.external ? 'target="_blank"' : '';
        const cardHTML = `
            <a href="${news.url}" ${target} class="news-card">
                <img src="${news.image}" alt="${news.alt}">
                <div class="news-content">
                    <span class="news-category">${news.category}</span>
                    <h4>${news.title}</h4>
                </div>
            </a>
        `;
        container.innerHTML += cardHTML;
    });
}

function renderGlossary(data) {
    const container = document.getElementById('glossary-container');
    if (!container) return;

    container.innerHTML = '';
    data.forEach(category => {
        const categoryHTML = `
            <div class="glossary-category">
                <h2>${category.category}</h2>
                <dl>
                    ${category.terms.map(item => `
                        <div class="glossary-item" data-term="${item.tags}">
                            <dt>${item.term}</dt>
                            <dd>${item.definition}</dd>
                        </div>
                    `).join('')}
                </dl>
            </div>
        `;
        container.innerHTML += categoryHTML;
    });
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
        // --- ADICIONE AS CHAMADAS DE RENDERIZAÇÃO AQUI ---
        renderIntegrantes();
        renderDocs('community-docs-grid-container', communityDocsData);
        renderDocs('reference-docs-grid-container', referenceDocsData);
        renderEvents();
        renderNews();
        renderGlossary(glossaryData);

        setupAnchorLinks();

        // --- ATIVANDO AS BUSCAS DINÂMICAS ---
        setupDocsSearch('community-docs-grid-container', communityDocsData);
        setupDocsSearch('reference-docs-grid-container', referenceDocsData);
        setupGlossarySearch();

        // --- NOVO: INICIALIZAR CARROSSEL ---
        // Verifica se o objeto existe (carregado do carousel.js) e inicializa
        if (window.CarouselSystem) {
            window.CarouselSystem.init();
        }

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