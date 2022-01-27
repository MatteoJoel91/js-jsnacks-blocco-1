// Calcola la somma e la media dei primi 10 numeri.

let container = document.getElementById('risultati');
let elementi = document.getElementById('numeri');

let numero_giri = 10;

let somma = 0;

let media = 0;

for (let i = 0; i <= numero_giri; i++) {
    somma = i + somma;
    console.log(i);
    elementi.innerHTML += i + ' ' ;
}


media = somma / numero_giri;

console.log('La somma dei primi 10 numeri è ' + somma);
container.innerHTML += "<p>" + 'La somma di questi numeri è ' + somma + "</p>";

console.log ('La media della somma dei primi 10 numeri è ' + media);
container.innerHTML += "<p>" + 'La media della somma di questi numeri è ' + media + "</p>";