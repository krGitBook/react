
import React from 'react';
import { message, Button } from 'antd'
import ajax from 'ajax'
class Home extends React.Component {
	constructor(props,context){
		super(props, context);
		this.state = {};
	}
	componentDidMount() {
		ajax.get('demo').then((res)=>{
			console.log(res,"=-=====");
		}).catch((err)=>{
			message.error(err.message||'系统出错喽');
		})
	}
	handleClick = (e) => {
		console.log('click ', e);
	}

	render() {

		return (
			<div>首页</div>
		);
	}
}
export default Home;