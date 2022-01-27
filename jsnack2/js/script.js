// Stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente.

let container = document.getElementById('risultati');
let numero = parseInt(prompt('Inserire un numero'));
let cubo = 0;
i=0;
while (i <= numero) {
    cubo = Math.pow(i,3)
    console.log('Il cubo di ' + i + ' è ' + cubo);
    container.innerHTML += "<div class='risultati'>" + 'Il cubo di ' + i + ' è ' + cubo + "</div>";
    i++;
}