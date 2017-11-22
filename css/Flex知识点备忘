# Flex弹性布局

### 容器的6个属性
1. `flex-derection`：决定主轴的方向，即项目的排列方向。
	- `row | row-reverse | column | colume-reverse |`

2. `flex-wrap`：一条轴线放不下，如何换行
	- `nowrap | wrap | wrap-reverse`

3. `flex-flow`：是`flex-derection`和`flex-wrap`属性的简写形式
	- 默认值为`row nowrap`。

4. `justify-content`：定义了项目在主轴上的对齐方式。
	- flex-start：default，左对齐
	- flex-end：右对齐 
	- center
	- space-between：两端对齐，项目之间间隔相等
	- space-around：每个项目两侧的间隔相等，项目之间间隔比项目与边框间隔大一倍

5. `align-items`：定义项目在交叉轴上如何对齐
	- flex-start：交叉轴起点对齐
	- flex-end：交叉轴终点对齐
	- center：交叉轴中点对齐
	- baseline：项目的第一行文字的基线对齐
	- stretch：(default)如果项目未设置高度或设为auto，将占满整个容器的高

6. `align-content`：定义了多根轴线的对齐方式。如果项目只有一条轴线，则该属性不起作用。
	- flex-start：交叉轴起点对齐
	- flex-end：交叉轴终点对齐
	- center：交叉轴中点对齐
	- space-between：与交叉轴两端对齐，轴线之间的空间均匀分布
	- space-around：每根轴线两侧的间隔都相等。
	- stretch：(default)轴线占满整个交叉轴

### 项目的6个属性
1. `order`
	- 项目的排列顺序。数值越小，排列越靠前，默认为0。
2. `flex-grow`
	- 项目的放大比例，默认为0。
3. `flex-shrink`
	- 定义了项目的缩小比例，默认为1，即如果空间不足，项目将缩小
4. `flex-basis`
	- 定义了在分配多余空间之前，项目占据主轴空间，默认值为auto，即项目本来大小
	- `flex-basis: <length> | auto`
5. `flex`
	- 是grow，shrink，basis的简写，默认为`0 1 auto`，后两个属性可选
6. `align-self`
	- 允许单个项目有与其他项目不一样的对齐方式，可覆盖`align-items`属性，默认值为`auto`，表示继承父元素的	`align-items`属性，如果没有父元素，则等同于`stretch`
	- `auto | flex-start | flex-end | center | baseline | stretch`
























