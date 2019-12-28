/* Sieve of Eratosthenes */

(function sieveOfErastotenes(){
    let n = 100000;
    let sqrt = Math.floor(Math.sqrt(n));
    let boolArray = new Array(n+1);
    let multiple;
    for (var i = 0; i < boolArray.length; i++) { boolArray[i] = true; }
    for(var i = 2; i <= sqrt; i++){
        if(boolArray[i]){
            multiple = i*i;
            while(multiple <= n){
                boolArray[multiple] = false;
                multiple += i;
            }
        }
    }
    for(var i = 2; i <= n; i++){if(boolArray[i]) console.log(i)}
})();