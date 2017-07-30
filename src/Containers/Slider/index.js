import React from 'react';
import { HashRouter, Switch, Route, Link } from 'react-router-dom';
import {Router} from 'react-config';
export default class Slider extends React.Component{

	  render() {

      console.log(Router,"LLLLL")
	    return (
        <div>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/news">About</Link></li>
        </div>
	    );
	  }
}
