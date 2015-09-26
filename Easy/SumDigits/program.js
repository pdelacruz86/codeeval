var fs = require('fs')


var filepath = process.argv[2]


fs.readFileSync(filepath).toString().split("\n").forEach(function(line){

	if (line != "") {

		var linesum = SumDigits(line.split(""));

		console.log(linesum);
	};
});


function SumDigits(values){

	var sum = 0;
	values.forEach(function(number){

		sum =  sum + Number(number);

	})

	return sum;
}