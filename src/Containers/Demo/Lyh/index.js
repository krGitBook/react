import React from 'react';
import {
	ImageShear
} from 'react-ui';
import imgData from './images/demo.jpg';

export default class Lyh extends React.Component {

	componentDidMount(){

		var data='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAABdElEQVR4Xu3VQREAIQzF0KKM4l/Uro13CAoyyfxy3nvf9BgDZ3cLwuSYOffegkhBWghUY2Y6WVaPgmA9ClIQzQDG0x9SEMwAhtNCCoIZwHBaSEEwAxhOCykIZgDDaSEFwQxgOC2kIJgBDKeFFAQzgOG0kIJgBjCcFlIQzACG00IKghnAcFpIQTADGE4LKQhmAMNpIQXBDGA4LaQgmAEMp4UUBDOA4bSQgmAGMJwWUhDMAIbTQgqCGcBwWkhBMAMYTgspCGYAw2khBcEMYDgtpCCYAQynhRQEM4DhtJCCYAYwnBZSEMwAhtNCCoIZwHBaSEEwAxhOCykIZgDDaSEFwQxgOC2kIJgBDKeFFAQzgOG0kIJgBjCcFlIQz'+
	'ACG00IKghnAcFpIQTADGE4LKQhmAMNpIQXBDGA4LaQgmAEMp4UUBDOA4bSQgmAGMJwWUhDMAIbTQgqCGcBwWkhBMAMYTgspCGYAw2khBcEMYDgtpCCYAQznB8pGrwFh9gAuAAAAAElFTkSuQmCC'
	
		this.urltoFile(data, 'a.png', 'image/png')
 	 .then(function(file){
 	     console.log(file);
 	 })
	}

 urltoFile=(url, filename, mimeType)=>{
    return (fetch(url)
        .then(function(res){return res.arrayBuffer();})
        .then(function(buf){return new File([buf], filename, {type:mimeType});})
    );
}



	render() {

		return (
				<div style={{marginBottom:"50px"}}>
					<ImageShear url = {imgData} height ="200" width = "200"/>
				</div>
	   );
	}
}
