import { Children } from 'react';
import Month from './components/month'

function App() {
  return (
    <div className="App">
      <Month>
        {Children}
      </Month>
    </div>
  );
}

export default App;
