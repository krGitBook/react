import React from 'react';
import './index.less';
import {
  krAnimation
} from 'Utils';
import WaterWave from 'water-wave';
import 'water-wave/style.css';
export default class ButtonBase extends React.Component {
	static displayName = 'ButtonBase';

	// static propTypes = {
	//   children: React.PropTypes.node,
	//   title: React.PropTypes.node,
	//   subHeight: React.PropTypes.string,
	//   style: React.PropTypes.object
	// }

  constructor(props,context){
    super(props, context);
    this.state ={
      radii : 0,
    }
    this.key = 0;
  }


  baseClick = (event) =>{
    const elem = event.target;
    let {baseHtml} = this.state;
    let radii = 100;
    // baseHtml.push(this.baseRender(radii));
    this.setState({
      radii,
    })
    setTimeout(() => {
      
    }, 100);
  }
  setBaseStyle = (left,top,width,height) =>{
    this.base.style.left = left + 'px';
  }
  // baseRender = (radii) =>{
  //   //移动的距离
  //   let moveDistance = Math.ceil(radii/2)
  //   let baseLength = radii * 2;
  //   return (<div className = "base-html" key = {this.key++} style = {{top:-radii,left:-radii,width:baseLength,height:baseLength}}></div>)
  // }


  render() {
    const {children} = this.props;
    const { baseHtml, radii} = this.state;
    let baseLength = radii * 2;     

    return (
      <div>
        <div className="btn">
          按钮
         <WaterWave color="#fff" duration={800} />
        </div>
      </div>
    )
     /*return (

       <div className = "ui-buttton-base" style = {{height:100,width:100,background:'red',overflow:'hidden'}} onClick = {this.baseClick}>
        {children}    
        <div 
          ref = {(ref)=>{
            this.base = ref;
          }}
          className="base-html" 
          style={{ top: -radii, left: -radii, width: baseLength, height: baseLength }}></div>
       </div>
     )*/
   }

}
