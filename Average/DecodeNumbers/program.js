
var fs = require('fs');

var filepath = process.argv[2];

// var getLetter = function( num){

// 	var mainarray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O',
// 							'P','Q','R','S','T','U','V','W','X','Y','Z'];

// 	var word = mainarray[num-1];

// 	return word;
// }
function getfirstDigits(count, list){

	if (numchar === 1)
		return list[0];
	else
		return list[0] + list[1];

}

function decodemessage(arg, messagelength){

	var i, c;
	var counts = [ 1, 0 ];

    for(i = 0, c; i < messagelength; ++i) {
        c = 0;
        if((i > 0) && ((arg[i - 1] == '1') || (arg[i - 1] == '2' && arg[i] < '7'))) {
            c += counts[1];
        }
        if(arg[i] > '0') {
            c += counts[0];
        }
        counts[1] = counts[0];
        counts[0] = c;
    }

	return counts[0];
}


var linecount = 0;
fs.readFileSync(filepath)
	.toString()
	.split('\n')
	.forEach(function(line){
		//make split of the line
		var newline = line.split("");
		var count = decodemessage(newline, newline.length);

		console.log(count)
		

});