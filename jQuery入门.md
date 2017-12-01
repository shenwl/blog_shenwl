# PART 1
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

# PART 2
## 1. $(document).ready()
- DOM准备就绪
- .ready( handler )，当DOM准备就绪时，指定一个函数来执行。
## 2. $node.html()和$node.text()的区别
- $node.html()方法获取(修改)节点的html元素。
- $node.text()方法获取(修改)节点的文本元素。
## 3. $.extend 的作用和用法? 
- 作用：扩展一个对象。
- 用法：
```
$.extend({}, obj1, obj2) //把obj1和obj2扩展到空数组“{}”，没有的项目添加，有的覆盖（后面的覆盖前面的）
```
## 4. jQuery 的链式调用
- 当jQuery的方法的返回值仍然为当前对象的时候，可以继续调用该对象的方法，就叫做链式调用。
```
//例子
$node.parents().find().css()
```
## 5. jQuery 中 data 函数的作用
- .data(key,value)函数可以在匹配的jQuery对象上储存任意相关数据，或返回匹配的元素集合中的第一个元素的给定名称的数据存储的值。
```
//添加数据
.data(key, value)/ .data(obj)
//返回数据
.data(key)/.data()
```
- 通过data()函数存取的数据都是临时数据，页面刷新，之前存放的数据将不复存在。
- 使用removeData()移除通过data()存放的数据。
## 6. 直观列举一些 jQuery 方法：
- 给元素 $node 添加 class active，给元素 $noed 删除 class active
```
$node.addClass('active)
$node.removeClass('active)
```
- 展示元素$node, 隐藏元素$node
```
$node.show()
$node.hide()
```
- 获取元素$node 的 属性: id、src、title， 修改以上属性
```
//传入修改值则修改，不传入则获取
$node.attr(id[,修改值])
$node.attr(src[,修改值])
$node.attr(title[,修改值])
```
- 给$node 添加自定义属性data-src
```
$node.attr(data-src, value)
```
- 在$ct 内部最开头添加元素$node
```
$ct.preppend($node)
```
- 在$ct 内部最末尾添加元素$node
```
$ct.append($node)
```
- 删除$node
```
$node.remove()
```
- 把$ct里内容清空
```
$ct.empty()
```
- 在$ct 里设置 html <div class="btn"></div>
```
$ct.html('<div class="btn"></div>')
```
- 获取、设置$node 的宽度、高度(分别不包括内边距、包括内边距、包括边框、包括外边距)
```
//不包括padding
$node.width([value])
$node.height([value])
//包括padding,不包括border
$node.innerWidth([value])
$node.innerHeight([value])
//包括border,不包括margin
$node.outerWidth([value])
$node.outerHeight([value])
//包括margin
$node.outerWidth([value,]true)
$node.outerHeight([value,]true)
```
- 获取窗口滚动条垂直滚动距离
```
$(window).scrollTop()
```
- 获取$node 到根节点水平、垂直偏移距离
```
$node.offset()
```
- 修改$node 的样式，字体颜色设置红色，字体大小设置14px
```
$node.css({"color": "red", "font-size": "14px"})
```
- 遍历节点，把每个节点里面的文本内容重复一遍
```
$node.each()
```
- 从$ct 里查找 class 为 .item的子元素
```
$ct.find('.item')
```
- 获取$ct 里面的所有孩子
```
$ct.children()
```
- 对于$node，向上找到 class 为'.ct'的父亲，在从该父亲找到'.panel'的孩子
```
$node.parents('.ct).find('.panel')
```
- 获取选择元素的数量
```
$('li').size()
```
- 获取当前元素在兄弟中的排行
```
$node.index()
```