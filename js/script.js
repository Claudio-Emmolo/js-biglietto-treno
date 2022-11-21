// Input
let kilometres = parseInt (prompt ("Quanti chilometri dovrai percorrere?"));

let personAge = parseInt  (prompt ("Qual'è la tua età?"));

// Convert Number
console.log(typeof kilometres);
console.log(typeof personAge);


// Km calculation price
let totKilometes = kilometres * 0.25;

// Discount calculation
let ageDiscount;

if (personAge < 18) {
    ageDiscount = totKilometes * 20 / 100;
} else if (personAge >= 65){
    ageDiscount = totKilometes * 40 / 100 ;
}

//Tot Price generator
let totPrice = (parseFloat (totKilometes - ageDiscount) .toFixed(2));

console.log (totKilometes);

console.log (ageDiscount);

console.log (totPrice);

//Print HTML

document.getElementById ("costo-totale") .innerHTML = "Il prezzo è di " + totPrice + " &euro;"