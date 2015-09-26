var fs = require('fs')


var filepath = process.argv[2]


fs.readFileSync(filepath).toString().split("\n").forEach(function(line){

	if (line != "") {

		var fibo = GetFibonacciSeries(line);

		console.log(fibo);
	};
});


function GetFibonacciSeries(value){
//The Fibonacci series is defined as: F(0) = 0; F(1) = 1; F(n) = F(n-1) + F(n-2) when n>1. 
//Given a positive integer 'n', print out the F(n).
	var count = Number(value);
	var sum;
 
 	var _array, finalarray=[];
 	
 	for (var i = 0; i <= count; i++) {

 		if (i == 0) {
 			finalarray.push(0);
 		}
 		else
 		if (i == 1 || i == 2) {
 			finalarray.push(1)
 		}
 		else{
 			var value = finalarray[i-1] + finalarray[i-2]
 			finalarray.push(value)
 		}
 	};

 	return finalarray[finalarray.length - 1];
}

function GetFibo2(num){

	if(num === 0)
		return 0;

	if (num === 1) { return 1; 	}
	else
	{
		return GetFibo2(num-1) + GetFibo2(num-2)
	}
}