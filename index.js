// Code your solutions in this file
function writeCards(names){
    for(let i = 0; i < names.length; i++){
    names[i] = 'Thank you, ' + names[i] + ', for the wonderful surprise gift!';
}
return names;
}

function countDown(number){
    for(let i = number; i >= 0; i--){
        console.log(i);
    }
}
