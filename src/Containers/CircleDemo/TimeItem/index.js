import React from 'react';
import '../index.less';

export default class TimeItem extends React.Component {

	constructor(props) {
		super(props)
	}

	render() {

    let {label,children}=this.props;

		return (
				<div className='time-item-process'>
				  <div className='item-title-line'></div>
          <div className='item-title'>{label}</div>
				</div>
	   );
	 }
}
