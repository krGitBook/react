import React from 'react';
import { HashRouter, Switch, Route, Link } from 'react-router-dom';
import {Hander} from 'react-ui';
import Routers from './routers'
import './app.css'
export default class App extends React.Component {
  componentDidMount() {

  }
  render() {
    return (
        <HashRouter>
          <Hander>
            <Routers />
          </Hander>
        </HashRouter>
    );
  }
}
