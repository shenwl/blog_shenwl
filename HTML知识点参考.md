###  HTML, XML, XHTML的区别
- HTML（Hypertext Markup language）
超文本标记语言，是一种语法较为松散的，不严格的Web语言。哪怕出现使用上的错误，如标签大写，没有闭合，浏览器也可以读取不会报错，但是有可能会误解。

- XML（Extensible Markup Language）
可扩展标记语言， 被设计用来结构化、存储以及传输数据，HTML用来显示数据。它的语法较为严格，一旦书写不规范，就无法有效地发挥作用。

- XHTML（Extensible Hypertext Markup Language）
可扩展超文本标记语言，可看作HTML与XML的结合物。它参考了XML语法规范的优点，是更严谨更纯净的 HTML 版本。

###  HTML语义化
- 在谈论如何理解HTML语义化之前，我们先来直观感受一下区别：
> 非语义元素：```<div> 和 <span>``` -无法提供关于其内容的信息。

> 语义元素：```<form>、<table> 以及 <img> ```- 能够清晰地定义其内容。

- 所以语义化的概念就是:
  语义元素清楚地向浏览器和开发者描述其意义。
  合适的标签，合理的代码结构，便于开发者阅读，同时爬虫和机器也能很好地解析。

- HTML5大规模采用语义化标签，代码越来越倾向于“给人读”，前提是你得懂英语。

###  内容与样式分离原则
- 这是一种基础的设计模式，每个模块分离，各司其职。将文档的内容和其呈现方式分离开来，易于后期代码的维护和修改。

- 几个要注意的点 
    1. 在编写前端代码时，我们先考虑结构，重点先放在HTML的结构和语义化上，使其能够体现页面的结构和内容，再去考虑CSS样式。
    2. 尽量不要用JS去直接操作样式，而是通过给元素添加或删除class来控制。 
    3. HTML内不要出现属性样式，尽量不用出现行内样式。

###  常见的meta标签
- 定义及用法
>  <meta> 元素可提供有关页面的元信息（meta-information），比如针对搜索引擎和更新频度的描述和关键词。

> <meta> 标签位于文档的头部，不包含任何内容。<meta> 标签的属性定义了与文档相关联的名称/值对。
- 常见的meta标签示例
    1. 声明当前文档所使用的字符编码。
    ```<meta charset='utf-8'>```
    2. 优先使用 IE 最新版本和 Chrome
    ```<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">```
    3. 浏览器内核控制
    ``` <meta name="renderer" content="webkit|ie-comp|ie-stand">```
    4. 页面关键词优化
    ```<meta name="keywords" content="关键词不要太短或者太长">```
    5. 页面描述
    ```<meta name="description" content="不超过150个字">```
    6. 移动端优化
    ```<meta name="viewport" content="width=device-width, initial-scale=1.0,maximum-scale=1.0, user-scalable=no">```   

###  文档声明的作用
- 文档声明的作用
文档声明告诉浏览器文档是用什么版本的HTML写的，让浏览器正确地解析文档。
- 严格模式（推荐使用）
也称为标准模式，在该模式下，浏览器会严格规范，以其支持的最高标准来解析、渲染你的文档，呈现你的页面。
- 混杂模式（不加doctype）
页面以一种比较宽松的向后兼容的方式显示，混杂模式通常模拟老式浏览器的行为以防止老站点无法工作。
- <!DOCTYPE html> 的作用
<!DOCTYPE> 声明必须是 HTML 文档的第一行，位于 <html> 标签之前。
<!DOCTYPE> 声明不是 HTML 标签，它是指示 web 浏览器关于页面使用哪个 HTML 版本进行编写的指令。
<!DOCTYPE html>是HTML5的唯一一种Doctype声明

###  浏览器乱码的原因及解决
- 原因
html编辑完保存时的编码模式，与浏览器解码时用的编码不匹配，一般出现在英语之外的语言。
- 解决
文件保存的时候，自己要清楚是用哪种编码方式保存的，在<head>中设置<meta charset>,大多数时候使用```<meta charset='utf-8'>```。

###  常见的浏览器及其内核
- Chrome、Safari、Opera
Webkit内核
- Chrome（28及往后版本）、Opera（15及往后版本）和Yandex浏览器
Blink内核，是开源引擎WebKit中WebCore组件的一个分支
- Firefox
Gecko内核
- IE、360安全浏览器
Trident内核
- 各类国内的双核高速浏览器
Trident+Blink

###  常见的标签及其应用场景
#### Part.1
- 标题：h1~h6
h1、h2应用在大标题，h3到h6为小标题
- 段落:p
应用于大段文字
- 链接：a
href设置链接
target设置打开新页面方式，```target="_blank"```为在新页面打开，默认刷新原页面跳转
title设置鼠标放置时展示的内容
- 图片：img
src设置图片地址
alt设置图片注释
img是自闭合标签
- 区块：div
划分区块，结构清晰
- 无序列表：ul li
unsort list，用于表示并列内容
ul的直接子元素只能是li
可以嵌套
- 有序列表：ol li
和ul相比不同之处：表示带步骤或者编号的
- dl dt dd
用于展现一系列“标题：内容……”的场景
- strong、em、span
都是为了易于用css控制文字样式
strong表示很重要，强调性很强
em表示需要强调一下
span只是标记一下，语义很弱

#### Part.2
- iframe
用于在当前页面嵌入一个页面（注意跨域问题）
```<iframe src="..." name="..."></iframe>```
```<p><a href="..." target="...">...</a></p>```
这段代码当a标签的target和iframe的name相同时，链接会在内嵌页面打开。
但不能进行DOM操作（跨域问题）。
- table
用于展示表格（别用来做布局了）
thead, tbody, tfoot可省略
浏览器会自动添加bord-collapse: collapse;用于合并边框
```tr 定义行```
```th 定义表头```
```td 定义单元格```

#### Part.3
- Doctype
声明文档对象类型
- meta
提供有关页面的元信息
- 块级元素和行内元素
    1. 块级元素
    独占一行；
    width、height、padding和margin都可控制。
    2. 行内元素
    和相邻的内联元素在同一行，只占用元素大小的位置；
    width、height、padding和margin都不可改变，就是里面文字或图片的大小。
    ```主要有：a, img, button, strong, em, span等```

