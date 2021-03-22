import Month from './components/month'

function App() {
  return (
    <div className="App">
      <Month>
        {this.children}
      </Month>
    </div>
  );
}

export default App;
