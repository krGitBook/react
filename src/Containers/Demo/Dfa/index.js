import React from 'react';
import { observer, inject } from 'mobx-react/custom';

@inject("WelComeModel")
@observer
export default class Dfa extends React.Component {
	 static childContextTypes= {
         name: React.PropTypes.string.isRequired
    }
 getChildContext() {
        return {
            
            
        };
    }
	render() {

		return (
				<div style={{marginBottom:"50px"}}>
					父页面
				</div>
	   );
	}
}
// Dfa.wrappedComponent.childContextTypes = {
//         refresh: React.PropTypes.func,
      
// }
