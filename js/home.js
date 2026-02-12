/**
 * home.js - Lógica exclusiva para a Mega Landing Page (Início)
 * Este script monitora a navegação e ativa os efeitos quando a Home é carregada.
 */

(function () {
    'use strict';

    console.log("🔧 Módulo Home Effects Carregado. Aguardando navegação...");

    // Configurações
    const CONFIG = {
        typeSpeed: 100,
        deleteSpeed: 50,
        pauseDelay: 2000,
        counterDuration: 2000
    };

    // Estado Global Local
    let isHomeActive = false;

    // --- FUNÇÕES DE EFEITO ---

    // 1. Efeito de Digitação (Typewriter)
    function initTypewriter() {
        const target = document.getElementById('typewriter-text');
        if (!target) return;

        const phrases = [
            "The art of living 'WHAT IF?'",
            "Hackeando a Idiocracia.",
            "Engenharia da Realidade.",
            "Bem-vindo ao Paradoxo."
        ];

        let phraseIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let timeoutId = null;

        // Limpa texto inicial para garantir cursor
        target.innerHTML = '<span class="cursor-blink">|</span>';

        function type() {
            // Se saiu da página, para tudo
            if (!document.getElementById('typewriter-text')) return;

            const currentPhrase = phrases[phraseIndex];
            const visibleText = isDeleting
                ? currentPhrase.substring(0, charIndex - 1)
                : currentPhrase.substring(0, charIndex + 1);

            // Atualiza o texto mantendo o cursor
            target.innerHTML = visibleText + '<span class="cursor-blink">|</span>';

            if (isDeleting) {
                charIndex--;
            } else {
                charIndex++;
            }

            let nextSpeed = isDeleting ? CONFIG.deleteSpeed : CONFIG.typeSpeed;

            if (!isDeleting && charIndex === currentPhrase.length) {
                isDeleting = true;
                nextSpeed = CONFIG.pauseDelay;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
                nextSpeed = 500;
            }

            timeoutId = setTimeout(type, nextSpeed);
        }

        type();
    }

    // 2. Efeito Tilt 3D nos Cards
    function initTiltEffect() {
        const cards = document.querySelectorAll('.tilt-card, .glass-card');

        cards.forEach(card => {
            // Remove listeners antigos se houver (para evitar duplicidade)
            card.removeEventListener('mousemove', handleTiltMove);
            card.removeEventListener('mouseleave', handleTiltLeave);

            // Adiciona novos
            card.addEventListener('mousemove', handleTiltMove);
            card.addEventListener('mouseleave', handleTiltLeave);
        });
    }

    function handleTiltMove(e) {
        const card = this;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        // Intensidade do efeito
        const rotateX = ((y - centerY) / centerY) * -4; // Invertido para naturalidade
        const rotateY = ((x - centerX) / centerX) * 4;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    }

    function handleTiltLeave() {
        this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    }

    // 3. Contadores Animados
    function initCounters() {
        const statsSection = document.querySelector('.stats-container');
        if (!statsSection) return;

        const counters = document.querySelectorAll('.stat-number');
        let activated = false;

        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !activated) {
                activated = true;

                counters.forEach(counter => {
                    const rawValue = counter.getAttribute('data-value') || counter.innerText;
                    const target = parseInt(rawValue.replace(/\D/g, '')); // Pega só números
                    const suffix = rawValue.replace(/[0-9]/g, ''); // Pega o resto (+, k, etc)

                    if (isNaN(target)) return; // Se for símbolo infinito, ignora

                    let startTimestamp = null;

                    const step = (timestamp) => {
                        if (!startTimestamp) startTimestamp = timestamp;
                        const progress = Math.min((timestamp - startTimestamp) / CONFIG.counterDuration, 1);

                        // Easing function para suavizar o final
                        const easeOut = 1 - Math.pow(1 - progress, 3);

                        counter.innerText = Math.floor(easeOut * target) + suffix;

                        if (progress < 1) {
                            window.requestAnimationFrame(step);
                        } else {
                            counter.innerText = rawValue; // Garante valor final exato
                        }
                    };

                    window.requestAnimationFrame(step);
                });
            }
        }, { threshold: 0.5 });

        observer.observe(statsSection);
    }

    // 4. Parallax do Hero
    function initHeroParallax() {
        const hero = document.getElementById('home-hero');
        const glow = document.querySelector('.hero-glow');

        if (hero && glow) {
            hero.addEventListener('mousemove', (e) => {
                const x = (window.innerWidth - e.pageX * 2) / 80;
                const y = (window.innerHeight - e.pageY * 2) / 80;
                glow.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
            });
        }
    }

    // --- 5. GALERIA MOSAICO ---
    function setupHomeGallery() {
        const container = document.getElementById('home-gallery-container');
        if (!container) return;

        console.log("🎨 Iniciando Galeria Mosaico...");

        // 1. Coleta de Dados Segura
        const community = typeof communityDocsData !== 'undefined' ? communityDocsData : [];
        const reference = typeof referenceDocsData !== 'undefined' ? referenceDocsData : [];
        const recomended = typeof recomendedDocsData !== 'undefined' ? recomendedDocsData : [];
        const news = typeof newsData !== 'undefined' ? newsData : [];

        // Junta tudo e embaralha levemente para não ficar sempre igual
        let allDocs = [...community, ...reference, ...recomended, ...news].sort(() => Math.random() - 0.5);

        // 2. Filtros
        const filterAttr = container.getAttribute('data-filter-tag');
        const requestedTags = filterAttr ? filterAttr.split(',').map(t => t.trim()).filter(t => t !== "") : [];
        const currentUrl = window.location.hash;

        let filteredDocs = allDocs.filter(doc => {
            const isEnabled = doc.enabled !== false;
            const isCurrentDoc = doc.url === currentUrl;

            // Prioriza recomendados ou tags especificas
            const matchesTag = requestedTags.length > 0
                ? requestedTags.some(tag => doc.tags && doc.tags.includes(tag))
                : true;

            // Na home, queremos apenas os "Melhores" (Recommended) ou tags específicas
            return isEnabled && !isCurrentDoc && matchesTag && (doc.recommended === true || requestedTags.length > 0);
        });

        // Limita a quantidade para não quebrar o layout (ex: 7 itens fica bonito no mosaico)
        filteredDocs = filteredDocs.slice(0, 7);

        if (filteredDocs.length === 0) {
            container.style.display = 'none';
            return;
        }

        // 3. Padrão do Mosaico (Define os tamanhos)
        // Padrão visual: Grande, Normal, Alto, Largo, Normal, Normal, Largo
        const sizesPattern = ['size-large', '', 'size-tall', 'size-wide', '', '', 'size-wide'];

        // 4. Renderização HTML
        const title = requestedTags.length > 0 ? `Destaques: ${requestedTags.join(' & ')}` : 'Dossiês em Destaque';

        container.innerHTML = `
            <section class="home-gallery-section">
                <div class="home-gallery-header">
                    <h2>${title}</h2>
                    <a href="#/docs" style="color: #888; text-decoration: none; font-size: 0.9rem;">VER ARQUIVO COMPLETO &rarr;</a>
                </div>
                <div class="gallery-masonry">
                    ${filteredDocs.map((doc, index) => {
            // Atribui o tamanho baseado no índice (com fallback para normal)
            const sizeClass = sizesPattern[index] || '';

            return `
                        <a href="${doc.url}" class="gallery-card ${sizeClass}">
                            <img src="${doc.image}" class="gallery-img" alt="${doc.title}" loading="lazy">
                            <div class="gallery-content">
                                <span class="gallery-meta">${(doc.tags && doc.tags[0]) || 'DOC'}</span>
                                <h3 class="gallery-title">${doc.title}</h3>
                            </div>
                        </a>
                        `;
        }).join('')}
                </div>
            </section>
        `;
    }

    // --- 6. EVENTOS REVEAL (ATUALIZADO COM DADOS REAIS) ---
    function setupHomeEvents() {
        const container = document.getElementById('home-events-container');
        if (!container) return;

        // Puxa dados reais do data.js (eventsNewsData)
        const allEvents = typeof eventsData !== 'undefined' ? eventsData : [];
        
        // Filtra apenas eventos futuros ou recentes
        const displayEvents = allEvents.slice(0, 3); // Pega os 3 primeiros

        container.innerHTML = `
            <section class="events-reveal-section">
                <div class="events-grid-layout">
                    <!-- Coluna Esquerda: Lista de Eventos -->
                    <div class="events-stack">
                        ${displayEvents.map(ev => {
                            // Extrai dia e mês da data (ex: "12/08/2024")
                            const parts = ev.date ? ev.date.split('/') : ['00', '00'];
                            const day = parts[0];
                            const monthNames = ["JAN", "FEV", "MAR", "ABR", "MAI", "JUN", "JUL", "AGO", "SET", "OUT", "NOV", "DEZ"];
                            const monthIndex = parseInt(parts[1]) - 1;
                            const month = monthNames[monthIndex] || 'MÊS';

                            return `
                            <a href="${ev.url || '#/eventos-noticias'}" class="event-card-reveal tilt-card">
                                <div class="event-date-box">
                                    <span class="event-day">${day}</span>
                                    <span class="event-month">${month}</span>
                                </div>
                                <div class="event-info-box">
                                    <div class="event-tags">
                                        <span class="event-tag-reveal type-${ev.type}">${ev.type || 'Evento'}</span>
                                        ${ev.status ? `<span class="event-status">${ev.status}</span>` : ''}
                                    </div>
                                    <h4 class="event-title-reveal">${ev.title}</h4>
                                    <p class="event-desc-reveal">${ev.description}</p>
                                </div>
                                <div class="event-arrow">&rarr;</div>
                            </a>
                            `;
                        }).join('')}
                    </div>

                    <!-- Coluna Direita: Dossiê Explicativo -->
                    <div class="events-dossier">
                        <div class="dossier-paper">
                            <div class="dossier-header">
                                <span>ARQUIVO: COMUNIDADE</span>
                                <span>STATUS: ATIVO</span>
                            </div>
                            <h3>Protocolos de Encontro</h3>
                            <p style="text-align: justify;">O PARADOCX não é estático. A fricção de ideias gera a energia necessária para a expansão da consciência.</p>
                            
                            <ul class="dossier-list" style="text-align: justify;">
                                <li>
                                    <strong>Presencial (Sede):</strong> Imersões práticas, workshops de pilares e convivência direta.
                                </li>
                                <li>
                                    <strong>Online (Discord):</strong> Calls semanais, cines-fóruns e debates sobre o "E SE?".
                                </li>
                            </ul>

                            <div class="dossier-stamp">CONFIDENCIAL</div>
                            
                            <a href="#/eventos-noticias" class="btn-dossier">Ver Calendário Completo</a>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    // --- 7. ANIMAÇÃO DE ÍCONES (CORRIGIDO PARA MÚLTIPLAS SEÇÕES) ---
    function initIconHover() {
        // CORREÇÃO: Usa querySelectorAll para pegar TODAS as seções
        const sections = document.querySelectorAll('.abstract-torn-section');
        
        if(sections.length === 0) return;

        let totalIconsFound = 0;

        sections.forEach(section => {
            const icons = section.querySelectorAll('.social-link img');
            
            icons.forEach(icon => {
                // Clona o nó para remover event listeners antigos e garantir limpeza
                const newIcon = icon.cloneNode(true);
                icon.parentNode.replaceChild(newIcon, icon);

                newIcon.addEventListener('mouseenter', () => {
                    newIcon.style.transition = 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
                    newIcon.style.filter = 'grayscale(0%) drop-shadow(0 0 10px rgba(255,255,255,0.5))';
                    newIcon.style.transform = 'scale(1.3) rotate(-5deg)';
                });

                newIcon.addEventListener('mouseleave', () => {
                    newIcon.style.transition = 'all 0.3s ease';
                    newIcon.style.filter = 'grayscale(100%) opacity(0.7)';
                    newIcon.style.transform = 'scale(1) rotate(0deg)';
                });
                
                totalIconsFound++;
            });
        });

        console.log(`✅ Ícones animados: ${totalIconsFound} encontrados em ${sections.length} seções.`);
    }

    // --- 8. SISTEMA DE ABAS (ÁREAS) ---
    function setupAreasTabs() {
        const container = document.querySelector('.areas-section');
        if (!container) return;

        const btns = container.querySelectorAll('.tab-btn');
        const contents = container.querySelectorAll('.tab-content');

        btns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove ativo de todos
                btns.forEach(b => b.classList.remove('active-tab-btn'));
                contents.forEach(c => c.classList.remove('active-content'));

                // Ativa o clicado
                btn.classList.add('active-tab-btn');
                const targetId = btn.getAttribute('data-target');
                const targetContent = document.getElementById(`area-${targetId}`);
                if (targetContent) {
                    targetContent.classList.add('active-content');
                }
            });
        });
    }

    // --- 9. MARQUEE DE VOCAÇÕES (DADOS DO data.js) ---
    function setupVocationsMarquee() {
        const container = document.getElementById('vocations-marquee-container');
        if (!container) return;

        // Pega dados reais ou usa fallback
        const members = typeof integrantesData !== 'undefined' ? integrantesData : [];
        
        // Se não tiver membros, não renderiza
        if (members.length === 0) return;

        // Função auxiliar para criar o HTML de um card
        const createCard = (member) => `
            <div class="mini-talent-card">
                <img src="${member.image}" class="mini-avatar" alt="${member.name}" onerror="this.src='/image/icons/user-profile.png'">
                <div class="mini-info">
                    <h5>${member.name.split(' ')[0]}</h5> <!-- Primeiro nome -->
                    <span>${member.role || 'Membro'}</span>
                </div>
            </div>
        `;

        // Duplica a lista para criar o loop infinito sem buracos
        // Dividimos em 2 linhas para ficar visualmente rico
        const half = Math.ceil(members.length / 2);
        const list1 = members.slice(0, half);
        const list2 = members.slice(half, members.length);
        
        // Garante que tenha elementos suficientes para rolar
        const row1Content = [...list1, ...list1, ...list1, ...list1].map(createCard).join('');
        const row2Content = [...list2, ...list2, ...list2, ...list2].map(createCard).join('');

        container.innerHTML = `
            <div class="talent-marquee-wrapper">
                <div class="talent-row scroll-left">
                    ${row1Content}
                </div>
                <div class="talent-row scroll-right">
                    ${row2Content}
                </div>
            </div>
        `;
    }

    // --- FUNÇÃO MASTER DE INICIALIZAÇÃO ---
    function activateHome() {
        console.log("🚀 Home detectada! Inicializando efeitos...");

        // Pequeno delay para garantir que o CSS foi aplicado
        setTimeout(() => {
            initTypewriter();
            initTiltEffect();
            initCounters();
            initHeroParallax();
            setupHomeGallery();
            setupHomeEvents(); 
            initIconHover();
            setupAreasTabs();       
            setupVocationsMarquee();
        }, 200);
    }

    // --- OBSERVADOR DE NAVEGAÇÃO (A MAGIA) ---
    // Isso vigia o site. Se o elemento #home-hero aparecer, ele roda o script.
    const observer = new MutationObserver((mutations) => {
        const homeHero = document.getElementById('home-hero');

        if (homeHero && !isHomeActive) {
            isHomeActive = true;
            activateHome();
            document.body.classList.add('page-home-active');
        } else if (!homeHero && isHomeActive) {
            isHomeActive = false;
            document.body.classList.remove('page-home-active');
            console.log("🛑 Saiu da Home. Limpando efeitos.");
        }
    });

    // Começa a vigiar o corpo do site por mudanças (navegação do router)
    observer.observe(document.body, { childList: true, subtree: true });

})();