import React from 'react'
import { Route, BrowserRouter as Router, Link } from 'react-router-dom'
import styles from './App.less'
import Copy from './components/copy/index.js'

function App() {
  return (
    <Router>
      <div className={styles.header}>
        <Link to="/copy"><button>copy组件</button></Link>
      </div>
      <Route path="/copy" component={Copy}></Route>
    </Router>
  );
}

export default App;
