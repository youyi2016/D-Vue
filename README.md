# D-Vue
webpack+docker+ts+模拟实现Vue+单元测试

## 第一阶段 项目搭建+webpack配置

### 项目搭建
![avatar](https://ibb.co/b2n9JpG)

**1、创建项目文件夹，安装webpack依赖**
```
mkdir D-Vue && cd D-Vue

npm init -y

npm install webpack webpack-cli --save-dev
```

**2、创建D-Vue核心文件**

初步Demo：

src/core/instance/init.js
```
export function initMixin(Vue) {

	Vue.prototype.$mount = function (el) {
			document.querySelector(el).innerHTML = '<div style="color: #f00">DVue的主页</div>'
	}

	Vue.prototype._init = function (options) {
			const vm = this
			if(options.el) {
				vm.$mount(options.el)
			}
	}
}
```

src/core/instance/d-vue.js
```
import {
	initMixin
} from './init'

function DVue(options) {
	this._init(options)
}
initMixin(MiniVue);
export default DVue
```

**3、创建Demo文件**
examples/index.js
```
import  DVue from  '../src/core/instance/d-vue'

new DVue({
	el: '#app'
})
```

examples/index.html
```
<!DOCTYPE html>
<html lang="en">
	<head>
		<title></title>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<!-- <link href="css/style.css" rel="stylesheet"> -->
	</head>
	<body>
	<div id="app">

	</div>	
	<script src="./index.js"></script>
	</body>
</html>
```
此时运行index.html无法看到内容，因为我们在.js文件中使用了import来导入文件模块，浏览器无法直接识别import（？）。

### 理解webpack打包思路

### webpack配置

## 第二阶段 模拟Vue的实现
to-do
