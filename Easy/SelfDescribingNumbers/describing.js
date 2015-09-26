
var fs =  require('fs')

var filepath = process.argv[2];

function searchnumber (arg, number){
	var count= 0;
	for(var i = 0; i < arg.length; i++){

		if(arg[i] == number){
			count++;
		}
	}

	return count;

}

var Validate = function(listofnumbers)
{
	var new_array = [];
	for (var i = 0; i < listofnumbers.length; i++) {
		var position = i;

		var val = searchnumber(listofnumbers, position);
		new_array.push(val.toString());
	};
	 return new_array;
};

function compare_final_arrays(arg0, arg1){
	var isequal = 1;

	for (var i = 0; i < arg0.length; i++) {
		if (arg0[i] !== arg1[i]) {
			isequal = 0;
		};
	};

	return isequal;
}


fs.readFileSync(filepath)
	.toString()
	.split('\n')
	.forEach(function (line) {

		var new_line = line.split("");

		var newarray = Validate(new_line);

		console.log(compare_final_arrays(new_line, newarray));

	});


	