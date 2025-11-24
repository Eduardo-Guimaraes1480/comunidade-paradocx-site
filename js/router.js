// /js/router.js

// O MAPA DO SITE: AS CHAVES SEM O '#'
const routes = {
    '/inicio': { content: '/pages/inicio.html', layout: '/layouts/_personalizaveis-base.html', title: 'Início | Comunidade PARADOCX'},

    // Páginas Principais
    '/projetos': { content: '/pages/projetos.html', layout: '/layouts/_principais-base.html', title: 'Projetos | Comunidade PARADOCX'},
    '/conexoes': { content: '/pages/conexoes.html', layout: '/layouts/_principais-base.html', title: 'Conexões | Comunidade PARADOCX'},
    '/contribuicoes': { content: '/pages/contribuicoes.html', layout: '/layouts/_principais-base.html', title: 'Contribuições | Comunidade PARADOCX'},
    '/equipe': { content: '/pages/equipe.html', layout: '/layouts/_principais-base.html', title: 'Equipe ESE | Comunidade PARADOCX'},
    '/docs': { content: '/pages/docs.html', layout: '/layouts/_personalizaveis-base.html', title: 'Documentação | Comunidade PARADOCX' },

    //Formularios
    '/junte-se': { content: '/pages/junte-se.html', layout: '/layouts/_formularios-base.html', title: 'Junte-se a Nós | Comunidade PARADOCX' },

    // Páginas de Pesquisa
    '/docs/produzido-comunidade': { content: '/pages/docs/produzido-comunidade.html', layout: '/layouts/_pesquisa-base.html', title: 'Docs da Comunidade | Comunidade PARADOCX' },
    '/docs/referencias': { content: '/pages/docs/referencias.html', layout: '/layouts/_pesquisa-base.html', title: 'Referências | Comunidade PARADOCX' },
    '/glossario': { content: '/pages/glossario.html', layout: '/layouts/_pesquisa-base.html', title: 'Glossário | Comunidade PARADOCX' },
    '/faq': { content: '/pages/faq.html', layout: '/layouts/_pesquisa-base.html', title: 'FAQ | Comunidade PARADOCX' },

    // Páginas Sobre a Comunidade
    '/comece-aqui': { content: '/pages/comece-aqui.html', layout: '/layouts/_principais-base.html', title: 'Comece Aqui | Comunidade PARADOCX' },
    '/como-participar': { content: '/pages/como-participar.html', layout: '/layouts/_principais-base.html', title: 'Como Participar | Comunidade PARADOCX' },
    '/pilares': { content: '/pages/pilares.html', layout: '/layouts/_estatico-base.html', title: 'Pilares | Comunidade PARADOCX' },
    '/sobre': { content: '/pages/sobre.html', layout: '/layouts/_estatico-base.html', title: 'Sobre Nós | Comunidade PARADOCX' },
    '/cronologia': { content: '/pages/cronologia.html', layout: '/layouts/_estatico-base.html', title: 'Cronologia | Comunidade PARADOCX' },
    '/contato': { content: '/pages/contato.html', layout: '/layouts/_estatico-base.html', title: 'Contato | Comunidade PARADOCX' },
    '/termos-de-uso': { content: '/pages/termos-de-uso.html', layout: '/layouts/_estatico-base.html', title: 'Termos de Uso | Comunidade PARADOCX' },

    // Paginas destinadas a AREAS
    '/areas': { content: '/pages/areas.html', layout: '/layouts/_principais-base.html', title: 'Áreas de Atuação | Comunidade PARADOCX' },
    '/areas/discutidores': { content: '/pages/areas/discutidores.html', layout: '/layouts/_principais-base.html', title: 'Discutidores | Comunidade PARADOCX' },
    '/areas/subgrupo/the-free-society': { content: '/pages/areas/subgrupo/the-free-society.html', layout: '/layouts/_personalizaveis-base.html', title: 'The Free Society | Comunidade PARADOCX' },

    // Páginas de Eventos e Noticias
    '/eventos-noticias': { content: '/pages/eventos-noticias.html', layout: '/layouts/_principais-base.html', title: 'Eventos & Notícias | Comunidade PARADOCX' },
    '/eventos/workshop-pilares': { content: '/pages/eventos/workshop-pilares.html', layout: '/layouts/_docs-base.html', title: 'Workshop Pilares | Eventos' },
    '/noticias/ese-kosmo-alpha': { content: '/pages/noticias/ese-kosmo-alpha.html', layout: '/layouts/_docs-base.html', title: 'ESE Kosmo Alpha | Noticias' },

    // Páginas de integrantes 
    '/integrantes': { content: '/pages/integrantes.html', layout: '/layouts/_estatico-base.html', title: 'Integrantes | Comunidade PARADOCX' },
    '/integrantes/eduardo-guimaraes': { content: '/pages/integrantes/eduardo-guimaraes.html', layout: '/layouts/_personalizaveis-base.html', title: 'Eduardo Guimarães | Integrantes' },

    // DOCS GERAIS:
    //Docs Comunidade
    '/docs/detail/ese-guanambi-2-0': { content: '/pages/docs/detail/ese-guanambi-2-0.html', layout: '/layouts/_docs-base.html', title: 'ESE Guanambi 2.0 | Documentos' },
    '/docs/detail/guia-modelos': { content: '/pages/docs/detail/guia-modelos.html', layout: '/layouts/_docs-base.html', title: 'Design System | Comunidade PARADOCX'},
    //Docs Referências
    '/docs/detail/wiplash': { content: '/pages/docs/detail/wiplash.html', layout: '/layouts/_docs-base.html', title: 'Wiplash | Documentos' },
    // Docs = Projetos Individuais
    '/projetos/ese-kosmo': { content: '/pages/projetos/ese-kosmo.html', layout: '/layouts/_docs-base.html', title: 'ESE Kosmo | Projetos' },
    '/projetos/radio-multiversus': { content: '/pages/projetos/radio-multiversus.html', layout: '/layouts/_docs-base.html', title: 'Rádio Multiversus | Projetos' },

    // Modelos Layouts
    '/modelo/principais': { content: '/pages/modelo/modelo-principais.html', layout: '/layouts/_principais-base.html', title: 'Modelo Principais' },
    '/modelo/pesquisa': { content: '/pages/modelo/modelo-pesquisa.html', layout: '/layouts/_pesquisa-base.html', title: 'Modelo Pesquisa' },
    '/modelo/personalizaveis': { content: '/pages/modelo/modelo-personalizaveis.html', layout: '/layouts/_personalizaveis-base.html', title: 'Modelo Personalizáveis' },
    '/modelo/formularios': { content: '/pages/modelo/modelo-formularios.html', layout: '/layouts/_formularios-base.html', title: 'Modelo Formulários' },
    '/modelo/estatico': { content: '/pages/modelo/modelo-estatico.html', layout: '/layouts/_estatico-base.html', title: 'Modelo Estático' },
    '/modelo/docs': { content: '/pages/modelo/modelo-docs.html', layout: '/layouts/_docs-base.html', title: 'Modelo Docs' },
};

