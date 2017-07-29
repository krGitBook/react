## React context 使用

在这里说两种写法：

 * 常规写法
 * 结合mobx写法

###  常规写法
		
父页面：
```
export default class Dfa extends React.Component {
	  static childContextTypes= {
	         name: React.PropTypes.string.isRequired,
	         age: React.PropTypes.number,
	         fn: React.PropTypes.func
	   }
 	getChildContext() {
        return {
            name:'张三',
            age:20,
            fn:function(){
            	return 24
            }
        };
    }
	render() {

		return (
				<div style={{marginBottom:"50px"}}>
					父页面
					<Child />
				</div>
	   );
	}
}
```


子页面：

```
import React from 'react';

export default class Child extends React.Component {
	static contextTypes = {
        name: React.PropTypes.string.isRequired,
        fn: React.PropTypes.func,
    }
	render() {

		return (
				<div style={{marginBottom:"50px"}}>
					子页面
					<div>name:{this.context.name}</div>
					{this.context.fn ()}
				</div>
	   );
	}
}

```

### 结合mobx写法

父页面：


```
import React from 'react';
import { observer, inject } from 'mobx-react';
import Child from './child';
@inject("WelComeModel")
@observer
export default class Dfa extends React.Component {
 	getChildContext() {
        return {
            name:'张三',
            age:20,
            fn:function(){
            	return 24
            }
        };
    }
	render() {

		return (
				<div style={{marginBottom:"50px"}}>
					父页面
					<Child />
				</div>
	   );
	}
}
Dfa.wrappedComponent.childContextTypes = {
		name: React.PropTypes.string.isRequired,
		age:React.PropTypes.number,
        fn: React.PropTypes.func,
      
}

```


子页面：

```
import React from 'react';

export default class Child extends React.Component {
	static contextTypes = {
        name: React.PropTypes.string.isRequired,
        fn: React.PropTypes.func,
    }
	render() {

		return (
				<div style={{marginBottom:"50px"}}>
					子页面
					<div>name:{this.context.name}</div>
					{this.context.fn ()}
				</div>
	   );
	}
}

```



