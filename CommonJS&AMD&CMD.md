## 1. 为什么要使用模块化
- 主要目的
    - 解决命名冲突问题
    - 解决依赖管理问题
- 其它价值
    - 代码可读性更好
    - 代码解耦，复用性高
## 2. CMD、AMD、CommonJS 规范
1. CommonJS规范   
    - CommonJS第一个流行的JS模块化规范，是服务端的JS应用带来的（它是同步的）。
    - 规范
        1. 定义模块：一个单独的文件就是一个模块。每个模块都是一个单独的作用域。
        2. 模块输出：每个模块只有一个出口，就是```module.exports```对象，我们把模块需要输出的内容放入该对象。
        3. 加载模块：使用```require```方法，该方法读取一个文件并执行，返回文件内部的```module.exports```对象。
    - demo
        ```
        //定义 module.js
        function Person(name) {
            this.name = name
        }
        Person.prototype.sayName = function() {
            console.log(this.name)
        }
        module.exports = Person

        //在同目录其它文件加载module.js
        var Person = require('./module.js')

        var p1 = new Person('Allen')
        p1.sayName()
        ```
2. AMD规范
    - AMD即Asynchronous Module Definition，中文名是异步模块定义的意思。是一个在浏览器端模块化开发的规范。
    - 浏览器原生并不支持，需要用到RequireJS，实际上AMD是RequireJS在推广过程中对模块定义的规范化的产出。
    - RequireJS主要解决两个问题：
        1. 多个js文件可能有依赖关系，被依赖的文件要早于依赖它的文件加载到浏览器。
        2. js加载的时候浏览器会停止页面渲染，加载文件越多，页面失去响应的时间越长。
    - 用法
    ```
    //定义模块 module.js
    define(['dependency'], function() {
        var name = 'Allen'
        function sayName() {
            console.log(name)
        }
        return {
            sayName: sayName
        }
    })

    //加载
    require(['module'], function(mod) {
        mod.sayName
    })
    ```
    - 语法
        * requireJS定义了一个函数define，它是全局变量，用来定义模块。  
        ```define(id?, dependencies?, factory)```
            1. id: 可选，定义模块的标识，如果没有提供该参数，则为脚本文件名去掉拓展。
            2. dependencies: 是一个当前模块依赖的模块名称数组。
            3. factory：工厂方法，模块初始化要执行的函数或对象。如果为函数，它应该只被执行一次。如果是对象，则为模块的输出值。
       * 使用require函数加载模块  
        ```require([dependencies], function() {})```
            1. 第一个参数为一个数组，表示所依赖的模块。
            2. 第二个参数为一个回调函数，当前面指定的模块都加载成功后被调用。加载得模块会以参数的形式传入该函数，从而在回调函数内部就可以使用这些模块。
    - require()函数在加载依赖的函数的时候是异步加载的，这样浏览器不会失去响应，它指定的回调函数，只有前面的模块都加载成功后，才会运行，解决了依赖性的问题。
        
3. CMD规范
    - CMD即Common Module Definition通用模块定义。就像AMD有个requireJS，CMD有个浏览器的实现SeaJS，SeaJS要解决的问题和requireJS一样，只不过在模块定义方式和模块加载（可以说运行、解析）时机上有所不同。（现在都已经互相支持对方的写法）
    - 语法
        * define  
        ```define(id?, deps?, factory) 
        /*factory有三个参数require, exports, module
        1. require 是一个方法，接受模块标识作为唯一参数，用来获取其他模块提供的接口
        2. exports 是一个对象，用来向外提供模块接口
        3. module 是一个对象，上面存储了与当前模块相关联的一些属性和方法
        */
        ```
    - seajs推崇
        1. 一个文件一个模块，所以经常就用文件名作为模块id。
        2. CMD推崇依赖就近（用到某个模块再去require)，所以一般不在define的参数中写依赖，在factory中写。
    - demo
    ```
    //定义模块 module.js
    define(function(require, exports, module) {
        var $ = require('jquery.js')
        $div.addClass('active')
    })

    //加载
    seajs.use(['module.js'], function(mod) {})
    ```
