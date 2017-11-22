import React from 'react';
import {
	Tooltip
} from "react-ui"
export default class TooltipDemo extends React.Component{
    constructor(props, context) {
        super(props, context);
        
    }
    
    componentDidMount = () => {
      
    }
    

    render() {
        return (
            <div style = {{height:2000}}>
                
                <Tooltip title = "经常遇到需要PropTypes验证的时候，忘记了这个值该是什么经常遇到需要PropTypes验证的时候，忘记了这个值该是什么经常遇到需要PropTypes验证的时候，忘记了这个值该是什么">
                    555555
                </Tooltip> 
                <Tooltip 
                    maxLength = "500"
                    title = "经常遇到需要PropTypes验证的时候，忘记了这个值该是什么经常遇到需要PropTypes验证的时候，忘记了这个值该是什么经常遇到需要PropTypes验证的时候，忘记了这个值该是什么">
                    555555
                </Tooltip> 
            </div>
        );
    }
}
