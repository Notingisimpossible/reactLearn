import React from 'react'
import Header from './common/header'
import {Provider} from 'react-redux'
import store from './store'
import {BrowserRouter, Route} from 'react-router-dom'
import Home from './pages/home'
import Boiling from './pages/boiling'
import Topic from './pages/topic'
import Brocher from './pages/brocher'
import Activity from './pages/activity'

function App() {
  return(
    <Provider store={store}>
      <BrowserRouter>
        <Header/>
        <Route exact path='/' component={Home}></Route>
        <Route path='/pins' component={Boiling}></Route>
        <Route path='/topics' component={Topic}></Route>
        <Route path='/books' component={Brocher}></Route>
        <Route path='/event' component={Activity}></Route>
      </BrowserRouter>
    </Provider>
  )
}

export default App