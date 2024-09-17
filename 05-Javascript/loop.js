const start = new Date().getTime();
const timers = [];
const mySetTimeout = (callback, time) => timers.push( {callback, time, isOver: () => new Date().getTime() - start > time} );


// my program
console.log('hello world');
mySetTimeout( () => console.log('1000ms'), 1000 );


while (true) {
    for ( t of timers ) {
        if (t.isOver()) {
            t.callback();
        }
    }
}