import React from 'react';

import Child from './Child'

export default class Father extends React.Component {
	constructor(props,context){
	  super(props, context);
	      this.state = {
	          information:"我是初始值",
	      }
	  }
	componentDidMount(){
		setTimeout(()=>{
			this.setState({
				information:"Father发来贺电！",
			})
		},500)
	}
	render() {
		let {information} = this.state;
		let style = {width:300,height:300,border:"1px solid #f30909"}

		return (
			<div style = {style}>
				<Child information = {information}/>
			</div>
		);

	}

}
