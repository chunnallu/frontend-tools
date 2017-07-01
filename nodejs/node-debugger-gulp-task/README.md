# 调试gulp任务

## 项目简介
本项目使用node原生调试器调试gulp任务。

## gulp

[gulp](http://www.gulpjs.com.cn/)是前端的一个自动化构建工具，可以使用js定义测试、编译、构建等等任务，这里暂不细说，只要知道：
（1）安装gulp：
```text
npm install gulp -g
```
(2)定义gulp任务
新建一个`gulpfile.js`文件，添加下面内容：
```text
gulp.task("TASK_NAME",function(){
   //任务内容
})
```
（3）运行gulp任务
```text
gulp TASK_NAME
```
现在有些项目的gulp脚本已经很复杂了，自然，难免有些错误，也需要调试

## 项目结构

|文件及目录|说明|
|---|---|
|src|源代码目录，放着一些简单的html文件|
|gulpfile.js|定义gulp任务的文件|
|package.json|项目的npm配置文件|

## 使用项目

1、 安装依赖
```text
npm install
```

2、运行gulp命令,这里是写在`package.json`里面的，所以只要：
```text
npm run start
```
运行完这条命令后，`src`文件夹中所有的文件都被移动到`dist`文件夹。这句命令纯粹是为了验证一下gulp工作正常

3、调试gulp任务
```text
node debug node_modules/gulp/bin/gulp.js movefiles
```
这就以调试的方式打开movefiles任务了，在`debug>`后面输入：
```text
c
```
就可以跳到断点的位置了。

> 注意：
> （1）如果gulp任务需要运行很久，那就需要耐心等一下
