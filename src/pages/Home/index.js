
import React from 'react';
import { message, Button } from 'antd'
import {Http} from 'Utils';
class Home extends React.Component {
	constructor(props,context){
		super(props, context);
		this.state = {};
	}
	componentDidMount() {
		Http.get('/api/krspace-op-web/app/operation/community/use-rate',{dataDate: '2018-12-04'}).then((res)=>{
			console.log(res,"kkkkk")
		}).catch((error)=>{
			message.error(error)
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