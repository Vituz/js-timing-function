// Il programma chiede all’utente quanti secondi mancano alla cottura della pasta. 
// Dopo il tempo indicato,
//  appare un alert().


var userTime = Number(prompt("Quanti secondi mancano alla cottura della pasta?"));
console.log(userTime);


var timeToFinish = userTime * 1000;
console.log(timeToFinish);

setTimeout(coockingTime, timeToFinish);


function coockingTime(){
    alert(`Sono passati ${userTime} secondi, la pasta è pronta!`);
}