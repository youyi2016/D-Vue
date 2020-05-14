# D-Vue
webpack+docker+ts+模拟实现Vue+单元测试

## 第一阶段 项目搭建+webpack配置

### 项目搭建

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
此时运行index.html无法看到内容，因为我们在.js文件中使用了import来导入文件模块，浏览器无法直接识别import导入的模块（？）。但是我们可以通过webpack对js模块进行打包，然后在index.html中引入打包后的js文件，从而在index.html中渲染页面内容。

### webpack配置
根目录配置webpack.config.js:
```
const path = require('path');

module.exports = {
	entry: path.resolve(__dirname, 'examples/index.js', //指定要打包的入口文件
	output: {
		filename: 'bundle.js', //指定打包后的文件的名称
    path: path.resolve(__dirname, 'dist') //指定打包后的文件的路径
	}
}
```
配置package.json
```
{
  "name": "d-vue",
  "version": "1.0.0",
  "description": "",
  "main": "webpack.config.js",
  "directories": {
    "example": "examples",
    "test": "test"
  },
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack"
  },
  "author": "youyi",
  "license": "ISC",
  "devDependencies": {
    "webpack": "^4.43.0",
    "webpack-cli": "^3.3.11"
  }
}
```
执行npm run build 打包文件，dist中生成bundle.js。

index.html中引入bundle.js，可以看到页面中的内容。

### 理解webpack打包思路

打包生成的bundle.js：
```
!function(e) {
    var t = {};
    function n(r) {
        if (t[r])
            return t[r].exports;
        var o = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, n),
        o.l = !0,
        o.exports
    }
    n.m = e,
    n.c = t,
    n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }
    ,
    n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    n.t = function(e, t) {
        if (1 & t && (e = n(e)),
        8 & t)
            return e;
        if (4 & t && "object" == typeof e && e && e.__esModule)
            return e;
        var r = Object.create(null);
        if (n.r(r),
        Object.defineProperty(r, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var o in e)
                n.d(r, o, function(t) {
                    return e[t]
                }
                .bind(null, o));
        return r
    }
    ,
    n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return n.d(t, "a", t),
        t
    }
    ,
    n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    n.p = "",
    n(n.s = 0)
}([function(e, t, n) {
    "use strict";
    function r(e) {
        this._init(e)
    }
    var o;
    n.r(t),
    (o = r).prototype.$mount = function(e) {
        document.querySelector(e).innerHTML = '<div style="color: #f00">DVue的主页</div>'
    }
    ,
    o.prototype._init = function(e) {
        const t = this;
        e.el && t.$mount(e.el)
    }
    ,
    new r({
        el: "#app"
    })
}
]);
```
* 首先从入口文件开始，分析依赖树
* 

### 自动更新主入口页面index.html中的js文件
* npm install --save-dev html-webpack-plugin
* webpack-config-js中添加：
  
	```
	plugins: [
		new HtmlWebpackPlugin({
			title: 'D-Vue'
		})
  ],
	```
* npm run build

  dist 中默认会创建一个index.html文件

### 代码修改自动编译，自动刷新浏览器
* npm install --save-dev webpack-dev-server
* 修改配置文件webpack.config.js（在 localhost:8080 下建立服务，告诉服务器将 dist 目录下的文件，作为可访问文件。）
```
devServer: {
    contentBase: './dist'
},
```
* 配置package.json

新增 "start": "webpack-dev-server --open"
```
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack",
    "start": "webpack-dev-server --open"
  },
```
## 第二阶段 模拟Vue的实现
to-do
