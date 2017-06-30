# web图片格式体验

## 项目简介

[webp](https://developers.google.com/speed/webp/)是google在2010年推出的新图片格式，特点是体积小，同样的图片，使用webp格式会比使用png格式小26%，腾讯前端已经对此格式做过评测——[webP 探寻之路](http://isux.tencent.com/introduction-of-webp.html)。

这里直接下载[google官方webp转换器](https://storage.googleapis.com/downloads.webmproject.org/releases/webp/index.html)进行试验,除此之外，还可以在js代码中使用或在PS中通过插件使用，比如：在构建项目时，通过构建脚本将图片转成webp格式，并相应的替换掉html文件中的链接，这样做很有意义。

## 项目结构

|文件及目录|说明|
|---|---|
|libwebp-0.4.1-windows-x64|官方下载的转换器|
|test.jpg|原图片，大小为59KB|
|transform.bat|转换脚本|

## 使用项目

1、 双击`transform.bat`运行脚本

这会执行：
```text
cwebp -q 80 test.jpg -o test.webp
```
也就是以80为压缩因子来讲test.jpg转码成test.webp。

从生成的文件可以看出使用webp格式的图片要小很多，这对节省带宽很有意义。

## 扩展

用脚本来实现转换，也可以看下——[webp-converter](https://github.com/scionoftech/webp-converter)