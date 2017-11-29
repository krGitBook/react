import React from 'react';
import './index.less'
export default class Paper extends React.Component {

    componentDidMount(){

    }
    
    onClick=()=>{
        const {onClick}=this.props;
        onClick && onClick();
    }

	render() {
        const {children,className} = this.props;

		return (
            <div className = {"ui-paper "+className } onClick={this.onClick}>
              {children}
            </div>
		);

	}

}
