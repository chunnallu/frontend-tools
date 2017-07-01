# node原生调试器

## 项目概述

nodejs自带调试器，这里使用nodejs自带的调试器调试普通js文件。

## 项目结构

|文件及目录|说明|
|---|---|
|app.js|程序主文件，里面一个简单的提取href内容的程序|

## 使用环境

1、以调试模式运行app.js

```text
node debug app.js
```

2、在debug>`后面，输入`help`查看帮助,输出如下：

```text
debug> help
Commands: run (r), cont (c), next (n), step (s), out (o), backtrace (bt), setBreakpoint (sb), clearBreakpoint (cb),
watch, unwatch, watchers, repl, exec, restart, kill, list, scripts, breakOnException, breakpoints, version

```
这里对几个命令做简单说明：

 - c 连续运行，直到下一个断点或结束
 - n 单步执行，不进入子函数(Step next)
 - s 单步执行，进入子函数(Step in)
 - o 跳出函数（Step out）
 - reatsrt 重新运行文件
 - 什么都不输入 重复运行上一个命令
 - watch 监视变量
 

3、在`debug>`后面输入s,进行步进调试

4、在`debug>`后面输入cont，调到断点位置

## 参考文档

1、[node debug tutorial 中文版](http://i5ting.github.io/node-debug-tutorial/#1)

2、[node dubugger官网教程](https://nodejs.org/api/debugger.html)