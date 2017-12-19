/** Creating Namespace with an interface and function */
var AnimalNameSpace;
(function (AnimalNameSpace) {
    function cowDetail(cow) {
        return "The cow details are as follows \nBreed : " + cow.breed + " \nCountry : " + cow.country + "\nQuantity of milk:" + cow.quantityofmilk;
    }
    AnimalNameSpace.cowDetail = cowDetail;
})(AnimalNameSpace || (AnimalNameSpace = {}));
var AnimalNameSpace;
(function (AnimalNameSpace) {
    function noofcows(total) {
        return total;
    }
    AnimalNameSpace.noofcows = noofcows;
    ;
})(AnimalNameSpace || (AnimalNameSpace = {}));
// < reference path="assignment4.2.ts" />
// < reference path="assignment4.2func.ts" />
var jerseycow = { breed: "Jersey", country: "America", quantityofmilk: "1000 litres" };
var foreigncowdata = AnimalNameSpace.cowDetail(jerseycow);
console.log(foreigncowdata);
var totalofcows = AnimalNameSpace.noofcows(100);
console.log("Total no of cows " + " " + totalofcows);
