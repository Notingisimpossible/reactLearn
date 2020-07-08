import React from 'react';
import routes from './router/index'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store'

const App = () => {

  return (
    <Provider store={store}>
      <Router>
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
