// Calcola la somma e la media dei primi 10 numeri.

let container = document.getElementById('risultati');

let numero_giri = 10;

let somma = 0;

let media = 0;

for (let i = 0; i <= numero_giri; i++) {
    somma = i + somma;
    console.log(i);
    container.innerHTML += "<div class='risultati'>" + i + "</div>";
}

media = somma / numero_giri;

console.log('La somma dei primi 10 numeri è ' + somma);
container.innerHTML += "<div class='risultati'>" + 'La somma di questi numeri è ' + somma + "</div>";

console.log ('La media della somma dei primi 10 numeri è ' + media);
container.innerHTML += "<div class='risultati'>" + 'La media della somma di questi numeri è ' + media + "</div>";