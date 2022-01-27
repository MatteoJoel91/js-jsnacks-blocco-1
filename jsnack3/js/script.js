// Calcola la somma e la media dei primi 10 numeri.

let somma = 0;
let i = 0;

while (i <= 9){
    numero = parseInt(prompt('Inserire il ' + (i+1) + 'º numero'));
    somma = somma + numero;
    i++;   
}

alert("La somma dei numeri è " + somma + " La media dei numeri inseriti è " + (somma / [i]))
