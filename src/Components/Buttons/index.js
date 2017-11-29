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
       
        let {label,theme,type}=this.props;
        var buttonTheme='';
        if(theme=='red'){
            buttonTheme='red-theme';
        }
        
		return (
              <div className='ui-buttons'>
                    <div className={`buttons-primary ${buttonTheme}`} onClick={this.onClick}>
                        {label}
                        <WaterWave color="#fff" duration={400} />
                    </div>
                    {type=='disabled'&&<div className='btn-disabled'></div>}
             </div>
		);
	}
}
