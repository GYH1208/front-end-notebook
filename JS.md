# JavaScript学习笔记
**JS 异步编程 Ashychronous Programming**
异步与同步是相对的概念，程序的运行是同步的，但是这并不意味着所有步骤都同时运行。
异步的概念就是保证不同步的概念，异步编程就是指程序的不同步运行，可以提高程序的运行效率。

异步编程的实现方式有多种，常见的有回调函数、事件监听、Promises、Generator、Async/Await。

**回调函数**
回调函数是异步编程的一种实现方式，它是将函数作为参数传递给另一个函数，在另一个函数执行完毕后，再调用回调函数。
```javascript
//回调函数会在三秒后执行print()函数
function print() {
    document.getElementById("demo").innerHTML="RUNOOB!";
}
setTimeout(print, 3000);
```
**export/export default 命令**
export命令用于规定模块的对外接口，export default命令用于设置模块的默认导出。

**Promise**
Promises 是异步编程的一种解决方案，它代表一个异步操作的最终结果。Promises 提供了一种链式调用，可以帮助我们更容易的处理异步操作。Promise 构造函数返回一个Promise对象，该对象具有一下介个方法：
- then()：接收两个参数，分别是成功回调和失败回调，当 Promise 对象状态改变时，调用相应的回调函数。
- catch()：接收一个参数，是失败回调，当 Promise 对象状态变为失败时，调用该回调函数。
- finally()：接收一个参数，无论 Promise 对象状态如何，都会调用该回调函数。

```javascript
const promise = new Promise((resolve, reject) => {
  // 异步操作
  setTimeout(() => {
    if (Math.random() < 0.5) {
      resolve('success');
    } else {
      reject('error');
    }
  }, 1000);
});
 
promise.then(result => {
  console.log(result);
}).catch(error => {
  console.log(error);
});
```

**Generator**
Generator 是 ES6 引入的一种异步编程解决方案，它是一种函数，可以暂停函数执行，返回函数的执行状态，并在适当的时候恢复执行。可以把Generator理解为一个包含了多个内部状态的状态机.

形式上Generator函数是一个普通函数，但是有两个特征：
- 函数体内使用yield表达式，而不是return表达式。
- 函数执行后，会返回一个Iterator对象，可以用来控制Generator的执行。 

```javascript
function* helloWorld() {
  yield 'hello';
  yield 'world';
  return 'ending';
}


const generator = helloWorld(); 

console.log(generator.next().value); // "hello"
console.log(generator.next().value); // "world"
console.log(generator.next().value); // "ending"
```
**一个函数里面，只能执行一次return语句，但是可以多次执行yield表达式。也就是说Generator可以逐次生成多个返回值，这也是它的名字的来历。**

```javascript
function* demo(){
    console.log('hello' + (yield));
    console.log('world' + (yield  123));
    
    }

    var gen = demo();
    console.log(gen.next()); // { value: undefined, done: false }
    console.log(gen.next()); // { value: 123, done: false }\
    console.log(gen.next()); // { value: undefined, done: true }
```

- 调用遍历器对象的next方法并输出，注意先执行表达式语句“hello” + (yield)，得到{value: undefined, done: false}，**再输出：“hello undefined”**。注意直接输出yield表达式得到的结果是undefined，必须使用遍历器对象的next方法才能获取yield表达式后面的值

- 调用遍历器对象的next方法并输出，注意先执行表达式语句“worold” + (yield)，得到{value: 123, done: false}，再输出： **“world undefined”。**  注意直接输出yield表达式得到的结果是undefined，必须使用遍历器对象的next方法才能获取yield表达式后面的值
- 调用遍历器对象的next方法，因为后面已经没有yield表达式，虽然没有return语句，判断依据是否有更多的yield语句为标准，还是输出 **{value: undefined, done: true}**

### JQuery
JQuery是一个快速、简洁的JavaScript框架，它 simplifies HTML document traversing, event handling, animating, and Ajax interactions for rapid web development.

JQuery 允许通过CSS选择器来选取元素。

```javascript
function myFunction()
{
    var obj = document.getElementById("h01");
    obj.innerHTML = "Hello World!";
}

onload = myFunction;;
```
**等价的JQuery代码如下：**

```javascript
function myFunction()
{
    $("#h01").html("Hello World!")
}

$(document).ready(myFunction);
```
### $.ajax 方法
```javascript
$.ajax({
    url: "/user/login",
    type: "get",
    data:{
        username: "admin",
        password: "123456"
    },
    dataType: "text",

    success: function(response){
        alert(response);
    },

    error: function(response){
        alert(response);
    }
});
```

### 测试Prototype
Prototype提供给的还能输可以使HTML DOM 编程更容易，与 JQuery 相比，Prototype 具有更高的灵活性。与JQuery 不同，Prototype 没有用一取代window.onload()的ready()方法。

```javascript
function myFunction(){
    $("h01").insert("Hello World!")
}
Event.observe(window,"load",myFunction);
```
### cookie
Javascript 可以使用document.cookie来创建，读取，及删除cookie.

```javascript 
documet.cookie = "username = John Doe";
```
还可以给cookie添加过期时间：
```javascript 
document.cookie = "username = John Doe; expires = Thu, 18 Dec 2013 12:00:00 UTC";
```