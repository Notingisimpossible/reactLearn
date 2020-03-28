import React from 'react'
import Header from './common/header'
import {Provider} from 'react-redux'
import store from './store'
import {BrowserRouter, Route} from 'react-router-dom'
import Home from './pages/home'

function App() {
  return(
    <Provider store={store}>
      <BrowserRouter>
        <Header/>
        <Route exact path='/' component={Home}></Route>
      </BrowserRouter>
    </Provider>
  )
}

export default App