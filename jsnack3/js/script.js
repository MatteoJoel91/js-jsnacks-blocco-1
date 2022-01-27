// Calcola la somma e la media dei primi 10 numeri.

let container = document.getElementById('risultati');

let somma = 0;

let media = 0;

for (let i = 0; i <= 10; i++) {
    somma = i + somma;
    media = somma / i;
}

console.log('La somma dei primi 10 numeri è ' + somma);
container.innerHTML += "<div class='risultati'>" + 'La somma dei primi 10 numeri è ' + somma + "</div>";

console.log ('La media della somma dei primi 10 numeri è ' + media);
container.innerHTML += "<div class='risultati'>" + 'La media della somma dei primi 10 numeri è ' + media + "</div>";