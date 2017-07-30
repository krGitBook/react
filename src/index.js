import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'mobx-react';
import store from './Mobx'
import './publicStyle/init.less'

import App from './App';


ReactDOM.render(
    <Provider {...store}>
         <App/>
     </Provider>
, document.getElementById('root'));
