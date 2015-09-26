
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        //do something here

		 var values = ConvertoLowercase(line)
  		console.log(values);
    }
});


function ConvertoLowercase(data){
	
	return data.toLowerCase()
	
	
}