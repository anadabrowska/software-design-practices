function sum() {
    let result = 0;
    for(let i =0; i < arguments.length; i++){
        result += arguments[i];
    }
    return result;
}

console.log(sum())
console.log(sum(1,2,3));
console.log(sum(1,2,3,4,5));