# babel编译器基础测试

## 项目概述

这是一个基础的Babel编译器的例子，主要能将ES6代码通过Babel编译成ES5。

因为目前浏览器对ES6语法的支持还不全面，所以，为了立即能使用ES6定义的新特性，可以使用Babel将ES6代码转译成ES5。本文参考[babel官网例子](https://babeljs.io/docs/setup/#installation)。

要看ES6的支持情况，可以[es6 compat-table](https://kangax.github.io/compat-table/es6/)

## 项目结构

|文件及目录|说明|
|---|---|
|build|构建目录，js编译后的代码将放在这里。在本项目中，我们把HTML代码和CSS代码也放在这里，只是为了方便|
|src|这里将放我们的ES6代码|
|.babelrc|babel配置文件|
|package.json|npm 配置文件，里面记录着我们的开发依赖，也定义了`build`命令，因此我们运行`npm run build`才知道执行哪个命令|

## 使用环境

1、首先，将整个文件夹下载下来

2、安装依赖
```text
npm install
```
3、编译Es6代码，这一步用Babel将ES6代码编译成ES5
```text
npm run build
```

4、在浏览器打开`build/index.html`，查看效果

## 总结
像在项目里这样使用Babel,其作用只是把ES6的语法和API转成ES5,至于其中的依赖（比如这里项目中用到的Jquery）则需要自行引入了（看`build/index.html`）


## 背景知识之babel

[babel](https://babeljs.io/)是一个ES6编译器，它自己本身其实并不做任何事，只是将代码原封不动的搬过来：
```text
const babel = code => code;
```
但是你可以在这个代码搬运的过程中添加编译逻辑，通过插件的方式。使用它你就可以：
- 使用ES6新定义语法，如let,箭头函数等
- 使用ES6新API，如Map,Set
- 使用JSX语法
而不用担心浏览器兼容的问题

#### babel 的一些插件

- presets
这其实是一组插件，用来指定要用的语法，帮助你自动安装需要的插件。比如，你要使用react语法，那么你可以安装`babel-preset-react`，你只要安装这个插件，那么一系列用以支持React语法的插件就会自动安装，就不用自己一个一个去安装了。所以，这个插件也可以说是用来指定babel支持哪些语法。
参考:[plugins#presets](https://babeljs.io/docs/plugins/#presets)

- babel-polyfill
ES6定义了一些新的API，但某些浏览器并没有实现。有一种办法就是使用“腻子脚本”，比如，浏览器不支持`Number.isNAN`,我们可以自己写一段函数让其支持：
```js
if(!Number.isNaN) {
    Number.isNaN = function(num) {
        return(num !== num);
    }
}
```
`babel-polyfill`插件就是干这事，让浏览器支持ES6的新API

