// var fs = require( "fs" );
// fs.readFile( "file.txt", "utf8", function(error, data) {
//     console.log(data);
// } );
// console.log("log 1");
// var data = fs.readFileSync( "file.txt", "utf8" );
// console.log("log 2", data);



function callback2 () {
    console.log('5000ms') // 5000ms
}
function callback1 () {
    console.log('1000ms') // 1000ms
    setTimeout( callback2, 5000 ) // then, wait for another 5 seconds
}
setTimeout( callback1, 1000 ) // wait for 1 second
