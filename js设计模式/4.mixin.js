/*
混合模式

- 一般而言，就是混合它的原型
- 原型链，继承（节约资源）

- 和decorator有些类似，功能更垂直
- 就是在原有对象上增加，覆盖对象的行为。
- 比extends，Object.assign更富有表现力
- 有许多不同的mixin策略
*/
var Person = function(name, age) {
	this.name = name
	this.age = age
}
Person.prototype.sayName = function() {
	console.log(this.name)
}

var Student = function(name, age, score) {
	Person.call(this, name, age)
	this.score = score
}

//Student.prototype = Object.create(Person.prototype)类似
Student.prototype = create(Person.prototype)

//类似Object.create
function create(parentObj) {
	function F(){} //空对象，构造函数
	F.prototype= parentObj
	return new F()
}
Student.prototype.sayScore = function() {
	console.log(this.score)
}

var student = new Student('aa', 20, 90)





//方法2
class StateTracker {
	constructor() {
		this.raw = {
			a: 1,
			b: 2
		}
	}
	//Mixin方法入口
	mixin(obj) {
		object.assign(this.raw, obj)
	}
}