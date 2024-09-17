// setTimeout(()=>{
// console.log('1000ms'); // 1000ms
//     setTimeout(()=>{
//         console.log('5000ms') // 5000ms
//     }, 5000) // then, wait for another 5 seconds
// }, 1000) // first, wait 1 second


// function promisifiedTimeout (time) {
//     return new Promise( (res,rej) => setTimeout( ()=>rej(time+'ms'), time) )
// }
// promisifiedTimeout(1000) // first wait for 1 second
// .then( resolvedValue => {console.log(resolvedValue)} ) // '1000ms
// .catch( err => {console.log(err);} )
// .then( v => {console.log(v); return promisifiedTimeout(5000)} ) // then wait for additional 5
// .then( console.log )





// var resolveFunction;
// var myPromise = new Promise( (resF) => { resolveFunction = resF; } );
// console.log(myPromise);
// resolveFunction(123);
// console.log(myPromise);
// myPromise.then( (resolvedValue) => console.log(resolvedValue) );
// console.log('terminated');




// var firstPromise = new Promise( res => setTimeout( ()=>res('1000ms'), 1000) )// first wait for 1 second

// var secondPromise = firstPromise.then( resolvedValue => {
//     console.log(resolvedValue);
//     return new Promise( res => setTimeout( ()=>res('5000ms'), 5000) ) // then wait for additional 5
// })
// secondPromise.then( ()=>console.log(secondPromise) )// '5000ms
// console.log(secondPromise);




// .then( resolvedValue => {return promisifiedTimeout(5000)} ) // then wait for additional 5
// .then( console.log )// '5000ms



function sleep (time) {
    return new Promise( (res) => setTimeout( ()=>{res(time+'ms')}, time) )
}
async function asyncExample() {
    var a = await sleep(1000); // first wait for 1 second
    console.log('a', a); // done
    // await sleep(5000); // then wait for additional 5
    // console.log('done'); // done
    return 'done';
}
const returnedValue = asyncExample();
console.log(returnedValue); // Promise { <pending> }