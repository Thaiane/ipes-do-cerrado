// Sobre o DOM
//
// ClassList: retorna uma lista com as classes do elemento. Permite adicionar, remover ou verificar se contem.
const menu = document.querySelector('.menu');

console.log(menu.className); // Uma classe só
console.log(menu.classList); // Lista de classes -> DOMTokenList

menu.classList.add('ativo');
menu.classList.add('ativo', 'mobile');
console.log(menu.classList);
menu.classList.remove('ativo');
console.log(menu.classList);
menu.classList.toggle('ativo'); //adiciona ou remove a classe
console.log(menu.classList);
menu.classList.contains('ativo'); //true ou false
menu.classList.replace('ativo', 'inativo');
console.log(menu.classList);

menu.className = menu.className + ' ativando';
console.log(menu.classList);


// Attribute

const ipes = document.querySelector('.ipes');

console.log(ipes.attributes);

console.log(ipes.attributes[0]);
console.log(ipes.attributes.class);
console.log(ipes.attributes['data-texto']); // porque tem ifem

// GetAttribute e setAttribute

const img = document.querySelector('img');

console.log(img.getAttribute('src'));

img.setAttribute('alt', 'imagem de um ipe')
console.log(img.attributes.alt);
img.removeAttribute('alt');
console.log(img.attributes.alt);
console.log(img.hasAttribute('alt'));
