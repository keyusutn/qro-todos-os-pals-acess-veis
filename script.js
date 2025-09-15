document.addEventListener('DOMContentLoaded', function(){
    const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade');
    const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade');

    botaoDeAcessibilidade.addEventListener('click', function(){
         botaoDeAcessibilidade.classList.toggle('rotacao-botao')
         opcoesDeAcessibilidade.classList.toggle('apresenta-lista')

         const botaoSelecionado = botaoDeAcessibilidade.getAttribute(`aria-expanded`) === `true`;
         botaoDeAcessibilidade.setAttribute('aria-espanded', !botaoSelecionado)
    })

    const aumentaFonteBotao = document.getElementById('Aumentar-Fonte');
    const diminuiFonteBotao = document.getElementById('Diminuir-Fonte');

    const alternacontrole = document.getElementById('Alterna-Contraste');

    let tamanhoAtualFonte = 1;

    aumentaFonteBotao.addEventListener('click', function(){
        tamanhoAtualFonte += 0.100;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`
    })

    diminuiFonteBotao.addEventListener('click', function(){
        tamanhoAtualFonte += -0.100;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`
    })

    alternaContrastre.addEventListener('click', function(){
        document.body.classList.toggle('alto-contraste')
    })
})

scrollReveal().reveal('#inicio', {delay: 500});
scrollReveal().reveal('#tropicalia', {delay: 500});
scrollReveal().reveal('#galeria', {delay: 500});
scrollReveal().reveal('#inicio', {delay: 500});