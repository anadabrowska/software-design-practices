function* createGenerator(end){
    for ( var i=0; i<end; i++ ) {
        yield i;
    }
}

var bar = {
    [Symbol.iterator]: createGenerator
}

for ( var b of bar[Symbol.iterator](15)) {
    console.log( b );
}

function WrappedGenerator(n) {
    return function* createGenerator(){
        for ( var i=0; i<n; i++ ) {
            yield i;
        }
    }
}
 
var foo = { [Symbol.iterator] : WrappedGenerator(5) };
for (var f of foo) {
    console.log(f);
}
 
var foo2 = { [Symbol.iterator] : WrappedGenerator(10) };
for (var f of foo2) {
    console.log(f);
}