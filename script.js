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