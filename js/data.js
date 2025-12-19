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

const talentsData = [
    ...integrantesData, // Inclui a equipe ESE
    {
        id: 'talento-exemplo-1',
        name: 'Membro Exemplo 1',
        role: 'Nível 4: Especialista (Designer)',
        image: '/image/mascote-guia.png',
        url: '#',
        skills: ['Motion Design', 'Edição de Vídeo', '3D'],
        bio: 'Especialista em criar narrativas visuais em movimento. Disponível para freelas.'
    },
    {
        id: 'talento-exemplo-2',
        name: 'Membro Exemplo 2',
        role: 'Nível 5: Iniciado (Escritor)',
        image: '/image/mascote-guia.png',
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
        title: "ESE Guanambi 2.0",
        image: "/image/escudo-equipe-logo.png",
        alt: "Logo ESE",
        description: "O artigo oficial que detalha toda a filosofia, regras, cargos e propósito da Equipe de Soluções Experimentais.",
        url: "#/docs/detail/ese-guanambi-2-0",
        buttonText: "Ver Detalhes",
        enabled: true
    },
    {
        title: "Guia de Estilo e Templates",
        image: "/image/banner.png", 
        alt: "Design System",
        description: "Documentação técnica dos modelos de página e design system do Hub. Essencial para desenvolvedores.",
        url: "#/docs/detail/guia-modelos",
        buttonText: "Acesso Técnico",
        enabled: true
    },
    {
        title: "Dev Log: Sistema de Comentários",
        image: "/image/explore-o-ese.jpg", // Ou outra imagem de capa
        alt: "Código e Design",
        description: "Relatório técnico do experimento de interatividade social (comentários e avaliações) implementado no Hub.",
        url: "#/docs/detail/experimento-comentarios",
        buttonText: "Ler Relatório",
        enabled: true
    },
    {
        title: "UNIVERSO E SE Livro Oficial",
        image: "/image/explore-o-ese.jpg",
        alt: "Universo ESE",
        description: "O livro com os tópicos cruciais do universo ESE, ligando a ficção à nossa realidade e detalhando a história dos personagens.",
        url: "#",
        buttonText: "Em Breve",
        enabled: false
    },
    {
        title: "PROJETOS CRONOLOGICOS",
        image: "/image/filosofia-pilares.jpg",
        alt: "Projetos Cronológicos",
        description: "A linha do tempo completa de todos os projetos artísticos e marcos importantes da jornada da comunidade.",
        url: "#",
        buttonText: "Em Breve",
        enabled: false
    }
];

const referenceDocsData = [
    {
        title: "Whiplash Análise Fílmica",
        image: "/image/explore-o-ese.jpg",
        alt: "Análise de Whiplash",
        description: "Uma análise sobre abordagens metodológicas do ensino de música e os aspectos éticos e psicológicos na formação do instrumentista, usando o filme como base.",
        url: "#/docs/detail/wiplash",
        buttonText: "Ver Detalhes",
        enabled: true
    },
    {
        title: "Guia de Referência para Pequenos Criadores",
        image: "/image/explore-o-ese.jpg",
        alt: "Guia para Pequenos Criadores",
        description: "Um guia para ajudar os pequenos criadores a se tornarem artistas.",
        url: "#",
        buttonText: "Em Breve",
        enabled: false
    }
];

const eventsData = [
    {
        title: "Workshop dos Pilares Universais",
        description: "Um mergulho profundo na Tabela dos Pilares Universais. Uma sessão online para membros da comunidade aprenderem a aplicar a filosofia ESE no dia a dia.",
        date: "15 de Novembro de 2025",
        url: "#/eventos/workshop-pilares",
        external: false,
        buttonText: "Saber Mais"
    },
    {
        title: "Encontro da Comunidade em Guanambi",
        description: "Nosso primeiro encontro presencial do ano em Guanambi-BA para conectar membros, discutir projetos e celebrar nossas conquistas. Vagas limitadas.",
        date: "06 de Dezembro de 2025",
        url: "https://www.eventbrite.ca/",
        external: true,
        buttonText: "Inscreva-se"
    }
];

const newsData = [
    {
        title: "ESE Kosmo: Alpha V1.0 Lançado para Membros",
        category: "Desenvolvimento",
        image: "/image/ESE-Kosmo.jpg",
        alt: "ESE Kosmo",
        url: "#/noticias/ese-kosmo-alpha",
        external: false
    },
    {
        title: "Novo Artigo: O Pilar do Equilíbrio e a Saúde Mental",
        category: "Filosofia",
        image: "/image/filosofia-pilares.jpg",
        alt: "Pilares",
        url: "https://medium.com/",
        external: true
    },
    {
        title: "Resultado da Votação para o Próximo 'Clube do Livro'",
        category: "Comunidade",
        image: "/image/comunidade.jpg",
        alt: "Comunidade",
        url: "https://www.instagram.com/",
        external: true
    },
    {
        title: "Entrevista com Gabriel Nestor sobre o Projeto 'Conexões'",
        category: "Arte e Cultura",
        image: "/image/integrantes/Gabriel-Nestor.png",
        alt: "Gabriel-Nestor",
        url: "#",
        external: false
    },
    {
        title: "'Rádio Multiversus': Novas faixas demo reveladas",
        category: "Universo ESE",
        image: "/image/explore-o-ese.jpg",
        alt: "Universo ESE",
        url: "#",
        external: false
    },
    {
        title: "A Comunidade PARADOCX Atinge 100 Membros Ativos!",
        category: "Anúncio",
        image: "/image/banner.png",
        alt: "Banner da Comunidade",
        url: "#",
        external: false
    }
];

