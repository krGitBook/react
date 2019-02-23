import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './redux/reducer';
import App from './App';
import 'style/init.less'
const store = createStore(rootReducer)

ReactDOM.render(
    <Provider store={store}>
    <App/>
     </Provider>
, document.getElementById('root'));
