import React from 'react';

export default class Child extends React.Component {
	static contextTypes = {
        name: React.PropTypes.object.isRequired
    }
	render() {

		return (
				<div style={{marginBottom:"50px"}}>
					子页面
				</div>
	   );
	}
}