const glossaryData = [
    {
        category: "Conceitos Fundamentais",
        terms: [
            {
                term: 'ESE / "E SE?"',
                definition: 'A filosofia central da comunidade. Baseia-se em usar o termo “E SE” para obter novas Crenças e Perspectivas, usando os dois lados do cérebro para superar limitações e trazer desejos para a realidade. É uma ferramenta poderosa, uma "faca de dois gumes" que pode ter consequências construtivas ou destrutivas.',
                tags: 'ese e se filosofia'
            },
            {
                term: 'Paradoxo Humano',
                definition: 'A ideia de que o ser humano é dividido entre quem ele é (a realidade), quem ele foi (o tempo) e quem ele deseja ser (o potencial). Esse conflito interno é o núcleo da exploração da comunidade.',
                tags: 'paradoxo humano'
            },
            {
                term: 'Tabela dos Pilares Universais',
                definition: 'A base que sustenta a equipe, composta por mais de 25 pilares que guiam a metodologia e filosofia do grupo. Inclui os Pilares da Construção, da Destruição e os Pilares da Vida. <a href="#/pilares" class="inline-link">Ver Tabela Completa</a>.',
                tags: 'tabela pilares universais'
            },
            {
                term: 'Quadro de Conexões',
                definition: 'A representação visual da filosofia da comunidade. Funciona como um "quadro de detetive" que conecta ideias, projetos, pessoas e referências para revelar o caminho do potencial humano.',
                tags: 'quadro conexões'
            }
        ]
    },
    {
        category: "Estrutura de Cargos",
        terms: [
            {
                term: 'Cargo Vermelho (Especialistas)',
                definition: 'Membros confiáveis e imersos na filosofia ESE, que lideram "Áreas" (subgrupos) focadas em temas como Criação, Debate, Pesquisa, Saúde e Finanças. <a href="#/areas" class="inline-link">Ver Áreas</a>.',
                tags: 'cargo vermelho especialista'
            },
            {
                term: 'Cargo Azul (XXX)',
                definition: 'Membros com habilidades valiosas, dispostos a dar seu máximo em projetos. Eles têm o poder de definir o nome do seu próprio cargo e a área em que desejam trabalhar. <a href="#/integrantes" class="inline-link">Ver Integrantes</a>.',
                tags: 'cargo azul'
            }
        ]
    },
    {
        category: "Projetos Notáveis",
        terms: [
            {
                term: 'ESE Kosmo',
                definition: 'O projeto bandeira da comunidade. Uma futura rede social gamificada, baseada na "U.P.T - Metodology", para ajudar os membros a aplicar os Pilares em suas vidas e explorar seu potencial.',
                tags: 'ese kosmo'
            },
            {
                term: 'Rádio Multiversus',
                definition: 'Um projeto de álbum experimental que explora diferentes estilos musicais e histórias através de personagens de múltiplos universos. <a href="#/projetos/radio-multiversus" class="inline-link">Saber Mais</a>.',
                tags: 'rádio multiversus'
            }
        ]
    }
];

const faqData = [
    {
        question: "Qual o propósito da Comunidade PARADOCX?",
        answer: "Nosso propósito é entender como a vida funciona nas diversas áreas que o ser humano pode alcançar. Buscamos passar dos limites que a sociedade impõe, questionando a realidade através da filosofia 'E SE?' para trazer novas perspectivas e possibilidades para o nosso dia a dia."
    },
    {
        question: "Como posso otimizar meu tempo nos estudos ou projetos?",
        answer: "A metodologia incentiva a aplicação da filosofia 'E SE?' ao seu favor, questionando seus métodos atuais para encontrar novas soluções. Além disso, recomendamos ferramentas como Notion e One Note, e a criação de mapas mentais com palavras-chave para reter melhor o conhecimento."
    },
    {
        question: "O que fazer quando estou sem criatividade ou ideias?",
        answer: "Primeiro, aceite que ficar um tempo sem fazer nada faz bem. Para gerar novas ideias, saia da sua zona de conforto e faça coisas que não está acostumado. Você também pode usar os 'Pilares Universais' como um mapa para ter novas ideias e planejar seus próximos passos."
    },
    {
        question: "Quais hábitos a comunidade incentiva?",
        answer: "Incentivamos hábitos saudáveis como caminhadas, alimentação balanceada e organização da sua agenda. É importante também sair de casa, ter novas experiências e transformar seus hobbies em algo produtivo. Evitamos prazeres de curto prazo, procrastinação e ambientes tóxicos."
    }
];