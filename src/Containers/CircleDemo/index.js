import React from 'react';
import TimeItem from './TimeItem';
import LittleItem from './LittleItem';
import './index.less';

export default class TimeLine extends React.Component {

	constructor(props) {
		super(props)
	}


	render() {

		return (
				<div className='ui-wrap-line'>
		          <div className='ui-time-line'>

		              <TimeItem label='1950'>
		                   <LittleItem label='123'>
		                      123wewew
		                   </LittleItem>
		              </TimeItem>

		          </div>
			   </div>
	   );
	}
}
