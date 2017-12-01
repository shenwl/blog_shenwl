## 一、class 和 id 的使用场景
class用于有某一类特质的元素。  
id用于某一个特别的元素，不能有两个id相同的元素。
## 二、常见CSS选择器
1. 基础选择器    

|   选择器   |   含义   |
|   ---   |   ---   |
|   *   |通用选择器|
|   #id   |id选择器|
|  .class  |类选择器|
|  element |标签选择器|

2. 组合选择器

|   选择器   |   含义   |
|   ---   |   ---   |
| E,F     | 多元素选择器  |
| E F     | 后代选择器   |
|  E>F    |  直接子元素选择器  |
|  E+F    | 直接相邻元素选择器  |
|  E~F  |   弟弟元素选择器    |
| .class1.class2   | class组合选择器，匹配既有class1又有class2的元素  |
| element#id   | 标签+id组合选择器  | 

tips:E和F各代表一个选择器  

3. 属性选择器

|   选择器   |   含义   |
|   ---   |   ---   |
| E[attr]  | 匹配所有具有属性attr的元素 |
| E[attr=value] | 匹配属性attr值为value的元素 |
| E[attr=~value]  | 匹配所有属性attr具有多个空格分隔，其中一个值为value的元素 |
|  E[attr ^/$= value] | 匹配属性attr的值以value开头/结尾的元素 |
|  E[attr *= value]|匹配属性attr包含value的元素|

4.伪类选择器

|   选择器   |   含义   |
|   ---   |   ---   |
| E:first-child   | 匹配作为长子的元素E  |
|---|---|
| E:link   |  匹配未被点击的链接 |
| E:visited   | 匹配已被点击的链接  |
| E:actvite   | 匹配鼠标按下还未释放的E元素  |
| E:hover   |匹配鼠标悬停的E元素   |
| ---   | ---  |
| E:focus   | 匹配获得当前焦点的E元素（光标）  |
| E:lang(c)   | 匹配lang属性为c的E元素  |
| E:enabled   | 匹配表单中可用的元素  |
| E:disabled   | 匹配表单中禁用的元素  |
| E:checked   | 匹配表单中被选中的radio或者checkbox元素  |
| E:selection   | 匹配用户当前选中的元素  |
| E:root   | 匹配文档的根元素  |
| E:nth-child(n)   | 匹配其父元素的第n个子元素（第一个编号为1） |
| E:nth-last-child(n)   | 匹配其父元素的倒数第n个子元素  |
| E:nth-of-type(n)   | 与nth-child(n)作用类似，但是只匹配使用同种标签的元素 |
| E:nth-last-of-type(n)   | 与nth-of-type()只有正数倒数的区别  |
| E:last-child   | 匹配其父元素的最后一个元素，等同于E:nth-last-child(1)  |
| E:first-of-type   | 等同于nth-of-type(1)  |
| E:last-of-type   | 等同于nth-last-of-type(1)  |

5. 伪元素选择器

|   选择器   |   含义   |
|   ---   |   ---   |
| E::first-line |匹配E元素内容的第一行 |
| E::first-letter |匹配E元素内容的第一个字母|
| E::before  |在E元素之前插入生成的内容|
| E::after |在E元素之后插入生成的内容|

## 三、选择器的优先级，复杂场景的优先级计算
- 优先级(高到低)
    1. 属性后有!important
    1. 内联样式
    1. id选择器
    1. 类选择器
    1. 伪类选择器
    1. 属性选择器
    1. 标签选择器
    1. 通配符选择器
    1. 浏览器自定义

- 复杂场景计算 
 
```#test p.class1{...}```    
```#test .class1.class2{...}```  
先设：
  * 行内样式数量 为a
  * ID选择选择器数量 为b
  * 类，属性，伪类选择器数量 为c
  * 标签，伪元素选择器数量 为d  

计算a,b,c,d的值  
先比a，谁的a大谁优先，一样再比b，以此类推

## 四、a:link, a:hover, a:active, a:visited 的顺序
-  顺序为a:link、a:visited、a:hover、a:active
-  解释（a标签四种状态）  
link:连接平常的状态  
visited:连接被访问过之后  
hover:鼠标放到链接上的时候  
active:链接被按下的时候   
1. 首先，未被点击的链接为a:link状态，被访问后就是a:visited状态，a:visited样式永久生效，如果a:visited选择器位于a:hover、a:active后面，他们的样式会被永久覆盖，不再生效。
2. a:active样式必须位于a:hover后面，否则会被覆盖。
## 五、一些示例
```
header{
}   -匹配header标签
.header{
}   -匹配class=header的标签
.header .logo{
}   -匹配class=header的标签的后代中所有class=logo的标签
.header.mobile{
}   -匹配class既有header又有mobile的标签
.header p, .header h3{
}   -匹配class=header的标签的后代中所有p标签和h3标签
#header .nav>li{
}   -匹配id为header的标签的后代中所有class=nav的标签的元素为li的直接子元素
#header a:hover{
}   -匹配id为header的标签的后代中所有鼠标悬停的a标签
#header .logo~p{
}   -匹配id为header的标签的后代中所有class=logo的元素同级p元素
#header input[type="text"]{
}   -匹配id为header的标签的后代中所有type=text的input标签
```
## 六、伪类选择器表

|   选择器   |   含义   |
|   ---   |   ---   |
| E:first-child   | 匹配作为长子的元素E  |
|---|---|
| E:link   |  匹配未被点击的链接 |
| E:visited   | 匹配已被点击的链接  |
| E:actvite   | 匹配鼠标按下还未释放的E元素  |
| E:hover   |匹配鼠标悬停的E元素   |
| ---   | ---  |
| E:focus   | 匹配获得当前焦点的E元素（光标）  |
| E:lang(c)   | 匹配lang属性为c的E元素  |
| E:enabled   | 匹配表单中可用的元素  |
| E:disabled   | 匹配表单中禁用的元素  |
| E:checked   | 匹配表单中被选中的radio或者checkbox元素  |
| E:selection   | 匹配用户当前选中的元素  |
| E:root   | 匹配文档的根元素  |
| E:nth-child(n)   | 匹配其父元素的第n个子元素（第一个编号为1） |
| E:nth-last-child(n)   | 匹配其父元素的倒数第n个子元素  |
| E:nth-of-type(n)   | 与nth-child(n)作用类似，但是只匹配使用同种标签的元素 |
| E:nth-last-of-type(n)   | 与nth-of-type()只有正数倒数的区别  |
| E:last-child   | 匹配其父元素的最后一个元素，等同于E:nth-last-child(1)  |
| E:first-of-type   | 等同于nth-of-type(1)  |
| E:last-of-type   | 等同于nth-last-of-type(1)  |

## 七、```div:first-child、div:first-of-type、div :first-child和div :first-of-type```的作用和区别 （注意空格的作用）
|   选择器   |   含义   |
|   ---   |   ---   |
| div:first-child | 匹配作为长子元素的div元素(一般第一个div以body为父元素) |
| div:first-of-type | 匹配所有div标签的父级元素的第一个子元素（子元素也为div标签)  |
| div: first-child | 匹配每个div标签的内部第一子标签 |
| div :first-of-type | 匹配div元素的子元素中每种标签的第一个|
