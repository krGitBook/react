import React from 'react';
import { HashRouter, Switch, Route, Link } from 'react-router-dom';
import {
  Welcome,
  Initialize,
  Undefined,
  Lyh
} from 'react-pages';
export default class DevRouter extends React.Component{

	  render() {

	    return (
        <div>

          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/news">About</Link></li>
          </ul>

          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route path="/news" component={Initialize} />
            <Route path="/demo/lyh" component={Lyh} />
            <Route component={Undefined} />
          </Switch>

        </div>
	    );
	  }
}
