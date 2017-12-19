/** Creating Namespace with an interface 
 * and function */

namespace AnimalNameSpace {
    export interface Cow {
      breed : string;
      country : string;
      quantityofmilk : string;
    }
 
// Function cow Detail for gathering cow data 
export function cowDetail(cow : Cow) : string {
return `The cow details are as follows 
Breed : ${cow.breed} 
Country : ${cow.country}
Quantity of milk:${cow.quantityofmilk}`;
}
  }