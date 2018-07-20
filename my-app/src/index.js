/*前台react 的框架结构*/
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css'
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {reducers} from './works/reactRedux/reducers';
import App from './works/routers/App'       //路由文件
import {BrowserRouter as Router} from 'react-router-dom';
import thunk from 'redux-thunk';


const store=createStore(reducers,applyMiddleware(thunk));



ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>
    ,
    document.getElementById('root')
);

if(module.hot){
    module.hot.accept();
}

