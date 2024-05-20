# JSON 学习笔记

**JSON 特性**
- JSON 是一种轻量级的数据交换格式，易于人阅读和编写。
- JSON 是纯文本，具有自我描述性，易于解析和生成。
- JSON 具有层级结构（值中存在值），可通过Javascipt 进行解析。
- JSON 数据可以通过AJAX 进行传输。

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>菜鸟教程(runoob.com)</title>
</head>
<body>
<h2>JavaScript 创建 JSON 对象</h2>
<p>
网站名称: <span id="jname"></span><br /> 
网站地址: <span id="jurl"></span><br /> 
网站 slogan: <span id="jslogan"></span><br /> 
</p>
<script>
var JSONObject= {
	"name":"菜鸟教程",
	"url":"www.runoob.com", 
	"slogan":"学的不仅是技术，更是梦想！"
};
document.getElementById("jname").innerHTML=JSONObject.name 
document.getElementById("jurl").innerHTML=JSONObject.url 
document.getElementById("jslogan").innerHTML=JSONObject.slogan 
</script>

</body>
</html>
```

**JSON 语法特性**
相同与Java中的 Map, JSON 也是由{key:value}键值对组成的。
JSON 不允许包含函数，但你可以将函数作为字符串存储，之后再将字符串转换为函数。

- 花括号 {} 表示一个对象。
- 方括号 [] 表示一个数组。
- 冒号 : 表示键值对的分隔符。
- 逗号 , 表示多个值。

```json
{
    "sites": [
        { "name":"菜鸟教程" , "url":"www.runoob.com" }, 
        { "name":"google" , "url":"www.google.com" }, 
        { "name":"微博" , "url":"www.weibo.com" }
    ]
}
```

**在JSON中嵌套对象**
```json
myObj = {
    "name":"runoob",
    "alexa":10000,
    "sites": {
        "site1":"www.runoob.com",
        "site2":"m.runoob.com",
        "site3":"c.runoob.com"
    }
}
```

**JSON 解析**
运用JSON.parse()方法可以将JSON字符串转换为JavaScript对象。

```javascript
var myObj = '{"name":"runoob","alexa":10000,"sites":{"site1":"www.runoob.com","site2":"m.runoob.com","site3":"c.runoob.com"}}';
var obj = JSON.parse(myObj);
```

**从服务器端接收JSON数据**
```javascript
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        myObj = JSON.parse(this.responseText);
        document.getElementById("demo").innerHTML = myObj.name;
    }
};
xmlhttp.open("GET", "/try/ajax/json_demo.txt", true);
xmlhttp.send();
```

**JSON.stringify()方法**
JSON.stringify()方法可以将JavaScript对象转换为JSON字符串。

```javascript
var obj = { "name":"runoob", "alexa":10000, "site":"www.runoob.com"};
var myJSON = JSON.stringify(obj);
```




