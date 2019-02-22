import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import rootReducer from './redux/reducer';

const store = createStore(rootReducer)

import 'style/init.less'

import App from './App';
ReactDOM.render(
    <Provider store={store}>
    <App/>
    </Provider>
, document.getElementById('root'));
