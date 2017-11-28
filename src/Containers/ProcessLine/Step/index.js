import React from 'react';
import '../index.less';
  
export default class Step extends React.Component {

	constructor(props) {
        super(props)
       
	}


	render() {

		let {children}=this.props;

		return (
				<div>
                   {children}
			    </div>
	   );
	}
}
