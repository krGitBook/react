import React from 'react';
import {Tabs,TabPane} from 'react-ui';
import { Icon,Modal } from 'antd';

import Search from './Search';
import AdvancedQuery from './AdvancedQuery'
import './index.less'
class Home extends React.Component {
	constructor(props,context){
		super(props, context);
		this.state = {
			visible: false,
			visibleTable: false ,
			databean:{},
			openAdvancedQuery:false,
		};
	}

	componentDidMount() {
		
	}
	onTabClick = (event)=>{
		console.log(event,"当前点击元素")
	}
	submit = ()=>{
		this.swidthAdvancedQuery()
	}
	swidthAdvancedQuery=()=>{
		const {openAdvancedQuery} = this.state;
		this.setState({
			openAdvancedQuery:!openAdvancedQuery
		})
	}
	
	render() {	
		const {openAdvancedQuery} = this.state;
		return (
			<div>
				<Tabs onTabClick={this.onTabClick} defaultActiveKey="all">
					<TabPane tab={<span>全部任务</span>} label="all">
					<div onClick={this.swidthAdvancedQuery} className="advanced-query" >高级查询</div>
						<Search/>
					
					</TabPane>
					<TabPane tab="完成任务" label="complete">
						<div>完成数据列表</div>
					</TabPane>
					<TabPane tab="未完成任务" label="unfinished">
						<div>未完成数据列表</div>
					</TabPane>
				</Tabs>
				<Modal
          title="高级查询"
          visible={openAdvancedQuery}
          
					onCancel={this.swidthAdvancedQuery}
					footer={null}
        >
					<AdvancedQuery submit={this.submit}/>
        </Modal>
			</div>
		);
	}
}
export default Home;