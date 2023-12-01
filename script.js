//1. Esercizio

function check(word){
    let reversed = word.split('').reverse('').join('');

    if(reversed == word){
        alert ('Questa si tratta di una parola palindroma!');
    }
    else{
        alert('La parola inserita non si tratta di una palindroma');
    }
}

let string =prompt('Quale parola devo controllare?');
check(string);

//2. Esercizio

//Funzione che genera i numeri
function RandomNumberGenerator(){
    return Math.floor(Math.random() * 5 + 1);
}

function checkSomma(somma){
    if(somma%2==0){
        return'pari';
    }
     return 'dispari';
}

let user_choice= prompt(' Inserisci un valore tra "pari" e "dispari"');
let user_number= parseInt(prompt('Inserisci un numero da 1 a 5: '));
let pc_number=RandomNumberGenerator();
let somma= user_number + pc_number;
let risultato=checkSomma(somma);
console.log(risultato);
console.log(user_choice);


if(risultato == user_choice){
    alert('Hai vinto!');
}
else{
    alert(' Hai vin.... EH VOLEVIII! No hai perso mi spiace');
}


