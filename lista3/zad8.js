function* fib2() {
    var n1 = 1;
    var n2 = 1;
    while (true) {  
        var current = n1;
        n1 = n2;
        n2 = current + n1;
        yield current;
    }
}

function* take(fn, n){
    for(let i=0; i< n; i++){
        yield fn.next().value;
    }
}

for (let num of take(fib2(), 10 ) ) {
    console.log(num);
  }