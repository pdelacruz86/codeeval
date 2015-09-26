
//Print out the table in a matrix like fashion, each number formatted to a width of 4 
//(The numbers are right-aligned and strip out leading/trailing spaces on each line). 
//The first 3 line will look like:

// 1   2   3   4   5   6   7   8   9  10  11  12
// 2   4   6   8  10  12  14  16  18  20  22  24
// 3   6   9  12  15  18  21  24  27  30  33  36

(function(){

	//function to create the table object
	function GetTable(num){
		var mytablearray = [];

		//from 1 to 12
		for (var i = 1; i <= 12; i++) {

			//get the multiply value
			var val = (num * i).toString();
			
			//add the result to the collection			
			 mytablearray.push(AddSpacing(val))
	 	}

		return mytablearray;
	}

	//add matrix base spacing to the array of elements
	function AddSpacing(value){

		//creating the spacing
			var fill;

			if(value.length === 1)
				fill = "   ";
			else
			if(value.length === 2)
				fill = "  ";
			else 
				fill =  " ";

			//concat the value with the spacing
			return fill + value;
	}

	// from 1 to 12 print the table objects 
	for (var i = 1; i <= 12; i++) {
		console.log(GetTable(i).toString().replace(/,/g, ""));
	}

})();