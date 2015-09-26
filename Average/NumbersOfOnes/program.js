//Write a program which determines the number of 1 bits in the internal representation of a given integer.
(function(){

	var fs  = require("fs");

	//load the file and iterate per line
	fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
	    if (line != "") {

	    	var answer_line = getOnes(line);

	        console.log(answer_line);
	    }
	});

	//return the number of 1 from the binary
	function getOnes(line){

		var binary =  parseInt(line).toString(2);

		var count = 0 ;

		//conver the binary in an array and iterate to get the ones
		binary.split("").forEach(function(bin){
			
			if(Number(bin) === 1){
				count ++;
			}
		})

		return count;

	}


})()