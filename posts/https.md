---
title: 'https'
date: '2023-04-11'
---
### https
+ http和https
1. http是明文传输，敏感信息容易被中间劫持
2. https = http + 加密，劫持了也无法解密
3. 现代浏览器已开始强制https协议
+ 加密方式：对称加密和非对称加密
1. 对称加密：加密和解密使用同一个密钥
2. 非对称加密：一对key，A加密之后只有B能解密，B加密之后只有A能解密
![加密方式](/images/https.png)
+ https证书
1. 中间人攻击
2. 使用第三方证书（慎用免费、不合规的证书）
3. 浏览器校验证书
![证书](/images/https证书.png)

![证书](/images/https1.png)