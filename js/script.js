const listaIpes = document.querySelector('.ipe-list');

console.log(listaIpes);

console.log(listaIpes.clientHeight); // height + padding
console.log(listaIpes.offsetHeight); // height + padding + border
console.log(listaIpes.scrollHeight); // height total, mesmo dentro de scroll

console.log(listaIpes.offsetTop); // distânia entra o topo do elemento e o topo da página
console.log(listaIpes.offsetLeft); // distância entre o canto esquerdo do elemento e o canto esquerdo da página

console.log(listaIpes.getBoundingClientRect()); // Retorna vários valores de dimensões e distâncias do elemento
// width é a mesma coisa


// Window é tamanho da tela do usuário
console.log(
window.innerWidth, // width do janela
window.outerWidth, // soma dev tools também
window.innerHeight, // height do janela
window.outerWidth, // soma a barra de endereço
window.pageYOffset, // distância total do scroll horizontal
window.pageXOffset // distância total do scroll vertical
);
if(window.innerWidth < 600) {
    console.log('Tela menor que 600px');
}

const small = window.matchMedia('(max-width: 600px)');
if(small.matches) {
    console.log('Tela menor que 600px')
} else {
    console.log('Tela maior que 600px')
}
