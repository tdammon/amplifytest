import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import {isMobile, isBrowser} from 'react-device-detect';



class App extends Component {

  render() {
    if(isMobile){
      return(
      <Router>
        {/* <Switch>
        <Route
          exact
          path="/"
          component={Mobile}
        />
        <Route
          exact
          path="/services"
          component={MobileServices}
        />  
        <Route
          exact
          path="/designs"
          component={DesignView}
        />  
        </Switch> */}
      </Router>)
    } else if(isBrowser) {
      return (
        <Router>
          {/* <Switch>
          <Route
              exact
              path="/"
              component={Desktop}
            />
          </Switch> */}
        </Router>
      );
    }
    
  }
}

export default (App);