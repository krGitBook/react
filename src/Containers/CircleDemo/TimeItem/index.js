import React from 'react';
import '../index.less';

export default class TimeItem extends React.Component {

	constructor(props) {
		super(props)
		this.state={
			items:[]
		}
	}
   
	 componentDidMount(){
		 const {children,label}=this.props;
		 var childs=[].concat(children);
		 var items=[];
		 childs.map((item,index)=>{
			if(item.type.displayName==='LittleItem'){
				items.push(item.props);
			}
		 })
		 console.log('items--',items);
		 this.setState({
			items 
		 })
	 }
     
	 itemClick=()=>{
		
	 }
     
	render() {

	let {label,children}=this.props;

		return (
				<div className='time-item-process'>
					<div className='item-line'></div>
					<div className='item-label' onClick={this.itemClick}>{label}</div>
					<div className='item-children'>
					{children}
					</div>
				</div>
	  );
	}
}
