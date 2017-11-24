import React from 'react';
import {
	Menu
} from "react-ui"
export default class MenuDemo extends React.Component{
    constructor(props, context) {
        super(props, context);
        
    }
    
    componentDidMount = () => {
      
    }
    

    render() {
        return (
            <div style = {{height:2000}}>
                
               <Menu 
                    title = "字段列表"
                    style = {{width:200}}
                    subHeight="400"
               >
                   <div>opention</div>
                   <div>opention</div>
                   <div>opention</div>
                   <div>opention</div>
                   <div>opention</div>
               </Menu>
            </div>
        );
    }
}
