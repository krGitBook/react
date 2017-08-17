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
      this.canImgData = {
        x:0,
        y:0
      }
      this.zoom = 0;

    }
    componentDidMount(){
      const {url,width,height,shearHeight, shearWidth} = this.props;
      var that = this;

      this.ctx = this.myCanvas.getContext("2d");
      this.img = new Image();
      this.img.src = url;
      this.canvasSize(shearWidth||100,shearHeight||100);


      this.moveBox.width = width;
      this.moveBox.height = height;

      this.img.onload = function(event){

        that.imgDataSet(0,0,that.img.width,that.img.height);
        that.trget.addEventListener('mousedown',that.imgMousedown);
        that.trget.addEventListener('mouseup',that.imgMouseup);
        that.trget.addEventListener('mousemove',that.imgMouseMove);
        that.trget.addEventListener('mouseout',that.imgMouseOut);
        that.trget.addEventListener('mouseover',that.imgMouseOver);
        that.canImgSet();
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
      this.ctx.clearRect(0,0,this.myCanvas.width,this.myCanvas.height);
      var x = Math.round(this.canImgData.x);
      var y = Math.round(this.canImgData.y);
      var w = Math.round(this.imgData.w);
      var h = Math.round(this.imgData.h);

      this.ctx.drawImage(this.img,x,y,w,h);
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
      this.imgRender();
      this.canImgSet();
      this.canRander();
     }
    }
    //获取鼠标的坐标
    moveLocation = (event) =>{


      this.mouse = {
          x:event.pageX,
          y:event.pageY
      }
      //设置背景图片的位置
      this.imgSet();
      this.mouseInit = {
        x:event.pageX,
        y: event.pageY
      }

    }
    //背景图片的位置
    imgRender = () =>{
      var x = Math.round(this.imgData.x);
      var y = Math.round(this.imgData.y);
      var w = Math.round(this.imgData.w);
      var h = Math.round(this.imgData.h);
      this.previewImg.style.left = x+"px";
      this.previewImg.style.top = y+"px";
      this.previewImg.style.width =  w+ "px";
      this.previewImg.style.height = h + "px";
    }

    imgSet = () =>{
      var imgData = Object.assign({},this.imgData)
      var mouseInit = Object.assign({},this.mouseInit)

      this.imgData = {
        x: imgData.x + this.mouse.x - mouseInit.x,
        y: imgData.y + this.mouse.y - mouseInit.y,
        w:imgData.w,
        h:imgData.h
      }
    }
    canImgSet = () =>{
      var myCanvas = this.myCanvas.getBoundingClientRect();
      var previewImg = this.previewImg.getBoundingClientRect();
      var zoom = this.zoom;
      this.canImgData = {
        x:previewImg.left - myCanvas.left,
        y:previewImg.top - myCanvas.top ,

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
    addZoom = () =>{
      this.zoom =100;
      var zoom = this.zoom;
      var x = Math.round(this.imgData.x);
      var y = Math.round(this.imgData.y);
      var w = Math.round(this.imgData.w+zoom);
      var h = Math.round(this.imgData.h+zoom);
      this.previewImg.style.left = 0+"px";
      this.previewImg.style.top = 0+"px";
      this.previewImg.style.width =  w+ "px";
      this.previewImg.style.height = h + "px";
      this.imgData.h=h;
      this.imgData.w=w;
      this.imgData.x=x;
      this.imgData.y=y;

      this.canImgSet();
      this.canRander();
    }


    subZoom = () =>{
      this.zoom =-100;
      var zoom = this.zoom;
      var x = Math.round(this.imgData.x);
      var y = Math.round(this.imgData.y);
      var w = Math.round(this.imgData.w+zoom);
      var h = Math.round(this.imgData.h+zoom);
      this.previewImg.style.left = x+"px";
      this.previewImg.style.top = y+"px";
      this.previewImg.style.width =  w+ "px";
      this.previewImg.style.height = h + "px";
      this.imgData.h=h;
      this.imgData.w=w;
      this.imgData.x=x;
      this.imgData.y=y;

      this.canImgSet();
      this.canRander();
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
                className = "mouse-target"
                >
                </div>
                <div className = "img-size">
                  <div className="add" onClick = {this.addZoom}>+</div>
                  <div className="sub" onClick = {this.subZoom}>-</div>
                </div>


                <button onClick = {this.clamp } style = {{position:"absolute"}}>dainji</button>
            </div>
		);

	}

}
