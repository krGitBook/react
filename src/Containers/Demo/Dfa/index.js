import React from 'react';
import { observer, inject } from 'mobx-react/custom';

import Child from './child';
@inject("WelComeModel")
@observer
export default class Dfa extends React.Component {
	 // static childContextTypes= {
	 //        name: React.PropTypes.string.isRequired
	 //   }
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
