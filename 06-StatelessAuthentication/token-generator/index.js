var jwt    = require('jsonwebtoken'); // used to create, sign, and verify tokens

var SUPER_SECRET ='is2lab'

var payload = {
	admin: true,
	email: "test@unitn.it"	
}

var options = {
	expiresIn: 86400 // expires in 24 hours
}

var token = jwt.sign(payload, SUPER_SECRET, options);

console.log(token);
