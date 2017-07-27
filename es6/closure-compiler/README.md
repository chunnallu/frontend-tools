# closure-compiler 基础测试

这个项目和baic-babel测试目的类似，都是要将ES6代码编译成ES5,只不过这里用到的是closure-compiler工具，

## closure-compiler和babel

这两者的功能有些类似，从[closure compiler vs babel](https://stackshare.io/stackups/closure-compiler-vs-babel)来看，babel的使用人数更多，使用者列举了babel的几个优点（大意）：

- 支持最新的JavaScript语法，编译后的代码兼容的浏览器多
- 开源
- 易于使用
- 集成了一大堆工具
- 其Github社区很活跃（这对于一个还未稳定的东西很重要，这意味着更容易得到开发者的帮助，现在编译器面对的浏览器对ES6的支持情况，就是一个时常在变的东西）
- 支持扩展
- 支持JSX语法

个人觉得一般来说，babel应该是较好的选择，但是有些项目，特别是google的项目，还在使用closure-compiler。

## 项目结构

|文件及目录|说明|
|---|---|
|build|构建目录，js编译后的代码将放在这里。在本项目中，我们把HTML代码和CSS代码也放在这里，只是为了方便|
|src|这里将放我们的ES6代码|
|package.json|npm 配置文件，里面记录着我们的开发依赖，也定义了`build`命令，因此我们运行`npm run build`才知道执行哪个命令|


## 使用项目

1、首先，安装项目依赖：
```text
npm install
```

2、运行build命令
```text
npm run build
```