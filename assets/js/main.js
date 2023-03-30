// Mail
// Chiedi all’utente la sua email,
// controlla che sia già presente nella lista di email per controllare se può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

var listaMail = ["andrea.ferrini90@gmail.com", "newdante90@hotmail.it", "cielimmensi@gmail.com", "acquazzurracquachiara@gmail.com", "smellslikeateenspirit@gmail.com"];

var checkMail = prompt('inserisci qui la tua email');
var mail = false;

for (var i = 0; i < listaMail.length; i++) {
  var lista = listaMail[i];
  if(lista == checkMail){
    mail = true;
  }
}

if (mail == true){
  alert('Sei già registrato!');
}else{
  alert('Non sei già registrato!');
}

 // Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

var nomeGiocatore1 = prompt("inserisci il nome del primo giocatore");

var giocatore = document.getElementById('utente');
giocatore.addEventListener('click', function(){
  var punteggioUtente= Math.floor(Math.random() * 6) + 1;
  alert(nomeGiocatore1+' hai realizzato '+punteggioUtente+" punti");
  var punteggioCpu= Math.floor(Math.random() * 6) + 1;
  alert('Il computer ha realizzato '+punteggioCpu+" punti");

  if(punteggioUtente > punteggioCpu) {
    alert('hai vinto!');
  }else if (punteggioUtente == punteggioCpu) {
    alert('il risultato è di parità, riprova');
  }else {
    alert('hai perso!');
  }
})