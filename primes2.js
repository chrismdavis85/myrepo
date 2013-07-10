#!/usr/bin/env node

var primeArray = [];
var numPrimes = 100;

var fs = require('fs');
var outfile = "primes2.txt";

function primeCheck(num){

  isPrime = true;
    for (var i = 2; i < num && isPrime; i++){
      if(num%i === 0){
        isPrime = false;
      }else {
        isPrime = true;
        }
    }

    if(isPrime){
    	primeArray.push(num);
    }
	return primeArray;
}

for (var j = 2; numPrimes > primeArray.length; j++){
	primeCheck(j);
}

fs.writeFileSync(outfile, primeArray.toString(), /n);

console.log("This should be printed in primes2.txt: " + primeArray.toString());
