import React from 'react';
import './index.less';
import {
  krAnimation
} from 'Utils';
export default class ButtonBase extends React.Component {
	static displayName = 'ButtonBase';

	static propTypes = {
	  children: React.PropTypes.node,
	  title: React.PropTypes.node,
	  subHeight: React.PropTypes.string,
	  style: React.PropTypes.object
	}

  constructor(props,context){
    super(props, context);
    this.state ={
        baseHtml : [],
    }
    this.key = 0;
  }


  baseClick = (event) =>{
    const elem = event.target;
    let {baseHtml} = this.state;
    let radii = 100;
    let content = elem.innerHTML;
    baseHtml.push(this.baseRender(radii));
    /*纯js操作
     elem.innerHTML = content + this.baseRender(); 
     krAnimation('.base-html',{top:0,left:0,width:0,height:0},{top:-radii,left:-radii,height:2*radii,width:2*radii})
     */
    
  }
  baseRender = (radii) =>{
    //移动的距离
    let moveDistance = Math.ceil(radii/2)
    let baseLength = radii * 2;
    return (<div className = "base-html" key = {this.key++} style = {{top:-radii,left:-radii,width:baseLength,height:baseLength}}></div>)
    // return '<div class = "base-html"></div>'
  }


  render() {
    const {children} = this.props;
    const {baseHtml} = this.state;


     return (

       <div className = "ui-buttton-base" onClick = {this.baseClick}>
         {children}
        
       </div>
     )
   }

}
