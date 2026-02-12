// /js/data.js

const integrantesData = [
    {
        id: 'eduardo-guimaraes',
        name: 'Eduardo Guimarães',
        role: 'A Origem (Criador)',
        image: '/image/integrantes/Eduardo-Guimaraes.jpg',
        url: '#/integrantes/eduardo-guimaraes',
        skills: ['Filosofia', 'Gestão', 'Visão Sistêmica'],
        bio: 'O Arquiteto. Aquele que iniciou o movimento e plantou as sementes fundamentais.'
    },
    {
        id: 'guilherme-nunes',
        name: 'Guilherme Nunes',
        role: 'Pequeno Criador',
        image: '/image/integrantes/Guilherme-Nunes.png',
        url: '#/integrantes/guilherme-nunes',
        skills: ['Criação', 'Liderança', 'Projetos'],
        bio: 'Líder da classe criativa, focado em materializar ideias abstratas em projetos reais.'
    },
    {
        id: 'alexson-pereira',
        name: 'Alexson Pereira',
        role: 'Programador da Equipe',
        image: '/image/integrantes/Alexson-Pereira.jpg',
        url: '#',
        skills: ['Fullstack', 'Lógica', 'Automação'],
        bio: 'O arquiteto digital. Responsável por traduzir a filosofia em código funcional.'
    },
    {
        id: 'gabriel-nestor',
        name: 'Gabriel Nestor',
        role: 'Artista (Comunicação)',
        image: '/image/integrantes/Gabriel-Nestor.png',
        url: '#',
        skills: ['Design', 'Comunicação', 'Artes Visuais'],
        bio: 'A voz visual da equipe. Transforma conceitos complexos em arte acessível.'
    },
    {
        id: 'jandilson-dias',
        name: 'Jandilson Dias',
        role: 'Artista e Neurociência',
        image: '/image/integrantes/Jandilson-Dias.png',
        url: '#',
        skills: ['Neurociência', 'Arte', 'Pesquisa'],
        bio: 'Explora a interseção entre o cérebro humano e a expressão artística.'
    },
    {
        id: 'pedro-castro',
        name: 'Pedro Castro',
        role: 'Designer da Equipe',
        image: '/image/integrantes/Pedro-Castro.png',
        url: '#',
        skills: ['UI/UX', 'Branding', 'Estética'],
        bio: 'Guardião da identidade visual e da experiência do usuário no ecossistema.'
    }
];

const vocationsData = [
    ...integrantesData, // Inclui a equipe ESE
    {
        id: 'vocacao-exemplo-1',
        name: 'Membro Exemplo 1',
        role: 'Nível 4: Especialista (Designer)',
        image: '/image/icons/user-profile.png',
        url: '#',
        skills: ['Motion Design', 'Edição de Vídeo', '3D'],
        bio: 'Especialista em criar narrativas visuais em movimento. Disponível para freelas.'
    },
    {
        id: 'vocacao-exemplo-2',
        name: 'Membro Exemplo 2',
        role: 'Nível 5: Iniciado (Escritor)',
        image: '/image/icons/user-profile.png',
        url: '#',
        skills: ['Copywriting', 'Storytelling', 'Revisão'],
        bio: 'Apaixonado por palavras e construção de mundos fictícios.'
    }
];

// --- NOVO: MURAL DE PARCEIROS (CARGO AMARELO/COLABORAÇÕES) ---
const partnersData = [
    { name: "Sociedade Vera Cruz", logo: "🏛️", type: "Comunidade Parceira", description: "Debates de alta cultura." },
    { name: "Eventbrite", logo: "🎫", type: "Ferramenta", description: "Plataforma de gestão de eventos." },
    { name: "Notion", logo: "📓", type: "Ferramenta", description: "O cérebro digital da organização." },
    { name: "Medium", logo: "📝", type: "Plataforma", description: "Onde publicamos nossos artigos longos." },
    { name: "Discord", logo: "💬", type: "Comunicação", description: "Nossa base de operações em tempo real." },
    { name: "Colaborador Anônimo", logo: "👤", type: "Apoiador", description: "Doou recursos para o servidor." },
    { name: "Café Local", logo: "☕", type: "Espaço Físico", description: "Sede dos encontros presenciais." }
];

