
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        //do something here

		var values = findMultiple(line)
        console.log(values);

    }
});


function findMultiple(data){
	
	var dataarray = data.split(",");
	
	//the smallest multiple of n which is greater than or equal to x, one per line
	var xvalue = dataarray[0];

	var n = dataarray[1];
	var multiple = 0;

	while (true){

		multiple++;
 
		if ((n * multiple) >= xvalue) {
			break;
		};
	}

	return multiple * n;

}
