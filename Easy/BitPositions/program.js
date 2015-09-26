
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        //do something here

		 var values = findBitPosition(line)
  		console.log(values);
    }
});


function ConvertToBinary(number){

	var binary = [] ;
	while(true){

		if (number % 2 == 0) 
		{	
			binary.push(0);
			number = parseInt(number / 2)
		}
		else
		{
			binary.push(1);
			number = parseInt(number / 2)
		};

		if (number < 1 ) {

			break;
		}
		console.log(parseInt(number))
	}

	return binary.reverse();

}


function findBitPosition(data){
	
	var dataarray = data.split(",");
	
	//Given a number n and two integers p1,p2 determine if the bits in position p1 and p2 
	//are the same or not. Positions p1 and p2 are 1 based.
	var number = dataarray[0];

	var position1 = dataarray[1];
	var position2 = dataarray[2];

	//convert from decimal to binary
	var binaryValue = Number(number).toString(2) //ConvertToBinary(number);

	//conver the result into array and look for the positions
	var x = binaryValue.split("");

	var realposition1 = x[binaryValue.length - (position1)]
	var realposition2 = x[binaryValue.length - (position2)]

	//console.log(x, 'pos1 -- ' + position1, 'pos2 --' + position2, realposition1, realposition2)

	if (realposition1 ==  realposition2) {
		return true;
	}else{
			return false;
	};

}

