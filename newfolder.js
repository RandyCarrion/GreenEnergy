const fs = require("fs")

/*var someString = "Awesome";
fs.writeFile('honey.txt', someString, function(err) {
	if (err) {
		throw err;
	}
});*/

fs.readFile("newfolder.js", function(err, data) { //readFile is passing argument to the function, giving it something to read
	if (err) {
		throw err;
    }

    console.log(data.toStrings());
});