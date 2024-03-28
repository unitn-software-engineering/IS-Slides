sleep = function (time) {
    return new Promise( (res) => setTimeout( res, time) )
}

async function job(data) {
    if ( isNaN(data) )
        throw("error");
    else if ( data % 2 == 1 ) {
        await sleep(1000);
        return "odd"
    }
    else {
        await sleep(2000);
        return "even"
    }
}
job("3");
job(1);
job(0);

module.exports = job;