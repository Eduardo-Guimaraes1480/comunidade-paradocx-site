// /js/carousel.js

const CarouselSystem = {
    intervalId: null,
    autoPlayDelay: 10000, // 10 segundos por slide

    init: function() {
        console.log("CarouselSystem: Iniciando...");
        const track = document.querySelector('.carousel-track');
        
        if (!track) {
            console.log("CarouselSystem: Nenhum carrossel encontrado nesta página.");
            return; 
        }

        // Limpa intervalo anterior para evitar duplicação
        this.stopAutoPlay();

        const slides = Array.from(track.children);
        const nextButton = document.querySelector('.nav-next');
        const prevButton = document.querySelector('.nav-prev');
        
        // Se não houver slides, para.
        if (slides.length === 0) return;

        // Identifica índice atual baseado na classe 'active'
        let currentIndex = slides.findIndex(slide => slide.classList.contains('active'));
        if (currentIndex === -1) currentIndex = 0; // Fallback

        console.log(`CarouselSystem: Carrossel ativo com ${slides.length} slides.`);

        // Função para mudar o slide
        const updateSlide = (index) => {
            // Remove classe ativa de todos
            slides.forEach(slide => slide.classList.remove('active'));
            // Adiciona no atual
            slides[index].classList.add('active');
        };

        // Próximo Slide
        const moveToNext = () => {
            currentIndex = (currentIndex + 1) % slides.length; // Loop infinito
            updateSlide(currentIndex);
        };

        // Slide Anterior
        const moveToPrev = () => {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Loop infinito reverso
            updateSlide(currentIndex);
        };

        // Event Listeners (Cliques) - Removemos anteriores clonando ou apenas reatribuindo se for simples
        // Para garantir que não acumule listeners, idealmente usaríamos removeEventListener, 
        // mas como a página é recriada pelo Router, os elementos são novos, então tá ok.
        
        if (nextButton) {
            nextButton.onclick = (e) => {
                e.preventDefault();
                moveToNext();
                this.resetAutoPlay(moveToNext);
            };
        }

        if (prevButton) {
            prevButton.onclick = (e) => {
                e.preventDefault();
                moveToPrev();
                this.resetAutoPlay(moveToNext);
            };
        }

        // Inicia o Auto-Play
        this.startAutoPlay(moveToNext);
    },

    startAutoPlay: function(nextFunction) {
        if (this.intervalId) clearInterval(this.intervalId);
        this.intervalId = setInterval(nextFunction, this.autoPlayDelay);
    },

    stopAutoPlay: function() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    },

    resetAutoPlay: function(nextFunction) {
        this.stopAutoPlay();
        this.startAutoPlay(nextFunction);
    }
};

// Disponibiliza para uso global
window.CarouselSystem = CarouselSystem;