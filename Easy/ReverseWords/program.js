

var fs = require('fs')

var filepath = process.argv[2]


fs.readFileSync(filepath).toString().split("\n").forEach(function  (line) {
	
	if (line != "") {		
		var linearray = line.toString().split(" ");

		linearray.reverse();

		console.log(linearray.toString().replace(/,/g, " "));


	};
})