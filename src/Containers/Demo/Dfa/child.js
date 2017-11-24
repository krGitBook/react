import React from 'react';

export default class Child extends React.Component {
	// static contextTypes = {
    //     name: React.PropTypes.string.isRequired,
    //     fn: React.PropTypes.func,
    // }
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
