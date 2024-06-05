document.addEventListener('DOMContentLoaded', function(evento) {
    let contador = 0;

    const botao = document.getElementById('cliqueBotao');
    const exibicaoContador = document.getElementById('contador');

    botao.addEventListener('click', function() {
        contador++;
        exibicaoContador.textContent = contador;
    })
})