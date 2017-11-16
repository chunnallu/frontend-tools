# karma+jasmime+chromeheadless测试环境

本项目是js基础测试环境，拷贝自[karma-jasnine-basic](karma-jasmine-basic)，使用karma作为测试框架，使用jasmine作为断言库。

不同的是，本项目将使用ChromeHeadless浏览器作为测试浏览器。ChromeHeadless是一种无头浏览器，也就是它是没有界面的，并可以设置它不使用GPU，这对于在没有图形界面、没有GPU的服务器上运行测试时很有帮助的。


## 安装ChromeHeadless

自第59版本开始，ChromeHeadless就已经包含在Chrome中了，所以，要获得ChromeHeadless，我们首先需要安装[Chrome](https://www.google.cn/chrome/browser/desktop/index.html).

#### windows下安装步骤

1. 下载[Chrome](https://www.google.cn/chrome/browser/desktop/index.html)，双击并安装
2. 双击启动chrome验证

#### ubuntu下安装步骤

1. 下载[Chrome](https://www.google.cn/chrome/browser/desktop/index.html)
2. 使用如下命令安装
```
sudo dpkg -i google-chrome-stable_current_amd64.deb 
```
如果安装遇到问题，可以使用下面命令修复：
```text
sudo apt-get install -f
```

3. 启动chrome验证是否安装成功
```text
google-chrome --headless --remote-debugging-port=9222 https://chromium.org --disable-gpu  --no-sandbox
```
*  --headless 以无头方式启动
*  --remote-debugging-port 远程调试端口
*  --disable-gpu 服务器上不支持GPU，禁用GPU
*  --no-sandbox 如果使用的是root用户，需要使用该选项禁用沙箱模式

4. 将Chrome的路径添加到Path
```text
echo "export CHROME_BIN=/usr/bin/google-chrome" >> ~/.profile
```

## 使用项目

安装完Chrome之后，可以接着执行下面的操作

1. 首先安装依赖：

```
npm install
```

2. 编写代码和测试代码

> 代码放在src目录下，测试代码放在test目录下，并且要以.spec.js作为后缀

3、运行测试

```
karma start
```

## 相关知识

### karma集成ChromeHeadless

#### windows 下

windows下一般都有GPU，所以可以直接修改karma.conf.js如下：

```text
config.set({
     ......
     browsers: ['ChromeHeadless'],
})
```

### ubuntu下

ubuntu等服务器中很可能没有GPU，所以我们创建一个自定义的运行器，禁用掉GPU。修改karma.conf.js如下：

```
config.set ( {
    ......
	browsers: [ 'MyHeadlessChrome' ],
	customLaunchers :{
		MyHeadlessChrome: {
			base: 'ChromeHeadless',
			flags: [ '--disable-gpu', '--no-sandbox', '--remote-debugging-port=9223' ]
		}
	},

} )
```

可以参考
[Automated testing with Headless Chrome](https://developers.google.com/web/updates/2017/06/headless-karma-mocha-chai)

### 