document.addEventListener('DOMContentLoaded', () => {
    const botoesFiltro = document.querySelectorAll('.btn-filtro');
    const cardsAnimais = document.querySelectorAll('.animal-card');

    botoesFiltro.forEach(button => {
        button.addEventListener('click', function() {
            // Remove 'active' de todos e adiciona ao clicar
            botoesFiltro.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            const filtro = this.getAttribute('data-filter');

            cardsAnimais.forEach(card => {
                if (filtro === 'todos' || card.getAttribute('data-especie') === filtro) {
                    // Exibe o card (ajuste o display ou use classes do Bootstrap)
                    card.style.display = 'block'; 
                } else {
                    // Oculta o card
                    card.style.display = 'none';
                }
            });
        });
    });
});