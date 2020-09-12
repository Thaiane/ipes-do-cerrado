// Retorne elemento com ide ipes

const ipes = document.querySelectorAll('ipes');

console.log(ipes);

// retorne todas as imagens do site

const siteImgs = document.getElementsByTagName('img');

console.log(siteImgs);

// retorne apenas imagens que comecem com Ipê"

const ipesImgName = document.querySelectorAll('img[alt^="Ipê"]');

console.log(ipesImgName)

// selecione todos os links internos onde href começa com #

const linksInternos = document.querySelectorAll('a[href^="#"]');

console.log(linksInternos);

// selecione o último p do site

const lastP = document.querySelectorAll('p');

console.log(lastP.length-1);