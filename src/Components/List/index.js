import React from 'react';
import './index.less'
import Paper from '../Paper'
export default class List extends React.Component {

    componentDidMount(){

    }


	render() {
        const {children,className} = this.props;

		return (
            
            <div className = {"ui-list "+className||''}>
                {children}
            </div>
		);

	}

}
