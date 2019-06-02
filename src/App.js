import React, { Component } from 'react';
import store from './store'
import {Provider} from 'react-redux'
import { Route, BrowserRouter, Router, browserHistory } from 'react-router-dom'
import {  IndexRoute } from 'react-router'

import Main from './components/Main'
import Single from './components/Single'
import Photogrid from './components/Photogrid'

const router = (
    <Router history={browserHistory}>
      <Route path="/" exact component={Main} >
        <IndexRoute component={Photogrid}></IndexRoute>
        <Route path="/view/:postId" component={Single}></Route>
      </Route>
    </Router>
)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
        <router />
         
        </div>
      </Provider>
    );
  }
}

export default App;

// <Main />
// <Single />
// <Photogrid />