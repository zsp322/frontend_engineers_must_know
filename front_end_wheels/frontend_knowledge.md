分为 4 个步骤：
（1），当发送一个 URL 请求时，不管这个 URL 是 Web 页面的 URL 还是 Web
页面上每个资源的 URL，浏览器都会开启一个线程来处理这个请求，同时在远程
DNS 服务器上启动一个 DNS 查询。这能使浏览器获得请求对应的 IP 地址。
（2）， 浏览器与远程`Web`服务器通过`TCP`三次握手协商来建立一个`TCP/IP`
连接。该握手包括一个同步报文，一个同步-应答报文和一个应答报文，这三个报
文在浏览器和服务器之间传递。该握手首先由客户端尝试建立起通信，而后服务器
应答并接受客户端的请求，最后由客户端发出该请求已经被接受的报文。
（3），一旦`TCP/IP`连接建立，浏览器会通过该连接向远程服务器发送`HTTP`的
`GET`请求。远程服务器找到资源并使用 HTTP 响应返回该资源，值为 200 的
HTTP 响应状态表示一个正确的响应。
（4），此时，`Web`服务器提供资源服务，客户端开始下载资源。

请求返回后，便进入了我们关注的前端模块九章算法 www.jiuzhang.com
简单来说，浏览器会解析`HTML`生成`DOM Tree`，其次会根据 CSS 生成 CSS 
Rule Tree，而`javascript`又可以根据`DOM API`操作`DOM

前端模块化

AMD 是 RequireJS 在推广过程中对模块定义的规范化产出

CMD 是 SeaJS 在推广过程中对模块定义的规范化产出。
AMD 是提前执行，CMD 是延迟执行。
AMD 推荐的风格通过返回一个对象做为模块对象，CommonJS 的风格通过对
module.exports 或 exports 的属性赋值来达到暴露模块对象的目的。
CMD 模块方式
define(function(require, exports,module) {
// 模块代码
});

性能优化

代码层面：避免使用 css 表达式，避免使用高级选择器，通配选择器。

缓存利用：缓存 Ajax，使用 CDN，使用外部 js 和 css 文件以便缓存，添加
Expires 头，服务端配置 Etag，减少 DNS 查找等

请求数量：合并样式和脚本，使用 css 图片精灵，初始首屏之外的图片资源按需加
载，静态资源延迟加载。
请求带宽：压缩文件，开启 GZIP




HTTP/2 引入了“服务端推（server push）”的概念，它允许服务端在客户端需
要数据之前就主动地将数据发送到客户端缓存中，从而提高性能。

HTTP/2 提供更多的加密支持九章算法 www.jiuzhang.com
HTTP/2 使用多路技术，允许多个消息在一个连接上同时交差。
它增加了头压缩（header compression），因此即使非常小的请求，其请求和响
应的 header 都只会占用很小比例的带宽。
defer 和 async
defer 并行加载 js 文件，会按照页面上 script 标签的顺序执行
async 并行加载 js 文件，下载完成立即执行，不会按照页面上 script 标签的顺序
执行

说说你对闭包的理解
使用闭包主要是为了设计私有的方法和变量。闭包的优点是可以避免全局变量的污
染，缺点是闭包会常驻内存，会增大内存使用量，使用不当很容易造成内存泄露。
在 js 中，函数即闭包，只有函数才会产生作用域的概念
闭包有三个特性：
1.函数嵌套函数
2.函数内部可以引用外部的参数和变量
3.参数和变量不会被垃圾回收机制回

CSS 中 link 和@import 的区别是？
(1) link 属于 HTML 标签，而@import 是 CSS 提供的;
(2) 页面被加载的时，link 会同时被加载，而@import 被引用的 CSS 会等到引用
它的 CSS 文件被加载完再加载;
(3) import 只在 IE5 以上才能识别，而 link 是 HTML 标签，无兼容问题;
(4) link 方式的样式的权重 高于@import 的权重.

§ content-box：让元素维持 W3C 的标准盒模型。元素的宽度/高度由 border + 
padding + content 的宽度/高度决定，设置 width/height 属性指的是 content
部分的宽/高
§ border-box：让元素维持 IE 传统盒模型（IE6 以下版本和 IE6~7 的怪异模
式）。设置 width/height 属性指的是 border + padding + content

!important > id > class > tag

SS3 新增伪类举例：
p:first-of-type 选择属于其父元素的首个

元素的每个

元素。
p:last-of-type 选择属于其父元素的最后

元素的每个

元素。
p:only-of-type 选择属于其父元素唯一的

元素的每个

元素。
p:only-child 选择属于其父元素的唯一子元素的每个

元素。
p:nth-child(2) 选择属于其父元素的第二个子元素的每个

元素。
:enabled :disabled 控制表单控件的禁用状态。
:checked 单选框或复选框被选中

call() 和 apply() 的区别和作用？

创建 ajax 的过程
(1)创建`XMLHttpRequest`对象,也就是创建一个异步调用对象.
(2)创建一个新的`HTTP`请求,并指定该`HTTP`请求的方法、`URL`及验证信息.
(3)设置响应`HTTP`请求状态变化的函数.
(4)发送`HTTP`请求.
(5)获取异步调用返回的数据.
(6)使用 JavaScript 和 DOM 实现局部刷新.

```jsx
var xmlHttp = new XMLHttpRequest();
	xmlHttp.open('GET','demo.php','true');九章算法 www.jiuzhang.com
	xmlHttp.send()
	xmlHttp.onreadystatechange = function(){
	if(xmlHttp.readyState === 4 & xmlHttp.status=== 200){

	}
}
```

GET 和 POST 的区别，何时使用 POST？
GET：一般用于信息获取，使用 URL 传递参数，对所发送信息的数量也有限制，
一般在 2000 个字符
POST：一般用于修改服务器上的资源，对所发送的信息没有限制。
GET 方式需要使用 Request.QueryString 来取得变量的值，而 POST 方式通过
Request.Form 来获取变量的值，
也就是说 Get 是通过地址栏来传值，而 Post 是通过提交表单来传值。
然而，在以下情况中，请使用 POST 请求：
无法使用缓存文件（更新服务器上的文件或数据库）
向服务器发送大量数据（POST 没有数据量限制）
发送包含未知字符的用户输入时，POST 比 GET 更稳定也更可靠

200 OK 正常返回信息
201 Created 请求成功并且服务器创建了新的资源
202 Accepted 服务器已接受请求，但尚未处理
301 Moved Permanently 请求的网页已永久移动到新位置。
302 Found 临时性重定向。
303 SeeOther 临时性重定向，且总是使用 GET 请求新的 URI。
304 Not Modified 自从上次请求后，请求的网页未修改过。
400 BadRequest 服务器无法理解请求的格式，客户端不应当尝试再次使用相同
的内容发起请求。
401 Unauthorized 请求未授权。
403Forbidden 禁止访问。九章算法 www.jiuzhang.com
404 NotFound 找不到如何与 URI 相匹配的资源。
500 InternalServer Error 最常见的服务器端错误。
503 ServiceUnavailable 服务器端暂时无法处理请求（可能是过载或维护）。

Promise手写

```jsx
var promise = new Promise(function(resolve, reject) {
		if (...) { // succeed
			resolve(result);
		} else { // fails
			reject(Error(errMessage));
		}
});
```

严格模式主要有以下限制：
变量必须声明后再使用
函数的参数不能有同名属性，否则报错
不能使用 with 语句
不能对只读属性赋值，否则报错

事件代理（Event Delegation），又称之为事件委托。是 JavaScript 中常用绑定
事件的常用技巧。顾名思义，“事件代理”即是把原本需要绑定的事件委托给父元
素，让父元素担当事件监听的职务。事件代理的原理是 DOM 元素的事件冒泡。使
用事件代理的好处是可以提高性能。

§ 应用层：应用层、表示层、会话层（从上往下）（HTTP、FTP、SMTP、
DNS）
§ 传输层（TCP 和 UDP）
§ 网络层（IP）
§ 物理和数据链路层（以太网）