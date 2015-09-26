

//palindrome is a pattern where irrespective of direction of access the semantics remains same
//or in other way if the reverse of the value or the string is same as the original then the value
//or the string is called palindrome

//"101" reads "101" from either side, so it is palindrome

function isPrime (n)
{
    if (n < 2) return false;

    /**
     * An integer is prime if it is not divisible by any prime less than or equal to its square root
     **/

    var q = Number(Math.sqrt(n));

    for (var i = 2; i <= q; i++)
    {
        if (n % i == 0)
        {
            return false;
        }
    }

    return true;
}

var GetPrime = function ()
{
	var primes = [];
	for (var i = 0; i < 1000; i++) {
		if (isPrime(i)) 
		{
			var array = i.toString().split("")

			var myquo = quo(i.toString().split(""));

			var reversearray = myquo.get_reverse()
			
			if (array.toString() === reversearray.toString()) {
				primes.push(array);
				
			};
			
		};	
	}

	return primes;
}

var quo = function (status) {
         return {
			get_reverse: 
			function () 
			{ 
				return status.reverse();
			}	 
		};
};


var primesarray = GetPrime();
console.log(primesarray[primesarray.length - 1].toString().replace(/,/g, ""))