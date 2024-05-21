# TypeScript 学习笔记
TypeScript 是 JavaScript 的超集，它是一种静态类型语言，可以编译成纯 JavaScript 代码。TypeScript 与 JavaScript 的关系类似于 C++ 和 Java 的关系。TypeScript 增加了类型系统，可以帮助开发者更好地理解代码，提高代码的可维护性和可靠性。

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
    