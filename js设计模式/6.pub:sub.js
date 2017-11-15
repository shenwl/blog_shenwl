/*
publish/subscribe发布订阅模式

- jQuery的on, trigger, off等

- 处理异步事件最经典的模式
*/

var EventCenter = (function(){
	var eventPool = {}
	function on(evt, handler) {
		eventPool[evt] = eventPool[evt]  || []
		eventPool[evt].push({
			handler: handler
		})
	}

	function fire(evt, args) {
		if(!eventPool[evt]) {
			return
		}
		for(var i=0; i<eventPool[evt].length; i++){
			eventPool[evt][i].handler(args)
		}	
	}

	function off(evt) {
		delete eventPool[evt]
	}
	return {
		on: on,
		fire: fire,
		off: off
	}
})()