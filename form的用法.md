### 一、表单的作用与常用input标签

- HTML表单用于收集用户输入，用```<form>```元素定义。  

- 常见的6个input标签
>input 元素是最重要的表单元素。  
>input元素有很多形态，根据不同的type 属性。  
1. type="text"  
定义用于文本输入的单行输入字段。  
多行文本输入框用```<textarea></textarea>```创建
2. type="password"  
用来定义密码输入框，输入的内容自动变成圆点。
3. type="radio"   
定义单选按钮。  
允许用户在有限数量的选项中选择其中之一(同一组按钮name属性相同)。
4. type="checkbox"  
用于定义多选框。  
name值最好一致，靠value来区分。
5. type="submit"   
定义用于向表单处理程序（form-handler）提交表单的按钮。  
6. type="botton"  
定义按钮。  
value值为按钮上显示的内容，默认为空。
### 二、post和get两种方式
-  区别
1. 字面理解  
get为“获取”，post为“发布”。从字面上可以理解，get应该用于查找获取信息，post为发布提交信息。
2. 信息安全性
get请求只用于获取信息，而不会修改信息，对资源无副作用。  
post请求可能会修改服务器上的资源。
3. 使用限制  
使用get请求，你填写的数据会显示在url的后面（通常以“&”连接），而url的长度是有限制的，所以get数据长度有限制。  
post请求的信息不会显示在url中，更隐蔽，且没有长度限制。
4. 常用场景  
get常用于请求数据，比如使用搜索引擎搜索时。  
post常用于提交数据，比如填写注册表单。
### 三、input中name属性的作用
>name 属性规定 input 元素的名称。  
name 属性用于对提交到服务器后的表单数据进行标识，或者在客户端通过 JavaScript 引用表单数据。  
只有设置了 name 属性的表单元素才能在提交表单时传递它们的值。
### 四、radio 如何分组  
注意radio是依靠name属性分组的，name相同的为一组，进行单选。
### 五、placeholder属性
顾名思义，placeholder属性的值就是放置在输入框中的半透明提示字符，会自动消失，不影响输入。
### 六、type="hidden"隐藏域的作用  
- 隐藏域在页面中对于用户是不可见的，通常会存储一个默认值，它们的值也可以由 JavaScript 进行修改。  
- 常见作用 
1. 收集或发送信息，以利于被处理表单的程序所使用。浏览者单击发送按钮发送表单的时候，隐藏域的信息也被一起发送到服务器（隐藏信息不会被用户看到）。  
2. 给用户一信息，让他在提交表单时提交上来以确定用户身份，如sessionkey，防止非法用户登录。
3. 埋一些值，用于定位。
### 七、表单的用法  
1. 简介  
HTML 表单用于收集用户输入。   
表单必须以```<form></form>```元素为外壳。
- form的属性   
```<form action="/getinfo" method="get"></form>```  
action: 提交到的后台的地址。   
method: 提交表单的方法，一般使用get或者post，默认为get。
2. 表单的常用元素  
一个表单通常会包含一个text(单行文本输入域)、password（一般用于输入密码）、textarea（多行文本域）、radio（单选框）、checkbox（多选框）和select-option（下拉选项菜单）、button或者submit（提交按钮）等。   
- 常用的属性  
type：输入的类型  
name：输入的名称   
value：输入的值
3. 一个例子  
- 示例代码包含了
    - text单行文本域，用于输入用户名
    - password密码输入框
    - radio单选框，用于确认性别和性取向
    - checkbox多选框，用于选择爱好
    - textarea多行文本域，用于输入其他爱好
    - select-option下拉菜单，用于选择汽车品牌
    - submit提交按钮，value属性为按钮上显示的文字 



- 示例代码（只包含form部分）
```
    <form action="/info" method="post">
        <div class="username">
            <label for="username">姓名：</label>
            <input id="username" type="text" name="username" placeholder="用户名">
        </div>

        <div class="password">
            <label for="password">密码：</label>
            <input id="password" type="password" name="password">
        </div>

        <div class="sex">
            <label for="sex">性别：</label>
            <input id="sex" type="radio" name="sex" value="man">男
            <input id="sex" type="radio" name="sex" value="woman">女
        </div>

        <div class="sexuality">
            <label for="sexuality">取向：</label>
            <input id="sexuality" type="radio" name="sexuality" value="man">男
            <input id="sexuality" type="radio" name="sexuality" value="woman">女
        </div>
        
        <div class="hobby">
            <label for="hobby">爱好：</label>
            <input id="hobby" type="checkbox" name="bonny" value="dota">dota
            <input id="hobby" type="checkbox" name="bonny" value="travel">旅游
            <input id="hobby" type="checkbox" name="bonny" value="pet">宠物
            <div class="hobby-add">
                <label for="hobby-add">评论：</label>
                <textarea id="hobby-add" name="hobby" cols="60" rows="15">ddd</textarea>
            </div>
        </div>

        <div class="car">
            <label for="car">我的car：</label>
            <select id="car" name="car">
                <option value="SAAB">萨博</option>
                <option value="KIA">起亚</option>
                <option value="TOYOTA">丰田</option>
                <option value="DasAuto">大众</option>
            </select>
            <input type="submit" value="submit">
        </div>
    </form>
```