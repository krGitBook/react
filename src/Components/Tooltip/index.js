import React from 'react';
import './index.less';
export default class Tooltip extends React.Component{

	static displayName = 'Tooltip';

	// static propTypes = {
    //     children: React.PropTypes.node,
    //     title: React.PropTypes.string,
    //     maxLength: React.PropTypes.number,
	// }

	constructor(props){
		super(props);
    }
    componentDidMount () {
       let _this = this;
       this.text.onmouseover = function(){
            _this.tipRender();
			_this.tip.style.visibility = 'visible';
		}
		this.text.onmouseout = function(){
			_this.tip.style.visibility = 'hidden';
		}
    }   
    //判断显示的位置(上下位置变换)
    judgmentPosition = (textDetail,tipDetail) =>{
        if(textDetail.top < tipDetail.height + 5){
            return "bottom";
        }
        return "top";
    }
    //气泡显示出来
    tipRender = () =>{

        const textDetail = this.text.getBoundingClientRect();
        const tipDetail = this.tip.getBoundingClientRect();
        let isTop = this.judgmentPosition(textDetail,tipDetail) == 'top';
        let text_refer_posiyion = {
            x: textDetail.left + Math.ceil(textDetail.width)/2,
            y: isTop ? textDetail.top : textDetail.bottom,
        };
        let tip_LT_position = {
            x:text_refer_posiyion.x - Math.ceil(tipDetail.width)/2,
            y:isTop ? (text_refer_posiyion.y - tipDetail.height - 5):(text_refer_posiyion.y + 5)
        };
        if(tip_LT_position.x < 0){
            tip_LT_position.x = 5
        }
        if(isTop){
            this.triangle.className = 'triangle triangle-top'
        }else{
            this.triangle.className = 'triangle triangle-bottom'            
        }
        this.tip.style.top = tip_LT_position.y + 'px';
        this.tip.style.left = tip_LT_position.x + 'px';
        this.triangle.style.top = text_refer_posiyion.y - 10 + 'px';
        this.triangle.style.left = text_refer_posiyion.x + 'px';

    }


	render(){

		let {children,title,maxLength} = this.props;

		return (
			<div
                className = "ui-tool-tip"
                
                
            >
                <div
                    className = "text"
                    ref = {
                        (ref) =>{
                            this.text = ref;
                        }
                    }
                >
                    {children}
                </div>
                <div 
                    className = "tip"
                    ref = {(ref)=>{
                        this.tip = ref;
                    }}
                    style = {{maxWidth:maxLength||800}}
                >
                    {title}
                    <div 
                        ref = {(ref)=>{
                            this.triangle = ref;
                        }}
                        className = "triangle triangle-top"></div>
                </div>
			</div>
		);
	}
}






