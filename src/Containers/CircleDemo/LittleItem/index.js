import React from 'react';
import '../index.less';

export default class LittleItem extends React.Component {

	static displayName = 'LittleItem';

	constructor(props) {
		super(props)
	}


	littleClick=()=>{
	   var dom=document.getElementById('little-detail');
	   dom.style.transition='all 0.3s ease';
	   if(dom.style.opacity=='0'||!dom.style.opacity){
	   	    dom.style.opacity='1';
			dom.style.paddingLeft='50px';
	   }else{
			dom.style.opacity='0';
			dom.style.paddingLeft='0px';
	   }
	   
	}
    
  
	render() {

        let {label,children}=this.props;

				return (
						<div className='time-item-process'>
							<div className='little-title-line'></div>
									<div className='little-title'>{label}</div>
									<div className='little-detail' id='little-detail'>
										{children}
									</div>
						</div>
				);
		}
}
