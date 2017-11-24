import React from 'react';
import TimeItem from './TimeItem';
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
                   <TimeItem label='1952'>
                      123
                   </TimeItem>
              </TimeItem>

          </div>
				</div>
	   );
	}
}
