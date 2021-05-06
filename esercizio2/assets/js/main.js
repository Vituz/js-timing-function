// Simulare un countdown di 10 secondi che alla fine dice "Buon anno!"

var secondi = 11;

var intervallo = setInterval(function(){

    if(secondi === 0){
        alert("BUON ANNO!!!");
        clearInterval(intervallo);
    } else {
        secondi--;
    }

    document.getElementById("secondi").innerHTML = secondi;

}, 1000);



