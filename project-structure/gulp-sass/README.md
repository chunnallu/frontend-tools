# gulp sass
使用gulp自动构建，使用sass语法.

## 注意

在这里 gulp 使用的是ES6语法，为了达到这种效果，项目做了如下工作：
 
 1、 将`gulpfile.js`改成了`gulpfile.babel.js`,改了这个名字会让gulp运行之前，先用babel编译构建脚本
 
 2、安装babel
 
 ```text
npm install --save-dev babel-core babel-preset-es2015
```

3、添加了一个`.babelrc`文件，内容为：

```text
{
  "presets": ["es2015"]
}
```
这让babel使用ES2015语法规则

这样就可以在gulp中使用ES6了，具体参考[using ES6 with gulp](https://markgoodyear.com/2015/06/using-es6-with-gulp/)

## 项目使用

1、运行`npm install`

2、运行`npm start`

3、把源代码放在`src`文件夹下