import React from 'react';
import './index.less'

export default class ImageShear extends React.Component {
    constructor(props,context){
      super(props, context);
      this.state = {
        data:''
      }
      this.isDown = false;
      this.imgData = {
        x:0,
        y:0,
        w:0,
        h:0
      }
      this.img = null;
      this.mouse = {
        x:0,
        y:0,
      }
      this.mouseInit = {
        x:0,
        y:0,
      }
      //预览图片相对于框的位置
      this.showImgData = {
        x:0,
        y:0
      }
    
    }
    componentDidMount(){
      const {url,width,height,shearHeight, shearWidth} = this.props;
      var that = this;
     
      this.ctx = this.myCanvas.getContext("2d");
      this.img = new Image();
      this.img.src = url;
      this.canvasSize(shearWidth||100,shearHeight||100);
      this.imgDataSet(0,0,this.img.width,this.img.height);
      this.moveBox.width = width;
      this.moveBox.height = height;
      
      this.img.onload = function(event){
        that.trget.addEventListener('mousedown',that.imgMousedown);
        that.trget.addEventListener('mouseup',that.imgMouseup);
        that.trget.addEventListener('mousemove',that.imgMouseMove);
        that.trget.addEventListener('mouseout',that.imgMouseOut);
        that.trget.addEventListener('mouseover',that.imgMouseOver)
        that.canRander();
      }
      
    }
    //设置图片的数据
    imgDataSet = (x,y,w,h) =>{
      this.imgData = {
        x:x,
        y:y,
        w:w,
        h:h
      }

    }
    //设置canvas的大小 
    canvasSize = (w,h) =>{
      this.myCanvas.width = w;
      this.myCanvas.height = h;
    }

    //canvas绘制
    canRander = () =>{
      this.ctx.clearRect(0,0,this.myCanvas.width,this.myCanvas.height)
      console.log(this.showImgData.y)
      this.ctx.drawImage(this.img,this.showImgData.x,this.showImgData.y,this.imgData.w,this.imgData.h);
    } 
    //鼠标按下
    imgMousedown = (event) =>{
      this.isDown = true;
      this.mouseInit = {
        x:event.pageX,
        y:event.pageY
      }
    }
    //鼠标松开
    imgMouseup = (event) =>{
      this.isDown = false;
      this.mouseInit = {
        x:event.pageX,
        y:event.pageY
      }

    }
    //鼠标离开canvas
    imgMouseOver = (event) =>{
      this.mouseInit = {
        x:event.pageX,
        y:event.pageY
      }
      
    }
    //鼠标离开cannvas
    imgMouseOut = (event) =>{
      this.isDown = false;
      this.mouseInit = {
        x:event.pageX,
        y:event.pageY
      }
    
    }
    //鼠标移动
    imgMouseMove = (event) =>{
     if(this.isDown){
      this.moveLocation(event);
      this.canRander();
      this.showImgSet();
      this.showImgRender();
     }
     
    }
    //获取鼠标的坐标
    moveLocation = (event) =>{
     
     
      this.mouse = { 
          x:event.pageX,
          y:event.pageY
      }
      var imgData = Object.assign({},this.imgData)
      var mouseInit = Object.assign({},this.mouseInit)
      //设置图片的位置
      this.imgData = {
        x: imgData.x + event.pageX - mouseInit.x,
        y: imgData.y + event.pageY - mouseInit.y,
        w:imgData.w,
        h:imgData.h
      }
      var isSetInit = (Math.abs(event.pageX - mouseInit.x)>=1 || Math.abs(event.pageY - mouseInit.y)>=1) ? true : false;
    
        this.mouseInit = {
          x:event.pageX,
          y: event.pageY
        }
      
    }
    //预览图片的位置
    showImgRender = () =>{
      console.log(this.showImgData.x,"PpP");
      this.previewImg.style.left = this.imgData.x+"px";
      this.previewImg.style.top = this.imgData.y+"px";
    }
    showImgSet = () =>{
      var myCanvas = this.myCanvas.getBoundingClientRect();
      var moveBox = this.moveBox.getBoundingClientRect();
      this.showImgData = {
        x:(moveBox.left+this.imgData.x)- myCanvas.left,
        y:(moveBox.top+this.imgData.y)- myCanvas.top,
      }

    }
    clamp = () =>{
      const {url,width,height} = this.props;
      var moveBox = this.moveBox.getBoundingClientRect();
     
      var imgdata = this.ctx.getImageData(moveBox.left, moveBox.top,width,height);
      this.setState({
        data:this.myCanvas.toDataURL()
      })
    }

    

	render() {
    const {
      children,
      className,
      url,
      radius,
      height,
      width,
    } = this.props;
    const {data} = this.state;

		return (

            <div 
              className = {"image-shear "+className||''}
             
            >
                
                <div className = "mask"></div>
                <div 
                  className = "move-box"
                  ref = {(ref) =>{
                    this.moveBox = ref;
                  }}
                  style = {{width:width||500,height:height||500}}>
                  <img 
                    className = "preview-box"
                    ref = {(ref)=>{
                      this.previewImg = ref;
                    }} 
                    src={url || ''}
                  />
                </div>
                <canvas
                  ref = {(ref) =>{
                    this.myCanvas = ref;
                  }}
                  style = {{borderRadius:radius||0}}
                
                >
                </canvas>
                <div 
                ref = {(ref)=>{
                  this.trget = ref;
                }}
                className = "mouse-target"></div>
                
              
                <button onClick = {this.clamp } style = {{position:"absolute"}}>dainji</button>
            </div>
		);

	}

}