const communityDocsData = [
    {
        title: "PARADOCX Brasil (3.0)",
        image: "/image/imgs-implementar-paginas/paisagem-paradocx-banner.png",
        alt: "Logo ESE",
        description: "O artigo oficial que detalha toda a filosofia, regras, cargos e propósito da Equipe de Soluções Experimentais.",
        url: "#/docs/detail/paradocx-bahia3-0",
        buttonText: "Ver Detalhes",
        date: "05 Dez 2025",
        tags: ["Filosofia", "Manual"], 
        recommended: true,
        enabled: true
    },
    {
        title: "Valores & Protocolos",
        image: "/image/imgs-docs/pilares-realista-banner.png", // Ou outra imagem de capa
        alt: "Código e Design",
        description: "CONTINUAÇÃO DA PÁGINA SOBRE: Se aprofunde em Valores e Virtudes & Protocolos e Preferências da Comunidade e Equipe",
        url: "#/docs/detail/valores-e-protocolos",
        buttonText: "Ler Sobre",
        date: "09 Dez 2025",
        tags: ["Ética", "Protocolo"],
        recommended: true,
        enabled: true
    },
    {
        title: "Guia de Estilo e Templates",
        image: "/image/imgs-docs/docsimg-templates-pages.jpg", 
        alt: "Design System",
        description: "Documentação técnica dos modelos de página e design system do Hub. Essencial para desenvolvedores.",
        url: "#/docs/detail/guia-modelos",
        buttonText: "Acesso Técnico",
        date: "23 Nov 2025",
        tags: ["Design", "Desenvolvimento"],
        recommended: true,
        enabled: true
    },
    {
        title: "Dev Log: Sistema de Comentários",
        image: "/image/imgs-docs/paradocx-docs-none.png", // Ou outra imagem de capa
        alt: "Código e Design",
        description: "Relatório técnico do experimento de interatividade social (comentários e avaliações) implementado no Hub.",
        url: "#/docs/detail/experimento-comentarios",
        buttonText: "Ler Relatório",
        date: "01 Nov 2025",
        tags: ["Desenvolvimento", "Interatividade"],
        recommended: true,
        enabled: true
    },
    {
        title: "Porque um Hub Estatico?",
        image: "/image/logos-marcas/logo.png",
        alt: "PQ Hub Estatico",
        description: "Um debate aprofundado sobre a escolha de um Hub Digital Estatico, explorando as vantagens estratégicas e desvantagens filosóficas dessa abordagem para a comunidade.",
        url: "#/docs/detail/debate-hub-estatico",
        buttonText: "Ver Debate",
        date: "09 Out 2025",
        tags: ["Paradocx", "Estatico"],
        recommended: true,
        enabled: true
    },
    {
        title: "UNIVERSO E SE Livro Oficial",
        image: "/image/banner-carrosel/banner-universe-ese.png",
        alt: "Universo ESE",
        description: "O livro com os tópicos cruciais do universo ESE, ligando a ficção à nossa realidade e detalhando a história dos personagens.",
        url: "#",
        buttonText: "Em Breve",
        date: "01 Dez 2026",
        tags: ["Ficção", "Universo ESE"],
        recommended: true,
        enabled: false
    },
    {
        title: "PROJETOS CRONOLOGICOS",
        image: "/image/banner-carrosel/banner-cronologia.png",
        alt: "Projetos Cronológicos",
        description: "A linha do tempo completa de todos os projetos artísticos e marcos importantes da jornada da comunidade.",
        url: "#",
        buttonText: "Em Breve",
        date: "01 Jun 2026",
        tags: ["História", "Projetos"],
        recommended: false,
        enabled: false
    }
];

const referenceDocsData = [
    {
        title: "Whiplash Análise Fílmica",
        image: "/image/imgs-docs/paradocx-docs-none.png",
        alt: "Análise de Whiplash",
        description: "Uma análise sobre abordagens metodológicas do ensino de música e os aspectos éticos e psicológicos na formação do instrumentista, usando o filme como base.",
        url: "#/docs/detail/wiplash",
        buttonText: "Ver Detalhes",
        date: "20 Ago 2025",
        tags: ["Análise Fílmica", "Música"],
        recommended: true,
        enabled: true
    },
    {
        title: "Guia de Referência para Pequenos Criadores",
        image: "/image/imgs-docs/comece-aqui-banner-realista.png",
        alt: "Guia para Pequenos Criadores",
        description: "Um guia para ajudar os pequenos criadores a se tornarem artistas.",
        url: "#",
        buttonText: "Em Breve",
        date: "01 Mai 2026",
        tags: ["Criação", "Guias"],
        recommended: true,
        enabled: false
    }
];

