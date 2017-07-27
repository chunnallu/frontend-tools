# ace editor

[ace editor](https://ace.c9.io/) 代码编辑器有如下特性：

- 支持110种语言的着色
- 操作20种主题
- 自动缩进
- An optional command line
- 能够处理巨型文档
- 可自定义快捷键风格
- 支持正则表达式搜索和替换
- 括号高亮显示
- 支持用四个空格代替tab
- Displays hidden characters
- 鼠标拖拽文本
- 自动换行
- 代码折叠
- 文本多选
- 在线语法检查
- 剪切、复制和粘贴

基本上常见的代码的编辑器都可以使用这个

## 用法

1、首先，下载ace editor，我们可以直接在其github仓库 [ajaxorg/ace](https://github.com/ajaxorg/ace) 里下载,但更常用的是使用其已编译好的版本，项目为[ajaxorg/ace-builds](https://github.com/ajaxorg/ace-builds).

在这里，我们使用bower来下载


2、引入`ace.js`

```html
<script src="bower_components/ace-builds/src-noconflict/ace.js" type="text/javascript" charset="utf-8"></script>
```


3、创建一个元素用于放置编辑器，这个元素要有id属性,要有宽和高：

```html
<div id="editor"></div>
```


4、创建编辑器

```js
var editor = ace.edit("editor");
    editor.setTheme("ace/theme/monokai");  //设置主题
    editor.getSession().setMode("ace/mode/javascript");  //设置模式，也就是语言
```

这样就完成了


## 使用项目

1、运行 `npm install`

2、运行`npm start`

3、在浏览器打开`127.0.0.1:12345`