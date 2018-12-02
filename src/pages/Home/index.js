
import React from 'react';


class Home extends React.Component {
	constructor(props,context){
		super(props, context);
		this.state = {};
	}
	componentDidMount() {
		let data = {
			id:3,
			name:5
		};
		let url = `/api/{id}/mm/{name}`
		console.log(getParamsFarmt(url,data))

	}
	handleClick = (e) => {
		console.log('click ', e);
	}

	render() {

		return (
			<div>首页</div>
		);
	}
}
export default Home;