const appBody = document.getElementById('app-body');
const loader = document.getElementById('loader');

function setupAnchorLinks() {
    // Seleciona links da sidebar e botões que tenham a classe .anchor-link
    const anchorLinks = document.querySelectorAll('.anchor-link, .anchor-link-button, a[href^="#"]'); 
    
    const smoothScroll = (e) => {
        const href = e.currentTarget.getAttribute('href');
        
        // Só ativa se for um link de âncora (começa com #) e não for uma rota do Router (#/...)
        if (href && href.startsWith('#') && !href.startsWith('#/')) {
            e.preventDefault();
            const targetId = href.substring(1); // Remove o #
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                // O 'behavior: smooth' aqui reforça o CSS
                targetElement.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Opcional: Atualiza a URL sem recarregar (para poder compartilhar o link direto da seção)
                history.pushState(null, null, href);
            }
        }
    };

    anchorLinks.forEach(link => {
        // Remove listeners antigos para evitar duplicidade (boa prática em SPA)
        link.removeEventListener('click', smoothScroll);
        link.addEventListener('click', smoothScroll);
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

// --- FUNÇÕES DE RENDERIZAÇÃO ---
function renderIntegrantes() {
    const container = document.getElementById('integrantes-grid-container');
    
    // Se não achou o container (não está na página certa), para a execução
    if (!container) return; 
    
    // Verifica se os dados existem
    if (typeof integrantesData === 'undefined') {
        console.error('Erro: integrantesData não encontrado.');
        return;
    }

    // Limpa o container para não duplicar
    container.innerHTML = '';

    // Renderiza os cards
    integrantesData.forEach(integrante => {
        // Se o link for apenas '#', remove o href para não pular pro topo
        const linkAttr = integrante.url === '#' ? 'href="javascript:void(0)" style="cursor: default;"' : `href="${integrante.url}"`;
        
        const cardHTML = `
            <a ${linkAttr} class="integrante-card">
                <img src="${integrante.image}" alt="Foto de ${integrante.name}" loading="lazy">
                <div class="card-info">
                    <h3>${integrante.name}</h3>
                    <p>${integrante.role}</p>
                </div>
            </a>
        `;
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

// --- 4. FUNÇÃO DE RENDERIZAÇÃO E BUSCA DO FAQ (CORRIGIDA) ---

function renderFaq(data) {
    const container = document.getElementById('faq-list-container');
    // DEBUG: Verifica se o container foi achado
    if (!container) {
        console.warn('RenderFaq: Container #faq-list-container não encontrado no HTML.');
        return;
    }

    // Limpa o container
    container.innerHTML = '';

    if (!data || data.length === 0) {
        container.innerHTML = '<p style="color: var(--color-text-muted); font-style: italic; padding: 1rem;">Nenhuma pergunta encontrada com esse título.</p>';
        return;
    }

    // Injeta o HTML
    data.forEach(item => {
        const faqHTML = `
            <details class="faq-item">
                <summary>${item.question}</summary>
                <p>${item.answer}</p>
            </details>
        `;
        container.innerHTML += faqHTML;
    });
    console.log('RenderFaq: Renderizou ' + data.length + ' perguntas.');
}

function setupFaqSearch() {
    const searchInput = document.getElementById('faq-search-input');
    // Se não houver input (não está na página de FAQ), sai da função
    if (!searchInput) return; 
    
    // Verifica se os dados existem
    if (typeof faqData === 'undefined') {
        console.error('Erro: faqData não está definido. Verifique o data.js');
        return;
    }

    // Renderiza INICIALMENTE (Para aparecer ao carregar a página)
    console.log('SetupFaqSearch: Renderizando lista inicial.');
    renderFaq(faqData);

    // Configura o evento de digitação
    searchInput.addEventListener('input', function() {
        const term = this.value.toLowerCase().trim();
        
        // Se vazio, mostra tudo
        if (term === '') {
            renderFaq(faqData);
            return;
        }

        // FILTRO CORRIGIDO: APENAS PELO TÍTULO (QUESTION)
        const filteredData = faqData.filter(item => 
            item.question.toLowerCase().includes(term)
        );

        renderFaq(filteredData);
        
        // Abre automaticamente os resultados se estiver filtrado
        if(filteredData.length > 0) {
            const details = document.querySelectorAll('#faq-list-container details');
            details.forEach(d => d.open = true);
        }
    });
}

function setupDocsSearch(containerId, sourceData) {
    const searchInput = document.getElementById('doc-search-input');
    if (!searchInput) return;
    searchInput.addEventListener('input', function() {
        const term = this.value.toLowerCase();
        const filteredData = sourceData.filter(doc => doc.title.toLowerCase().includes(term));
        renderDocs(containerId, filteredData);
    });
}

function setupGlossarySearch() {
    const searchInput = document.getElementById('glossary-search-input');
    if (!searchInput || typeof glossaryData === 'undefined') return;
    searchInput.addEventListener('input', function() {
        const term = this.value.toLowerCase();
        const filteredData = glossaryData.map(cat => ({
            ...cat, terms: cat.terms.filter(t => t.term.toLowerCase().includes(term) || t.tags.toLowerCase().includes(term))
        })).filter(cat => cat.terms.length > 0);
        renderGlossary(filteredData);
    });
}

// --- NOVO: LÓGICA DE ENVIO DO FORMULÁRIO (Netlify) ---
function setupFormSubmission() {
    // CORREÇÃO: Procura o formulário APENAS dentro da área de conteúdo injetada
    // Isso evita pegar o formulário oculto do index.html por engano
    const form = document.querySelector('#content-placeholder form[name="inscricao-oficial"]');
    
    if (!form) return; // Se não achar o formulário visível, sai da função

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // 1. IMPEDE O REDIRECIONAMENTO E O ERRO 405

        // Cria os dados para envio
        const formData = new FormData(form);

        // Mostra que está enviando (feedback visual)
        const btn = form.querySelector('button');
        const originalText = btn.innerText;
        btn.innerText = "Enviando...";
        btn.disabled = true;
        btn.style.opacity = "0.7"; // Visual de desabilitado

        // Envia usando AJAX (Fetch)
        fetch('/', {
            method: 'POST',
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString()
        })
        .then(() => {
            // SUCESSO! Substitui o form por uma mensagem bonita
            const container = document.querySelector('.form-content-section');
            if(container) {
                container.innerHTML = `
                    <div style="text-align:center; animation: fadeIn 1s;">
                        <h2 style="color: var(--color-primary); font-size: 2rem; margin-bottom: 1rem;">Bem-vindo ao Paradoxo!</h2>
                        <img src="/image/escudo-equipe-logo.png" style="width: 80px; margin: 0 auto 1rem auto; opacity: 0.8;">
                        <p style="font-size: 1.1rem; line-height: 1.6;">Seus dados foram recebidos com sucesso.<br>Em breve entraremos em contato.</p>
                        <a href="#/inicio" class="cta-button" style="margin-top: 2rem; display:inline-block;">Voltar ao Início</a>
                    </div>
                `;
            }
        })
        .catch((error) => {
            // ERRO (Comum no Localhost)
            console.error('Erro no envio:', error);
            alert("Nota de Desenvolvimento: O envio real funcionará quando publicado no Netlify. No Localhost, esse erro é esperado.");
            
            // Reseta o botão para tentar de novo
            btn.innerText = originalText;
            btn.disabled = false;
            btn.style.opacity = "1";
        });
    });
}

// --- 5. NAVEGAÇÃO PRINCIPAL ---

async function navigate() {
    try {
        const path = window.location.hash.substring(1) || '/inicio';
        const route = routes[path];

        // Rota 404
        if (!route) {
            const layoutResponse = await fetch('/layouts/_principais-base.html');
            appBody.innerHTML = await layoutResponse.text();
            const contentPlaceholder = appBody.querySelector('#content-placeholder');
            contentPlaceholder.innerHTML = '<div style="padding:4rem; text-align:center;"><h1>404</h1><p>Página não encontrada no Multiverso.</p><a href="#/inicio" class="cta-button">Voltar ao Início</a></div>';
            document.title = 'Página Não Encontrada | Comunidade PARADOCX'; // Título 404
            await loadPartials();
            return;
        }

        // 1. ATUALIZA O TÍTULO DA PÁGINA (PLANO C - RESOLVIDO)
        document.title = route.title || 'Comunidade PARADOCX';

        // 2. Carrega o Layout Base
        const layoutResponse = await fetch(route.layout);
        appBody.innerHTML = await layoutResponse.text();

        // 3. Carrega o Conteúdo da Página Específica
        const contentResponse = await fetch(route.content);
        const contentPlaceholder = appBody.querySelector('#content-placeholder');
        if (contentPlaceholder) {
            contentPlaceholder.innerHTML = await contentResponse.text();
        }

        // 4. Carrega Partials (Nav e Footer)
        await loadPartials();

        // 5. Executa Renderizações de Dados Dinâmicos
        if (typeof integrantesData !== 'undefined') renderIntegrantes();
        if (typeof communityDocsData !== 'undefined') renderDocs('community-docs-grid-container', communityDocsData);
        if (typeof referenceDocsData !== 'undefined') renderDocs('reference-docs-grid-container', referenceDocsData);
        if (typeof eventsData !== 'undefined') renderEvents();
        if (typeof newsData !== 'undefined') renderNews();
        if (typeof glossaryData !== 'undefined') renderGlossary(glossaryData);
        
        // Renderização Inicial do FAQ
        if (typeof faqData !== 'undefined') renderFaq(faqData);

        // 6. Configura Interatividades
        setupAnchorLinks();
        if (typeof communityDocsData !== 'undefined') setupDocsSearch('community-docs-grid-container', communityDocsData);
        if (typeof referenceDocsData !== 'undefined') setupDocsSearch('reference-docs-grid-container', referenceDocsData);
        setupGlossarySearch();
        setupFaqSearch();
        setupFormSubmission();

        // 7. Inicializa Carrossel (Seguro)
        if (window.CarouselSystem) {
            setTimeout(() => {
                window.CarouselSystem.init();
            }, 100);
        }

        // Rola para o topo
        window.scrollTo(0, 0);

    } catch (error) {
        console.error('Erro Crítico no Router:', error);
        appBody.innerHTML = '<h1 style="color:white; text-align:center; margin-top:50px;">Erro ao carregar a realidade. Verifique o console (F12).</h1>';
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