# TypeScript 学习笔记
- TypeScript 是 JavaScript 的超集，它是一种静态类型语言，可以编译成纯 JavaScript 代码。TypeScript 与 JavaScript 的关系类似于 C++ 和 Java 的关系。TypeScript 增加了类型系统，可以帮助开发者更好地理解代码，提高代码的可维护性和可靠性。
- Typescript 在运行之前需要先编译为javascript，在编译阶段会进行类型检查，所以typescript是静态类型。
- Typescript 使用编译上下文来给文件分组，告诉typescript哪些文件是有效的，哪些是无效的。default是默认的编译上下文，其他的编译上下文可以自定义。
- Typescript 编译器可以输出为纯javascript文件，也可以输出为.js.map文件，.js.map文件可以帮助调试器映射到typescript代码。
- Typescript 编译器可以编译为ES5、ES6、ES7等版本的javascript。
- Typescript 编译器可以编译为AMD、CommonJS、SystemJS、UMD等模块化规范。
- Typescript 编译器可以编译为.d.ts文件，.d.ts文件可以帮助IDE提供代码提示。

```typescript
const hello: string = "Hello, TypeScript!";
console.log(hello);
```

### Any 类型
Any 类型可以表示任意类型，在 TypeScript 中，Any 类型可以用于任何地方，包括变量的类型注解、函数参数的类型注解、函数返回值的类型注解等。



### never 类型
never 是其他类型的子类型，代表从不会出现的值，这意味着声明为never 的变量只能被never类型所赋值。

```typescript
let x:never;
let y:nenver;

//编译错误
x = 123;
// 运行正确，never 类型可以赋值给 never类型
x( () => {throw new Error('exception')})();

```

### 函数
```typescript
function function_name():return type{
    return value;
}
```

**构造函数**
```typescript
var res = new Function(arg1[,arh2[,...argN]], function_body);
```

 ### 接口
 以下实例中，我们定义了一个接口 IPerson，接着定义了一个变量 customer，它的类型是 IPerson。customer 实现了接口 IPerson 的属性和方法。
 ```typescript
 interface IPerson { 
    firstName:string, 
    lastName:string, 
    sayHi: ()=>string 
} 
 
var customer:IPerson = { 
    firstName:"Tom",
    lastName:"Hanks", 
    sayHi: ():string =>{return "Hi there"} 
} 
 
console.log("Customer 对象 ") 
console.log(customer.firstName) 
console.log(customer.lastName) 
console.log(customer.sayHi())  
 
var employee:IPerson = { 
    firstName:"Jim",
    lastName:"Blakes", 
    sayHi: ():string =>{return "Hello!!!"} 
} 
 
console.log("Employee  对象 ") 
console.log(employee.firstName) 
console.log(employee.lastName)
```
接口/类的继承模式与java类似，可以实现多接口的继承。
    

### 元组
元组（tuple）是一个类型化数组，每个索引都有预定义的长度和类型。元组允许数组中的每个元素都是知己类型的值。

```typescript
//定义元组
let ourTuple:[number, boolen, string]
//正确初始化
outTuple = [6,false,"hello"]
```

```typescript
let ourTuple: [number, boolean, string] = [6, false, 'I.O']
 
// 索引 3 的元组中没有类型安全性
ourTuple.push('O.O')
console.log(ourTuple) // [6, false, 'I.O', 'O.O']           
```
### 约束类型，减少不必要的代码逻辑
Typescript 支持类型最大的好处是可读性。 类型可以给开发者更多的信息，是最有价值的文档。类型很好的体现了代码即文档这一思想。
```typescript
fuction sum(x,y){
    if(typeof x != 'number'){
        x = pareseInt(x);
    }
    return x + y;
};

//TS的方式，直接约束了类型
function suum2(x:number, y:number){
    return x+y;
};
```

### TS 也是面对对象的语言，也是可以实现java 中的多态的。
```typescript
class Person{
    eat():void{
        consol.log("123");
    }
}

class Teacher extends Person{
    eat():void{
        console.log("456");
    }
}

var q:Person = new Teacher();

q.eat(); // 456
```

 
