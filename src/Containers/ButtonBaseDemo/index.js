import React from 'react';
import {
    ButtonBase,
    Buttons
} from "react-ui"
export default class ButtonBaseDemo extends React.Component{
    constructor(props, context) {
        super(props, context);
        
    }
    
    componentDidMount = () => {
      
    }

    btnClick=()=>{
        console.log('123');
    }
    
    
    render() {
        return (
            <div style = {{height:2000}}>
                
               <ButtonBase >
                    <div style = {{width:100,height:100,background:"red"}}>hhhhhhh</div>
               </ButtonBase>


                <div style={{marginTop:'30px'}}>
                  <Buttons label='redTheme'  onClick={this.btnClick} theme='red'/>
                  <Buttons label='primary'  onClick={this.btnClick}/>
                  <Buttons label='disabed'  theme='red' type='disabled'/>
                  <Buttons label='disabed' type='disabled'/>
                </div>


            </div>
        );
    }
}
