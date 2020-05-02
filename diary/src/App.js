import React from 'react';
import Home from './Home'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Detail from './Detail';
import Edit from './Edit';

const RouterMap = () => {
  return <Router>
    {/* Switch 和 js中的switch差不多 ，只做一次匹配，匹配成功就不再往下匹配*/}
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/detail">
        <Detail />
      </Route>
      <Route path="/edit">
        <Edit />
      </Route>
    </Switch>
  </Router>
}

export default RouterMap;
