import React from 'react';
import '../index.less';
  
export default class Steps extends React.Component {

	constructor(props) {
        super(props)
        this.state={
			childs:[]
		}
	}

	componentDidMount(){
		let {children}=this.props;
		var childs=[].concat(children);
		var innerChilds=[];
		childs.map((item,index)=>{
			if(item.type=='step'){
				innerChilds.push(item.props);
			}
		})
		this.setState({
			childs:innerChilds
		})
	}
    

	render() {

		let {current}=this.props;
		let {childs}=this.state;

		return (
				<div className='ui-steps'>
            {
							childs.map((item,index)=>{
								var backStyle='';
								var colorStyle='';
								var lineStyle='';
								if(current==index){
									backStyle='current-circle-style';
									colorStyle='current-color-style';
								}else if(current>index){
									backStyle='next-circle-style';
									lineStyle='line-step-style';
								}
								return (
									<div key={index} className='steps-inner' style={index==childs.length-1?{flexBasis:'auto'}:{}}>
												<div className={`steps-circle ${backStyle}`}>{current>index?'':index+1}</div>
												<div className={`steps-text ${colorStyle}`}>{item.title}</div>
												{index!=childs.length-1&&<div className='steps-line'></div>}
												{index!=childs.length-1&&<div className={`steps-line-left ${lineStyle}`}></div>}
									</div>)
							})
					}
			    </div>
	   );
	}
}
