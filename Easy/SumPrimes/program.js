
//Write a program which determines the sum of the first 1000 prime numbers.
function getPrime(n){

        if (n < 2) return false;

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

function Initialize(){

    var primesum = 0;

    var count = 0;
    var i = 0;
    while(count < 1000) {
        i++;

        if (getPrime(i)) {
            count++;
            primesum = primesum + i;
        }
    }
    console.log(primesum);
}

Initialize();
