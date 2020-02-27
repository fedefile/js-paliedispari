// primo esercizio

// Una funzione per capire se la parola è palindroma



var pariODispari = prompt('Scegli pari o dispari');
var scegliNumero = parseInt(prompt('Scegli un numero da 1 a 5'));
var numero = generoRandomMinMax(1 , 5);
var somma = sommaNumeri(10 , 5);



function generoRandomMinMax(min, max){
    var numeroRandom = Math.floor(Math.random() * (max - min + 1)) +min;
    return numeroRandom;
    console.log(numeroRandom);
}
function sommaNumeri( num1 , num2 ){
    var risultato =  num1 + num2;
    console.log(risultato);
}






// secondo esercizio

// L’utente sceglie pari o dispari e un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer.
//  Sommiamo i due numeri e dichiariamo chi ha vinto.

// ulteriori dati:
// prompt ---> “scegli Pari o Dispari”     --------> ES: Pari
// prompt ---> “Scegli un numero”         --------> ES: 5
// creo un numero RANDOM                --------> ES: 10
// 10 + 5 = 15 è un numero DISPARI
// log     -------->   Spiacente, hai scelto PARI, ma la somma del tuo numero e del mio numero random ha restituito un numero DISPARI, hai perso!!!




var scegliNumero = parseInt(prompt('scegli un numero da 1 a 5'));
var scegliPariDispari = prompt('scegli pari o dispari');

if (scegliNumero % 2 == 0) {
    console.log('numero pari');
} else {
    console.log('numero dispari');
}
console.log(scegliNumero);

var numero = generaRandomMinMax(1, 5);

if ((numero + scegliNumero) % 2 ==0) {
    if (scegliPariDispari = 'pari') {
        console.log('hai vinto');
    } else if (scegliPariDispari = 'dispari'){
        console.log('hai perso');
    }
}
if ((numero + scegliNumero) % 2 ==1) {
    if (scegliPariDispari = 'pari') {
        console.log('hai perso');
    } else if (scegliPariDispari = 'dispari'){
        console.log('hai vinto');
    }
}
function generaRandomMinMax(min, max) {
    var numeroRandom = Math.floor(Math.random() * (max - min + 1)) + min;
    return numeroRandom;
}
