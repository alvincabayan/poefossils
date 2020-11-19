import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import axios from 'axios';

axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded, application/json' 
axios.defaults.headers.common.crossDomain = true 
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*' 
axios.defaults.headers.common['Accept'] = 'application/json, text/plain'


ReactDOM.render(
    <App />,
    document.querySelector("#root")
);