import React from 'react';
import Dialog_tree from '../Home/controls/dialog_tree'
import TabsFlag from '../Home/controls/tabsFlag'

export default class Basic extends React.Component {

	constructor(props,context){
		super(props, context);
			this.state = {
				visibleTree: true ,
			};
	}
	handleCancelTree = () => {
		this.setState({ visibleTree: false });
	}
	render() {
	//声明变量
	const { visibleTree} = this.state;
		return (
				<div>
					{this.props.children}
				<div>
				 {visibleTree && <Dialog_tree  onCancel={this.handleCancel}  title="作战计划"/>}
				</div>
				<div>	
				<TabsFlag/>
				</div>
				</div>
				
				
	   );
	}
}
