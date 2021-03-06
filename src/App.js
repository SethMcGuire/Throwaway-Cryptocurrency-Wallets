import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';


//components
import Homepage from './components/pages/homePage';
import Litecoin from './components/pages/litecoin';
import Dogecoin from './components/pages/dogecoin';
import Dash from './components/pages/dash';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">


        <Route exact path='/' component={Homepage} />
        <Route exact path='/litecoin' component={Litecoin} />
        <Route exact path='/dogecoin' component={Dogecoin} />
        <Route exact path='/dash' component={Dash} />

      </div>
      </Router>
    );
  }
}

(function() {
  var cors_api_host = 'cors-anywhere.herokuapp.com';
  var cors_api_url = 'https://' + cors_api_host + '/';
  var slice = [].slice;
  var origin = window.location.protocol + '//' + window.location.host;
  var open = XMLHttpRequest.prototype.open;
  XMLHttpRequest.prototype.open = function() {
      var args = slice.call(arguments);
      var targetOrigin = /^https?:\/\/([^\/]+)/i.exec(args[1]);
      if (targetOrigin && targetOrigin[0].toLowerCase() !== origin &&
          targetOrigin[1] !== cors_api_host) {
          args[1] = cors_api_url + args[1];
      }
      return open.apply(this, args);
  };
})();

export default App;
