import React from 'react';
import {
	MoveImage
} from 'react-ui';
import './index.less';

export default class Lyh extends React.Component {

	constructor(props) {
		super(props)
		this.state={
			 fileName:[]
		}
	}

	componentDidMount(){

	}

	componentWillUnmount(){
		this.state={
			 fileName:[]
		}
	}

  onChange=(event)=>{
		let e=event.target;
		let {fileName}=this.state;
		this.setState({
			fileName:fileName.push(e.files[0])
		})
	}

	render() {

		let {fileName}=this.state;

		console.log('value',this.state.fileName);

		return (
				<div style={{marginBottom:"50px"}} className='ui-icon'>

				  <div className='icon-file'>+</div>

					<input
					 type="file"
					 name="file"
					 onChange={this.onChange.bind(this)}
					 multiple/>


					 <div>
					 {
						 fileName.map((item,index)=>{
							  return  <div key={index} className='file-name'>{item.name}</div>
						 })
					 }
					 </div>

				</div>
	   );
	}
}
