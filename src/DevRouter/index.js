import React from 'react';
import { HashRouter, Switch, Route, Link } from 'react-router-dom';
import {
  Welcome,
  Initialize,
  Undefined,
  Lyh,
  Dfa,
  Slider
} from 'react-pages';
import {
	Paper,
  List,
  Logo,
  Hander
} from "react-ui"
import './index.less'
import {Router} from 'react-config';
export default class DevRouter extends React.Component{

	  render() {
      console.log(Router,"KKK")
	    return (
        <div className = "ui-react-box">
          
          
            <Paper className = "ui-react-left">
              <Logo></Logo>
              <List><Link to="/">Home</Link></List>
              <List><Link to="/news">About</Link></List>
            </Paper>
         
          <div className = "ui-react-content"> 
            <Hander title = "首页"/>
            <div className = "ui-react-right-content">
              <Switch>
                <Route exact path="/" component={Welcome} />
                <Route path="/news" component={Initialize} />
                <Route path="/demo/lyh" component={Lyh} />
                <Route path="/demo/dfa" component={Dfa} />
                <Route component={Undefined} />
              </Switch>
            </div>
          </div>
        </div>
	    );
	  }
}
