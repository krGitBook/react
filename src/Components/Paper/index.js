import React from 'react';
import './index.less'
export default class Paper extends React.Component {

    componentDidMount(){

    }


	render() {
        const {children,className} = this.props;

		return (
            <div className = {"ui-paper "+className }>
              {children}
            </div>
		);

	}

}
