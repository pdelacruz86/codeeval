
//Print out the sum of integers read from a file.
(function(){

	var fs  = require("fs");
	var sum = 0;

	fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
	    if (line != "") {

	    	 sum = sum + Number(line)
	        
	    }
	});

	console.log(sum);
})()


