import React from 'react';
import './index.less'

export default class ImageShear extends React.Component {
    constructor(props,context){
      super(props, context);
      this.isDown = false;
    }
    componentDidMount(){
      this.bgImg.addEventListener('mousedown',this.imgMousedown);
      this.bgImg.addEventListener('mouseup',this.imgMouseup);
      this.bgImg.addEventListener('mousemove',this.imgMouseMove);
      this
    }
    imgMousedown = (event) =>{
      this.isDown = true;
      console.log(this.moveRelWindow(event),"PPPPPP")

    }
    imgMouseup = (event) =>{
     this.isDown = false;
    }
    imgMouseMove = (event) =>{
     
    }
    moveRelWindow = (event) =>{
      return {
        x:event.clientX,
        y:event.clientY,
      }
    }

	render() {
    const {
      children,
      className,
      url,
      shearHeight,
      shearWidth
    } = this.props;

		return (

            <div className = {"image-shear "+className||''}>
              <div className = "img-select-box"
                ref = {(ref) =>{
                  this.imgSelectBox = ref;
                }}
              >
                <img 
                  ref = {(ref) =>{
                    this.bgImg = ref;
                  }}
                  src = {url || ''} 
                />
                <div
                  className = "move-box"
                  ref = {(ref) =>{
                    this.moveBox = ref;
                  }}
                  style = {{width:shearWidth||100,height:shearHeight||100}}
                ></div>
              </div>

              <div 
                className = "move-box"
                style = {{width:shearWidth||100,height:shearHeight||100}}>
                <img 
                  className = "preview-box"
                  ref = {(ref)=>{
                    this.previewImg = ref;
                  }} 
                  src={url || ''}
                />
              </div>
            </div>
		);

	}

}
