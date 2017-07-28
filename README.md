## 用 create-react-app  快速搭建react项目
```
 cnpm install -g create-react-app
 create-react-app my-app
 cd my-app/
 npm start
```
## 项目启动
```
 1. yarn install
 2. yarn start
```

## 数据管理说明
该项目分别使用了redux和mobx这两个数据管理框架分
redux在redux分支
mobx在master分支


## 路径简写
```
'react-pages': path.join(process.cwd(), '/src/Containers'), //页面引用简写
'react-ui': path.join(__dirname, '../src/Components'), //组件引用简写
'Utils': path.join(__dirname, '../src/Utils'), //公用方法引用简写
'Config': path.join(__dirname, '../src/Config'), //config 引用简写 里边主要是ajax请求路径
```
## 可以做实验的框架
1. react-addons-css-transition-group react的动画框架
2. material-ui v1版本 （推荐在手机端测试，个人认为性能很棒）
3. mobx 在master分支测试即可，mobx放在src下的Mobx文件夹管理
4. redux 在redux分支测试即可，redux放在src下的redux文件夹管理

## 目录设置（介绍src文件夹的主要文件夹）
1. Components 组件库文件夹
2. Containers 页面文件夹
3. DevRouter 路由配置文件夹

