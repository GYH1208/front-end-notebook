class Person{
    eat():void{
        console.log("123");
    }
}

class Teacher extends Person{
    eat():void{
        console.log("456");
    }
}

var q:Person = new Teacher();

q.eat(); // 456