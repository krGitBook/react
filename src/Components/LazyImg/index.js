import React from 'react';
import './index.less'
import {addEvent} from 'Utils'
export default class LazyImg extends React.Component {

    componentDidMount(){
        const {listenId} = this.props;
        // let listenElem = document.getElementById(listenId);
        // listenElem.addEventListener('scroll',this.imgLoad)
       
    }

    imgLoad = (event) =>{
        // console.log(event,"000000000")

    }
	render() {
        const {children,className} = this.props;

		return (
            
            <div 
                className = "ui-lazy-img-box" 
                
            >
                <img 
                    ref = {(ref)=>{
                        this.lazyImg = ref;
                    }}
                    
                    src = "" data-actualsrc = "https://pic3.zhimg.com/50/8bd81ec34dcada835e2963cda555c83e_hd.jpg" />
            </div>
		);

	}

}
