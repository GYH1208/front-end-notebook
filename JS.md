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
Promises 是异步编程的一种解决方案，它代表一个异步操作的最终结果。Promises 提供了一种链式调用，可以帮助我们更容易的处理异步操作。

**Generator**
Generator 是 ES6 引入的一种异步编程解决方案，它是一种函数，可以暂停函数执行，返回函数的执行状态，并在适当的时候恢复执行。       
