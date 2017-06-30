# frontend-tools

随着时代的发展，前端已经发生了很大的变化，模块化、自动化等等各种技术和工具层出不穷，前端开发已经越来越像一个“真正的开发”，最近在做dashboard项目，对方面感触犹深。

frontend-tools 旨在研究前端用到的各种技术和工具，包括ES6、gulp、webpack、bower、nodejs、browser-sync等等，既是为了自己学习和总结，也是想将这些东西分享出来。

## 准备环境
如果是在windows下开发的话，首先以管理员身份打开一个命令行，运行：
```text
npm install -g windows-build-tools
```
这会安装Microsoft开发的windowsnode环境构建工具

# 子项目
每个子项目都独立的，下载下来后都可独立运行

|项目|子项目|概述|
|---|---|---|
|es6|||
||[basicbabel](es6/basic-babel)|使用babel编译器将ES6代码编译成ES5代码|
|css|||
||[autoprefix](css/autoprefix-basic)|自动加兼容性前缀|
|nodejs|||
||[node-debugger](nodejs/node-debugger)|nodejs自带命令行调试工具|
||node-inspector|nodejs调试工具|
|i18n|||
|media|||
||[webp](media/webp)|将jpg转成webp，体验webp格式|

## 学习资源
1. [Microsoft + Node.js Guidelines](https://github.com/Microsoft/nodejs-guidelines)

> 在windows下开发nodejs应用的权威教程，值得一读