import React from 'react';
import {
	ButtonBase
} from "react-ui"
export default class ButtonBaseDemo extends React.Component{
    constructor(props, context) {
        super(props, context);
        
    }
    
    componentDidMount = () => {
      
    }
    

    render() {
        return (
            <div style = {{height:2000}}>
                
               <ButtonBase >
                    <div style = {{width:100,height:100,background:"red"}}>hhhhhhh</div>
               </ButtonBase>
            </div>
        );
    }
}
