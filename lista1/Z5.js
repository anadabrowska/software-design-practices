function fibRecursive(n){
    return n <=1 ? n : fibRecursive(n-1) + fibRecursive(n-2);
}
function fibIterative(n){
    let prev = 1;
    let cur = 1;
    let temp;
    for(var i = 2; i < n; i++){
        temp = prev;
        prev = cur;
        cur = prev + temp;
    }
    return cur;
}

function countTime(n){
    for(var i = 10; i <= n; i++){
        console.log(`${i}t Fibonacci number:`);
        console.time("iterative version");
        fibIterative(i);
        console.timeEnd("iterative version");
        console.time("recursive version");
        fibRecursive(i);
        console.timeEnd("recursive version");
        console.log("---------------------------");
    }
}
countTime(40);