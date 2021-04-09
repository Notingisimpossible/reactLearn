import React from 'react';
import routes from './router/index'
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store'

const App = () => {

  return (
    <Provider store={store}>
      <Router>
      <Route exact path="/" render={() => <Redirect to="/web/home" />} />
      <Route exact path="/web" render={() => <Redirect to="/web/home" />} />
      {
        routes.map((item) => (
          <Route key={item.id} path={item.path} component={item.component} />
        ))
      }
      </Router>
    </Provider>
  )
}

export default App;
