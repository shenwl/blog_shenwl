### 1. jQuery 能做什么？
- 几乎所有原生JS能做的  
    - 选择网页元素
    - 改变结果集
    - 元素的操作：取值和赋值
    - 元素的操作：移动
    - 元素的操作：复制、删除和创建
    - 工具方法
    - 事件操作
    - 特殊效果
    - AJAX
### 2. jQuery 对象和 DOM 原生对象的区别及转化
- 区别：
    1. jQuery对象和DOM原生对象是两种不同的对象类型，两者不等价。
    2. 方法不一样，jQuery无法使用DOM对象的任何方法，同理DOM对象也不能使用jQuery里的方法。
- 转化：
```
//DOM对象转jQuery
$(document.querySelector('xxx'))

//jQuery对象转DOM
$('xxx')[index]
$('xxx').get(index)//get()下标不写会把所有对象转化为DOM对象返回
```
### 3. jQuery的绑定事件
- 如何绑定事件（以on为例） 
```
//例子
$('#btn').on('click', function(){
    console.log('事件绑定')
})
```
- bind、unbind、delegate、live、on、off的作用
1. bind/unbind:为一个元素绑定一个事件处理程序。jq1.7版本前的绑定和解绑写法。
2. delegate:为所有匹配选择器的元素绑定一个或多个事件处理函数，jq1.7版本后被on替代。
3. live:附加一个事件处理器到匹配目前选择器的所有元素。
4. on/off:在选定的元素上绑定(off移除)一个或多个事件处理函数。
- 推荐使用on绑定事件，解绑用off
- 使用on绑定事件使用事件代理的写法
```.on(events[,selector][,data],handler(eventObject))
    1. events：一个或多个空格分隔的事件类型和可选的命名空间，或仅仅是命名空间，比如"click", "keydown.myPlugin", 或者 ".myPlugin"
    2. selector：一个选择器字符串，用于过滤出被选中的元素中能触发事件的后代元素。
    3. data：当一个事件被触发时，要传递给事件处理函数的event.data
    4. handler(eventObject)：事件被触发时，执行的函数。
```
```
//例子
$('#btn').on('click', function(){
    console.log('btn')
})
```

### 4. jQuery展示/隐藏元素
- hide([duration][,easing][,complete])   
    - 用于隐藏元素，无参数时等于直接设置display为none（会记住原来的display的值）。
    1. duration: 动画持续多久
    2. easing: 过渡使用的缓动函数
    3. complete: 动画完成时执行的函数
``` $('.target').hide()```
- show()用于显示元素，用法和hide类似。
### 5. jQuery动画使用
- 以自定义动画```.animate(properties[,duration][,easing][,complete])```为例
```
$('#clickme').click(function() {
  $('#box').animate({
    //最终状态
    opacity: 0.25,
    left: '+=50',
    height: 'toggle'
  }, 5000, function() {
    //complete
  })
})
```
### 6. 设置和获取元素内部 HTML 内容，以及设置和获取元素内部文本
- .html([string]),读写两用，若不传参，获取元素内部 HTML 内容，传参则设置元素内部 HTML 内容。
- .text([string]),设置和获取元素内部文本,用法同上。
### 7. 设置和获取表单用户输入或者选择的内容，设置和获取元素属性
- .val([value]),读写两用，没有参数就获取表单用户输入或者选择的内容，有参数则设置。
- .attr(attributeName)获取元素特定属性的值
- .attr(attributeName, value)/.attr(attributesJson)/.attr(attributeName, function(index, attr){})设置元素特定属性的值