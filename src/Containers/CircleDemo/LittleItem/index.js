import React from 'react';
import '../index.less';

export default class LittleItem extends React.Component {

	constructor(props) {
		super(props)
	}

	render() {

    let {label,children}=this.props;

		return (
				<div className='time-item-process'>
				  <div className='little-title-line'></div>
          <div className='little-title'>{label}</div>
          <div className='little-detail'>{children}</div>
				</div>
	   );
	 }
}
