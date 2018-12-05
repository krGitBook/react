
## 项目启动
```
 1. npm install
 2. npm start
```
## 项目配置

1. 端口域名配置
  路径 /scripts/start.js
  的43与44行
  ```
  const DEFAULT_PORT = parseInt(process.env.PORT, 10) || 8001;
  const HOST = process.env.HOST || 'adminlocal.yihaoliu.cn';
  ```
2. 代理配置（脱离nginx 使用）
  路径 /config/proxy.config.js
  
## 路径简写
```
'react-pages': path.join(process.cwd(), '/src/pages'), //页面引用简写
'react-ui': path.join(__dirname, '../src/Components'), //组件引用简写
'Utils': path.join(__dirname, '../src/Utils'), //公用方法引用简写
'Config': path.join(__dirname, '../src/Config'), //config 引用简写 里边主要是ajax请求路径
```
## 目录设置（介绍src文件夹的主要文件夹）
1. Components 组件库文件夹
2. pages 页面文件夹
3. routers 路由配置文件夹

