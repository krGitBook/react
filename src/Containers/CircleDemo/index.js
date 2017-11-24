import React from 'react';
import TimeItem from './TimeItem';
import LittleItem from './LittleItem';
import './index.less';

export default class Time extends React.Component {

	constructor(props) {
		super(props)
	}

	render() {

		return (
				<div className='ui-wrap-process'>
          <div className='ui-time-process'>
             <TimeItem label='1954'></TimeItem>
             <LittleItem label='世界简史'>
                  世界未解之谜
             </LittleItem>
             <TimeItem label='1958'></TimeItem>
             <LittleItem label='契诃夫'>
                  契诃夫之秘密
             </LittleItem>
          </div>
				</div>
	   );
	}
}
