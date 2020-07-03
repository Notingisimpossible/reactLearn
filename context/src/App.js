import React,{useState} from 'react';
import './App.css';
import Child  from './pages/child/index'
import ContextColor from './utils/context'

function App() {
  var [count,setCount] = useState(1)
  const addCount = () =>{
    setCount(count = count+1)
  }
  return (
    <div className="App">
      <ContextColor.Provider value={{count,addCount}}>
        <Child/>
      </ContextColor.Provider>
    </div>
  );
}

export default App;
