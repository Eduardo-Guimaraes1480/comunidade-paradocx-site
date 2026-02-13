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
    '/mural': { content: '/pages/mural.html', layout: '/layouts/_personalizaveis-base.html', title: 'Mural de Impacto | Parceiros' },

    //Formularios
    '/junte-se': { content: '/pages/junte-se.html', layout: '/layouts/_formularios-base.html', title: 'Junte-se a Nós | Comunidade PARADOCX' },
    '/enviar-assuntos': { content: '/pages/enviar-assuntos.html', layout: '/layouts/_formularios-base.html', title: 'Enviar Assuntos | Comunidade PARADOCX' },

    // Páginas de Pesquisa
    '/docs/produzido-comunidade': { content: '/pages/docs/produzido-comunidade.html', layout: '/layouts/_pesquisa-base.html', title: 'Docs da Comunidade | Comunidade PARADOCX' },
    '/docs/referencias': { content: '/pages/docs/referencias.html', layout: '/layouts/_pesquisa-base.html', title: 'Referências | Comunidade PARADOCX' },
    '/glossario': { content: '/pages/glossario.html', layout: '/layouts/_pesquisa-base.html', title: 'Glossário | Comunidade PARADOCX' },
    '/faq': { content: '/pages/faq.html', layout: '/layouts/_pesquisa-base.html', title: 'FAQ | Comunidade PARADOCX' },
    '/vocacoes': { content: '/pages/vocacoes.html', layout: '/layouts/_principais-base.html', title: 'Vocações | Comunidade PARADOCX' },

    // Páginas Sobre a Comunidade
    '/comece-aqui': { content: '/pages/comece-aqui.html', layout: '/layouts/_principais-base.html', title: 'Comece Aqui | Comunidade PARADOCX' },
    '/como-participar': { content: '/pages/como-participar.html', layout: '/layouts/_principais-base.html', title: 'Como Participar | Comunidade PARADOCX' },
    '/pilares': { content: '/pages/pilares.html', layout: '/layouts/_estatico-base.html', title: 'Pilares | Comunidade PARADOCX' },
    '/sobre': { content: '/pages/sobre.html', layout: '/layouts/_estatico-base.html', title: 'Sobre Nós | Comunidade PARADOCX' },
    '/cronologia': { content: '/pages/cronologia.html', layout: '/layouts/_estatico-base.html', title: 'Cronologia | Comunidade PARADOCX' },
    '/contato': { content: '/pages/contato.html', layout: '/layouts/_estatico-base.html', title: 'Contato | Comunidade PARADOCX' },
    '/termos-de-uso': { content: '/pages/termos-de-uso.html', layout: '/layouts/_estatico-base.html', title: 'Termos de Uso | Comunidade PARADOCX' },
    '/privacidade': { content: '/pages/privacidade.html', layout: '/layouts/_estatico-base.html', title: 'Política de Privacidade | Comunidade PARADOCX' },

    // Paginas destinadas a AREAS
    '/areas': { content: '/pages/areas.html', layout: '/layouts/_principais-base.html', title: 'Áreas de Atuação | Comunidade PARADOCX' },
    '/areas/discutidores': { content: '/pages/areas/discutidores.html', layout: '/layouts/_principais-base.html', title: 'Discutidores | Comunidade PARADOCX' },
    '/areas/criadores': { content: '/pages/areas/criadores.html', layout: '/layouts/_principais-base.html', title: 'Criadores | Comunidade PARADOCX' },
    '/areas/pesquisadores': { content: '/pages/areas/pesquisadores.html', layout: '/layouts/_principais-base.html', title: 'Pesquisadores | Comunidade PARADOCX' },
    '/areas/saude': { content: '/pages/areas/saude.html', layout: '/layouts/_principais-base.html', title: 'Saúde| Comunidade PARADOCX' },
    '/areas/financeiro': { content: '/pages/areas/financeiro.html', layout: '/layouts/_principais-base.html', title: 'Financeiro | Comunidade PARADOCX' },
    '/areas/subgrupo/the-free-society': { content: '/pages/areas/subgrupo/the-free-society.html', layout: '/layouts/_personalizaveis-base.html', title: 'The Free Society | Comunidade PARADOCX' },

    // Páginas de Eventos e Noticias
    '/eventos-noticias': { content: '/pages/eventos-noticias.html', layout: '/layouts/_principais-base.html', title: 'Eventos & Notícias | Comunidade PARADOCX' },
    '/eventos/workshop-pilares': { content: '/pages/eventos/workshop-pilares.html', layout: '/layouts/_docs-base.html', title: 'Workshop Pilares | Eventos' },
    '/noticias/ese-kosmo-alpha': { content: '/pages/noticias/ese-kosmo-alpha.html', layout: '/layouts/_docs-base.html', title: 'ESE Kosmo Alpha | Noticias' },
    '/noticias/entrevista-guilherme': { content: '/pages/noticias/entrevista-guilherme.html', layout: '/layouts/_docs-base.html', title: 'Entrevista Guilherme | Noticias' },
    '/noticias/soc-veracruz-news': { content: '/pages/noticias/soc-veracruz-news.html', layout: '/layouts/_docs-base.html', title: 'Sociedade Vera Cruz | Noticias' },
    '/noticias/sitebanco-dados-news': { content: '/pages/noticias/sitebanco-dados-news.html', layout: '/layouts/_docs-base.html', title: 'Banco de Dados | Noticias' },

    // Páginas de integrantes 
    '/integrantes': { content: '/pages/integrantes.html', layout: '/layouts/_estatico-base.html', title: 'Integrantes | Comunidade PARADOCX' },
    '/integrantes/eduardo-guimaraes': { content: '/pages/integrantes/eduardo-guimaraes.html', layout: '/layouts/_personalizaveis-base.html', title: 'Eduardo Guimarães | Integrantes' },
    '/integrantes/guilherme-nunes': { content: '/pages/integrantes/guilherme-nunes.html', layout: '/layouts/_docs-base.html', title: 'Perfil: Guilherme Nunes' },

    // DOCS GERAIS:
    //Docs Comunidade
    '/docs/detail/paradocx-bahia3-0': { content: '/pages/docs/detail/paradocx-bahia3-0.html', layout: '/layouts/_docs-base.html', title: 'Paradocx Docs 3.0 | Documentos' },
    '/docs/detail/guia-modelos': { content: '/pages/docs/detail/guia-modelos.html', layout: '/layouts/_docs-base.html', title: 'Design System | Comunidade PARADOCX'},
    '/docs/detail/experimento-comentarios': { content: '/pages/docs/detail/experimento-comentarios.html', layout: '/layouts/_docs-base.html', title: 'Dev Log: Comentários | Comunidade PARADOCX'},
    '/docs/detail/valores-e-protocolos': { content: '/pages/docs/detail/valores-e-protocolos.html', layout: '/layouts/_docs-base.html', title: 'Valores/Protocolos | Comunidade PARADOCX'},
    '/docs/detail/debate-hub-estatico': { content: '/pages/docs/detail/debate-hub-estatico.html', layout: '/layouts/_docs-base.html', title: 'Debate Hub Estatico | Comunidade PARADOCX'},
    //Docs Referências
    '/docs/detail/wiplash': { content: '/pages/docs/detail/wiplash.html', layout: '/layouts/_docs-base.html', title: 'Wiplash | Documentos' },
    // Docs = Projetos Individuais
    '/projetos/ese-kosmo': { content: '/pages/projetos/ese-kosmo.html', layout: '/layouts/_docs-base.html', title: 'ESE Kosmo | Projetos' },
    '/projetos/universo-ese': { content: '/pages/projetos/universo-ese.html', layout: '/layouts/_docs-base.html', title: 'Universo ESE| Projetos' },

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