const recomendedDocsData = [
    {
        title: "Pilares Dimensionais",
        image: "/image/banner-carrosel/banner-pilares-dimensionais.png",
        alt: "Pilares Banner",
        description: "A página definitiva sobre os Pilares Dimensionais, a base filosófica e metodológica da comunidade.",
        url: "#/pilares",
        date: "10 Jan 2026",
        tags: ["Estatico", "Pilares"],
        recommended: true
    }
];

const eventsData = [
    {
        title: "Workshop dos Pilares Universais",
        description: "Um mergulho profundo na Pilares Dimensionais Universais. Uma sessão online para membros da comunidade aprenderem a aplicar a filosofia ESE no dia a dia.",
        date: "15/11/2025",
        url: "#/eventos/workshop-pilares",
        external: false,
        buttonText: "Saber Mais",
        image: "/image/icons/workshop-icon-event.png" // <--- ADICIONE ISSO
    },
    {
        title: "Encontro da Comunidade em Guanambi",
        description: "Nosso primeiro encontro presencial do ano em Guanambi-BA para conectar membros, discutir projetos e celebrar nossas conquistas. Vagas limitadas.",
        date: "06/12/2025",
        url: "https://www.eventbrite.ca/",
        external: true,
        buttonText: "Inscreva-se",
        image: "/image/icons/presencial-icon-event.png" // <--- ADICIONE ISSO
    }
];

const newsData = [
    {
        title: "ESE Kosmo: Alpha V1.0 Lançado para Membros",
        category: "Desenvolvimento",
        image: "/image/banner-carrosel/banner-ese-kosmo.png",
        alt: "ESE Kosmo",
        description: "O ESE Kosmo Alpha V1.0 esta em Desenvolvimento por Devs da Comunidade",
        url: "#/noticias/ese-kosmo-alpha",
        external: false,
        date: "10 Out 2025",
        tags: ["Noticia", "ESE Kosmo"],
        recommended: true
    },
   /*  {
        title: "Novo Artigo: O Pilar do Equilíbrio e a Saúde Mental",
        category: "Filosofia",
       image: "/image/banner-carrosel/banner-pilares-dimensionais.png",
       alt: "Pilares",
        url: "https://medium.com/",
        external: true
    }, */
    {
        title: "Futuro da Comunidade: Banco de Dados no Site",
        category: "Comunidade",
        image: "/image/imgs-docs/conteudo-docs/comments-pt1.png",
        alt: "Comunidade",
        description: "Visando aumentar a interatividade entre os membros... Saiba mais sobre o processo de desenvolvimento e os próximos passos.",
        url: "#/noticias/sitebanco-dados-news",
        external: false,
        date: "07 Fev 2026",
        tags: ["Noticia", "Paradocx"],
        recommended: true
    },
    {
        title: "Entrevista com Guilherme sobre os Pilares Dimensionais",
        category: "Arte e Cultura",
        image: "/image/imgs-docs/entrevista-pilares-video-capa.png",
        alt: "Entrevista",
        description: "Guilherme Nunes, líder da Sociedade Vera Cruz, entrevista Eduardo sobre a criação dos Pilares Dimensionais e sua aplicação prática na comunidade.",
        url: "#/noticias/entrevista-guilherme",
        external: false,
        date: "11 Dez 2025",
        tags: ["Noticia", "Colab"],
        recommended: true
    },
    {
        title: "'Sociedade Vera Cruz': Outra Comunidade",
        category: "Circulo Externo",
        image: "/image/imgs-docs/sociedade-veracruz-banner.png",
        alt: "Sociedade Vera Cruz",
        description: "Conheça a Sociedade Vera Cruz, uma comunidade parceira focada em debates de alta cultura e filosofia. Uma colaboração que promete enriquecer ambos os ecossistemas.",
        url: "#/noticias/soc-veracruz-news",
        external: false,
        date: "25 Nov 2025",
        tags: ["Noticia", "Colab"],
        recommended: true
    },
    /* {
        title: "A Comunidade PARADOCX Atinge 100 Membros Ativos!",
        category: "Anúncio",
        image: "/image/imgs-implementar-paginas/sobre-paradocx.png",
        alt: "Banner da Comunidade",
        url: "#",
        external: false
    } */
];

