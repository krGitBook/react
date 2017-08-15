import React from 'react';
import {
	ImageShear
} from 'react-ui';
import imgData from './images/demo.jpg';
console.log(imgData,"PPPPPP")

export default class Lyh extends React.Component {
	render() {

		return (
				<div style={{marginBottom:"50px"}}>
					<ImageShear url = {imgData} height ="500" width = "500"/>
				</div>
	   );
	}
}
