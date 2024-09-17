var fs = require( "fs" );
setTimeout( () => console.log('setTimeout', gdata), 50 );
var gdata = "global data";
var a = 0;
for (var i = 0; i < 1000000000; i++) {
    a++;
}
fs.readFile( "file.txt", "utf8", function(error, data) {
    console.log('readFile', data);
    gdata = data;
} );
console.log(gdata);
console.log("Program Ended.");







// var data = fs.readFileSync( "file.txt", "utf8" );
// console.log("log 2", data);



// function callback2 () {
//     console.log('5000ms') // 5000ms
// }
// function callback1 () {
//     console.log('1000ms') // 1000ms
//     setTimeout( callback2, 5000 ) // then, wait for another 5 seconds
// }
// setTimeout( callback1, 1000 ) // wait for 1 second
