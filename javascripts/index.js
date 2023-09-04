// Seleciona elementos do DOM usando querySelector
const navbar = document.querySelector('.navbar'); // Seleciona a barra de navegação
const navbarMobile = document.querySelector('.navbar_mobile'); // Seleciona o menu móvel
const botao = document.querySelector('.menu_mobile'); // Seleciona o botão do menu móvel

// Adiciona um evento de clique ao botão do menu móvel
botao.addEventListener('click', function () {
    // Alterna a classe 'active' no elemento 'navbarMobile' quando o botão é clicado
    navbarMobile.classList.toggle('active');
});

// Adiciona um evento de rolagem à janela do navegador
window.addEventListener('scroll', function () {
    // Verifica se a posição vertical de rolagem é maior do que 0
    if (this.window.pageYOffset > 0) {
        // Adiciona a classe 'active' à barra de navegação se a rolagem for maior que 0
        return navbar.classList.add('active');
    } else {
        // Remove a classe 'active' da barra de navegação se a rolagem for 0 ou menos
        return navbar.classList.remove('active');
    }
});
