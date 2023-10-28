
// variabili sistema
const euroKm = 0.21;
const underDiscount = 0.2;
const overDiscount = 0.4;


// bottoni
let crea=document.querySelector("#crea");
let cancel=document.querySelector("#cancel");

// crea biglietto
crea.addEventListener("click", function() {

    const etaUtente = document.querySelector("#etaUtente").value;
    const kmUtente = Number.parseInt(document.querySelector("#km").value);
    const nomeUtente = document.querySelector("#nomeUtente").value;
    const fullPrice = kmUtente*euroKm;
    
    console.log("età: ", etaUtente);
    console.log("distanza: ", kmUtente);
    
    // check dati validi in ingresso
    if (isFinite(kmUtente)==false || etaUtente=="Seleziona") {
        document.querySelector("#errorBox").innerHTML = `I valori inseriti non sono accettati`;
    }
    else {
        let price = kmUtente*euroKm;
        
        if ( etaUtente == "minorenne") {
            price=(price-(price*underDiscount)).toFixed(2);
        }
        
        else if (etaUtente == "over65") {
            price=(price-(price*overDiscount)).toFixed(2);
        }
        
        
        document.querySelector("#costoBiglietto").innerHTML = price + " €";
        document.querySelector("#nomeUtentePrint").innerHTML = nomeUtente;
        document.querySelector("#etaPrint").innerHTML = etaUtente;
        document.querySelector("#sconto").innerHTML = (fullPrice - price).toFixed(2) + " €";
        document.querySelector("#kmPrint").innerHTML = kmUtente + " km";

        // generazione casuale carrozza e cp
        document.querySelector("#carrozza").innerHTML = Math.floor(Math.random() * 12) +1;
        document.querySelector("#cpCode").innerHTML = Math.floor(Math.random() * 10 ** 5);

    }
    
})

// annulla input
cancel.addEventListener("click", function() {
    document.querySelector("#nomeUtente").value = ""
    document.querySelector("#km").value = ""
    document.querySelector("#etaUtente").value = "Seleziona"


})



