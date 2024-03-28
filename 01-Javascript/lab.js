var array = [1,2,3];

// [1,2,3].forEach( (v,i)=>console.log(i) );

array.map( (/** @type {string} */ v) => v)

/**
 * @param {number[]} array 
 */
function test( array ) {
    array;
}

/**
 * @type {string}
 */
var a;

// var car = {
//     type : 'Fiat',
//     wheel : function() {
//         // this = car
//         return wheel = {
//             size : 16,
//             color : 'black',
//             description : () => {
//                 // NO this = wheel
//                 return this.type;
//             }
//         }
//     }
// }

// console.log(car.wheel().description());

// class Car3 {
//     constructor(type, model, color) {
//         this.type = type;
//         this.model = model;
//         this.color = color;
//     }
//     description = () => {
//         return this.color + ", " + this.model + ", " + this.type;
//     }
// }

// var mycar = new Car3('Fiat', '500', 'white');
// console.log( mycar.description() );