const glossaryData = [
    {
        category: "Conceitos Fundamentais",
        terms: [
            {
                term: 'ESE / "E SE?"',
                definition: 'A pedra angular inegociável da nossa realidade. É o mecanismo de pensamento contrafactual usado para romper o algoritmo do automático. Uma ferramenta de "faca de dois gumes" que permite visualizar realidades alternativas e trazê-las para o plano físico através da vontade.',
                tags: 'filosofia base mentalidade'
            },
            {
                term: 'Paradoxo Humano',
                definition: 'A aceitação da dualidade intrínseca do ser: o conflito entre quem somos (realidade), quem fomos (tempo) e quem desejamos ser (potencial). Na PARADOCX, não buscamos a perfeição, mas o quase-equilíbrio entre essas forças opostas.',
                tags: 'psicologia dualidade'
            },
            {
                term: 'Idiocracia',
                definition: 'O antagonista sistêmico. Um estado de dormência social e mediocridade otimizada onde o indivíduo perde a capacidade de pensar criticamente, tornando-se um NPC (Non-Player Character) controlado por estímulos de curto prazo e tédio crônico.',
                tags: 'inimigo sistema'
            },
            {
                term: 'Lucidez',
                definition: 'O objetivo final da jornada. É a capacidade de "ler os sinais" no Quadro de Conspiração da realidade, enxergando padrões onde outros veem apenas caos. É o despertar definitivo da Matrix existencial.',
                tags: 'objetivo despertar'
            },
            {
                term: 'Pilares Dimensionais',
                definition: 'A base que sustenta a comunidade, composta por mais de 25 pilares que guiam a metodologia e filosofia do grupo. <a href="#/pilares" class="inline-link">Se aprofunde</a>. Inclui os Pilares da Construção, da Destruição e os Pilares da Vida.',
                tags: 'pilares dimensionais'
            }
        ]
    },
    {
        category: "Estrutura de Cargos & Hierarquia",
        terms: [
            {
                term: 'Cargo Preto e Branco (Arquitetos)',
                definition: 'Nível 2 da hierarquia. Os estrategistas e visionários responsáveis pelo planejamento macro do ecossistema. São os guardiões da visão original e os responsáveis por validar a entrada de novos DOCS no cânone oficial.',
                tags: 'liderança estrategia'
            },
            {
                term: 'Cargo Vermelho (Pilares Vivos)',
                definition: 'Nível 3 da hierarquia. Especialistas que lideram Áreas (Guildas) específicas. <a href="#/areas" class="inline-link">Explorar Áreas</a>. Atuam como o combustível do movimento coletivo, transformando discussões em esquadrões de ação real.',
                tags: 'especialistas liderança'
            },
            {
                term: 'Cargo Azul (Vocações)',
                definition: 'Nível 4 da hierarquia. O Corpo Operacional. <a href="#/vocacoes" class="inline-link">Ver Vocações</a>. Membros que encontraram sua "Variável X" e utilizam suas habilidades técnicas (Hard Skills) para servir à comunidade e evoluir em seus próprios projetos.',
                tags: 'tecnico execucao'
            },
            {
                term: 'Egrégora',
                definition: 'A força coletiva gerada pela união de dois ou mais Usuarios em comum acordo. Baseado no princípio de Mateus 18:20, é a energia mental e espiritual que sustenta a comunidade e amplifica o potencial de cada membro.',
                tags: 'coletivo espiritual'
            }
        ]
    },
    {
        category: "Metodologia & Tecnologia",
        terms: [
            {
                term: 'DOCS (Registros)',
                definition: 'Não se limita a arquivos de texto. Abrange toda e qualquer marca deixada no mundo: música, arte, código, vídeos, pesquisas ou perspectivas. É o legado tangível de um Paradoxo registrado para a posteridade.',
                tags: 'legado arquivo'
            },
            {
                term: 'U.P.T (Ultimate Progression Tracker)',
                definition: 'A metodologia de rastreio de progresso baseada nos 25 Pilares Dimensionais. É o sistema operacional que permite ao membro sair da teoria e entrar na "Skin in the Game", medindo sua evolução real.',
                tags: 'metodo produtividade'
            },
            {
                term: 'Antifragilidade',
                definition: 'Conceito extraído de Nassim Taleb. É a capacidade de não apenas resistir ao caos, mas de melhorar com ele. Um integrante PARADOCX usa crises, erros e críticas como combustível para polir sua própria lógica.',
                tags: 'resiliencia filosofia'
            },
            {
                term: 'Flow (Fluxo)',
                definition: 'O estado de hiperfoco onde o tempo e o ego desaparecem. É a métrica de manutenção para os Níveis Azuis: a capacidade de dar o máximo em projetos específicos sem sofrer com o desgaste mental.',
                tags: 'performance foco'
            }
        ]
    },
    {
        category: "Projetos de Convergência",
        terms: [
            {
                term: 'ESE Kosmo',
                definition: 'A futura rede social gamificada da PARADOCX. Um hub digital projetado para ser o oposto das redes tradicionais: em vez de sugar atenção, ela organiza a ação e a progressão dos Pilares de Vida. <a href="#/projetos/ese-kosmo" class="inline-link">Saber Mais</a>.',
                tags: 'plataforma futuro'
            },
            {
                term: 'Quadro de Conexões',
                definition: 'O mapa visual da nossa investigação. Funciona como um "Quadro de Detetive" onde conectamos Bíblia, Física Quântica, Cinema e Filosofia para decodificar a engenharia da realidade.',
                tags: 'investigacao mapa'
            },
            {
                term: 'Universo ESE',
                definition: 'O mapeamento de realidades alternativas que existem no "E SE?"... o espaço entre quem somos e quem poderíamos ser (O processo do despertar).',
                tags: 'musica arte'
            }
        ]
    }
];

