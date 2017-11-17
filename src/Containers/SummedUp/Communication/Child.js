import React from 'react';

export default class Child extends React.Component {


	render() {
		let {information} = this.props;
		let style = {width:100,height:100,border:"1px solid #000",margin:"auto",marginTop:50}

		return (
			<div style = {style}>
				{`我是child,Father发来的消息是：${information}`}
			</div>
		);

	}

}
