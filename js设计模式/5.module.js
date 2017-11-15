/*
模块模式

- JS的模块通过作用域体现
- 一个模块代表一个作用域

- 词法作用域：
	- 一个Fn能访问的上下文空间
	- 有它所定义的位置决定

- 可通过闭包实现

- 不会污染全局
*/

var Person = (function() {
	var name = 'xxx'
	function sayName() {
		console.log(name)
	}
	return{
		name: name,
		sayName: sayName
	}
})()