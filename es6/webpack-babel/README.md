# webpack + babel 开发环境

使用webpack打包模块,同时用babel将ES6代码编译成ES5，以屏蔽各浏览器对ES6支持不一的情况

## webpack

webpack是一个打包工具， ，在 [webpackbasic](../webpack-basic)项目曾有说到，建议可以前往浏览一下。

webpack 有四大核心概念：入口、输出、加载器和插件，熟悉这几个东西对看本项目有好处[webpack concepts](https://webpack.js.org/concepts/)

## babel

babel 则是一个编译工具 ，babel可以把ES6代码都编译成ES5，以让所有浏览器都能够运行，也可以针对某个具体的运行环境，如chrome，把这个环境不支持的ES6特性编译成ES5.

不过，很多浏览器对ES6的支持并不糟糕，甚至有些浏览器大部分语法都已能够运行，稍待时日，或许就用不上babel了。但是目前，babel还是可以让我们先用着ES6的语法，不用担心ES6的支持情况。

浏览器对ES6的支持情况见[ES6 compatibility table](https://kangax.github.io/compat-table/es6/)

babel 在这里以加载器的形式出现，也就是[babel-loader](https://github.com/babel/babel-loader)。


## 项目结构

|文件及目录|说明|
|---|---|
|dist|编译后的文件放在这里|
|sec|源代码|
|package.json|npm配置文件|
|webpack.config.js|webpack配置文件，babel-loader也配置在这里|

## 使用项目

1、 首先安装依赖

```text
npm install 
```

2、运行webpack打包js
```text
npm start
```
打包过程中会使用babel编译js代码，可以打开`dist/bundle.js`,里面已经没有了`class`等ES6的关键字，我们的代码被编译成了类似：
```js
var App = function () {
    function App() {
        _classCallCheck(this, App);
        this.domManager = _DomManager2.default.getInst();
    }
    ...
 }
```
这样，很多时候就不用担心浏览器的的支持问题了。


## 有用链接

- [webpack 自带的插件](https://webpack.js.org/plugins/)
- [webpack 第三方插件](https://github.com/webpack-contrib/awesome-webpack#webpack-plugins)