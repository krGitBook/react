import React from 'react';
import { message } from 'antd'
import Dialog from './controls/dialog'
import DialogTable from './controls/dialogTable'
import Buttons from '../../Components/Button/index'
import ajax from 'ajax'
class Home extends React.Component {
	constructor(props,context){
		super(props, context);
		this.state = {
			visible: false,
			visibleTable: false ,
			databean:{}
		};
	}

	componentDidMount() {
		ajax.get('demo5').then((res)=>{//获取form表单值
			this.setState({databean:res});
			console.log(res,"=-=====");
		}).catch((err)=>{
			message.error(err.message||'系统出错喽');
		})
	}

	handleClick = (e) => {
		console.log('click ', e);
	}

	headerClick = (e) => {
		console.log(`id为${e}被单击`)
		if(e === '11') 
		return this.setState({
      visible: true,
	});
	if(e === '22') 
		return this.setState({
			visibleTable: true,
    });
	}

	handleOk = () => {
		this.setState({ loading: false, visible: false });
	}
	handleOkTable = () => {
		this.setState({ loading: false, visibleTable: false });
	}
	handleCancel = () => {
		this.setState({ visible: false });
	}
	handleCancelTable = () => {
		this.setState({ visibleTable: false });
	}
	render() {	
		const btnOptions = {
      change: this.headerClick,
      btns: [
        {text: '图片122222', icon:'3.jpg', id: '11'},
        {text: '图片2', icon:'2.jpg', id: '22'},
        {text: '图片3', icon:'3.jpg', id: '221'},
      ]
		}
		//声明变量
		const { visible ,visibleTable} = this.state;
		return (
			<div>
				<Buttons data={btnOptions}/>
				
				{visible && <Dialog onOk={this.handleOk} onCancel={this.handleCancel} databean={this.state.databean} title="作战任务基本属性"/>}
				{visibleTable && <DialogTable onOk={this.handleOkTable} onCancel={this.handleCancelTable} databean={this.state.databean} title="计划管理"/>}
			</div>
		);
	}
}
export default Home;