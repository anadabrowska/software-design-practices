function isDividedByNumber(arg, number){
    return arg % number === 0;
}

function isProperNumber(number){
    let sum = 0;
    let left = number;
    let digit;
    while(left > 0){
        debugger;
        digit = left % 10;
        sum += digit;
        left = Math.floor(left/10);
        if(!isDividedByNumber(number, digit)) return false;
    }
    return isDividedByNumber(number, sum);
}

(function findAllNumbers(){
    for(let i = 0; i <= 100000; i++){
        if(isProperNumber(i)) console.log(i);
    }
})();