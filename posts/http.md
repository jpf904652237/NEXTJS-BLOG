---
title: 'http'
date: '2023-04-10'
---
### http面试题
* http状态码有哪些
```
1xx 服务器收到请求
2xx 请求成功
3xx 重定向
4xx 客户端错误
5xx 服务器错误
```
1. 200 成功
2. 301 永久重定向（配合location，浏览器自动处理）
3. 302 临时重定向（配合location，浏览器自动处理）
4. 304 资源未被修改（配合last-modified/etag，浏览器自动处理）
5. 400 请求错误
6. 401 未授权
7. 403 无权限禁止访问
8. 404 未找到
9. 500 服务器错误
10. 502 网关错误
11. 503 服务不可用
12. 504 网关超时

* http常见的header有哪些
* 常见的Request Headers
1. Accept 浏览器可接收的数据格式
2. Accept-Encoding 浏览器可接收的压缩算法，如gzip、deflate
3. Accept-Language 浏览器可接收的语言
4. Authorization 验证信息
5. Cache-Control 缓存策略
6. Connection：keep-alive 一次TCP连接重复使用
7. Cookie 浏览器保存的cookie
8. Host 请求的域名
9. User-Agent 浏览器信息
10. Content-Type 请求体的数据格式，如application/json
* 常见的Response Headers
7. Content-Length 返回数据的大小，多少字节
8. Content-Type 请求体的数据格式，如application/json
9. Content-Encoding 返回数据的压缩算法，如gzip、deflate
10. set-cookie 服务器设置的cookie
11. Date
* 缓存相关的Headers
1. Cache-Control Expires
2. ETag If-None-Match
3. Last-Modified If-Modified-Since

* http methods
1. GET 获取数据
2. POST 新建数据
3. PUT/patch 更新数据
4. DELETE 删除数据
5. HEAD
6. OPTIONS
7. TRACE
8. CONNECT

* 什么是Restful API
1. Restful API是一种设计风格，不是标准
![RestfulAPI](/images/RestfulAPI.png)
![RestfulAPI](/images/RestfulAPI1.png)
* 描述一下http的缓存机制（重要）
1. 浏览器第一次请求服务器，服务器返回资源和缓存标识
2. 浏览器第二次请求服务器，会带上缓存标识，服务器根据缓存标识判断是否命中缓存
3. 如果命中缓存，服务器返回304，浏览器直接从缓存中读取资源
4. 如果没有命中缓存，服务器返回资源和缓存标识
* 什么是http缓存
1. http缓存是指浏览器缓存服务器返回的资源，下次请求时直接从缓存中读取资源，而不是再次请求服务器
* 什么是http缓存标识
1. http缓存标识是服务器返回的一些缓存信息，包括缓存时间、缓存策略等
* http缓存策略有哪些
1. no-cache
2. no-store
3. max-age
4. s-maxage
5. public
6. private
7. must-revalidate
8. proxy-revalidate
9. max-stale
10. min-fresh
11. only-if-cached
* 什么是http缓存控制
1. http缓存控制是指浏览器根据缓存标识判断是否命中缓存的一套规则


### http缓存
* 关于缓存的介绍
```
* 什么是http缓存策略
1. http缓存策略是浏览器根据缓存标识判断是否命中缓存的一套规则
* 为什么需要缓存
1. 减少服务器压力
2. 减少网络传输
* 哪些资源可以被缓存？ -- 静态资源（js css img）
```
* http缓存策略（强制缓存+协商缓存）
![catch-control](/images/catch-control.png)
* 刷新操作方式，对缓存的影响

### http缓存-协商缓存
* 服务端缓存策略
1. 服务器判断客户端资源，是否和服务端资源一样，一致则返回304，否则返回200和最新资源。
![协商缓存](/images/协商缓存.png)

* 资源标识，在Response Headers中
1. ETag 资源的唯一标识，服务器根据资源内容生成
2. Last-Modified 资源最后修改时间，服务器根据文件修改时间生成
3. 二者共存时，优先使用ETag，Last-Modified只能精确到秒级，如果资源被重复生成，而内容不变，则Etag更精确
![Last-Modified](/images/Last-Modified.png)
![ETag](/images/ETag.png)

## http缓存-综述
![http缓存](/images/http缓存.png)

### 不同刷新操作，不同的缓存策略
- 正常操作：强制缓存有效，协商缓存有效
- 手动刷新：强制缓存失效，协商缓存有效
- 强制刷新：强制缓存失效，协商缓存失效