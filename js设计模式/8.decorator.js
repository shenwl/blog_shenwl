/*
在原有的对象上装饰更多行为，并保持变量名不变
*/

function Decorator(sourceObj, decoratorFn) {
	decoratorFn(sourceObj)
	return sourceObj
}

//try
var x = {a: 1}
// x ==> {a: 1, b: 2}
x = decorator(x, (x) => {x.b = 1})

//ES7有 @decorator方式，与以上完全等价