import React from 'react';
import './index.less';
export default class GoText extends React.Component{

	static displayName = 'GoText';

	static propTypes = {
		
    }

    visualLength =(texts)=>  
    {  
            var ruler = document.getElementById('ruler');
            console.log('tu',ruler) ; 
            ruler.innerHTML=texts;  
            return ruler[0].offsetWidth;  
    }  
    

	constructor(props){
		super(props);
    }
    
    componentDidMount(){
        let {children}=this.props;
        //console.log('ggggg',this.visualLength(children.props.children));
    }

	render(){
       
        let {style,children}=this.props;

        
		return (
			<div className='sure-width' style={style}>
                {children}
                <span id="ruler">test</span>  
			</div>
		);
	}
}
