//数组
//遍历数组
.forEach()

//映射新数组
.map()

//所有元素是否通过测试
[1,2,3,4].every(v => v>3)

//是否有元素通过测试
[1,2,3,4].some(v => v>3)

//过滤数组
.filter()

//连接数组
let arr1 = [1,2,3]
let arr2 = [4,5,6]
let arr = [...arr1, ...arr2]

//查找符合条件的元素
let arr  = [{name: 'a', age: 2}, {name: 'b', age: 1}]
//查找索引
[1,2,3].indexOf(2)

//数组去重
let arr = [1,2,3,4,1,2]
let newArr = [...new Set(arr)]

//获取列表头和尾
const [head, ...tail] = [1,2,3]
const [last, ...initial] = [1,2,3].reverse()
console.log(head, tail)


//对象
//获取key
Object.keys(obj)

//获取数据的数量
Object.keys(obj).length

//遍历
Object.entries(obj)

//extend功能
const obj = {name: 'a', age: 1}
const newObj = {...obj, job: 'IT', age: 18}
console.log(newObj)













