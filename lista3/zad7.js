var fib = () => {
    var n1 = 1, n2 = 1;
    return{
        next: () => {
            var current = n2;
            n2 = n1;
            n1 = n1 + current;
            return {
                value: current,
                done: false
            };
        }
    }
}

function* fib2() {
    var n1 = 1;
    var n2 = 1;
    while (true){  
        var current = n1;
        n1 = n2;
        n2 = current + n1;
        yield current;
    }
}

var _it = fib();
   for ( var _result; _result = _it.next(), !_result.done; ) {
       console.log( _result.value );
       if(_result.value > 100000) break;
   }
var _it2 = fib2();
   for ( var _result; _result = _it2.next(), !_result.done; ) {
       console.log( _result.value );
       if(_result.value > 100000) break;
   }

for ( var i of fib2() ) {
    console.log( i );
    if(i > 100000) break;
}
