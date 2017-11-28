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
						  if(current==index){
							backStyle='current-circle-style'
						  }else if(current>index){
							backStyle='next-circle-style'
						  }
						  return (
						  <div key={index} className='steps-inner' >
						    <div className={`steps-circle ${backStyle}`}>{current>index?'':index+1}</div>
						    <div className='steps-text'>{item.title}</div>
							<div className='steps-line'></div>
						  </div>)
					   })
					}
			    </div>
	   );
	}
}
