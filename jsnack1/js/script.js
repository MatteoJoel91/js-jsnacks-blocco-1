// Il software deve chiedere per 10 volte all’utente di inserire un numero. 
// Il programma stampa la somma di tutti i numeri inseriti.


let somma = 0;
let i = 0;

while (i <= 9){
    numero = parseInt(prompt('Inserire il ' + (i+1) + 'º numero'));
    somma = somma + numero;
    i++;   
}

alert("La somma dei numeri è " + somma)