// --- CORREÇÃO DO MENU MOBILE ---
// Esta função será chamada toda vez que o NAV for carregado
function setupMobileNav() {
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    // Se não encontrar os elementos, sai (pode ser um layout sem menu)
    if (!mobileBtn || !navLinks) return;

    // 1. Remove listeners antigos para não duplicar (Clone Node Trick)
    const newBtn = mobileBtn.cloneNode(true);
    mobileBtn.parentNode.replaceChild(newBtn, mobileBtn);

    // 2. Adiciona o listener de clique
    newBtn.addEventListener('click', function(e) {
        e.stopPropagation(); // Impede que o clique feche o menu imediatamente
        this.classList.toggle('active'); // Animação do X
        navLinks.classList.toggle('active'); // Desliza o menu
    });

    // 3. Fechar menu ao clicar em um link
    const allLinks = navLinks.querySelectorAll('a:not(.drop-trigger)');
    allLinks.forEach(link => {
        link.addEventListener('click', () => {
            newBtn.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // 4. Fechar ao clicar fora
    document.addEventListener('click', (e) => {
        if (!navLinks.contains(e.target) && !newBtn.contains(e.target) && navLinks.classList.contains('active')) {
            newBtn.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });

    // 5. Lógica para Dropdowns no Mobile (Toque para abrir)
    const dropdowns = document.querySelectorAll('.dropdown > a.drop-trigger');
    dropdowns.forEach(drop => {
        drop.addEventListener('click', function(e) {
            if (window.innerWidth <= 900) {
                e.preventDefault();
                // Impede que o clique propague e dispare outros listeners indesejados
                e.stopPropagation();
                
                const parent = this.parentElement;
                parent.classList.toggle('mobile-open');
            }
        });
    });
}

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

// Carregador de Parciais (Header/Footer)
async function loadPartials() {
    const navPlaceholder = document.getElementById('nav-placeholder');
    const footerPlaceholder = document.getElementById('footer-placeholder');

    // Carrega NAV
    if (navPlaceholder && !navPlaceholder.innerHTML) {
        try {
            const resp = await fetch('/_partials/nav.html');
            if (resp.ok) {
                navPlaceholder.innerHTML = await resp.text();
                setupMobileNav(); // <--- AQUI ESTÁ A CORREÇÃO: Chama a função logo após injetar o HTML
            }
        } catch (e) {
            console.error("Erro ao carregar nav:", e);
        }
    } else if (navPlaceholder && navPlaceholder.innerHTML) {
        // Se o nav já existe (navegação interna), reconecta os eventos
        setupMobileNav(); 
    }

    // Carrega FOOTER
    if (footerPlaceholder && !footerPlaceholder.innerHTML) {
        try {
            const resp = await fetch('/_partials/footer.html');
            if (resp.ok) footerPlaceholder.innerHTML = await resp.text();
        } catch (e) { console.error("Erro footer:", e); }
    }
}

// Renderizador de Layout
async function renderPage(route) {
    if (loader) loader.classList.remove('hidden');
    appBody.style.display = 'none';

    try {
        let layoutHtml;
        
        // Verifica se o layout já está carregado para otimizar
        const currentLayout = appBody.getAttribute('data-current-layout');
        
        if (currentLayout !== route.layout) {
            const layoutResp = await fetch(route.layout);
            if (!layoutResp.ok) throw new Error('Layout não encontrado');
            layoutHtml = await layoutResp.text();
            appBody.innerHTML = layoutHtml;
            appBody.setAttribute('data-current-layout', route.layout);
            
            // Recarrega parciais pois o layout mudou
            await loadPartials();
        } else {
            // Mesmo layout, garante que eventos do menu funcionem
            setupMobileNav();
        }

        // Carrega Conteúdo da Página
        const contentResp = await fetch(route.content);
        if (!contentResp.ok) throw new Error('Conteúdo não encontrado');
        const contentHtml = await contentResp.text();

        // Injeta no placeholder do layout
        const contentPlaceholder = document.getElementById('content-placeholder');
        if (contentPlaceholder) {
            contentPlaceholder.innerHTML = contentHtml;
            // Executa scripts que estavam no HTML injetado (importante para o home.js e outros)
            executeScripts(contentPlaceholder);
        }

        // Atualiza Título
        document.title = route.title || 'Comunidade PARADOCX';

        // Recarrega Funcionalidades Específicas
        initializePageScripts();

    } catch (error) {
        console.error('Erro render:', error);
        appBody.innerHTML = '<h1>Erro 404 - Página não encontrada na Realidade.</h1>';
    } finally {
        if (loader) loader.classList.add('hidden');
        appBody.style.display = 'block';
    }
}

function executeScripts(element) {
    const scripts = element.querySelectorAll('script');
    scripts.forEach(oldScript => {
        const newScript = document.createElement('script');
        Array.from(oldScript.attributes).forEach(attr => newScript.setAttribute(attr.name, attr.value));
        newScript.appendChild(document.createTextNode(oldScript.innerHTML));
        oldScript.parentNode.replaceChild(newScript, oldScript);
    });
}

// Inicializa scripts específicos de página (Carrossel, Marquee, etc)
function initializePageScripts() {
    // 1. Carrossel de Docs (Recomendados)
    if (typeof setupRecommendedDocsCarousel === 'function') {
        setupRecommendedDocsCarousel();
    }

    // 2. Carrossel de Integrantes
    if (typeof setupIntegrantesCarousel === 'function') {
        setupIntegrantesCarousel();
    }

    // 3. Marquee (Letreiro Infinito)
    if (typeof renderMarquee === 'function') {
        if(document.getElementById('marquee-row-1')) {
            renderMarquee('marquee-row-1', 'normal');
            renderMarquee('marquee-row-2', 'reverse');
        }
    }

    // 4. Scripts da Home (Invocados via home.js observer, mas forçamos aqui se necessário)
    // O home.js usa MutationObserver, então ele deve pegar as mudanças automaticamente.
}


function setupTypewriterEffect() {
    // Procura o elemento de texto dinâmico na página de Equipe
    const dynamicText = document.getElementById('dynamic-text');
    if (!dynamicText) return; // Se não achar, sai da função

    const words = [
        "...",
        "nlouquentes",
        "xperimentais",
        "speciais",
        "nigmáticas",
        "xtraordinárias",
        "starpafúrdiantes"
    ];

    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;

    function type() {
        // Verifica se o elemento ainda existe (se o usuário trocou de página, para o loop)
        if (!document.getElementById('dynamic-text')) return;

        const currentWord = words[wordIndex];

        if (isDeleting) {
            // Apagando
            dynamicText.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 50; // Mais rápido ao apagar
        } else {
            // Escrevendo
            dynamicText.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 100;
        }

        // Lógica de troca de estado
        if (!isDeleting && charIndex === currentWord.length) {
            // Terminou de escrever a palavra
            isDeleting = true;
            typeSpeed = 5000; // Pausa de 5s antes de apagar
        } else if (isDeleting && charIndex === 0) {
            // Terminou de apagar
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length; // Próxima palavra
            typeSpeed = 500; // Pausa curta antes de começar a próxima
        }

        setTimeout(type, typeSpeed);
    }

    // Inicia o ciclo
    type();
}

// --- FUNÇÃO DO CARROSSEL DE HUBS (NOVO) ---
function setupHubCarousel() {
    const track = document.getElementById('hubs-track');
    const prevBtn = document.getElementById('hub-prev');
    const nextBtn = document.getElementById('hub-next');
    
    if (!track || !prevBtn || !nextBtn) return; // Se não estiver na página de contato, sai

    const slides = Array.from(track.children);
    let currentIndex = 0;

    function updateSlide(index) {
        // Move o trilho
        track.style.transform = `translateX(-${index * 100}%)`;
        
        // Atualiza classe active para animações de texto
        slides.forEach(s => s.classList.remove('active'));
        slides[index].classList.add('active');
    }

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides.length; // Loop infinito
        updateSlide(currentIndex);
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Loop infinito reverso
        updateSlide(currentIndex);
    });
}

// --- FUNÇÃO PARA O MURAL DE PARCEIROS ---
function renderMarquee(containerId, direction = 'normal') {
    const container = document.getElementById(containerId);
    if (!container || typeof partnersData === 'undefined') return;

    // Duplicamos os dados para criar o loop infinito
    const content = [...partnersData, ...partnersData, ...partnersData].map(p => `
        <div class="marquee-item" style="
            display: inline-flex; 
            align-items: center; 
            gap: 0.5rem; 
            padding: 1rem 2rem; 
            background: rgba(255,255,255,0.05); 
            border: 1px solid rgba(255,255,255,0.1); 
            border-radius: 50px; 
            margin: 0 1rem;
            white-space: nowrap;
        ">
            <span style="font-size: 1.5rem;">${p.logo}</span>
            <div>
                <strong style="color: #fff; display: block;">${p.name}</strong>
                <span style="font-size: 0.8rem; color: #aaa;">${p.type}</span>
            </div>
        </div>
    `).join('');

    container.innerHTML = `
        <div class="marquee-track ${direction === 'reverse' ? 'reverse' : ''}" style="display: flex; width: max-content;">
            ${content}
        </div>
    `;
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
        const targetAttribute = event.external ? 'target="_blank"' : '';
        
        // Extrai dia, mês e ano da data (ex: "11/02/2026")
        const parts = event.date ? event.date.split('/') : ['00', '00', '0000'];
        const day = parts[0];
        const year = parts[2];
        const monthNames = [
            "de Janeiro de", 
            "de Fevereiro de", 
            "de Março de", 
            "de Abril de", 
            "de Maio de", 
            "de Junho de", 
            "de Julho de", 
            "de Agosto de", 
            "de Setembro de", 
            "de Outubro de", 
            "de Novembro de", 
            "de Dezembro de"
        ];
        const monthIndex = parseInt(parts[1]) - 1;
        const month = monthNames[monthIndex] || 'MÊS';
        const formattedDate = `${day} ${month} ${year}`;
        
        const cardHTML = `
            <div class="event-item">
                <img src="${event.image}" alt="${event.title}" class="event-image">
                
                <div class="event-content">
                    <h3>${event.title}</h3>
                    <p>${event.description}</p>
                </div>
                
                <div class="event-meta">
                    <span class="event-date">${formattedDate}</span>
                    <a href="${event.url}" class="card-button" ${targetAttribute}>${event.buttonText}</a>
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
    if (!container) return;

    container.innerHTML = '';

    if (!data || data.length === 0) {
        container.innerHTML = '<p style="color: var(--color-text-muted); font-style: italic; padding: 1rem;">Nenhuma pergunta encontrada.</p>';
        return;
    }

    // Mapeia cada categoria
    data.forEach(categoryObj => {
        const categoryWrapper = document.createElement('div');
        categoryWrapper.className = 'faq-category-section';
        categoryWrapper.style.marginBottom = '3rem';

        // Título da Categoria (Igual ao Glossário)
        const title = document.createElement('h2');
        title.style.color = 'var(--color-primary)';
        title.style.marginBottom = '1.5rem';
        title.style.fontFamily = "'JetBrains Mono', sans-serif";
        title.style.borderBottom = '1px solid rgba(255,255,255,0.1)';
        title.style.paddingBottom = '0.5rem';
        title.textContent = categoryObj.category;

        categoryWrapper.appendChild(title);

        // Renderiza as perguntas desta categoria
        categoryObj.questions.forEach(item => {
            const faqHTML = `
                <details class="faq-item">
                    <summary>${item.question}</summary>
                    <p style="text-align: justify; padding: 1rem; color: #ccc;">${item.answer}</p>
                </details>
            `;
            categoryWrapper.innerHTML += faqHTML;
        });

        container.appendChild(categoryWrapper);
    });
}

function setupFaqSearch() {
    const searchInput = document.getElementById('faq-search-input');
    if (!searchInput) return; 
    
    if (typeof faqData === 'undefined') {
        console.error('Erro: faqData não definido no data.js');
        return;
    }

    renderFaq(faqData);

    searchInput.addEventListener('input', function() {
        const term = this.value.toLowerCase().trim();
        
        if (term === '') {
            renderFaq(faqData);
            return;
        }

        // Lógica de Filtro Complexo (Filtra perguntas e remove categorias vazias)
        const filteredData = faqData.map(cat => ({
            ...cat,
            questions: cat.questions.filter(q => 
                q.question.toLowerCase().includes(term)
            )
        })).filter(cat => cat.questions.length > 0);

        renderFaq(filteredData);
        
        // Abre os resultados automaticamente ao pesquisar
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

    // LÓGICA DE AUTO-PESQUISA (WIKIPEDIA STYLE)
    const fullPath = window.location.hash.substring(1);
    const params = new URLSearchParams(fullPath.split('?')[1]);
    const wordParam = params.get('word');

    if (wordParam) {
        searchInput.value = wordParam;
        // Executa o filtro imediatamente
        const term = wordParam.toLowerCase();
        const filteredData = glossaryData.map(cat => ({
            ...cat, terms: cat.terms.filter(t => t.term.toLowerCase().includes(term) || t.tags.toLowerCase().includes(term))
        })).filter(cat => cat.terms.length > 0);
        renderGlossary(filteredData);
    }

    // Listener normal para quando o usuário digita
    searchInput.addEventListener('input', function() {
        const term = this.value.toLowerCase();
        const filteredData = glossaryData.map(cat => ({
            ...cat, terms: cat.terms.filter(t => t.term.toLowerCase().includes(term) || t.tags.toLowerCase().includes(term))
        })).filter(cat => cat.terms.length > 0);
        renderGlossary(filteredData);
    });
}

function setupRecommendedDocsCarousel() {
    const container = document.getElementById('recommended-docs-carousel');
    if (!container) return;

    // 1. Unifica as fontes de dados com proteção contra variáveis inexistentes
    const community = typeof communityDocsData !== 'undefined' ? communityDocsData : [];
    const reference = typeof referenceDocsData !== 'undefined' ? referenceDocsData : [];
    const recomended = typeof recomendedDocsData !== 'undefined' ? recomendedDocsData : [];
    const news = typeof newsData !== 'undefined' ? newsData : [];
    
    const allDocs = [...community, ...reference, ...recomended, ...news];

    // 2. Captura as tags solicitadas e a URL atual (para exclusão)
    const filterAttr = container.getAttribute('data-filter-tag');
    // Transforma "Tag1, Tag2" em um Array ["Tag1", "Tag2"] limpo
    const requestedTags = filterAttr ? filterAttr.split(',').map(t => t.trim()).filter(t => t !== "") : [];
    const currentUrl = window.location.hash;

    // 3. Lógica de Filtragem Profissional
    let filteredDocs = allDocs.filter(doc => {
        // Regra A: Deve estar habilitado
        const isEnabled = doc.enabled !== false;

        // Regra B: Não pode ser o documento que o usuário já está vendo
        const isCurrentDoc = doc.url === currentUrl;
        
        // Regra C: Deve bater com QUALQUER uma das tags solicitadas (Lógica OR)
        const matchesAnyTag = requestedTags.length > 0 && doc.tags 
            ? requestedTags.some(tag => doc.tags.includes(tag)) 
            : false;
        
        // Regra D: Se não houver tags, usa os marcados como recommended: true
        const isRecommended = doc.recommended === true;

        // Decisão: Prioriza tags se existirem, senão usa recomendados gerais
        const meetsCriteria = requestedTags.length > 0 ? matchesAnyTag : isRecommended;

        return isEnabled && !isCurrentDoc && meetsCriteria;
    });

    // Se após os filtros não sobrar nada, esconde a seção
    if (filteredDocs.length === 0) {
        container.style.display = 'none';
        return;
    } else {
        container.style.display = 'block'; // Garante que apareça se houver dados
    }

    // 4. Geração do Título Dinâmico (Mais elegante)
    let displayTitle = 'Conteúdo Recomendado';
    if (requestedTags.length > 0) {
        displayTitle = requestedTags.length === 1 
            ? `Relacionado: ${requestedTags[0]}` 
            : `Relacionados: ${requestedTags.join(' & ')}`;
    }

    // 5. Injeção do HTML (Slim Glass Design)
    container.innerHTML = `
        <section class="rd-carousel-section">
            <div class="rd-carousel-header">
                <h2>${displayTitle}</h2>
                <span style="font-size: 0.8rem; color: #666; font-family: 'JetBrains Mono';">INVESTIGAÇÃO ATIVA &rarr;</span>
            </div>
            <div class="rd-carousel-container">
                <button class="rd-nav-btn rd-prev" id="rd-prev">&#10094;</button>
                <div class="rd-carousel-track-wrapper">
                    <div class="rd-carousel-track" id="rd-track">
                        ${filteredDocs.map(doc => `
                            <a href="${doc.url}" class="rd-doc-card">
                                <img src="${doc.image}" class="rd-card-img" alt="${doc.title}">
                                <div class="rd-card-body">
                                    <div class="rd-card-meta">
                                        <span>${doc.date || 'Recente'}</span>
                                        <span>${(doc.tags && doc.tags[0]) || 'DOCS.X'}</span>
                                    </div>
                                    <h3 class="rd-card-title">${doc.title}</h3>
                                    <p class="rd-card-desc">${doc.description}</p>
                                    <div class="rd-card-tags">
                                        ${doc.tags ? doc.tags.slice(0, 3).map(tag => `<span class="rd-tag">${tag}</span>`).join('') : ''}
                                    </div>
                                </div>
                            </a>
                        `).join('')}
                    </div>
                </div>
                <button class="rd-nav-btn rd-next" id="rd-next">&#10095;</button>
            </div>
        </section>
    `;

    // 6. Lógica de Movimento Atualizada para o novo Array
    const track = document.getElementById('rd-track');
    const nextBtn = document.getElementById('rd-next');
    const prevBtn = document.getElementById('rd-prev');
    let currentIndex = 0;

    const updateSlider = () => {
        const card = track.querySelector('.rd-doc-card');
        if (!card) return;
        const cardWidth = card.offsetWidth + 24; // largura + gap
        track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    };

    nextBtn.addEventListener('click', () => {
        const visibleCards = window.innerWidth > 900 ? 3 : 1;
        const maxIndex = filteredDocs.length - visibleCards;
        currentIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1;
        updateSlider();
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = currentIndex <= 0 ? 0 : currentIndex - 1;
        updateSlider();
    });

    // Garante que o slider se ajuste se a janela mudar de tamanho
    window.addEventListener('resize', updateSlider);
}

// --- FUNÇÃO DE RENDERIZAÇÃO DAS VOCAÇÕES (CORRIGIDA) ---
function initVocacoesPage() {
    // 1. Tentar pegar os dados do arquivo data.js (Variável Global)
    // Tenta vocationsData primeiro (se existir), senão usa integrantesData
    let sourceData = [];
    
    if (typeof vocationsData !== 'undefined') {
        sourceData = vocationsData;
    } else if (typeof integrantesData !== 'undefined') {
        sourceData = integrantesData;
        console.log('Usando integrantesData como backup para Vocações');
    } else {
        console.warn('Dados de Vocações não encontrados.');
    }

    const gridContainer = document.getElementById('vocations-grid-container');
    const searchInput = document.getElementById('vocation-search-input'); // ID CORRIGIDO

    if (!gridContainer) return;

    // Função de Renderização Interna
    function renderVocationsList(filterText = '') {
        gridContainer.innerHTML = '';
        const lowerFilter = filterText.toLowerCase();

        // Filtra os dados
        const filtered = sourceData.filter(member => {
            // Verifica nome, cargo ou skills (se existirem)
            const matchName = member.name.toLowerCase().includes(lowerFilter);
            const matchRole = member.role.toLowerCase().includes(lowerFilter);
            const matchSkills = member.skills ? member.skills.some(skill => skill.toLowerCase().includes(lowerFilter)) : false;
            
            return matchName || matchRole || matchSkills;
        });

        if (filtered.length === 0) {
            gridContainer.innerHTML = '<p style="color:#888; grid-column: 1/-1; text-align:center;">Nenhuma vocação encontrada.</p>';
            return;
        }

        filtered.forEach(member => {
            // Criação do Card
            const card = document.createElement('div');
            card.className = 'talent-card';
            
            // Tratamento de Skills (caso não tenha no array, usa vazio)
            const skillsHtml = member.skills 
                ? member.skills.map(s => `<span class="skill-tag">${s}</span>`).join('') 
                : '';

            card.innerHTML = `
                <div>
                    <div class="talent-header">
                        <img src="${member.image}" alt="${member.name}" class="talent-avatar" onerror="this.src='/image/icons/user-profile.png'">
                        <div class="talent-info">
                            <h3>${member.name}</h3>
                            <span class="talent-role">${member.role}</span>
                        </div>
                    </div>
                    <p class="talent-bio">${member.bio || 'Membro da Comunidade PARADOCX.'}</p>
                </div>
                <div class="skills-wrapper">
                    ${skillsHtml}
                </div>
            `;
            // Torna o card clicável se tiver URL válida e não for #
            if(member.url && member.url !== '#') {
                card.style.cursor = 'pointer';
                card.onclick = () => window.location.hash = member.url;
            }
            
            gridContainer.appendChild(card);
        });
    }

    // Event Listener do Input
    if (searchInput) {
        searchInput.addEventListener('input', (e) => renderVocationsList(e.target.value));
    }

    // Expor função global para a Sidebar (Links de Categoria)
    window.filterVocations = (term) => {
        if(searchInput) {
            searchInput.value = term;
            renderVocationsList(term); // Chama a função interna correta
        }
    };

    // Renderização Inicial
    renderVocationsList();
}

// LÓGICA GENÉRICA PARA FORMULÁRIOS (FUNCIONA EM QUALQUER PÁGINA)
function setupFormSubmission() {
    // Seleciona QUALQUER formulário dentro do content-placeholder
    const form = document.querySelector('#content-placeholder form');
    
    if (!form) return; // Se não tiver formulário na página, sai

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        const btn = form.querySelector('button[type="submit"]');
        const originalText = btn.innerText;
        
        btn.innerText = "Enviando...";
        btn.disabled = true;
        btn.style.opacity = "0.7";
        
        fetch('/', {
            method: 'POST',
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString()
        })
        .then(() => {
            const container = document.querySelector('.form-content-section');
            if(container) {
                container.innerHTML = `
                    <div style="
                        animation: fadeIn 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
                        background: linear-gradient(145deg, rgba(46, 204, 113, 0.07), rgba(46, 204, 113, 0.03)); 
                        border: 1px solid rgba(46, 204, 113, 0.5); 
                        border-radius: 16px; 
                        padding: 3rem 2rem; 
                        text-align: center; 
                        box-shadow: 0 10px 40px rgba(46, 204, 113, 0.1);
                        backdrop-filter: blur(10px);
                        -webkit-backdrop-filter: blur(10px);
                        max-width: 500px;
                        margin: 0 auto;
                    ">
                        <div style="
                            width: 80px; 
                            height: 80px; 
                            background: rgba(46, 204, 113, 0.1); 
                            border-radius: 50%; 
                            display: flex; 
                            align-items: center; 
                            justify-content: center; 
                            margin: 0 auto 1.5rem auto;
                            border: 2px solid #2ecc71;
                            box-shadow: 0 0 20px rgba(46, 204, 113, 0.4);
                        ">
                            <span style="
                                font-size: 2.5rem; 
                                color: #2ecc71; 
                                text-shadow: 0 0 10px #2ecc71;
                            ">🕭</span>
                        </div>

                        <h2 style="
                            font-family: 'Paradocx CA', monospace; 
                            color: #fff; 
                            font-size: 2.5rem; 
                            margin-bottom: 0.5rem;
                            text-transform: uppercase;
                            line-height: 1;
                        ">Transmissão Recebida</h2>
                        
                        <p style="
                            font-family: 'JetBrains Mono', monospace;
                            font-size: 0.9rem; 
                            color: #2ecc71; 
                            margin-bottom: 1.5rem; 
                            text-transform: uppercase; 
                            letter-spacing: 2px;
                        ">/// Status: Sucesso ///</p>

                        <p style="
                            color: #ccc; 
                            text-align: justify !important; 
                            font-size: 1.1rem; 
                            line-height: 1.6; 
                            margin-bottom: 2.5rem;
                        ">
                            Agradecemos o contato. Nossos sistemas registraram sua mensagem e a equipe analisará em breve.
                        </p>

                        <a href="#/inicio" class="cta-button" style="
                            display: inline-block; 
                            background-color: transparent; 
                            border: 1px solid #2ecc71; 
                            color: #2ecc71; 
                            padding: 12px 30px;
                            text-decoration: none;
                            border-radius: 4px;
                            font-weight: bold;
                            text-transform: uppercase;
                            transition: all 0.3s;
                        " onmouseover="this.style.background='#2ecc71'; this.style.color='#000';" onmouseout="this.style.background='transparent'; this.style.color='#2ecc71';">
                            Retornar à Base
                        </a>
                    </div>
                `;
            }
        })
        .catch((error) => {
            alert("Nota de Dev: O envio real só funciona no servidor (Netlify). No Localhost, este erro é esperado.");
            btn.innerText = originalText;
            btn.disabled = false;
            btn.style.opacity = "1";
        });
    });
}

// --- 5. NAVEGAÇÃO PRINCIPAL ---

async function navigate() {
    try {
        // Pega o caminho completo (ex: /glossario?word=Paradoxo)
        const fullPath = window.location.hash.substring(1) || '/inicio';
        
        // Separa a rota dos parâmetros (rota = /glossario | params = word=Paradoxo)
        const [path, queryString] = fullPath.split('?');
        
        const route = routes[path]; // Agora ele acha a rota '/glossario' corretamente

        // Rota 404
        if (!route) {
            const layoutResponse = await fetch('/layouts/_principais-base.html');
            appBody.innerHTML = await layoutResponse.text();
            const contentPlaceholder = appBody.querySelector('#content-placeholder');
            contentPlaceholder.innerHTML = '<div style="padding:4rem; text-align:center;"><h1>404</h1><p>Página não encontrada.</p><a href="#/inicio" class="cta-button">Voltar ao Início</a></div>';
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

        if (document.getElementById('recommended-docs-carousel')) {
            setupRecommendedDocsCarousel();
        }
     
        // Renderização Inicial do FAQ
        if (typeof faqData !== 'undefined') renderFaq(faqData);

        // NOVAS RENDERIZAÇÕES FASE 7
        if (document.getElementById('vocations-grid-container')) {
            initVocacoesPage();
        }
        if (typeof partnersData !== 'undefined' && document.getElementById('marquee-row-1')) {
            renderMarquee('marquee-row-1', 'normal');
            renderMarquee('marquee-row-2', 'reverse');
        }

        // 6. Configura Interatividades
        setupAnchorLinks();
        if (typeof communityDocsData !== 'undefined') setupDocsSearch('community-docs-grid-container', communityDocsData);
        if (typeof referenceDocsData !== 'undefined') setupDocsSearch('reference-docs-grid-container', referenceDocsData);
        setupGlossarySearch();
        setupFaqSearch();
        setupFormSubmission();

        setupTypewriterEffect();
        setupHubCarousel();

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