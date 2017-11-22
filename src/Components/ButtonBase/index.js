import React from 'react';
import './index.less'
export default class CheckBox extends React.Component {
	static displayName = 'Menu';

	static propTypes = {
	  children: React.PropTypes.node,
	  title: React.PropTypes.node,
	  subHeight: React.PropTypes.string,
	  style: React.PropTypes.object
	}

  constructor(props,context){
  	super(props, context);
  }
  render() {
    const {children} = this.props;
     

     return (

       <div>
         {children}
       </div>
     )
   }

}
