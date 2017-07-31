# gulp-sass-bower
使用gulp自动构建，使用sass语法.使用bower管理运行依赖

## 使用项目

1、运行`npm install`

2、运行`npm start`构建项目，也可以使用`npm watch`持续监控html、css代码变化

3、把源代码放在`src`文件夹下

注意：在html中要使用：
```text
<!-- bower:css -->
<!-- endbower -->
```
标注出bower所安装的组件的css文件插入的位置

用：
```text
<!-- bower:js -->
<!-- endbower -->
```
标注出bower所安装的组件的js文件注入的位置

注入bower所安装的组件的相关文件使用[wiredep](https://github.com/taptapship/wiredep)工具

## bug
暂时不能用`npm server`命令，这个命令加载不到bower依赖