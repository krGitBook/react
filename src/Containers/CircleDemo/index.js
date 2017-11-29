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
		                   <LittleItem label='香波里岛事件'>
		                      <h3>草帽海贼团</h3>
							  <p>
								  坚定的友谊，不屈的灵魂，自由的追求，勇敢的探险，信念道义原则
							  </p>
		                   </LittleItem>
						   <LittleItem label='天空城'>
		                      <h3>黄金城</h3>
							  <p>
								  失落的历史，失落的城市，天上地下皆有人哉
							  </p>
		                   </LittleItem>
		              </TimeItem>

					  <TimeItem label='1951'>
		                   <LittleItem label='四皇之谜'>
		                      <h3>bigmom</h3>
							  <p>
								 这个女人是操纵灵魂的恶魔果实能力者，以女儿的幸福打江山
							  </p>
		                   </LittleItem>
		              </TimeItem>
				  </div>

			   </div>
	   );
	}
}
