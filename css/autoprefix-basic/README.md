# 自动添加CSS兼容性前缀

## 项目概述

项目的`index.css`用到了flexbox布局,还有部分浏览器需要加兼容性前缀，这里使用autoprefixer插件自动添加。

[autoprefixer](https://github.com/postcss/autoprefixer),支持给css自动添加兼容性前缀，也可以移除过时的前缀，以减少css代码量，支持与gulp、grunt、webpack等集成，也可以使用命令行方式，使用较简单，在官网里已经给出了用法，建议在官网认真看一下。

## 项目结构

|文件及目录|说明|
|---|---|
|build|经过autoprefixer编译后的代码，可以打开`build/index.css`看看，里面已有自动添加的前缀|
|src|源代码，里面的`index.css`只使用标准写法|
| package.json |npm配置文件，其中的'script`定义了`npm run build`命令的内容 |

## 使用项目

1、运行`npm install`安装依赖

2、运行`npm run build`,然后打开`build/index.css`看自动生成的带前缀的css文件