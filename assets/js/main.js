// Mail
// Chiedi all’utente la sua email,
// controlla che sia già presente nella lista di email per controllare se può accedere,
// stampa un messaggio appropriato sull’esito del controllo.
// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.



// let listaemail = ["andrea.ferrini90@gmail.com" , "newdante90@hotmail.it"]

// let scriviemail = document.getElementById("email")

// let verifica =  document.getElementById("verifica")

// function controllaEmail(){

//     scriviemail.value
    
//     scriviemail.push
 
//     let conferma = false
 
 
//     for (let x = 0; x < listaemail.length; x++){
 
//      if(listaemail[x] === scriviemail.value){
 
//          conferma = true
//          console.log("sei gia registrato")
//      }
 
//     }
 
//     if(conferma == true){
 
//          verifica.innerText = `Sei già registrato!`
 
//     }else{
 
//          verifica.innerText = `Non sei già registrato!`
 
//     }
 
//  }


//correzzione//
 function controlloEmail(){
    let inputValue = document.getElementById(`inputEmail`).value

    let arrayEmails = [
        `andrea.ferrini90@gmail.com`,
        `newdante90@hotmail.it` ,
        `email1@gmail.com`,
        `email2@gmail.com`,
        `email3@gmail.com`,
    ]

    let soldatino = false;

    for(let i = 0; i < arrayEmails.length; i++) {
        if( arrayEmails[i] == inputValue ){
            soldatino=true
        }
    }

    if( soldatino == true ){
        document.writeln("l' email che hai scelto è presente")
    } else {
        document.writeln("L' email che hai scelto NON è presente, REGISTRATI")
    }
 }

 //dadi//

 function randomNumber (max, min) {
    return Math.floor( Math.random() * max ) + min
 }

 function gioca(){
    let cpu = randomNumber(6, 1)
    let persona = randomNumber(6, 1)

    if( cpu > persona ) {
        document.writeln(`La Cpu ha vinto`)
    } else if ( persona > cpu ){
        document.writeln(`La persona ha vinto`)
    } else {
        document.writeln(`Pareggio`)
    }
 }