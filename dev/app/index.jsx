'use strict';
require(__dirname + '/../sass/home/base-home.scss');

import {Router, Route, hashHistory} from 'react-router';

const React = require('react');
const ReactDOM = require('react-dom');

var Header = require('./Header.jsx');
var Landing = require('./landing.jsx');


class App extends React.Component {
    render() {
        return <Header/>
    }
}
//
ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={App}/>
        <Route path="/about" component={App}/>
        <Route path="/landing" component={Landing}/>

    </Router>
), document.getElementById('app'));
