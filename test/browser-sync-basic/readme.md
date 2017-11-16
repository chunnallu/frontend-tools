# browser sync 

browser sync 主要还是用来同步刷新多个浏览器，文件变化了给你同步刷新，用户在页面上操作给你同步刷新。

## 基础使用——静态服务器

监控静态文件使用server模式

```
npm install -g browser-sync
browser-sync start --server --files "index.html"
```

然后用多个浏览器打开：127.0.0.1:3000，在某一个浏览器操作，其它浏览器会自动同步

## 基础使用-- 动态服务器

如果本身已有服务器，就可以使用这种方式。使用这种方式之后，修改文件后的自动同步就需要由服务器这边完成了。

```
npm start
browser-sync start --proxy "127.0.0.1" "index.html"
```

然后用多个浏览器打开：127.0.0.1:3000，在某一个浏览器操作，其它浏览器会自动同步



