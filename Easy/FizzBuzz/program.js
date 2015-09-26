
var fs = require('fs')

var filepath =  process.argv[2];



var getResults = function (x, y, currennumber, z) { 
	var value= '';
	currennumber = currennumber + 1;
	if (currennumber % x === 0) {

		//print fizz
		value = 'F';
	};

	if (currennumber % y === 0) {

		//print buzz
		value = value + 'B'
	};

	if (value == '') {
		value = currennumber.toString();
	};

     return value;
};


fs.readFileSync(filepath).toString().split('\n').forEach(function(line){

	for(var i = 0; i < line.length; i++){
		var new_line = line.split(" ");

		var x =  new_line[0];
		var y = new_line[1];
		var count = new_line[2];

		var new_array = [];

		for (var i = 0; i < count; i++) {
			 var value= getResults(x, y, i, count);

			 new_array.push(value);
		};

		console.log(new_array.toString().replace(/,/g, ' '));

	}

});