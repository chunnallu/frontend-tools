# 基础ES6开发环境

## 项目概述

这是一个基础的ES6开发环境，主要能将ES6代码编译成ES5。因为目前浏览器对ES6语法的支持还不全面，所以，为了立即能使用ES6定义的新特性，可以使用Babel将ES6代码转译成ES5.
本文将参考[babel官网](https://babeljs.io/)

## babel

[babel](https://babeljs.io/)是一个ES6编译器，它自己本身其实并不做任何事，只是将代码原封不动的搬过来：
```text
const babel = code => code;
```
但是你可以在这个代码搬运的过程中添加编译逻辑，通过插件的方式。使用它你就可以：
- 使用ES6新定义语法，如let,箭头函数等
- 使用ES6新API，如Map,Set
- 使用JSX语法
而不用担心浏览器兼容的问题

## babel 的一些插件

#### presets
这其实是一组插件，用来指定要用的语法，帮助你自动安装需要的插件。比如，你要使用react语法，那么你可以安装`babel-preset-react`，你只要安装这个插件，那么一系列用以支持React语法的插件就会自动安装，就不用自己一个一个去安装了。所以，这个插件也可以说是用来指定babel支持哪些语法。
参考:[plugins](https://babeljs.io/docs/plugins/)

#### babel-polyfill
ES6定义了一些新的API，但某些浏览器并没有实现。有一种办法就是使用“腻子脚本”，比如，浏览器不支持`Number.isNAN`,我们可以自己写一段函数让其支持：
```js
if(!Number.isNaN) {
    Number.isNaN = function(num) {
        return(num !== num);
    }
}
```
`babel-polyfill`插件就是干这事，让浏览器支持ES6的新API

## 使用环境

安装依赖：

```text
npm install
```