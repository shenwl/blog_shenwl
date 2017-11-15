/*
工厂模式

- 创建新的引用方
*/

function createPerson(name) {
	var person = {
		name: name
	}
	person.sayName = function() {
		console.log(this.name)
	}
	return Person
}

//p1, p2是完全不同的对象
var p1 = createPerson('xxx')
var p2 = createPerson('yyy')