import React from 'react';
import {
	ImageShear,
	ImageClamp
} from 'react-ui';
import imgData from './images/demo.jpg';
console.log(imgData,"PPPPPP")

export default class Lyh extends React.Component {
	render() {

		return (
				<div style={{marginBottom:"50px"}}>
					<ImageClamp />
				</div>
	   );
	}
}
