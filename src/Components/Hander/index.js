import React from 'react';
import './index.less'
import Paper from '../Paper'
import GitHub from '../GitHub'
import Search from '../Search'

export default class Hander extends React.Component {

    componentDidMount(){

    }


	render() {
        const {title} = this.props;

		return (
            
            
                <Paper className ="ui-hander">
                 <span>{title}</span>
                 <GitHub />
                 {/*<Search float ="right"/>*/}
                 
                </Paper>

           
		);

	}

}
