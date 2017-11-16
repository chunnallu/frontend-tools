# frontend-tools

随着时代的发展，前端已经发生了很大的变化，模块化、自动化等等各种技术和工具层出不穷，前端开发已经越来越像一个“真正的开发”，最近在做dashboard项目，对方面感触犹深。

frontend-tools 旨在研究前端用到的各种技术和工具，包括ES6、gulp、webpack、bower、nodejs、browser-sync等等，既是为了自己学习和总结，也是想将这些东西分享出来。

## 准备环境
首先安装[nodejs](https://nodejs.org/zh-cn/download/current/),装好后运行：
```text
node -v
npm -v
```
能运行成功说明安装成功了。

如果是在windows下开发的话，首先以管理员身份打开一个命令行，运行：
```text
npm install -g windows-build-tools
```
这会安装Microsoft开发的windows node开发环境构建工具，参考：[Microsoft + Node.js Guidelines](https://github.com/Microsoft/nodejs-guidelines)
# 学习技术子项目
每个子项目都独立的，下载下来后都可独立运行

|项目|子项目|概述|
|---|---|---|
|es6|||
||[basicbabel](es6/basic-babel)|使用babel编译器将ES6代码编译成ES5代码|
||[closure compiler](es6/closure-compiler)|使用closure compiler编译器将ES6代码编译成ES5代码|
||[webpackbasic](es6/webpack-basic)|使用webpack打包模块|
||[webpackbabel](es6/webpack-babel)|使用webpack打包模块,同时用babel将ES6代码编译成ES5，以屏蔽各浏览器对ES6支持不一的情况|
||[webpack-sourcemap](es6/source-map/webpack)|在webpack中使用source map将编译后的代码映射回原始源代码|
|css|||
||[autoprefix](css/autoprefix-basic)|自动加兼容性前缀|
|nodejs|||
||[node-debugger](nodejs/node-debugger)|使用nodejs自带命令行调试工具调试js|
||[node-debugger-gulp-task](node-debugger-gulp-task)|使用node原生调试器调试gulp任务|
||node-inspector|nodejs调试工具|
|i18n|||
|media|||
||[webp](media/webp)|将jpg转成webp，体验webp格式|
|editor|||
||[ace-editor](editor/ace-editor)|ace-editor是一种能够嵌入网页中使用的代码编辑器，能够支持一百多中代码着色|

## 工程架构子项目
|子项目|概述|
|---|---|
|[gulp-sass](project-structure/gulp-sass)|主要是为了能够使用sass语法而搭建|
|[gulp-sass-bower](project-structure/gulp-sass-bower)|主要是为了能够使用sass语法而搭建，同时使用bower管理运行依赖|

## 测试相关子项目
|子项目|概述|
|---|---|
|[karma-jasnine-basic](test/karma-jasmine-basic)|karma+jasmine基础测试环境，支持使用ES6语法，需要chrome浏览器|
|[karma-jasnine-chromeheadless](test/karma-jasmine-chromeheadless)|karma+jasmine基础测试环境，使用chromeheadless浏览器，更适合用在服务器上|
|[browser-sync-basic](test/browser-sync-basic)|browser sync 框架的基础使用|




## 学习资源
1. [Microsoft + Node.js Guidelines](https://github.com/Microsoft/nodejs-guidelines)

> 在windows下开发nodejs应用的权威教程，值得一读