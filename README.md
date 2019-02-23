
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
  'react-pages': path.join(__dirname, '../src/pages'),
  'react-ui': path.join(__dirname, '../src/Components'),
  'common': path.join(__dirname, '../src/common'),
  'utils': path.join(__dirname, '../src/common/js/utils'),
  'ajax': path.join(__dirname, '../src/common/js/ajax'),
  'style': path.join(__dirname, '../src/common/style')
```

## 目录设置（介绍src文件夹的主要文件夹）
1. Components 组件库文件夹
2. pages 页面文件夹
3. routers 路由配置文件夹
4. common 公共文件夹
5. common/apis 接口公共书写文件夹
6. Components/Hander/navs 菜单配置文件，里边有的参数必填且唯一


# ajax请求的使用
ajax 封装的位置 common/js/ajax
用的基础库是 axios

```
// 引用
import ajax from 'ajax';


/**
  * url 请求接口的别名
  * params 请求的参数是一个对象
  * config {hander} 里边有一个hander对象用于修改 hander 配置
/
//get请求

ajax.get(url,params,config).then((res)=>{
  //返回数据处理
}).catch((err)=>{
  //错误数控处理
})


//put请求

ajax.put(url,params,config).then((res)=>{
  //返回数据处理
}).catch((err)=>{
  //错误数控处理
})

//delete请求

ajax.delete(url,params,config).then((res)=>{
  //返回数据处理
}).catch((err)=>{
  //错误数控处理
})
```

propsType 类型
```
optionalArray: PropTypes.array,//检测数组类型
optionalBool: PropTypes.bool,//检测布尔类型
optionalFunc: PropTypes.func,//检测函数（Function类型）
optionalNumber: PropTypes.number,//检测数字
optionalObject: PropTypes.object,//检测对象
optionalString: PropTypes.string,//检测字符串
optionalSymbol: PropTypes.symbol,//ES6新增的symbol类型
//指定类型为：任何可以被渲染的元素，包括数字，字符串，react 元素，数组，fragment。
optionalNode: PropTypes.node,

// 指定类型为：一个react 元素
optionalElement: PropTypes.element,

//你可以类型为某个类的实例，这里使用JS的instanceOf操作符实现
optionalMessage: PropTypes.instanceOf(Message),


//指定枚举类型：你可以把属性限制在某些特定值之内
optionalEnum: PropTypes.oneOf(['News', 'Photos']),

// 指定多个类型：你也可以把属性类型限制在某些指定的类型范围内
optionalUnion: PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
  PropTypes.instanceOf(Message)
]),

// 指定某个类型的数组
optionalArrayOf: PropTypes.arrayOf(PropTypes.number),

// 指定类型为对象，且对象属性值是特定的类型
optionalObjectOf: PropTypes.objectOf(PropTypes.number),


//指定类型为对象，且可以规定哪些属性必须有，哪些属性可以没有
optionalObjectWithShape: PropTypes.shape({
  optionalProperty: PropTypes.string,
  requiredProperty: PropTypes.number.isRequired
}),

// 指定类型为对象，且可以指定对象的哪些属性必须有，哪些属性可以没有。如果出现没有定义的属性，会出现警告。
//下面的代码optionalObjectWithStrictShape的属性值为对象，但是对象的属性最多有两个，optionalProperty 和 requiredProperty。
//出现第三个属性，控制台出现警告。
optionalObjectWithStrictShape: PropTypes.exact({
  optionalProperty: PropTypes.string,
  requiredProperty: PropTypes.number.isRequired
}),
```