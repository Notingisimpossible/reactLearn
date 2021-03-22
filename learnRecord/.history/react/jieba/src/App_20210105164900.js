import './App.css';

function App() {
  var Jieba = require('node-jieba');
  console.log(Jieba.cut('我来到北京清华大学'));
  return (
    <div className="App">
      hello
    </div>
  );
}

export default App;
