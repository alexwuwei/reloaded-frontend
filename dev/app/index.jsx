'use strict';
require(__dirname + '/../sass/home/base-home.scss');

const React = require('react');
const ReactDOM = require('react-dom');

var Header = require('./Header.jsx');

class App extends React.Component {
  render() {
    return <Header/>
  }
}

ReactDOM.render(
  <App/>, document.getElementById('app'));
