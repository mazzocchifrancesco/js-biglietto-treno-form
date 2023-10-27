// variabili sistema
const euroKm = 0.21;
const underDiscount = 0.2;
const overDiscount = 0.4;




// bottone
let btn=document.querySelector("#bottone");

btn.addEventListener("click", function() {

    const etaUtente = document.querySelector("#etaUtente").value;
    const kmUtente = Number.parseInt(document.querySelector("#km").value);
    
    console.log("età: ", etaUtente);
    console.log("distanza: ", kmUtente);
    
    // check dati validi in ingresso
    if (isFinite(kmUtente)==false) {
        document.getElementById("testo").innerHTML = `I valori inseriti non sono accettati`;
    }
    else {
        
        
        let price = kmUtente*euroKm;
        
        if ( etaUtente == "minorenne") {
            price=(price-(price*underDiscount)).toFixed(2);
        }
        
        else if (etaUtente == "over") {
            price=(price-(price*overDiscount)).toFixed(2);
        }
        
        
        document.getElementById("testo").innerHTML = `il costo del tuo biglietto è di ${price} €`;
    }
    
})




