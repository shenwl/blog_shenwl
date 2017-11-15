/*
构造函数模式 

- 原型链
- prototype
- new
*/

function Person(name, age) {
	this.name = name
	this.age = age
}
Person.prototype.sayName = function() {
	console.log(this.name)
}


var p1 = new Person('xxx', 21)