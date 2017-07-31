import React from 'react';
import './index.less'
export default class Search extends React.Component {

    componentDidMount(){

    }


	render() {
        const {children,className,iconName,float} = this.props;

		return (
            
            <div className = "ui-search-box" style = {{float:float}}>
                <span className = {"ui-search-icon "+iconName}></span>
                <input className = {"ui-search "+className} type="text"/>
            </div>
		);

	}

}
