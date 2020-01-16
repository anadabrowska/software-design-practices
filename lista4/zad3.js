function Foo() {
    var myPrivateVar = "I can set this here!";

    var Qux = function() {  //visible inside Foo()
        return myPrivateVar;
    }

    this.Bar = function() {  //visible to all
        return Qux();
    }
}

var obj = new Foo();
console.log(obj.Bar());
// console.log(Foo.Qux()); -> TypeError: Foo.Qux is not a function
// console.log(obj.Qux()); -> TypeError: obj.Qux is not a function