import React from 'react';
import './index.less';
import WaterWave from 'water-wave';

export default class Buttons extends React.Component{

	static displayName = 'Buttons';

	constructor(props){
		super(props);
    }
    
    onClick=()=>{
      const {onClick}=this.props;
      onClick && onClick();
    }

	render(){
       
        let {label,type}=this.props;
        var buttonStyle='';
        if(type=='red'){
            buttonStyle='red-btn-back';
        }
        
		return (
              <div className='ui-buttons'>
                    <div className={`buttons-primary ${buttonStyle}`} onClick={this.onClick}>
                        {label}
                        <WaterWave color="#fff" duration={400} />
                    </div>
             </div>
		);
	}
}
