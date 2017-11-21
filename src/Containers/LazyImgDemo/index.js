import React from 'react';
import {
	LazyImg
} from "react-ui"
export default class LazyImgDemo extends React.Component{
    constructor(props, context) {
        super(props, context);
        this.imgElems = [];
        this.demoDetail = '';
    }
    
    componentDidMount = () => {
        this.demoDetail = this.demo.getBoundingClientRect();
        this.imgLoad();
        this.demo.addEventListener('scroll',this.imgLoad);
    }
    imgLoad = () =>{
       for (let index = 0; index <100; index++) {
           const element = this.imgElems[index].lazyImg;
           let elemDetail = element.getBoundingClientRect();
         
           if(this.demoDetail.bottom >elemDetail.top){
           
                let src = element.getAttribute('data-actualsrc');
                let oldSrc = element.getAttribute('src');
                let filter =  element.style.filter;
                if(oldSrc!=src){
                     element.setAttribute('src',src);
                     element.style.height = "auto";
                    
                     
                
                }
                if(this.demoDetail.bottom >elemDetail.top +300 && filter != "blur(0px)"){
                    element.style.filter =  "blur(0px)";
                 }

           }
           
       }
    }
    allImgRender = (elem) =>{
        
        var arr = []
        for (let i = 0; i < 100; i++) {
           
             arr.push(
                <LazyImg 
                    key = {i} 
                    ref = {(ref) =>{
                        this.imgElems[i] = ref;
                    }}
                    listenId = {elem} 
                />
            )
            
        }
        return arr;
    }

    render() {
        return (
            <div 
                id = "lazyImgDemo"
                ref = {
                    (ref)=>{
                        this.demo = ref;
                    }
                } 
            style = {{height:700,width:"100%",overflow:'auto',textAlign:'center'}}>
                {this.allImgRender("lazyImgDemo")}
            </div>
        );
    }
}
