import React from 'react';
export default class Tooltip extends React.Component{

	static displayName = 'Toolbars';

	static propTypes = {
        children: React.PropTypes.node,
        title: React.PropTypes.string,
	}

	constructor(props){
		super(props);
	}

	render(){

		let {children} = this.props;

		return (
			<div>
				{children}
			</div>
		);
	}
}






