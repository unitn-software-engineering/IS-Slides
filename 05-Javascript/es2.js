/**
  * Task description: Write a method that turns a deep array into a plain array
  * Expected Result: [1, 2, [3, 4, [5]]] => [1, 2, 3, 4, 5]
  * Task complexity: 3 of 5
  * @param {Array} array - A deep array
  * @returns {Array}
*/
const flatten = (array) => {
    
    return array.reduce( (flat,e) => ( Array.isArray(e) ? flat.concat(e) : e ), [] )


    // /** @type {Array} */
    // var flat = [];
    // for ( e of array ) {
    //     if ( Array.isArray(e) ) {
    //         flat = flat.concat( flatten(e) )
    //     } else {
    //         flat.push(e);
    //     }
    // }
    // return flat;
}
const data = [1, 2, [3, 4, [5]]];
console.log(flatten(data)); // [1, 2, 3, 4, 5]