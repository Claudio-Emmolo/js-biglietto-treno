// Input
const kilometres = prompt ("Quanti chilometri dovrai percorrere?");

const personAge = prompt ("Qual'è la tua età?");

// Km calculation price
let totKilometes = kilometres * 0.25;

// Discount calculation
let ageDiscount;

if (personAge < 18) {
    ageDiscount = totKilometes * 20 / 100;
} else if (personAge >= 65){
    ageDiscount = totKilometes * 20 / 100 ;
}


let totPrice = totKilometes - ageDiscount;

console.log (totKilometes);

console.log (ageDiscount);