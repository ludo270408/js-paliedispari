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