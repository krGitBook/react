import React from 'react';
import '../index.less';

export default class TimeItem extends React.Component {

	constructor(props) {
		super(props)
	}

	componentDidMount(){
		 let {children}=this.props;
		 console.log('children',children);
	}

	render() {

    let {label,children}=this.props;

		return (
				<div className='time-item-process'>
				  <div className='item-line'></div>
          <div className='item-label'>{label}</div>
					<div className='item-children'>
					  {children}
					</div>
				</div>
	   );
	 }
}
