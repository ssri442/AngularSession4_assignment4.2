/** Using AnimalNameSpace with 1 interface and 2 functions 
 * in current file using references*/

// < reference path="assignment4.2.ts" />
// < reference path="assignment4.2func.ts" />

let jerseycow : AnimalNameSpace.Cow = { breed : "Jersey", country : "America", quantityofmilk : "1000 litres" }
let foreigncowdata : string  = AnimalNameSpace.cowDetail(jerseycow);

console.log(foreigncowdata);

let totalofcows : number = AnimalNameSpace.noofcows(100);

console.log("Total no of cows " + " " +totalofcows);