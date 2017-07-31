import React from 'react';
import './index.less'
export default class Logo extends React.Component {

    componentDidMount(){

    }


	render() {
        const {children,className} = this.props;

		return (
            
            <div className = "ui-logo">
             KRGITBOOK
            </div>
		);

	}

}