const faqData = [
    // PRINCIPAIS PERGUNTAS SOBRE A COMUNIDADE
    {
        category: "Principais Perguntas Sobre a Comunidade",
        questions: [
            {
                question: "Qual o propósito da Comunidade PARADOCX?",
                answer: "Imagine que você está parado diante de um espelho de vidro fosco — aquele que não reflete apenas seu rosto, mas a névoa de uma existência no automático. O propósito da Comunidade PARADOCX é ser o martelo que você mesmo ergue para despedaçar esse reflexo superficial. Não somos um clube de autoajuda, nem uma seita digital. Somos um laboratório de guerrilha existencial. Nossa missão é decodificar o algoritmo do automático (aquela que te faz acreditar que vida é só acordar, trabalhar, consumir e dormir) e te entregar as ferramentas para reprogramá-la. Aqui, a pergunta 'E SE?' é uma chave mestra. E se o tédio for combustível? E se a sua loucura for o único traço de genialidade que o mundo tenta medicar? Nosso propósito é transformar espectadores em arquitetos da própria realidade. É te tirar da plateia e colocar no palco da sua própria existência, com um roteiro que você mesmo risca e reescreve, usando tinta feita de caos e lógica."
            },
            {
                question: "Qual o diferencial das outras comunidades?",
                answer: "Enquanto o mundo oferece cápsulas de conformidade, nós fabricamos chaves de ruptura. O diferencial não está no que dizemos, mas no que destruímos dentro de você: a necessidade de um guru. Aqui, você não segue um líder, você confronta seu próprio arquétipo. Nosso ecossistema é um organismo vivo que sangra filosofia e transpira arte e ações. Não somos uma comunidade de nicho; somos um caleidoscópio de mentes inquietas. O diferencial é que não buscamos conforto, mas desconforto criativo. Não oferecemos respostas prontas, mas provocamos perguntas que desestabilizam. Aqui, o diferente não é tolerado —> é celebrado como a centelha primordial da evolução."
            },
            {
                question: "Porque eu devo fazer parte dessa comunidade?",
                answer: "Porque você já está cansado de respirar o ar rarefeito da superficialidade. Deve entrar não para se encaixar, mas para desmontar a própria ideia de encaixe. Esta comunidade é um campo de distorção da realidade onde o tédio se transforma em energia potencial para revoluções pessoais. Você deve fazer parte se sente um erro de código num sistema otimizado para a mediocridade. Porque mais vale um caos que você dirige do que uma ordem que te dirige. Entrar é um ato de insubordinação contra a passividade. É assinar um novo destino de nunca mais ser espectador da própria vida."
            },
            {
                question: "Porque eu devo contribuir para essa comunidade?",
                answer: "Contribuir não é apenas um gesto de entrega, é o mecanismo mais sofisticado de nossa própria evolução. Ideias compartilhadas são espelhos: elas refletem e expandem o seu potencial através do olhar do outro. Ao contribuir, você não está doando; está investindo em sua própria evolução acelerada. A comunidade é um acelerador de partículas para a consciência: seu 'E SE?' colide com o de outro, e dessa fissura nasce uma nova dimensão de possibilidade. Você deve contribuir para deixar de ser um consumidor de significado e tornar-se um produtor de legado. Porque no jogo da existência, quem apenas observa está fadado a ser um NPC que não joga, e apenas controlado fazendo parte do cenário. Contribua para que suas ações ecoem na biblioteca infinita do TUDO. Para que a suas sementes sejam a fonte de frutos que o tempo jamais poderá apagar."
            },
            {
                question: "Quais hábitos a comunidade incentiva?",
                answer: "'' Incentivamos hábitos que transformam a existência em arte marcial metafísica ''. O hábito de perguntar 'E SE?' antes de tomar café. O hábito de observar os próprios padrões mentais com o fascínio de um naturalista: estudando a vida que pulsa em cada ideia, sem se deixar capturar por ela. Incentivamos a prática diária de quebrar um micro-hábito insignificante, só para lembrar ao cérebro que ele não é o dono. A rotina de consumir informação como um alquimista sem misticismo: extraindo o princípio ativo e descartando o lodo digital. Incentivamos o hábito de celebrar falhas como descobertas de rotas exploradas e redefinidas no mapa da realidade. A prática de conectar três ideias aparentemente desconexas antes de dormir. O hábito de silêncio ativo — não a ausência de som, mas a presença total na ausência de ruído interno. Cultivamos o vício em evolução, onde cada ação é uma quest, cada dia um episódio, e você, o personagem jogável em sua própria jornada do heroi."
            },
            {
                question: "Como participar da Comunidade?",
                answer: "A participação começa com um rompimento interno. Depois, é simples como respirar e complexo como desvendar um paradoxo. Primeiro, mergulhe de cabeça no manifesto —> não enxergue as palavras como definições isoladas, mas como pontos de divergencias e convergencias de outras palavras conectadas. Segundo, acesse nossos canais digitais... eles são portais, não grupos. Terceiro, observe. Quarto, quando a inquietação falar mais alto, reaja. Comente. Questiona. Partilhe um insight, mesmo que crú. Quinto faça sua inscrição, há um pequeno formulário de cadastro. É aparecer numa reunião e ousar discordar. A porta é invisível e está sempre aberta. Só atravessa quem já decidiu, no silêncio do próprio espírito, que está pronto para parar de jogar no modo fácil."
            },
            {
                question: "Como conciliar a comunidade e minha vida pessoal (Trabalho, Estudos, Lazer)?",
                answer: "A pergunta já carrega um vício: a ideia de 'conciliar'. Na PARADOCX, não conciliamos... integramos. Sua vida não é um conjunto de gavetas separadas; é um ecossistema vivo onde tudo ressoa. Trabalho, estudos, lazer e comunidade são diferentes frequências da mesma sinfonia existencial. O segredo não está em 'equilibrar', mas em ressignificar: seu trabalho pode ser um laboratório para testar os Pilares Dimensionais; seus estudos podem ser expedições de caça ao conhecimento que você traz como espólio para a comunidade; seu lazer pode ser o campo de treino para a 'mente de criança' que a comunidade tanto valoriza. A comunidade não é mais uma obrigação na sua agenda —> é a lente através da qual você vê TODAS as outras obrigações. Use os sprints de foco da ESE para seus projetos profissionais. Use a 'Higiene da Informação' para filtrar seus estudos. Use a filosofia do Flow para transformar o lazer em prática presencial. A comunidade não compete com sua vida... ela a ilumina. E nos momentos de saturação? Aplique o Pilar dos Limites. Desapareça. O círculo interno entenderá. Somos uma equipe de agentes autônomos, não de prisioneiros. A verdadeira integração acontece quando você para de ver a comunidade como 'algo a mais' e começa a vê-la como o sistema operacional que otimiza tudo o que já existe dentro de você."
            },
        ]
    },
    // COMO PARTICIPAR E NIVEIS
    {
        category: "Como Participar e Níveis",
        questions: [
            {
                question: "Como se tornar uma Marca ou Patrocinador COLABORADOR?",
                answer: "Buscamos parceiros, não apenas anunciantes. Ser um Colaborador Vitalício significa trocar a exposição estática pela integração sináptica: um lugar vivo na memória e na experiência do nosso público. Entre em contato não só com um portfólio, mas sim expondo 'o que você acredita e defende'. Mostre como sua marca também respira paradoxos, como seu produto é uma ferramenta de pertencimento, autenticidade, util, real, não de domesticação, onde molda o consumidor. Proponha uma colaboração que seja uma experiência transformadora para ambos os lados, algo que deixe marcas na realidade e não apenas logs no analytics. Quando a contribuição é genuína, ela deixa de ser publicidade. Se você acredita no que fazemos, sua marca não será apenas vista — ela será sentida como parte fundamental da nossa história."
            },
            {
                question: "Como se tornar um Cargo Azul com meu Perfil exposto no site?",
                answer: "Para ascender ao Azul (o Nível 4 do Especialista) você precisa ter feito da sua paixão uma linguagem e da sua habilidade, sua identidade. Não basta saber; é preciso transpirar sua expertise. Depois, integre esse domínio ao ecossistema PARADOCX: use os Pilares para explicar sua arte, ou use sua arte para ilustrar os Pilares. Construa algo tangível dentro da comunidade: um projeto, uma análise, uma ferramenta. Então, proclame sua 'Variavel'. Autointitule-se = 'Neurocientista da Comunidade', 'Progamador de Realidades Alternativas', 'Artista de Dados'. Apresente esse título à liderança, junto com a evidência inquestionável do seu fluxo. Se for legítimo, seu perfil não será apenas mais uma foto no site —> será um farol, um ponto de conexão na rede, você se tornará um exemplo vivo de que a especialização, quando atravessada pela filosofia PARADOCX, vira superpoder."
            },
            {
                question: "Como meu DOCS pode ser visualizado aqui nos DOCS da Comunidade?",
                answer: "Para que seu DOCS (seu tratado, sua pesquisa, sua obra) seja canonizado nos arquivos centrais, ele não pode ser um monólogo. Escreva com os Pilares entrelaçados na sua argumentação, para simplificar possiveis Interpretações. Use o 'E SE?' como ponto de partida e de chegada. Submeta sua obra não como um monumento acabado, mas como um sistema aberto —> um documento vivo que pede anotações, expansões, conexões laterais. Encaminhe através dos canais dos Grandes Pesquisadores (Áreas dos Niveis Vermelhos) ou em contato com os Cargos Pretos enviando artigos criados no Substack. Se seu DOCS for uma semente com potencial para gerar uma floresta de debates ou de citações, se ele conseguir ser ao mesmo tempo profundo e simples, divertido e desestabilizador, então ele não só será visualizado —> será dissecado, celebrado, controverso e integrado. Você se tornará parte da memória imortal da comunidade."
            },
        ]
    },
     // --- NOVAS PERGUNTAS (EXTRAÍDAS DO CAPÍTULO 10) ---

    // GOVERNANÇA E METODOLOGIA
    {
        category: "Governança e Metodologia",
        questions: [
            {
                question: "Como a Metodologia 'ESE' guia decisões difíceis?",
                answer: "A bússola para decisões críticas é a tríade: Valores, Regras e Propósitos. Consultamos também os 'Pilares Dimensionais' para verificar se a decisão respeita o equilíbrio entre Construção e Destruição. Se a decisão fere um pilar ou a integridade da equipe, ela é descartada."
            },
            {
                question: "Qual a abordagem para resolver conflitos internos?",
                answer: "Utilizamos Reuniões de Alinhamento organizadas. O pré-requisito é que todos estejam com a 'cabeça tranquila'. O objetivo não é vencer o debate, mas entrar em Acordo e realizar mudanças necessárias para garantir a Harmonia da Egrégora."
            },
            {
                question: "Como funciona o desenvolvimento dos integrantes?",
                answer: "O desenvolvimento é orgânico e ocorre através do Tempo, Experiências práticas ('Skin in the Game') e Feedbacks contínuos. A evolução individual não é forçada, é uma consequência inevitável da participação ativa nos projetos."
            },
            {
                question: "Como novos integrantes são incorporados?",
                answer: "A integração é um processo de 'osmose'. Inicialmente, o contato é apenas com a Liderança, que filtra e compartilha informações gradualmente. A transição ocorre sem pressa e com o consenso da Equipe. Após a Reunião de Apresentação, o membro entra nos grupos oficiais."
            },
        ]
    },
    // MÉTRICAS E ESTRATÉGIA
    {
        category: "Métricas e Estratégia",
        questions: [
            {
                question: "Quais métricas medem o sucesso de um projeto?",
                answer: "Medimos o sucesso em cada fase do ciclo de vida. Quantitativamente: Valor Agregado (entregas), ROI (retorno sobre tempo) e Desvio de Prazo. Qualitativamente: A satisfação interna da equipe e o impacto real gerado na comunidade."
            },
            {
                question: "Qual a estratégia para manter o foco (Deep Work)?",
                answer: "A estratégia é ambiental. 1) Limpeza Física: Manter o celular longe e eliminar estímulos visuais. 2) Ambiente Indutor: Ir para locais que não te deem outra escolha a não ser trabalhar, como bibliotecas ou escritórios silenciosos."
            },
            {
                question: "Como a equipe adota novas tecnologias (IA, Softwares)?",
                answer: "Através de Aprendizado Coletivo. Estudamos individualmente e nos reunimos para discutir aplicações. A tecnologia só é adotada se estiver alinhada aos Valores. A decisão final cabe à Liderança após ouvir a base."
            },
        ]
    },
    // SAÚDE MENTAL
    {
        category: "Saúde Mental",
        questions: [
            {
                question: "Como a Metodologia cuida da saúde mental?",
                answer: "Monitoramos a intensidade e impomos Intervalos de Descanso e Aumento de Prazos quando necessário. Simplificamos processos para reduzir a pressão. Seguimos os Pilares: quem respeita 'Limites' e 'Ritmo' preserva sua saúde mental."
            },
            {
                question: "Qual a visão sobre o 'Jejum de Dopamina'?",
                answer: "Sejamos realistas: não remova todas as fontes, mas corte as raízes que te prejudicam. O objetivo é perceber que você consegue viver sem o vício imediato. Abrace a simplicidade e o prazer em recompensas de longo prazo, retirando os vícios gradativamente."
            },
            {
                question: "Quais hábitos a comunidade incentiva?",
                answer: "Incentivamos hábitos saudáveis como caminhadas, alimentação balanceada e organização da sua agenda. É importante também sair de casa, ter novas experiências e transformar seus hobbies em algo produtivo. Evitamos prazeres de curto prazo, procrastinação e ambientes tóxicos."
            },
        ]
    },
    // ARQUIVO HISTÓRICO (DÚVIDAS TÉCNICAS)
    {
        category: "Arquivo Histórico (Dúvidas Técnicas)",
        questions: [
            {
                question: "O que fazer quando estou sem criatividade ou ideias?",
                answer: "Primeiro, aceite que ficar um tempo sem fazer nada faz bem. Para gerar novas ideias, saia da sua zona de conforto e faça coisas que não está acostumado. Você também pode usar os 'Pilares Universais' como um mapa para ter novas ideias e planejar seus próximos passos."
            },
            {
                question: "Como posso otimizar meu tempo nos estudos ou projetos?",
                answer: "A metodologia incentiva a aplicação da filosofia 'E SE?' ao seu favor, questionando seus métodos atuais para encontrar novas soluções. Além disso, recomendamos ferramentas como Notion e One Note, e a criação de mapas mentais com palavras-chave para reter melhor o conhecimento."
            },
            {
                question: "Por que gamificar tarefas com moedas (E$E/PR)?",
                answer: "A cédula serve para gamificar a responsabilidade. Estamos remodelando o sistema para que os cargos e recompensas não sejam 'comprados', mas conquistados por Mérito. As moedas servirão para adquirir recursos e experiências na comunidade."
            },
            {
                question: "Como funciona a distribuição de Conteúdos?",
                answer: "Internamente via WhatsApp (Arquivos, Vídeos, Pastas). Externamente, o conteúdo será distribuído via Instagram, YouTube, Twitch e Spotify, criando uma teia de mídia transmídia."
            },
            {
                question: "Quais as melhores ferramentas de estudo recomendadas?",
                answer: "Recomendamos o ecossistema digital: Notion (Organização), OneNote (Anotações rápidas) e Flash Cards (Memorização). A técnica chave é usar a ideia dos Pilares para estruturar o conhecimento em vez de apenas decorar."
            }
        ]
    },
];