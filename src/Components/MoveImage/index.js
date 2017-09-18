import React from 'react';
import './index.less'
import imageData from './images/demo.jpg'
export default class MoveImage extends React.Component {

    componentDidMount(){
        this.moveImage.addEventListener("move",this.transform,false);
    }
    transform = (event) =>{
        
    }

	render() {
        const {children,className} = this.props;

		return (
            
            <div className = "ui-move-image">
                <img 
                 ref = {(ref)=>{
                    this.moveImage = ref;
                 }}
                 src={imageData} style = {{width:500}}/>
            </div>
		);

	}

}
