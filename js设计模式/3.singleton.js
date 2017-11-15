/*
单例模式

- lambda, 通过闭包创建一个变量, 返回操作这个变量的接口
- 变量创建了就不变了
- 节约内存

- 外界看不到`instance`
- JS作用域通过function体现
- 闭包作用：模块化，隐藏一些变量...

- 一般用于modal，dialog组件层面
*/

var People = (function() {
	var instance //闭包所存储的变量
	function init(name) {
		return {
			name: name
		}
	}
	return {
		createPeople: function(name) {
			if(!instance) {
				instance = init(name)
			}
			return instance
		}
	}	
})()

//指向同一个地址，创建了就不变了
People.createPeople('xxx') //{name: 'xxx'}
People.createPeople('yyy') //{name: 'xxx'}