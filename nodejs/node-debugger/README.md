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

3、在`debug>`后面输入s,进行步进调试

## 参考文档

1、[node debug tutorial 中文版](http://i5ting.github.io/node-debug-tutorial/#1)