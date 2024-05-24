# Router
实现单页面应用的基础就是ajax ，通过一步请求动态的切换页面内容，实现交互，整体页面也没有刷新。
SPA(single page application)的主要表现就是更新视图而不重新请求页面，要实现前段的页面的自主路由控制，而不会刷新页面 ，设计hash 模式和history 模式。

1. hash 模式
hash就是URL中#后面的内容，改变hash值，页面就会发生变化，hash模式的特点就是简单，兼容性好，但是hash值不能包含#，所以不能使用一些功能，比如后退按钮。
- 以页面不刷新： hash 变化不会刷新页面，只会出发浏览器的定位锚点
- 获取hash :  window.location.hash
- hash 变更时间： window.hashchange 监听hash 变化
- 不同的hash 会进入浏览器历史记录。

![alt text](p3.JPG)

2. history 模式
- history 是历史对象，存放当前的文档页面的回话历史记录（不是浏览器的所有历史记录）。
- popstate 事件：当state变化触发是，在事件中获取当前的url地址。pushstate,replaceState 方法并不会出发popstate 事件。
- 点击事件：绑定导航按钮的click事件，pushState 可以更新url.

### Vue Router 
创建路由器
- base:url的基本路径
- routes:路由记录配置信息 ，Array<RouteConfig>
- linkActiveClass:激活的路由链接的class,默认值为'router-link-active'
```javascript
let vrouter = new VueRouter({routes:vroutes, mode:'hash', base:'/vsystem/'});
```
路由器配置：
```javascript
interface RouteConfig = {
    path: string,
    component?: Component,
    name?: string, // 命名路由
    components?: { [name: string]: Component }, // 命名视图组件
    redirect?: string | Location | Function,
    props?: boolean | Object | Function,
    alias?: string | Array<string>,
    children?: Array<RouteConfig>, // 嵌套路由
    beforeEnter?: (to: Route, from: Route, next: Function) => void,
    meta?: any,
    // 2.6.0+
    caseSensitive?: boolean, // 匹配规则是否大小写敏感？(默认值：false)
    pathToRegexpOptions?: Object // 编译正则的选项
}
//$route路由对象
{
    name: "user-box", // 路由名称
    fullPath: "/user/21/vip?key=admin",
    hash: "", // 当前路由的哈希
    matched: [{… }],
    meta: {},
    params: { id: '21', type: 'vip' },
    path: "/user/21/vip",
    query: { key: 'admin' }
}
```

### 简单示例：
```javascript
<style>
    .router-link-active{ background-color: rgb(168, 240, 140); }
    .nav-item{ margin: 0 10px; }
</style>
<div id="app">
    <router-link v-for="r in this.$router.options.routes" :to="r.path" class="nav-item">{{r.name}}</router-link>
    <router-view></router-view> <!-- 显示路由组件视图的容器，其实是就是一个动态组件 -->
</div>
<script>
    // 路由配置RouteConfig
    let vroutes = [
        { path: '/user', name: '用户管理', component: { template: '<div>user component</div>' } },
        { path: '/login', name: '登录', component: { template: '<div>login component</div>' } }];
    //创建路由器
    let vrouter = new VueRouter({ routes: vroutes, mode: 'hash', base: '/vsystem/' });
    //app
    let app = new Vue({
        el:"#app",
        router: vrouter,
    })
</script>
```

Path 为路由的地址，当浏览器url和path匹配时，就会激活当前route路由对象，并显示对应组件component/componenets。

```javascript
let u1 = {path:'/home',component:Home}

//动态路径
let u2 = {path:'/user/:id/:type',conponent:UserBox}
//匹配的路径
<router-link to="/user/1/vip">用户1</router-link>
```

 ### router-link/router-view

- router-link: 用来定义路由链接，可以绑定到路由的path属性上，当点击时，会触发路由切换。
- router-view: 用来显示当前路由匹配到的组件，当路由切换时，会自动匹配组件并显示。

### vue-router 常见用法
路由重定向指的是：用户在访问地址A的时候，强制用户跳转到地址B，从而展示特定的页面。通过路由规则的redirect属性，指定一个新的路由地址，可以很方便的设置路由的重定向。

```javascript
const router = new VueRouter({
    routes:[
        {path:'/',redirect:'/home'},
        {path:'/home',component: Home},
        {path:'/movie',component: Movie},
        {path:'/about',component: About}
    ]
})
```
当hash 为/的时候就默认跳到home组件，防止hash为/的时候没什么可以显示。

### 动态路由
动态路由指的是吧hash 地址中可变的部分定义为参数项，从而提高路由的复用性。语法中应用冒号： 来定义参数项。
```javascript
{path:'/user/:id',component:UserBox}
```

 ### $route.params 参数对象
 在动态路由渲染出来的组件中，可以使用this.$riyte.params 对象访问到动态匹配的参数值，在template 中不可加this，只能用$route.params。

 ### 使用props 传递参数
 在动态路由中，可以通过props 传递参数，在组件中通过props 接收参数。


```javascript
// 路由配置
{path:'/user/:id',component:Movie,props:true}

<template>
    <h3>MyMovie组件 -- {{id}}</h3>
</template>

<script>
    export default {
        props:['id']
    }
</script>

```
