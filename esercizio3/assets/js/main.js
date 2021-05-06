// Cliccando su un pulsante, viene avviato un cronometro. Per fermare il cronometro,
//  bisogna cliccare su un secondo pulsante.


var secondi = 0;

var showTimer = document.getElementById("tempo");

showTimer.innerHTML = secondi;

var crono;

var prova;

document.getElementById("start")
.addEventListener("click", startTimer);

document.getElementById("stop")
.addEventListener("click", stopTimer);


function startTimer(){
    
   showTimer.innerHTML = secondi;

    crono = setInterval(function(){
        secondi++;
        showTimer.innerHTML = secondi;
    }, 1000);


}

function stopTimer(){
    clearInterval(crono);
}