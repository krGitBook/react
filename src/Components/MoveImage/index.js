import React from 'react';
import './index.less'
import imageData from './images/demo.jpg'
export default class MoveImage extends React.Component {

    componentDidMount(){
        this.moveImage.addEventListener("mousemove",this.transform,false);
    }
    transform = (event) =>{
        var moveData = this.moveImage.getBoundingClientRect();
        var halfX = moveData.width/2,halfY = moveData.height/2;
        var contentX = moveData.left + halfX;
        var contentY = moveData.top + halfY;
        var mouseX = event.pageX;
        var mouseY = event.pageY;
        var ageX = 30*(mouseX - contentX )/halfX;
        var ageY = 30*(contentY - mouseY)/halfY;
        this.moveImage.style.transform= `perspective(600px) rotateY(${ageX}deg) rotateX(${ageY}deg)`;
        
    }

	render() {
        const {children,className} = this.props;

		return (
            
            <div className = "ui-move-image">
                <img 
                 className="move-transform"
                 ref = {(ref)=>{
                    this.moveImage = ref;
                 }}
                 src={imageData} style = {{width:500}}/>
            </div>
		);

	}

}
